import { FormularioLogin } from './formulario';
import { FormBuilder } from '@angular/forms';


describe('Pruebas de Formularios', () => {

  let component: FormularioLogin;

  beforeEach(
    () => component = new FormularioLogin(new FormBuilder())
  );

  it('Validar que exista los campos email y passwords', () => {
  expect(component.form.contains('email')).toBeTruthy();
  expect(component.form.contains('password')).toBeTruthy();
  });

  it('Email debe ser obligatorio', () => {
    const controller = component.form.get('email');
    controller.setValue('');
    expect(controller.valid).toBeFalse();
  });

  it('Email debe ser valido', () => {
    const controller = component.form.get('email');
    controller.setValue('erangel@gmail.com');
    expect(controller.valid).toBeTruthy();
  });

});
