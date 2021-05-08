import { usuarioIngresado } from './booleanos';


describe('Pruebas de booleanos', () => {

  it('Usuario correcto', () => {
    const resp = usuarioIngresado();

    expect(resp).toBeTruthy();
  });

  it('Usuario incrorrecto', () => {
    const resp = usuarioIngresado();

    expect(resp).toBeTruthy();
  });


});
