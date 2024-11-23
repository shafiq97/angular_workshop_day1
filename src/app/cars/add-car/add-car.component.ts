import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-car',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],
})
export class AddCarComponent {
  carForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.carForm = this.fb.group({
      make: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
      price: ['', [Validators.required, Validators.min(0)]],
      mileage: ['', [Validators.required, Validators.min(0)]],
      color: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.carForm.valid) {
      this.http.post('https://8ee0-115-164-33-144.ngrok-free.app/cars', this.carForm.value).subscribe({
        next: (response) => {
          console.log('Car added successfully:', response);
          alert('Car added successfully!');
          this.carForm.reset();
        },
        error: (error) => {
          console.error('Error adding car:', error);
          alert('Failed to add car. Please try again.');
        },
      });
    } else {
      alert('Please fill all the required fields.');
    }
  }
}
