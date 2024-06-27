from __future__ import annotations

import json
import random
from pathlib import Path
from typing import List

from pydantic import TypeAdapter

from interface import Carrot


def generate_carrot(row: int, col: int) -> Carrot:
    return Carrot(
        length_cm=random.randint(10, 30),
        diameter_cm=random.randint(2, 5),
        age_months=random.randint(1, 6),
        location=dict(lat=40.7128 + (row * 0.0001), long=-74.0060 + (col * 0.0001)),
        conditions=dict(
            temperature_degC=random.randint(15, 25),
            humidity_pct=round(random.uniform(50, 80), 2),
        ),
    )


def generate_carrot_patch(rows: int, cols: int) -> list[Carrot]:
    return [generate_carrot(row, col) for row in range(rows) for col in range(cols)]


if __name__ == "__main__":
    patch_size = 10
    carrot_patch = generate_carrot_patch(patch_size, patch_size)

    output_path = Path("carrot-demo/src/data/carrot_patch.json")
    output_path.parent.mkdir(exist_ok=True)
    ta = TypeAdapter(list[Carrot])
    carrot_patch_json = ta.dump_json(carrot_patch, indent=2)
    output_path.write_bytes(carrot_patch_json)

    print(
        f"Generated {len(carrot_patch)} carrots in a {patch_size}x{patch_size} patch."
    )
