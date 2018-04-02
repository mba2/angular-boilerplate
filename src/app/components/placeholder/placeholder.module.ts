import { NgModule } from "@angular/core";
import { PlaceholderComponent } from "./placeholder.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    PlaceholderComponent
  ],
  imports : [
    CommonModule
  ],
  exports : [
    PlaceholderComponent
  ]
})

export class PlaceholderModule {

}