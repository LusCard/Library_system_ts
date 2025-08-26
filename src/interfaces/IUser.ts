import { Material } from "../models/Material";

export interface IUser {
  readonly id: string;
  name: string;

  lend(material: Material): void;
}
