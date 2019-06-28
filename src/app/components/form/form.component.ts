import { Component, OnInit } from '@angular/core';
import { User, Data } from '../../models/data';
import { NgForm } from '@angular/forms';
import { ApiDataService } from '../../services/api-data.service';

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public mensajeArchivo = 'No hay un archivo seleccionado';
  public datosFormulario = new FormData();
  public nombreArchivo = '';
  public URLPublica = '';
  public porcentaje = 0;
  public finalizado = false;

  public user: User = {
    nombre: '',
    apellido: '',
    direccion: '',
    cedulaPdf:'',
    ciudad: '',
    fecha: new Date(),
    id: 0
  }
  public users: User[] = [];
  constructor(private apiData:ApiDataService) {
    console.log('local afuera', localStorage.getItem("currentUser"));

  }

  ngOnInit() {
  }
  onRegister(form: NgForm) {
    let archivo = this.datosFormulario.get('archivo');
      let referencia = this.apiData.referenciaCloudStorage(this.nombreArchivo);
      let tarea = this.apiData.upLooad(this.nombreArchivo, archivo);
  
    if (form.valid) {
      this.user.id++;
      this.user.cedulaPdf=this.nombreArchivo
      // let user_string = JSON.stringify(this.user);
      // localStorage.setItem("UserID" + this.user.id.toString(), user_string);
      this.apiData.addUser(this.user)
      
      //Cambia el porcentaje
      tarea.percentageChanges().subscribe((porcentaje) => {
        this.porcentaje = Math.round(porcentaje);
        console.log(this.porcentaje,'%')
        if (this.porcentaje == 100) {
          this.finalizado = true;
          console.log('envio finalizado')
        }
      });
      referencia.getDownloadURL().subscribe((URL) => {
        this.URLPublica = URL;
      });
    }
    
  }

  upLoad(e: HTMLInputElement) {
    let size = e.files[0].size / 1024 / 1024;
    if (size > 1) {
      return alert('El archivo debe ser mernor a  1MB y es de ' + size + "MB");  
    }

    if (e.files.length > 0) {
      for (let i = 0; i < e.files.length; i++) {
        this.mensajeArchivo = `Archivo preparado: ${e.files[i].name}`;
        this.nombreArchivo = e.files[i].name;
        this.datosFormulario.delete('archivo');
        this.datosFormulario.append('archivo', e.files[i], e.files[i].name)
      }
    } else {
      this.mensajeArchivo = 'No hay un archivo seleccionado';
    }
  }


  
}
