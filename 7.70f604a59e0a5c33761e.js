(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{NdaB:function(l,n,u){"use strict";u.r(n);var a=u("CcnG"),t=function(){},i=u("M6iX"),e=u("pMnS"),o=u("Ip0R"),r=u("HqB3"),c=a.La({encapsulation:0,styles:[[""]],data:{}});function s(l){return a.eb(0,[(l()(),a.Na(0,0,null,null,0,"i",[],[[8,"className",0]],null,null,null,null))],null,function(l,n){l(n,0,0,n.component.icon)})}function b(l){return a.eb(0,[(l()(),a.Na(0,0,null,null,1,"span",[["class","separator"]],null,null,null,null,null)),(l()(),a.db(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.separator)})}function d(l){return a.eb(2,[(l()(),a.Na(0,0,null,null,6,"li",[],[[8,"className",0],[8,"id",0]],null,null,null,null)),(l()(),a.Ea(16777216,null,null,1,null,s)),a.Ma(2,16384,null,0,o.j,[a.M,a.J],{ngIf:[0,"ngIf"]},null),(l()(),a.Na(3,0,null,null,1,"a",[],[[8,"href",4]],null,null,null,null)),a.Wa(null,0),(l()(),a.Ea(16777216,null,null,1,null,b)),a.Ma(6,16384,null,0,o.j,[a.M,a.J],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.icon),l(n,6,0,!u.isLast)},function(l,n){var u=n.component;l(n,0,0,u.breadcrumbClass,u.id),l(n,3,0,u.link)})}var m=u("f4cM"),p=a.La({encapsulation:0,styles:[[""]],data:{}});function h(l){return a.eb(2,[(l()(),a.Na(0,0,null,null,3,"nav",[["aria-label","breadcrumb"],["class","breadcrumb-container"]],[[8,"id",0]],null,null,null,null)),(l()(),a.Na(1,0,null,null,2,"ol",[],null,null,null,null,null)),a.Ma(2,278528,null,0,o.h,[a.q,a.r,a.k,a.B],{ngClass:[0,"ngClass"]},null),a.Wa(null,0)],function(l,n){l(n,2,0,n.component.breadcrumbClass)},function(l,n){l(n,0,0,n.component.id)})}var g=u("Xhfm"),v=u("A82G"),f=u("gIcY"),k=u("R3mp"),N=u("0zsg"),C=u("7LHO"),M=function(){function l(){this._icon="it-favorite",this.separator="/",this.isDark=!0,this.items=[{link:"https://www.aol.com",label:"Crumb 1",icon:this.icon},{link:"https://www.yahoo.com",label:"Crumb 2",icon:this.icon},{link:"https://www.bing.com",label:"Crumb 3",icon:this.icon}],this.i=4}return Object.defineProperty(l.prototype,"icon",{get:function(){return this._icon},set:function(l){var n=this;this._icon=l,this.items.forEach(function(l){return l.icon=n._icon})},enumerable:!0,configurable:!0}),l.prototype.insert=function(){this.items.push({link:"https://www.google.com",label:"Crumb "+this.i,icon:this.icon}),this.i++},l.prototype.remove=function(){this.items.pop(),this.i--},l.prototype.change=function(){this.separator="/"===this.separator?">":"/",this.items.forEach(function(l){l.icon="it-favorite"===l.icon?"it-lock":"it-favorite"})},l.prototype.toggle=function(){this.isDark=!this.isDark},l}(),y=a.La({encapsulation:0,styles:[[""]],data:{}});function w(l){return a.eb(0,[(l()(),a.Na(0,0,null,null,2,"it-breadcrumb-item",[],null,null,null,d,c)),a.Ma(1,49152,[[1,4]],0,r.a,[a.h,a.k],{link:[0,"link"],icon:[1,"icon"]},null),(l()(),a.db(2,0,[" "," "]))],function(l,n){l(n,1,0,n.context.$implicit.link,n.context.$implicit.icon)},function(l,n){l(n,2,0,n.context.$implicit.label)})}function x(l){return a.eb(0,[(l()(),a.Na(0,0,null,null,55,"div",[["class","card w-100 mt-2"]],null,null,null,null,null)),(l()(),a.Na(1,0,null,null,54,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),a.Na(2,0,null,null,1,"h4",[["class","card-title"]],null,null,null,null,null)),(l()(),a.db(-1,null,["Esempio Breadcrumb"])),(l()(),a.Na(4,0,null,null,51,"div",[["class","card-text"]],null,null,null,null,null)),(l()(),a.Na(5,0,null,null,4,"it-breadcrumb",[],null,null,null,h,p)),a.Ma(6,1753088,null,1,m.a,[],{dark:[0,"dark"],separator:[1,"separator"]},null),a.bb(603979776,1,{_items:1}),(l()(),a.Ea(16777216,null,0,1,null,w)),a.Ma(9,278528,null,0,o.i,[a.M,a.J,a.q],{ngForOf:[0,"ngForOf"]},null),(l()(),a.Na(10,0,null,null,45,"div",[["class","row"]],null,null,null,null,null)),(l()(),a.Na(11,0,null,null,12,"div",[["class","form-check col-4"]],null,null,null,null,null)),(l()(),a.Na(12,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),a.db(-1,null,["Azioni"])),(l()(),a.Na(14,0,null,null,5,"it-checkbox",[["id","dark-checkbox"],["label","Sfondo scuro"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var a=!0;return"ngModelChange"===n&&(a=!1!==(l.component.isDark=u)&&a),a},g.b,g.a)),a.Ma(15,49152,null,0,v.a,[a.h],{label:[0,"label"]},null),a.ab(1024,null,f.g,function(l){return[l]},[v.a]),a.Ma(17,671744,null,0,f.j,[[8,null],[8,null],[8,null],[6,f.g]],{model:[0,"model"]},{update:"ngModelChange"}),a.ab(2048,null,f.h,null,[f.j]),a.Ma(19,16384,null,0,f.i,[[4,f.h]],null,null),(l()(),a.Na(20,0,null,null,1,"button",[["class","btn btn-primary btn-lg btn-block"],["id","add-button"],["type","button"]],null,[[null,"click"]],function(l,n,u){var a=!0;return"click"===n&&(a=!1!==l.component.insert()&&a),a},null,null)),(l()(),a.db(-1,null,["Aggiungi breadcrumb"])),(l()(),a.Na(22,0,null,null,1,"button",[["class","btn btn-primary btn-lg btn-block"],["id","remove-button"],["type","button"]],null,[[null,"click"]],function(l,n,u){var a=!0;return"click"===n&&(a=!1!==l.component.remove()&&a),a},null,null)),(l()(),a.db(-1,null,["Rimuovi breadcrumb"])),(l()(),a.Na(24,0,null,null,15,"div",[["class","form-check col-3"]],null,null,null,null,null)),(l()(),a.Na(25,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),a.db(-1,null,["Separatore"])),(l()(),a.Na(27,0,null,null,12,"it-radio-group",[],[[1,"role",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var a=!0;return"ngModelChange"===n&&(a=!1!==(l.component.separator=u)&&a),a},null,null)),a.Ma(28,1064960,null,1,k.b,[a.h],null,null),a.bb(603979776,2,{_radios:1}),a.ab(1024,null,f.g,function(l){return[l]},[k.b]),a.Ma(31,671744,null,0,f.j,[[8,null],[8,null],[8,null],[6,f.g]],{model:[0,"model"]},{update:"ngModelChange"}),a.ab(2048,null,f.h,null,[f.j]),a.Ma(33,16384,null,0,f.i,[[4,f.h]],null,null),(l()(),a.Na(34,0,null,null,1,"it-radio-button",[["id","radio-sl"],["label","/"],["name","sl"],["value","/"]],null,null,null,N.b,N.a)),a.Ma(35,245760,[[2,4]],0,k.a,[[2,k.b],a.h,C.a],{name:[0,"name"],label:[1,"label"],value:[2,"value"]},null),(l()(),a.Na(36,0,null,null,1,"it-radio-button",[["id","radio-gt"],["label",">"],["name","gt"],["value",">"]],null,null,null,N.b,N.a)),a.Ma(37,245760,[[2,4]],0,k.a,[[2,k.b],a.h,C.a],{name:[0,"name"],label:[1,"label"],value:[2,"value"]},null),(l()(),a.Na(38,0,null,null,1,"it-radio-button",[["id","radio-tl"],["label","~"],["name","tl"],["value","~"]],null,null,null,N.b,N.a)),a.Ma(39,245760,[[2,4]],0,k.a,[[2,k.b],a.h,C.a],{name:[0,"name"],label:[1,"label"],value:[2,"value"]},null),(l()(),a.Na(40,0,null,null,15,"div",[["class","form-check col-5"]],null,null,null,null,null)),(l()(),a.Na(41,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),a.db(-1,null,["Icona"])),(l()(),a.Na(43,0,null,null,12,"it-radio-group",[],[[1,"role",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var a=!0;return"ngModelChange"===n&&(a=!1!==(l.component.icon=u)&&a),a},null,null)),a.Ma(44,1064960,null,1,k.b,[a.h],null,null),a.bb(603979776,3,{_radios:1}),a.ab(1024,null,f.g,function(l){return[l]},[k.b]),a.Ma(47,671744,null,0,f.j,[[8,null],[8,null],[8,null],[6,f.g]],{model:[0,"model"]},{update:"ngModelChange"}),a.ab(2048,null,f.h,null,[f.j]),a.Ma(49,16384,null,0,f.i,[[4,f.h]],null,null),(l()(),a.Na(50,0,null,null,1,"it-radio-button",[["id","radio-none"],["label","Nessuna"],["name","none"]],null,null,null,N.b,N.a)),a.Ma(51,245760,[[3,4]],0,k.a,[[2,k.b],a.h,C.a],{name:[0,"name"],label:[1,"label"],value:[2,"value"]},null),(l()(),a.Na(52,0,null,null,1,"it-radio-button",[["id","radio-favorite"],["label","it-favorite"],["name","it-favorite"],["value","it-favorite"]],null,null,null,N.b,N.a)),a.Ma(53,245760,[[3,4]],0,k.a,[[2,k.b],a.h,C.a],{name:[0,"name"],label:[1,"label"],value:[2,"value"]},null),(l()(),a.Na(54,0,null,null,1,"it-radio-button",[["id","radio-link"],["label","it-link"],["name","it-link"],["value","it-link"]],null,null,null,N.b,N.a)),a.Ma(55,245760,[[3,4]],0,k.a,[[2,k.b],a.h,C.a],{name:[0,"name"],label:[1,"label"],value:[2,"value"]},null)],function(l,n){var u=n.component;l(n,6,0,u.isDark,u.separator),l(n,9,0,u.items),l(n,15,0,"Sfondo scuro"),l(n,17,0,u.isDark),l(n,31,0,u.separator),l(n,35,0,"sl","/","/"),l(n,37,0,"gt",">",">"),l(n,39,0,"tl","~","~"),l(n,47,0,u.icon),l(n,51,0,"none","Nessuna",void 0),l(n,53,0,"it-favorite","it-favorite","it-favorite"),l(n,55,0,"it-link","it-link","it-link")},function(l,n){l(n,14,0,a.Xa(n,19).ngClassUntouched,a.Xa(n,19).ngClassTouched,a.Xa(n,19).ngClassPristine,a.Xa(n,19).ngClassDirty,a.Xa(n,19).ngClassValid,a.Xa(n,19).ngClassInvalid,a.Xa(n,19).ngClassPending),l(n,27,0,a.Xa(n,28).role,a.Xa(n,33).ngClassUntouched,a.Xa(n,33).ngClassTouched,a.Xa(n,33).ngClassPristine,a.Xa(n,33).ngClassDirty,a.Xa(n,33).ngClassValid,a.Xa(n,33).ngClassInvalid,a.Xa(n,33).ngClassPending),l(n,43,0,a.Xa(n,44).role,a.Xa(n,49).ngClassUntouched,a.Xa(n,49).ngClassTouched,a.Xa(n,49).ngClassPristine,a.Xa(n,49).ngClassDirty,a.Xa(n,49).ngClassValid,a.Xa(n,49).ngClassInvalid,a.Xa(n,49).ngClassPending)})}var I=u("xh2N"),X=u("HiJM"),D=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),E=a.La({encapsulation:0,styles:[[""]],data:{}});function V(l){return a.eb(0,[(l()(),a.Na(0,0,null,null,1,"it-breadcrumb-example",[],null,null,null,x,y)),a.Ma(1,49152,null,0,M,[],null,null),(l()(),a.Na(2,0,null,null,1,"it-source-display",[["html",'\n  <div class="card w-100 mt-2">\n  <div class="card-body">\n    <h4 class="card-title">Esempio Breadcrumb</h4>\n\n    <div class="card-text">\n      <it-breadcrumb [dark]="isDark" [separator]="separator">\n        <it-breadcrumb-item *ngFor="let item of items"\n          [link]="item.link" [icon]="item.icon">\n          /{/{item.label/}/}\n        </it-breadcrumb-item>\n      </it-breadcrumb>\n\n      <div class="row">\n        <div class="form-check col-4">\n          <h5>Azioni</h5>\n          <it-checkbox [(ngModel)]="isDark" label="Sfondo scuro" id="dark-checkbox"></it-checkbox>\n          <button type="button" id="add-button" class="btn btn-primary btn-lg btn-block" (click)="insert()">Aggiungi breadcrumb</button>\n          <button type="button" id="remove-button" class="btn btn-primary btn-lg btn-block" (click)="remove()">Rimuovi breadcrumb</button>\n        </div>\n        <div class="form-check col-3">\n          <h5>Separatore</h5>\n          <it-radio-group [(ngModel)]="separator">\n            <it-radio-button id="radio-sl" name="sl" value="/" label="/"></it-radio-button>\n            <it-radio-button id="radio-gt" name="gt" value=">" label=">"></it-radio-button>\n            <it-radio-button id="radio-tl" name="tl" value="~" label="~"></it-radio-button>\n          </it-radio-group>\n        </div>\n        <div class="form-check col-5">\n          <h5>Icona</h5>\n          <it-radio-group [(ngModel)]="icon">\n            <it-radio-button id="radio-none" name="none" [value]="undefined" label="Nessuna"></it-radio-button>\n            <it-radio-button id="radio-favorite" name="it-favorite" value="it-favorite" label="it-favorite"></it-radio-button>\n            <it-radio-button id="radio-link" name="it-link" value="it-link" label="it-link"></it-radio-button>\n          </it-radio-group>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'],["typescript","\n  import { Component, ChangeDetectionStrategy } from '@angular/core';\n\n@Component({\n  selector: 'it-breadcrumb-example',\n  templateUrl: './breadcrumb-example.component.html',\n  styleUrls: ['./breadcrumb-example.component.scss']\n})\nexport class BreadcrumbExampleComponent {\n  get icon() {\n    return this._icon;\n  }\n  set icon(value: string) {\n    this._icon = value;\n    this.items.forEach(item => item.icon = this._icon);\n  }\n  private _icon = 'it-favorite';\n\n\n  separator = '/';\n  isDark = true;\n  items = [\n    { link: 'https://www.aol.com', label: 'Crumb 1', icon: this.icon },\n    { link: 'https://www.yahoo.com', label: 'Crumb 2', icon: this.icon },\n    { link: 'https://www.bing.com', label: 'Crumb 3', icon: this.icon },\n  ];\n\n  i = 4;\n\n  insert() {\n    this.items.push({ link: `https://www.google.com`, label: `Crumb ${this.i}`, icon: this.icon });\n    this.i++;\n  }\n\n  remove() {\n    this.items.pop();\n    this.i--;\n  }\n\n  change() {\n    this.separator = this.separator === '/' ? '>' : '/';\n    this.items.forEach(item => {\n      item.icon = item.icon === 'it-favorite' ? 'it-lock' : 'it-favorite';\n    });\n  }\n\n  toggle() {\n    this.isDark = !this.isDark;\n  }\n\n}\n\n"]],null,null,null,I.b,I.a)),a.Ma(3,114688,null,0,X.a,[],{html:[0,"html"],typescript:[1,"typescript"]},null)],function(l,n){l(n,3,0,'\n  <div class="card w-100 mt-2">\n  <div class="card-body">\n    <h4 class="card-title">Esempio Breadcrumb</h4>\n\n    <div class="card-text">\n      <it-breadcrumb [dark]="isDark" [separator]="separator">\n        <it-breadcrumb-item *ngFor="let item of items"\n          [link]="item.link" [icon]="item.icon">\n          /{/{item.label/}/}\n        </it-breadcrumb-item>\n      </it-breadcrumb>\n\n      <div class="row">\n        <div class="form-check col-4">\n          <h5>Azioni</h5>\n          <it-checkbox [(ngModel)]="isDark" label="Sfondo scuro" id="dark-checkbox"></it-checkbox>\n          <button type="button" id="add-button" class="btn btn-primary btn-lg btn-block" (click)="insert()">Aggiungi breadcrumb</button>\n          <button type="button" id="remove-button" class="btn btn-primary btn-lg btn-block" (click)="remove()">Rimuovi breadcrumb</button>\n        </div>\n        <div class="form-check col-3">\n          <h5>Separatore</h5>\n          <it-radio-group [(ngModel)]="separator">\n            <it-radio-button id="radio-sl" name="sl" value="/" label="/"></it-radio-button>\n            <it-radio-button id="radio-gt" name="gt" value=">" label=">"></it-radio-button>\n            <it-radio-button id="radio-tl" name="tl" value="~" label="~"></it-radio-button>\n          </it-radio-group>\n        </div>\n        <div class="form-check col-5">\n          <h5>Icona</h5>\n          <it-radio-group [(ngModel)]="icon">\n            <it-radio-button id="radio-none" name="none" [value]="undefined" label="Nessuna"></it-radio-button>\n            <it-radio-button id="radio-favorite" name="it-favorite" value="it-favorite" label="it-favorite"></it-radio-button>\n            <it-radio-button id="radio-link" name="it-link" value="it-link" label="it-link"></it-radio-button>\n          </it-radio-group>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n',"\n  import { Component, ChangeDetectionStrategy } from '@angular/core';\n\n@Component({\n  selector: 'it-breadcrumb-example',\n  templateUrl: './breadcrumb-example.component.html',\n  styleUrls: ['./breadcrumb-example.component.scss']\n})\nexport class BreadcrumbExampleComponent {\n  get icon() {\n    return this._icon;\n  }\n  set icon(value: string) {\n    this._icon = value;\n    this.items.forEach(item => item.icon = this._icon);\n  }\n  private _icon = 'it-favorite';\n\n\n  separator = '/';\n  isDark = true;\n  items = [\n    { link: 'https://www.aol.com', label: 'Crumb 1', icon: this.icon },\n    { link: 'https://www.yahoo.com', label: 'Crumb 2', icon: this.icon },\n    { link: 'https://www.bing.com', label: 'Crumb 3', icon: this.icon },\n  ];\n\n  i = 4;\n\n  insert() {\n    this.items.push({ link: `https://www.google.com`, label: `Crumb ${this.i}`, icon: this.icon });\n    this.i++;\n  }\n\n  remove() {\n    this.items.pop();\n    this.i--;\n  }\n\n  change() {\n    this.separator = this.separator === '/' ? '>' : '/';\n    this.items.forEach(item => {\n      item.icon = item.icon === 'it-favorite' ? 'it-lock' : 'it-favorite';\n    });\n  }\n\n  toggle() {\n    this.isDark = !this.isDark;\n  }\n\n}\n\n")},null)}var B=u("dxD6"),_=function(){return function(){this.component=B.a.find(function(l){return"BreadcrumbComponent"===l.name}),this.subcomponent=B.a.find(function(l){return"BreadcrumbItemComponent"===l.name})}}(),j=a.La({encapsulation:0,styles:[[""]],data:{}});function J(l){return a.eb(0,[(l()(),a.Na(0,0,null,null,14,"div",[],null,null,null,null,null)),(l()(),a.Na(1,0,null,null,13,"table",[["class","table table-bordered table-sm"]],null,null,null,null,null)),(l()(),a.Na(2,0,null,null,12,"tbody",[],null,null,null,null,null)),(l()(),a.Na(3,0,null,null,9,"tr",[],null,null,null,null,null)),(l()(),a.Na(4,0,null,null,2,"td",[["style","width: 20%"]],null,null,null,null,null)),(l()(),a.Na(5,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),a.db(6,null,["",""])),(l()(),a.Na(7,0,null,null,5,"td",[["style","width: 80%"]],null,null,null,null,null)),(l()(),a.Na(8,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),a.Na(9,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),a.db(-1,null,["Tipo: "])),(l()(),a.Na(11,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),a.db(12,null,["",""])),(l()(),a.Na(13,0,null,null,1,"tr",[],null,null,null,null,null)),(l()(),a.Na(14,0,null,null,0,"td",[["class","col-md-2"],["colspan","2"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,6,0,n.context.$implicit.name),l(n,12,0,n.context.$implicit.type),l(n,14,0,n.context.$implicit.description)})}function O(l){return a.eb(0,[(l()(),a.Na(0,0,null,null,6,"div",[],null,null,null,null,null)),(l()(),a.Na(1,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),a.db(-1,null,["Breadcrumb"])),(l()(),a.Na(3,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.db(-1,null,["Input"])),(l()(),a.Ea(16777216,null,null,1,null,J)),a.Ma(6,278528,null,0,o.i,[a.M,a.J,a.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,6,0,n.component.component.inputsClass)},null)}function $(l){return a.eb(0,[(l()(),a.Na(0,0,null,null,14,"div",[],null,null,null,null,null)),(l()(),a.Na(1,0,null,null,13,"table",[["class","table table-bordered table-sm"]],null,null,null,null,null)),(l()(),a.Na(2,0,null,null,12,"tbody",[],null,null,null,null,null)),(l()(),a.Na(3,0,null,null,9,"tr",[],null,null,null,null,null)),(l()(),a.Na(4,0,null,null,2,"td",[["style","width: 20%"]],null,null,null,null,null)),(l()(),a.Na(5,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),a.db(6,null,["",""])),(l()(),a.Na(7,0,null,null,5,"td",[["style","width: 80%"]],null,null,null,null,null)),(l()(),a.Na(8,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),a.Na(9,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),a.db(-1,null,["Tipo: "])),(l()(),a.Na(11,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),a.db(12,null,["",""])),(l()(),a.Na(13,0,null,null,1,"tr",[],null,null,null,null,null)),(l()(),a.Na(14,0,null,null,0,"td",[["class","col-md-2"],["colspan","2"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,6,0,n.context.$implicit.name),l(n,12,0,n.context.$implicit.type),l(n,14,0,n.context.$implicit.description)})}function L(l){return a.eb(0,[(l()(),a.Na(0,0,null,null,6,"div",[],null,null,null,null,null)),(l()(),a.Na(1,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),a.db(-1,null,["Breadcrumb Item"])),(l()(),a.Na(3,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.db(-1,null,["Input"])),(l()(),a.Ea(16777216,null,null,1,null,$)),a.Ma(6,278528,null,0,o.i,[a.M,a.J,a.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,6,0,n.component.subcomponent.inputsClass)},null)}function P(l){return a.eb(0,[(l()(),a.Na(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),a.Na(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.db(-1,null,["Output"]))],null,null)}function S(l){return a.eb(0,[(l()(),a.Na(0,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),a.db(-1,null,["Breadcrumb"])),(l()(),a.Na(2,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),a.db(-1,null,["Il componente Breadcrumb utilizzabile per la navigazione"])),(l()(),a.Na(4,0,null,null,9,"ul",[["class","nav nav-tabs"],["id","breadcrumb-tab"],["role","tablist"]],null,null,null,null,null)),(l()(),a.Na(5,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),a.Na(6,0,null,null,1,"a",[["aria-controls","breadcrumb-description-tab-content"],["aria-selected","true"],["class","nav-link active"],["data-toggle","tab"],["href","#breadcrumb-description-tab-content"],["id","breadcrumb-description-tab"],["role","tab"]],null,null,null,null,null)),(l()(),a.db(-1,null,["Descrizione"])),(l()(),a.Na(8,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),a.Na(9,0,null,null,1,"a",[["aria-controls","breadcrumb-api-tab-content"],["aria-selected","false"],["class","nav-link"],["data-toggle","tab"],["href","#breadcrumb-api-tab-content"],["id","breadcrumb-api-tab"],["role","tab"]],null,null,null,null,null)),(l()(),a.db(-1,null,["API"])),(l()(),a.Na(11,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),a.Na(12,0,null,null,1,"a",[["aria-controls","breadcrumb-examples-tab-content"],["aria-selected","false"],["class","nav-link"],["data-toggle","tab"],["href","#breadcrumb-examples-tab-content"],["id","breadcrumb-examples-tab"],["role","tab"]],null,null,null,null,null)),(l()(),a.db(-1,null,["Esempi"])),(l()(),a.Na(14,0,null,null,12,"div",[["class","tab-content"],["id","breadcrumb-content-tab"]],null,null,null,null,null)),(l()(),a.Na(15,0,null,null,1,"div",[["aria-labelledby","breadcrumb-description-tab-content"],["class","tab-pane p-3 fade show active"],["id","breadcrumb-description-tab-content"],["role","tabpanel"]],null,null,null,null,null)),(l()(),a.Na(16,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),a.Na(17,0,null,null,6,"div",[["aria-labelledby","breadcrumb-api-tab-content"],["class","tab-pane p-3 fade"],["id","breadcrumb-api-tab-content"],["role","tabpanel"]],null,null,null,null,null)),(l()(),a.Ea(16777216,null,null,1,null,O)),a.Ma(19,16384,null,0,o.j,[a.M,a.J],{ngIf:[0,"ngIf"]},null),(l()(),a.Ea(16777216,null,null,1,null,L)),a.Ma(21,16384,null,0,o.j,[a.M,a.J],{ngIf:[0,"ngIf"]},null),(l()(),a.Ea(16777216,null,null,1,null,P)),a.Ma(23,16384,null,0,o.j,[a.M,a.J],{ngIf:[0,"ngIf"]},null),(l()(),a.Na(24,0,null,null,2,"div",[["aria-labelledby","breadcrumb-examples-tab-content"],["class","tab-pane p-3 fade"],["id","breadcrumb-examples-tab-content"],["role","tabpanel"]],null,null,null,null,null)),(l()(),a.Na(25,0,null,null,1,"it-breadcrumb-examples",[],null,null,null,V,E)),a.Ma(26,114688,null,0,D,[],null,null)],function(l,n){var u=n.component;l(n,19,0,u.component.inputsClass.length>0),l(n,21,0,u.subcomponent.inputsClass.length>0),l(n,23,0,u.component.outputsClass.length>0),l(n,26,0)},function(l,n){l(n,16,0,n.component.component.description)})}var F=a.Ja("it-breadcrumb-index",_,function(l){return a.eb(0,[(l()(),a.Na(0,0,null,null,1,"it-breadcrumb-index",[],null,null,null,S,j)),a.Ma(1,49152,null,0,_,[],null,null)],null,null)},{},{},[]),z=u("OQP5"),A=u("RyqK"),T=u("PCNd"),U=u("ZYCi"),q=function(){};u.d(n,"BreadcrumbModuleNgFactory",function(){return H});var H=a.Ka(t,[],function(l){return a.Ua([a.Va(512,a.j,a.Z,[[8,[i.a,e.a,F]],[3,a.j],a.v]),a.Va(4608,o.l,o.k,[a.s,[2,o.t]]),a.Va(4608,f.n,f.n,[]),a.Va(5120,z.b,z.d,[z.e]),a.Va(1073742336,o.b,o.b,[]),a.Va(1073742336,f.l,f.l,[]),a.Va(1073742336,f.f,f.f,[]),a.Va(1073742336,A.a,A.a,[]),a.Va(1073742336,z.c,z.c,[]),a.Va(1073742336,T.a,T.a,[]),a.Va(1073742336,U.n,U.n,[[2,U.t],[2,U.k]]),a.Va(1073742336,q,q,[]),a.Va(1073742336,t,t,[]),a.Va(256,z.e,{theme:"agate"},[]),a.Va(1024,U.i,function(){return[[{path:"",component:_}]]},[])])})}}]);