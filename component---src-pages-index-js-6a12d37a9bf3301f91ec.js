(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(142),s=a(146),l=a(151);a(152);t.default=function(){return r.a.createElement("div",{className:"container px2 sm-px3"},r.a.createElement(s.a,{page:"home"}),r.a.createElement("article",{className:"markdown-body px0"},r.a.createElement("h1",{id:"what-it-is-all-about"},"Customisable dropdown select for react"),r.a.createElement("p",null,"Customisable dropdown select for react with custom render callback props to override inner components"),r.a.createElement("h3",null,"Install via ",r.a.createElement("strong",null,"npm"),":"),r.a.createElement("pre",null,"npm install --save react-dropdown-select"),r.a.createElement("h3",null,"Use:"),r.a.createElement("pre",null,"\n<Select\n  multi={true}\n  options={options}\n  onChange={(values) => this.onChange(values)}\n/>"),r.a.createElement("p",{className:"center"},r.a.createElement(o.Link,{to:"props",className:"m1 btn btn-outline center"},"Prop types"),r.a.createElement(o.Link,{to:"demo",className:"m1 btn btn-outline center"},"Demo"),r.a.createElement("a",{href:"https://github.com/sanusart/react-dropdown-select",className:"m1 btn btn-outline center"},"Github"))),r.a.createElement(l.a,null))}},140:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.withPrefix=m,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(148)),o=n(a(149)),s=n(a(7)),l=n(a(52)),i=n(a(53)),c=n(a(4)),u=n(a(0)),p=a(22),d=a(142);function m(e){return function(e){return e.replace(/\/+/g,"/")}("/react-dropdown-select/"+e)}var f={activeClassName:c.default.string,activeStyle:c.default.object},h=function(e){function t(t){var a;a=e.call(this)||this,(0,i.default)((0,l.default)((0,l.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,d.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,s=void 0===n?this.defaultGetProps:n,l=t.onClick,i=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),f=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=m(a);return u.default.createElement(p.Link,(0,o.default)({to:v,state:c,getProps:s,innerRef:this.handleRef,onMouseEnter:function(e){i&&i(e),___loader.hovering((0,d.parsePath)(a).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),b(a,{state:c,replace:f})),!0}},h))},t}(u.default.Component);h.propTypes=(0,o.default)({},f,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var v=h;t.default=v;var b=function(e,t){window.___navigate(m(e),t)};t.navigate=b;var g=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(m(e))};t.push=g;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(m(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),g(e)}},142:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),o=a(4),s=a.n(o),l=a(140),i=a.n(l);a.d(t,"Link",function(){return i.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(145),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var p=a(33);a.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),m=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},145:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},146:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(147),s=a(142);t.a=function(e){var t=e.page,a=e.title;return"home"===t?r.a.createElement("div",{className:"p3",style:{color:"#fff",backgroundColor:"#111111"}},r.a.createElement("h3",{className:"m0"},"v",o.a),r.a.createElement("span",{className:"block color-inherit",style:{fontSize:"5vw",lineHeight:"1"}},"React dropdown select")):r.a.createElement("div",{className:"mb3"},r.a.createElement("header",{className:"py2 mt3 border-bottom"},r.a.createElement("div",{className:"sm-flex flex-center flex-wrap"},r.a.createElement("div",{className:"flex-auto"},r.a.createElement("div",{className:"mxn1"},r.a.createElement("a",{href:"/",title:"Basscss",className:"btn compact btn-link btn-small p1"},"react-dropdown-select"),r.a.createElement("span",null,"v",o.a)),r.a.createElement("h1",{className:"m0",style:{fontSize:"3rem"}},a)))),r.a.createElement("div",{className:"h5 mxn1"},r.a.createElement(s.Link,{to:"/",title:"Home",className:"btn compact btn-link p1 regular"},"Home"),r.a.createElement("span",{className:""},r.a.createElement("span",{className:"muted"},"/"),r.a.createElement("span",{className:"muted m1"},a))))}},147:function(e){e.exports={a:"1.2.8"}},148:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},149:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},150:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),o=a(4),s=a.n(o),l=a(54),i=a(2),c=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},151:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(142);t.a=function(){return r.a.createElement("footer",{className:"py3 border-top"},r.a.createElement("div",{className:"left"},r.a.createElement(o.Link,{className:"m1",to:"/"},"Home"),r.a.createElement(o.Link,{className:"m1",to:"props"},"Props types"),r.a.createElement(o.Link,{to:"demo",className:"m1"},"Demo"),r.a.createElement("a",{href:"https://github.com/sanusart/react-dropdown-select",className:"m1"},"Github")),r.a.createElement("div",{className:"right"},r.a.createElement("p",{className:"btn compact btn-link p1"},"©",(new Date).getFullYear()," All rights reserved")))}},152:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-6a12d37a9bf3301f91ec.js.map