



let player = {
name:"per",
chips: 2,
sayHellow:function(){
console.log("heisann!")
}
}
player.sayHellow()



let cards=[]
let sum=0
let hasBlackJack=false
let isAlive=true
let messege=""
let sumMessege=document.getElementById("sum-el")
let messegeEl=document.getElementById("messege-el")
let cardsEl=document.getElementById("card-el")
let playerName="per"
let playerChips=145


let playerEl=document.getElementById("player-el")




console.log(cards)
function getRandomCard(){
  let randomNumber= Math.floor(Math.random()*13)+1
  
  if(randomNumber>10)
  {
    return 10
  }
  else if(randomNumber===1)
  {
    return 11

  }
  else
  {

    return randomNumber
  }
}

function renderGame(){

    sumMessege.textContent="Sum: " +sum
    cardsEl.textContent="Cards:"+cards

if (sum<=20)
{
    messege="DO you want to draw a new card "

}
else if  (sum===21)
{
    messege=" you got BlackJack !"
    hasBlackJack=true
}
else
{
    messege="You are out of a Game "
 isAlive=false
}

messegeEl.textContent=messege
}

function newCard(){

    if(isAlive===true&& hasBlackJack===false)
    {
    let card=getRandomCard()
    cards.push(card)
    sum+=card
    renderGame()
    } 
}

function startGame(){
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    isAlive=true
    sum=firstCard+secondCard
    renderGame()
}

function rollDice()
{
    let randomNumber=Math.floor(Math.random()*6)+1
    return randomNumber
}

console.log(rollDice())


