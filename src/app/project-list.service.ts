import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectListService {

  constructor() { }

  projectList = [
    {
      image: 'assets/img/background/lappy-join.png',
      name: 'Join',
      writtenWith: 'HTML | CSS | Java Script',
      descriptionEN: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      descriptionDE: 'Vom Kanban-System inspirierter Aufgabenmanager. Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      liveLink: 'https://join.rieder-sebastian.de/',
      githubLink: 'https://github.com/SebastianClausRieder/Join'
    },
    {
      image: 'assets/img/background/lappy-wizard-saga.png',
      name: 'Wizard Saga',
      writtenWith: 'HTML | CSS | Java Script',
      descriptionEN: 'A simple jump-and-run game based on an object-oriented approach. Find and defeat Medusa to get the star.',
      descriptionDE: 'Ein einfaches Jump-and-Run Spiel, das auf einem objektorientierten Ansatz basiert. Finde und bezwinge Medusa um den stern zu erhalten.',
      liveLink: 'https://wizard-saga.rieder-sebastian.de/',
      githubLink: 'https://github.com/SebastianClausRieder/Wizard-Saga'
    },
    {
      image: 'assets/img/background/lappy-portfolio.png',
      name: 'Portfolio',
      writtenWith: 'Angular | Type Script | HTML | CSS',
      descriptionEN: 'An insight into a narrow selection of my projects.',
      descriptionDE: 'Der Einblick in eine enge Auswahl meiner Projekte.',
      liveLink: 'https://rieder-sebastian.de/',
      githubLink: 'https://github.com/SebastianClausRieder/Portfolio'
    }
  ]
}
