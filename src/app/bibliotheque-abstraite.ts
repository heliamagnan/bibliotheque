import { Livre } from './livre';
export abstract class BibliothequeAbstraite {
  abstract afficherDetailsLivre(livre: Livre): void;
}
