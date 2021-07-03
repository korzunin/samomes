(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51895f66"],{"36af":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.isRecipe?i("div",{staticClass:"mb-2"},[e._v(" Рецепт ")]):e._e(),e.recipe.volume?i("div",{staticClass:"d-flex justify-space-between body-2"},[i("span",{},[e._v(" Объем удобрения ")]),i("span",[e._v(" "+e._s(e.recipe.volume)+" мл ")])]):e._e(),e._l(e.recipe.reagents,(function(t){return[e.recipe.mass[t]?i("div",{key:t,staticClass:"d-flex justify-space-between body-2"},[i("span",[e._v(" "+e._s(e.FORMULAS[t].name)+" ")]),i("span",[e._v(" "+e._s(e.recipe.mass[t].toFixed(2))+" г ")])]):e._e()]})),e.isRecipe?i("v-divider",{staticClass:"my-3"}):e._e(),e.isConcentration(e.recipe.concentration)?i("div",{staticClass:"d-flex justify-space-between"},[i("div",{},[e._v(" Концентрация ")]),i("div",{staticClass:"d-flex body-2"},[i("div",e._l(Object.keys(e.concentrations),(function(t){return i("div",{key:t+"name",staticClass:"mr-3"},[e._v(" "+e._s(e.convertIonName(t))+" ")])})),0),i("div",e._l(e.concentrations,(function(t,n){return i("div",{key:n+"unit",staticClass:"text-right"},[e._v(" "+e._s((e.convertIonRatio(n)*t*(!e.recipe.volume&&e.isRecipe?1e3:1)).toFixed(2))+" "+e._s(!e.recipe.volume&&e.isRecipe?"мг/г":"г/л")+" ")])})),0)])]):e._e(),e.recipe.note?i("v-divider",{staticClass:"my-3"}):e._e(),e.recipe.note?i("div",{staticClass:"d-flex justify-space-between"},[i("div",{staticClass:"mr-3"},[e._v(" Примечание ")]),i("div",{staticClass:"text-right body-2"},[e._v(" "+e._s(e.recipe.note)+" ")])]):e._e()],2)},s=[],o=i("e8d1"),d=i("da53"),c={name:"Recipe",props:{recipe:{type:Object,default:function(){}}},data:function(){return{FORMULAS:o["a"]}},computed:{concentrations:function(){return Object(d["f"])(this.recipe.concentration)},isRecipe:function(){return this.recipe.reagents&&this.recipe.reagents.length>0}},methods:{convertIonName:d["b"],convertIonRatio:d["c"],countTotalIonConcentration:d["f"],isConcentration:d["h"]}},a=c,u=i("2877"),r=i("6544"),l=i.n(r),N=i("ce7e"),f=Object(u["a"])(a,n,s,!1,null,"1813b63b",null);t["a"]=f.exports;l()(f,{VDivider:N["a"]})},"3e20":function(e,t,i){},"4fad":function(e,t,i){var n=i("23e7"),s=i("6f53").entries;n({target:"Object",stat:!0},{entries:function(e){return s(e)}})},"8ce9":function(e,t,i){},b0a2:function(e,t,i){"use strict";t["a"]={H:1.00811,B:10.811,C:12.0107,N:14.0067,O:15.99977,Mg:24.305,P:30.973762,S:32.065,Cl:35.453,K:39.0983,Ca:40.078,J:126.90447,Cu:63.546,Zn:65.38,Mo:95.95,Mn:54.938044,Fe:55.845,Na:22.989769}},ce7e:function(e,t,i){"use strict";var n=i("5530"),s=(i("8ce9"),i("7560"));t["a"]=s["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(e){var t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:Object(n["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(n["a"])({role:"separator","aria-orientation":t},this.$attrs),on:this.$listeners})}})},da53:function(e,t,i){"use strict";i.d(t,"f",(function(){return c})),i.d(t,"d",(function(){return u})),i.d(t,"h",(function(){return r})),i.d(t,"g",(function(){return l})),i.d(t,"e",(function(){return N})),i.d(t,"a",(function(){return m})),i.d(t,"b",(function(){return v})),i.d(t,"c",(function(){return O})),i.d(t,"j",(function(){return b})),i.d(t,"i",(function(){return p}));var n=i("2909"),s=i("3835"),o=(i("159b"),i("07ac"),i("4fad"),i("b64b"),i("b0a2")),d=i("e8d1"),c=function(e){var t={};return Object.values(e).forEach((function(e){Object.entries(e).forEach((function(e){var i=Object(s["a"])(e,2),n=i[0],o=i[1];void 0===t[n]&&(t[n]=0),t[n]+=o}))})),t},a=function(e){var t=0,i=d["a"][e].ions;return Object.entries(i).forEach((function(e){var i=Object(s["a"])(e,2),n=i[0],d=i[1];t+=o["a"][n]*d.count})),t},u=function(e){var t=a(e),i={},n=d["a"][e].ions;return Object.entries(n).forEach((function(e){var n=Object(s["a"])(e,2),d=n[0],c=n[1];c.isNeeded&&(i[d]=o["a"][d]*c.count/t)})),i},r=function(e){var t=!1;return Object.values(e).forEach((function(e){Object.keys(e).forEach((function(i){e[i]&&(t=!0)}))})),t},l=function(e){var t={};return Object.values(e).forEach((function(e){Object.keys(e).forEach((function(i){void 0===t[i]&&(t[i]=0),t[i]+=e[i]}))})),t},N=function(e){var t=0,i=l(e);return Object.keys(i).forEach((function(e){t+=i[e]})),t},f=function(e){var t,i=0;return Object(n["a"])(e).forEach((function(e){i+=+e?o["a"][t]*(parseInt(e,10)-1):o["a"][e],t=e})),i},m={N:"NO3",NO3:"N",P:"PO4",PO4:"P"},v=function(e){return m[e]||e},O=function(e){return v(e)!==e?f(v(e))/f(e):1},b=function(e){return e.reagents&&e.reagents.length>0},p=function(e){return e.elements&&Object.keys(e.elements).length>0}},e8d1:function(e,t,i){"use strict";t["a"]={KNO3:{ions:{K:{isNeeded:!0,count:1},N:{isNeeded:!0,count:1},O:{isNeeded:!1,count:3}},solubilityLimit:242,name:"Калия нитрат"},KH2PO4:{ions:{K:{isNeeded:!0,count:1},P:{isNeeded:!0,count:1},O:{isNeeded:!1,count:4},H:{isNeeded:!1,count:2}},solubilityLimit:226,name:"Калия монофосфат"},K2HPO4:{ions:{K:{isNeeded:!0,count:2},P:{isNeeded:!0,count:1},O:{isNeeded:!1,count:4},H:{isNeeded:!1,count:1}},solubilityLimit:159.8,name:"Калия гидроортофосфат"},K4P2O7:{ions:{K:{isNeeded:!0,count:4},P:{isNeeded:!0,count:2},O:{isNeeded:!1,count:7}},solubilityLimit:1870,name:"Калия пирофосфат"},"K4P2O7(H20)3":{ions:{K:{isNeeded:!0,count:4},P:{isNeeded:!0,count:2},O:{isNeeded:!1,count:10},H:{isNeeded:!1,count:6}},solubilityLimit:1870,name:"Калия пирофосфат кристалогидрат"},K2SO4:{ions:{K:{isNeeded:!0,count:2},S:{isNeeded:!1,count:1},O:{isNeeded:!1,count:4}},solubilityLimit:111,name:"Калия сульфат"},"(NH2)2CO":{ions:{N:{isNeeded:!0,count:2},H:{isNeeded:!1,count:4},C:{isNeeded:!1,count:1},O:{isNeeded:!1,count:1}},solubilityLimit:108,name:"Карбамид (мочевина)"},NH4NO3:{ions:{N:{isNeeded:!0,count:2},H:{isNeeded:!1,count:4},O:{isNeeded:!1,count:3}},solubilityLimit:190,name:"Нитрат аммония"},MgSO4:{ions:{Mg:{isNeeded:!0,count:1},S:{isNeeded:!1,count:1},O:{isNeeded:!1,count:4}},solubilityLimit:351,name:"Магния Сульфат"},"MgSO4(H2O)7":{ions:{Mg:{isNeeded:!0,count:1},S:{isNeeded:!1,count:1},H:{isNeeded:!1,count:14},O:{isNeeded:!1,count:11}},solubilityLimit:1130,name:"Магния Сульфат (магнезия)"},"CaSO4(H2O)2":{ions:{Ca:{isNeeded:!0,count:1},S:{isNeeded:!1,count:1},H:{isNeeded:!1,count:4},O:{isNeeded:!1,count:6}},solubilityLimit:2.036,name:"Кальция Сульфат (гипс)"},CaCl2:{ions:{Ca:{isNeeded:!0,count:1},Cl:{isNeeded:!1,count:2}},solubilityLimit:745,name:"Кальция Хлорид"},"CaCl2(H20)2":{ions:{Ca:{isNeeded:!0,count:1},Cl:{isNeeded:!1,count:2},H:{isNeeded:!1,count:4},O:{isNeeded:!1,count:2}},solubilityLimit:745,name:"Кальция Хлорид 2-водный"},H3BO3:{ions:{H:{isNeeded:!1,count:3},B:{isNeeded:!0,count:1},O:{isNeeded:!1,count:3}},solubilityLimit:47.2,name:"Борная кислота"},KI:{ions:{K:{isNeeded:!0,count:1},I:{isNeeded:!1,count:1}},solubilityLimit:144.5,name:"Йодид Калия"},"CuSO4(H2O)5":{ions:{Cu:{isNeeded:!0,count:1},S:{isNeeded:!1,count:1},H:{isNeeded:!1,count:10},O:{isNeeded:!1,count:9}},solubilityLimit:356,name:"Меди Сульфат (Медный Купорос)"},"ZnSO4(H2O)7":{ions:{Zn:{isNeeded:!0,count:1},S:{isNeeded:!1,count:1},H:{isNeeded:!1,count:14},O:{isNeeded:!1,count:11}},solubilityLimit:540,name:"Цинка Сульфат (Цинковый Купорос)"},"(NH4)2MoO4":{ions:{Mo:{isNeeded:!0,count:1},N:{isNeeded:!1,count:2},H:{isNeeded:!1,count:8},O:{isNeeded:!1,count:4}},solubilityLimit:400,name:"Молибдат Аммония"},"(NH4)6Mo7O24(H2O)4":{ions:{Mo:{isNeeded:!0,count:7},N:{isNeeded:!1,count:6},H:{isNeeded:!1,count:32},O:{isNeeded:!1,count:28}},solubilityLimit:280,name:"Парамолибдат Аммония Тетрагидрат"},"MnSO4(H2O)5":{ions:{Mn:{isNeeded:!0,count:1},S:{isNeeded:!1,count:1},H:{isNeeded:!1,count:10},O:{isNeeded:!1,count:9}},solubilityLimit:600,name:"Марганца Сульфат Кристаллогидрат"},MnSO4H2O:{ions:{Mn:{isNeeded:!0,count:1},S:{isNeeded:!1,count:1},H:{isNeeded:!1,count:2},O:{isNeeded:!1,count:5}},solubilityLimit:762,name:"Марганца Сульфат Моногидрат"},"Fe2(SO4)3(H2O)9":{ions:{Fe:{isNeeded:!0,count:2},S:{isNeeded:!1,count:3},H:{isNeeded:!1,count:18},O:{isNeeded:!1,count:21}},solubilityLimit:263,name:"Железа Сульфат"},"FeSO4(H2O)7":{ions:{Fe:{isNeeded:!0,count:2},S:{isNeeded:!1,count:3},H:{isNeeded:!1,count:18},O:{isNeeded:!1,count:21}},solubilityLimit:263,name:"Железный купорос"},C12H22FeO14:{ions:{Fe:{isNeeded:!0,count:1},C:{isNeeded:!1,count:12},H:{isNeeded:!1,count:22},O:{isNeeded:!1,count:14}},solubilityLimit:100,name:"Железа Глюконат"},"C12H22FeO14(H2O)":{ions:{Fe:{isNeeded:!0,count:1},C:{isNeeded:!1,count:12},H:{isNeeded:!1,count:24},O:{isNeeded:!1,count:15}},solubilityLimit:100,name:"Железа Глюконат Гидрат"},"C12H22FeO14(H2O)2":{ions:{Fe:{isNeeded:!0,count:1},C:{isNeeded:!1,count:12},H:{isNeeded:!1,count:26},O:{isNeeded:!1,count:16}},solubilityLimit:100,name:"Железа Глюконат Дигидрат"},C10H14N2Na2O8:{ions:{C:{isNeeded:!1,count:10},H:{isNeeded:!1,count:14},N:{isNeeded:!1,count:2},Na:{isNeeded:!0,count:2},O:{isNeeded:!1,count:8}},solubilityLimit:100,name:"Трилон Б (хелатор EDTA-Na2)"},C14H18N3O10Na2Fe:{ions:{Fe:{isNeeded:!0,count:1},C:{isNeeded:!1,count:14},H:{isNeeded:!1,count:18},N:{isNeeded:!1,count:3},O:{isNeeded:!1,count:10},Na:{isNeeded:!0,count:2}},solubilityLimit:110,name:"Железа DTPA 11%"},C6H7KO2:{ions:{K:{isNeeded:!0,count:1},C:{isNeeded:!1,count:6},H:{isNeeded:!1,count:7},O:{isNeeded:!1,count:2}},name:"Сорбат калия (консервант E202)"}}},f680:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{staticClass:"mb-12"},[i("v-row",[i("page-title",[e._v(" Удобрения ")]),i("guide",[e._v(" На этой странице можно добавить готовые удобрения (самодельные или фирменные удобрения с известным составом). А так же можно добавить удобрение с неизвестным составом, чтобы была возможность учесть его в расписании. "),i("br"),i("br"),e._v(" Готовые удобрения можно использовать при составлении "),i("router-link",{attrs:{to:"/schedules"}},[e._v(" расписания ")]),e._v(" внесения удобрений. ")],1),0===e.fertilizers.length?i("v-col",{attrs:{cols:"12",md:"8","offset-md":"2"}},[i("p",{staticClass:"mb-8",class:{"text-h6":e.$vuetify.breakpoint["xs"],"text-h5":e.$vuetify.breakpoint["smAndUp"]}},[e._v(" У вас нет ни одного удобрения ")])]):e._e(),i("v-col",{attrs:{cols:"12",sm:"8","offset-sm":"2"}},[i("v-expansion-panels",{attrs:{multiple:""}},[i("draggable",e._b({staticStyle:{width:"100%"},attrs:{handle:".handle"},on:{start:function(t){e.drag=!0},end:function(t){e.drag=!1}},model:{value:e.fertilizers,callback:function(t){e.fertilizers=t},expression:"fertilizers"}},"draggable",e.dragOptions,!1),[i("transition-group",{attrs:{type:"transition",name:e.drag?null:"flip-list"}},e._l(e.fertilizers,(function(t,n){return i("v-expansion-panel",{key:t.name},[i("v-expansion-panel-header",{staticClass:"pa-3 py-sm-4 px-sm-6"},[i("div",{staticClass:"d-flex justify-space-between align-center",staticStyle:{width:"100%"}},[i("span",{staticClass:"no-break font-weight-regular d-flex flex-column flex-sm-row align-start",class:{"subtitle-1":e.$vuetify.breakpoint["xs"],title:e.$vuetify.breakpoint["smAndUp"]}},[i("span",{staticStyle:{"line-height":"1.25rem"}},[e._v(" "+e._s(t.name)+" ")])]),i("span",{staticClass:"mr-3"},[i("v-tooltip",{attrs:{bottom:"","max-width":"400"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[i("v-icon",e._g({staticClass:"handle ml-2"},n),[e._v("mdi mdi-drag")])]}}],null,!0)},[e._v(" "+e._s(e.$t("fertilizers.panels.header.pull"))+" ")])],1)])]),i("v-expansion-panel-content",[i("recipe",{attrs:{recipe:t}}),i("div",{staticClass:"d-flex justify-end mt-4"},[i("v-btn",{staticClass:"mr-n4",attrs:{text:"",to:"/fertilizers/"+n}},[e._v(" "+e._s(e.$t("buttons.open"))+" ")])],1)],1)],1)})),1)],1)],1)],1)],1),i("add-button",{attrs:{action:e.addFertilizer}},[e._v(" "+e._s(e.$t("fertilizers.addButton"))+" ")])],1)},s=[],o=i("5530"),d=i("2f62"),c=i("b76a"),a=i.n(c),u=i("36af"),r={name:"Fertilizers",components:{draggable:a.a,Recipe:u["a"]},data:function(){return{drag:!1}},computed:{dragOptions:function(){return{animation:200,group:"description",disabled:!1,ghostClass:"ghost"}},fertilizers:{get:function(){return this.$store.state.fertilizers},set:function(e){this.FERTILIZER_MOVE(e)}}},methods:Object(o["a"])(Object(o["a"])({},Object(d["c"])(["FERTILIZER_MOVE","SNACKBAR_SHOW"])),{},{addFertilizer:function(){return this.$router.push("/fertilizers/create")}})},l=r,N=(i("fbef"),i("2877")),f=i("6544"),m=i.n(f),v=i("8336"),O=i("62ad"),b=i("a523"),p=i("cd55"),y=i("49e2"),C=i("c865"),h=i("0393"),_=i("132d"),H=i("0fd9"),g=i("3a2f"),x=Object(N["a"])(l,n,s,!1,null,null,null);t["default"]=x.exports;m()(x,{VBtn:v["a"],VCol:O["a"],VContainer:b["a"],VExpansionPanel:p["a"],VExpansionPanelContent:y["a"],VExpansionPanelHeader:C["a"],VExpansionPanels:h["a"],VIcon:_["a"],VRow:H["a"],VTooltip:g["a"]})},fbef:function(e,t,i){"use strict";i("3e20")}}]);
//# sourceMappingURL=chunk-51895f66.01b400f1.js.map