---
description: End session with documentation updates and commit preparation
---

Complete the end-of-session workflow.

## 1. Code Quality Check

Run:

npm run lint
npm run build

If available:

npm run typecheck

Stop if build fails.

## 2. Gather Session Changes

Run:

git status
git diff --stat
git diff

Summarize:

files modified
files added
files removed

## 3. Detect Feature Context

Identify feature from:

branch name
docs/features
changed files

If applicable suggest:

/feature-save <feature-name>

## 4. Update SESSION_HANDOFF.md

Update:

Session Summary
What Was Accomplished
Current State
Files Changed
Next Session Goals

## 5. Update WORK_LOG.md

Append entry:

date
focus area
completed tasks
issues
decisions

## 6. Suggest Feature Branch

Branch naming:

feature/<feature-name>
fix/<bug-name>
refactor/<area>

## 7. Prepare Commit Message

Format:

type: short summary

Detailed explanation.

Types:

feat
fix
refactor
docs
test
chore

IMPORTANT:

Do NOT commit automatically.
Present commit message for manual commit.
