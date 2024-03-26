import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormCadastrarAlunoPage } from './form-cadastrar-aluno.page';

describe('FormCadastrarAlunoPage', () => {
  let component: FormCadastrarAlunoPage;
  let fixture: ComponentFixture<FormCadastrarAlunoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormCadastrarAlunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
