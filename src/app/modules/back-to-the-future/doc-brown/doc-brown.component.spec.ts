import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocBrownComponent } from './doc-brown.component';

describe('DocBrownComponent', () => {
  let component: DocBrownComponent;
  let fixture: ComponentFixture<DocBrownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocBrownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocBrownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
