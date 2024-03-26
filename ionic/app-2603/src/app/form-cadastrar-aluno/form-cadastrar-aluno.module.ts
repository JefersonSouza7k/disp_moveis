import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormCadastrarAlunoPageRoutingModule } from './form-cadastrar-aluno-routing.module';

import { FormCadastrarAlunoPage } from './form-cadastrar-aluno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormCadastrarAlunoPageRoutingModule
  ],
  declarations: [FormCadastrarAlunoPage]
})
export class FormCadastrarAlunoPageModule {}
