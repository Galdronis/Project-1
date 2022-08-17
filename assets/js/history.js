var btn = document.querySelector(".btn");

btn.addEventListener("click", generateFact);



function generateSportsArray() {

    var sportsArray = [
        "The NFL headquartered in columbus in the 1930s!",
        "The OSU marching band is also known as The Best Damn Band in the Land!",
]

var randomFact = Math.floor(Math.random() * sportsArray.length)
document.getElementById("generate").textContent = sportsArray[randomFact]

}

function generateRandomArray() {
    var randomArray = [
        "The tallest building in Columbus is the Rhodes State Office Tower standing at nearly 650 feet!",
        "Columbus is the home city of many famous people including Simone Biles and R.L. Stine!",
]

var randomFact = Math.floor(Math.random() * randomArray.length)
document.getElementById("generate").textContent = randomArray[randomFact]

}

function generateFoodArray() {
    var foodArray = [
        "The very first Wendy's was opened here!",
        "Famous chef Guy Fieri was born here!",
    ]

var randomFact = Math.floor(Math.random() * foodArray.length)
document.getElementById("generate").textContent = foodArray[randomFact]
}

function generateSocialArray() {
    var socialArray = [
        "Columbus is the third most important city in the country for fashion!",
        "Ohio obtained statehood in 1803, but Columbus wasn't the capitol until 1816!",
        "forty eight percent of Americans live within a day's drive from Columbus!",
        "Lincoln learned he would become president while at the columbus statehouse!",
        "Columbus is home to the country's first ever standalone mental health pavilion!",
        "Columbus is home to one of the biggest Pride events in the country!",
]

var randomFact = Math.floor(Math.random() * socialArray.length)
document.getElementById("generate").textContent = socialArray[randomFact]
    

}








