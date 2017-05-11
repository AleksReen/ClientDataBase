import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDataBaseComponent } from './app-table-data-base.component';

describe('TableDataBaseComponent', () => {
  let component: TableDataBaseComponent;
  let fixture: ComponentFixture<TableDataBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDataBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDataBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
