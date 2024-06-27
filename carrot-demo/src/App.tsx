import React from 'react';
import CarrotPatch from './components/CarrotPatch';
import FarmDecoration from './components/FarmDecoration';
import { Carrot } from './interface';
import carrotData from './data/carrot_patch.json';

const App: React.FC = () => {
  const carrots: Carrot[] = carrotData;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-green-200 flex flex-col items-center justify-center p-8 overflow-hidden">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-2xl p-8 relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-32 bg-blue-100 transform -skew-y-3"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-green-100 transform skew-y-3"></div>
        </div>
        
        <div className="relative z-10">
          <header className="text-center mb-8">
            <h1 className="text-5xl font-bold text-green-800 mb-2">🥕 Old McLouis's Farm 🥕</h1>
            <p className="text-xl text-green-600">Growing TypeScript carrots in a 100% Pydantic interface</p>
          </header>

          <FarmDecoration />

          <div className="bg-brown-100 p-8 rounded-lg mb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-16 bg-green-400 transform -skew-y-3"></div>
            <div className="absolute bottom-0 left-0 w-full h-16 bg-brown-600 transform skew-y-3"></div>
            <div className="relative z-10">
              {carrots.length > 0 ? (
                <CarrotPatch carrots={carrots} />
              ) : (
                <p className="text-lg text-center">No carrots found in the patch.</p>
              )}
            </div>
          </div>

          <footer className="text-center text-green-700">
            <p>© Cropright 2024 Old McLouis's Farm. All reaping reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default App;
