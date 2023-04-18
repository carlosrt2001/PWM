import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css']
})
export class AyudaComponent {

  constructor(private elementRef:ElementRef) {}

  scroll(id: String) {
    const element = this.elementRef.nativeElement.querySelector('#${id}');
    element.scrollIntoView({behavior: 'smooth'});
}

}
