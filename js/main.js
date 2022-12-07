
const newDeck = [
    {
        name :'hearts-A',
        weight : 11,
    },
    {
        name :'diamonds-A',
        weight : 11,
    },
    {
        name :'spades-A',
        weight : 11,
    },
    {
        name :'clubs-A',
        weight : 11,
    },
    {
        name :'hearts-K',
        weight : 10,
    },
    {
        name :'diamonds-K',
        weight : 10,
    },
    {
        name :'spades-K',
        weight : 10,
    },
    {
        name :'clubs-K',
        weight : 10,
    },
    {
        name :'hearts-Q',
        weight : 10,
    },
    {
        name :'diamonds-Q',
        weight : 10,
    },
    {
        name :'spades-Q',
        weight : 10,
    },
    {
        name :'hearts-J',
        weight : 10,
    },
    {
        name :'diamonds-J',
        weight : 10,
    },
    {
        name :'spades-J',
        weight : 10,
    },
    {
        name :'clubs-J',
        weight : 10,
    },
    {
        name :'clubs-Q',
        weight : 10,
    },
    {
        name :'hearts-r10',
        weight : 10,
    },
    {
        name :'diamonds-r10',
        weight : 10,
    },
    {
        name :'spades-r10',
        weight : 10,
    },
    {
        name :'clubs-r10',
        weight : 10,
    },
    {
        name :'hearts-r09',
        weight : 9,
    },
    {
        name :'diamonds-r09',
        weight : 9,
    },
    {
        name :'spades-r09',
        weight : 9,
    },
    {
        name :'clubs-r09',
        weight : 9,
    },
    {
        name :'diamonds-r08',
        weight : 8,
    },
    {
        name :'hearts-r08',
        weight : 8,
    },
    {
        name :'spades-r08',
        weight : 8,
    },
    {
        name :'clubs-r08',
        weight : 8,
    },
    {
        name :'hearts-r07',
        weight : 7,
    },
    {
        name :'diamonds-r07',
        weight : 7,
    },
    {
        name :'spades-r07',
        weight : 7,
    },
    {
        name :'clubs-r07',
        weight : 7,
    },
    {
        name :'hearts-r06',
        weight : 6,
    },
    {
        name :'diamonds-r06',
        weight : 6,
    },
    {
        name :'spades-r06',
        weight : 6,
    },
    {
        name :'clubs-r06',
        weight : 6,
    },
    {
        name :'diamonds-r05',
        weight : 5,
    },
    {
        name :'hearts-r05',
        weight : 5,
    },
    {
        name :'spades-r05',
        weight : 5,
    },
    {
        name :'clubs-r05',
        weight : 5,
    },
    {
        name :'diamonds-r04',
        weight : 4,
    },
    {
        name :'hearts-r04',
        weight : 4,
    },
    {
        name :'spades-r04',
        weight : 4,
    },
    {
        name :'clubs-r04',
        weight : 4,
    },
    {
        name :'hearts-r03',
        weight : 3,
    },
    {
        name :'diamonds-r03',
        weight : 3,
    },
    {
        name :'spades-r03',
        weight : 9,
    },
    {
        name :'clubs-r03',
        weight : 3,
    },
    {
        name :'hearts-r02',
        weight : 2,
    },
    {
        name :'diamonds-r02',
        weight : 2,
    },
    {
        name :'spades-r02',
        weight : 2,
    },
    {
        name :'clubs-r02',
        weight : 2,
    },
];

