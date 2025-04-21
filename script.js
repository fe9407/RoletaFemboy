const symbols = ["🍒", "🍋", "🍉", "🔔", "⭐", "💎"];

function spin() {
  const r1 = document.getElementById("reel1");
  const r2 = document.getElementById("reel2");
  const r3 = document.getElementById("reel3");
  const result = document.getElementById("result");

  // Gira visualmente os rolos com delay pra parecer real
  let s1 = symbols[Math.floor(Math.random() * symbols.length)];
  let s2 = symbols[Math.floor(Math.random() * symbols.length)];
  let s3 = symbols[Math.floor(Math.random() * symbols.length)];

  r1.textContent = "🎲";
  r2.textContent = "🎲";
  r3.textContent = "🎲";
  result.textContent = "";

  setTimeout(() => r1.textContent = s1, 500);
  setTimeout(() => r2.textContent = s2, 800);
  setTimeout(() => r3.textContent = s3, 1100);

  setTimeout(() => {
    if (s1 === s2 && s2 === s3) {
      result.textContent = "💰 JACKPOT! 💰";
    } else if (s1 === s2 || s2 === s3 || s1 === s3) {
      result.textContent = "👏 Quase lá!";
    } else {
      result.textContent = "😢 Tente de novo!";
    }
  }, 1200);
}