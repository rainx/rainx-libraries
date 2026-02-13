---
description: |
  This workflow creates daily repo status reports. It gathers recent repository
  activity (issues, PRs, discussions, releases, code changes) and generates
  engaging GitHub issues with productivity insights, community highlights,
  and project recommendations.

on:
  schedule: daily
  workflow_dispatch:

engine:
  id: codex
  model: moonshotai/kimi-k2.5
  env:
    OPENAI_BASE_URL: https://integrate.api.nvidia.com/v1
    OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}

permissions:
  contents: read
  issues: read
  pull-requests: read

network:
  allowed:
    - defaults
    - "integrate.api.nvidia.com"

tools:
  github:

safe-outputs:
  create-issue:
    title-prefix: "[repo-status] "
    labels: [report, daily-status]
source: githubnext/agentics/workflows/daily-repo-status.md@a29eb18bb611c0950651cc9344047d459a69e2d0
---

# Daily Repo Status

Create an upbeat daily status report for the repo as a GitHub issue.

## What to include

- Recent repository activity (issues, PRs, discussions, releases, code changes)
- Progress tracking, goal reminders and highlights
- Project status and recommendations
- Actionable next steps for maintainers

## Style

- Be positive, encouraging, and helpful 🌟
- Use emojis moderately for engagement
- Keep it concise - adjust length based on actual activity

## Process

1. Gather recent activity from the repository
2. Study the repository, its issues and its pull requests
3. Create a new GitHub issue with your findings and insights
