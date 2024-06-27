import { z } from 'zod';
import { Carrot } from '../interface'; // Generated TypeScript interface
import carrotData from '../data/carrot_patch.json'; // JSON data generated from Pydantic

const CarrotSchema = z.object({
  length_cm: z.number(),
  diameter_cm: z.number(),
  age_months: z.number(),
  location: z.object({
    lat: z.number(),
    long: z.number(),
  }),
  conditions: z.object({
    temperature_degC: z.number(),
    humidity_pct: z.number(),
  }),
});

describe('Carrot Interface Validation', () => {
  it('should validate all carrots in the patch against the TypeScript interface', () => {
    carrotData.forEach((carrot: Carrot) => {
      expect(() => CarrotSchema.parse(carrot)).not.toThrow();
    });
  });

  it('should fail validation for an invalid carrot', () => {
    const invalidCarrot = {
      length_cm: "not a number", // This should be a number
      diameter_cm: 2,
      age_months: 3,
      location: {
        lat: 40.7128,
        long: -74.0060,
      },
      conditions: {
        temperature_degC: 20,
        humidity_pct: 65,
      },
    };

    expect(() => CarrotSchema.parse(invalidCarrot)).toThrow();
  });
});
