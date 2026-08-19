"""
Parse lee215-soln.html (or any saved LeetCode profile HTML) and extract
all solution links into extension/lee-solutions.json

Usage:
    python3 scraper/parse-html.py lee215-soln.html extension/lee-solutions.json
"""

import re
import json
import sys
from pathlib import Path

def parse(html_path: str, out_path: str):
    html = Path(html_path).read_text(encoding="utf-8", errors="ignore")

    solutions = {}

    # Match all solution anchor hrefs in the page
    # Pattern: /problems/<slug>/solutions/<id>/<anything>/
    for href in re.findall(r'/problems/([^/"]+)/solutions/(\d+)/([^"]*)', html):
        slug, sol_id, tail = href
        if not slug or not sol_id:
            continue
        full_url = f"https://leetcode.com/problems/{slug}/solutions/{sol_id}/{tail}"
        # Keep only the first (highest-vote) solution per problem
        if slug not in solutions:
            solutions[slug] = {"title": slug, "url": full_url}

    Path(out_path).parent.mkdir(parents=True, exist_ok=True)
    Path(out_path).write_text(json.dumps(solutions, indent=2), encoding="utf-8")

    print(f"✅ Done! {len(solutions)} unique problems → {out_path}")

if __name__ == "__main__":
    html_file = sys.argv[1] if len(sys.argv) > 1 else "lee215-soln.html"
    out_file  = sys.argv[2] if len(sys.argv) > 2 else "extension/lee-solutions.json"
    parse(html_file, out_file)
