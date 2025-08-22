import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { PrimaryButtonComponent } from "../../_components/primary-button/primary-button.component";
import { SecondaryButtonComponent } from "../../_components/secondary-button/secondary-button.component";
import { CertificateService } from '../../_services/certificate.service';
import { Certificate } from '../../interfaces/certificate';

@Component({
  selector: 'app-certificates-form',
  imports: [SecondaryButtonComponent, PrimaryButtonComponent, FormsModule, CommonModule],
  templateUrl: './certificates-form.component.html',
  styleUrl: './certificates-form.component.css'
})
export class CertificatesFormComponent {
  constructor(private certificateService: CertificateService, private route: Router) { }
  @ViewChild('form') form!: NgForm

  certificado: Certificate = {
    id: '',
    atividades: [],
    nome: '',
    dataEmissao: ''
  }
  atividade: string = ''

  campoInvalido(control: NgModel) {
    return control.invalid && control.touched
  }

  formValido() {
    return this.certificado.atividades.length > 0 && this.certificado.nome.length > 0
  }

  adicionar() {
    if (this.atividade.length === 0) return // não adiciona atividade mesmo com o botão desativado

    this.certificado.atividades.push(this.atividade)
    this.atividade = ""
  }

  excluir(index: number) {
    this.certificado.atividades.splice(index, 1)
  }

  submit() {
    if (!this.formValido()) return

    this.certificado.dataEmissao = this.dataAtual()
    this.certificado.id = uuidv4()
    this.certificateService.adicionarCertificado(this.certificado)

    this.route.navigate(['certificados', this.certificado.id])

    this.certificado = {
      id: '',
      atividades: [],
      nome: '',
      dataEmissao: ''
    }

    this.form.resetForm()
  }

  dataAtual() {
    const dataAtual = new Date()
    const dia = String(dataAtual.getDate()).padStart(2, '0')
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0')
    const ano = dataAtual.getFullYear()

    const dataFormatada = `${dia}/${mes}/${ano}`
    return dataFormatada
  }
}

