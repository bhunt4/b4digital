This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

# Project Overview

<!-- TODO: Describe your project in 1-2 sentences. What does it do? What is its purpose? -->

---

# Essential Commands

<!-- TODO: List your development, build, lint, and test commands. Example: -->

# Development
# npm run dev

# Build & Production
# npm run build
# npm start

# Code Quality
# npm run lint

# Testing
# npm test

---

# Technology Stack

<!-- TODO: List your core technologies. Example: -->

# Framework:
# Language:
# Styling:
# UI Library:
# Database:

---

# Architecture

<!-- TODO: Describe your project's architecture — folder structure, key patterns, layers, etc. -->

---

# Component Patterns

<!-- TODO: Describe how components are organized and any patterns used (e.g., compound components, render props, etc.) -->

---

# Path Aliases

<!-- TODO: List any path aliases configured in tsconfig.json or equivalent. Example: -->

# @/* → project root
# @/components → components
# @/lib → utilities

---

# Development Guidelines

<!-- TODO: List coding preferences and conventions for this project. Example: -->

# Claude should prefer:
# - strongly typed code
# - small composable modules
# - clear naming conventions

# Avoid:
# - unnecessary dependencies
# - inline styles
# - complex inheritance hierarchies

---

# Context7 Libraries

/vercel/next.js

---

# Testing Philosophy

<!-- TODO: Describe what tests should cover and any selector/assertion preferences. Example: -->

# Prefer stable selectors such as:
# data-testid

# Avoid brittle DOM selectors.

---

# Feature Development Workflow

Feature context files live in:

docs/features/

Each feature file contains:

Goal
Scope
Current Status
Key Decisions
Relevant Files
Implementation Notes
Outstanding Issues
Next Steps
Validation Checklist
Resume Prompt
Historical Notes

These files act as persistent memory for the feature.

---

# Feature Index

docs/features/_index.md

Format:

Feature | Status | Updated | Summary

Statuses:

active
paused
completed
abandoned

---

# Claude Feature Commands

Save feature state

/feature-save <feature-name>

Load feature state

/feature-load <feature-name>

List features

/feature-list

Close feature

/feature-close <feature-name>

---

# Claude Behavioral Guidelines

Claude should:

1. Explain architectural decisions clearly
2. Propose plans before large refactors
3. Avoid unnecessary dependencies
4. Preserve useful comments
5. Reuse existing patterns
6. Respect the design system

---

# Important Principle

Conversation history is NOT the source of truth.

The source of truth is:

code
docs
feature context files

Claude should rely on structured files and repository context when resuming work.
