from pathlib import Path

from pydantic import BaseModel


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


schema = Path("schema.json")
schema.write_text(Carrot.schema_json(indent=2))
