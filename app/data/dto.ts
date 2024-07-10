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
