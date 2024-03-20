// app.component.ts
import { Component, OnInit } from '@angular/core';

// Importation des classes Bibliotheque et Livre depuis les fichiers correspondants.
import { Bibliotheque } from './bibliotheque';
import { Livre } from './livre';

// Déclaration du composant principal.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  // Création d'une instance de la classe Bibliotheque.
  bibliotheque: Bibliotheque = new Bibliotheque();
  nouveauLivre: Livre = new Livre('', '', new Date().getFullYear(), ''); // Initialise le nouveau livre

  ngOnInit() {
    // Ajout de quelques livres à la bibliothèque.
    const livre1 = new Livre('Le Seigneur des anneaux', 'JRR Tolkien', 1954, 'Fantasy');
    const livre2 = new Livre('Les Hauts de Hurlevent', 'Emily Brontë', 1954, 'Romance');
    const livre3 = new Livre('Orgueil et Préjugés', 'Jane Austen', 1813, 'Romance');
    const livre4 = new Livre('Le Rouge et le Noir', 'Stendhal', 1830, 'Romance');
    const livre5 = new Livre('Le Comte de Monte-Cristo', 'Alexandre Dumas', 1844, 'Romance');
    const livre6 = new Livre('Vingt mille lieues sous les mers', 'Jules Verne', 1869, 'Aventure');
    const livre7 = new Livre('Les Quatre filles du docteur March', 'Louisa May Alcott', 1868, 'Romance');
    const livre8 = new Livre('Jane Eyre', 'Charlotte Brontë', 1847,  'Romance');

    this.bibliotheque.ajouterLivre(livre1);
    this.bibliotheque.ajouterLivre(livre2);
    this.bibliotheque.ajouterLivre(livre3);
    this.bibliotheque.ajouterLivre(livre4);
    this.bibliotheque.ajouterLivre(livre5);
    this.bibliotheque.ajouterLivre(livre6);
    this.bibliotheque.ajouterLivre(livre7);
    this.bibliotheque.ajouterLivre(livre8);

    // Affichage de la liste des livres dans la bibliothèque.
    this.bibliotheque.afficherLivres();

    // Suppression d'un livre par son titre.
    const titreASupprimer = 'Le Rouge et le Noir';
    this.bibliotheque.supprimerLivre(titreASupprimer);

    //emprunter un livre
    const livreALire = 'Jane Eyre';
    this.bibliotheque.emprunterLivre(livreALire);

    // Affichage de la liste des livres mise à jour.
    this.bibliotheque.afficherLivres();

    //rendre un livre
    this.bibliotheque.retournerLivre(livreALire);

    // Affichage de la liste des livres mise à jour.
    this.bibliotheque.afficherLivres();

    //afficher détail d'un livre (classe abstraite bibliothèque)
    this.bibliotheque.afficherDetailsLivre(livre1);
  }

  ajouterLivreFormulaire() {
    // Ajouter un nouveau livre avec les valeurs saisies.
    if (this.nouveauLivre.titre.trim() !== '' && this.nouveauLivre.auteur.trim() !== '') {
      this.bibliotheque.ajouterLivre(this.nouveauLivre);
      this.nouveauLivre = new Livre('', '', new Date().getFullYear(), ''); // Réinitialiser le nouveau livre
    }
  }

  supprimerLivreFormulaire(livre: Livre) {
    // Supprimer le livre sélectionné.
    this.bibliotheque.supprimerLivre(livre.titre);
  }

  // Méthode pour afficher les détails d'un livre
  afficherDetailsLivreFormulaire(livre: Livre): void {
    this.bibliotheque.afficherDetailsLivre(livre);
  }


}
