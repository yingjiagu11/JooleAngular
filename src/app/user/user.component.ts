import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public service: AuthService) { }

  userName:string = '';
  userPassword:string = '';

  ngOnInit(): void {
  }

  onClick() {
    this.service.authenticate(this.userName,this.userPassword).subscribe(data => console.log(data));
    
    console.log("Clicked!");
    console.log(this.userName);
    console.log(this.userPassword);
  }

}
