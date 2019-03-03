import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwPostComponent } from './tw-post.component';

describe('TwPostComponent', () => {
  let component: TwPostComponent;
  let fixture: ComponentFixture<TwPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
