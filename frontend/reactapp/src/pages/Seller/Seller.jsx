import React from 'react';
import './Seller.styles.scss';
import CardService from '../../components/CardService/CardService';
import ToolService from '../../components/ToolService/ToolService';

function Seller() {
  return (
    <div className="seller">
      <div className="seller_Title">Mis servicios</div>
      <div className="bodySeller">
        <section className="servicesList">
          <h1>Panel servicios</h1>
          <ToolService />
          <CardService />
        </section>
        <section className="activeClientsList">
          <h1>Panel clientes activos</h1>
        </section>
      </div>

    </div>
  );
}

export default Seller;
