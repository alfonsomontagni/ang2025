import { Component } from '@angular/core';
//import { TypographyComponent } from './components/typography/typography.component';
import { CartComponent } from './carrello/cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    //TypographyComponent,
    CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dinam002';
}
