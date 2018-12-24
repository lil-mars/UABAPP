import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoPage } from '../video/video';


@IonicPage()
@Component({
  selector: 'page-plantilla-botones',
  templateUrl: 'plantilla-botones.html',
})
export class PlantillaBotonesPage {
  items =[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        'title': 'Ciencias  economicas y empresariales',
        'icon': 'md-school',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#E63135'
      },
      {
        'title': 'Salud',
        'icon': 'ios-flask',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': '#0CA9EA'
      },
      {
        'title': 'Ciecias exactas y tecnologicas',
        'icon': 'logo-reddit',
        'description': 'The latest version of the web\'s markup language.',
        'color': 'orange'
      },
      {
        'title': 'Ciecias sociales y humanas',
        'icon': 'ios-body',
        'description': 'One of the most popular programming languages on the Web!',
        'color': 'violet'
      },
      {
        'title': 'Teologia',
        'icon': 'ios-book',
        'description': 'One of the most popular programming languages on the Web!',
        'color': 'gray'
      },
    ]
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PlantillaBotonesPage');
  }

}
