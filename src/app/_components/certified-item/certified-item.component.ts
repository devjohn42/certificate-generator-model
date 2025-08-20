import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SecondaryButtonComponent } from "../secondary-button/secondary-button.component";

@Component({
  selector: 'app-certified-item',
  imports: [SecondaryButtonComponent],
  templateUrl: './certified-item.component.html',
  styleUrl: './certified-item.component.css'
})
export class CertifiedItemComponent {
  @Input() nomeAluno: string = ''
  @Input() dataEmissao: string = ''
  @Input() id: string = ''

  constructor(private router: Router) { }

  redirect() {
    this.router.navigate(['/certificados', this.id])
  }
}
