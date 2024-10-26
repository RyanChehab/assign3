document.addEventListener("DOMContentLoaded", function() {


// hard coded options
var words = [
    "APPLE", "BANANA", "CHERRY", "DOG", "ELEPHANT", "FLOWER", "GRAPE", "HOUSE", "IGUANA", "JACKET",
    "KITE", "LEMON", "MOUNTAIN", "NOTEBOOK", "ORANGE", "PENCIL", "QUEEN", "RABBIT", "SUN", "TURTLE",
    "UMBRELLA", "VIOLIN", "WHALE", "XYLOPHONE", "YOGURT", "ZEBRA", "AIRPLANE", "BALLOON", "CLOUD", "DINOSAUR", 
    "EAGLE", "FISH", "GIRAFFE", "HELICOPTER", "ISLAND", "JELLY", "KANGAROO", "LAMP", "MOON", "NEST",
    "OCTOPUS", "PAINT", "QUILT", "ROBOT", "STAR", "TRAIN", "UNICORN", "VASE", "WIND", "X-RAY",
    "YOGURT", "ANCHOR", "BICYCLE", "CACTUS", "DRUM", "ENVELOPE", "FEATHER", "GHOST", "HONEY", "ICE",
    "JIGSAW", "KOALA", "LEAF", "MUSHROOM", "NECKLACE", "OLIVE", "PANCAKE", "QUOKKA", "RAINBOW", "SNOW",
    "TELESCOPE", "ACORN", "BELL", "CUPCAKE", "DOVE", "ESPRESSO", "FLAMINGO", "GARDEN", "HEART", "IGLOO",
    "JACKAL", "KIWI", "LOLLIPOP", "MERMAID", "NARWHAL", "OTTER", "PINEAPPLE", "QUIVER", "RACCOON", "SNOWFLAKE",
    "TOUCAN", "VANILLA", "WOLVERINE", "XERUS", "YAK", "ZEST", "AVOCADO", "BEETLE", "CINNAMON", "DAFFODIL"
];

var dictionary = {
    "head": "assets/head.svg",
    "body": "assets/body.svg",
    "left-hand":"assets/left-hand.svg",
    "right-hand":"assets/right-hand.svg",
    "left-leg":"assets/left-leg.svg",
    "right-leg":"assets/right-leg.svg"
}

// picking random word
function generate(words){
    var random = Math.floor(Math.random() * words.length);
    return words[random];
}
// this is the real answere
let target= generate(words)

// answer div
function createDiv(target){
    let dashes = target.length;
    let answer_div = document.getElementById('answer-section');
    for (let i = 0; i<dashes;i++){
        
        let newdiv = document.createElement('div')
        newdiv.id = `newdiv${i}`
        newdiv.innerHTML = `<p style="margin:0px 8px"> _ </p>`
        answer_div.appendChild(newdiv)
    }
}

createDiv(target)

// listens to what the user type
// document.addEventListener('keydown', function(event){
//     let valid='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     if (valid.includes(event.key)){
//         // add it to the answ
//         let input= event.key;
//     }
//     else{
//         //view part of the body

//         // showBody(dictionary,wrongGuesses,order)
//     }
// })

let letters = document.querySelectorAll('.letter');

// Listens to what the user clicks on the screen
letters.forEach(letter => {
    letter.addEventListener('click', function(event) {
        if (event.target.classList.contains('disabled')) {
            return; 
        }
        let clickedDiv = event.target.innerHTML; 
        
        event.target.style.backgroundColor= '#414141';
        event.target.classList.add('disabled')

        

        if (target.includes(clickedDiv)) {
            
            // returning the index
        let indexArray = indices(clickedDiv);
        
        displayChar(indexArray, clickedDiv);

        if (indexArray.length === target.length) {
            let answer_div = document.getElementById('answer-section');
            
            let winningDiv = answer_div.createElement('div'); 
            winningDiv.innerHTML='YOU WON!'
            answer_div.appendChild(winningDiv);
        }
        } else {
            
            showBody(dictionary)
        }
    })
})

let wrongGuesses = 0;
var order = ["head", "body", "left-hand", "right-hand", "left-leg", "right-leg"]
function showBody(dictionary){
    if(wrongGuesses < order.length){

        let imgsDiv = document.getElementById('hang');
        let imgs = document.createElement('img');
        
        imgs.src = dictionary[order[wrongGuesses]]
        imgs.classList.add(order[wrongGuesses])

        imgsDiv.appendChild(imgs)
        wrongGuesses++;
    }
    if(wrongGuesses === order.length){
        let answer_div = document.getElementById('answer-section');
        answer_div.innerHTML=`GAME OVER! The word was ${target}`
        
    }
}

// finds the right letter index
function indices(clickedDiv){
    let answer_div = document.getElementById('answer-section');
    // console.log(target)
    let indices = [];

    for (let i = 0; i < target.length;i++){
        if (target[i]===clickedDiv){
            indices.push(i);
        }
    }
    return indices;
}

// fills the answering divs
function displayChar(indexArray, clickedDiv) {
    indexArray.forEach(index => {
        let answerDiv = document.getElementById(`newdiv${index}`); 
        // accesss div through its id predetermined
        if (answerDiv) {
            // adds the letter 
            answerDiv.innerHTML = `<p style="margin:0px 8px">${clickedDiv}</p>`; 
        }
    });
}
});