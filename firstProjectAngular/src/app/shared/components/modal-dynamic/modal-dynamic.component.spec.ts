import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDynamicComponent } from './modal-dynamic.component';

describe('ModalDynamicComponent', () => {
  let component: ModalDynamicComponent;
  let fixture: ComponentFixture<ModalDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDynamicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
