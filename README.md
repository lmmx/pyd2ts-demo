# pyd2ts

Simple Pydantic model interface in Python

- Defines a model (Python class) `Carrot`
- Writes its JSONSchema to `schema.json`
- Converted to TypeScript `model.d.ts` declaration with Node.JS

```sh
npx json-schema-to-typescript schema.json -o model.d.ts
```

> **Side note:** there are no Python libraries to convert JSON Schema to TypeScript(!)

## React demo app

I created a simple React app to show my `Carrot` TypeScript interface in action.

```sh
npx create-react-app carrot-demo --template typescript
cp model.d.ts carrot-demo/interfaces.ts
```

(I then wrote a simple app)
