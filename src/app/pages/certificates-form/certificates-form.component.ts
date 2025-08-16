import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { PrimaryButtonComponent } from "../../_components/primary-button/primary-button.component";
import { SecondaryButtonComponent } from "../../_components/secondary-button/secondary-button.component";

@Component({
  selector: 'app-certificates-form',
  imports: [SecondaryButtonComponent, PrimaryButtonComponent, FormsModule, CommonModule],
  templateUrl: './certificates-form.component.html',
  styleUrl: './certificates-form.component.css'
})
export class CertificatesFormComponent {
  nome: string = ''
  atividade: string = ''
  atividades: string[] = []

  campoInvalido(control: NgModel) {
    return control.invalid && control.touched
  }

  formValido() {
    return this.atividades.length > 0 && this.nome.length > 0
  }

  adicionar() {
    this.atividades.push(this.atividade)
    this.atividade = ""
  }

  excluir(index: number) {
    this.atividades.splice(index, 1)
  }
}
