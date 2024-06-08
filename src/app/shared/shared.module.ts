import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPrimaryComponent } from './button-primary/button-primary.component';
import { CardComponent } from './card/card.component';
import { SharedService } from '../services/service.service';

@NgModule({
  declarations: [ButtonPrimaryComponent, CardComponent],
  imports: [CommonModule],
  exports: [ButtonPrimaryComponent, CardComponent],
  providers: [SharedService],
})
export class SharedModule {}
