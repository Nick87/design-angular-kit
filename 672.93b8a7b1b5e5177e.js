"use strict";(self.webpackChunkdesign_angular_kit_bundle=self.webpackChunkdesign_angular_kit_bundle||[]).push([[672],{4672:(U,u,n)=>{n.r(u),n.d(u,{ErrorPageModule:()=>i});var g=n(6895),h=n(4944),d=n(3870),v=n(7069),e=n(8274),Z=n(8340),C=n(5792),E=n(2717),c=n(6242),f=n(7299);class p{constructor(){this.notFound="import {ErrorPageComponent} from 'design-angular-kit';\n\nconst routes: Routes = [\n   { path: 'error/not-found', component: ErrorPageComponent, data: { errorCode: 404 } },\n   { path: '**', redirectTo: 'error/not-found'  }\n]",this.forbidden="import {ErrorPageComponent} from 'design-angular-kit';\n\nconst routes: Routes = [\n   { path: 'error/forbidden', component: ErrorPageComponent, data: { errorCode: 403 } },\n]",this.internalServerError="import {ErrorPageComponent} from 'design-angular-kit';\n\nconst routes: Routes = [\n   { path: 'error/server-error', component: ErrorPageComponent, data: { errorCode: 500 } },\n]",this.custom="import {ErrorPageComponent} from 'design-angular-kit';\n\nconst routes: Routes = [\n   { \n     path: 'error/custom', \n     component: ErrorPageComponent,\n     data: {\n       errorCode: 503, // Opzionale \n       showErrorCode: true, // Opzionale (utile per gli errori 404, 403, 500) \n       errorTitle: \"Servizio non disponibile\", // Opzionale (puoi usare anche chiavi i18n) \n       errorDescription: \"Mi dispiace, momentaneamente questa risorsa non \xe8 disponibile\", // Opzionale (puoi usare anche chiavi i18n) \n       showBackButton: true, // Opzionale \n       showHomeButton: false, // Opzionale \n     } \n   }\n]"}}p.\u0275fac=function(r){return new(r||p)},p.\u0275cmp=e.Xpm({type:p,selectors:[["it-error-page-route-example"]],decls:28,vars:4,consts:[[1,"bd-example"],[1,"d-flex","justify-content-between","mb-3"],["itButton","primary","size","sm","routerLink","/error/not-found"],[3,"typescript"],[1,"d-flex","justify-content-between","mt-5","mb-3"],["itButton","primary","size","sm","routerLink","/error/forbidden"],["itButton","primary","size","sm","routerLink","/error/server-error"],[1,"mt-5"],[1,"mb-3"]],template:function(r,t){1&r&&(e.TgZ(0,"h3"),e._uU(1,"Router Module"),e.qZA(),e.TgZ(2,"p"),e._uU(3,"Puoi utilizzare la pagina d'errore direttamente sul tuo RouterModule (ad esempio app-routing.module.ts)"),e.qZA(),e.TgZ(4,"div",0)(5,"div",1)(6,"h4"),e._uU(7,"404 - Not Found"),e.qZA(),e.TgZ(8,"a",2),e._uU(9,"Prova"),e.qZA()(),e._UZ(10,"it-source-display",3),e.TgZ(11,"div",4)(12,"h4"),e._uU(13,"403 - Forbidden"),e.qZA(),e.TgZ(14,"a",5),e._uU(15,"Prova"),e.qZA()(),e._UZ(16,"it-source-display",3),e.TgZ(17,"div",4)(18,"h4"),e._uU(19,"500 - Internal Server Error"),e.qZA(),e.TgZ(20,"a",6),e._uU(21,"Prova"),e.qZA()(),e._UZ(22,"it-source-display",3),e.TgZ(23,"h4",7),e._uU(24,"Personalizzato"),e.qZA(),e.TgZ(25,"p",8),e._uU(26,"Puoi passare nella route gli attributi per personalizzare la pagina"),e.qZA(),e._UZ(27,"it-source-display",3),e.qZA()),2&r&&(e.xp6(10),e.Q6J("typescript",t.notFound),e.xp6(6),e.Q6J("typescript",t.forbidden),e.xp6(6),e.Q6J("typescript",t.internalServerError),e.xp6(5),e.Q6J("typescript",t.custom))},dependencies:[c.F,f.H,d.rH],encapsulation:2});var P=n(3199);class s{}s.\u0275fac=function(r){return new(r||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["it-error-page-component-example"]],decls:27,vars:4,consts:[[1,"bd-example"],[1,"row"],[1,"col-6"],[3,"errorCode"],[1,"row","mt-5"],["showBackButton","true","showHomeButton","false","showErrorCode","true","errorTitle","Servizio non disponibile","errorDescription","Mi dispiace, momentaneamente questa risorsa non \xe8 disponibile",3,"errorCode"]],template:function(r,t){1&r&&(e.TgZ(0,"h3"),e._uU(1,"Componente"),e.qZA(),e.TgZ(2,"p"),e._uU(3,"Puoi utilizzare la pagina d'errore come un classico componente"),e.qZA(),e.TgZ(4,"div",0)(5,"div",1)(6,"div",2)(7,"h4"),e._uU(8,"404 - Not Found"),e.qZA(),e._UZ(9,"hr")(10,"it-error-page",3),e.qZA(),e.TgZ(11,"div",2)(12,"h4"),e._uU(13,"403 - Forbidden"),e.qZA(),e._UZ(14,"hr")(15,"it-error-page",3),e.qZA()(),e.TgZ(16,"div",4)(17,"div",2)(18,"h4"),e._uU(19,"500 - Internal Server Error"),e.qZA(),e._UZ(20,"hr")(21,"it-error-page",3),e.qZA(),e.TgZ(22,"div",2)(23,"h4"),e._uU(24,"Personalizzato"),e.qZA(),e._UZ(25,"hr")(26,"it-error-page",5),e.qZA()()()),2&r&&(e.xp6(10),e.Q6J("errorCode",404),e.xp6(5),e.Q6J("errorCode",403),e.xp6(6),e.Q6J("errorCode",500),e.xp6(5),e.Q6J("errorCode",503))},dependencies:[P.f],encapsulation:2});class m{}m.\u0275fac=function(r){return new(r||m)},m.\u0275cmp=e.Xpm({type:m,selectors:[["it-error-page-examples"]],decls:3,vars:0,consts:[["html",'<h3>Componente</h3>\n<p>Puoi utilizzare la pagina d\'errore come un classico componente</p>\n\n<div class="bd-example">\n\n  <div class="row">\n    <div class="col-6">\n      <h4>404 - Not Found</h4>\n      <hr>\n      <it-error-page [errorCode]="404"></it-error-page>\n    </div>\n\n    <div class="col-6">\n      <h4>403 - Forbidden</h4>\n      <hr>\n      <it-error-page [errorCode]="403"></it-error-page>\n    </div>\n  </div>\n\n  <div class="row mt-5">\n    <div class="col-6">\n      <h4>500 - Internal Server Error</h4>\n      <hr>\n      <it-error-page [errorCode]="500"></it-error-page>\n    </div>\n\n    <div class="col-6">\n      <h4>Personalizzato</h4>\n      <hr>\n      <it-error-page showBackButton="true"\n                     showHomeButton="false"\n                     [errorCode]="503"\n                     showErrorCode="true"\n                     errorTitle="Servizio non disponibile"\n                     errorDescription="Mi dispiace, momentaneamente questa risorsa non \xe8 disponibile"></it-error-page>\n    </div>\n  </div>\n\n</div>',"typescript","import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-error-page-component-example',\n  templateUrl: './error-page-component-example.component.html'\n})\nexport class ErrorPageComponentExampleComponent {\n\n}"]],template:function(r,t){1&r&&e._UZ(0,"it-error-page-route-example")(1,"it-error-page-component-example")(2,"it-source-display",0)},dependencies:[c.F,p,s],encapsulation:2});class l{constructor(){this.component=v.wx.find(r=>"ErrorPageComponent"===r.name)}}l.\u0275fac=function(r){return new(r||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["it-error-page-index"]],decls:11,vars:1,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(r,t){1&r&&(e.TgZ(0,"h1",0),e._uU(1,"Error page"),e.qZA(),e.TgZ(2,"p",1),e._uU(3,"Una semplice pagina di errore basata sullo status code della richiesta"),e.qZA(),e.TgZ(4,"it-tab-container")(5,"it-tab-item",2),e._UZ(6,"it-error-page-examples"),e.qZA(),e.TgZ(7,"it-tab-item",3)(8,"h3"),e._uU(9,"ErrorPageComponent"),e.qZA(),e._UZ(10,"it-api-parameters",4),e.qZA()()),2&r&&(e.xp6(10),e.Q6J("component",t.component))},dependencies:[Z.G,C.H,E.D,m],encapsulation:2});const x=[{path:"",component:l}];class a{}a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[d.Bz.forChild(x),d.Bz]});class i{}i.\u0275fac=function(r){return new(r||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.ez,h.m,a]})}}]);