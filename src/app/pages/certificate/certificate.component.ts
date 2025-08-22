import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import html2canvas from 'html2canvas';
import { SecondaryButtonComponent } from "../../_components/secondary-button/secondary-button.component";
import { CertificateService } from '../../_services/certificate.service';
import { Certificate } from '../../interfaces/certificate';

@Component({
  selector: 'app-certificate',
  imports: [SecondaryButtonComponent, RouterLink],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.css'
})
export class CertificateComponent implements OnInit {
  id: string | null = null
  certificado: Certificate | undefined

  @ViewChild('certificateContainer') certificateElement!: ElementRef

  constructor(private certificateService: CertificateService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
      this.certificado = this.certificateService.certificados.find(item => item.id === this.id)
    })
  }

  download() {
    if (this.certificado === undefined) return

    html2canvas(this.certificateElement.nativeElement, { scale: 2 }).then(
      canvas => {
        const link = document.createElement('a')
        link.href = canvas.toDataURL('image/png')
        link.download = 'certificate.png_' + this.certificado?.nome.replaceAll(' ', '_') + '.png'
        link.click()
      }
    )
  }
}
