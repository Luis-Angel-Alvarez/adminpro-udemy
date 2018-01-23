import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarTres('ruta es esta', 'parametros estos').then(
      mensaje => console.log('Termino!', mensaje)
    )
    .catch( error => console.log('Error en la promesa',error));


   }

  ngOnInit() {
  }

  contarTres() {

    let promesa = new Promise( (resolve, reject) => {

      let contador = 0;

      let intervalo = setInterval( () => {
        contador += 1;
        console.log(contador);
        if ( contador === 3) {
          resolve('Ok!');
          //reject('simplemente un error');
          clearInterval(intervalo);
        }
      }, 1000);
    });
    return promesa;
  }

}
