import { NgModule } from '@angular/core';
import { LucideAngularModule, AlertCircle, Home,Github,Linkedin} from 'lucide-angular';

@NgModule({
  imports: [LucideAngularModule.pick({ AlertCircle, Home,Github ,Linkedin})],
  exports: [LucideAngularModule]
})
export class LucideCustomModule {}
