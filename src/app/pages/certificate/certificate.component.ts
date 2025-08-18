import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SecondaryButtonComponent } from "../../_components/secondary-button/secondary-button.component";
import { CertificateService } from '../../_services/certificate.service';

@Component({
  selector: 'app-certificate',
  imports: [SecondaryButtonComponent, RouterLink],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.css'
})
export class CertificateComponent implements OnInit {
  constructor(private certificateService: CertificateService) { }

  ngOnInit(): void {
    console.log(this.certificateService.certificados)
  }
}
