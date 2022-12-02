/*----- constants -----*/
const newDeck = [
    {
        name : 'hA',
        weight : 11,
    },
    {
        name : 'dA',
        weight : 11,
    },
    {
        name : 'sA',
        weight : 11,
    },
    {
        name : 'cA',
        weight : 11,
    },
    {
        name : 'hK',
        weight : 10,
    },
    {
        name : 'dK',
        weight : 10,
    },
    {
        name : 'sK',
        weight : 10,
    },
    {
        name : 'cK',
        weight : 10,
    },
    {
        name : 'hQ',
        weight : 10,
    },
    {
        name : 'dQ',
        weight : 10,
    },
    {
        name : 'sQ',
        weight : 10,
    },
    {
        name : 'hJ',
        weight : 10,
    },
    {
        name : 'dJ',
        weight : 10,
    },
    {
        name : 'sJ',
        weight : 10,
    },
    {
        name : 'cJ',
        weight : 10,
    },
    {
        name : 'cQ',
        weight : 10,
    },
    {
        name : 'h10',
        weight : 10,
    },
    {
        name : 'd10',
        weight : 10,
    },
    {
        name : 's10',
        weight : 10,
    },
    {
        name : 'c10',
        weight : 10,
    },
    {
        name : 'h09',
        weight : 9,
    },
    {
        name : 'd09',
        weight : 9,
    },
    {
        name : 's09',
        weight : 9,
    },
    {
        name : 'c09',
        weight : 9,
    },
    {
        name : 'd08',
        weight : 8,
    },
    {
        name : 'h08',
        weight : 8,
    },
    {
        name : 's08',
        weight : 8,
    },
    {
        name : 'c08',
        weight : 8,
    },
    {
        name : 'h07',
        weight : 7,
    },
    {
        name : 'd07',
        weight : 7,
    },
    {
        name : 's07',
        weight : 7,
    },
    {
        name : 'c07',
        weight : 7,
    },
    {
        name : 'h06',
        weight : 6,
    },
    {
        name : 'd06',
        weight : 6,
    },
    {
        name : 's06',
        weight : 6,
    },
    {
        name : 'c06',
        weight : 6,
    },
    {
        name : 'd05',
        weight : 5,
    },
    {
        name : 'h05',
        weight : 5,
    },
    {
        name : 's05',
        weight : 5,
    },
    {
        name : 'c05',
        weight : 5,
    },
    {
        name : 'd04',
        weight : 4,
    },
    {
        name : 'h04',
        weight : 4,
    },
    {
        name : 's04',
        weight : 4,
    },
    {
        name : 'c04',
        weight : 4,
    },
    {
        name : 'h03',
        weight : 3,
    },
    {
        name : 'd03',
        weight : 3,
    },
    {
        name : 's03',
        weight : 9,
    },
    {
        name : 'c03',
        weight : 3,
    },
    {
        name : 'h02',
        weight : 2,
    },
    {
        name : 'd02',
        weight : 2,
    },
    {
        name : 's02',
        weight : 2,
    },
    {
        name : 'c02',
        weight : 2,
    },
];



/*----- app's state (variables) -----*/
let grabDeck = newDeck;
let playerHand = [];
let houseHand = [];
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/
/* function which switches the last object in the array with a random object, then removes the last object from the function*/
function shuffle(array){
    let currentIndex = array.length, randomIndex;
    while  (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}
function deal(hand){
    let card = grabDeck.pop();
    hand.push(card);
}
/*function which adds together the weights of an array, then checks for aces to give aces different values if necessary*/
function addHand(array){
    let handWeight = array.map(({name : letters, weight : value}) => (value));
    let sum = handWeight.reduce((acc, num) => acc + num);
    return sum;
    // let handNames = array.map(({name : letters, weight : value}) => (letters));
    // let checkForAce = handNames.some(() => 'dA' || 'hA' || 'sA' || 'cA');
    // let numAces = handNames.filter(name => (name === 'dA' || 'hA' || 'sA' || 'cA'));
    //     while (sum>21){
    //         if ((checkForAce === true) && (numAces.length = 1)){
    //             let

    //         }
    //     }
}
shuffle(grabDeck);
deal(playerHand);
deal(playerHand);
let sumHand = addHand(playerHand);
console.log(sumHand);




