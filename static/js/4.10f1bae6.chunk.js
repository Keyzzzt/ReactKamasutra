(this["webpackJsonpreact-kamasutra"]=this["webpackJsonpreact-kamasutra"]||[]).push([[4],{295:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__2K81d",dialogsItems:"Dialogs_dialogsItems__pVB8W",dialog:"Dialogs_dialog__HzNJg",messages:"Dialogs_messages__3V5-3",message:"Dialogs_message__2eRjl",active:"Dialogs_active__3mkcZ"}},296:function(e,s,a){"use strict";a.d(s,"a",(function(){return b}));var t=a(5),n=a(36),i=a(37),c=a(39),o=a(38),r=a(0),d=a.n(r),u=a(10),l=a(18),g=a(1),j=function(e){return{isAuth:e.auth.isAuth}},b=function(e){var s=function(s){Object(c.a)(r,s);var a=Object(o.a)(r);function r(){return Object(n.a)(this,r),a.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return this.props.isAuth?Object(g.jsx)(e,Object(t.a)({},this.props)):Object(g.jsx)(u.a,{to:"/login"})}}]),r}(d.a.Component);return Object(l.b)(j)(s)}},301:function(e,s,a){"use strict";a.r(s);a(0);var t=a(18),n=a(295),i=a.n(n),c=a(1),o=function(e){var s=e.message;return Object(c.jsx)("div",{className:i.a.message,children:s})},r=a(22),d=function(e){var s=e.name,a=e.id;return Object(c.jsx)("div",{className:i.a.dialog+" "+i.a.active,children:Object(c.jsx)(r.b,{to:"/dialogs/".concat(a),children:s})})},u=a(86),l=a(125),g=a(34),j=a(48),b=Object(j.a)(50),m=Object(l.a)({form:"dialog"})((function(e){return Object(c.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(c.jsx)("div",{children:Object(c.jsx)(u.a,{name:"newMessageBody",placeholder:"Message text",component:g.b,validate:[j.b,b]})}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{children:"Submit"})})]})})),O=function(e){return Object(c.jsx)(m,{onSubmit:e.onSubmitHandler})},f=function(e){var s=e.dialogs,a=e.messages,t=e.sendMessage;return Object(c.jsxs)("div",{className:i.a.dialogs,children:[Object(c.jsx)("div",{className:i.a.dialogsItems,children:s.map((function(e){return Object(c.jsx)(d,{name:e.name,id:e.id},e.id)}))}),Object(c.jsx)("div",{className:i.a.messages,children:a.map((function(e){return Object(c.jsx)(o,{message:e.message},e.id)}))}),Object(c.jsx)(O,{onSubmitHandler:function(e){t(e.newMessageBody)}})]})},h=a(124),x=a(296),v=a(11);s.default=Object(v.d)(Object(t.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages,newMessageText:e.dialogsPage.newMessageText}}),(function(e){return{sendMessage:function(s){e(Object(h.a)(s))}}})),x.a)(f)}}]);
//# sourceMappingURL=4.10f1bae6.chunk.js.map