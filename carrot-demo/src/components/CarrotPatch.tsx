import React, { useState } from 'react';
import { Carrot as CarrotType } from '../interface';
import Carrot from './Carrot';
import CarrotInfo from './CarrotInfo';

interface CarrotPatchProps {
  carrots: CarrotType[];
}

const CarrotPatch: React.FC<CarrotPatchProps> = ({ carrots }) => {
  const [selectedCarrot, setSelectedCarrot] = useState<CarrotType | null>(null);

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-10 gap-2 p-4 bg-brown-200 rounded-lg">
        {carrots.map((carrot, index) => (
          <Carrot
            key={index}
            carrot={carrot}
            onClick={() => setSelectedCarrot(carrot)}
          />
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
