import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormCadastrarAlunoPage } from './form-cadastrar-aluno.page';

const routes: Routes = [
  {
    path: '',
    component: FormCadastrarAlunoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormCadastrarAlunoPageRoutingModule {}
