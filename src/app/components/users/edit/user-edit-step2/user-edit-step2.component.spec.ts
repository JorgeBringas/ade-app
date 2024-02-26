import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditStep2Component } from './user-edit-step2.component';

describe('UserEditStep2Component', () => {
  let component: UserEditStep2Component;
  let fixture: ComponentFixture<UserEditStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserEditStep2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserEditStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
