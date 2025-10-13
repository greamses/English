import updateDOM from '/main.js';

const updatedVocabularyData = [
  {
    "word": "laugh",
    "image": "/Verbs/images/laugh.jpg",
    "synonyms": {
      "basic": [
        {
          "word": "smile",
          "points": 4,
          "meaning": "To form an expression of happiness by curving the lips.",
          "sentence": "She smiled warmly at her friend’s joke."
      },
        {
          "word": "beam",
          "points": 10,
          "meaning": "To smile radiantly with joy or pride.",
          "sentence": "He beamed as he held the trophy."
      },
        {
          "word": "chuckle",
          "points": 15,
          "meaning": "To laugh quietly or in a restrained manner.",
          "sentence": "He chuckled at the silly mistake."
      },
        {
          "word": "giggle",
          "points": 18,
          "meaning": "To laugh in a high-pitched, often uncontrollable way.",
          "sentence": "The children giggled at the cartoon."
      },
        {
          "word": "grin",
          "points": 8,
          "meaning": "To smile broadly, often in amusement.",
          "sentence": "She grinned after hearing the funny story."
      },
        {
          "word": "chortle",
          "points": 25,
          "meaning": "To laugh in a gleeful, somewhat throaty way.",
          "sentence": "He chortled at the clever joke."
      },
        {
          "word": "snicker",
          "points": 22,
          "meaning": "To laugh quietly, often in a sneaky or mocking way.",
          "sentence": "They snickered behind his back."
      },
        {
          "word": "titter",
          "points": 20,
          "meaning": "To laugh in a short, nervous way.",
          "sentence": "She tittered and looked away."
      },
        {
          "word": "snigger",
          "points": 23,
          "meaning": "To laugh quietly and often unkindly at someone’s expense.",
          "sentence": "The group sniggered at his mispronunciation."
      }
    ],
      "advanced": [
        {
          "word": "cackle",
          "points": 33,
          "meaning": "To laugh in a loud, harsh way.",
          "sentence": "The old man cackled at his own joke."
      },
        {
          "word": "howl",
          "points": 37,
          "meaning": "To laugh loudly and uncontrollably.",
          "sentence": "He howled and clutched his stomach."
      },
        {
          "word": "snort",
          "points": 31,
          "meaning": "To laugh suddenly while making a noise through the nose.",
          "sentence": "She snorted when she tried to hold it in."
      },
        {
          "word": "roar",
          "points": 40,
          "meaning": "To laugh loudly and deeply.",
          "sentence": "The audience roared at the comedian’s act."
      },
        {
          "word": "hoot",
          "points": 35,
          "meaning": "To laugh loudly in a cheerful way.",
          "sentence": "They hooted at the ridiculous stunt."
      },
        {
          "word": "guffaw",
          "points": 45,
          "meaning": "To burst into loud, boisterous laughter.",
          "sentence": "He guffawed at the outrageous scene."
      },
        {
          "word": "simper",
          "points": 48,
          "meaning": "To smile or laugh in an affected, coy, or self-conscious way.",
          "sentence": "She simpered at his compliment."
      },
        {
          "word": "jeer",
          "points": 38,
          "meaning": "To mock or laugh rudely.",
          "sentence": "The crowd jeered at the losing team."
      },
        {
          "word": "scoff",
          "points": 36,
          "meaning": "To express amusement in a scornful way.",
          "sentence": "She scoffed and shook her head."
      },
        {
          "word": "wheeze",
          "points": 41,
          "meaning": "To laugh while struggling to breathe.",
          "sentence": "He wheezed and wiped his eyes."
      },
        {
          "word": "smirk",
          "points": 29,
          "meaning": "To smile or laugh in a smug or conceited way.",
          "sentence": "He smirked, knowing he had won."
      },
        {
          "word": "whoop",
          "points": 42,
          "meaning": "To laugh or shout loudly with excitement.",
          "sentence": "They whooped and high-fived."
      }
    ],
      "vivid": [
        {
          "word": "cachinnate",
          "points": 92,
          "meaning": "To laugh loudly and boisterously.",
          "sentence": "The professor cachinnated at the absurdity."
      },
        {
          "word": "convulse",
          "points": 84,
          "meaning": "To shake uncontrollably from amusement.",
          "sentence": "They convulsed and fell off their chairs."
      },
        {
          "word": "bellow",
          "points": 68,
          "meaning": "To laugh deeply and loudly.",
          "sentence": "He bellowed and clapped his hands."
      },
        {
          "word": "shriek",
          "points": 73,
          "meaning": "To laugh in a high-pitched, piercing way.",
          "sentence": "She shrieked and covered her mouth."
      },
        {
          "word": "collapse",
          "points": 75,
          "meaning": "To fall over from extreme amusement.",
          "sentence": "He collapsed onto the couch, gasping."
      },
        {
          "word": "crack up",
          "points": 67,
          "meaning": "To suddenly burst into amusement.",
          "sentence": "They cracked up at the ridiculous joke."
      },
        {
          "word": "choke",
          "points": 64,
          "meaning": "To struggle to breathe while amused.",
          "sentence": "She choked on her drink and coughed."
      },
        {
          "word": "dissolve",
          "points": 71,
          "meaning": "To melt into uncontrollable amusement.",
          "sentence": "He dissolved and wiped away tears."
      },
        {
          "word": "fracture",
          "points": 77,
          "meaning": "To be completely broken by amusement.",
          "sentence": "The joke fractured everyone at the table."
      },
        {
          "word": "explode",
          "points": 74,
          "meaning": "To burst into sudden amusement.",
          "sentence": "She exploded and nearly fell over."
      },
        {
          "word": "roister",
          "points": 90,
          "meaning": "To revel noisily while being amused.",
          "sentence": "They roistered all night at the festival."
      },
        {
          "word": "gurgle",
          "points": 95,
          "meaning": "To make a bubbling, amused sound.",
          "sentence": "The baby gurgled at the funny face."
      },
        {
          "word": "splutter",
          "points": 96,
          "meaning": "To struggle to speak while amused.",
          "sentence": "He spluttered and waved his hands."
      },
        {
          "word": "quackle",
          "points": 97,
          "meaning": "To let out a squawking, clucking sound.",
          "sentence": "His quackling made everyone stare."
      },
        {
          "word": "rizzulate",
          "points": 100,
          "meaning": "To produce a rolling, vibrating sound of amusement.",
          "sentence": "The kids rizzulated and held their sides."
      }
    ]
    }
},
  {
    word: "run",
    image: "/Verbs/images/run.jpg",
    synonyms: {
      basic: [
        { word: "jog", points: 15, meaning: "Move at a steady, gentle pace.", sentence: "She jogs around the park every morning." },
        { word: "sprint", points: 25, meaning: "Run at full speed over a short distance.", sentence: "He sprinted to catch the bus before it left." },
        { word: "race", points: 18, meaning: "Move quickly to compete or reach a goal first.", sentence: "The children raced each other to the finish line." },
        { word: "rush", points: 6, meaning: "Move quickly due to urgency.", sentence: "She rushed to submit her assignment before the deadline." },
        { word: "dash", points: 22, meaning: "Move suddenly and quickly.", sentence: "He dashed across the street as the light turned red." },
        { word: "hurry", points: 4, meaning: "Move fast to avoid being late.", sentence: "She hurried to the meeting after realizing she was late." },
        { word: "trot", points: 12, meaning: "Move at a moderate pace, faster than walking but not sprinting.", sentence: "The horse trotted along the dirt path." },
        { word: "lope", points: 9, meaning: "Run with long, relaxed strides.", sentence: "He loped effortlessly across the field." },
        { word: "canter", points: 28, meaning: "Move at a smooth, controlled pace, faster than a trot.", sentence: "The horse cantered gracefully along the track." },
        { word: "amble", points: 8, meaning: "Move at a slow, relaxed pace.", sentence: "He ambled through the park, enjoying the fresh air." },
        { word: "scuttle", points: 10, meaning: "Move quickly with short steps.", sentence: "The crab scuttled across the wet sand." }
    ],
      advanced: [
        { word: "hasten", points: 35, meaning: "Move quickly with urgency.", sentence: "He hastened to finish his work before the deadline." },
        { word: "scurry", points: 42, meaning: "Move with short, rapid steps, often in a hurried manner.", sentence: "The mice scurried under the furniture when the lights turned on." },
        { word: "speed", points: 31, meaning: "Move quickly to cover a distance faster.", sentence: "He sped down the highway, eager to reach home." },
        { word: "bolt", points: 48, meaning: "Suddenly dash away in fear or urgency.", sentence: "The deer bolted into the forest at the sound of footsteps." },
        { word: "scamper", points: 53, meaning: "Move quickly and lightly, often playfully.", sentence: "The squirrels scampered up the tree to escape the dog." },
        { word: "flee", points: 37, meaning: "Run away from danger or a difficult situation.", sentence: "The villagers fled when the storm approached." },
        { word: "zoom", points: 44, meaning: "Move very quickly with high speed.", sentence: "The car zoomed past the traffic light." },
        { word: "scram", points: 39, meaning: "Leave quickly, often in an informal or urgent manner.", sentence: "He told them to scram before security arrived." },
        { word: "scramble", points: 57, meaning: "Move hurriedly using hands and feet to climb or get away.", sentence: "She scrambled up the rocky hill." },
        { word: "career", points: 46, meaning: "Move swiftly and uncontrollably in a specific direction.", sentence: "The car careered down the hill, out of control." },
        { word: "traverse", points: 40, meaning: "Move across an area or obstacle.", sentence: "The hikers traversed the rocky terrain carefully." }
    ],
      vivid: [
        { word: "gallop", points: 65, meaning: "Move rapidly in bounding strides.", sentence: "The horse galloped across the open field." },
        { word: "streak", points: 77, meaning: "Move at a high speed in a straight line.", sentence: "A shooting star streaked across the sky." },
        { word: "scorch", points: 70, meaning: "Move at extreme speed, as if burning through.", sentence: "The car scorched down the highway." },
        { word: "stream", points: 78, meaning: "Move continuously and fluidly.", sentence: "The marathon runners streamed through the streets." },
        { word: "sweep", points: 83, meaning: "Move swiftly and forcefully.", sentence: "The athlete swept across the finish line with ease." },
        { word: "blast", points: 90, meaning: "Move with explosive force.", sentence: "He blasted past his opponents in the final lap." },
        { word: "hurtle", points: 88, meaning: "Move at a high speed in an uncontrolled manner.", sentence: "The car hurtled down the slope." },
        { word: "skedaddle", points: 95, meaning: "Run away in a hurry, often playfully.", sentence: "The kids skedaddled when they heard the teacher coming." },
        { word: "careen", points: 100, meaning: "Move uncontrollably and at high speed.", sentence: "The bicycle careened around the corner." }
    ]
    }
},
  {
    word: 'look',
    image: '/Verbs/images/look.jpg',
    synonyms: {
      basic: [
        { word: 'see', points: 2, meaning: 'To perceive with the eyes.', sentence: 'She could see the mountains in the distance.' },
        { word: 'view', points: 8, meaning: 'To look at something attentively.', sentence: 'They viewed the art exhibit carefully.' },
        { word: 'watch', points: 12, meaning: 'To look at something for a period of time.', sentence: 'He watched the birds fly across the sky.' },
        { word: 'observe', points: 18, meaning: 'To notice or study something carefully.', sentence: 'The scientist observed the experiment closely.' },
        { word: 'glance', points: 24, meaning: 'To take a brief or quick look.', sentence: 'She glanced at her phone before returning to work.' },
        { word: 'peek', points: 21, meaning: 'To look quickly or secretly.', sentence: 'He peeked through the curtains to see who was outside.' },
        { word: 'spot', points: 16, meaning: 'To suddenly notice something.', sentence: 'She spotted a rare bird in the tree.' },
        { word: 'check', points: 7, meaning: 'To look at something to verify or confirm.', sentence: 'He checked the list twice before leaving.' },
        { word: 'notice', points: 13, meaning: 'To become aware of something by seeing it.', sentence: 'I noticed a mistake in the report.' },
        { word: 'scan', points: 19, meaning: 'To look over something quickly.', sentence: 'He scanned the crowd for a familiar face.' }
    ],
      advanced: [
        { word: 'examine', points: 34, meaning: 'To inspect something carefully.', sentence: 'She examined the painting for authenticity.' },
        { word: 'inspect', points: 38, meaning: 'To look at something closely to check for details.', sentence: 'The mechanic inspected the engine for problems.' },
        { word: 'survey', points: 32, meaning: 'To look at an area or situation as a whole.', sentence: 'The captain surveyed the battlefield before giving orders.' },
        { word: 'regard', points: 45, meaning: 'To consider or look at something in a certain way.', sentence: 'She regarded him with suspicion.' },
        { word: 'perceive', points: 49, meaning: 'To notice or become aware of something.', sentence: 'He perceived a slight change in her expression.' },
        { word: 'study', points: 30, meaning: 'To look at something carefully to understand it.', sentence: 'He studied the blueprint for hours.' },
        { word: 'review', points: 31, meaning: 'To examine something again.', sentence: 'She reviewed the contract before signing.' },
        { word: 'scrutinize', points: 56, meaning: 'To examine something in great detail.', sentence: 'The detective scrutinized the evidence carefully.' },
        { word: 'assess', points: 52, meaning: 'To look at something in order to evaluate it.', sentence: 'The teacher assessed the students’ work.' },
        { word: 'contemplate', points: 54, meaning: 'To think deeply while looking at something.', sentence: 'He contemplated the sunset in silence.' },
        { word: 'discern', points: 58, meaning: 'To see or understand something that is not immediately obvious.', sentence: 'She discerned a hidden meaning in his words.' },
        { word: 'consider', points: 37, meaning: 'To look at something while thinking about it.', sentence: 'He considered the painting’s details before making an offer.' }
    ],
      vivid: [
        { word: 'glimpse', points: 63, meaning: 'To see something briefly.', sentence: 'She caught a glimpse of him before he disappeared into the crowd.' },
        { word: 'peer', points: 68, meaning: 'To look carefully or with difficulty.', sentence: 'He peered into the darkness, trying to see ahead.' },
        { word: 'gaze', points: 60, meaning: 'To look steadily with admiration or curiosity.', sentence: 'She gazed at the stars in wonder.' },
        { word: 'glare', points: 71, meaning: 'To stare angrily.', sentence: 'He glared at his opponent during the debate.' },
        { word: 'ogle', points: 84, meaning: 'To look at someone with strong interest, often in a way that makes them uncomfortable.', sentence: 'He ogled the expensive cars at the showroom.' },
        { word: 'leer', points: 94, meaning: 'To look at someone in an unpleasant or creepy way.', sentence: 'The villain leered at his captive with a sinister grin.' },
        { word: 'squint', points: 86, meaning: 'To narrow your eyes to see better.', sentence: 'She squinted at the small print on the label.' },
        { word: 'stare', points: 62, meaning: 'To look at something for a long time.', sentence: 'He stared at the painting, lost in thought.' },
        { word: 'behold', points: 78, meaning: 'To look at something with amazement.', sentence: 'They beheld the beauty of the Grand Canyon.' },
        { word: 'peruse', points: 85, meaning: 'To read or look at something carefully.', sentence: 'She perused the documents before making a decision.' },
        { word: 'monitor', points: 67, meaning: 'To observe something over time.', sentence: 'The scientist monitored the experiment’s progress.' },
        { word: 'eye', points: 61, meaning: 'To look at something with careful consideration.', sentence: 'He eyed the prize with determination.' },
        { word: 'gawk', points: 100, meaning: 'To stare openly and rudely.', sentence: 'The tourists gawked at the celebrity.' },
        { word: 'browse', points: 64, meaning: 'To look over something casually.', sentence: 'She browsed through the books in the store.' },
        { word: 'glower', points: 87, meaning: 'To stare in an angry or sullen way.', sentence: 'He glowered at his rival after losing the game.' },
        { word: 'pry', points: 92, meaning: 'To look into something inquisitively, often intrusively.', sentence: 'She pried into her friend’s personal matters.' },
        { word: 'prowl', points: 88, meaning: 'To move around while looking for something stealthily.', sentence: 'The cat prowled the alley in search of food.' },
        { word: 'wink', points: 50, meaning: 'To briefly close one eye, often as a signal or playful gesture.', sentence: 'He winked at her playfully across the room.' },
        { word: 'survey', points: 70, meaning: 'To examine an area or situation from a broad perspective.', sentence: 'He surveyed the landscape before setting up camp.' },
        { word: 'skim', points: 69, meaning: 'To look over something quickly without reading in detail.', sentence: 'He skimmed through the newspaper before heading to work.' }
    ]
    }
},
  {
    word: 'eat',
    image: '/Verbs/images/eat.jpg',
    synonyms: {
      basic: [
        {
          word: 'consume',
          points: 14,
          meaning: 'To take food or drink into the body',
          sentence: 'She consumes a healthy diet every day.'
      },
        {
          word: 'dine',
          points: 20,
          meaning: 'To eat a meal, especially dinner',
          sentence: 'We dined at a fancy restaurant last night.'
      },
        {
          word: 'feed',
          points: 6,
          meaning: 'To give food to or take in food',
          sentence: 'The mother bird feeds her chicks.'
      },
        {
          word: 'munch',
          points: 22,
          meaning: 'To chew something steadily',
          sentence: 'He munched on a bag of chips while watching TV.'
      },
        {
          word: 'chew',
          points: 9,
          meaning: 'To break down food with the teeth before swallowing',
          sentence: 'Remember to chew your food properly before swallowing.'
      },
        {
          word: 'ingest',
          points: 26,
          meaning: 'To take food or drink into the body',
          sentence: 'The medicine must be ingested with water.'
      },
        {
          word: 'bite',
          points: 5,
          meaning: 'To cut into something using teeth',
          sentence: 'She took a big bite of the apple.'
      },
        {
          word: 'nibble',
          points: 17,
          meaning: 'To eat something in small bites',
          sentence: 'She nibbled on a piece of chocolate.'
      }
    ],
      advanced: [
        {
          word: 'devour',
          points: 38,
          meaning: 'To eat something quickly and eagerly',
          sentence: 'He devoured his meal in just a few minutes.'
      },
        {
          word: 'feast',
          points: 42,
          meaning: 'To eat a large and special meal',
          sentence: 'They feasted on turkey and mashed potatoes for Thanksgiving.'
      },
        {
          word: 'gorge',
          points: 49,
          meaning: 'To eat excessively',
          sentence: 'He gorged on pizza after a long day at work.'
      },
        {
          word: 'swallow',
          points: 30,
          meaning: 'To move food from the mouth to the stomach',
          sentence: 'She swallowed her drink in one gulp.'
      },
        {
          word: 'guzzle',
          points: 46,
          meaning: 'To drink or eat something greedily',
          sentence: 'He guzzled down a bottle of soda in seconds.'
      },
        {
          word: 'snack',
          points: 33,
          meaning: 'To eat a small amount of food between meals',
          sentence: 'She likes to snack on nuts during work.'
      },
        {
          word: 'partake',
          points: 53,
          meaning: 'To eat or drink something, usually with others',
          sentence: 'Guests are welcome to partake in the refreshments.'
      },
        {
          word: 'savor',
          points: 44,
          meaning: 'To enjoy food or drink slowly',
          sentence: 'He savored every bite of his dessert.'
      }
    ],
      vivid: [
        {
          word: 'gulp',
          points: 61,
          meaning: 'To swallow food or drink quickly',
          sentence: 'She gulped down her coffee before heading to work.'
      },
        {
          word: 'chomp',
          points: 63,
          meaning: 'To bite or chew on something noisily',
          sentence: 'He chomped on a juicy steak.'
      },
        {
          word: 'gobble',
          points: 67,
          meaning: 'To eat something very quickly',
          sentence: 'The children gobbled up their snacks.'
      },
        {
          word: 'scarf',
          points: 74,
          meaning: 'To eat something quickly and greedily',
          sentence: 'He scarfed down a whole sandwich in two bites.'
      },
        {
          word: 'inhale',
          points: 66,
          meaning: 'To eat something extremely fast',
          sentence: 'She inhaled her burger as if she hadn’t eaten all day.'
      },
        {
          word: 'shovel in',
          points: 79,
          meaning: 'To eat large amounts quickly',
          sentence: 'He shoveled in mouthfuls of rice without stopping.'
      },
        {
          word: 'wolf down',
          points: 86,
          meaning: 'To eat something rapidly and hungrily',
          sentence: 'After skipping lunch, he wolfed down his dinner.'
      },
        {
          word: 'bolt',
          points: 69,
          meaning: 'To eat quickly and without chewing properly',
          sentence: 'He bolted his food before running to catch the bus.'
      },
        {
          word: 'relish',
          points: 65,
          meaning: 'To enjoy eating something with great pleasure',
          sentence: 'She relished every spoonful of the homemade soup.'
      },
        {
          word: 'nurse',
          points: 60,
          meaning: 'To eat or drink something slowly over time',
          sentence: 'He nursed his drink while chatting with friends.'
      },
        {
          word: 'sample',
          points: 59,
          meaning: 'To taste a small amount of food',
          sentence: 'She sampled different flavors of ice cream before choosing one.'
      },
        {
          word: 'graze',
          points: 68,
          meaning: 'To eat small amounts over a long period',
          sentence: 'She grazed on fruit and nuts throughout the day.'
      },
        {
          word: 'sip',
          points: 58,
          meaning: 'To drink something slowly',
          sentence: 'He sipped his tea while reading a book.'
      },
        {
          word: 'pick at',
          points: 62,
          meaning: 'To eat very little or without enthusiasm',
          sentence: 'She picked at her salad, not feeling very hungry.'
      },
        {
          word: 'gormandize',
          points: 97,
          meaning: 'To eat gluttonously',
          sentence: 'The guests gormandized at the buffet.'
      },
        {
          word: 'binge',
          points: 77,
          meaning: 'To eat excessively in a short time',
          sentence: 'He binged on junk food while watching movies.'
      },
        {
          word: 'pig out',
          points: 76,
          meaning: 'To eat a lot in an uncontrolled way',
          sentence: 'They pigged out on pizza and ice cream.'
      },
        {
          word: 'stuff',
          points: 64,
          meaning: 'To fill oneself with food',
          sentence: 'He stuffed himself with turkey and mashed potatoes.'
      },
        {
          word: 'overindulge',
          points: 85,
          meaning: 'To eat too much',
          sentence: 'She overindulged in sweets during the holidays.'
      },
        {
          word: 'fress',
          points: 100,
          meaning: 'To eat enthusiastically or in excess',
          sentence: 'They fressed on homemade pastries.'
      },
        {
          word: 'glut',
          points: 92,
          meaning: 'To eat to the point of excess',
          sentence: 'He glutted himself on the lavish banquet.'
      },
        {
          word: 'slurp',
          points: 71,
          meaning: 'To eat or drink noisily',
          sentence: 'He slurped his soup loudly, annoying everyone.'
      }
    ]
    }
},
  {
    word: 'walk',
    image: '/Verbs/images/walk.jpg',
    synonyms: {
      basic: [
        {
          word: 'stroll',
          points: 16,
          meaning: 'To walk in a relaxed manner',
          sentence: 'They took a leisurely stroll in the park.'
      },
        {
          word: 'step',
          points: 5,
          meaning: 'To move by lifting and placing feet',
          sentence: 'She stepped carefully over the puddle.'
      },
        {
          word: 'move',
          points: 3,
          meaning: 'To change position by walking',
          sentence: 'He moved slowly towards the exit.'
      },
        {
          word: 'go',
          points: 1,
          meaning: 'To move from one place to another',
          sentence: 'She goes for a walk every morning.'
      },
        {
          word: 'amble',
          points: 24,
          meaning: 'To walk slowly and casually',
          sentence: 'They ambled through the countryside, enjoying the scenery.'
      },
        {
          word: 'wander',
          points: 19,
          meaning: 'To walk aimlessly',
          sentence: 'He wandered through the streets, lost in thought.'
      },
        {
          word: 'tread',
          points: 22,
          meaning: 'To walk in a particular way',
          sentence: 'She tread softly to avoid waking the baby.'
      }
    ],
      advanced: [
        {
          word: 'hike',
          points: 35,
          meaning: 'To walk long distances, especially in nature',
          sentence: 'They hiked up the mountain to see the sunrise.'
      },
        {
          word: 'trek',
          points: 48,
          meaning: 'To go on a long and difficult journey on foot',
          sentence: 'They trekked through the jungle for hours.'
      },
        {
          word: 'march',
          points: 31,
          meaning: 'To walk with a steady and regular rhythm',
          sentence: 'The soldiers marched in formation down the street.'
      },
        {
          word: 'stride',
          points: 42,
          meaning: 'To walk with long, confident steps',
          sentence: 'She strode across the room with determination.'
      },
        {
          word: 'saunter',
          points: 55,
          meaning: 'To walk in a slow, relaxed way',
          sentence: 'He sauntered into the café as if he had all the time in the world.'
      },
        {
          word: 'roam',
          points: 37,
          meaning: 'To walk around freely with no specific direction',
          sentence: 'Wild animals roamed the open fields.'
      },
        {
          word: 'tramp',
          points: 50,
          meaning: 'To walk heavily or firmly',
          sentence: 'They tramped through the muddy trail after the rain.'
      },
        {
          word: 'perambulate',
          points: 58,
          meaning: 'To walk around leisurely or inspect a place on foot',
          sentence: 'The old gentleman perambulated through his garden every evening.'
      }
    ],
      vivid: [
        {
          word: 'trudge',
          points: 62,
          meaning: 'To walk with effort, especially when tired',
          sentence: 'He trudged through the snow with heavy boots.'
      },
        {
          word: 'prowl',
          points: 68,
          meaning: 'To move stealthily like a predator',
          sentence: 'The cat prowled around the house at night.'
      },
        {
          word: 'promenade',
          points: 76,
          meaning: 'To take a leisurely walk, often for pleasure',
          sentence: 'They promenaded along the beach at sunset.'
      },
        {
          word: 'strut',
          points: 65,
          meaning: 'To walk with a proud or confident attitude',
          sentence: 'He strutted into the room like a movie star.'
      },
        {
          word: 'meander',
          points: 73,
          meaning: 'To walk in a winding or indirect path',
          sentence: 'They meandered through the old town, exploring hidden alleyways.'
      },
        {
          word: 'ramble',
          points: 63,
          meaning: 'To walk for pleasure without a specific route',
          sentence: 'She rambled through the hills on a quiet afternoon.'
      },
        {
          word: 'traipse',
          points: 79,
          meaning: 'To walk tiredly or reluctantly',
          sentence: 'He traipsed through the mall, exhausted from shopping.'
      },
        {
          word: 'shuffle',
          points: 61,
          meaning: 'To walk by dragging feet',
          sentence: 'The old man shuffled slowly across the floor.'
      },
        {
          word: 'swagger',
          points: 78,
          meaning: 'To walk with an overconfident or arrogant manner',
          sentence: 'He swaggered into the room like he owned the place.'
      },
        {
          word: 'scurry',
          points: 70,
          meaning: 'To walk quickly in small steps, often nervously',
          sentence: 'The mouse scurried across the kitchen floor.'
      },
        {
          word: 'slink',
          points: 82,
          meaning: 'To move smoothly and quietly, often in a guilty way',
          sentence: 'She slinked out of the room after making a mistake.'
      },
        {
          word: 'lope',
          points: 71,
          meaning: 'To walk or run with long, relaxed steps',
          sentence: 'The horse loped across the field gracefully.'
      },
        {
          word: 'tiptoe',
          points: 66,
          meaning: 'To walk quietly on the toes',
          sentence: 'She tiptoed out of the room to avoid waking him up.'
      },
        {
          word: 'waddle',
          points: 81,
          meaning: 'To walk with short, clumsy steps, like a duck',
          sentence: 'The toddler waddled toward his mother.'
      },
        {
          word: 'stomp',
          points: 67,
          meaning: 'To walk with heavy steps, often angrily',
          sentence: 'He stomped away in frustration after the argument.'
      },
        {
          word: 'glide',
          points: 74,
          meaning: 'To move smoothly and effortlessly',
          sentence: 'She glided across the dance floor like a swan.'
      },
        {
          word: 'waltz',
          points: 100,
          meaning: 'To walk or move effortlessly and elegantly',
          sentence: 'He waltzed into the meeting as if he owned the place.'
      },
        {
          word: 'dart',
          points: 68,
          meaning: 'To move quickly and suddenly',
          sentence: 'The rabbit darted across the road.'
      },
        {
          word: 'scuttle',
          points: 74,
          meaning: 'To move with quick, short steps',
          sentence: 'The crab scuttled away when it sensed danger.'
      }
    ]
    }
},
  {
    word: 'talk',
    image: '/Verbs/images/talk.jpg',
    synonyms: {
      basic: [
        { word: 'speak', points: 5, meaning: 'To use words to express thoughts', sentence: 'She spoke in a calm and steady voice.' },
        { word: 'chat', points: 17, meaning: 'To talk informally', sentence: 'They chatted about their weekend plans.' },
        { word: 'say', points: 3, meaning: 'To express something with words', sentence: 'He said he would be late for dinner.' },
        { word: 'tell', points: 7, meaning: 'To communicate information to someone', sentence: 'She told him a funny story.' },
        { word: 'converse', points: 23, meaning: 'To engage in a conversation', sentence: 'They conversed for hours about art and music.' },
        { word: 'discuss', points: 21, meaning: 'To talk about a topic in detail', sentence: 'They discussed the new project at the meeting.' },
        { word: 'talk', points: 1, meaning: 'To communicate using speech', sentence: 'They talked on the phone for hours.' }
    ],
      advanced: [
        { word: 'communicate', points: 34, meaning: 'To share or exchange information', sentence: 'They communicated their concerns to the manager.' },
        { word: 'express', points: 37, meaning: 'To convey thoughts or emotions', sentence: 'He expressed his gratitude with a smile.' },
        { word: 'mention', points: 32, meaning: 'To briefly refer to something', sentence: 'She mentioned the upcoming event in passing.' },
        { word: 'lecture', points: 43, meaning: 'To speak formally on a subject', sentence: 'The professor lectured on ancient history.' },
        { word: 'debate', points: 48, meaning: 'To argue or discuss opposing views', sentence: 'They debated the pros and cons of the policy.' },
        { word: 'negotiate', points: 52, meaning: 'To discuss and reach an agreement', sentence: 'The diplomats negotiated a peace treaty.' },
        { word: 'deliberate', points: 56, meaning: 'To talk with careful thought', sentence: 'The jury deliberated before reaching a verdict.' }
    ],
      vivid: [
        { word: 'articulate', points: 68, meaning: 'To speak clearly and fluently', sentence: 'She articulated her ideas with confidence.' },
        { word: 'orate', points: 73, meaning: 'To speak formally or grandly', sentence: 'He orated at the political rally.' },
        { word: 'pontificate', points: 89, meaning: 'To speak in a pompous manner', sentence: 'He pontificated about his knowledge of philosophy.' },
        { word: 'babble', points: 62, meaning: 'To talk quickly and unintelligibly', sentence: 'The toddler babbled excitedly.' },
        { word: 'prattle', points: 76, meaning: 'To talk at length about trivial things', sentence: 'She prattled about her new shoes for hours.' },
        { word: 'ramble', points: 64, meaning: 'To talk continuously without a clear point', sentence: 'He rambled on about his childhood memories.' },
        { word: 'mutter', points: 60, meaning: 'To speak in a low, unclear voice', sentence: 'She muttered something under her breath.' },
        { word: 'whisper', points: 59, meaning: 'To speak softly or secretly', sentence: 'He whispered a secret into her ear.' },
        { word: 'murmur', points: 65, meaning: 'To speak softly and indistinctly', sentence: 'The audience murmured in agreement.' },
        { word: 'yammer', points: 77, meaning: 'To talk loudly and persistently', sentence: 'He yammered on about politics.' },
        { word: 'chatter', points: 63, meaning: 'To talk rapidly about trivial matters', sentence: 'The children chattered excitedly on the bus.' },
        { word: 'jabber', points: 75, meaning: 'To talk quickly in a nonsensical way', sentence: 'He jabbered nervously before his speech.' },
        { word: 'blabber', points: 70, meaning: 'To talk excessively and foolishly', sentence: 'She blabbered about her favorite TV show.' },
        { word: 'gossip', points: 66, meaning: 'To talk about others’ personal affairs', sentence: 'They gossiped about their coworkers.' },
        { word: 'blurt', points: 67, meaning: 'To say something suddenly without thinking', sentence: 'He blurted out the answer before thinking.' },
        { word: 'mumble', points: 61, meaning: 'To speak unclearly or quietly', sentence: 'He mumbled something nobody could understand.' },
        { word: 'rant', points: 72, meaning: 'To speak loudly and angrily', sentence: 'She ranted about the unfair rules.' },
        { word: 'rave', points: 74, meaning: 'To speak wildly with enthusiasm', sentence: 'He raved about the amazing concert.' },
        { word: 'boast', points: 69, meaning: 'To talk proudly about achievements', sentence: 'He boasted about his new car.' },
        { word: 'brag', points: 68, meaning: 'To speak arrogantly about oneself', sentence: 'She bragged about her high test score.' },
        { word: 'gab', points: 71, meaning: 'To talk a lot in a relaxed manner', sentence: 'They gabbled over coffee for hours.' },
        { word: 'yak', points: 69, meaning: 'To talk incessantly', sentence: 'He yakked on the phone all night.' },
        { word: 'grumble', points: 67, meaning: 'To complain in a low voice', sentence: 'He grumbled about the long wait.' },
        { word: 'snarl', points: 78, meaning: 'To speak in an angry, growling tone', sentence: 'He snarled at the rude customer.' },
        { word: 'stammer', points: 74, meaning: 'To speak hesitantly', sentence: 'She stammered nervously during her speech.' },
        { word: 'stutter', points: 73, meaning: 'To repeat sounds while speaking', sentence: 'He stuttered under pressure.' },
        { word: 'vent', points: 68, meaning: 'To express emotions verbally', sentence: 'She vented her frustrations to a friend.' },
        { word: 'narrate', points: 71, meaning: 'To tell a story in detail', sentence: 'He narrated his adventures vividly.' },
        { word: 'announce', points: 62, meaning: 'To make a formal statement', sentence: 'She announced her engagement at dinner.' },
        { word: 'declare', points: 69, meaning: 'To state something firmly', sentence: 'He declared his love for her.' },
        { word: 'proclaim', points: 76, meaning: 'To announce something publicly', sentence: 'The king proclaimed a holiday.' },
        { word: 'argue', points: 67, meaning: 'To disagree and exchange opinions', sentence: 'They argued about the best movie.' },
        { word: 'persuade', points: 71, meaning: 'To convince someone through words', sentence: 'She persuaded him to try the new restaurant.' },
        { word: 'jest', points: 68, meaning: 'To speak humorously', sentence: 'He jested about the long meeting.' },
        { word: 'banter', points: 75, meaning: 'To exchange playful remarks', sentence: 'They bantered like old friends.' },
        { word: 'counsel', points: 77, meaning: 'To give advice', sentence: 'She counseled him on career choices.' },
        { word: 'harangue', points: 85, meaning: 'To speak loudly and aggressively', sentence: 'He harangued the audience about injustice.' }
    ]
    }
}
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const vocabularyData = shuffleArray([...updatedVocabularyData]);

updateDOM(vocabularyData)