export interface IRegisterUser {
    nif:string;
    nick: string;
    email: string;
    password: string;
    confirmPassword: string;
    status: number;
    verifiedAt:Date;
    avatar: string;
    rol: number;
}

// Path: register.ts
