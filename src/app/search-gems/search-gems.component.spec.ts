import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGemsComponent } from './search-gems.component';

describe('SearchGemsComponent', () => {
  let component: SearchGemsComponent;
  let fixture: ComponentFixture<SearchGemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchGemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
