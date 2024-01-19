export function verificarAprobacion(nota) {
  return nota >= 60;
}

export function evaluarEstudiantes(notas) {
  return notas.map((nota, index) => ({
    estudiante: index + 1,
    nota: nota,
    aprobado: verificarAprobacion(nota) ? 'Test passed 🙂!' : 'Test failed. Keep coding 😫!'

  }));
}
