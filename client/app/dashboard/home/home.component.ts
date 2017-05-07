import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import initDemo = require('../../../assets/js/charts.js');

declare var $: any;
declare var introJs;

@Component({
  selector: 'home-cmp',
  moduleId: module.id,
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

  private dados;
  private introJsInstance;

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
    this.introJsInstance = introJs();
    this.introJsInstance.setOption("nextLabel", " Próximo ");
    this.introJsInstance.setOption("prevLabel", " Anterior ");
    this.introJsInstance.setOption("skipLabel", " Fechar ");
    this.introJsInstance.setOption("doneLabel", " Fechar ");
    this.introJsInstance.setOption("hidePrev", true);
    this.introJsInstance.setOption("hideNext", true);
  }

  onAssistenteClick() {
    this.introJsInstance.start();
  }
}
