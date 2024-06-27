# pyd2ts-demo

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://pyd2ts-demo.vercel.app/)
[![GitHub](https://img.shields.io/badge/github-repo-blue.svg)](https://github.com/lmmx/pyd2ts-demo)

This project demos a simple yet seamlessly exposed interface 'syncing' Pydantic models as TypeScript interface declaration.
This showcases a powerful approach for full-stack Python and TypeScript development,
which can potentially cut down on rework and communication friction between teams in differing
languages: united by a common JSON schema!

## The Python side

The Python side is a super simple Pydantic model interface

- `interface.py` defines a model (Python class) `Carrot`, with sub-models `Location` and `Conditions`.
- When called, the module writes the JSONSchema for the `Carrot` model to `schema.json`
- This is converted to TypeScript `model.d.ts` declaration with Node.JS by the following one-liner:

```sh
npx json-schema-to-typescript schema.json -o model.d.ts
```

> **Side note:** there are no Python libraries to convert JSON Schema to TypeScript(!)

## React demo app

To demonstrate the practical application of this approach,
I've created a simple React app that uses the generated TypeScript interface.

You can get started with your own in a similar manner like this:

```sh
npx create-react-app carrot-demo --template typescript
cp model.d.ts carrot-demo/interface.d.ts
```

The app visualises a carrot patch based on the `Carrot` model.

![Farm Life](farm_life.jpg)

(This was my first TypeScript project ever!)

## Why This Matters

1. **Type Safety Across Stacks**: By converting Pydantic models to TypeScript interfaces,
   ensures type consistency between backend (Python) and frontend (TypeScript/JavaScript) codebases.

2. **Improved Developer Experience**: Automatically generated TypeScript interfaces reduce manual rework
   and potential errors in maintaining parallel type definitions "in sync".

3. **Better Documentation**: The resulting TypeScript interfaces serve as living documentation of your data structures,
   improving code readability and maintainability.

4. **Streamlined API Integration**: This approach facilitates smoother API integrations,
   as frontend developers can work with strongly-typed data structures that mirror the backend models.

## How It Works

1. Define a Pydantic model in Python (`Carrot` in this case).
2. Generate a JSON Schema from the Pydantic model.
3. Convert the JSON Schema to a TypeScript interface declaration.

```sh
# Generate TypeScript interface from JSON Schema
npx json-schema-to-typescript schema.json -o model.d.ts
```

> **Note:** Currently, there are no Python libraries that directly convert JSON Schema to TypeScript, making this Node.js step necessary.

## Getting Started

1. Clone this repository
2. Follow the README in the `carrot-demo` directory to set up and run the React app
3. Explore the code to see how Pydantic models are transformed into TypeScript interfaces and used in a React application

## Live Demo

Check out the live demo of the React app: [Old McColvin's Farm](https://pyd2ts-demo.vercel.app/)
