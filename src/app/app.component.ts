// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LucideCustomModule } from './lucide-custom.module';
import {HeroModule} from './HeroModule/hero.component';
import {LanguagesModule} from './LanguagesModule/languages.component';
import { AboutModule } from "./AboutModule/aboutme.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LucideCustomModule,
    LanguagesModule,
    HeroModule,
    AboutModule
],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angularpagedev';
}
