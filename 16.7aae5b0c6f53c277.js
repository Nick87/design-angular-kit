"use strict";(self.webpackChunkdesign_angular_kit_bundle=self.webpackChunkdesign_angular_kit_bundle||[]).push([[16],{8016:(k,m,o)=>{o.r(m),o.d(m,{ToggleModule:()=>g});var h=o(6895),d=o(4006),x=o(1797),r=o(300),b=o(7069),e=o(8274),T=o(8340),f=o(5792),C=o(2717),M=o(6242),Z=o(7417);class i{constructor(){this.checked=!0,this.label="Sono una toggle",this.disabled=!1}ngOnInit(){}}i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["it-toggle-example"]],decls:10,vars:5,consts:[[1,"bd-example"],[1,"example-section"],["id","toggle-spuntato","label","Spuntato","toggle","true",3,"ngModel","ngModelChange"],["id","toggle-disabilitato","label","Disabilitato","toggle","true",3,"ngModel","ngModelChange"],["id","toggle-example","toggle","true",3,"ngModel","label","disabled","ngModelChange"]],template:function(n,l){1&n&&(e.TgZ(0,"h3"),e._uU(1,"Configurazione toggle"),e.qZA(),e.TgZ(2,"div",0)(3,"p",1)(4,"it-checkbox",2),e.NdJ("ngModelChange",function(p){return l.checked=p}),e.qZA(),e.TgZ(5,"it-checkbox",3),e.NdJ("ngModelChange",function(p){return l.disabled=p}),e.qZA()(),e.TgZ(6,"h4"),e._uU(7,"Risultato"),e.qZA(),e.TgZ(8,"p",1)(9,"it-checkbox",4),e.NdJ("ngModelChange",function(p){return l.checked=p}),e.qZA()()()),2&n&&(e.xp6(4),e.Q6J("ngModel",l.checked),e.xp6(1),e.Q6J("ngModel",l.disabled),e.xp6(4),e.Q6J("ngModel",l.checked)("label",l.label)("disabled",l.disabled))},dependencies:[d.JJ,d.On,Z.b],styles:[".example-section[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;height:60px}"]});class c{constructor(){}ngOnInit(){}}c.\u0275fac=function(n){return new(n||c)},c.\u0275cmp=e.Xpm({type:c,selectors:[["it-toggle-examples"]],decls:2,vars:0,consts:[["html",'<h3>Configurazione toggle</h3>\n<div class="bd-example">\n  <p class="example-section">\n    <it-checkbox id="toggle-spuntato" [(ngModel)]="checked" label="Spuntato" toggle="true"></it-checkbox>\n    <it-checkbox id="toggle-disabilitato" [(ngModel)]="disabled" label="Disabilitato" toggle="true"></it-checkbox>\n  </p>\n\n  <h4>Risultato</h4>\n  <p class="example-section">\n    <it-checkbox id="toggle-example" [(ngModel)]="checked" [label]="label" [disabled]="disabled"\n                 toggle="true"></it-checkbox>\n  </p>\n</div>',"typescript","import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'it-toggle-example',\n  templateUrl: './toggle-example.component.html',\n  styleUrls: ['./toggle-example.component.scss']\n})\nexport class ToggleExampleComponent implements OnInit {\n\n  checked = true;\n  label = 'Sono una toggle';\n  disabled = false;\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}"]],template:function(n,l){1&n&&e._UZ(0,"it-toggle-example")(1,"it-source-display",0)},dependencies:[M.F,i]});class s{constructor(){this.component=b.wx.find(n=>"CheckboxComponent"===n.name)}ngOnInit(){}}s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["it-toggle-index"]],decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["id","example","label","Esempi","active","true",1,"pt-3"],["id","api","label","API",1,"pt-3"],[3,"component"]],template:function(n,l){1&n&&(e.TgZ(0,"h1",0),e._uU(1,"Toggle"),e.qZA(),e.TgZ(2,"p",1),e._uU(3,"Il componente Toggle utilizzabile in un form"),e.qZA(),e._UZ(4,"div",2),e.TgZ(5,"it-tab-container")(6,"it-tab-item",3),e._UZ(7,"it-toggle-examples"),e.qZA(),e.TgZ(8,"it-tab-item",4),e._UZ(9,"it-api-parameters",5),e.qZA()()),2&n&&(e.xp6(4),e.Q6J("innerHTML",l.component.description,e.oJD),e.xp6(5),e.Q6J("component",l.component))},dependencies:[T.G,f.H,C.D,c]});const v=[{path:"",component:s}];class a{}a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[r.Bz.forChild(v),r.Bz]});class g{}g.\u0275fac=function(n){return new(n||g)},g.\u0275mod=e.oAB({type:g}),g.\u0275inj=e.cJS({imports:[h.ez,d.u5,x.m,a]})}}]);