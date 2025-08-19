import { Injectable } from '@angular/core';
import { Certificate } from '../interfaces/certificate';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  certificados: Certificate[] = []

  constructor() { }

  adicionarCertificado(certificado: Certificate) {
    this.certificados.push({ ...certificado })
    localStorage.setItem('certificados', JSON.stringify(this.certificados))
  }
}
