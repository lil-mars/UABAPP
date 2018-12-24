import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { PlantillaBotonesPage } from '../plantilla-botones/plantilla-botones';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController ,public Alerta: AlertController)
  {

  }

  botones(){
    this.navCtrl.push(PlantillaBotonesPage);
  }

  async presentAlertPrompt() {
    let alert = this.Alerta.create({
      title:'Formulario',
      message:'Para acceder a esta opcion debes llenar el siguiente formulario.',

      inputs: [
        {
          name: 'Nombres :',
          id:'name',
          type: 'text',
          placeholder: 'Nombres Ejm: Erick Marty'

        },
        {
          name: 'Apellidos :',
          type: 'text',
          id: 'last-name',
          placeholder: 'Apellidos Ejm: Terrazas Zeballos'
        },
        {
          name: 'Correo electronico: ',
          id: 'email',
          type: 'email',
          placeholder: 'Email Ejm: misterJose@gmail.com',
        },
        {
          name: 'Ciudad: ',
          id: 'city',
          type: 'text',
          placeholder: 'Ciudad  Ejm: La Paz',
        },
        // input date with min & max
        {
          name: 'Telefono fijo:',
          type: 'tel',
          id:'telefonoFijo',
          placeholder: 'Telf. Fijo  Ejm: 4762832'
        },
        // input date without min nor max
        {
        name: 'Telefono celular:',
        type: 'tel',
        placeholder: 'Telf. Movil Ejm:  78458505'
      },


      ],
      buttons: [
        'Cancelar','Enviar'
      ]
    });
    alert.present();

  }

}
