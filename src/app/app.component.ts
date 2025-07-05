import { Component } from '@angular/core';
import { BaseUiComponent } from "./_components/base-ui/base-ui.component";
import { CertifiedItemComponent } from "./_components/certified-item/certified-item.component";
import { NavbarComponent } from "./_components/navbar/navbar.component";
import { PrimaryButtonComponent } from "./_components/primary-button/primary-button.component";
import { SecondaryButtonComponent } from "./_components/secondary-button/secondary-button.component";
import { CertificatesFormComponent } from "./pages/certificates-form/certificates-form.component";
import { CertificatesComponent } from "./pages/certificates/certificates.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, PrimaryButtonComponent, SecondaryButtonComponent, CertifiedItemComponent, BaseUiComponent, CertificatesComponent, CertificatesFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'certificate-generator-model';
}
