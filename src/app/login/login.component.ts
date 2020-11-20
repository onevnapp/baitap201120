import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "";
  password = "";

  ngOnInit(): void {
  }

  constructor(
    private router: Router
  ) {}

  login(){
    this.router.navigateByUrl("/admin/profile");
  }

}
