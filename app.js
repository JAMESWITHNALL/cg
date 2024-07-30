const boxes = document.querySelectorAll(".box");
const leaderboardList = document.getElementById("leaderboard-list");
let firstClick = true;

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (firstClick) {
            startTime = Date.now();
            firstClick = false;
            box.classList.add("clicked");
        } else if (!box.classList.contains("clicked")) {
            const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
            const username = prompt("You completed the game! Enter your Name:");
            addToLeaderboard(username, elapsedTime);
            resetGame();
        }
    });
});

function addToLeaderboard(username, time) {
    const listItem = document.createElement("li");
    listItem.textContent = `${username}: ${time} seconds`;
    leaderboardList.appendChild(listItem);
}

function resetGame() {
    firstClick = true;
    boxes.forEach(box => box.classList.remove("clicked"));
}
