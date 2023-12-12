import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatInputModule} from "@angular/material/input";
// import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  username: string = '';
  password: string = '';


  constructor(
    private formBuilder: FormBuilder,
    private router: Router
) {
  }

  ngOnInit() {
    localStorage.setItem('pate', JSON.stringify(0));
    localStorage.setItem('croqueta', JSON.stringify(0));

  }

  login(){
    this.router.navigate((['/product-list']));
  }

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', { validators: [Validators.required], updateOn: 'change'}],
    password: ['', {validators: [Validators.required ], updateOn: 'change'}]
  })

}
