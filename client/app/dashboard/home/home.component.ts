import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import initDemo = require('../../../assets/js/charts.js');
import * as introJs from 'intro.js';

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
        data:{
           "cnpj": "04.325.815/0001-00",
           "razaoSocial": "DISPARE TRANSP ROD COM ATACADISTA HORTIFRUTIGRANJEIRO LTDA ME",
           "tipoSociedade": "SOCIEDADE EMPRESARIA LIMITADA",
           "antecessora": "DISPARE TRANSPORTES LTDA ME",
           "registro": "4.155.487",
           "inscricaoEstadual": "702129520067"
        },
        opened: false
      }
    };
  }

  ngOnInit() {
    initDemo();

    introJs().start();
  }
}
