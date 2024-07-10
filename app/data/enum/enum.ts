export type QuestionType =
    | "Fill-in-the-blank questions"
    | "MC questions"
    | "Underline-and-correct-the-error questions"
    | "Cloze-test paragraphs"
    | "Passage questions"
    | "Paragraph excerpt questions"
    | "Unscramble-the-sentence questions"
    | "Dialogue questions"
    | "Rewrite questions";

export type NavigationTitle =
    | "Grammar"
    | "Tenses"
    | "Reported Speech"
    | "Passive Voice"
    | "Moods"
    | "Prepositions"
    | "Adjectives & Adverbs"
    | "Countable & Uncountable"
    | "Pronouns"
    | "Others"
    | "Sentence Structure"
    | "Connectives"
    | "Clause"
    | "Other Structures"
    | "Language Enrichment"
    | "Theme-based Vocab"
    | "Customized Vocab"
    | "Literary Devices"
    | "Register"
    | "Interface";

export type Library =
    | "Grammar"
    | "Tenses"
    | "Reported Speech"
    | "Passive Voice"
    | "Moods"
    | "Prepositions"
    | "Adjectives & Adverbs"
    | "Countable & Uncountable"
    | "Pronouns"
    | "Others"
    | "Sentence Structure"
    | "Connectives"
    | "Clause"
    | "Other Structures"
    | "Language Enrichment"
    // | "Theme-based Vocab"
    // | "Customized Vocab"
    | "Literary Devices"
    | "Register"
    | "Interface";

export type LevelOfVocabulary = "Beginner level" | "Intermediate level" | "Advanced level";

export type Route =
    | "Literary Devices"
    | "Language Enrichment"
    | "Register"
    | "Tenses"
    | "Reported Speech"
    | "Passive Voice"
    | "Moods"
    | "Adjectives & Adverbs"
    | "Pronouns"
    | "Prepositions"
    | "Countable & Uncountable"
    | "Others"
    | "Connectives"
    | "Clause"
    | "Other Structures";

export type FileType = "PDF" | "Word";
