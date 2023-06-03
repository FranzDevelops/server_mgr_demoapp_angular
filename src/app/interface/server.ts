import { Stauts } from "../enum/status.enum";

export interface Server {
    id: number;
    ipAddress: string;
    name: string;
    memory: string;
    type: string;
    imageURL: string;
    status: Stauts;
}