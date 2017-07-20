import {Directive, ElementRef, EventEmitter, Input,Output, OnInit} from '@angular/core';
import {NgModel} from '@angular/common';

declare var grecaptcha: any;

@Directive({
  selector: '[googlerecaptcha]',
  providers: [NgModel],
  host: {
    '(input)' : 'onInputChange()'
  }
})
export class GoogleRecaptchaDirective implements OnInit {
  @Input('theme') theme:string = '';
  @Input('siteKey') siteKey:string;
  @Output('setVerified')  setVerified: EventEmitter<any> = new EventEmitter();
  modelValue:any;
  private _el:HTMLElement;
  


  constructor(el: ElementRef,private model:NgModel) {
    this._el = el.nativeElement;
    this.modelValue = this.model;
    var input = this._el;
    
  }
  
  ngOnInit() {
      setTimeout(() =>{
           grecaptcha.render(this._el, {
          'sitekey' : this.siteKey,
          'callback' : (data) => {
              if(data) {
              this.setVerified.emit(true);
              }
          },
          'theme' : this.theme
        });
      },1000)
      
  };


  onInputChange() {
  }
}