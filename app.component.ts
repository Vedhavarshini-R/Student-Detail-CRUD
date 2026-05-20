import { Component } from '@angular/core';
import { StudentFormComponent } from './student-form/student-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}