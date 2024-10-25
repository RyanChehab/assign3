// hard coded options
var words = [
    "apple", "banana", "cherry", "dog", "elephant", "flower", "grape", "house", "iguana", "jacket",
    "kite", "lemon", "mountain", "notebook", "orange", "pencil", "queen", "rabbit", "sun", "turtle",
    "umbrella", "violin", "whale", "xylophone", "yogurt", "zebra", "airplane", "balloon", "cloud", "dinosaur",
    "eagle", "fish", "giraffe", "helicopter", "island", "jelly", "kangaroo", "lamp", "moon", "nest",
    "octopus", "paint", "quilt", "robot", "star", "train", "unicorn", "vase", "wind", "x-ray",
    "yogurt", "anchor", "bicycle", "cactus", "drum", "envelope", "feather", "ghost", "honey", "ice",
    "jigsaw", "koala", "leaf", "mushroom", "necklace", "olive", "pancake", "quokka", "rainbow", "snow",
    "telescope", "acorn", "bell", "cupcake", "dove", "espresso", "flamingo", "garden", "heart", "igloo",
    "jackal", "kiwi", "lollipop", "mermaid", "narwhal", "otter", "pineapple", "quiver", "raccoon", "snowflake",
    "toucan", "vanilla", "wolverine", "xerus", "yak", "zest", "avocado", "beetle", "cinnamon", "daffodil"
];

// picking random word
function generate(words){
    var random = Math.floor(Math.random() * words.length);
    return words[random];
}

// this is the real answere
target= generate(words)
console.log(target)
