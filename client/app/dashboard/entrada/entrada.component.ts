import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';
import initDemo = require('../../../assets/js/charts.js');

declare var $: any;

@Component({
  selector: 'entrada-cmp',
  moduleId: module.id,
  templateUrl: 'entrada.component.html'
})

export class EntradaComponent implements OnInit {

  private cnpj:string = '04325815000100';

  constructor(private router:Router) {

  }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigate(['dashboard', this.cnpj]);
  }
}
