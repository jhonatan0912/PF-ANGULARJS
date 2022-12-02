import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  contactSuccess: any;

  constructor(public fb: FormBuilder) {
    this.contactForm = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    })
  }

  ngOnInit(): void {


  }

  showModal() {
    console.log(this.contactForm.value.name);
    if (this.contactForm.value.name == '' && this.contactForm.value.name == '' && this.contactForm.value.name == '') {
      this.contactSuccess = false;
    } else {
      Swal.fire({
        title: 'Success',
        text: 'Gracias por contactarnos!',
        icon: 'success',
        confirmButtonText: 'CLOSE'
      })
      this.contactSuccess = true;
    }

  }
}
