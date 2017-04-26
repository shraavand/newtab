var quotes = [
    '"I thought you put it on afterwards"',
    '"Whats wrong with that?"',
    '"2+2=orange, look under the storage"',
    '"OHM is a hottie"',
    '"Whats up guys omega herobrine back with another video"',
    '"Perhaps two easy"',
    '"Via an array of sunshine"',
    '"28 point lead"',
    '"The cool down period bewtween BTS and QL"',
    '"Bingo"',
    '"The wire strippers"',
    '"Johns TCPDPDTSJHFSKJAD sever"',
    '"Was that one catch worth it?"',
    '"My sub caught on fire/smoke"',
    '"Lets bring Elon Musk to our school"',
    '"RIP HIRSCH"',
    '"KAPPA KAPPA"',
    '"Agent s"',
    '"Make Healthy Choices"',
    '"Hey guys __ here back with another video"',
    '"Extra?!"',
    '"Im sorry I have to go take a photo"',
    '"If its red your dead"',
    '"Go make a blog!"',
    '"If youre reading this you dont need glasses"',
    '"Last years reveal video"',
    '"Your not just editing a video,youre making a story"',
    '"I dont speak gujurathi"',
   
    
           
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


 
