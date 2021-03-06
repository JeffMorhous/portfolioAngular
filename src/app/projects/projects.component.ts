import { Component } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  cards = [
    { title: 'Stock Data Retrieval', cols: 1, rows: 1, image: '../assets/installing.png', date: 'July 2018',
      description: 'Uses AlphaVantage web API to fetch real-time metadata about the stock market.  Expanding to create UI for searching symbols and visualizing prices.' },
    { title: 'Angular Personal Portfolio', cols: 1, rows: 1, image: '../assets/angularPortfolio.png', date: 'July 2018',
      description: '' },
    { title: 'Fundamentals of Engineering Advanced Energy Vehicle', cols: 1, rows: 1, image: '../assets/AEV.jpg',
     date: 'Spring 2018', description: '' },
    { title: 'Static Personal Portfolio Site', cols: 1, rows: 1, image: '../assets/staticPortfolio.png', 
      date: 'December 2017', description: '' },
    { title: 'Fundamentals of Engineering Software Design Project', cols: 1, rows: 1, image: '../assets/presentation.jpg',
     date: 'November 2017',description:'' }
  ];
}
