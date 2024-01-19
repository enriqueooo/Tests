import { runTests } from './bucles.js';

runTests();

import { verificarAprobacion, evaluarEstudiantes } from './array.js';

const notasEjemplo = [75, 45, 80, 55, 90];
const resultadosEjemplo = evaluarEstudiantes(notasEjemplo);

resultadosEjemplo.forEach(resultado => {
  alert(`Estudiante ${resultado.estudiante}: Nota ${resultado.nota}, ${resultado.aprobado}`);
});
