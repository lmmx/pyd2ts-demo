# Carrot Demo React App

This React application demonstrates the use of TypeScript interfaces generated from Pydantic models,
showcasing a carrot farm visualisation. It's just a bit of fun (and my first TypeScript app ever!)

## Project Context

This app is part of a larger demonstration of integrating Pydantic models with TypeScript interfaces.
The `Carrot` interface used in this project was automatically generated from a Pydantic model defined in Python,
converted to JSON Schema, and then to TypeScript.

## How It Works

1. **Data Source**: The app uses a JSON file (`carrot_patch.json`) containing an array of carrots, each conforming to the `Carrot` interface. The script in the top level of the repo generates it.

2. **Main Components**:
   - `App.tsx`: The main container component that sets up the overall layout.
   - `CarrotPatch.tsx`: Renders the carrot patch and manages the state of selected carrots.
   - `Carrot.tsx`: Represents individual carrots with dynamic sizing and expressions.
   - `CarrotInfo.tsx`: Displays detailed information about a selected carrot.
   - `FarmDecoration.tsx`: Adds decorative elements to enhance the farm atmosphere.

3. **Interaction**:
   - Users can click on carrots to "pull" them up and view their details.
   - Carrots automatically return to their original position after a set time or when another carrot is selected.

4. **Styling**: The app uses Tailwind CSS for styling, meaning no CSS maintenance is necessary!

## Key Features

- Dynamic rendering of carrots based on data
- Interactive carrot selection with animated "pulling" effect
- Responsive design suitable for various screen sizes
- Decorative elements to enhance the farm theme

## Running the App

1. Ensure you have Node.js and npm installed (I use `conda install nodejs`)
2. Clone the repository and navigate to the `carrot-demo` directory
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

To create a production build, run:

```
npm run build
```

This will generate optimized files in the `build` directory, ready for deployment.

## Live Demo

Experience the app in action: [Old McColvin's Farm](https://pyd2ts-demo.vercel.app/)
