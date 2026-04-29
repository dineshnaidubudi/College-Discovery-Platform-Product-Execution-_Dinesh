# Agent Working Rules

## Core Behavior

- Read the existing project context before making changes.
- Keep changes focused on the current task.
- Do not rewrite unrelated code.
- Do not remove or revert user changes unless explicitly asked.
- Prefer the existing project style and patterns.
- Use clear names and simple implementations.
- Add comments only when they explain non-obvious logic.
- Never use em dashes in code, documentation, commit messages, or user-facing text.

## After Every Task

After completing each task:

1. Review the changed files.
2. Run relevant checks or tests when available.
3. Stage only the files related to the task.
4. Create a git commit.

## Commit Rules

- Always use a one-line commit message.
- Do not mention AI, ChatGPT, Codex, assistants, or generated content.
- Use a clear imperative message.
- Keep the message short and specific.
- Do not include long descriptions or bullet points.

Good examples:

- `Add college listing plan`
- `Create project execution plan`
- `Implement college search filters`
- `Add predictor API route`
- `Fix compare table layout`

Bad examples:

- `AI generated plan file`
- `Made changes with ChatGPT`
- `Update stuff`
- `Final changes`
- `misc`

## Git Safety

- Check `git status` before staging.
- Stage only intentional files.
- Do not use destructive git commands such as `git reset --hard` or forced checkout unless explicitly requested.
- If unrelated user changes exist, leave them untouched.
- If a task cannot be safely committed because of unclear unrelated changes, ask before proceeding.

## Quality Checklist

Before committing:

- The task requirement is completed.
- The project still builds or passes the most relevant available check.
- No unrelated files are included.
- No secrets, API keys, or local-only artifacts are committed.
- The commit message follows the rules above.
