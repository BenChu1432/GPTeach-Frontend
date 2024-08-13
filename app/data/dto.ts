export interface Category {
    label: string;
    value: number;
    image: string;
    backgroundColor: string;
}

export type Content = {
    topic: string;
    example: string;
};

export type CategoryContent = {
    name: string;
    content: Content[];
    list: string[];
};

export type LoginResponse = {
    accessToken: string;
    refreshToken: string;
    user: TokenPayload;
};

export type TokenPayload = {
    uuid?: string;
    is_blocked: boolean;
    email: string;
    created_at: number;
};

export type ToastType = "success" | "info" | "error" | "warning";

export type SubscriptionOption = "PREMIUM" | "FREEMIUM" | "STANDARD";
