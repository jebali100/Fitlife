import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCoachComponent } from './login-coach.component';

describe('LoginCoachComponent', () => {
  let component: LoginCoachComponent;
  let fixture: ComponentFixture<LoginCoachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginCoachComponent]
    });
    fixture = TestBed.createComponent(LoginCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
