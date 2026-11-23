import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitxaPelicula } from './fitxa-pelicula';

describe('FitxaPelicula', () => {
  let component: FitxaPelicula;
  let fixture: ComponentFixture<FitxaPelicula>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FitxaPelicula]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitxaPelicula);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
