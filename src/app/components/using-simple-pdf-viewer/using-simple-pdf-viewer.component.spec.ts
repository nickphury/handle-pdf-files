import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingSimplePdfViewerComponent } from './using-simple-pdf-viewer.component';

describe('UsingSimplePdfViewerComponent', () => {
  let component: UsingSimplePdfViewerComponent;
  let fixture: ComponentFixture<UsingSimplePdfViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingSimplePdfViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingSimplePdfViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
