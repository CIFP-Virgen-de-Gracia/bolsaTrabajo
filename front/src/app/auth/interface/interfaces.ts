export interface User {
    nif:string;
    nick: string;
    email: string;
    password: string;
    // confirmPassword: string;
}

export interface AuthResponse{
nif?: string;
email?: string;
token?: string;
msg?: string;
nick?: string;
ok: boolean;
}

// Path: register.ts
