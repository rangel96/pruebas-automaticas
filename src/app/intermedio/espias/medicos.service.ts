import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class MedicosService {

  constructor( public http: HttpClient ) { }

  getMedicos(): any {
    return this.http.get('...')
      .pipe(
        map( resp => resp['medicos'])
      );
  }

  agregarMedico( medico: any ): any {
    return this.http.post('...', medico )
      .pipe(
        map( resp => resp['medicos'])
    );
  }

  borrarMedico( id: string ): any {
    return this.http.delete('...' )
      .pipe(
        map( resp => resp['medicos'])
    );
  }


}
