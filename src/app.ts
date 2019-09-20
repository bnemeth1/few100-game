import { getRandomInt } from './utils';

let squares: NodeListOf<HTMLDivElement>;

export function runApp() {
    // get secret number
    const secretNumber = getRandomInt(1, 6);
    // mark one square secret
    squares = document.querySelectorAll('.square');
    let currentSquare = 1;
    squares.forEach((sq: HTMLDivElement) => {
        if (currentSquare === secretNumber) {
            sq.dataset.winner = 'true';
        }
        currentSquare++;
        sq.addEventListener('click', handleClick);
    });
}

function handleClick() {
    const isWinner = this.dataset.winner === 'true';
    const clickedSquare = this as HTMLDivElement;
    if (isWinner) {
        clickedSquare.classList.add('winner');
        squares.forEach(s => {
            if (s !== clickedSquare) {
                s.classList.add('loser');
            }
            s.removeEventListener('click', handleClick);

            const h1winner = document.getElementById('heading');
            h1winner.innerText = 'WINNER !!!';
            restartGame();
        });
    } else {
        clickedSquare.classList.add('loser');
        const squaresLeft = document.querySelectorAll('.loser').length;
        if (squaresLeft === 5) {
            const h1winner = document.getElementById('heading');
            h1winner.innerText = 'LOSER !!!!';
            restartGame();
        }
    }
}

function restartGame() {
    const button = document.getElementById('Reset');
    button.addEventListener('click', ResetClick);
    button.classList.remove('hiddenbutton');
}

function ResetClick() {
    console.log('Clicked');
}

