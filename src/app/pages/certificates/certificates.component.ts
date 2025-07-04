import { Component } from '@angular/core';
import { CertifiedItemComponent } from "../../_components/certified-item/certified-item.component";
import { SecondaryButtonComponent } from "../../_components/secondary-button/secondary-button.component";

@Component({
  selector: 'app-certificates',
  imports: [SecondaryButtonComponent, CertifiedItemComponent],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {

}
