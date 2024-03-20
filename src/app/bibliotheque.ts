// bibliotheque.ts
// Ce fichier définit la classe Bibliotheque qui représente une bibliothèque avec des méthodes pour manipuler les livres.

// Importation de la classe Livre depuis le fichier livre.ts.
import { Livre } from './livre';
import { BibliothequeAbstraite } from './bibliotheque-abstraite';

// Déclaration de la classe Bibliotheque.
export class Bibliotheque extends BibliothequeAbstraite{
  // Propriété privée livres, un tableau de livres.
  public livres: Livre[] = [];

  // Méthode pour ajouter un livre à la bibliothèque.
  ajouterLivre(livre: Livre): void {
    this.livres.push(livre);
  }

  // Méthode pour supprimer un livre en fonction de son titre.
  supprimerLivre(titre: string): void {
    this.livres = this.livres.filter(livre => livre.titre !== titre);
  }

  // Méthode pour afficher la liste des livres dans la bibliothèque.
  afficherLivres(): void {
    console.log('Liste des livres dans la bibliothèque:');
    this.livres.forEach(livre => {
      console.log(`- Titre: ${livre.titre}, Auteur: ${livre.auteur}, Année de publication: ${livre.anneePublication}, Statut: ${livre.emprunte}`);
    });
  }

  // Méthode pour emprunter un livre
  emprunterLivre(titre: string): void {
    const livreEmprunte = this.livres.find(livre => livre.titre === titre);

    if(livreEmprunte){
      //mettre à jour le statut d'emprunt
      livreEmprunte.emprunte = true;
    } else {
      console.log("Livre non trouvé.");
    }
  }

  // Méthode pour rendre un livre
  retournerLivre(titre: string): void {
    const livreRetourne = this.livres.find(livre => livre.titre === titre);

    if(livreRetourne){
      //mettre à jour le statut d'emprunt
      livreRetourne.emprunte = false;
    } else {
      console.log("Livre non trouvé.");
    }
  }

  //implémenter la méthode de notre classe abstraite
  afficherDetailsLivre(livre: Livre): void {
    console.log(`Détails du livre : ${livre.titre}`);
    console.log(`Auteur : ${livre.auteur}`);
    console.log(`Année de publication : ${livre.anneePublication}`);
    console.log(`Genre : ${livre.nomGenre}`);
    console.log(`Statut : ${livre.emprunte ? 'Emprunté' : 'Disponible'}`);
  }
}
