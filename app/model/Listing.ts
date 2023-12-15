export interface Listing {
    id:           number;
    title:        string;
    images:       Image[];
    price:        number;
    categoryId:   number;
    userId:       number;
    location:     Location;
    description?: string;
}

export interface Image {
    url:          string;
    thumbnailUrl: string;
}

export interface Location {
    latitude:  number;
    longitude: number;
}