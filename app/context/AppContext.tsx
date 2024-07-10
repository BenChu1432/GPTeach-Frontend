import React, { createContext, useState, useContext } from 'react';

// Define the shape of the context
interface AppContextType {
    currentCategory:string;
    setCurrentCategory:(value:string)=>void;
    selectedLevelOfVocabulary: string;
    setSelectedLevelOfVocabulary: (value: string) => void;
    selectedQuestionType: string;
    setSelectedQuestionType: (value: string) => void;
    numOfQuestions: number;
    setNumOfQuestions: (value: number) => void;
    numOfSentences: number;
    setNumOfSentences: (value: number) => void;
    selectedFontSize: number;
    setSelectedFontSize: (value: number) => void;
    selectedFontFamily: string;
    setSelectedFontFamily: (value: string) => void;
    selectedFile: string;
    setSelectedFile: (value: string) => void;
    selectedTheme:string;
    setSelectedTheme: (value: string) => void;
    numOfParagraphs:number;
    setNumOfParagraphs: (value: number) => void;
    userEmail:string;
    setUserEmail:(value:string)=>void;
}

interface AppProviderProps {
    children: React.ReactNode;
}

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create the provider component
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [currentCategory,setCurrentCategory]= useState<string>("Grammar");
    const [selectedLevelOfVocabulary, setSelectedLevelOfVocabulary] = useState<string>("Beginner level");
    const [selectedQuestionType, setSelectedQuestionType] = useState<string>("Fill-in-the-blank questions");
    const [numOfQuestions, setNumOfQuestions] = useState<number>(5);
    const [numOfParagraphs, setNumOfParagraphs] = useState<number>(5);
    const [numOfSentences, setNumOfSentences] = useState<number>(1);
    const [selectedFontSize, setSelectedFontSize] = useState<number>(13);
    const [selectedFontFamily, setSelectedFontFamily] = useState<string>("Times New Roman");
    const [selectedFile,setSelectedFile] = useState<string>("PDF");
    const [selectedTheme,setSelectedTheme] = useState<string>("random");
    const [userEmail, setUserEmail]= useState<string>("");

    return (
        <AppContext.Provider
            value={{
                selectedLevelOfVocabulary,
                setSelectedLevelOfVocabulary,
                selectedQuestionType,
                setSelectedQuestionType,
                numOfQuestions,
                setNumOfQuestions,
                numOfSentences,
                setNumOfSentences,
                selectedFontSize,
                setSelectedFontSize,
                selectedFontFamily,
                setSelectedFontFamily,
                selectedFile,
                setSelectedFile,
                selectedTheme,
                setSelectedTheme,
                numOfParagraphs,
                setNumOfParagraphs,
                currentCategory,
                setCurrentCategory,
                userEmail,
                setUserEmail


    }}
>
    {children}
    </AppContext.Provider>
);};

// Custom hook to use the AppContext
export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};