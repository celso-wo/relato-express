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
  private routeParamSubscribe;
  private openbar;

  constructor(private route: ActivatedRoute, private http: Http) {
    this.routeParamSubscribe = this.route.params.subscribe(params => {
      this.http.get(`/dados/${params['cnpj']}.json`).toPromise().then(res => {
        this.dados = res.json();

        setTimeout(() => {
          $(function () {
            $('[data-toggle="tooltip"]').tooltip()
          })
        }, 1000);
      }).catch(reason => {
        console.error(reason);
      });
    });
  }

  openTable() {
    this.openbar = !this.openbar;
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
