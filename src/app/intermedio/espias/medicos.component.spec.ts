import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, Observable, throwError } from 'rxjs';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const medicoService = new MedicosService(null);

    beforeEach( () => {
      componente = new MedicosComponent(medicoService);
    });


    it('OnInit: Debe cargar los medicos', () => {
      const medicos = ['Medico1', 'Medico2', 'Medico3'];
      spyOn(medicoService, 'getMedicos')
        .and.callFake(() => from([medicos])
      );

      componente.ngOnInit();
      expect(componente.medicos.length).toBeGreaterThan(0);
    });

    it('Debe de llamar al servidor para agregar un medico', () => {
      const espia = spyOn(medicoService, 'agregarMedico').and.callFake(
        () => new Observable()
      );

      componente.agregarMedico();
      expect(espia).toHaveBeenCalled();
    });

    it('Debe de agregar un nuevo medico al arreglo de medicos', () => {
      const medico = {
        id: 1,
        nombre: 'Miguel'
      };
      spyOn(medicoService, 'agregarMedico')
        .and.returnValue(from([medico]));

      componente.agregarMedico();
      expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    });

    it('Si falla la funcion, mensajeError: Igual al error del servicio', () => {
      const error = 'No se pudo agregar el medico';
      spyOn(medicoService, 'agregarMedico')
        .and.returnValue(throwError(error));

      componente.agregarMedico();
      expect(componente.mensajeError).toBe(error);
    });

    it('Llamar el servicio para borrar un medico', () => {
      // Aceptar mendajes en pantalla
      spyOn(window, 'confirm').and.returnValue(true);

      const spy = spyOn(medicoService, 'borrarMedico')
        .and.returnValue(new Observable());

      componente.borrarMedico('1');
      expect(spy).toHaveBeenCalledWith('1');
    });

    it('NO llamar el servicio para borrar un medico', () => {
      // Aceptar mendajes en pantalla
      spyOn(window, 'confirm').and.returnValue(false);

      const spy = spyOn(medicoService, 'borrarMedico')
        .and.returnValue(new Observable());

      componente.borrarMedico('1');
      expect(spy).not.toHaveBeenCalledWith('1');
    });

});
