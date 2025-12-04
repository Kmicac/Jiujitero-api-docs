export interface Athlete {
    id: string;
    name: string;
    lastName: string;
    nickname?: string;
    team: string;
    email: string;
    age?: number;
    weight?: number;
    height?: number;
    belt?: string;
    category?: string;
    nationality?: string;
    image?: string;
    achievements?: string[];
}