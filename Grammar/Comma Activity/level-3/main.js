import generateActivity from '/main.js';

const sentences = [
  {
  title: "A Day in Lagos",
  text: `<p>Lagos the bustling heart of Nigeria wakes up long before dawn. As the first rays of sunlight appear over the Third Mainland Bridge traders are already setting up their stalls at Oshodi Market. They arrange fresh fruits vegetables and colorful fabrics in neat piles. Mr. Adebayo who has sold yams here for 15 years claims the early hours are the most profitable.</p><p>By 7 AM the streets are filled with yellow danfo buses okadas and hurried commuters. While navigating the hectic traffic passengers shout "O wa o!" to alert drivers of their stops. The air smells of puff-puff frying roadside akara and exhaust fumes. Ye,s Lagos moves at a pace that overwhelms newcomers but excites longtime residents.</p><p>At noon business executives in crisp Ankara suits queue at bukas for jollof rice and peppered snails. The small cramped eateries serve meals faster than expensive restaurants. Dr. Okafor my neighbor insists buka food tastes better because it's made with "local seasoning and stress." Although the heat is intense no one rushes through their lunch break.</p><p>As evening falls families gather on balconies to enjoy the cool breeze. Children play football in the streets with makeshift goalposts while mothers discuss the day's events. Uncle Dele who lives downstairs always shares gossip and cold bottles of Maltina. When the generator comes on at 8 PM everyone cheers because it means steady electricity for the night.</p><p>Lagos never truly sleeps. Street vendors selling roasted plantains and suya work until midnight. Nightclubs in Victoria Island pulse with Afrobeats music until sunrise. While the city is chaotic exhausting and expensive its energy keeps drawing people back. After all there's no place quite like Lagos.</p>`,

  correctPositions: [
    // Paragraph 1
    1, 10, 16, 20, 21, 28, 34, 35,
    // Paragraph 2
    41, 45, 46, 54, 62, 66, 67, 75, 81,
    // Paragraph 3
    91, 97, 101, 102, 110, 118, 125, 132,
    // Paragraph 4
    143, 151, 157, 161, 162, 170, 178, 185, 193,
    // Paragraph 5
    203, 210, 214, 215, 223, 230, 237, 244, 252
  ],

  hint: "Watch for: 1) Commas after introductory clauses 2) Items in series 3) Non-essential clauses 4) Direct address 5) Coordinate adjectives 6) Contrasting phrases",

  themes: [
    "Morning markets",
    "Lagos transportation",
    "Local cuisine",
    "Community life",
    "Nightlife"
  ]
}];

generateActivity(sentences)