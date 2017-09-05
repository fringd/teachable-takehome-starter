import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFavoritesComponent } from './list-favorites.component';

describe('ListFavoritesComponent', () => {
  let component: ListFavoritesComponent;
  let fixture: ComponentFixture<ListFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
