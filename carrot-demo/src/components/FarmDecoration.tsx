import React from 'react';
import { Sun, Cloud, Tractor, Bird } from 'lucide-react';

const FarmDecoration: React.FC = () => {
  return (
    <div className="relative w-full h-32 mb-8">
      <div className="absolute top-0 left-0">
        <Sun className="text-yellow-500 w-16 h-16" />
      </div>
      <div className="absolute top-4 right-16">
        <Cloud className="text-gray-300 w-12 h-12" />
      </div>
      <div className="absolute bottom-0 right-0">
        <Tractor className="text-red-500 w-16 h-16" />
      </div>
      <div className="absolute top-8 left-1/4">
        <Bird className="text-blue-500 w-8 h-8" />
      </div>
      <div className="absolute top-16 right-1/3">
        <Bird className="text-blue-500 w-6 h-6" />
      </div>
      <div className="absolute bottom-4 left-1/3 transform -rotate-12">
        <span className="text-4xl">🌾</span>
      </div>
      <div className="absolute bottom-8 right-1/4 transform rotate-12">
        <span className="text-4xl">🌻</span>
      </div>
    </div>
  );
};

export default FarmDecoration;
