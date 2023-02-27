"use strict";(self.webpackChunkdesign_angular_kit_bundle=self.webpackChunkdesign_angular_kit_bundle||[]).push([[416],{7416:(T,d,e)=>{e.r(d),e.d(d,{BackButtonModule:()=>a});var k=e(6895),v=e(4006),B=e(970),b=e(3870),y=e(7069),t=e(8274),f=e(8340),Z=e(5792),x=e(2717),h=e(6242),r=e(5411);class l{}l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["it-back-button-link"]],decls:9,vars:0,consts:[[1,"bd-example"],[1,"row","my-2"],[1,"col"],["buttonStyle","link"],["buttonStyle","link","direction","up"]],template:function(n,c){1&n&&(t.TgZ(0,"h3"),t._uU(1,"Link"),t.qZA(),t.TgZ(2,"div",0)(3,"div",1)(4,"div",2),t._UZ(5,"it-back-button",3),t.qZA()(),t.TgZ(6,"div",1)(7,"div",2),t._UZ(8,"it-back-button",4),t.qZA()()())},dependencies:[r.W],encapsulation:2});class s{}s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["it-back-button-button"]],decls:9,vars:0,consts:[[1,"bd-example"],[1,"row","my-2"],[1,"col"],["direction","up"]],template:function(n,c){1&n&&(t.TgZ(0,"h3"),t._uU(1,"Pulsanti"),t.qZA(),t.TgZ(2,"div",0)(3,"div",1)(4,"div",2),t._UZ(5,"it-back-button"),t.qZA()(),t.TgZ(6,"div",1)(7,"div",2),t._UZ(8,"it-back-button",3),t.qZA()()())},dependencies:[r.W],encapsulation:2});class u{constructor(){this.typeTornaIndietro="tornaIndietro",this.typeLivelloSuperiore="livelloSuperiore"}}u.\u0275fac=function(n){return new(n||u)},u.\u0275cmp=t.Xpm({type:u,selectors:[["it-back-button-only-icon"]],decls:8,vars:2,consts:[[1,"bd-example"],[1,"row","my-2"],[1,"col-auto"],[3,"showText"],["direction","up",3,"showText"]],template:function(n,c){1&n&&(t.TgZ(0,"h3"),t._uU(1,"Pulsanti con sola icona"),t.qZA(),t.TgZ(2,"div",0)(3,"div",1)(4,"div",2),t._UZ(5,"it-back-button",3),t.qZA(),t.TgZ(6,"div",2),t._UZ(7,"it-back-button",4),t.qZA()()()),2&n&&(t.xp6(5),t.Q6J("showText",!1),t.xp6(2),t.Q6J("showText",!1))},dependencies:[r.W],encapsulation:2});class p{}p.\u0275fac=function(n){return new(n||p)},p.\u0275cmp=t.Xpm({type:p,selectors:[["it-back-button-examples"]],decls:6,vars:0,consts:[["html",'<h3>Link</h3>\n<div class="bd-example">\n  <div class="row my-2">\n    <div class="col">\n      <it-back-button buttonStyle="link"></it-back-button>\n    </div>\n  </div>\n  <div class="row my-2">\n    <div class="col">\n      <it-back-button buttonStyle="link" direction="up"></it-back-button>\n    </div>\n  </div>\n</div>',"typescript","import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-back-button-link',\n  templateUrl: './back-button-link.component.html'\n})\nexport class BackButtonLinkComponent {\n\n}"],["html",'<h3>Pulsanti</h3>\n<div class="bd-example">\n  <div class="row my-2">\n    <div class="col">\n      <it-back-button></it-back-button>\n    </div>\n  </div>\n  <div class="row my-2">\n    <div class="col">\n      <it-back-button direction="up"></it-back-button>\n    </div>\n  </div>\n</div>',"typescript","import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-back-button-button',\n  templateUrl: './back-button-button.component.html'\n})\nexport class BackButtonButtonComponent {\n\n}"],["html",'<h3>Pulsanti con sola icona</h3>\n<div class="bd-example">\n  <div class="row my-2">\n    <div class="col-auto">\n      <it-back-button [showText]="false"></it-back-button>\n    </div>\n    <div class="col-auto">\n      <it-back-button [showText]="false" direction="up"></it-back-button>\n    </div>\n  </div>\n</div>',"typescript","import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-back-button-only-icon',\n  templateUrl: './back-button-only-icon.component.html'\n})\nexport class BackButtonOnlyIconComponent {\n\n  typeTornaIndietro: 'tornaIndietro' | 'livelloSuperiore' = 'tornaIndietro';\n  typeLivelloSuperiore: 'tornaIndietro' | 'livelloSuperiore' = 'livelloSuperiore';\n\n}"]],template:function(n,c){1&n&&t._UZ(0,"it-back-button-link")(1,"it-source-display",0)(2,"it-back-button-button")(3,"it-source-display",1)(4,"it-back-button-only-icon")(5,"it-source-display",2)},dependencies:[h.F,l,s,u],encapsulation:2});class m{constructor(){this.component=y.wx.find(n=>"BackButtonComponent"===n.name)}}m.\u0275fac=function(n){return new(n||m)},m.\u0275cmp=t.Xpm({type:m,selectors:[["it-go-back-index"]],decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["id","example","label","Esempi","active","true",1,"mt-3"],["id","api","label","API",1,"mt-3"],[3,"component"]],template:function(n,c){1&n&&(t.TgZ(0,"h1",0),t._uU(1,"BackButton"),t.qZA(),t.TgZ(2,"p",1),t._uU(3,'Consente agli utenti di avere un link o pulsante con un\'azione equivalente al "torna indietro" del browser.'),t.qZA(),t._UZ(4,"div",2),t.TgZ(5,"it-tab-container")(6,"it-tab-item",3),t._UZ(7,"it-back-button-examples"),t.qZA(),t.TgZ(8,"it-tab-item",4),t._UZ(9,"it-api-parameters",5),t.qZA()()),2&n&&(t.xp6(4),t.Q6J("innerHTML",c.component.description,t.oJD),t.xp6(5),t.Q6J("component",c.component))},dependencies:[f.G,Z.H,x.D,p],encapsulation:2});const C=[{path:"",component:m}];class i{}i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[b.Bz.forChild(C),b.Bz]});class a{}a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[k.ez,B.m,v.u5,i]})}}]);