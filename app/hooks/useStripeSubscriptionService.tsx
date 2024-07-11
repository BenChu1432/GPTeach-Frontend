import localhost from "../config/localhost";
import { initPaymentSheet, presentPaymentSheet, useStripe } from "@stripe/stripe-react-native";
import { PresentOptions } from "@stripe/stripe-react-native/lib/typescript/src/types/PaymentSheet";
import { useState } from "react";
import { useAppSelector } from "../redux/app/hooks";

// Define the types for the response from your backend
type PaymentSheetParams = {
    customer: {
        id: string;
    };
    ephemeralKey: {
        secret: string;
    };
    clientSecret: string;
};

// Define the type for your fetchPaymentSheetParams function return value
type PaymentSheetParamsResponse = PaymentSheetParams | null;

interface CustomPresentOptions extends PresentOptions {
    clientSecret?: string;
}

export const useStripeSubscriptionService = (setLoading: (loading: boolean) => void) => {
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const [clientSecret, setClientSecret] = useState<string>("");
    const userEmail = useAppSelector((s) => s.authSlice.email);

    const openPaymentSheet = async () => {
        if (clientSecret) {
            const { error } = await presentPaymentSheet({
                clientSecret,
            } as CustomPresentOptions);

            if (error) {
                console.error(`Error code: ${error.code}`, error.message);
            } else {
                console.log("Success");
            }
        }
    };

    const fetchPaymentSheetParams = async (): Promise<PaymentSheetParamsResponse> => {
        console.log("userEmail:" + userEmail);
        try {
            // Here is the problem!
            const response = await fetch(`http://${localhost}:3000/stripe/payment-sheet`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: "customer@example.com", // Replace with actual customer email
                    // $119
                    priceId: "price_1OYVK4LbEuFcJe70qjAJCb0o",
                }),
            });
            console.log("response:" + response);

            if (response.ok) {
                const jsonResponse = await response.json();
                console.log(jsonResponse);
                return jsonResponse;
            } else {
                throw new Error("Network response was not ok.");
            }
        } catch (error) {
            console.error("Error fetching payment sheet params:", error);
            return null;
        }
    };

    const initializePaymentSheet = async () => {
        console.log("in");
        setLoading(true);
        const paymentSheetParams = await fetchPaymentSheetParams();

        if (paymentSheetParams) {
            const { customer, ephemeralKey, clientSecret } = paymentSheetParams;

            const { error } = await initPaymentSheet({
                allowsDelayedPaymentMethods: true,
                returnURL: "gpteach//stripe-redirect", // Set this to your app's URL scheme
                customerId: customer.id,
                customerEphemeralKeySecret: ephemeralKey.secret,
                paymentIntentClientSecret: clientSecret,
                merchantDisplayName: "GPTeach",
            });
            if (!error) {
                console.log("clientSecret:" + clientSecret);
                setClientSecret(clientSecret);
            }
        }
        setLoading(false);
    };

    return { initializePaymentSheet, openPaymentSheet };
};
