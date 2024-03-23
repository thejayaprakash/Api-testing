import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIConnectionComponent } from './api-connection.component';

describe('APIConnectionComponent', () => {
  let component: APIConnectionComponent;
  let fixture: ComponentFixture<APIConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APIConnectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APIConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
