//Realizado por Khattari
export interface OfertasResponse {
    id?:          number;
    titulo:      string;
    descripcion: string;
    lugar:       string;
    presencial:  string;
    jornada:     string;
    nif_empresa: string;
}

export interface EmpresaResponse {
    nif?:        number;
    nombre:     string;
    direccion:  string;
    contacto:   string;
    cargo:      string;
    telefono:   string;
}
