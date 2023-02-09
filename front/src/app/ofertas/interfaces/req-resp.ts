export interface OfertasResponse {
    id?:          number;
    titulo:      string;
    descripcion: string;
    lugar:       string;
    presencial:  string;
    jornada:     string;
}

export interface EmpresaResponse {
    id?:        number;
    nombre:     string;
    direccion:  string;
    contacto:   string;
    cargo:      string;
    telefono:   string;
}
