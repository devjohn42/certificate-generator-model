import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { PrimaryButtonComponent } from "../../_components/primary-button/primary-button.component";
import { SecondaryButtonComponent } from "../../_components/secondary-button/secondary-button.component";
import { Certificate } from '../../interfaces/certificate';

@Component({
  selector: 'app-certificates-form',
  imports: [SecondaryButtonComponent, PrimaryButtonComponent, FormsModule, CommonModule],
  templateUrl: './certificates-form.component.html',
  styleUrl: './certificates-form.component.css'
})
export class CertificatesFormComponent {
  certificado: Certificate = {
    atividades: [],
    nome: ''
  }
  atividade: string = ''

  campoInvalido(control: NgModel) {
    return control.invalid && control.touched
  }

  formValido() {
    return this.certificado.atividades.length > 0 && this.certificado.nome.length > 0
  }

  adicionar() {
    this.certificado.atividades.push(this.atividade)
    this.atividade = ""
  }

  excluir(index: number) {
    this.certificado.atividades.splice(index, 1)
  }

  submit() {
    if (!this.formValido()) return

    console.log(this.certificado)
  }
}
