import { Component, OnInit } from '@angular/core';
import { User, Data } from '../../models/data';
import { NgForm } from '@angular/forms';

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
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
  constructor() { 
    console.log('local afuera',localStorage.getItem("currentUser"));
    
  }

  ngOnInit() {
  }
  onRegister(form :NgForm){
    
    if(form.valid){
      this.user.id++;
      let user_string = JSON.stringify(this.user);
      
    localStorage.setItem("UserID"+this.user.id.toString(), user_string);
    }
    this.users.map(s=>s=this.user)
    console.log('usuarios',this.users)
    }
  upLoad(e:HTMLInputElement){
    let size=e.files[0].size/1024/1024;
    let type=e.files[0].type
    if(size>1){
      alert('El archivo debe ser mernor a  1MB y es de ' + size + "MB");
    }
    console.log('que trae',e.files[0])
    if(type !=="application/pdf"){
      alert('El archivo debe tener formato PDF');
      return 0
    }
    
  
  }
}
