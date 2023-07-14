"use strict";(self.webpackChunkdesign_angular_kit_bundle=self.webpackChunkdesign_angular_kit_bundle||[]).push([[650],{650:(k,u,s)=>{s.r(u),s.d(u,{NotificationsModule:()=>U});var _=s(6814),v=s(4244),m=s(258),f=s(7069),i=s(2029),T=s(528),M=s(6273),C=s(4580),g=s(6099),r=s(8048),d=s(6166),p=s(7463),h=s(4220),N=s(4676),b=s(8790),c=s(6223);let Z=(()=>{class n{get NotificationPosition(){return r.E}get NotificationType(){return r.k}constructor(e){this.notificationService=e,this.withText=!0,this.type=r.k.Standard,this.text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."}showNotification(){this.notificationService.addNotification({type:this.type,title:"Titolo Notifica",message:this.withText&&this.text,dismissible:this.dismissible&&"true"===this.dismissible,position:this.position,duration:this.duration})}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(d.e))},n.\u0275cmp=i.Xpm({type:n,selectors:[["it-notifications-example"]],decls:35,vars:27,consts:[[1,"bd-example"],["itButton","primary","size","sm",3,"click"],[1,"row","mt-4"],[1,"form-check","col-3"],["label","Con testo",3,"ngModel","ngModelChange"],["name","notification-dismissible","label","Eliminabile default",3,"value","ngModel","ngModelChange"],["name","notification-dismissible","value","true","label","Eliminabile",3,"ngModel","ngModelChange"],["name","notification-dismissible","value","false","label","Non eliminabile",3,"ngModel","ngModelChange"],["name","notification-type","label","Standard",3,"value","ngModel","ngModelChange"],["name","notification-type","label","Successo",3,"value","ngModel","ngModelChange"],["name","notification-type","label","Errore",3,"value","ngModel","ngModelChange"],["name","notification-type","label","Precauzione",3,"value","ngModel","ngModelChange"],["name","notification-type","label","Info",3,"value","ngModel","ngModelChange"],["name","notification-position","label","Default",3,"value","ngModel","ngModelChange"],["name","notification-position","label","Top",3,"value","ngModel","ngModelChange"],["name","notification-position","label","Bottom",3,"value","ngModel","ngModelChange"],["name","notification-position","label","Left",3,"value","ngModel","ngModelChange"],["name","notification-position","label","Right",3,"value","ngModel","ngModelChange"],["type","number","placeholder","Default",3,"min","ngModel","ngModelChange"]],template:function(e,t){1&e&&(i.TgZ(0,"h3"),i._uU(1,"Notifica con opzioni custom"),i.qZA(),i.TgZ(2,"div",0)(3,"button",1),i.NdJ("click",function(){return t.showNotification()}),i._uU(4," Notifica "),i.qZA(),i.TgZ(5,"div",2)(6,"div",3)(7,"h5"),i._uU(8,"Opzioni"),i.qZA(),i.TgZ(9,"it-checkbox",4),i.NdJ("ngModelChange",function(o){return t.withText=o}),i.qZA(),i.TgZ(10,"it-radio-button",5),i.NdJ("ngModelChange",function(o){return t.dismissible=o}),i.qZA(),i.TgZ(11,"it-radio-button",6),i.NdJ("ngModelChange",function(o){return t.dismissible=o}),i.qZA(),i.TgZ(12,"it-radio-button",7),i.NdJ("ngModelChange",function(o){return t.dismissible=o}),i.qZA()(),i.TgZ(13,"div",3)(14,"h5"),i._uU(15,"Tipo"),i.qZA(),i.TgZ(16,"it-radio-button",8),i.NdJ("ngModelChange",function(o){return t.type=o}),i.qZA(),i.TgZ(17,"it-radio-button",9),i.NdJ("ngModelChange",function(o){return t.type=o}),i.qZA(),i.TgZ(18,"it-radio-button",10),i.NdJ("ngModelChange",function(o){return t.type=o}),i.qZA(),i.TgZ(19,"it-radio-button",11),i.NdJ("ngModelChange",function(o){return t.type=o}),i.qZA(),i.TgZ(20,"it-radio-button",12),i.NdJ("ngModelChange",function(o){return t.type=o}),i.qZA()(),i.TgZ(21,"div",3)(22,"h5"),i._uU(23,"Posizione"),i.qZA(),i.TgZ(24,"it-radio-button",13),i.NdJ("ngModelChange",function(o){return t.position=o}),i.qZA(),i.TgZ(25,"it-radio-button",14),i.NdJ("ngModelChange",function(o){return t.position=o}),i.qZA(),i.TgZ(26,"it-radio-button",15),i.NdJ("ngModelChange",function(o){return t.position=o}),i.qZA(),i.TgZ(27,"it-radio-button",16),i.NdJ("ngModelChange",function(o){return t.position=o}),i.qZA(),i.TgZ(28,"it-radio-button",17),i.NdJ("ngModelChange",function(o){return t.position=o}),i.qZA()(),i.TgZ(29,"div",3)(30,"h5"),i._uU(31,"Durata "),i.TgZ(32,"small"),i._uU(33,"(ms)"),i.qZA()(),i.TgZ(34,"it-input",18),i.NdJ("ngModelChange",function(o){return t.duration=o}),i.qZA()()()()),2&e&&(i.xp6(9),i.Q6J("ngModel",t.withText),i.xp6(1),i.Q6J("value",void 0)("ngModel",t.dismissible),i.xp6(1),i.Q6J("ngModel",t.dismissible),i.xp6(1),i.Q6J("ngModel",t.dismissible),i.xp6(4),i.Q6J("value",t.NotificationType.Standard)("ngModel",t.type),i.xp6(1),i.Q6J("value",t.NotificationType.Success)("ngModel",t.type),i.xp6(1),i.Q6J("value",t.NotificationType.Error)("ngModel",t.type),i.xp6(1),i.Q6J("value",t.NotificationType.Warning)("ngModel",t.type),i.xp6(1),i.Q6J("value",t.NotificationType.Info)("ngModel",t.type),i.xp6(4),i.Q6J("value",void 0)("ngModel",t.position),i.xp6(1),i.Q6J("value",t.NotificationPosition.Top)("ngModel",t.position),i.xp6(1),i.Q6J("value",t.NotificationPosition.Bottom)("ngModel",t.position),i.xp6(1),i.Q6J("value",t.NotificationPosition.Left)("ngModel",t.position),i.xp6(1),i.Q6J("value",t.NotificationPosition.Right)("ngModel",t.position),i.xp6(6),i.Q6J("min",1e3)("ngModel",t.duration))},dependencies:[p.E,h.f,N.g,b.C,c.JJ,c.On],encapsulation:2}),n})();var y=s(3851);let S=(()=>{class n{get NotificationPosition(){return r.E}constructor(e){this.notificationService=e,this.duration=8e3,this.isDismissible=!0,this.notificationServiceExample="constructor(\n  private readonly notificationService: ItNotificationService\n) {}\n\nstandardNotification(): void {\n  this.notificationService.standard(\n    'Notifica Standard', // Titolo\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...' // Messaggio\n  );\n}",this.exampleOptionsHtml='<it-notifications [duration]="duration >= 1000 ? duration : undefined"\n                  [position]="position"\n                  [dismissible]="isDismissible"></it-notifications>',this.exampleOptionsTs="duration = 8000;\nisDismissible = true;\nposition?: NotificationPosition;\n"}standardNotification(){this.notificationService.standard("Notifica Standard","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...")}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(d.e))},n.\u0275cmp=i.Xpm({type:n,selectors:[["it-notifications-setup"]],decls:40,vars:20,consts:[[3,"duration","position","dismissible"],[1,"bd-example","mb-4"],[1,"text-muted","fw-bold"],[3,"html"],[1,"mt-5"],[3,"typescript"],[1,"d-flex","justify-content-between","mt-5","mb-4"],["itButton","primary","size","sm",3,"click"],[3,"html","typescript"],[1,"row","mt-4","mx-1"],[1,"form-check","col-4"],["label","Eliminabile",3,"ngModel","ngModelChange"],["name","notification-setup-position","label","Default",3,"value","ngModel","ngModelChange"],["name","notification-setup-position","label","Top",3,"value","ngModel","ngModelChange"],["name","notification-setup-position","label","Bottom",3,"value","ngModel","ngModelChange"],["name","notification-setup-position","label","Left",3,"value","ngModel","ngModelChange"],["name","notification-setup-position","label","Right",3,"value","ngModel","ngModelChange"],["type","number","placeholder","Default",3,"min","ngModel","ngModelChange"]],template:function(e,t){1&e&&(i.TgZ(0,"h3"),i._uU(1,"Setup notifiche"),i.qZA(),i._UZ(2,"it-notifications",0),i.TgZ(3,"div",1)(4,"p"),i._uU(5,"Importa il componente notifiche nel tuo "),i.TgZ(6,"em",2),i._uU(7,"app.component.html"),i.qZA()(),i._UZ(8,"it-source-display",3),i.TgZ(9,"p",4),i._uU(10,"Usa il "),i.TgZ(11,"em",2),i._uU(12,"ItNotificationService"),i.qZA(),i._uU(13," per mostrare una nuova notifica"),i.qZA(),i._UZ(14,"it-source-display",5),i.TgZ(15,"div",6)(16,"h4"),i._uU(17,"Opzioni usate di default per tutte le notifiche"),i.qZA(),i.TgZ(18,"button",7),i.NdJ("click",function(){return t.standardNotification()}),i._uU(19,"Prova"),i.qZA()(),i._UZ(20,"it-source-display",8),i.TgZ(21,"div",9)(22,"div",10)(23,"h5"),i._uU(24,"Opzioni"),i.qZA(),i.TgZ(25,"it-checkbox",11),i.NdJ("ngModelChange",function(o){return t.isDismissible=o}),i.qZA()(),i.TgZ(26,"div",10)(27,"h5"),i._uU(28,"Posizione"),i.qZA(),i.TgZ(29,"it-radio-button",12),i.NdJ("ngModelChange",function(o){return t.position=o}),i.qZA(),i.TgZ(30,"it-radio-button",13),i.NdJ("ngModelChange",function(o){return t.position=o}),i.qZA(),i.TgZ(31,"it-radio-button",14),i.NdJ("ngModelChange",function(o){return t.position=o}),i.qZA(),i.TgZ(32,"it-radio-button",15),i.NdJ("ngModelChange",function(o){return t.position=o}),i.qZA(),i.TgZ(33,"it-radio-button",16),i.NdJ("ngModelChange",function(o){return t.position=o}),i.qZA()(),i.TgZ(34,"div",10)(35,"h5"),i._uU(36,"Durata "),i.TgZ(37,"small"),i._uU(38,"(ms)"),i.qZA()(),i.TgZ(39,"it-input",17),i.NdJ("ngModelChange",function(o){return t.duration=o}),i.qZA()()()()),2&e&&(i.xp6(2),i.Q6J("duration",t.duration>=1e3?t.duration:void 0)("position",t.position)("dismissible",t.isDismissible),i.xp6(6),i.Q6J("html","<it-notifications></it-notifications>"),i.xp6(6),i.Q6J("typescript",t.notificationServiceExample),i.xp6(6),i.Q6J("html",t.exampleOptionsHtml)("typescript",t.exampleOptionsTs),i.xp6(5),i.Q6J("ngModel",t.isDismissible),i.xp6(4),i.Q6J("value",void 0)("ngModel",t.position),i.xp6(1),i.Q6J("value",t.NotificationPosition.Top)("ngModel",t.position),i.xp6(1),i.Q6J("value",t.NotificationPosition.Bottom)("ngModel",t.position),i.xp6(1),i.Q6J("value",t.NotificationPosition.Left)("ngModel",t.position),i.xp6(1),i.Q6J("value",t.NotificationPosition.Right)("ngModel",t.position),i.xp6(6),i.Q6J("min",1e3)("ngModel",t.duration))},dependencies:[g.F,p.E,y.U,h.f,N.g,b.C,c.JJ,c.On],encapsulation:2}),n})(),J=(()=>{class n{constructor(e){this.notificationService=e,this.text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."}standardNotification(){this.notificationService.standard("Notifica Standard",this.text)}successNotification(){this.notificationService.success("Notifica Successo",this.text)}errorNotification(){this.notificationService.error("Notifica Errore",this.text)}warningNotification(){this.notificationService.warning("Notifica Precauzione",this.text)}infoNotification(){this.notificationService.info("Notifica Info",this.text)}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(d.e))},n.\u0275cmp=i.Xpm({type:n,selectors:[["it-notifications-example-type"]],decls:14,vars:1,consts:[[1,"bd-example"],[1,"d-flex","mb-2"],["size","sm",1,"btn-me",3,"itButton","click"],["itButton","success","size","sm",1,"btn-me",3,"click"],["itButton","danger","size","sm",1,"btn-me",3,"click"],["itButton","warning","size","sm",1,"btn-me",3,"click"],["itButton","info","size","sm",1,"btn-me",3,"click"]],template:function(e,t){1&e&&(i.TgZ(0,"h3"),i._uU(1,"Tipi di notifica"),i.qZA(),i.TgZ(2,"div",0)(3,"div",1)(4,"button",2),i.NdJ("click",function(){return t.standardNotification()}),i._uU(5," Notifica Standard "),i.qZA(),i.TgZ(6,"button",3),i.NdJ("click",function(){return t.successNotification()}),i._uU(7," Notifica Successo "),i.qZA(),i.TgZ(8,"button",4),i.NdJ("click",function(){return t.errorNotification()}),i._uU(9," Notifica Errore "),i.qZA(),i.TgZ(10,"button",5),i.NdJ("click",function(){return t.warningNotification()}),i._uU(11," Notifica Precauzione "),i.qZA(),i.TgZ(12,"button",6),i.NdJ("click",function(){return t.infoNotification()}),i._uU(13," Notifica Info "),i.qZA()()()),2&e&&(i.xp6(4),i.Q6J("itButton",void 0))},dependencies:[p.E],encapsulation:2}),n})(),x=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=i.Xpm({type:n,selectors:[["it-notifications-examples"]],decls:5,vars:0,consts:[["html",'<h3>Tipi di notifica</h3>\n\n<div class="bd-example">\n  <div class="d-flex mb-2">\n    <button class="btn-me" [itButton]="undefined" size="sm" (click)="standardNotification()">\n      Notifica Standard\n    </button>\n    <button class="btn-me" itButton="success" size="sm" (click)="successNotification()">\n      Notifica Successo\n    </button>\n    <button class="btn-me" itButton="danger" size="sm" (click)="errorNotification()">\n      Notifica Errore\n    </button>\n    <button class="btn-me" itButton="warning" size="sm" (click)="warningNotification()">\n      Notifica Precauzione\n    </button>\n    <button class="btn-me" itButton="info" size="sm" (click)="infoNotification()">\n      Notifica Info\n    </button>\n  </div>\n</div>',"typescript","import { Component } from '@angular/core';\nimport {\n  ItNotificationService\n} from '../../../../projects/design-angular-kit/src/lib/services/notification/notification.service';\n\n@Component({\n  selector: 'it-notifications-example-type',\n  templateUrl: './notifications-example-type.component.html'\n})\nexport class NotificationsExampleTypeComponent {\n\n  private text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...';\n\n  constructor(\n    private readonly notificationService: ItNotificationService\n  ) {\n  }\n\n  standardNotification(): void {\n    this.notificationService.standard('Notifica Standard', this.text);\n  }\n\n  successNotification(): void {\n    this.notificationService.success('Notifica Successo', this.text);\n  }\n\n  errorNotification(): void {\n    this.notificationService.error('Notifica Errore', this.text);\n  }\n\n  warningNotification(): void {\n    this.notificationService.warning('Notifica Precauzione', this.text);\n  }\n\n  infoNotification(): void {\n    this.notificationService.info('Notifica Info', this.text);\n  }\n}"],["html",'<h3>Notifica con opzioni custom</h3>\n\n<div class="bd-example">\n  <button itButton="primary" size="sm" (click)="showNotification()">\n    Notifica\n  </button>\n\n  <div class="row mt-4">\n    <div class="form-check col-3">\n      <h5>Opzioni</h5>\n      <it-checkbox [(ngModel)]="withText" label="Con testo"></it-checkbox>\n      <it-radio-button name="notification-dismissible"\n                       [value]="undefined" label="Eliminabile default"\n                       [(ngModel)]="dismissible"></it-radio-button>\n      <it-radio-button name="notification-dismissible"\n                       value="true" label="Eliminabile"\n                       [(ngModel)]="dismissible"></it-radio-button>\n      <it-radio-button name="notification-dismissible"\n                       value="false" label="Non eliminabile"\n                       [(ngModel)]="dismissible"></it-radio-button>\n    </div>\n    <div class="form-check col-3">\n      <h5>Tipo</h5>\n      <it-radio-button name="notification-type"\n                       [value]="NotificationType.Standard" label="Standard"\n                       [(ngModel)]="type"></it-radio-button>\n      <it-radio-button name="notification-type"\n                       [value]="NotificationType.Success" label="Successo"\n                       [(ngModel)]="type"></it-radio-button>\n      <it-radio-button name="notification-type"\n                       [value]="NotificationType.Error" label="Errore"\n                       [(ngModel)]="type"></it-radio-button>\n      <it-radio-button name="notification-type"\n                       [value]="NotificationType.Warning" label="Precauzione"\n                       [(ngModel)]="type"></it-radio-button>\n      <it-radio-button name="notification-type"\n                       [value]="NotificationType.Info" label="Info"\n                       [(ngModel)]="type"></it-radio-button>\n    </div>\n    <div class="form-check col-3">\n      <h5>Posizione</h5>\n      <it-radio-button name="notification-position"\n                       [value]="undefined" label="Default"\n                       [(ngModel)]="position"></it-radio-button>\n      <it-radio-button name="notification-position"\n                       [value]="NotificationPosition.Top" label="Top"\n                       [(ngModel)]="position"></it-radio-button>\n      <it-radio-button name="notification-position"\n                       [value]="NotificationPosition.Bottom" label="Bottom"\n                       [(ngModel)]="position"></it-radio-button>\n      <it-radio-button name="notification-position"\n                       [value]="NotificationPosition.Left" label="Left"\n                       [(ngModel)]="position"></it-radio-button>\n      <it-radio-button name="notification-position"\n                       [value]="NotificationPosition.Right" label="Right"\n                       [(ngModel)]="position"></it-radio-button>\n    </div>\n    <div class="form-check col-3">\n      <h5>Durata <small>(ms)</small></h5>\n      <it-input type="number" [min]="1000" placeholder="Default" [(ngModel)]="duration"></it-input>\n    </div>\n  </div>\n</div>',"typescript","import { Component } from '@angular/core';\nimport {\n  ItNotificationService\n} from '../../../../projects/design-angular-kit/src/lib/services/notification/notification.service';\nimport {\n  NotificationPosition,\n  NotificationType\n} from '../../../../projects/design-angular-kit/src/lib/interfaces/core';\n\n@Component({\n  selector: 'it-notifications-example',\n  templateUrl: './notifications-example.component.html'\n})\nexport class NotificationsExampleComponent {\n\n  withText = true;\n  type: NotificationType = NotificationType.Standard;\n  duration?: number;\n  dismissible?: 'true'|'false';\n  position?: NotificationPosition;\n\n\n  get NotificationPosition(): typeof NotificationPosition {\n    return NotificationPosition;\n  }\n  get NotificationType(): typeof NotificationType {\n    return NotificationType;\n  }\n\n  private text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...';\n\n  constructor(\n    private readonly notificationService: ItNotificationService\n  ) {\n  }\n\n  showNotification(): void {\n    this.notificationService.addNotification({\n      type: this.type,\n      title: 'Titolo Notifica',\n      message: this.withText && this.text,\n      dismissible: this.dismissible && this.dismissible === 'true',\n      position: this.position,\n      duration: this.duration\n    });\n\n    // You can also use helper methods `standard`, `success`, `error`, `warning`, `info`\n    // this.notificationService.success(\n    //   'Titolo Notifica',\n    //   this.withText && this.text,\n    //   this.dismissible,\n    //   this.duration,\n    //   this.position\n    // );\n  }\n\n}"]],template:function(e,t){1&e&&i._UZ(0,"it-notifications-setup")(1,"it-notifications-example-type")(2,"it-source-display",0)(3,"it-notifications-example")(4,"it-source-display",1)},dependencies:[g.F,Z,S,J],encapsulation:2}),n})();const E=[{path:"",component:(()=>{class n{constructor(){this.component=f.wx.find(e=>"ItNotificationsComponent"===e.name),this.service=f.G5.find(e=>"ItNotificationService"===e.name)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=i.Xpm({type:n,selectors:[["it-notifications-index"]],decls:14,vars:2,consts:[[1,"bd-title"],[1,"bd-lead"],["label","Esempi","active","true",1,"pt-3"],["label","API",1,"pt-3"],[3,"component"],[3,"service"]],template:function(e,t){1&e&&(i.TgZ(0,"h1",0),i._uU(1,"Notifiche"),i.qZA(),i.TgZ(2,"p",1),i._uU(3,"Per attirare l\u2019attenzione su brevi messaggi di stato."),i.qZA(),i.TgZ(4,"it-tab-container")(5,"it-tab-item",2),i._UZ(6,"it-notifications-examples"),i.qZA(),i.TgZ(7,"it-tab-item",3)(8,"h3"),i._uU(9,"NotificationComponent"),i.qZA(),i._UZ(10,"it-api-parameters",4),i.TgZ(11,"h3"),i._uU(12,"NotificationService"),i.qZA(),i._UZ(13,"it-api-parameters",5),i.qZA()()),2&e&&(i.xp6(10),i.Q6J("component",t.component),i.xp6(3),i.Q6J("service",t.service))},dependencies:[T.G,M.U,C.m,x],encapsulation:2}),n})()}];let A=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[m.Bz.forChild(E),m.Bz]}),n})(),U=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[_.ez,v.m,A,c.u5]}),n})()}}]);