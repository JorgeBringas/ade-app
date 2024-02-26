import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditStep3Component } from './user-edit-step3.component';

describe('UserEditStep3Component', () => {
  let component: UserEditStep3Component;
  let fixture: ComponentFixture<UserEditStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserEditStep3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserEditStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
