export type Content = {
    topic: string;
    example: string;
};

export type CategoryContent = {
    name: string;
    content: Content[];
    list: string[];
};