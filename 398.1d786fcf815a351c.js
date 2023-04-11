"use strict";(self.webpackChunkdesign_angular_kit_bundle=self.webpackChunkdesign_angular_kit_bundle||[]).push([[398],{5398:(_,s,i)=>{i.r(s),i.d(s,{AlertModule:()=>b});var m=i(6895),c=i(3870),u=i(7069),e=i(8274),d=i(8340),g=i(5792),v=i(2717),A=i(6242),r=i(137);let C=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["it-alert-color-example"]],decls:31,vars:0,consts:[[1,"bd-example"],[1,"example-section"],["color","success"],["color","warning"],["color","danger"],[1,"mt-5"],["href","#",1,"alert-link"]],template:function(t,l){1&t&&(e.TgZ(0,"h3"),e._uU(1,"Esempi"),e.qZA(),e.TgZ(2,"div",0)(3,"div",1)(4,"it-alert"),e._uU(5,' Questo \xe8 un alert di tipo "'),e.TgZ(6,"b"),e._uU(7,"info"),e.qZA(),e._uU(8,'". '),e.qZA(),e.TgZ(9,"it-alert",2),e._uU(10,' Questo \xe8 un alert di tipo "'),e.TgZ(11,"b"),e._uU(12,"success"),e.qZA(),e._uU(13,'". '),e.qZA(),e.TgZ(14,"it-alert",3),e._uU(15,' Questo \xe8 un alert di tipo "'),e.TgZ(16,"b"),e._uU(17,"warning"),e.qZA(),e._uU(18,'". '),e.qZA(),e.TgZ(19,"it-alert",4),e._uU(20,' Questo \xe8 un alert di tipo "'),e.TgZ(21,"b"),e._uU(22,"danger"),e.qZA(),e._uU(23,'". '),e.qZA(),e.TgZ(24,"h3",5),e._uU(25,"Link evidenziato"),e.qZA(),e.TgZ(26,"it-alert",4),e._uU(27," Questo \xe8 un alert con un esempio di "),e.TgZ(28,"a",6),e._uU(29,"link"),e.qZA(),e._uU(30," evidenziato. "),e.qZA()()())},dependencies:[r.w],encapsulation:2}),n})(),x=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["it-alert-additional-content-example"]],decls:12,vars:0,consts:[[1,"bd-example"],[1,"example-section"],["color","success"],["heading",""],[1,"mb-0"]],template:function(t,l){1&t&&(e.TgZ(0,"h3"),e._uU(1,"Contenuto aggiuntivo"),e.qZA(),e.TgZ(2,"div",0)(3,"div",1)(4,"it-alert",2),e.ynx(5,3),e._uU(6,"Avviso di successo!"),e.BQk(),e.TgZ(7,"p"),e._uU(8,"Stai leggendo questo importante messaggio di avviso di successo. Questo testo di esempio sar\xe0 pi\xf9 lungo in modo da poter vedere come funzioni la spaziatura all'interno di un avviso con questo tipo di contenuto."),e.qZA(),e._UZ(9,"hr"),e.TgZ(10,"p",4),e._uU(11,"Quando necessario, assicurarti di inserire le utilit\xe0 di margine per mantenere gli spazi equilibrati."),e.qZA()()()())},dependencies:[r.w],encapsulation:2}),n})();var Z=i(7299);let E=(()=>{class n{onClose(t){this.closeTime=(new Date).toISOString()}onClosed(t){this.closedTime=(new Date).toISOString()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["it-alert-closing-example"]],decls:22,vars:2,consts:[[1,"bd-example"],[1,"example-section"],["color","warning","dismissible","true",3,"closeEvent","closedEvent"],[1,"my-4"],["color","warning"],["alert","itAlert"],["itButton","primary","type","button",3,"click"]],template:function(t,l){if(1&t){const y=e.EpF();e.TgZ(0,"h3"),e._uU(1,"Chiusura"),e.qZA(),e.TgZ(2,"div",0)(3,"div",1)(4,"it-alert",2),e.NdJ("closeEvent",function(a){return l.onClose(a)})("closedEvent",function(a){return l.onClosed(a)}),e.TgZ(5,"strong"),e._uU(6,"Attenzione"),e.qZA(),e._uU(7," Alcuni campi inseriti sono da controllare. "),e.qZA(),e.TgZ(8,"div",3)(9,"div"),e._uU(10),e.qZA(),e.TgZ(11,"div"),e._uU(12),e.qZA()(),e.TgZ(13,"h3"),e._uU(14,"Chiusura manuale"),e.qZA(),e.TgZ(15,"it-alert",4,5)(17,"strong"),e._uU(18,"Attenzione"),e.qZA(),e._uU(19," Alcuni campi inseriti sono da controllare. "),e.qZA(),e.TgZ(20,"button",6),e.NdJ("click",function(){e.CHM(y);const a=e.MAs(16);return e.KtG(a.close())}),e._uU(21," Chiudi alert "),e.qZA()()()}2&t&&(e.xp6(10),e.hij(" Emissione dell'evento close = ",l.closeTime," "),e.xp6(2),e.hij(" Emissione dell'evento closed = ",l.closedTime," "))},dependencies:[r.w,Z.H],encapsulation:2}),n})(),T=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["it-alert-examples"]],decls:6,vars:0,consts:[["html",'<h3>Esempi</h3>\n\n<div class="bd-example">\n  <div class="example-section">\n\n    <it-alert>\n      Questo \xe8 un alert di tipo "<b>info</b>".\n    </it-alert>\n\n    <it-alert color="success">\n      Questo \xe8 un alert di tipo "<b>success</b>".\n    </it-alert>\n\n    <it-alert color="warning">\n      Questo \xe8 un alert di tipo "<b>warning</b>".\n    </it-alert>\n\n    <it-alert color="danger">\n      Questo \xe8 un alert di tipo "<b>danger</b>".\n    </it-alert>\n\n\n    <h3 class="mt-5">Link evidenziato</h3>\n\n    <it-alert color="danger">\n      Questo \xe8 un alert con un esempio di <a href="#" class="alert-link">link</a> evidenziato.\n    </it-alert>\n  </div>\n</div>',"typescript","import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-alert-color-example',\n  templateUrl: './alert-color-example.component.html'\n})\nexport class AlertColorExampleComponent {\n\n}"],["html",'<h3>Contenuto aggiuntivo</h3>\n\n<div class="bd-example">\n  <div class="example-section">\n\n    <it-alert color="success">\n      <ng-container heading>Avviso di successo!</ng-container>\n\n      <p>Stai leggendo questo importante messaggio di avviso di successo. Questo testo di esempio sar\xe0 pi\xf9 lungo in modo da poter vedere come funzioni la spaziatura all\'interno di un avviso con questo tipo di contenuto.</p>\n      <hr>\n      <p class="mb-0">Quando necessario, assicurarti di inserire le utilit\xe0 di margine per mantenere gli spazi equilibrati.</p>\n    </it-alert>\n\n  </div>\n</div>',"typescript","import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-alert-additional-content-example',\n  templateUrl: './alert-additional-content-example.component.html'\n})\nexport class AlertAdditionalContentExampleComponent {\n\n}"],["html",'<h3>Chiusura</h3>\n\n<div class="bd-example">\n  <div class="example-section">\n\n    <it-alert color="warning" dismissible="true" (closeEvent)="onClose($event)" (closedEvent)="onClosed($event)">\n      <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.\n    </it-alert>\n\n\n    <div class="my-4">\n      <div>\n        Emissione dell\'evento close = /{/{closeTime/}/}\n      </div>\n\n      <div>\n        Emissione dell\'evento closed = /{/{closedTime/}/}\n      </div>\n    </div>\n\n    <h3>Chiusura manuale</h3>\n\n    <it-alert color="warning" #alert="itAlert">\n      <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.\n    </it-alert>\n\n    <button itButton="primary" type="button" (click)="alert.close()">\n      Chiudi alert\n    </button>\n  </div>\n</div>',"typescript","import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-alert-closing-example',\n  templateUrl: './alert-closing-example.component.html'\n})\nexport class AlertClosingExampleComponent {\n\n  closeTime?: string;\n  closedTime?: string;\n\n\n  onClose(event: Event): void {\n    this.closeTime = new Date().toISOString();\n  }\n\n  onClosed(event: Event): void {\n    this.closedTime = new Date().toISOString();\n  }\n}"]],template:function(t,l){1&t&&e._UZ(0,"it-alert-color-example")(1,"it-source-display",0)(2,"it-alert-additional-content-example")(3,"it-source-display",1)(4,"it-alert-closing-example")(5,"it-source-display",2)},dependencies:[A.F,C,x,E],encapsulation:2}),n})();const h=[{path:"",component:(()=>{class n{constructor(){this.component=u.wx.find(t=>"AlertComponent"===t.name)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["it-alert-index"]],decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(t,l){1&t&&(e.TgZ(0,"h1",0),e._uU(1,"Alert"),e.qZA(),e.TgZ(2,"p",1),e._uU(3,"Puoi fornire dei feedback all\u2019utente tramite messaggi di avviso."),e.qZA(),e._UZ(4,"div",2),e.TgZ(5,"it-tab-container")(6,"it-tab-item",3),e._UZ(7,"it-alert-examples"),e.qZA(),e.TgZ(8,"it-tab-item",4),e._UZ(9,"it-api-parameters",5),e.qZA()()),2&t&&(e.xp6(4),e.Q6J("innerHTML",l.component.description,e.oJD),e.xp6(5),e.Q6J("component",l.component))},dependencies:[d.G,g.H,v.D,T],encapsulation:2}),n})()}];let f=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.Bz.forChild(h),c.Bz]}),n})();var U=i(4466);let b=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.ez,U.m,f]}),n})()}}]);