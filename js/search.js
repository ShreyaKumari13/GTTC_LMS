function search_sub() {
    // Get the value of the search input and convert it to uppercase
    let input = document.getElementById('searchbar').value.toUpperCase();
    
    // Get all user cards
    let cards = document.getElementsByClassName('user-card');
    
    // Loop through all user cards and hide those that don't match the search query
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        let cardText = card.innerText.toUpperCase();

        // Check if the card text contains the search query
        if (cardText.includes(input)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    }
}