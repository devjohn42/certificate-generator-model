import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SecondaryButtonComponent } from "../secondary-button/secondary-button.component";

@Component({
  selector: 'app-certified-item',
  imports: [SecondaryButtonComponent],
  templateUrl: './certified-item.component.html',
  styleUrl: './certified-item.component.css'
})
export class CertifiedItemComponent {
  constructor(private router: Router) { }

  id: string = '6'

  redirect() {
    this.router.navigate(['/certificados', 2]) // /certificados/2
  }
}
