function getComputerChoice() {
    // function will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
    // use math.floor(math.random() * 3) + 1 to return a random num between 1 and 3
    // if num === 1 return elif num == 2 return Paper otherwise return ‘Scissors’
    let randomNum = Math.floor(Math.random() * 3) + 1
    if (randomNum === 1) {
        return 'Rock';
    } else if (randomNum === 2){
        return 'Paper';
    }
    return 'Scissors';
}