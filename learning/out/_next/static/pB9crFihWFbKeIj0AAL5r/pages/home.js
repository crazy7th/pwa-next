(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"16Al":function(e,t,n){"use strict";var r=n("WbBG");function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},"17x9":function(e,t,n){e.exports=n("16Al")()},"3D1N":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return n("CH2o")}])},CH2o:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=n("YFqc"),a=n.n(i),s=o.a.createElement;t.default=function(){return s("div",null,s("h1",null,"Homepage"),s("p",null,"Hai teman-teman, ini sudah masuk di halaman pertama aku ^^"),s("p",null,"cek ",s(a.a,{href:"/about/me"},"profile")," aku yuk"),s("a",{href:"/"},"Kembali"))}},WbBG:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("/HRN"),o=n("WaGi"),i=n("ZDA2"),a=n("/+P4"),s=n("N9n2"),c=n("5Uuq"),p=n("KI45");t.__esModule=!0,t.default=void 0;var u,f=p(n("LX0d")),l=n("CxY0"),h=c(n("q1tI")),d=(p(n("17x9")),p(n("nOHt"))),v=(n("P5f7"),n("g/15"));function y(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var m=new f.default,w=window.IntersectionObserver;function k(){return u||(w?u=new w(function(e){e.forEach(function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),m.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var b=function(e){function t(e){var n;return r(this,t),(n=i(this,a(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var a=e(o,i);return t=o,n=i,r=a,a}}(function(e,t){return{href:y(e),as:t?y(t):t}}),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),a=i.href,s=i.as;if(function(e){var t=(0,l.parse)(e,!1,!0),n=(0,l.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var c=window.location.pathname;a=(0,l.resolve)(c,a),s=s?(0,l.resolve)(c,s):a,e.preventDefault();var p=n.props.scroll;null==p&&(p=s.indexOf("#")<0),d.default[n.props.replace?"replace":"push"](a,s,{shallow:n.props.shallow}).then(function(e){e&&p&&(window.scrollTo(0,0),document.body.focus())})}}},n.p=!1!==e.prefetch,n}return s(t,e),o(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.p&&w&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=k();return n?(n.observe(e),m.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}m.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,l.resolve)(e,t);d.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=h.default.createElement("a",null,t));var i=h.Children.only(t),a={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch()},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),h.default.cloneElement(i,a)}}]),t}(h.Component);b.propTypes=void 0;var g=b;t.default=g}},[["3D1N",1,0]]]);