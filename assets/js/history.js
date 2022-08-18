var btn = document.querySelector(".btn");
var generateFact = document.getElementById("generate")
var sports = document.getElementById("sports").value
var random = document.getElementById("random").value
var social = document.getElementById("social").value
var food = document.getElementById("food").value
var select = document.getElementById("categories").value


var sportsArray = [
        "The NFL headquartered in Columbus in the 1930s!",
        "The OSU marching band is also known as The Best Damn Band in the Land!",
        "The Old Columbus Crew Stadium was the first dedicated soccer stadium in the country!",
]

var randomArray = [
        "The tallest building in Columbus is the Rhodes State Office Tower standing at nearly 650 feet!",
        "Columbus is the home city of many famous people including Simone Biles and R.L. Stine!",
]

var foodArray = [
        "The very first Wendy's was opened here!",
        
    ]

var socialArray = [
        "Columbus is the third most important city in the country for fashion!",
        "Ohio obtained statehood in 1803, but Columbus wasn't the capitol until 1816!",
        "forty eight percent of Americans live within a day's drive from Columbus!",
        "Lincoln learned he would become president while at the columbus statehouse!",
        "Columbus is home to the country's first ever standalone pediatric mental health pavilion!",
        "Columbus is home to one of the biggest Pride events in the country!",
]

var famousArray = [
    "Famous chef Guy Fieri was born here!",

]


btn.addEventListener("click", function(event) {
    
         var selectEl = document.getElementById("categories");
        console.log(selectEl);
    
        var selection = selectEl.value;
        console.log("selection: " + selection);
    
        if (selection === "Sports") {
            var randomFact = Math.floor(Math.random() * (sportsArray.length))
            document.getElementById("generate").innerHTML = sportsArray[randomFact]
        } 
        else if (selection === "Random") {
                var randomFact = Math.floor(Math.random() * (randomArray.length))
                document.getElementById("generate").innerHTML = randomArray[randomFact]
        }
        else if (selection === "Social") {
            var randomFact = Math.floor(Math.random() * (socialArray.length))
                document.getElementById("generate").innerHTML = socialArray[randomFact]
        }
        else if (selection === "Food") {
            var randomFact = Math.floor(Math.random() * (foodArray.length))
                document.getElementById("generate").innerHTML = foodArray[randomFact]
        }
        else if (selection === "Famous") {
            var randomFact = Math.floor(Math.random() * (foodArray.length))
                document.getElementById("generate").innerHTML = foodArray[randomFact]
        }
        
        }
    )