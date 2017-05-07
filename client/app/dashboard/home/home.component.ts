import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import initDemo = require('../../../assets/js/charts.js');

declare var $: any;
declare var introJs;
declare var Chartist;

@Component({
  selector: 'home-cmp',
  moduleId: module.id,
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

  private dados;
  private introJsInstance;
  private openCompromissoEmAndamento = false;
  private openCompromissoRotativos = false;
  private openCartaoCredito = false;
  private openCompromissoPagos = false;
  private routeParamSubscribe;

  // lineChart
  public lineChartData: Array<any> = [
    { data: [24101, 18069, 8258, 3175, 7795, 118948, 157854, 115814, 102518], label: 'Valor' },
  ];
  public lineChartLabels: Array<any> = ['ABRIL/17', 'MAR/17', 'FEV/17', 'JAN/17', 'DEZ/16', 'NOV/16', 'OUT/16', 'SET/16', 'AGO/16'];
  public lineChartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          fontColor: "white",
          beginAtZero: true
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: "white",
          beginAtZero: true
        }
      }]
    }
  };
  public lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderColor: '#fff',
      pointBackgroundColor: '#fff',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  constructor(private route: ActivatedRoute, private http: Http) {
    this.routeParamSubscribe = this.route.params.subscribe(params => {
      this.http.get(`/dados/${params['cnpj']}.json`).toPromise().then(res => {
        this.dados = res.json();

      }).catch(reason => {
        console.error(reason);
      });
    });
  }

  expandTableCompromissoEmAndamento() {
    this.openCompromissoEmAndamento = !this.openCompromissoEmAndamento;
  }

  expandTableCompromissoPagos() {
    this.openCompromissoPagos = !this.openCompromissoPagos;
  }

  expandTableCompromissosRotativo() {
    this.openCompromissoRotativos = !this.openCompromissoRotativos;
  }

  expandTableCartaoCredito() {
    this.openCartaoCredito = !this.openCartaoCredito;
  }

  ngOnInit() {
    this.introJsInstance = introJs();
    this.introJsInstance.setOption("nextLabel", " Próximo ");
    this.introJsInstance.setOption("prevLabel", " Anterior ");
    this.introJsInstance.setOption("skipLabel", " Fechar ");
    this.introJsInstance.setOption("doneLabel", " Fechar ");
    this.introJsInstance.setOption("hidePrev", true);
    this.introJsInstance.setOption("hideNext", true);
  }

  ngOnDestroy() {
    this.routeParamSubscribe.unsubscribe();
  }

  onAssistenteClick() {
    this.introJsInstance.start();
  }
}
