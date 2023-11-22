// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue

// You need to write assertions for your function to check it works in different cases

// Acceptance criteria:

// Given a card string in the format "A♠" (representing a card in blackjack),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value

// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "10",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).

// Handle Face Cards (J, Q, K):
// Given a card with a rank of "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.

// Handle Ace (A):
// Given a card with a rank of "A",
// When the function is called with an Ace,
// Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.

// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."
//...........................................................

//ANSWER


function getCardValue(card) {
    // first we need to extract the rank  and leave the name
    const rank = card.slice(0, -1);
    //  second we need to check if the card is a number card (2-10)
    if (/^[2-9]|10$/.test(rank)) {
      // Return the number value of the card
      return parseInt(rank);
    }
    // next we need to check if the card is (J, Q, K)
    else if (rank === "J" || rank === "Q" || rank === "K") {
      // these cards are worth 10 points
      return 10;
    }
    // then we check if the card is an Ace (A)
    else if (rank === "A") {
      // Aces are worth 11 points
      return 11;
    }
    // after that If the card is not recognized, show an error
    else {
      // Show an error message for cards we don't understand
      throw new Error("Invalid caRd.");
    }
  }
