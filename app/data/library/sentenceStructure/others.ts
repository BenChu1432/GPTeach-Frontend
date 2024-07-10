const others = [
    {
        name: "Emphasis",
        content: [
            { topic: "anything but", example: "e.g. This movie is anything but boring." },
            { topic: "nothing but", example: "e.g. He talks about nothing but work." },
            { topic: "nothing if not", example: "e.g. The play was nothing if not entertaining." },
            { topic: "nothing more than", example: "e.g. It's nothing more than a rumor." },
            { topic: "nothing less than", example: "e.g. Her performance was nothing less than spectacular." },
        ],
        list: ["anything but", "nothing but", "nothing if not", "nothing more than", "nothing less than"],
    },
    {
        name: "Rhetorical questions",
        content: [
            { topic: "Won't you...?", example: "e.g. It's a nice day, so won't you go for a walk?" },
            { topic: "Why not+bare infinitive?", example: "e.g. It's sunny outside, so why not take a break?" },
        ],
        list: ["Won't you...?", "Why not+infinitive?"],
    },
    // {
    //     name: "Hypophora",
    //     content: [
    //         { topic: "Question+No, an emphatic no.", example: "e.g. Should we sacrifice the environment? No, an emphatic no." },
    //         { topic: "Question+Yes, an emphatic yes.", example: "e.g. Should we protect the environment? Yes, an emphatic yes." },
    //         { topic: "Question+The answer lies in….", example: "e.g. Why does the sun set? The answer lies in the Earth's rotation." }
    //     ],
    //     list:[
    //         "Question+No, an emphatic no.",
    //         "Question+Yes, an emphatic yes.",
    //         "Question+The answer lies in…."
    //     ]
    // },
    {
        name: "Ellipsis",
        content: [
            { topic: "Verb ellipsis", example: "e.g. She will go to the park, and he will [go to the park] too." },
            { topic: "Noun ellipsis", example: "e.g. I prefer the blue shirt rather than the red [shirt]." },
            { topic: "Adjective ellipsis", example: "e.g. He is more excited about the trip than she is [about the trip]." },
            { topic: "Adverbial ellipsis", example: "e.g. She can play the guitar; her brother can [play the guitar], too." },
            { topic: "Conjunction reduction", example: "e.g. She likes tea, [and] her brother coffee." },
            { topic: "Gapping", example: "e.g. Some like tea; others, coffee." },
            { topic: "Sluicing", example: "e.g. Someone called, but I don't know who." },
            { topic: "Comparative deletion", example: "e.g. She is taller than I [am tall]." },
            { topic: "Mixed ellipsis", example: "e.g. She is taller than I [am tall]." },
        ],
        list: ["Verb ellipsis", "Noun ellipsis", "Adjective ellipsis", "Adverbial ellipsis", "Conjunction reduction", "Gapping", "Sluicing", "Comparative deletion"],
    },
    {
        name: "Inversion",
        content: [
            { topic: "'Only' Inversion", example: "e.g. Only when I'm sick do I skip meals." },
            { topic: "'Until' Inversion", example: "e.g. Not until the bell rang did he realize his mistake." },
            { topic: "'neither/nor' Inversion", example: "e.g. Neither can she cook nor can she sing." },
            { topic: "Not only...but also...", example: "e.g. Not only does she sing, but she also dances." },
            { topic: "Negative Adverbial Inversion", example: "e.g. Never have I seen such a thing." },
            { topic: "Adverbial Inversion", example: "e.g. In the corner sat a little cat." },
            { topic: "Locative Inversion", example: "e.g. On the chair is a hat." },
            { topic: "Conditional Inversion", example: "e.g. Had I known, I would have come earlier." },
            { topic: "Inversion in Agreement/Disagreement", example: "e.g. So do I." },
            { topic: "Inversion in comparisons", example: "e.g. So am I." },
            { topic: "Exclamatory Inversion", example: "e.g. What a beautiful day it is!" },
        ],
        list: [
            "'Only' Inversion",
            "'Until' Inversion",
            "'neither/nor' Inversion",
            "Not only...but also...",
            "Negative Adverbial Inversion",
            "Adverbial Inversion",
            "Locative Inversion",
            "Conditional Inversion",
            "Inversion in Agreement/Disagreement",
            "Inversion in comparisons",
            "Exclamatory Inversion",
        ],
    },
    {
        name: "Other Structure",
        content: [
            { topic: "using dash", example: "e.g. She was the one – the only one – who knew the truth." },
            { topic: "not to mention vs let alone", example: "e.g. He can't boil water, not to mention cook dinner." },
            { topic: "albeit", example: "e.g. He accepted the job, albeit with some reservations." },
        ],
        list: ["using dash", "not to mention vs let alone", "albeit vs but"],
    },
];

export default others;
