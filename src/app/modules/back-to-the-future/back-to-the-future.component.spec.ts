import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToTheFutureComponent } from './back-to-the-future.component';

describe('BackToTheFutureComponent', () => {
  let component: BackToTheFutureComponent;
  let fixture: ComponentFixture<BackToTheFutureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackToTheFutureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackToTheFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
