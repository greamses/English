import generateActivity from '/main.js';

const sentences = [
  {
    text: "Preparing for a Nigerian wedding requires careful planning and coordination. Before the ceremony the bride’s family must cook jollof rice fried chicken and moi moi for hundreds of guests. The energetic drummers who arrived from Lagos kept everyone dancing all night. Yes the bride’s gele which was taller than most hats drew constant admiration. When the party finally ended at dawn we were exhausted but happy.",
    correctPositions: [7, 15, 19, 20, 27, 33, 34, 40, 45, 53],
    hint: "Watch for introductory clauses, items in a series, non-essential descriptions, and interjections.",
    theme: "Nigerian wedding celebrations"
  },
  {
    text: "Lagos traffic is an experience every visitor must endure. During rush hour the roads become a sea of yellow danfo buses okadas and frustrated drivers. My uncle who has driven in Lagos for 20 years knows all the shortcuts. The hot crowded streets make even short trips feel endless. Still there’s something uniquely lively about the city’s chaotic energy.",
    correctPositions: [6, 14, 18, 19, 25, 30, 36, 43, 50],
    hint: "Contains introductory phrases, series, non-restrictive clauses, and coordinate adjectives.",
    theme: "Lagos traffic experiences"
  },
  {
    text: "Market day in my village is always a vibrant affair. Early in the morning traders arrange fresh yams ripe plantains and colorful fabrics. Auntie Ngozi the best pepper seller in the market always gives me extra chili. While bargaining for prices I practice my haggling skills. The aromatic smoky scent of suya grilling reminds me to buy some before leaving.",
    correctPositions: [6, 13, 17, 18, 24, 29, 30, 36, 43, 50],
    hint: "Includes series, direct address, introductory clauses, and coordinate adjectives.",
    theme: "Nigerian market scenes"
  },
  {
    text: "Celebrating Christmas in Nigeria blends tradition and modernity. On December 25th families attend church services before festive meals. The children wearing new Ankara outfits run around shouting “Christmas bonus!”. We eat rice stew fried chicken and chin chin until we can’t move. Although the day is exhausting the joy of togetherness makes it special.",
    correctPositions: [6, 7, 15, 22, 26, 27, 33, 38, 45, 52],
    hint: "Watch for dates, series, introductory clauses, and contrasting elements.",
    theme: "Nigerian Christmas traditions"
  },
  {
    text: "Starting a small business in Nigeria takes determination. My friend Tunde who studied accounting helps me manage the finances. You’ll need a good location loyal customers and consistent product quality. Before opening my puff-puff stand I researched recipes and prices. While challenges arise daily the satisfaction of entrepreneurship keeps me going.",
    correctPositions: [7, 13, 20, 24, 25, 31, 38, 43, 50, 57],
    hint: "Contains non-essential clauses, series, introductory phrases, and contrasting ideas.",
    theme: "Nigerian entrepreneurship"
  },
  {
    text: "Farming in the rainy season requires precise timing. When the first heavy rains fall farmers hurry to plant corn cassava and vegetables. The rich dark soil perfect for growing yields abundant harvests. Our village head Chief Adekunle organizes communal planting days. Although the work is backbreaking a good harvest ensures food and income.",
    correctPositions: [7, 14, 18, 19, 25, 30, 36, 41, 42, 50],
    hint: "Includes introductory clauses, series, coordinate adjectives, and contrasts.",
    theme: "Nigerian agricultural practices"
  },
  {
    text: "A visit to my grandmother’s village feels like stepping back in time. Early each morning we fetch water from the stream before sunrise. The elderly storyteller Mama Chidi weaves tales about ancient warriors and spirits. We eat pounded yam egusi soup and bush meat under the moonlight. While amenities are basic the warmth of community is unmatched.",
    correctPositions: [7, 15, 21, 25, 26, 32, 38, 43, 50, 57],
    hint: "Watch for introductory phrases, series, non-essential clauses, and contrasting statements.",
    theme: "Rural Nigerian village life"
  }
];

generateActivity(sentences)