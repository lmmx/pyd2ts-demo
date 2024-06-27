import React from 'react';
import CarrotPatch from './components/CarrotPatch';
import FarmDecoration from './components/FarmDecoration';
import { Carrot } from './interface';
import carrotData from './data/carrot_patch.json';
import { Github } from 'lucide-react';

const App: React.FC = () => {
  const carrots: Carrot[] = carrotData;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-green-200 flex items-center justify-center p-4">
      <div className="w-full max-w-[1400px] bg-white rounded-lg shadow-2xl p-4 flex flex-col">
        <div className="flex">
          <FarmDecoration position="left" />
          <div className="flex-grow">
            <header className="text-center mb-2">
              <a 
                href="https://github.com/lmmx/pyd2ts-demo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="float-right inline-flex items-center mt-2 text-blue-600 hover:text-blue-800"
              >
                <Github size={20} className="mr-1" />
                View on GitHub
              </a>
              <h1 className="text-4xl font-bold text-green-800">🥕 Old McColvin's Farm 🥕</h1>
              <p className="text-lg text-green-600">Free-range TypeScript carrots grown in a 100% Pydantic interface</p>
            </header>

            <div className="bg-brown-100 p-4 rounded-lg mb-2 relative">
              <div className="absolute top-0 left-0 w-full h-8 bg-green-400 transform -skew-y-2"></div>
              <div className="relative z-10">
                {carrots.length > 0 ? (
                  <CarrotPatch carrots={carrots} />
                ) : (
                  <p className="text-lg text-center">No carrots found in the patch.</p>
                )}
              </div>
            </div>
          </div>
          <FarmDecoration position="right" />
        </div>

        <footer className="text-center text-green-700 text-sm mt-4">
          <p className="text-orange-400 mt-1">
          Made with love for Pydantic + TypeScript interfaces by <a
            href="https://twitter.com/permutans"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-black"
          >Farm Hand Louis</a>.
          </p>
          <p>© Cropright 2024 Old McColvin's Farm. All reaping reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
