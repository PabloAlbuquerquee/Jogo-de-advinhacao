document.getElementById('button').addEventListener('click', verificar);
document.getElementById('button-two').addEventListener('click', tryAgain);

document.addEventListener('keypress', (e) => {
    if(e.key == 'Enter' && screenOne.classList.contains('hide')) {
        inputNumber;
        tryAgain();
    }
})

const inputNumber = document.querySelector('#inputNumber');
const screenOne= document.querySelector('.screen-one');
const screenTwo= document.querySelector('.screen-two');

let randomNumber = Math.round(Math.random() * 10);

console.log(randomNumber)
let xAttempts = 1;

function verificar(event){
    event.preventDefault();

    if (Number(inputNumber.value) <= 0) {
        window.alert("Insira um número valido!")
    } else { 
        if (Number(inputNumber.value) == randomNumber){
            toogleScreen();
        }
    }

    inputNumber.value = "";
    xAttempts++;
}

function tryAgain(){
    inputNumber.focus;
    xAttempts = 1;
    toogleScreen();
    randomNumber = Math.round(Math.random() * 10);
    console.log(randomNumber);
}

function toogleScreen() {
    inputNumber.focus;
    screenOne.classList.toggle("hide");
    screenTwo.classList.toggle("hide");
    if(xAttempts == 1){
        document.querySelector('.screen-two h2').innerText = `Acertou de primeira!`;
    } else {
        document.querySelector('.screen-two h2').innerText = `Acertou em ${xAttempts} tentativas`;
    }
}
