(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a948fd6"],{"0fd9":function(t,a,e){"use strict";var n=e("ade3"),r=e("5530"),s=(e("caad"),e("2532"),e("99af"),e("b64b"),e("ac1f"),e("5319"),e("4ec9"),e("d3b7"),e("3ca3"),e("ddb0"),e("159b"),e("4b85"),e("2b0e")),i=e("d9f7"),o=e("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,a){return c.reduce((function(e,n){return e[t+Object(o["z"])(n)]=a(),e}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},v=u("align",(function(){return{type:String,default:null,validator:d}})),f=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},p=u("justify",(function(){return{type:String,default:null,validator:f}})),b=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},h=u("alignContent",(function(){return{type:String,default:null,validator:b}})),m={align:Object.keys(v),justify:Object.keys(p),alignContent:Object.keys(h)},g={align:"align",justify:"justify",alignContent:"align-content"};function y(t,a,e){var n=g[t];if(null!=e){if(a){var r=a.replace(t,"");n+="-".concat(r)}return n+="-".concat(e),n.toLowerCase()}}var w=new Map;a["a"]=s["a"].extend({name:"v-row",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},v),{},{justify:{type:String,default:null,validator:f}},p),{},{alignContent:{type:String,default:null,validator:b}},h),render:function(t,a){var e=a.props,r=a.data,s=a.children,o="";for(var c in e)o+=String(e[c]);var l=w.get(o);return l||function(){var t,a;for(a in l=[],m)m[a].forEach((function(t){var n=e[t],r=y(a,t,n);r&&l.push(r)}));l.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},Object(n["a"])(t,"align-".concat(e.align),e.align),Object(n["a"])(t,"justify-".concat(e.justify),e.justify),Object(n["a"])(t,"align-content-".concat(e.alignContent),e.alignContent),t)),w.set(o,l)}(),t(e.tag,Object(i["a"])(r,{staticClass:"row",class:l}),s)}})},"754b":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12",md:"8","offset-md":"2"}},[e("p",[t._v(' Проект "Самомес" - это калькулятор самодельных рецептов удобрений для аквариума и удобный способ составить расписание внесения удобрений на неделю или любой другой период времени. ')]),e("p",[t._v(" Калькулятор снижает рутинную работу расчета суммарной концентрации реагентов в удобрении (особенно калия) при составлении рецептов. ")]),e("p",[t._v(" Вы можете использовать как самодельные удобрения при составлении расписания, так и заводские или чужие самодельные удобрения с известными концентрациями элементов. ")]),e("p",[t._v(" Калькулятор не научит вас химии, не объяснит почему выбраны те или иные реагенты и каким образом замешиваются удобрения, не скажет какие концентрации элементов необходимы для разных растений. ")]),e("p",[t._v(" Он только поможет раcсчитать количество удобрений, которое необходимо залить в ваш аквариум для достижения нужных концентраций элементов в воде. ")]),e("p",[t._v(" Проект расчитан на более опытных аквариумистов. ")]),e("p",{staticClass:"font-weight-medium red--text"},[t._v(" Внимание! С помощью калькулятора вы делаете удобрения и составляете расписание на свой страх и риск! ")]),e("p",[t._v(" Если вы все-таки хотите научиться делать удобрения для аквариума своими руками и воспользоваться калькулятором, то советую ознакомиться с ниже представленными ссылками на сайты и видео материалы сайта Youtube. А так же обзавестись тестами аквариумной воды. ")]),e("v-divider",{staticClass:"my-5"}),e("p",{staticClass:"my-8",class:{headline:t.$vuetify.breakpoint["xs"],"display-1":t.$vuetify.breakpoint["smAndUp"]}},[t._v(" Видео ")]),e("p",{staticClass:"d-flex flex-column body-2"},[e("a",{staticClass:"mb-2",attrs:{href:"https://www.youtube.com/watch?v=GSLYotAT8Xs&t=27s",target:"_blank"}},[t._v("Промо видео проекта")]),e("a",{staticClass:"mb-2",attrs:{href:"https://www.youtube.com/watch?v=Vyq-R0tv384",target:"_blank"}},[t._v("Удобрение для аквариумных растений своими руками. Фосфор, Азот, Калий и Микро.")]),e("a",{staticClass:"mb-2",attrs:{href:"https://www.youtube.com/watch?v=wslFKci51uo",target:"_blank"}},[t._v("Как мы корректируем дозировку своих удобрений для аквариумных растений.")]),e("a",{staticClass:"mb-2",attrs:{href:"https://www.youtube.com/watch?v=niAYM8DRv_w&t=338s",target:"_blank"}},[t._v("Удобрения в аквариуме! Как мы подаём и чего придерживаемся в своих аквариумах!")]),e("a",{staticClass:"mb-2",attrs:{href:"https://www.youtube.com/watch?v=UlbCnqntrww&t=143s",target:"_blank"}},[t._v("Самомес. Удобрения NPK в аквариум.")]),e("a",{staticClass:"mb-2",attrs:{href:"https://www.youtube.com/watch?v=YToPYOHs37U",target:"_blank"}},[t._v("Макро удобрения для аквариумных растений")])]),e("p",{staticClass:"my-8",class:{headline:t.$vuetify.breakpoint["xs"],"display-1":t.$vuetify.breakpoint["smAndUp"]}},[t._v(" Статьи и сайты ")]),e("p",{staticClass:"d-flex flex-column body-2"},[e("a",{staticClass:"mb-2",attrs:{href:"http://www.amania.org/",target:"_blank"}},[t._v(" Amania - все о том КАК сделать аквариум с растениями ")]),e("a",{staticClass:"mb-2",attrs:{href:"https://aquascape-promotion.com",target:"_blank"}},[t._v(" Aquascape-promotion (сайт Сергея Ермолаева) ")]),e("a",{staticClass:"mb-2",attrs:{href:"https://fanfishka.ru/akvariumnye-stati/akvaskeyp/2033-vse-o-makro-udobreniyah-dlya-akvariuma.html",target:"_blank"}},[t._v(" Все о макро-удобрениях для аквариума ")])]),e("p",[t._v(" Это не полный список материалов, но достаточный, чтобы понять что и для чего нужно. ")]),e("v-divider",{staticClass:"my-5"}),e("p",{staticClass:"body-1"},[t._v(" По всем возникающим вопросам и пожеланиям вы можете писать в группу ВКонтакте "),e("a",{attrs:{href:"https://vk.com/samomes",target:"_blank"}},[t._v("Аквариум Самомес")]),t._v(". ")]),e("p",[t._v(" Буду рад помочь. ")])],1)],1)],1)},r=[],s={name:"About",data:function(){return{}}},i=s,o=e("2877"),c=e("6544"),l=e.n(c),u=e("62ad"),d=e("a523"),v=e("ce7e"),f=e("0fd9"),p=Object(o["a"])(i,n,r,!1,null,"01544773",null);a["default"]=p.exports;l()(p,{VCol:u["a"],VContainer:d["a"],VDivider:v["a"],VRow:f["a"]})},"8ce9":function(t,a,e){},a523:function(t,a,e){"use strict";e("4de4"),e("b64b"),e("2ca0"),e("99af"),e("20f6"),e("4b85"),e("498a"),e("a15b");var n=e("2b0e");function r(t){return n["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(a,e){var n=e.props,r=e.data,s=e.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var i=r.attrs;if(i){r.attrs={};var o=Object.keys(i).filter((function(t){if("slot"===t)return!1;var a=i[t];return t.startsWith("data-")?(r.attrs[t]=a,!1):a||"string"===typeof a}));o.length&&(r.staticClass+=" ".concat(o.join(" ")))}return n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),a(n.tag,r,s)}})}var s=e("d9f7");a["a"]=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,a){var e,n=a.props,r=a.data,i=a.children,o=r.attrs;return o&&(r.attrs={},e=Object.keys(o).filter((function(t){if("slot"===t)return!1;var a=o[t];return t.startsWith("data-")?(r.attrs[t]=a,!1):a||"string"===typeof a}))),n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),t(n.tag,Object(s["a"])(r,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(e||[])}),i)}})},ce7e:function(t,a,e){"use strict";var n=e("5530"),r=(e("8ce9"),e("7560"));a["a"]=r["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var a;return this.$attrs.role&&"separator"!==this.$attrs.role||(a=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(n["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(n["a"])({role:"separator","aria-orientation":a},this.$attrs),on:this.$listeners})}})}}]);
//# sourceMappingURL=chunk-3a948fd6.a6e7c701.js.map