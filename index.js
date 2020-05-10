let yourName = prompt("What is your name?");
let herName = prompt("what is your crush name?");
var loveScore= Math.random() *40;
    loveScore = Math.floor(loveScore);

    if (herName === "emily"|| herName === "eMILY"||herName === "EMILY" || herName === "Emily" || herName === "emily oriel" || herName === "Emily Oriel" || herName === "EMILY ORIEL") {
        alert(yourName + ", Your love competability with " + herName + " is as strong as Kanye's love to Kanye! You guys should 100% go for it ❤️");
    } else {
        alert(yourName + ", Your love competability with " + herName + " is " + loveScore +"% NO BUENO!");
    }
