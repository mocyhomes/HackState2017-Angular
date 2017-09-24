import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesFeedComponent } from './resources-feed.component';

describe('ResourcesFeedComponent', () => {
  let component: ResourcesFeedComponent;
  let fixture: ComponentFixture<ResourcesFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
