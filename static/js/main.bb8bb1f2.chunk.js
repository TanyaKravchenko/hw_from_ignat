(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,function(e,a,t){e.exports={AffairsHeader:"Affairs_AffairsHeader__CtQ2u",AffairsContainer:"Affairs_AffairsContainer__bJZw8",MappedAffairs:"Affairs_MappedAffairs__vFlNu",AffairWrapper:"Affairs_AffairWrapper__bqONY",AffairItem:"Affairs_AffairItem__3u45e",RemoveButton:"Affairs_RemoveButton__SpGBX",TaskButton:"Affairs_TaskButton__2-8WF",active:"Affairs_active__3Kjws",High:"Affairs_High__1raG7",Middle:"Affairs_Middle__2vMCt",Low:"Affairs_Low__2V8EP"}},,,,function(e,a,t){e.exports={greetingContainer:"Greeting_greetingContainer__3QW9O",error:"Greeting_error__2DnXs",errorMessage:"Greeting_errorMessage__3IyNt",input:"Greeting_input__2nrgJ",nameInput:"Greeting_nameInput__1sDOB",nameButton:"Greeting_nameButton__2A18K",countName:"Greeting_countName__2EpDU"}},function(e,a,t){e.exports={itemPost:"Message_itemPost__1HlZ9",itemAvatar:"Message_itemAvatar__3dfF_",itemName:"Message_itemName__30KHS",itemMessenger:"Message_itemMessenger__EPMwc",itemTime:"Message_itemTime__32aka",itemText:"Message_itemText__dHZUR"}},,,,function(e,a,t){e.exports={input:"SuperInputText_input__3vAMM",superInput:"SuperInputText_superInput__ft-y9",errorInput:"SuperInputText_errorInput__26TXX",error:"SuperInputText_error__16V-w"}},,function(e,a,t){e.exports={blue:"HW4_blue__2XD7o",column:"HW4_column__BQMD0",disabled:"HW4_disabled__3wA2r"}},function(e,a,t){e.exports={defaultButton:"SuperButton_defaultButton__SU1tF",redButton:"SuperButton_redButton__3d-Om"}},function(e,a,t){e.exports={label:"SuperCheckbox_label__36Cco",checkbox:"SuperCheckbox_checkbox__15wSa",spanClassName:"SuperCheckbox_spanClassName__3PpKP"}},,,function(e,a,t){e.exports={appWrapper:"App_appWrapper__V4Twl",container:"App_container__1ai6W",error:"App_error__1O2ol",errorMessage:"App_errorMessage__31kRM",nameInput:"App_nameInput__ual6d",nameButton:"App_nameButton__2Y1cu",countName:"App_countName__d32Sn"}},,,,,,,,,,function(e,a,t){e.exports=t(39)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),c=t.n(l),i=(t(33),t(18)),o=t.n(i),s=t(7),u=t.n(s),m=function(e){return r.a.createElement("div",{className:u.a.itemPost},r.a.createElement("div",{className:u.a.itemAvatar},r.a.createElement("img",{src:e.avatar,alt:"avatar"})),r.a.createElement("div",{className:u.a.itemText},r.a.createElement("div",{className:u.a.itemName},e.name),r.a.createElement("div",{className:u.a.itemMessenger},e.message),r.a.createElement("div",{className:u.a.itemTime},e.timeMessage)))},f="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8y3RfblbjiofXA2FONXnv1-pTiyLSzXVudF5A1kUoWq5FS7IK&usqp=CAU",d="Kravchenko Tanya",_="How are you? I'ts my first post! How are you? I'ts my first post!",p="22:00";var E=function(){return r.a.createElement("div",null,"homeworks 1",r.a.createElement(m,{avatar:f,name:d,message:_,timeMessage:p}),r.a.createElement("hr",null))},v=t(5),g=t(2),b=t.n(g);var h=function(e){var a=b.a.AffairItem+" "+b.a[e.affair.priority];return r.a.createElement("div",{className:b.a.AffairWrapper},r.a.createElement("div",{className:b.a.AffairItem},e.affair.title),r.a.createElement("div",{className:a},e.affair.priority),r.a.createElement("div",{className:b.a.AffairItem},r.a.createElement("button",{className:b.a.RemoveButton,onClick:function(){e.deleteAffairCallback(e.affair.id)}},"Remove")))};var N=function(e){var a=e.data.map((function(a){return r.a.createElement(h,{key:a.id,affair:a,deleteAffairCallback:e.deleteAffairCallback})})),t="All"===e.filter?b.a.active:"",n="High"===e.filter?b.a.active:"",l="Middle"===e.filter?b.a.active:"",c="Low"===e.filter?b.a.active:"";return r.a.createElement("div",null,r.a.createElement("div",{className:b.a.AffairsContainer},r.a.createElement("h3",{className:b.a.AffairsHeader},e.title),r.a.createElement("div",{className:b.a.MappedAffairs},a),r.a.createElement("div",{className:b.a.TaskButton},r.a.createElement("button",{onClick:function(){return e.setFilter("All")},className:t},"All"),r.a.createElement("button",{onClick:function(){return e.setFilter("High")},className:n},"High"),r.a.createElement("button",{onClick:function(){return e.setFilter("Middle")},className:l},"Middle"),r.a.createElement("button",{onClick:function(){return e.setFilter("Low")},className:c},"Low"))))},A=t(40),C=[{id:Object(A.a)(),title:"Tasty",priority:"Low"},{id:Object(A.a)(),title:"Friends",priority:"High"},{id:Object(A.a)(),title:"Shopping",priority:"Low"},{id:Object(A.a)(),title:"Travels",priority:"Middle"},{id:Object(A.a)(),title:"Family",priority:"High"}];var k=function(){var e=Object(n.useState)(C),a=Object(v.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("All"),i=Object(v.a)(c,2),o=i[0],s=i[1],u=function(e,a){return"All"===a?e:e.filter((function(e){return e.priority===a}))}(t,o);return r.a.createElement("div",null,"homeworks 2",r.a.createElement(N,{title:"TodoList",data:u,setFilter:s,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e.id!=a}))}(t,e))},filter:o}))},y=t(26),O=t(6),M=t.n(O),w=function(e){var a=e.users,t=e.name,n=e.error,l=e.onTitleChange,c=e.onKeyPressAddItem,i=e.onAddItemClick,o=e.setError,s="".concat(n?M.a.error:M.a.nameInput," ").concat(M.a.input);return r.a.createElement("div",{onBlur:function(){return o(null)}},r.a.createElement("input",{className:s,type:"text",value:t,onChange:l,onKeyPress:c}),r.a.createElement("button",{className:M.a.nameButton,onClick:i},"name"),r.a.createElement("div",{className:M.a.errorMessage},n),r.a.createElement("span",{className:M.a.countName},"countName: ",a.length))},I=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(v.a)(l,2),i=c[0],o=c[1],s=Object(n.useState)(null),u=Object(v.a)(s,2),m=u[0],f=u[1];var d=function(){""!==i.trim()?function(e){e&&(alert("Hi "+e),t(e)),o("")}(i):f("Title is required")};return r.a.createElement(w,{users:a,name:i,onTitleChange:function(e){f(null),o(e.currentTarget.value)},error:m,onKeyPressAddItem:function(e){f(null),13===e.charCode&&d()},onAddItemClick:d,setError:f})};var T=function(){var e=Object(n.useState)([]),a=Object(v.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement("div",{className:M.a.greetingContainer},r.a.createElement(I,{users:t,addUserCallback:function(e){var a={_id:Object(A.a)(),name:e};l([].concat(Object(y.a)(t),[a]))}})),r.a.createElement("hr",null))},j=t(8),x=t(11),B=t.n(x),S=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,i=e.className,o=e.spanClassName,s=Object(j.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(B.a.error," ").concat(o||""),m="".concat(B.a.input," ").concat(c?B.a.errorInput:B.a.superInput," ").concat(i);return r.a.createElement("div",null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m},s)),r.a.createElement("span",{className:u},c))},H=t(13),P=t.n(H),W=t(14),F=t.n(W),K=function(e){var a=e.red,t=(e.className,e.disabled,Object(j.a)(e,["red","className","disabled"])),n="".concat(a?F.a.redButton:F.a.defaultButton,"  ").concat(F.a.defaultButton);return r.a.createElement("button",Object.assign({className:n},t))},R=t(15),G=t.n(R),L=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(j.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),i="".concat(G.a.checkbox," ").concat(n||"");return r.a.createElement("label",{className:G.a.label},r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:i},c)),l&&r.a.createElement("span",{className:G.a.spanClassName},l))};var U=function(){var e=Object(n.useState)(""),a=Object(v.a)(e,2),t=a[0],l=a[1],c=t?"":"error",i=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},o=Object(n.useState)(!1),s=Object(v.a)(o,2),u=s[0],m=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:P.a.column},r.a.createElement(S,{value:t,onChangeText:l,onEnter:i,error:c,placeholder:"\u0412\u0432\u0435\u0434\u0438 \u0442\u0435\u043a\u0441\u0442"}),r.a.createElement(S,{className:P.a.blue,placeholder:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0441\u043c\u0435\u0448\u0438\u0432\u0430\u043d\u0438\u044f \u043a\u043b\u0430\u0441\u0441\u043e\u0432"}),r.a.createElement(K,null,"default"),r.a.createElement(K,{red:!0,onClick:i},"delete "),r.a.createElement(K,{disabled:!0,className:P.a.disabled},"disabled"),r.a.createElement(L,{checked:u,onChangeChecked:m},"Hello!!! "),r.a.createElement(L,{checked:u,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var X=function(){return r.a.createElement("div",null,"// add NavLinks")},J=t(1);var q=function(){return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(k,null),r.a.createElement(T,null),r.a.createElement(U,null))};var D=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))};var V=function(){return r.a.createElement("div",null,r.a.createElement(J.d,null,r.a.createElement(J.b,{path:"/",exact:!0,render:function(){return r.a.createElement(J.a,{to:"/PRE_JUNIOR"})}}),r.a.createElement(J.b,{path:"/PRE_JUNIOR",render:function(){return r.a.createElement(q,null)}}),"// add routes",r.a.createElement(J.b,{render:function(){return r.a.createElement(D,null)}})))},Q=t(17);var Z=function(){return r.a.createElement("div",null,r.a.createElement(Q.a,null,r.a.createElement(X,null),r.a.createElement(V,null)))};var Y=function(){return r.a.createElement("div",{className:o.a.appWrapper},r.a.createElement("div",null,"react homeworks:"),r.a.createElement("div",{className:o.a.container},r.a.createElement(E,null),r.a.createElement(k,null),r.a.createElement(T,null),r.a.createElement(U,null),r.a.createElement(Z,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[28,1,2]]]);
//# sourceMappingURL=main.bb8bb1f2.chunk.js.map