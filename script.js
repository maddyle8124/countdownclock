let countdownInterval;
let initialTime;
const messages = [
    "End of the time but let's chill cause you still young and things can be fixed",
    "What makes you rush like that bebe?",
    "Time is gold, I hope you use it worthwhile",
    "Even though I'm spinning around, you shouldn't and better take a deep breath",
    "Why the rush? The universe isn’t going anywhere, bebe. 🚀",
    "Time’s up! But hey, at least you’re still fabulous. ✨",
    "Even though I’m spinning, you shouldn’t—take a deep breath! 😮‍💨",
    "Ding ding! You just won… more time to procrastinate. 🎉",
    "Clock’s out, but your vibe is still ticking. 🔥",
    "No worries, time is just a concept. Like deadlines. 😉",
    "Relax, it’s not a bomb… or is it? ⏳💥 (Just kidding!)",
    "If time is money, then congrats—you just spent it all. 💸",
    "Don’t worry, there’s always one more minute… until there isn’t. 😏",
    "You made it to the end! Now what? Existential crisis time? 😵‍💫",
    "Bro thinks he's in a speedrun 💀⏳",
    "POV: You just ran out of time ⏰😭",
    "Game over? Nah, side quest unlocked. 🎮✨",
    "Skill issue. Should’ve managed your time better. 🤡⏳",
    "Bro set the countdown like it's a Fortnite storm 💀💨",
    "You vs. the clock: 0-1. Try again? 🤖",
    "Ain’t no way you let time cook THIS hard. ⏳🔥",
    "It’s rewind time! Oh wait… you can’t. 😈",
    "This clock just ratio’d you. 📉",
    "Bro thought he had plot armor against time. 💀",
    "TikTok? Nah, your time really ticked and tocked. ⏰😂",
    "Mission failed successfully. 🤡🔄",
    "This ain’t a checkpoint, bestie. No respawns. 🛑👀",
    "Bro set the alarm but still missed the deadline 💀💀",
    "Hold up, lemme just ctrl+z time real quick… oh. 🫠"
];

function startCountdown() {
    clearInterval(countdownInterval);
    const timeInput = document.getElementById('countdown-time').value;
    initialTime = parseInt(timeInput, 10);
    let time = initialTime;
    const timeDisplay = document.getElementById('time');
    const endMessage = document.getElementById('end-message');
    const endText = document.getElementById('end-text');
    const restartButton = document.getElementById('restart-button');

    endMessage.style.display = 'none';
    restartButton.style.display = 'none';
    timeDisplay.style.color = '#ff1493';

    countdownInterval = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (time <= 0) {
            clearInterval(countdownInterval);
            timeDisplay.textContent = '00:00';
            timeDisplay.style.color = 'white';
            endText.textContent = messages[Math.floor(Math.random() * messages.length)];
            endMessage.style.display = 'block';
            restartButton.style.display = 'block';
        } else {
            time--;
        }
    }, 1000);
}

function restartCountdown() {
    const timeDisplay = document.getElementById('time');
    const endMessage = document.getElementById('end-message');
    const restartButton = document.getElementById('restart-button');

    endMessage.style.display = 'none';
    restartButton.style.display = 'none';
    timeDisplay.textContent = `${Math.floor(initialTime / 60).toString().padStart(2, '0')}:${(initialTime % 60).toString().padStart(2, '0')}`;
    timeDisplay.style.color = '#ff1493';

    startCountdown();
}
