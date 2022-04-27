import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookShopComponent } from './add-book-shop.component';

describe('AddBookShopComponent', () => {
  let component: AddBookShopComponent;
  let fixture: ComponentFixture<AddBookShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBookShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
