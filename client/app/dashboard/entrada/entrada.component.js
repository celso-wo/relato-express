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
var EntradaComponent = (function () {
    function EntradaComponent(router) {
        this.router = router;
        this.cnpj = '04325815000100';
    }
    EntradaComponent.prototype.ngOnInit = function () {
    };
    EntradaComponent.prototype.onSubmit = function () {
        this.router.navigate(['dashboard', this.cnpj]);
    };
    EntradaComponent = __decorate([
        core_1.Component({
            selector: 'entrada-cmp',
            moduleId: module.id,
            templateUrl: 'entrada.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], EntradaComponent);
    return EntradaComponent;
}());
exports.EntradaComponent = EntradaComponent;
//# sourceMappingURL=entrada.component.js.map