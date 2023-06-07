import React from 'react'
import Carousel from './Carousel'

export default function Banner() {
  return (
    <div style={{
      backgroundImage: "url(./banner2.jpg)",
      height:400,
      display:"flex",
      flexDirection:"column",
      paddingTop:25,
      justifyContent:"space-around"
    }}>
      
      <div style={{
        display:'flex',
        height:'40%',
        flexDirection:"column",

      }}>
      <div className="d-flex justify-content-center" style={{
         fontSize:50,
         
         fontFamily: 'Montserrat',
         fontWeight: 'bold',
       
      }}>
        Crypto Hunter
        
      </div>
      <div className="d-flex justify-content-center" style={{
         fontSize:10,
         color:'darkgray',
         fontFamily: 'Montserrat',
         fontWeight: 'bold',
         
        
      }}>
        Get all the Info regarding your favourite Crypto Currency
      </div>
      </div>
      <Carousel/>
       </div>
  )
}
