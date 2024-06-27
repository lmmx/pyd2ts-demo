import React, { useState, useMemo } from 'react';
import { Carrot as CarrotType } from '../interface';
import Carrot from './Carrot';
import CarrotInfo from './CarrotInfo';
import { Sun, Cloud, Tractor } from 'lucide-react';

interface CarrotPatchProps {
  carrots: CarrotType[];
}

const CarrotPatch: React.FC<CarrotPatchProps> = ({ carrots }) => {
  const [selectedCarrot, setSelectedCarrot] = useState<CarrotType | null>(null);
  const [pulledCarrots, setPulledCarrots] = useState<Set<number>>(new Set());

  const { rows, cols } = useMemo(() => {
    const uniqueLats = new Set(carrots.map(c => c.location.lat));
    const uniqueLongs = new Set(carrots.map(c => c.location.long));
    return { rows: uniqueLats.size, cols: uniqueLongs.size };
  }, [carrots]);

  const handleCarrotClick = (carrot: CarrotType, index: number) => {
    setSelectedCarrot(carrot);
    setPulledCarrots(prev => new Set(prev).add(index));
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full bg-green-200 p-2 rounded-lg shadow-lg mb-2">
        <h2 className="text-2xl font-bold text-green-800 mb-2 text-center">The Carrot Patch</h2>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Sun className="text-yellow-500 mr-1" size={16} />
            <span className="text-sm">22°C</span>
          </div>
          <div className="flex items-center">
            <Cloud className="text-gray-500 mr-1" size={16} />
            <span className="text-sm">65% Humidity</span>
          </div>
          <div className="flex items-center">
            <Tractor className="text-red-500 mr-1" size={16} />
            <span className="text-sm">Harvest Time!</span>
          </div>
        </div>
      </div>
      
      <div className="relative w-full bg-brown-800 p-2 rounded-lg shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-brown-600 opacity-50"></div>
        <div 
          className="relative grid gap-1"
          style={{
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${rows}, 30px)`,
          }}
        >
          {carrots.map((carrot, index) => (
            <div key={index} className="relative flex items-end justify-center h-full">
              <Carrot
                carrot={carrot}
                onClick={() => handleCarrotClick(carrot, index)}
                isPulled={pulledCarrots.has(index)}
              />
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-brown-800 rounded-t-full"></div>
            </div>
          ))}
        </div>
      </div>

      {selectedCarrot && (
        <div className="mt-2 w-full">
          <CarrotInfo carrot={selectedCarrot} />
        </div>
      )}

      <div className="mt-2 text-center">
        <p className="text-sm text-green-800">Click on a carrot to pull it out and see its details!</p>
      </div>
    </div>
  );
};

export default CarrotPatch;
