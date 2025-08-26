import { IBibliotecaItem } from "../interfaces/LibraryItem";

export abstract class Material implements IBibliotecaItem {
  readonly id: string;
  title: string;
  author: string;

  private _available: boolean = true;
  constructor(id: string, title: string, author: string) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
  get available(): boolean {
    return this._available;
  }
  set available(available: boolean) {
    this._available = available;
  }
  abstract mostrarInfo(): void;
}
