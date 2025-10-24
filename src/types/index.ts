export type Genre = 'rap' | 'hip-hop' | 'rock' | 'salsa';

export interface Vinyl {
    id: string;
    title: string;
    artist: string;
    genre: Genre;
    price: number;
    year: number;
    coverImage: string;
    description: string;
    stock: number;
}

export interface CartItem extends Vinyl {
    quantity: number;
}
