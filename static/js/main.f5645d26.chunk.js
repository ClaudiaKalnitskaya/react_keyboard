(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),s=n(4),c=n(5),o=n(7),i=n(6),p=n(1),u=n.n(p),d=n(0),l=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={pressedKey:""},e.handlerEvent=function(t){var n=" "===String(t.key)?"Space":t.key;e.setState({pressedKey:n})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handlerEvent)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handlerEvent)}},{key:"render",value:function(){var e=this.state.pressedKey;return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("p",{className:"App__message",children:e?"The last pressed key is [".concat(e,"]"):"Nothing was pressed yet"})})}}]),n}(u.a.Component);n(13);r.a.render(Object(d.jsx)(l,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f5645d26.chunk.js.map