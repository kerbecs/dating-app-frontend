import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionsComponent } from './connexions.component';

describe('ConnexionsComponent', () => {
  let component: ConnexionsComponent;
  let fixture: ComponentFixture<ConnexionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnexionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConnexionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
