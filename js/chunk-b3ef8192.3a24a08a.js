(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b3ef8192"],{"0e22":function(e,t,r){"use strict";var o=r("775e"),n=r.n(o);n.a},"775e":function(e,t,r){},"887d":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",{staticClass:"error"},[e._v(e._s(e.error))]),r("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"mt-3"},[e._v("\n    Selected:\n    "),r("strong",[e._v(e._s(e.selected))])]),r("b-row",[r("b-col",[e._v("QR :")]),r("b-col",[r("b",[e._v(e._s(e.result))])])],1),e._v("\n  "+e._s(e.test)+"\n  "),r("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){return e.postlogin("001")}}},[e._v("test")]),r("b-modal",{ref:"modal",attrs:{title:"ชำระเงิน"},on:{shown:e.showmodal,hidden:e.hiddenmodal}},[r("form",{ref:"form",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit(t)}}},[r("b-form-group",{attrs:{"label-cols":"4","label-cols-lg":"2","label-size":"sm",label:"ทั้งหมด","label-for":"input-sm"}},[r("b-form-input",{staticClass:"text-right",attrs:{id:"name-input",disabled:""},model:{value:e.total,callback:function(t){e.total=t},expression:"total"}})],1),r("b-form-group",{attrs:{"label-cols":"4","label-cols-lg":"2","label-size":"sm",label:"รับเงิน","label-for":"input-sm"}},[r("b-form-input",{ref:"receive",staticClass:"text-right",attrs:{id:"name-input"},model:{value:e.receive,callback:function(t){e.receive=t},expression:"receive"}})],1),r("b-form-group",{attrs:{"label-cols":"4","label-cols-lg":"2","label-size":"sm",label:"ทอนเงิน","label-for":"input-sm"}},[r("b-form-input",{staticClass:"text-right",staticStyle:{"background-color":"white",color:"green","font-weight":"bold"},attrs:{id:"name-input",disabled:"",size:"lg"},model:{value:e.change,callback:function(t){e.change=t},expression:"change"}})],1)],1)]),r("qrcode-stream",{on:{decode:e.onDecode,init:e.onInit}})],1)},n=[],a=r("a34a"),s=r.n(a),i=r("9a3e");function l(e,t,r,o,n,a,s){try{var i=e[a](s),l=i.value}catch(c){return void r(c)}i.done?t(l):Promise.resolve(l).then(o,n)}function c(e){return function(){var t=this,r=arguments;return new Promise((function(o,n){var a=e.apply(t,r);function s(e){l(a,o,n,s,i,"next",e)}function i(e){l(a,o,n,s,i,"throw",e)}s(void 0)}))}}var u={components:{QrcodeStream:i["QrcodeStream"]},data:function(){return{result:"",error:"",test:"",total:"",receive:"",change:""}},watch:{receive:{handler:function(e){var t=this.receive-this.total;t>0&&(this.change=t)}}},methods:{onDecode:function(e){""!=e&&(this.result=e,this.postlogin(e))},showmodal:function(){this.$refs.receive.$el.focus()},hiddenmodal:function(){this.$parent.showAlert("finish","success"),this.$router.replace({name:"home"})},postlogin:function(e){var t=this,r=new FormData;r.append("api","login"),r.append("qr",e),axios.post(this.$store.state.api,r).then((function(e){e.data.rows.length>0?(t.$refs.modal.show(),t.total=e.data.rows[0].total):(t.$parent.showAlert(e.data.data,"success"),t.$router.replace({name:"home"}))})).catch((function(e){}))},onInit:function(){var e=c(s.a.mark((function e(t){return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t;case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),"NotAllowedError"===e.t0.name?this.error="ERROR: you need to grant camera access permisson":"NotFoundError"===e.t0.name?this.error="ERROR: no camera on this device":"NotSupportedError"===e.t0.name?this.error="ERROR: secure context required (HTTPS, localhost)":"NotReadableError"===e.t0.name?this.error="ERROR: is the camera already in use?":"OverconstrainedError"===e.t0.name?this.error="ERROR: installed cameras are not suitable":"StreamApiNotSupportedError"===e.t0.name&&(this.error="ERROR: Stream API is not supported in this browser");case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));function t(t){return e.apply(this,arguments)}return t}()}},d=u,h=(r("0e22"),r("2877")),m=Object(h["a"])(d,o,n,!1,null,"cf95e5e2",null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-b3ef8192.3a24a08a.js.map