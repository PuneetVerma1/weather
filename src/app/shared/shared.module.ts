import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDIkrUMi72l5Gj3BFItCEMA3xnp0K6zlik'
    }),
  ],
  exports: [
    FormsModule,
    AgmCoreModule
  ],
  declarations: []
})
export class SharedModule { }
