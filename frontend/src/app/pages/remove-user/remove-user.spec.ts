import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveUser } from './remove-user';

describe('RemoveUser', () => {
  let component: RemoveUser;
  let fixture: ComponentFixture<RemoveUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
