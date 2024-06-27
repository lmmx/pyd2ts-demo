import React from 'react';
import { Carrot as CarrotType } from '../interface';

interface CarrotProps {
  carrot: CarrotType;
  onClick: () => void;
}

const Carrot: React.FC<CarrotProps> = ({ carrot, onClick }) => {
  const height = `${carrot.length_cm * 2}px`;
  const width = `${carrot.diameter_cm * 4}px`;

  return (
    <div
      className="cursor-pointer transition-transform hover:scale-110"
      onClick={onClick}
      style={{
        height,
        width,
        backgroundColor: '#FFA500',
        borderRadius: '50% 50% 5px 5px',
      }}
    >
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full"
        style={{
          width: '10px',
          height: '15px',
          backgroundColor: '#4CAF50',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        }}
      />
    </div>
  );
};

export default Carrot;
