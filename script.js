const symbols = ["🍒", "🍋", "🍉", "🔔", "⭐", "💎"];
let coins = 1000;

const clickSound = document.getElementById("click-sound");
const winSound = document.getElementById("win-sound");

function updateCoins() {
  document.getElementById("coins").textContent = `Moedas: ${coins} 🪙`;
}

function spin() {
  const result = document.getElementById("result");

  if (coins < 50) {
    result.textContent = "❌ Sem moedas suficientes!";
    return;
  }

  // 🔊 Som de clique
  clickSound.play();

  coins -= 50;
  updateCoins();
  result.textContent = "";

  const reels = [
    document.getElementById("r1"),
    document.getElementById("r2"),
    document.getElementById("r3"),
    document.getElementById("r4"),
    document.getElementById("r5"),
    document.getElementById("r6"),
  ];

  const values = [];

  // animação temporária
  reels.forEach(reel => reel.textContent = "🎲");

  setTimeout(() => {
    for (let i = 0; i < reels.length; i++) {
      let symbol = symbols[Math.floor(Math.random() * symbols.length)];
      reels[i].textContent = symbol;
      values.push(symbol);
    }

    const allEqual = values.every(v => v === values[0]);

    if (allEqual) {
      result.textContent = "🎉 JACKPOT! Você ganhou 500! 💖";
      coins += 500;
      winSound.play();
    } else if (
      values.slice(0, 3).every(v => v === values[0]) ||
      values.slice(3, 6).every(v => v === values[3])
    ) {
      result.textContent = "👏 Linha igual! +100 moedas!";
      coins += 100;
      winSound.play();
    } else {
      result.textContent = "😢 Tente novamente!";
    }

    updateCoins();
  }, 800);
}

updateCoins();
