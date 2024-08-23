import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEmpresaExternaComponent } from './cadastrar-empresa-externa.component';

describe('CadastrarEmpresaExternaComponent', () => {
  let component: CadastrarEmpresaExternaComponent;
  let fixture: ComponentFixture<CadastrarEmpresaExternaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarEmpresaExternaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarEmpresaExternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
