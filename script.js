//initial values
var rate = 1;
var coins = 0;
var cash = 0;
var miners = [0];
var list = [
    {
        name:"Minex - Basic - v1.0.10",
        description:"A basic miner that mines one coin at a 20% rate. Older version of Minex - Basic - v1.0.13.",
        price:10,
        mine:() => (Math.random() <= 0.2 ? 1 : 0)
    },{
        name:"Minex - Basic - v1.0.13",
        description:"A basic miner that mines one coin at a 40% rate.",
        price:20,
        mine:() => (Math.random() <= 0.4 ? 1 : 0)
    },{
        name:"Coiner - Original Coiner",
        description:"Coiner's original miner is one of the oldest miners still available today, yet is better than some modern ones.",
        price:60,
        mine:() => (Math.random() <= 0.5 ? 15 : 0)
    },{
        name:"Coiner - Deluxe Coiner",
        description:"Coiner's modified debut is a cheap yet efficient miner, especially when purchased in bulk.",
        price:200,
        mine:() => (Math.random() <= 0.55 ? 20 : 0)
    },{
        name:"Minex - GoldMine - v1.0.10",
        description:"Minex's GoldMine is an incredible and fast miner that mines between 50 and 300 coins per mine.",
        price:1500,
        mine:() => (Math.floor((Math.random() * 250) + 50))
    },{
        name:"Minex - GoldMine - v1.0.16",
        description:"A more powerful version of the Minex - GoldMine v1.0.10. Mines 100 to 1000 coins per mine.",
        price:2800,
        mine:() => (Math.floor((Math.random() * 900) + 100))
    },{
        name:"Coiniverse - Megamine 1",
        description:"The first item in Coiniverse's Megamine series.",
        price:5000,
        mine:() => (Math.floor((Math.random() * 2000) + 500))
    },{
        name:"Coiniverse - Megamine 2",
        description:"The second item in Coiniverse's Megamine series.",
        price:8500,
        mine:() => (Math.floor((Math.random() * 3000) + 2000))
    },{
        name:"Coiniverse - Megamine 3",
        description:"The third item in Coiniverse's Megamine series.",
        price:12000,
        mine:() => (Math.floor((Math.random() * 5000) + 5000))
    },{
        name:"Coiniverse - Megamine 4",
        description:"The fourth item in Coiniverse's Megamine series.",
        price:20000,
        mine:() => (Math.floor((Math.random() * 20000) + 10000))
    },{
        name:"Coiniverse - Megamine 5",
        description:"The fifth item in Coiniverse's Megamine series.",
        price:28000,
        mine:() => (Math.floor((Math.random() * 40000) + 10000))
    },{
        name:"Coiniverse - Megamine 6",
        description:"The sixth and final item in Coiniverse's Megamine series.",
        price:40000,
        mine:() => (Math.floor((Math.random() * 80000) + 20000))
    },{
        name:"Coiniverse - \"The Powerhouse\"",
        description:"Dubbed \"Megamine 7\", this miner is worth its high value, and will send your coins through the roof.",
        price:65000,
        mine:() => (Math.floor((Math.random() * 700000) + 50000))
    },{
        name:"Coiniverse - \"Da Big Boy\"",
        description:"They just keep getting better! This miner is equiped with the newest gamechanging technology.",
        price:54000000,
        mine:() => (Math.floor((Math.random() * 1200000) + 80000))
    },{
        name:"Coiniverse - Doubler",
        description:"This elite miner from Coiniverse doubles your coins every mine!",
        price:10000000000,
        mine:() => (coins)
    },{
        name:"The Minor Mazo Miner",
        description:"a cheaper version of the Mazo Miner, this is the second best crypto miner in the game!",
        price:30000000000,
        mine:() => (coins * 8)
    },{
        name:"Mazo Miner",
        description:"This miner is top secret! It is the best miner in the game, and will be until, well, never!",
        price:100000000000,
        mine:() => (coins * 10)
    },{
        name:"??????????????????????????",
        description:"<span style='color:red !important;'>[CLASSIFIED]</span>",
        price:54000000,
        mine:() => (Math.floor((Math.random() * 1200000) + 80000))
    },
];

//constant interval
function m(n, d = 1) {
    x=(''+n).length,p=Math.pow,d=p(10,d)
    x-=x%3
    return Math.round(n*d/p(10,x))/d+" kMBtqQsSondUDT"[x/3]
}

function auto() {
    rate += (-0.05 + Math.random()/10);
    rate = Math.round(rate*100)/100;
    if(rate <= 0) rate = 0.01; 
    document.getElementById("rate").textContent = rate;

    for(var i of miners) {
        coins += list[i].mine();
    }
    document.getElementById("coins").textContent = m(Math.round(coins));
}

//purchase function
function purchase(item) {
    if(list[item].price <= cash) {
        cash -= list[item].price;
        miners.push(item);
        document.getElementById("miners").innerHTML += list[item].name+"<br/>"
        document.getElementById("balance").textContent = `$${m(cash)}`;
    } else {
        alert(`Sorry, but you do not have enough money to purchase ${list[item].name}.`);
    }
}
function add() {
    document.getElementById("main").style.display = "none";
    document.getElementById("shop").style.display = "block";
}
function back() {
    document.getElementById("shop").style.display = "none";
    document.getElementById("main").style.display = "block";
}

function exchange() {
    var e = parseInt(document.getElementById("exchangeAmount").value);
    if(e > 0 && e <= coins) {
        coins -=e;
        cash += e * rate;
        coins = Math.floor(coins);
        cash = Math.floor(cash);
        document.getElementById("balance").textContent = `$${m(cash)}`;
        document.getElementById("coins").textContent = `${m(coins)}`;
    } else {
        alert("Invalid transaction!");
    }
}
function invest() {
    var e = parseInt(document.getElementById("investAmount").value);
    if(e > 0 && e <= cash) {
        cash -=e;
        coins += e * (1/rate);
        document.getElementById("balance").textContent = `$${m(cash)}`;
        document.getElementById("coins").textContent = `$${m(coins)}`;
    } else {
        alert("Invalid transaction!");
    }
}
window.setInterval(auto, 1000);
for(var i of list) {
    
    document.getElementById("shop").innerHTML += `<h3>${i.name}</h3><p>${i.description}<br/>Price: $${m(i.price)}<br/><button onclick="purchase(${list.indexOf(i)})">Buy</button></p>`;
}
