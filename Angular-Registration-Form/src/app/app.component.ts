import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user = {
    first:'',
    last:'',
    email:'',
    password:'',
    adress:'',
    unit:'',
    city:'',
    state:'',
    luck:''
  }
  users = [];
  onSubmit(){
    this.users.push(this.user)
    this.user = {
      first:'',
      last:'',
      email:'',
      password:'',
      adress:'',
      unit:'',
      city:'',
      state:'',
      luck:''
    }
  }
}
