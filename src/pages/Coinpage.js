import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
import { SingleCoin } from '../Config';
import CoinInfo from '../components/CoinInfo';
import { Parser } from 'html-to-react';

export default function Coinpage() {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    try {
      const response = await fetch(SingleCoin(id));
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      const data = await response.json();
      setCoin(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCoin();
  }, [currency]);

 const htmlParser = new Parser();
 function numberWithCommas(x)
{
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")
}

if(!coin) return <div>loading.........</div>
  return (
    <div style={{
      width:'100%',
      display:'flex',
      
    }}>
   <div style={{
    width:'30%',
    
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    marginTop:25,
    borderRight:'2px solid grey',
   }}>
<img src={coin?.image.large} alt={coin?.name} height='200' 
style={{marginBottom:20}} />
<div style={{
  fontWeight:'bold',
  marginBottom:20,
  fontFamily:'Montserrat'
}}>{coin?.name}</div>

<div style={{
  
  fontFamily:'Montserrat',
  padding: 25,
  paddingBottom:15,
  paddingTop:0,
  textAlign:'justify'
}} >
{htmlParser.parse(coin?.description.en.split(".")[0])}.

</div>
 <div>
<span style={{
  display:'flex',
  fontFamily:'Montserrat',
  padding:20,
}}>
  <h5>RANK : {coin?.market_cap_rank}</h5>
</span>
<span style={{
  display:'flex',
  fontFamily:'Montserrat',
  padding:20,
}}>
  <h5>CURRENT PRICE : {symbol}{" "}{numberWithCommas(coin?.market_data.current_price[currency.toLowerCase()])   }</h5>
</span>
<span style={{
  display:'flex',
  fontFamily:'Montserrat',
  padding:20,
}}>
  <h5>MARKET CAP : {symbol}{" "}{numberWithCommas(coin?.market_data.market_cap[currency.toLowerCase()].toString().slice(0,-6)) }M </h5>
</span>

 </div>

   </div>
   <div style={{
    width:'70%',
   }}>
 <CoinInfo coin={coin} />
 </div>

    </div>
  )
}
