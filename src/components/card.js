import React from 'react';

const Card = (props) => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
      <div className="d-flex rounded" style={{ width: '850px', height: '150px', backgroundColor: props.color }}>
        <div style={{ width: '25%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="rounded-circle overflow-hidden" style={{ width: '100px', height: '100px' }}>
            <img src={props.img} alt="Imagen de la tarjeta" className="w-100 h-100" />
          </div>
        </div>
        <div style={{ width: '75%' }}>
          <p>{props.txt}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
