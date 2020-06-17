(this["webpackJsonpreact-map-frameworks"]=this["webpackJsonpreact-map-frameworks"]||[]).push([[10],{126:function(e,t,n){"use strict";n.r(t);var r=n(39),a=n(0),s=n.n(a),u=n(46),c=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),i=function(e){function t(t){return e.call(this,t)||this}return c(t,e),t.prototype.render=function(){return a.createElement("div",{id:this.props.id,style:this.props.style})},t.prototype.shouldComponentUpdate=function(){return!1},t}(a.Component),o=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},p=function(e){function t(t){var n=e.call(this,t)||this;return n.state={mapContainerId:Math.random().toString(36).substring(0,14),status:"loading"},n}return o(t,e),t.prototype.render=function(){var e=this,t={left:"50%",marginRight:"-50%",position:"absolute",top:"50%",transform:"translate(-50%, -50%)"},n=this.props.className?this.props.style:l({height:"100%",position:"relative",width:"100%"},this.props.style),r=this.props.loadElement?this.props.loadElement:a.createElement("h3",{id:"react-arcgis-loading-text"},"Loading..."),s=this.props.failElement?this.props.failElement:a.createElement("h3",{id:"react-arcgis-fail-text"},"The ArcGIS API failed to load.");if("loaded"===this.state.status){if(this.props.childrenAsFunction)return this.props.childrenAsFunction(this.state.map,this.state.view);var u=a.Children.map(this.props.children,(function(t){var n=t;return a.cloneElement(n,{map:e.state.map,view:e.state.view})}));return a.createElement("div",{id:"base-container",style:n,className:this.props.className},a.createElement(i,{id:this.state.mapContainerId,style:{width:"100%",height:"100%"}}),u)}return"loading"===this.state.status?a.createElement("div",{id:"base-container",style:n,className:this.props.className},a.createElement(i,{id:this.state.mapContainerId,style:{width:"100%",height:"100%"}}),a.createElement("div",{style:t},r)):a.createElement("div",{id:"base-container",style:n,className:this.props.className},a.createElement(i,{id:this.state.mapContainerId,style:{width:"100%",height:"100%"}}),a.createElement("div",{style:t},s))},t.prototype.componentDidMount=function(){var e=this;Object(u.loadModules)(this.props.scriptUri,this.props.loaderOptions).then((function(t){return e.props.loadMap(t,e.state.mapContainerId).then((function(t){var n=t.map,r=t.view;e.setState({map:n,view:r,status:"loaded"}),e.props.onLoad&&e.props.onLoad(n,r)})).catch((function(e){throw e}))})).catch((function(t){e.setState({status:"failed"}),e.props.onFail&&e.props.onFail(t)}))},t}(a.Component),b=function(){return(b=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},h={onClick:"click",onDoubleClick:"double-click",onDrag:"drag",onHold:"hold",onKeyDown:"key-down",onKeyUp:"key-up",onLayerViewCreate:"layerview-create",onLayerViewDestroy:"layerview-destroy",onMouseWheel:"mouse-wheel",onPointerDown:"pointer-down",onPointerMove:"pointer-move",onPointerUp:"pointer-up",onResize:"resize"},d=function(e){return a.createElement(p,b({},e,{loadMap:function(t,n){var r=t[0],a=t[1];return new Promise((function(t,s){try{var u=new r(e.mapProperties),c=b({map:u,container:n},e.viewProperties),i=new a(c),o=i;Object.keys(h).forEach((function(t){e[t]&&o.on(h[t],e[t])})),i.when((function(){t({map:u,view:i})}),(function(e){s(e)}))}catch(l){s(l)}}))}}))},f=function(e){return a.createElement(p,b({},e,{loadMap:function(t,n){var r=t[0],a=t[1],s=t[2];return new Promise((function(t,u){try{var c=new r(b({portalItem:{id:e.id}},e.mapProperties));c.load().then((function(){return c.basemap.load()})).then((function(){var e=c.allLayers.map((function(e){return e.load()}));return s(e.toArray())})).then((function(){var r=new a(b({container:n,map:c},e.viewProperties));Object.keys(h).forEach((function(t){e[t]&&r.on(h[t],e[t])})),t({map:c,view:r})})).catch((function(e){u(e)}))}catch(i){u(i)}}))}}))},m=function(){return(m=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},v=function(){return(v=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},k={Map:function(e){return a.createElement(d,m({scriptUri:["esri/Map","esri/views/MapView"]},e,{mapProperties:m({basemap:"streets-vector"},e.mapProperties),viewProperties:m({center:[-122.4443,47.2529],zoom:6},e.viewProperties)}))},Scene:function(e){return a.createElement(d,m({scriptUri:["esri/Map","esri/views/SceneView"]},e,{mapProperties:m({basemap:"satellite",ground:"world-elevation"},e.mapProperties),viewProperties:m({center:[-122.4443,47.2529],zoom:6},e.viewProperties)}))},WebMap:function(e){return a.createElement(f,v({scriptUri:["esri/WebMap","esri/views/MapView","dojo/promise/all"]},e,{viewProperties:e.viewProperties,mapProperties:e.mapProperties}))},WebScene:function(e){return a.createElement(f,v({scriptUri:["esri/WebScene","esri/views/SceneView","dojo/promise/all"]},e,{viewProperties:e.viewProperties,mapProperties:e.mapProperties}))}},w=k.Map,x=(n(45),n(34)),y=n.n(x),O=n(35),E=n(38);var P=function(e){var t=e.onComplete,n=e.view,s=Object(a.useRef)();return Object(E.a)(function(){var e=Object(O.a)(y.a.mark((function e(a,c){var i,o,l,p;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.current){e.next=7;break}return e.next=3,Object(u.loadModules)(["esri/Graphic"],{css:!0});case 3:i=e.sent,o=Object(r.a)(i,1),l=o[0],s.current=l;case 7:p=a.map((function(e){return new s.current({geometry:{type:"point",longitude:e.longitude,latitude:e.latitude},symbol:{type:"simple-marker",color:[226,119,40],size:"12px",outline:{color:[255,255,255],width:0}}})})),n.graphics.addMany(p),c&&t();case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),null},g=n(36);t.default=function(){var e=Object(a.useState)(),t=Object(r.a)(e,2),n=t[0],u=t[1],c=Object(a.useRef)();return Object(a.useEffect)((function(){return c.current=new Date,function(){}}),[]),s.a.createElement(s.a.Fragment,null,s.a.createElement(g.a,{milliseconds:n}),s.a.createElement(w,{mapProperties:{basemap:"osm"},viewProperties:{center:[-98,35],zoom:5}},s.a.createElement(P,{onComplete:function(e){u(new Date-c.current)},startTime:c})))}},33:function(e,t,n){"use strict";t.a={DATA_INTERVAL:200,MAX_LOCATION_INDEX:10}},36:function(e,t,n){"use strict";var r=n(0),a=n.n(r),s=n(33);n(37);t.a=function(e){var t=e.milliseconds;return a.a.createElement("div",{className:"status"},t?"Loaded ".concat(1e3*s.a.MAX_LOCATION_INDEX," POI in: ").concat(t/1e3," seconds"):"Loading ".concat(1e3*s.a.MAX_LOCATION_INDEX," POI..."))}},37:function(e,t,n){},38:function(e,t,n){"use strict";var r=n(34),a=n.n(r),s=n(35),u=n(0),c=n(33);function i(e){return o.apply(this,arguments)}function o(){return(o=Object(s.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],e.t0=t,e.next=0===e.t0?4:1===e.t0?8:2===e.t0?12:3===e.t0?16:4===e.t0?20:5===e.t0?24:6===e.t0?28:7===e.t0?32:8===e.t0?36:9===e.t0?40:10===e.t0?44:11===e.t0?48:12===e.t0?52:13===e.t0?56:14===e.t0?60:15===e.t0?64:16===e.t0?68:17===e.t0?72:18===e.t0?76:19===e.t0?80:20===e.t0?84:21===e.t0?88:22===e.t0?92:23===e.t0?96:24===e.t0?100:25===e.t0?104:26===e.t0?108:27===e.t0?112:28===e.t0?116:29===e.t0?120:30===e.t0?124:31===e.t0?128:32===e.t0?132:33===e.t0?136:34===e.t0?140:35===e.t0?144:36===e.t0?148:37===e.t0?152:38===e.t0?156:39===e.t0?160:40===e.t0?164:41===e.t0?168:42===e.t0?172:43===e.t0?176:44===e.t0?180:45===e.t0?184:46===e.t0?188:47===e.t0?192:48===e.t0?196:49===e.t0?200:50===e.t0?204:51===e.t0?208:52===e.t0?212:53===e.t0?216:54===e.t0?220:55===e.t0?224:56===e.t0?228:57===e.t0?232:58===e.t0?236:59===e.t0?240:244;break;case 4:return e.next=6,n.e(14).then(n.bind(null,65));case 6:return r=e.sent,e.abrupt("break",245);case 8:return e.next=10,n.e(15).then(n.bind(null,66));case 10:return r=e.sent,e.abrupt("break",245);case 12:return e.next=14,n.e(26).then(n.bind(null,67));case 14:return r=e.sent,e.abrupt("break",245);case 16:return e.next=18,n.e(37).then(n.bind(null,68));case 18:return r=e.sent,e.abrupt("break",245);case 20:return e.next=22,n.e(48).then(n.bind(null,69));case 22:return r=e.sent,e.abrupt("break",245);case 24:return e.next=26,n.e(59).then(n.bind(null,70));case 26:return r=e.sent,e.abrupt("break",245);case 28:return e.next=30,n.e(70).then(n.bind(null,71));case 30:return r=e.sent,e.abrupt("break",245);case 32:return e.next=34,n.e(71).then(n.bind(null,72));case 34:return r=e.sent,e.abrupt("break",245);case 36:return e.next=38,n.e(72).then(n.bind(null,73));case 38:return r=e.sent,e.abrupt("break",245);case 40:return e.next=42,n.e(73).then(n.bind(null,74));case 42:return r=e.sent,e.abrupt("break",245);case 44:return e.next=46,n.e(16).then(n.bind(null,75));case 46:return r=e.sent,e.abrupt("break",245);case 48:return e.next=50,n.e(17).then(n.bind(null,76));case 50:return r=e.sent,e.abrupt("break",245);case 52:return e.next=54,n.e(18).then(n.bind(null,77));case 54:return r=e.sent,e.abrupt("break",245);case 56:return e.next=58,n.e(19).then(n.bind(null,78));case 58:return r=e.sent,e.abrupt("break",245);case 60:return e.next=62,n.e(20).then(n.bind(null,79));case 62:return r=e.sent,e.abrupt("break",245);case 64:return e.next=66,n.e(21).then(n.bind(null,80));case 66:return r=e.sent,e.abrupt("break",245);case 68:return e.next=70,n.e(22).then(n.bind(null,81));case 70:return r=e.sent,e.abrupt("break",245);case 72:return e.next=74,n.e(23).then(n.bind(null,82));case 74:return r=e.sent,e.abrupt("break",245);case 76:return e.next=78,n.e(24).then(n.bind(null,83));case 78:return r=e.sent,e.abrupt("break",245);case 80:return e.next=82,n.e(25).then(n.bind(null,84));case 82:return r=e.sent,e.abrupt("break",245);case 84:return e.next=86,n.e(27).then(n.bind(null,85));case 86:return r=e.sent,e.abrupt("break",245);case 88:return e.next=90,n.e(28).then(n.bind(null,86));case 90:return r=e.sent,e.abrupt("break",245);case 92:return e.next=94,n.e(29).then(n.bind(null,87));case 94:return r=e.sent,e.abrupt("break",245);case 96:return e.next=98,n.e(30).then(n.bind(null,88));case 98:return r=e.sent,e.abrupt("break",245);case 100:return e.next=102,n.e(31).then(n.bind(null,89));case 102:return r=e.sent,e.abrupt("break",245);case 104:return e.next=106,n.e(32).then(n.bind(null,90));case 106:return r=e.sent,e.abrupt("break",245);case 108:return e.next=110,n.e(33).then(n.bind(null,91));case 110:return r=e.sent,e.abrupt("break",245);case 112:return e.next=114,n.e(34).then(n.bind(null,92));case 114:return r=e.sent,e.abrupt("break",245);case 116:return e.next=118,n.e(35).then(n.bind(null,93));case 118:return r=e.sent,e.abrupt("break",245);case 120:return e.next=122,n.e(36).then(n.bind(null,94));case 122:return r=e.sent,e.abrupt("break",245);case 124:return e.next=126,n.e(38).then(n.bind(null,95));case 126:return r=e.sent,e.abrupt("break",245);case 128:return e.next=130,n.e(39).then(n.bind(null,96));case 130:return r=e.sent,e.abrupt("break",245);case 132:return e.next=134,n.e(40).then(n.bind(null,97));case 134:return r=e.sent,e.abrupt("break",245);case 136:return e.next=138,n.e(41).then(n.bind(null,98));case 138:return r=e.sent,e.abrupt("break",245);case 140:return e.next=142,n.e(42).then(n.bind(null,99));case 142:return r=e.sent,e.abrupt("break",245);case 144:return e.next=146,n.e(43).then(n.bind(null,100));case 146:return r=e.sent,e.abrupt("break",245);case 148:return e.next=150,n.e(44).then(n.bind(null,101));case 150:return r=e.sent,e.abrupt("break",245);case 152:return e.next=154,n.e(45).then(n.bind(null,102));case 154:return r=e.sent,e.abrupt("break",245);case 156:return e.next=158,n.e(46).then(n.bind(null,103));case 158:return r=e.sent,e.abrupt("break",245);case 160:return e.next=162,n.e(47).then(n.bind(null,104));case 162:return r=e.sent,e.abrupt("break",245);case 164:return e.next=166,n.e(49).then(n.bind(null,105));case 166:return r=e.sent,e.abrupt("break",245);case 168:return e.next=170,n.e(50).then(n.bind(null,106));case 170:return r=e.sent,e.abrupt("break",245);case 172:return e.next=174,n.e(51).then(n.bind(null,107));case 174:return r=e.sent,e.abrupt("break",245);case 176:return e.next=178,n.e(52).then(n.bind(null,108));case 178:return r=e.sent,e.abrupt("break",245);case 180:return e.next=182,n.e(53).then(n.bind(null,109));case 182:return r=e.sent,e.abrupt("break",245);case 184:return e.next=186,n.e(54).then(n.bind(null,110));case 186:return r=e.sent,e.abrupt("break",245);case 188:return e.next=190,n.e(55).then(n.bind(null,111));case 190:return r=e.sent,e.abrupt("break",245);case 192:return e.next=194,n.e(56).then(n.bind(null,112));case 194:return r=e.sent,e.abrupt("break",245);case 196:return e.next=198,n.e(57).then(n.bind(null,113));case 198:return r=e.sent,e.abrupt("break",245);case 200:return e.next=202,n.e(58).then(n.bind(null,114));case 202:return r=e.sent,e.abrupt("break",245);case 204:return e.next=206,n.e(60).then(n.bind(null,115));case 206:return r=e.sent,e.abrupt("break",245);case 208:return e.next=210,n.e(61).then(n.bind(null,116));case 210:return r=e.sent,e.abrupt("break",245);case 212:return e.next=214,n.e(62).then(n.bind(null,117));case 214:return r=e.sent,e.abrupt("break",245);case 216:return e.next=218,n.e(63).then(n.bind(null,118));case 218:return r=e.sent,e.abrupt("break",245);case 220:return e.next=222,n.e(64).then(n.bind(null,119));case 222:return r=e.sent,e.abrupt("break",245);case 224:return e.next=226,n.e(65).then(n.bind(null,120));case 226:return r=e.sent,e.abrupt("break",245);case 228:return e.next=230,n.e(66).then(n.bind(null,121));case 230:return r=e.sent,e.abrupt("break",245);case 232:return e.next=234,n.e(67).then(n.bind(null,122));case 234:return r=e.sent,e.abrupt("break",245);case 236:return e.next=238,n.e(68).then(n.bind(null,123));case 238:return r=e.sent,e.abrupt("break",245);case 240:return e.next=242,n.e(69).then(n.bind(null,124));case 242:return r=e.sent,e.abrupt("break",245);case 244:return e.abrupt("break",245);case 245:return e.abrupt("return",r);case 246:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.a.DATA_INTERVAL,n=Object(u.useRef)(0),r=Object(u.useRef)(),o=Object(u.useRef)();Object(u.useEffect)((function(){r.current=e}),[e]),Object(u.useEffect)((function(){function e(){return(e=Object(s.a)(a.a.mark((function e(){var t,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!1,n.current+1===c.a.MAX_LOCATION_INDEX&&(t=!0,clearInterval(o.current)),0===n.current&&console.log("-------------------"),console.log("Loading data from ".concat(n.current)),n.current+=1,e.next=7,i(n.current-1);case 7:s=e.sent,r.current(s.default,t);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}if(null!==t)return o.current=setInterval((function(){return e.apply(this,arguments)}),t),function(){return clearInterval(o.current)}}),[t])}},45:function(e,t,n){}}]);
//# sourceMappingURL=10.518ddf64.chunk.js.map