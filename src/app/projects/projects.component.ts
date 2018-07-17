import { Component } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  cards = [
    { title: 'Angular Personal Portfolio', cols: 1, rows: 1},
    { title: 'Stock Data Retrieval', cols: 1, rows: 1, image: '../assets/installing.png' },
    { title: 'Static Personal Portfolio Site', cols: 2, rows: 1 },
    { title: 'Fundamentals of Engineering Advanced Energy Vehicle', cols: 1, rows: 2 },
    { title: 'Fundamentals of Engineering Software Design Project', cols: 1, rows: 2 }
  ];
}
