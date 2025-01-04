import { Component } from '@angular/core';
import { TypographyComponent } from './components/typography/typography.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TypographyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dinam002';
}
