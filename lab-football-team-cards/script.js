const footballTeam= (
  {
    team: "Cameroon National Football Team",
    year: 2025,
    headCoach: "Marc Brys",
    players: [
      { name: "Vincent Aboubakar", position: "forward", isCaptain: true },
    { name: "Bryan Mbeumo", position: "forward", isCaptain: false },
    { name: "Christian Bassogog", position: "forward", isCaptain: false },
    { name: "Ignatius Ganago", position: "forward", isCaptain: false },
    { name: "André-Frank Zambo Anguissa", position: "midfielder", isCaptain: false },
    { name: "Carlos Baleba", position: "midfielder", isCaptain: false },
    { name: "Arthur Avom", position: "midfielder", isCaptain: false },
    { name: "Olivier Kemen", position: "midfielder", isCaptain: false },
    { name: "Martin Atemengue", position: "midfielder", isCaptain: false },
    { name: "Wility Younoussa", position: "midfielder", isCaptain: false },
    { name: "Boris Enow", position: "midfielder", isCaptain: false },
    { name: "Jean-Charles Castelletto", position: "defender", isCaptain: false },
    { name: "Christopher Wooh", position: "defender", isCaptain: false },
    { name: "Michael Ngadeu-Ngadjui", position: "defender", isCaptain: false },
    { name: "Nouhou Tolo", position: "defender", isCaptain: false },
    { name: "Fai Collins", position: "defender", isCaptain: false },
    { name: "Guy Kilama", position: "defender", isCaptain: false },
    { name: "Darlin Yongwa", position: "defender", isCaptain: false },
    { name: "Flavien Boyomo", position: "defender", isCaptain: false },
    { name: "André Onana", position: "goalkeeper", isCaptain: false },
    { name: "Simon Ngapandouetnbu", position: "goalkeeper", isCaptain: false },
    { name: "Simon Omossola", position: "goalkeeper", isCaptain: false }
  ]
});

const team = document.getElementById("team");
const year = document.getElementById("year");
const headCoach = document.getElementById("head-coach");

team.textContent= `${footballTeam.team}`
year.textContent = `${footballTeam.year}`
headCoach.textContent = `${footballTeam.headCoach}`

function displayPlayers(players) {
  const playerCards = document.getElementById("player-cards");
  playerCards.innerHTML = "";

  players.forEach(player => {
    const card = document.createElement("div");
    card.classList.add("player-card");

    const name = document.createElement("h2");
    name.textContent = player.name + (player.isCaptain ? " (Captain)" : "");

    const position = document.createElement("p");
    position.textContent = `Position: ${player.position}`;

    card.appendChild(name);
    card.appendChild(position);
    playerCards.appendChild(card);
  });
}

displayPlayers(footballTeam.players);

document.getElementById("players").addEventListener("change", (e) => {
  const selected = e.target.value;
  if (selected === "all") {
    displayPlayers(footballTeam.players);
  } else {
    const filtered = footballTeam.players.filter(p => p.position === selected);
    displayPlayers(filtered);
  }
});
