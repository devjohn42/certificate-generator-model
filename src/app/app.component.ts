import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseUiComponent } from "./_components/base-ui/base-ui.component";
import { NavbarComponent } from "./_components/navbar/navbar.component";
import { CertificateService } from './_services/certificate.service';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, BaseUiComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'certificate-generator-model';
  exibeNavBar: boolean = true

  constructor(private certificateService: CertificateService) { }

  ngOnInit(): void {
    const certificados = localStorage.getItem('certificados')
    console.log(certificados)
    this.certificateService = certificados ? JSON.parse(certificados) : []
  }
}
