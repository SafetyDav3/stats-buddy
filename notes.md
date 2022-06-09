User
    id
    username (elimate and just use email?)
    email
    password

League
    id
    name

Team
    id
    name
    coach/manager
    league id - foreign

Player
    id
    name
    team id - foreign

Game Stats
    id
    at bats
    hits
    walks
    strikeouts
    runs batted in
    runs scored
    stolen bases
    average
    on base percentage
    innings pitched
    earned runs
    earned run average
    hits
    strikeouts
    walks
    player id -foreign

SELECT SUM(ROUND(IP) + (10 * (IP - ROUND(IP)) / 3))

CREATE TABLE stats (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  ab INT DEFAULT 0,
  hits INT DEFAULT 0,
  average DEC(10, 3) GENERATED ALWAYS AS ( hits / ab )
);

home (leagues)
login
signup
logout (redirect to signin)
individual league (shows all teams for that league)
individual team (shows all players with season stats)
individual player (shows individual game stats)