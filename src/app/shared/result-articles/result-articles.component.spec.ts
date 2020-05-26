import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultArticlesComponent } from './result-articles.component';

describe('ResultArticlesComponent', () => {
  let component: ResultArticlesComponent;
  let fixture: ComponentFixture<ResultArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
