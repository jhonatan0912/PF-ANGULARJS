import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

interface UserForm {
  name: String;
  email: String;
  message: String;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  user: UserForm = {
    name: "",
    email: "",
    message: "",
  }

  send() {
    console.log(this.user);
  }

  showModal() {
    Swal.fire({
      title: 'Success',
      text: 'Gracias por contactarnos!',
      icon: 'success',
      confirmButtonText: 'CLOSE'
    })
  }
}
