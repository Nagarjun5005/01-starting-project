import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,  // ✅ This makes the component standalone
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
