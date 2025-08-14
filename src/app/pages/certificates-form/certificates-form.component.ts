import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrimaryButtonComponent } from "../../_components/primary-button/primary-button.component";
import { SecondaryButtonComponent } from "../../_components/secondary-button/secondary-button.component";

@Component({
  selector: 'app-certificates-form',
  imports: [SecondaryButtonComponent, PrimaryButtonComponent, FormsModule],
  templateUrl: './certificates-form.component.html',
  styleUrl: './certificates-form.component.css'
})
export class CertificatesFormComponent {
  nome: string = ''
  atividade: string = ''
  atividades: string[] = ['Angular', 'React']
}
