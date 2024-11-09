// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LucideCustomModule } from './lucide-custom.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LucideCustomModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angularpagedev';
}
