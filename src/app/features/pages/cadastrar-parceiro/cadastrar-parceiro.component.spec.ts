import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarParceiroComponent } from './cadastrar-parceiro.component';

describe('CadastrarParceiroComponent', () => {
  let component: CadastrarParceiroComponent;
  let fixture: ComponentFixture<CadastrarParceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarParceiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarParceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
