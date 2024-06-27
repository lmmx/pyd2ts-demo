from pathlib import Path

from pydantic import BaseModel

__all__ = ["Location", "Conditions", "Carrot"]


class Location(BaseModel):
    lat: float
    long: float


class Conditions(BaseModel):
    temperature_degC: int
    humidity_pct: float


class Carrot(BaseModel):
    length_cm: int
    diameter_cm: int
    age_months: int
    location: Location
    conditions: Conditions


if __name__ == "__main__":
    # Generate schema
    schema_path = Path("schema.json")
    schema_path.write_text(Carrot.schema_json(indent=2))
    print(f"Generated JSON schema at {schema_path}")
