import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent {
  formStep1: FormGroup;
  formStep2: FormGroup;
  formStep3: FormGroup;
  fileName: string = '';
  dropdownOptions: string[] = ['Option 1', 'Option 2', 'Option 3'];
  filteredOptions: string[] = [];

  constructor(private fb: FormBuilder) {
    this.formStep1 = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });

    this.formStep2 = this.fb.group({
      birthDate: ['', Validators.required],
      dropdown: ['', Validators.required],
    });

    this.formStep3 = this.fb.group({
      fileUpload: [null, Validators.required],
    });

    this.filteredOptions = this.dropdownOptions;
  }

  onSubmit() {
    if (this.formStep1.valid && this.formStep2.valid && this.formStep3.valid) {
      const formData = {
        ...this.formStep1.value,
        ...this.formStep2.value,
        ...this.formStep3.value,
      };
      console.log('Form Data Submitted:', formData);
    } else {
      console.error('Form is invalid');
    }
  }

  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fileName = input.files[0].name;
      this.formStep3.patchValue({ fileUpload: input.files[0] });
    }
  }

  filterDropdown(event: Event) {
    const input = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredOptions = this.dropdownOptions.filter(option =>
      option.toLowerCase().includes(input)
    );
  }
}
