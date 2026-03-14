---
description: Save or update structured context for the current feature
---

You are maintaining a structured feature handoff file for later continuation.

If the user did not provide a feature name inline, ask for it.

Feature name rules:
- Convert to lowercase
- Use kebab-case
- Example: "Auth Flow" -> "auth-flow"

Target file:
docs/features/<feature-name>.md

Also maintain:
docs/features/_index.md

Your job:
1. Read docs/features/<feature-name>.md if it exists
2. Update it with the newest known context
3. Preserve useful prior history
4. Update docs/features/_index.md with a one-line status entry for this feature

Use this exact file structure:

# Feature: <feature-name>

## Goal
A short description of what this feature is supposed to accomplish.

## Scope
What is included and explicitly out of scope.

## Current Status
A concise but specific summary of what is already done.

## Key Decisions
- Important implementation or product decisions
- Include tradeoffs when relevant

## Relevant Files
- path/to/file.ext — why it matters
- another/file.ts — what was changed or needs attention

## Implementation Notes
Concrete technical details Claude should know later.
Include:
- APIs used
- important functions
- schema details
- edge cases
- assumptions
- environment/config dependencies

## Outstanding Issues
- bugs
- blockers
- open questions
- missing pieces

## Next Steps
1. Ordered list of the most logical next actions

## Validation Checklist
- [ ] tests to run
- [ ] manual checks
- [ ] acceptance criteria

## Resume Prompt
Write a compact prompt I can paste into Claude Code later so you can continue quickly.
This prompt must include:
- the goal
- current status
- next steps
- key files
- any constraints

## Historical Notes
Append short dated notes here instead of deleting older useful context.

Rules:
- Do NOT dump the raw conversation.
- Prefer precise technical summaries over narrative.
- Be explicit about filenames, routes, functions, tables, env vars, APIs, and constraints.
- If uncertain, say "Uncertain:" instead of inventing details.
- Preserve the Historical Notes section if it already exists.
- If the feature file already exists, merge new knowledge carefully instead of rewriting blindly.
- Keep the file readable and concise.

Then update docs/features/_index.md using this structure:

# Feature Index

| Feature | Status | Updated | Summary |
|---|---|---|---|

Add or update one row for this feature:
| <feature-name> | active | <today> | <one sentence summary> |

At the end, print:
Saved feature context to docs/features/<feature-name>.md
Updated docs/features/_index.md
