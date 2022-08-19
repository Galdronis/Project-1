var btn = document.querySelector(".btn");
var generateFact = document.getElementById("generate")
var sports = document.getElementById("sports").value
var random = document.getElementById("random").value
var social = document.getElementById("social").value
var food = document.getElementById("food").value
var select = document.getElementById("categories").value

var anyArray = [
        "The NFL headquartered in Columbus in the 1930s!",
        "The OSU marching band is also known as The Best Damn Band in the Land!",
        "The Old Columbus Crew Stadium was the first dedicated soccer stadium in the country!",
        "Actor and voice actor J.K. Simmons is a huge Ohio State Buckeyes fan!",
        "Archie Griffith is the only college football player to win two Heisman trophies!",
        "The last professional championship a Columbus sports team won was the MLS cup in 2020!",
        "The Arnold Strongman Classic is held in Columbus!",
        "The largest single breed horse show in America is held in Columbus!",
        "Columbus is the only city in the country with two soccer specific stadiums!",
        "Former crew coach Gregg Berhalter is the current U.S. National Soccer Team coach",
        "There are eleven former Ohio State Buckeye players in the NFL hall of fame!",
        "The tallest building in Columbus is the Rhodes State Office Tower standing at nearly 650 feet!",
        "Nate is bald",
        "Woody Harrelson was arrested in 1982 in Columbus for dancing in the street!",
        "Initially, Columbus was planned to be named Ohio City!",
        "The Ohio Historical Center has a genuine two headed calf on display!",
        "in 1926, a cow was nominated as Ohio State's homecoming queen!",
        "Indianola Junior High School was the first junior high school opened in the country!",
        "The average age of Columbus residents is among the lowest in the entire country at 30-33 years old!",
        "The world's first water filtration facility was built here!",
        "Columbus ranks in the top 20 most educated cities in the country!",
        "The very first Wendy's was opened here!",
        "Fifty thousand pounds of chocolate a day are produced at the Anthony Thomas Candy Company in Columbus",
        "Man vs Food has been to Columbus five times!",
        "White Castle is headquartered in Columbus!",
        "Buckeyes were invented in Columbus!",
        "Square cut pizza with thin crust is also known as Columbus style pizza!",
        "Schmidt's Sausage Haus is a nationally known German sausage house!",
        "Columbus is the third most important city in the country for fashion!",
        "Ohio obtained statehood in 1803, but Columbus wasn't the capitol until 1816!",
        "forty eight percent of Americans live within a day's drive from Columbus!",
        "Lincoln learned he would become president while at the columbus statehouse!",
        "Columbus is home to the country's first ever standalone pediatric mental health pavilion!",
        "Columbus is home to one of the biggest Pride events in the country!",
        "Famous playboy Hugh Heffner had a Playboy Mansion built here!",
        "Columbus holds an annual Doo Dah Parade to celebrate libert, lunacy and satire!",
        "The Columbus Zoo and Aquarium had the oldest captive gorilla in history! Colo lived to be 60 years old.",
        "There's a bronze statue of Arnold Schwarzenegger in downtown Columbus!",
        "Famous chef Guy Fieri was born here!",
        "Max's sister Maggie Wright (famous by association) works at Jeni's Splendid Ice Cream!",
        "Famous for his role as Ted Mosby in How I Met Your Mother, Josh Radnor is from here!",
        "College Football star Archie Griffin is from here!",
        "Olympic gymnast and record holder Simone Biles was born here!",
        "Billionaire business tycoon Leslie Wexner was born here!",
        "Twenty One Pilots started here!",
        "Metal band Beartooth formed here!",
        "Prescott Bush, father of former President H.W. Bush was born here!",
        "Horror writer R.L. Stine was born here!",
]


var sportsArray = [
        "The NFL headquartered in Columbus in the 1930s!",
        "The OSU marching band is also known as The Best Damn Band in the Land!",
        "The Old Columbus Crew Stadium was the first dedicated soccer stadium in the country!",
        "Actor and voice actor J.K. Simmons is a huge Ohio State Buckeyes fan!",
        "Archie Griffith is the only college football player to win two Heisman trophies!",
        "The last professional championship a Columbus sports team won was the MLS cup in 2020!",
        "The Arnold Strongman Classic is held in Columbus!",
        "The largest single breed horse show in America is held in Columbus!",
        "Columbus is the only city in the country with two soccer specific stadiums!",
        "Former crew coach Gregg Berhalter is the current U.S. National Soccer Team coach",
        "There are eleven former Ohio State Buckeye players in the NFL hall of fame!",
]

var randomArray = [
        "The tallest building in Columbus is the Rhodes State Office Tower standing at nearly 650 feet!",
        "Nate is bald",
        "Woody Harrelson was arrested in 1982 in Columbus for dancing in the street!",
        "Initially, Columbus was planned to be named Ohio City!",
        "The Ohio Historical Center has a genuine two headed calf on display!",
        "in 1926, a cow was nominated as Ohio State's homecoming queen!",
        "Indianola Junior High School was the first junior high school opened in the country!",
        "The average age of Columbus residents is among the lowest in the entire country at 30-33 years old!",
        "The world's first water filtration facility was built here!",
        "Columbus ranks in the top 20 most educated cities in the country!",
]

var foodArray = [
        "The very first Wendy's was opened here!",
        "Fifty thousand pounds of chocolate a day are produced at the Anthony Thomas Candy Company in Columbus",
        "Man vs Food has been to Columbus five times!",
        "White Castle is headquartered in Columbus!",
        "Buckeyes were invented in Columbus!",
        "Square cut pizza with thin crust is also known as Columbus style pizza!",
        "Schmidt's Sausage Haus is a nationally known German sausage house!",
    ]

var socialArray = [
        "Columbus is the third most important city in the country for fashion!",
        "Ohio obtained statehood in 1803, but Columbus wasn't the capitol until 1816!",
        "forty eight percent of Americans live within a day's drive from Columbus!",
        "Lincoln learned he would become president while at the columbus statehouse!",
        "Columbus is home to the country's first ever standalone pediatric mental health pavilion!",
        "Columbus is home to one of the biggest Pride events in the country!",
        "Famous playboy Hugh Heffner had a Playboy Mansion built here!",
        "Columbus holds an annual Doo Dah Parade to celebrate libert, lunacy and satire!",
        "The Columbus Zoo and Aquarium had the oldest captive gorilla in history! Colo lived to be 60 years old.",
        "There's a bronze statue of Arnold Schwarzenegger in downtown Columbus!",
]

var famousArray = [
    "Famous chef Guy Fieri was born here!",
    "Max's sister Maggie Wright (famous by association) works at Jeni's Splendid Ice Cream!",
    "Famous for his role as Ted Mosby in How I Met Your Mother, Josh Radnor is from here!",
    "College Football star Archie Griffin is from here!",
    "Olympic gymnast and record holder Simone Biles was born here!",
    "Billionaire business tycoon Leslie Wexner was born here!",
    "Twenty One Pilots started here!",
    "Metal band Beartooth formed here!",
    "Prescott Bush, father of former President H.W. Bush was born here!",
    "Horror writer R.L. Stine was born here!",
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
        else if (selection === "Celebrities") {
            var randomFact = Math.floor(Math.random() * (famousArray.length))
                document.getElementById("generate").innerHTML = famousArray[randomFact]
        }
        else if (selection === "Any")
            var randomFact = Math.floor(Math.random() * (anyArray.length))
                document.getElementById("generate").innerHTML = anyArray[randomFact]
        }
    )