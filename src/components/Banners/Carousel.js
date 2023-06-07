import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import {CryptoState } from '../../CryptoContext'
import {TrendingCoins } from '../../Config'
import AliceCarousel from 'react-alice-carousel'
import { Link } from "react-router-dom";


function numberWithCommas(x)
{
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")
}

export default function Carousel() {
const [ trending, setTrending ] = useState([]);
  const{currency,symbol} =CryptoState();

    async function fetchTrendinCoins()
    {
        const {data }=await axios.get(TrendingCoins(currency))
      setTrending(data);
    }
    console.log(trending);
    useEffect(()=>{
      fetchTrendinCoins();
    },[currency])

 const items= trending.map((coin)=>{
  return (
    <Link  to={`/coins/${coin.id}`}
    style={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      cursor:"pointer",
      textTransform:"uppercase",
      color:"white"
    }}
    >
      <img   src={coin?.image}
      alt={coin.name}
      height='80'
      style={{
        marginBottom:10
      }}
      >
      </img>
      <span>{coin?.symbol}
      &nbsp;
      <span style={{
      color: coin.price_change_percentage_24h>=0 ?"green":"red",
      
      }}>
        {coin.price_change_percentage_24h?.toFixed(2)}%
      </span>
      
      </span>
      <span>
       {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
      </span>
    </Link>
  )
 })
    const responsive={
      0 : {
        items: 2,
      },
      512:{
        items :4,
      },
    };
  return (
    <div   style={{
        height:'50%' ,
        display: 'flex',
        alignItems: 'center'

    }}>
    <AliceCarousel
    mouseTracking
    infinite
    autoPlayInterval={1000}
    animationDuration={1500}
    disableDotsControls
    disableButtonsControls
    responsive={responsive}
    autoPlay
    items={!items?<div>Loading...</div>:items}

    />
    </div>
  )
}
