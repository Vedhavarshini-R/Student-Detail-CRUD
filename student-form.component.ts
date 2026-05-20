import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  studentForm!: FormGroup;

  students: any[] = [];

  editIndex: number | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      department: [''],
      phone: ['']
    });

    this.loadStudents();
  }

  onSubmit() {

    if (this.studentForm.invalid) {
      return;
    }

    if (this.editIndex === null) {

      this.students.push(this.studentForm.value);

    } else {

      this.students[this.editIndex] = this.studentForm.value;
      this.editIndex = null;
    }

    localStorage.setItem('students', JSON.stringify(this.students));

    this.studentForm.reset();
  }

  loadStudents() {

    const data = localStorage.getItem('students');

    if (data) {
      this.students = JSON.parse(data);
    }
  }

  editStudent(index: number) {

    this.editIndex = index;

    this.studentForm.patchValue(this.students[index]);
  }

  deleteStudent(index: number) {

    this.students.splice(index, 1);

    localStorage.setItem('students', JSON.stringify(this.students));
  }
}