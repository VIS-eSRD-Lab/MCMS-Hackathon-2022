import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMultipleBooksComponent } from './add-multiple-books.component';

describe('AddMultipleBooksComponent', () => {
  let component: AddMultipleBooksComponent;
  let fixture: ComponentFixture<AddMultipleBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMultipleBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMultipleBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
