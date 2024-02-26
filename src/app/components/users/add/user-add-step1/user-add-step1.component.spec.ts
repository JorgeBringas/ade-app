import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddStep1Component } from './user-add-step1.component';

describe('UserAddStep1Component', () => {
  let component: UserAddStep1Component;
  let fixture: ComponentFixture<UserAddStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAddStep1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserAddStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
