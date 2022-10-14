export class Turno {
  constructor( paciente, especialidad, medico, fecha, hora, nota) {
    this.id = Math.floor(Math.random() * 10000);
    this.paciente = paciente;
    this.especialidad = especialidad;
    this.medico = medico;
    this.fecha = fecha;
    this.hora = hora;
    this.nota = nota;
  }
}
