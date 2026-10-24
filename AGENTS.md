# ProjectACE AI development rules

- Inspect the existing app and documentation before changing architecture.
- Preserve all six departments and working features.
- Use small, reusable React components and the established TypeScript conventions.
- Keep structured project and research content in `lib/data.ts` until a real content store is justified.
- Never invent research results, citations, team members, sponsors, partnerships, or organizational achievements.
- Clearly label demonstration ideas and simulated data.
- Link to authoritative source documentation; do not imply an API is integrated unless it is.
- Keep secrets out of source code and client bundles. Use environment variables for configured endpoints.
- Validate uploaded files and form inputs. Do not store uploaded datasets or private applications on a server by default.
- Add unit tests for important data processing and validation logic.
- Run `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build` when the environment supports them.
- Fix errors introduced by a change and report checks honestly.
- Update README, research standards, and environment documentation when behavior changes.
- Do not delete existing features without authorization. Prefer feature branches and pull requests for significant work.
- Summarize files changed, verification performed, deployment requirements, and incomplete work.
