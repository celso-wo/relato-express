"use strict";
var home_component_1 = require('./home/home.component');
var entrada_component_1 = require('./entrada/entrada.component');
exports.MODULE_ROUTES = [
    { path: 'entrada', component: entrada_component_1.EntradaComponent },
    { path: 'dashboard', component: home_component_1.HomeComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
exports.MODULE_COMPONENTS = [
    home_component_1.HomeComponent,
    entrada_component_1.EntradaComponent
];
//# sourceMappingURL=dashboard.routes.js.map