import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBookShopComponent } from './update-book-shop.component';

describe('UpdateBookShopComponent', () => {
  let component: UpdateBookShopComponent;
  let fixture: ComponentFixture<UpdateBookShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBookShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBookShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
