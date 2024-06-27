import React from 'react';
import CarrotPatch from './components/CarrotPatch';
import FarmDecoration from './components/FarmDecoration';
import { Carrot } from './interface';
import carrotData from './data/carrot_patch.json';

const App: React.FC = () => {
  const carrots: Carrot[] = carrotData;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-green-200 flex items-center justify-center p-4">
      <div className="w-full max-w-8xl bg-white rounded-lg shadow-2xl p-4 flex">
        <FarmDecoration position="left" />
        <div className="flex-grow">
          <header className="text-center mb-2">
            <h1 className="text-4xl font-bold text-green-800">🥕 Old McLouis's Farm 🥕</h1>
            <p className="text-lg text-green-600">Growing TypeScript carrots in a 100% Pydantic interface</p>
          </header>

          <div className="bg-brown-100 p-4 rounded-lg mb-2 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-8 bg-green-400 transform -skew-y-3"></div>
            <div className="relative z-10">
              {carrots.length > 0 ? (
                <CarrotPatch carrots={carrots} />
              ) : (
                <p className="text-lg text-center">No carrots found in the patch.</p>
              )}
            </div>
          </div>

          <footer className="text-center text-green-700 text-sm">
            <p>© Cropright 2024 Old McLouis's Farm. All reaping reserved.</p>
          </footer>
        </div>
        <FarmDecoration position="right" />
      </div>
    </div>
  );
};

export default App;
