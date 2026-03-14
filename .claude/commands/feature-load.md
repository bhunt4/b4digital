---
description: Load a saved feature file and use it as the working context
---

If the user did not provide a feature name inline, ask for it.

Feature name rules:
- Convert to lowercase
- Use kebab-case

Target file:
docs/features/<feature-name>.md

Read the file and treat it as the source of truth for prior feature context.

Then output exactly these sections:

# Loaded Feature
State the feature name and one-sentence purpose.

## Summary
Summarize the current state in 5-10 concise lines.

## Important Decisions
List the most important implementation choices already made.

## Relevant Files
List the key files Claude should inspect first.

## Outstanding Issues
List current blockers, bugs, or unanswered questions.

## Next Steps
List the next best actions in order.

## Suggested Resume Prompt
Write a paste-ready prompt the user can use to continue the work immediately.

Rules:
- Do not invent missing progress.
- If the file is missing, say so clearly.
- If the file is missing, suggest using /feature-save first.
- Keep the response focused on actionability.
