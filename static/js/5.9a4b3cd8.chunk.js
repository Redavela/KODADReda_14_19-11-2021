(this.webpackJsonpprojet14=this.webpackJsonpprojet14||[]).push([[5],{128:function(e,t,a){"use strict";a.r(t);var l=a(40),o=a(34),i=a(61),n=a(6),s=a(0),r=a.n(s),b=a(16),p=(a(73),function(e){var t=e.label,a=void 0===t?"":t,l=e.options,o=e.handleSelect,i=e.id,n=l.map((function(e,t){return r.a.createElement("option",{key:t,value:e.value},e.label)}));return r.a.createElement("div",{className:"simple-form-group"},a&&r.a.createElement("label",{className:"simple-text-label"},a),r.a.createElement("div",null,r.a.createElement("select",{className:"simple-text-input",id:i,onChange:o},n)))}),c=[{option:"Sales",label:"Sales"},{option:"Marketing",label:"Marketing"},{option:"Engineering",label:"Engineering"},{option:"Human Resources",label:"Human Resources"},{option:"Legal",label:"Legal"}],d=[{label:"Alabama",option:"AL"},{label:"Alaska",option:"AK"},{label:"American Samoa",option:"AS"},{label:"Arizona",option:"AZ"},{label:"Arkansas",option:"AR"},{label:"California",option:"CA"},{label:"Colorado",option:"CO"},{label:"Connecticut",option:"CT"},{label:"Delaware",option:"DE"},{label:"District Of Columbia",option:"DC"},{label:"Federated States Of Micronesia",option:"FM"},{label:"Florida",option:"FL"},{label:"Georgia",option:"GA"},{label:"Guam",option:"GU"},{label:"Hawaii",option:"HI"},{label:"Idaho",option:"ID"},{label:"Illinois",option:"IL"},{label:"Indiana",option:"IN"},{label:"Iowa",option:"IA"},{label:"Kansas",option:"KS"},{label:"Kentucky",option:"KY"},{label:"Louisiana",option:"LA"},{label:"Maine",option:"ME"},{label:"Marshall Islands",option:"MH"},{label:"Maryland",option:"MD"},{label:"Massachusetts",option:"MA"},{label:"Michigan",option:"MI"},{label:"Minnesota",option:"MN"},{label:"Mississippi",option:"MS"},{label:"Missouri",option:"MO"},{label:"Montana",option:"MT"},{label:"Nebraska",option:"NE"},{label:"Nevada",option:"NV"},{label:"New Hampshire",option:"NH"},{label:"New Jersey",option:"NJ"},{label:"New Mexico",option:"NM"},{label:"New York",option:"NY"},{label:"North Carolina",option:"NC"},{label:"North Dakota",option:"ND"},{label:"Northern Mariana Islands",option:"MP"},{label:"Ohio",option:"OH"},{label:"Oklahoma",option:"OK"},{label:"Oregon",option:"OR"},{label:"Palau",option:"PW"},{label:"Pennsylvania",option:"PA"},{label:"Puerto Rico",option:"PR"},{label:"Rhode Island",option:"RI"},{label:"South Carolina",option:"SC"},{label:"South Dakota",option:"SD"},{label:"Tennessee",option:"TN"},{label:"Texas",option:"TX"},{label:"Utah",option:"UT"},{label:"Vermont",option:"VT"},{label:"Virgin Islands",option:"VI"},{label:"Virginia",option:"VA"},{label:"Washington",option:"WA"},{label:"West Virginia",option:"WV"},{label:"Wisconsin",option:"WI"},{label:"Wyoming",option:"WY"}],m=a(18),u=a(126),h=a(3);t.default=function(){var e=Object(s.useState)({firstName:"",lastName:"",birth:"",startDate:"",street:"",city:"",state:d[0].value,zipCode:"",department:c[0].value}),t=Object(n.a)(e,2),a=t[0],r=t[1],j=new Date;j.setFullYear(j.getFullYear()-18);var O=function(e){r(Object(i.a)(Object(i.a)({},a),{},Object(o.a)({},e.target.id,e.target.value)))};return Object(h.jsxs)("main",{children:[Object(h.jsx)("div",{className:"title un",children:Object(h.jsx)("h1",{children:"HRnet"})}),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(b.b,{className:"link",to:"/liste",children:"View Current Employees"}),Object(h.jsx)("h2",{children:"Create Employee"}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=!1;for(var o in a)a[o]||(t=!0);if(t)m.b.warn("All fields must be completed !",{theme:"colored"});else{var i=JSON.parse(localStorage.getItem("listeEmployees"))||[];i=[].concat(Object(l.a)(i),[a]),localStorage.setItem("listeEmployees",JSON.stringify(i)),m.b.success("employee successfully created !",{theme:"colored"}),r({firstName:"",lastName:"",birth:"",startDate:"",street:"",city:"",state:d[0].value,zipCode:"",department:c[0].value})}},children:[Object(h.jsxs)("fieldset",{className:"address",children:[Object(h.jsx)("legend",{children:"Form"}),Object(h.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(h.jsx)("input",{type:"text",value:a.firstName,onChange:O,id:"firstName"}),Object(h.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(h.jsx)("input",{type:"text",value:a.lastName,onChange:O,id:"lastName"}),Object(h.jsx)("label",{htmlFor:"birth",children:"Date of Birth"}),Object(h.jsx)("input",{id:"birth",value:a.birth,onChange:O,type:"date",max:Object(u.a)(j,"yyyy-MM-dd")}),Object(h.jsx)("label",{htmlFor:"startDate",children:"Start Date"}),Object(h.jsx)("input",{id:"startDate",value:a.startDate,onChange:O,type:"date"}),Object(h.jsx)("label",{htmlFor:"street",children:"Street"}),Object(h.jsx)("input",{id:"street",value:a.street,onChange:O,type:"text"}),Object(h.jsx)("label",{htmlFor:"city",children:"City"}),Object(h.jsx)("input",{id:"city",value:a.city,onChange:O,type:"text"}),Object(h.jsx)(p,{options:d,id:"state",handleSelect:O,label:"State"}),Object(h.jsx)("label",{htmlFor:"zipCode",children:"Zip Code"}),Object(h.jsx)("input",{id:"zipCode",value:a.zipCode,onChange:O,type:"number"}),Object(h.jsx)(p,{options:c,id:"department",handleSelect:O,label:"Department"})]}),Object(h.jsx)("button",{type:"submit",children:"Save"})]})]})]})}},73:function(e,t,a){}}]);
//# sourceMappingURL=5.9a4b3cd8.chunk.js.map