var btn = document.querySelector(".btn");
btn.addEventListener("click", generateFact);



function generateFact() {

    var factArray = [
        "Columbus is home to one of the biggest Pride events in the country!",
        "Columbus is home to the country's first ever standalone mental health pavilion!",
        "Columbus is the home city of many famous people including Simone Biles, Guy Fieri, and R.L. Stine!",
        "Lincoln learned he would become president while at the columbus statehouse!",
        "The NFL headquartered in columbus in the 1930s!",
        "The tallest building in Columbus is the Rhodes State Office Tower standing at nearly 650 feet!",
        "forty eight percent of Americans live within a day's drive from Columbus!",
        "Ohio obtained statehood in 1803, but Columbus wasn't the capitol until 1816!",
        "The very first Wendy's was opened here!",
        "Columbus is the third most important city in the country for fashion!"
]

var randomFact = Math.floor(Math.random() * factArray.length)
document.getElementById("generate").textContent = factArray[randomFact]

}