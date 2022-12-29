import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmregistroComponent } from './admregistro.component';

describe('AdmregistroComponent', () => {
  let component: AdmregistroComponent;
  let fixture: ComponentFixture<AdmregistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmregistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
