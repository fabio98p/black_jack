var cards = []
var card =0 
var cardRand = 0
var score = 0
var totalScore = 0
var j = 1
var y = 1

//creazione mazzo di carte
for (let i = 1; i <= 52; i++) {
    cards.push({
        id: i,
        number: j,
        seed: y
    })
    if(j >= 13){
        j=1
        y++
    }else{
        j++
    }    
}

getNewCard();

btn = document.getElementById("btn2")
btn.addEventListener("click", (e)=>{
    getNewCard()
});

function getNewCard(){
    if(card){
        document.getElementById("youcards").innerHTML += `<h2>la carta e' di numero ${card.number} e di tipo ${card.seed}</h2>`;
    }
    card = cards[Math.floor(Math.random() * cards.length)]
    var cardIndex = cards.findIndex(a => a.id == card.id); 
    cards.splice(cardIndex, 1);
    document.getElementById("newcards").innerHTML = `<h2>la carta e' di numero ${card.number} e di tipo ${card.seed}</h2>`;
    scorFunc(card)
}

function scorFunc(card){
    score = card.number
    if(score >= 10){
        score = 10
    }
    totalScore += score
    console.log(totalScore, score);
    if (totalScore > 21) {
        document.getElementById("risultato").innerHTML = `<h2>hai perso, il tuo score totale ha superato 21 ed e' ${totalScore}</h2>`
    }

}