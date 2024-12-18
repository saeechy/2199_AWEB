import { Component, TemplateRef } from '@angular/core';
import { CommonModule, NgIfContext } from '@angular/common';

@Component({
  selector: 'app-directives-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives-demo.component.html',
  styleUrl: './directives-demo.component.css',
})
export class DirectivesDemoComponent {
  isHighlighted = true;
  isLoggedIn = true;
  condition = true;
  fruits = ['Apples', 'Bananas', 'Oranges'];
  color = 'red';
}
