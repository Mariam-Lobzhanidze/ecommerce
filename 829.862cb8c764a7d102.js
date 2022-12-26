"use strict";(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[829],{829:(T,l,i)=>{i.r(l),i.d(l,{ProductsModule:()=>P});var u=i(6895),s=i(3128),r=i(433),g=i(3900),f=i(9646),t=i(8256),Z=i(8746),m=i(6420);function h(o,n){if(1&o&&(t.TgZ(0,"option",15),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.name," ")}}let p=(()=>{class o{constructor(e,c,d,a){this.categoriesService=e,this.router=c,this.productsService=d,this.route=a,this.form=new r.cw({name:new r.NI("",r.kI.required),image:new r.NI("",r.kI.required),id:new r.NI(null),description:new r.NI("",r.kI.required),price:new r.NI("",r.kI.required),categoryId:new r.NI("",r.kI.required)}),this.categories$=this.categoriesService.getAll()}ngOnInit(){this.route.params.pipe((0,g.w)(e=>e.id?this.productsService.getOne(e.id):(0,f.of)(null))).subscribe(e=>{e&&this.form.patchValue({...e,categoryId:e.category.id})})}submit(){this.form.invalid||(this.form.value.id?this.productsService.update(this.form.value.id,this.form.value).pipe().subscribe(e=>{this.form.reset(),this.router.navigate(["/manager/products"])}):this.productsService.create(this.form.value).pipe().subscribe(e=>{this.form.reset(),this.router.navigate(["/manager/products"])}))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(Z.G),t.Y36(s.F0),t.Y36(m.su),t.Y36(s.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-add-edit"]],decls:28,vars:4,consts:[[1,"sz"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],["for","image"],["type","text","id","image","formControlName","image",1,"form-control"],["for","price"],["type","number","id","price","formControlName","price",1,"form-control"],["for","category"],["aria-label","Default select example","formControlName","categoryId",1,"form-select","form-control","cat"],[3,"value",4,"ngFor","ngForOf"],["for","description"],["type","text","id","description","formControlName","description",1,"form-control"],["type","submit",1,"btn","btn-primary"],[3,"value"]],template:function(e,c){1&e&&(t.TgZ(0,"p"),t._uU(1,"Add product"),t.qZA(),t.TgZ(2,"div",0)(3,"form",1),t.NdJ("ngSubmit",function(){return c.submit()}),t.TgZ(4,"div",2)(5,"label",3),t._uU(6,"Name"),t.qZA(),t._UZ(7,"input",4),t.qZA(),t.TgZ(8,"div",2)(9,"label",5),t._uU(10,"Image URL"),t.qZA(),t._UZ(11,"input",6),t.qZA(),t.TgZ(12,"div",2)(13,"label",7),t._uU(14,"Price"),t.qZA(),t._UZ(15,"input",8),t.qZA(),t.TgZ(16,"div",2)(17,"label",9),t._uU(18,"Category"),t.qZA(),t.TgZ(19,"select",10),t.YNc(20,h,2,2,"option",11),t.ALo(21,"async"),t.qZA()(),t.TgZ(22,"div",2)(23,"label",12),t._uU(24,"Description"),t.qZA(),t._UZ(25,"textarea",13),t.qZA(),t.TgZ(26,"button",14),t._uU(27,"Submit"),t.qZA()()()),2&e&&(t.xp6(3),t.Q6J("formGroup",c.form),t.xp6(17),t.Q6J("ngForOf",t.lcZ(21,2,c.categories$)))},dependencies:[u.sg,r._Y,r.YN,r.Kr,r.Fj,r.wV,r.EJ,r.JJ,r.JL,r.sg,r.u,u.Ov],styles:[".sz[_ngcontent-%COMP%]{width:40rem}.form-select[_ngcontent-%COMP%]{cursor:pointer}"]}),o})();const A=function(o){return["/manager/products/edit",o]};function b(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._UZ(2,"img",4),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.ALo(7,"currency"),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td",5)(11,"button",6),t._uU(12," Edit "),t.qZA(),t.TgZ(13,"button",7),t.NdJ("click",function(){const a=t.CHM(e).$implicit,y=t.oxw();return t.KtG(y.deleteItem(a.id))}),t._uU(14," Remove "),t.qZA()()()}if(2&o){const e=n.$implicit;t.xp6(2),t.Q6J("src",e.image,t.LSH),t.xp6(2),t.Oqu(null==e?null:e.name),t.xp6(2),t.Oqu(t.xi3(7,5,null==e?null:e.price,"USD")),t.xp6(3),t.Oqu(null==e||null==e.category?null:e.category.name),t.xp6(2),t.Q6J("routerLink",t.VKq(8,A,e.id))}}const v=[{path:"",component:(()=>{class o{constructor(e){this.productsService=e,this.products=[]}ngOnInit(){this.getAll()}getAll(){this.productsService.getProducts({}).pipe().subscribe(e=>{this.products=e})}deleteItem(e){this.productsService.deleteItem(e).pipe().subscribe(c=>{this.getAll()})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.su))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-products"]],decls:20,vars:1,consts:[[1,"end"],["routerLink","/manager/products/create",1,"btn","btn-add"],[1,"table"],[4,"ngFor","ngForOf"],["width","90px",3,"src"],[1,"btn-toolbar"],[1,"btn","btn-primary",3,"routerLink"],[1,"btn","btn-danger",3,"click"]],template:function(e,c){1&e&&(t.TgZ(0,"div",0)(1,"button",1),t._uU(2,"Add"),t.qZA()(),t.TgZ(3,"div")(4,"div")(5,"table",2)(6,"thead")(7,"tr")(8,"th"),t._uU(9,"#"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Name"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Price"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Category"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Actions"),t.qZA()()(),t.TgZ(18,"tbody"),t.YNc(19,b,15,10,"tr",3),t.qZA()()()()),2&e&&(t.xp6(19),t.Q6J("ngForOf",c.products))},dependencies:[u.sg,s.rH,u.H9],styles:["button[_ngcontent-%COMP%]{font-size:1rem}.btn-add[_ngcontent-%COMP%]{background-color:#087563;color:#fff;margin-bottom:2rem}img[_ngcontent-%COMP%]{border-radius:5px;width:50px;height:50px}.table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{vertical-align:middle;font-size:1.2rem}"]}),o})()},{path:"create",component:p},{path:"edit/:id",component:p}];let C=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.Bz.forChild(v),s.Bz]}),o})(),P=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.ez,C,r.UX]}),o})()}}]);