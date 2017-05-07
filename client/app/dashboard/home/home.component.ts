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
           "antecessoraNome":"DISPARE TRANSPORTES LTDA ME", 
           "antecessoraAte": "07/07/2009",
           "registro": "4.155.487",
           "dataRegistro": "07/06/2009",
           "nire": "31.206.172.236",
           "inscricaoEstadual": "702129520067",
           "endereco":"ROD BR 050 50 KM 76 BOX 28 PAVILHO GP 1 A",
           "bairro": "SEGISMUNDO",
           "cidade": "UBERLANDIA",
           "telefone": "(034) 4111-2022",
           "cep": "38408-369",
           "fax": "(034)",
           "fundacao": "19/01/2002",
           "filiais": "UBERLANDIA",
           "ramo": "COM ATACADISTAS DE FRUTAS",
           "quantidadeFiliais": "1",
           "codigoAtividadeSerasa": "C-04.03.00",
           "cnae": "46.338-01",
           "opcaoTributaria": "SIMPLES NACIONAL",
           "situacaoCnpj": "ATIVA"

        },
        opened: false
      }
    };
  }

  ngOnInit() {
    initDemo();

    // introJs().start();
  }
}
