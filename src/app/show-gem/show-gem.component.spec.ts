import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGemComponent } from './show-gem.component';

describe('ShowGemComponent', () => {
  let component: ShowGemComponent;
  let fixture: ComponentFixture<ShowGemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowGemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
