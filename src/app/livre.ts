// livre.ts
// Ce fichier définit la classe Livre qui représente un livre avec des propriétés spécifiques.

import { GenreLivre } from './genre-livre.interface';

// Déclaration de la classe Livre avec des propriétés titre, auteur et anneePublication.
export class Livre implements GenreLivre{
  //création des attributs
  titre!: string;
  auteur!: string;
  anneePublication!: number;
  emprunte: boolean = false;
  nomGenre!: string;

  constructor(titre:string, auteur:string, anneePublication:number, nomGenre:string) {
    this.titre = titre;
    this.auteur = auteur;
    this.anneePublication = anneePublication;
    this.nomGenre = nomGenre;
  }
}
