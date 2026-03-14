---
description: Mark a feature as completed, paused, or abandoned and save final notes
---

If the user did not provide:
- feature name
- final status

ask for them.

Allowed statuses:
- completed
- paused
- abandoned

Target file:
docs/features/<feature-name>.md

Also update:
docs/features/_index.md

In the feature file:
1. Update Current Status to reflect the final state
2. Add a dated note under Historical Notes explaining why the feature was closed
3. Add a short section if missing:

## Final Outcome
What was delivered, what remains, and what would need to happen to resume later.

Then update docs/features/_index.md row for that feature:
| <feature-name> | <status> | <today> | <brief final summary> |

At the end, print:
Updated feature status for docs/features/<feature-name>.md
Updated docs/features/_index.md
