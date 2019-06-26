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
  }
  
  constructor() { }

  ngOnInit() {
  }
  get(form :NgForm){
    
  }
}
