import React from 'react';
import { Carrot } from '../interface';
import { Ruler, Thermometer, Droplet, MapPin, Calendar } from 'lucide-react';

interface CarrotInfoProps {
  carrot: Carrot;
}

const CarrotInfo: React.FC<CarrotInfoProps> = ({ carrot }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-green-200">
      <h2 className="text-2xl font-bold mb-4 text-green-800">Carrot Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <Ruler className="text-green-500 mr-2" />
          <span>Length: {carrot.length_cm} cm</span>
        </div>
        <div className="flex items-center">
          <Ruler className="text-green-500 mr-2" />
          <span>Diameter: {carrot.diameter_cm} cm</span>
        </div>
        <div className="flex items-center">
          <Calendar className="text-green-500 mr-2" />
          <span>Age: {carrot.age_months} months</span>
        </div>
        <div className="flex items-center">
          <MapPin className="text-green-500 mr-2" />
          <span>Location: {carrot.location.lat.toFixed(4)}, {carrot.location.long.toFixed(4)}</span>
        </div>
        <div className="flex items-center">
          <Thermometer className="text-green-500 mr-2" />
          <span>Temperature: {carrot.conditions.temperature_degC}°C</span>
        </div>
        <div className="flex items-center">
          <Droplet className="text-green-500 mr-2" />
          <span>Humidity: {carrot.conditions.humidity_pct}%</span>
        </div>
      </div>
    </div>
  );
};

export default CarrotInfo;
