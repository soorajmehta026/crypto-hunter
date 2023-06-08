import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
export default function Header() {
  const navigate = useNavigate();
  const { currency , setCurrency } =CryptoState();

  return (
    <nav className="navbar" style={{ backgroundColor:'black' ,outline: '2px solid black' }}>
      <div
        className="navbar__title"
        style={{
          color: '#FFA7A6',
          fontFamily: 'Montserrat',
          fontWeight: 'bold',
          cursor: 'pointer',
          
        }}
        onClick={() => navigate("/crypto-hunter")}
      >
        CryptoKeeper
      </div>
      <div className="navbar__select">
        <select  style={{
            backgroundColor: 'WHITE',
            color: 'BLACK',
            border: '10px white',
            borderRadius: '4px',
            padding: '8px',
          }}  value={currency} onChange={(e)=> setCurrency(e.target.value)}>
           
          <option value={"INR"}>INR</option>
          <option value={"USD"}>USD</option>
        </select>
      </div>
    </nav>
  );
}
