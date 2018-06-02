import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ServiceInquilinoService {

  constructor(private http: Http) {}

  listarPersonas() {
    return this.http.get('http://arquiobra.com.ar/web2018/api/personas.php?opcion=1');
  }

  listarPersonasID(id: number) {
    return this.http.get('http://arquiobra.com.ar/web2018/api/personas.php?opcion=2&id=' + id);
  }

  guardarPersona(item: Object) {
    return this.http.post('http://arquiobra.com.ar/web2018/api/personas.php?opcion=3', item);
  }

  eliminarPersona(id: number) {
    return this.http.get('http://arquiobra.com.ar/web2018/api/personas.php?opcion=5&id=' + id);
  }

  getListMenu() {
    return this.http.get('http://arquiobra.com.ar/web2018/api/aplicaciones.php?opcion=3');
  }

  getListSub1(menu: any) {
    return this.http.get('http://arquiobra.com.ar/web2018/api/aplicaciones.php?opcion=2&menu=' + menu);
  }

  getListAplic(sub: any) {
    return this.http.get('http://arquiobra.com.ar/web2018/api/aplicaciones.php?opcion=1&sub=' + sub);
  }
}


