const apiRoutes = {
    CREATE_PDF: (topic: string, questionType: string) => `/openai/create-pdf/${topic}/${questionType}`,
    POST_OPENAI_NOTES: (selectedTheme: string, selectedLevelOfVocabulary: string, numOfQuestions: string, numOfParagraphs: string) =>
        `/openai/instruction/${selectedTheme}/${selectedLevelOfVocabulary}/${selectedLevelOfVocabulary}/${numOfQuestions}/${numOfParagraphs}`,
    CREATE_USER: `/user/create-user`,
    LOGIN: `/auth/login`,
};

export default apiRoutes;
