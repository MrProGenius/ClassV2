import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScolorComponent } from './scolor.component';

describe('ScolorComponent', () => {
  let component: ScolorComponent;
  let fixture: ComponentFixture<ScolorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScolorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
