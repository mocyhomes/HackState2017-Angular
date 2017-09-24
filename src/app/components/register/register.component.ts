import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	email:string;
	password:string;

  constructor(
  	private authService:AuthService,
  	private router:Router,
    public flashMessagesService:FlashMessagesService  	
  ) { }

  ngOnInit() {
  }

  onSubmit() {
  	this.authService.register(this.email, this.password)
  		.then((res) => {
        this.flashMessagesService.show('Account created', { cssClass:'alert-success', timeout:3000 });
        this.router.navigate(['/']);
  		})
  		.catch((err) => {
        this.flashMessagesService.show(err.message, { cssClass:'alert-danger', timeout:3000 });
        this.router.navigate(['/register']);
  		})
  }

}
