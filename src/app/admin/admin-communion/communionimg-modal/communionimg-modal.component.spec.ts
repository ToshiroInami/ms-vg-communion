import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunionimgModalComponent } from './communionimg-modal.component';

describe('CommunionimgModalComponent', () => {
  let component: CommunionimgModalComponent;
  let fixture: ComponentFixture<CommunionimgModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunionimgModalComponent]
    });
    fixture = TestBed.createComponent(CommunionimgModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
