if (confirm('Do you want to play a game?')) {
  let play = true;
  const factorCounter = 4, prizeMultipler = 2, baseAttemps = 3;
  while (play) {
    let attempts = 3, factor = 8, basePrize = 25, pool = 0;
    do {
      const number = Math.floor(Math.random() * (factor + 1));
      const prize = basePrize * Math.pow(prizeMultipler, attempts - 1);
      const user = prompt(`
        Choose a roulette pocket number from 0 to ${factor} \n
        Attemps left: ${attempts} \n 
        Total prize: ${pool}$ \n
        Possible prize on current attempt: ${prize}$`);
      if (+user === number) {
        pool += prize;
        if (confirm(`Congratulation, you won! Your prize is: ${pool} $. Do you want to continue?`)) {
          factor += factorCounter;
          basePrize *= prizeMultipler;
          attempts = baseAttemps;
          continue;
        } else {
          break;
        }
      }
      attempts -= 1;
    } while (attempts > 0);
    alert(`Thank you for your participation. Your prize is: ${pool}$`);
    play = confirm('What to play again?');
  }
} else {
  alert('You did not become a billionaire, but can.');
}