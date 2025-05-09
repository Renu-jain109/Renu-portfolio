import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactFormData } from '../interface/contact-form-data';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  // Injecting ToastrService for notifications
  toastr = inject(ToastrService);
  showModal: boolean = false; // Controls display of confirmation modal
  submittedData: ContactFormData | null = null; // Stores submitted form data
  contactForm!: FormGroup;  // Reactive form instance

  ngOnInit() {
    // Initialize form with validators
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z\s]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
    })

  }

  // Called on form submission
  submit() {
    if (this.contactForm.valid) {

      // Store valid form data and show success modal + notification
      this.submittedData = this.contactForm.value as ContactFormData;
      this.showModal = true;
      this.toastr.success('Your message was submitted!', 'Success');

      this.contactForm.reset();//Reset after successful submit
    } else {
      // Show error toast if form is invalid
      this.toastr.error('Please correct the errors in the form.', 'Validation Error');
      return;
    }
  }

  // Close the success modal
  closeModal() {
    this.showModal = false;
  }

}
