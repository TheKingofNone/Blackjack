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

$(document).ready(function(){
    $("#bttn1").click(function(){
        $("#bttn1, .blackjack").hide();
        $("#bttn4").removeClass("hidden").addClass("container");
    });
});
$("#bttn4").click(function(){
    $("#bttn4").removeClass("container").addClass("hidden");
    grabDeck = [...newDeck];
    playerHand = [];
    houseHand = [];
    console.log(grabDeck);
    startingDeal();
});
$("#bttn2").click(function(){
     deal(playerHand);
     console.log(playerHand);
     let sum1 = addHand(playerHand);
     console.log(sum1);
     if ((sum1 > 21) === true){
        hideHitStand();
        $("#bttn5").removeClass("hidden").addClass("container");
        console.log(sum1 + ", You Bust");
    };
});
$("#bttn3").click(function(){
    let sum1= addHand(playerHand);
    let sum2 = addHand(houseHand);
    while (sum2 < 17){
        deal(houseHand);
        sum2 = addHand(houseHand);
    }
    console.log(sum2);
    if ((sum2 > 21) === true){
        hideHitStand();
        $("#bttn5").removeClass("hidden").addClass("container");
        console.log("house busts you win");
     }
     else{
        hideHitStand();
        console.log("player- " + sum1 + " house- " + sum2);
        if ((sum1 > sum2) === true){
           console.log("you win");
        }
        else if((sum2 > sum1) === true){
            console.log("you lose");
        }
        else{
            console.log("Push");
        };
        $("#bttn5").removeClass("hidden").addClass("container");
    }
});
$("#bttn5").click(function(){
    // grabDeck = null;
    // playerHand = null;
    // houseHand = null;
    $("#bttn5").removeClass("container").addClass("hidden");
    $("#bttn4").removeClass("hidden").addClass("container");
})
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
function startingDeal(){
    $("#bttn2, #bttn3").removeClass("hidden").addClass("container");
        shuffle(grabDeck);
        deal(playerHand);
        deal(houseHand);
        deal(playerHand);
        deal(houseHand);
        console.log(playerHand);
        console.log(houseHand);
        let sum1 = addHand(playerHand);
        let sum2 = addHand(houseHand);
        if (sum1 === 21 && sum2 != 21){
            hideHitStand();
            $("#bttn5, #blackjackWin").removeClass("hidden").addClass("container");
            console.log("Blackjack-- You Win!");
        }
        else if (sum1 === 21 && sum2 === 21){
            hideHitStand();
            $("#bttn5, #push").removeClass("hidden").addClass("container");
            console.log("Player and House Made Blackjack, Push");
        }
        else if (sum1 != 21 && sum2 === 21){
            hideHitStand();
            $("#bttn5, #houseBlackjack").removeClass("hidden").addClass("container");
            console.log("House Made Blackjack, You Lose");
        }
}
function hideHitStand(){
    $("#bttn2, #bttn3").removeClass("container").addClass("hidden");
}
/*function which adds together the weights of an array, then checks for aces to give aces different values if necessary*/
function addHand(array){
    let handWeight = array.map(({name : letters, weight : value}) => (value));
    let sum = handWeight.reduce((acc, num) => acc + num);
    return sum;
    // let handNames = array.map(({name : letters, weight : value}) => (letters));
    // let checkForAce = handNames.some(() => 'dA' || 'hA' || 'sA' || 'cA');
    //     while (sum>21){
    //         if ((checkForAce === true) && (numAces.length = 1)){
    //             let

    //         }
    //     }
}




