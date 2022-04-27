import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBookShopComponent } from './delete-book-shop.component';

describe('DeleteBookShopComponent', () => {
  let component: DeleteBookShopComponent;
  let fixture: ComponentFixture<DeleteBookShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteBookShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBookShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
