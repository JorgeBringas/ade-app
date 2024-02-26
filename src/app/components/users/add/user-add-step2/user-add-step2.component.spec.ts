import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddStep2Component } from './user-add-step2.component';

describe('UserAddStep2Component', () => {
  let component: UserAddStep2Component;
  let fixture: ComponentFixture<UserAddStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAddStep2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserAddStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
