const sentenceSets = {
  beginner: [
  {
    text: "She [VERB] down the winding garden path.",
    baseVerb: "walked slowly",
    substitutes: [
      { word: "strolled", explanation: "suggests a relaxed, leisurely walk that perfectly matches the slow pace described" },
      { word: "trudged", explanation: "implies heavy, tired movement showing physical or emotional burden" },
      { word: "marched", explanation: "connotes purposeful, rhythmic steps that convey determination" },
      { word: "glided", explanation: "evokes smooth, effortless motion suggesting grace and elegance" }
    ],
    bestChoice: "strolled"
  },
  {
    text: "The dog [VERB] when its owner came home.",
    baseVerb: "jumped excitedly",
    substitutes: [
      { word: "leaped", explanation: "suggests a more powerful, athletic jump showing great excitement" },
      { word: "bounded", explanation: "implies energetic jumping with multiple movements, perfectly capturing the dog's excitement" },
      { word: "pounced", explanation: "conveys a predatory, targeted jump that doesn't match the joyful context" },
      { word: "vaulted", explanation: "suggests an acrobatic jump over an obstacle, which isn't clearly implied in the sentence" }
    ],
    bestChoice: "bounded"
  },
  {
    text: "The student [VERB] before giving his presentation.",
    baseVerb: "looked nervously",
    substitutes: [
      { word: "gazed", explanation: "suggests prolonged, thoughtful looking that doesn't match the nervous context" },
      { word: "glanced", explanation: "indicates a quick, brief look that effectively conveys nervousness" },
      { word: "stared", explanation: "implies an intense, fixed look that doesn't match the anxious movement of nervousness" },
      { word: "peeked", explanation: "suggests looking secretly or cautiously, which doesn't fit the presentation context" }
    ],
    bestChoice: "glanced"
  },
  {
    text: "The chef [VERB] the vegetables for the gourmet salad.",
    baseVerb: "cut",
    substitutes: [
      { word: "sliced", explanation: "indicates clean, precise cuts with a knife, perfect for a gourmet preparation" },
      { word: "chopped", explanation: "suggests cutting into smaller, less precise pieces which might be too casual for gourmet" },
      { word: "diced", explanation: "means cutting into small, uniform cubes, which is specific but may not apply to all vegetables in a salad" },
      { word: "minced", explanation: "implies cutting into very tiny pieces, which would be too fine for most salads" }
    ],
    bestChoice: "sliced"
  },
  {
    text: "The cat [VERB] at the bird through the window.",
    baseVerb: "looked intently",
    substitutes: [
      { word: "glared", explanation: "suggests anger or hostility rather than predatory interest" },
      { word: "peered", explanation: "implies looking with difficulty or effort to see clearly" },
      { word: "stared", explanation: "indicates looking intently for a prolonged time, fitting the cat's focused attention" },
      { word: "gazed", explanation: "suggests a dreamy or admiring look rather than a predatory focus" }
    ],
    bestChoice: "stared"
  },
  {
    text: "The old man [VERB] through his photo albums.",
    baseVerb: "looked",
    substitutes: [
      { word: "flipped", explanation: "suggests quick, casual movement through pages without careful attention" },
      { word: "browsed", explanation: "implies casual, leisurely looking without deep engagement" },
      { word: "rummaged", explanation: "suggests disorganized searching rather than intentional viewing" },
      { word: "leafed", explanation: "perfectly captures the gentle turning of pages while reminiscing" }
    ],
    bestChoice: "leafed"
  },
  {
    text: "The teacher [VERB] at the disruptive student.",
    baseVerb: "looked angrily",
    substitutes: [
      { word: "glared", explanation: "perfectly conveys looking with intense anger or disapproval" },
      { word: "peeked", explanation: "suggests secretive looking which doesn't match an authority figure's direct confrontation" },
      { word: "glimpsed", explanation: "implies a brief, chance sighting rather than intentional looking" },
      { word: "stared", explanation: "indicates prolonged looking but doesn't necessarily convey anger" }
    ],
    bestChoice: "glared"
  },
  {
    text: "The baby [VERB] when the loud noise startled her.",
    baseVerb: "cried",
    substitutes: [
      { word: "wailed", explanation: "perfectly captures loud, prolonged crying from being startled" },
      { word: "whimpered", explanation: "suggests softer, fearful crying that may be too mild for a startled baby" },
      { word: "bawled", explanation: "implies extremely loud, uncontrolled crying that might be excessive for just being startled" },
      { word: "sniffled", explanation: "indicates soft crying or runny nose, too mild for a startled reaction" }
    ],
    bestChoice: "wailed"
  },
  {
    text: "The wind [VERB] through the autumn leaves.",
    baseVerb: "moved",
    substitutes: [
      { word: "rushed", explanation: "suggests forceful, rapid movement that may be too intense" },
      { word: "whispered", explanation: "personifies the wind as gentle and quiet, perfect for subtle leaf movement" },
      { word: "blasted", explanation: "implies violent, destructive force that's too strong for the context" },
      { word: "drifted", explanation: "suggests slow, aimless movement without direction or purpose" }
    ],
    bestChoice: "whispered"
  },
  {
    text: "The athlete [VERB] across the finish line.",
    baseVerb: "ran",
    substitutes: [
      { word: "sprinted", explanation: "perfectly captures running at maximum speed at the end of a race" },
      { word: "jogged", explanation: "implies running at a relaxed pace, which doesn't match finishing a race" },
      { word: "staggered", explanation: "suggests struggling or unsteady movement from exhaustion" },
      { word: "darted", explanation: "implies quick, sudden movement but lacks the sustained effort of a race finish" }
    ],
    bestChoice: "sprinted"
  },
  {
    text: "The mother [VERB] her crying child.",
    baseVerb: "held",
    substitutes: [
      { word: "cradled", explanation: "perfectly conveys holding gently in a protective, nurturing manner" },
      { word: "gripped", explanation: "suggests tight, possibly uncomfortable holding that doesn't match comforting a child" },
      { word: "clutched", explanation: "implies desperate or fearful holding rather than comfort" },
      { word: "grasped", explanation: "suggests holding firmly, often to prevent dropping, lacking nurturing quality" }
    ],
    bestChoice: "cradled"
  },
  {
    text: "She [VERB] into the cold swimming pool.",
    baseVerb: "went",
    substitutes: [
      { word: "eased", explanation: "perfectly captures slow, careful entry due to cold temperature" },
      { word: "plunged", explanation: "suggests sudden, complete immersion that wouldn't match cold water entry" },
      { word: "slid", explanation: "implies smooth movement but may not fully capture the cautious nature" },
      { word: "waded", explanation: "suggests walking in shallow water rather than entering a pool" }
    ],
    bestChoice: "eased"
  },
  {
    text: "The mouse [VERB] under the cabinet when it saw the cat.",
    baseVerb: "went quickly",
    substitutes: [
      { word: "ducked", explanation: "suggests quick lowering of the body which doesn't match going under something" },
      { word: "crawled", explanation: "implies slow movement that wouldn't match escaping danger" },
      { word: "slipped", explanation: "suggests accidental or smooth movement rather than intentional escape" },
      { word: "scurried", explanation: "perfectly captures quick, darting movement of a small animal escaping danger" }
    ],
    bestChoice: "scurried"
  },
  {
    text: "The children [VERB] when they heard the ice cream truck.",
    baseVerb: "became excited",
    substitutes: [
      { word: "squealed", explanation: "perfectly captures high-pitched sounds of excitement children make" },
      { word: "applauded", explanation: "suggests formal approval rather than spontaneous excitement" },
      { word: "gasped", explanation: "implies surprise or shock rather than happy excitement" },
      { word: "nodded", explanation: "indicates agreement or acknowledgment, not excitement" }
    ],
    bestChoice: "squealed"
  },
  {
    text: "The curtains [VERB] in the gentle breeze.",
    baseVerb: "moved",
    substitutes: [
      { word: "fluttered", explanation: "perfectly captures light, gentle, intermittent movement caused by breeze" },
      { word: "swayed", explanation: "suggests rhythmic movement that might be too heavy for light curtains" },
      { word: "billowed", explanation: "implies fuller, more dramatic movement than a gentle breeze would cause" },
      { word: "twisted", explanation: "suggests a turning motion not typically associated with curtains in breeze" }
    ],
    bestChoice: "fluttered"
  },
  {
    text: "The boy [VERB] the ball across the playground.",
    baseVerb: "threw",
    substitutes: [
      { word: "tossed", explanation: "suggests a light, casual throw appropriate for playground play" },
      { word: "hurled", explanation: "implies throwing with great force which might be excessive" },
      { word: "flung", explanation: "suggests careless or angry throwing, not typical of play" },
      { word: "pitched", explanation: "specifically refers to baseball-style throwing which is too specific" }
    ],
    bestChoice: "tossed"
  },
  {
    text: "The tour guide [VERB] to the ancient ruins.",
    baseVerb: "pointed",
    substitutes: [
      { word: "gestured", explanation: "suggests a more general hand movement to indicate direction" },
      { word: "indicated", explanation: "is too formal and vague for a physical pointing action" },
      { word: "motioned", explanation: "implies beckoning rather than showing something" },
      { word: "directed", explanation: "could mean giving instructions rather than pointing physically" }
    ],
    bestChoice: "gestured"
  },
  {
    text: "The movie star [VERB] at the cameras on the red carpet.",
    baseVerb: "smiled",
    substitutes: [
      { word: "grinned", explanation: "suggests a wide, possibly informal smile which fits a celebratory context" },
      { word: "smirked", explanation: "implies a smug, possibly condescending expression" },
      { word: "beamed", explanation: "perfectly captures a bright, radiant smile showing genuine happiness" },
      { word: "simpered", explanation: "suggests an insincere, affected smile" }
    ],
    bestChoice: "beamed"
  },
  {
    text: "The chocolate [VERB] in the hot sun.",
    baseVerb: "became soft",
    substitutes: [
      { word: "dissolved", explanation: "suggests complete liquidation, which is too extreme" },
      { word: "melted", explanation: "perfectly describes the process of becoming liquid from heat" },
      { word: "softened", explanation: "indicates becoming less firm but not necessarily liquid" },
      { word: "disintegrated", explanation: "suggests breaking into pieces rather than becoming liquid" }
    ],
    bestChoice: "melted"
  },
  {
    text: "The old floorboards [VERB] under his weight.",
    baseVerb: "made noise",
    substitutes: [
      { word: "groaned", explanation: "perfectly personifies the deep, strained sound of wood under pressure" },
      { word: "squeaked", explanation: "suggests a high-pitched sound not typical of old floorboards" },
      { word: "rattled", explanation: "implies loose parts shaking, not appropriate for floorboards" },
      { word: "clicked", explanation: "suggests a sharp, brief sound not associated with weight on floorboards" }
    ],
    bestChoice: "groaned"
  }],
  intermediate: [
  {
    text: "The politician [VERB] around the reporter's difficult question.",
    baseVerb: "moved",
    substitutes: [
      { word: "dodged", explanation: "perfectly captures the deliberate evasion of the difficult question" },
      { word: "pivoted", explanation: "suggests changing direction or topic to avoid directly answering" },
      { word: "sidestepped", explanation: "implies skillfully avoiding the question without directly addressing it" },
      { word: "circled", explanation: "suggests movement around a topic without directly engaging with it" }
    ],
    bestChoice: "dodged"
  },
  {
    text: "The audience [VERB] with laughter at the comedian's joke.",
    baseVerb: "laughed",
    substitutes: [
      { word: "erupted", explanation: "suggests a sudden, powerful outburst of laughter from the entire audience" },
      { word: "roared", explanation: "implies loud, sustained laughter showing strong appreciation" },
      { word: "chuckled", explanation: "indicates softer, more restrained laughter which understates the comedian's impact" },
      { word: "howled", explanation: "conveys uncontrolled, possibly excessive laughter" }
    ],
    bestChoice: "erupted"
  },
  {
    text: "The ancient tree [VERB] over the small cottage.",
    baseVerb: "stood",
    substitutes: [
      { word: "towered", explanation: "perfectly conveys great height and imposing presence over the cottage" },
      { word: "loomed", explanation: "suggests an ominous or threatening presence that may not be intended" },
      { word: "rose", explanation: "indicates upward movement or growth rather than established presence" },
      { word: "hovered", explanation: "implies suspension above ground which is physically impossible for a tree" }
    ],
    bestChoice: "towered"
  },
  {
    text: "The detective [VERB] through the victim's belongings for clues.",
    baseVerb: "looked carefully",
    substitutes: [
      { word: "sorted", explanation: "suggests organizing items rather than searching them" },
      { word: "glanced", explanation: "implies quick, cursory looking that lacks thoroughness" },
      { word: "rummaged", explanation: "perfectly captures searching thoroughly through items in a somewhat disorderly manner" },
      { word: "browsed", explanation: "suggests casual interest rather than purposeful investigation" }
    ],
    bestChoice: "rummaged"
  },
  {
    text: "His face [VERB] with embarrassment after making the mistake.",
    baseVerb: "became red",
    substitutes: [
      { word: "reddened", explanation: "simply states the color change without emotional intensity" },
      { word: "flushed", explanation: "perfectly captures sudden redness from blood rushing to the face due to emotion" },
      { word: "burned", explanation: "metaphorically suggests intense heat but could imply anger rather than embarrassment" },
      { word: "glowed", explanation: "suggests a positive radiance rather than embarrassment" }
    ],
    bestChoice: "flushed"
  },
  {
    text: "The CEO [VERB] responsibility for the company's ethical violations.",
    baseVerb: "refused to accept",
    substitutes: [
      { word: "denied", explanation: "suggests claiming something isn't true rather than refusing responsibility" },
      { word: "dismissed", explanation: "suggests treating something as unimportant rather than refusing responsibility" },
      { word: "shirked", explanation: "perfectly captures avoiding a duty or responsibility one should accept" },
      { word: "contested", explanation: "implies challenging the truth of the violations rather than avoiding responsibility" }
    ],
    bestChoice: "shirked"
  },
  {
    text: "The delicate perfume [VERB] throughout the elegant ballroom.",
    baseVerb: "moved",
    substitutes: [
      { word: "drifted", explanation: "suggests gentle, aimless movement through air, perfect for scent" },
      { word: "floated", explanation: "similar to drifting but implies more suspension than movement" },
      { word: "radiated", explanation: "suggests spreading outward from a center point rather than movement" },
      { word: "lingered", explanation: "implies remaining in place rather than movement through space" }
    ],
    bestChoice: "drifted"
  },
  {
    text: "The stock prices [VERB] after the company's announcement.",
    baseVerb: "went down quickly",
    substitutes: [
      { word: "decreased", explanation: "lacks the suddenness and severity implied by the context" },
      { word: "plummeted", explanation: "perfectly captures rapid, dramatic downward movement" },
      { word: "declined", explanation: "suggests a gradual, less dramatic decrease" },
      { word: "dropped", explanation: "indicates downward movement but lacks the intensity of a market reaction" }
    ],
    bestChoice: "plummeted"
  },
  {
    text: "The negotiations [VERB] when neither side would compromise.",
    baseVerb: "stopped making progress",
    substitutes: [
      { word: "paused", explanation: "suggests temporary stoppage with intention to continue" },
      { word: "ceased", explanation: "indicates stopping completely but lacks the failure connotation" },
      { word: "stalled", explanation: "perfectly captures stopping progress due to an obstacle or difficulty" },
      { word: "concluded", explanation: "suggests reaching an end point or resolution, which didn't happen" }
    ],
    bestChoice: "stalled"
  },
  {
    text: "The actor [VERB] into the character of the troubled detective.",
    baseVerb: "changed",
    substitutes: [
      { word: "morphed", explanation: "suggests physical transformation rather than psychological adaptation" },
      { word: "evolved", explanation: "implies gradual development rather than deliberate assumption of a role" },
      { word: "transformed", explanation: "suggests complete change that might be too extreme" },
      { word: "immersed", explanation: "perfectly captures deeply involving oneself in the character's psychology" }
    ],
    bestChoice: "immersed"
  },
  {
    text: "Her voice [VERB] as she described the traumatic experience.",
    baseVerb: "shook",
    substitutes: [
      { word: "trembled", explanation: "perfectly captures slight shakiness from emotional distress" },
      { word: "faltered", explanation: "suggests hesitation or stumbling rather than emotional shaking" },
      { word: "cracked", explanation: "implies breaking or failing completely rather than continuous trembling" },
      { word: "wavered", explanation: "suggests indecision or uncertainty rather than emotional reaction" }
    ],
    bestChoice: "trembled"
  },
  {
    text: "The company's sales [VERB] during the holiday season.",
    baseVerb: "increased greatly",
    substitutes: [
      { word: "grew", explanation: "suggests gradual increase rather than dramatic improvement" },
      { word: "expanded", explanation: "implies physical enlargement rather than quantity increase" },
      { word: "soared", explanation: "perfectly captures dramatic, rapid upward movement in figures" },
      { word: "multiplied", explanation: "suggests specific mathematical relationship rather than general increase" }
    ],
    bestChoice: "soared"
  },
  {
    text: "The storm clouds [VERB] on the horizon before the downpour.",
    baseVerb: "became larger",
    substitutes: [
      { word: "gathered", explanation: "perfectly captures clouds coming together and accumulating" },
      { word: "expanded", explanation: "suggests individual clouds growing rather than accumulating" },
      { word: "darkened", explanation: "focuses on color change rather than accumulation or size" },
      { word: "hovered", explanation: "implies remaining in place rather than growing or accumulating" }
    ],
    bestChoice: "gathered"
  },
  {
    text: "The old photograph [VERB] memories of her childhood.",
    baseVerb: "caused",
    substitutes: [
      { word: "created", explanation: "implies making new memories rather than recalling existing ones" },
      { word: "triggered", explanation: "perfectly captures suddenly activating specific stored memories" },
      { word: "produced", explanation: "suggests manufacturing something new rather than recalling" },
      { word: "generated", explanation: "implies creating something that didn't exist before" }
    ],
    bestChoice: "triggered"
  },
  {
    text: "The suspect's story [VERB] when confronted with new evidence.",
    baseVerb: "fell apart",
    substitutes: [
      { word: "dissolved", explanation: "suggests complete disappearance rather than revealing falsehood" },
      { word: "crumbled", explanation: "perfectly captures breaking apart under pressure like a weak structure" },
      { word: "shifted", explanation: "implies changing rather than breaking apart" },
      { word: "unraveled", explanation: "suggests coming apart thread by thread, may be too gradual" }
    ],
    bestChoice: "crumbled"
  },
  {
    text: "The speaker [VERB] her main points with compelling examples.",
    baseVerb: "made stronger",
    substitutes: [
      { word: "enhanced", explanation: "suggests improvement but lacks the specific support context" },
      { word: "amplified", explanation: "implies making louder rather than more persuasive" },
      { word: "reinforced", explanation: "perfectly captures strengthening by adding support" },
      { word: "magnified", explanation: "suggests making larger or more visible rather than stronger" }
    ],
    bestChoice: "reinforced"
  },
  {
    text: "The subtle flavors in the dish [VERB] perfectly together.",
    baseVerb: "worked",
    substitutes: [
      { word: "mixed", explanation: "suggests physical blending rather than complementary interaction" },
      { word: "combined", explanation: "implies physical joining rather than harmonious interaction" },
      { word: "harmonized", explanation: "perfectly captures different elements working together pleasingly" },
      { word: "functioned", explanation: "suggests practical operation rather than pleasing combination" }
    ],
    bestChoice: "harmonized"
  },
  {
    text: "Her expression [VERB] between hope and fear as she awaited the results.",
    baseVerb: "moved back and forth",
    substitutes: [
      { word: "alternated", explanation: "suggests distinct switching between states rather than blending" },
      { word: "shifted", explanation: "implies one-directional change rather than back and forth movement" },
      { word: "wavered", explanation: "perfectly captures unsteady fluctuation between emotional states" },
      { word: "transitioned", explanation: "suggests complete movement from one state to another" }
    ],
    bestChoice: "wavered"
  },
  {
    text: "The light [VERB] through the stained glass windows.",
    baseVerb: "came",
    substitutes: [
      { word: "shone", explanation: "simply indicates light emission without capturing the filtered quality" },
      { word: "filtered", explanation: "perfectly captures light passing through and being changed by the medium" },
      { word: "penetrated", explanation: "suggests forceful entry rather than beautiful illumination" },
      { word: "escaped", explanation: "implies light trying to get out rather than coming in" }
    ],
    bestChoice: "filtered"
  },
  {
    text: "The economy [VERB] following the implementation of the new policies.",
    baseVerb: "improved",
    substitutes: [
      { word: "recovered", explanation: "implies returning to a previous state rather than new growth" },
      { word: "expanded", explanation: "suggests physical growth rather than improvement in condition" },
      { word: "flourished", explanation: "perfectly captures thriving, healthy growth beyond mere improvement" },
      { word: "stabilized", explanation: "suggests becoming steady rather than improving" }
    ],
    bestChoice: "flourished"
  }],
  advanced: [
  {
    text: "The critic [VERB] the author's weak argument in the scathing review.",
    baseVerb: "attacked",
    substitutes: [
      { word: "eviscerated", explanation: "powerfully suggests completely destroying the argument by exposing its flaws" },
      { word: "dismantled", explanation: "implies methodically taking apart the argument piece by piece" },
      { word: "assailed", explanation: "suggests a forceful criticism but lacks the precision of the better options" },
      { word: "lambasted", explanation: "means to criticize harshly, but doesn't specifically address taking the argument apart" }
    ],
    bestChoice: "eviscerated"
  },
  {
    text: "The scandal [VERB] through the small community like wildfire.",
    baseVerb: "moved",
    substitutes: [
      { word: "rippled", explanation: "suggests gentle, wave-like movement that understates the scandal's impact" },
      { word: "surged", explanation: "implies powerful forward movement but lacks the specific connotation of rapid spreading" },
      { word: "coursed", explanation: "suggests flowing movement that doesn't fully capture the expansive nature of gossip" },
      { word: "proliferated", explanation: "perfectly captures rapid multiplication and spreading throughout the community" }
    ],
    bestChoice: "proliferated"
  },
  {
    text: "The candidate's evasive answer [VERB] the moderator's patience during the debate.",
    baseVerb: "tested",
    substitutes: [
      { word: "eroded", explanation: "suggests gradually wearing away the moderator's patience over time" },
      { word: "taxed", explanation: "implies putting strain on something but not necessarily depleting it" },
      { word: "exhausted", explanation: "perfectly conveys completely using up or depleting the moderator's patience" },
      { word: "challenged", explanation: "suggests difficulty but not necessarily depletion or consumption" }
    ],
    bestChoice: "exhausted"
  },
  {
    text: "Years of neglect had [VERB] the once magnificent estate to ruins.",
    baseVerb: "changed",
    substitutes: [
      { word: "transformed", explanation: "suggests complete change but lacks the negative connotation" },
      { word: "converted", explanation: "implies purposeful change rather than decay through neglect" },
      { word: "reduced", explanation: "simply indicates making smaller or less without capturing decay" },
      { word: "relegated", explanation: "perfectly captures demotion from higher status to lower through neglect" }
    ],
    bestChoice: "relegated"
  },
  {
    text: "The professor's innovative theory [VERB] conventional thinking in the field.",
    baseVerb: "challenged",
    substitutes: [
      { word: "contested", explanation: "suggests disputing something rather than transforming understanding" },
      { word: "subverted", explanation: "perfectly captures undermining established ideas from below" },
      { word: "refuted", explanation: "implies proving something false rather than offering a new perspective" },
      { word: "contradicted", explanation: "suggests direct opposition rather than revolutionary rethinking" }
    ],
    bestChoice: "subverted"
  },
  {
    text: "The plaintiff's testimony [VERB] numerous inconsistencies that damaged her credibility.",
    baseVerb: "contained",
    substitutes: [
      { word: "included", explanation: "neutrally states presence without emphasizing problems" },
      { word: "exhibited", explanation: "suggests display rather than problematic inclusion" },
      { word: "revealed", explanation: "implies disclosure rather than inherent problems" },
      { word: "harbored", explanation: "perfectly captures containing something negative or problematic within" }
    ],
    bestChoice: "harbored"
  },
  {
    text: "Her memoir [VERB] the complex emotions of growing up in a war-torn country.",
    baseVerb: "described",
    substitutes: [
      { word: "chronicled", explanation: "suggests sequential recording rather than emotional exploration" },
      { word: "depicted", explanation: "implies representing visually rather than emotional depth" },
      { word: "distilled", explanation: "perfectly captures extracting and concentrating the essence of complex experiences" },
      { word: "narrated", explanation: "simply means telling a story without capturing the emotional reduction" }
    ],
    bestChoice: "distilled"
  },
  {
    text: "The dictator's influence [VERB] into every aspect of citizens' lives.",
    baseVerb: "extended",
    substitutes: [
      { word: "expanded", explanation: "suggests growth from within rather than reaching into new areas" },
      { word: "reached", explanation: "implies simple contact rather than invasive control" },
      { word: "permeated", explanation: "perfectly captures spreading throughout and saturating completely" },
      { word: "stretched", explanation: "suggests extension that might be thin or limited rather than thorough" }
    ],
    bestChoice: "permeated"
  },
  {
    text: "The discovery [VERB] decades of scientific consensus on the subject.",
    baseVerb: "changed completely",
    substitutes: [
      { word: "altered", explanation: "suggests modification rather than complete reversal" },
      { word: "challenged", explanation: "implies questioning rather than overturning completely" },
      { word: "upended", explanation: "perfectly captures completely overturning or reversing established knowledge" },
      { word: "revised", explanation: "suggests making corrections rather than fundamental change" }
    ],
    bestChoice: "upended"
  },
  {
    text: "The attorney's closing argument [VERB] emotion and logic to persuade the jury.",
    baseVerb: "used together",
    substitutes: [
      { word: "combined", explanation: "suggests simple mixing without artistic skill" },
      { word: "balanced", explanation: "implies equal weighting rather than skillful integration" },
      { word: "merged", explanation: "suggests joining together that might lose distinctive qualities" },
      { word: "orchestrated", explanation: "perfectly captures arranging different elements harmoniously for maximum effect" }
    ],
    bestChoice: "orchestrated"
  }]
};

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}


function randomizeSentenceSets(sentenceSets) {
  const randomized = {};
  
  for (const level in sentenceSets) {

    const shuffledSentences = shuffleArray(sentenceSets[level]);
    
    randomized[level] = shuffledSentences.map(sentence => ({
      ...sentence,
      substitutes: shuffleArray(sentence.substitutes)
    }));
  }
  
  return randomized;
}

const randomizedSentenceSets = randomizeSentenceSets(sentenceSets);
export default randomizedSentenceSets;