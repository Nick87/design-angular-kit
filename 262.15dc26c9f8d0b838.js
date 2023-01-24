"use strict";(self.webpackChunkdesign_angular_kit_bundle=self.webpackChunkdesign_angular_kit_bundle||[]).push([[262],{5262:(q,h,i)=>{i.r(h),i.d(h,{UploadModule:()=>r});var x=i(6895),D=i(1797),I=i(4006),v=i(300),U=i(7069),t=i(8274),T=i(8340),b=i(5792),E=i(2717),A=i(6242),Z=i(2076),w=i(3900),L=i(8505),S=i(4482),H=i(5403),F=i(4004),M=i(262),j=i(9646),B=i(8746),g=i(529),y=i(4449);class d{constructor(e){this.httpClient=e,this.uploadedFileList=[{id:0,file:new File([],"nome-file-01.pdf")},{id:1,file:new File([],"nome-file-02-nome-file-lungo-per-ellissi.doc")},{id:2,file:new File([],"nome-file-03.png"),progress:43,removable:!0},{id:3,file:new File([],"nome-file-04.png"),error:!0,removable:!0}]}onUpdateFileList(e){const o=Array.from(e).map((a,l)=>({id:l+this.uploadedFileList.length,file:a,removable:!0}));this.uploadedFileList=[...this.uploadedFileList,...o]}onDeleteFileList(e){this.uploadedFileList=this.uploadedFileList.filter(o=>o.id!==e.id)}httpClientExample(){const e=this.uploadedFileList[0];e.progress=1,e.error=void 0,e.removable=!1,(0,Z.D)(e.file.arrayBuffer()).pipe((0,w.w)(o=>{const a=[...new Uint8Array(o)];return this.httpClient.post("url",a,{reportProgress:!0,observe:"events"})}),(0,L.b)(o=>{o.type===g.dt.UploadProgress&&(e.progress=Math.round(o.loaded/(o.total||1)*100))}),function J(n){return(0,S.e)((e,o)=>{let a=!1,l=0;e.subscribe((0,H.x)(o,p=>(a||(a=!n(p,l++)))&&o.next(p)))})}(o=>o.type!==g.dt.Response),(0,F.U)(o=>o.body),(0,L.b)(o=>{e.progress=100}),(0,M.K)(o=>(e.progress=void 0,e.removable=!0,e.error=!0,e.tooltip=o.message,(0,j.of)(null))),(0,B.x)(()=>{!e.error&&e.progress&&e.progress<100&&(e.progress=void 0,e.removable=!0,e.error=!0,e.tooltip="Incomplete upload error")}))}}d.\u0275fac=function(e){return new(e||d)(t.Y36(g.eN))},d.\u0275cmp=t.Xpm({type:d,selectors:[["it-upload-file-list-example"]],decls:6,vars:1,consts:[[1,"bd-example"],[1,"row","my-2"],[1,"col"],["id","file-upload",3,"fileList","uploadFiles","deleteItem"]],template:function(e,o){1&e&&(t.TgZ(0,"h3"),t._uU(1,"Upload con lista di file"),t.qZA(),t.TgZ(2,"div",0)(3,"div",1)(4,"div",2)(5,"it-upload-file-list",3),t.NdJ("uploadFiles",function(l){return o.onUpdateFileList(l)})("deleteItem",function(l){return o.onDeleteFileList(l)}),t.qZA()()()()),2&e&&(t.xp6(5),t.Q6J("fileList",o.uploadedFileList))},dependencies:[y.L],encapsulation:2});var N=i(4128);class m{constructor(e){this.httpClient=e,this.uploadedImageList=[]}ngOnInit(){const e=["https://picsum.photos/40/40?image=1055","https://picsum.photos/80/40?image=1056","https://picsum.photos/40/40?image=1057","https://picsum.photos/120/200?image=1058"].map(o=>this.httpClient.get(o,{responseType:"blob"}));(0,N.D)(e).subscribe(o=>{this.uploadedImageList=o.map((a,l)=>({id:l,file:new File([a],1===l?"nome-file-2-nome-file-lungo-per-ellissi.jpg":`nome-file-${l+1}.jpg`),removable:l>1,progress:2===l?45:void 0,error:3===l}))})}onUpdateImageList(e){const o=Array.from(e).map((a,l)=>({id:l+this.uploadedImageList.length,file:a,removable:!0}));this.uploadedImageList=[...this.uploadedImageList,...o]}onDeleteImageList(e){this.uploadedImageList=this.uploadedImageList.filter(o=>o.id!==e.id)}}m.\u0275fac=function(e){return new(e||m)(t.Y36(g.eN))},m.\u0275cmp=t.Xpm({type:m,selectors:[["it-upload-image-list-example"]],decls:6,vars:1,consts:[[1,"bd-example"],[1,"row","my-2"],[1,"col"],["id","image-upload","images","true",3,"fileList","uploadFiles","deleteItem"]],template:function(e,o){1&e&&(t.TgZ(0,"h3"),t._uU(1,"Con anteprima delle immagini"),t.qZA(),t.TgZ(2,"div",0)(3,"div",1)(4,"div",2)(5,"it-upload-file-list",3),t.NdJ("uploadFiles",function(l){return o.onUpdateImageList(l)})("deleteItem",function(l){return o.onDeleteImageList(l)}),t.qZA()()()()),2&e&&(t.xp6(5),t.Q6J("fileList",o.uploadedImageList))},dependencies:[y.L],encapsulation:2});var $=i(4408);const C=new(i(7565).v)($.o),R=C;var z=i(9751),P=i(3532);var V=i(5698),W=i(1872);const K=["uploadDragDropComponent"];class u{onDragUploadStart(e){(function G(n=0,e=C){return n<0&&(n=0),function O(n=0,e,o=R){let a=-1;return null!=e&&((0,P.K)(e)?o=e:a=e),new z.y(l=>{let p=function X(n){return n instanceof Date&&!isNaN(n)}(n)?+n-o.now():n;p<0&&(p=0);let k=0;return o.schedule(function(){l.closed||(l.next(k++),0<=a?this.schedule(void 0,a):l.complete())},p)})}(n,n,e)})(1e3).pipe((0,V.q)(100),(0,F.U)(o=>10*(o+1))).subscribe(o=>{this.uploadDragDropComponent.progress(o),o>=100&&setTimeout(()=>{this.uploadDragDropComponent.reset()},2e3)})}}u.\u0275fac=function(e){return new(e||u)},u.\u0275cmp=t.Xpm({type:u,selectors:[["it-upload-drag-drop-example"]],viewQuery:function(e,o){if(1&e&&t.Gf(K,5),2&e){let a;t.iGM(a=t.CRH())&&(o.uploadDragDropComponent=a.first)}},decls:7,vars:0,consts:[[1,"bd-example"],[1,"row","my-2"],[1,"col"],["id","drag-drop-upload",3,"fileStartUpload"],["uploadDragDropComponent",""]],template:function(e,o){1&e&&(t.TgZ(0,"h3"),t._uU(1,"Upload Drag&drop"),t.qZA(),t.TgZ(2,"div",0)(3,"div",1)(4,"div",2)(5,"it-upload-drag-drop",3,4),t.NdJ("fileStartUpload",function(l){return o.onDragUploadStart(l)}),t.qZA()()()())},dependencies:[W.S],encapsulation:2});class f{}f.\u0275fac=function(e){return new(e||f)},f.\u0275cmp=t.Xpm({type:f,selectors:[["it-upload-examples"]],decls:6,vars:0,consts:[["html",'<h3>Upload con lista di file</h3>\n<div class="bd-example">\n  <div class="row my-2">\n    <div class="col">\n      <it-upload-file-list id="file-upload" [fileList]="uploadedFileList"\n                           (uploadFiles)="onUpdateFileList($event)"\n                           (deleteItem)="onDeleteFileList($event)"></it-upload-file-list>\n    </div>\n  </div>\n</div>',"typescript","import {Component} from '@angular/core';\nimport {UploadFileListItem} from \"../../../../projects/design-angular-kit/src/lib/interfaces/form\";\nimport {catchError, finalize, from, map, of, skipWhile, switchMap, tap} from \"rxjs\";\nimport {HttpClient, HttpEventType, HttpResponse} from \"@angular/common/http\";\n\n@Component({\n  selector: 'it-upload-file-list-example',\n  templateUrl: './upload-file-list-example.component.html'\n})\nexport class UploadFileListExampleComponent {\n\n  uploadedFileList: Array<UploadFileListItem> = [\n    {\n      id: 0,\n      file: new File([], 'nome-file-01.pdf'),\n    },\n    {\n      id: 1,\n      file: new File([], 'nome-file-02-nome-file-lungo-per-ellissi.doc'),\n    },\n    {\n      id: 2,\n      file: new File([], 'nome-file-03.png'),\n      progress: 43,\n      removable: true\n    },\n    {\n      id: 3,\n      file: new File([], 'nome-file-04.png'),\n      error: true,\n      removable: true\n    }\n  ];\n\n\n  constructor(\n    private readonly httpClient: HttpClient\n  ) {\n  }\n\n\n  onUpdateFileList(files: FileList): void {\n    const newFiles: Array<UploadFileListItem> = Array.from(files).map((file, index) => ({\n      id: (index + this.uploadedFileList.length), // I set an id, useful when deleting\n      file, // The uploaded file\n      removable: true // set new file as removable\n    }));\n\n    this.uploadedFileList = [...this.uploadedFileList, ...newFiles];\n  }\n\n  onDeleteFileList(item: UploadFileListItem): void {\n    this.uploadedFileList = this.uploadedFileList.filter(i => i.id !== item.id);\n  }\n\n  /**\n   * Example to upload file with HttpClient\n   */\n  httpClientExample(): void {\n    const fileToUpload = this.uploadedFileList[0];\n    fileToUpload.progress = 1;\n    fileToUpload.error = undefined;\n    fileToUpload.removable = false;\n\n    from(fileToUpload.file.arrayBuffer()).pipe( // Converting the file to arrayBuffer\n      switchMap(arrayBuffer => {\n        const bytes = [...new Uint8Array(arrayBuffer)]; // Convert arrayBuffer to Array<number>\n\n        // NOTE: File conversion depends on your server / API\n        // If you want to transform the file to base64 you can use the helper function\n        // import {FileUtils} from \"design-angular-kit\";\n        // const base64 = FileUtils.fileToBase64(fileToUpload.file)\n\n        return this.httpClient.post<any>('url', bytes, {\n          reportProgress: true,\n          observe: 'events'\n        })\n      }),\n      tap(event => { // Update the progress request status\n        if (event.type === HttpEventType.UploadProgress) {\n          fileToUpload.progress = Math.round(event.loaded / (event.total || 1) * 100);\n        }\n      }),\n      skipWhile(event => event.type !== HttpEventType.Response), // skip while the request not is complete\n      map(event => (event as HttpResponse<any>).body), // request is complete with body\n      tap(uploadedFile => {\n        fileToUpload.progress = 100;\n      }),\n      catchError(error => {\n        fileToUpload.progress = undefined;\n        fileToUpload.removable = true;\n        fileToUpload.error = true;\n        fileToUpload.tooltip = error.message; // Show error message as tooltip\n        return of(null); // File upload failed\n      }),\n      finalize(() => {\n        if (!fileToUpload.error && fileToUpload.progress && fileToUpload.progress < 100) {\n          // There are no errors but the file upload is not complete\n          fileToUpload.progress = undefined;\n          fileToUpload.removable = true;\n          fileToUpload.error = true;\n          fileToUpload.tooltip = 'Incomplete upload error'; // Show error message as tooltip\n        }\n      })\n    );\n\n  }\n}"],["html",'<h3>Con anteprima delle immagini</h3>\n<div class="bd-example">\n  <div class="row my-2">\n    <div class="col">\n      <it-upload-file-list id="image-upload" [fileList]="uploadedImageList"\n                           images="true"\n                           (uploadFiles)="onUpdateImageList($event)"\n                           (deleteItem)="onDeleteImageList($event)"></it-upload-file-list>\n    </div>\n  </div>\n</div>',"typescript","import {Component, OnInit} from '@angular/core';\nimport {UploadFileListItem} from \"../../../../projects/design-angular-kit/src/lib/interfaces/form\";\nimport {HttpClient} from \"@angular/common/http\";\nimport {forkJoin} from \"rxjs\";\n\n@Component({\n  selector: 'it-upload-image-list-example',\n  templateUrl: './upload-image-list-example.component.html'\n})\nexport class UploadImageListExampleComponent implements OnInit {\n\n  uploadedImageList: Array<UploadFileListItem> = [];\n\n  constructor(\n    private readonly httpClient: HttpClient\n  ) {\n  }\n\n  ngOnInit() {\n    const images$ = [\n      'https://picsum.photos/40/40?image=1055',\n      'https://picsum.photos/80/40?image=1056',\n      'https://picsum.photos/40/40?image=1057',\n      'https://picsum.photos/120/200?image=1058'\n    ].map(url => this.httpClient.get(url, {responseType: \"blob\"}));\n\n    forkJoin(images$).subscribe((blobImages) => {\n      this.uploadedImageList = blobImages.map((blob, index) => {\n        const fileName = index === 1 ? 'nome-file-2-nome-file-lungo-per-ellissi.jpg' : `nome-file-${index + 1}.jpg`;\n        return {\n          id: index,\n          file: new File([blob], fileName),\n          removable: index > 1,\n          progress: index === 2 ? 45 : undefined,\n          error: index === 3\n        }\n      })\n    });\n  }\n\n  onUpdateImageList(files: FileList): void {\n    const newFiles: Array<UploadFileListItem> = Array.from(files).map((file, index) => ({\n      id: (index + this.uploadedImageList.length), // I set an id, useful when deleting\n      file, // The uploaded file\n      removable: true // set new file as removable\n    }));\n\n    this.uploadedImageList = [...this.uploadedImageList, ...newFiles];\n  }\n\n  onDeleteImageList(item: UploadFileListItem): void {\n    this.uploadedImageList = this.uploadedImageList.filter(i => i.id !== item.id);\n  }\n}"],["html",'<h3>Upload Drag&drop</h3>\n<div class="bd-example">\n  <div class="row my-2">\n    <div class="col">\n      <it-upload-drag-drop id="drag-drop-upload" (fileStartUpload)="onDragUploadStart($event)"\n                           #uploadDragDropComponent></it-upload-drag-drop>\n    </div>\n  </div>\n</div>',"typescript","import {Component, ViewChild} from '@angular/core';\nimport {interval, map, take} from \"rxjs\";\nimport {\n  UploadDragDropComponent\n} from \"../../../../projects/design-angular-kit/src/lib/components/form/upload-drag-drop/upload-drag-drop.component\";\n\n@Component({\n  selector: 'it-upload-drag-drop-example',\n  templateUrl: './upload-drag-drop-example.component.html'\n})\nexport class UploadDragDropExampleComponent {\n\n  @ViewChild('uploadDragDropComponent') uploadDragDropComponent!: UploadDragDropComponent;\n\n  onDragUploadStart(file: File): void {\n    interval(1000).pipe( // Simulate upload of single file\n      take(100),\n      map(x => (x + 1) * 10) // Start from 1, end 100\n    ).subscribe(progress => {\n      this.uploadDragDropComponent.progress(progress);\n      if (progress >= 100) {\n        setTimeout(() => {\n          this.uploadDragDropComponent.reset();\n        }, 2000);\n      }\n    });\n  }\n\n}"]],template:function(e,o){1&e&&t._UZ(0,"it-upload-file-list-example")(1,"it-source-display",0)(2,"it-upload-image-list-example")(3,"it-source-display",1)(4,"it-upload-drag-drop-example")(5,"it-source-display",2)},dependencies:[A.F,d,m,u],encapsulation:2});class c{constructor(){this.fileListComponent=U.wx.find(e=>"UploadFileListComponent"===e.name),this.dragDropComponent=U.wx.find(e=>"UploadDragDropComponent"===e.name)}}c.\u0275fac=function(e){return new(e||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["it-upload-index"]],decls:15,vars:3,consts:[[1,"bd-title"],[1,"bd-lead"],[3,"innerHTML"],["id","example","label","Esempi","active","true",1,"mt-3"],["id","api","label","API",1,"mt-3"],[3,"component"]],template:function(e,o){1&e&&(t.TgZ(0,"h1",0),t._uU(1,"Upload"),t.qZA(),t.TgZ(2,"p",1),t._uU(3,"Elementi dei form dedicati al caricamento file."),t.qZA(),t._UZ(4,"div",2),t.TgZ(5,"it-tab-container")(6,"it-tab-item",3),t._UZ(7,"it-upload-examples"),t.qZA(),t.TgZ(8,"it-tab-item",4)(9,"h2"),t._uU(10,"Upload con lista di file"),t.qZA(),t._UZ(11,"it-api-parameters",5),t.TgZ(12,"h2"),t._uU(13,"Upload Drag&drop"),t.qZA(),t._UZ(14,"it-api-parameters",5),t.qZA()()),2&e&&(t.xp6(4),t.Q6J("innerHTML",o.fileListComponent.description,t.oJD),t.xp6(7),t.Q6J("component",o.fileListComponent),t.xp6(3),t.Q6J("component",o.dragDropComponent))},dependencies:[T.G,b.H,E.D,f],encapsulation:2});const Y=[{path:"",component:c}];class s{}s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[v.Bz.forChild(Y),v.Bz]});class r{}r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[x.ez,D.m,I.u5,s]})}}]);