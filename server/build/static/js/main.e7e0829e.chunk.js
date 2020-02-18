(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,t,a){e.exports=a(47)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(18),r=a.n(l),o=a(19),s=a(2),i=a(3),m=a(5),p=a(4),u=a(7),h=a(6),d=(a(26),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.form;return c.a.createElement("div",{className:"nav"},c.a.createElement("span",{className:"navElement clickable"+("location"===t?" selected":""),onClick:function(){e.props.handleClick("location")}},"M\u011bsto"),c.a.createElement("span",{className:"navElement"},">"),c.a.createElement("span",{className:"navElement clickable"+("property"===t?" selected":""),onClick:function(){e.props.handleClick("property")}},"Typ nemovitosti"),c.a.createElement("span",{className:"navElement"},">"),c.a.createElement("span",{className:"navElement clickable"+("contacts"===t?" selected":""),onClick:function(){e.props.handleClick("contacts")}},"Kontakt"))}}]),t}(c.a.Component)),b=(a(8),a(27),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={locations:["Praha","Brno","Ostrava","Plze\u0148","Liberec","Olomouc","\u010cesk\xe9 Bud\u011bjovice","\xdast\xed nad Labem","Hradec Kr\xe1lov\xe9","Pardubice","Zl\xedn","Karlovy Vary","T\xe1bor"]},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.locations.map((function(t,a){return c.a.createElement("div",{className:"gridItem",key:a},c.a.createElement("div",{className:"radioContainer"},c.a.createElement("input",{type:"radio",id:t,name:"location",value:t,onChange:e.props.handleInputChange}),c.a.createElement("label",{htmlFor:t,className:"radioLabel"},t,c.a.createElement("span",{className:"checkMark"}))))}));return c.a.createElement("div",{className:"Location container"},c.a.createElement("h1",null,"Kde se nach\xe1z\xed va\u0161e nemovitost?"),c.a.createElement("p",null,"Vyberte m\u011bsto"),c.a.createElement("form",null,c.a.createElement("div",{className:"gridContainer"},t),c.a.createElement("button",{className:"nextBtn",onClick:function(){e.props.handleClick("property")}},"Pokra\u010dovat")))}}]),t}(c.a.Component)),k=(a(28),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={propertyTypes:["Byt","D\u016fm","Komer\u010dn\xed objekt","Jin\xe9"]},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.propertyTypes.map((function(t,a){return c.a.createElement("div",{key:a,className:"radioContainer"},c.a.createElement("input",{id:t,type:"radio",name:"property",value:t,onChange:e.props.handleInputChange}),c.a.createElement("label",{className:"radioLabel",htmlFor:t},t),c.a.createElement("span",{className:"checkMark"}))}));return c.a.createElement("div",{className:"Property container"},c.a.createElement("h1",null,"O jakou nemovitost se jedn\xe1?"),c.a.createElement("p",null,"Vyberte typ nemovitosti"),c.a.createElement("form",null,t,c.a.createElement("button",{className:"nextBtn",onClick:function(){e.props.handleClick("contacts")}},"Pokra\u010dovat")))}}]),t}(c.a.Component)),E=(a(29),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Contacts container"},c.a.createElement("h1",null,"Zadejte va\u0161e kontaktn\xed \xfadaje"),c.a.createElement("p",null,"P\u0159edstavte se"),c.a.createElement("form",{className:"contactsForm"},c.a.createElement("label",{className:"contactsLabel"},"Jm\xe9no a p\u0159\xedjmen\xed",c.a.createElement("input",{className:"contactsInput",type:"text",name:"name",onChange:this.props.handleInputChange,required:!0})),c.a.createElement("label",{className:"contactsLabel"},"E-mail",c.a.createElement("input",{className:"contactsInput",type:"email",name:"email",onChange:this.props.handleInputChange,required:!0})),c.a.createElement("label",{className:"contactsLabel"},"Telefon",c.a.createElement("input",{className:"contactsInput",type:"tel",name:"tel",onChange:this.props.handleInputChange,required:!0})),c.a.createElement("label",{className:"contactsCheckboxLabel"},"Souhlas\xedm se zpracov\xe1n\xedm osobn\xedch \xfadaj\u016f pro obchodn\xed \xfa\u010dely",c.a.createElement("input",{className:"contactsCheckbox",type:"checkbox",required:!0}),c.a.createElement("span",{className:"checkMark"})),c.a.createElement("button",{className:"nextBtn",onClick:this.props.makePost},"Odeslat")))}}]),t}(c.a.Component)),v=a(20),C=a.n(v),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={form:"location",location:"",property:"",name:"",email:"",tel:""},a.handleClick=a.handleClick.bind(Object(u.a)(a)),a.handleInputChange=a.handleInputChange.bind(Object(u.a)(a)),a.makePost=a.makePost.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e){this.setState({form:e})}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(o.a)({},n,a))}},{key:"makePost",value:function(e){e.preventDefault(),C.a.post("/clients",{location:this.state.location,property:this.state.property,name:this.state.name,email:this.state.email,tel:this.state.tel}).then((function(e){console.log(e),alert(e.data)})).then((function(e){console.log(e)}))}},{key:"render",value:function(){var e;switch(this.state.form){case"property":e=c.a.createElement(k,{handleClick:this.handleClick,handleInputChange:this.handleInputChange});break;case"contacts":e=c.a.createElement(E,{handleInputChange:this.handleInputChange,makePost:this.makePost});break;default:e=c.a.createElement(b,{handleClick:this.handleClick,handleInputChange:this.handleInputChange})}return c.a.createElement("div",{className:"App"},c.a.createElement(d,{form:this.state.form,handleClick:this.handleClick}),e)}}]),t}(c.a.Component);r.a.render(c.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,a){}},[[21,1,2]]]);
//# sourceMappingURL=main.e7e0829e.chunk.js.map