# team003-DataNotFound

---

# Esportism – Rocket League Stats App

Esportism is a web app for exploring Rocket League esports data. It pulls stats from pro matches and makes them easier to search, filter, and understand. We built it for players who want to improve, track performance, or just see how they compare to the pros.

## What It Does

- Search for players and view stats like goals, saves, and match count.
- Look up teams by region and check their win data across events.
- See leaderboards for top scorers, strikers, and defenders.
- Backend logic includes player filtering, duplicate checks, and advanced queries.

## Dataset

The data comes from [this Rocket League Kaggle dataset](https://www.kaggle.com/datasets/dylanmonfret/rlcs-202122), which includes parsed replays from ballchasing.com using the `carball` library. Some tables in the full dataset have over 100,000 rows. For development, we worked with smaller versions (~1,000 rows each) to keep things fast and responsive.

## Tech Stack

- **Frontend:** React, HTML, CSS
- **Backend:** Node.js with Express
- **Database:** MySQL (hosted on Google Cloud SQL)
- **Hosting/Infra:** Google Cloud Platform (GCP)

## Schema Overview

Main entities:
- `Player`
- `Team`
- `Game`
- `Match`
- `Event`

Relationship tables:
- `participates_in` (Player ↔ Game)
- `takes_part_in` (Player ↔ Match)
- `competes_in` (Team ↔ Game)
- `competes_during` (Team ↔ Match)

We also implemented stored procedures, triggers, assertions, and indexing to support efficient queries and maintain data integrity.

## Example Features

- View the top goal scorers across all matches
- See how many matches each player has played
- Identify standout strikers and defenders based on custom stat thresholds

## Files in This Repo

- `Stage 1` – Initial proposal and project outline
- `Stage 2` – Conceptual design and ER diagram
- `Stage 3` docs – SQL schema, indexing, and advanced queries
- `Stage 4` – Stored procedures, triggers, and constraints
- `Project Report` – Summary of results and team contributions

## Team Contributions

- **Zach:** Managed the database, handled SQL, filtered/cleaned the data, and created documentation
- **Suyash:** Built the frontend and connected it to the backend/API and SQL server
- **Ethan:** Helped with schema setup, wrote several advanced queries, and supported backend tasks
- **Ivan:** Created the ER diagram and UI mockups, contributed to documentation and cleanup

## Notes & Future Ideas

- The original plan included support for multiple games (e.g., League of Legends), but we narrowed the scope to focus on Rocket League
- Future improvements could include visual stat comparisons, custom filters, and player-to-player comparisons
- Adding more flexible stat filters and visualizations (bar charts, line graphs) would be a solid next step
