import React from 'react';
import { Sun, Cloud, Tractor, Bird } from 'lucide-react';

interface FarmDecorationProps {
  position: 'left' | 'right';
}

const FarmDecoration: React.FC<FarmDecorationProps> = ({ position }) => {
  return (
    <div className={`relative w-24 ${position === 'left' ? 'mr-2' : 'ml-2'}`}>
      <div className={`absolute ${position === 'left' ? 'left-0' : 'right-0'} top-0`}>
        <Sun className="text-yellow-500 w-12 h-12" />
      </div>
      <div className={`absolute ${position === 'left' ? 'left-4' : 'right-4'} top-16`}>
        <Cloud className="text-gray-300 w-8 h-8" />
      </div>
      <div className={`absolute ${position === 'left' ? 'left-0' : 'right-0'} bottom-0`}>
        <Tractor className="text-red-500 w-12 h-12" />
      </div>
      <div className={`absolute ${position === 'left' ? 'left-2' : 'right-2'} top-32`}>
        <Bird className="text-blue-500 w-6 h-6" />
      </div>
      <div className={`absolute ${position === 'left' ? 'left-8' : 'right-8'} top-48`}>
        <Bird className="text-blue-500 w-4 h-4" />
      </div>
      <div className={`absolute ${position === 'left' ? 'left-4' : 'right-4'} bottom-32 transform ${position === 'left' ? '-rotate-12' : 'rotate-12'}`}>
        <span className="text-3xl">🌾</span>
      </div>
      <div className={`absolute ${position === 'left' ? 'left-2' : 'right-2'} bottom-16 transform ${position === 'left' ? 'rotate-12' : '-rotate-12'}`}>
        <span className="text-3xl">🌻</span>
      </div>
    </div>
  );
};

export default FarmDecoration;
