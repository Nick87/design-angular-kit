"use strict";(self.webpackChunkdesign_angular_kit_bundle=self.webpackChunkdesign_angular_kit_bundle||[]).push([[52],{5052:(E,u,a)=>{a.r(u),a.d(u,{DropdownModule:()=>r});var c=a(6895),h=a(7715),b=a(7069),n=a(8274),M=a(8340),_=a(5792),C=a(2717),f=a(6242),w=a(3777),v=a(1132),D=a(7417),Z=a(3512),s=a(4006);function T(i,t){1&i&&(n.TgZ(0,"span",32),n._uU(1,"Intestazione Menu"),n.qZA())}function k(i,t){1&i&&n._UZ(0,"it-dropdown-item",33)}function x(i,t){if(1&i&&(n.TgZ(0,"it-dropdown-item",34),n._uU(1),n.qZA()),2&i){const e=t.$implicit;n.Q6J("href",e.link)("active",e.active)("disabled",e.disabled)("large",e.large)("iconName",e.icon)("iconPosition",e.iconPosition),n.xp6(1),n.hij(" ",e.text," ")}}class p{constructor(){this.label="Click me",this.isDark=!1,this.isFullWidth=!1,this.withHeading=!0,this.items=[{link:"https://www.google.com",active:!1,disabled:!1,large:!0,icon:"star-outline",iconPosition:"right",text:"Item 1"},{link:"https://www.google.com",active:!1,disabled:!0,large:!1,icon:"link",iconPosition:"right",text:"Item 2"},{link:"https://www.google.com",active:!0,disabled:!1,large:!0,icon:void 0,iconPosition:"right",text:"Item 3"}],this.openTime="",this.closeTime=""}onOpenEvent(){this.openTime=(new Date).toISOString()}onCloseEvent(){this.closeTime=(new Date).toISOString()}}p.\u0275fac=function(t){return new(t||p)},p.\u0275cmp=n.Xpm({type:p,selectors:[["it-dropdown-example"]],decls:50,vars:31,consts:[[1,"bd-example"],[1,"example-section"],["id","dropdown",3,"color","dark","direction","fullWidth"],["button",""],["listHeading","",4,"ngIf"],["list",""],["divider","true",4,"ngIf"],[3,"href","active","disabled","large","iconName","iconPosition",4,"ngFor","ngForOf"],[1,"row"],[1,"form-check","col-3"],["label","Disposizione orizzontale","id","fullwidth-checkbox",3,"ngModel","ngModelChange"],["label","Sfondo scuro","id","darktheme-checkbox",3,"ngModel","ngModelChange"],["label","Con intestazione","id","heading-checkbox",3,"ngModel","ngModelChange"],[1,"form-check","col-2"],["id","radio-default","name","default","label","Default",3,"ngModel","value","ngModelChange"],["id","radio-dropup","name","dropup","value","dropup","label","Dropup",3,"ngModel","ngModelChange"],["id","radio-dropstart","name","dropstart","value","dropstart","label","Dropstart",3,"ngModel","ngModelChange"],["id","radio-dropend","name","dropend","value","dropend","label","Dropend",3,"ngModel","ngModelChange"],["id","radio-click","name","clickMe","value","Click me","label","Click me",3,"ngModel","ngModelChange"],["id","radio-check","name","check","value","Check","label","Check",3,"ngModel","ngModelChange"],["id","radio-hello","name","hello","value","Hello world!","label","Hello world!",3,"ngModel","ngModelChange"],[1,"form-check","col-5"],[1,"form-check","col-4"],["id","radio-none","name","none","label","None",3,"ngModel","value","ngModelChange"],["id","radio-primary","name","primary","value","primary","label","Primary",3,"ngModel","ngModelChange"],["id","radio-secondary","name","secondary","value","secondary","label","Secondary",3,"ngModel","ngModelChange"],["id","radio-success","name","success","value","success","label","Success",3,"ngModel","ngModelChange"],["id","radio-warning","name","warning","value","warning","label","Warning",3,"ngModel","ngModelChange"],["id","radio-danger","name","danger","value","danger","label","Danger",3,"ngModel","ngModelChange"],["id","radio-info","name","info","value","info","label","Info",3,"ngModel","ngModelChange"],["id","radio-light","name","light","value","light","label","Light",3,"ngModel","ngModelChange"],["id","radio-dark","name","dark","value","dark","label","Dark",3,"ngModel","ngModelChange"],["listHeading",""],["divider","true"],[3,"href","active","disabled","large","iconName","iconPosition"]],template:function(t,e){1&t&&(n.TgZ(0,"h3"),n._uU(1,"Esempio Dropdown"),n.qZA(),n.TgZ(2,"div",0)(3,"p",1)(4,"it-dropdown",2)(5,"span",3),n._uU(6),n.qZA(),n.YNc(7,T,2,0,"span",4),n.ynx(8,5),n.YNc(9,k,1,0,"it-dropdown-item",6),n.YNc(10,x,2,7,"it-dropdown-item",7),n.BQk(),n.qZA()(),n.TgZ(11,"p",1),n._uU(12),n.qZA(),n.TgZ(13,"p",1),n._uU(14),n.qZA(),n.TgZ(15,"div",8)(16,"div",9)(17,"h5"),n._uU(18,"Opzioni"),n.qZA(),n.TgZ(19,"it-checkbox",10),n.NdJ("ngModelChange",function(o){return e.isFullWidth=o}),n.qZA(),n.TgZ(20,"it-checkbox",11),n.NdJ("ngModelChange",function(o){return e.isDark=o}),n.qZA(),n.TgZ(21,"it-checkbox",12),n.NdJ("ngModelChange",function(o){return e.withHeading=o}),n.qZA()(),n.TgZ(22,"div",13)(23,"h5"),n._uU(24,"Posizione menu"),n.qZA(),n.TgZ(25,"it-radio-button",14),n.NdJ("ngModelChange",function(o){return e.menuPlacement=o}),n.qZA(),n.TgZ(26,"it-radio-button",15),n.NdJ("ngModelChange",function(o){return e.menuPlacement=o}),n.qZA(),n.TgZ(27,"it-radio-button",16),n.NdJ("ngModelChange",function(o){return e.menuPlacement=o}),n.qZA(),n.TgZ(28,"it-radio-button",17),n.NdJ("ngModelChange",function(o){return e.menuPlacement=o}),n.qZA()(),n.TgZ(29,"div",13)(30,"h5"),n._uU(31,"Testo"),n.qZA(),n.TgZ(32,"it-radio-button",18),n.NdJ("ngModelChange",function(o){return e.label=o}),n.qZA(),n.TgZ(33,"it-radio-button",19),n.NdJ("ngModelChange",function(o){return e.label=o}),n.qZA(),n.TgZ(34,"it-radio-button",20),n.NdJ("ngModelChange",function(o){return e.label=o}),n.qZA()(),n.TgZ(35,"div",21)(36,"h5"),n._uU(37,"Colorazione"),n.qZA(),n.TgZ(38,"div",8)(39,"div",22)(40,"it-radio-button",23),n.NdJ("ngModelChange",function(o){return e.color=o}),n.qZA(),n.TgZ(41,"it-radio-button",24),n.NdJ("ngModelChange",function(o){return e.color=o}),n.qZA(),n.TgZ(42,"it-radio-button",25),n.NdJ("ngModelChange",function(o){return e.color=o}),n.qZA(),n.TgZ(43,"it-radio-button",26),n.NdJ("ngModelChange",function(o){return e.color=o}),n.qZA(),n.TgZ(44,"it-radio-button",27),n.NdJ("ngModelChange",function(o){return e.color=o}),n.qZA()(),n.TgZ(45,"div",21)(46,"it-radio-button",28),n.NdJ("ngModelChange",function(o){return e.color=o}),n.qZA(),n.TgZ(47,"it-radio-button",29),n.NdJ("ngModelChange",function(o){return e.color=o}),n.qZA(),n.TgZ(48,"it-radio-button",30),n.NdJ("ngModelChange",function(o){return e.color=o}),n.qZA(),n.TgZ(49,"it-radio-button",31),n.NdJ("ngModelChange",function(o){return e.color=o}),n.qZA()()()()()()),2&t&&(n.xp6(4),n.Q6J("color",e.color)("dark",e.isDark)("direction",e.menuPlacement)("fullWidth",e.isFullWidth),n.xp6(2),n.Oqu(e.label),n.xp6(1),n.Q6J("ngIf",e.withHeading),n.xp6(2),n.Q6J("ngIf",e.withHeading),n.xp6(1),n.Q6J("ngForOf",e.items),n.xp6(2),n.hij(" Open: ",e.openTime," "),n.xp6(2),n.hij(" Close: ",e.closeTime," "),n.xp6(5),n.Q6J("ngModel",e.isFullWidth),n.xp6(1),n.Q6J("ngModel",e.isDark),n.xp6(1),n.Q6J("ngModel",e.withHeading),n.xp6(4),n.Q6J("ngModel",e.menuPlacement)("value",void 0),n.xp6(1),n.Q6J("ngModel",e.menuPlacement),n.xp6(1),n.Q6J("ngModel",e.menuPlacement),n.xp6(1),n.Q6J("ngModel",e.menuPlacement),n.xp6(4),n.Q6J("ngModel",e.label),n.xp6(1),n.Q6J("ngModel",e.label),n.xp6(1),n.Q6J("ngModel",e.label),n.xp6(6),n.Q6J("ngModel",e.color)("value",void 0),n.xp6(1),n.Q6J("ngModel",e.color),n.xp6(1),n.Q6J("ngModel",e.color),n.xp6(1),n.Q6J("ngModel",e.color),n.xp6(1),n.Q6J("ngModel",e.color),n.xp6(2),n.Q6J("ngModel",e.color),n.xp6(1),n.Q6J("ngModel",e.color),n.xp6(1),n.Q6J("ngModel",e.color),n.xp6(1),n.Q6J("ngModel",e.color))},dependencies:[c.sg,c.O5,w.J,v.N,D.b,Z._,s.JJ,s.On]});class m{constructor(){}ngOnInit(){}}m.\u0275fac=function(t){return new(t||m)},m.\u0275cmp=n.Xpm({type:m,selectors:[["it-dropdown-examples"]],decls:2,vars:0,consts:[["html",'<h3>Esempio Dropdown</h3>\n<div class="bd-example">\n  <p class="example-section">\n    <it-dropdown\n      id="dropdown"\n      [color]="color"\n      [dark]="isDark"\n      [direction]="menuPlacement"\n      [fullWidth]="isFullWidth">\n      \x3c!--      (onOpen)="onOpenEvent()"--\x3e\n      \x3c!--      (onClose)="onCloseEvent()"--\x3e\n\n      <span button>/{/{label/}/}</span>\n      <span *ngIf="withHeading" listHeading>Intestazione Menu</span>\n\n      <ng-container list>\n        <it-dropdown-item *ngIf="withHeading" divider="true"></it-dropdown-item>\n\n        <it-dropdown-item *ngFor="let item of items"\n                          [href]="item.link"\n                          [active]="item.active"\n                          [disabled]="item.disabled"\n                          [large]="item.large"\n                          [iconName]="item.icon"\n                          [iconPosition]="item.iconPosition">\n          /{/{item.text/}/}\n        </it-dropdown-item>\n      </ng-container>\n\n    </it-dropdown>\n  </p>\n\n  <p class="example-section">\n    Open: /{/{openTime/}/}\n  </p>\n\n  <p class="example-section">\n    Close: /{/{closeTime/}/}\n  </p>\n\n  <div class="row">\n    <div class="form-check col-3">\n      <h5>Opzioni</h5>\n      <it-checkbox [(ngModel)]="isFullWidth" label="Disposizione orizzontale" id="fullwidth-checkbox"></it-checkbox>\n      <it-checkbox [(ngModel)]="isDark" label="Sfondo scuro" id="darktheme-checkbox"></it-checkbox>\n      <it-checkbox [(ngModel)]="withHeading" label="Con intestazione" id="heading-checkbox"></it-checkbox>\n    </div>\n    <div class="form-check col-2">\n      <h5>Posizione menu</h5>\n      <it-radio-button id="radio-default" name="default" [(ngModel)]="menuPlacement" [value]="undefined"\n                       label="Default"></it-radio-button>\n      <it-radio-button id="radio-dropup" name="dropup" [(ngModel)]="menuPlacement" value="dropup"\n                       label="Dropup"></it-radio-button>\n      <it-radio-button id="radio-dropstart" name="dropstart" [(ngModel)]="menuPlacement" value="dropstart"\n                       label="Dropstart"></it-radio-button>\n      <it-radio-button id="radio-dropend" name="dropend" [(ngModel)]="menuPlacement" value="dropend"\n                       label="Dropend"></it-radio-button>\n    </div>\n\n\n    <div class="form-check col-2">\n      <h5>Testo</h5>\n      <it-radio-button id="radio-click" name="clickMe" [(ngModel)]="label" value="Click me"\n                       label="Click me"></it-radio-button>\n      <it-radio-button id="radio-check" name="check" [(ngModel)]="label" value="Check" label="Check"></it-radio-button>\n      <it-radio-button id="radio-hello" name="hello" [(ngModel)]="label" value="Hello world!"\n                       label="Hello world!"></it-radio-button>\n    </div>\n\n    <div class="form-check col-5">\n      <h5>Colorazione</h5>\n      <div class="row">\n        <div class="form-check col-4">\n          <it-radio-button id="radio-none" name="none" [(ngModel)]="color" [value]="undefined"\n                           label="None"></it-radio-button>\n          <it-radio-button id="radio-primary" name="primary" [(ngModel)]="color" value="primary"\n                           label="Primary"></it-radio-button>\n          <it-radio-button id="radio-secondary" name="secondary" [(ngModel)]="color" value="secondary"\n                           label="Secondary"></it-radio-button>\n          <it-radio-button id="radio-success" name="success" [(ngModel)]="color" value="success"\n                           label="Success"></it-radio-button>\n          <it-radio-button id="radio-warning" name="warning" [(ngModel)]="color" value="warning"\n                           label="Warning"></it-radio-button>\n        </div>\n        <div class="form-check col-5">\n          <it-radio-button id="radio-danger" name="danger" [(ngModel)]="color" value="danger"\n                           label="Danger"></it-radio-button>\n          <it-radio-button id="radio-info" name="info" [(ngModel)]="color" value="info" label="Info"></it-radio-button>\n          <it-radio-button id="radio-light" name="light" [(ngModel)]="color" value="light"\n                           label="Light"></it-radio-button>\n          <it-radio-button id="radio-dark" name="dark" [(ngModel)]="color" value="dark" label="Dark"></it-radio-button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>',"typescript","import { Component } from '@angular/core';\nimport { ButtonColor, DropdownDirection } from '../../../../projects/design-angular-kit/src/lib/interfaces/core';\n\n@Component({\n  selector: 'it-dropdown-example',\n  templateUrl: './dropdown-example.component.html',\n  styleUrls: ['./dropdown-example.component.scss']\n})\nexport class DropdownExampleComponent {\n  color?: ButtonColor;\n  label = 'Click me';\n  isDark = false;\n  isFullWidth = false;\n  withHeading = true;\n\n  menuPlacement?: DropdownDirection;\n\n  items = [\n    {\n      link: 'https://www.google.com', active: false,\n      disabled: false, large: true,\n      icon: 'star-outline', iconPosition: 'right',\n      text: 'Item 1'\n    },\n    {\n      link: 'https://www.google.com', active: false,\n      disabled: true, large: false,\n      icon: 'link', iconPosition: 'right',\n      text: 'Item 2'\n    },\n    {\n      link: 'https://www.google.com', active: true,\n      disabled: false, large: true,\n      icon: undefined, iconPosition: 'right',\n      text: 'Item 3'\n    },\n  ];\n\n  openTime = '';\n  closeTime = '';\n\n  onOpenEvent() {\n    this.openTime = (new Date()).toISOString();\n  }\n\n  onCloseEvent() {\n    this.closeTime = (new Date()).toISOString();\n  }\n\n}"]],template:function(t,e){1&t&&n._UZ(0,"it-dropdown-example")(1,"it-source-display",0)},dependencies:[f.F,p]});class g{constructor(){this.component=b.wx.find(t=>"DropdownComponent"===t.name),this.subcomponent=b.wx.find(t=>"DropdownItemComponent"===t.name)}ngOnInit(){}}g.\u0275fac=function(t){return new(t||g)},g.\u0275cmp=n.Xpm({type:g,selectors:[["it-dropdown-index"]],decls:15,vars:3,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["id","example","label","Esempi","active","true",1,"pt-3"],["id","api","label","API",1,"pt-3"],[3,"component"]],template:function(t,e){1&t&&(n.TgZ(0,"h1",0),n._uU(1,"Dropdown"),n.qZA(),n.TgZ(2,"p",1),n._uU(3,"Il componente Dropdown per men\xf9 a tendina contestuali"),n.qZA(),n._UZ(4,"div",2),n.TgZ(5,"it-tab-container")(6,"it-tab-item",3),n._UZ(7,"it-dropdown-examples"),n.qZA(),n.TgZ(8,"it-tab-item",4)(9,"h2"),n._uU(10,"Dropdown"),n.qZA(),n._UZ(11,"it-api-parameters",5),n.TgZ(12,"h2"),n._uU(13,"Dropdown Item"),n.qZA(),n._UZ(14,"it-api-parameters",5),n.qZA()()),2&t&&(n.xp6(4),n.Q6J("innerHTML",e.component.description,n.oJD),n.xp6(7),n.Q6J("component",e.component),n.xp6(3),n.Q6J("component",e.subcomponent))},dependencies:[M.G,_.H,C.D,m]});const J=[{path:"",component:g}];class d{}d.\u0275fac=function(t){return new(t||d)},d.\u0275mod=n.oAB({type:d}),d.\u0275inj=n.cJS({imports:[h.Bz.forChild(J),h.Bz]});var A=a(1806);class r{}r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=n.oAB({type:r}),r.\u0275inj=n.cJS({imports:[c.ez,d,A.m,s.u5]})}}]);