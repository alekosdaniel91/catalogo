import { Component, OnInit } from '@angular/core';
import { User } from '../../models/data';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public user: User={
    nombre: '',
    apellido: '',
    direccion: '',
    ciudad: '',
    fecha: new Date(),
    id:0
  }
  public users: User[]=[];
  constructor() { }

  ngOnInit() {
  }
  onRegister(form :NgForm){
    if(form.valid){
      this.user.id++
      this.users.push(this.user)
      let user_string = JSON.stringify(this.users);
    localStorage.setItem("currentUser", user_string);
    }
    }
  upLoad(e){
    console.log('e',e)
  }
}
