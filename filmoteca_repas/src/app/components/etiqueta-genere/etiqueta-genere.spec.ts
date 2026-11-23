import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtiquetaGenere } from './etiqueta-genere';

describe('EtiquetaGenere', () => {
  let component: EtiquetaGenere;
  let fixture: ComponentFixture<EtiquetaGenere>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtiquetaGenere]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtiquetaGenere);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
