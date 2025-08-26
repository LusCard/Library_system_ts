export interface IBibliotecaItem {
  readonly id: string;
  title: string;
  author: string;
  mostrarInfo(): void;
}
