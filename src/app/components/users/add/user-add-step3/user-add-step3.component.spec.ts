import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddStep3Component } from './user-add-step3.component';

describe('UserAddStep3Component', () => {
  let component: UserAddStep3Component;
  let fixture: ComponentFixture<UserAddStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAddStep3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserAddStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
