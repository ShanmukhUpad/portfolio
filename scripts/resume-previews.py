"""Render page 1 of each resume PDF to a JPEG preview for phones.

Mobile browsers can't show a PDF inside a page, so the Resume section shows
these images below the lg breakpoint. Re-run after updating any resume PDF:

    python scripts/resume-previews.py
"""

from pathlib import Path

import fitz  # PyMuPDF

PUBLIC = Path(__file__).resolve().parent.parent / "public"
OUT = PUBLIC / "resume-previews"
VERSIONS = ["CV", "SWE", "GIS"]
WIDTH_PX = 1275  # US Letter at 150 dpi: sharp on a 3x phone at full width

OUT.mkdir(exist_ok=True)
for version in VERSIONS:
    pdf = PUBLIC / f"ShanmukhUpadhyayula-Resume-{version}.pdf"
    page = fitz.open(pdf)[0]
    zoom = WIDTH_PX / page.rect.width
    pix = page.get_pixmap(matrix=fitz.Matrix(zoom, zoom), alpha=False)
    target = OUT / f"{version}.jpg"
    pix.save(target, jpg_quality=82)
    print(f"{target.relative_to(PUBLIC.parent)}  {pix.width}x{pix.height}")
