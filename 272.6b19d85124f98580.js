"use strict";(self.webpackChunkdesign_angular_kit_bundle=self.webpackChunkdesign_angular_kit_bundle||[]).push([[272],{6272:(C,s,l)=>{l.r(s),l.d(s,{LanguageSwitcherModule:()=>Z});var c=l(6814),u=l(4244),r=l(258),p=l(7069),e=l(2029),m=l(528),d=l(6273),h=l(4580),x=l(6099),g=l(9807),o=l(3999);let v=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["it-language-switcher-example"]],decls:9,vars:3,consts:[["href","https://github.com/italia/design-angular-kit/#supporto-i18n-localizzazione"],[1,"bd-example"],[1,"mt-5"]],template:function(n,i){1&n&&(e.TgZ(0,"p"),e._uU(1,"Per configurzione predefinit\xe0 verranno mostrate le lingue disponibili configurate tramite "),e.TgZ(2,"a",0),e._uU(3,"ngx-translate"),e.qZA()(),e.TgZ(4,"div",1),e._UZ(5,"it-language-switcher"),e.TgZ(6,"p",2),e._uU(7),e.ALo(8,"translate"),e.qZA()()),2&n&&(e.xp6(7),e.hij("Risultato: ",e.lcZ(8,1,"it.utils.select-language"),""))},dependencies:[g.P,o.X$],encapsulation:2}),a})(),w=(()=>{class a{constructor(n){this.translateService=n,this.availableLanguages=this.translateService.getLangs().map(i=>({code:i,label:i,..."it"===i&&{label:"Italiano"},..."en"===i&&{label:"English"}}))}}return a.\u0275fac=function(n){return new(n||a)(e.Y36(o.sK))},a.\u0275cmp=e.Xpm({type:a,selectors:[["it-language-switcher-custom-example"]],decls:10,vars:5,consts:[[3,"innerText"],[1,"bd-example"],[3,"availableLanguages"],[1,"mt-5"]],template:function(n,i){1&n&&(e.TgZ(0,"h3"),e._uU(1,"Personalizzazione"),e.qZA(),e.TgZ(2,"p"),e._uU(3,"Puoi personalizzare le label delle lingue, passando un "),e._UZ(4,"code",0),e.qZA(),e.TgZ(5,"div",1),e._UZ(6,"it-language-switcher",2),e.TgZ(7,"p",3),e._uU(8),e.ALo(9,"translate"),e.qZA()()),2&n&&(e.xp6(4),e.Q6J("innerText","Array<AvailableLanguage>"),e.xp6(2),e.Q6J("availableLanguages",i.availableLanguages),e.xp6(2),e.hij("Risultato: ",e.lcZ(9,3,"it.utils.select-language"),""))},dependencies:[g.P,o.X$],encapsulation:2}),a})(),L=(()=>{class a{constructor(){this.typescriptAppModule="export class AppModule {\n  constructor(\n    private readonly translateService: TranslateService\n  ) {\n    translateService.addLangs(['es']);\n  }\n}"}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["it-language-switcher-examples"]],decls:10,vars:1,consts:[["html",'<p>Per configurzione predefinit\xe0 verranno mostrate le lingue disponibili configurate tramite <a href="https://github.com/italia/design-angular-kit/#supporto-i18n-localizzazione">ngx-translate</a></p>\n\n<div class="bd-example">\n  <it-language-switcher></it-language-switcher>\n\n  <p class="mt-5">Risultato: /{/{\'it.utils.select-language\' | translate/}/}</p>\n</div>',"typescript","import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-language-switcher-example',\n  templateUrl: './language-switcher-example.component.html'\n})\nexport class LanguageSwitcherExampleComponent {\n\n}"],[1,"my-5"],[1,"text-muted"],[3,"typescript"],["html",'<h3>Personalizzazione</h3>\n<p>Puoi personalizzare le label delle lingue, passando un <code [innerText]="\'Array<AvailableLanguage>\'"></code></p>\n\n<div class="bd-example">\n  <it-language-switcher [availableLanguages]="availableLanguages"></it-language-switcher>\n\n  <p class="mt-5">Risultato: /{/{\'it.utils.select-language\' | translate/}/}</p>\n\n</div>',"typescript","import { Component } from '@angular/core';\nimport { AvailableLanguage } from '../../../../projects/design-angular-kit/src/lib/interfaces/utils';\nimport { TranslateService } from '@ngx-translate/core';\n\n@Component({\n  selector: 'it-language-switcher-custom-example',\n  templateUrl: './language-switcher-custom-example.component.html'\n})\nexport class LanguageSwitcherCustomExampleComponent {\n\n  availableLanguages?: Array<AvailableLanguage>;\n\n  constructor(\n    private readonly translateService: TranslateService\n  ) {\n    this.availableLanguages = this.translateService.getLangs().map(lang => ({\n      code: lang,\n      label: lang,\n      ...(lang === 'it' && {label: 'Italiano'}),\n      ...(lang === 'en' && {label: 'English'})\n    }));\n  }\n}"]],template:function(n,i){1&n&&(e._UZ(0,"it-language-switcher-example")(1,"it-source-display",0),e.TgZ(2,"div",1)(3,"p"),e._uU(4,"Puoi aggiungere altre lingue aggiungendo nel tuo "),e.TgZ(5,"span",2),e._uU(6,"app.module.ts"),e.qZA()(),e._UZ(7,"it-source-display",3),e.qZA(),e._UZ(8,"it-language-switcher-custom-example")(9,"it-source-display",4)),2&n&&(e.xp6(7),e.Q6J("typescript",i.typescriptAppModule))},dependencies:[x.F,v,w],encapsulation:2}),a})();const S=[{path:"",component:(()=>{class a{constructor(){this.component=p.wx.find(n=>"ItLanguageSwitcherComponent"===n.name)}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["it-language-switcher-index"]],decls:11,vars:1,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"]],template:function(n,i){1&n&&(e.TgZ(0,"h1",0),e._uU(1,"Language Switcher"),e.qZA(),e.TgZ(2,"p",1),e._uU(3,"Per cambiare facilmente la lingua del tuo sito web"),e.qZA(),e.TgZ(4,"it-tab-container")(5,"it-tab-item",2),e._UZ(6,"it-language-switcher-examples"),e.qZA(),e.TgZ(7,"it-tab-item",3)(8,"h3"),e._uU(9,"LanguageSwitcherComponent"),e.qZA(),e._UZ(10,"it-api-parameters",4),e.qZA()()),2&n&&(e.xp6(10),e.Q6J("component",i.component))},dependencies:[m.G,d.U,h.m,L],encapsulation:2}),a})()}];let f=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[r.Bz.forChild(S),r.Bz]}),a})(),Z=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[c.ez,u.m,o.aw,f]}),a})()}}]);