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

// dashes div
function createDiv(target){
    let dashes = target.length;
    let answer_div = document.getElementById('answer-section');
    for (let i = 0; i<dashes;i++){
        // creating divs for dashes
        let newdiv = document.createElement('div')
        newdiv.id = `newdiv${i}`
        newdiv.innerHTML = `<p style="margin:0px 8px"> _ </p>`
        answer_div.appendChild(newdiv)
    }
}

createDiv(target)

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
    // returns an array 
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

// Showing each body part
let wrongGuesses = 0;
var order = ["head", "body", "left-hand", "right-hand", "left-leg", "right-leg"]
function showBody(dictionary){
    if(wrongGuesses < order.length){

        // declaring the body part imgs
        let imgsDiv = document.getElementById('hang');
        let imgs = document.createElement('img');

        // displaying the body parts imgs
        imgs.src = dictionary[order[wrongGuesses]]
        imgs.classList.add(order[wrongGuesses])

        // injecting the imgs to the father div
        imgsDiv.appendChild(imgs)
        wrongGuesses++;
    }
    if(wrongGuesses === order.length){
        let answer_div = document.getElementById('answer-section');
        answer_div.innerHTML=`GAME OVER! The word was ${target}`
        
    }
}

function used(){

}

function listener(){
    let letters = document.querySelectorAll('.letter');
    letters.forEach(letter=>{
        letter.addEventListener('click',function(event){
            // check if disabled
            if (event.target.classList.contains('disabled')){
                return;
            }
            // disabling
            event.target.classList.add('disabled')
            event.target.style.backgroundColor = '#414141'
            // declaring the var clickedDiv for the clicked letter
            var clickedDiv = event.target.innerHTML;
            console.log(clickedDiv)
            // getting the indices
            if (target.includes(clickedDiv)){
                let indexArray = indices(clickedDiv);
                console.log(indexArray)
                displayChar(indexArray, clickedDiv);
            }
                // leave space for win stmt
            else{
                showBody(dictionary)
            }
        })
    })
}

listener()

function boardListener(){
    document.addEventListener('keydown', function(event){
        let valid= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        let letters = document.querySelectorAll('.letter')
        if (valid.includes(event.key)){
            // disabling
            letters.forEach(letter=>{
                if(letter.classList.contains('disabled')){
                    return;
                }
            })
            var clickedDiv = event.key.toLocaleUpperCase();
            console.log(clickedDiv)

            
            
            letters.forEach(letter => {
                if(letter.innerHTML === clickedDiv){
                    letter.classList.add('disabled')
                    letter.style.backgroundColor = "#414141"
                }
            })
            // letter.classList.add('disabled'); 
            // declaring the var clickedDiv for the clicked letter
            // var clickedDiv = event.target.innerHTML;
            // console.log(clickedDiv)

            // if (letter.classList.contains('disabled')) {
            //     return;
                
            // }
            if (target.includes(clickedDiv)){
                let indexArray = indices(clickedDiv);
                console.log(indexArray)
                displayChar(indexArray, clickedDiv);
            }
                // leave space for win stmt
            else{
                showBody(dictionary)
            }
        }
        
    })
}

boardListener()













// // listens to what the user type
// document.addEventListener('keydown', function(event){
//     let valid='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     if (valid.includes(event.key)){
//         if (event.key.classList.contains('disabled')) {
//             return; 
//         }
//         let input= event.key.toUpperCase();
//         console.log(input)
//     }
//     else{
//     }
// })

// let letters = document.querySelectorAll('.letter');

// // Listens to what the user clicks on the screen
// letters.forEach(letter => {
//     letter.addEventListener('click', function(event) {
//         if (event.target.classList.contains('disabled')) {
//             return; 
//         }
//         let clickedDiv = event.target.innerHTML; 
        
//         event.target.style.backgroundColor= '#414141';
//         event.target.classList.add('disabled')

//         if (target.includes(clickedDiv)) {
//         // returning the index
//         let indexArray = indices(clickedDiv);
        
//         displayChar(indexArray, clickedDiv);
        
//         // when the user wins
//         if (indexArray.length === target.length) {
//             let answer_div = document.getElementById('answer-section');
            
//             let winningDiv = answer_div.createElement('div'); 
//             winningDiv.innerHTML='YOU WON!'
//             answer_div.appendChild(winningDiv);
//         }
//         } 
//         else {
//             // wrong guess 
//             showBody(dictionary)
//         }
//     })
// })
// console.log(target)
// let len = target.length
// console.log(len)
// console.log(typeof(target))
});