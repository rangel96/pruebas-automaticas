import { obtenerRobots } from './arreglos';


xdescribe('Pruebas de arreglos', () => {

  it('Debe de existir R2D2', () => {
    const result = obtenerRobots();

    expect(result).toContain('R2D2');
  });

  it('Debe retornar almenos 3 Robots', () => {
    const result = obtenerRobots();

    expect(result.length).toBeGreaterThanOrEqual(3);
  });

  it('Debe de existir MegaMan y Ultron', () => {
    const result = obtenerRobots();

    expect(result).toContain('MegaMan');
    expect(result).toContain('Ultron');
  });

});
