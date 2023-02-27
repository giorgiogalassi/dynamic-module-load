import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KnownUserComponent} from './known-user.component';

describe('KnownUserComponent', () => {
  let component: KnownUserComponent;
  let fixture: ComponentFixture<KnownUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KnownUserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KnownUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
