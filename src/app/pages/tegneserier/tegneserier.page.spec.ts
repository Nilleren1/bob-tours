import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TegneserierPage } from './tegneserier.page';

describe('TegneserierPage', () => {
  let component: TegneserierPage;
  let fixture: ComponentFixture<TegneserierPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TegneserierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
