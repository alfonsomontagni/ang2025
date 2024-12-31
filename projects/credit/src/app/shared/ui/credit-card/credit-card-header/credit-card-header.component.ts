import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'ngc-credit-card-header',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './credit-card-header.component.html',
  styleUrl: './credit-card-header.component.scss',
})
export class CreditCardHeaderComponent {
  type = input.required<string | undefined>();
}
