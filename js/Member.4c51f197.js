(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Member"],{"5ca5":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"memberOrders"}},[n("h1",{staticClass:"mb-15 text-center"},[e._v("您的訂單")]),n("v-data-table",{attrs:{headers:e.headers,items:e.orders},scopedSlots:e._u([{key:"item._id",fn:function(t){var n=t.item;return[e._v(" "+e._s(n._id)+" ")]}},{key:"item.orderproducts",fn:function(t){var a=t.item;return[n("ul",e._l(a.products,(function(t){return n("li",{key:t._id},[t.product?[e._v(" "+e._s(t.product.name)+"/"+e._s(t.quantity)+"個 ")]:e._e()],2)})),0)]}},{key:"item.date",fn:function(t){var n=t.item;return[e._v(" "+e._s(new Date(n.date).toLocaleString("zh-tw"))+" ")]}},{key:"item.totalprice",fn:function(t){var a=t.item;return[n("p",[e._v(e._s(e.sumPrice(a.products)))])]}},{key:"item.pickupway",fn:function(t){var n=t.item;return[e._v(" "+e._s(n.user.pickupway)+" ")]}},{key:"item.pay",fn:function(t){var n=t.item;return[e._v(" "+e._s(n.user.pay)+" ")]}}])})],1)},r=[],o=n("1da1"),s=(n("96cf"),n("d3b7"),{data:function(){return{headers:[{text:"訂單編號",value:"_id"},{text:"購買日期",value:"date"},{text:"購買商品",value:"orderproducts"},{text:"總金額",value:"totalprice"},{text:"取貨方式",value:"pickupway"},{text:"付款方式",value:"pay"}],orders:[],total:0}},methods:{sumPrice:function(e){var t=e.reduce((function(e,t){return e+t.quantity*t.product.price}),0);return console.log(t),new Intl.NumberFormat("en-IN").format(t)}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log(e.user._id),console.log(e.user),t.next=5,e.api.get("/orders/me",{headers:{authorization:"Bearer "+e.user.token}});case 5:n=t.sent,a=n.data,console.log(a),e.orders=a.result,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),e.$swal({icon:"error",title:"失敗",text:"取得訂單失敗"});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()}}),i=s,c=n("2877"),l=n("6544"),u=n.n(l),d=n("8fea"),v=Object(c["a"])(i,a,r,!1,null,null,null);t["default"]=v.exports;u()(v,{VDataTable:d["a"]})},"5cfa":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",attrs:{id:"memberAppointment"}},[n("v-row",{staticClass:"fill-height"},[n("v-col",[n("v-sheet",{attrs:{height:"64"}},[n("v-toolbar",{attrs:{flat:""}},[n("v-btn",{staticClass:"mr-4",attrs:{outlined:"",color:"grey darken-2"},on:{click:e.setToday}},[e._v(" Today ")]),n("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:e.prev}},[n("v-icon",{attrs:{small:""}},[e._v("mdi-chevron-left")])],1),n("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:e.next}},[n("v-icon",{attrs:{small:""}},[e._v("mdi-chevron-right")])],1),e.$refs.calendar?n("v-toolbar-title",[e._v(" "+e._s(e.$refs.calendar.title)+" ")]):e._e(),n("v-spacer"),n("v-menu",{attrs:{bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({attrs:{outlined:"",color:"grey darken-2"}},"v-btn",r,!1),a),[n("span",[e._v(e._s(e.typeToLabel[e.type]))]),n("v-icon",{attrs:{right:""}},[e._v("mdi-menu-down")])],1)]}}])},[n("v-list",[n("v-list-item",{on:{click:function(t){e.type="day"}}},[n("v-list-item-title",[e._v("Day")])],1),n("v-list-item",{on:{click:function(t){e.type="week"}}},[n("v-list-item-title",[e._v("Week")])],1),n("v-list-item",{on:{click:function(t){e.type="month"}}},[n("v-list-item-title",[e._v("Month")])],1),n("v-list-item",{on:{click:function(t){e.type="4day"}}},[n("v-list-item-title",[e._v("4 days")])],1)],1)],1)],1)],1),n("v-sheet",{attrs:{height:"600"}},[n("v-calendar",{ref:"calendar",attrs:{color:"primary",events:e.events,"event-color":e.getEventColor,type:e.type},on:{"click:event":e.showEvent,"click:more":e.viewDay,"click:date":e.viewDay,change:e.updateRange},model:{value:e.focus,callback:function(t){e.focus=t},expression:"focus"}}),n("v-menu",{attrs:{"close-on-content-click":!1,activator:e.selectedElement,"offset-x":""},model:{value:e.selectedOpen,callback:function(t){e.selectedOpen=t},expression:"selectedOpen"}},[n("v-card",{attrs:{color:"grey lighten-4","min-width":"350px",flat:""}},[n("v-toolbar",{attrs:{color:e.selectedEvent.color,dark:""}},[n("v-toolbar-title",{domProps:{innerHTML:e._s(e.selectedEvent.name)}}),n("v-spacer")],1),n("v-card-text",[n("p",[e._v("預約人姓名："+e._s(e.selectedEvent.appointment.name))]),n("p",[e._v("預約人電話："+e._s(e.selectedEvent.appointment.phone))]),n("p",[e._v("預約人信箱："+e._s(e.selectedEvent.appointment.email))]),n("p",[e._v("預約人電話："+e._s(e.selectedEvent.appointment.pettype))]),n("p",[e._v("毛孩姓名："+e._s(e.selectedEvent.appointment.petname))]),n("p",[e._v("毛孩品種："+e._s(e.selectedEvent.appointment.petbreed))]),n("p",[e._v("服務項目："+e._s(e.selectedEvent.appointment.serviceitem))]),n("p",[e._v("備註："+e._s(e.selectedEvent.appointment.memo))])]),n("v-card-actions",[n("v-btn",{attrs:{text:""},on:{click:function(t){e.selectedOpen=!1}}},[e._v("close")]),n("v-btn",{attrs:{text:""},on:{click:function(t){return e.cancleappointment(e.selectedEvent._id)}}},[e._v(" 取消預約 ")])],1)],1)],1)],1)],1)],1)],1)},r=[],o=n("1da1"),s=(n("96cf"),n("4de4"),n("d3b7"),n("d81d"),n("b0c0"),{data:function(){return{focus:"",type:"month",typeToLabel:{month:"Month",week:"Week",day:"Day","4day":"4 Days"},selectedEvent:{appointment:{memo:"",name:"",email:"",phone:"",pettype:"",petname:"",petbreed:"",serviceitem:"",appointmentdate:"",appointmenttime:""}},selectedElement:null,selectedOpen:!1,events:[],eventsAll:[],colors:["blue","indigo","cyan","green","orange"]}},mounted:function(){this.$refs.calendar.checkChange()},methods:{viewDay:function(e){var t=e.date;this.focus=t,this.type="day"},getEventColor:function(e){return e.color},setToday:function(){this.focus=""},prev:function(){this.$refs.calendar.prev()},next:function(){this.$refs.calendar.next()},showEvent:function(e){var t=this,n=e.nativeEvent,a=e.event,r=function(){t.selectedEvent=a,t.selectedElement=n.target,t.selectedOpen=!0};this.selectedOpen?(this.selectedOpen=!1,requestAnimationFrame((function(){return requestAnimationFrame((function(){return r()}))}))):r(),n.stopPropagation()},updateRange:function(e){var t=e.start,n=e.end,a=new Date("".concat(t.date,"T00:00:00")).getTime(),r=new Date("".concat(n.date,"T23:59:59")).getTime();this.events=this.eventsAll.filter((function(e){return e.start<=r&&e.start>=a}))},rnd:function(e,t){return Math.floor((t-e+1)*Math.random())+e},cancleappointment:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(e),n.prev=1,n.next=4,t.api.delete("/appointments/deleteappointment/"+e,{headers:{authorization:"Bearer "+t.user.token}});case 4:t.getappointment(),t.$swal({icon:"success",title:"成功",text:"刪除預約成功"}),n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](1),t.$swal({icon:"error",title:"錯誤",text:"刪除預約失敗"});case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()},getappointment:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.api.get("/appointments/myappointment",{headers:{authorization:"Bearer "+e.user.token}});case 3:n=t.sent,a=n.data,e.eventsAll=a.result.map((function(t){return t.start=new Date(t.appointment.appointmentdate+"T"+t.appointment.appointmenttime),t.name=t.appointment.name,t.end=new Date(t.appointment.appointmentdate+"T"+t.appointment.appointmenttime),t.color=e.colors[e.rnd(0,e.colors.length-1)],t.timed=!0,t})),e.events=e.eventsAll,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),e.$swal({icon:"error",title:"失敗",text:"取得預約訂單失敗"});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getappointment();case 1:case"end":return t.stop()}}),t)})))()}}),i=s,c=n("2877"),l=n("6544"),u=n.n(l),d=n("8336"),v=n("a4f6"),m=n("b0af"),p=n("99d9"),f=n("62ad"),h=n("132d"),b=n("8860"),_=n("da13"),k=n("5d23"),g=n("e449"),x=n("0fd9"),w=n("8dd9"),y=n("2fa4"),V=n("71d9"),E=n("2a7f"),C=Object(c["a"])(i,a,r,!1,null,null,null);t["default"]=C.exports;u()(C,{VBtn:d["a"],VCalendar:v["a"],VCard:m["a"],VCardActions:p["a"],VCardText:p["b"],VCol:f["a"],VIcon:h["a"],VList:b["a"],VListItem:_["a"],VListItemTitle:k["b"],VMenu:g["a"],VRow:x["a"],VSheet:w["a"],VSpacer:y["a"],VToolbar:V["a"],VToolbarTitle:E["b"]})},c655:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",attrs:{id:"membersettings"}},[n("h1",{staticClass:"text-center mb-15"},[e._v("會員資料設定")]),n("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.submitsettings.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-row",[n("v-col",{attrs:{cols:"12",lg:"6"}},[n("v-label",{attrs:{for:"name"}},[e._v("姓名")]),n("v-text-field",{attrs:{solo:"",clearable:"",id:"name",rules:e.rules.nameRules,placeholder:"姓名",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),n("v-col",{attrs:{cols:"12",lg:"6"}},[n("v-label",{attrs:{for:"phone"}},[e._v("電話")]),n("v-text-field",{attrs:{solo:"",clearable:"",placeholder:"聯絡電話",required:""},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12",lg:"6"}},[n("v-label",{attrs:{for:"email"}},[e._v("信箱")]),n("v-text-field",{attrs:{solo:"",clearable:"",rules:e.rules.emailRules,placeholder:"信箱",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),n("v-col",{attrs:{cols:"12",lg:"6"}},[n("v-label",{attrs:{for:"address"}},[e._v("地址")]),n("v-text-field",{attrs:{solo:"",clearable:"",placeholder:"地址"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1)],1),n("div",{staticClass:"text-center"},[n("v-btn",{staticClass:"mt-15 save-btn",attrs:{type:"submit",disabled:!e.valid}},[e._v(" 儲存設定 ")])],1)],1)],1)},r=[],o=n("1da1"),s=(n("96cf"),n("ac1f"),n("00b4"),n("b0c0"),{data:function(){return{valid:!0,row:null,form:{name:"",email:"",address:"",phone:""}}},computed:{rules:function(){return{nameRules:[function(e){return!!e||"姓名必填"}],emailRules:[function(e){return!!e||"信箱必填"},function(e){return/.+@.+\..+/.test(e)||"信箱格式錯誤"}]}}},methods:{submitsettings:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.api.patch("/users/info",e.form,{headers:{authorization:"Bearer "+e.user.token}});case 3:console.log(e.form),e.$store.commit("user/updateInfo",e.form),e.$swal({icon:"success",title:"成功",text:"更新成功"}),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$swal({icon:"error",title:"失敗",text:t.t0.response.data.message});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}},created:function(){this.form.name=this.user.name,this.form.email=this.user.email,this.form.address=this.user.address,this.form.phone=this.user.phone}}),i=s,c=n("2877"),l=n("6544"),u=n.n(l),d=n("8336"),v=n("62ad"),m=n("4bd4"),p=n("24c9"),f=n("0fd9"),h=n("8654"),b=Object(c["a"])(i,a,r,!1,null,null,null);t["default"]=b.exports;u()(b,{VBtn:d["a"],VCol:v["a"],VForm:m["a"],VLabel:p["a"],VRow:f["a"],VTextField:h["a"]})},ca1e:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"member"}},[n("headers"),n("div",{staticClass:"container d-flex mt-15"},[n("v-row",[n("v-col",{attrs:{cols:"12",lg:"2"}},[n("div",[n("v-tabs",{staticClass:"d-none d-lg-flex",attrs:{vertical:""}},[n("v-tab",{attrs:{to:"/back/member"}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-account")]),e._v(" 會員資料設定 ")],1),n("v-tab",{attrs:{to:"/back/member/appointment"}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-calendar-clock-outline")]),e._v(" 美容預約管理 ")],1),n("v-tab",{attrs:{to:"/back/member/orders"}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-briefcase-check-outline")]),e._v(" 商品訂購管理 ")],1)],1)],1),n("div",[n("v-tabs",{staticClass:"d-lg-none d-xl-none"},[n("v-tab",{attrs:{to:"/back/member"}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-account")]),e._v(" 會員資料設定 ")],1),n("v-tab",{attrs:{to:"/back/member/appointment"}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-calendar-clock-outline")]),e._v(" 美容預約管理 ")],1),n("v-tab",{attrs:{to:"/back/member/orders"}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-briefcase-check-outline")]),e._v(" 商品訂購管理 ")],1)],1)],1)]),n("v-col",{attrs:{cols:"12",lg:"10"}},[n("router-view")],1)],1)],1)],1)},r=[],o=n("71c2"),s={components:{headers:o["a"]}},i=s,c=n("2877"),l=n("6544"),u=n.n(l),d=n("62ad"),v=n("132d"),m=n("0fd9"),p=n("71a3"),f=n("fe57"),h=Object(c["a"])(i,a,r,!1,null,null,null);t["default"]=h.exports;u()(h,{VCol:d["a"],VIcon:v["a"],VRow:m["a"],VTab:p["a"],VTabs:f["a"]})}}]);
//# sourceMappingURL=Member.4c51f197.js.map