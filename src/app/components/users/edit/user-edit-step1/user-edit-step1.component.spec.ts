import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditStep1Component } from './user-edit-step1.component';

describe('UserEditStep1Component', () => {
  let component: UserEditStep1Component;
  let fixture: ComponentFixture<UserEditStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserEditStep1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserEditStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
