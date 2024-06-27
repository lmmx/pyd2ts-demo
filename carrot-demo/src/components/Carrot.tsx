import React, { useMemo } from 'react';
import { Carrot as CarrotType } from '../interface';

interface CarrotProps {
  carrot: CarrotType;
  onClick: () => void;
}

const expressions = ['😊', '😄', '😐', '🙂', '😯', '😆', '😍'];

const Carrot: React.FC<CarrotProps> = ({ carrot, onClick }) => {
  const height = `${carrot.length_cm * 2}px`;
  const width = `${carrot.diameter_cm * 4}px`;
  const leafHeight = `${carrot.length_cm * 0.5}px`; // Adjust leaf height based on carrot length

  const expression = useMemo(() => expressions[Math.floor(Math.random() * expressions.length)], []);

  return (
    <div
      className="cursor-pointer transition-transform hover:scale-110 relative"
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
          backgroundColor: '#FFA500',
          borderRadius: '5px 5px 50% 50%',
        }}
      >
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
          backgroundColor: '#4CAF50',
          clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)',
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default Carrot;
