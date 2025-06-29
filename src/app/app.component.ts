import { Component } from '@angular/core';
import { CertifiedItemComponent } from "./_components/certified-item/certified-item.component";
import { NavbarComponent } from "./_components/navbar/navbar.component";
import { PrimaryButtonComponent } from "./_components/primary-button/primary-button.component";
import { SecondaryButtonComponent } from "./_components/secondary-button/secondary-button.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, PrimaryButtonComponent, SecondaryButtonComponent, CertifiedItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'certificate-generator-model';
}
