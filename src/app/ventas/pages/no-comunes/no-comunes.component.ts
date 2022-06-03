import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Maria';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nplural
  clientes: string[] = ['Juan', 'mary', 'sebas', 'Doris', 'Jose emilio'];

  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente() {
    if (this.genero == 'femenino') {
      this.nombre = 'Juan';
      this.genero = 'masculino'
    } else {
      this.nombre = 'Maria';
      this.genero = 'femenino'
    }
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //keyValue Pipe

  persona = {
    nombre: 'juan',
    edad: 20,
    direccion: 'calle falsa'
  }

  //json Pipe

  heroes = [
    {
      nombre: 'super man',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'acuaman',
      vuela: false
    }
  ]

  // async pipe

  miObservable = interval(1000); //0, 1, 2, 3...

  valorPromesa = new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve ('tenemos data');
    }, 3500)
  });

}
