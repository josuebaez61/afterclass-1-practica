import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.css']
})
export class StudentsPageComponent implements OnInit {

  loading = true;

  students: Student[] = [
    new Student(1, 'Lionel', 'Messi', new Date('1987-06-24'), true),
    new Student(2, 'Josué', 'Baez', new Date('1994-09-24'), false),
    new Student(3, 'Son', 'Goku', new Date('1994-09-24'), true),
  ]

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false
    }, 1500);
  }
}
