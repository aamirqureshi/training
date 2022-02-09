import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { LargestSquareComponent } from './largest-square.component';
import { ReactiveFormsModule } from '@angular/forms'
import { By } from '@angular/platform-browser';

describe('LargestSquareComponent', () => {
  let component: LargestSquareComponent;
  let fixture: ComponentFixture<LargestSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargestSquareComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LargestSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return number with maximum sqaure', fakeAsync(() => {
    component.calculateSquareFrm.setValue({
      number1: 1,
      number2: 2,
      number3: 5
    });
    const calucateBtn = fixture.debugElement.query(By.css('.calculate-btn'));
    calucateBtn.triggerEventHandler('click', null);
    tick();
    fixture.whenStable().then(() => {
      expect(component.resultContainer.nativeElement.querySelector('p').innerHTML).toBe('The number with the largest square is 5');
    })
  }));

  it('Should disable calculate button', () => {
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('.calculate-btn').disabled).toBe(true);
  });

  it('Should enable calculate button', () => {
    component.calculateSquareFrm.setValue({
      number1: 1,
      number2: 2,
      number3: 5
    });
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('.calculate-btn').disabled).toBe(false);
  });

});
