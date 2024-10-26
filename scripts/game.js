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
    "body": "body.svg",
    "left-hand":"left_hand.svg",
    "right-hand":"right-hand.svg",
    "left-leg":"left-leg.svg",
    "right-leg":"right-leg.svg"
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
        console.log(i)
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
        const clickedDiv = event.target.innerHTML; 
       
        if (target.includes(clickedDiv)) {
            console.log(`${clickedDiv} is in the target word.`);
        } else {
            console.log(`${clickedDiv} is NOT in the target word.`);
            showBody(dictionary,wrongGuesses,order)
        }
    })
})

let wrongGuesses = 0;
var order = ["head", "body", "left-hand", "right-hand", "left-leg", "right-leg"]
function showBody(dictionary,wrongGuesses,order){
    if(wrongGuesses < order.length){

        let imgsDiv = document.getElementById('hang');
        let imgs = document.createElement('img');
        
        imgs.src = dictionary[order[wrongGuesses]]
        imgs.classList.add(order[wrongGuesses])

        imgsDiv.appendChild(imgs)
        wrongGuesses++;
    }
    else{
        console.log("gameOver")
    }
    
        // imgs.sr
}


});