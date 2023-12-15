const languageEnrichment = [
    {
        name: "Topic-Based Vocab",
        content: [
            { topic: "Stationery", example: "e.g. pen, eraser, ruler" },
            { topic: "School", example: "e.g. blackboard, textbook, classroom" },
            { topic: "Food", example: "e.g. apple, bread, cheese" },
            { topic: "Travel", example: "e.g. passport, suitcase, map" },
            { topic: "Weather", example: "e.g. sunny, cloudy, stormy, rainfall" },
            { topic: "Animals", example: "e.g. lion, elephant, squirrel, parrot" },
            { topic: "Clothing", example: "e.g. shirt, trousers, dress, scarf" },
            { topic: "Nature", example: "e.g. tree, mountain, river, ocean" }
        ],
        list: ["Stationery", "School", "Food", "Travel","Weather", "Animals", "Clothing", "Nature"]
    },
    {
        name: "Phrasal Verbs",
        content: [
            { topic: "Daily Activities", example: "e.g. wake up, turn off, look out" },
            { topic: "Travel", example: "e.g. check in, take off, get away" },
            { topic: "Work", example: "e.g. log in, speak up, jot down" },
            { topic: "Social Interaction", example: "e.g. hang out, catch up, break the ice" },
            { topic: "Cooking", example: "e.g. stir up, boil over, cut back on" },
            { topic: "Fitness", example: "e.g. work out, warm up, cool down" },
            { topic: "Shopping", example: "e.g. try on, pay for, pick out" },
            { topic: "Driving", example: "e.g. pull over, speed up, back out" }
        ],
        list: ["Daily Activities", "Travel", "Work", "Social Interaction","Cooking", "Fitness", "Shopping", "Driving"]
    },
    {
        name: "Idioms",
        content: [
            { topic: "Business", example: "e.g. Ballpark figure, Big cheese, Cut to the chase, Moving the goalposts, Seal the deal" },
            { topic: "Emotions", example: "e.g. A storm in a teacup, Cry over spilt milk, Jump for joy, Wear your heart on your sleeve, At the end of your tether" },
            { topic: "Time", example: "e.g. Against the clock, In the nick of time, Once in a blue moon, Time flies, Beat the clock" },
            { topic: "Health", example: "e.g. Under the weather, A taste of your own medicine, An apple a day, Fit as a fiddle, Sick as a dog" },
            { topic: "Technology", example: "e.g. On the same wavelength, Reinvent the wheel, Plug in, Pushing buttons, Cutting-edge" },
            { topic: "Sports", example: "e.g. A ballpark figure, Out of the ballpark, Run the bases, Hit it out of the park, Level playing field" },
            { topic: "Nature", example: "e.g. A breath of fresh air, Weather the storm, In full bloom, Turn over a new leaf, Go against the grain" },
            { topic: "Travel", example: "e.g. Hit the road, Off the beaten track, Smooth sailing, A stone's throw away, A mile a minute" },
            { topic: "Food", example: "e.g. Piece of cake, Spill the beans, In a nutshell, Full plate, Biting off more than you can chew" },
            { topic: "Education", example: "e.g. Learn the ropes, Old school, Book smart, A for effort, Hit the books" }
        ],
        list: ["Business", "Emotions", "Time", "Health", "Technology", "Sports", "Nature", "Travel", "Food", "Education"]
    },
    {
        name: "Proverbs",
        content: [
            { topic: "Success", example: "e.g. Fortune favors the bold, Rome wasn't built in a day" },
            { topic: "Knowledge and Wisdom", example: "e.g. Knowledge is power, Ignorance is bliss" },
            { topic: "Human Nature", example: "e.g. Birds of a feather flock together, Actions speak louder than words" },
            { topic: "Money and Finance", example: "e.g. A penny saved is a penny earned, Money doesn't grow on trees" }
        ],
        list: ["Success", "Knowledge and Wisdom", "Human Nature", "Money and Finance"]
    },
    {
        name: "Slang",
        content: [
            { topic: "Modern Colloquial Terms", example: "e.g. Ghost - suddenly stop communication, Savage - very good or impressive" },
            { topic: "Internet and Texting", example: "e.g. LOL - Laugh out loud, BRB - Be right back" },
            { topic: "Youth Culture", example: "e.g. Lit - Amazing, Flex - To show off" },
            { topic: "Urban Expressions", example: "e.g. Chill - Relax, Dope - Cool or awesome" },
            { topic: "Online Gaming Slang", example: "e.g. GG - Good Game, Noob - Newbie or inexperienced player" },
            { topic: "Music and Pop Culture", example: "e.g. Bop - A catchy song, Stan - A hardcore fan" },
            { topic: "Street Slang", example: "e.g. Hustle - To work hard, Bling - Flashy jewelry" },
            { topic: "Teen Slang", example: "e.g. FOMO - Fear Of Missing Out, Clap back - A quick, clever reply" }
        ],
        list: ["Modern Colloquial Terms", "Internet and Texting", "Youth Culture", "Urban Expressions", "Online Gaming Slang", "Music and Pop Culture", "Street Slang", "Teen Slang"]
    },
    {
        name: "Word Root",
        content: [
            { topic: "Amo/Ami (Love)", example: "e.g. Amiable, Amity, Enamored" },
            { topic: "Aqua (Water)", example: "e.g. Aquarium, Aquatic, Aqueduct" },
            { topic: "Bio (Life)", example: "e.g. Biology, Biography, Biotic" },
            { topic: "Chrono (Time)", example: "e.g. Chronology, Synchronize, Anachronism" },
            { topic: "Geo (Earth)", example: "e.g. Geography, Geology, Geode" },
            { topic: "Path (Feeling)", example: "e.g. Sympathy, Empathy, Apathy" },
            { topic: "Phon (Sound)", example: "e.g. Telephone, Symphony, Phonetics" },
            { topic: "Scope (See, Watch)", example: "e.g. Telescope, Microscope, Periscope" },
            { topic: "Therm (Heat)", example: "e.g. Thermal, Thermometer, Hypothermia" },
            { topic: "Graph (Write)", example: "e.g. Autograph, Graphite, Telegraph" },
            { topic: "Meter/Metr (Measure)", example: "e.g. Thermometer, Perimeter, Symmetry" },
            { topic: "Ped/Pod (Foot)", example: "e.g. Pedal, Podiatrist, Pedestrian" },
            { topic: "Psych (Mind, Soul)", example: "e.g. Psychology, Psychic, Psychopath" },
            { topic: "Tele (Far)", example: "e.g. Telephone, Television, Telegraph" },
            { topic: "Vis/Vid (See)", example: "e.g. Vision, Evidence, Provide (make visible)" },
            { topic: "Lum/Luci (Light)", example: "e.g. Luminary, Translucent, Illuminate" },
            { topic: "Magn (Great)", example: "e.g. Magnify, Magnificent, Magnitude" },
            { topic: "Spec/Spect (Look)", example: "e.g. Spectacle, Inspect, Perspective" },
            { topic: "Tact/Tang (Touch)", example: "e.g. Tactile, Intangible, Tangent" },
            { topic: "Ver (True)", example: "e.g. Verify, Verdict, Veritable" },
            { topic: "Voc/Vok (Voice, Call)", example: "e.g. Vocal, Invoke, Provocative" },
            { topic: "Port (Carry)", example: "e.g. Portable, Transport, Deport" },
            { topic: "Scrib/Script (Write)", example: "e.g. Describe, Manuscript, Prescription" },
            { topic: "Duct (Lead)", example: "e.g. Conduct, Induct, Aqueduct" },
            { topic: "Fid (Faith, Trust)", example: "e.g. Fidelity, Confidence, Infidel" },
            { topic: "Flu (Flow)", example: "e.g. Fluent, Influence, Confluence" },
            { topic: "Cede/Ceed/Cess (Go, Yield)", example: "e.g. Precede, Concede, Accessible" },
            { topic: "Flect/Flex (Bend)", example: "e.g. Reflect, Flexible, Inflection" },
            { topic: "Ject (Throw)", example: "e.g. Eject, Project, Subject" },
            { topic: "Mit/Miss (Send)", example: "e.g. Transmit, Omit, Admission" },
            { topic: "Pend/Pens (Hang, Weigh, Pay)", example: "e.g. Pending, Pension, Expensive" },
            { topic: "Stru/Struct (Build)", example: "e.g. Construct, Structure, Obstruction" },
            { topic: "Tract (Pull, Draw)", example: "e.g. Attract, Tractor, Detract" },
            { topic: "Volv/Volu (Roll, Turn)", example: "e.g. Revolve, Evolution, Voluble" },
            { topic: "Fract/Frag (Break)", example: "e.g. Fracture, Fragment, Refract" },
            { topic: "Gress (Step, Walk)", example: "e.g. Progress, Aggressive, Digress" },
            { topic: "Plic/Plex/Ply (Fold, Weave, Entangle)", example: "e.g. Complicate, Complex, Multiply" },
            { topic: "Rupt (Break)", example: "e.g. Bankrupt, Disrupt, Erupt" },
            { topic: "Scrib/Script (Write)", example: "e.g. Describe, Manuscript, Transcribe" },
            { topic: "Spect/Spic (Look)", example: "e.g. Inspect, Prospect, Suspicious" },
            { topic: "Tain/Ten/Tent (Hold)", example: "e.g. Contain, Retain, Tenacious" },
            { topic: "Therap (Cure, Treatment)", example: "e.g. Therapy, Therapeutic, Psychotherapy" },
            { topic: "Vol (Will)", example: "e.g. Voluntary, Benevolent, Malevolent" },
            { topic: "Cogn/Gnos (Know)", example: "e.g. Recognize, Prognosis, Incognito" },
            { topic: "Corp (Body)", example: "e.g. Corporation, Corpse, Corporeal" },
            { topic: "Dict (Say, Speak)", example: "e.g. Dictate, Predict, Contradict" },
            { topic: "Duc/Duct (Lead)", example: "e.g. Conduct, Induce, Deduct" },
            { topic: "Fid (Faith, Trust)", example: "e.g. Fidelity, Confide, Infidelity" },
            { topic: "Gen (Birth, Race, Produce)", example: "e.g. Generation, Gene, Indigenous" },
            { topic: "Graph/Gram (Write, Draw)", example: "e.g. Autograph, Grammar, Telegram" },
            { topic: "Loc/Log/Loqu (Word, Speech)", example: "e.g. Dialogue, Eloquent, Prologue" },
            { topic: "Lumin (Light)", example: "e.g. Illuminate, Luminary, Luminous" },
            { topic: "Morph (Shape)", example: "e.g. Amorphous, Metamorphosis, Morphology" },
            { topic: "Nomen/Nym/Onym (Name)", example: "e.g. Nominate, Synonym, Pseudonym" },
            { topic: "Ped (Child, Education)", example: "e.g. Pediatric, Encyclopedia, Pedagogue" },
            { topic: "Phil (Love)", example: "e.g. Philosophy, Bibliophile, Philanthropy" },
            { topic: "Soph (Wisdom)", example: "e.g. Philosophy, Sophomore, Sophisticated" },
            { topic: "Theo (God)", example: "e.g. Theology, Atheist, Theocracy" },
            { topic: "Therm (Heat)", example: "e.g. Thermal, Thermometer, Hypothermia" },
            { topic: "Ver (Truth)", example: "e.g. Verify, Verdict, Veritable" },
            { topic: "Anim (Mind, Spirit)", example: "e.g. Animation, Animosity, Magnanimous" },
            { topic: "Tempo (Time)", example: "e.g. Temporary, Contemporary, Temporal" },
            { topic: "Verd (Green)", example: "e.g. Verdant, Verdi, Verdure" },
            { topic: "Mort (Death)", example: "e.g. Mortal, Immortal, Mortuary" },
        ],
        list: ["Amo/Ami (Love)", "Aqua (Water)", "Bio (Life)", "Chrono (Time)", "Geo (Earth)", "Path (Feeling)", "Phon (Sound)", "Scope (See, Watch)", "Therm (Heat)", "Graph (Write)", "Meter/Metr (Measure)", "Ped/Pod (Foot)", "Psych (Mind, Soul)", "Tele (Far)", "Vis/Vid (See)", "Lum/Luci (Light)", "Magn (Great)", "Spec/Spect (Look)", "Tact/Tang (Touch)", "Ver (True)", "Voc/Vok (Voice, Call)", "Port (Carry)", "Scrib/Script (Write)", "Duct (Lead)", "Fid (Faith, Trust)", "Flu (Flow),",
        "Cede/Ceed/Cess (Go, Yield)", "Flect/Flex (Bend)", "Ject (Throw)",
            "Mit/Miss (Send)", "Pend/Pens (Hang, Weigh, Pay)", "Stru/Struct (Build)",
            "Tract (Pull, Draw)", "Volv/Volu (Roll, Turn)", "Fract/Frag (Break)",
            "Gress (Step, Walk)", "Plic/Plex/Ply (Fold, Weave, Entangle)", "Rupt (Break)",
            "Scrib/Script (Write)", "Spect/Spic (Look)", "Tain/Ten/Tent (Hold)",
            "Therap (Cure, Treatment)", "Vol (Will)","Cogn/Gnos (Know)", "Corp (Body)", "Dict (Say, Speak)", "Duc/Duct (Lead)",
            "Fid (Faith, Trust)", "Gen (Birth, Race, Produce)", "Graph/Gram (Write, Draw)",
            "Loc/Log/Loqu (Word, Speech)", "Lumin (Light)", "Morph (Shape)",
            "Nomen/Nym/Onym (Name)", "Ped (Child, Education)", "Phil (Love)",
            "Soph (Wisdom)", "Theo (God)", "Therm (Heat)", "Ver (Truth)","Anim (Mind, Spirit)","Tempo (Time)","Verd (Green)","Mort (Death)"]
    },
    {
        name: "Other",
        content: [
            { topic: "False Friends", example: "e.g. Stationary vs Stationery" },
            { topic: "Homophones", example: "e.g. There, their, they're" },
            { topic: "Portmanteaus", example: "e.g. Brunch (Breakfast + Lunch), Smog (Smoke + Fog)" }
        ],
        list: ["False Friends", "Homophones", "Palindromes", "Portmanteaus"]
    }
];


export default languageEnrichment;