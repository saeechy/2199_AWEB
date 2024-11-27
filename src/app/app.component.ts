import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'prelim_lab_2';

  name: string = 'Jose Favian Pascual Reyes';
  birthday = 'April, 26, 2004';
  address = '53 BRGY Aguinaldo, Santa Rose, Nueva Ecija';
  education = 'Holy Angel University';
  nationality = 'Filipino';
  work = 'Business';
  training = 'None';
  skillList: string[] = [
    'Frontend',
    'Backend',
    'Fullstack',
    'Communication',
    'Analyzing',
  ];
}
