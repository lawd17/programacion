import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePlanetaComponent } from './detalle-planeta.component';

describe('DetallePlanetaComponent', () => {
  let component: DetallePlanetaComponent;
  let fixture: ComponentFixture<DetallePlanetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePlanetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePlanetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
