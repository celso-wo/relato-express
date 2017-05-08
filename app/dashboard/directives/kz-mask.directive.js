/**
 * Diretiva de máscara genérica em campo de texto.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.4
 */
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
var forms_1 = require('@angular/forms');
var KzMaskDirective = (function () {
    function KzMaskDirective() {
    }
    KzMaskDirective.prototype.writeValue = function (value) {
    };
    KzMaskDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    KzMaskDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    KzMaskDirective.prototype.onKeyup = function ($event) {
        var valor = $event.target.value.replace(/\D/g, '');
        var pad = this.kzMask.replace(/\D/g, '').replace(/9/g, '_');
        var valorMask = valor + pad.substring(0, pad.length - valor.length);
        // retorna caso pressionado backspace
        if ($event.keyCode === 8) {
            this.onChange(valor);
            return;
        }
        if (valor.length <= pad.length) {
            this.onChange(valor);
        }
        var valorMaskPos = 0;
        valor = '';
        for (var i = 0; i < this.kzMask.length; i++) {
            if (isNaN(parseInt(this.kzMask.charAt(i)))) {
                valor += this.kzMask.charAt(i);
            }
            else {
                valor += valorMask[valorMaskPos++];
            }
        }
        if (valor.indexOf('_') > -1) {
            valor = valor.substr(0, valor.indexOf('_'));
        }
        $event.target.value = valor;
    };
    KzMaskDirective.prototype.onBlur = function ($event) {
        if ($event.target.value.length === this.kzMask.length) {
            return;
        }
        this.onChange('');
        $event.target.value = '';
    };
    __decorate([
        core_1.Input('kzMask'), 
        __metadata('design:type', String)
    ], KzMaskDirective.prototype, "kzMask", void 0);
    __decorate([
        core_1.HostListener('keyup', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], KzMaskDirective.prototype, "onKeyup", null);
    __decorate([
        core_1.HostListener('blur', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], KzMaskDirective.prototype, "onBlur", null);
    KzMaskDirective = __decorate([
        core_1.Directive({
            selector: '[kzMask]',
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: KzMaskDirective,
                    multi: true
                }]
        }), 
        __metadata('design:paramtypes', [])
    ], KzMaskDirective);
    return KzMaskDirective;
}());
exports.KzMaskDirective = KzMaskDirective;
//# sourceMappingURL=kz-mask.directive.js.map