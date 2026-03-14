---
description: Create a new feature context file and optionally prepare a branch
---

Start a new feature workflow.

## 1. Ask for Feature Name

If the user did not provide one inline, ask for it.

Convert the name to **kebab-case**.

Example:

Add Map Search → map-search
User Auth Flow → user-auth-flow

Feature file location:

docs/features/<feature-name>.md

Create the file if it does not exist.

---

## 2. Create Feature File

Use this template:

# Feature: <feature-name>

## Goal
Describe what this feature should accomplish.

## Scope
What is included and excluded from this feature.

## Current Status
Not started.

## Key Decisions
-

## Relevant Files
-

## Implementation Notes
-

## Outstanding Issues
-

## Next Steps
1. Define implementation approach

## Validation Checklist
- [ ] Build passes
- [ ] Lint passes
- [ ] UI tested

## Resume Prompt
To continue this feature:

Load docs/features/<feature-name>.md and continue implementing the next steps.

## Historical Notes
-

---

## 3. Update Feature Index

Update:

docs/features/_index.md

Add a row if missing:

| <feature-name> | active | <today> | new feature |

---

## 4. Suggest Git Branch

Suggest creating a branch:

git checkout -b feature/<feature-name>

Do NOT run automatically.

---

## 5. Provide Next Step

Tell the user:

You can now begin work on this feature.

Recommended commands:

/feature-save <feature-name>
/feature-load <feature-name>
