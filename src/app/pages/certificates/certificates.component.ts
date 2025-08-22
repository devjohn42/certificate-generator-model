import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CertifiedItemComponent } from "../../_components/certified-item/certified-item.component";
import { SecondaryButtonComponent } from "../../_components/secondary-button/secondary-button.component";
import { CertificateService } from '../../_services/certificate.service';
import { Certificate } from '../../interfaces/certificate';

@Component({
  selector: 'app-certificates',
  imports: [SecondaryButtonComponent, RouterLink, CertifiedItemComponent],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent implements OnInit {
  certificados: Certificate[] = []

  constructor(private certificateService: CertificateService) { }

  ngOnInit(): void {
    this.certificados = this.certificateService.certificados
    console.log(this.certificados)
    console.log(this.certificados.length)
  }
}
