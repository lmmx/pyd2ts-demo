import React from 'react';
import { Carrot } from '../interface';

interface CarrotInfoProps {
  carrot: Carrot;
}

const CarrotInfo: React.FC<CarrotInfoProps> = ({ carrot }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Carrot Information</h2>
      <p>Length: {carrot.length_cm} cm</p>
      <p>Diameter: {carrot.diameter_cm} cm</p>
      <p>Age: {carrot.age_months} months</p>
      <p>Location: {carrot.location.lat.toFixed(4)}, {carrot.location.long.toFixed(4)}</p>
      <p>Temperature: {carrot.conditions.temperature_degC}°C</p>
      <p>Humidity: {carrot.conditions.humidity_pct}%</p>
    </div>
  );
};

export default CarrotInfo;
