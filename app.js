let seat = null;
let price = null;
while (true) {
    seat = prompt(`Please enter your Seat Zone: \n o Zone-1 Standing: AA / BB \n o Zone-2 Sitting: SB / SC / SD / SE / SF \n o Zone-3 Sitting: B / C / D / E / F`, "");
    seat = seat.toUpperCase();
    if (seat.length > 2 || seat.length == 0) {
        alert("The received zone is 'NOT VALID'");
    } else if (!["AA", "BB", "SB", "SC", "SD", "SE", "SF", "B", "C", "D", "E", "F"].includes(seat)) {
        alert("The selected zone is 'NOT IN THE AVALIABLE LIST'");
    } else break;
}
switch (seat) {
    case "AA":
        price = 6500;
        break;
    case "BB":
        price = 5000;
        break;
    case "SB":
    case "SC":
    case "SD":
    case "SE":
    case "SF":
        price = 4500;
        break;
    case "B":
    case "C":
    case "D":
    case "E":
    case "F":
        price = 3500;
        break;
}

if (price !== null)
    alert(`The ticket in this zone is ${price.toLocaleString()} THB`);