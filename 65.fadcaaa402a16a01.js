"use strict";(self.webpackChunkdesign_angular_kit_bundle=self.webpackChunkdesign_angular_kit_bundle||[]).push([[65],{8065:(U,r,i)=>{i.r(r),i.d(r,{SelectModule:()=>F});var u=i(6814),s=i(6223),d=i(4244),m=i(1640),v=i(7069),e=i(2029),x=i(528),h=i(6273),g=i(4580),f=i(6099),a=i(1858);let b=(()=>{class t{constructor(){this.selectOptions=[{selected:!0,value:"",text:"Scegli un'opzione"},{value:1,text:"Opzione 1"},{value:2,text:"Opzione 2"},{value:3,text:"Opzione 3"}]}static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["it-select-disabled-example"]],decls:5,vars:1,consts:[[1,"bd-example"],[1,"example-section"],["id","disabled-select","label","Etichetta","disabled","true",3,"options"]],template:function(n,o){1&n&&(e.TgZ(0,"h3"),e._uU(1,"Select disabilitata"),e.qZA(),e.TgZ(2,"div",0)(3,"p",1),e._UZ(4,"it-select",2),e.qZA()()),2&n&&(e.xp6(4),e.Q6J("options",o.selectOptions))},dependencies:[a.D]})}return t})(),S=(()=>{class t{constructor(){this.selectedValue="",this.selectOptions=[{selected:!0,value:"",text:"Scegli un'opzione"}],this.selectGroups=[{label:"Gruppo 1",options:[{value:1,text:"Opzione 1"},{value:2,text:"Opzione 2"}]},{label:"Gruppo 2",options:[{value:3,text:"Opzione 3"},{value:4,text:"Opzione 4"}]}]}static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["it-select-group-example"]],decls:10,vars:4,consts:[[1,"bd-example"],[1,"example-section"],["id","group-select","label","Etichetta",3,"ngModel","groups","options","ngModelChange"],[1,"example-selected-value"]],template:function(n,o){1&n&&(e.TgZ(0,"h3"),e._uU(1,"Select con gruppi"),e.qZA(),e.TgZ(2,"div",0)(3,"p",1)(4,"it-select",2),e.NdJ("ngModelChange",function(p){return o.selectedValue=p}),e.qZA()(),e.TgZ(5,"h4"),e._uU(6,"Risultato"),e.qZA(),e.TgZ(7,"div",1)(8,"div",3),e._uU(9),e.qZA()()()),2&n&&(e.xp6(4),e.Q6J("ngModel",o.selectedValue)("groups",o.selectGroups)("options",o.selectOptions),e.xp6(5),e.hij("Valore selezionato: ",o.selectedValue,""))},dependencies:[s.JJ,s.On,a.D]})}return t})(),y=(()=>{class t{constructor(){this.selectedValue=null,this.selectOptions=[{value:2,text:"Opzione 2"},{value:3,text:"Opzione 3"}]}static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["it-select-example"]],decls:12,vars:4,consts:[[1,"bd-example"],[1,"example-section"],["id","default-select","label","Etichetta","defaultOption","Seleziona un elemento",3,"ngModel","options","ngModelChange"],[3,"value"],[1,"example-selected-value"]],template:function(n,o){1&n&&(e.TgZ(0,"h3"),e._uU(1,"Select"),e.qZA(),e.TgZ(2,"div",0)(3,"p",1)(4,"it-select",2),e.NdJ("ngModelChange",function(p){return o.selectedValue=p}),e.TgZ(5,"option",3),e._uU(6,"Opzione 1"),e.qZA()()(),e.TgZ(7,"h4"),e._uU(8,"Risultato"),e.qZA(),e.TgZ(9,"div",1)(10,"div",4),e._uU(11),e.qZA()()()),2&n&&(e.xp6(4),e.Q6J("ngModel",o.selectedValue)("options",o.selectOptions),e.xp6(1),e.Q6J("value",1),e.xp6(6),e.hij("Valore selezionato: ",o.selectedValue,""))},dependencies:[s.YN,s.Kr,s.JJ,s.On,a.D]})}return t})();var C=i(7463);function O(t,E){if(1&t&&(e.TgZ(0,"div",7),e._uU(1),e.qZA()),2&t){const l=e.oxw();e.xp6(1),e.hij("Salvato `",l.savedValue,"`")}}let Z=(()=>{class t{constructor(l){this._fb=l,this.options=[{value:null,text:"Seleziona un elemento",selected:!0}],this.value="",this.savedValue=void 0,this.myForm=this._fb.group({select:[null,s.kI.required]}),Array.from(Array(10).keys()).forEach(n=>{this.options.push({value:n,text:`Opzione ${n.toString()}`})})}save(l){this.savedValue=l.value.select}markAllAsTouched(){this.myForm.markAllAsTouched()}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(s.qu))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["it-select-formgroup-example"]],decls:11,vars:4,consts:[[1,"bd-example"],[3,"formGroup"],["formControlName","select",3,"options"],[1,"d-flex","justify-content-between"],["itButton","primary",3,"disabled","click"],["itButton","secondary","type","button",3,"click"],["class","mt-3",4,"ngIf"],[1,"mt-3"]],template:function(n,o){1&n&&(e.TgZ(0,"h3"),e._uU(1,"Interazione con Select dotato di validazione Model Driven"),e.qZA(),e.TgZ(2,"div",0)(3,"form",1),e._UZ(4,"it-select",2),e.TgZ(5,"div",3)(6,"button",4),e.NdJ("click",function(){return o.save(o.myForm)}),e._uU(7,"Salva"),e.qZA(),e.TgZ(8,"button",5),e.NdJ("click",function(){return o.markAllAsTouched()}),e._uU(9,"Valida"),e.qZA()(),e.YNc(10,O,2,1,"div",6),e.qZA()()),2&n&&(e.xp6(3),e.Q6J("formGroup",o.myForm),e.xp6(1),e.Q6J("options",o.options),e.xp6(2),e.Q6J("disabled",!o.myForm.valid),e.xp6(4),e.Q6J("ngIf",o.savedValue))},dependencies:[u.O5,s._Y,s.JJ,s.JL,s.sg,s.u,C.E,a.D],encapsulation:2})}return t})(),A=(()=>{class t{constructor(){}static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["it-select-examples"]],decls:8,vars:0,consts:[["html",'<h3>Select</h3>\n<div class="bd-example">\n  <p class="example-section">\n    <it-select\n      id="default-select"\n      label="Etichetta"\n      [(ngModel)]="selectedValue"\n      [options]="selectOptions"\n      defaultOption="Seleziona un elemento">\n\n      \x3c!--Puoi inserire gli option da html o dall\'attributo options--\x3e\n      <option [value]="1">Opzione 1</option>\n\n    </it-select>\n  </p>\n\n\n  <h4>Risultato</h4>\n\n  <div class="example-section">\n\n    <div class="example-selected-value">Valore selezionato: /{/{selectedValue/}/}</div>\n  </div>\n</div>',"typescript","import { Component } from '@angular/core';\nimport { SelectControlOption } from 'projects/design-angular-kit/src/public_api';\n\n@Component({\n  selector: 'it-select-example',\n  templateUrl: './select-example.component.html',\n  styleUrls: ['./select-example.component.scss']\n})\nexport class SelectExampleComponent {\n  selectedValue: number = null;\n  selectOptions: Array<SelectControlOption> = [\n    {\n      value: 2,\n      text: 'Opzione 2'\n    },\n    {\n      value: 3,\n      text: 'Opzione 3'\n    }\n  ];\n\n}"],["html",'<h3>Select disabilitata</h3>\n<div class="bd-example">\n  <p class="example-section">\n    <it-select\n      id="disabled-select"\n      label="Etichetta"\n      disabled="true"\n      [options]="selectOptions">\n    </it-select>\n  </p>\n</div>',"typescript","import { Component, OnInit } from '@angular/core';\nimport { SelectControlOption } from 'projects/design-angular-kit/src/public_api';\n\n@Component({\n  selector: 'it-select-disabled-example',\n  templateUrl: './select-disabled-example.component.html',\n  styleUrls: ['./select-disabled-example.component.scss']\n})\nexport class SelectDisabledExampleComponent {\n  selectOptions: Array<SelectControlOption> = [\n    {\n      selected: true,\n      value: \"\",\n      text: 'Scegli un\\'opzione'\n    },\n    {\n      value: 1,\n      text: 'Opzione 1'\n    },\n    {\n      value: 2,\n      text: 'Opzione 2'\n    },    \n    {\n      value: 3,\n      text: 'Opzione 3'\n    }\n  ];\n  \n  constructor(){}\n}"],["html",'<h3>Select con gruppi</h3>\n<div class="bd-example">\n  <p class="example-section">\n    <it-select \n      id = "group-select"\n      label="Etichetta"\n      [(ngModel)]="selectedValue"\n      [groups]="selectGroups"\n      [options]="selectOptions">\n    </it-select>\n  </p>\n\n\n  <h4>Risultato</h4>\n\n  <div class="example-section">\n    <div class="example-selected-value">Valore selezionato: /{/{selectedValue/}/}</div>\n  </div>\n</div>',"typescript","import { Component } from '@angular/core';\nimport { SelectControlGroup, SelectControlOption } from 'projects/design-angular-kit/src/public_api';\n\n@Component({\n  selector: 'it-select-group-example',\n  templateUrl: './select-group-example.component.html',\n  styleUrls: ['./select-group-example.component.scss']\n})\nexport class SelectGroupExampleComponent {\n  selectedValue: number | string = \"\";\n  selectOptions: Array<SelectControlOption> = [\n    {\n      selected: true,\n      value: \"\",\n      text: 'Scegli un\\'opzione'\n    }\n  ];\n  selectGroups: Array<SelectControlGroup> = [\n    {\n      label: 'Gruppo 1',\n      options: [\n        {\n          value: 1,\n          text: 'Opzione 1'\n        },\n        {\n          value: 2,\n          text: 'Opzione 2'\n        }\n      ]\n    },\n    {\n      label: 'Gruppo 2',\n      options: [\n        {\n          value: 3,\n          text: 'Opzione 3'\n        },\n        {\n          value: 4,\n          text: 'Opzione 4'\n        }\n      ]\n    }\n    \n  ];\n  \n  constructor(){}\n}"],["html",'<h3>Interazione con Select dotato di validazione Model Driven</h3>\n\n<div class="bd-example">\n  <form [formGroup]="myForm">\n    <it-select [options]="options" formControlName="select"></it-select>\n\n    <div class="d-flex justify-content-between">\n      <button itButton="primary" [disabled]="!myForm.valid" (click)="save(myForm)">Salva</button>\n      <button itButton="secondary" type="button" (click)="markAllAsTouched()">Valida</button>\n    </div>\n\n    <div class="mt-3" *ngIf="savedValue">Salvato `/{/{savedValue/}/}`</div>\n  </form>\n</div>',"typescript","import { Component } from '@angular/core';\nimport { FormBuilder, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';\nimport { SelectControlOption } from '../../../../projects/design-angular-kit/src/lib/interfaces/form';\n\n@Component({\n  selector: 'it-select-formgroup-example',\n  templateUrl: './select-formgroup-example.component.html'\n})\nexport class SelectFormgroupExampleComponent {\n  myForm: FormGroup;\n\n  options: Array<SelectControlOption> = [\n    { value: null, text: 'Seleziona un elemento', selected: true }\n  ];\n\n  constructor(private _fb: FormBuilder) {\n    this.myForm = this._fb.group({\n      select: [null, Validators.required]\n    });\n\n    Array.from(Array(10).keys()).forEach(number => {\n      this.options.push({ value: number, text: `Opzione ${number.toString()}` });\n    });\n  }\n\n  value = '';\n  savedValue = undefined;\n\n  save(form: UntypedFormGroup) {\n    this.savedValue = form.value.select;\n  }\n\n  markAllAsTouched() {\n    this.myForm.markAllAsTouched();\n  }\n}"]],template:function(n,o){1&n&&e._UZ(0,"it-select-example")(1,"it-source-display",0)(2,"it-select-disabled-example")(3,"it-source-display",1)(4,"it-select-group-example")(5,"it-source-display",2)(6,"it-select-formgroup-example")(7,"it-source-display",3)},dependencies:[f.F,b,S,y,Z]})}return t})();const z=[{path:"",component:(()=>{class t{constructor(){this.component=v.wx.find(l=>"ItSelectComponent"===l.name)}static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["it-select-index"]],decls:10,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(n,o){1&n&&(e.TgZ(0,"h1",0),e._uU(1,"Select"),e.qZA(),e.TgZ(2,"p",1),e._uU(3,"Il classico \u201cmenu a tendina\u201d"),e.qZA(),e._UZ(4,"div",2),e.TgZ(5,"it-tab-container")(6,"it-tab-item",3),e._UZ(7,"it-select-examples"),e.qZA(),e.TgZ(8,"it-tab-item",4),e._UZ(9,"it-api-parameters",5),e.qZA()()),2&n&&(e.xp6(4),e.Q6J("innerHTML",o.component.description,e.oJD),e.xp6(5),e.Q6J("component",o.component))},dependencies:[x.G,h.U,g.m,A]})}return t})()}];let T=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[m.Bz.forChild(z),m.Bz]})}return t})(),F=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[u.ez,s.UX,s.u5,d.m,T]})}return t})()}}]);