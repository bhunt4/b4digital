---
description: List all saved features and summarize their state
---

Read:
docs/features/_index.md

If that file does not exist, inspect docs/features/ for feature markdown files and build a temporary summary.

Output:
# Saved Features

For each feature, show:
- feature name
- status
- last updated
- short summary

Then output:
## Recommended Next Actions
Suggest which feature seems easiest to resume, which seems blocked, and which may need cleanup.

Rules:
- Be concise
- Do not invent details not present in files
- If docs/features is missing, say no saved features were found
