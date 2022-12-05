import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import Swal from 'sweetalert2'



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    message: new FormControl('', Validators.required)
  });


  constructor(public fb: FormBuilder) {
  }

  ngOnInit(): void {


  }

  send() {
    console.log(this.contactForm);
    if (this.contactForm.status != "INVALID") {
      Swal.fire({
        title: 'Success',
        text: 'Gracias por contactarnos!',
        icon: 'success',
        confirmButtonText: 'CLOSE'
      })
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Verifique los campos y vuelva a intentarlo',
        icon: 'error',
        confirmButtonText: 'CLOSE'
      })
    }
  }
}
