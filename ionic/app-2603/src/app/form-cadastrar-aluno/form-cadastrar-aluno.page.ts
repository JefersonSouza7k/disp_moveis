import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-cadastrar-aluno',
  templateUrl: './form-cadastrar-aluno.page.html',
  styleUrls: ['./form-cadastrar-aluno.page.scss'],
})
export class FormCadastrarAlunoPage implements OnInit {

  cadastro = {
    nome: '',
    genero: '',
    telefone: '',
    matricula: '',
    aluno_bilingue: false,
    curso_tec: [] as string[]
  }

  constructor() { }

  ngOnInit() {
  }

  cadastrar(form: NgForm){
    if(form.valid){
      this.cadastro.curso_tec = [];
      const checkboxes = document.querySelectorAll<HTMLInputElement>('ion-checkbox');
      checkboxes.forEach((checkbox) => {
        if(checkbox.checked){
          this.cadastro.curso_tec.push(checkbox.value)
        }
      });
      console.log("Dados: ", this.cadastro)

      /*
      this.cadastro.nome = '';
      this.cadastro.genero = '';
      this.cadastro.telefone = '';
      this.cadastro.matricula = '';
      this.cadastro.aluno_bilingue = false;
      
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
      */
    } else {
      console.log("Formulário inválido!")
    }
  }

}
