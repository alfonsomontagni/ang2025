import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import BasketComponent from './shared/basket/basket.component';
import { BasketAComponent } from './shared/basket-a/basket-a.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BasketComponent , BasketAComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jasm001';
}
