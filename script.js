// === Part 2: JavaScript Functions, Scope, Parameters, Return Values ===

// Global squad score
let squadScore = 0;

// Function with parameters + return value
function calculateXP(kills, assists) {
  let xp = (kills * 100) + (assists * 50); // local variable
  return xp;
}

// Function to update squadScore (demonstrates global vs local)
function addToSquadScore(xp) {
  squadScore += xp;
  return squadScore;
}

// Function to animate element by adding/removing class
function animateElement(elementId, className) {
  const el = document.getElementById(elementId);
  el.classList.add(className);
  setTimeout(() => el.classList.remove(className), 800); // remove after animation
}

// === XP Calculator ===
document.getElementById("calcXPBtn").addEventListener("click", function() {
  const kills = parseInt(document.getElementById("kills").value) || 0;
  const assists = parseInt(document.getElementById("assists").value) || 0;
  
  const xp = calculateXP(kills, assists); // call function with params
  const totalScore = addToSquadScore(xp); // update global score

  document.getElementById("xpResult").textContent =
    `You earned ${xp} XP! Squad Score: ${totalScore}`;
});

// === Loot Box Animation ===
document.getElementById("openBoxBtn").addEventListener("click", function() {
  animateElement("lootBox", "open");
  document.getElementById("lootBox").textContent = "⚡";
});

// === Mystery Card Flip ===
document.getElementById("flipCardBtn").addEventListener("click", function() {
  document.getElementById("mysteryCard").classList.toggle("flip");
});

// === Modal (Mission Briefing) ===
const modal = document.getElementById("missionModal");
document.getElementById("openModalBtn").addEventListener("click", () => {
  modal.style.display = "flex";
});
document.getElementById("closeModalBtn").addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
