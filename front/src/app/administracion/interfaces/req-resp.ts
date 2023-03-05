//Realizado por Khattari
export interface UserResponse {
    nif?:        number;
    nombre:      string;
    email:       string;
    password:    string;
    status:      number;
    rol:         number;
    telefono:    string;
}

export interface EmpresaResponse {
    direccion:   string;
    contacto:    string;
    cargo:       string;
}

export interface AlumnoResponse {
    apellido1:   string;
    apellido2:   string;
}

export interface UserEmpresaResponse {
    nif?:        number;
    nombre:      string;
    email:       string;
    password:    string;
    status:      number;
    rol:         number;
    telefono:    string;
    direccion:   string;
    contacto:    string;
    cargo:       string;
}

export interface UserAlumnoResponse {
    nif?:        number;
    nombre:      string;
    email:       string;
    password:    string;
    status:      number;
    rol:         number;
    telefono:    string;
    apellido1:   string;
    apellido2:   string;
}