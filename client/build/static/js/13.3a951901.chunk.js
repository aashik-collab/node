(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[13],{134:function(e,t,s){"use strict";s.r(t);var a=s(10),c=s(1),n=s(0),i=s(86),r=s(17),l=s.n(r),o=s(75),d=s(68),j=s(64),m=s(18),u=s(76),b=s(21),f=s(2),O=s(65);t.default=Object(f.f)((function(e){var t=Object(n.useState)({}),s=Object(a.a)(t,2),r=s[0],f=s[1],h=Object(n.useState)([]),x=Object(a.a)(h,2),v=x[0],g=x[1],p=Object(n.useState)(0),N=Object(a.a)(p,2),w=N[0],y=N[1],S=Object(n.useState)(""),_=Object(a.a)(S,2),k=_[0],C=_[1],M=Object(n.useState)(null),z=Object(a.a)(M,2),F=z[0],W=z[1],R=Object(n.useState)(null),D=Object(a.a)(R,2),J=D[0],A=D[1],B=Object(n.useState)(null),H=Object(a.a)(B,2),I=H[0],E=H[1],L=Object(n.useState)(null),X=Object(a.a)(L,2),Z=X[0],q=X[1],G=Object(n.useState)(null),T=Object(a.a)(G,2),V=T[0],K=T[1],P=Object(n.useState)(null),Q=Object(a.a)(P,2),U=Q[0],Y=Q[1];return Object(n.useEffect)((function(){var t=Object(b.a)();return K(!!t||null),q(!0),l.a.get("/api/rooms/view-room-with-reviews/"+e.match.params.room_id).then((function(e){q(null),e.data.success&&(f(e.data.room),g(e.data.roomReviews))})).catch((function(t){console.log(t),console.log(t.response),q(null),t.response&&(500!==t.response.status&&404!==t.response.status||e.history.push("/not-found"))})),function(){}}),[]),Object(c.jsxs)(c.Fragment,{children:[!!Z&&Object(c.jsx)(m.a,{}),Object(c.jsxs)("div",{className:"container bg-light",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-12 col-md-6 my-3",children:Object(c.jsx)("div",{className:"border rounded p-2 shadow-sm",children:Object(c.jsx)("img",{loading:"lazy",src:"https://images.unsplash.com/photo-1441794016917-7b6933969960?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60",alt:"",style:{minWidth:"100%",maxWidth:"100%"},className:"rounded"})})}),Object(c.jsxs)("div",{className:"col-12 col-md-6 my-3 p-3",children:[Object(c.jsx)("h3",{className:"text-dark display-4",style:{fontSize:36},children:r.title}),Object(c.jsxs)("div",{className:"single-room-ratings-container",children:[r.avg_rating&&Object(c.jsx)(j.a,{avg_rating:r.avg_rating,reviewsCount:v.length}),!r.avg_rating&&Object(c.jsx)(j.a,{avg_rating:0,reviewsCount:0})]}),Object(c.jsxs)("div",{className:"single-room-buttons-container my-4",children:[Object(c.jsx)("button",{className:"btn btn-warning w-75 my-1 ",onClick:function(){Object(O.a)({type:"room",_id:r._id,name:r.title}),Y(!0),setTimeout((function(){Y(null)}),1500)},disabled:!!U,children:Object(c.jsx)("strong",{className:"text-dark",children:U?"added to cart":"Add to cart"})}),Object(c.jsx)("button",{className:"btn btn-success w-75 my-1",children:Object(c.jsx)("strong",{className:"text-light",children:"Book room"})})]}),Object(c.jsx)("div",{children:Object(c.jsx)("a",{href:"#view-room-reviews-container",children:"view reviews"})})]})]}),Object(c.jsxs)("div",{className:"add-rating-container ",children:[Object(c.jsx)("h4",{className:"display-4",style:{fontSize:30},children:"Add a review"}),!!F&&Object(c.jsx)("div",{className:"alert alert-success small",children:"your review has been added"}),!!J&&Object(c.jsx)("div",{className:"alert alert-danger small",children:J}),!V&&Object(c.jsx)("div",{className:"alert alert-warning small",children:"you are not logged in, please log in to add your review"}),Object(c.jsxs)("div",{className:"add-rating-icons-container",children:[Object(c.jsx)("i",{className:"fas fa-star",style:{color:w>=1?"#ffb01d":"#9f9f9f"},onClick:function(){y(1)},onMouseEnter:function(){y(1)}}),Object(c.jsx)("i",{className:"fas fa-star",style:{color:w>=2?"#ffb01d":"#9f9f9f"},onClick:function(){y(2)},onMouseOver:function(){y(2)}}),Object(c.jsx)("i",{className:"fas fa-star",style:{color:w>=3?"#ffb01d":"#9f9f9f"},onClick:function(){y(3)},onMouseOver:function(){y(3)}}),Object(c.jsx)("i",{className:"fas fa-star",style:{color:w>=4?"#ffb01d":"#9f9f9f"},onClick:function(){y(4)},onMouseOver:function(){y(4)}}),Object(c.jsx)("i",{className:"fas fa-star",style:{color:w>=5?"#ffb01d":"#9f9f9f"},onClick:function(){y(5)},onMouseOver:function(){y(5)}})]}),Object(c.jsx)("div",{children:Object(c.jsxs)("form",{onSubmit:function(t){return function(t){if(t.preventDefault(),0!==w)if(k.length){E(!0);var s=new FormData;s.append("rate_value",w),s.append("comment",k),l.a.post("/api/rooms/room-reviews/create/".concat(e.match.params.room_id),s,{headers:{Authorization:Object(u.a)()}}).then((function(e){E(null),e.data.success&&(W(!0),A(null),y(0),C(""))})).catch((function(e){console.log(e),console.log(e.response),W(null),E(null),e.response&&e.response.data&&A(e.response.data.message)}))}else A("please write a review before submitting");else A("please specify your rating")}(t)},children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"room-review-text",className:"text-muted my-1",children:"Write a review"}),Object(c.jsx)(i.a,{id:"room-review-text",className:"form-control",minRows:2,maxRows:10,value:k,onChange:function(e){return C(e.target.value)}})]}),Object(c.jsxs)("div",{className:"my-2",children:[!I&&Object(c.jsx)("button",{type:"submit",className:"btn btn-sm btn-primary",children:Object(c.jsx)("strong",{className:"text-light",children:"submit"})}),!!I&&Object(c.jsx)(d.a,{className:"btn btn-sm btn-primary"})]})]})})]}),Object(c.jsxs)("div",{className:"mt-3 mb-5",id:"view-room-reviews-container",children:[Object(c.jsx)("h4",{className:"display-4",style:{fontSize:30},children:"Room reviews"}),!!v.length&&v.map((function(e){return Object(c.jsx)(o.a,{review:e},e._id)})),!v.length&&Object(c.jsx)("div",{className:"pb-5 pt-3 text-muted text-center",children:Object(c.jsx)("h5",{style:{fontWeight:400},children:"No reviews added yet"})})]})]})]})}))},64:function(e,t,s){"use strict";var a=s(1);t.a=function(e){var t=e.avg_rating,s=e.reviewsCount,c=t;null!=c&&void 0!==c||(c=0,s=0),c=c.toFixed(2),c=parseFloat(c);var n=Math.trunc(c),i=null,r=null,l=parseFloat((c-n).toFixed(2));l>=.75&&n++,l<.75&&l>=.25&&(i=!0),r=4==n&&i||5==n?null:5-n;for(var o=[],d=0;d<n;d++)o.push(d);for(var j=[],m=0;m<r;m++)j.push(m);return Object(a.jsxs)("section",{className:"card-rating",children:[o.map((function(e){return Object(a.jsx)("i",{className:"fas fa-star"},e)})),!!i&&Object(a.jsx)("i",{className:"fas fa-star-half-alt"}),j.map((function(e){return Object(a.jsx)("i",{className:"far fa-star"},e)})),!!s&&Object(a.jsxs)("span",{className:"small text-muted",children:[" (",s,")"]})]})}},65:function(e,t,s){"use strict";var a=s(66),c=s(67);t.a=function(e){console.log(e);var t=JSON.parse(localStorage.getItem("items"))||[];t=[].concat(Object(c.a)(t),[Object(a.a)({},e)]),localStorage.setItem("items",JSON.stringify(t))}},68:function(e,t,s){"use strict";var a=s(1);s(0);t.a=function(e){var t=e.className;return Object(a.jsx)("button",{type:"button",className:t,disabled:!0,children:Object(a.jsx)("div",{className:"spinner-border",style:{height:16,width:16,borderWidth:2},role:"status",children:Object(a.jsx)("span",{className:"sr-only",children:"Loading..."})})})}},75:function(e,t,s){"use strict";var a=s(1),c=(s(0),s(85)),n=s.n(c),i=s(64);t.a=function(e){var t=e.review;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"my-3",children:[Object(a.jsxs)("div",{className:"my-4",children:[Object(a.jsxs)("div",{className:"d-flex align-items-center",children:[Object(a.jsx)("img",{className:"align-self-start",src:"https://images-na.ssl-images-amazon.com/images/S/amazon-avatars/default._CR0,0,1024,1024_SX48_.png",alt:""}),Object(a.jsxs)("div",{className:"px-2",children:[Object(a.jsx)("strong",{className:"small",children:t.user_id.email.split(".")[0].split("@").join(" ")}),Object(a.jsx)(i.a,{avg_rating:t.rate_value,reviewsCount:null})]})]}),Object(a.jsx)("div",{className:"small text-muted",children:Object(a.jsxs)("span",{children:[n()(t.created_at).calendar(),", ",n()(t.created_at).fromNow()]})}),Object(a.jsx)("div",{className:"my-2 px-3 py-2 text-dark rounded",style:{backgroundColor:"#eee",fontSize:15},children:t.comment})]}),Object(a.jsx)("hr",{})]})})}},76:function(e,t,s){"use strict";t.a=function(){return localStorage.getItem("token")}}}]);
//# sourceMappingURL=13.3a951901.chunk.js.map