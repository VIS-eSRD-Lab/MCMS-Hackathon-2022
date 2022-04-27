import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfBookShopsComponent } from './list-of-book-shops.component';

describe('ListOfBookShopsComponent', () => {
  let component: ListOfBookShopsComponent;
  let fixture: ComponentFixture<ListOfBookShopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfBookShopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfBookShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
