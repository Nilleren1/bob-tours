import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RejserPage } from './rejser.page';

describe('RejserPage', () => {
  let component: RejserPage;
  let fixture: ComponentFixture<RejserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RejserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
