import { Routes } from '@angular/router';
import { CertificateComponent } from './pages/certificate/certificate.component';
import { CertificatesFormComponent } from './pages/certificates-form/certificates-form.component';
import { CertificatesComponent } from './pages/certificates/certificates.component';

export const routes: Routes = [
  {
    path: '',
    component: CertificatesComponent
  },
  {
    path: 'certificados/novo',
    component: CertificatesFormComponent
  },
  {
    path: 'certificados/:id',
    component: CertificateComponent
  }
];
