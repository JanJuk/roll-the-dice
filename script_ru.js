document.addEventListener('DOMContentLoaded', () => {
    const rollButton = document.getElementById('rollButton');
    const diceImage = document.getElementById('diceImage');
    const diceResultText = document.getElementById('diceResultText');

       const diceImages = [
        'images/dice1.png',
        'images/dice2.png',
        'images/dice3.png',
        'images/dice4.png',
        'images/dice5.png',
        'images/dice6.png'
    ];

    rollButton.addEventListener('click', rollDice);

    function rollDice() {
        
        diceImage.classList.add('rolling');
        diceResultText.textContent = "Кубик бросается...";
        rollButton.disabled = true; 

       
        setTimeout(() => {
            
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            
            diceImage.src = diceImages[randomNumber - 1]; 
            
            diceResultText.textContent = `Выпало: ${randomNumber}`;
            
            diceImage.classList.remove('rolling');
            rollButton.disabled = false; 
        }, 2100); 
    }
});
