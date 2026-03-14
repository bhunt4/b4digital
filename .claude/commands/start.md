---
description: Begin new development session with full project context review
---

Follow this startup routine.

## 1. Load Project Memory

Read:

CLAUDE.md
.claude/WORK_LOG.md
.claude/SESSION_HANDOFF.md
docs/features/_index.md (if present)

## 2. Load Repository State

Run:

git status
git log -5 --oneline
git branch --show-current

Determine:

current branch
recent commits
uncommitted changes

## 3. Inspect Feature Context

If a feature file exists in docs/features, read it.

Focus on:

Goal
Current Status
Next Steps

## 4. Detect Uncommitted Work

Run:

git diff --stat

Summarize modified files.

## 5. Provide Startup Summary

Output:

Project State
Recent Work
Uncommitted Changes
Active Features
Previous Session Context

## 6. Ask User Goal

Ask:

What would you like to work on this session?
