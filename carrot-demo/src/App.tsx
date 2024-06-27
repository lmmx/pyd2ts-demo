import React, { useState, useEffect } from 'react';
import CarrotPatch from './components/CarrotPatch';
import { Carrot } from './interface';

const App: React.FC = () => {
  const [carrots, setCarrots] = useState<Carrot[]>([]);

  useEffect(() => {
    fetch('/data/carrot_patch.json')
      .then(response => response.json())
      .then(data => setCarrots(data));
  }, []);

  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-green-800">Virtual Carrot Patch</h1>
      {carrots.length > 0 ? (
        <CarrotPatch carrots={carrots} />
      ) : (
        <p>Loading carrots...</p>
      )}
    </div>
  );
};

export default App;
