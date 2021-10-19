let order = [];
let clicked = [];
let score = 0;

// 0 - verde, 1 - vermelho, 2 - amarelo, 3 - azul

const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');

let shuffleOrder = ()=>{
    let colorOrder= Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clicked = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        ligthColor(elementColor, Number(i) + 1);
    }
}

let ligthColor = (element, number)=>{
    number = number * 500;
    setTimeout(()=>{
         element.classList.add('selected');
    }, number - 250);

    //remover o evento

    setTimeout(()=>{
        element.classList.remove('selected');
    });
    
}

let checkOrder = ()=>{
    for(let i in clicked) {
        if(clicked[i] != order[i]) {
            lose();
            break;
        }

        if(clicked.length == order.length) {
            alert(`Pontuação: ${score}\n vc acertou! iniciando próximo nível`)
            nextLevel();
        }
    }
}

let click = (color)=>{

    clicked[clicked.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(()=>{

        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);

    

}

let createColorElement = (color)=>{
    if(color == 0){
        return green;
    } else if (color == 1){
        return red;
    } else if(color == 2){
        return yellow;
    } else if (color == 3){
        return blue;
    }
}

let nextLevel = ()=>{
    score++;
    shuffleOrder();
}


let lose = ()=>{
    alert(`pontuação: ${score}!\n vc perdeu o jogo\n Clique em ok para iniciar um novo jogo`);
    order= [];
    clicked = [];
    playGame();
}

let playGame = ()=>{
    alert('Bem vindo ao Genius! Iniciando novo jogo')
    score = 0

    nextLevel();
}


green.onclick = ()=> click(0);
red.onclick = ()=> click(1);
yellow.onclick = ()=> click(2);
blue.onclick = ()=> click(3);


playGame()