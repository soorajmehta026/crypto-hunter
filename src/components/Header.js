import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
export default function Header() {
  const navigate = useNavigate();
  const { currency , setCurrency } =CryptoState();

  return (
    <nav className="navbar" style={{ outline: '2px solid black', backgroundColor: '#14161a' }}>
      <div
        className="navbar__title"
        style={{
          color: 'gold',
          fontFamily: 'Montserrat',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
        onClick={() => navigate("/crypto-hunter")}
      >
        Crypto Hunter
      </div>
      <div className="navbar__select">
        <select  style={{
            backgroundColor: '#1e2125',
            color: 'white',
            border: '5px white',
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
