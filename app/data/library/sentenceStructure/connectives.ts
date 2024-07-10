const connectives = [
    {
        name: "All mixed(no correlatives)",
        content: [
            { topic: "so vs therefore", example: "e.g. He was hungry, so he ate a sandwich vs. He had not eaten all day; therefore, he was hungry." },
            { topic: "but vs however", example: "e.g. He loves coffee but doesn't like tea vs. He loves coffee; however, he doesn't drink it after 5 pm." },
            { topic: "because vs because of", example: "e.g. She was late because she missed the bus vs. She was late because of the traffic." },
            { topic: "because vs due to", example: "e.g. The game was postponed because it was raining vs. The game was postponed due to rain." },
            { topic: "when vs while", example: "e.g. She was watching a movie when he arrived. vs. While she was watching a movie, he arrived." },
            {
                topic: "alternatively vs conversely",
                example: "e.g. We could go to the park; alternatively, there's a museum nearby we could visit vs. He enjoys summer; conversely, she prefers winter.",
            },
        ],
        list: [
            // Cause or Reason
            "so",
            "therefore",
            "because",
            "since",
            "now that",
            "as",
            "because of",
            "due to",
            "owing to",
            "thanks to",
            "on account of",
            "given that",
            "inasmuch as",
            "for this reason",
            "considering",

            // Time or Sequence
            "after",
            "before",
            "until",
            "once",
            "when",
            "whenever",
            "while",
            "as soon as",
            "by the time",
            "till",
            "following that",
            "later on",
            "shortly after",
            "meanwhile",

            // Contrast or Concession
            // Contrast or Concession
            "no matter how...",
            "no matter what...",
            "no matter where...",
            "no matter when...",
            "no matter who...",
            "no matter which...",
            "no matter whom...",
            "no matter+question word...",
            "but",
            "despite",
            "in spite of",
            "irrespective",
            "notwithstanding",
            "regardless",
            "regardless of",
            "however",
            "although",
            "though",
            "even though",
            "nevertheless",
            "nonetheless",
            "on the other hand",
            "conversely",
            "whereas",
            "still",
            "yet",

            // Purpose
            "so that",
            "in order to",
            "in order that",
            "for the purpose of",
            "with a view to",
            "in the hope of",
            "with the intention of",
            "as a way of",
            "as a means to",
            "with the aim of",
            "lest",

            // Result
            "thus",
            "hence",
            "as a result",
            "as a result of",
            "as a consequence",
            "as a consequence of",
            "consequently",
            "subsequently",
            "thereby",

            // Conclusion
            "in conclusion",
            "in a nutshell",
            "to conclude",
            "all in all",
            "ultimately",
            "overall",
            "in summary",
            "all things considered",
            "taking everything into account",

            // Condition or Hypothetical
            "if",
            "unless",
            "only if",
            "in case",
            "provided that",
            "on the condition that",
            "as long as",
            "assuming that",
            "even if",
            "suppose",
            "supposing",

            // Comparison
            "compared to",
            "in comparison with",
            "in contrast to",
            "by sharp contrast",
            "by contradistinction",
            "on the same token",
            "similarly",
            "in the same way",
            "likewise",

            // Metaphors
            "as if",
            "as though",
            "analogously",

            // Clarification
            "specifically",
            "namely",
            "that is",
            "in other words",
            "to put it another way",
            "to put it into perspective",
            "for instance",
            "for example",
            "i.e.",

            // Emphasis
            "especially",
            "particularly",
            "in particular",
            "specifically",
            "indeed",
            "in fact",

            // Supplementation
            "firstly",
            "secondly",
            "thirdly",
            "first and foremost",
            "additionally",
            "also",
            "moreover",
            "on top of that",
            "in addition",
            "to add on",
            "furthermore",
            "what's more",
            "and",
            "plus",
            "last but not least",
            "lastly",

            // Alternative or Choice
            "or",
            "alternatively",
            "otherwise",
        ],
    },
    {
        name: "Subordinating Conjunctions",
        content: [
            { topic: "because vs so", example: "e.g. He studied hard [because] he wanted to pass vs. He wanted to pass, [so] he studied hard." },
            { topic: "but vs so", example: "e.g. He wanted to go out, [but] it was raining vs. It was raining, [so] he didn't go out." },
            { topic: "in order to vs so that", example: "e.g. I woke up early [in order to] catch the bus vs. I woke up early [so that] I wouldn't miss the bus." },
            { topic: "lest vs so that", example: "e.g. Speak softly [lest] you wake the baby vs. Speak softly [so that] you don't wake the baby." },
            { topic: "so vs so that", example: "e.g. I was tired [so] I went to bed vs. I went to bed [so that] I could wake up early." },
            { topic: "when vs while", example: "e.g. I was at the store [when] it started to rain vs. [While] I was at the store, it started to rain." },
            { topic: "if vs unless", example: "e.g. I'll go to the party [if] it doesn't rain vs. I won't go to the party [unless] it stops raining." },
            { topic: "in case vs unless", example: "e.g. Bring an umbrella [in case] it rains vs. Don't bring an umbrella [unless] it looks like rain." },
        ],
        list: [
            // Cause or Reason
            "so",
            "because",
            "since",
            "as",
            "owing to",
            "thanks to",
            "inasmuch as",
            "now that",
            "given that",
            "now that",

            // Time or Sequence
            "after",
            "before",
            "once",
            "when",
            "whenever",
            "while",
            "as soon as",
            "by the time",
            "now that",
            "till",
            "until",

            // Supplementation
            "on top of",
            "in addition to",
            "other than",

            // Contrast or Concession
            "but",
            "although",
            "though",
            "even though",
            "whereas",
            "while",
            "even if",
            "No matter how...",
            "No matter what...",
            "No matter where...",
            "No matter when...",
            "No matter who...",
            "No matter which...",
            "No matter whom...",
            "No matter+question word...",

            // Condition or Hypothetical
            "if",
            "unless",
            "only if",
            "lest",
            "provided that",
            "providing",
            "assuming that",
            "in case",
            "whether",
            "as long as",
            "so long as",
            "on condition that",

            // Purpose or Reason
            "so that",
            "in order that",
            "lest",

            // Place or Direction
            "where",
            "wherever",
            "whither",
            "whence",

            // Manner or Comparison
            "as if",
            "as though",
            "like (in some dialects)",
            "the way",
        ],
    },
    {
        name: "Causative Phrases",
        content: [
            { topic: "despite vs because of", example: "e.g. He came to the match [despite] the rain vs. He stayed home [because of] the rain." },
            { topic: "despite vs due to", example: "e.g. She passed the test [[despite] not studying vs. She passed the test [due to] her innate talent." },
            { topic: "in order to vs with a view to", example: "e.g. He studied hard [in order to] pass the exam vs. He joined the club [with a view to] enhancing his skills." },
            { topic: "as a result of vs in the event of", example: "e.g. The match was canceled [as a result of] heavy rain vs. There's a backup plan [in the event of] rain." },
            { topic: "when vs while", example: "e.g. [When] he came over, we were watching TV. vs. [While] we were watching TV, my friend knocked on the door." },
        ],
        list: [
            // Direct Cause or Reason
            "because of",
            "due to",
            "owing to",
            "thanks to",
            "on account of",
            "on behalf of",
            "as a result of",
            "considering",

            // Indirect or Contributing Cause
            "in view of",
            "in light of",
            "by virtue of",
            "in response to",

            // Contrastive Cause
            "despite",
            "in spite of",
            "regardless of",
            "irrespective of",
            "notwithstanding",

            // Purpose or Intention
            "in order to",
            "for the sake of",
            "with the intention of",
            "with a view to",
            "in the hope of",
            "with the intention of",
            "as a way of",
            "as a means to",
            "with the aim of",

            // Resulting Effect or Consequence
            "as a consequence of",
            "as a result of",
            "as an effect of",

            // Comparison
            "in sharp contrast with",
            "in comparison with",
            "compared to",

            // Condition or Requirement
            "in the event of",
            "in case of",
        ],
    },
    {
        name: "Conjunctive Adverbs",
        content: [
            { topic: "however vs therefore", example: "e.g. He didn't study for the test; however, he still managed to get a good grade." },
            { topic: "similarly vs alternatively", example: "e.g. John loves playing tennis; similarly, his sister is into racquet sports." },
            { topic: "conversely vs likewise", example: "She enjoys hiking in the mountains; likewise, her brother loves outdoor adventures." },
        ],
        list: [
            // Contrast or Opposition
            "however",
            "nevertheless",
            "nonetheless",
            "conversely",
            "on the other hand",
            "still",
            "yet",
            "though",

            // Addition
            "what's more",
            "furthermore",
            "moreover",
            "additionally",
            "also",
            "plus",
            "besides",
            "in addition",
            "on top of that",

            // Sequence
            "next",
            "then",
            "firstly",
            "secondly",
            "thirdly",

            // Emphasis
            "similarly",
            "likewise",
            "especially",
            "particularly",
            "indeed",
            "in fact",
            "clearly",
            "obviously",

            // Purpose or Result
            "therefore",
            "thus",
            "hence",
            "subsequently",
            "as a result",
            "So",
            "accordingly",

            // Conclusion
            "in conclusion",
            "in a nutshell",
            "to conclude",
            "all in all",
            "ultimately",
            "overall",
            "in summary",
            "all things considered",
            "taking everything into account",

            // Alternative or Choice
            "alternatively",
            "otherwise",
            "or else",

            // Clarification or Specification
            "specifically",
            "namely",
            "that is",
            "in other words",
            "to put it another way",
            "to put it into perspective",
            "for instance",
            "for example",
            "i.e.",

            // Condition or Concession
            "if so",
            "even so",
            "provided",

            // Comparison
            "in comparison",
            "in contrast",
            "instead",
            "compared to",
            "analogously",

            // Time or Sequence (Specific to time-related sequencing)
            "meanwhile",
            "thereafter",
            "soon",
            "later",
            "previously",
            "simultaneously",

            // Others (adverbs that don't fit neatly into the above categories or are more general)
            "first and foremost",
            "lastly",
            "last but not least",
        ],
    },
    {
        name: "Correlative conjunctions",
        content: [
            { topic: "either...or... vs neither...nor...", example: "e.g. You can either have the chocolate or the vanilla ice cream." },
            { topic: "both... and... vs neither...nor...", example: "e.g. He is both intelligent and hardworking." },
            { topic: "not only... but also... vs neither...nor...", example: "e.g. Not only did he arrive late, but he also forgot his ticket." },
            { topic: "so...that... vs such...that...", example: "e.g. The book was so interesting that I read it in one sitting." },
            { topic: "scarcely/hardly... when... vs no sooner... than...", example: "e.g. Scarcely had I stepped outside when it began to rain." },
            { topic: "not... but...", example: "e.g. She wants not praise but constructive feedback." },
            { topic: "the+adj/adv(+SVO),the+adj/adv(+SVO)", example: "e.g. The more you practice, the better you become." },
        ],
        list: [
            "either...or...",
            "neither...nor...",
            "both... and...",
            "not only... but also...",
            "so...that...",
            "such...that...",
            "scarcely/hardly... when...",
            "no sooner... than...",
            "not... but...",
            "the+adj/adv(+SVO),the+adj/adv(+SVO)",
        ],
    },
];

export default connectives;
