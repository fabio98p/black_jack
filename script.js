var cards = [];
var card = 0;
var cardRand = 0;
var score = 0;
var yourTotalScore = 0;
var enemyTotalScore = 0;
var game = true;
var j = 1;
var y = 1;

//creazione mazzo di carte
for (let i = 1; i <= 52; i++) {
	cards.push({
		id: i,
		number: j,
		seed: y,
	});
	if (j >= 13) {
		j = 1;
		y++;
	} else {
		j++;
	}
}

btn = document.getElementById("btn2");
btn.addEventListener("click", (e) => {
	myNewCard();
});
btn = document.getElementById("btn1");
btn.addEventListener("click", (e) => {
	enemyNewCard();
});

function myNewCard() {
	removeCardFromDeck()
	myScore(card);
	document.getElementById("youcards").innerHTML += `<h2>la carta e' di numero ${card.number} e di tipo ${card.seed}</h2>`;
}

function enemyNewCard(){
	while(game){
		removeCardFromDeck()
		enemyScore(card)
		document.getElementById("enemycards").innerHTML += `<h2>la carta e' di numero ${card.number} e di tipo ${card.seed}</h2>`;
		if (enemyTotalScore > 21) {
			document.getElementById("risultato").innerHTML += `<h2>hai vinto te, il tuo nemico ha fatto ${enemyTotalScore} mentre tu hai fatto ${yourTotalScore}</h2>`;			
			game = false;
		}else if(enemyTotalScore > yourTotalScore){
			document.getElementById("risultato").innerHTML += `<h2>ha vinto il tuo nemico facendo uno score di ${enemyTotalScore} mentre il tuo e' di ${yourTotalScore}</h2>`;			
			game = false;
		}
	}
}

function removeCardFromDeck(){
	card = cards[Math.floor(Math.random() * cards.length)];
	var cardIndex = cards.findIndex((a) => a.id == card.id);
	cards.splice(cardIndex, 1);
}

function myScore(card) {
	score = card.number;
	if (score >= 10) {
		score = 10;
	}
	yourTotalScore += score;
	console.log(yourTotalScore, score);
	if (yourTotalScore > 21) {
		document.getElementById("risultato").innerHTML = `<h2>hai perso, il tuo score totale ha superato 21 ed e' ${yourTotalScore}</h2>`;
	}
}
function enemyScore(card) {
	score = card.number;
	if (score >= 10) {
		score = 10;
	}
	enemyTotalScore += score;
	console.log(enemyTotalScore, score);
}