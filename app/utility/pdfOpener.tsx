import * as FileSystem from 'expo-file-system';
import * as IntentLauncher from 'expo-intent-launcher';
import { Platform } from 'react-native';
import * as Sharing from 'expo-sharing';
import * as WebBrowser from 'expo-web-browser';


export const downloadPDF = async (fileUri: string,setPdfBase64:(pdfBase64:string|undefined)=>void) => {
    try {
        // Start the download process
        const { uri: downloadedUri } = await FileSystem.downloadAsync(fileUri, fileUri);

        // If download was successful, read the file as base64
        const pdfBase64 = await FileSystem.readAsStringAsync(downloadedUri, {
            encoding: FileSystem.EncodingType.Base64,
        });

        // Prepares the base64 string for embedding or use with a PDF viewer
        setPdfBase64(`data:application/pdf;base64,${pdfBase64}`);
        console.log("pdfBase64:", pdfBase64);
    } catch (e) {
        console.error('Error downloading or loading PDF:', e);
    }
}



export const openPDF = async (fileUri: string) => {
    if (Platform.OS === 'ios') {
        const uri = await FileSystem.getContentUriAsync(fileUri);
        Sharing.shareAsync(uri);
    } else if (Platform.OS === 'android') {
        console.log("fileUri:"+fileUri)
        // For Android, we need to get the URI for the saved file and open it with an intent
        const uri = await FileSystem.getContentUriAsync(fileUri);
        IntentLauncher.startActivityAsync('android.intent.action.VIEW', {
            data: uri,
            flags: 1, // FLAG_ACTIVITY_NEW_TASK, you may need to adjust flags for your case
            type: 'application/pdf',
        });
    }
};