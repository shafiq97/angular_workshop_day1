import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function uitmEmailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const email = control.value;
    if (!email) {
      return null; // If there's no value, let other validators handle it
    }

    return email.endsWith('@uitm.com.my') ? null : { invalidDomain: true };
  };
}
