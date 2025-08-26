import { Material } from "./Material";
export class Book extends Material {
  pages: number;
  genere?: string;

  constructor(
    id: string,
    title: string,
    author: string,
    pages: number,
    genere?: string
  ) {
    super(id, title, author);
    this.pages = pages;
    this.genere = genere;
  }
  mostrarInfo(): void {
    console.log(`ID: ${this.id}`);
    console.log(`Título: ${this.title}`);
    console.log(`Autor: ${this.author}`);
    console.log(`Páginas: ${this.pages}`);
    if (this.genere) {
      console.log(`Género: ${this.genere}`);
    }
    console.log(`Disponible: ${this.available ? "Sí" : "No"}`);
  }
}
