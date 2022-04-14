import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ImgNofoundPipe } from "./img-nofound.pipe";

const declarations = [ImgNofoundPipe];
@NgModule({
  declarations: [...declarations],
  imports: [CommonModule],
  exports: [...declarations],
})
export class PipesModule {}