let grabDeck = newDeck;
let playerHand = [];
let houseHand = [];

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
    startingDeal();
});
$("#bttn2").click(function(){
     deal(playerHand);
     $("#playerHand").empty();
     makePlayerCards(playerHand);
     let sum1 = addHand(playerHand);
     if ((sum1 > 21) === true){
        hideHitStand();
        $("#bttn5").removeClass("hidden").addClass("container");
        $("#" + houseHand[0].name).attr("src", "./card-deck-css/images/backs/" + houseHand[0].name + ".svg");
        $("#results").append("Player- " + sum1);
        youBust();
    };
});
$("#bttn3").click(function(){
    let sum1= addHand(playerHand);
    let sum2 = addHand(houseHand);
    while (sum2 < 17){
        deal(houseHand);
        sum2 = addHand(houseHand);
        $("#houseHand").empty();
        makeHouseCards(houseHand);
    }
    if ((sum2 > 21) === true){
        $("#" + houseHand[0].name).attr("src", "./card-deck-css/images/backs/" + houseHand[0].name + ".svg");
        hideHitStand();
        $("#bttn5").removeClass("hidden").addClass("container");
        $("#results").append("House Busts");
        youWin();
     }
     else{
        $("#" + houseHand[0].name).attr("src", "./card-deck-css/images/backs/" + houseHand[0].name + ".svg");
        hideHitStand();
        if ((sum1 > sum2) === true){
            $("#results").append("House - " + sum2 + "    Player - " + sum1);
           youWin();
        }
        else if((sum2 > sum1) === true){
            $("#results").append("House - " + sum2 + "    Player - " + sum1);
            youLose();
        }
        else{
            $("#results").append("House - " + sum2 + "    Player - " + sum1);
            youPush();
        };
        $("#bttn5").removeClass("hidden").addClass("container");
    }
});
$("#bttn5").click(function(){
    $("#bttn5").removeClass("container").addClass("hidden");
    $("#bttn4").removeClass("hidden").addClass("container");
    $("#playerHand").empty();
    $("#houseHand").empty();
    $("#results").empty();
    $("#outcome").empty();
})
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
function makePlayerCards(hand){
    for (i=0; i<hand.length; i++){
        $("#playerHand").append("<img src='./card-deck-css/images/backs/" + hand[i].name + ".svg' id='" + hand[i].name + "'>");
        $("#" + hand[i].name).addClass("card large");
    }
}
function makeHouseCards(hand){
    for (i=0; i<hand.length; i++){
        $("#houseHand").append("<img src='./card-deck-css/images/backs/" + hand[i].name + ".svg' id='" + hand[i].name + "'>");
        $("#" + hand[i].name).addClass("card large");
    }
    $("#" + hand[0].name).attr("src", "./card-deck-css/images/backs/red.svg")
}
function youWin(){
    $("#outcome").append("You Win!");
}
function youBust(){
    $("#outcome").append("You Bust");
}
function youLose(){
    $("#outcome").append("You Lose");
}
function youPush(){
    $("#outcome").append("Push");
}
function startingDeal(){
    $("#bttn2, #bttn3").removeClass("hidden").addClass("container");
        shuffle(grabDeck);
        deal(playerHand);
        deal(houseHand);
        deal(playerHand);
        deal(houseHand);
        makeHouseCards(houseHand);
        makePlayerCards(playerHand);
        let sum1 = addHand(playerHand);
        let sum2 = addHand(houseHand);
        if (sum1 === 21 && sum2 != 21){
            hideHitStand();
            $("#bttn5, #blackjackWin").removeClass("hidden").addClass("container");
            $("#" + houseHand[0].name).attr("src", "./card-deck-css/images/backs/" + houseHand[0].name + ".svg");
            $("#results").append("Blackjack!");
            youWin();
        }
        else if (sum1 === 21 && sum2 === 21){
            hideHitStand();
            $("#bttn5, #push").removeClass("hidden").addClass("container");
            $("#" + houseHand[0].name).attr("src", "./card-deck-css/images/backs/" + houseHand[0].name + ".svg");
            $("#results").append("Player and House made Blackjack");
            youPush();
        }
        else if (sum1 != 21 && sum2 === 21){
            hideHitStand();
            $("#bttn5, #houseBlackjack").removeClass("hidden").addClass("container");
            $("#" + houseHand[0].name).attr("src", "./card-deck-css/images/backs/" + houseHand[0].name + ".svg");
            $("#results").append("House made Blackjack");
            youLose();
        }
}
function hideHitStand(){
    $("#bttn2, #bttn3").removeClass("container").addClass("hidden");
}
function addHand(array){
    let handWeight = array.map(({name : letters, weight : value}) => (value));
    let sum = handWeight.reduce((acc, num) => acc + num);
    return sum;
}


