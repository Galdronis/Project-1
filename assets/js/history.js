var btn = document.querySelector(".btn");
var generateFact = document.getElementById("generate")
var sports = document.getElementById("sports")
var random = document.getElementById("random")
var social = document.getElementById("social")
var food = document.getElementById("food")
var select = document.getElementById("categories").value


var sportsArray = [
        "The NFL headquartered in columbus in the 1930s!",
        "The OSU marching band is also known as The Best Damn Band in the Land!",
        "The Old Columbus Crew Stadium was the first dedicated soccer stadium in the country!",
]

var randomArray = [
        "The tallest building in Columbus is the Rhodes State Office Tower standing at nearly 650 feet!",
        "Columbus is the home city of many famous people including Simone Biles and R.L. Stine!",
]

var foodArray = [
        "The very first Wendy's was opened here!",
        "Famous chef Guy Fieri was born here!",
    ]

var socialArray = [
        "Columbus is the third most important city in the country for fashion!",
        "Ohio obtained statehood in 1803, but Columbus wasn't the capitol until 1816!",
        "forty eight percent of Americans live within a day's drive from Columbus!",
        "Lincoln learned he would become president while at the columbus statehouse!",
        "Columbus is home to the country's first ever standalone mental health pavilion!",
        "Columbus is home to one of the biggest Pride events in the country!",
]


btn.addEventListener("click", function(event) {
    var element = event.target
    console.log(element)
    if (element === sports) {
        console.log("anything")
    }
}
)