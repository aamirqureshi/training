import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LargestSquareComponent } from './components/largest-square/largest-square.component';
import { ReactiveFormsModule } from '@angular/forms'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LargestSquareComponent
      ],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
