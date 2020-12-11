import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoversListComponent } from './recovers-list.component';

describe('RecoversListComponent', () => {
  let component: RecoversListComponent;
  let fixture: ComponentFixture<RecoversListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoversListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoversListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
