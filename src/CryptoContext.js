import React, {  createContext, useEffect, useState } from 'react'
import { useContext } from 'react';

const Crypto= createContext()
export default function CryptoContext({children}) {
 const [currency, setCurrency] = useState("INR");
 const [symbol,setSymbol] = useState("₹");
 useEffect(()=>{
    if(currency=== "INR" ) setSymbol("₹");
    else if(currency === "USD" ) setSymbol("$");
 },[currency])
    return (
   <Crypto.Provider value={{currency,symbol,setCurrency}}>
    {children}
   </Crypto.Provider>
  )
}

export function CryptoState()
{
   return useContext(Crypto);

}