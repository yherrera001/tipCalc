import { Component } from '@angular/core'; 
import { ViewChild } from '@angular/core'; //importing so that I can refer back to it on the @
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild("price") priceChild: ElementRef; //Here I am manipulating html. I am grabbing the price element and 
  @ViewChild("tipPecentage") tipPecentageChild: ElementRef; //priceChild, tipPercentageChild, and peopleChild are simply variables i use in the
  //method and in the quotes it is grabbing from the html input element
  @ViewChild("people") peopleChild: ElementRef; //IN OTHER WORDS I am using ViewChild and Template Reference Variables
  @ViewChild("tax") taxChild: ElementRef;
  title = 'tipCalc';

  tipTotalPerPerson = 0;
  tipTotal = 0;
  taxTotal = 0;
  calculate(price: number, tipPecentage: number, people: number, tax: number){
    this.taxTotal = price * (tax / 100);
    this.tipTotalPerPerson = ((price * (tipPecentage / 100) + this.taxTotal) / people) //my function
    this.tipTotal = this.tipTotalPerPerson * people
    console.log(this.tipTotalPerPerson) 
  }
  onReset(){ //My method and I will be doing dependency injection
    this.priceChild.nativeElement.value = ''; //Here I can put whatever I want in the single quote to make it reset and then get a different placeholder
    this.tipPecentageChild.nativeElement.value = ''; //The native element means it is referring back to the htl and the .value means it is inserting the value that the elements in the html have
    this.peopleChild.nativeElement.value = '';
    this.taxChild.nativeElement.value = '';
    /* THIS IS DOM const priceElement = document.getElementById('price') as HTMLInputElement;
    priceElement.value = '9000000000';
  }*/
  }
}
