import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobantesFiscalesComponent } from './comprobantes-fiscales.component';

describe('ComprobantesFiscalesComponent', () => {
  let component: ComprobantesFiscalesComponent;
  let fixture: ComponentFixture<ComprobantesFiscalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprobantesFiscalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprobantesFiscalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
