//initial values
var rate = {
        "BuzzCoin":1,
        "ByteCoin":1,
        "DoggyCoin":1,
        "NitroCoin":1,
        "ScubaCoin":1,
        "LegendCoin":1,
        "SuperCoin":1,
        "CatCoin":1,
        "KittyCoin":1,
        "RubberDuckCoin":1,
        "TrumpCoin":1,
        "BidenCoin":1,
        "Coal":1,
        "Iron":1,
        "Gold":1,
        "Silver":1,
        "Steel":1,
        "Diamond":1,
        "Emerald":1,
        "Amberite":1,
    };
var cur = "BuzzCoin";
var coins = 
    {
        "BuzzCoin":0,
        "ByteCoin":0,
        "DoggyCoin":0,
        "NitroCoin":0,
        "ScubaCoin":0,
        "LegendCoin":0,
        "SuperCoin":0,
        "CatCoin":0,
        "KittyCoin":0,
        "RubberDuckCoin":0,
        "TrumpCoin":0,
        "BidenCoin":0,
        "Coal":0,
        "Iron":0,
        "Gold":0,
        "Silver":0,
        "Steel":0,
        "Diamond":0,
        "Emerald":0,
        "Amberite":0,
    };
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
        mine:() => (coins[cur])
    },{
        name:"The Minor Mazo Miner",
        description:"a cheaper version of the Mazo Miner, this is the second best crypto miner in the game!",
        price:30000000000,
        mine:() => (coins[cur] * 8)
    },{
        name:"Mazo Miner",
        description:"This miner is top secret! It is the best miner in the game, and will be until, well, never!",
        price:100000000000,
        mine:() => (coins[cur] * 10)
    },{
        name:"??????????????????????????",
        description:"<span style='color:red !important;'>[CLASSIFIED]</span>",
        price:10000000000003,
        mine:() => (coins[cur] * 15 + 90000000)
    },
];

//constant interval
function m(n, d = 1) {
    x=(''+n).length,p=Math.pow,d=p(10,d)
    x-=x%3
    return Math.round(n*d/p(10,x))/d+" kMBtqQsSondUDT"[x/3]
}

function auto() {
    for(var l in rate) {
    rate[l] += (-0.05 + Math.random()/10);
    rate[l] = Math.round(rate[l]*100)/100;
    if(rate[l] <= 0) rate[l] = 0.01; 
    document.getElementById("rate").textContent = rate[cur];
    document.querySelectorAll("tbody tr")[l][1];
    }

    for(var i of miners) {
        coins[cur] += list[i].mine();
    }
    document.getElementById("coins").textContent = m(Math.round(coins[cur]));

    if(cash >= 200000000000) {
        if(confirm('You have unlocked ability to advance to next level and new currencies\nIt will be a rebirth, and all your money and miners will be cleared\n\nPress OK if you would like to advance\nPress Cancel if you decline upgrade')) {
            coins = {
        "BuzzCoin":0,
        "ByteCoin":0,
        "DoggyCoin":0,
        "NitroCoin":0,
        "ScubaCoin":0,
        "LegendCoin":0,
        "SuperCoin":0,
        "CatCoin":0,
        "KittyCoin":0,
        "RubberDuckCoin":0,
        "TrumpCoin":0,
        "BidenCoin":0,
        "Coal":0,
        "Iron":0,
        "Gold":0,
        "Silver":0,
        "Steel":0,
        "Diamond":0,
        "Emerald":0,
        "Amberite":0,
    };
        cash = 0;
        document.getElementById("balance").textContent = `$${m(cash)}`;
        document.getElementById("coins").textContent = `${m(coins[cur])}`;
        
        miners = [0];
        document.getElementById('miners').innerHTML = 'Minex - Basic - v1.0.13 (Default)<br/>';
        cur = "Coal";
        
        }
    }
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
    if(e > 0 && e <= coins[cur]) {
        coins[cur] -=e;
        cash += e * rate[cur];
        coins[cur] = Math.floor(coins[cur]);
        cash = Math.floor(cash);
        document.getElementById("balance").textContent = `$${m(cash)}`;
        document.getElementById("coins").textContent = `${m(coins[cur])}`;
    } else {
        alert("Invalid transaction!");
    }
}
function invest() {
    var e = parseInt(document.getElementById("investAmount").value);
    if(e > 0 && e <= cash) {
        cash -=e;
        coins[cur] += e * (1/rate[cur]);
        document.getElementById("balance").textContent = `$${m(cash)}`;
        document.getElementById("coins").textContent = `$${m(coins[cur])}`;
    } else {
        alert("Invalid transaction!");
    }
}

    
var autoLoop = window.setInterval(auto, 1000);

    
for(var i of list) {
    
    document.getElementById("shop").innerHTML += `<h3>${i.name}</h3><p>${i.description}<br/>Price: $${m(i.price)}<br/><button onclick="purchase(${list.indexOf(i)})">Buy</button></p>`;
}
