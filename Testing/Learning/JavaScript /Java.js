let count = 0; 
function cc(card) { 
    switch(card) {
    case 1: 
    case 2:
    case 3: 
    case 4: 
    case 5: 
    case 6:
        count++; 
        break; 
    case 10: 
    case 'J':
    case 'Q':
    case 'K': 
    case 'A':
        count--; 
        break; 
}

    var holdBet = "hold"; {
        if (count > 0) {
            holdBet = "Bet"
        }
    }
    
    return count + " " + holdBet;
}
 
cc(4); cc(4); cc(1); cc(2); cc(3);
    console.log(cc(4))