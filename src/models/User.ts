import { IUser } from "../interfaces/IUser";
import { Material } from "./Material";

export class User implements IUser {
  readonly id: string;
  name: string;

  private lendedMaterials: Material[] = [];

  lastLend!: Date;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
  lend(material: Material): void {
    if (!material.available) {
      console.log();
      return;
    }
    material.available = false;
    this.lendedMaterials.push(material);
    this.lastLend = new Date();
    console.log(`Material: ${material.title} prestado a ${this.name}`);
  }
  showLended(): void {
    console.log("Materiales prestados", this.name);
    if (this.lendedMaterials.length == 0) {
      console.log("No hay materiales prestados.");
      return;
    }
    this.lendedMaterials.forEach((material, index) => {
      console.log(
        `  ${index + 1}. ${material.title} (${material.constructor.name})`
      );
    });
  }
  lastLended(): void {
    if (!this.lastLend) {
      console.log("No se ha prestado ningún material.");
      return;
    }
    console.log(
      `Último material prestado por ${this.name}: ${
        this.lendedMaterials[this.lendedMaterials.length - 1].title
      } el ${this.lastLend}`
    );

    if (this.lendedMaterials.length > 0) {
      const lastMaterial =
        this.lendedMaterials[this.lendedMaterials.length - 1];
      console.log(
        `Último material prestado: ${lastMaterial.title} el ${this.lastLend}`
      );
    }
  }
}
