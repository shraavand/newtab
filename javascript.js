var quotes = [
    '"I thought you put it on afterwards"',
    '"WHAAAAAATTTTTTTTTT"',
    '"Whats wrong with that?"',
    '"2+2=orange, look under the storage"',
    '"OHM is a hottie"',
    '"Whats up guys omega herobrine back with another video"',
    '"Dont let your dreams be memes"',
    '"Perhaps two easy"',
    '"Via an array of sunshine"',
    '"28 point lead"',
    '"The cool down period bewtween BTS and QL"',
    '"Bingo"',
    '"The wire strippers"',
    '"Subscriber Showdown"',
    '"Ship yourself"',
    '"Johns TCPDPDTSJHFSKJAD sever"',
    '"Was that one catch worth it?"',
    '"True Grit"',
    '"My sub caught on fire/smoke"',
    '"Pro Pingus player"',
    '"Lets bring Elon Musk to our school"',
    '"RIP HIRSCH"',
    '"KAPPA KAPPA"',
    '"Kappa pride"',
    '"Agent s"',
    '"Make Healthy Choices"',
    '"Hey guys __ here back with another video"',
    '"Extra?!"',
   
    
           
]

function newQuote() {
    console.log("shraavan is dumb");
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
   
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
    
}

  