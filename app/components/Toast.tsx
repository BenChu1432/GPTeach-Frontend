import { ToastProps } from "react-native-toast-notifications/lib/typescript/toast";
import { MaterialIcons } from "@expo/vector-icons"; // or any other icon library you're using
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/app/hooks";

const Toast = (toastOptions: ToastProps) => {
    const { message, type } = useAppSelector((s) => s.appSlice.toast);

    let backgroundColor: string;
    let icon: React.ReactNode;

    switch (type) {
        case "success":
            backgroundColor = "green";
            icon = <MaterialIcons name="check-circle" size={24} color="white" />;
            break;
        case "error":
            backgroundColor = "red";
            icon = <MaterialIcons name="error" size={24} color="white" />;
            break;
        case "warning":
            backgroundColor = "orange";
            icon = <MaterialIcons name="warning" size={24} color="white" />;
            break;
        default:
            backgroundColor = "gray";
            icon = <MaterialIcons name="info-outline" size={24} color="white" />;
            break;
    }

    return (
        <View style={{ backgroundColor, flexDirection: "row", alignItems: "center", padding: 10 }}>
            {icon}
            <Text style={{ color: "white", marginLeft: 10 }}>{message}</Text>
        </View>
    );
};

// The renderToast function
export const renderToast = (toast: ToastProps) => <Toast {...toast} />;
