import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import initDemo = require('../../../assets/js/charts.js');

declare var $: any;

@Component({
  selector: 'home-cmp',
  moduleId: module.id,
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

  private dados;

  constructor() {
    this.dados = {
      nome: 'Mike',
      dadoscadastrais: {
        opened: false
      }
    };
  }

  ngOnInit() {
    initDemo();
  }
}
