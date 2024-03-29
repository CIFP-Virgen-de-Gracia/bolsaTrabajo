export interface OfertasResponse {
    id?:         number;
    titulo:      string;
    descripcion: string;
    lugar:       string;
    presencial:  number;
    jornada:     string;
    nif_empresa: string;
}

export interface EmpresaResponse {
    nif?:       number;
    nombre:     string;
    direccion:  string;
    contacto:   string;
    cargo:      string;
    telefono:   string;
}
