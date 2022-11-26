import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usersList: any = [];
  constructor(private usersService: UsersService) {
    console.log("Component be created");
  }

  ngOnInit(): void {
    console.log("Component has initialize");
    this.usersService.getUsers()
      .subscribe((response: any) => this.usersList = response);
  }

}
