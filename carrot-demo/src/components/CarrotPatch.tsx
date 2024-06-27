import React, { useState, useMemo } from 'react';
import { Carrot as CarrotType } from '../interface';
import Carrot from './Carrot';
import CarrotInfo from './CarrotInfo';

interface CarrotPatchProps {
  carrots: CarrotType[];
}

const CarrotPatch: React.FC<CarrotPatchProps> = ({ carrots }) => {
  const [selectedCarrot, setSelectedCarrot] = useState<CarrotType | null>(null);

  const { rows, cols } = useMemo(() => {
    const uniqueLats = new Set(carrots.map(c => c.location.lat));
    const uniqueLongs = new Set(carrots.map(c => c.location.long));
    return { rows: uniqueLats.size, cols: uniqueLongs.size };
  }, [carrots]);

  return (
    <div className="flex flex-col items-center">
      <div 
        className="grid gap-2 p-4 bg-brown-200 rounded-lg"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          width: `${cols * 3}rem`, // Adjust this value as needed
        }}
      >
        {carrots.map((carrot, index) => (
          <div key={index} className="flex items-end justify-center h-16">
            <Carrot
              carrot={carrot}
              onClick={() => setSelectedCarrot(carrot)}
            />
          </div>
        ))}
      </div>
      {selectedCarrot && (
        <div className="mt-4">
          <CarrotInfo carrot={selectedCarrot} />
        </div>
      )}
    </div>
  );
};

export default CarrotPatch;
