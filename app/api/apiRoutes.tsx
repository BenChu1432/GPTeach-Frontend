const apiRoutes = {
    CREATE_PDF: (topic: string, questionType: string) =>
        `/openai/create-pdf/${topic}/${questionType}`,
};
