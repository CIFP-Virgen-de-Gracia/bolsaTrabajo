export interface Empresa {
  nif:       string;
  nombre:    string;
  direccion: string;
  contacto:  string;
  cargo:     string;
}

export interface UsuarioEmpresa {
  nif:string;
  nick:string;
  email:string;
  password:string;
  status:number;
  rol: number;
  //¿token?
  telefono: string;
}
