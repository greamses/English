import generateActivity from '/Grammar/Comma Activity/main.js';

const sentences = [
    // Introductory phrases/clauses
  {
    text: "After school we ate pizza.",
    correctPositions: [1], // After "school"
    hint: "Use a comma after an introductory phrase."
    },
  {
    text: "While I was sleeping the cat knocked over the vase.",
    correctPositions: [3], // After "sleeping"
    hint: "Use a comma after an introductory dependent clause."
    },

    // Items in a series
  {
    text: "She bought apples oranges and bananas at the store.",
    correctPositions: [2, 3], // After "apples" and "oranges"
    hint: "Use commas to separate items in a series (Oxford comma optional)."
    },
  {
    text: "For breakfast I had eggs toast and juice.",
    correctPositions: [4, 5], // After "eggs" and "toast"
    hint: "Use commas between three or more items in a list."
    },

    // Non-essential clauses
  {
    text: "The movie which was three hours long finally ended.",
    correctPositions: [1, 6], // After "movie" and "long"
    hint: "Use commas to set off non-essential (non-restrictive) clauses."
    },
  {
    text: "My brother who lives in Chicago is visiting next week.",
    correctPositions: [1, 5], // After "brother" and "Chicago"
    hint: "Use commas when the information could be removed without changing the meaning."
    },

    // Introductory words
  {
    text: "Yes I would like to go to the park.",
    correctPositions: [0], // After "Yes"
    hint: "Use a comma after introductory words like 'yes', 'no', or 'well'."
    },
  {
    text: "Well I suppose we could try again.",
    correctPositions: [0], // After "Well"
    hint: "Use a comma after introductory interjections."
    },

    // Coordinate adjectives
  {
    text: "The tall dark handsome actor won the award.",
    correctPositions: [1, 2], // After "tall" and "dark"
    hint: "Use commas to separate coordinate adjectives (test with 'and')."
    },
  {
    text: "She wore a bright colorful flowing dress.",
    correctPositions: [3, 4], // After "bright" and "colorful"
    hint: "Use commas between adjectives that equally modify the noun."
    },

    // Direct address
  {
    text: "John please pass the salt.",
    correctPositions: [0], // After "John"
    hint: "Use commas when directly addressing someone."
    },
  {
    text: "I hope you know Doctor that we appreciate your help.",
    correctPositions: [3, 4], // After "know" and "Doctor"
    hint: "Use commas to set off names or titles in direct address."
    },

    // Dates and addresses
  {
    text: "On June 5 2023 we moved to Boston.",
    correctPositions: [2, 3], // After "June" and "5"
    hint: "Use commas between day and year in dates."
    },
  {
    text: "She lives at 123 Main Street Springfield Illinois.",
    correctPositions: [5, 6], // After "Street" and "Springfield"
    hint: "Use commas between city and state/province in addresses."
    },

    // Contrasting clauses
  {
    text: "The puppy was cute but very mischievous.",
    correctPositions: [3], // After "cute"
    hint: "Use a comma before contrasting clauses beginning with 'but'."
    },
  {
    text: "It was my money not yours.",
    correctPositions: [3], // After "money"
    hint: "Use commas to set off contrasting expressions."
    },

    // Quotations
  {
    text: "She said \"I'll be there by 5\" and left.",
    correctPositions: [1], // After "said"
    hint: "Use commas to introduce quotations."
    },
  {
    text: "\"When we leave\" he whispered \"close the door quietly\".",
    correctPositions: [3, 6], // After "leave" and "whispered"
    hint: "Use commas to separate quoted dialogue from speech tags."
    },

    // Avoiding confusion
  {
    text: "To err is human to forgive divine.",
    correctPositions: [3], // After "human"
    hint: "Use commas to prevent misreading even when not grammatically required."
    }
];

generateActivity(sentences)