import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "imgNofound",
})
export class ImgNofoundPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    if (value === "") {
      return "./assets/img/image-not-found.png";
    }
    return value;
  }
}
