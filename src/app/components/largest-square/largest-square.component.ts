import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-largest-square',
  templateUrl: './largest-square.component.html',
  styleUrls: ['./largest-square.component.scss']
})
export class LargestSquareComponent implements OnInit {
  calculateSquareFrm!: FormGroup;
  @ViewChild('resultContainer', {static: true}) resultContainer!: ElementRef
  formConfig: Array<{ label: string, id: string, formControlName: string}> = [
    {
      label: 'Number 1:',
      id: 'numer1',
      formControlName: 'number1'
    },
    {
      label: 'Number 2:',
      id: 'numer2',
      formControlName: 'number2'
    },
    {
      label: 'Number 3:',
      id: 'numer3',
      formControlName: 'number3'
    }
  ]
  constructor(private formBuilder: FormBuilder, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.calculateSquareFrm = this.formBuilder.group({
      number1: ['', Validators.required],
      number2: ['', Validators.required],
      number3: ['', Validators.required]      
    });
  }

  caluateLargestSquare() {
    this.resultContainer.nativeElement.innerHTML = '';
    const numberArr = Object.values(this.calculateSquareFrm.value);
    const squareArr = numberArr.map(n => Math.pow((n as number), 2));
    const largestNumber = numberArr[squareArr.indexOf(Math.max(...squareArr))];
    const $p: HTMLElement = this.renderer.createElement('p');
    $p.innerHTML = `The number with the largest square is ${largestNumber}`;
    this.renderer.appendChild(this.resultContainer.nativeElement,$p);
    this.calculateSquareFrm.reset();
  }

}
