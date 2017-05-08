"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var HomeComponent = (function () {
    function HomeComponent(route, http) {
        var _this = this;
        this.route = route;
        this.http = http;
        this.routeParamSubscribe = this.route.params.subscribe(function (params) {
            _this.http.get("/dados/" + params['cnpj'] + ".json").toPromise().then(function (res) {
                _this.dados = res.json();
                setTimeout(function () {
                    $(function () {
                        $('[data-toggle="tooltip"]').tooltip();
                    });
                }, 1000);
            }).catch(function (reason) {
                console.error(reason);
            });
        });
    }
    HomeComponent.prototype.openTable = function () {
        this.openbar = !this.openbar;
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.introJsInstance = introJs();
        this.introJsInstance.setOption("nextLabel", " Próximo ");
        this.introJsInstance.setOption("prevLabel", " Anterior ");
        this.introJsInstance.setOption("skipLabel", " Fechar ");
        this.introJsInstance.setOption("doneLabel", " Fechar ");
        this.introJsInstance.setOption("hidePrev", true);
        this.introJsInstance.setOption("hideNext", true);
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.routeParamSubscribe.unsubscribe();
    };
    HomeComponent.prototype.onAssistenteClick = function () {
        this.introJsInstance.start();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home-cmp',
            moduleId: module.id,
            templateUrl: 'home.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, http_1.Http])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map