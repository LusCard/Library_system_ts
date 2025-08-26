import { Material } from "./Material";

export class Magazine extends Material {
  issue: string;

  constructor(id: string, title: string, author: string, issue: string) {
    super(id, title, author);
    this.issue = issue;
  }
  mostrarInfo(): void {
    console.log(`ID: ${this.id}`);
    console.log(`Título: ${this.title}`);
    console.log(`Autor: ${this.author}`);
    console.log(`Número de edición: ${this.issue}`);
    console.log(`Disponible: ${this.available ? "Sí" : "No"}`);
  }
}
