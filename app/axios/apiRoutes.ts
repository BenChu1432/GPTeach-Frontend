const apiRoutes = {
    POST_OPENAI_NOTES: (selectedTheme: string, selectedLevelOfVocabulary: string, numOfQuestions: string, numOfParagraphs: string) =>
        `/openai/instruction/${selectedTheme}/${selectedLevelOfVocabulary}/${selectedLevelOfVocabulary}/${numOfQuestions}/${numOfParagraphs}`,
};

export default apiRoutes;
