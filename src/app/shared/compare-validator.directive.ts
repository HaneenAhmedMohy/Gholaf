import { Directive,Input } from '@angular/core';
import {Validator,NG_VALIDATORS, AbstractControl} from '@angular/forms';

@Directive({
  selector: '[appCompareValidator]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:CompareValidatorDirective,
    multi:true

  }]
})
export class CompareValidatorDirective implements Validator{
  @Input() appCompareValidator :string; 

  validate(control:AbstractControl):{[key:string]:any} |null {
    const controlToCompare=control.parent.get(this.appCompareValidator);
    if(controlToCompare && controlToCompare.value !==control.value){
      return{'notEqual':true}
    }
    return null;

  }
}
