import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarParceiroComponent } from './editar-parceiro.component';

describe('EditarParceiroComponent', () => {
  let component: EditarParceiroComponent;
  let fixture: ComponentFixture<EditarParceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarParceiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarParceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
