import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
  }
  gender:any;
  Add(UserName:any,Email:any,Password:any,ConfirmPassword:any,ProfileImage:any,Gender:any){
    let User = {UserName,Email,Password,ConfirmPassword,ProfileImage,Gender};
    this.userService.Register(User).subscribe();
    window.location.reload();
  }
}
