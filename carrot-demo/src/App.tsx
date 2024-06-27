import React from 'react';
import CarrotPatch from './components/CarrotPatch';
import { Carrot } from './interface';
import carrotData from './data/carrot_patch.json';

const App: React.FC = () => {
  const carrots: Carrot[] = carrotData;

  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-green-800">Virtual Carrot Patch</h1>
      {carrots.length > 0 ? (
        <CarrotPatch carrots={carrots} />
      ) : (
        <p className="text-lg">No carrots found in the patch.</p>
      )}
    </div>
  );
};

export default App;
