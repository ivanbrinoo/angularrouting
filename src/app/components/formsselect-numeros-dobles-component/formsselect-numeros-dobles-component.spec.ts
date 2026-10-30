import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsselectNumerosDoblesComponent } from './formsselect-numeros-dobles-component';

describe('FormsselectNumerosDoblesComponent', () => {
  let component: FormsselectNumerosDoblesComponent;
  let fixture: ComponentFixture<FormsselectNumerosDoblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsselectNumerosDoblesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormsselectNumerosDoblesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
