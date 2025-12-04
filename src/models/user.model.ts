export interface User {
    id: string;
    name: string;
    email: string;
    image: string;
    roles?: string[];
    isActive?: boolean;
    phone?: number;
}