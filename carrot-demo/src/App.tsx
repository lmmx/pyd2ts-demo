import React, { useState, useEffect } from 'react';
import CarrotPatch from './components/CarrotPatch';
import { Carrot } from './interface';

const App: React.FC = () => {
  const [carrots, setCarrots] = useState<Carrot[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCarrots = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/data/carrot_patch.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Received carrot data:", data);
        setCarrots(data);
        setIsLoading(false);
      } catch (e) {
        console.error("Failed to fetch or parse carrot data:", e);
        setError("Failed to load carrot data.");
        setIsLoading(false);
      }
    };

    fetchCarrots();
  }, []);

  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-green-800">Virtual Carrot Patch</h1>
      {isLoading ? (
        <p className="text-lg">Loading carrots...</p>
      ) : error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      ) : carrots.length > 0 ? (
        <CarrotPatch carrots={carrots} />
      ) : (
        <p className="text-lg">No carrots found in the patch.</p>
      )}
    </div>
  );
};

export default App;
