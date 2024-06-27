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
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto">
      <div className="w-full bg-green-200 p-8 rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold text-green-800 mb-4 text-center">Farmer Claude's Carrot Patch</h1>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Sun className="text-yellow-500 mr-2" />
            <span className="text-lg">22°C</span>
          </div>
          <div className="flex items-center">
            <Cloud className="text-gray-500 mr-2" />
            <span className="text-lg">65% Humidity</span>
          </div>
          <div className="flex items-center">
            <Tractor className="text-red-500 mr-2" />
            <span className="text-lg">Harvest Time!</span>
          </div>
        </div>
      </div>
      
      <div className="relative w-full bg-brown-800 p-8 rounded-lg shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-brown-600 opacity-50"></div>
        <div 
          className="relative grid gap-2"
          style={{
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          }}
        >
          {carrots.map((carrot, index) => (
            <div key={index} className="flex items-end justify-center h-32">
              <Carrot
                carrot={carrot}
                onClick={() => handleCarrotClick(carrot, index)}
                isPulled={pulledCarrots.has(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedCarrot && (
        <div className="mt-8 w-full">
          <CarrotInfo carrot={selectedCarrot} />
        </div>
      )}

      <div className="mt-8 text-center">
        <p className="text-lg text-green-800">Click on a carrot to pull it out and see its details!</p>
      </div>
    </div>
  );
};

export default CarrotPatch;
