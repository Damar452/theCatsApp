import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewModelCatPage } from './view-model-cat.page';

describe('ViewModelCatPage', () => {
  let component: ViewModelCatPage;
  let fixture: ComponentFixture<ViewModelCatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewModelCatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
