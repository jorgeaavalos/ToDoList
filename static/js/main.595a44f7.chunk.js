(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{10:function(e,t,n){},19:function(e,t,n){e.exports=n(31)},24:function(e,t,n){},25:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),i=n.n(c),o=(n(24),n(16)),s=n(11),m=n(12),l=n(2),u=n(18),d=n(15),p=(n(25),n(10),n(17)),f=n(6),h=n(13);var v=function(e){var t=Object(a.useState)(!1),n=Object(p.a)(t,2),c=n[0],i=n[1],o=Object(a.useRef)(),s=Object(a.useRef)(),m=e.items;function l(e,t,n){for(var a=0;a<t.length;a++)if(t[a][n]===e)return a;return-1}var u=function e(){i(!1),s.current.removeEventListener("dragend",e),o.current=null,s.current=null},d=function(e){return o.current.item.key===e.item.key?"drag":""},v=e.items.map((function(t){return r.a.createElement("div",{className:"list",key:t.key},r.a.createElement("p",{draggable:!0,style:t.completed?(n={item:t},n.item.completed?{backgroundColor:"green"}:""):null,onDragStart:function(e){!function(e,t){o.current=t,s.current=e.target,s.current.addEventListener("dragend",u),setTimeout((function(){i(!0)}),0)}(e,{item:t})},onDragEnter:c?function(e){!function(e,t){var n=o.current.item;if(e.target!==s.current){var a=l(t.key,m,"key"),r=l(n.key,m,"key"),c=m[a];m[a]=m[r],m[r]=c}}(e,t)}:null,id:c?d({item:t}):null},r.a.createElement("input",{id:t.key,value:t.text,onChange:function(n){e.setUpdateItem(n.target.value,t.key)}}),r.a.createElement("span",null,r.a.createElement(f.a,{className:"faicons-grabbing",icon:"arrows-alt"}),t.completed?r.a.createElement(f.a,{className:"faicons",icon:"reply",onClick:function(){return e.setUncompletedItem(t.key)}}):r.a.createElement(f.a,{className:"faicons",icon:"check",onClick:function(){return e.setCompletedItem(t.key)}}),r.a.createElement(f.a,{className:"faicons",icon:"trash",onClick:function(){return e.deleteItem(t.key)}}))));var n}));return r.a.createElement("div",null,r.a.createElement(h.a,{duration:300,easing:"ease-in-out"},v))},I=n(5),k=n(14);I.b.add(k.a);var y=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={items:[],currentItem:{text:"",key:"",completed:!1}},a.handleInput=a.handleInput.bind(Object(l.a)(a)),a.addItem=a.addItem.bind(Object(l.a)(a)),a.deleteItem=a.deleteItem.bind(Object(l.a)(a)),a.setUpdateItem=a.setUpdateItem.bind(Object(l.a)(a)),a.setCompletedItem=a.setCompletedItem.bind(Object(l.a)(a)),a.setUncompletedItem=a.setUncompletedItem.bind(Object(l.a)(a)),a}return Object(m.a)(n,[{key:"handleInput",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now(),completed:!1}})}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(""!==t.text){var n=[].concat(Object(o.a)(this.state.items),[t]);this.setState({items:n,currentItem:{text:"",key:"",completed:""}})}}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"setUpdateItem",value:function(e,t){var n=this.state.items;n.map((function(n){n.key===t&&(n.text=e)})),this.setState({items:n})}},{key:"setCompletedItem",value:function(e){var t=this.state.items;t.map((function(t){t.key===e&&(t.completed=!0)})),this.setState({items:t})}},{key:"setUncompletedItem",value:function(e){var t=this.state.items;t.map((function(t){t.key===e&&(t.completed=!1)})),this.setState({items:t})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("form",{id:"to-do-form",className:"center"},r.a.createElement("input",{type:"text",placeholder:"Enter Text",value:this.state.currentItem.text,onChange:this.handleInput}),r.a.createElement("button",{type:"submit",onClick:this.addItem},"Add"))),r.a.createElement("div",{className:"list-container"},r.a.createElement(v,{items:this.state.items,deleteItem:this.deleteItem,setUpdateItem:this.setUpdateItem,setCompletedItem:this.setCompletedItem,setUncompletedItem:this.setUncompletedItem})))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.595a44f7.chunk.js.map