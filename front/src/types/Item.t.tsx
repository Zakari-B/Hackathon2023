export type Item = {
    id: number;
    name: string;
    image: string;
    duration: number;
    quantity?: number;
}

export type SuitcaseItem = Item & {
    checked: boolean;
}