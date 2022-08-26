export type DeckType = {
    success: boolean,
    deck_id: string,
    remaining: number,
    shuffled: boolean
} 

export type CardType = {
    code: string,
    image: string,
    images: any,
    showing: boolean,
    suit: string,
    values: string
} 