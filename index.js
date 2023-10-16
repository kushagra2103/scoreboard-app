let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let countHome=0;
let countGuest=0;

function increaseHomeScoreOne(){
    countHome+=1;
    homeScore.textContent=countHome;
}

function increaseHomeScoreTwo(){
    countHome+=2;
    homeScore.textContent=countHome;
}

function increaseHomeScoreThree(){
    countHome+=3;
    homeScore.textContent=countHome;
}

function increaseGuestScoreOne(){
    countGuest+=1;
    guestScore.textContent=countGuest;
}

function increaseGuestScoreTwo(){
    countGuest+=2;
    guestScore.textContent=countGuest;
}

function increaseGuestScoreThree(){
    countGuest+=3;
    guestScore.textContent=countGuest;
}

function newGame(){
    let ng =0;
    countGuest=ng;
    countHome=0;
    guestScore.textContent=ng;
    homeScore.textContent=ng;
}