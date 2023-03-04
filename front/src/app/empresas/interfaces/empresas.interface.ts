export interface Empresa {
  nif:       string;
  nombre:    string;
  direccion: string;
  contacto:  string;
  cargo:     string;
}

export interface UsuarioEmpresa {
  nif:string;
  nombre:string;
  email:string;
  password:string;
  status:number;
  rol: number;
  //¿token?
  telefono: string;
}

export interface FormularioContacto {
  id: number;
  nif: string;
  nombre: string;
  email: string;
  telefono: string;
  observaciones: string;
}
