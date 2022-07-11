import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BystatusComponent } from './bystatus.component';

describe('BystatusComponent', () => {
  let component: BystatusComponent;
  let fixture: ComponentFixture<BystatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BystatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BystatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
