import axios from 'axios';
import {Platform} from "react-native";
import localhost from "../config/localhost";

import * as FileSystem from 'expo-file-system';
import { Buffer } from 'buffer';
import {downloadPDF, openPDF} from "../utility/pdfOpener";

export const createPDF = async (pdfContent: string, setError: (error: boolean) => void,topic:string,questionType:string) => {
    try {
        // Post content to the server and get the PDF binary data back
        const response = await axios.post(`http://${localhost}:3000/openai/create-pdf/${topic}/${questionType}`, { pdfContent }, { responseType: 'arraybuffer' });

        // Convert the binary data to a Base64 encoded string
        const base64 = Buffer.from(response.data, 'binary').toString('base64');

        // Define the local URI to save the file
        const fileUri = `${FileSystem.documentDirectory}myDocument.pdf`;

        console.log("fileUri:"+fileUri)

        // Write the Base64 content to the file
        await FileSystem.writeAsStringAsync(fileUri, base64, {
            encoding: FileSystem.EncodingType.Base64,
        });

        // downloadPDF(fileUri,setOpenPDFFileOnIos).catch(err => {
        //     console.error("Failed to open the PDF file", err);
        // });
        openPDF(fileUri).catch(err => {
            console.error("Failed to open the PDF file", err);
        });

        // Handle the success scenario (e.g., opening the file, alerting the user, etc.)
        console.log('PDF saved to:', fileUri);
        setError(false);
    } catch (error) {
        // Handle the error scenario
        console.error(error);
        setError(true);
    }
};


export const getTesting=(setOpenaiResponse:(openaiResponse:string)=>void)=>{
    axios.get(`http://${localhost}:3000/openai/testing`)
        .then((res)=>{
            console.log(res.data)
            setOpenaiResponse(res.data);
        }).catch((e)=>{
        console.log(e);
    })
}

export const postOpenai=(selected:string[],
                         category:string,
                         selectedTheme:string,
                         selectedLevelOfVocabulary:string,
                         questionType:string,
                         numOfQuestions:number,
                         numOfParagraphs:number,
                         setIsNotes:(IsNotes:boolean)=>void,
                         setOpenaiResponse:(openaiResponse:string)=>void,
                         setError:(error:boolean)=>void)=>{
    let subRoute=toCamelCase(category)
    if(subRoute==="allMixed(noCorrelatives)"){
        subRoute="allMixedNoCorrelatives"
    }
    axios.post(`http://${localhost}:3000/openai/${subRoute}/${selectedTheme}/${selectedLevelOfVocabulary}/${questionType}/${numOfQuestions}/${numOfParagraphs}`,{selected})
        .then((res)=>{
            setOpenaiResponse(res.data);
            setIsNotes(false);
            setError(false);
        }).catch((e)=>{
        console.log(e);
        setError(true);
    })
}

export const postOpenaiInstruction=(selected:string[],
                         category:string,
                         selectedTheme:string,
                         selectedLevelOfVocabulary:string,
                         questionType:string,
                         numOfQuestions:number,
                         numOfParagraphs:number,
                         previousContent:string|undefined,
                         setOpenaiResponse:(openaiResponse:string)=>void,
                         setError:(error:boolean)=>void)=>{
    axios.post(`http://${localhost}:3000/openai/instruction/${selectedTheme}/${selectedLevelOfVocabulary}/${questionType}/${numOfQuestions}/${numOfParagraphs}`,{selected, previousContent})
        .then((res)=>{
            console.log(res.data)
            setOpenaiResponse(res.data);
            setError(false);
        }).catch((e)=>{
        console.log(e);
        setError(true);
    })
}

export const postOpenaiNotes=(selected:string[],
                              category:string,
                              selectedTheme:string,
                              selectedLevelOfVocabulary:string,
                              questionType:string,
                              numOfQuestions:number,
                              numOfParagraphs:number,
                              language:string,
                              setOpenaiResponse:(openaiResponse:string)=>void,
                              setError:(error:boolean)=>void)=>{
    axios.post(`http://${localhost}:3000/openai/notes/${category}/${selectedTheme}/${selectedLevelOfVocabulary}/${questionType}/${numOfQuestions}/${numOfParagraphs}/${language}`,{selected})
        .then((res)=>{
            console.log(res.data)
            setOpenaiResponse(res.data);
            setError(false);
        }).catch((e)=>{
        console.log(e);
        setError(true);
    })
}

export const postOpenaiModelAnswers=(selected:string[],
                                    category:string,
                                    selectedTheme:string,
                                    selectedLevelOfVocabulary:string,
                                    questionType:string,
                                    numOfQuestions:number,
                                    numOfParagraphs:number,
                                    previousContent:string|undefined,
                                    setOpenaiResponse:(openaiResponse:string)=>void,
                                    setError:(error:boolean)=>void)=>{
    axios.post(`http://${localhost}:3000/openai/modelAnswers/${selectedTheme}/${selectedLevelOfVocabulary}/${questionType}/${numOfQuestions}/${numOfParagraphs}`,{selected, previousContent})
        .then((res)=>{
            console.log(res.data)
            setOpenaiResponse(res.data);
            setError(false);
        }).catch((e)=>{
        console.log(e);
        setError(true);
    })
}

function toCamelCase(str:string) {
    return str
        .trim()
        .split(/\s+/)
        .map((word, index) =>
            index === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.substr(1).toLowerCase()
        )
        .join('');
}



export default{
    getTesting,
}