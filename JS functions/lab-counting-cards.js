** start of script.js **

let count = 0;

function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    let decision = "";
    if (count > 0) {
        decision = "Bet";
    } else {
        decision = "Hold";
    }

    return count + " " + decision;
}

cc(2); cc(3); cc(4); cc(5);
console.log(cc(6));

cc(7); cc(8);
console.log(cc(9));

count = 0;
cc(10); cc("J"); cc("Q"); cc("K");
console.log(cc("A"));


** end of script.js **

