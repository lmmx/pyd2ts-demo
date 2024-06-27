import React, { useMemo } from 'react';
import { Carrot as CarrotType } from '../interface';

interface CarrotProps {
  carrot: CarrotType;
  onClick: () => void;
  isPulled: boolean;
}

const expressions = ['😊', '😄', '😐', '🙂', '😯', '😆', '😍'];

const Carrot: React.FC<CarrotProps> = ({ carrot, onClick, isPulled }) => {
  const height = `${carrot.length_cm * 2}px`;
  const width = `${carrot.diameter_cm * 4}px`;
  const leafHeight = `${carrot.length_cm * 0.5}px`;

  const expression = useMemo(() => expressions[Math.floor(Math.random() * expressions.length)], []);

  return (
    <div
      className={`cursor-pointer transition-all duration-300 relative ${isPulled ? 'transform -translate-y-8' : ''}`}
      onClick={onClick}
      style={{
        height: `calc(${height} + ${leafHeight})`,
        width,
      }}
    >
      {/* Carrot body */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: height,
          background: 'linear-gradient(45deg, #FF7F00, #FFA500, #FF7F00)',
          borderRadius: '5px 5px 50% 50%',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), inset 0 -4px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Carrot grooves */}
        <div className="absolute inset-0" style={{
          background: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255, 255, 255, 0.1) 2px, rgba(255, 255, 255, 0.1) 4px)',
        }}></div>
        
        {/* Carrot face */}
        <div className="absolute top-1/4 left-0 right-0 text-center" style={{ fontSize: `${carrot.diameter_cm * 2}px` }}>
          {expression}
        </div>
      </div>
      
      {/* Carrot leaves */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2"
        style={{
          width: '80%',
          height: leafHeight,
          background: 'linear-gradient(to bottom right, #4CAF50, #45a049)',
          clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)',
          zIndex: 1,
          boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)',
        }}
      />
    </div>
  );
};

export default Carrot;
