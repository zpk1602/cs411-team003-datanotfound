const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const db = require('./connection')
const cors = require('cors')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get("/TopScorer", (req, res) => {
    const sqlSelect = `
    SELECT
        p.player_name,
        SUM(g.core_goals) AS total_score
    FROM
        players_db p
    JOIN
        games_by_players g
    ON
        p.player_id = g.player_id
    GROUP BY
        p.player_id,
        p.player_name
    ORDER BY
        total_score DESC
    LIMIT 1000;`

    db.query(sqlSelect, (err, result) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
    })
}) 

app.get("/MatchesPlayed", (req, res) => {
    const sqlSelect = `
    SELECT 
        m.player_tag, 
        COUNT(g.game_id) AS matches_played 
    FROM 
        GameK g 
    JOIN 
        MatchK m 
    ON 
        g.player_tag = m.player_tag
    GROUP BY  
        m.player_tag
    ORDER BY 
        matches_played DESC
    LIMIT 1000;`

    db.query(sqlSelect, (err, result) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
    })
}) 

app.get("/StrikersByPlayer", (req, res) => {
    const sqlSelect = `
    SELECT 
        Striker.player_id, 
        Striker.player_tag, 
        MAX(Striker.p_core_shots) AS Game_Shots, 
        MAX(Striker.p_core_goals) AS Game_Goals, 
        MAX(Striker.t_core_shots) AS Match_Shots, 
        MAX(Striker.t_core_goals) AS Match_Goals
    FROM (
        SELECT p.player_id, 
        p.player_tag, 
        p.core_shots AS p_core_shots, 
        p.core_goals AS p_core_goals, 
        t.core_shots AS t_core_shots, 
        t.core_goals AS t_core_goals
        FROM participates_in_K p JOIN takes_part_in_K t ON p.player_id = t.player_id
    ) AS Striker
    GROUP BY Striker.player_id, Striker.player_tag
    HAVING (MAX(Striker.p_core_shots) >= 4 OR MAX(Striker.p_core_goals) >= 2) AND (MAX(Striker.t_core_shots) >= 12 OR MAX(Striker.t_core_goals) >= 4) LIMIT 1000;`

    db.query(sqlSelect, (err, result) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
    })
}) 

app.get("/DefendersByPlayer", (req, res) => {
    const sqlSelect = `
    SELECT 
        Defender.player_id, 
        Defender.player_tag, 
        MAX(Defender.p_core_saves) AS Game_Saves, 
        MAX(Defender.t_core_saves) AS Match_Saves
    FROM (
        SELECT p.player_id, p.player_tag, p.core_saves AS p_core_saves, t.core_saves AS t_core_saves, p.positioning_time_defensive_third AS p_positioning_time_defensive_third, t.positioning_time_defensive_third AS t_positioning_time_defensive_third
        FROM participates_in_K p JOIN takes_part_in_K t ON p.player_id = t.player_id
    ) AS Defender
    GROUP BY Defender.player_id, Defender.player_tag
    HAVING (MAX(Defender.p_core_saves) >= 2 AND MAX(Defender.p_positioning_time_defensive_third) >= 180) AND (MAX(Defender.t_core_saves) >= 5 AND MAX(Defender.t_positioning_time_defensive_third) >= 800) LIMIT 1000;`

    db.query(sqlSelect, (err, result) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
    })
}) 


app.get("/Players", (req, res) => {
    const sqlSelect = `
    SELECT *
    FROM Player
    LIMIT 1000;`

    db.query(sqlSelect, (err, result) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
    })
}) 


app.get("/TakesPartIn", (req, res) => {
    const sqlSelect = `
    SELECT *
    FROM takes_part_in_K
    LIMIT 1000;`

    db.query(sqlSelect, (err, result) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
    })
}) 


app.get("/ParticipatesIn", (req, res) => {
    const sqlSelect = `
    SELECT *
    FROM participates_in_K
    LIMIT 1000;`

    db.query(sqlSelect, (err, result) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
    })
}) 

app.get("/PlayerRegion", (req, res) => {
    const sqlSelect = `
    SELECT DISTINCT
    p.player_id,
    p.player_tag,
    p.player_name,
    p.player_country,
    t.team_region
FROM 
    PlayerK p
JOIN 
    GameK g ON p.player_tag = g.player_tag
JOIN 
    TeamK t ON g.team_name = t.team_name
ORDER BY 
    t.team_region;
    LIMIT 1000`

    db.query(sqlSelect, (err, result) => {
        if (err) {
            res.status(500).send('Database query error');
            return;
        }
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
    })
}) 

var port = 3001
app.listen(port, () => {
    console.log(`running on PORT ${port}`)
})

/*PLAYER BY REGION
SELECT 
    p.player_id,
    p.player_tag,
    p.player_name,
    p.player_country,
    t.team_region
FROM 
    PlayerK p
JOIN 
    GameK g ON p.player_tag = g.player_tag
JOIN 
    TeamK t ON g.team_name = t.team_name
ORDER BY 
    t.team_region;
*/

/*PLAYER QUERIES
SELECT *
FROM Player
LIMIT 1000;
*/

/* TOP SCORER
SELECT
	p.player_id,
	p.player_name,
	SUM(g.core_goals) AS total_score
FROM
	players_db p
JOIN
	games_by_players g
ON
	p.player_id = g.player_id
GROUP BY
	p.player_id,
	p.player_name
ORDER BY
	total_score DESC
LIMIT 15;
*/

/* MATCHES PLAYED TOTAL
SELECT 
m.player_tag, 
COUNT(g.game_id) AS matches_played 
FROM 
GameS g 
JOIN 
MatchS m 
ON 
g.player_tag = m.player_tag
GROUP BY  
m.player_tag
ORDER BY 
matches_played DESC
LIMIT 15;
*/

/* STRIKERS BY PLAYERS
CREATE TABLE StrikersByPlayer
AS
SELECT Striker.player_id, Striker.player_tag, MAX(Striker.p_core_shots), MAX(Striker.p_core_goals), MAX(Striker.t_core_shots), MAX(Striker.t_core_goals)
FROM (
SELECT p.player_id, p.player_tag, p.core_shots AS p_core_shots, p.core_goals AS p_core_goals, t.core_shots AS t_core_shots, t.core_goals AS t_core_goals
FROM participates_in_K p JOIN takes_part_in_K t ON p.player_id = t.player_id
) AS Striker
GROUP BY Striker.player_id, Striker.player_tag
HAVING (MAX(Striker.p_core_shots) >= 4 OR MAX(Striker.p_core_goals) >= 2) AND (MAX(Striker.t_core_shots) >= 12 OR MAX(Striker.t_core_goals) >= 4) LIMIT 15;
 */

/*
CREATE TABLE DefendersByPlayer
AS
SELECT Defender.player_id, Defender.player_tag, MAX(Defender.p_core_saves), MAX(Defender.t_core_saves)
FROM (
SELECT p.player_id, p.player_tag, p.core_saves AS p_core_saves, t.core_saves AS t_core_saves, p.positioning_time_defensive_third AS p_positioning_time_defensive_third, t.positioning_time_defensive_third AS t_positioning_time_defensive_third
FROM participates_in_K p JOIN takes_part_in_K t ON p.player_id = t.player_id
) AS Defender
GROUP BY Defender.player_id, Defender.player_tag
HAVING (MAX(Defender.p_core_saves) >= 2 AND MAX(Defender.p_positioning_time_defensive_third) >= 180) AND (MAX(Defender.t_core_saves) >= 5 AND MAX(Defender.t_positioning_time_defensive_third) >= 800) LIMIT 15;*/