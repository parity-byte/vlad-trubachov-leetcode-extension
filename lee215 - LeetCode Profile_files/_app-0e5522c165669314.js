!function(){try{var e="u">typeof window?window:"u">typeof global?global:"u">typeof globalThis?globalThis:"u">typeof self?self:{};e._sentryModuleMetadata=e._sentryModuleMetadata||{},e._sentryModuleMetadata[(new e.Error).stack]=function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];if(null!=r)for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n])}return e}({},e._sentryModuleMetadata[(new e.Error).stack],{"_sentryBundlerPluginAppKey:frontendx":!0});var t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="fa59cfd5-50e5-4ae6-a8b2-0fa39b0fa15a",e._sentryDebugIdIdentifier="sentry-dbid-fa59cfd5-50e5-4ae6-a8b2-0fa39b0fa15a")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[90636],{92:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(4005)}])},321:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},358:(e,t,r)=>{"use strict";r.d(t,{H:()=>o});var n=r(18422),i=r(56610);let o=()=>{let{mutateAsync:e}=(0,n.eJ5)(i.nS,{retry:!1});return t=>e({usernameToMock:t}).then(e=>{var t;return null==(t=e.mockUser)?void 0:t.ok})}},517:(e,t,r)=>{"use strict";var n=r(89124);t.mw={prefix:n.prefix,iconName:n.iconName,icon:[n.width,n.height,n.aliases,n.unicode,n.svgPathData]},t.yY=t.mw,n.prefix,n.iconName,n.width,n.height,n.aliases,n.unicode,n.svgPathData,n.aliases},963:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={getRedirectError:function(){return u},getRedirectStatusCodeFromError:function(){return m},getRedirectTypeFromError:function(){return p},getURLFromRedirectError:function(){return d},permanentRedirect:function(){return c},redirect:function(){return l}};for(var i in n)Object.defineProperty(t,i,{enumerable:!0,get:n[i]});let o=r(57258),s=r(29212),a;function u(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.RedirectStatusCode.TemporaryRedirect,n=Object.defineProperty(Error(s.REDIRECT_ERROR_CODE),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n.digest=`${s.REDIRECT_ERROR_CODE};${t};${e};${r};`,n}function l(e,t){var r;throw null!=t||(t=(null==a||null==(r=a.getStore())?void 0:r.isAction)?"push":"replace"),u(e,t,o.RedirectStatusCode.TemporaryRedirect)}function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"replace";throw u(e,t,o.RedirectStatusCode.PermanentRedirect)}function d(e){return(0,s.isRedirectError)(e)?e.digest.split(";").slice(2,-2).join(";"):null}function p(e){if(!(0,s.isRedirectError)(e))throw Object.defineProperty(Error("Not a redirect error"),"__NEXT_ERROR_CODE",{value:"E260",enumerable:!1,configurable:!0});return e.digest.split(";",2)[1]}function m(e){if(!(0,s.isRedirectError)(e))throw Object.defineProperty(Error("Not a redirect error"),"__NEXT_ERROR_CODE",{value:"E260",enumerable:!1,configurable:!0});return Number(e.digest.split(";").at(-2))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1637:(e,t,r)=>{"use strict";function n(){if(console&&console.warn){for(var e,t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];"string"==typeof r[0]&&(r[0]="react-i18next:: ".concat(r[0])),(e=console).warn.apply(e,r)}}r.d(t,{NM:()=>a,R8:()=>n,dM:()=>s,mc:()=>o});var i={};function o(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];"string"==typeof t[0]&&i[t[0]]||("string"==typeof t[0]&&(i[t[0]]=new Date),n.apply(void 0,t))}function s(e,t,r){e.loadNamespaces(t,function(){e.isInitialized?r():e.on("initialized",function t(){setTimeout(function(){e.off("initialized",t)},0),r()})})}function a(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.languages&&t.languages.length?void 0===t.options.ignoreJSONStructure?function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=t.languages[0],i=!!t.options&&t.options.fallbackLng,o=t.languages[t.languages.length-1];if("cimode"===n.toLowerCase())return!0;var s=function(e,r){var n=t.services.backendConnector.state["".concat(e,"|").concat(r)];return -1===n||2===n};return(!(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1)||!t.services.backendConnector.backend||!t.isLanguageChangingTo||!!s(t.isLanguageChangingTo,e))&&!!(t.hasResourceBundle(n,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||s(n,e)&&(!i||s(o,e)))}(e,t,r):t.hasLoadedNamespace(e,{precheck:function(t,n){if(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!n(t.isLanguageChangingTo,e))return!1}}):(o("i18n.languages were undefined or empty",t.languages),!0)}},1958:(e,t,r)=>{var n=r(82668);e.exports=function(e){var t=+e;return t!=t||0===t?0:n(t)}},2188:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(62222),i=1/0;let o=function(e){return e?(e=(0,n.A)(e))===i||e===-i?(e<0?-1:1)*17976931348623157e292:e==e?e:0:0===e?e:0}},3157:(e,t,r)=>{e.exports=r(56514)&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3472:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(13909);let i=function(e){return(null==e?0:e.length)?(0,n.A)(e,1):[]}},3982:(e,t,r)=>{var n=r(72806),i=r(46224),o=r(90304),s=r(45941),a=r(56514),u=r(3157),l=n.Symbol,c=i("wks"),d=u?l.for||l:l&&l.withoutSetter||s;e.exports=function(e){return o(c,e)||(c[e]=a&&o(l,e)?l[e]:d("Symbol."+e)),c[e]}},4005:(e,t,r)=>{"use strict";let n,i;r.r(t),r.d(t,{default:()=>rr});var o,s,a=r(37876),u=r(14232),l=r(89099),c=r.n(l),d=r(21379),p=r(18847),m=r.n(p),f=r(18070),g=r(37149),y=r(58444),h=r(60388),v=r(90089),b=class extends v.Q{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,r){let n=t.queryKey,i=t.queryHash??(0,g.F$)(n,t),o=this.get(i);return o||(o=new y.X({client:e,queryKey:n,queryHash:i,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(n)}),this.add(o)),o}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){h.jG.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,g.MK)(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,g.MK)(e,t)):t}notify(e){h.jG.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){h.jG.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){h.jG.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},S=r(21407),w=class extends v.Q{constructor(e={}){super(),this.config=e,this.#t=new Set,this.#r=new Map,this.#n=0}#t;#r;#n;build(e,t,r){let n=new S.s({client:e,mutationCache:this,mutationId:++this.#n,options:e.defaultMutationOptions(t),state:r});return this.add(n),n}add(e){this.#t.add(e);let t=I(e);if("string"==typeof t){let r=this.#r.get(t);r?r.push(e):this.#r.set(t,[e])}this.notify({type:"added",mutation:e})}remove(e){if(this.#t.delete(e)){let t=I(e);if("string"==typeof t){let r=this.#r.get(t);if(r)if(r.length>1){let t=r.indexOf(e);-1!==t&&r.splice(t,1)}else r[0]===e&&this.#r.delete(t)}}this.notify({type:"removed",mutation:e})}canRun(e){let t=I(e);if("string"!=typeof t)return!0;{let r=this.#r.get(t),n=r?.find(e=>"pending"===e.state.status);return!n||n===e}}runNext(e){let t=I(e);if("string"!=typeof t)return Promise.resolve();{let r=this.#r.get(t)?.find(t=>t!==e&&t.state.isPaused);return r?.continue()??Promise.resolve()}}clear(){h.jG.batch(()=>{this.#t.forEach(e=>{this.notify({type:"removed",mutation:e})}),this.#t.clear(),this.#r.clear()})}getAll(){return Array.from(this.#t)}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,g.nJ)(t,e))}findAll(e={}){return this.getAll().filter(t=>(0,g.nJ)(e,t))}notify(e){h.jG.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(e=>e.state.isPaused);return h.jG.batch(()=>Promise.all(e.map(e=>e.continue().catch(g.lQ))))}};function I(e){return e.options.scope?.id}var $=r(98275),C=class{#i;#o;#s;#a;#u;#l;#c;#d;constructor(e={}){this.#i=e.queryCache||new b,this.#o=e.mutationCache||new w,this.#s=e.defaultOptions||{},this.#a=new Map,this.#u=new Map,this.#l=0}mount(){this.#l++,1===this.#l&&(this.#c=$.m.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#i.onFocus())}),this.#d=f.t.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#i.onOnline())}))}unmount(){this.#l--,0===this.#l&&(this.#c?.(),this.#c=void 0,this.#d?.(),this.#d=void 0)}isFetching(e){return this.#i.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#o.findAll({...e,status:"pending"}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#i.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.defaultQueryOptions(e),r=this.#i.build(this,t),n=r.state.data;return void 0===n?this.fetchQuery(e):(e.revalidateIfStale&&r.isStaleByTime((0,g.d2)(t.staleTime,r))&&this.prefetchQuery(t),Promise.resolve(n))}getQueriesData(e){return this.#i.findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,r){let n=this.defaultQueryOptions({queryKey:e}),i=this.#i.get(n.queryHash),o=i?.state.data,s=(0,g.Zw)(t,o);if(void 0!==s)return this.#i.build(this,n).setData(s,{...r,manual:!0})}setQueriesData(e,t,r){return h.jG.batch(()=>this.#i.findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,r)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#i.get(t.queryHash)?.state}removeQueries(e){let t=this.#i;h.jG.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let r=this.#i;return h.jG.batch(()=>(r.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){let r={revert:!0,...t};return Promise.all(h.jG.batch(()=>this.#i.findAll(e).map(e=>e.cancel(r)))).then(g.lQ).catch(g.lQ)}invalidateQueries(e,t={}){return h.jG.batch(()=>(this.#i.findAll(e).forEach(e=>{e.invalidate()}),e?.refetchType==="none")?Promise.resolve():this.refetchQueries({...e,type:e?.refetchType??e?.type??"active"},t))}refetchQueries(e,t={}){let r={...t,cancelRefetch:t.cancelRefetch??!0};return Promise.all(h.jG.batch(()=>this.#i.findAll(e).filter(e=>!e.isDisabled()&&!e.isStatic()).map(e=>{let t=e.fetch(void 0,r);return r.throwOnError||(t=t.catch(g.lQ)),"paused"===e.state.fetchStatus?Promise.resolve():t}))).then(g.lQ)}fetchQuery(e){let t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);let r=this.#i.build(this,t);return r.isStaleByTime((0,g.d2)(t.staleTime,r))?r.fetch(t):Promise.resolve(r.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(g.lQ).catch(g.lQ)}fetchInfiniteQuery(e){return e._type="infinite",this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(g.lQ).catch(g.lQ)}ensureInfiniteQueryData(e){return e._type="infinite",this.ensureQueryData(e)}resumePausedMutations(){return f.t.isOnline()?this.#o.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#i}getMutationCache(){return this.#o}getDefaultOptions(){return this.#s}setDefaultOptions(e){this.#s=e}setQueryDefaults(e,t){this.#a.set((0,g.EN)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#a.values()],r={};return t.forEach(t=>{(0,g.Cp)(e,t.queryKey)&&Object.assign(r,t.defaultOptions)}),r}setMutationDefaults(e,t){this.#u.set((0,g.EN)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#u.values()],r={};return t.forEach(t=>{(0,g.Cp)(e,t.mutationKey)&&Object.assign(r,t.defaultOptions)}),r}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#s.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=(0,g.F$)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===g.hT&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#s.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#i.clear(),this.#o.clear()}},k=r(67768),A=r(81883);function q(e){return e}function O(e,t,r){if("object"!=typeof t||null===t)return;let n=e.getMutationCache(),i=e.getQueryCache(),o=r?.defaultOptions?.deserializeData??e.getDefaultOptions().hydrate?.deserializeData??q,s=t.mutations||[],a=t.queries||[];s.forEach(({state:t,...i})=>{n.build(e,{...e.getDefaultOptions().hydrate?.mutations,...r?.defaultOptions?.mutations,...i},t)}),a.forEach(({queryKey:t,state:n,queryHash:s,meta:a,promise:u,dehydratedAt:l,queryType:c})=>{let d=u?(0,A.b)(u):void 0,p=void 0===n.data?d?.data:n.data,m=void 0===p?p:o(p),f=i.get(s),y=f?.state.status==="pending",h=f?.state.fetchStatus==="fetching";if(f){let e=d&&void 0!==l&&l>f.state.dataUpdatedAt;if(n.dataUpdatedAt>f.state.dataUpdatedAt||e){let{fetchStatus:e,...t}=n;f.setState({...t,data:m,..."pending"===n.status&&void 0!==m&&{status:"success",...!h&&{fetchStatus:"idle"}}})}}else f=i.build(e,{...e.getDefaultOptions().hydrate?.queries,...r?.defaultOptions?.queries,queryKey:t,queryHash:s,meta:a,_type:c},{...n,data:m,fetchStatus:"idle",status:"pending"===n.status&&void 0!==m?"success":n.status});!u||d||y||h||void 0!==l&&!(l>f.state.dataUpdatedAt)||f.fetch(void 0,{initialPromise:Promise.resolve(u).then(o)}).catch(g.lQ)})}var T=({children:e,options:t={},state:r,queryClient:n})=>{let i=(0,k.jE)(n),o=u.useRef(t);u.useEffect(()=>{o.current=t});let s=u.useMemo(()=>{if(r){if("object"!=typeof r)return;let e=i.getQueryCache(),t=r.queries||[],n=[],s=[];for(let r of t){let t=e.get(r.queryHash);t?(r.state.dataUpdatedAt>t.state.dataUpdatedAt||r.promise&&"pending"!==t.state.status&&"fetching"!==t.state.fetchStatus&&void 0!==r.dehydratedAt&&r.dehydratedAt>t.state.dataUpdatedAt)&&s.push(r):n.push(r)}if(n.length>0&&O(i,{queries:n},o.current),s.length>0)return s}},[i,r]);return u.useEffect(()=>{s&&O(i,{queries:s},o.current)},[i,s]),e},P=r(92846),x=function(){return null},E=r(92797),F=r(18334),R=r(56011),L=r(68285),N=r(81632),_=r(82155);function D(e={}){let t=_.jf.document,r=t?.head||t?.body;if(!r){N.T&&R.Yz.error("[showReportDialog] Global document not defined");return}let n=(0,E.o5)(),i=(0,E.KU)(),o=i?.getDsn();if(!o){N.T&&R.Yz.error("[showReportDialog] DSN not configured");return}let s={...e,user:{...n.getUser(),...e.user},eventId:e.eventId||(0,F.Q)()},a=_.jf.document.createElement("script");a.async=!0,a.crossOrigin="anonymous",a.src=(0,L.kJ)(o,s);let{onLoad:u,onClose:l}=s;if(u&&(a.onload=u),l){let e=t=>{if("__sentry_reportdialog_closed__"===t.data)try{l()}finally{_.jf.removeEventListener("message",e)}};_.jf.addEventListener("message",e)}r.appendChild(a)}var j=r(50045);let K={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},M={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},U={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},V=Symbol.for("react.forward_ref"),Q=Symbol.for("react.memo"),B={};function G(e){if("object"==typeof e&&null!==e&&e.$$typeof===Q)return U;let t=e.$$typeof;return t&&B[t]||K}B[V]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},B[Q]=U;let z=Object.defineProperty.bind(Object),H=Object.getOwnPropertyNames.bind(Object),W=Object.getOwnPropertySymbols?.bind(Object),Y=Object.getOwnPropertyDescriptor.bind(Object),J=Object.getPrototypeOf.bind(Object),X=Object.prototype,Z={componentStack:null,error:null,eventId:null};class ee extends u.Component{constructor(e){super(e),this.state=Z,this._openFallbackReportDialog=!0;const t=(0,E.KU)();t&&e.showDialog&&(this._openFallbackReportDialog=!1,this._cleanupHook=t.on("afterSendEvent",t=>{!t.type&&this._lastEventId&&t.event_id===this._lastEventId&&D({...e.dialogOptions,eventId:this._lastEventId})}))}componentDidCatch(e,t){let{componentStack:r}=t,{beforeCapture:n,onError:i,showDialog:o,dialogOptions:s}=this.props;(0,E.v4)(a=>{n&&n(a,e,r);let l=function(e,{componentStack:t},r){let n;if(null!==(n=u.version.match(/^([^.]+)/))&&parseInt(n[0])>=17&&(0,j.bJ)(e)&&t){let r,n=Error(e.message);n.name=`React ErrorBoundary ${e.name}`,n.stack=t,r=new WeakSet,function e(t,n){if(!r.has(t)){if(t.cause)return r.add(t),e(t.cause,n);t.cause=n}}(e,n)}return(0,F.Cp)(e,r)}(e,t,{mechanism:{handled:null!=this.props.handled?this.props.handled:!!this.props.fallback,type:"auto.function.react.error_boundary"}});i&&i(e,r,l),o&&(this._lastEventId=l,this._openFallbackReportDialog&&D({...s,eventId:l})),this.setState({error:e,componentStack:r,eventId:l})})}componentDidMount(){let{onMount:e}=this.props;e&&e()}componentWillUnmount(){let{error:e,componentStack:t,eventId:r}=this.state,{onUnmount:n}=this.props;n&&(this.state===Z?n(null,null,null):n(e,t,r)),this._cleanupHook&&(this._cleanupHook(),this._cleanupHook=void 0)}resetErrorBoundary(){let{onReset:e}=this.props,{error:t,componentStack:r,eventId:n}=this.state;e&&e(t,r,n),this.setState(Z)}render(){let{fallback:e,children:t}=this.props,r=this.state;if(null===r.componentStack)return"function"==typeof t?t():t;let n="function"==typeof e?u.createElement(e,{error:r.error,componentStack:r.componentStack,resetError:()=>this.resetErrorBoundary(),eventId:r.eventId}):e;return u.isValidElement(n)?n:null}}var et=r(62867),er=r(4361),en=r.n(er);r(12267),r(90265),r(98701),r(46890),r(22369),r(83492),r(9604),r(18014),r(35545),r(66964);var ei=r(38189),eo=r(358);let es=e=>{let{children:t}=e,{data:r,isInitialLoading:n}=(0,ei.Xe)(),i=(0,l.useRouter)().query,o=i.user||"",s=(0,eo.H)(),c=(0,u.useRef)(!1),d=(0,u.useCallback)(async()=>{if(!c.current&&o){c.current=!0;try{var e;if((null==r||null==(e=r.userStatus)?void 0:e.isMockUser)&&!await s(""))return;await s(o)&&window.location.reload()}finally{c.current=!1}}},[s,i,o,r]);return(0,u.useEffect)(()=>{var e,t,i,s;if(n||!r)return;let a=null==r||null==(e=r.userStatus)?void 0:e.username,u=null==r||null==(t=r.userStatus)?void 0:t.userSlug,l=!!(null==r||null==(i=r.userStatus)?void 0:i.isAdmin),c=!!(null==r||null==(s=r.userStatus)?void 0:s.isMockUser);(l||c)&&o&&(o&&(o===a||o===u)||d())},[o,n,r]),(0,a.jsx)(a.Fragment,{children:t})};var ea=r(50366),eu=r(4080),el=r(19050),ec=r(23908),ed=r(44292),ep=r(22667);let em=function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};e&&t&&(0,ec.Bk)()&&((0,ed.X)(`${e}.${t}`,r,"millisecond"),n.createSpan&&(0,ep.Uk)({name:`${e}.${t}`,op:`${e}.${t}`}).end(!("u"<typeof performance)&&performance.timeOrigin&&performance.now?(performance.timeOrigin+performance.now())/1e3:Date.now()/1e3))},ef=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r="u">typeof performance&&void 0!==performance.now;e&&r&&em("ui",`${t?"hydrated":"rendered"}.${e}`,performance.now(),{createSpan:!0})},eg=()=>{let e=(0,u.useRef)(void 0),t=(0,u.useRef)(void 0),r=(0,u.useRef)({}),n=(0,u.useCallback)(e=>{r.current[e]=!0},[]),i=(0,u.useCallback)(()=>{var i;let o=function(i){let o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=i.getAttribute("data-track-load");r.current[s]||(ef(s,o),n(s),clearTimeout(t.current),t.current=setTimeout(()=>{var t;return null==(t=e.current)?void 0:t.disconnect()},1e4))};null==(i=e.current)||i.disconnect(),e.current=new MutationObserver(e=>{for(let t of e){if("childList"!==t.type)return;for(let e of t.addedNodes){if(!(e instanceof HTMLElement)||!e.matches("[data-track-load]"))return;o(e)}}}),e.current.observe(document.body,{childList:!0,subtree:!0}),document.querySelectorAll("[data-track-load]").forEach(e=>o(e,!0))},[n]);(0,u.useEffect)(()=>i(),[i])},ey="UA-159258186-1",eh=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return window.ga(...t)},ev=e=>{if(!(0,ea.Bd)())return new Promise((e,t)=>{t("Inside nextjs server")});if(!ey)return new Promise((e,t)=>{t("GA ID not set")});let t=null==e?void 0:e.userStatus;if(window.ga=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(window.ga.q=window.ga.q||[]).push(t)},eh("create",ey,"leetcode.com",{userId:null==t?void 0:t.userId,sampleRate:100}),(null==t?void 0:t.userId)!==void 0){var r;eh("set",{dimension1:JSON.stringify(!!(null==t?void 0:t.isPremium)),dimension2:(null==t||null==(r=t.userId)?void 0:r.toString())||""})}eh("require","displayfeatures"),eh("send","pageview"),c().events.on("routeChangeComplete",()=>{eh("send","pageview",window.location.pathname+window.location.search)});let n=document.createElement("script");n.type="text/javascript",n.async=!0;let i=new Promise((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)});n.src="https://www.google-analytics.com/analytics.js";let o=document.getElementsByTagName("script")[0];return o.parentNode&&o.parentNode.insertBefore(n,o),i},eb="G-CDRWKZTDEX";function eS(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];window.dataLayer.push(arguments)}function ew(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];window.dataLayer.unshift(arguments)}function eI(){(0,ea.Bd)()&&(window.dataLayer=window.dataLayer||[],window.gtag=window.gtag||eS)}let e$=e=>{if(!(0,ea.Bd)())return new Promise((e,t)=>{t("Inside nextjs server")});if(!eb)return new Promise((e,t)=>{t("GTAG ID not set")});let t=null==e?void 0:e.userStatus;(null==t?void 0:t.userId)!==void 0?(ew("config",eb,{user_id:null==t?void 0:t.userId}),ew("set","user_properties",{is_premium:JSON.stringify(!!(null==t?void 0:t.isPremium))})):ew("config",eb),ew("js",new Date);let r=document.createElement("script");r.type="text/javascript",r.async=!0;let n=new Promise((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)});r.src="https://www.googletagmanager.com/gtag/js?id="+eb;let i=document.getElementsByTagName("script")[0];return i.parentNode&&i.parentNode.insertBefore(r,i),n};var eC=r(60132);let ek="87b5a3c3f1a55520",eA=e=>{let t;if(!(0,ea.Bd)())return new Promise((e,t)=>{t("Inside nextjs server")});if(!ek)return new Promise((e,t)=>{t("GIO ID not set")});let r=window.gio.cache||[];window.gio=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(window.gio.q=window.gio.q||[]).push(t)};let n=window.gio;n("init",ek,{imp:!0});let i=document.createElement("script");i.type="text/javascript",i.async=!0;let o=new Promise((e,t)=>{i.addEventListener("load",e),i.addEventListener("error",t)});i.src="https://assets.giocdn.com/2.1/gio.js";let s=document.getElementsByTagName("script")[0];s.parentNode&&s.parentNode.insertBefore(i,s);let a=null==e?void 0:e.userStatus;(null==a?void 0:a.isAdmin)&&(window.__gio_print_log__=!0,window.__ga_print_log__=!0),(null==a?void 0:a.userSlug)&&n("setUserId",null==a?void 0:a.userSlug);let u={};return(null==a?void 0:a.username)&&Object.assign(u,{loginUserId:null==a?void 0:a.username,USERNAME:null==a?void 0:a.username}),(null==a?void 0:a.isPremium)!==void 0&&Object.assign(u,{PREMIUM:a.isPremium}),n("people.set",{...u,THEME:(t=localStorage.getItem(eC.wN))&&"dark"!==t?"light":"dark",SUPPORT_PWA:"ServiceWorker"in window?"yes":"no",SUPPORT_WASM:"WebAssembly"in window?"yes":"no"}),n("send"),n.q.push(...r),o};function eq(){var e;null!=(e=window.gio)&&e.__GIO_CACHE_QUEUE_DEFINED||(window.gio=window.gio||function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(window.gio.cache=window.gio.cache||[]).push(t)},window.gio.__GIO_CACHE_QUEUE_DEFINED=!0)}var eO=r(86811);let eT=e=>{var t;let{data:r}=(0,ei.Xe)();eg(),(null==r||null==(t=r.userStatus)?void 0:t.userId)&&eu.L4,eq(),eI();let n=(0,eO.m)(e=>e.trackInitialized),i=(0,eO.m)(e=>e.setTrackInitialized);return n||!r||eu.HL||!(0,ea.Bd)()||(eA(r).catch(e=>{console.warn("failed to install gio",{error:e})}),ev(r).catch(e=>{console.warn("failed to install ga",{error:e})}),e$(r).catch(e=>{console.warn("failed to install GTAG",{error:e})}),i()),e.children},eP=e=>{var t;eg();let r=(0,ea.sJ)(),n={userStatus:{userId:(0,el.we)(),userSlug:r,isSignedIn:!1,isPremium:!1,isMockUser:!1,username:r,name:r,avatar:"",isAdmin:!1,isSuperuser:!1,isTranslator:!1,isPhoneVerified:!1,useTranslation:!1,premiumExpiredAt:0,notificationStatus:void 0}};(null==n||null==(t=n.userStatus)?void 0:t.userId)&&eu.L4,eq(),eI();let i=(0,eO.m)(e=>e.trackInitialized),o=(0,eO.m)(e=>e.setTrackInitialized);return i||!n||eu.HL||!(0,ea.Bd)()||(eA(n).catch(e=>{console.warn("failed to install gio",{error:e})}),ev(n).catch(e=>{console.warn("failed to install ga",{error:e})}),e$(n).catch(e=>{console.warn("failed to install GTAG",{error:e})}),o()),e.children};var ex=r(71457),eE=r(18209);r(51436);let eF=(0,r(55691).vt)((e,t)=>({portals:{},setPortals:r=>{"function"==typeof r?e({portals:r(t().portals)}):e({portals:r})}})),eR=()=>{let e=eF(e=>e.portals);return(0,a.jsx)(a.Fragment,{children:Object.entries(e).map(e=>{let[t,r]=e;return(0,a.jsx)(u.Fragment,{children:r},t)})})};var eL=r(69298);let eN=(e,t,r,n)=>{(0,eL.uw)(e)||(0,E.v4)(r=>{var i,o,s;let a=null!=(i=null==n||null==(s=n.options)?void 0:s.mutationKey)?i:[],u=null!=(o=null==a?void 0:a[0])?o:"unknown";r.setContext("mutation",{mutationName:u,mutationKey:a,mutationVariables:null!=t?t:{}}),r.setTag("isGraphqlMutation",!0),r.setTag("isServer",!1),r.setFingerprint(["graphql","mutation",u]),(0,F.Cp)(e)})},e_=e=>Promise.all([r.e(15094),r.e(73553)]).then(r.bind(r,73553)).then(t=>t.defaultErrorHandler(e)).catch(()=>{}),eD=(e,t)=>{var r;null!=(r=t.meta)&&r.skipGlobalErrorHandler||((0,eL.uw)(e)||(0,E.v4)(r=>{var n,i;let o=null!=(n=null==t?void 0:t.queryKey)?n:[],s=null!=(i=null==o?void 0:o[0])?i:"unknown";r.setContext("query",{queryName:s,queryKey:o}),r.setTag("isGraphqlQuery",!0),r.setTag("isServer",!1),r.setFingerprint(["graphql","query",s]),(0,F.Cp)(e)}),e_(e))};var ej=r(17239),eK=r(98477),eM=r(33716),eU=r(10714),eV=r(88775),eQ=r(91844),eB=r(73520),eG=r(31893),ez=r(96822),eH=r(66326),eW=r(62146),eY=r(58162),eJ=r(81285),eX=r(82457),eZ="ToastProvider",[e0,e1,e2]=(0,eV.N)("Toast"),[e4,e3]=(0,eQ.A)("Toast",[e2]),[e8,e5]=e4(eZ),e6=e=>{let{__scopeToast:t,label:r="Notification",duration:n=5e3,swipeDirection:i="right",swipeThreshold:o=50,children:s}=e,[l,c]=u.useState(null),[d,p]=u.useState(0),m=u.useRef(!1),f=u.useRef(!1);return r.trim()||console.error(`Invalid prop \`label\` supplied to \`${eZ}\`. Expected non-empty \`string\`.`),(0,a.jsx)(e0.Provider,{scope:t,children:(0,a.jsx)(e8,{scope:t,label:r,duration:n,swipeDirection:i,swipeThreshold:o,toastCount:d,viewport:l,onViewportChange:c,onToastAdd:u.useCallback(()=>p(e=>e+1),[]),onToastRemove:u.useCallback(()=>p(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:m,isClosePausedRef:f,children:s})})};e6.displayName=eZ;var e7="ToastViewport",e9=["F8"],te="toast.viewportPause",tt="toast.viewportResume",tr=u.forwardRef((e,t)=>{let{__scopeToast:r,hotkey:n=e9,label:i="Notifications ({hotkey})",...o}=e,s=e5(e7,r),l=e1(r),c=u.useRef(null),d=u.useRef(null),p=u.useRef(null),m=u.useRef(null),f=(0,eU.s)(t,m,s.onViewportChange),g=n.join("+").replace(/Key/g,"").replace(/Digit/g,""),y=s.toastCount>0;u.useEffect(()=>{let e=e=>{0!==n.length&&n.every(t=>e[t]||e.code===t)&&m.current?.focus()};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[n]),u.useEffect(()=>{let e=c.current,t=m.current;if(y&&e&&t){let r=()=>{if(!s.isClosePausedRef.current){let e=new CustomEvent(te);t.dispatchEvent(e),s.isClosePausedRef.current=!0}},n=()=>{if(s.isClosePausedRef.current){let e=new CustomEvent(tt);t.dispatchEvent(e),s.isClosePausedRef.current=!1}},i=t=>{e.contains(t.relatedTarget)||n()},o=()=>{e.contains(document.activeElement)||n()};return e.addEventListener("focusin",r),e.addEventListener("focusout",i),e.addEventListener("pointermove",r),e.addEventListener("pointerleave",o),window.addEventListener("blur",r),window.addEventListener("focus",n),()=>{e.removeEventListener("focusin",r),e.removeEventListener("focusout",i),e.removeEventListener("pointermove",r),e.removeEventListener("pointerleave",o),window.removeEventListener("blur",r),window.removeEventListener("focus",n)}}},[y,s.isClosePausedRef]);let h=u.useCallback(({tabbingDirection:e})=>{let t=l().map(t=>{let r=t.ref.current,n=[r,...function(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}(r)];return"forwards"===e?n:n.reverse()});return("forwards"===e?t.reverse():t).flat()},[l]);return u.useEffect(()=>{let e=m.current;if(e){let t=t=>{let r=t.altKey||t.ctrlKey||t.metaKey;if("Tab"===t.key&&!r){let r=document.activeElement,n=t.shiftKey;if(t.target===e&&n)return void d.current?.focus();let i=h({tabbingDirection:n?"backwards":"forwards"}),o=i.findIndex(e=>e===r);tS(i.slice(o+1))?t.preventDefault():n?d.current?.focus():p.current?.focus()}};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[l,h]),(0,a.jsxs)(eB.lg,{ref:c,role:"region","aria-label":i.replace("{hotkey}",g),tabIndex:-1,style:{pointerEvents:y?void 0:"none"},children:[y&&(0,a.jsx)(ti,{ref:d,onFocusFromOutsideViewport:()=>{tS(h({tabbingDirection:"forwards"}))}}),(0,a.jsx)(e0.Slot,{scope:r,children:(0,a.jsx)(eH.sG.ol,{tabIndex:-1,...o,ref:f})}),y&&(0,a.jsx)(ti,{ref:p,onFocusFromOutsideViewport:()=>{tS(h({tabbingDirection:"backwards"}))}})]})});tr.displayName=e7;var tn="ToastFocusProxy",ti=u.forwardRef((e,t)=>{let{__scopeToast:r,onFocusFromOutsideViewport:n,...i}=e,o=e5(tn,r);return(0,a.jsx)(eX.s,{"aria-hidden":!0,tabIndex:0,...i,ref:t,style:{position:"fixed"},onFocus:e=>{let t=e.relatedTarget;o.viewport?.contains(t)||n()}})});ti.displayName=tn;var to="Toast",ts=u.forwardRef((e,t)=>{let{forceMount:r,open:n,defaultOpen:i,onOpenChange:o,...s}=e,[u=!0,l]=(0,eY.i)({prop:n,defaultProp:i,onChange:o});return(0,a.jsx)(ez.C,{present:r||u,children:(0,a.jsx)(tl,{open:u,...s,ref:t,onClose:()=>l(!1),onPause:(0,eW.c)(e.onPause),onResume:(0,eW.c)(e.onResume),onSwipeStart:(0,eM.m)(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:(0,eM.m)(e.onSwipeMove,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${r}px`)}),onSwipeCancel:(0,eM.m)(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:(0,eM.m)(e.onSwipeEnd,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${r}px`),l(!1)})})})});ts.displayName=to;var[ta,tu]=e4(to,{onClose(){}}),tl=u.forwardRef((e,t)=>{let{__scopeToast:r,type:n="foreground",duration:i,open:o,onClose:s,onEscapeKeyDown:l,onPause:c,onResume:d,onSwipeStart:p,onSwipeMove:m,onSwipeCancel:f,onSwipeEnd:g,...y}=e,h=e5(to,r),[v,b]=u.useState(null),S=(0,eU.s)(t,e=>b(e)),w=u.useRef(null),I=u.useRef(null),$=i||h.duration,C=u.useRef(0),k=u.useRef($),A=u.useRef(0),{onToastAdd:q,onToastRemove:O}=h,T=(0,eW.c)(()=>{v?.contains(document.activeElement)&&h.viewport?.focus(),s()}),P=u.useCallback(e=>{e&&e!==1/0&&(window.clearTimeout(A.current),C.current=new Date().getTime(),A.current=window.setTimeout(T,e))},[T]);u.useEffect(()=>{let e=h.viewport;if(e){let t=()=>{P(k.current),d?.()},r=()=>{let e=new Date().getTime()-C.current;k.current=k.current-e,window.clearTimeout(A.current),c?.()};return e.addEventListener(te,r),e.addEventListener(tt,t),()=>{e.removeEventListener(te,r),e.removeEventListener(tt,t)}}},[h.viewport,$,c,d,P]),u.useEffect(()=>{o&&!h.isClosePausedRef.current&&P($)},[o,$,h.isClosePausedRef,P]),u.useEffect(()=>(q(),()=>O()),[q,O]);let x=u.useMemo(()=>v?function e(t){let r=[];return Array.from(t.childNodes).forEach(t=>{var n;if(t.nodeType===t.TEXT_NODE&&t.textContent&&r.push(t.textContent),(n=t).nodeType===n.ELEMENT_NODE){let n=t.ariaHidden||t.hidden||"none"===t.style.display,i=""===t.dataset.radixToastAnnounceExclude;if(!n)if(i){let e=t.dataset.radixToastAnnounceAlt;e&&r.push(e)}else r.push(...e(t))}}),r}(v):null,[v]);return h.viewport?(0,a.jsxs)(a.Fragment,{children:[x&&(0,a.jsx)(tc,{__scopeToast:r,role:"status","aria-live":"foreground"===n?"assertive":"polite","aria-atomic":!0,children:x}),(0,a.jsx)(ta,{scope:r,onClose:T,children:eK.createPortal((0,a.jsx)(e0.ItemSlot,{scope:r,children:(0,a.jsx)(eB.bL,{asChild:!0,onEscapeKeyDown:(0,eM.m)(l,()=>{h.isFocusedToastEscapeKeyDownRef.current||T(),h.isFocusedToastEscapeKeyDownRef.current=!1}),children:(0,a.jsx)(eH.sG.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":o?"open":"closed","data-swipe-direction":h.swipeDirection,...y,ref:S,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:(0,eM.m)(e.onKeyDown,e=>{"Escape"===e.key&&(l?.(e.nativeEvent),e.nativeEvent.defaultPrevented||(h.isFocusedToastEscapeKeyDownRef.current=!0,T()))}),onPointerDown:(0,eM.m)(e.onPointerDown,e=>{0===e.button&&(w.current={x:e.clientX,y:e.clientY})}),onPointerMove:(0,eM.m)(e.onPointerMove,e=>{if(!w.current)return;let t=e.clientX-w.current.x,r=e.clientY-w.current.y,n=!!I.current,i=["left","right"].includes(h.swipeDirection),o=["left","up"].includes(h.swipeDirection)?Math.min:Math.max,s=i?o(0,t):0,a=i?0:o(0,r),u="touch"===e.pointerType?10:2,l={x:s,y:a},c={originalEvent:e,delta:l};n?(I.current=l,tv("toast.swipeMove",m,c,{discrete:!1})):tb(l,h.swipeDirection,u)?(I.current=l,tv("toast.swipeStart",p,c,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>u||Math.abs(r)>u)&&(w.current=null)}),onPointerUp:(0,eM.m)(e.onPointerUp,e=>{let t=I.current,r=e.target;if(r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),I.current=null,w.current=null,t){let r=e.currentTarget,n={originalEvent:e,delta:t};tb(t,h.swipeDirection,h.swipeThreshold)?tv("toast.swipeEnd",g,n,{discrete:!0}):tv("toast.swipeCancel",f,n,{discrete:!0}),r.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})})}),h.viewport)})]}):null}),tc=e=>{let{__scopeToast:t,children:r,...n}=e,i=e5(to,t),[o,s]=u.useState(!1),[l,c]=u.useState(!1);return function(e=()=>{}){let t=(0,eW.c)(e);(0,eJ.N)(()=>{let e=0,r=0;return e=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(r)}},[t])}(()=>s(!0)),u.useEffect(()=>{let e=window.setTimeout(()=>c(!0),1e3);return()=>window.clearTimeout(e)},[]),l?null:(0,a.jsx)(eG.Z,{asChild:!0,children:(0,a.jsx)(eX.s,{...n,children:o&&(0,a.jsxs)(a.Fragment,{children:[i.label," ",r]})})})},td=u.forwardRef((e,t)=>{let{__scopeToast:r,...n}=e;return(0,a.jsx)(eH.sG.div,{...n,ref:t})});td.displayName="ToastTitle";var tp=u.forwardRef((e,t)=>{let{__scopeToast:r,...n}=e;return(0,a.jsx)(eH.sG.div,{...n,ref:t})});tp.displayName="ToastDescription";var tm="ToastAction",tf=u.forwardRef((e,t)=>{let{altText:r,...n}=e;return r.trim()?(0,a.jsx)(th,{altText:r,asChild:!0,children:(0,a.jsx)(ty,{...n,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${tm}\`. Expected non-empty \`string\`.`),null)});tf.displayName=tm;var tg="ToastClose",ty=u.forwardRef((e,t)=>{let{__scopeToast:r,...n}=e,i=tu(tg,r);return(0,a.jsx)(th,{asChild:!0,children:(0,a.jsx)(eH.sG.button,{type:"button",...n,ref:t,onClick:(0,eM.m)(e.onClick,i.onClose)})})});ty.displayName=tg;var th=u.forwardRef((e,t)=>{let{__scopeToast:r,altText:n,...i}=e;return(0,a.jsx)(eH.sG.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":n||void 0,...i,ref:t})});function tv(e,t,r,{discrete:n}){let i=r.originalEvent.currentTarget,o=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:r});t&&i.addEventListener(e,t,{once:!0}),n?(0,eH.hO)(i,o):i.dispatchEvent(o)}var tb=(e,t,r=0)=>{let n=Math.abs(e.x),i=Math.abs(e.y),o=n>i;return"left"===t||"right"===t?o&&n>r:!o&&i>r};function tS(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}var tw=r(94650),tI=r(51958),t$=r(46935),tC=r(24538),tk=r(22257),tA=r(22701);let tq=e=>{let{ref:t,className:r,...n}=e;return(0,a.jsx)(tr,{ref:t,className:(0,tk.x)("pointer-events-none fixed flex max-h-screen w-full flex-col-reverse items-center gap-4 p-4 z-message left-0 top-0",r),...n})};tq.displayName=tr.displayName;let tO=(0,tw.F)("group sd-sm:max-w-[600px] max-w-full pointer-events-auto relative flex items-center justify-between gap-2 border bg-sd-popover text-sd-foreground overflow-hidden rounded-sd-md border border-sd-border py-1.5 px-4 shadow-md transition data-[swipe=cancel]:translate-y-0 data-[swipe=end]:translate-y-[var(--radix-toast-swipe-end-y)] data-[swipe=move]:translate-y-[var(--radix-toast-swipe-move-y)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-top-24 data-[state=open]:slide-in-from-top-24",{variants:{variant:{info:"",success:"",warning:"",error:""}},defaultVariants:{variant:"info"}}),tT=e=>{let{ref:t,className:r,variant:n,...i}=e;return(0,a.jsx)(ts,{ref:t,className:(0,tk.x)(tO({variant:n}),r),...i})};tT.displayName=ts.displayName,tf.displayName;let tP=e=>{let{ref:t,className:r,...n}=e;return(0,a.jsx)(td,{ref:t,className:(0,tk.x)("text-sm font-semibold [&+div]:text-xs",r),...n})};tP.displayName=td.displayName;let tx=e=>{let{ref:t,className:r,...n}=e;return(0,a.jsx)(tp,{ref:t,className:(0,tk.x)("text-sm opacity-90",r),...n})};tx.displayName=tp.displayName;let tE={info:{icon:tC.faCircleInfo,className:"text-sd-info"},success:{icon:tI.QR,className:"text-sd-success"},warning:{icon:t$.lE,className:"text-sd-warning"},error:{icon:t$.lE,className:"text-sd-danger"}},tF=e=>{let{variant:t="info",className:r}=e;return(0,a.jsx)(tA.g,{icon:tE[null!=t?t:"info"].icon,className:(0,tk.x)("h-4 w-4",tE[null!=t?t:"info"].className,r)})};var tR=r(64784);function tL(){let{toasts:e}=(0,tR.dj)();return(0,a.jsxs)(e6,{swipeDirection:"up",swipeThreshold:20,children:[e.map(function(e){let{id:t,title:r,description:n,action:i,variant:o,...s}=e;return(0,a.jsxs)(tT,{...s,children:[(0,a.jsx)(tF,{variant:o,className:"mt-0.5 self-start"}),(0,a.jsxs)("div",{className:"grid gap-1",children:[r&&(0,a.jsx)(tP,{children:r}),n&&(0,a.jsx)(tx,{children:n})]}),i]},t)}),(0,a.jsx)(tq,{})]})}let tN=e=>(0,a.jsx)(u.Fragment,{children:e.children});var t_=r(517);let tD=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,tj=e=>{if("string"!=typeof e)throw TypeError("Invalid argument expected string");let t=e.match(tD);if(!t)throw Error(`Invalid argument not valid semver ('${e}' received)`);return t.shift(),t},tK=e=>"*"===e||"x"===e||"X"===e,tM=e=>{let t=parseInt(e,10);return isNaN(t)?e:t},tU=(e,t)=>{let r,n;if(tK(e)||tK(t))return 0;let[i,o]=typeof(r=tM(e))!=typeof(n=tM(t))?[String(r),String(n)]:[r,n];return i>o?1:i<o?-1:0},tV=(e,t)=>{for(let r=0;r<Math.max(e.length,t.length);r++){let n=tU(e[r]||"0",t[r]||"0");if(0!==n)return n}return 0},tQ={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1],"!=":[-1,1]},tB=Object.keys(tQ);var tG=r(50143),tz=r(83966);let tH=e=>{var t,r;let n,i,o,s,l,c,d,p,{ua:m}=e,f=window.navigator.userAgent,{t:g}=(0,P.Bd)("common"),y=null!==((n=f)||(n="u">typeof navigator?navigator.userAgent:""),t=(i=n.match(/Chrome\/(\d+)/))?i[1]:null)&&void 0!==t?t:"110.0",[h,v]=(0,u.useState)(!1);if(h||!f||-1===f.toUpperCase().indexOf("CHROME")||(r=null!=y?y:"88.0",(e=>{if("string"!=typeof e)throw TypeError(`Invalid operator type, expected string but got ${typeof e}`);if(-1===tB.indexOf(e))throw Error(`Invalid operator, expected one of ${tB.join("|")}`)})(">="),o=tj(r),s=tj("87.0"),l=o.pop(),c=s.pop(),p=0!==(d=tV(o,s))?d:l&&c?tV(l.split("."),c.split(".")):l||c?l?-1:1:0,tQ[">="].includes(p)))return null;let b=g(/leetcode/i.test(f)?"lcAppWebviewNotSupport":"chromeNotSupport");return(0,a.jsxs)("div",{className:(0,tk.x)("fixed flex w-full items-start justify-between gap-4 bg-lc-yellow-50 px-3 py-2 text-center z-modal md:relative md:z-base-1"),children:[b,(0,a.jsx)(tG.$,{variant:"ghost",onlyIcon:!0,onClick:()=>v(!0),children:(0,a.jsx)(tz.d,{icon:t_.yY})})]})};var tW=r(31325),tY=r(94208),tJ=r.n(tY),tX=r(71129);let tZ=()=>{let{confetti:e}=(0,tX.Z)();return(0,a.jsxs)("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",overflow:"hidden",zIndex:9999},className:"jsx-94b7df77d61262ce",children:[e.map(e=>(0,a.jsx)("div",{style:{position:"absolute",top:"-50px",opacity:1,backgroundColor:e.color,left:`${e.left}%`,width:`${e.width}px`,height:`${e.height}px`,animation:`confetti-fall ${e.duration}s ease-in forwards`,animationDelay:`${e.delay}s`,"--drift":`${e.drift}px`,"--rotation":`${e.rotation}deg`},className:"jsx-94b7df77d61262ce"},e.id)),(0,a.jsx)(tJ(),{id:"94b7df77d61262ce",children:"@keyframes confetti-fall{0%{transform:translatey(0)translatex(0)rotate(0deg);opacity:1}100%{transform:translatey(120vh)translatex(var(--drift))rotate(var(--rotation));opacity:0}}"})]})};var t0=r(14e3),t1=r(76412);function t2(){return(()=>{var e,t;let r,n,i=(0,t0.usePathname)(),{isFrozen:o,isStableData:s}=(r=null==(t=(0,ei.Xe)().data)||null==(e=t.userStatus)?void 0:e.isSignedIn,{isFrozen:(n=(0,t1.lm)({enabled:!!r})).data,isStableData:void 0!==n.data&&!n.isFetching}),a=!i.startsWith("/delete-account")&&o&&s;u.useEffect(()=>{a&&(window.location.href="/delete-account")},[a])})(),null}var t4=r(29454);let t3=eC.wN,t8=()=>{let{theme:e}=(0,d.D)();return(0,u.useEffect)(()=>{e&&t4.A.set(t3,e,{expires:365,path:"/"})},[e]),null};var t5=r(91125),t6=r(44544);let t7={defaultTitle:"LeetCode - The World's Leading Online Programming Learning Platform",description:"Level up your coding skills and quickly land a job. This is the best place to expand your knowledge and get prepared for your next interview.",openGraph:{locale:"en_US",site_name:"LeetCode",images:[{url:"https://leetcode.com/static/images/LeetCode_Sharing.png"}]},twitter:{site:"@LeetCode",cardType:"summary_large_image"}};r(73556);let t9=m()(()=>r.e(85127).then(r.bind(r,85127)).then(e=>e.StorageKeysNoop),{loadableGenerated:{webpack:()=>[85127]},ssr:!1}),re=t5.l;if(window.matchMedia&&!window.matchMedia("all").addEventListener){let e=window.matchMedia;window.matchMedia=function(t){let r=e(t);return r.addEventListener=function(e,t){"function"==typeof t?this.addListener(t):this.addListener(t.handleEvent)},r.removeEventListener=function(e,t){"function"==typeof t?this.removeListener(t):this.removeListener(t.handleEvent)},r}}function rt(e){var t;let{Component:r,pageProps:n,userAgent:i}=e,o=(0,l.useRouter)(),s=(0,u.useRef)(void 0),c=(0,u.useRef)(void 0);if(eE.y.locale(eu.ne),f.t.setOnline(!0),!s.current&&ex.HR&&(s.current=new C({queryCache:new b({onError:eD}),mutationCache:new w({onError:eN}),defaultOptions:{queries:{staleTime:6e4,refetchOnWindowFocus:!1,placeholderData:g.rX,retry:3},mutations:{onError:e_}}})),!c.current&&!ex.HR){let e=n.isRobotVisit?{staleTime:0,gcTime:0}:{staleTime:6e4};c.current=new C({queryCache:new b({onError:eD}),mutationCache:new w({onError:eN}),defaultOptions:{queries:{...e,refetchOnWindowFocus:!1,placeholderData:g.rX,retry:3},mutations:{onError:e_}}})}(0,u.useEffect)(()=>{Object.keys(localStorage).forEach(e=>{(e.startsWith("discuss:categoryId:")||e.startsWith("notification-status:")||e.includes("google_ama")||e.includes("_ads")||e.startsWith("GLOBAL_DATA:")||e.startsWith("QUESTION_DETAIL:")||e.startsWith("QUESTION_PICKER:")||e.startsWith("_at.")||e.startsWith("at-lojson-cache")||e.startsWith("QUESTION_PICKER:")||["streakPrevText","problemset_page_visit_times","GDPR_REMOVAL_FLAG","problems_satisfaction_survey","gbFeaturesCache","NRBA_SESSION","QD_SHOWED_FOCUS_MODE_FEATURE","blockedCouponsRequestPending","isBgaaComplete","used-dynamic-layout","CONSOLE_SPLIT_LINE_HORIZONTAL","CONSOLE_SPLIT_LINE_VERTICAL","feedbackBannerHiddenUntil","QD_SOLUTION_SIDE_POPOVER_WAS_SHOWN","QL_SHOWN_JS_CATEGORY_FEATURE_POPOVER"].includes(e))&&localStorage.removeItem(e)});let e=e=>{if(!e||!e.reason)return;let t=e.reason;if("QuotaExceededError"===t.name){e.preventDefault(),E.v4(e=>{e.setExtras({storageKeysLen:JSON.stringify(Object.keys(localStorage).map(e=>{var t;return{key:e,length:null==(t=localStorage.getItem(e))?void 0:t.length}})),storageKeys:JSON.stringify(Object.keys(localStorage))}),F.Cp(JSON.stringify({error:"localstorage QuotaExceededError"}))});return}t instanceof Error&&F.Cp(t)};return window.addEventListener("unhandledrejection",e),()=>{window.removeEventListener("unhandledrejection",e)}},[]),(0,u.useEffect)(()=>{if((0,ex.Fr)()){let e;(e=document.querySelector('meta[name="viewport"]'))||((e=document.createElement("meta")).name="viewport",document.head.appendChild(e)),e.content="width=device-width, initial-scale=1.0",document.documentElement.style.touchAction="manipulation",document.body.style.touchAction="manipulation"}},[]),(0,u.useEffect)(()=>{if(n.isRobotVisit)return;let e=(e,t)=>{"object"==typeof e&&null!==e&&"cancelled"in e&&!0===e.cancelled&&(0,t6.GS)(t)};return o.events.on("routeChangeStart",t6.I7),o.events.on("routeChangeError",e),()=>{o.events.off("routeChangeStart",t6.I7),o.events.off("routeChangeError",e)}},[n.isRobotVisit,o.events]);let p=null!=(t=r.getLayout)?t:e=>e,m="/in-app"===o.pathname||o.pathname.startsWith("/in-app/"),{isDark:y}=o.query;if(m){if(!o.isReady)return null;let e="__NO_THEME__";return(0,a.jsxs)(tW.t,{children:[(0,a.jsx)(t9,{keys:[e]}),(0,a.jsx)(d.N,{enableSystem:!1,defaultTheme:"true"===y?"dark":"light",attribute:"class",storageKey:e,children:(0,a.jsxs)(k.Ht,{client:ex.HR?s.current:c.current,children:[(0,a.jsxs)(eP,{children:[(0,a.jsx)(eR,{}),p((0,a.jsx)(r,{...n}))]}),(0,a.jsx)(tL,{})]})})]})}return(0,a.jsx)(tW.t,{children:(0,a.jsxs)(d.N,{defaultTheme:(0,ea.oL)(n.theme)?n.theme:"system",forcedTheme:r.theme||void 0,attribute:"class",storageKey:eC.wN,disableTransitionOnChange:!0,children:[(0,a.jsx)(t8,{}),(0,a.jsx)(k.Ht,{client:ex.HR?s.current:c.current,children:(0,a.jsx)(T,{state:n.dehydratedState,children:(0,a.jsx)(tN,{children:(0,a.jsx)(eT,{children:(0,a.jsxs)(ej.jl,{children:[(0,a.jsx)(t2,{}),(0,a.jsx)(re,{}),(0,a.jsx)(tH,{ua:i}),(0,a.jsx)(eR,{}),(0,a.jsx)(es,{}),(0,a.jsx)(et.FR,{...t7}),p((0,a.jsx)(r,{...n})),(0,a.jsx)(x,{initialIsOpen:!1}),(0,a.jsx)(tL,{}),(0,a.jsx)(tZ,{})]})})})})})]})})}Object.fromEntries||(Object.fromEntries=function(e){return[...e].reduce((e,t)=>{let[r,n]=t;return e[r]=n,e},{})}),rt.getInitialProps=async e=>{var t;let r=await en().getInitialProps(e),n=e.ctx.req?null!=(t=e.ctx.req.headers["user-agent"])?t:"":navigator.userAgent;return{...r,userAgent:n}};let rr=(s={showDialog:!0},n=(o=(0,P.Zh)(rt)).displayName||o.name||"unknown",(i=u.memo(e=>u.createElement(ee,{...s},u.createElement(o,{...e})))).displayName=`errorBoundary(${n})`,!function e(t,r,n){if("string"!=typeof r){if(X){let n=J(r);n&&n!==X&&e(t,n)}let n=H(r);W&&(n=n.concat(W(r)));let i=G(t),o=G(r);for(let e of n)if(!M[e]&&!o?.[e]&&!i?.[e]&&!Y(t,e)){let n=Y(r,e);if(n)try{z(t,e,n)}catch(e){}}}return t}(i,o),i)},4080:(e,t,r)=>{"use strict";r.d(t,{A6:()=>l,Gp:()=>u,HL:()=>s,L4:()=>o,V_:()=>g,WG:()=>f,Zi:()=>h,_F:()=>p,db:()=>a,ne:()=>c,nu:()=>m,sk:()=>y,uJ:()=>d});var n,i=r(99742);let o=!0,s=!1,a=!0,u=!1,l="UTC",c=null!=(n=(()=>{let{LOCALE:e}=i.env;switch(e){case"en":case"en-US":case"en-us":case"zh":case"zh-CN":case"zh-cn":return e;default:return null}})())?n:o?"en":"zh-cn",d=("true"===i.env.USE_BUILD_HOST?"":"https://leetcode.com")||"",p="https://leetcode.com",m=!1,f=i.env.IS_PROD?"https://leetcode.com/static/third_party/console-feed.min.js":"https://staging-assets.leetcode.com/static_assets/public/third_party/console-feed.min.js",g="gws.leetcode.com",y="wss://collaboration-ws.leetcode.com",h="https://sse.leetcode.com"},4230:(e,t)=>{"use strict";t.mw={prefix:"far",iconName:"code",icon:[640,512,[],"f121","M399.1 1.1c-12.7-3.9-26.1 3.1-30 15.8l-144 464c-3.9 12.7 3.1 26.1 15.8 30s26.1-3.1 30-15.8l144-464c3.9-12.7-3.1-26.1-15.8-30zm71.4 118.5c-9.1 9.7-8.6 24.9 1.1 33.9L580.9 256 471.6 358.5c-9.7 9.1-10.2 24.3-1.1 33.9s24.3 10.2 33.9 1.1l128-120c4.8-4.5 7.6-10.9 7.6-17.5s-2.7-13-7.6-17.5l-128-120c-9.7-9.1-24.9-8.6-33.9 1.1zm-301 0c-9.1-9.7-24.3-10.2-33.9-1.1l-128 120C2.7 243 0 249.4 0 256s2.7 13 7.6 17.5l128 120c9.7 9.1 24.9 8.6 33.9-1.1s8.6-24.9-1.1-33.9L59.1 256 168.4 153.5c9.7-9.1 10.2-24.3 1.1-33.9z"]},t.jT=t.mw},4299:(e,t,r)=>{var n=r(34004),i=r(90304),o=r(87352),s=r(75190),a=RegExp.prototype;e.exports=function(e){var t=e.flags;return!(void 0===t&&!("flags"in a)&&!i(e,"flags")&&o(a,e))?t:n(s,e)}},4319:(e,t,r)=>{"use strict";r.d(t,{Zr:()=>s,eh:()=>n,kg:()=>i});let n=e=>(t,r,n)=>{let i=n.subscribe;return n.subscribe=(e,t,r)=>{let o=e;if(t){let i=(null==r?void 0:r.equalityFn)||Object.is,s=e(n.getState());o=r=>{let n=e(r);if(!i(s,n)){let e=s;t(s=n,e)}},(null==r?void 0:r.fireImmediately)&&t(s,s)}return i(o)},e(t,r,n)},i=(e,t)=>(...r)=>Object.assign({},e,t(...r)),o=e=>t=>{try{let r=e(t);if(r instanceof Promise)return r;return{then:e=>o(e)(r),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>o(t)(e)}}},s=(e,t)=>{if("getStorage"in t||"serialize"in t||"deserialize"in t)return console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),(r,n,i)=>{let s,a,u={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},l=!1,c=new Set,d=new Set;try{s=u.getStorage()}catch(e){}if(!s)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${u.name}', the given storage is currently unavailable.`),r(...e)},n,i);let p=o(u.serialize),m=()=>{let e,t=p({state:u.partialize({...n()}),version:u.version}).then(e=>s.setItem(u.name,e)).catch(t=>{e=t});if(e)throw e;return t},f=i.setState;i.setState=(e,t)=>{f(e,t),m()};let g=e((...e)=>{r(...e),m()},n,i),y=()=>{var e;if(!s)return;l=!1,c.forEach(e=>e(n()));let t=(null==(e=u.onRehydrateStorage)?void 0:e.call(u,n()))||void 0;return o(s.getItem.bind(s))(u.name).then(e=>{if(e)return u.deserialize(e)}).then(e=>{if(e)if("number"!=typeof e.version||e.version===u.version)return e.state;else{if(u.migrate)return u.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return r(a=u.merge(e,null!=(t=n())?t:g),!0),m()}).then(()=>{null==t||t(a,void 0),l=!0,d.forEach(e=>e(a))}).catch(e=>{null==t||t(void 0,e)})};return i.persist={setOptions:e=>{u={...u,...e},e.getStorage&&(s=e.getStorage())},clearStorage:()=>{null==s||s.removeItem(u.name)},getOptions:()=>u,rehydrate:()=>y(),hasHydrated:()=>l,onHydrate:e=>(c.add(e),()=>{c.delete(e)}),onFinishHydration:e=>(d.add(e),()=>{d.delete(e)})},y(),a||g};return(r,n,i)=>{let s,a={storage:function(e){let t;try{t=e()}catch(e){return}return{getItem:e=>{var r;let n=e=>null===e?null:JSON.parse(e),i=null!=(r=t.getItem(e))?r:null;return i instanceof Promise?i.then(n):n(i)},setItem:(e,r)=>t.setItem(e,JSON.stringify(r)),removeItem:e=>t.removeItem(e)}}(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},u=!1,l=new Set,c=new Set,d=a.storage;if(!d)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),r(...e)},n,i);let p=()=>{let e=a.partialize({...n()});return d.setItem(a.name,{state:e,version:a.version})},m=i.setState;i.setState=(e,t)=>{m(e,t),p()};let f=e((...e)=>{r(...e),p()},n,i),g=()=>{var e;if(!d)return;u=!1,l.forEach(e=>e(n()));let t=(null==(e=a.onRehydrateStorage)?void 0:e.call(a,n()))||void 0;return o(d.getItem.bind(d))(a.name).then(e=>{if(e)if("number"!=typeof e.version||e.version===a.version)return e.state;else{if(a.migrate)return a.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return r(s=a.merge(e,null!=(t=n())?t:f),!0),p()}).then(()=>{null==t||t(s,void 0),u=!0,c.forEach(e=>e(s))}).catch(e=>{null==t||t(void 0,e)})};return i.persist={setOptions:e=>{a={...a,...e},e.storage&&(d=e.storage)},clearStorage:()=>{null==d||d.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>g(),hasHydrated:()=>u,onHydrate:e=>(l.add(e),()=>{l.delete(e)}),onFinishHydration:e=>(c.add(e),()=>{c.delete(e)})},g(),s||f}}},4335:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var n=r(4527),i=r(98158),o=r(58185),s=r(87926);let a=function(e,t){return(0,n.A)(e)?e:(0,i.A)(e,t)?[e]:(0,o.A)((0,s.A)(e))}},4361:(e,t,r)=>{e.exports=r(48763)},4527:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=Array.isArray},5579:(e,t)=>{"use strict";t.mw={prefix:"far",iconName:"terminal",icon:[576,512,[],"f120","M6.3 72.2c-9-9.8-8.3-24.9 1.4-33.9s24.9-8.3 33.9 1.4l184 200c8.5 9.2 8.5 23.3 0 32.5l-184 200c-9 9.8-24.2 10.4-33.9 1.4s-10.4-24.2-1.4-33.9L175.4 256 6.3 72.2zM248 432H552c13.3 0 24 10.7 24 24s-10.7 24-24 24H248c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]},t.MN=t.mw},5915:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(58714),i=r(54743);let o=(0,n.A)(i.A,"Map")},6282:(e,t,r)=>{var n=r(51141),i=r(1958),o=r(91538),s=r(38607),a=n("".charAt),u=n("".charCodeAt),l=n("".slice),c=function(e){return function(t,r){var n,c,d=o(s(t)),p=i(r),m=d.length;return p<0||p>=m?e?"":void 0:(n=u(d,p))<55296||n>56319||p+1===m||(c=u(d,p+1))<56320||c>57343?e?a(d,p):n:e?l(d,p,p+2):(n-55296<<10)+(c-56320)+65536}};e.exports={codeAt:c(!1),charAt:c(!0)}},6764:(e,t,r)=>{"use strict";function n(){throw Object.defineProperty(Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."),"__NEXT_ERROR_CODE",{value:"E488",enumerable:!1,configurable:!0})}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"forbidden",{enumerable:!0,get:function(){return n}}),r(46780).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7152:(e,t)=>{"use strict";t.mw={prefix:"far",iconName:"square-terminal",icon:[448,512,[],"e32a","M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm38.3 119.8c-9 9.8-8.3 25 1.5 33.9L180.5 256l-76.7 70.3c-9.8 9-10.4 24.1-1.5 33.9s24.1 10.4 33.9 1.5l96-88c5-4.5 7.8-11 7.8-17.7s-2.8-13.1-7.8-17.7l-96-88c-9.8-9-25-8.3-33.9 1.5zM216 336c-13.3 0-24 10.7-24 24s10.7 24 24 24H328c13.3 0 24-10.7 24-24s-10.7-24-24-24H216z"]},t.r=t.mw},8505:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(86286),i=r(81365),o=r(84147);let s=function(e){return"function"!=typeof e.constructor||(0,o.A)(e)?{}:(0,n.A)((0,i.A)(e))}},8962:function(e){e.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var o=r(e),s=r(t),a="("===(i=i||"()")[0],u=")"===i[1];return(a?this.isAfter(o,n):!this.isBefore(o,n))&&(u?this.isBefore(s,n):!this.isAfter(s,n))||(a?this.isBefore(o,n):!this.isAfter(o,n))&&(u?this.isAfter(s,n):!this.isBefore(s,n))}}},9604:()=>{},9676:e=>{e.exports=function(e){return null==e}},9694:(e,t,r)=>{"use strict";r.d(t,{A:()=>f});var n,i=r(43754),o=r(42807),s=(n=/[^.]+$/.exec(o.A&&o.A.keys&&o.A.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"",a=r(83497),u=r(29907),l=/^\[object .+?Constructor\]$/,c=Object.prototype,d=Function.prototype.toString,p=c.hasOwnProperty,m=RegExp("^"+d.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");let f=function(e){return!!(0,a.A)(e)&&(!s||!(s in e))&&((0,i.A)(e)?m:l).test((0,u.A)(e))}},10302:(e,t,r)=>{"use strict";r.d(t,{A:()=>c});var n=r(76611),i=r(56634),o=r(4527),s=r(86702),a=1/0,u=n.A?n.A.prototype:void 0,l=u?u.toString:void 0;let c=function e(t){if("string"==typeof t)return t;if((0,o.A)(t))return(0,i.A)(t,e)+"";if((0,s.A)(t))return l?l.call(t):"";var r=t+"";return"0"==r&&1/t==-a?"-0":r}},10714:(e,t,r)=>{"use strict";r.d(t,{s:()=>s,t:()=>o});var n=r(14232);function i(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function o(...e){return t=>{let r=!1,n=e.map(e=>{let n=i(e,t);return r||"function"!=typeof n||(r=!0),n});if(r)return()=>{for(let t=0;t<n.length;t++){let r=n[t];"function"==typeof r?r():i(e[t],null)}}}}function s(...e){return n.useCallback(o(...e),e)}},11359:(e,t,r)=>{var n=r(72806),i=r(47918).f,o=r(62134),s=r(84813),a=r(75288),u=r(25497),l=r(66313);e.exports=function(e,t){var r,c,d,p,m,f=e.target,g=e.global,y=e.stat;if(r=g?n:y?n[f]||a(f,{}):(n[f]||{}).prototype)for(c in t){if(p=t[c],d=e.dontCallGetSet?(m=i(r,c))&&m.value:r[c],!l(g?c:f+(y?".":"#")+c,e.forced)&&void 0!==d){if(typeof p==typeof d)continue;u(p,d)}(e.sham||d&&d.sham)&&o(p,"sham",!0),s(r,c,p,e)}}},11396:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=function(e,t){return e===t||e!=e&&t!=t}},12267:(e,t,r)=>{r(26714),r(65173),r(21675),e.exports=r(60890)("String","replaceAll")},12524:e=>{e.exports={}},12610:(e,t,r)=>{"use strict";r.d(t,{A:()=>c});var n=r(21710),i=r(48710),o=r(75438),s={};s["[object Float32Array]"]=s["[object Float64Array]"]=s["[object Int8Array]"]=s["[object Int16Array]"]=s["[object Int32Array]"]=s["[object Uint8Array]"]=s["[object Uint8ClampedArray]"]=s["[object Uint16Array]"]=s["[object Uint32Array]"]=!0,s["[object Arguments]"]=s["[object Array]"]=s["[object ArrayBuffer]"]=s["[object Boolean]"]=s["[object DataView]"]=s["[object Date]"]=s["[object Error]"]=s["[object Function]"]=s["[object Map]"]=s["[object Number]"]=s["[object Object]"]=s["[object RegExp]"]=s["[object Set]"]=s["[object String]"]=s["[object WeakMap]"]=!1;var a=r(99809),u=r(43091),l=u.A&&u.A.isTypedArray;let c=l?(0,a.A)(l):function(e){return(0,o.A)(e)&&(0,i.A)(e.length)&&!!s[(0,n.A)(e)]}},12682:(e,t,r)=>{var n=r(54202),i=r(51141),o=r(20709),s=r(98284),a=r(27514),u=i([].concat);e.exports=n("Reflect","ownKeys")||function(e){var t=o.f(a(e)),r=s.f;return r?u(t,r(e)):t}},13012:(e,t,r)=>{e.exports=r(54202)("document","documentElement")},13205:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(92710);function i(e){var t=function(e,t){if("object"!=(0,n.A)(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=(0,n.A)(i))return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==(0,n.A)(t)?t:t+""}},13478:(e,t,r)=>{"use strict";r.d(t,{$:()=>d});var n=r(98275),i=r(25028),o=r(60388),s=r(58444),a=r(90089),u=r(81883),l=r(37149),c=r(48306),d=class extends a.Q{constructor(e,t){super(),this.options=t,this.#p=e,this.#m=null,this.#f=(0,u.T)(),this.bindMethods(),this.setOptions(t)}#p;#g=void 0;#y=void 0;#h=void 0;#v;#b;#f;#m;#S;#w;#I;#$;#C;#k;#A=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.#g.addObserver(this),p(this.#g,this.options)?this.#q():this.updateResult(),this.#O())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return m(this.#g,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return m(this.#g,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#T(),this.#P(),this.#g.removeObserver(this)}setOptions(e){let t=this.options,r=this.#g;if(this.options=this.#p.defaultQueryOptions(e),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled&&"function"!=typeof this.options.enabled&&"boolean"!=typeof(0,l.nU)(this.options.enabled,this.#g))throw Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#x(),this.#g.setOptions(this.options),t._defaulted&&!(0,l.f8)(this.options,t)&&this.#p.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#g,observer:this});let n=this.hasListeners();n&&f(this.#g,r,this.options,t)&&this.#q(),this.updateResult(),n&&(this.#g!==r||(0,l.nU)(this.options.enabled,this.#g)!==(0,l.nU)(t.enabled,this.#g)||(0,l.d2)(this.options.staleTime,this.#g)!==(0,l.d2)(t.staleTime,this.#g))&&this.#E();let i=this.#F();n&&(this.#g!==r||(0,l.nU)(this.options.enabled,this.#g)!==(0,l.nU)(t.enabled,this.#g)||i!==this.#k)&&this.#R(i)}getOptimisticResult(e){var t,r;let n=this.#p.getQueryCache().build(this.#p,e),i=this.createResult(n,e);return t=this,r=i,(0,l.f8)(t.getCurrentResult(),r)||(this.#h=i,this.#b=this.options,this.#v=this.#g.state),i}getCurrentResult(){return this.#h}trackResult(e,t){return new Proxy(e,{get:(e,r)=>(this.trackProp(r),t?.(r),"promise"===r&&(this.trackProp("data"),this.options.experimental_prefetchInRender||"pending"!==this.#f.status||this.#f.reject(Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(e,r))})}trackProp(e){this.#A.add(e)}getCurrentQuery(){return this.#g}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){let t=this.#p.defaultQueryOptions(e),r=this.#p.getQueryCache().build(this.#p,t);return r.fetch().then(()=>this.createResult(r,t))}fetch(e){return this.#q({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#h))}#q(e){this.#x();let t=this.#g.fetch(this.options,e);return e?.throwOnError||(t=t.catch(l.lQ)),t}#E(){this.#T();let e=(0,l.d2)(this.options.staleTime,this.#g);if(i.H.isServer()||this.#h.isStale||!(0,l.gn)(e))return;let t=(0,l.j3)(this.#h.dataUpdatedAt,e);this.#$=c.zs.setTimeout(()=>{this.#h.isStale||this.updateResult()},t+1)}#F(){return("function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.#g):this.options.refetchInterval)??!1}#R(e){this.#P(),this.#k=e,!i.H.isServer()&&!1!==(0,l.nU)(this.options.enabled,this.#g)&&(0,l.gn)(this.#k)&&0!==this.#k&&(this.#C=c.zs.setInterval(()=>{(this.options.refetchIntervalInBackground||n.m.isFocused())&&this.#q()},this.#k))}#O(){this.#E(),this.#R(this.#F())}#T(){void 0!==this.#$&&(c.zs.clearTimeout(this.#$),this.#$=void 0)}#P(){void 0!==this.#C&&(c.zs.clearInterval(this.#C),this.#C=void 0)}createResult(e,t){let r,n=this.#g,i=this.options,o=this.#h,a=this.#v,c=this.#b,d=e!==n?e.state:this.#y,{state:m}=e,y={...m},h=!1;if(t._optimisticResults){let r=this.hasListeners(),o=!r&&p(e,t),a=r&&f(e,n,t,i);(o||a)&&(y={...y,...(0,s.k)(m.data,e.options)}),"isRestoring"===t._optimisticResults&&(y.fetchStatus="idle")}let{error:v,errorUpdatedAt:b,status:S}=y;r=y.data;let w=!1;if(void 0!==t.placeholderData&&void 0===r&&"pending"===S){let e;o?.isPlaceholderData&&t.placeholderData===c?.placeholderData?(e=o.data,w=!0):e="function"==typeof t.placeholderData?t.placeholderData(this.#I?.state.data,this.#I):t.placeholderData,void 0!==e&&(S="success",r=(0,l.pl)(o?.data,e,t),h=!0)}if(t.select&&void 0!==r&&!w)if(o&&r===a?.data&&t.select===this.#S)r=this.#w;else try{this.#S=t.select,r=t.select(r),r=(0,l.pl)(o?.data,r,t),this.#w=r,this.#m=null}catch(e){this.#m=e}this.#m&&(v=this.#m,r=this.#w,b=Date.now(),S="error");let I="fetching"===y.fetchStatus,$="pending"===S,C="error"===S,k=$&&I,A=void 0!==r,q={status:S,fetchStatus:y.fetchStatus,isPending:$,isSuccess:"success"===S,isError:C,isInitialLoading:k,isLoading:k,data:r,dataUpdatedAt:y.dataUpdatedAt,error:v,errorUpdatedAt:b,failureCount:y.fetchFailureCount,failureReason:y.fetchFailureReason,errorUpdateCount:y.errorUpdateCount,isFetched:e.isFetched(),isFetchedAfterMount:y.dataUpdateCount>d.dataUpdateCount||y.errorUpdateCount>d.errorUpdateCount,isFetching:I,isRefetching:I&&!$,isLoadingError:C&&!A,isPaused:"paused"===y.fetchStatus,isPlaceholderData:h,isRefetchError:C&&A,isStale:g(e,t),refetch:this.refetch,promise:this.#f,isEnabled:!1!==(0,l.nU)(t.enabled,e)};if(this.options.experimental_prefetchInRender){let t=void 0!==q.data,r="error"===q.status&&!t,i=e=>{r?e.reject(q.error):t&&e.resolve(q.data)},o=()=>{i(this.#f=q.promise=(0,u.T)())},s=this.#f;switch(s.status){case"pending":e.queryHash===n.queryHash&&i(s);break;case"fulfilled":(r||q.data!==s.value)&&o();break;case"rejected":r&&q.error===s.reason||o()}}return q}updateResult(){let e=this.#h,t=this.createResult(this.#g,this.options);if(this.#v=this.#g.state,this.#b=this.options,void 0!==this.#v.data&&(this.#I=this.#g),(0,l.f8)(t,e))return;this.#h=t;let r=()=>{if(!e)return!0;let{notifyOnChangeProps:t}=this.options,r="function"==typeof t?t():t;if("all"===r||!r&&!this.#A.size)return!0;let n=new Set(r??this.#A);return this.options.throwOnError&&n.add("error"),Object.keys(this.#h).some(t=>this.#h[t]!==e[t]&&n.has(t))};this.#L({listeners:r()})}#x(){let e=this.#p.getQueryCache().build(this.#p,this.options);if(e===this.#g)return;let t=this.#g;this.#g=e,this.#y=e.state,this.hasListeners()&&(t?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#O()}#L(e){o.jG.batch(()=>{e.listeners&&this.listeners.forEach(e=>{e(this.#h)}),this.#p.getQueryCache().notify({query:this.#g,type:"observerResultsUpdated"})})}};function p(e,t){return!1!==(0,l.nU)(t.enabled,e)&&void 0===e.state.data&&("error"!==e.state.status||!1!==(0,l.nU)(t.retryOnMount,e))||void 0!==e.state.data&&m(e,t,t.refetchOnMount)}function m(e,t,r){if(!1!==(0,l.nU)(t.enabled,e)&&"static"!==(0,l.d2)(t.staleTime,e)){let n="function"==typeof r?r(e):r;return"always"===n||!1!==n&&g(e,t)}return!1}function f(e,t,r,n){return(e!==t||!1===(0,l.nU)(n.enabled,e))&&(!r.suspense||"error"!==e.state.status)&&g(e,r)}function g(e,t){return!1!==(0,l.nU)(t.enabled,e)&&e.isStaleByTime((0,l.d2)(t.staleTime,e))}},13909:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var n=r(95528),i=r(76611),o=r(50076),s=r(4527),a=i.A?i.A.isConcatSpreadable:void 0;let u=function(e){return(0,s.A)(e)||(0,o.A)(e)||!!(a&&e&&e[a])},l=function e(t,r,i,o,s){var a=-1,l=t.length;for(i||(i=u),s||(s=[]);++a<l;){var c=t[a];r>0&&i(c)?r>1?e(c,r-1,i,o,s):(0,n.A)(s,c):o||(s[s.length]=c)}return s}},14e3:(e,t,r)=>{e.exports=r(49077)},14188:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=function(e){return e}},14455:(e,t,r)=>{var n=r(38443),i=r(9676);e.exports=function(e,t){var r=e[t];return i(r)?void 0:n(r)}},15024:(e,t,r)=>{var n=r(15177),i=r(30183),o=r(80128),s=r(27514),a=r(86252),u=r(75813);t.f=n&&!i?Object.defineProperties:function(e,t){s(e);for(var r,n=a(t),i=u(t),l=i.length,c=0;l>c;)o.f(e,r=i[c++],n[r]);return e}},15125:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}},15177:(e,t,r)=>{e.exports=!r(56354)(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})},15653:(e,t,r)=>{var n=r(51141),i=n({}.toString),o=n("".slice);e.exports=function(e){return o(i(e),8,-1)}},16006:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return p}});let n=r(64252)._(r(14232)),i=r(72936),o=[],s=[],a=!1;function u(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class l{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),o=null;function u(){if(!o){let t=new l(e,r);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()}if(!a){let e=r.webpack&&1?r.webpack():r.modules;e&&s.push(t=>{for(let r of e)if(t.includes(r))return u()})}function c(e,t){let s;u(),(s=n.default.useContext(i.LoadableContext))&&Array.isArray(r.modules)&&r.modules.forEach(e=>{s(e)});let a=n.default.useSyncExternalStore(o.subscribe,o.getCurrentValue,o.getCurrentValue);return n.default.useImperativeHandle(t,()=>({retry:o.retry}),[]),n.default.useMemo(()=>{var t;return a.loading||a.error?n.default.createElement(r.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:o.retry}):a.loaded?n.default.createElement((t=a.loaded)&&t.default?t.default:t,e):null},[e,a])}return c.preload=()=>u(),c.displayName="LoadableComponent",n.default.forwardRef(c)}(u,e)}function d(e,t){let r=[];for(;e.length;){let n=e.pop();r.push(n(t))}return Promise.all(r).then(()=>{if(e.length)return d(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{d(o).then(e,t)}),c.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let r=()=>(a=!0,t());d(s,e).then(r,r)})},window.__NEXT_PRELOADREADY=c.preloadReady;let p=c},17239:(e,t,r)=>{"use strict";r.d(t,{dJ:()=>l,jd:()=>c,jl:()=>d});var n=r(37876),i=r(21379),o=r(14232),s=r(43295),a=r(56702);let u=(0,o.createContext)({monaco:void 0,setNeedMonaco:()=>void 0}),l=function(){let{throwOnLoadError:e=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{loadError:t,monaco:r,setNeedMonaco:n}=(0,o.useContext)(u);if((0,o.useEffect)(()=>{n(!0)},[n]),e&&t)throw t;return r},c=()=>{let{monaco:e}=(0,o.useContext)(u);return e},d=e=>{let{children:t}=e,[r,l]=(0,o.useState)(!1),[c,d]=(0,o.useState)(),[p,m]=(0,o.useState)(),f=(()=>{let{theme:e,forcedTheme:t}=(0,i.D)(),r=(0,s.N)("(prefers-color-scheme: dark)"),n=t||e;return(0,o.useMemo)(()=>{if("dark"===n)return"vs-dark";if("light"===n);else if("system"===n)return r?"vs-dark":"vs";return"vs"},[r,n])})();(0,o.useEffect)(()=>{if(c||!r)return;let e=!1;return m(void 0),a.nh.loadMonaco(f).then(t=>{e||(m(void 0),d(t))}).catch(t=>{e||m((e=>{if(e instanceof Error)return e;let t=e instanceof Event?e.target:null;return t instanceof HTMLScriptElement&&t.src?Error(`Monaco failed to load script ${t.src}`):Error("Monaco failed to load")})(t))}),()=>{e=!0}},[f,c,r]),(0,o.useEffect)(()=>{c&&f&&a.nh.applyFullMonacoTheme(f).catch(e=>console.error(e))},[c,f]);let g=(0,o.useMemo)(()=>({loadError:p,monaco:r?c:void 0,setNeedMonaco:c?()=>void 0:l}),[p,r,c]);return(0,n.jsx)(u.Provider,{value:g,children:t})}},18014:()=>{},18018:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(3472),i=r(93763),o=r(97649);let s=function(e){return(0,o.A)((0,i.A)(e,void 0,n.A),e+"")}},18024:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(87125);let i=function(e,t){var r=e.length;if(r)return t+=t<0?r:0,(0,n.A)(t,r)?e[t]:void 0}},18070:(e,t,r)=>{"use strict";r.d(t,{t:()=>i});var n=r(90089),i=new class extends n.Q{#N=!0;#_;#D;constructor(){super(),this.#D=e=>{if("u">typeof window&&window.addEventListener){let t=()=>e(!0),r=()=>e(!1);return window.addEventListener("online",t,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",r)}}}}onSubscribe(){this.#_||this.setEventListener(this.#D)}onUnsubscribe(){this.hasListeners()||(this.#_?.(),this.#_=void 0)}setEventListener(e){this.#D=e,this.#_?.(),this.#_=e(this.setOnline.bind(this))}setOnline(e){this.#N!==e&&(this.#N=e,this.listeners.forEach(t=>{t(e)}))}isOnline(){return this.#N}}},18209:(e,t,r)=>{"use strict";r.d(t,{y:()=>q});var n=r(56557),i=r.n(n),o=r(71576),s=r.n(o),a=r(64301),u=r.n(a),l=r(66315),c=r.n(l),d=r(20355),p=r.n(d),m=r(86090),f=r.n(m),g=r(77846),y=r.n(g),h=r(31816),v=r.n(h),b=r(98467),S=r.n(b),w=r(33774),I=r.n(w),$=r(8962),C=r.n($),k=r(57244),A=r.n(k);r(96243),i().extend(s()),i().extend(u()),i().extend(c()),i().extend(p()),i().extend(f()),i().extend(y()),i().extend(v()),i().extend(S()),i().extend(I()),i().extend(C()),i().extend(A());let q=i()},18240:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(72209);let i=function(e,t,r){"__proto__"==t&&n.A?(0,n.A)(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}},18402:(e,t)=>{"use strict";t.mw={prefix:"far",iconName:"book-open",icon:[576,512,[128214,128366],"f518","M156 32C100.6 32 48.8 46.6 27.1 53.6C10.3 59 0 74.5 0 91.1V403.5c0 26.1 24 44.2 48 40.2c19.8-3.3 54.8-7.7 100-7.7c54 0 97.5 25.5 112.5 35.6c7.5 5 16.8 8.4 27 8.4c11.5 0 21.6-4.2 29.3-9.9C330.2 460.3 369.1 436 428 436c47.7 0 80.5 4 99 7.2c23.9 4.1 49-13.8 49-40.6V91.1c0-16.5-10.3-32.1-27.1-37.5C527.2 46.6 475.4 32 420 32c-36.8 0-71.8 6.4-97.4 12.7c-12.8 3.2-23.5 6.3-30.9 8.7c-1.3 .4-2.6 .8-3.7 1.2c-1.1-.4-2.4-.8-3.7-1.2c-7.5-2.4-18.1-5.5-30.9-8.7C227.8 38.4 192.8 32 156 32zM264 97.3V417.9C238 404.2 196.8 388 148 388c-42.9 0-77.4 3.7-100 7.1V97.3C70.3 90.6 112.4 80 156 80c31.6 0 62.6 5.6 85.9 11.3c8.6 2.1 16.1 4.2 22.1 6zm48 319.2V97.3c6-1.8 13.5-3.9 22.1-6C357.4 85.6 388.4 80 420 80c43.6 0 85.7 10.6 108 17.3V394.7c-21.7-3.3-54.9-6.7-100-6.7c-51.4 0-90.8 15-116 28.6z"]},t.Re=t.mw},18422:(e,t,r)=>{"use strict";r.d(t,{$Fr:()=>fy,$GH:()=>lW,$KV:()=>al,$T7:()=>nD,$Vx:()=>uG,$W7:()=>iN,$ee:()=>sH,$s6:()=>ev,$wd:()=>cz,A17:()=>ca,A1Q:()=>su,ABV:()=>pv,ABz:()=>o7,AD7:()=>uY,AEr:()=>rS,AOp:()=>fi,Aeu:()=>rA,Aey:()=>oY,AkF:()=>tp,AqV:()=>m0,B5G:()=>mK,B9t:()=>nf,BDr:()=>lw,BFs:()=>iI,BJy:()=>u8,BNJ:()=>fA,BNR:()=>sC,BNu:()=>m7,BO4:()=>dP,BR_:()=>o5,BXE:()=>ur,Bdk:()=>us,BjZ:()=>d_,Bx2:()=>lF,C7T:()=>d2,CA6:()=>sf,CXQ:()=>iR,Cdz:()=>mi,Cef:()=>i7,Cii:()=>uc,Clv:()=>nA,CmB:()=>ns,CtF:()=>rD,D0C:()=>mI,D5A:()=>se,DEu:()=>aS,DNM:()=>aC,DP9:()=>uI,DmL:()=>ei,Dn2:()=>sI,DsN:()=>pC,Dto:()=>uo,ELA:()=>nX,EOi:()=>sA,Exi:()=>uQ,Ey8:()=>nc,FSk:()=>dY,FaT:()=>ny,Ff1:()=>dK,Fij:()=>uC,G$J:()=>t7,G6d:()=>p2,GAS:()=>W,GSu:()=>iH,GZp:()=>e2,Gkb:()=>iV,GoU:()=>r3,H57:()=>c6,H9D:()=>fN,HEG:()=>lm,HIk:()=>ay,HTv:()=>iD,Htf:()=>aA,I7p:()=>oy,IIk:()=>aE,INg:()=>c$,IUN:()=>aN,Iln:()=>nu,Ilp:()=>aG,J1c:()=>rj,J4G:()=>fI,JMX:()=>as,JRi:()=>r2,JUk:()=>sp,JYP:()=>eY,JmW:()=>pK,JnE:()=>mf,Jqy:()=>dO,JwU:()=>rK,K2T:()=>lM,KEW:()=>eH,KH:()=>eo,KR7:()=>tS,KS4:()=>p8,KbJ:()=>aQ,KlO:()=>cT,Kt8:()=>ci,Kvw:()=>mP,LGm:()=>dI,LXV:()=>du,M2L:()=>si,M78:()=>eG,MDc:()=>Q,MQs:()=>of,MV_:()=>tP,MbL:()=>up,Mtl:()=>dQ,MyT:()=>pX,N3R:()=>fR,N9K:()=>c8,NFG:()=>es,NYj:()=>u9,NZc:()=>ti,Ncs:()=>r5,Neg:()=>uu,Nqi:()=>a0,Nwh:()=>m3,O6F:()=>pO,OEI:()=>iQ,OIl:()=>aU,OPL:()=>sO,Oix:()=>rX,OjI:()=>a2,OlV:()=>rI,OuY:()=>fe,P0k:()=>mA,P7d:()=>sR,PMk:()=>d3,PPB:()=>dE,PR8:()=>sx,Ppp:()=>er,Q3k:()=>aR,Q4j:()=>a_,Q9V:()=>j,QCT:()=>oX,QS7:()=>sr,QSH:()=>ts,Qs$:()=>pQ,Qy$:()=>ty,QyT:()=>tv,R5v:()=>iP,RAg:()=>uS,RAp:()=>aK,REM:()=>cx,RLo:()=>lz,RO8:()=>nR,RQ2:()=>ms,RX1:()=>lS,RZF:()=>cV,Rc4:()=>G,Rn_:()=>mC,Rrb:()=>e5,Rtn:()=>rE,S7X:()=>iK,S9V:()=>dc,SFv:()=>cb,S_f:()=>K,Shy:()=>V,SiB:()=>nC,SjJ:()=>i5,Sji:()=>uD,Sq5:()=>pN,SqX:()=>eu,SsF:()=>sP,Sst:()=>iA,SvL:()=>rP,TO1:()=>eD,TWW:()=>fj,TcZ:()=>rp,TtE:()=>cd,Tw2:()=>oI,UDW:()=>sQ,UX$:()=>rr,UYb:()=>iG,V0:()=>mr,V1c:()=>mp,V6A:()=>ne,VBC:()=>eS,VCn:()=>pS,VX9:()=>sE,Vbn:()=>lJ,Vok:()=>ld,Vpy:()=>tQ,VqR:()=>mv,VsB:()=>o3,Vue:()=>u3,VzX:()=>oE,W3g:()=>eK,W49:()=>pI,WGM:()=>nP,WGz:()=>c_,WJh:()=>U,Wdk:()=>re,We3:()=>_,Wg6:()=>aO,Wkh:()=>p7,Wkt:()=>ni,Wm7:()=>oS,Wwy:()=>oQ,X3l:()=>oi,XBB:()=>sy,XEM:()=>nQ,XHN:()=>cj,XJd:()=>nH,XNW:()=>tr,XO0:()=>l_,XWZ:()=>dA,XXt:()=>iE,XgN:()=>im,Xjt:()=>oH,XzC:()=>mX,Y7I:()=>mc,Y9L:()=>sm,YOo:()=>la,YUQ:()=>rs,YW7:()=>sG,YpZ:()=>nU,YrN:()=>me,ZIQ:()=>eP,ZLk:()=>iY,ZNM:()=>dp,ZUJ:()=>ed,ZcS:()=>en,ZeT:()=>u6,Zop:()=>l1,Zr:()=>l6,Zsi:()=>np,Zt$:()=>tu,ZuF:()=>sN,_D1:()=>fQ,_G4:()=>ea,_Si:()=>d0,_Zb:()=>n2,_es:()=>ru,_yl:()=>iB,_yr:()=>cn,aCS:()=>uy,aNB:()=>tO,aT7:()=>oe,aWG:()=>fD,aYL:()=>Y,adt:()=>lk,akO:()=>u4,auF:()=>t5,bC_:()=>uN,bGD:()=>fs,bLk:()=>u5,bOO:()=>rR,bRl:()=>uO,bUB:()=>ee,bhc:()=>uZ,biX:()=>rC,bk$:()=>d5,boZ:()=>ff,bpd:()=>rq,btL:()=>oc,c7V:()=>dL,cO2:()=>d7,cS2:()=>o2,cTK:()=>ar,ckT:()=>H,cr1:()=>cM,cx8:()=>oP,d2D:()=>lo,d2M:()=>pH,d9g:()=>iU,dBE:()=>nr,dCB:()=>mE,dk5:()=>cw,dr_:()=>fd,due:()=>eN,dyD:()=>cq,e0P:()=>lb,e9E:()=>oO,eA:()=>nK,eAW:()=>rY,eBU:()=>pe,eHH:()=>oA,eJ5:()=>eU,eKn:()=>aD,eL8:()=>fG,eMq:()=>pr,eOW:()=>au,eOo:()=>oC,eRM:()=>af,eSA:()=>dC,f1S:()=>ep,fKW:()=>mu,fOK:()=>cy,fQg:()=>ri,fSf:()=>et,f_y:()=>tU,fdl:()=>mS,fin:()=>py,fnn:()=>mQ,fo4:()=>sD,fot:()=>rN,fsh:()=>nN,g0m:()=>t0,g3x:()=>tR,g86:()=>eR,gJs:()=>pf,gU_:()=>eQ,gy1:()=>fB,h2Z:()=>io,hCm:()=>ov,hbT:()=>mU,hd1:()=>fr,heU:()=>l8,hgp:()=>dy,hjt:()=>pp,hpM:()=>ie,hsS:()=>rv,i89:()=>J,iJ1:()=>sU,iRp:()=>fu,iVR:()=>oN,ifI:()=>pR,ig$:()=>iX,ihs:()=>ue,ikk:()=>op,ios:()=>ra,itQ:()=>fc,j5D:()=>fC,j8S:()=>s0,jFP:()=>pP,jXx:()=>n7,j_x:()=>lt,jhB:()=>r7,jhO:()=>uK,ji0:()=>pA,jjQ:()=>pE,jzL:()=>fp,kTw:()=>ui,kXG:()=>l9,kZo:()=>sK,kaj:()=>ln,kgh:()=>nv,khY:()=>s7,koL:()=>a3,kpO:()=>iO,l2$:()=>lB,l6b:()=>n5,lGY:()=>z,lH9:()=>sc,lHX:()=>sS,lML:()=>tX,lQR:()=>dS,lTd:()=>fK,lTl:()=>ap,lYc:()=>nI,lZI:()=>a7,lcs:()=>dG,lmt:()=>tA,lu4:()=>iC,ly2:()=>mF,mEw:()=>uP,mGf:()=>em,mNk:()=>fz,mTf:()=>ss,mTr:()=>nS,mV:()=>fH,m_M:()=>pc,me0:()=>oK,mue:()=>uf,n1x:()=>or,n5w:()=>oD,n6h:()=>cJ,n8R:()=>ai,nX9:()=>uE,nfz:()=>tI,ngd:()=>X,nvl:()=>lj,nwx:()=>a5,o6Q:()=>ds,oIh:()=>s2,oSo:()=>uv,oX$:()=>cW,oX1:()=>nE,oXB:()=>p0,oZe:()=>B,ol4:()=>cF,ol6:()=>iS,on_:()=>os,pJY:()=>eI,pUS:()=>s5,pYp:()=>l4,pgg:()=>u1,pli:()=>eE,psB:()=>mO,q4C:()=>o0,qH8:()=>ct,qOf:()=>el,qXY:()=>i3,qtp:()=>D,qvt:()=>uR,qwd:()=>uU,r1Z:()=>Z,r2k:()=>M,rE6:()=>sY,rGF:()=>cm,rKC:()=>eZ,rQ5:()=>cZ,rXD:()=>av,rXl:()=>t3,rZo:()=>r0,rvw:()=>tK,sFD:()=>rG,sKT:()=>aY,se1:()=>lq,sjK:()=>cL,snE:()=>rQ,sut:()=>l$,tAd:()=>lx,tCb:()=>m5,tJH:()=>iv,tQB:()=>cB,tTK:()=>fS,tVY:()=>ec,tcK:()=>rO,tkp:()=>nG,u8i:()=>pD,uBS:()=>dX,uEn:()=>nY,uG0:()=>dF,uG4:()=>pi,uMT:()=>mN,uOi:()=>c1,uZf:()=>aH,uby:()=>tf,ujp:()=>dH,ukp:()=>t2,uq2:()=>e3,uqT:()=>df,v8h:()=>uJ,vCh:()=>oU,vEw:()=>c9,vKK:()=>oG,vV0:()=>fO,vgb:()=>aP,voW:()=>uH,vyK:()=>ou,wCN:()=>ps,wKk:()=>dt,wgp:()=>dn,wk8:()=>lL,wuI:()=>cl,wxI:()=>i2,wy1:()=>tE,xOW:()=>i0,x_:()=>oR,xhJ:()=>fU,xow:()=>s3,y2x:()=>sv,yTg:()=>fV,yU1:()=>sX,ybB:()=>dU,yck:()=>pG,yhh:()=>tC,z3N:()=>ae,zBA:()=>ac,zEH:()=>c4,zFw:()=>rH,zIf:()=>mG,zLw:()=>aI,zjv:()=>m2,zlH:()=>ry,zod:()=>pU,zt6:()=>lV,zwZ:()=>cg});var n,i,o,s,a,u,l,c,d,p,m,f,g,y,h,v,b,S,w,I,$,C,k,A,q,O,T,P,x,E,F,R=r(74359),L=r(40097);function N(e,t,r,n){return async()=>e.request({document:t,variables:r,requestHeaders:n})}var _=((n={}).AlreadyFrozen="ALREADY_FROZEN",n.Inactive="INACTIVE",n.NotQualifiedToFrozen="NOT_QUALIFIED_TO_FROZEN",n.QualifiedToFrozen="QUALIFIED_TO_FROZEN",n),D=((i={}).AppDiscussBanner="APP_DISCUSS_BANNER",i.AppHomeBanner="APP_HOME_BANNER",i.DiscussDetail="DISCUSS_DETAIL",i.DiscussList="DISCUSS_LIST",i.DiscussSideBanner="DISCUSS_SIDE_BANNER",i.DiscussTopBanner="DISCUSS_TOP_BANNER",i.HomeAd="HOME_AD",i.HomeFeed="HOME_FEED",i.ProblemsetAd="PROBLEMSET_AD",i.ProblemsetAdPrimary="PROBLEMSET_AD_PRIMARY",i.ProblemsetAdSecondary="PROBLEMSET_AD_SECONDARY",i.QdDescription="QD_DESCRIPTION",i.QdSolutionDetail="QD_SOLUTION_DETAIL",i.QdSolutionList="QD_SOLUTION_LIST",i.StudyPlanAd="STUDY_PLAN_AD",i),j=((o={}).Adsense="ADSENSE",o.InternalAd="INTERNAL_AD",o),K=((s={}).Free="FREE",s.Premium="PREMIUM",s.VideoPremium="VIDEO_PREMIUM",s),M=((a={}).Hot="HOT",a.MostRecent="MOST_RECENT",a.MostRelevant="MOST_RELEVANT",a.MostVotes="MOST_VOTES",a.MostVotesMonth="MOST_VOTES_MONTH",a.MostVotesWeek="MOST_VOTES_WEEK",a.MostVotesYear="MOST_VOTES_YEAR",a),U=((u={}).Abuse="ABUSE",u.Advertising="ADVERTISING",u.Fake="FAKE",u.Illegal="ILLEGAL",u.NonEnglish="NON_ENGLISH",u.Other="OTHER",u.Politics="POLITICS",u.Sexual="SEXUAL",u.Terrorism="TERRORISM",u.Violent="VIOLENT",u),V=((l={}).Deleted="DELETED",l.Hidden="HIDDEN",l.Open="OPEN",l),Q=((c={}).Discussion="DISCUSSION",c.Solution="SOLUTION",c),B=((d={}).Normal="NORMAL",d.Official="OFFICIAL",d),G=((p={}).Finished="FINISHED",p.NotStarted="NOT_STARTED",p),z=((m={}).ExtraAccount="EXTRA_ACCOUNT",m.NoLongerNeeded="NO_LONGER_NEEDED",m.Other="OTHER",m.SecurityConcern="SECURITY_CONCERN",m.StartOver="START_OVER",m),H=((f={}).Article="ARTICLE",f.Dummy="DUMMY",f),W=((g={}).Level="LEVEL",g.Normal="NORMAL",g.Quiz="QUIZ",g),Y=((y={}).CompanyFavorite="COMPANY_FAVORITE",y.KnowledgeFavorite="KNOWLEDGE_FAVORITE",y),J=((h={}).CompanyFavorite="COMPANY_FAVORITE",h.Normal="NORMAL",h.SmartList="SMART_LIST",h),X=((v={}).CodeAutocompleteTour="CODE_AUTOCOMPLETE_TOUR",v.NewIdeDynamicLayout="NEW_IDE_DYNAMIC_LAYOUT",v.NewIdeDynamicLayoutV2="NEW_IDE_DYNAMIC_LAYOUT_V2",v.NewQdDetailTour="NEW_QD_DETAIL_TOUR",v.Other="OTHER",v.QuestionDetailTour="QUESTION_DETAIL_TOUR",v.QuestionDetailTourWithAutocomplete="QUESTION_DETAIL_TOUR_WITH_AUTOCOMPLETE",v),Z=((b={}).Events="EVENTS",b.Social="SOCIAL",b.Updates="UPDATES",b),ee=((S={}).EmailAlreadyBound="EMAIL_ALREADY_BOUND",S.EmailAlreadyUsed="EMAIL_ALREADY_USED",S.EmailDomainNotAllowed="EMAIL_DOMAIN_NOT_ALLOWED",S.EmailNotFound="EMAIL_NOT_FOUND",S.EmailNotVerified="EMAIL_NOT_VERIFIED",S.Ok="OK",S.OrganizationNotValid="ORGANIZATION_NOT_VALID",S),et=((w={}).IncorrectPassword="INCORRECT_PASSWORD",w.MissingAlphaOrNumeric="MISSING_ALPHA_OR_NUMERIC",w.PasswordIsInvalid="PASSWORD_IS_INVALID",w.PasswordTooCommon="PASSWORD_TOO_COMMON",w.PasswordTooLong="PASSWORD_TOO_LONG",w.PasswordTooShort="PASSWORD_TOO_SHORT",w),er=((I={}).Attempted="ATTEMPTED",I.PastSolved="PAST_SOLVED",I.Solved="SOLVED",I.ToDo="TO_DO",I),en=(($={}).Completed="COMPLETED",$.Deleted="DELETED",$.OnGoing="ON_GOING",$.Quitted="QUITTED",$),ei=((C={}).History="HISTORY",C.OnGoing="ON_GOING",C),eo=((k={}).InvalidAboutMe="INVALID_ABOUT_ME",k.InvalidBirthday="INVALID_BIRTHDAY",k.InvalidCompany="INVALID_COMPANY",k.InvalidGithubUrl="INVALID_GITHUB_URL",k.InvalidJobTitle="INVALID_JOB_TITLE",k.InvalidLinkedinUrl="INVALID_LINKEDIN_URL",k.InvalidLocation="INVALID_LOCATION",k.InvalidRealName="INVALID_REAL_NAME",k.InvalidSchool="INVALID_SCHOOL",k.InvalidSkillTags="INVALID_SKILL_TAGS",k.InvalidWebsite="INVALID_WEBSITE",k),es=((A={}).ThumbsDown="THUMBS_DOWN",A.Upvote="UPVOTE",A),ea=((q={}).Deleted="DELETED",q.Error="ERROR",q.Failed="FAILED",q.NotFound="NOT_FOUND",q.Pending="PENDING",q.Running="RUNNING",q.Succeeded="SUCCEEDED",q.Unknown="UNKNOWN",q),eu=((O={}).Smg="SMG",O.WhatsApp="WHATS_APP",O),el=((T={}).AuthPhoneUpdate="AUTH_PHONE_UPDATE",T.AuthTwoStepVerification="AUTH_TWO_STEP_VERIFICATION",T),ec=((P={}).PhoneRemove="PHONE_REMOVE",P.PhoneUpdate="PHONE_UPDATE",P),ed=((x={}).AiHelper="AI_HELPER",x.BetaUserFlow="BETA_USER_FLOW",x.ContestDl="CONTEST_DL",x.FrontendCategory="FRONTEND_CATEGORY",x.IpRegion="IP_REGION",x.LcIde="LC_IDE",x.LcIdeV2="LC_IDE_V2",x.NewPlanRankBoardAccess="NEW_PLAN_RANK_BOARD_ACCESS",x.NewProblemlistPage="NEW_PROBLEMLIST_PAGE",x.NewProblemDetailPage="NEW_PROBLEM_DETAIL_PAGE",x.NewProfilePage="NEW_PROFILE_PAGE",x.NewStripeInvoice="NEW_STRIPE_INVOICE",x.NewStudyPlanAccess="NEW_STUDY_PLAN_ACCESS",x.NewSubscribePage="NEW_SUBSCRIBE_PAGE",x),ep=((E={}).Finish="Finish",E.NotStart="NotStart",E),em=((F={}).Email="EMAIL",F.Smg="SMG",F.Whatsapp="WHATSAPP",F);let ef=`
    fragment CardDetailFragment on CardNode {
  id
  img
  title
  slug
  categorySlug
  description
  createdAt
  lastModified
  paidOnly
  published
  numChapters
  numItems
  codingChallengeInfo {
    startDate
    containsPremium
    canApplyTimeTravelTicket
  }
  shareEvent {
    startDate
    endDate
    hasUserSharedEvent
  }
  valueAddedContent {
    name
    slug
    description
    isActive
    hasAccess
    pricing {
      price
      originalPrice
    }
  }
}
    `,eg=`
    fragment DiscussPost on PostNode {
  id
  voteCount
  voteUpCount
  voteStatus
  content
  updationDate
  creationDate
  status
  isHidden
  anonymous
  author {
    isDiscussAdmin
    isDiscussStaff
    username
    nameColor
    activeBadge {
      displayName
      icon
    }
    profile {
      userAvatar
      reputation
      realName
      certificationLevel
    }
    isActive
  }
  authorIsModerator
  isOwnPost
  isSerialized
}
    `,ey=`
    fragment ugcSolutionArticleFragment on SolutionArticleNode {
  uuid
  title
  slug
  summary
  ipRegion
  author {
    realName
    userAvatar
    userSlug
    userName
    nameColor
    certificationLevel
    activeBadge {
      icon
      displayName
    }
  }
  articleType
  thumbnail
  createdAt
  updatedAt
  status
  isLeetcode
  canSee
  canEdit
  isMyFavorite
  chargeType
  myReactionType
  topicId
  hitCount
  hasVideoArticle
  reactions {
    count
    reactionType
  }
  tags {
    name
    slug
    tagType
  }
  topic {
    id
    topLevelCommentCount
  }
}
    `,eh=`
    query siteAnnouncements {
  siteAnnouncements {
    title
    content
    blacklistUrls
    whitelistUrls
    navbarItem
    extra
  }
}
    `,ev=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["siteAnnouncements"]:["siteAnnouncements",t],queryFn:N(e,eh,t,n),...r});ev.document=eh,ev.getKey=e=>void 0===e?["siteAnnouncements"]:["siteAnnouncements",e];let eb=`
    mutation dailyCheckin {
  checkin {
    checkedIn
    ok
    error
  }
}
    `,eS=(e,t,r)=>(0,L.n)({mutationKey:["dailyCheckin"],mutationFn:t=>N(e,eb,t,r)(),...t}),ew=`
    query abRecordName($abName: String!) {
  abRecordName(abName: $abName)
}
    `,eI=(e,t,r,n)=>(0,R.I)({queryKey:["abRecordName",t],queryFn:N(e,ew,t,n),...r});eI.document=ew,eI.getKey=e=>["abRecordName",e];let e$=`
    query commonBacklinkWhitelist {
  commonBacklinkWhitelist
}
    `,eC=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["commonBacklinkWhitelist"]:["commonBacklinkWhitelist",t],queryFn:N(e,e$,t,n),...r});eC.document=e$,eC.getKey=e=>void 0===e?["commonBacklinkWhitelist"]:["commonBacklinkWhitelist",e];let ek=`
    query recommendSolutionTags($questionSlug: String!) {
  recommendSolutionTags(questionSlug: $questionSlug) {
    name
    slug
    count
  }
}
    `,eA=(e,t,r,n)=>(0,R.I)({queryKey:["recommendSolutionTags",t],queryFn:N(e,ek,t,n),...r});eA.document=ek,eA.getKey=e=>["recommendSolutionTags",e];let eq=`
    query searchUser($keyword: String!) {
  users(usernamePrefix: $keyword) {
    username
    profile {
      userSlug
      userAvatar
      realName
    }
  }
}
    `,eO=(e,t,r,n)=>(0,R.I)({queryKey:["searchUser",t],queryFn:N(e,eq,t,n),...r});eO.document=eq,eO.getKey=e=>["searchUser",e];let eT=`
    query currentTimestamp {
  currentTimestamp
}
    `,eP=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["currentTimestamp"]:["currentTimestamp",t],queryFn:N(e,eT,t,n),...r});eP.document=eT,eP.getKey=e=>void 0===e?["currentTimestamp"]:["currentTimestamp",e];let ex=`
    mutation updateBetaParticipation($optIn: Boolean!, $participationType: Type!) {
  updateBetaParticipation(optIn: $optIn, participationType: $participationType) {
    ok
    error
    userStatus {
      optedIn
    }
  }
}
    `,eE=(e,t,r)=>(0,L.n)({mutationKey:["updateBetaParticipation"],mutationFn:t=>N(e,ex,t,r)(),...t}),eF=`
    query codingChallengeMedal($year: Int!, $month: Int!) {
  dailyChallengeMedal(year: $year, month: $month) {
    name
    config {
      icon
    }
  }
}
    `,eR=(e,t,r,n)=>(0,R.I)({queryKey:["codingChallengeMedal",t],queryFn:N(e,eF,t,n),...r});eR.document=eF,eR.getKey=e=>["codingChallengeMedal",e];let eL=`
    query dailyCodingQuestionRecords($year: Int!, $month: Int!) {
  dailyCodingChallengeV2(year: $year, month: $month) {
    challenges {
      date
      userStatus
      link
      question {
        questionFrontendId
        title
        titleSlug
      }
    }
    weeklyChallenges {
      date
      userStatus
      link
      question {
        questionFrontendId
        title
        titleSlug
        isPaidOnly
      }
    }
  }
}
    `,eN=(e,t,r,n)=>(0,R.I)({queryKey:["dailyCodingQuestionRecords",t],queryFn:N(e,eL,t,n),...r});eN.document=eL,eN.getKey=e=>["dailyCodingQuestionRecords",e];let e_=`
    query timeTravelTicketInfo {
  validTimeTravelTicketCount
  redeemedTimeTravelTicketCount
}
    `,eD=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["timeTravelTicketInfo"]:["timeTravelTicketInfo",t],queryFn:N(e,e_,t,n),...r});eD.document=e_,eD.getKey=e=>void 0===e?["timeTravelTicketInfo"]:["timeTravelTicketInfo",e];let ej=`
    query feature {
  feature {
    questionTranslation
    subscription
    signUp
    discuss
    mockInterview
    contest
    store
    studentFooter
    interview
    enableIpRegion
  }
}
    `,eK=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["feature"]:["feature",t],queryFn:N(e,ej,t,n),...r});eK.document=ej,eK.getKey=e=>void 0===e?["feature"]:["feature",e];let eM=`
    mutation mockUser($usernameToMock: String) {
  mockUser(usernameToMock: $usernameToMock) {
    ok
  }
}
    `,eU=(e,t,r)=>(0,L.n)({mutationKey:["mockUser"],mutationFn:t=>N(e,eM,t,r)(),...t}),eV=`
    query getStreakCounter {
  streakCounter {
    streakCount
    daysSkipped
    currentDayCompleted
  }
}
    `,eQ=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["getStreakCounter"]:["getStreakCounter",t],queryFn:N(e,eV,t,n),...r});eQ.document=eV,eQ.getKey=e=>void 0===e?["getStreakCounter"]:["getStreakCounter",e];let eB=`
    query getUserProfile($username: String!) {
  matchedUser(username: $username) {
    activeBadge {
      displayName
      icon
    }
  }
}
    `,eG=(e,t,r,n)=>(0,R.I)({queryKey:["getUserProfile",t],queryFn:N(e,eB,t,n),...r});eG.document=eB,eG.getKey=e=>["getUserProfile",e];let ez=`
    mutation markAllNotificationV2Read($tab: NotificationV2Tab) {
  markAllNotificationV2Read(tab: $tab) {
    ok
    error
  }
}
    `,eH=(e,t,r)=>(0,L.n)({mutationKey:["markAllNotificationV2Read"],mutationFn:t=>N(e,ez,t,r)(),...t}),eW=`
    mutation markNotificationV2Read($ids: [ID!]!) {
  markNotificationV2Read(ids: $ids) {
    ok
    error
    count
  }
}
    `,eY=(e,t,r)=>(0,L.n)({mutationKey:["markNotificationV2Read"],mutationFn:t=>N(e,eW,t,r)(),...t}),eJ=`
    query fetchNotifications($first: Int!, $after: String) {
  notifications(first: $first, after: $after) {
    edges {
      node {
        id
        notificationId
        modifiedDate
        actioned
        notificationData {
          id
          content
          type
          metadata
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    `,eX=(e,t,r,n)=>(0,R.I)({queryKey:["fetchNotifications",t],queryFn:N(e,eJ,t,n),...r});eX.document=eJ,eX.getKey=e=>["fetchNotifications",e];let eZ=`
    query notificationV2Feed($tab: NotificationV2Tab!, $first: Int, $after: String) {
  notificationV2Feed(tab: $tab, first: $first, after: $after) {
    items {
      id
      tab
      subType
      icon
      content
      preview
      quote
      link
      isRead
      createdAt
      actorCount
      actors {
        userId
        userSlug
        realName
        userAvatar
        userName
      }
      segments {
        type
        text
        slug
        url
        count
        amount
        bold
        maxWidth
      }
    }
    hasMore
    endCursor
  }
}
    `,e0=(e,t,r,n)=>(0,R.I)({queryKey:["notificationV2Feed",t],queryFn:N(e,eZ,t,n),...r});e0.document=eZ,e0.getKey=e=>["notificationV2Feed",e];let e1=`
    query notificationV2HasLegacyNotifications {
  notificationV2HasLegacyNotifications
}
    `,e2=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["notificationV2HasLegacyNotifications"]:["notificationV2HasLegacyNotifications",t],queryFn:N(e,e1,t,n),...r});e2.document=e1,e2.getKey=e=>void 0===e?["notificationV2HasLegacyNotifications"]:["notificationV2HasLegacyNotifications",e];let e4=`
    query notificationV2UnreadCounts {
  notificationV2UnreadCounts {
    tab
    hasUnread
  }
}
    `,e3=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["notificationV2UnreadCounts"]:["notificationV2UnreadCounts",t],queryFn:N(e,e4,t,n),...r});e3.document=e4,e3.getKey=e=>void 0===e?["notificationV2UnreadCounts"]:["notificationV2UnreadCounts",e];let e8=`
    query upcOnboardingStatus {
  didCompleteUpc
  user {
    joinedTimestamp
  }
}
    `,e5=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["upcOnboardingStatus"]:["upcOnboardingStatus",t],queryFn:N(e,e8,t,n),...r});e5.document=e8,e5.getKey=e=>void 0===e?["upcOnboardingStatus"]:["upcOnboardingStatus",e];let e6=`
    query allLeetcodePlaygroundTemplates {
  allLeetcodePlaygroundTemplates {
    name
    nameSlug
  }
}
    `,e7=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["allLeetcodePlaygroundTemplates"]:["allLeetcodePlaygroundTemplates",t],queryFn:N(e,e6,t,n),...r});e7.document=e6,e7.getKey=e=>void 0===e?["allLeetcodePlaygroundTemplates"]:["allLeetcodePlaygroundTemplates",e];let e9=`
    query myPlaygroundState {
  myPlaygroundState {
    createdNum
    upperLimitToCreate
  }
}
    `,te=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["myPlaygroundState"]:["myPlaygroundState",t],queryFn:N(e,e9,t,n),...r});te.document=e9,te.getKey=e=>void 0===e?["myPlaygroundState"]:["myPlaygroundState",e];let tt=`
    query officialAccountsUserCanUse {
  officialAccountsUserCanUse {
    realName
    userAvatar
    userSlug
  }
}
    `,tr=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["officialAccountsUserCanUse"]:["officialAccountsUserCanUse",t],queryFn:N(e,tt,t,n),...r});tr.document=tt,tr.getKey=e=>void 0===e?["officialAccountsUserCanUse"]:["officialAccountsUserCanUse",e];let tn=`
    query annualReport {
  userStatus {
    annualReport {
      showPopup
      content
      badge {
        displayName
        medal {
          slug
          config {
            iconGif
          }
        }
      }
    }
  }
}
    `,ti=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["annualReport"]:["annualReport",t],queryFn:N(e,tn,t,n),...r});ti.document=tn,ti.getKey=e=>void 0===e?["annualReport"]:["annualReport",e];let to=`
    query learningContextName($currentQuestionSlug: String!, $envId: String, $envType: String, $childFavoriteSlug: String, $version: String, $categorySlug: String) {
  learningContextV2(
    currentQuestionSlug: $currentQuestionSlug
    envId: $envId
    envType: $envType
    childFavoriteSlug: $childFavoriteSlug
    needQuestion: false
    version: $version
    categorySlug: $categorySlug
  ) {
    name
  }
}
    `,ts=(e,t,r,n)=>(0,R.I)({queryKey:["learningContextName",t],queryFn:N(e,to,t,n),...r});ts.document=to,ts.getKey=e=>["learningContextName",e];let ta=`
    query learningContext($currentQuestionSlug: String!, $categorySlug: String, $envId: String, $envType: String, $filters: QuestionListFilterInput, $favoriteFilters: FavoriteQuestionFilterInput, $version: String, $childFavoriteSlug: String, $filtersV2: QuestionFilterInput, $sortBy: QuestionSortByInput, $searchKeyword: String) {
  learningContextV2(
    currentQuestionSlug: $currentQuestionSlug
    categorySlug: $categorySlug
    envId: $envId
    envType: $envType
    filters: $filters
    favoriteFilters: $favoriteFilters
    version: $version
    childFavoriteSlug: $childFavoriteSlug
    filtersV2: $filtersV2
    sortBy: $sortBy
    searchKeyword: $searchKeyword
  ) {
    name
    backLink
    nextQuestion {
      difficulty
      title
      titleSlug
      questionFrontendId
    }
    previousQuestion {
      difficulty
      title
      titleSlug
      questionFrontendId
    }
  }
}
    `,tu=(e,t,r,n)=>(0,R.I)({queryKey:["learningContext",t],queryFn:N(e,ta,t,n),...r});tu.document=ta,tu.getKey=e=>["learningContext",e];let tl=`
    query premiumQuestion($titleSlug: String!) {
  question(titleSlug: $titleSlug) {
    isPaidOnly
  }
}
    `,tc=(e,t,r,n)=>(0,R.I)({queryKey:["premiumQuestion",t],queryFn:N(e,tl,t,n),...r});tc.document=tl,tc.getKey=e=>["premiumQuestion",e];let td=`
    mutation showedAnnualReport {
  updateAnnualReportViewStatus(viewed: true) {
    ok
    error
  }
}
    `,tp=(e,t,r)=>(0,L.n)({mutationKey:["showedAnnualReport"],mutationFn:t=>N(e,td,t,r)(),...t}),tm=`
    query tabsStatus($titleSlug: String!) {
  question(titleSlug: $titleSlug) {
    solutionNum
    discussionCount
  }
}
    `,tf=(e,t,r,n)=>(0,R.I)({queryKey:["tabsStatus",t],queryFn:N(e,tm,t,n),...r});tf.document=tm,tf.getKey=e=>["tabsStatus",e];let tg=`
    mutation aiJudgmentFeedback($category: AiFeedbackCategory!, $submissionId: ID!, $text: String) {
  aiJudgmentFeedback(
    category: $category
    submissionId: $submissionId
    text: $text
  ) {
    ok
    error
  }
}
    `,ty=(e,t,r)=>(0,L.n)({mutationKey:["aiJudgmentFeedback"],mutationFn:t=>N(e,tg,t,r)(),...t}),th=`
    mutation ApplyTimeTravelTicketV2($challengeQuestionId: ID!, $submissionId: ID) {
  applyTimeTravelTicketV2(
    challengeQuestionId: $challengeQuestionId
    submissionId: $submissionId
  ) {
    ok
    streakCounter {
      streakCount
      daysSkipped
      currentDayCompleted
      hasCompletedChallenge
    }
    error
  }
}
    `,tv=(e,t,r)=>(0,L.n)({mutationKey:["ApplyTimeTravelTicketV2"],mutationFn:t=>N(e,th,t,r)(),...t}),tb=`
    query codeWithMemory($questionId: Int!, $lang: String!, $memory: Int!, $skip: Int!) {
  codeWithMemory(
    questionId: $questionId
    lang: $lang
    memory: $memory
    skip: $skip
  ) {
    code
    hasPrevious
    hasNext
  }
}
    `,tS=(e,t,r,n)=>(0,R.I)({queryKey:["codeWithMemory",t],queryFn:N(e,tb,t,n),...r});tS.document=tb,tS.getKey=e=>["codeWithMemory",e];let tw=`
    query codeWithRuntime($questionId: Int!, $lang: String!, $runtime: Int!, $skip: Int!) {
  codeWithRuntime(
    questionId: $questionId
    lang: $lang
    runtime: $runtime
    skip: $skip
  ) {
    code
    hasPrevious
    hasNext
  }
}
    `,tI=(e,t,r,n)=>(0,R.I)({queryKey:["codeWithRuntime",t],queryFn:N(e,tw,t,n),...r});tI.document=tw,tI.getKey=e=>["codeWithRuntime",e];let t$=`
    query qdChallengeQuestion($titleSlug: String!) {
  question(titleSlug: $titleSlug) {
    challengeQuestionsV2 {
      id
      date
      incompleteChallengeCount
      streakCount
      type
      status
    }
  }
}
    `,tC=(e,t,r,n)=>(0,R.I)({queryKey:["qdChallengeQuestion",t],queryFn:N(e,t$,t,n),...r});tC.document=t$,tC.getKey=e=>["qdChallengeQuestion",e];let tk=`
    query usersForMention($topicId: Int!, $usernamePrefix: String!) {
  topicUsers(topicId: $topicId, prefix: $usernamePrefix) {
    username
    profile {
      realName
      userSlug
      userAvatar
    }
  }
}
    `,tA=(e,t,r,n)=>(0,R.I)({queryKey:["usersForMention",t],queryFn:N(e,tk,t,n),...r});tA.document=tk,tA.getKey=e=>["usersForMention",e];let tq=`
    query debuggerLanguageFeatures {
  debuggerLanguageFeatures {
    lang {
      name
    }
    supportsExpressions
    supportsDisablingBreakpoints
    supportsDebugging
  }
}
    `,tO=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["debuggerLanguageFeatures"]:["debuggerLanguageFeatures",t],queryFn:N(e,tq,t,n),...r});tO.document=tq,tO.getKey=e=>void 0===e?["debuggerLanguageFeatures"]:["debuggerLanguageFeatures",e];let tT=`
    query commonKeyword($slug: String!) {
  commonKeyword(slug: $slug) {
    title
    content
  }
}
    `,tP=(e,t,r,n)=>(0,R.I)({queryKey:["commonKeyword",t],queryFn:N(e,tT,t,n),...r});tP.document=tT,tP.getKey=e=>["commonKeyword",e];let tx=`
    query favoriteQuestionAcStatus($titleSlug: String!, $favoriteSlug: String!) {
  favoriteQuestionAcStatus(titleSlug: $titleSlug, favoriteSlug: $favoriteSlug)
}
    `,tE=(e,t,r,n)=>(0,R.I)({queryKey:["favoriteQuestionAcStatus",t],queryFn:N(e,tx,t,n),...r});tE.document=tx,tE.getKey=e=>["favoriteQuestionAcStatus",e];let tF=`
    mutation likeQuestion($titleSlug: String!, $isLike: Boolean!) {
  like(titleSlug: $titleSlug, isLike: $isLike) {
    ok
    error
    likeResult
  }
}
    `,tR=(e,t,r)=>(0,L.n)({mutationKey:["likeQuestion"],mutationFn:t=>N(e,tF,t,r)(),...t}),tL=`
    query questionCompanyStats($titleSlug: String!) {
  question(titleSlug: $titleSlug) {
    companyTagStats
  }
}
    `,tN=(e,t,r,n)=>(0,R.I)({queryKey:["questionCompanyStats",t],queryFn:N(e,tL,t,n),...r});tN.document=tL,tN.getKey=e=>["questionCompanyStats",e];let t_=`
    query questionDetailCompanyTags($titleSlug: String!) {
  question(titleSlug: $titleSlug) {
    companyTags {
      name
      slug
      imgUrl
    }
  }
}
    `,tD=(e,t,r,n)=>(0,R.I)({queryKey:["questionDetailCompanyTags",t],queryFn:N(e,t_,t,n),...r});tD.document=t_,tD.getKey=e=>["questionDetailCompanyTags",e];let tj=`
    query questionInterviewOptions {
  interviewed {
    companies {
      id
      name
      slug
    }
    popularCompanies {
      id
      name
      slug
    }
    timeOptions {
      id
      name
    }
    stageOptions {
      id
      name
    }
    positions {
      name
      slug
    }
    countries {
      id
      name
      slug
    }
  }
}
    `,tK=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["questionInterviewOptions"]:["questionInterviewOptions",t],queryFn:N(e,tj,t,n),...r});tK.document=tj,tK.getKey=e=>void 0===e?["questionInterviewOptions"]:["questionInterviewOptions",e];let tM=`
    mutation updateInterviewedStats($interviewedStats: InterviewedStatsInput!) {
  interviewedStatsPost(interviewedStats: $interviewedStats) {
    ok
    error
    interviewedStatsId
  }
}
    `,tU=(e,t,r)=>(0,L.n)({mutationKey:["updateInterviewedStats"],mutationFn:t=>N(e,tM,t,r)(),...t}),tV=`
    mutation submitQuestionSuggestion($checkedDictStr: String!, $comment: String, $questionId: Int!) {
  submitQuestionSuggestion(
    checkedDictStr: $checkedDictStr
    comment: $comment
    questionId: $questionId
  ) {
    msg
  }
}
    `,tQ=(e,t,r)=>(0,L.n)({mutationKey:["submitQuestionSuggestion"],mutationFn:t=>N(e,tV,t,r)(),...t}),tB=`
    query userFavorites {
  favoritesLists {
    allFavorites {
      idHash
      name
      isPublicFavorite
      questions {
        titleSlug
      }
    }
  }
}
    `,tG=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["userFavorites"]:["userFavorites",t],queryFn:N(e,tB,t,n),...r});tG.document=tB,tG.getKey=e=>void 0===e?["userFavorites"]:["userFavorites",e];let tz=`
    query discussionAllQuestions {
  allQuestions {
    questionFrontendId
    title
    titleSlug
  }
}
    `,tH=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["discussionAllQuestions"]:["discussionAllQuestions",t],queryFn:N(e,tz,t,n),...r});tH.document=tz,tH.getKey=e=>void 0===e?["discussionAllQuestions"]:["discussionAllQuestions",e];let tW=`
    query questionTopicAuthors($topicId: Int!) {
  topic(id: $topicId) {
    id
    authors {
      isDiscussAdmin
      isDiscussStaff
      isActive
      username
      profile {
        userAvatar
        reputation
      }
    }
  }
}
    `,tY=(e,t,r,n)=>(0,R.I)({queryKey:["questionTopicAuthors",t],queryFn:N(e,tW,t,n),...r});tY.document=tW,tY.getKey=e=>["questionTopicAuthors",e];let tJ=`
    mutation endDebuggerSession($sessionUuid: String!) {
  endDebuggerSession(sessionUuid: $sessionUuid) {
    session {
      isActive
    }
  }
}
    `,tX=(e,t,r)=>(0,L.n)({mutationKey:["endDebuggerSession"],mutationFn:t=>N(e,tJ,t,r)(),...t}),tZ=`
    query panelQuestionList($currentQuestionSlug: String!, $categorySlug: String, $envId: String, $envType: String, $filters: QuestionListFilterInput) {
  panelQuestionList(
    currentQuestionSlug: $currentQuestionSlug
    categorySlug: $categorySlug
    envId: $envId
    envType: $envType
    filters: $filters
  ) {
    hasViewPermission
    panelName
    finishedLength
    totalLength
    questions {
      difficulty
      id
      paidOnly
      questionFrontendId
      status
      title
      titleSlug
      score
      questionNumber
      topicTags {
        name
        slug
      }
    }
  }
}
    `,t0=(e,t,r,n)=>(0,R.I)({queryKey:["panelQuestionList",t],queryFn:N(e,tZ,t,n),...r});t0.document=tZ,t0.getKey=e=>["panelQuestionList",e];let t1=`
    query questionNote($titleSlug: String!) {
  question(titleSlug: $titleSlug) {
    questionId
    note
  }
}
    `,t2=(e,t,r,n)=>(0,R.I)({queryKey:["questionNote",t],queryFn:N(e,t1,t,n),...r});t2.document=t1,t2.getKey=e=>["questionNote",e];let t4=`
    query randomPanelQuestion($currentQuestionSlug: String!, $categorySlug: String, $envId: String, $envType: String, $filters: QuestionListFilterInput, $favoriteFilters: FavoriteQuestionFilterInput, $version: String, $childFavoriteSlug: String, $filtersV2: QuestionFilterInput, $sortBy: QuestionSortByInput, $searchKeyword: String) {
  randomPanelQuestion(
    currentQuestionSlug: $currentQuestionSlug
    categorySlug: $categorySlug
    envId: $envId
    envType: $envType
    filters: $filters
    favoriteFilters: $favoriteFilters
    version: $version
    childFavoriteSlug: $childFavoriteSlug
    filtersV2: $filtersV2
    sortBy: $sortBy
    searchKeyword: $searchKeyword
  )
}
    `,t3=(e,t,r,n)=>(0,R.I)({queryKey:["randomPanelQuestion",t],queryFn:N(e,t4,t,n),...r});t3.document=t4,t3.getKey=e=>["randomPanelQuestion",e];let t8=`
    mutation runDebuggerCommand($command: JSONString!, $sessionUuid: String!) {
  runDebuggerCommand(command: $command, sessionUuid: $sessionUuid) {
    taskId
    session {
      uuid
      isActive
    }
  }
}
    `,t5=(e,t,r)=>(0,L.n)({mutationKey:["runDebuggerCommand"],mutationFn:t=>N(e,t8,t,r)(),...t}),t6=`
    query socketToken {
  userStatus {
    socketToken
  }
}
    `,t7=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["socketToken"]:["socketToken",t],queryFn:N(e,t6,t,n),...r});t7.document=t6,t7.getKey=e=>void 0===e?["socketToken"]:["socketToken",e];let t9=`
    mutation startDebuggerSession($commands: [JSONString]!, $language: String!, $questionId: String!, $testcaseInput: String!, $typedCode: String!, $testMode: Boolean, $queueName: String) {
  startDebuggerSession(
    commands: $commands
    language: $language
    questionId: $questionId
    testcaseInput: $testcaseInput
    typedCode: $typedCode
    testMode: $testMode
    queueName: $queueName
  ) {
    session {
      uuid
      isActive
    }
    taskId
  }
}
    `,re=(e,t,r)=>(0,L.n)({mutationKey:["startDebuggerSession"],mutationFn:t=>N(e,t9,t,r)(),...t}),rt=`
    query studyPlanMedalPolling($submissionId: Int!) {
  studyPlanMedalPolling(submissionId: $submissionId) {
    keepPolling
    awards {
      medal {
        config {
          icon
          iconGif
          iconGifBackground
        }
      }
      badge {
        name
      }
    }
  }
}
    `,rr=(e,t,r,n)=>(0,R.I)({queryKey:["studyPlanMedalPolling",t],queryFn:N(e,rt,t,n),...r});rr.document=rt,rr.getKey=e=>["studyPlanMedalPolling",e];let rn=`
    query submissionCode($submissionId: Int!) {
  submissionDetails(submissionId: $submissionId) {
    code
  }
}
    `,ri=(e,t,r,n)=>(0,R.I)({queryKey:["submissionCode",t],queryFn:N(e,rn,t,n),...r});ri.document=rn,ri.getKey=e=>["submissionCode",e];let ro=`
    query submissionDetails($submissionId: Int!) {
  submissionDetails(submissionId: $submissionId) {
    runtime
    runtimeDisplay
    runtimePercentile
    runtimeDistribution
    memory
    memoryDisplay
    memoryPercentile
    memoryDistribution
    code
    timestamp
    statusCode
    aiJudgeMessage
    isCompiledLang
    aiRecheckSubmitted
    user {
      username
      profile {
        realName
        userAvatar
      }
    }
    lang {
      name
      verboseName
    }
    question {
      questionId
      titleSlug
      hasFrontendPreview
    }
    notes
    flagType
    topicTags {
      tagId
      slug
      name
    }
    runtimeError
    compileError
    lastTestcase
    codeOutput
    expectedOutput
    totalCorrect
    totalTestcases
    fullCodeOutput
    testDescriptions
    testBodies
    testInfo
    stdOutput
  }
}
    `,rs=(e,t,r,n)=>(0,R.I)({queryKey:["submissionDetails",t],queryFn:N(e,ro,t,n),...r});rs.document=ro,rs.getKey=e=>["submissionDetails",e];let ra=`
    query submissionList($offset: Int!, $limit: Int!, $lastKey: String, $questionSlug: String!, $lang: Int, $status: Int) {
  questionSubmissionList(
    offset: $offset
    limit: $limit
    lastKey: $lastKey
    questionSlug: $questionSlug
    lang: $lang
    status: $status
  ) {
    lastKey
    hasNext
    submissions {
      id
      title
      titleSlug
      status
      statusDisplay
      lang
      langName
      runtime
      timestamp
      url
      isPending
      memory
      hasNotes
      notes
      flagType
      frontendId
      topicTags {
        id
      }
    }
  }
}
    `,ru=(e,t,r,n)=>(0,R.I)({queryKey:["submissionList",t],queryFn:N(e,ra,t,n),...r});ru.document=ra,ru.getKey=e=>["submissionList",e];let rl=`
    query submissionTopicTags {
  questionTopicTags {
    edges {
      node {
        tagId
        name
        translatedName
      }
    }
  }
}
    `,rc=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["submissionTopicTags"]:["submissionTopicTags",t],queryFn:N(e,rl,t,n),...r});rc.document=rl,rc.getKey=e=>void 0===e?["submissionTopicTags"]:["submissionTopicTags",e];let rd=`
    query submitModalInfo($submissionId: ID!, $challengeQuestionId: ID) {
  validTimeTravelTicketCount
  dccSubmissionPollingV2(
    submissionId: $submissionId
    challengeQuestionId: $challengeQuestionId
  ) {
    keepPolling
    dccSubmissionInfo {
      showCompleteModal
      showTttModal
      discussLink
      dailyChallengeMedal {
        name
        shortName
        config {
          iconGif
        }
      }
      streakCounter {
        streakCount
        daysSkipped
        currentDayCompleted
        hasCompletedChallenge
      }
    }
  }
  showAnnualModalOnQd {
    name
    config {
      iconGif
    }
  }
}
    `,rp=(e,t,r,n)=>(0,R.I)({queryKey:["submitModalInfo",t],queryFn:N(e,rd,t,n),...r});rp.document=rd,rp.getKey=e=>["submitModalInfo",e];let rm=`
    query questionSatisfactionSurvey {
  questionSatisfactionSurvey {
    showSurvey
    surveyJson
    leetcoinAmount
  }
}
    `,rf=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["questionSatisfactionSurvey"]:["questionSatisfactionSurvey",t],queryFn:N(e,rm,t,n),...r});rf.document=rm,rf.getKey=e=>void 0===e?["questionSatisfactionSurvey"]:["questionSatisfactionSurvey",e];let rg=`
    query syncedCode($questionId: Int!, $lang: Int!) {
  syncedCode(questionId: $questionId, lang: $lang) {
    timestamp
    code
  }
}
    `,ry=(e,t,r,n)=>(0,R.I)({queryKey:["syncedCode",t],queryFn:N(e,rg,t,n),...r});ry.document=rg,ry.getKey=e=>["syncedCode",e];let rh=`
    mutation updateSyncedCode($code: String!, $lang: Int!, $questionId: Int!) {
  updateSyncedCode(code: $code, lang: $lang, questionId: $questionId) {
    ok
  }
}
    `,rv=(e,t,r)=>(0,L.n)({mutationKey:["updateSyncedCode"],mutationFn:t=>N(e,rh,t,r)(),...t}),rb=`
    mutation updateNote($titleSlug: String!, $content: String!) {
  updateNote(titleSlug: $titleSlug, content: $content) {
    ok
    error
    question {
      questionId
      note
    }
  }
}
    `,rS=(e,t,r)=>(0,L.n)({mutationKey:["updateNote"],mutationFn:t=>N(e,rb,t,r)(),...t}),rw=`
    mutation updateSubmissionNote($submissionId: ID!, $note: String, $tagIds: [Int], $flagType: SubmissionFlagTypeEnum) {
  updateSubmissionNote(
    submissionId: $submissionId
    note: $note
    tagIds: $tagIds
    flagType: $flagType
  ) {
    ok
    error
  }
}
    `,rI=(e,t,r)=>(0,L.n)({mutationKey:["updateSubmissionNote"],mutationFn:t=>N(e,rw,t,r)(),...t}),r$=`
    query StripeData {
  stripePublicKey
}
    `,rC=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["StripeData"]:["StripeData",t],queryFn:N(e,r$,t,n),...r});rC.document=r$,rC.getKey=e=>void 0===e?["StripeData"]:["StripeData",e];let rk=`
    query userBlockStatus($username: String!) {
  matchedUser(username: $username) {
    isBlocked
    isBlocker
  }
}
    `,rA=(e,t,r,n)=>(0,R.I)({queryKey:["userBlockStatus",t],queryFn:N(e,rk,t,n),...r});rA.document=rk,rA.getKey=e=>["userBlockStatus",e];let rq=`
    query globalFeature {
  feature {
    signUp
    socialProviders
    enableChannels
    enableSharedWorker
    enableRecaptchaV3
    enableCfTurnstile
    maxTimeTravelTicketCount
    loginGetRedirectEnabled
  }
  recaptchaKey
  recaptchaKeyV2
  cfTurnstileKey
  cfTurnstileAppearance
}
    `,rO=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["globalFeature"]:["globalFeature",t],queryFn:N(e,rq,t,n),...r});rO.document=rq,rO.getKey=e=>void 0===e?["globalFeature"]:["globalFeature",e];let rT=`
    mutation applyOrAcceptCodeBlock($accept: Boolean, $apply: Boolean, $acceptAll: Boolean, $messageId: ID!) {
  applyOrAcceptCodeBlock(
    accept: $accept
    apply: $apply
    acceptAll: $acceptAll
    messageId: $messageId
  ) {
    error
    ok
  }
}
    `,rP=(e,t,r)=>(0,L.n)({mutationKey:["applyOrAcceptCodeBlock"],mutationFn:t=>N(e,rT,t,r)(),...t}),rx=`
    mutation chatCompletion($data: ChatCompletionCommonInput!, $userPrompt: String!) {
  chatCompletion(data: $data, userPrompt: $userPrompt) {
    error
    ok
    rateLimited
    sessionId
    userMessageId
  }
}
    `,rE=(e,t,r)=>(0,L.n)({mutationKey:["chatCompletion"],mutationFn:t=>N(e,rx,t,r)(),...t}),rF=`
    mutation chatExecuteWorkflow($data: ChatCompletionCommonInput!, $workflowId: ID!) {
  chatExecuteWorkflow(data: $data, workflowId: $workflowId) {
    error
    ok
    rateLimited
    sessionId
    userMessageId
  }
}
    `,rR=(e,t,r)=>(0,L.n)({mutationKey:["chatExecuteWorkflow"],mutationFn:t=>N(e,rF,t,r)(),...t}),rL=`
    query chatModelRateLimited($chatModelId: ID!) {
  chatModelRateLimited(modelId: $chatModelId)
}
    `,rN=(e,t,r,n)=>(0,R.I)({queryKey:["chatModelRateLimited",t],queryFn:N(e,rL,t,n),...r});rN.document=rL,rN.getKey=e=>["chatModelRateLimited",e];let r_=`
    query chatSession($sessionId: ID!) {
  chatSession(sessionId: $sessionId) {
    updatedAt
    title
    status
    messages {
      accepted
      applied
      content
      displayTitle
      id
      liked
      parent
      role
      status
      thinkingContent
      createdAt
      updatedAt
      thinkingTime
      workflowId
      realTool
    }
    id
    currentMessageId
    createdAt
  }
}
    `,rD=(e,t,r,n)=>(0,R.I)({queryKey:["chatSession",t],queryFn:N(e,r_,t,n),...r});rD.document=r_,rD.getKey=e=>["chatSession",e];let rj=`
    query chatSessionsWithGroups($limit: Int, $questionSlug: String, $skip: Int) {
  chatSessionsWithGroups(limit: $limit, questionSlug: $questionSlug, skip: $skip) {
    groupName
    sessions {
      createdAt
      currentMessageId
      id
      linkedQuestionSlug
      status
      title
      updatedAt
    }
  }
}
    `,rK=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["chatSessionsWithGroups"]:["chatSessionsWithGroups",t],queryFn:N(e,rj,t,n),...r});rK.document=rj,rK.getKey=e=>void 0===e?["chatSessionsWithGroups"]:["chatSessionsWithGroups",e];let rM=`
    query chatSessions($limit: Int, $skip: Int) {
  chatSessions(limit: $limit, skip: $skip) {
    createdAt
    currentMessageId
    id
    status
    title
    updatedAt
  }
}
    `,rU=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["chatSessions"]:["chatSessions",t],queryFn:N(e,rM,t,n),...r});rU.document=rM,rU.getKey=e=>void 0===e?["chatSessions"]:["chatSessions",e];let rV=`
    query chatUserPremiumGroupUsage {
  chatUserPremiumGroupUsage {
    periodEndAt
    quota
    usage
  }
}
    `,rQ=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["chatUserPremiumGroupUsage"]:["chatUserPremiumGroupUsage",t],queryFn:N(e,rV,t,n),...r});rQ.document=rV,rQ.getKey=e=>void 0===e?["chatUserPremiumGroupUsage"]:["chatUserPremiumGroupUsage",e];let rB=`
    query chatWorkflows {
  chatWorkflows {
    id
    name
    requiredVariables
    where
    visible
    userGenerated
    prompt
  }
}
    `,rG=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["chatWorkflows"]:["chatWorkflows",t],queryFn:N(e,rB,t,n),...r});rG.document=rB,rG.getKey=e=>void 0===e?["chatWorkflows"]:["chatWorkflows",e];let rz=`
    mutation createCustomChatCommand($name: String!, $prompt: String!) {
  createCustomChatCommand(name: $name, prompt: $prompt) {
    error
    workflowId
    ok
  }
}
    `,rH=(e,t,r)=>(0,L.n)({mutationKey:["createCustomChatCommand"],mutationFn:t=>N(e,rz,t,r)(),...t}),rW=`
    mutation deleteChatSession($sessionId: ID!) {
  deleteChatSession(sessionId: $sessionId) {
    error
    ok
  }
}
    `,rY=(e,t,r)=>(0,L.n)({mutationKey:["deleteChatSession"],mutationFn:t=>N(e,rW,t,r)(),...t}),rJ=`
    mutation deleteCustomChatCommand($workflowId: ID!) {
  deleteCustomChatCommand(workflowId: $workflowId) {
    error
    ok
  }
}
    `,rX=(e,t,r)=>(0,L.n)({mutationKey:["deleteCustomChatCommand"],mutationFn:t=>N(e,rJ,t,r)(),...t}),rZ=`
    mutation editCustomChatCommand($workflowId: ID!, $name: String, $prompt: String) {
  editCustomChatCommand(workflowId: $workflowId, name: $name, prompt: $prompt) {
    error
    ok
  }
}
    `,r0=(e,t,r)=>(0,L.n)({mutationKey:["editCustomChatCommand"],mutationFn:t=>N(e,rZ,t,r)(),...t}),r1=`
    mutation likeChatMessage($like: Int!, $messageId: ID!) {
  likeChatMessage(like: $like, messageId: $messageId) {
    error
    ok
  }
}
    `,r2=(e,t,r)=>(0,L.n)({mutationKey:["likeChatMessage"],mutationFn:t=>N(e,r1,t,r)(),...t}),r4=`
    mutation regenerateAiResponse($data: ChatCompletionCommonInput!) {
  regenerateAiResponse(data: $data) {
    error
    ok
    rateLimited
    sessionId
  }
}
    `,r3=(e,t,r)=>(0,L.n)({mutationKey:["regenerateAiResponse"],mutationFn:t=>N(e,r4,t,r)(),...t}),r8=`
    mutation renameChatSessionTitle($sessionId: ID!, $sessionTitle: String!) {
  renameChatSessionTitle(sessionId: $sessionId, sessionTitle: $sessionTitle) {
    error
    ok
  }
}
    `,r5=(e,t,r)=>(0,L.n)({mutationKey:["renameChatSessionTitle"],mutationFn:t=>N(e,r8,t,r)(),...t}),r6=`
    mutation stopCompletion($sessionId: ID!) {
  stopCompletion(sessionId: $sessionId) {
    error
    ok
  }
}
    `,r7=(e,t,r)=>(0,L.n)({mutationKey:["stopCompletion"],mutationFn:t=>N(e,r6,t,r)(),...t}),r9=`
    mutation updateUserChatConfig($disabledModels: JSONString, $disabledWorkflows: JSONString, $rules: String) {
  updateUserChatConfig(
    disabledModels: $disabledModels
    rules: $rules
    disabledWorkflows: $disabledWorkflows
  ) {
    error
    ok
  }
}
    `,ne=(e,t,r)=>(0,L.n)({mutationKey:["updateUserChatConfig"],mutationFn:t=>N(e,r9,t,r)(),...t}),nt=`
    query userChatInfo {
  userChatInfo {
    rules
    models {
      enabled
      premiumModel
      model {
        companyName
        id
        credentialSchema
        info
        logoUrl
        name
        thinkingModel
        supportThinkingSwitch
        modelSeriesName
      }
    }
  }
}
    `,nr=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["userChatInfo"]:["userChatInfo",t],queryFn:N(e,nt,t,n),...r});nr.document=nt,nr.getKey=e=>void 0===e?["userChatInfo"]:["userChatInfo",e];let nn=`
    mutation verifyChatCredentials($credentials: JSONString!, $modelId: ID!) {
  verifyChatCredentials(credentials: $credentials, modelId: $modelId) {
    error
    ok
  }
}
    `,ni=(e,t,r)=>(0,L.n)({mutationKey:["verifyChatCredentials"],mutationFn:t=>N(e,nn,t,r)(),...t}),no=`
    mutation updateBtsNotification($enable: Boolean!) {
  btsEventNotification(enable: $enable) {
    ok
    error
  }
}
    `,ns=(e,t,r)=>(0,L.n)({mutationKey:["updateBtsNotification"],mutationFn:t=>N(e,no,t,r)(),...t}),na=`
    mutation btsReferralRegister($refer: String!) {
  btsReferralRegister(refer: $refer) {
    ok
    error
  }
}
    `,nu=(e,t,r)=>(0,L.n)({mutationKey:["btsReferralRegister"],mutationFn:t=>N(e,na,t,r)(),...t}),nl=`
    query btsReferral {
  btsReferral {
    link
    referredCount
  }
}
    `,nc=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["btsReferral"]:["btsReferral",t],queryFn:N(e,nl,t,n),...r});nc.document=nl,nc.getKey=e=>void 0===e?["btsReferral"]:["btsReferral",e];let nd=`
    query favoriteDetailV2ForCompany($favoriteSlug: String!) {
  favoriteDetailV2(favoriteSlug: $favoriteSlug) {
    coverUrl
    coverEmoji
    coverBackgroundColor
    description
    favoriteLockStatus
    creator {
      realName
      userAvatar
      userSlug
    }
    hasCurrentQuestion
    isPublicFavorite
    lastQuestionAddedAt
    name
    questionNumber
    slug
    isDefaultList
    collectCount
    companyVerified
    generateFromFavoriteSlug
    favoriteType
    lastModified: lastQuestionAddedAt
    industryDisplay
    scaleDisplay
    financingStageDisplay
    website
    companyLegalName
    languageTagSlug
    positionRoleTags {
      name
      nameTranslated
      slug
    }
    generatedFavoritesInfo {
      defaultFavoriteSlug
      categoriesToSlugs {
        categoryName
        favoriteSlug
        displayName
      }
    }
  }
}
    `,np=(e,t,r,n)=>(0,R.I)({queryKey:["favoriteDetailV2ForCompany",t],queryFn:N(e,nd,t,n),...r});np.document=nd,np.getKey=e=>["favoriteDetailV2ForCompany",e];let nm=`
    mutation unlockFavorite($favoriteSlug: String!) {
  unlockFavorite(favoriteSlug: $favoriteSlug) {
    ok
    error
    unlockQuestion {
      difficulty
      id
      paidOnly
      questionFrontendId
      status
      title
      titleSlug
      translatedTitle
      isInMyFavorites
      frequency
      topicTags {
        name
        nameTranslated
        slug
      }
    }
  }
}
    `,nf=(e,t,r)=>(0,L.n)({mutationKey:["unlockFavorite"],mutationFn:t=>N(e,nm,t,r)(),...t}),ng=`
    query contestAiSubmissionDetail($aiSubmissionId: ID!) {
  contestAiSubmissionDetail(aiSubmissionId: $aiSubmissionId) {
    id
    aiModel {
      id
      name
      logoUrl
      companyName
      info
    }
    memoryDistribution
    runtimeDistribution
    runtimePercentile
    memoryPercentile
    submissionDetails {
      id
      runtimeDistribution
      memoryDistribution
      runtime
      memory
      runtimeDisplay
      memoryDisplay
      code
      lang {
        name
        verboseName
      }
      question {
        questionId
        titleSlug
      }
      statusCode
      timestamp
      runtimePercentile
      memoryPercentile
      lastTestcase
      runtimeError
      compileError
      codeOutput
      expectedOutput
      flagType
      totalCorrect
      totalTestcases
      fullCodeOutput
      testDescriptions
      testBodies
      testInfo
      stdOutput
    }
  }
}
    `,ny=(e,t,r,n)=>(0,R.I)({queryKey:["contestAiSubmissionDetail",t],queryFn:N(e,ng,t,n),...r});ny.document=ng,ny.getKey=e=>["contestAiSubmissionDetail",e];let nh=`
    query contestDetailPage($contestSlug: String!) {
  contestDetailPage(contestSlug: $contestSlug) {
    startTime
    duration
    titleSlug
    title
    titleCn
    description
    descriptionCn
    descriptionStyle
    discussUrl
    cardImg
    cardImgApp
    isVirtual
    isRegistered
    isRegisteredTwice
    registerUserNum
  }
}
    `,nv=(e,t,r,n)=>(0,R.I)({queryKey:["contestDetailPage",t],queryFn:N(e,nh,t,n),...r});nv.document=nh,nv.getKey=e=>["contestDetailPage",e];let nb=`
    query contestLlmDetail($aiModelId: ID!, $contestSlug: String!) {
  contestLlmDetail(aiModelId: $aiModelId, contestSlug: $contestSlug) {
    aiModel {
      id
      name
      logoUrl
      companyName
      info
    }
    avgScore
    maxScore
    acRate
    avgTriedTimes
    acLanguages
    triedLanguages
    questionScores
    detailedStats
  }
}
    `,nS=(e,t,r,n)=>(0,R.I)({queryKey:["contestLlmDetail",t],queryFn:N(e,nb,t,n),...r});nS.document=nb,nS.getKey=e=>["contestLlmDetail",e];let nw=`
    query contestLlmRanking($contestSlug: String!) {
  contestLlmRanking(contestSlug: $contestSlug) {
    acLanguages
    aiModel {
      companyName
      logoUrl
      name
      info
      id
    }
    avgScore
    maxScore
    questionScores
    triedLanguages
  }
}
    `,nI=(e,t,r,n)=>(0,R.I)({queryKey:["contestLlmRanking",t],queryFn:N(e,nw,t,n),...r});nI.document=nw,nI.getKey=e=>["contestLlmRanking",e];let n$=`
    query contestQuestionList($contestSlug: String!) {
  contestQuestionList(contestSlug: $contestSlug) {
    isAc
    credit
    title
    titleSlug
    titleCn
    questionId
    isContest
  }
}
    `,nC=(e,t,r,n)=>(0,R.I)({queryKey:["contestQuestionList",t],queryFn:N(e,n$,t,n),...r});nC.document=n$,nC.getKey=e=>["contestQuestionList",e];let nk=`
    mutation contestRegister($contestSlug: String!) {
  contestRegister(contestSlug: $contestSlug) {
    ok
    lastContestSlug
    lastQuestionSlug
    isPhoneVerified
  }
}
    `,nA=(e,t,r)=>(0,L.n)({mutationKey:["contestRegister"],mutationFn:t=>N(e,nk,t,r)(),...t}),nq=`
    query contestRootBanners {
  contestRootBanners {
    title
    banner
    aspectRatioType
    backgroundColor
    targetUrl
  }
}
    `,nO=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["contestRootBanners"]:["contestRootBanners",t],queryFn:N(e,nq,t,n),...r});nO.document=nq,nO.getKey=e=>void 0===e?["contestRootBanners"]:["contestRootBanners",e];let nT=`
    query contestSurveyAnswer($contestSlug: String!) {
  contestSurveyAnswer(contestSlug: $contestSlug) {
    surveyId
    answer
    answerForCsv
  }
}
    `,nP=(e,t,r,n)=>(0,R.I)({queryKey:["contestSurveyAnswer",t],queryFn:N(e,nT,t,n),...r});nP.document=nT,nP.getKey=e=>["contestSurveyAnswer",e];let nx=`
    query contestTopRankings($contestSlug: String!) {
  contestTopRankings(contestSlug: $contestSlug) {
    username
    avatarUrl
  }
}
    `,nE=(e,t,r,n)=>(0,R.I)({queryKey:["contestTopRankings",t],queryFn:N(e,nx,t,n),...r});nE.document=nx,nE.getKey=e=>["contestTopRankings",e];let nF=`
    mutation contestUnregister($contestSlug: String!) {
  contestUnregister(contestSlug: $contestSlug) {
    ok
  }
}
    `,nR=(e,t,r)=>(0,L.n)({mutationKey:["contestUnregister"],mutationFn:t=>N(e,nF,t,r)(),...t}),nL=`
    query contestV2HistoryContests($skip: Int!, $limit: Int!) {
  contestV2HistoryContests(skip: $skip, limit: $limit) {
    totalNum
    contests {
      titleSlug
      title
      titleCn
      startTime
      duration
      cardImg
      cardImgApp
      companyWatermark
      solved
      totalQuestions
    }
  }
}
    `,nN=(e,t,r,n)=>(0,R.I)({queryKey:["contestV2HistoryContests",t],queryFn:N(e,nL,t,n),...r});nN.document=nL,nN.getKey=e=>["contestV2HistoryContests",e];let n_=`
    query contestV2MyContests($skip: Int!, $limit: Int!, $isVirtual: Boolean) {
  contestV2MyContests(skip: $skip, limit: $limit, isVirtual: $isVirtual) {
    totalNum
    contests {
      titleSlug
      title
      titleCn
      startTime
      duration
      cardImg
      cardImgApp
      companyWatermark
      finishTime
      solved
      ranking
      totalQuestions
      totalParticipants
    }
  }
}
    `,nD=(e,t,r,n)=>(0,R.I)({queryKey:["contestV2MyContests",t],queryFn:N(e,n_,t,n),...r});nD.document=n_,nD.getKey=e=>["contestV2MyContests",e];let nj=`
    query contestV2OngoingVirtualContest {
  contestV2OngoingVirtualContest {
    contest {
      titleSlug
      title
    }
    startTime
    finishTime
    score
  }
}
    `,nK=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["contestV2OngoingVirtualContest"]:["contestV2OngoingVirtualContest",t],queryFn:N(e,nj,t,n),...r});nK.document=nj,nK.getKey=e=>void 0===e?["contestV2OngoingVirtualContest"]:["contestV2OngoingVirtualContest",e];let nM=`
    query contestV2PastContest {
  contestV2PastLlmContest {
    titleSlug
    title
    titleCn
    startTime
    duration
    cardImg
    cardImgApp
  }
}
    `,nU=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["contestV2PastContest"]:["contestV2PastContest",t],queryFn:N(e,nM,t,n),...r});nU.document=nM,nU.getKey=e=>void 0===e?["contestV2PastContest"]:["contestV2PastContest",e];let nV=`
    query contestV2RandomContest {
  contestV2RandomContest {
    titleSlug
    title
    titleCn
    startTime
    duration
  }
}
    `,nQ=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["contestV2RandomContest"]:["contestV2RandomContest",t],queryFn:N(e,nV,t,n),...r});nQ.document=nV,nQ.getKey=e=>void 0===e?["contestV2RandomContest"]:["contestV2RandomContest",e];let nB=`
    query contestV2TopGlobalRankings {
  contestV2TopGlobalRankings {
    userProfile {
      realName
      userSlug
      avatarUrl
      countryCode
    }
    currentRating
    currentGlobalRanking
    attendedContestCount
    dataRegion
    medal {
      name
      icon
    }
  }
}
    `,nG=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["contestV2TopGlobalRankings"]:["contestV2TopGlobalRankings",t],queryFn:N(e,nB,t,n),...r});nG.document=nB,nG.getKey=e=>void 0===e?["contestV2TopGlobalRankings"]:["contestV2TopGlobalRankings",e];let nz=`
    query contestV2UpcomingContests {
  contestV2UpcomingContests {
    titleSlug
    title
    titleCn
    startTime
    duration
    cardImg
    cardImgApp
  }
}
    `,nH=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["contestV2UpcomingContests"]:["contestV2UpcomingContests",t],queryFn:N(e,nz,t,n),...r});nH.document=nz,nH.getKey=e=>void 0===e?["contestV2UpcomingContests"]:["contestV2UpcomingContests",e];let nW=`
    query EnableLlmRanking {
  enableLlmRanking
}
    `,nY=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["EnableLlmRanking"]:["EnableLlmRanking",t],queryFn:N(e,nW,t,n),...r});nY.document=nW,nY.getKey=e=>void 0===e?["EnableLlmRanking"]:["EnableLlmRanking",e];let nJ=`
    query EnableRankingReplay {
  enableRankingReplay
}
    `,nX=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["EnableRankingReplay"]:["EnableRankingReplay",t],queryFn:N(e,nJ,t,n),...r});nX.document=nJ,nX.getKey=e=>void 0===e?["EnableRankingReplay"]:["EnableRankingReplay",e];let nZ=`
    query featuredContests {
  featuredContests {
    title
    titleSlug
    startTime
    cardImg
    duration
  }
}
    `,n0=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["featuredContests"]:["featuredContests",t],queryFn:N(e,nZ,t,n),...r});n0.document=nZ,n0.getKey=e=>void 0===e?["featuredContests"]:["featuredContests",e];let n1=`
    query globalRankingPaginated($page: Int) {
  globalRanking(page: $page) {
    totalUsers
    userPerPage
    totalPages
    rankingNodes {
      ranking
      currentRating
      currentGlobalRanking
      dataRegion
      user {
        username
        nameColor
        activeBadge {
          displayName
          icon
        }
        profile {
          userSlug
          userAvatar
          countryCode
          countryName
          realName
        }
      }
    }
  }
}
    `,n2=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["globalRankingPaginated"]:["globalRankingPaginated",t],queryFn:N(e,n1,t,n),...r});n2.document=n1,n2.getKey=e=>void 0===e?["globalRankingPaginated"]:["globalRankingPaginated",e];let n4=`
    query userRankings {
  globalRanking {
    page
    rankingNodes {
      currentRating
      currentGlobalRanking
      ranking
      dataRegion
      user {
        username
        nameColor
        profile {
          userSlug
          userAvatar
          countryCode
          countryName
          realName
        }
        activeBadge {
          displayName
          icon
        }
        contestBadge {
          displayName
          icon
        }
      }
    }
  }
}
    `,n3=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["userRankings"]:["userRankings",t],queryFn:N(e,n4,t,n),...r});n3.document=n4,n3.getKey=e=>void 0===e?["userRankings"]:["userRankings",e];let n8=`
    query managementAllContests($cData: managementAllContestsInput!) {
  managementAllContests(data: $cData) {
    id
    startTime
    duration
    titleSlug
    title
    titleCn
    cardImg
    cardImgApp
    status
    stage
    isPrivate
    ranking
    sponsor
    registerUserNum
    submitUserNum
  }
}
    `,n5=(e,t,r,n)=>(0,R.I)({queryKey:["managementAllContests",t],queryFn:N(e,n8,t,n),...r});n5.document=n8,n5.getKey=e=>["managementAllContests",e];let n6=`
    query managementCompanyTags($data: ManagementCompanyTagsInput!) {
  managementCompanyTags(data: $data) {
    totalCount
    tags {
      tagId
      slug
      imgUrl
      name
    }
  }
}
    `,n7=(e,t,r,n)=>(0,R.I)({queryKey:["managementCompanyTags",t],queryFn:N(e,n6,t,n),...r});n7.document=n6,n7.getKey=e=>["managementCompanyTags",e];let n9=`
    query managementContest($contestId: Int!) {
  managementContest(contestId: $contestId) {
    id
    startTime
    duration
    titleSlug
    title
    titleCn
    cardImg
    cardImgApp
    status
    stage
    isPrivate
    ranking
    sponsor
    descriptionStyle
    description
    descriptionCn
    sponsorId
    isLightCardFontColor
    surveyId
    surveyTitle
  }
}
    `,ie=(e,t,r,n)=>(0,R.I)({queryKey:["managementContest",t],queryFn:N(e,n9,t,n),...r});ie.document=n9,ie.getKey=e=>["managementContest",e];let it=`
    query myContests($pageNo: Int, $numPerPage: Int) {
  myContests(pageNo: $pageNo, numPerPage: $numPerPage) {
    pageNum
    numPerPage
    totalNum
    currentPage
    data {
      contest {
        title
        titleSlug
        unrated
        rankingUpdated
        startTime
      }
      penaltyCount
      problemsSolved
      totalProblems
      afterContestRating
      ratingDiff
      ranking
      totalParticipants
      finishTimeInSeconds
    }
  }
}
    `,ir=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["myContests"]:["myContests",t],queryFn:N(e,it,t,n),...r});ir.document=it,ir.getKey=e=>void 0===e?["myContests"]:["myContests",e];let ii=`
    query myGlobalRank {
  globalRanking {
    myRank {
      ranking
      currentGlobalRanking
      currentRating
      dataRegion
      user {
        nameColor
        profile {
          userSlug
          userAvatar
          countryCode
          countryName
          realName
        }
        activeBadge {
          displayName
          icon
        }
      }
    }
  }
}
    `,io=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["myGlobalRank"]:["myGlobalRank",t],queryFn:N(e,ii,t,n),...r});io.document=ii,io.getKey=e=>void 0===e?["myGlobalRank"]:["myGlobalRank",e];let is=`
    query myVirtualContests($pageNo: Int, $numPerPage: Int) {
  allVirtualContestScoresPagified(pageNo: $pageNo, numPerPage: $numPerPage) {
    pageNum
    numPerPage
    totalNum
    currentPage
    data {
      contest {
        title
        titleSlug
        originStartTime
      }
      startTime
      score
      totalScore
      finishTime
      totalAcQuestions
      totalQuestions
      ranking
      totalUsers
    }
  }
}
    `,ia=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["myVirtualContests"]:["myVirtualContests",t],queryFn:N(e,is,t,n),...r});ia.document=is,ia.getKey=e=>void 0===e?["myVirtualContests"]:["myVirtualContests",e];let iu=`
    query ongoingVirtualContest {
  ongoingVirtualContest {
    titleSlug
  }
}
    `,il=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["ongoingVirtualContest"]:["ongoingVirtualContest",t],queryFn:N(e,iu,t,n),...r});il.document=iu,il.getKey=e=>void 0===e?["ongoingVirtualContest"]:["ongoingVirtualContest",e];let ic=`
    query pastContests($pageNo: Int, $numPerPage: Int) {
  pastContests(pageNo: $pageNo, numPerPage: $numPerPage) {
    pageNum
    currentPage
    totalNum
    numPerPage
    data {
      title
      titleSlug
      startTime
      originStartTime
      cardImg
      sponsors {
        name
        lightLogo
        darkLogo
      }
    }
  }
}
    `,id=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["pastContests"]:["pastContests",t],queryFn:N(e,ic,t,n),...r});id.document=ic,id.getKey=e=>void 0===e?["pastContests"]:["pastContests",e];let ip=`
    query rankingUserDetails {
  user {
    username
    isCurrentUserVerified
    isCurrentUserPremium
    profile {
      realName
    }
  }
}
    `,im=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["rankingUserDetails"]:["rankingUserDetails",t],queryFn:N(e,ip,t,n),...r});im.document=ip,im.getKey=e=>void 0===e?["rankingUserDetails"]:["rankingUserDetails",e];let ig=`
    query topTwoContests {
  topTwoContests {
    title
    titleSlug
    startTime
    cardImg
    duration
  }
}
    `,iy=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["topTwoContests"]:["topTwoContests",t],queryFn:N(e,ig,t,n),...r});iy.document=ig,iy.getKey=e=>void 0===e?["topTwoContests"]:["topTwoContests",e];let ih=`
    mutation virtualContestRegister($contestSlug: String!) {
  virtualContestRegister(contestSlug: $contestSlug) {
    ok
    ongoingContestSlug
  }
}
    `,iv=(e,t,r)=>(0,L.n)({mutationKey:["virtualContestRegister"],mutationFn:t=>N(e,ih,t,r)(),...t}),ib=`
    mutation virtualContestUnregister($contestSlug: String!) {
  virtualContestUnregister(contestSlug: $contestSlug) {
    ok
  }
}
    `,iS=(e,t,r)=>(0,L.n)({mutationKey:["virtualContestUnregister"],mutationFn:t=>N(e,ib,t,r)(),...t}),iw=`
    mutation cancelDeleteAccount {
  cancelDeleteAccount {
    ok
  }
}
    `,iI=(e,t,r)=>(0,L.n)({mutationKey:["cancelDeleteAccount"],mutationFn:t=>N(e,iw,t,r)(),...t}),i$=`
    mutation deleteAccountV2($data: DeleteAccountInputV2!) {
  deleteAccountV2(data: $data) {
    ok
  }
}
    `,iC=(e,t,r)=>(0,L.n)({mutationKey:["deleteAccountV2"],mutationFn:t=>N(e,i$,t,r)(),...t}),ik=`
    query userAccountFrozenInfo {
  userAccountFrozenInfo {
    userFrozenStatus
    notEligibleToDeleteAccountReasons
    planDeleteDate
  }
}
    `,iA=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["userAccountFrozenInfo"]:["userAccountFrozenInfo",t],queryFn:N(e,ik,t,n),...r});iA.document=ik,iA.getKey=e=>void 0===e?["userAccountFrozenInfo"]:["userAccountFrozenInfo",e];let iq=`
    query userHasPassword {
  user {
    hasUsablePassword
  }
}
    `,iO=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["userHasPassword"]:["userHasPassword",t],queryFn:N(e,iq,t,n),...r});iO.document=iq,iO.getKey=e=>void 0===e?["userHasPassword"]:["userHasPassword",e];let iT=`
    query userIsFrozen {
  userIsFrozen
}
    `,iP=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["userIsFrozen"]:["userIsFrozen",t],queryFn:N(e,iT,t,n),...r});iP.document=iT,iP.getKey=e=>void 0===e?["userIsFrozen"]:["userIsFrozen",e];let ix=`
    mutation addDiscussPostReaction($articleId: ID!, $reactionType: ReactionTypeEnum!) {
  ugcArticleAddReaction(articleId: $articleId, reactionType: $reactionType) {
    ok
  }
}
    `,iE=(e,t,r)=>(0,L.n)({mutationKey:["addDiscussPostReaction"],mutationFn:t=>N(e,ix,t,r)(),...t}),iF=`
    mutation deleteDiscussPost($uuid: ID!) {
  ugcArticleDeleteArticle(articleId: $uuid) {
    ok
  }
}
    `,iR=(e,t,r)=>(0,L.n)({mutationKey:["deleteDiscussPost"],mutationFn:t=>N(e,iF,t,r)(),...t}),iL=`
    query discussCompanyTopics {
  ugcArticleDiscussionCompanyFilterTags {
    id
    name
    slug
  }
}
    `,iN=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["discussCompanyTopics"]:["discussCompanyTopics",t],queryFn:N(e,iL,t,n),...r});iN.document=iL,iN.getKey=e=>void 0===e?["discussCompanyTopics"]:["discussCompanyTopics",e];let i_=`
    query discussExploreItems {
  ugcArticleDiscussionHotTags {
    id
    name
    slug
    discussions {
      topicId
      slug
      title
    }
    authors {
      userAvatar
      userSlug
    }
  }
}
    `,iD=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["discussExploreItems"]:["discussExploreItems",t],queryFn:N(e,i_,t,n),...r});iD.document=i_,iD.getKey=e=>void 0===e?["discussExploreItems"]:["discussExploreItems",e];let ij=`
    query discussFollowedTopics {
  ugcArticleFollowedDiscussionTags {
    id
    name
    slug
  }
}
    `,iK=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["discussFollowedTopics"]:["discussFollowedTopics",t],queryFn:N(e,ij,t,n),...r});iK.document=ij,iK.getKey=e=>void 0===e?["discussFollowedTopics"]:["discussFollowedTopics",e];let iM=`
    query discussPostDetail($topicId: ID!) {
  ugcArticleDiscussionArticle(topicId: $topicId) {
    ipRegion
    uuid
    title
    slug
    summary
    content
    isSlate
    author {
      realName
      userAvatar
      userSlug
      userName
      nameColor
      certificationLevel
      activeBadge {
        icon
        displayName
      }
    }
    isOwner
    isAnonymous
    isSerialized
    isAuthorArticleReviewer
    isBlockComments
    scoreInfo {
      scoreCoefficient
    }
    articleType
    thumbnail
    createdAt
    updatedAt
    status
    isLeetcode
    canSee
    canEdit
    isMyFavorite
    myReactionType
    topicId
    hitCount
    reactions {
      count
      reactionType
    }
    tags {
      name
      slug
      tagType
    }
    topic {
      id
      topLevelCommentCount
    }
  }
}
    `,iU=(e,t,r,n)=>(0,R.I)({queryKey:["discussPostDetail",t],queryFn:N(e,iM,t,n),...r});iU.document=iM,iU.getKey=e=>["discussPostDetail",e];let iV=`
    query discussPostItems($orderBy: ArticleOrderByEnum, $keywords: [String]!, $tagSlugs: [String!], $skip: Int, $first: Int) {
  ugcArticleDiscussionArticles(
    orderBy: $orderBy
    keywords: $keywords
    tagSlugs: $tagSlugs
    skip: $skip
    first: $first
  ) {
    totalNum
    pageInfo {
      hasNextPage
    }
    edges {
      node {
        ipRegion
        uuid
        title
        slug
        summary
        author {
          realName
          userAvatar
          userSlug
          userName
          nameColor
          certificationLevel
          activeBadge {
            icon
            displayName
          }
        }
        isOwner
        isAnonymous
        isSerialized
        scoreInfo {
          scoreCoefficient
        }
        articleType
        thumbnail
        createdAt
        updatedAt
        status
        isLeetcode
        canSee
        canEdit
        isMyFavorite
        myReactionType
        topicId
        hitCount
        reactions {
          count
          reactionType
        }
        tags {
          name
          slug
          tagType
        }
        topic {
          id
          topLevelCommentCount
        }
      }
    }
  }
}
    `,iQ=(e,t,r,n)=>(0,R.I)({queryKey:["discussPostItems",t],queryFn:N(e,iV,t,n),...r});iQ.document=iV,iQ.getKey=e=>["discussPostItems",e];let iB=`
    query discussSearchTopics($keyword: String!, $skip: Int, $first: Int) {
  ugcArticleSearchTags(keyword: $keyword, skip: $skip, first: $first) {
    edges {
      node {
        id
        name
        slug
      }
    }
    pageInfo {
      hasNextPage
    }
  }
}
    `,iG=(e,t,r,n)=>(0,R.I)({queryKey:["discussSearchTopics",t],queryFn:N(e,iB,t,n),...r});iG.document=iB,iG.getKey=e=>["discussSearchTopics",e];let iz=`
    query discussTopicDetail($slug: String!) {
  ugcArticleDiscussionTag(slug: $slug) {
    id
    name
    slug
    isFollowed
    isCompany
    favorite {
      slug
      name
      questionNumber
      coverUrl
      coverEmoji
      coverBackgroundColor
      isMyCollected
    }
  }
}
    `,iH=(e,t,r,n)=>(0,R.I)({queryKey:["discussTopicDetail",t],queryFn:N(e,iz,t,n),...r});iH.document=iz,iH.getKey=e=>["discussTopicDetail",e];let iW=`
    mutation followDiscussTopic($tagId: Int!, $isFollow: Boolean!) {
  ugcArticleFollowTag(tagId: $tagId, isFollow: $isFollow) {
    ok
  }
}
    `,iY=(e,t,r)=>(0,L.n)({mutationKey:["followDiscussTopic"],mutationFn:t=>N(e,iW,t,r)(),...t}),iJ=`
    mutation removeDiscussPostReaction($articleId: ID!) {
  ugcArticleRemoveReaction(articleId: $articleId) {
    ok
  }
}
    `,iX=(e,t,r)=>(0,L.n)({mutationKey:["removeDiscussPostReaction"],mutationFn:t=>N(e,iJ,t,r)(),...t}),iZ=`
    mutation setDiscussPostStatus($articleId: ID!, $status: ArticleStatusEnum!) {
  ugcArticleEditStatus(articleId: $articleId, status: $status) {
    ok
  }
}
    `,i0=(e,t,r)=>(0,L.n)({mutationKey:["setDiscussPostStatus"],mutationFn:t=>N(e,iZ,t,r)(),...t}),i1=`
    mutation setOfficialDiscussPost($uuid: ID!, $isLeetcode: Boolean!) {
  ugcArticleSetLeetcode(articleId: $uuid, isLeetcode: $isLeetcode) {
    ok
  }
}
    `,i2=(e,t,r)=>(0,L.n)({mutationKey:["setOfficialDiscussPost"],mutationFn:t=>N(e,i1,t,r)(),...t}),i4=`
    mutation updateFollowedDiscussTopics($tagIds: [Int]!) {
  ugcArticleUpdateFollowedTags(tagIds: $tagIds) {
    ok
  }
}
    `,i3=(e,t,r)=>(0,L.n)({mutationKey:["updateFollowedDiscussTopics"],mutationFn:t=>N(e,i4,t,r)(),...t}),i8=`
    mutation optInOrOutOfPremiumFeature($featureId: Int!, $optIn: Boolean!) {
  optInOrOutOfPremiumFeature(featureId: $featureId, optIn: $optIn) {
    success
    error
  }
}
    `,i5=(e,t,r)=>(0,L.n)({mutationKey:["optInOrOutOfPremiumFeature"],mutationFn:t=>N(e,i8,t,r)(),...t}),i6=`
    query premiumBetaFeatures {
  premiumBetaFeatures {
    id
    featureId
    title
    description
    imageUrl
    order
    startsAt
    endsAt
    hasAccess
    optedIn
    feedbackUrl
    featureUrl
    imageHeight
  }
}
    `,i7=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["premiumBetaFeatures"]:["premiumBetaFeatures",t],queryFn:N(e,i6,t,n),...r});i7.document=i6,i7.getKey=e=>void 0===e?["premiumBetaFeatures"]:["premiumBetaFeatures",e];let i9=`
    mutation collectContestEasterEgg {
  collectContestEasterEgg {
    ok
  }
}
    `,oe=(e,t,r)=>(0,L.n)({mutationKey:["collectContestEasterEgg"],mutationFn:t=>N(e,i9,t,r)(),...t}),ot=`
    query easterEgg {
  isEasterEggCollected
}
    `,or=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["easterEgg"]:["easterEgg",t],queryFn:N(e,ot,t,n),...r});or.document=ot,or.getKey=e=>void 0===e?["easterEgg"]:["easterEgg",e];let on=`
    query companies($search: String!) {
  companies(search: $search) {
    id
    name
  }
}
    `,oi=(e,t,r,n)=>(0,R.I)({queryKey:["companies",t],queryFn:N(e,on,t,n),...r});oi.document=on,oi.getKey=e=>["companies",e];let oo=`
    query locations($search: String!) {
  locations(search: $search) {
    id
    name
  }
}
    `,os=(e,t,r,n)=>(0,R.I)({queryKey:["locations",t],queryFn:N(e,oo,t,n),...r});os.document=oo,os.getKey=e=>["locations",e];let oa=`
    query schools($search: String!) {
  schools(search: $search) {
    id
    name
  }
}
    `,ou=(e,t,r,n)=>(0,R.I)({queryKey:["schools",t],queryFn:N(e,oa,t,n),...r});ou.document=oa,ou.getKey=e=>["schools",e];let ol=`
    query skillTags($search: String!) {
  skillTags(search: $search) {
    name
  }
}
    `,oc=(e,t,r,n)=>(0,R.I)({queryKey:["skillTags",t],queryFn:N(e,ol,t,n),...r});oc.document=ol,oc.getKey=e=>["skillTags",e];let od=`
    mutation updateUserProfile($realName: String!, $birthday: String, $locationId: String, $locationName: String, $aboutMe: String, $website: String, $school: String, $company: String, $jobTitle: String, $skillTags: [String], $githubUrl: String, $linkedinUrl: String) {
  updateProfileV3(
    realName: $realName
    birthday: $birthday
    locationId: $locationId
    locationName: $locationName
    aboutMe: $aboutMe
    website: $website
    school: $school
    company: $company
    jobTitle: $jobTitle
    skillTags: $skillTags
    githubUrl: $githubUrl
    linkedinUrl: $linkedinUrl
  ) {
    ok
    errors
  }
}
    `,op=(e,t,r)=>(0,L.n)({mutationKey:["updateUserProfile"],mutationFn:t=>N(e,od,t,r)(),...t}),om=`
    mutation updateUsername($username: String!) {
  updateUsername(username: $username) {
    ok
    error
    username
    warning
  }
}
    `,of=(e,t,r)=>(0,L.n)({mutationKey:["updateUsername"],mutationFn:t=>N(e,om,t,r)(),...t}),og=`
    query userProfile {
  user {
    profile {
      userAvatar
      realName
      birthday
      location
      aboutMe
      websites
      school
      company
      jobTitle
      skillTags
      rewardStats
    }
    githubUrl
    linkedinUrl
  }
}
    `,oy=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["userProfile"]:["userProfile",t],queryFn:N(e,og,t,n),...r});oy.document=og,oy.getKey=e=>void 0===e?["userProfile"]:["userProfile",e];let oh=`
    query exploreFeature {
  feature {
    subscription
    maxTimeTravelTicketCount
  }
}
    `,ov=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["exploreFeature"]:["exploreFeature",t],queryFn:N(e,oh,t,n),...r});ov.document=oh,ov.getKey=e=>void 0===e?["exploreFeature"]:["exploreFeature",e];let ob=`
    query GetCategories($categorySlug: String, $num: Int) {
  categories(slug: $categorySlug) {
    id
    title
    slug
    cards(num: $num) {
      ...CardDetailFragment
    }
  }
  mostRecentCard {
    ...CardDetailFragment
    progress
  }
  allProgress
}
    ${ef}`,oS=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["GetCategories"]:["GetCategories",t],queryFn:N(e,ob,t,n),...r});oS.document=ob,oS.getKey=e=>void 0===e?["GetCategories"]:["GetCategories",e];let ow=`
    query GetFavorites {
  favoriteCards {
    ...CardDetailFragment
    progress
  }
  isCurrentUserAuthenticated
}
    ${ef}`,oI=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["GetFavorites"]:["GetFavorites",t],queryFn:N(e,ow,t,n),...r});oI.document=ow,oI.getKey=e=>void 0===e?["GetFavorites"]:["GetFavorites",e];let o$=`
    query GetHistory {
  historyCards {
    ...CardDetailFragment
    progress
  }
  isCurrentUserAuthenticated
}
    ${ef}`,oC=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["GetHistory"]:["GetHistory",t],queryFn:N(e,o$,t,n),...r});oC.document=o$,oC.getKey=e=>void 0===e?["GetHistory"]:["GetHistory",e];let ok=`
    query helpCenterCategories($groupId: Int!) {
  helpCenterCategorys(groupId: $groupId) {
    id
    name
    description
    articles {
      topicId
      title
      slug
    }
  }
}
    `,oA=(e,t,r,n)=>(0,R.I)({queryKey:["helpCenterCategories",t],queryFn:N(e,ok,t,n),...r});oA.document=ok,oA.getKey=e=>["helpCenterCategories",e];let oq=`
    query helpCenterGroups($isEnterprise: Boolean!) {
  helpCenterGroups(isEnterprise: $isEnterprise) {
    id
    name
    description
  }
}
    `,oO=(e,t,r,n)=>(0,R.I)({queryKey:["helpCenterGroups",t],queryFn:N(e,oq,t,n),...r});oO.document=oq,oO.getKey=e=>["helpCenterGroups",e];let oT=`
    query getDidCompleteUpc {
  didCompleteUpc
  user {
    joinedTimestamp
  }
}
    `,oP=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["getDidCompleteUpc"]:["getDidCompleteUpc",t],queryFn:N(e,oT,t,n),...r});oP.document=oT,oP.getKey=e=>void 0===e?["getDidCompleteUpc"]:["getDidCompleteUpc",e];let ox=`
    query trendingDiscuss($first: Int!) {
  cachedTrendingCategoryTopics(first: $first) {
    id
    title
    post {
      id
      creationDate
      contentPreview
      author {
        username
        isActive
        profile {
          userAvatar
        }
      }
    }
  }
}
    `,oE=(e,t,r,n)=>(0,R.I)({queryKey:["trendingDiscuss",t],queryFn:N(e,ox,t,n),...r});oE.document=ox,oE.getKey=e=>["trendingDiscuss",e];let oF=`
    query upcomingContests {
  upcomingContests {
    title
    titleSlug
    startTime
    duration
  }
}
    `,oR=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["upcomingContests"]:["upcomingContests",t],queryFn:N(e,oF,t,n),...r});oR.document=oF,oR.getKey=e=>void 0===e?["upcomingContests"]:["upcomingContests",e];let oL=`
    mutation createOrUpdateUserYearlyMedals($medalSlugs: [String]!) {
  createOrUpdateUserYearlyMedals(medalSlugs: $medalSlugs) {
    error
    ok
  }
}
    `,oN=(e,t,r)=>(0,L.n)({mutationKey:["createOrUpdateUserYearlyMedals"],mutationFn:t=>N(e,oL,t,r)(),...t}),o_=`
    query userAwardMedalInfo($id: Int!) {
  userAwardMedalInfo(id: $id) {
    awardDescription
    name
    obtainDescription
    slug
    config {
      icon
      iconGif
      iconGifBackground
      iconWearing
    }
  }
}
    `,oD=(e,t,r,n)=>(0,R.I)({queryKey:["userAwardMedalInfo",t],queryFn:N(e,o_,t,n),...r});oD.document=o_,oD.getKey=e=>["userAwardMedalInfo",e];let oj=`
    query yearlyMedalsQualified($excludeAcquired: Boolean) {
  yearlyMedalsQualified(excludeAcquired: $excludeAcquired) {
    awardDescription
    name
    obtainDescription
    slug
    config {
      icon
      iconGif
      iconGifBackground
      iconWearing
    }
  }
}
    `,oK=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["yearlyMedalsQualified"]:["yearlyMedalsQualified",t],queryFn:N(e,oj,t,n),...r});oK.document=oj,oK.getKey=e=>void 0===e?["yearlyMedalsQualified"]:["yearlyMedalsQualified",e];let oM=`
    query getUpcStudyPlans {
  studyPlansV2ByUpc {
    name
    slug
    highlight
    cover
  }
}
    `,oU=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["getUpcStudyPlans"]:["getUpcStudyPlans",t],queryFn:N(e,oM,t,n),...r});oU.document=oM,oU.getKey=e=>void 0===e?["getUpcStudyPlans"]:["getUpcStudyPlans",e];let oV=`
    query getUpcTopicTags {
  upcV2InterestTags {
    name
    slug
  }
}
    `,oQ=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["getUpcTopicTags"]:["getUpcTopicTags",t],queryFn:N(e,oV,t,n),...r});oQ.document=oV,oQ.getKey=e=>void 0===e?["getUpcTopicTags"]:["getUpcTopicTags",e];let oB=`
    mutation submitUpcSurvey($data: UpcV2SubmitSurveyInput!) {
  upcV2SubmitSurvey(data: $data) {
    ok
  }
}
    `,oG=(e,t,r)=>(0,L.n)({mutationKey:["submitUpcSurvey"],mutationFn:t=>N(e,oB,t,r)(),...t}),oz=`
    query myOrders {
  myOrders {
    orderId
    createDate
    status
    items {
      name
    }
  }
}
    `,oH=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["myOrders"]:["myOrders",t],queryFn:N(e,oz,t,n),...r});oH.document=oz,oH.getKey=e=>void 0===e?["myOrders"]:["myOrders",e];let oW=`
    query orderDetails($orderId: String!) {
  orderDetails(orderId: $orderId) {
    orderId
    createDate
    status
    items {
      name
      itemSlug
      img
      value
      __typename
    }
    details
    trackingId
    address {
      id
      fullName
      country
      address
      city
      province
      postalCode
      phone
    }
  }
}
    `,oY=(e,t,r,n)=>(0,R.I)({queryKey:["orderDetails",t],queryFn:N(e,oW,t,n),...r});oY.document=oW,oY.getKey=e=>["orderDetails",e];let oJ=`
    mutation createDiscussTopic($articleType: ArticleTypeEnum!, $tagName: String!) {
  ugcArticleAddTag(articleType: $articleType, tagName: $tagName) {
    ok
    tagSlug
  }
}
    `,oX=(e,t,r)=>(0,L.n)({mutationKey:["createDiscussTopic"],mutationFn:t=>N(e,oJ,t,r)(),...t}),oZ=`
    mutation ugcArticleOfficialPublishDiscussion($data: UgcArticleOfficialPublishDiscussionInput!) {
  ugcArticleOfficialPublishDiscussion(data: $data) {
    article {
      uuid
      slug
      topicId
    }
  }
}
    `,o0=(e,t,r)=>(0,L.n)({mutationKey:["ugcArticleOfficialPublishDiscussion"],mutationFn:t=>N(e,oZ,t,r)(),...t}),o1=`
    mutation publishDiscussPost($data: UgcArticlePublishDiscussionInput!) {
  ugcArticlePublishDiscussion(data: $data) {
    ok
    article {
      uuid
      slug
      topicId
    }
  }
}
    `,o2=(e,t,r)=>(0,L.n)({mutationKey:["publishDiscussPost"],mutationFn:t=>N(e,o1,t,r)(),...t}),o4=`
    query recommendedDiscussTopics {
  ugcArticleDiscussionTags {
    id
    name
    slug
  }
}
    `,o3=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["recommendedDiscussTopics"]:["recommendedDiscussTopics",t],queryFn:N(e,o4,t,n),...r});o3.document=o4,o3.getKey=e=>void 0===e?["recommendedDiscussTopics"]:["recommendedDiscussTopics",e];let o8=`
    mutation addFavoriteToMyCollectionV2($favoriteSlug: String!) {
  addFavoriteToMyCollectionV2(favoriteSlug: $favoriteSlug) {
    ok
    error
  }
}
    `,o5=(e,t,r)=>(0,L.n)({mutationKey:["addFavoriteToMyCollectionV2"],mutationFn:t=>N(e,o8,t,r)(),...t}),o6=`
    mutation addQuestionToDefaultFavoriteV2($questionSlug: String!) {
  addQuestionToDefaultFavoriteV2(questionSlug: $questionSlug) {
    ok
    error
  }
}
    `,o7=(e,t,r)=>(0,L.n)({mutationKey:["addQuestionToDefaultFavoriteV2"],mutationFn:t=>N(e,o6,t,r)(),...t}),o9=`
    mutation addQuestionToFavoriteV2($favoriteSlug: String!, $questionSlug: String!) {
  addQuestionToFavoriteV2(
    favoriteSlug: $favoriteSlug
    questionSlug: $questionSlug
  ) {
    ok
    error
  }
}
    `,se=(e,t,r)=>(0,L.n)({mutationKey:["addQuestionToFavoriteV2"],mutationFn:t=>N(e,o9,t,r)(),...t}),st=`
    mutation batchAddQuestionsToFavorite($favoriteSlug: String!, $questionSlugs: [String]!) {
  batchAddQuestionsToFavorite(
    favoriteSlug: $favoriteSlug
    questionSlugs: $questionSlugs
  ) {
    ok
    error
  }
}
    `,sr=(e,t,r)=>(0,L.n)({mutationKey:["batchAddQuestionsToFavorite"],mutationFn:t=>N(e,st,t,r)(),...t}),sn=`
    mutation createEmptyFavorite($description: String, $favoriteType: FavoriteTypeEnum!, $isPublicFavorite: Boolean = true, $name: String!) {
  createEmptyFavorite(
    description: $description
    favoriteType: $favoriteType
    isPublicFavorite: $isPublicFavorite
    name: $name
  ) {
    ok
    error
    favoriteSlug
  }
}
    `,si=(e,t,r)=>(0,L.n)({mutationKey:["createEmptyFavorite"],mutationFn:t=>N(e,sn,t,r)(),...t}),so=`
    mutation createSmartFavorite($description: String, $filters: QuestionFilterInput, $isPublicFavorite: Boolean = true, $name: String!, $sortBy: QuestionSortByInput, $visibleFilters: [String]) {
  createSmartFavorite(
    description: $description
    filters: $filters
    isPublicFavorite: $isPublicFavorite
    name: $name
    sortBy: $sortBy
    visibleFilters: $visibleFilters
  ) {
    ok
    error
    favoriteSlug
  }
}
    `,ss=(e,t,r)=>(0,L.n)({mutationKey:["createSmartFavorite"],mutationFn:t=>N(e,so,t,r)(),...t}),sa=`
    mutation deleteFavoriteV2($favoriteSlug: String!) {
  deleteFavoriteV2(favoriteSlug: $favoriteSlug) {
    ok
    error
  }
}
    `,su=(e,t,r)=>(0,L.n)({mutationKey:["deleteFavoriteV2"],mutationFn:t=>N(e,sa,t,r)(),...t}),sl=`
    query favoriteDetailV2($favoriteSlug: String!) {
  favoriteDetailV2(favoriteSlug: $favoriteSlug) {
    coverUrl
    coverEmoji
    coverBackgroundColor
    description
    creator {
      realName
      userAvatar
      userSlug
    }
    hasCurrentQuestion
    isPublicFavorite
    lastQuestionAddedAt
    name
    questionNumber
    slug
    isDefaultList
    favoriteType
    lastModified: lastQuestionAddedAt
    languageTagSlug
    filtersInfo
    sortByInfo
    visibleFilters
    collectCount
    questType
    questUnitIcon
    questUnitColor
    questIsPremium
    questIsUnlocked
    questSlug
  }
}
    `,sc=(e,t,r,n)=>(0,R.I)({queryKey:["favoriteDetailV2",t],queryFn:N(e,sl,t,n),...r});sc.document=sl,sc.getKey=e=>["favoriteDetailV2",e];let sd=`
    query favoriteQuestionListProgress($favoriteSlug: String!, $filter: FavoriteQuestionFilterInput, $filtersV2: QuestionFilterInput, $searchKeyword: String, $sortBy: QuestionSortByInput, $limit: Int, $skip: Int, $version: String = "v2") {
  favoriteUserQuestionProgressV2(favoriteSlug: $favoriteSlug) {
    numAcceptedQuestions {
      count
      difficulty
    }
    numFailedQuestions {
      count
      difficulty
    }
    numUntouchedQuestions {
      count
      difficulty
    }
    userSessionBeatsPercentage {
      difficulty
      percentage
    }
  }
  favoriteQuestionList(
    favoriteSlug: $favoriteSlug
    filter: $filter
    filtersV2: $filtersV2
    searchKeyword: $searchKeyword
    sortBy: $sortBy
    limit: $limit
    skip: $skip
    version: $version
  ) {
    questions {
      difficulty
      id
      paidOnly
      questionFrontendId
      status
      title
      titleSlug
      translatedTitle
      frequency
      topicTags {
        name
        nameTranslated
        slug
      }
    }
  }
}
    `,sp=(e,t,r,n)=>(0,R.I)({queryKey:["favoriteQuestionListProgress",t],queryFn:N(e,sd,t,n),...r});sp.document=sd,sp.getKey=e=>["favoriteQuestionListProgress",e];let sm=`
    query favoriteQuestionList($favoriteSlug: String!, $filter: FavoriteQuestionFilterInput, $filtersV2: QuestionFilterInput, $searchKeyword: String, $sortBy: QuestionSortByInput, $limit: Int, $skip: Int, $version: String = "v2") {
  favoriteQuestionList(
    favoriteSlug: $favoriteSlug
    filter: $filter
    filtersV2: $filtersV2
    searchKeyword: $searchKeyword
    sortBy: $sortBy
    limit: $limit
    skip: $skip
    version: $version
  ) {
    questions {
      difficulty
      id
      paidOnly
      questionFrontendId
      status
      title
      titleSlug
      translatedTitle
      isInMyFavorites
      frequency
      acRate
      contestPoint
      topicTags {
        name
        nameTranslated
        slug
      }
    }
    totalLength
    hasMore
  }
}
    `,sf=(e,t,r,n)=>(0,R.I)({queryKey:["favoriteQuestionList",t],queryFn:N(e,sm,t,n),...r});sf.document=sm,sf.getKey=e=>["favoriteQuestionList",e];let sg=`
    query favoriteSubmitAcProgress($favoriteSlug: String!) {
  favoriteSubmitAcProgress(favoriteSlug: $favoriteSlug) {
    totalAcCount
    totalSubmitCount
  }
}
    `,sy=(e,t,r,n)=>(0,R.I)({queryKey:["favoriteSubmitAcProgress",t],queryFn:N(e,sg,t,n),...r});sy.document=sg,sy.getKey=e=>["favoriteSubmitAcProgress",e];let sh=`
    query favoriteUserQuestionProgressV2($favoriteSlug: String!) {
  favoriteUserQuestionProgressV2(favoriteSlug: $favoriteSlug) {
    numAcceptedQuestions {
      count
      difficulty
    }
    numFailedQuestions {
      count
      difficulty
    }
    numUntouchedQuestions {
      count
      difficulty
    }
    userSessionBeatsPercentage {
      difficulty
      percentage
    }
  }
}
    `,sv=(e,t,r,n)=>(0,R.I)({queryKey:["favoriteUserQuestionProgressV2",t],queryFn:N(e,sh,t,n),...r});sv.document=sh,sv.getKey=e=>["favoriteUserQuestionProgressV2",e];let sb=`
    mutation forkFavoriteV2($favoriteSlug: String!) {
  forkFavoriteV2(favoriteSlug: $favoriteSlug) {
    ok
    error
    slug
  }
}
    `,sS=(e,t,r)=>(0,L.n)({mutationKey:["forkFavoriteV2"],mutationFn:t=>N(e,sb,t,r)(),...t}),sw=`
    query hasAccessToFavorite($favoriteSlug: String!) {
  hasAccessToFavorite(favoriteSlug: $favoriteSlug) {
    hasAccess
    rejectReason
    questionCount
  }
}
    `,sI=(e,t,r,n)=>(0,R.I)({queryKey:["hasAccessToFavorite",t],queryFn:N(e,sw,t,n),...r});sI.document=sw,sI.getKey=e=>["hasAccessToFavorite",e];let s$=`
    query isMyCollectedFavorite($favoriteSlug: String!) {
  isMyCollectedFavorite(favoriteSlug: $favoriteSlug)
}
    `,sC=(e,t,r,n)=>(0,R.I)({queryKey:["isMyCollectedFavorite",t],queryFn:N(e,s$,t,n),...r});sC.document=s$,sC.getKey=e=>["isMyCollectedFavorite",e];let sk=`
    query isMyCreatedFavorite($favoriteSlug: String!) {
  isMyCreatedFavorite(favoriteSlug: $favoriteSlug)
}
    `,sA=(e,t,r,n)=>(0,R.I)({queryKey:["isMyCreatedFavorite",t],queryFn:N(e,sk,t,n),...r});sA.document=sk,sA.getKey=e=>["isMyCreatedFavorite",e];let sq=`
    query myFavoriteList {
  myCreatedFavoriteList {
    favorites {
      coverUrl
      coverEmoji
      coverBackgroundColor
      hasCurrentQuestion
      isPublicFavorite
      lastQuestionAddedAt
      name
      slug
      favoriteType
    }
    hasMore
    totalLength
  }
  myCollectedFavoriteList {
    hasMore
    totalLength
    favorites {
      coverUrl
      coverEmoji
      coverBackgroundColor
      hasCurrentQuestion
      isPublicFavorite
      name
      slug
      lastQuestionAddedAt
      favoriteType
    }
  }
}
    `,sO=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["myFavoriteList"]:["myFavoriteList",t],queryFn:N(e,sq,t,n),...r});sO.document=sq,sO.getKey=e=>void 0===e?["myFavoriteList"]:["myFavoriteList",e];let sT=`
    query problemsetQuestionListCountV2($filters: QuestionFilterInput, $limit: Int, $searchKeyword: String, $skip: Int, $sortBy: QuestionSortByInput, $categorySlug: String) {
  problemsetQuestionListV2(
    filters: $filters
    limit: $limit
    searchKeyword: $searchKeyword
    skip: $skip
    sortBy: $sortBy
    categorySlug: $categorySlug
  ) {
    totalLength
  }
}
    `,sP=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["problemsetQuestionListCountV2"]:["problemsetQuestionListCountV2",t],queryFn:N(e,sT,t,n),...r});sP.document=sT,sP.getKey=e=>void 0===e?["problemsetQuestionListCountV2"]:["problemsetQuestionListCountV2",e];let sx=`
    query problemsetQuestionListV2($filters: QuestionFilterInput, $limit: Int, $searchKeyword: String, $skip: Int, $sortBy: QuestionSortByInput, $categorySlug: String) {
  problemsetQuestionListV2(
    filters: $filters
    limit: $limit
    searchKeyword: $searchKeyword
    skip: $skip
    sortBy: $sortBy
    categorySlug: $categorySlug
  ) {
    questions {
      id
      titleSlug
      title
      translatedTitle
      questionFrontendId
      paidOnly
      difficulty
      topicTags {
        name
        slug
        nameTranslated
      }
      status
      isInMyFavorites
      frequency
      acRate
      contestPoint
    }
    totalLength
    finishedLength
    hasMore
  }
}
    `,sE=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["problemsetQuestionListV2"]:["problemsetQuestionListV2",t],queryFn:N(e,sx,t,n),...r});sE.document=sx,sE.getKey=e=>void 0===e?["problemsetQuestionListV2"]:["problemsetQuestionListV2",e];let sF=`
    query randomQuestionV2($favoriteSlug: String, $categorySlug: String, $searchKeyword: String, $filtersV2: QuestionFilterInput) {
  randomQuestionV2(
    favoriteSlug: $favoriteSlug
    categorySlug: $categorySlug
    filtersV2: $filtersV2
    searchKeyword: $searchKeyword
  ) {
    titleSlug
  }
}
    `,sR=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["randomQuestionV2"]:["randomQuestionV2",t],queryFn:N(e,sF,t,n),...r});sR.document=sF,sR.getKey=e=>void 0===e?["randomQuestionV2"]:["randomQuestionV2",e];let sL=`
    mutation removeFavoriteFromMyCollectionV2($favoriteSlug: String!) {
  removeFavoriteFromMyCollectionV2(favoriteSlug: $favoriteSlug) {
    ok
    error
  }
}
    `,sN=(e,t,r)=>(0,L.n)({mutationKey:["removeFavoriteFromMyCollectionV2"],mutationFn:t=>N(e,sL,t,r)(),...t}),s_=`
    mutation removeQuestionFromFavoriteV2($favoriteSlug: String!, $questionSlug: String!) {
  removeQuestionFromFavoriteV2(
    favoriteSlug: $favoriteSlug
    questionSlug: $questionSlug
  ) {
    ok
    error
  }
}
    `,sD=(e,t,r)=>(0,L.n)({mutationKey:["removeQuestionFromFavoriteV2"],mutationFn:t=>N(e,s_,t,r)(),...t}),sj=`
    mutation reorderFavoriteQuestionV2($favoriteSlug: String!, $questionSlug: String!, $moveToTop: Boolean, $moveToBottom: Boolean, $reorderNewIndex: Int) {
  reorderFavoriteQuestionV2(
    favoriteSlug: $favoriteSlug
    questionSlug: $questionSlug
    moveToTop: $moveToTop
    moveToBottom: $moveToBottom
    reorderNewIndex: $reorderNewIndex
  ) {
    ok
    error
  }
}
    `,sK=(e,t,r)=>(0,L.n)({mutationKey:["reorderFavoriteQuestionV2"],mutationFn:t=>N(e,sj,t,r)(),...t}),sM=`
    mutation resetFavoriteSessionV2($favoriteSlug: String!, $deleteSyncedCode: Boolean) {
  resetFavoriteSessionV2(
    favoriteSlug: $favoriteSlug
    deleteSyncedCode: $deleteSyncedCode
  ) {
    ok
    error
  }
}
    `,sU=(e,t,r)=>(0,L.n)({mutationKey:["resetFavoriteSessionV2"],mutationFn:t=>N(e,sM,t,r)(),...t}),sV=`
    query startToPracticeQuestion($favoriteSlug: String!, $filtersV2: QuestionFilterInput, $sortBy: QuestionSortByInput, $searchKeyword: String, $version: String = "v2") {
  startToPracticeQuestion(
    favoriteSlug: $favoriteSlug
    filtersV2: $filtersV2
    sortBy: $sortBy
    searchKeyword: $searchKeyword
    version: $version
  ) {
    difficulty
    id
    paidOnly
    questionFrontendId
    status
    title
    titleSlug
    translatedTitle
  }
}
    `,sQ=(e,t,r,n)=>(0,R.I)({queryKey:["startToPracticeQuestion",t],queryFn:N(e,sV,t,n),...r});sQ.document=sV,sQ.getKey=e=>["startToPracticeQuestion",e];let sB=`
    mutation updateFavoriteEmojiBackgroundV2($backgroundColor: String!, $emoji: String!, $favoriteSlug: String!) {
  updateFavoriteEmojiBackgroundV2(
    backgroundColor: $backgroundColor
    emoji: $emoji
    favoriteSlug: $favoriteSlug
  ) {
    ok
    error
  }
}
    `,sG=(e,t,r)=>(0,L.n)({mutationKey:["updateFavoriteEmojiBackgroundV2"],mutationFn:t=>N(e,sB,t,r)(),...t}),sz=`
    mutation updateFavoriteIsPublicV2($favoriteSlug: String!, $isPublic: Boolean!) {
  updateFavoriteIsPublicV2(favoriteSlug: $favoriteSlug, isPublic: $isPublic) {
    error
    ok
  }
}
    `,sH=(e,t,r)=>(0,L.n)({mutationKey:["updateFavoriteIsPublicV2"],mutationFn:t=>N(e,sz,t,r)(),...t}),sW=`
    mutation updateFavoriteNameDescriptionV2($favoriteSlug: String!, $name: String!, $description: String) {
  updateFavoriteNameDescriptionV2(
    favoriteSlug: $favoriteSlug
    name: $name
    description: $description
  ) {
    ok
    error
  }
}
    `,sY=(e,t,r)=>(0,L.n)({mutationKey:["updateFavoriteNameDescriptionV2"],mutationFn:t=>N(e,sW,t,r)(),...t}),sJ=`
    mutation updateSmartListQuestions($favoriteSlug: String!, $filters: QuestionFilterInput, $sortBy: QuestionSortByInput, $visibleFilters: [String]) {
  updateSmartListQuestions(
    favoriteSlug: $favoriteSlug
    filters: $filters
    sortBy: $sortBy
    visibleFilters: $visibleFilters
  ) {
    ok
    error
  }
}
    `,sX=(e,t,r)=>(0,L.n)({mutationKey:["updateSmartListQuestions"],mutationFn:t=>N(e,sJ,t,r)(),...t}),sZ=`
    mutation AddQuestionToNewFavoriteV2($name: String!, $isPublicFavorite: Boolean!, $questionSlug: String!) {
  addQuestionToNewFavoriteV2(
    name: $name
    isPublicFavorite: $isPublicFavorite
    questionSlug: $questionSlug
  ) {
    ok
    error
    slug
  }
}
    `,s0=(e,t,r)=>(0,L.n)({mutationKey:["AddQuestionToNewFavoriteV2"],mutationFn:t=>N(e,sZ,t,r)(),...t}),s1=`
    query allPinnedComplexitys {
  allPinnedComplexitys {
    complexity
    displayName
    funcStr
  }
}
    `,s2=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["allPinnedComplexitys"]:["allPinnedComplexitys",t],queryFn:N(e,s1,t,n),...r});s2.document=s1,s2.getKey=e=>void 0===e?["allPinnedComplexitys"]:["allPinnedComplexitys",e];let s4=`
    mutation PracticeReplayUploadEvents($questionSlug: String!, $events: JSONString!, $clientSessionId: String, $activeSessionId: Int) {
  createPracticeReplayEvents(
    questionSlug: $questionSlug
    events: $events
    clientSessionId: $clientSessionId
    activeSessionId: $activeSessionId
  ) {
    ok
    error
    practiceReplaySessionId
  }
}
    `,s3=(e,t,r)=>(0,L.n)({mutationKey:["PracticeReplayUploadEvents"],mutationFn:t=>N(e,s4,t,r)(),...t}),s8=`
    query EnableContestReplayTracking {
  enableContestReplayTracking
}
    `,s5=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["EnableContestReplayTracking"]:["EnableContestReplayTracking",t],queryFn:N(e,s8,t,n),...r});s5.document=s8,s5.getKey=e=>void 0===e?["EnableContestReplayTracking"]:["EnableContestReplayTracking",e];let s6=`
    query LatestPracticeReplayEvents($questionSlug: String!) {
  latestPracticeReplayEvents(questionSlug: $questionSlug) {
    id
    eventType
    eventData
    timestamp
    clientEventId
  }
}
    `,s7=(e,t,r,n)=>(0,R.I)({queryKey:["LatestPracticeReplayEvents",t],queryFn:N(e,s6,t,n),...r});s7.document=s6,s7.getKey=e=>["LatestPracticeReplayEvents",e];let s9=`
    query LatestPracticeReplaySession($questionSlug: String!) {
  latestPracticeReplaySession(questionSlug: $questionSlug) {
    id
    questionSlug
    hasAc
    eventCount
    approxPayloadBytes
    startedAt
    lastEventAt
    clientSessionId
  }
}
    `,ae=(e,t,r,n)=>(0,R.I)({queryKey:["LatestPracticeReplaySession",t],queryFn:N(e,s9,t,n),...r});ae.document=s9,ae.getKey=e=>["LatestPracticeReplaySession",e];let at=`
    query ReplayQuestionCodeSnippets($titleSlug: String!) {
  question(titleSlug: $titleSlug) {
    questionId
    codeSnippets {
      langSlug
      code
    }
  }
}
    `,ar=(e,t,r,n)=>(0,R.I)({queryKey:["ReplayQuestionCodeSnippets",t],queryFn:N(e,at,t,n),...r});ar.document=at,ar.getKey=e=>["ReplayQuestionCodeSnippets",e];let an=`
    mutation SendContestReplayEvents($contestSlug: String!, $questionSlug: String!, $events: JSONString!) {
  createContestReplayEvents(
    contestSlug: $contestSlug
    questionSlug: $questionSlug
    events: $events
  ) {
    ok
    error
  }
}
    `,ai=(e,t,r)=>(0,L.n)({mutationKey:["SendContestReplayEvents"],mutationFn:t=>N(e,an,t,r)(),...t}),ao=`
    query UserContestReplayEvents($contestSlug: String!, $questionSlug: String!, $username: String) {
  userContestReplayEvents(
    contestSlug: $contestSlug
    questionSlug: $questionSlug
    username: $username
  ) {
    eventType
    eventData
    timestamp
  }
}
    `,as=(e,t,r,n)=>(0,R.I)({queryKey:["UserContestReplayEvents",t],queryFn:N(e,ao,t,n),...r});as.document=ao,as.getKey=e=>["UserContestReplayEvents",e];let aa=`
    query commentContext($topicId: Int!, $commentId: Int!, $orderBy: String!) {
  commentContext(topicId: $topicId, commentId: $commentId, orderBy: $orderBy)
}
    `,au=(e,t,r,n)=>(0,R.I)({queryKey:["commentContext",t],queryFn:N(e,aa,t,n),...r});au.document=aa,au.getKey=e=>["commentContext",e];let al=`
    query commentReplies($commentId: ID!, $skip: Int, $first: Int) {
  commentReplyConnection(commentId: $commentId, skip: $skip, first: $first) {
    totalNum
    edges {
      node {
        id
        pinned
        pinnedBy {
          username
        }
        post {
          ...DiscussPost
        }
      }
    }
  }
}
    ${eg}`,ac=(e,t,r,n)=>(0,R.I)({queryKey:["commentReplies",t],queryFn:N(e,al,t,n),...r});ac.document=al,ac.getKey=e=>["commentReplies",e];let ad=`
    query intentionTags {
  intentionTags {
    name
    slug
  }
}
    `,ap=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["intentionTags"]:["intentionTags",t],queryFn:N(e,ad,t,n),...r});ap.document=ad,ap.getKey=e=>void 0===e?["intentionTags"]:["intentionTags",e];let am=`
    mutation createComment($topicId: Int!, $intentionTagSlug: String, $parentCommentId: Int!, $content: String!, $mentionedUserSlugs: [String!], $isSerialized: Boolean) {
  createComment(
    topicId: $topicId
    intentionTagSlug: $intentionTagSlug
    parentCommentId: $parentCommentId
    content: $content
    mentionedUserSlugs: $mentionedUserSlugs
    isSerialized: $isSerialized
  ) {
    ok
    commentId
    error
    comment {
      id
      pinned
      pinnedBy {
        username
      }
      post {
        ...DiscussPost
      }
      intentionTag {
        slug
      }
      numChildren
    }
  }
}
    ${eg}`,af=(e,t,r)=>(0,L.n)({mutationKey:["createComment"],mutationFn:t=>N(e,am,t,r)(),...t}),ag=`
    mutation deleteComment($commentId: Int!) {
  deleteComment(id: $commentId) {
    ok
    error
    post {
      id
      status
    }
  }
}
    `,ay=(e,t,r)=>(0,L.n)({mutationKey:["deleteComment"],mutationFn:t=>N(e,ag,t,r)(),...t}),ah=`
    mutation officialCreateComment($topicId: Int!, $intentionTagSlug: String, $parentCommentId: Int!, $content: String!, $mentionedUserSlugs: [String!], $officialAccountSlug: String!, $isSerialized: Boolean) {
  officialCreateComment(
    topicId: $topicId
    intentionTagSlug: $intentionTagSlug
    parentCommentId: $parentCommentId
    content: $content
    mentionedUserSlugs: $mentionedUserSlugs
    officialAccountSlug: $officialAccountSlug
    isSerialized: $isSerialized
  ) {
    comment {
      id
      pinned
      pinnedBy {
        username
      }
      post {
        ...DiscussPost
      }
      intentionTag {
        slug
      }
      numChildren
    }
  }
}
    ${eg}`,av=(e,t,r)=>(0,L.n)({mutationKey:["officialCreateComment"],mutationFn:t=>N(e,ah,t,r)(),...t}),ab=`
    mutation pinComment($commentId: Int!, $pinned: Boolean!) {
  togglePinComment(commentId: $commentId, pinned: $pinned) {
    ok
    error
    comment {
      id
      pinned
      pinnedBy {
        username
      }
    }
  }
}
    `,aS=(e,t,r)=>(0,L.n)({mutationKey:["pinComment"],mutationFn:t=>N(e,ab,t,r)(),...t}),aw=`
    mutation approveComment($commentId: Int!) {
  approveComment(id: $commentId) {
    ok
    error
    post {
      id
      status
    }
  }
}
    `,aI=(e,t,r)=>(0,L.n)({mutationKey:["approveComment"],mutationFn:t=>N(e,aw,t,r)(),...t}),a$=`
    mutation updateComment($commentId: Int!, $content: String!, $isSerialized: Boolean) {
  updateComment(id: $commentId, content: $content, isSerialized: $isSerialized) {
    ok
    error
    comment {
      id
      post {
        id
        content
        updationDate
      }
    }
  }
}
    `,aC=(e,t,r)=>(0,L.n)({mutationKey:["updateComment"],mutationFn:t=>N(e,a$,t,r)(),...t}),ak=`
    mutation votePost($postId: Int!, $voteStatus: Int!) {
  votePost(postId: $postId, value: $voteStatus) {
    ok
    error
    value
    post {
      id
      voteStatus
      voteUpCount
    }
  }
}
    `,aA=(e,t,r)=>(0,L.n)({mutationKey:["votePost"],mutationFn:t=>N(e,ak,t,r)(),...t}),aq=`
    query questionDiscussComments($topicId: Int!, $orderBy: String = "newest_to_oldest", $pageNo: Int = 1, $numPerPage: Int = 10) {
  topicComments(
    topicId: $topicId
    orderBy: $orderBy
    pageNo: $pageNo
    numPerPage: $numPerPage
  ) {
    data {
      id
      ipRegion
      pinned
      pinnedBy {
        username
      }
      post {
        ...DiscussPost
      }
      intentionTag {
        slug
      }
      numChildren
    }
    totalNum
  }
}
    ${eg}`,aO=(e,t,r,n)=>(0,R.I)({queryKey:["questionDiscussComments",t],queryFn:N(e,aq,t,n),...r});aO.document=aq,aO.getKey=e=>["questionDiscussComments",e];let aT=`
    query singleComment($commentId: Int!) {
  comment(id: $commentId) {
    id
    pinned
    pinnedBy {
      username
    }
    post {
      ...DiscussPost
    }
    intentionTag {
      slug
    }
    numChildren
  }
}
    ${eg}`,aP=(e,t,r,n)=>(0,R.I)({queryKey:["singleComment",t],queryFn:N(e,aT,t,n),...r});aP.document=aT,aP.getKey=e=>["singleComment",e];let ax=`
    mutation completeFeatureGuide($guideType: FeatureGuideType!) {
  completeFeatureGuide(guideType: $guideType) {
    error
    ok
  }
}
    `,aE=(e,t,r)=>(0,L.n)({mutationKey:["completeFeatureGuide"],mutationFn:t=>N(e,ax,t,r)(),...t}),aF=`
    query contestQuestion($contestSlug: String, $questionSlug: String) {
  contestDetail(contestSlug: $contestSlug) {
    startTime
    duration
    titleSlug
    failCount
    enableContestDynamicLayout
    isDynamicLayout
    hasCompletedContest
    isVirtualContest
    isPrivate
  }
  contestQuestion(contestSlug: $contestSlug, questionSlug: $questionSlug) {
    totalAc
    totalSubmission
    totalTriedUser
    totalAcUser
    languageList {
      id
      name
      verboseName
    }
    submittableLanguageList {
      id
      name
      verboseName
      isCompiledLang
    }
    question {
      status
      questionId
      questionFrontendId
      contestQuestionNumber
      score
      enableRunCode
      enableSubmit
      enableTestMode
      metaData
      title
      titleSlug
      difficulty
      categoryTitle
      codeSnippets {
        code
        lang
        langSlug
      }
      exampleTestcaseList
      canSeeQuestion
      envInfo
      content
      translatedContent
      translatedTitle
    }
  }
}
    `,aR=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["contestQuestion"]:["contestQuestion",t],queryFn:N(e,aF,t,n),...r});aR.document=aF,aR.getKey=e=>void 0===e?["contestQuestion"]:["contestQuestion",e];let aL=`
    query contestSubmissionDetails($submissionId: Int!) {
  submissionDetails(submissionId: $submissionId) {
    code
    timestamp
    statusCode
    runtime
    memory
    user {
      username
      profile {
        realName
        userAvatar
      }
    }
    lang {
      name
      verboseName
    }
    runtimeError
    compileError
    lastTestcase
    codeOutput
    expectedOutput
    totalCorrect
    totalTestcases
    stdOutput
    isCompiledLang
  }
}
    `,aN=(e,t,r,n)=>(0,R.I)({queryKey:["contestSubmissionDetails",t],queryFn:N(e,aL,t,n),...r});aN.document=aL,aN.getKey=e=>["contestSubmissionDetails",e];let a_=`
    query contestSubmissionList($contestSlug: String!, $offset: Int!, $limit: Int!, $questionSlug: String!, $lang: String, $status: SubmissionStatusEnum) {
  contestQuestionSubmissionList(
    contestSlug: $contestSlug
    offset: $offset
    limit: $limit
    questionSlug: $questionSlug
    lang: $lang
    status: $status
  ) {
    lastKey
    hasNext
    submissions {
      id
      status
      statusDisplay
      lang
      langVerboseName
      runtime
      timestamp
      penalty
    }
  }
}
    `,aD=(e,t,r,n)=>(0,R.I)({queryKey:["contestSubmissionList",t],queryFn:N(e,a_,t,n),...r});aD.document=a_,aD.getKey=e=>["contestSubmissionList",e];let aj=`
    mutation createIdeLayout($json: String!, $name: String!) {
  createIdeDynamicLayout(layoutJson: $json, layoutName: $name) {
    error
    ok
    layout {
      layoutId
      layoutJson
      layoutName
    }
  }
}
    `,aK=(e,t,r)=>(0,L.n)({mutationKey:["createIdeLayout"],mutationFn:t=>N(e,aj,t,r)(),...t}),aM=`
    mutation deleteIdeLayout($id: String!) {
  deleteIdeDynamicLayout(layoutId: $id) {
    error
    ok
  }
}
    `,aU=(e,t,r)=>(0,L.n)({mutationKey:["deleteIdeLayout"],mutationFn:t=>N(e,aM,t,r)(),...t}),aV=`
    query enableSyncedCodeFeature {
  enableSyncedCodeFeature
}
    `,aQ=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["enableSyncedCodeFeature"]:["enableSyncedCodeFeature",t],queryFn:N(e,aV,t,n),...r});aQ.document=aV,aQ.getKey=e=>void 0===e?["enableSyncedCodeFeature"]:["enableSyncedCodeFeature",e];let aB=`
    query featuresGuideDetail($page: FeaturesGuidePageEnum, $key: String) {
  featuresGuideDetail(page: $page, key: $key) {
    key
    config
  }
}
    `,aG=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["featuresGuideDetail"]:["featuresGuideDetail",t],queryFn:N(e,aB,t,n),...r});aG.document=aB,aG.getKey=e=>void 0===e?["featuresGuideDetail"]:["featuresGuideDetail",e];let az=`
    query frontendQuestionSubmissionResults($submissionId: String!) {
  frontendQuestionSubmissionResults(submissionId: $submissionId) {
    title
    passed
    stdout
    errorMessage
    testFn
    shortError
    failingLine
    codePreview
    showDiff
    actual
    expected
  }
}
    `,aH=(e,t,r,n)=>(0,R.I)({queryKey:["frontendQuestionSubmissionResults",t],queryFn:N(e,az,t,n),...r});aH.document=az,aH.getKey=e=>["frontendQuestionSubmissionResults",e];let aW=`
    query getAdsenseItem($adLocation: AdLocationEnum!) {
  advertisementByLocation(adLocation: $adLocation) {
    height
    width
    adSlot
    title
    displayTitle
    bannerUrl
    targetUrl
    adSource
  }
}
    `,aY=(e,t,r,n)=>(0,R.I)({queryKey:["getAdsenseItem",t],queryFn:N(e,aW,t,n),...r});aY.document=aW,aY.getKey=e=>["getAdsenseItem",e];let aJ=`
    query getIdeEnabled {
  enableIdeDynamicLayoutFeature
}
    `,aX=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["getIdeEnabled"]:["getIdeEnabled",t],queryFn:N(e,aJ,t,n),...r});aX.document=aJ,aX.getKey=e=>void 0===e?["getIdeEnabled"]:["getIdeEnabled",e];let aZ=`
    query getIdeLayouts {
  ideDynamicLayouts {
    layoutId
    layoutJson
    layoutName
  }
}
    `,a0=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["getIdeLayouts"]:["getIdeLayouts",t],queryFn:N(e,aZ,t,n),...r});a0.document=aZ,a0.getKey=e=>void 0===e?["getIdeLayouts"]:["getIdeLayouts",e];let a1=`
    query getOfficialIdeLayouts {
  officialIdeDynamicLayout {
    slug
    layoutJson
  }
}
    `,a2=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["getOfficialIdeLayouts"]:["getOfficialIdeLayouts",t],queryFn:N(e,a1,t,n),...r});a2.document=a1,a2.getKey=e=>void 0===e?["getOfficialIdeLayouts"]:["getOfficialIdeLayouts",e];let a4=`
    query getUserApiToken {
  generateLeetcodeUserApiToken {
    token
  }
}
    `,a3=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["getUserApiToken"]:["getUserApiToken",t],queryFn:N(e,a4,t,n),...r});a3.document=a4,a3.getKey=e=>void 0===e?["getUserApiToken"]:["getUserApiToken",e];let a8=`
    query languageAndStatusList {
  languageList {
    id
    name
  }
  submittableLanguageList {
    id
    name
    verboseName
    isCompiledLang
  }
  statusList {
    id
    name
  }
}
    `,a5=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["languageAndStatusList"]:["languageAndStatusList",t],queryFn:N(e,a8,t,n),...r});a5.document=a8,a5.getKey=e=>void 0===e?["languageAndStatusList"]:["languageAndStatusList",e];let a6=`
    mutation modifyIdeLayout($id: String!, $json: String, $name: String) {
  modifyIdeDynamicLayout(layoutId: $id, layoutJson: $json, layoutName: $name) {
    error
    ok
    layout {
      layoutId
      layoutJson
      layoutName
    }
  }
}
    `,a7=(e,t,r)=>(0,L.n)({mutationKey:["modifyIdeLayout"],mutationFn:t=>N(e,a6,t,r)(),...t}),a9=`
    query myCreatedFavoriteList($currentQuestionSlug: String) {
  myCreatedFavoriteList(currentQuestionSlug: $currentQuestionSlug) {
    favorites {
      coverUrl
      hasCurrentQuestion
      isPublicFavorite
      lastQuestionAddedAt
      name
      slug
      favoriteType
    }
    hasMore
    totalLength
  }
}
    `,ue=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["myCreatedFavoriteList"]:["myCreatedFavoriteList",t],queryFn:N(e,a9,t,n),...r});ue.document=a9,ue.getKey=e=>void 0===e?["myCreatedFavoriteList"]:["myCreatedFavoriteList",e];let ut=`
    mutation optInOrOutSyncedCodeFeature($optIn: Boolean!) {
  optInOrOutSyncedCodeFeature(optIn: $optIn) {
    ok
    error
    optInResult
  }
}
    `,ur=(e,t,r)=>(0,L.n)({mutationKey:["optInOrOutSyncedCodeFeature"],mutationFn:t=>N(e,ut,t,r)(),...t}),un=`
    query questionBySubmissionId($submissionId: Int!) {
  submissionDetails(submissionId: $submissionId) {
    question {
      titleSlug
      title
      questionId
      questionTitle
      questionTitleSlug
      translatedTitle
    }
  }
}
    `,ui=(e,t,r,n)=>(0,R.I)({queryKey:["questionBySubmissionId",t],queryFn:N(e,un,t,n),...r});ui.document=un,ui.getKey=e=>["questionBySubmissionId",e];let uo=`
    query questionDetail($titleSlug: String!) {
  languageList {
    id
    name
  }
  submittableLanguageList {
    id
    name
    verboseName
    isCompiledLang
  }
  statusList {
    id
    name
  }
  questionDiscussionTopic(questionSlug: $titleSlug) {
    id
    commentCount
    topLevelCommentCount
  }
  ugcArticleOfficialSolutionArticle(questionSlug: $titleSlug) {
    uuid
    chargeType
    canSee
    hasVideoArticle
  }
  question(titleSlug: $titleSlug) {
    title
    titleSlug
    questionId
    questionFrontendId
    questionTitle
    translatedTitle
    content
    translatedContent
    categoryTitle
    difficulty
    stats
    companyTagStatsV2
    topicTags {
      name
      slug
      translatedName
    }
    positionLevelTags {
      name
      nameTranslated
      slug
    }
    similarQuestionList {
      difficulty
      titleSlug
      title
      translatedTitle
      isPaidOnly
    }
    mysqlSchemas
    dataSchemas
    frontendPreviews
    likes
    dislikes
    isPaidOnly
    status
    canSeeQuestion
    enableTestMode
    metaData
    enableRunCode
    enableSubmit
    enableDebugger
    envInfo
    isLiked
    nextChallenges {
      difficulty
      title
      titleSlug
      questionFrontendId
    }
    libraryUrl
    adminUrl
    hints
    codeSnippets {
      code
      lang
      langSlug
    }
    exampleTestcaseList
    hasFrontendPreview
    featuredContests {
      titleSlug
      title
    }
    aiJudgingAvailable
  }
}
    `,us=(e,t,r,n)=>(0,R.I)({queryKey:["questionDetail",t],queryFn:N(e,uo,t,n),...r});us.document=uo,us.getKey=e=>["questionDetail",e];let ua=`
    mutation recordFeaturesGuide($key: String!) {
  recordFeaturesGuide(key: $key) {
    ok
  }
}
    `,uu=(e,t,r)=>(0,L.n)({mutationKey:["recordFeaturesGuide"],mutationFn:t=>N(e,ua,t,r)(),...t}),ul=`
    query feedbackMetaInfoBySlug {
  feedbackMetaInfoBySlug(slug: "editorial-feedback") {
    questionContent
    options {
      optionId
      optionName
      optionSlug
    }
  }
}
    `,uc=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["feedbackMetaInfoBySlug"]:["feedbackMetaInfoBySlug",t],queryFn:N(e,ul,t,n),...r});uc.document=ul,uc.getKey=e=>void 0===e?["feedbackMetaInfoBySlug"]:["feedbackMetaInfoBySlug",e];let ud=`
    query lastAcSubmissionCheck($questionSlug: String!) {
  lastAcSubmission(questionSlug: $questionSlug) {
    id
    runtimePercentile
    memoryPercentile
  }
}
    `,up=(e,t,r,n)=>(0,R.I)({queryKey:["lastAcSubmissionCheck",t],queryFn:N(e,ud,t,n),...r});up.document=ud,up.getKey=e=>["lastAcSubmissionCheck",e];let um=`
    query lastAcSubmission($questionSlug: String!) {
  lastAcSubmission(questionSlug: $questionSlug) {
    id
    code
    lang {
      verboseName
      name
    }
    topicTags {
      slug
      name
    }
    question {
      hasFrontendPreview
    }
    runtimePercentile
    memoryPercentile
  }
}
    `,uf=(e,t,r,n)=>(0,R.I)({queryKey:["lastAcSubmission",t],queryFn:N(e,um,t,n),...r});uf.document=um,uf.getKey=e=>["lastAcSubmission",e];let ug=`
    mutation toggleFavoriteSolution($topicId: Int!, $isFavorite: Boolean!) {
  toggleFavoriteSolution(topicId: $topicId, isFavorite: $isFavorite) {
    ok
    error
  }
}
    `,uy=(e,t,r)=>(0,L.n)({mutationKey:["toggleFavoriteSolution"],mutationFn:t=>N(e,ug,t,r)(),...t}),uh=`
    mutation createOrUpdateOfficialSolutionFeedback($articleId: ID!, $questionSlug: String!, $optionIds: [Int]!, $score: Int!, $additionalComment: String) {
  createOrUpdateOfficialSolutionFeedback(
    articleId: $articleId
    questionSlug: $questionSlug
    optionIds: $optionIds
    score: $score
    additionalComment: $additionalComment
  ) {
    ok
    error
  }
}
    `,uv=(e,t,r)=>(0,L.n)({mutationKey:["createOrUpdateOfficialSolutionFeedback"],mutationFn:t=>N(e,uh,t,r)(),...t}),ub=`
    mutation hidePost($postId: Int!, $hide: Boolean!) {
  hidePost(postId: $postId, hide: $hide) {
    ok
    error
    post {
      id
      isHidden
    }
  }
}
    `,uS=(e,t,r)=>(0,L.n)({mutationKey:["hidePost"],mutationFn:t=>N(e,ub,t,r)(),...t}),uw=`
    mutation ugcArticleSummarizeSolutions($keyword: String!, $questionSlug: String!, $tagSlugs: [String]!) {
  ugcArticleSummarizeSolutions(
    keyword: $keyword
    questionSlug: $questionSlug
    tagSlugs: $tagSlugs
  ) {
    summaryId
    articleUuids
    sessionUuid
    users {
      realName
      userAvatar
      userSlug
    }
  }
}
    `,uI=(e,t,r)=>(0,L.n)({mutationKey:["ugcArticleSummarizeSolutions"],mutationFn:t=>N(e,uw,t,r)(),...t}),u$=`
    mutation ugcArticleVoteSolutionSummary($summaryId: Int!, $vote: ArticleSummaryVoteEnum!, $voteReason: String) {
  ugcArticleVoteSolutionSummary(
    summaryId: $summaryId
    vote: $vote
    voteReason: $voteReason
  ) {
    ok
  }
}
    `,uC=(e,t,r)=>(0,L.n)({mutationKey:["ugcArticleVoteSolutionSummary"],mutationFn:t=>N(e,u$,t,r)(),...t}),uk=`
    query prevNextSolution($topicId: Int!, $questionSlug: String!, $skip: Int!, $first: Int!, $query: String, $orderBy: TopicSortingOption, $languageTags: [String!], $topicTags: [String!]) {
  prevSolution(
    topicId: $topicId
    filters: {questionSlug: $questionSlug, first: $first, skip: $skip, orderBy: $orderBy, query: $query, languageTags: $languageTags, topicTags: $topicTags}
  ) {
    id
    title
  }
  nextSolution(
    topicId: $topicId
    filters: {questionSlug: $questionSlug, first: $first, skip: $skip, orderBy: $orderBy, query: $query, languageTags: $languageTags, topicTags: $topicTags}
  ) {
    id
    title
  }
}
    `,uA=(e,t,r,n)=>(0,R.I)({queryKey:["prevNextSolution",t],queryFn:N(e,uk,t,n),...r});uA.document=uk,uA.getKey=e=>["prevNextSolution",e];let uq=`
    query ugcArticleSolutionSummaryUsesLeft {
  ugcArticleSolutionSummaryUsesLeft
}
    `,uO=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["ugcArticleSolutionSummaryUsesLeft"]:["ugcArticleSolutionSummaryUsesLeft",t],queryFn:N(e,uq,t,n),...r});uO.document=uq,uO.getKey=e=>void 0===e?["ugcArticleSolutionSummaryUsesLeft"]:["ugcArticleSolutionSummaryUsesLeft",e];let uT=`
    mutation ugcArticleAddReaction($articleId: ID!, $reactionType: ReactionTypeEnum!) {
  ugcArticleAddReaction(articleId: $articleId, reactionType: $reactionType) {
    ok
  }
}
    `,uP=(e,t,r)=>(0,L.n)({mutationKey:["ugcArticleAddReaction"],mutationFn:t=>N(e,uT,t,r)(),...t}),ux=`
    mutation ugcArticleAddReport($articleId: ID!, $reportType: ArticleReportTypeEnum!, $reason: String) {
  ugcArticleAddReport(
    articleId: $articleId
    reportType: $reportType
    reason: $reason
  ) {
    ok
  }
}
    `,uE=(e,t,r)=>(0,L.n)({mutationKey:["ugcArticleAddReport"],mutationFn:t=>N(e,ux,t,r)(),...t}),uF=`
    mutation ugcArticleBlockPostComment($articleId: ID!, $isBlock: Boolean!) {
  ugcArticleBlockPostComment(articleId: $articleId, isBlock: $isBlock) {
    ok
  }
}
    `,uR=(e,t,r)=>(0,L.n)({mutationKey:["ugcArticleBlockPostComment"],mutationFn:t=>N(e,uF,t,r)(),...t}),uL=`
    mutation ugcArticleDeleteArticle($articleId: ID!) {
  ugcArticleDeleteArticle(articleId: $articleId) {
    ok
  }
}
    `,uN=(e,t,r)=>(0,L.n)({mutationKey:["ugcArticleDeleteArticle"],mutationFn:t=>N(e,uL,t,r)(),...t}),u_=`
    mutation ugcArticleEditChargeType($articleId: ID!, $chargeType: ArticleChargeEnum!) {
  ugcArticleEditChargeType(articleId: $articleId, chargeType: $chargeType) {
    ok
  }
}
    `,uD=(e,t,r)=>(0,L.n)({mutationKey:["ugcArticleEditChargeType"],mutationFn:t=>N(e,u_,t,r)(),...t}),uj=`
    mutation ugcArticleEditCoefficient($articleId: ID!, $scoreCoefficient: Float!) {
  ugcArticleEditCoefficient(
    articleId: $articleId
    scoreCoefficient: $scoreCoefficient
  ) {
    ok
  }
}
    `,uK=(e,t,r)=>(0,L.n)({mutationKey:["ugcArticleEditCoefficient"],mutationFn:t=>N(e,uj,t,r)(),...t}),uM=`
    mutation ugcArticleEditStatus($articleId: ID!, $status: ArticleStatusEnum!) {
  ugcArticleEditStatus(articleId: $articleId, status: $status) {
    ok
  }
}
    `,uU=(e,t,r)=>(0,L.n)({mutationKey:["ugcArticleEditStatus"],mutationFn:t=>N(e,uM,t,r)(),...t}),uV=`
    mutation ugcArticlePublishSolution($data: UgcArticlePublishSolutionInput!) {
  ugcArticlePublishSolution(data: $data) {
    ok
    error
    article {
      ...ugcSolutionArticleFragment
      content
      isAuthorArticleReviewer
      hasVideoArticle
      isSerialized
      scoreInfo {
        scoreCoefficient
      }
      prev {
        uuid
        slug
        topicId
        title
      }
      next {
        uuid
        slug
        topicId
        title
      }
    }
  }
}
    ${ey}`,uQ=(e,t,r)=>(0,L.n)({mutationKey:["ugcArticlePublishSolution"],mutationFn:t=>N(e,uV,t,r)(),...t}),uB=`
    mutation ugcArticleRemoveReaction($articleId: ID!) {
  ugcArticleRemoveReaction(articleId: $articleId) {
    ok
  }
}
    `,uG=(e,t,r)=>(0,L.n)({mutationKey:["ugcArticleRemoveReaction"],mutationFn:t=>N(e,uB,t,r)(),...t}),uz=`
    mutation ugcArticleSetLeetcode($articleId: ID!, $isLeetcode: Boolean!) {
  ugcArticleSetLeetcode(articleId: $articleId, isLeetcode: $isLeetcode) {
    ok
  }
}
    `,uH=(e,t,r)=>(0,L.n)({mutationKey:["ugcArticleSetLeetcode"],mutationFn:t=>N(e,uz,t,r)(),...t}),uW=`
    mutation ugcCommentAddReport($commentId: ID!, $reportType: ArticleReportTypeEnum!, $reason: String) {
  ugcArticleAddReport(
    commentId: $commentId
    reportType: $reportType
    reason: $reason
  ) {
    ok
  }
}
    `,uY=(e,t,r)=>(0,L.n)({mutationKey:["ugcCommentAddReport"],mutationFn:t=>N(e,uW,t,r)(),...t}),uJ=`
    mutation hitResource($entityId: ID!, $entityType: EntityType!) {
  hitResource(entityId: $entityId, entityType: $entityType) {
    ok
    error
    count
  }
}
    `,uX=`
    query ugcArticleOfficialSolutionArticle($questionSlug: String!) {
  ugcArticleOfficialSolutionArticle(questionSlug: $questionSlug) {
    ...ugcSolutionArticleFragment
    content
    isSerialized
    isAuthorArticleReviewer
    scoreInfo {
      scoreCoefficient
    }
  }
}
    ${ey}`,uZ=(e,t,r,n)=>(0,R.I)({queryKey:["ugcArticleOfficialSolutionArticle",t],queryFn:N(e,uX,t,n),...r});uZ.document=uX,uZ.getKey=e=>["ugcArticleOfficialSolutionArticle",e];let u0=`
    query ugcArticleRecommendSolutionTags($questionSlug: String!) {
  ugcArticleRecommendSolutionTags(questionSlug: $questionSlug) {
    name
    slug
  }
}
    `,u1=(e,t,r,n)=>(0,R.I)({queryKey:["ugcArticleRecommendSolutionTags",t],queryFn:N(e,u0,t,n),...r});u1.document=u0,u1.getKey=e=>["ugcArticleRecommendSolutionTags",e];let u2=`
    query ugcArticleSolutionArticle($articleId: ID, $topicId: ID) {
  ugcArticleSolutionArticle(articleId: $articleId, topicId: $topicId) {
    ...ugcSolutionArticleFragment
    content
    isSerialized
    isAuthorArticleReviewer
    scoreInfo {
      scoreCoefficient
    }
    prev {
      uuid
      slug
      topicId
      title
    }
    next {
      uuid
      slug
      topicId
      title
    }
  }
}
    ${ey}`,u4=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["ugcArticleSolutionArticle"]:["ugcArticleSolutionArticle",t],queryFn:N(e,u2,t,n),...r});u4.document=u2,u4.getKey=e=>void 0===e?["ugcArticleSolutionArticle"]:["ugcArticleSolutionArticle",e];let u3=`
    query ugcArticleSolutionArticles($questionSlug: String!, $orderBy: ArticleOrderByEnum, $userInput: String, $tagSlugs: [String!], $skip: Int, $before: String, $after: String, $first: Int, $last: Int, $isMine: Boolean) {
  ugcArticleSolutionArticles(
    questionSlug: $questionSlug
    orderBy: $orderBy
    userInput: $userInput
    tagSlugs: $tagSlugs
    skip: $skip
    first: $first
    before: $before
    after: $after
    last: $last
    isMine: $isMine
  ) {
    totalNum
    pageInfo {
      hasNextPage
    }
    edges {
      node {
        ...ugcSolutionArticleFragment
      }
    }
  }
}
    ${ey}`,u8=(e,t,r,n)=>(0,R.I)({queryKey:["ugcArticleSolutionArticles",t],queryFn:N(e,u3,t,n),...r});u8.document=u3,u8.getKey=e=>["ugcArticleSolutionArticles",e];let u5=`
    query ugcArticleSolutionArticlesWithUuids($articleUuids: [String]!, $skip: Int, $before: String, $after: String, $first: Int, $last: Int) {
  ugcArticleSolutionArticlesWithUuids(
    articleUuids: $articleUuids
    skip: $skip
    before: $before
    after: $after
    first: $first
    last: $last
  ) {
    totalNum
    pageInfo {
      hasNextPage
    }
    edges {
      node {
        uuid
        title
        slug
        summary
        author {
          realName
          userAvatar
          userSlug
          userName
          nameColor
          certificationLevel
          activeBadge {
            icon
            displayName
          }
        }
        articleType
        thumbnail
        createdAt
        updatedAt
        status
        isLeetcode
        canSee
        canEdit
        isMyFavorite
        chargeType
        myReactionType
        topicId
        hitCount
        hasVideoArticle
        reactions {
          count
          reactionType
        }
        tags {
          name
          slug
          tagType
        }
        topic {
          id
          topLevelCommentCount
        }
      }
    }
  }
}
    `,u6=(e,t,r,n)=>(0,R.I)({queryKey:["ugcArticleSolutionArticlesWithUuids",t],queryFn:N(e,u5,t,n),...r});u6.document=u5,u6.getKey=e=>["ugcArticleSolutionArticlesWithUuids",e];let u7=`
    query ugcArticleSolutionTags($questionSlug: String!) {
  ugcArticleSolutionTags(questionSlug: $questionSlug) {
    otherTags {
      id
      name
      slug
      count
    }
    knowledgeTags {
      id
      name
      slug
      count
    }
    languageTags {
      id
      name
      slug
      count
    }
  }
}
    `,u9=(e,t,r,n)=>(0,R.I)({queryKey:["ugcArticleSolutionTags",t],queryFn:N(e,u7,t,n),...r});u9.document=u7,u9.getKey=e=>["ugcArticleSolutionTags",e];let le=`
    query submissionAnalysisAvailable($questionSlug: String!) {
  submissionAnalysisAvailable(questionSlug: $questionSlug) {
    isAnalysisAvailable
    isEfficiencyAvailable
  }
}
    `,lt=(e,t,r,n)=>(0,R.I)({queryKey:["submissionAnalysisAvailable",t],queryFn:N(e,le,t,n),...r});lt.document=le,lt.getKey=e=>["submissionAnalysisAvailable",e];let lr=`
    mutation submissionAnalysisFeedback($analysisId: ID!, $categories: [AnalysisDownvoteCategory!], $feedback: String, $vote: ComplexityVoteEnum!) {
  submissionAnalysisFeedback(
    analysisId: $analysisId
    categories: $categories
    feedback: $feedback
    vote: $vote
  ) {
    error
    ok
  }
}
    `,ln=(e,t,r)=>(0,L.n)({mutationKey:["submissionAnalysisFeedback"],mutationFn:t=>N(e,lr,t,r)(),...t}),li=`
    query submissionAnalysisUsesLeft {
  submissionAnalysisUsesLeft
}
    `,lo=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["submissionAnalysisUsesLeft"]:["submissionAnalysisUsesLeft",t],queryFn:N(e,li,t,n),...r});lo.document=li,lo.getKey=e=>void 0===e?["submissionAnalysisUsesLeft"]:["submissionAnalysisUsesLeft",e];let ls=`
    query submissionAnalysis($submissionId: ID!) {
  submissionAnalysis(submissionId: $submissionId) {
    id
    summary
    status
    errorMessage
    timeComplexity {
      complexity
      displayName
      funcStr
    }
    spaceComplexity {
      complexity
      displayName
      funcStr
    }
    suggestedTimeComplexity {
      complexity
      displayName
      funcStr
    }
    suggestedSpaceComplexity {
      complexity
      displayName
      funcStr
    }
    efficiencyImprovements
    readabilityScore
    structureScore
    styleImprovements
    currentKnowledge
    suggestedKnowledge
    coreConcept
    guidanceQuestion
    vote
  }
}
    `,la=(e,t,r,n)=>(0,R.I)({queryKey:["submissionAnalysis",t],queryFn:N(e,ls,t,n),...r});la.document=ls,la.getKey=e=>["submissionAnalysis",e];let lu=`
    query submissionComplexity($submissionId: ID!) {
  submissionComplexity(submissionId: $submissionId) {
    timeComplexity {
      complexity
      displayName
      funcStr
      vote
    }
    memoryComplexity {
      complexity
      displayName
      funcStr
      vote
    }
    isLimited
  }
}
    `,ll=(e,t,r,n)=>(0,R.I)({queryKey:["submissionComplexity",t],queryFn:N(e,lu,t,n),...r});ll.document=lu,ll.getKey=e=>["submissionComplexity",e];let lc=`
    mutation submissionSubmitAnalysis($submissionId: ID!) {
  submissionSubmitAnalysis(submissionId: $submissionId) {
    message
    error
    ok
  }
}
    `,ld=(e,t,r)=>(0,L.n)({mutationKey:["submissionSubmitAnalysis"],mutationFn:t=>N(e,lc,t,r)(),...t}),lp=`
    mutation addFilteredQuestionsToFavorite($favoriteSlug: String!, $categorySlug: String, $filters: QuestionFilterInput, $searchKeyword: String, $sortBy: QuestionSortByInput) {
  addFilteredQuestionsToFavorite(
    favoriteSlug: $favoriteSlug
    categorySlug: $categorySlug
    filters: $filters
    searchKeyword: $searchKeyword
    sortBy: $sortBy
  ) {
    ok
    error
  }
}
    `,lm=(e,t,r)=>(0,L.n)({mutationKey:["addFilteredQuestionsToFavorite"],mutationFn:t=>N(e,lp,t,r)(),...t}),lf=`
    query enableLcIde {
  feature {
    enableLcIde
  }
}
    `,lg=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["enableLcIde"]:["enableLcIde",t],queryFn:N(e,lf,t,n),...r});lg.document=lf,lg.getKey=e=>void 0===e?["enableLcIde"]:["enableLcIde",e];let ly=`
    query featuredQuestionLists {
  featuredQuestionLists {
    publicId
    idHash
    name
    coverUrl
    isPaidOnly
    creator
    description
    tags {
      name
      slug
    }
    questionCount
    acStats {
      difficulty
      count
    }
  }
}
    `,lh=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["featuredQuestionLists"]:["featuredQuestionLists",t],queryFn:N(e,ly,t,n),...r});lh.document=ly,lh.getKey=e=>void 0===e?["featuredQuestionLists"]:["featuredQuestionLists",e];let lv=`
    mutation logTagSearchHit($tagSlug: String!) {
  tagSearchHit(tagSlug: $tagSlug) {
    ok
    error
  }
}
    `,lb=(e,t,r)=>(0,L.n)({mutationKey:["logTagSearchHit"],mutationFn:t=>N(e,lv,t,r)(),...t}),lS=`
    query problemsetPanelQuestionList($filters: QuestionFilterInput, $searchKeyword: String, $sortBy: QuestionSortByInput, $categorySlug: String, $limit: Int, $skip: Int) {
  problemsetPanelQuestionList(
    filters: $filters
    searchKeyword: $searchKeyword
    sortBy: $sortBy
    categorySlug: $categorySlug
    limit: $limit
    skip: $skip
  ) {
    questions {
      id
      titleSlug
      title
      translatedTitle
      questionFrontendId
      paidOnly
      difficulty
      topicTags {
        name
        slug
        nameTranslated
      }
      status
      isInMyFavorites
      frequency
      acRate
    }
    totalLength
    finishedLength
    panelName
    hasMore
  }
}
    `,lw=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["problemsetPanelQuestionList"]:["problemsetPanelQuestionList",t],queryFn:N(e,lS,t,n),...r});lw.document=lS,lw.getKey=e=>void 0===e?["problemsetPanelQuestionList"]:["problemsetPanelQuestionList",e];let lI=`
    query questionCompanyTags {
  companyTags {
    name
    slug
    questionCount
  }
}
    `,l$=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["questionCompanyTags"]:["questionCompanyTags",t],queryFn:N(e,lI,t,n),...r});l$.document=lI,l$.getKey=e=>void 0===e?["questionCompanyTags"]:["questionCompanyTags",e];let lC=`
    query questionOfTodayV2 {
  activeDailyCodingChallengeQuestion {
    date
    userStatus
    link
    question {
      id: questionId
      titleSlug
      title
      translatedTitle
      questionFrontendId
      paidOnly: isPaidOnly
      difficulty
      topicTags {
        name
        slug
        nameTranslated: translatedName
      }
      status
      isInMyFavorites: isFavor
      acRate
      frequency: freqBar
    }
  }
}
    `,lk=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["questionOfTodayV2"]:["questionOfTodayV2",t],queryFn:N(e,lC,t,n),...r});lk.document=lC,lk.getKey=e=>void 0===e?["questionOfTodayV2"]:["questionOfTodayV2",e];let lA=`
    query questionOfToday {
  activeDailyCodingChallengeQuestion {
    link
  }
}
    `,lq=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["questionOfToday"]:["questionOfToday",t],queryFn:N(e,lA,t,n),...r});lq.document=lA,lq.getKey=e=>void 0===e?["questionOfToday"]:["questionOfToday",e];let lO=`
    query questionTopicTags {
  questionTopicTags {
    edges {
      node {
        id
        name
        slug
        translatedName
        questionIds
      }
    }
  }
}
    `,lT=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["questionTopicTags"]:["questionTopicTags",t],queryFn:N(e,lO,t,n),...r});lT.document=lO,lT.getKey=e=>void 0===e?["questionTopicTags"]:["questionTopicTags",e];let lP=`
    query randomQuestion($categorySlug: String, $filters: QuestionListFilterInput) {
  randomQuestion(categorySlug: $categorySlug, filters: $filters) {
    titleSlug
  }
}
    `,lx=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["randomQuestion"]:["randomQuestion",t],queryFn:N(e,lP,t,n),...r});lx.document=lP,lx.getKey=e=>void 0===e?["randomQuestion"]:["randomQuestion",e];let lE=`
    mutation recordCompanyTagClick($slug: String!) {
  recordCompanyTagClick(slug: $slug) {
    ok
  }
}
    `,lF=(e,t,r)=>(0,L.n)({mutationKey:["recordCompanyTagClick"],mutationFn:t=>N(e,lE,t,r)(),...t}),lR=`
    query userSessionProgress($username: String!) {
  allQuestionsCount {
    difficulty
    count
  }
  matchedUser(username: $username) {
    submitStats {
      acSubmissionNum {
        difficulty
        count
        submissions
      }
      totalSubmissionNum {
        difficulty
        count
        submissions
      }
    }
  }
}
    `,lL=(e,t,r,n)=>(0,R.I)({queryKey:["userSessionProgress",t],queryFn:N(e,lR,t,n),...r});lL.document=lR,lL.getKey=e=>["userSessionProgress",e];let lN=`
    query activeBadge($username: String!) {
  matchedUser(username: $username) {
    activeBadge {
      name
      id
      icon
    }
  }
}
    `,l_=(e,t,r,n)=>(0,R.I)({queryKey:["activeBadge",t],queryFn:N(e,lN,t,n),...r});l_.document=lN,l_.getKey=e=>["activeBadge",e];let lD=`
    mutation blockUser($userSlug: String!) {
  blockUser(userSlug: $userSlug) {
    ok
    error
  }
}
    `,lj=(e,t,r)=>(0,L.n)({mutationKey:["blockUser"],mutationFn:t=>N(e,lD,t,r)(),...t}),lK=`
    query blockedUsers($pageNumber: Int, $resultPerPage: Int) {
  blockedUsers(pageNumber: $pageNumber, resultPerPage: $resultPerPage) {
    allNum
    users {
      realName
      userSlug
      userAvatar
      aboutMe
    }
  }
}
    `,lM=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["blockedUsers"]:["blockedUsers",t],queryFn:N(e,lK,t,n),...r});lM.document=lK,lM.getKey=e=>void 0===e?["blockedUsers"]:["blockedUsers",e];let lU=`
    query canSeeOtherCalendar($userSlug: String!) {
  canSeeOtherCalendar(userSlug: $userSlug)
}
    `,lV=(e,t,r,n)=>(0,R.I)({queryKey:["canSeeOtherCalendar",t],queryFn:N(e,lU,t,n),...r});lV.document=lU,lV.getKey=e=>["canSeeOtherCalendar",e];let lQ=`
    query canSeeOtherSubmissionHistory($userSlug: String!) {
  canSeeOtherSubmissionHistory(userSlug: $userSlug)
}
    `,lB=(e,t,r,n)=>(0,R.I)({queryKey:["canSeeOtherSubmissionHistory",t],queryFn:N(e,lQ,t,n),...r});lB.document=lQ,lB.getKey=e=>["canSeeOtherSubmissionHistory",e];let lG=`
    query contestRatingHistogram {
  contestRatingHistogram {
    userCount
    ratingStart
    ratingEnd
    topPercentage
  }
}
    `,lz=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["contestRatingHistogram"]:["contestRatingHistogram",t],queryFn:N(e,lG,t,n),...r});lz.document=lG,lz.getKey=e=>void 0===e?["contestRatingHistogram"]:["contestRatingHistogram",e];let lH=`
    query createdPublicFavoriteList($userSlug: String!) {
  createdPublicFavoriteList(userSlug: $userSlug) {
    hasMore
    totalLength
    favorites {
      slug
      coverUrl
      coverEmoji
      coverBackgroundColor
      name
      isPublicFavorite
      lastQuestionAddedAt
      hasCurrentQuestion
      viewCount
      description
      questionNumber
      isDefaultList
    }
  }
}
    `,lW=(e,t,r,n)=>(0,R.I)({queryKey:["createdPublicFavoriteList",t],queryFn:N(e,lH,t,n),...r});lW.document=lH,lW.getKey=e=>["createdPublicFavoriteList",e];let lY=`
    query followCounts($userSlug: String!) {
  followers(userSlug: $userSlug) {
    allNum
  }
  following(userSlug: $userSlug) {
    allNum
  }
}
    `,lJ=(e,t,r,n)=>(0,R.I)({queryKey:["followCounts",t],queryFn:N(e,lY,t,n),...r});lJ.document=lY,lJ.getKey=e=>["followCounts",e];let lX=`
    query followStatus($username: String!) {
  matchedUser(username: $username) {
    profile {
      isFollowedByMe
    }
  }
}
    `,lZ=(e,t,r,n)=>(0,R.I)({queryKey:["followStatus",t],queryFn:N(e,lX,t,n),...r});lZ.document=lX,lZ.getKey=e=>["followStatus",e];let l0=`
    mutation followUser($userSlug: String!) {
  followUser(userSlug: $userSlug) {
    ok
    error
  }
}
    `,l1=(e,t,r)=>(0,L.n)({mutationKey:["followUser"],mutationFn:t=>N(e,l0,t,r)(),...t}),l2=`
    query followers($userSlug: String!, $pageNumber: Int, $resultPerPage: Int) {
  followers(
    userSlug: $userSlug
    pageNumber: $pageNumber
    resultPerPage: $resultPerPage
  ) {
    users {
      realName
      userAvatar
      userSlug
      aboutMe
      isFollowingMe
      isFollowedByMe
    }
  }
}
    `,l4=(e,t,r,n)=>(0,R.I)({queryKey:["followers",t],queryFn:N(e,l2,t,n),...r});l4.document=l2,l4.getKey=e=>["followers",e];let l3=`
    query following($userSlug: String!, $pageNumber: Int, $resultPerPage: Int) {
  following(
    userSlug: $userSlug
    pageNumber: $pageNumber
    resultPerPage: $resultPerPage
  ) {
    users {
      realName
      userAvatar
      userSlug
      aboutMe
      isFollowingMe
      isFollowedByMe
    }
  }
}
    `,l8=(e,t,r,n)=>(0,R.I)({queryKey:["following",t],queryFn:N(e,l3,t,n),...r});l8.document=l3,l8.getKey=e=>["following",e];let l5=`
    query languageStats($username: String!) {
  matchedUser(username: $username) {
    languageProblemCount {
      languageName
      problemsSolved
    }
  }
}
    `,l6=(e,t,r,n)=>(0,R.I)({queryKey:["languageStats",t],queryFn:N(e,l5,t,n),...r});l6.document=l5,l6.getKey=e=>["languageStats",e];let l7=`
    query recentAcSubmissions($username: String!, $limit: Int!) {
  recentAcSubmissionList(username: $username, limit: $limit) {
    id
    title
    titleSlug
    timestamp
  }
}
    `,l9=(e,t,r,n)=>(0,R.I)({queryKey:["recentAcSubmissions",t],queryFn:N(e,l7,t,n),...r});l9.document=l7,l9.getKey=e=>["recentAcSubmissions",e];let ce=`
    mutation setActiveBadge($badgeId: ID) {
  updatePublicBadge(badgeId: $badgeId) {
    activeBadge {
      id
    }
  }
}
    `,ct=(e,t,r)=>(0,L.n)({mutationKey:["setActiveBadge"],mutationFn:t=>N(e,ce,t,r)(),...t}),cr=`
    query skillStats($username: String!) {
  matchedUser(username: $username) {
    tagProblemCounts {
      advanced {
        tagName
        tagSlug
        problemsSolved
      }
      intermediate {
        tagName
        tagSlug
        problemsSolved
      }
      fundamental {
        tagName
        tagSlug
        problemsSolved
      }
    }
  }
}
    `,cn=(e,t,r,n)=>(0,R.I)({queryKey:["skillStats",t],queryFn:N(e,cr,t,n),...r});cn.document=cr,cn.getKey=e=>["skillStats",e];let ci=`
    query ugcArticleUserSolutionArticles($username: String!, $orderBy: ArticleOrderByEnum, $skip: Int, $before: String, $after: String, $first: Int, $last: Int) {
  ugcArticleUserSolutionArticles(
    username: $username
    orderBy: $orderBy
    skip: $skip
    before: $before
    after: $after
    first: $first
    last: $last
  ) {
    totalNum
    pageInfo {
      hasNextPage
    }
    edges {
      node {
        topicId
        uuid
        title
        slug
        createdAt
        hitCount
        questionSlug
        questionTitle
        reactions {
          count
          reactionType
        }
      }
    }
  }
}
    `,co=(e,t,r,n)=>(0,R.I)({queryKey:["ugcArticleUserSolutionArticles",t],queryFn:N(e,ci,t,n),...r});co.document=ci,co.getKey=e=>["ugcArticleUserSolutionArticles",e];let cs=`
    mutation unblockUser($userSlug: String!) {
  unblockUser(userSlug: $userSlug) {
    ok
    error
  }
}
    `,ca=(e,t,r)=>(0,L.n)({mutationKey:["unblockUser"],mutationFn:t=>N(e,cs,t,r)(),...t}),cu=`
    mutation unfollowUser($userSlug: String!) {
  unfollowUser(userSlug: $userSlug) {
    ok
    error
  }
}
    `,cl=(e,t,r)=>(0,L.n)({mutationKey:["unfollowUser"],mutationFn:t=>N(e,cu,t,r)(),...t}),cc=`
    query userBadges($username: String!) {
  matchedUser(username: $username) {
    badges {
      id
      name
      shortName
      displayName
      icon
      hoverText
      medal {
        slug
        config {
          iconGif
          iconGifBackground
        }
      }
      creationDate
      category
    }
    upcomingBadges {
      name
      icon
      progress
    }
  }
}
    `,cd=(e,t,r,n)=>(0,R.I)({queryKey:["userBadges",t],queryFn:N(e,cc,t,n),...r});cd.document=cc,cd.getKey=e=>["userBadges",e];let cp=`
    query userContestBaseRating($userSlug: String!) {
  userContestBaseRating(username: $userSlug) {
    rating
    attendedContestsCount
  }
}
    `,cm=(e,t,r,n)=>(0,R.I)({queryKey:["userContestBaseRating",t],queryFn:N(e,cp,t,n),...r});cm.document=cp,cm.getKey=e=>["userContestBaseRating",e];let cf=`
    query userContestRankingInfo($username: String!) {
  userContestRanking(username: $username) {
    attendedContestsCount
    rating
    globalRanking
    totalParticipants
    topPercentage
    badge {
      name
    }
  }
  userContestRankingHistory(username: $username) {
    attended
    trendDirection
    problemsSolved
    totalProblems
    finishTimeInSeconds
    rating
    ranking
    contest {
      title
      startTime
    }
  }
}
    `,cg=(e,t,r,n)=>(0,R.I)({queryKey:["userContestRankingInfo",t],queryFn:N(e,cf,t,n),...r});cg.document=cf,cg.getKey=e=>["userContestRankingInfo",e];let cy=`
    query getUserDiscussTopics($orderBy: ArticleOrderByEnum, $username: String!, $skip: Int, $first: Int) {
  ugcArticleUserDiscussionArticles(
    orderBy: $orderBy
    username: $username
    skip: $skip
    first: $first
  ) {
    totalNum
    pageInfo {
      hasNextPage
    }
    edges {
      node {
        topicId
        title
        slug
        hitCount
        createdAt
        reactions {
          count
          reactionType
        }
      }
    }
  }
}
    `,ch=(e,t,r,n)=>(0,R.I)({queryKey:["getUserDiscussTopics",t],queryFn:N(e,cy,t,n),...r});ch.document=cy,ch.getKey=e=>["getUserDiscussTopics",e];let cv=`
    query userProfileCalendar($username: String!, $year: Int) {
  matchedUser(username: $username) {
    userCalendar(year: $year) {
      activeYears
      streak
      totalActiveDays
      dccBadges {
        timestamp
        badge {
          name
          icon
        }
      }
      submissionCalendar
    }
  }
}
    `,cb=(e,t,r,n)=>(0,R.I)({queryKey:["userProfileCalendar",t],queryFn:N(e,cv,t,n),...r});cb.document=cv,cb.getKey=e=>["userProfileCalendar",e];let cS=`
    query userPublicProfile($username: String!) {
  matchedUser(username: $username) {
    isBlocked
    isBlocker
    contestBadge {
      name
      expired
      hoverText
      icon
    }
    username
    githubUrl
    twitterUrl
    linkedinUrl
    profile {
      ranking
      userAvatar
      realName
      aboutMe
      school
      websites
      countryName
      company
      jobTitle
      skillTags
      postViewCount
      postViewCountDiff
      reputation
      reputationDiff
      solutionCountDiff
      categoryDiscussCountDiff
      certificationLevel
      isFollowingMe
      isFollowedByMe
      hideFollowers
      hideFollowing
    }
  }
  ugcArticleUserSolutionArticles(username: $username, skip: 0, first: 0) {
    totalNum
  }
  ugcArticleUserDiscussionArticles(username: $username, skip: 0, first: 0) {
    totalNum
  }
}
    `,cw=(e,t,r,n)=>(0,R.I)({queryKey:["userPublicProfile",t],queryFn:N(e,cS,t,n),...r});cw.document=cS,cw.getKey=e=>["userPublicProfile",e];let cI=`
    query userProfileUserQuestionProgressV2($userSlug: String!) {
  userProfileUserQuestionProgressV2(userSlug: $userSlug) {
    numAcceptedQuestions {
      count
      difficulty
    }
    numFailedQuestions {
      count
      difficulty
    }
    numUntouchedQuestions {
      count
      difficulty
    }
    userSessionBeatsPercentage {
      difficulty
      percentage
    }
    totalQuestionBeatsPercentage
  }
}
    `,c$=(e,t,r,n)=>(0,R.I)({queryKey:["userProfileUserQuestionProgressV2",t],queryFn:N(e,cI,t,n),...r});c$.document=cI,c$.getKey=e=>["userProfileUserQuestionProgressV2",e];let cC=`
    query userSolutionTopics($username: String!, $orderBy: TopicSortingOption, $skip: Int, $first: Int) {
  userSolutionTopics(
    username: $username
    orderBy: $orderBy
    skip: $skip
    first: $first
  ) {
    pageInfo {
      hasNextPage
    }
    edges {
      node {
        id
        title
        url
        viewCount
        questionTitle
        post {
          creationDate
          voteCount
        }
      }
    }
  }
}
    `,ck=(e,t,r,n)=>(0,R.I)({queryKey:["userSolutionTopics",t],queryFn:N(e,cC,t,n),...r});ck.document=cC,ck.getKey=e=>["userSolutionTopics",e];let cA=`
    query getAnnualInfo {
  getAnnualInfo
}
    `,cq=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["getAnnualInfo"]:["getAnnualInfo",t],queryFn:N(e,cA,t,n),...r});cq.document=cA,cq.getKey=e=>void 0===e?["getAnnualInfo"]:["getAnnualInfo",e];let cO=`
    query userProgressCalendarV2($queryType: ProgressCalendarQueryTypeEnum!, $year: Int!, $month: Int, $groupByWeek: Boolean) {
  userProgressCalendarV2(
    queryType: $queryType
    year: $year
    month: $month
    groupByWeek: $groupByWeek
  ) {
    dateSolvedInfoWithinMonth {
      date
      easySolvedNum
      hardSolvedNum
      mediumSolvedNum
    }
    dateSubmissionNumWithinMonth {
      date
      numSubmitted
    }
    monthSolvedInfoWithinYear {
      easySolvedNum
      hardSolvedNum
      mediumSolvedNum
      month
    }
    monthSubmissionNumWithinYear {
      month
      numSubmitted
    }
    weekSolvedInfoWithinMonth {
      weekStartDate
      easySolvedNum
      mediumSolvedNum
      hardSolvedNum
    }
    weekSubmissionNumWithinMonth {
      weekStartDate
      numSubmitted
    }
  }
}
    `,cT=(e,t,r,n)=>(0,R.I)({queryKey:["userProgressCalendarV2",t],queryFn:N(e,cO,t,n),...r});cT.document=cO,cT.getKey=e=>["userProgressCalendarV2",e];let cP=`
    query userProgressFirstSubmissionYear {
  userProgressFirstSubmissionYear
}
    `,cx=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["userProgressFirstSubmissionYear"]:["userProgressFirstSubmissionYear",t],queryFn:N(e,cP,t,n),...r});cx.document=cP,cx.getKey=e=>void 0===e?["userProgressFirstSubmissionYear"]:["userProgressFirstSubmissionYear",e];let cE=`
    query userProgressKnowledgeList {
  userProgressKnowledgeList {
    progressKnowledgeInfo {
      finishedNum
      totalNum
      knowledgeTag {
        slug
        name
        nameTranslated
      }
    }
  }
}
    `,cF=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["userProgressKnowledgeList"]:["userProgressKnowledgeList",t],queryFn:N(e,cE,t,n),...r});cF.document=cE,cF.getKey=e=>void 0===e?["userProgressKnowledgeList"]:["userProgressKnowledgeList",e];let cR=`
    query userProgressQuestionList($filters: UserProgressQuestionListInput) {
  userProgressQuestionList(filters: $filters) {
    totalNum
    questions {
      translatedTitle
      frontendId
      title
      titleSlug
      difficulty
      lastSubmittedAt
      numSubmitted
      questionStatus
      lastResult
      topicTags {
        name
        nameTranslated
        slug
      }
    }
  }
}
    `,cL=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["userProgressQuestionList"]:["userProgressQuestionList",t],queryFn:N(e,cR,t,n),...r});cL.document=cR,cL.getKey=e=>void 0===e?["userProgressQuestionList"]:["userProgressQuestionList",e];let cN=`
    query userProgressSubmissionList($offset: Int!, $limit: Int!, $questionSlug: String!) {
  userProgressSubmissionList(
    offset: $offset
    limit: $limit
    questionSlug: $questionSlug
  ) {
    submissions {
      id
      status
      langName
      runtime
      timestamp
      memory
    }
    totalNum
  }
}
    `,c_=(e,t,r,n)=>(0,R.I)({queryKey:["userProgressSubmissionList",t],queryFn:N(e,cN,t,n),...r});c_.document=cN,c_.getKey=e=>["userProgressSubmissionList",e];let cD=`
    mutation acknowledgeSandboxReset($problemSlug: String!) {
  acknowledgeSandboxReset(problemSlug: $problemSlug) {
    ok
  }
}
    `,cj=(e,t,r)=>(0,L.n)({mutationKey:["acknowledgeSandboxReset"],mutationFn:t=>N(e,cD,t,r)(),...t}),cK=`
    mutation createOrGetUserSandbox($problemSlug: String!) {
  createOrGetUserSandbox(problemSlug: $problemSlug) {
    ok
    error
    sandboxStatus {
      status
      ready
      url
      message
      authToken
      resetReason
      backupDirName
      repoTag
    }
  }
}
    `,cM=(e,t,r)=>(0,L.n)({mutationKey:["createOrGetUserSandbox"],mutationFn:t=>N(e,cK,t,r)(),...t}),cU=`
    query projectProblemDetail($problemSlug: String!) {
  projectProblemDetail(problemSlug: $problemSlug) {
    slug
    title
    summary
    difficulty
    estimatedSolvingMin
    iconUrl
    topicTags {
      nameTranslated
      name
    }
  }
}
    `,cV=(e,t,r,n)=>(0,R.I)({queryKey:["projectProblemDetail",t],queryFn:N(e,cU,t,n),...r});cV.document=cU,cV.getKey=e=>["projectProblemDetail",e];let cQ=`
    query projectProblemList {
  projectProblemList(skip: 0, limit: 20) {
    hasMore
    nodes {
      slug
      title
      summary
      difficulty
      estimatedSolvingMin
      iconUrl
      topicTags {
        nameTranslated
        name
      }
    }
  }
}
    `,cB=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["projectProblemList"]:["projectProblemList",t],queryFn:N(e,cQ,t,n),...r});cB.document=cQ,cB.getKey=e=>void 0===e?["projectProblemList"]:["projectProblemList",e];let cG=`
    query projectProblemSubmissionResult($problemSlug: String!, $id: ID!) {
  projectProblemSubmissionResult(problemSlug: $problemSlug, id: $id) {
    status
    reportPath
    errorMessage
  }
}
    `,cz=(e,t,r,n)=>(0,R.I)({queryKey:["projectProblemSubmissionResult",t],queryFn:N(e,cG,t,n),...r});cz.document=cG,cz.getKey=e=>["projectProblemSubmissionResult",e];let cH=`
    mutation resetUserSandbox($problemSlug: String!) {
  resetUserSandbox(problemSlug: $problemSlug) {
    ok
    error
  }
}
    `,cW=(e,t,r)=>(0,L.n)({mutationKey:["resetUserSandbox"],mutationFn:t=>N(e,cH,t,r)(),...t}),cY=`
    query sandboxStatus($problemSlug: String!) {
  sandboxStatus(problemSlug: $problemSlug) {
    status
    ready
    url
    message
    authToken
    resetReason
    backupDirName
    repoTag
  }
}
    `,cJ=(e,t,r,n)=>(0,R.I)({queryKey:["sandboxStatus",t],queryFn:N(e,cY,t,n),...r});cJ.document=cY,cJ.getKey=e=>["sandboxStatus",e];let cX=`
    mutation submitProjectProblem($problemSlug: String!) {
  submitProjectProblem(problemSlug: $problemSlug) {
    ok
    error
    submissionId
  }
}
    `,cZ=(e,t,r)=>(0,L.n)({mutationKey:["submitProjectProblem"],mutationFn:t=>N(e,cX,t,r)(),...t}),c0=`
    mutation claimQuestLevelReward($levelId: ID!) {
  questLevelReward(levelId: $levelId) {
    ok
    rewardPoints
    rewardBadge {
      name
      slug
      config {
        icon
        iconGif
        iconWearing
        iconGifBackground
      }
      awardDescription
      obtainDescription
    }
  }
}
    `,c1=(e,t,r)=>(0,L.n)({mutationKey:["claimQuestLevelReward"],mutationFn:t=>N(e,c0,t,r)(),...t}),c2=`
    mutation claimQuestQuizReward($quizId: ID!) {
  questQuizReward(quizId: $quizId) {
    ok
    rewardPoints
    rewardBadge {
      name
      slug
      config {
        icon
        iconGif
        iconWearing
        iconGifBackground
      }
      awardDescription
      obtainDescription
    }
  }
}
    `,c4=(e,t,r)=>(0,L.n)({mutationKey:["claimQuestQuizReward"],mutationFn:t=>N(e,c2,t,r)(),...t}),c3=`
    mutation questQuizEnd($quizId: ID!) {
  questQuizEnd(quizId: $quizId) {
    ok
  }
}
    `,c8=(e,t,r)=>(0,L.n)({mutationKey:["questQuizEnd"],mutationFn:t=>N(e,c3,t,r)(),...t}),c5=`
    query questDetail($questSlug: String!) {
  questDetail(questSlug: $questSlug) {
    id
    name
    slug
    icon
    progress {
      hasCompleted
      completedUnitNum
      completedLevelNum
    }
  }
  questNextLevel(questSlug: $questSlug) {
    id
  }
  questUnits(questSlug: $questSlug) {
    id
    name
    color
    icon
    isUnlocked
    totalLevelNum
    completedLevelNum
    sections {
      levels {
        id
        name
        isUnlocked
        isPremium
        isReward
        favoriteSlug
        favoriteQuestionNum
        entryQuestionSlug
        progress {
          hasReward
          hasCompleted
          completedQuestionNum
        }
      }
      main
    }
    quizs {
      id
      name
      isUnlocked
      isReward
      favoriteSlug
      favoriteQuestionNum
      entryQuestionSlug
      quizMinutes
      progress {
        hasReward
        hasCompleted
        completedQuestionNum
        startedAt
      }
    }
  }
}
    `,c6=(e,t,r,n)=>(0,R.I)({queryKey:["questDetail",t],queryFn:N(e,c5,t,n),...r});c6.document=c5,c6.getKey=e=>["questDetail",e];let c7=`
    query questLevelDetail($favoriteSlug: String) {
  questLevelDetail(favoriteSlug: $favoriteSlug) {
    id
    name
    isUnlocked
    isPremium
    isReward
    favoriteSlug
    favoriteQuestionNum
    progress {
      hasCompleted
      hasReward
      completedQuestionNum
    }
    quest {
      id
      name
      slug
      icon
      unitNum
    }
    nextQuestionSlug
    isUnitCompleted
    isQuestCompleted
  }
}
    `,c9=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["questLevelDetail"]:["questLevelDetail",t],queryFn:N(e,c7,t,n),...r});c9.document=c7,c9.getKey=e=>void 0===e?["questLevelDetail"]:["questLevelDetail",e];let de=`
    query questLevelNextQuestionSlug($favoriteSlug: String) {
  questLevelDetail(favoriteSlug: $favoriteSlug) {
    nextQuestionSlug
  }
}
    `,dt=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["questLevelNextQuestionSlug"]:["questLevelNextQuestionSlug",t],queryFn:N(e,de,t,n),...r});dt.document=de,dt.getKey=e=>void 0===e?["questLevelNextQuestionSlug"]:["questLevelNextQuestionSlug",e];let dr=`
    query questListQuestionOrder($favoriteSlug: String!) {
  favoriteQuestionList(
    favoriteSlug: $favoriteSlug
    sortBy: {sortField: CUSTOM, sortOrder: ASCENDING}
    version: "v2"
  ) {
    questions {
      titleSlug
    }
  }
}
    `,dn=(e,t,r,n)=>(0,R.I)({queryKey:["questListQuestionOrder",t],queryFn:N(e,dr,t,n),...r});dn.document=dr,dn.getKey=e=>["questListQuestionOrder",e];let di=`
    query questList {
  quests {
    id
    name
    slug
    icon
    isStarted
    units {
      id
      name
      totalLevelNum
      completedLevelNum
    }
  }
}
    `,ds=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["questList"]:["questList",t],queryFn:N(e,di,t,n),...r});ds.document=di,ds.getKey=e=>void 0===e?["questList"]:["questList",e];let da=`
    query questNextLevel($questSlug: String!) {
  questNextLevel(questSlug: $questSlug) {
    id
    name
    favoriteSlug
    nextQuestionSlug
  }
}
    `,du=(e,t,r,n)=>(0,R.I)({queryKey:["questNextLevel",t],queryFn:N(e,da,t,n),...r});du.document=da,du.getKey=e=>["questNextLevel",e];let dl=`
    query questQuizDetail($favoriteSlug: String) {
  questQuizDetail(favoriteSlug: $favoriteSlug) {
    id
    name
    isUnlocked
    isReward
    favoriteSlug
    favoriteQuestionNum
    quizMinutes
    progress {
      hasCompleted
      hasReward
      completedQuestionNum
      startedAt
    }
    quest {
      id
      name
      slug
      icon
      unitNum
    }
  }
}
    `,dc=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["questQuizDetail"]:["questQuizDetail",t],queryFn:N(e,dl,t,n),...r});dc.document=dl,dc.getKey=e=>void 0===e?["questQuizDetail"]:["questQuizDetail",e];let dd=`
    mutation StartQuestLevel($levelId: ID!) {
  questLevelStart(levelId: $levelId) {
    ok
  }
}
    `,dp=(e,t,r)=>(0,L.n)({mutationKey:["StartQuestLevel"],mutationFn:t=>N(e,dd,t,r)(),...t}),dm=`
    mutation StartQuestQuiz($quizId: ID!) {
  questQuizStart(quizId: $quizId) {
    ok
  }
}
    `,df=(e,t,r)=>(0,L.n)({mutationKey:["StartQuestQuiz"],mutationFn:t=>N(e,dm,t,r)(),...t}),dg=`
    mutation StartQuest($questSlug: String!) {
  questStart(questSlug: $questSlug) {
    ok
  }
}
    `,dy=(e,t,r)=>(0,L.n)({mutationKey:["StartQuest"],mutationFn:t=>N(e,dg,t,r)(),...t}),dh=`
    query checkRedeemOwner($uuid: String!) {
  checkRedeemOwner(uuid: $uuid)
}
    `,dv=(e,t,r,n)=>(0,R.I)({queryKey:["checkRedeemOwner",t],queryFn:N(e,dh,t,n),...r});dv.document=dh,dv.getKey=e=>["checkRedeemOwner",e];let db=`
    mutation storeSendRedeemEmails($uuid: String!, $emails: [String]!) {
  storeSendRedeemEmails(uuid: $uuid, emails: $emails) {
    ok
  }
}
    `,dS=(e,t,r)=>(0,L.n)({mutationKey:["storeSendRedeemEmails"],mutationFn:t=>N(e,db,t,r)(),...t}),dw=`
    mutation AuthRequestPasswordResetByEmail($email: String!) {
  authRequestPasswordResetByEmail(email: $email) {
    ok
    error
  }
}
    `,dI=(e,t,r)=>(0,L.n)({mutationKey:["AuthRequestPasswordResetByEmail"],mutationFn:t=>N(e,dw,t,r)(),...t}),d$=`
    mutation AuthResetPasswordByEmail($data: AuthResetPasswordByEmailInput!) {
  authResetPasswordByEmail(data: $data) {
    ok
    error
  }
}
    `,dC=(e,t,r)=>(0,L.n)({mutationKey:["AuthResetPasswordByEmail"],mutationFn:t=>N(e,d$,t,r)(),...t}),dk=`
    mutation authVerifyPasswordResetByEmail($code: String!, $email: String!) {
  authVerifyPasswordResetByEmail(email: $email, code: $code) {
    ok
    error
  }
}
    `,dA=(e,t,r)=>(0,L.n)({mutationKey:["authVerifyPasswordResetByEmail"],mutationFn:t=>N(e,dk,t,r)(),...t}),dq=`
    mutation annualAddFavorite($year: Int!) {
  annualAddFavorite(year: $year) {
    favoriteSlug
  }
}
    `,dO=(e,t,r)=>(0,L.n)({mutationKey:["annualAddFavorite"],mutationFn:t=>N(e,dq,t,r)(),...t}),dT=`
    query annualDataForYear($year: Int!) {
  annualDataForYear(year: $year) {
    badges {
      imgSrc
      name
    }
    user {
      avatar
      dateJoined
      realName
      userSlug
    }
    questionsSolved {
      acSubmissions
      easy
      hard
      medium
      percentile
      total
      totalSubmissions
    }
    solutionsPublished
    upvotesReceived
    mostUsedLanguage
    mostSolvedTags
    mostAttemptedQuestion {
      questionFrontendId
      titleSlug
      title
    }
    dailyCodingChallenge {
      longestStreak
      totalCompleted
    }
    contests {
      attended
      globalRanking
      highestContest
      highestRanking
    }
  }
}
    `,dP=(e,t,r,n)=>(0,R.I)({queryKey:["annualDataForYear",t],queryFn:N(e,dT,t,n),...r});dP.document=dT,dP.getKey=e=>["annualDataForYear",e];let dx=`
    query rewindData($year: Int!) {
  rewindData(year: $year) {
    ageInDays
    totalQuestionsSolved
    easyProblemsSolved
    mediumProblemsSolved
    hardProblemsSolved
    problemSolvePercentile
    mostAttemptedQuestion {
      title
      questionFrontendId
    }
    mostUsedLanguage
    mostSolvedTags
    maxStreak
    dccSolvedCount
    badges {
      name
      icon
    }
    solutionsPublished
    attendedContestCount
    currentGlobalRank
    highestRankingInContest
    highestRankedContest {
      title
    }
    totalSubmissions
    totalAcSubmissions
    receivedVoteUpCount
  }
}
    `,dE=(e,t,r,n)=>(0,R.I)({queryKey:["rewindData",t],queryFn:N(e,dx,t,n),...r});dE.document=dx,dE.getKey=e=>["rewindData",e];let dF=`
    query FavoriteSearchList($offset: Int!, $limit: Int!, $favoriteType: FavoriteSearchTypeEnum, $searchKeyword: String) {
  favoriteSearchList(
    offset: $offset
    limit: $limit
    favoriteType: $favoriteType
    searchKeyword: $searchKeyword
  ) {
    favorites {
      name
      slug
      questionCount
      creator {
        userName
        realName
      }
      collectCount
      isMyCollected
      coverUrl
      coverEmoji
      coverBackgroundColor
      favoriteType
    }
    hasMore
  }
}
    `,dR=(e,t,r,n)=>(0,R.I)({queryKey:["FavoriteSearchList",t],queryFn:N(e,dF,t,n),...r});dR.document=dF,dR.getKey=e=>["FavoriteSearchList",e];let dL=`
    query searchQuestionList($filters: QuestionFilterInput, $limit: Int, $searchKeyword: String, $skip: Int, $sortBy: QuestionSortByInput, $categorySlug: String) {
  problemsetQuestionListV2(
    filters: $filters
    limit: $limit
    searchKeyword: $searchKeyword
    skip: $skip
    sortBy: $sortBy
    categorySlug: $categorySlug
  ) {
    questions {
      id
      titleSlug
      title
      translatedTitle
      questionFrontendId
      paidOnly
      difficulty
      topicTags {
        name
        slug
        nameTranslated
      }
      status
      isInMyFavorites
      frequency
      acRate
      contestPoint
    }
    totalLength
    finishedLength
    hasMore
  }
}
    `,dN=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["searchQuestionList"]:["searchQuestionList",t],queryFn:N(e,dL,t,n),...r});dN.document=dL,dN.getKey=e=>void 0===e?["searchQuestionList"]:["searchQuestionList",e];let d_=`
    query userSearchList($offset: Int!, $limit: Int!, $searchKeyword: String) {
  userSearchList(offset: $offset, limit: $limit, searchKeyword: $searchKeyword) {
    hasMore
    users {
      username
      realName
      userAvatar
      isFollowedByMe
      isFollowingMe
    }
  }
}
    `,dD=(e,t,r,n)=>(0,R.I)({queryKey:["userSearchList",t],queryFn:N(e,d_,t,n),...r});dD.document=d_,dD.getKey=e=>["userSearchList",e];let dj=`
    query accountEmail {
  user {
    emails {
      id
      email
      primary
      verified
    }
  }
}
    `,dK=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["accountEmail"]:["accountEmail",t],queryFn:N(e,dj,t,n),...r});dK.document=dj,dK.getKey=e=>void 0===e?["accountEmail"]:["accountEmail",e];let dM=`
    query accountSettings {
  user {
    socialAccounts
    username
    displayEmails {
      id
      email
      primary
      verified
    }
    phone
    hasUsablePassword
  }
}
    `,dU=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["accountSettings"]:["accountSettings",t],queryFn:N(e,dM,t,n),...r});dU.document=dM,dU.getKey=e=>void 0===e?["accountSettings"]:["accountSettings",e];let dV=`
    mutation authCheckPasswordV2($password: String!) {
  authCheckPasswordV2(password: $password) {
    ok
    error
  }
}
    `,dQ=(e,t,r)=>(0,L.n)({mutationKey:["authCheckPasswordV2"],mutationFn:t=>N(e,dV,t,r)(),...t}),dB=`
    query authResetPhoneByEmailVerify($code: String!) {
  authResetPhoneByEmailVerify(code: $code) {
    ok
    username
  }
}
    `,dG=(e,t,r,n)=>(0,R.I)({queryKey:["authResetPhoneByEmailVerify",t],queryFn:N(e,dB,t,n),...r});dG.document=dB,dG.getKey=e=>["authResetPhoneByEmailVerify",e];let dz=`
    query cfTurnstileKey {
  cfTurnstileKey
}
    `,dH=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["cfTurnstileKey"]:["cfTurnstileKey",t],queryFn:N(e,dz,t,n),...r});dH.document=dz,dH.getKey=e=>void 0===e?["cfTurnstileKey"]:["cfTurnstileKey",e];let dW=`
    mutation checkTwoStepVerificationCode($data: CheckTwoStepVerificationCodeInput!) {
  checkTwoStepVerificationCode(data: $data) {
    ok
    verificationToken
    error
  }
}
    `,dY=(e,t,r)=>(0,L.n)({mutationKey:["checkTwoStepVerificationCode"],mutationFn:t=>N(e,dW,t,r)(),...t}),dJ=`
    mutation confirmVerificationEmail($email: String, $emailId: Int, $emailCode: String!) {
  confirmVerificationEmail(
    email: $email
    emailId: $emailId
    emailCode: $emailCode
  ) {
    ok
    error
  }
}
    `,dX=(e,t,r)=>(0,L.n)({mutationKey:["confirmVerificationEmail"],mutationFn:t=>N(e,dJ,t,r)(),...t}),dZ=`
    mutation deleteEducation($id: Int!) {
  deleteEducation(id: $id) {
    ok
    error
  }
}
    `,d0=(e,t,r)=>(0,L.n)({mutationKey:["deleteEducation"],mutationFn:t=>N(e,dZ,t,r)(),...t}),d1=`
    mutation deleteEmail($emailId: Int) {
  deleteEmail(emailId: $emailId) {
    ok
    error
  }
}
    `,d2=(e,t,r)=>(0,L.n)({mutationKey:["deleteEmail"],mutationFn:t=>N(e,d1,t,r)(),...t}),d4=`
    mutation deleteOccupation($id: Int!) {
  deleteOccupation(id: $id) {
    ok
    error
  }
}
    `,d3=(e,t,r)=>(0,L.n)({mutationKey:["deleteOccupation"],mutationFn:t=>N(e,d4,t,r)(),...t}),d8=`
    mutation deleteSocial($provider: String!) {
  deleteSocial(provider: $provider) {
    ok
    error
  }
}
    `,d5=(e,t,r)=>(0,L.n)({mutationKey:["deleteSocial"],mutationFn:t=>N(e,d8,t,r)(),...t}),d6=`
    query displayHeatmap($userSlug: String!) {
  canSeeOtherCalendar(userSlug: $userSlug)
}
    `,d7=(e,t,r,n)=>(0,R.I)({queryKey:["displayHeatmap",t],queryFn:N(e,d6,t,n),...r});d7.document=d6,d7.getKey=e=>["displayHeatmap",e];let d9=`
    query displaySubmissionHistory($userSlug: String!) {
  canSeeOtherSubmissionHistory(userSlug: $userSlug)
}
    `,pe=(e,t,r,n)=>(0,R.I)({queryKey:["displaySubmissionHistory",t],queryFn:N(e,d9,t,n),...r});pe.document=d9,pe.getKey=e=>["displaySubmissionHistory",e];let pt=`
    mutation hideFollowers($isHidden: Boolean!) {
  hideFollowers(isHidden: $isHidden) {
    ok
  }
}
    `,pr=(e,t,r)=>(0,L.n)({mutationKey:["hideFollowers"],mutationFn:t=>N(e,pt,t,r)(),...t}),pn=`
    mutation hideFollowing($isHidden: Boolean!) {
  hideFollowing(isHidden: $isHidden) {
    ok
  }
}
    `,pi=(e,t,r)=>(0,L.n)({mutationKey:["hideFollowing"],mutationFn:t=>N(e,pn,t,r)(),...t}),po=`
    query notificationSettingsV2 {
  notificationV2Settings {
    settings {
      identifier
      enabledChannels
    }
  }
}
    `,ps=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["notificationSettingsV2"]:["notificationSettingsV2",t],queryFn:N(e,po,t,n),...r});ps.document=po,ps.getKey=e=>void 0===e?["notificationSettingsV2"]:["notificationSettingsV2",e];let pa=`
    query notificationSettings {
  notificationCategoriesV2 {
    category
    status
  }
}
    `,pu=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["notificationSettings"]:["notificationSettings",t],queryFn:N(e,pa,t,n),...r});pu.document=pa,pu.getKey=e=>void 0===e?["notificationSettings"]:["notificationSettings",e];let pl=`
    query phoneNumberCountryCode {
  phonenumberCountryCode {
    locationCountryCode {
      countryName
      countryCode
    }
    countryCodeList {
      countryName
      countryCode
    }
  }
}
    `,pc=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["phoneNumberCountryCode"]:["phoneNumberCountryCode",t],queryFn:N(e,pl,t,n),...r});pc.document=pl,pc.getKey=e=>void 0===e?["phoneNumberCountryCode"]:["phoneNumberCountryCode",e];let pd=`
    query privacySettings {
  user {
    profile {
      privacyContact
      joinStudyPlanLeaderboard
      hideFollowers
      hideFollowing
    }
  }
}
    `,pp=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["privacySettings"]:["privacySettings",t],queryFn:N(e,pd,t,n),...r});pp.document=pd,pp.getKey=e=>void 0===e?["privacySettings"]:["privacySettings",e];let pm=`
    query profileSettings {
  user {
    profile {
      gender
      realName
      location
      birthday
      aboutMe
      websites
      rewardStats
      skillTags
    }
    githubUrl
    linkedinUrl
    twitterUrl
  }
  locationDict
  educationRecordList {
    id
    unverifiedOrganizationName
    startTime
    endTime
    toPresent
    degree
  }
  occupationRecordList {
    id
    unverifiedOrganizationName
    startTime
    endTime
    toPresent
    jobTitle
  }
}
    `,pf=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["profileSettings"]:["profileSettings",t],queryFn:N(e,pm,t,n),...r});pf.document=pm,pf.getKey=e=>void 0===e?["profileSettings"]:["profileSettings",e];let pg=`
    mutation removePhone($verificationToken: String!) {
  phoneRemove(verificationToken: $verificationToken) {
    ok
    error
  }
}
    `,py=(e,t,r)=>(0,L.n)({mutationKey:["removePhone"],mutationFn:t=>N(e,pg,t,r)(),...t}),ph=`
    mutation resetBindPhoneByEmail($data: ResetBindPhoneByEmailInput!) {
  resetBindPhoneByEmail(data: $data) {
    ok
    error
  }
}
    `,pv=(e,t,r)=>(0,L.n)({mutationKey:["resetBindPhoneByEmail"],mutationFn:t=>N(e,ph,t,r)(),...t}),pb=`
    query searchCompanies($search: String!) {
  companies(search: $search) {
    id
    name
  }
}
    `,pS=(e,t,r,n)=>(0,R.I)({queryKey:["searchCompanies",t],queryFn:N(e,pb,t,n),...r});pS.document=pb,pS.getKey=e=>["searchCompanies",e];let pw=`
    query searchJobRoles {
  interviewed {
    positions {
      name
      slug
    }
  }
}
    `,pI=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["searchJobRoles"]:["searchJobRoles",t],queryFn:N(e,pw,t,n),...r});pI.document=pw,pI.getKey=e=>void 0===e?["searchJobRoles"]:["searchJobRoles",e];let p$=`
    query searchSchools($search: String!) {
  schools(search: $search) {
    id
    name
  }
}
    `,pC=(e,t,r,n)=>(0,R.I)({queryKey:["searchSchools",t],queryFn:N(e,p$,t,n),...r});pC.document=p$,pC.getKey=e=>["searchSchools",e];let pk=`
    mutation sendTwoStepVerificationCode($data: SendTwoStepVerificationCodeInput!) {
  sendTwoStepVerificationCode(data: $data) {
    ok
    error
  }
}
    `,pA=(e,t,r)=>(0,L.n)({mutationKey:["sendTwoStepVerificationCode"],mutationFn:t=>N(e,pk,t,r)(),...t}),pq=`
    mutation sendVerificationEmail($email: String, $emailId: Int) {
  sendVerificationEmailV2(email: $email, emailId: $emailId) {
    ok
    error
  }
}
    `,pO=(e,t,r)=>(0,L.n)({mutationKey:["sendVerificationEmail"],mutationFn:t=>N(e,pq,t,r)(),...t}),pT=`
    mutation sendVerificationSms($data: SendVerificationSmsInput!) {
  sendVerificationSms(data: $data) {
    ok
    error
  }
}
    `,pP=(e,t,r)=>(0,L.n)({mutationKey:["sendVerificationSms"],mutationFn:t=>N(e,pT,t,r)(),...t}),px=`
    query socialProviders {
  feature {
    socialProviders
  }
}
    `,pE=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["socialProviders"]:["socialProviders",t],queryFn:N(e,px,t,n),...r});pE.document=px,pE.getKey=e=>void 0===e?["socialProviders"]:["socialProviders",e];let pF=`
    mutation updateEducation($id: Int!, $schoolName: String, $degree: String, $startTime: String, $endTime: String, $toPresent: Boolean) {
  updateEducation(
    id: $id
    schoolName: $schoolName
    degree: $degree
    startTime: $startTime
    endTime: $endTime
    toPresent: $toPresent
  ) {
    ok
    error
    record {
      id
      unverifiedOrganizationName
      startTime
      endTime
      toPresent
      degree
    }
  }
}
    `,pR=(e,t,r)=>(0,L.n)({mutationKey:["updateEducation"],mutationFn:t=>N(e,pF,t,r)(),...t}),pL=`
    mutation updateEmailPrimary($emailId: Int!, $password: String) {
  updateEmailPrimaryV2(emailId: $emailId, password: $password) {
    ok
    error
  }
}
    `,pN=(e,t,r)=>(0,L.n)({mutationKey:["updateEmailPrimary"],mutationFn:t=>N(e,pL,t,r)(),...t}),p_=`
    mutation updateNotificationSettingsV2($configs: [NotificationV2SettingInput!]!) {
  updateNotificationV2Settings(configs: $configs) {
    ok
    result {
      settings {
        identifier
        enabledChannels
      }
    }
  }
}
    `,pD=(e,t,r)=>(0,L.n)({mutationKey:["updateNotificationSettingsV2"],mutationFn:t=>N(e,p_,t,r)(),...t}),pj=`
    mutation updateOccupation($id: Int!, $companyName: String, $jobTitle: String, $startTime: String, $endTime: String, $toPresent: Boolean) {
  updateOccupation(
    id: $id
    companyName: $companyName
    jobTitle: $jobTitle
    startTime: $startTime
    endTime: $endTime
    toPresent: $toPresent
  ) {
    ok
    error
    record {
      id
      unverifiedOrganizationName
      startTime
      endTime
      toPresent
      jobTitle
    }
  }
}
    `,pK=(e,t,r)=>(0,L.n)({mutationKey:["updateOccupation"],mutationFn:t=>N(e,pj,t,r)(),...t}),pM=`
    mutation UpdatePassword($newPassword: String!, $oldPassword: String!) {
  updatePassword(newPassword: $newPassword, oldPassword: $oldPassword) {
    ok
    error: errors
  }
}
    `,pU=(e,t,r)=>(0,L.n)({mutationKey:["UpdatePassword"],mutationFn:t=>N(e,pM,t,r)(),...t}),pV=`
    mutation updatePhoneBy2sv($data: PhoneUpdateBy2SVInput!) {
  phoneUpdateBy2sv(data: $data) {
    ok
    error
  }
}
    `,pQ=(e,t,r)=>(0,L.n)({mutationKey:["updatePhoneBy2sv"],mutationFn:t=>N(e,pV,t,r)(),...t}),pB=`
    mutation updatePhone($data: PhoneUpdateInput!) {
  phoneUpdate(data: $data) {
    ok
    error
    realName
  }
}
    `,pG=(e,t,r)=>(0,L.n)({mutationKey:["updatePhone"],mutationFn:t=>N(e,pB,t,r)(),...t}),pz=`
    mutation updateProfile($fieldName: String!, $value: String) {
  updateProfile(fieldName: $fieldName, value: $value) {
    ok
    error
  }
}
    `,pH=(e,t,r)=>(0,L.n)({mutationKey:["updateProfile"],mutationFn:t=>N(e,pz,t,r)(),...t}),pW=`
    query enableNewStudyPlan {
  feature {
    enableNewStudyPlan
  }
}
    `,pY=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["enableNewStudyPlan"]:["enableNewStudyPlan",t],queryFn:N(e,pW,t,n),...r});pY.document=pW,pY.getKey=e=>void 0===e?["enableNewStudyPlan"]:["enableNewStudyPlan",e];let pJ=`
    query GetStudyPlanCatalogs {
  studyPlanV2Catalogs {
    name
    recommendedStudyPlans
    slug
  }
}
    `,pX=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["GetStudyPlanCatalogs"]:["GetStudyPlanCatalogs",t],queryFn:N(e,pJ,t,n),...r});pX.document=pJ,pX.getKey=e=>void 0===e?["GetStudyPlanCatalogs"]:["GetStudyPlanCatalogs",e];let pZ=`
    query GetEnableNewPlanRankBoardAccess {
  feature {
    enableNewPlanRankBoardAccess
  }
}
    `,p0=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["GetEnableNewPlanRankBoardAccess"]:["GetEnableNewPlanRankBoardAccess",t],queryFn:N(e,pZ,t,n),...r});p0.document=pZ,p0.getKey=e=>void 0===e?["GetEnableNewPlanRankBoardAccess"]:["GetEnableNewPlanRankBoardAccess",e];let p1=`
    query GetMyStudyPlan($progressType: PlanUserProgressTypeEnum!, $offset: Int!, $limit: Int!) {
  studyPlanV2UserProgresses(
    progressType: $progressType
    offset: $offset
    limit: $limit
  ) {
    hasMore
    total
    planUserProgresses {
      nextQuestionInfo {
        inPremiumSubgroup
        nextQuestion {
          id
          questionFrontendId
          title
          titleSlug
          translatedTitle
        }
      }
      quittedAt
      startedAt
      plan {
        questionNum
        slug
        premiumOnly
        name
        onGoing
        highlight
        cover
      }
      latestSubmissionAt
      id
      allCompletedAt
      finishedQuestionNum
    }
  }
}
    `,p2=(e,t,r,n)=>(0,R.I)({queryKey:["GetMyStudyPlan",t],queryFn:N(e,p1,t,n),...r});p2.document=p1,p2.getKey=e=>["GetMyStudyPlan",e];let p4=`
    query GetProblemSetStudyPlanAds {
  studyPlansV2AdQuestionPage {
    cover
    highlight
    name
    onGoing
    premiumOnly
    questionNum
    slug
  }
}
    `,p3=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["GetProblemSetStudyPlanAds"]:["GetProblemSetStudyPlanAds",t],queryFn:N(e,p4,t,n),...r});p3.document=p4,p3.getKey=e=>void 0===e?["GetProblemSetStudyPlanAds"]:["GetProblemSetStudyPlanAds",e];let p8=`
    query GetStudyPlanByCatalog($catalogSlug: String!, $offset: Int!, $limit: Int!) {
  studyPlansV2ByCatalog(catalogSlug: $catalogSlug, offset: $offset, limit: $limit) {
    hasMore
    total
    studyPlans {
      slug
      questionNum
      premiumOnly
      onGoing
      name
      highlight
      cover
    }
  }
}
    `,p5=(e,t,r,n)=>(0,R.I)({queryKey:["GetStudyPlanByCatalog",t],queryFn:N(e,p8,t,n),...r});p5.document=p8,p5.getKey=e=>["GetStudyPlanByCatalog",e];let p6=`
    query GetStudyPlanListAds {
  studyPlansV2AdFeature {
    cover
    coverBackgroundColor
    name
    highlight
    onGoing
    questionNum
    premiumOnly
    slug
  }
}
    `,p7=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["GetStudyPlanListAds"]:["GetStudyPlanListAds",t],queryFn:N(e,p6,t,n),...r});p7.document=p6,p7.getKey=e=>void 0===e?["GetStudyPlanListAds"]:["GetStudyPlanListAds",e];let p9=`
    query GetStudyPlanV2RankingBoard($planSlug: String!) {
  studyPlanV2RankingBoard(planSlug: $planSlug, limit: 10, offset: 0) {
    hasMore
    total
    userRankInfos {
      currentRank
      previousRank
      finishedQuestionNum
      userInfo {
        avatar: userAvatar
        realName
        userSlug
        userName
      }
    }
  }
}
    `,me=(e,t,r,n)=>(0,R.I)({queryKey:["GetStudyPlanV2RankingBoard",t],queryFn:N(e,p9,t,n),...r});me.document=p9,me.getKey=e=>["GetStudyPlanV2RankingBoard",e];let mt=`
    query GetStudyPlanV2UserRank($planSlug: String!) {
  studyPlanV2UserRank(planSlug: $planSlug) {
    currentRank
    finishedQuestionNum
    hideOnBoard
    previousRank
    userInfo {
      avatar: userAvatar
      realName
      userName
      userSlug
    }
  }
}
    `,mr=(e,t,r,n)=>(0,R.I)({queryKey:["GetStudyPlanV2UserRank",t],queryFn:N(e,mt,t,n),...r});mr.document=mt,mr.getKey=e=>["GetStudyPlanV2UserRank",e];let mn=`
    query GetStudyPlanV2WeeklyTaskRecords($month: Int!, $planSlug: String!, $year: Int!, $progressId: String) {
  studyPlanV2WeeklyTaskRecords(
    month: $month
    planSlug: $planSlug
    year: $year
    progressId: $progressId
  ) {
    userWeeklyTaskRecords {
      date
      finishedQuestionNums
      hasCompletedWeeklyTask
      hasWeeklyTaskSchedule
      expectedFinishedQuestionNums
    }
    planWeeklyTaskSetDate
    planFinishDate
  }
}
    `,mi=(e,t,r,n)=>(0,R.I)({queryKey:["GetStudyPlanV2WeeklyTaskRecords",t],queryFn:N(e,mn,t,n),...r});mi.document=mn,mi.getKey=e=>["GetStudyPlanV2WeeklyTaskRecords",e];let mo=`
    mutation joinStudyPlan($slug: String!, $weeklyTaskSchedule: [Int!]) {
  joinStudyPlan(planSlug: $slug, weeklyTaskSchedule: $weeklyTaskSchedule) {
    ok
    progressId
  }
}
    `,ms=(e,t,r)=>(0,L.n)({mutationKey:["joinStudyPlan"],mutationFn:t=>N(e,mo,t,r)(),...t}),ma=`
    mutation markSolvedQuestion($titleSlug: String!, $planSlug: String!) {
  markSolvedQuestion(titleSlug: $titleSlug, planSlug: $planSlug) {
    ok
    progressDetail {
      id
      finishedQuestionNum
      status
    }
  }
}
    `,mu=(e,t,r)=>(0,L.n)({mutationKey:["markSolvedQuestion"],mutationFn:t=>N(e,ma,t,r)(),...t}),ml=`
    mutation quitStudyPlan($slug: String!) {
  quitStudyPlan(planSlug: $slug) {
    progressId
    ok
    deleted
  }
}
    `,mc=(e,t,r)=>(0,L.n)({mutationKey:["quitStudyPlan"],mutationFn:t=>N(e,ml,t,r)(),...t}),md=`
    mutation resetWeeklyTaskSchedule($planSlug: String!, $weeklyTaskSchedule: [Int!]!) {
  resetWeeklyTaskSchedule(
    planSlug: $planSlug
    weeklyTaskSchedule: $weeklyTaskSchedule
  ) {
    ok
    progressId
  }
}
    `,mp=(e,t,r)=>(0,L.n)({mutationKey:["resetWeeklyTaskSchedule"],mutationFn:t=>N(e,md,t,r)(),...t}),mm=`
    query studyPlanAwardStatus($slug: String!) {
  studyPlanV2Detail(planSlug: $slug) {
    hasMedal
  }
}
    `,mf=(e,t,r,n)=>(0,R.I)({queryKey:["studyPlanAwardStatus",t],queryFn:N(e,mm,t,n),...r});mf.document=mm,mf.getKey=e=>["studyPlanAwardStatus",e];let mg=`
    query studyPlanCover($slug: String!) {
  studyPlanV2Detail(planSlug: $slug) {
    cover
  }
}
    `,my=(e,t,r,n)=>(0,R.I)({queryKey:["studyPlanCover",t],queryFn:N(e,mg,t,n),...r});my.document=mg,my.getKey=e=>["studyPlanCover",e];let mh=`
    query studyPlanDetail($slug: String!) {
  studyPlanV2Detail(planSlug: $slug) {
    slug
    name
    highlight
    staticCoverPicture
    colorPalette
    threeDimensionUrl
    description
    premiumOnly
    needShowTags
    awardDescription
    defaultLanguage
    award {
      name
      config {
        icon
        iconGif
        iconGifBackground
      }
    }
    relatedStudyPlans {
      cover
      highlight
      name
      slug
      premiumOnly
    }
    planSubGroups {
      slug
      name
      premiumOnly
      questionNum
      questions {
        translatedTitle
        titleSlug
        title
        questionFrontendId
        paidOnly
        id
        difficulty
        hasOfficialSolution
        topicTags {
          slug
          name
        }
        solutionInfo {
          solutionSlug
          solutionTopicId
        }
      }
    }
  }
}
    `,mv=(e,t,r,n)=>(0,R.I)({queryKey:["studyPlanDetail",t],queryFn:N(e,mh,t,n),...r});mv.document=mh,mv.getKey=e=>["studyPlanDetail",e];let mb=`
    query studyPlanPastSolved($slug: String!) {
  studyPlanV2Detail(planSlug: $slug) {
    planSubGroups {
      slug
      questions {
        titleSlug
        status
      }
    }
  }
}
    `,mS=(e,t,r,n)=>(0,R.I)({queryKey:["studyPlanPastSolved",t],queryFn:N(e,mb,t,n),...r});mS.document=mb,mS.getKey=e=>["studyPlanPastSolved",e];let mw=`
    query studyPlanProgress($slug: String!, $historyId: ID) {
  studyPlanV2ProgressDetail(planSlug: $slug, id: $historyId) {
    id
    status
    weeklyTaskScheduleResettable
    finishedQuestionNum
    studyPlanDetail {
      questionNum
      planSubGroups {
        slug
        questions {
          titleSlug
          status
        }
      }
    }
  }
}
    `,mI=(e,t,r,n)=>(0,R.I)({queryKey:["studyPlanProgress",t],queryFn:N(e,mw,t,n),...r});mI.document=mw,mI.getKey=e=>["studyPlanProgress",e];let m$=`
    query studyPlanV2CompletedStatus($submissionId: ID!, $planSlug: String!) {
  studyPlanV2CompletedStatus(submissionId: $submissionId, planSlug: $planSlug) {
    joinedStudyPlan
    completedStudyPlan
    planProgressDetail {
      finishedQuestionNum
      status
      id
    }
  }
}
    `,mC=(e,t,r,n)=>(0,R.I)({queryKey:["studyPlanV2CompletedStatus",t],queryFn:N(e,m$,t,n),...r});mC.document=m$,mC.getKey=e=>["studyPlanV2CompletedStatus",e];let mk=`
    query studyPlanV2RecentCompletedProgress($planSlug: String!) {
  studyPlanV2RecentCompletedProgress(planSlug: $planSlug) {
    id
    status
  }
}
    `,mA=(e,t,r,n)=>(0,R.I)({queryKey:["studyPlanV2RecentCompletedProgress",t],queryFn:N(e,mk,t,n),...r});mA.document=mk,mA.getKey=e=>["studyPlanV2RecentCompletedProgress",e];let mq=`
    mutation SubmitSurveyV2($cancelled: Boolean!, $completedAllQuestions: Boolean!, $completedRequiredQuestions: Boolean!, $surveyResponse: JSONString!, $surveySlug: String!) {
  submitSurveyV2(
    cancelled: $cancelled
    completedAllQuestions: $completedAllQuestions
    completedRequiredQuestions: $completedRequiredQuestions
    surveyResponse: $surveyResponse
    surveySlug: $surveySlug
  ) {
    error
    ok
  }
}
    `,mO=(e,t,r)=>(0,L.n)({mutationKey:["SubmitSurveyV2"],mutationFn:t=>N(e,mq,t,r)(),...t}),mT=`
    query SurveyV2($surveySlug: String!, $surveyKwargs: JSONString) {
  surveyV2(surveySlug: $surveySlug, surveyKwargs: $surveyKwargs) {
    showSurvey
    surveyJson
    leetcoinAmount
  }
}
    `,mP=(e,t,r,n)=>(0,R.I)({queryKey:["SurveyV2",t],queryFn:N(e,mT,t,n),...r});mP.document=mT,mP.getKey=e=>["SurveyV2",e];let mx=`
    query activeDiscountEvent {
  activeDiscountEvent {
    couponCode
    banners {
      title
      aspectRatioType
      banner
      backgroundColor
      targetUrl
    }
    ogImage
    seoDescription
    seoTitle
    superuserPreview
  }
}
    `,mE=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["activeDiscountEvent"]:["activeDiscountEvent",t],queryFn:N(e,mx,t,n),...r});mE.document=mx,mE.getKey=e=>void 0===e?["activeDiscountEvent"]:["activeDiscountEvent",e];let mF=`
    query checkOrganizationEmail($organizationSlug: String!, $email: String!) {
  checkOrganizationEmail(organizationSlug: $organizationSlug, email: $email)
}
    `,mR=(e,t,r,n)=>(0,R.I)({queryKey:["checkOrganizationEmail",t],queryFn:N(e,mF,t,n),...r});mR.document=mF,mR.getKey=e=>["checkOrganizationEmail",e];let mL=`
    query currentSubscriptionInfo {
  currentSubscriptionInfo {
    currentPlan
    cardCountryCode
    paymentMethod
    billingEmail
    currentPeriodEnd
    creditAmount
    hasStudentPlan
  }
}
    `,mN=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["currentSubscriptionInfo"]:["currentSubscriptionInfo",t],queryFn:N(e,mL,t,n),...r});mN.document=mL,mN.getKey=e=>void 0===e?["currentSubscriptionInfo"]:["currentSubscriptionInfo",e];let m_=`
    query defaultSubscriptionPricing {
  defaultSubscriptionPricing {
    monthlyPrice {
      originalPrice
      discountedPrice
      versionPrice
      version
      countryCode
      discount
      discountPercent
      proration
      isEligibleForIndiaDiscount
      isValidCode
      couponCode
      canPurchaseCredit
      slug
    }
    yearlyPrice {
      originalPrice
      discountedPrice
      versionPrice
      version
      countryCode
      discount
      discountPercent
      proration
      isEligibleForIndiaDiscount
      isValidCode
      couponCode
      canPurchaseCredit
      slug
    }
  }
}
    `,mD=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["defaultSubscriptionPricing"]:["defaultSubscriptionPricing",t],queryFn:N(e,m_,t,n),...r});mD.document=m_,mD.getKey=e=>void 0===e?["defaultSubscriptionPricing"]:["defaultSubscriptionPricing",e];let mj=`
    mutation subscriptionViewCountIncrement($ref: String, $source: String) {
  subscriptionViewCountIncrement(ref: $ref, source: $source) {
    ok
    error
  }
}
    `,mK=(e,t,r)=>(0,L.n)({mutationKey:["subscriptionViewCountIncrement"],mutationFn:t=>N(e,mj,t,r)(),...t}),mM=`
    query subscriptionCountry {
  subscriptionCountry
}
    `,mU=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["subscriptionCountry"]:["subscriptionCountry",t],queryFn:N(e,mM,t,n),...r});mU.document=mM,mU.getKey=e=>void 0===e?["subscriptionCountry"]:["subscriptionCountry",e];let mV=`
    query subscriptionPricingByOrganization($organizationSlug: String!) {
  subscriptionPricingByOrganization(organizationSlug: $organizationSlug) {
    price {
      slug
      price
      currency
      code
    }
    organization {
      name
      slug
      isValid
      emailDomains
    }
  }
}
    `,mQ=(e,t,r,n)=>(0,R.I)({queryKey:["subscriptionPricingByOrganization",t],queryFn:N(e,mV,t,n),...r});mQ.document=mV,mQ.getKey=e=>["subscriptionPricingByOrganization",e];let mB=`
    query subscriptionPricingV2($country: String!) {
  subscriptionPricingV2(country: $country) {
    monthlyPrice {
      slug
      price
      currency
      code
    }
    yearlyPrice {
      slug
      price
      currency
      code
    }
    oneYearPrice {
      slug
      price
      currency
      code
    }
  }
}
    `,mG=(e,t,r,n)=>(0,R.I)({queryKey:["subscriptionPricingV2",t],queryFn:N(e,mB,t,n),...r});mG.document=mB,mG.getKey=e=>["subscriptionPricingV2",e];let mz=`
    query subscriptionPricing($code: String) {
  subscriptionPricing(code: $code) {
    monthlyPrice {
      originalPrice
      discountedPrice
      versionPrice
      version
      countryCode
      discount
      discountPercent
      proration
      isEligibleForIndiaDiscount
      isValidCode
      couponCode
      canPurchaseCredit
    }
    yearlyPrice {
      originalPrice
      discountedPrice
      versionPrice
      version
      countryCode
      discount
      discountPercent
      proration
      isEligibleForIndiaDiscount
      isValidCode
      couponCode
      canPurchaseCredit
    }
  }
}
    `,mH=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["subscriptionPricing"]:["subscriptionPricing",t],queryFn:N(e,mz,t,n),...r});mH.document=mz,mH.getKey=e=>void 0===e?["subscriptionPricing"]:["subscriptionPricing",e];let mW=`
    query subscriptionReferral {
  subscriptionReferral {
    link
    referredCount
  }
}
    `,mY=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["subscriptionReferral"]:["subscriptionReferral",t],queryFn:N(e,mW,t,n),...r});mY.document=mW,mY.getKey=e=>void 0===e?["subscriptionReferral"]:["subscriptionReferral",e];let mJ=`
    query exportInvoiceFile($taskId: String!) {
  exportInvoiceFile(taskId: $taskId)
}
    `,mX=(e,t,r,n)=>(0,R.I)({queryKey:["exportInvoiceFile",t],queryFn:N(e,mJ,t,n),...r});mX.document=mJ,mX.getKey=e=>["exportInvoiceFile",e];let mZ=`
    mutation exportInvoice($chargeUid: String!, $data: ExportInvoiceInput!) {
  exportInvoice(chargeUid: $chargeUid, data: $data) {
    ok
    taskId
  }
}
    `,m0=(e,t,r)=>(0,L.n)({mutationKey:["exportInvoice"],mutationFn:t=>N(e,mZ,t,r)(),...t}),m1=`
    query hasTakenCancelSurvey {
  hasTakenCancelSurvey
}
    `,m2=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["hasTakenCancelSurvey"]:["hasTakenCancelSurvey",t],queryFn:N(e,m1,t,n),...r});m2.document=m1,m2.getKey=e=>void 0===e?["hasTakenCancelSurvey"]:["hasTakenCancelSurvey",e];let m4=`
    query RefundReasons($category: String!, $chargeUid: String) {
  refundReasons(category: $category, chargeUid: $chargeUid) {
    code
    label
    refundAmount
  }
}
    `,m3=(e,t,r,n)=>(0,R.I)({queryKey:["RefundReasons",t],queryFn:N(e,m4,t,n),...r});m3.document=m4,m3.getKey=e=>["RefundReasons",e];let m8=`
    query RefundableOrders($skip: Int, $limit: Int) {
  refundableOrders(skip: $skip, limit: $limit) {
    nodes {
      chargeUid
      skuName
      amount
      amountRefunded
      currency
      date
      category
    }
    totalNum
  }
}
    `,m5=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["RefundableOrders"]:["RefundableOrders",t],queryFn:N(e,m8,t,n),...r});m5.document=m8,m5.getKey=e=>void 0===e?["RefundableOrders"]:["RefundableOrders",e];let m6=`
    mutation submitCancelSurvey($answers: [JSONString!]) {
  submitCancelSurvey(answers: $answers) {
    error
  }
}
    `,m7=(e,t,r)=>(0,L.n)({mutationKey:["submitCancelSurvey"],mutationFn:t=>N(e,m6,t,r)(),...t}),m9=`
    mutation SubmitRefundRequest($chargeUid: String!, $reasonCode: Int!) {
  submitRefundRequest(chargeUid: $chargeUid, reasonCode: $reasonCode) {
    ok
    requestId
    error
  }
}
    `,fe=(e,t,r)=>(0,L.n)({mutationKey:["SubmitRefundRequest"],mutationFn:t=>N(e,m9,t,r)(),...t}),ft=`
    query userPrimaryEmail {
  user {
    email
  }
}
    `,fr=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["userPrimaryEmail"]:["userPrimaryEmail",t],queryFn:N(e,ft,t,n),...r});fr.document=ft,fr.getKey=e=>void 0===e?["userPrimaryEmail"]:["userPrimaryEmail",e];let fn=`
    query commonCities($country: String!, $province: String) {
  worldCities(country: $country, subcountry: $province)
}
    `,fi=(e,t,r,n)=>(0,R.I)({queryKey:["commonCities",t],queryFn:N(e,fn,t,n),...r});fi.document=fn,fi.getKey=e=>["commonCities",e];let fo=`
    query commonCountries {
  worldCountries
}
    `,fs=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["commonCountries"]:["commonCountries",t],queryFn:N(e,fo,t,n),...r});fs.document=fo,fs.getKey=e=>void 0===e?["commonCountries"]:["commonCountries",e];let fa=`
    query commonProvinces($country: String!) {
  worldSubcountries(country: $country)
}
    `,fu=(e,t,r,n)=>(0,R.I)({queryKey:["commonProvinces",t],queryFn:N(e,fa,t,n),...r});fu.document=fa,fu.getKey=e=>["commonProvinces",e];let fl=`
    query contestSurvey($contestSlug: String!) {
  contestSurvey(contestSlug: $contestSlug) {
    id
    title
    questionConfigs
    skipContent
    submitContent
  }
}
    `,fc=(e,t,r,n)=>(0,R.I)({queryKey:["contestSurvey",t],queryFn:N(e,fl,t,n),...r});fc.document=fl,fc.getKey=e=>["contestSurvey",e];let fd=`
    query contestSurveySchools($search: String!, $skip: Int, $limit: Int) {
  contestSurveySchools(search: $search, skip: $skip, limit: $limit) {
    hasMore
    schools {
      id
      name
    }
  }
}
    `,fp=(e,t,r,n)=>(0,R.I)({queryKey:["contestSurveySchools",t],queryFn:N(e,fd,t,n),...r});fp.document=fd,fp.getKey=e=>["contestSurveySchools",e];let fm=`
    query managementAllContestSurveys($allData: managementAllContestSurveysInput!) {
  managementAllContestSurveys(data: $allData) {
    id
    title
    company {
      id
      name
      nameTranslated
    }
    questionConfigs
    submitCount
    validStart
    validEnd
    createdAt
    modifiedAt
    skipContent
    submitContent
  }
}
    `,ff=(e,t,r,n)=>(0,R.I)({queryKey:["managementAllContestSurveys",t],queryFn:N(e,fm,t,n),...r});ff.document=fm,ff.getKey=e=>["managementAllContestSurveys",e];let fg=`
    query managementContestSurvey($surveyId: Int!) {
  managementContestSurvey(surveyId: $surveyId) {
    id
    title
    company {
      id
      name
      nameTranslated
    }
    questionConfigs
    submitCount
    validStart
    validEnd
    createdAt
    modifiedAt
    skipContent
    submitContent
  }
}
    `,fy=(e,t,r,n)=>(0,R.I)({queryKey:["managementContestSurvey",t],queryFn:N(e,fg,t,n),...r});fy.document=fg,fy.getKey=e=>["managementContestSurvey",e];let fh=`
    query managementContestSurveyAdminLogs($limit: Int!, $skip: Int!, $surveyId: Int!) {
  managementContestSurveyAdminLogs(
    limit: $limit
    skip: $skip
    surveyId: $surveyId
  ) {
    operationType
    operateUserName
    createdAt
  }
}
    `,fv=(e,t,r,n)=>(0,R.I)({queryKey:["managementContestSurveyAdminLogs",t],queryFn:N(e,fh,t,n),...r});fv.document=fh,fv.getKey=e=>["managementContestSurveyAdminLogs",e];let fb=`
    query storageInfo($taskId: String!) {
  storageInfo(taskId: $taskId) {
    storageFile
    status
    ok
    error
  }
}
    `,fS=(e,t,r,n)=>(0,R.I)({queryKey:["storageInfo",t],queryFn:N(e,fb,t,n),...r});fS.document=fb,fS.getKey=e=>["storageInfo",e];let fw=`
    query globalData {
  userStatus {
    userId
    isSignedIn
    isMockUser
    isPremium
    premiumCountryCode
    isVerified
    username
    realName
    avatar
    isAdmin
    isSuperuser
    permissions
    isTranslator
    activeSessionId
    checkedInToday
    completedFeatureGuides
    premiumExpiredAt
    notificationStatus {
      lastModified
      numUnread
    }
  }
}
    `,fI=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["globalData"]:["globalData",t],queryFn:N(e,fw,t,n),...r});fI.document=fw,fI.getKey=e=>void 0===e?["globalData"]:["globalData",e];let f$=`
    query languageListWithVerboseName {
  languageList {
    name
    verboseName
  }
}
    `,fC=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["languageListWithVerboseName"]:["languageListWithVerboseName",t],queryFn:N(e,f$,t,n),...r});fC.document=f$,fC.getKey=e=>void 0===e?["languageListWithVerboseName"]:["languageListWithVerboseName",e];let fk=`
    query problemsetCompanyTags {
  problemsetCompanyTags {
    name
    slug
  }
}
    `,fA=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["problemsetCompanyTags"]:["problemsetCompanyTags",t],queryFn:N(e,fk,t,n),...r});fA.document=fk,fA.getKey=e=>void 0===e?["problemsetCompanyTags"]:["problemsetCompanyTags",e];let fq=`
    query problemsetPositionTags {
  problemsetPositionTags {
    name
    nameTranslated
    slug
  }
}
    `,fO=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["problemsetPositionTags"]:["problemsetPositionTags",t],queryFn:N(e,fq,t,n),...r});fO.document=fq,fO.getKey=e=>void 0===e?["problemsetPositionTags"]:["problemsetPositionTags",e];let fT=`
    query surveyV2WithoutCheckFunc($surveySlug: String!) {
  surveyV2WithoutCheckFunc(surveySlug: $surveySlug) {
    showSurvey
    surveyJson
    leetcoinAmount
  }
}
    `,fP=(e,t,r,n)=>(0,R.I)({queryKey:["surveyV2WithoutCheckFunc",t],queryFn:N(e,fT,t,n),...r});fP.document=fT,fP.getKey=e=>["surveyV2WithoutCheckFunc",e];let fx=`
    query managementRoles {
  managementRoles {
    roleName
    permissions
  }
}
    `,fE=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["managementRoles"]:["managementRoles",t],queryFn:N(e,fx,t,n),...r});fE.document=fx,fE.getKey=e=>void 0===e?["managementRoles"]:["managementRoles",e];let fF=`
    query problemsetPositionLevelTags {
  problemsetPositionLevelTags {
    name
    nameTranslated
    slug
  }
}
    `,fR=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["problemsetPositionLevelTags"]:["problemsetPositionLevelTags",t],queryFn:N(e,fF,t,n),...r});fR.document=fF,fR.getKey=e=>void 0===e?["problemsetPositionLevelTags"]:["problemsetPositionLevelTags",e];let fL=`
    query questionAllTopicTags {
  questionAllTopicTags {
    edges {
      node {
        name
        slug
        translatedName
        questionIds
      }
    }
  }
}
    `,fN=(e,t,r,n)=>(0,R.I)({queryKey:void 0===t?["questionAllTopicTags"]:["questionAllTopicTags",t],queryFn:N(e,fL,t,n),...r});fN.document=fL,fN.getKey=e=>void 0===e?["questionAllTopicTags"]:["questionAllTopicTags",e];let f_=`
    query rtPost($topicId: ID!) {
  ugcArticleDiscussionArticle(topicId: $topicId) {
    title
    summary
    isSerialized
  }
}
    `,fD=(e,t,r,n)=>(0,R.I)({queryKey:["rtPost",t],queryFn:N(e,f_,t,n),...r});fD.document=f_,fD.getKey=e=>["rtPost",e];let fj=`
    query rtPosts($topicIds: [ID!]!) {
  ugcArticleDiscussionArticlesByTopicIds(topicIds: $topicIds) {
    title
    summary
    isSerialized
  }
}
    `,fK=(e,t,r,n)=>(0,R.I)({queryKey:["rtPosts",t],queryFn:N(e,fj,t,n),...r});fK.document=fj,fK.getKey=e=>["rtPosts",e];let fM=`
    query rtProblemList($favoriteSlug: String!) {
  favoriteDetailV2(favoriteSlug: $favoriteSlug) {
    name
    coverUrl
    coverEmoji
    coverBackgroundColor
    questionNumber
    favoriteType
    isPublicFavorite
  }
}
    `,fU=(e,t,r,n)=>(0,R.I)({queryKey:["rtProblemList",t],queryFn:N(e,fM,t,n),...r});fU.document=fM,fU.getKey=e=>["rtProblemList",e];let fV=`
    query rtProblemLists($favoriteSlugs: [String!]!) {
  favoriteBriefList(favoriteSlugs: $favoriteSlugs) {
    name
    coverUrl
    coverEmoji
    coverBackgroundColor
    questionNumber
    favoriteType
    isPublicFavorite
  }
}
    `,fQ=(e,t,r,n)=>(0,R.I)({queryKey:["rtProblemLists",t],queryFn:N(e,fV,t,n),...r});fQ.document=fV,fQ.getKey=e=>["rtProblemLists",e];let fB=`
    query rtQuestion($titleSlug: String!) {
  question(titleSlug: $titleSlug) {
    questionTitle
    questionFrontendId
  }
}
    `,fG=(e,t,r,n)=>(0,R.I)({queryKey:["rtQuestion",t],queryFn:N(e,fB,t,n),...r});fG.document=fB,fG.getKey=e=>["rtQuestion",e];let fz=`
    query rtSubmission($submissionId: Int!) {
  submissionDetails(submissionId: $submissionId) {
    runtime
    memory
    code
    timestamp
    statusCode
    user {
      username
      profile {
        realName
        userAvatar
      }
    }
    lang {
      name
      verboseName
    }
    question {
      titleSlug
      questionTitle
    }
  }
}
    `,fH=(e,t,r,n)=>(0,R.I)({queryKey:["rtSubmission",t],queryFn:N(e,fz,t,n),...r});fH.document=fz,fH.getKey=e=>["rtSubmission",e]},18847:(e,t,r)=>{e.exports=r(20705)},18973:(e,t,r)=>{"use strict";r.d(t,{$R:()=>a,Lk:()=>u,iQ:()=>l,mA:()=>o,yo:()=>s});var n,i,o=((n={}).Description="description",n.Discussion="discussion",n.Editorial="editorial",n.Solutions="solutions",n.Submissions="submissions",n),s=((i={}).Shell="shell",i.SystemDesign="system-design",i.Algorithm="algorithm",i.Database="database",i.Frontend="frontend",i);let a="focusMode",u="contestFocusMode",l="FocusModeContentDirectSwitch"},19050:(e,t,r)=>{"use strict";r.d(t,{CF:()=>s,co:()=>i,we:()=>o});let n=new Map,i=()=>void 0,o=()=>Math.floor(1e6*Math.random()),s=(e,t)=>{void 0===n.get(e)&&(i({ename:10,tid:t}),n.set(e,!0))}},19388:(e,t,r)=>{"use strict";r.d(t,{I:()=>o,W:()=>s});var n,i,o=((n={}).Layout="layout",n.Editor="editor",n.Shortcuts="shortcuts",n.Advanced="advanced",n.Leet="Leet",n.Timer="timer",n.Quest="quest",n),s=((i={}).None="none",i.MultipleTab="multiple-tab",i)},19852:(e,t,r)=>{"use strict";var n=r(14232),i=r(38806),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=i.useSyncExternalStore,a=n.useRef,u=n.useEffect,l=n.useMemo,c=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,i){var d=a(null);if(null===d.current){var p={hasValue:!1,value:null};d.current=p}else p=d.current;var m=s(e,(d=l(function(){function e(e){if(!u){if(u=!0,s=e,e=n(e),void 0!==i&&p.hasValue){var t=p.value;if(i(t,e))return a=t}return a=e}if(t=a,o(s,e))return t;var r=n(e);return void 0!==i&&i(t,r)?t:(s=e,a=r)}var s,a,u=!1,l=void 0===r?null:r;return[function(){return e(t())},null===l?void 0:function(){return e(l())}]},[t,r,n,i]))[0],d[1]);return u(function(){p.hasValue=!0,p.value=m},[m]),c(m),m}},20355:function(e){e.exports=function(e,t){var r=t.prototype,n=r.format;r.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return n.bind(this)(e);var i=this.$utils(),o=(e||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(e){switch(e){case"Q":return Math.ceil((t.$M+1)/3);case"Do":return r.ordinal(t.$D);case"gggg":return t.weekYear();case"GGGG":return t.isoWeekYear();case"wo":return r.ordinal(t.week(),"W");case"w":case"ww":return i.s(t.week(),"w"===e?1:2,"0");case"W":case"WW":return i.s(t.isoWeek(),"W"===e?1:2,"0");case"k":case"kk":return i.s(String(0===t.$H?24:t.$H),"k"===e?1:2,"0");case"X":return Math.floor(t.$d.getTime()/1e3);case"x":return t.$d.getTime();case"z":return"["+t.offsetName()+"]";case"zzz":return"["+t.offsetName("long")+"]";default:return e}});return n.bind(this)(o)}}},20390:e=>{var t="object"==typeof document&&document.all;e.exports={all:t,IS_HTMLDDA:void 0===t&&void 0!==t}},20705:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={default:function(){return l},noSSR:function(){return u}};for(var i in n)Object.defineProperty(t,i,{enumerable:!0,get:n[i]});let o=r(64252);r(37876),r(14232);let s=o._(r(16006));function a(e){return{default:(null==e?void 0:e.default)||e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}function l(e,t){let r=s.default,n={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n={...n,...e});let i=(n={...n,...t}).loader;return(n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?r({...n,loader:()=>null!=i?i().then(a):Promise.resolve(a(()=>null))}):(delete n.webpack,delete n.modules,u(r,n))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},20709:(e,t,r)=>{var n=r(43777),i=r(76938).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,i)}},21194:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=r(54743).A.Uint8Array},21340:(e,t)=>{"use strict";t.mw={prefix:"far",iconName:"note-sticky",icon:[448,512,[62026,"sticky-note"],"f249","M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H288V352c0-17.7 14.3-32 32-32h80V96c0-8.8-7.2-16-16-16H64zM288 480H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V320v5.5c0 17-6.7 33.3-18.7 45.3l-90.5 90.5c-12 12-28.3 18.7-45.3 18.7H288z"]},t.n0=t.mw},21379:(e,t,r)=>{"use strict";r.d(t,{D:()=>l,N:()=>c});var n=r(14232),i=["light","dark"],o="(prefers-color-scheme: dark)",s="u"<typeof window,a=n.createContext(void 0),u={setTheme:e=>{},themes:[]},l=()=>{var e;return null!=(e=n.useContext(a))?e:u},c=e=>n.useContext(a)?e.children:n.createElement(p,{...e}),d=["light","dark"],p=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:r=!0,enableColorScheme:s=!0,storageKey:u="theme",themes:l=d,defaultTheme:c=r?"system":"light",attribute:p="data-theme",value:h,children:v,nonce:b})=>{let[S,w]=n.useState(()=>f(u,c)),[I,$]=n.useState(()=>f(u)),C=h?Object.values(h):l,k=n.useCallback(e=>{let n=e;if(!n)return;"system"===e&&r&&(n=y());let o=h?h[n]:n,a=t?g():null,u=document.documentElement;if("class"===p?(u.classList.remove(...C),o&&u.classList.add(o)):o?u.setAttribute(p,o):u.removeAttribute(p),s){let e=i.includes(c)?c:null,t=i.includes(n)?n:e;u.style.colorScheme=t}null==a||a()},[]),A=n.useCallback(e=>{let t="function"==typeof e?e(e):e;w(t);try{localStorage.setItem(u,t)}catch(e){}},[e]),q=n.useCallback(t=>{$(y(t)),"system"===S&&r&&!e&&k("system")},[S,e]);n.useEffect(()=>{let e=window.matchMedia(o);return e.addListener(q),q(e),()=>e.removeListener(q)},[q]),n.useEffect(()=>{let e=e=>{e.key!==u||A(e.newValue||c)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[A]),n.useEffect(()=>{k(null!=e?e:S)},[e,S]);let O=n.useMemo(()=>({theme:S,setTheme:A,forcedTheme:e,resolvedTheme:"system"===S?I:S,themes:r?[...l,"system"]:l,systemTheme:r?I:void 0}),[S,A,e,I,r,l]);return n.createElement(a.Provider,{value:O},n.createElement(m,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:r,enableColorScheme:s,storageKey:u,themes:l,defaultTheme:c,attribute:p,value:h,children:v,attrs:C,nonce:b}),v)},m=n.memo(({forcedTheme:e,storageKey:t,attribute:r,enableSystem:s,enableColorScheme:a,defaultTheme:u,value:l,attrs:c,nonce:d})=>{let p="system"===u,m="class"===r?`var d=document.documentElement,c=d.classList;c.remove(${c.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${r}',s='setAttribute';`,f=a?(i.includes(u)?u:null)?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${u}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",g=(e,t=!1,n=!0)=>{let o=l?l[e]:e,s=t?e+"|| ''":`'${o}'`,u="";return a&&n&&!t&&i.includes(e)&&(u+=`d.style.colorScheme = '${e}';`),"class"===r?t||o?u+=`c.add(${s})`:u+="null":o&&(u+=`d[s](n,${s})`),u},y=e?`!function(){${m}${g(e)}}()`:s?`!function(){try{${m}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${p})){var t='${o}',m=window.matchMedia(t);if(m.media!==t||m.matches){${g("dark")}}else{${g("light")}}}else if(e){${l?`var x=${JSON.stringify(l)};`:""}${g(l?"x[e]":"e",!0)}}${p?"":"else{"+g(u,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${m}var e=localStorage.getItem('${t}');if(e){${l?`var x=${JSON.stringify(l)};`:""}${g(l?"x[e]":"e",!0)}}else{${g(u,!1,!1)};}${f}}catch(t){}}();`;return n.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:y}})}),f=(e,t)=>{let r;if(!s){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},g=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},y=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")},21407:(e,t,r)=>{"use strict";r.d(t,{$:()=>a,s:()=>s});var n=r(60388),i=r(46305),o=r(48149),s=class extends i.k{#p;#j;#o;#K;constructor(e){super(),this.#p=e.client,this.mutationId=e.mutationId,this.#o=e.mutationCache,this.#j=[],this.state=e.state||a(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#j.includes(e)||(this.#j.push(e),this.clearGcTimeout(),this.#o.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#j=this.#j.filter(t=>t!==e),this.scheduleGc(),this.#o.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#j.length||("pending"===this.state.status?this.scheduleGc():this.#o.remove(this))}continue(){return this.#K?.continue()??this.execute(this.state.variables)}async execute(e){let t=()=>{this.#M({type:"continue"})},r={client:this.#p,meta:this.options.meta,mutationKey:this.options.mutationKey};this.#K=(0,o.II)({fn:()=>this.options.mutationFn?this.options.mutationFn(e,r):Promise.reject(Error("No mutationFn found")),onFail:(e,t)=>{this.#M({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#M({type:"pause"})},onContinue:t,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#o.canRun(this)});let n="pending"===this.state.status,i=!this.#K.canStart();try{if(n)t();else{this.#M({type:"pending",variables:e,isPaused:i}),this.#o.config.onMutate&&await this.#o.config.onMutate(e,this,r);let t=await this.options.onMutate?.(e,r);t!==this.state.context&&this.#M({type:"pending",context:t,variables:e,isPaused:i})}let o=await this.#K.start();return await this.#o.config.onSuccess?.(o,e,this.state.context,this,r),await this.options.onSuccess?.(o,e,this.state.context,r),await this.#o.config.onSettled?.(o,null,this.state.variables,this.state.context,this,r),await this.options.onSettled?.(o,null,e,this.state.context,r),this.#M({type:"success",data:o}),o}catch(t){try{await this.#o.config.onError?.(t,e,this.state.context,this,r)}catch(e){Promise.reject(e)}try{await this.options.onError?.(t,e,this.state.context,r)}catch(e){Promise.reject(e)}try{await this.#o.config.onSettled?.(void 0,t,this.state.variables,this.state.context,this,r)}catch(e){Promise.reject(e)}try{await this.options.onSettled?.(void 0,t,e,this.state.context,r)}catch(e){Promise.reject(e)}throw this.#M({type:"error",error:t}),t}finally{this.#o.runNext(this)}}#M(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"pending":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}})(this.state),n.jG.batch(()=>{this.#j.forEach(t=>{t.onMutationUpdate(e)}),this.#o.notify({mutation:this,type:"updated",action:e})})}};function a(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}},21523:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=function(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}},21675:(e,t,r)=>{"use strict";var n=r(11359),i=r(34004),o=r(51141),s=r(38607),a=r(58524),u=r(9676),l=r(71889),c=r(91538),d=r(14455),p=r(4299),m=r(50839),f=r(3982),g=r(26454),y=f("replace"),h=TypeError,v=o("".indexOf),b=o("".replace),S=o("".slice),w=Math.max,I=function(e,t,r){return r>e.length?-1:""===t?r:v(e,t,r)};n({target:"String",proto:!0},{replaceAll:function(e,t){var r,n,o,f,$,C,k,A,q=s(this),O=0,T=0,P="";if(!u(e)){if((r=l(e))&&!~v(c(s(p(e))),"g"))throw h("`.replaceAll` does not allow non-global regexes");if(n=d(e,y))return i(n,e,q,t);if(g&&r)return b(c(q),e,t)}for(o=c(q),f=c(e),($=a(t))||(t=c(t)),k=w(1,C=f.length),O=I(o,f,0);-1!==O;)A=$?c(t(f,O,o)):m(f,o,O,[],void 0,t),P+=S(o,T,O)+A,T=O+C,O=I(o,f,O+k);return T<o.length&&(P+=S(o,T)),P}})},21710:(e,t,r)=>{"use strict";r.d(t,{A:()=>d});var n=r(76611),i=Object.prototype,o=i.hasOwnProperty,s=i.toString,a=n.A?n.A.toStringTag:void 0;let u=function(e){var t=o.call(e,a),r=e[a];try{e[a]=void 0;var n=!0}catch(e){}var i=s.call(e);return n&&(t?e[a]=r:delete e[a]),i};var l=Object.prototype.toString,c=n.A?n.A.toStringTag:void 0;let d=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":c&&c in Object(e)?u(e):l.call(e)}},21871:(e,t,r)=>{"use strict";r.d(t,{A:()=>c});var n=r(93096),i=r(50076),o=r(4527),s=r(87188),a=r(87125),u=r(12610),l=Object.prototype.hasOwnProperty;let c=function(e,t){var r=(0,o.A)(e),c=!r&&(0,i.A)(e),d=!r&&!c&&(0,s.A)(e),p=!r&&!c&&!d&&(0,u.A)(e),m=r||c||d||p,f=m?(0,n.A)(e.length,String):[],g=f.length;for(var y in e)(t||l.call(e,y))&&!(m&&("length"==y||d&&("offset"==y||"parent"==y)||p&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||(0,a.A)(y,g)))&&f.push(y);return f}},22257:(e,t,r)=>{"use strict";r.d(t,{x:()=>K});var n=r(58103),i=r.n(n),o=/^\[(.+)\]$/;function s(e,t){var r=e;return t.split("-").forEach(function(e){r.nextPart.has(e)||r.nextPart.set(e,{nextPart:new Map,validators:[]}),r=r.nextPart.get(e)}),r}var a=/\s+/;function u(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){if("string"==typeof t)return t;for(var r,n="",i=0;i<t.length;i++)t[i]&&(r=e(t[i]))&&(n&&(n+=" "),n+=r);return n}(e))&&(n&&(n+=" "),n+=t);return n}function l(){for(var e,t,r,n=arguments.length,i=Array(n),l=0;l<n;l++)i[l]=arguments[l];var c=function(n){var a=i[0];return t=(e=function(e){var t,r,n,i,a,u,l,c,d,p,m,f,g,y;return{cache:function(e){if(e<1)return{get:function(){},set:function(){}};var t=0,r=new Map,n=new Map;function i(i,o){r.set(i,o),++t>e&&(t=0,n=r,r=new Map)}return{get:function(e){var t=r.get(e);return void 0!==t?t:void 0!==(t=n.get(e))?(i(e,t),t):void 0},set:function(e,t){r.has(e)?r.set(e,t):i(e,t)}}}(e.cacheSize),splitModifiers:(r=1===(t=e.separator||":").length,n=t[0],i=t.length,function(e){for(var o,s=[],a=0,u=0,l=0;l<e.length;l++){var c=e[l];if(0===a){if(c===n&&(r||e.slice(l,l+i)===t)){s.push(e.slice(u,l)),u=l+i;continue}if("/"===c){o=l;continue}}"["===c?a++:"]"===c&&a--}var d=0===s.length?e:e.substring(u),p=d.startsWith("!"),m=p?d.substring(1):d;return{modifiers:s,hasImportantModifier:p,baseClassName:m,maybePostfixModifierPosition:o&&o>u?o-u:void 0}}),...(p=(d=e).theme,m=d.prefix,f={nextPart:new Map,validators:[]},(g=Object.entries(d.classGroups),(y=m)?g.map(function(e){return[e[0],e[1].map(function(e){return"string"==typeof e?y+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(function(e){return[y+e[0],e[1]]})):e})]}):g).forEach(function(e){var t=e[0];!function e(t,r,n,i){t.forEach(function(t){if("string"==typeof t){(""===t?r:s(r,t)).classGroupId=n;return}if("function"==typeof t)return t.isThemeGetter?void e(t(i),r,n,i):void r.validators.push({validator:t,classGroupId:n});Object.entries(t).forEach(function(t){var o=t[0];e(t[1],s(r,o),n,i)})})}(e[1],f,t,p)}),a=f,u=e.conflictingClassGroups,c=void 0===(l=e.conflictingClassGroupModifiers)?{}:l,{getClassGroupId:function(e){var t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),function e(t,r){if(0===t.length)return r.classGroupId;var n=t[0],i=r.nextPart.get(n),o=i?e(t.slice(1),i):void 0;if(o)return o;if(0!==r.validators.length){var s=t.join("-");return r.validators.find(function(e){return(0,e.validator)(s)})?.classGroupId}}(t,a)||function(e){if(o.test(e)){var t=o.exec(e)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}}(e)},getConflictingClassGroupIds:function(e,t){var r=u[e]||[];return t&&c[e]?[].concat(r,c[e]):r}})}}(i.slice(1).reduce(function(e,t){return t(e)},a()))).cache.get,r=e.cache.set,c=d,d(n)};function d(n){var i,o,s,u,l,c=t(n);if(c)return c;var d=(o=(i=e).splitModifiers,s=i.getClassGroupId,u=i.getConflictingClassGroupIds,l=new Set,n.trim().split(a).map(function(e){var t=o(e),r=t.modifiers,n=t.hasImportantModifier,i=t.baseClassName,a=t.maybePostfixModifierPosition,u=s(a?i.substring(0,a):i),l=!!a;if(!u){if(!a||!(u=s(i)))return{isTailwindClass:!1,originalClassName:e};l=!1}var c=(function(e){if(e.length<=1)return e;var t=[],r=[];return e.forEach(function(e){"["===e[0]?(t.push.apply(t,r.sort().concat([e])),r=[]):r.push(e)}),t.push.apply(t,r.sort()),t})(r).join(":");return{isTailwindClass:!0,modifierId:n?c+"!":c,classGroupId:u,originalClassName:e,hasPostfixModifier:l}}).reverse().filter(function(e){if(!e.isTailwindClass)return!0;var t=e.modifierId,r=e.classGroupId,n=e.hasPostfixModifier,i=t+r;return!l.has(i)&&(l.add(i),u(r,n).forEach(function(e){return l.add(t+e)}),!0)}).reverse().map(function(e){return e.originalClassName}).join(" "));return r(n,d),d}return function(){return c(u.apply(null,arguments))}}function c(e){var t=function(t){return t[e]||[]};return t.isThemeGetter=!0,t}var d=/^\[(?:([a-z-]+):)?(.+)\]$/i,p=/^\d+\/\d+$/,m=new Set(["px","full","screen"]),f=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,g=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,y=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function h(e){return $(e)||m.has(e)||p.test(e)||v(e)}function v(e){return P(e,"length",x)}function b(e){return P(e,"size",E)}function S(e){return P(e,"position",E)}function w(e){return P(e,"url",F)}function I(e){return P(e,"number",$)}function $(e){return!Number.isNaN(Number(e))}function C(e){return e.endsWith("%")&&$(e.slice(0,-1))}function k(e){return R(e)||P(e,"number",R)}function A(e){return d.test(e)}function q(){return!0}function O(e){return f.test(e)}function T(e){return P(e,"",L)}function P(e,t,r){var n=d.exec(e);return!!n&&(n[1]?n[1]===t:r(n[2]))}function x(e){return g.test(e)}function E(){return!1}function F(e){return e.startsWith("url(")}function R(e){return Number.isInteger(Number(e))}function L(e){return y.test(e)}function N(){var e=c("colors"),t=c("spacing"),r=c("blur"),n=c("brightness"),i=c("borderColor"),o=c("borderRadius"),s=c("borderSpacing"),a=c("borderWidth"),u=c("contrast"),l=c("grayscale"),d=c("hueRotate"),p=c("invert"),m=c("gap"),f=c("gradientColorStops"),g=c("gradientColorStopPositions"),y=c("inset"),P=c("margin"),x=c("opacity"),E=c("padding"),F=c("saturate"),R=c("scale"),L=c("sepia"),N=c("skew"),_=c("space"),D=c("translate"),j=function(){return["auto","contain","none"]},K=function(){return["auto","hidden","clip","visible","scroll"]},M=function(){return["auto",A,t]},U=function(){return[A,t]},V=function(){return["",h]},Q=function(){return["auto",$,A]},B=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},G=function(){return["solid","dashed","dotted","double","none"]},z=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},H=function(){return["start","end","center","between","around","evenly","stretch"]},W=function(){return["","0",A]},Y=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},J=function(){return[$,I]},X=function(){return[$,A]};return{cacheSize:500,theme:{colors:[q],spacing:[h],blur:["none","",O,A],brightness:J(),borderColor:[e],borderRadius:["none","","full",O,A],borderSpacing:U(),borderWidth:V(),contrast:J(),grayscale:W(),hueRotate:X(),invert:W(),gap:U(),gradientColorStops:[e],gradientColorStopPositions:[C,v],inset:M(),margin:M(),opacity:J(),padding:U(),saturate:J(),scale:J(),sepia:W(),skew:X(),space:U(),translate:U()},classGroups:{aspect:[{aspect:["auto","square","video",A]}],container:["container"],columns:[{columns:[O]}],"break-after":[{"break-after":Y()}],"break-before":[{"break-before":Y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(B(),[A])}],overflow:[{overflow:K()}],"overflow-x":[{"overflow-x":K()}],"overflow-y":[{"overflow-y":K()}],overscroll:[{overscroll:j()}],"overscroll-x":[{"overscroll-x":j()}],"overscroll-y":[{"overscroll-y":j()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[y]}],"inset-x":[{"inset-x":[y]}],"inset-y":[{"inset-y":[y]}],start:[{start:[y]}],end:[{end:[y]}],top:[{top:[y]}],right:[{right:[y]}],bottom:[{bottom:[y]}],left:[{left:[y]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",k]}],basis:[{basis:M()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",A]}],grow:[{grow:W()}],shrink:[{shrink:W()}],order:[{order:["first","last","none",k]}],"grid-cols":[{"grid-cols":[q]}],"col-start-end":[{col:["auto",{span:["full",k]},A]}],"col-start":[{"col-start":Q()}],"col-end":[{"col-end":Q()}],"grid-rows":[{"grid-rows":[q]}],"row-start-end":[{row:["auto",{span:[k]},A]}],"row-start":[{"row-start":Q()}],"row-end":[{"row-end":Q()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",A]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",A]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal"].concat(H())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(H(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(H(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[E]}],px:[{px:[E]}],py:[{py:[E]}],ps:[{ps:[E]}],pe:[{pe:[E]}],pt:[{pt:[E]}],pr:[{pr:[E]}],pb:[{pb:[E]}],pl:[{pl:[E]}],m:[{m:[P]}],mx:[{mx:[P]}],my:[{my:[P]}],ms:[{ms:[P]}],me:[{me:[P]}],mt:[{mt:[P]}],mr:[{mr:[P]}],mb:[{mb:[P]}],ml:[{ml:[P]}],"space-x":[{"space-x":[_]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[_]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",A,t]}],"min-w":[{"min-w":["min","max","fit",A,h]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[O]},O,A]}],h:[{h:[A,t,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",A,h]}],"max-h":[{"max-h":[A,t,"min","max","fit"]}],"font-size":[{text:["base",O,v]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",I]}],"font-family":[{font:[q]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",A]}],"line-clamp":[{"line-clamp":["none",$,I]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",A,h]}],"list-image":[{"list-image":["none",A]}],"list-style-type":[{list:["none","disc","decimal",A]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[x]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[x]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(G(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",h]}],"underline-offset":[{"underline-offset":["auto",A,h]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:U()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",A]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",A]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[x]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(B(),[S])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",b]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},w]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[g]}],"gradient-via-pos":[{via:[g]}],"gradient-to-pos":[{to:[g]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[x]}],"border-style":[{border:[].concat(G(),["hidden"])}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[x]}],"divide-style":[{divide:G()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:[""].concat(G())}],"outline-offset":[{"outline-offset":[A,h]}],"outline-w":[{outline:[h]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:V()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[x]}],"ring-offset-w":[{"ring-offset":[h]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",O,T]}],"shadow-color":[{shadow:[q]}],opacity:[{opacity:[x]}],"mix-blend":[{"mix-blend":z()}],"bg-blend":[{"bg-blend":z()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[n]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",O,A]}],grayscale:[{grayscale:[l]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[p]}],saturate:[{saturate:[F]}],sepia:[{sepia:[L]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[l]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[x]}],"backdrop-saturate":[{"backdrop-saturate":[F]}],"backdrop-sepia":[{"backdrop-sepia":[L]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",A]}],duration:[{duration:X()}],ease:[{ease:["linear","in","out","in-out",A]}],delay:[{delay:X()}],animate:[{animate:["none","spin","ping","pulse","bounce",A]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[R]}],"scale-x":[{"scale-x":[R]}],"scale-y":[{"scale-y":[R]}],rotate:[{rotate:[k,A]}],"translate-x":[{"translate-x":[D]}],"translate-y":[{"translate-y":[D]}],"skew-x":[{"skew-x":[N]}],"skew-y":[{"skew-y":[N]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",A]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",A]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":U()}],"scroll-mx":[{"scroll-mx":U()}],"scroll-my":[{"scroll-my":U()}],"scroll-ms":[{"scroll-ms":U()}],"scroll-me":[{"scroll-me":U()}],"scroll-mt":[{"scroll-mt":U()}],"scroll-mr":[{"scroll-mr":U()}],"scroll-mb":[{"scroll-mb":U()}],"scroll-ml":[{"scroll-ml":U()}],"scroll-p":[{"scroll-p":U()}],"scroll-px":[{"scroll-px":U()}],"scroll-py":[{"scroll-py":U()}],"scroll-ps":[{"scroll-ps":U()}],"scroll-pe":[{"scroll-pe":U()}],"scroll-pt":[{"scroll-pt":U()}],"scroll-pr":[{"scroll-pr":U()}],"scroll-pb":[{"scroll-pb":U()}],"scroll-pl":[{"scroll-pl":U()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",A]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[h,I]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var _=Object.prototype.hasOwnProperty,D=new Set(["string","number","boolean"]);let j=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return"function"==typeof e?l.apply(void 0,[N,e].concat(r)):l.apply(void 0,[function(){var t=N();for(var r in e)!function e(t,r,n){if(!_.call(t,r)||D.has(typeof n)||null===n){t[r]=n;return}if(Array.isArray(n)&&Array.isArray(t[r])){t[r]=t[r].concat(n);return}if("object"==typeof n&&"object"==typeof t[r]){if(null===t[r]){t[r]=n;return}for(var i in n)e(t[r],i,n[i])}}(t,r,e[r]);return t}].concat(r))}({classGroups:{"font-size":[{text:["md","caption","body","title-small","title-medium","title-large","display-small","display-medium","display-large"]}],rounded:[{rounded:["sd","sd-sm","sd-md","sd-lg","sd-xl","sd-2xl"]}]}}),K=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return j(i()(...t))}},22369:()=>{},22568:(e,t,r)=>{var n=r(35240),i=r(79548);e.exports=function(e){var t=n(e,"string");return i(t)?t:t+""}},22667:(e,t,r)=>{"use strict";r.d(t,{Uk:()=>l});var n=r(56011),i=r(12833),o=r(90670),s=r(77704),a=r(52035),u=r(99742);function l(e){let t;return(t=u.env.NEXT_PHASE===a.PHASE_PRODUCTION_BUILD,t||0)?new i.w({traceId:"00000000000000000000000000000000",spanId:"0000000000000000"}):(0,o.Uk)(e)}},22701:(e,t,r)=>{"use strict";r.d(t,{g:()=>u});var n=r(37876),i=r(22257);let o={fill:"var(--fa-primary-color, currentColor)",opacity:"var(--fa-primary-opacity, 1)"},s={fill:"var(--fa-secondary-color, currentColor)",opacity:"var(--fa-secondary-opacity, 0.4)"},a={"2xs":"0.625em",xs:"0.75em",sm:"0.875em",lg:"1.25em",xl:"1.5em","2xl":"2em","1x":"1em","2x":"2em","3x":"3em","4x":"4em","5x":"5em","6x":"6em","7x":"7em","8x":"8em","9x":"9em","10x":"10em"};function u(e){let{icon:t,className:r,title:u,spin:l,size:c,style:d,...p}=e,{iconName:m,icon:f}=t,[g,y,,,h]=f,v=Array.isArray(h),b=c?a[c]:void 0;return(0,n.jsxs)("svg",{"aria-hidden":u?void 0:"true",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${g} ${y}`,height:"1em",width:`${(g/y).toFixed(4).replace(/\.?0+$/,"")}em`,style:b?{fontSize:b,...d}:d,className:(0,i.x)("svg-inline--fa",`fa-${m}`,{"animate-spin":l},null!=r?r:""),...p,children:[u?(0,n.jsx)("title",{children:u}):null,v?(0,n.jsxs)("g",{className:"fa-duotone-group",children:[(0,n.jsx)("path",{className:"fa-secondary",style:s,d:h[0]}),(0,n.jsx)("path",{className:"fa-primary",style:o,d:h[1]})]}):(0,n.jsx)("path",{fill:"currentColor",d:h})]})}},23077:(e,t)=>{"use strict";t.mw={prefix:"far",iconName:"memo",icon:[384,512,[],"e1d8","M64 48c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM0 64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm120 64H264c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 96H264c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 96h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]},t.el=t.mw},23520:(e,t,r)=>{"use strict";var n=r(97225),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function u(e){return n.isMemo(e)?s:a[e.$$typeof]||i}a[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[n.Memo]=s;var l=Object.defineProperty,c=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,f=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(f){var i=m(r);i&&i!==f&&e(t,i,n)}var s=c(r);d&&(s=s.concat(d(r)));for(var a=u(t),g=u(r),y=0;y<s.length;++y){var h=s[y];if(!o[h]&&!(n&&n[h])&&!(g&&g[h])&&!(a&&a[h])){var v=p(r,h);try{l(t,h,v)}catch(e){}}}}return t}},24459:(e,t,r)=>{"use strict";var n=r(14232),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=n.useState,s=n.useEffect,a=n.useLayoutEffect,u=n.useDebugValue;function l(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(e){return!0}}var c="u"<typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=o({inst:{value:r,getSnapshot:t}}),i=n[0].inst,c=n[1];return a(function(){i.value=r,i.getSnapshot=t,l(i)&&c({inst:i})},[e,r,t]),s(function(){return l(i)&&c({inst:i}),e(function(){l(i)&&c({inst:i})})},[e]),u(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:c},24538:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="circle-info",n=["info-circle"],i="f05a",o="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z";t.definition={prefix:"fas",iconName:r,icon:[512,512,n,i,o]},t.faCircleInfo=t.definition,t.prefix="fas",t.iconName=r,t.width=512,t.height=512,t.ligatures=n,t.unicode=i,t.svgPathData=o,t.aliases=n},25028:(e,t,r)=>{"use strict";let n;r.d(t,{H:()=>o});var i=r(37149),o=(n=()=>i.S$,{isServer:()=>n(),setIsServer(e){n=e}})},25497:(e,t,r)=>{var n=r(90304),i=r(12682),o=r(47918),s=r(80128);e.exports=function(e,t,r){for(var a=i(t),u=s.f,l=o.f,c=0;c<a.length;c++){var d=a[c];n(e,d)||r&&n(r,d)||u(e,d,l(t,d))}}},25741:(e,t,r)=>{"use strict";r.d(t,{A:()=>c});var n=r(21710),i=r(81365),o=r(75438),s=Object.prototype,a=Function.prototype.toString,u=s.hasOwnProperty,l=a.call(Object);let c=function(e){if(!(0,o.A)(e)||"[object Object]"!=(0,n.A)(e))return!1;var t=(0,i.A)(e);if(null===t)return!0;var r=u.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&a.call(r)==l}},26223:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(67966),i=r(82340);let o=function(e,t){return t.length<2?e:(0,n.A)(e,(0,i.A)(t,0,-1))}},26225:(e,t,r)=>{"use strict";r.d(t,{T2:()=>o});let n=null,i="",o=async()=>{if(i)return i;let e=(await r.e(55418).then(r.bind(r,180))).default;n||(n=e.load());try{let t=await n,{osCpu:r,timezone:o,sessionStorage:s,localStorage:a,indexedDB:u,cpuClass:l,cookiesEnabled:c,vendor:d,hardwareConcurrency:p,platform:m,deviceMemory:f}=(await t.get()).components;return i=e.hashComponents({osCpu:r,timezone:o,sessionStorage:s,localStorage:a,indexedDB:u,cpuClass:l,cookiesEnabled:c,vendor:d,hardwareConcurrency:p,platform:m,deviceMemory:f,browserName:{value:function(){var e,t;let r=window.navigator.userAgent;if(r.indexOf("QQBrowser")>=0||r.indexOf("QQ")>=0)return"QQ";if(r.indexOf("Safari")>=0&&r.indexOf("MetaSr")>=0)return"搜狗";if((null==(e=window)?void 0:e.ActiveXObject)||"ActiveXObject"in window)return window.XMLHttpRequest?!window.XMLHttpRequest||(null==(t=document)?void 0:t.documentMode)?"IE9":"IE7":"IE6";if(r.indexOf("LBBROWSER")>=0)return"LBBROWSER";if(r.indexOf("Firefox")>=0)return"Firefox";else if(r.indexOf("Maxthon")>=0)return"Maxthon";else if(r.indexOf("Edg")>=0||r.indexOf("Edge")>=0)return"Edge";else if(r.indexOf("Chrome")>=0)return"Chrome";else if(r.indexOf("Opera")>=0)return"Opera";else if(r.indexOf("TheWorld")>=0)return"TheWorld";else if(r.indexOf("Safari")>=0)return"Safari";else return"other"}(),duration:1},browserVersion:{value:function(){let e=navigator.userAgent,t="Unknown",r=e.match(/(Firefox|Chrome|Version|Edge|Edg|OPR)\/([0-9\.]+)/);if(r&&r.length>=3)return r[2];if(e.indexOf("MSIE")>-1||e.indexOf("Trident")>-1){let r=e.match(/(MSIE |rv:)([0-9\.]+)/);r&&(t=r[2])}return t}(),duration:1}})}catch(e){return""}}},26454:e=>{e.exports=!1},26714:(e,t,r)=>{"use strict";var n=r(11359),i=r(94278);n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},26826:(e,t,r)=>{"use strict";r.d(t,{A:()=>u});var n=r(40678),i=r(75438),o=r(99809),s=r(43091),a=s.A&&s.A.isSet;let u=a?(0,o.A)(a):function(e){return(0,i.A)(e)&&"[object Set]"==(0,n.A)(e)}},27195:(e,t,r)=>{"use strict";r.d(t,{b:()=>i});var n=r(62400);class i extends n.l4{async request(e){for(var t,r,n=arguments.length,i=Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=arguments[s];let a="object"==typeof e&&null!==e&&"document"in e?e:{document:e,variables:i[0],requestHeaders:i[1]},u=function(e){var t,r;if("string"==typeof e)return null==(t=o.exec(e))?void 0:t[1];if("definitions"in e){let t=e.definitions.find(e=>"OperationDefinition"===e.kind&&e.name);return null==t||null==(r=t.name)?void 0:r.value}}(a.document),l=null!=(t=null==(r=this.options)?void 0:r.headers)?t:{},c=a.requestHeaders||{},d={...l,...c,"x-operation-name":u||"anonymous"};try{return await super.request({...a,requestHeaders:d})}catch(e){throw e}}}let o=/^\s*(?:query|mutation|subscription)\s+([A-Za-z_][A-Za-z0-9_]*)/m},27514:(e,t,r)=>{var n=r(77475),i=String,o=TypeError;e.exports=function(e){if(n(e))return e;throw o(i(e)+" is not an object")}},28058:(e,t,r)=>{"use strict";r.d(t,{gJ:()=>c,hz:()=>p,rV:()=>d,TO:()=>m});var n,i=r(13205);r(28389);var o=r(14232),s=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,a={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"\xa9","&#169;":"\xa9","&reg;":"\xae","&#174;":"\xae","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},u=function(e){return a[e]},l={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:function(e){return e.replace(s,u)}},c=(0,o.createContext)();function d(){return l}var p=function(){var e;function t(){if(!(this instanceof t))throw TypeError("Cannot call a class as a function");this.usedNamespaces={}}return e=[{key:"addUsedNamespaces",value:function(e){var t=this;e.forEach(function(e){t.usedNamespaces[e]||(t.usedNamespaces[e]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(0,i.A)(n.key),n)}}(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}();function m(){return n}},28235:(e,t,r)=>{var n=r(51141),i=r(58524),o=r(43396),s=n(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},28285:(e,t,r)=>{"use strict";r.d(t,{$r:()=>m,C_:()=>y,Cn:()=>v,Jg:()=>f,UY:()=>p,de:()=>g,n3:()=>$,t_:()=>h});var n=r(14232),i=r(38189),o=r(95877),s=r(4080),a=r(75080),u=r(50366);let l="leetcode_premium_region",c="premium_region_guide_dismissed",d=e=>(null!=e?e:"").toUpperCase(),p=(e,t)=>!!e&&"IN"!==d(null!=t?t:void 0),m=e=>{(0,u.Bd)()&&(localStorage.setItem(l,e),window.dispatchEvent(new Event("premium-region-change")))},f=e=>"IN"===d(e),g=(e,t)=>"IN"===d(null!=e?e:void 0)&&!f(null!=t?t:void 0),y=e=>{let{isPremium:t,premiumCountryCode:r,ipCountryCode:n}=e;return!(!t||g(r,n))},h=()=>!!(0,u.Bd)()&&"1"===sessionStorage.getItem(c),v=()=>{(0,u.Bd)()&&(sessionStorage.setItem(c,"1"),window.dispatchEvent(new Event("premium-region-guide-dismiss")))},b=e=>(0,u.Bd)()?(window.addEventListener("premium-region-change",e),window.addEventListener("storage",e),()=>{window.removeEventListener("premium-region-change",e),window.removeEventListener("storage",e)}):()=>{},S=()=>(()=>{if(!(0,u.Bd)())return null;let e=localStorage.getItem(l);return"us"===e||"in"===e||"cn"===e?e:null})(),w=()=>!!(0,u.Bd)()&&"1"===localStorage.getItem("leetcode_disable_ip_tracking"),I=e=>(0,u.Bd)()?(window.addEventListener("premium-region-change",e),window.addEventListener("storage",e),()=>{window.removeEventListener("premium-region-change",e),window.removeEventListener("storage",e)}):()=>{},$=s.L4?()=>{var e,t;let{data:r,isInitialLoading:u}=(0,a.V)(),{data:l,isInitialLoading:c}=(0,i.Xe)(),g=null==l||null==(e=l.userStatus)?void 0:e.isPremiumRaw,y=null==l||null==(t=l.userStatus)?void 0:t.premiumCountryCode,v=(0,n.useMemo)(()=>"in"===r&&!u,[r,u]),$=(0,n.useSyncExternalStore)(I,w,()=>!1),{data:C,isLoading:k}=(0,o.H)(!$),A=$?"US":null==C?void 0:C.countryCode,q=(0,n.useSyncExternalStore)(b,S,()=>null),O=f(A),T=(0,n.useMemo)(()=>u||k||O&&c,[u,k,O,c]),P=(0,n.useMemo)(()=>{var e,t;return e=A,t={isPremium:g,premiumCountryCode:y},"IN"===d(e)?p(null==t?void 0:t.isPremium,null==t?void 0:t.premiumCountryCode)?"us":"in":"us"},[A,g,y]),x=(0,n.useMemo)(()=>{let e;return"IN"===(e=d(A))?["us","in"]:"CN"===e?["us","cn"]:[]},[A]),E=x.length>0,F=(0,n.useMemo)(()=>E&&q&&x.includes(q)?q:P,[P,E,q,x]),R=(0,n.useCallback)(e=>{if("cn"===e){window.location.href="https://leetcode.cn/?source=us-footer-region";return}x.includes(e)&&m(e)},[x]),L=(0,n.useMemo)(()=>!T&&v&&s.L4&&f(A)&&"us"===F&&!p(g,y)&&!h(),[v,T,A,g,y,F]);return{enabledIndiaUpi:v,ipCountryCode:A,autoRegion:P,selectedRegion:F,switchableRegions:x,canSwitch:E,setSelectedRegion:R,initialLoading:T,isIpRegionLoading:k,showIndiaRegionGuide:L,subscriptionCountry:v&&T&&O?"":v&&"in"===F?"in":"us"}}:()=>({enabledIndiaUpi:!1,selectedRegion:"cn",ipCountryCode:"CN",autoRegion:"cn",switchableRegions:["cn"],canSwitch:!1,setSelectedRegion:e=>void 0,initialLoading:!1,isIpRegionLoading:!1,showIndiaRegionGuide:!1,subscriptionCountry:"cn"})},28389:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(13205);function i(e,t,r){return(t=(0,n.A)(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},28461:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(86702),i=1/0;let o=function(e){if("string"==typeof e||(0,n.A)(e))return e;var t=e+"";return"0"==t&&1/e==-i?"-0":t}},28663:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(18240),i=r(11396),o=Object.prototype.hasOwnProperty;let s=function(e,t,r){var s=e[t];o.call(e,t)&&(0,i.A)(s,r)&&(void 0!==r||t in e)||(0,n.A)(e,t,r)}},29454:(e,t,r)=>{"use strict";function n(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)"__proto__"!==n&&(e[n]=r[n])}return e}r.d(t,{A:()=>i});var i=function e(t,r){function i(e,i,o){if("u">typeof document){"number"==typeof(o=n({},r,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var a in o)o[a]&&(s+="; "+a,!0!==o[a]&&(s+="="+o[a].split(";")[0]));return document.cookie=e+"="+t.write(i,e)+s}}return Object.create({set:i,get:function(e){if("u">typeof document&&(!arguments.length||e)){for(var r=document.cookie?document.cookie.split("; "):[],n={},i=0;i<r.length;i++){var o=r[i].split("="),s=o.slice(1).join("=");try{var a=decodeURIComponent(o[0]);if(a in n||(n[a]=t.read(s,a)),e===a)break}catch(e){}}return e?n[e]:n}},remove:function(e,t){i(e,"",n({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,n({},this.attributes,t))},withConverter:function(t){return e(n({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})},29907:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=Function.prototype.toString;let i=function(e){if(null!=e){try{return n.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},30123:(e,t,r)=>{var n=r(34004),i=r(27514),o=r(58524),s=r(15653),a=r(94278),u=TypeError;e.exports=function(e,t){var r=e.exec;if(o(r)){var l=n(r,e,t);return null!==l&&i(l),l}if("RegExp"===s(e))return n(a,e,t);throw u("RegExp#exec called on incompatible receiver")}},30183:(e,t,r)=>{var n=r(15177),i=r(56354);e.exports=n&&i(function(){return 42!=Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype})},30243:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(21194);let i=function(e){var t=new e.constructor(e.byteLength);return new n.A(t).set(new n.A(e)),t}},30372:(e,t,r)=>{var n=r(15177),i=r(56354),o=r(47594);e.exports=!n&&!i(function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a})},30385:(e,t,r)=>{var n=r(15653),i=r(51141);e.exports=function(e){if("Function"===n(e))return i(e)}},31175:(e,t,r)=>{var n=r(34004),i=r(58524),o=r(77475),s=TypeError;e.exports=function(e,t){var r,a;if("string"===t&&i(r=e.toString)&&!o(a=n(r,e))||i(r=e.valueOf)&&!o(a=n(r,e))||"string"!==t&&i(r=e.toString)&&!o(a=n(r,e)))return a;throw s("Can't convert object to primitive value")}},31325:(e,t,r)=>{"use strict";r.d(t,{t:()=>s});var n=r(37876),i=r(14232),o=r(18334);class s extends i.Component{static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,t){o.Cp(e,{extra:{componentStack:t.componentStack}}),console.debug(e),console.debug(t)}render(){if(this.state.hasError){var e;return this.props.fallback?this.props.fallback:(0,n.jsx)("div",{className:this.props.className,children:null!=(e=this.props.message)?e:"Error rendering component"})}return this.props.children}constructor(e){super(e),this.state={hasError:!1}}}},31816:function(e){e.exports=function(e,t){t.prototype.weekday=function(e){var t=this.$locale().weekStart||0,r=this.$W,n=(r<t?r+7:r)-t;return this.$utils().u(e)?n:this.subtract(n,"day").add(e,"day")}}},31893:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(14232),i=r(98477),o=r(66326),s=r(81285),a=r(37876),u=n.forwardRef((e,t)=>{let{container:r,...u}=e,[l,c]=n.useState(!1);(0,s.N)(()=>c(!0),[]);let d=r||l&&globalThis?.document?.body;return d?i.createPortal((0,a.jsx)(o.sG.div,{...u,ref:t}),d):null});u.displayName="Portal"},33320:(e,t,r)=>{var n=r(52605),i=Function.prototype,o=i.apply,s=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(n?s.bind(o):function(){return s.apply(o,arguments)})},33716:(e,t,r)=>{"use strict";function n(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e?.(n),!1===r||!n.defaultPrevented)return t?.(n)}}r.d(t,{m:()=>n})},33774:function(e){e.exports=function(e,t,r){t.prototype.isYesterday=function(){var e="YYYY-MM-DD",t=r().subtract(1,"day");return this.format(e)===t.format(e)}}},34004:(e,t,r)=>{var n=r(52605),i=Function.prototype.call;e.exports=n?i.bind(i):function(){return i.apply(i,arguments)}},34054:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=function(e){return function(){return e}}},35072:(e,t,r)=>{"use strict";r.d(t,{A:()=>p});var n=(0,r(58714).A)(Object,"create"),i=Object.prototype.hasOwnProperty,o=Object.prototype.hasOwnProperty;function s(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}s.prototype.clear=function(){this.__data__=n?n(null):{},this.size=0},s.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=!!t,t},s.prototype.get=function(e){var t=this.__data__;if(n){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return i.call(t,e)?t[e]:void 0},s.prototype.has=function(e){var t=this.__data__;return n?void 0!==t[e]:o.call(t,e)},s.prototype.set=function(e,t){var r=this.__data__;return this.size+=+!this.has(e),r[e]=n&&void 0===t?"__lodash_hash_undefined__":t,this};var a=r(97591),u=r(5915);let l=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},c=function(e,t){var r=e.__data__;return l(t)?r["string"==typeof t?"string":"hash"]:r.map};function d(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}d.prototype.clear=function(){this.size=0,this.__data__={hash:new s,map:new(u.A||a.A),string:new s}},d.prototype.delete=function(e){var t=c(this,e).delete(e);return this.size-=!!t,t},d.prototype.get=function(e){return c(this,e).get(e)},d.prototype.has=function(e){return c(this,e).has(e)},d.prototype.set=function(e,t){var r=c(this,e),n=r.size;return r.set(e,t),this.size+=+(r.size!=n),this};let p=d},35240:(e,t,r)=>{var n=r(34004),i=r(77475),o=r(79548),s=r(14455),a=r(31175),u=r(3982),l=TypeError,c=u("toPrimitive");e.exports=function(e,t){if(!i(e)||o(e))return e;var r,u=s(e,c);if(u){if(void 0===t&&(t="default"),!i(r=n(u,e,t))||o(r))return r;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},35545:()=>{},35873:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=Date.now;let i=function(e){var t=0,r=0;return function(){var i=n(),o=16-(i-r);if(r=i,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}},37149:(e,t,r)=>{"use strict";r.d(t,{BH:()=>h,Cp:()=>g,EN:()=>f,F$:()=>m,GU:()=>T,MK:()=>d,S$:()=>i,ZM:()=>O,ZZ:()=>A,Zw:()=>s,d2:()=>l,f8:()=>v,gn:()=>a,hT:()=>q,j3:()=>u,lQ:()=>o,nJ:()=>p,nU:()=>c,ox:()=>P,pl:()=>$,rX:()=>C,y9:()=>k,yy:()=>I});var n=r(48306),i="u"<typeof window||"Deno"in globalThis;function o(){}function s(e,t){return"function"==typeof e?e(t):e}function a(e){return"number"==typeof e&&e>=0&&e!==1/0}function u(e,t){return Math.max(e+(t||0)-Date.now(),0)}function l(e,t){return"function"==typeof e?e(t):e}function c(e,t){return"function"==typeof e?e(t):e}function d(e,t){let{type:r="all",exact:n,fetchStatus:i,predicate:o,queryKey:s,stale:a}=e;if(s){if(n){if(t.queryHash!==m(s,t.options))return!1}else if(!g(t.queryKey,s))return!1}if("all"!==r){let e=t.isActive();if("active"===r&&!e||"inactive"===r&&e)return!1}return("boolean"!=typeof a||t.isStale()===a)&&(!i||i===t.state.fetchStatus)&&(!o||!!o(t))}function p(e,t){let{exact:r,status:n,predicate:i,mutationKey:o}=e;if(o){if(!t.options.mutationKey)return!1;if(r){if(f(t.options.mutationKey)!==f(o))return!1}else if(!g(t.options.mutationKey,o))return!1}return(!n||t.state.status===n)&&(!i||!!i(t))}function m(e,t){return(t?.queryKeyHashFn||f)(e)}function f(e){return JSON.stringify(e,(e,t)=>S(t)?Object.keys(t).sort().reduce((e,r)=>(e[r]=t[r],e),{}):t)}function g(e,t){return e===t||typeof e==typeof t&&!!e&&!!t&&"object"==typeof e&&"object"==typeof t&&Object.keys(t).every(r=>g(e[r],t[r]))}var y=Object.prototype.hasOwnProperty;function h(e,t,r=0){if(e===t)return e;if(r>500)return t;let n=b(e)&&b(t);if(!n&&!(S(e)&&S(t)))return t;let i=(n?e:Object.keys(e)).length,o=n?t:Object.keys(t),s=o.length,a=n?Array(s):{},u=0;for(let l=0;l<s;l++){let s=n?l:o[l],c=e[s],d=t[s];if(c===d){a[s]=c,(n?l<i:y.call(e,s))&&u++;continue}if(null===c||null===d||"object"!=typeof c||"object"!=typeof d){a[s]=d;continue}let p=h(c,d,r+1);a[s]=p,p===c&&u++}return i===s&&u===i?e:a}function v(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(let r in e)if(e[r]!==t[r])return!1;return!0}function b(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function S(e){if(!w(e))return!1;let t=e.constructor;if(void 0===t)return!0;let r=t.prototype;return!!w(r)&&!!r.hasOwnProperty("isPrototypeOf")&&Object.getPrototypeOf(e)===Object.prototype}function w(e){return"[object Object]"===Object.prototype.toString.call(e)}function I(e){return new Promise(t=>{n.zs.setTimeout(t,e)})}function $(e,t,r){return"function"==typeof r.structuralSharing?r.structuralSharing(e,t):!1!==r.structuralSharing?h(e,t):t}function C(e){return e}function k(e,t,r=0){let n=[...e,t];return r&&n.length>r?n.slice(1):n}function A(e,t,r=0){let n=[t,...e];return r&&n.length>r?n.slice(0,-1):n}var q=Symbol();function O(e,t){return!e.queryFn&&t?.initialPromise?()=>t.initialPromise:e.queryFn&&e.queryFn!==q?e.queryFn:()=>Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))}function T(e,t){return"function"==typeof e?e(...t):!!e}function P(e,t,r){let n,i=!1;return Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(n??=t(),i||(i=!0,n.aborted?r():n.addEventListener("abort",r,{once:!0})),n)}),e}},37384:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="square-check",n=[9745,9989,61510,"check-square"],i="f14a",o="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z";t.definition={prefix:"far",iconName:r,icon:[448,512,n,i,o]},t.faSquareCheck=t.definition,t.prefix="far",t.iconName=r,t.width=448,t.height=512,t.ligatures=n,t.unicode=i,t.svgPathData=o,t.aliases=n},37785:(e,t,r)=>{var n,i,o=r(72806),s=r(42293),a=o.process,u=o.Deno,l=a&&a.versions||u&&u.version,c=l&&l.v8;c&&(i=(n=c.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!i&&s&&(!(n=s.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=s.match(/Chrome\/(\d+)/))&&(i=+n[1]),e.exports=i},38189:(e,t,r)=>{"use strict";r.d(t,{Xe:()=>u});var n=r(18422),i=r(56610),o=r(95877),s=r(28285);let a=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(0,n.J4G)(e,{},{select:e=>((e,t)=>{let{userStatus:r}=e;if(!r)return null;let{userId:i,isSignedIn:o,isAdmin:a,isPremium:u,premiumCountryCode:l,username:c,avatar:d,isTranslator:p,isVerified:m,permissions:f,notificationStatus:g,isSuperuser:y,isMockUser:h,activeSessionId:v,checkedInToday:b,completedFeatureGuides:S,realName:w,premiumExpiredAt:I}=r;return{userStatus:{userId:i,isAdmin:a,isSignedIn:o,userSlug:void 0,useTranslation:void 0,isPremium:(0,s.C_)({isPremium:u,premiumCountryCode:l,ipCountryCode:t}),isPremiumRaw:u,premiumCountryCode:l,username:c,name:w,avatar:d,premiumExpiredAt:I,notificationStatus:g,isSuperuser:y,isTranslator:p,permissions:f?f.map(e=>e?e.toString():void 0).filter(Boolean):[],isMockUser:h,isVerified:m,activeSessionId:v,checkedInToday:b,showGuideIde:!!o&&!(null==S?void 0:S.includes(n.ngd.NewIdeDynamicLayoutV2))}}})(e,t),...r})},u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,i._h)(),{data:r}=(0,o.H)();return a(null!=t?t:i.nS,null==r?void 0:r.countryCode,{...e,enabled:!!t})}},38443:(e,t,r)=>{var n=r(58524),i=r(91786),o=TypeError;e.exports=function(e){if(n(e))return e;throw o(i(e)+" is not a function")}},38607:(e,t,r)=>{var n=r(9676),i=TypeError;e.exports=function(e){if(n(e))throw i("Can't call method on "+e);return e}},38806:(e,t,r)=>{"use strict";e.exports=r(24459)},39805:(e,t,r)=>{"use strict";r.d(t,{A:()=>u});var n=r(40678),i=r(75438),o=r(99809),s=r(43091),a=s.A&&s.A.isMap;let u=a?(0,o.A)(a):function(e){return(0,i.A)(e)&&"[object Map]"==(0,n.A)(e)}},39995:(e,t,r)=>{"use strict";r.d(t,{L:()=>i});var n=r(37876);let i=function(e){let{ref:t,...r}=e;return(0,n.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,...r,children:[(0,n.jsx)("path",{d:"M10.2188 2.6875L12 2L12.6562 0.25C12.6875 0.09375 12.8438 0 13 0C13.125 0 13.2812 0.09375 13.3125 0.25L14 2L15.75 2.6875C15.9062 2.71875 16 2.875 16 3C16 3.15625 15.9062 3.3125 15.75 3.34375L14 4L13.3125 5.78125C13.2812 5.90625 13.125 6 13 6C12.8438 6 12.6875 5.90625 12.6562 5.78125L12 4L10.2188 3.34375C10.0938 3.3125 10 3.15625 10 3C10 2.875 10.0938 2.71875 10.2188 2.6875ZM6.40625 2.3125L8.03125 5.875L11.5938 7.5C11.7812 7.59375 11.9062 7.78125 11.9062 7.96875C11.9062 8.15625 11.7812 8.34375 11.5938 8.40625L8.03125 10.0625L6.40625 13.625C6.3125 13.8125 6.125 13.9375 5.9375 13.9375C5.75 13.9375 5.5625 13.8125 5.5 13.625L3.84375 10.0625L0.28125 8.4375C0.09375 8.34375 0 8.15625 0 7.96875C0 7.78125 0.09375 7.59375 0.28125 7.5L3.84375 5.875L5.5 2.3125C5.5625 2.125 5.75 2 5.9375 2C6.125 2 6.3125 2.125 6.40625 2.3125ZM12 12L12.6562 10.25C12.6875 10.0938 12.8438 10 13 10C13.125 10 13.2812 10.0938 13.3125 10.25L14 12L15.75 12.6875C15.9062 12.7188 16 12.875 16 13C16 13.1562 15.9062 13.3125 15.75 13.3438L14 14L13.3125 15.7812C13.2812 15.9062 13.125 16 13 16C12.8438 16 12.6875 15.9062 12.6562 15.7812L12 14L10.2188 13.3438C10.0938 13.3125 10 13.1562 10 13C10 12.875 10.0938 12.7188 10.2188 12.6875L12 12Z",fill:"#007AFF"}),(0,n.jsx)("path",{d:"M10.2188 2.6875L12 2L12.6562 0.25C12.6875 0.09375 12.8438 0 13 0C13.125 0 13.2812 0.09375 13.3125 0.25L14 2L15.75 2.6875C15.9062 2.71875 16 2.875 16 3C16 3.15625 15.9062 3.3125 15.75 3.34375L14 4L13.3125 5.78125C13.2812 5.90625 13.125 6 13 6C12.8438 6 12.6875 5.90625 12.6562 5.78125L12 4L10.2188 3.34375C10.0938 3.3125 10 3.15625 10 3C10 2.875 10.0938 2.71875 10.2188 2.6875ZM6.40625 2.3125L8.03125 5.875L11.5938 7.5C11.7812 7.59375 11.9062 7.78125 11.9062 7.96875C11.9062 8.15625 11.7812 8.34375 11.5938 8.40625L8.03125 10.0625L6.40625 13.625C6.3125 13.8125 6.125 13.9375 5.9375 13.9375C5.75 13.9375 5.5625 13.8125 5.5 13.625L3.84375 10.0625L0.28125 8.4375C0.09375 8.34375 0 8.15625 0 7.96875C0 7.78125 0.09375 7.59375 0.28125 7.5L3.84375 5.875L5.5 2.3125C5.5625 2.125 5.75 2 5.9375 2C6.125 2 6.3125 2.125 6.40625 2.3125ZM12 12L12.6562 10.25C12.6875 10.0938 12.8438 10 13 10C13.125 10 13.2812 10.0938 13.3125 10.25L14 12L15.75 12.6875C15.9062 12.7188 16 12.875 16 13C16 13.1562 15.9062 13.3125 15.75 13.3438L14 14L13.3125 15.7812C13.2812 15.9062 13.125 16 13 16C12.8438 16 12.6875 15.9062 12.6562 15.7812L12 14L10.2188 13.3438C10.0938 13.3125 10 13.1562 10 13C10 12.875 10.0938 12.7188 10.2188 12.6875L12 12Z",fill:"url(#paint0_linear_20112_5893)"}),(0,n.jsx)("defs",{children:(0,n.jsxs)("linearGradient",{id:"paint0_linear_20112_5893",x1:"0.498047",y1:"2.99988",x2:"27.998",y2:"15.4999",gradientUnits:"userSpaceOnUse",children:[(0,n.jsx)("stop",{stopColor:"#AF52DE"}),(0,n.jsx)("stop",{offset:"1",stopColor:"#007AFF"})]})})]})}},40097:(e,t,r)=>{"use strict";r.d(t,{n:()=>c});var n=r(14232),i=r(21407),o=r(60388),s=r(90089),a=r(37149),u=class extends s.Q{#p;#h=void 0;#U;#V;constructor(e,t){super(),this.#p=e,this.setOptions(t),this.bindMethods(),this.#Q()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){let t=this.options;this.options=this.#p.defaultMutationOptions(e),(0,a.f8)(this.options,t)||this.#p.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#U,observer:this}),t?.mutationKey&&this.options.mutationKey&&(0,a.EN)(t.mutationKey)!==(0,a.EN)(this.options.mutationKey)?this.reset():this.#U?.state.status==="pending"&&this.#U.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#U?.removeObserver(this)}onMutationUpdate(e){this.#Q(),this.#L(e)}getCurrentResult(){return this.#h}reset(){this.#U?.removeObserver(this),this.#U=void 0,this.#Q(),this.#L()}mutate(e,t){return this.#V=t,this.#U?.removeObserver(this),this.#U=this.#p.getMutationCache().build(this.#p,this.options),this.#U.addObserver(this),this.#U.execute(e)}#Q(){let e=this.#U?.state??(0,i.$)();this.#h={...e,isPending:"pending"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset}}#L(e){o.jG.batch(()=>{if(this.#V&&this.hasListeners()){let t=this.#h.variables,r=this.#h.context,n={client:this.#p,meta:this.options.meta,mutationKey:this.options.mutationKey};if(e?.type==="success"){try{this.#V.onSuccess?.(e.data,t,r,n)}catch(e){Promise.reject(e)}try{this.#V.onSettled?.(e.data,null,t,r,n)}catch(e){Promise.reject(e)}}else if(e?.type==="error"){try{this.#V.onError?.(e.error,t,r,n)}catch(e){Promise.reject(e)}try{this.#V.onSettled?.(void 0,e.error,t,r,n)}catch(e){Promise.reject(e)}}}this.listeners.forEach(e=>{e(this.#h)})})}},l=r(67768);function c(e,t){let r=(0,l.jE)(t),[i]=n.useState(()=>new u(r,e));n.useEffect(()=>{i.setOptions(e)},[i,e]);let s=n.useSyncExternalStore(n.useCallback(e=>i.subscribe(o.jG.batchCalls(e)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),c=n.useCallback((e,t)=>{i.mutate(e,t).catch(a.lQ)},[i]);if(s.error&&(0,a.GU)(i.options.throwOnError,[s.error]))throw s.error;return{...s,mutate:c,mutateAsync:s.mutate}}},40302:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={ServerInsertedHTMLContext:function(){return s},useServerInsertedHTML:function(){return a}};for(var i in n)Object.defineProperty(t,i,{enumerable:!0,get:n[i]});let o=r(88365)._(r(14232)),s=o.default.createContext(null);function a(e){let t=(0,o.useContext)(s);t&&t(e)}},40492:(e,t)=>{"use strict";t.mw={prefix:"far",iconName:"file-code",icon:[384,512,[],"f1c9","M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm97 289c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L79 303c-9.4 9.4-9.4 24.6 0 33.9l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-31-31 31-31zM257 255c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48c9.4-9.4 9.4-24.6 0-33.9l-48-48z"]},t.ru=t.mw},40678:(e,t,r)=>{"use strict";r.d(t,{A:()=>$});var n=r(58714),i=r(54743),o=(0,n.A)(i.A,"DataView"),s=r(5915),a=(0,n.A)(i.A,"Promise"),u=r(49749),l=r(60767),c=r(21710),d=r(29907),p="[object Map]",m="[object Promise]",f="[object Set]",g="[object WeakMap]",y="[object DataView]",h=(0,d.A)(o),v=(0,d.A)(s.A),b=(0,d.A)(a),S=(0,d.A)(u.A),w=(0,d.A)(l.A),I=c.A;(o&&I(new o(new ArrayBuffer(1)))!=y||s.A&&I(new s.A)!=p||a&&I(a.resolve())!=m||u.A&&I(new u.A)!=f||l.A&&I(new l.A)!=g)&&(I=function(e){var t=(0,c.A)(e),r="[object Object]"==t?e.constructor:void 0,n=r?(0,d.A)(r):"";if(n)switch(n){case h:return y;case v:return p;case b:return m;case S:return f;case w:return g}return t});let $=I},41660:(e,t,r)=>{"use strict";r.d(t,{$j:()=>g,Fu:()=>m,Fy:()=>p,GV:()=>y,j_:()=>f,tT:()=>d});var n,i,o=r(55691),s=r(4319),a=r(18973),u=r(19050),l=r(19388),c=r(57601),d=((n={}).Default="default",n.Contest="contest",n.QuestQuiz="quest-quiz",n),p=((i={}).Default="default",i.Mobile="mobile",i.Focus="focus",i);let m={questionSlug:"",questionId:"",problemType:a.yo.Algorithm,questionLayoutType:c.dB.Default,isDynamicLayout:!1,openingSolutionIdSet:new Set,openingSolutionSlugSet:new Set,openingSubmissionIdSet:new Set,openSettingModal:!1,settingModalActiveTab:l.I.Layout,settingModalHighlightOption:l.W.None,mode:"default",layoutMode:"default",contestSlug:"",isActiveContest:void 0,isActiveAiChat:!1,randomEId:(0,u.we)(),showGuide:!1,showNewFeatureGuide:!1,todayRecord:[],satisfactionSurveyIsOpen:!1,editorialTopicId:void 0,editorialSlug:void 0,isMobileForSSR:void 0,questListType:"",questSlug:"",openQuestHintWarning:!1,submissionAnalysisAvailable:!1,submissionEfficiencyAvailable:!1},f=(0,o.vt)((0,s.kg)(m,e=>({setQuestionSlug:t=>e(e=>({...e,questionSlug:t})),setProblemType:t=>e(e=>({...e,problemType:t})),setQuestionLayoutType:t=>e(e=>({...e,questionLayoutType:t})),updateState:t=>e(e=>({...e,...t})),addOpeningSolutionIdAndSlug:(t,r)=>e(e=>{let n=new Set(e.openingSolutionIdSet),i=new Set(e.openingSolutionSlugSet);return n.add(Number(t)),i.add(r),{...e,openingSolutionIdSet:n,openingSolutionSlugSet:i}}),removeOpeningSolutionIdAndSlug:(t,r)=>e(e=>{let n=new Set(e.openingSolutionIdSet),i=new Set(e.openingSolutionSlugSet);return n.delete(Number(t)),i.delete(r),{...e,openingSolutionIdSet:n,openingSolutionSlugSet:i}}),addOpeningSubmissionId:t=>e(e=>{let r=new Set(e.openingSubmissionIdSet);return r.add(Number(t)),{...e,openingSubmissionIdSet:r}}),removeOpeningSubmissionId:t=>e(e=>{let r=new Set(e.openingSubmissionIdSet);return r.delete(Number(t)),{...e,openingSubmissionIdSet:r}}),setOpenSettingModal:t=>e(e=>({...e,openSettingModal:t})),setSettingModalActiveTab:t=>e(e=>({...e,settingModalActiveTab:t})),setSettingModalHighlightOption:t=>e(e=>({...e,settingModalHighlightOption:t})),setMode:t=>e(e=>({...e,mode:t})),setContestSlug:t=>e(e=>({...e,contestSlug:t})),setIsActiveContest:t=>e(e=>({...e,isActiveContest:t})),setIsActiveAiChat:t=>e(e=>e.isActiveAiChat===t?e:{isActiveAiChat:t}),updateRandomEId:t=>e(e=>({...e,randomEId:t})),setShowGuide:t=>e(e=>({...e,showGuide:t,showNewFeatureGuide:!t&&e.showNewFeatureGuide})),setShowNewFeatureGuide:t=>e(e=>({...e,showNewFeatureGuide:t&&!e.showGuide})),setQuestionId:t=>e(e=>({...e,questionId:t})),setTodayRecord:t=>e(e=>({...e,todayRecord:t})),setSatisfactionSurveyIsOpen:t=>e(e=>({...e,satisfactionSurveyIsOpen:t})),setEditorialTopicId:t=>e(e=>({...e,editorialTopicId:t})),setEditorialSlug:t=>e(e=>({...e,editorialSlug:t})),setQdLayoutMode:t=>e(e=>({...e,layoutMode:t})),setQuestSlug:t=>e(e=>({...e,questSlug:t})),setQuestListType:t=>e(e=>({...e,questListType:t})),setOpenQuestHintWarning:t=>e(e=>({...e,openQuestHintWarning:t})),setSubmissionAnalysisAvailable:t=>e(e=>({...e,submissionAnalysisAvailable:t})),setSubmissionEfficiencyAvailable:t=>e(e=>({...e,submissionEfficiencyAvailable:t}))}))),g=()=>f.getState().mode,y=()=>f(e=>e.mode)},41767:(e,t,r)=>{var n=r(72806),i=r(58524),o=n.WeakMap;e.exports=i(o)&&/native code/.test(String(o))},42293:e=>{e.exports="u">typeof navigator&&String(navigator.userAgent)||""},42443:e=>{e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},42807:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=r(54743).A["__core-js_shared__"]},42813:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(81627);let i=function(e,t){var r;if("function"!=typeof t)throw TypeError("Expected a function");return e=(0,n.A)(e),function(){return--e>0&&(r=t.apply(this,arguments)),e<=1&&(t=void 0),r}}},43091:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var n=r(64682),i="object"==typeof exports&&exports&&!exports.nodeType&&exports,o=i&&"object"==typeof module&&module&&!module.nodeType&&module,s=o&&o.exports===i&&n.A.process;let a=function(){try{var e=o&&o.require&&o.require("util").types;if(e)return e;return s&&s.binding&&s.binding("util")}catch(e){}}()},43156:(e,t)=>{"use strict";t.mw={prefix:"far",iconName:"eye",icon:[576,512,[128065],"f06e","M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"]},t.pS=t.mw},43295:(e,t,r)=>{"use strict";r.d(t,{N:()=>i});var n=r(14232);let i=e=>{let t=(0,n.useMemo)(()=>matchMedia(e),[e]),[r,i]=(0,n.useState)(t.matches);return(0,n.useEffect)(()=>{let e=!0,r=t=>{e&&i(t.matches)};return t.addEventListener?t.addEventListener("change",r):t.addListener(r),()=>{e=!1,t.removeEventListener?t.removeEventListener("change",r):t.removeListener(r)}},[t]),r}},43396:(e,t,r)=>{var n=r(72806),i=r(75288),o="__core-js_shared__";e.exports=n[o]||i(o,{})},43754:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(21710),i=r(83497);let o=function(e){if(!(0,i.A)(e))return!1;var t=(0,n.A)(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},43777:(e,t,r)=>{var n=r(51141),i=r(90304),o=r(86252),s=r(93152).indexOf,a=r(12524),u=n([].push);e.exports=function(e,t){var r,n=o(e),l=0,c=[];for(r in n)!i(a,r)&&i(n,r)&&u(c,r);for(;t.length>l;)i(n,r=t[l++])&&(~s(c,r)||u(c,r));return c}},44013:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(28663),i=r(18240);let o=function(e,t,r,o){var s=!r;r||(r={});for(var a=-1,u=t.length;++a<u;){var l=t[a],c=o?o(r[l],e[l],l,r,e):void 0;void 0===c&&(c=e[l]),s?(0,i.A)(r,l,c):(0,n.A)(r,l,c)}return r}},44544:(e,t,r)=>{"use strict";let n,i;r.d(t,{GS:()=>l,I7:()=>u,NX:()=>c});let o=!1,s=e=>{try{var t;return null==(t=new URL(e,"https://leetcode.com").pathname.match(/\/problems\/([^/]+)/))?void 0:t[1]}catch{return}},a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:performance.now(),r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.location.href,i=s(e),o=s(r);n=i&&i!==o?{questionSlug:i,startedAt:t}:void 0},u=e=>a(e),l=e=>{let t=s(e);t&&(null==n?void 0:n.questionSlug)===t&&(n=void 0)},c=(e,t,r)=>((null==i?void 0:i.key)!==e&&(i={key:e,visit:((e,t)=>{if(void 0!==t)return{navigationType:"bfcache",startedAt:t};if((null==n?void 0:n.questionSlug)===e){let{startedAt:e}=n;return n=void 0,{navigationType:"spa",startedAt:e}}if(!o)return{navigationType:"cold",startedAt:0}})(t,r)},o=!0),i.visit)},45712:(e,t,r)=>{"use strict";e.exports=r(19852)},45839:(e,t,r)=>{"use strict";r.d(t,{$1:()=>a,LJ:()=>o,wZ:()=>s});var n=r(14232),i=r(37149),o=(e,t,r)=>{let n=r?.state.error&&"function"==typeof e.throwOnError?(0,i.GU)(e.throwOnError,[r.state.error,r]):e.throwOnError;(e.suspense||e.experimental_prefetchInRender||n)&&!t.isReset()&&(e.retryOnMount=!1)},s=e=>{n.useEffect(()=>{e.clearReset()},[e])},a=({result:e,errorResetBoundary:t,throwOnError:r,query:n,suspense:o})=>e.isError&&!t.isReset()&&!e.isFetching&&n&&(o&&void 0===e.data||(0,i.GU)(r,[e.error,n]))},45941:(e,t,r)=>{var n=r(51141),i=0,o=Math.random(),s=n(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)}},46224:(e,t,r)=>{var n=r(26454),i=r(43396);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.28.0",mode:n?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.28.0/LICENSE",source:"https://github.com/zloirock/core-js"})},46305:(e,t,r)=>{"use strict";r.d(t,{k:()=>s});var n=r(48306),i=r(25028),o=r(37149),s=class{#B;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,o.gn)(this.gcTime)&&(this.#B=n.zs.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(i.H.isServer()?1/0:3e5))}clearGcTimeout(){void 0!==this.#B&&(n.zs.clearTimeout(this.#B),this.#B=void 0)}}},46768:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=/\s/;let i=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},46890:()=>{},46935:(e,t)=>{"use strict";t.mw={prefix:"fas",iconName:"circle-exclamation",icon:[512,512,["exclamation-circle"],"f06a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},t.lE=t.mw},47594:(e,t,r)=>{var n=r(72806),i=r(77475),o=n.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},47643:(e,t,r)=>{"use strict";var n=r(99742);r(72552);var i=r(14232),o=i&&"object"==typeof i&&"default"in i?i:{default:i},s=void 0!==n&&n.env&&!0,a=function(e){return"[object String]"===Object.prototype.toString.call(e)},u=function(){function e(e){var t=void 0===e?{}:e,r=t.name,n=void 0===r?"stylesheet":r,i=t.optimizeForSpeed,o=void 0===i?s:i;l(a(n),"`name` must be a string"),this._name=n,this._deletedRulePlaceholder="#"+n+"-deleted-rule____{}",l("boolean"==typeof o,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=o,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var u=document.querySelector('meta[property="csp-nonce"]');this._nonce=u?u.getAttribute("content"):null}var t,r=e.prototype;return r.setOptimizeForSpeed=function(e){l("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),l(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},r.isOptimizeForSpeed=function(){return this._optimizeForSpeed},r.inject=function(){var e=this;if(l(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(s||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"==typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},r.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},r.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},r.insertRule=function(e,t){if(l(a(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var r=this.getSheet();"number"!=typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(t){return s||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var n=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,n))}return this._rulesCount++},r.replaceRule=function(e,t){if(this._optimizeForSpeed){var r=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(n){s||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var n=this._tags[e];l(n,"old rule at index `"+e+"` not found"),n.textContent=t}return e},r.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];l(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},r.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},r.cssRules=function(){var e=this;return this._tags.reduce(function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},r.makeStyleTag=function(e,t,r){t&&l(a(t),"makeStyleTag accepts only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return r?i.insertBefore(n,r):i.appendChild(n),n},t=[{key:"length",get:function(){return this._rulesCount}}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,t),e}();function l(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var c=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0},d={};function p(e,t){if(!t)return"jsx-"+e;var r=String(t),n=e+r;return d[n]||(d[n]="jsx-"+c(e+"-"+r)),d[n]}function m(e,t){var r=e+t;return d[r]||(d[r]=t.replace(/__jsx-style-dynamic-selector/g,e)),d[r]}var f=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,i=t.optimizeForSpeed,o=void 0!==i&&i;this._sheet=n||new u({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),n&&"boolean"==typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var r=this.getIdAndRules(e),n=r.styleId,i=r.rules;if(n in this._instancesCounts){this._instancesCounts[n]+=1;return}var o=i.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[n]=o,this._instancesCounts[n]=1},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return r[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,r;return t=this.cssRules(),void 0===(r=e)&&(r={}),t.map(function(e){var t=e[0],n=e[1];return o.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:r.nonce?r.nonce:void 0,dangerouslySetInnerHTML:{__html:n}})})},t.getIdAndRules=function(e){var t=e.children,r=e.dynamic,n=e.id;if(r){var i=p(n,r);return{styleId:i,rules:Array.isArray(t)?t.map(function(e){return m(i,e)}):[m(i,t)]}}return{styleId:p(n),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),g=i.createContext(null);g.displayName="StyleSheetContext";var y=o.default.useInsertionEffect||o.default.useLayoutEffect,h=new f;function v(e){var t=h||i.useContext(g);return t&&y(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}v.dynamic=function(e){return e.map(function(e){return p(e[0],e[1])}).join(" ")},t.style=v},47710:(e,t,r)=>{"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{B:()=>d});var i=r(28389),o=r(14232),s=r(28058),a=r(1637);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(t){(0,i.A)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var c=function(e,t){var r=(0,o.useRef)();return(0,o.useEffect)(function(){r.current=t?r.current:e},[e,t]),r.current};function d(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=r.i18n,u=(0,o.useContext)(s.gJ)||{},d=u.i18n,p=u.defaultNS,m=i||d||(0,s.TO)();if(m&&!m.reportNamespaces&&(m.reportNamespaces=new s.hz),!m){(0,a.mc)("You will need to pass in an i18next instance by using initReactI18next");var f=function(e){return Array.isArray(e)?e[e.length-1]:e},g=[f,{},!1];return g.t=f,g.i18n={},g.ready=!1,g}m.options.react&&void 0!==m.options.react.wait&&(0,a.mc)("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var y=l(l(l({},(0,s.rV)()),m.options.react),r),h=y.useSuspense,v=y.keyPrefix,b=e||p||m.options&&m.options.defaultNS;b="string"==typeof b?[b]:b||["translation"],m.reportNamespaces.addUsedNamespaces&&m.reportNamespaces.addUsedNamespaces(b);var S=(m.isInitialized||m.initializedStoreOnce)&&b.every(function(e){return(0,a.NM)(e,m,y)});function w(){return m.getFixedT(null,"fallback"===y.nsMode?b:b[0],v)}var I=function(e){if(Array.isArray(e))return e}(t=(0,o.useState)(w))||function(e){var t=null==e?null:"u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,n,i,o,s=[],a=!0,u=!1;try{i=(t=t.call(e)).next,!1;for(;!(a=(r=i.call(t)).done)&&(s.push(r.value),2!==s.length);a=!0);}catch(e){u=!0,n=e}finally{try{if(!a&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(u)throw n}}return s}}(t)||function(e){if(e){if("string"==typeof e)return n(e,2);var t=({}).toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,2):void 0}}(t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),$=I[0],C=I[1],k=b.join(),A=c(k),q=(0,o.useRef)(!0);(0,o.useEffect)(function(){var e=y.bindI18n,t=y.bindI18nStore;function r(){q.current&&C(w)}return q.current=!0,S||h||(0,a.dM)(m,b,function(){q.current&&C(w)}),S&&A&&A!==k&&q.current&&C(w),e&&m&&m.on(e,r),t&&m&&m.store.on(t,r),function(){q.current=!1,e&&m&&e.split(" ").forEach(function(e){return m.off(e,r)}),t&&m&&t.split(" ").forEach(function(e){return m.store.off(e,r)})}},[m,k]);var O=(0,o.useRef)(!0);(0,o.useEffect)(function(){q.current&&!O.current&&C(w),O.current=!1},[m,v]);var T=[$,m,S];if(T.t=$,T.i18n=m,T.ready=S,S||!S&&!h)return T;throw new Promise(function(e){(0,a.dM)(m,b,function(){e()})})}},47918:(e,t,r)=>{var n=r(15177),i=r(34004),o=r(67468),s=r(321),a=r(86252),u=r(22568),l=r(90304),c=r(30372),d=Object.getOwnPropertyDescriptor;t.f=n?d:function(e,t){if(e=a(e),t=u(t),c)try{return d(e,t)}catch(e){}if(l(e,t))return s(!i(o.f,e,t),e[t])}},48149:(e,t,r)=>{"use strict";r.d(t,{II:()=>d,cc:()=>c,v_:()=>l});var n=r(98275),i=r(18070),o=r(81883),s=r(25028),a=r(37149);function u(e){return Math.min(1e3*2**e,3e4)}function l(e){return(e??"online")!=="online"||i.t.isOnline()}var c=class extends Error{constructor(e){super("CancelledError"),this.revert=e?.revert,this.silent=e?.silent}};function d(e){let t,r=!1,d=0,p=(0,o.T)(),m=()=>n.m.isFocused()&&("always"===e.networkMode||i.t.isOnline())&&e.canRun(),f=()=>l(e.networkMode)&&e.canRun(),g=e=>{"pending"===p.status&&(t?.(),p.resolve(e))},y=e=>{"pending"===p.status&&(t?.(),p.reject(e))},h=()=>new Promise(r=>{t=e=>{("pending"!==p.status||m())&&r(e)},e.onPause?.()}).then(()=>{t=void 0,"pending"===p.status&&e.onContinue?.()}),v=()=>{let t;if("pending"!==p.status)return;let n=0===d?e.initialPromise:void 0;try{t=n??e.fn()}catch(e){t=Promise.reject(e)}Promise.resolve(t).then(g).catch(t=>{if("pending"!==p.status)return;let n=e.retry??3*!s.H.isServer(),i=e.retryDelay??u,o="function"==typeof i?i(d,t):i,l=!0===n||"number"==typeof n&&d<n||"function"==typeof n&&n(d,t);r||!l?y(t):(d++,e.onFail?.(d,t),(0,a.yy)(o).then(()=>m()?void 0:h()).then(()=>{r?y(t):v()}))})};return{promise:p,status:()=>p.status,cancel:t=>{if("pending"===p.status){let r=new c(t);y(r),e.onCancel?.(r)}},continue:()=>(t?.(),p),cancelRetry:()=>{r=!0},continueRetry:()=>{r=!1},canStart:f,start:()=>(f()?v():h().then(v),p)}}},48306:(e,t,r)=>{"use strict";r.d(t,{Zq:()=>o,zs:()=>i});var n={setTimeout:(e,t)=>setTimeout(e,t),clearTimeout:e=>clearTimeout(e),setInterval:(e,t)=>setInterval(e,t),clearInterval:e=>clearInterval(e)},i=new class{#G=n;#z=!1;setTimeoutProvider(e){this.#G=e}setTimeout(e,t){return this.#G.setTimeout(e,t)}clearTimeout(e){this.#G.clearTimeout(e)}setInterval(e,t){return this.#G.setInterval(e,t)}clearInterval(e){this.#G.clearInterval(e)}};function o(e){setTimeout(e,0)}},48710:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=0x1fffffffffffff}},49077:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={ReadonlyURLSearchParams:function(){return a.ReadonlyURLSearchParams},RedirectType:function(){return d.RedirectType},ServerInsertedHTMLContext:function(){return l.ServerInsertedHTMLContext},forbidden:function(){return d.forbidden},notFound:function(){return d.notFound},permanentRedirect:function(){return d.permanentRedirect},redirect:function(){return d.redirect},unauthorized:function(){return d.unauthorized},unstable_isUnrecognizedActionError:function(){return c.unstable_isUnrecognizedActionError},unstable_rethrow:function(){return d.unstable_rethrow},useParams:function(){return S},usePathname:function(){return v},useRouter:function(){return b},useSearchParams:function(){return h},useSelectedLayoutSegment:function(){return I},useSelectedLayoutSegments:function(){return w},useServerInsertedHTML:function(){return l.useServerInsertedHTML}};for(var i in n)Object.defineProperty(t,i,{enumerable:!0,get:n[i]});let o=r(88365)._(r(14232)),s=r(21965),a=r(40760),u=r(79853),l=r(40302),c=r(53966),d=r(83044),p,m,{instrumentParamsForClientValidation:f,instrumentSearchParamsForClientValidation:g,expectCompleteParamsInClientValidation:y}={};function h(){null==m||m("useSearchParams()");let e=(0,o.useContext)(a.SearchParamsContext);return(0,o.useMemo)(()=>e?new a.ReadonlyURLSearchParams(e):null,[e])}function v(){return null==p||p("usePathname()"),(0,o.useContext)(a.PathnameContext)}function b(){let e=(0,o.useContext)(s.AppRouterContext);if(null===e)throw Object.defineProperty(Error("invariant expected app router to be mounted"),"__NEXT_ERROR_CODE",{value:"E238",enumerable:!1,configurable:!0});return e}function S(){return null==p||p("useParams()"),(0,o.useContext)(a.PathParamsContext)}function w(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"children";null==p||p("useSelectedLayoutSegments()");let t=(0,o.useContext)(s.LayoutRouterContext);return t?(0,u.getSelectedLayoutSegmentPath)(t.parentTree,e):null}function I(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"children";null==p||p("useSelectedLayoutSegment()"),(0,o.useContext)(a.NavigationPromisesContext);let t=w(e);return(0,u.computeSelectedLayoutSegment)(t,e)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},49201:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=function(){return!1}},49749:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(58714),i=r(54743);let o=(0,n.A)(i.A,"Set")},50076:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var n=r(21710),i=r(75438);let o=function(e){return(0,i.A)(e)&&"[object Arguments]"==(0,n.A)(e)};var s=Object.prototype,a=s.hasOwnProperty,u=s.propertyIsEnumerable;let l=o(function(){return arguments}())?o:function(e){return(0,i.A)(e)&&a.call(e,"callee")&&!u.call(e,"callee")}},50143:(e,t,r)=>{"use strict";r.d(t,{$:()=>l,r:()=>u});var n=r(37876);r(14232);var i=r(82987),o=r(94650),s=r(22257);let a=()=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"currentColor",className:"animate-spin",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10a1 1 0 100-2 8 8 0 118-8 1 1 0 102 0z",clipRule:"evenodd"})}),u=(0,o.F)("relative inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sd-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-sd-primary text-sd-primary-foreground hover:bg-sd-primary/90",outline:"border border-sd-input bg-transparent hover:bg-sd-accent text-sd-foreground hover:text-sd-accent-foreground",secondary:"bg-sd-secondary text-sd-secondary-foreground hover:bg-sd-secondary/80",ghost:"text-sd-foreground hover:bg-sd-accent hover:text-sd-accent-foreground",link:"text-sd-primary underline-offset-4 hover:underline",danger:"bg-sd-danger text-sd-fixed-white hover:bg-sd-danger/80",warning:"bg-sd-warning text-sd-fixed-white hover:bg-sd-warning/80",info:"bg-sd-info text-sd-fixed-white hover:bg-sd-info/80",success:"bg-sd-success text-sd-fixed-white hover:bg-sd-success/80"},size:{default:"h-9 px-4 py-2",xs:"h-7 rounded-sd-md px-2 text-xs",sm:"h-8 rounded-sd-md px-3 text-sm",lg:"h-10 rounded-sd-md px-8"},onlyIcon:{true:"p-0",false:""},shape:{square:"rounded-sd-md",rounded:"rounded-full"}},compoundVariants:[{size:"xs",onlyIcon:!0,class:"h-7 w-7"},{size:"sm",onlyIcon:!0,class:"h-8 w-8"},{size:"default",onlyIcon:!0,class:"h-9 w-9"},{size:"lg",onlyIcon:!0,class:"h-10 w-10"}],defaultVariants:{variant:"default",size:"default",onlyIcon:!1,shape:"square"}}),l=e=>{let{ref:t,className:r,variant:o,size:l,onlyIcon:c,shape:d,asChild:p=!1,isLoading:m,children:f,...g}=e,y=p?i.DX:"button";return(0,n.jsx)(y,{className:(0,s.x)(u({variant:o,size:l,onlyIcon:c,shape:d,className:r})),ref:t,...g,disabled:m||g.disabled,children:m?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"opacity-0",children:f}),(0,n.jsx)("div",{className:"absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2",children:(0,n.jsx)(a,{})})]}):f})};l.displayName="Button"},50366:(e,t,r)=>{"use strict";r.d(t,{lw:()=>V,K3:()=>U,BI:()=>E,js:()=>O,Qm:()=>q,ti:()=>x,qL:()=>_,VI:()=>M,vA:()=>K,sJ:()=>F,Kx:()=>D,Bd:()=>k,xT:()=>N,oL:()=>R,CN:()=>A,vd:()=>L,UP:()=>P,tW:()=>T,yy:()=>j});var n=r(29454);function i(e,t,r){return(t=a(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o,s,a=[],u=!0,l=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=o.call(r)).done)&&(a.push(n.value),a.length!==t);u=!0);}catch(e){l=!0,i=e}finally{try{if(!u&&null!=r.return&&(s=r.return(),Object(s)!==s))return}finally{if(l)throw i}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function a(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function u(e,t){var r,n,i=c(e,t,"get");return r=e,(n=i).get?n.get.call(r):n.value}function l(e,t,r){var n=c(e,t,"set");return function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw TypeError("attempted to set read only private field");t.value=r}}(e,n,r),r}function c(e,t,r){if(!t.has(e))throw TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}function d(e,t,r){if(!t.has(e))throw TypeError("attempted to get private field on non-instance");return r}function p(e,t){if(t.has(e))throw TypeError("Cannot initialize the same private elements twice on an object")}function m(e,t,r){p(e,t),t.set(e,r)}function f(e,t){p(e,t),t.add(e)}var g=[" daum[ /]"," deusu/","(?:^| )site","@[a-z]","\\(at\\)[a-z]","\\(github\\.com/","\\[at\\][a-z]","^12345","^<","^[\\w \\.\\-\\(\\)]+(/v?\\d+(\\.\\d+)?(\\.\\d{1,10})?)?$","^[^ ]{50,}$","^active","^ad muncher","^anglesharp/","^anonymous","^avsdevicesdk/","^axios/","^bidtellect/","^biglotron","^castro","^clamav[ /]","^cobweb/","^coccoc","^custom","^ddg[_-]android","^discourse","^dispatch/\\d","^downcast/","^duckduckgo","^facebook","^fdm[ /]\\d","^getright/","^gozilla/","^hatena","^hobbit","^hotzonu","^hwcdn/","^jeode/","^jetty/","^jigsaw","^linkdex","^lwp[-: ]","^metauri","^microsoft bits","^movabletype","^mozilla/\\d\\.\\d \\(compatible;?\\)$","^mozilla/\\d\\.\\d \\w*$","^navermailapp","^netsurf","^offline explorer","^phantom","^php","^postman","^postrank","^python","^read","^reed","^restsharp/","^snapchat","^space bison","^svn","^swcd ","^taringa","^test certificate info","^thumbor/","^tumblr/","^user-agent:mozilla","^valid","^venus/fedoraplanet","^w3c","^webbandit/","^webcopier","^wget","^whatsapp","^xenu link sleuth","^yahoo","^yandex","^zdm/\\d","^zoom marketplace/","^{{.*}}$","adbeat\\.com","appinsights","archive","ask jeeves/teoma","bit\\.ly/","bluecoat drtr","bot","browsex","burpcollaborator","capture","catch","check","chrome-lighthouse","chromeframe","client","cloud","crawl","cryptoapi","dareboost","datanyze","dataprovider","dejaclick","dmbrowser","download","evc-batch/","feed","firephp","freesafeip","ghost","gomezagent","google","headlesschrome/","http","httrack","hubspot marketing grader","hydra","ibisbrowser","images","iplabel","ips-agent","java","library","mail\\.ru/","manager","monitor","morningscore/","neustar wpm","news","nutch","offbyone","optimize","pageburst","pagespeed","perl","pingdom","powermarks","preview","proxy","ptst[ /]\\d","reader","rexx;","rigor","rss","scan","scrape","search","serp ?reputation ?management","server","sogou","sparkler/","spider","statuscake","stumbleupon\\.com","supercleaner","synapse","synthetic","taginspector/","torrent","tracemyfile","transcoder","trendsmapresolver","twingly recon","url","virtuoso","wappalyzer","webglance","webkit2png","websitemetadataretriever","whatcms/","wordpress","zgrab"];!function(e){try{RegExp("(?<! cu)bot").test("dangerbot")}catch(t){return e}[["bot","(?<! cu)bot"],["google","(?<! (?:channel/|google/))google(?!(app|/google| pixel))"],["http","(?<!(?:lib))http"],["java","java(?!;)"],["search","(?<! ya(?:yandex)?)search"]].forEach(function(t){var r=o(t,2),n=r[0],i=r[1],s=e.lastIndexOf(n);~s&&e.splice(s,1,i)})}(g);var y=new WeakMap,h=new WeakMap,v=new WeakSet,b=new WeakSet;function S(){l(this,h,RegExp(u(this,y).join("|"),"i"))}function w(e){return u(this,y).indexOf(e.toLowerCase())}new(function(){var e;function t(e){var r=this;if(!(this instanceof t))throw TypeError("Cannot call a class as a function");return f(this,b),f(this,v),m(this,y,{writable:!0,value:void 0}),m(this,h,{writable:!0,value:void 0}),l(this,y,e||g.slice()),d(this,v,S).call(this),Object.defineProperties(function(e){return r.test(e)},Object.entries(Object.getOwnPropertyDescriptors(t.prototype)).reduce(function(e,t){var n=o(t,2),s=n[0],a=n[1];return"function"==typeof a.value&&Object.assign(e,i({},s,{value:r[s].bind(r)})),"function"==typeof a.get&&Object.assign(e,i({},s,{get:function(){return r[s]}})),e},{}))}return e=[{key:"pattern",get:function(){return new RegExp(u(this,h))}},{key:"test",value:function(e){return!!e&&u(this,h).test(e)}},{key:"find",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.match(u(this,h));return t&&t[0]}},{key:"matches",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return u(this,y).filter(function(t){return RegExp(t,"i").test(e)})}},{key:"clear",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.exclude(this.matches(e))}},{key:"extend",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];[].push.apply(u(this,y),t.filter(function(t){return -1===d(e,b,w).call(e,t)}).map(function(e){return e.toLowerCase()})),d(this,v,S).call(this)}},{key:"exclude",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.length;t--;){var r=d(this,b,w).call(this,e[t]);r>-1&&u(this,y).splice(r,1)}d(this,v,S).call(this)}},{key:"spawn",value:function(e){return new t(e||u(this,y))}}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,a(n.key),n)}}(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}());var I=r(92797),$=r(18334),C=r(71457);let k=()=>!0,A=()=>!!k()&&("ontouchstart"in window||navigator.maxTouchPoints>0),q=()=>n.A.get("csrftoken")||"",O=()=>n.A.get("__appToken__")||"",T=()=>{n.A.remove("__appToken__")},P=e=>{var t,r,n,i;let o=null!=(t=null==e||null==(r=e.userStatus)?void 0:r.username)?t:void 0;I.o5().setUser({username:o}),$.NA("isSignedIn",(null==e||null==(n=e.userStatus)?void 0:n.isSignedIn)||!1),$.NA("isPremium",(null==e||null==(i=e.userStatus)?void 0:i.isPremium)||!1)},x=e=>{let t=e.split(".");return t.length>1?t[t.length-1]:""},E=()=>{function e(){return((1+Math.random())*65536|0).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},F=()=>{let e=E();if(!k())return e;let t=localStorage.getItem("random-uuid");return t||localStorage.setItem("random-uuid",e),t||e},R=e=>"string"==typeof e&&["light","dark","system"].includes(e),L=e=>e instanceof Date&&!isNaN(e.getTime()),N=C.oc&&(location.host.endsWith("leetcode.cn")||location.host.endsWith("canary.leetcode.cn")||location.host.endsWith("leetcode.com")),_=()=>{if(!k())return"";let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`},D=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"source";return null!=(e=new URLSearchParams(window.location.search).get(t))?e:""},j=e=>new Promise(t=>setTimeout(t,e)),K=(e,t)=>{var r;return null==(r=e.match(RegExp(`[&?]${t}=(.*?)(&|$)`)))?void 0:r[1]},M=e=>{var t;return(null==(t=e.split("#")[1])?void 0:t.split("?")[0])||""};function U(e,t){try{return e.findLastIndex(t)}catch(r){for(let r=e.length-1;r>=0;r--)if(t(e[r]))return r;return -1}}function V(){try{if(!k())return!1;document.cookie="cookietest=1";let e=-1!==document.cookie.indexOf("cookietest=");return document.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(e){return!1}}},50839:(e,t,r)=>{var n=r(51141),i=r(83628),o=Math.floor,s=n("".charAt),a=n("".replace),u=n("".slice),l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,n,d,p){var m=r+e.length,f=n.length,g=c;return void 0!==d&&(d=i(d),g=l),a(p,g,function(i,a){var l;switch(s(a,0)){case"$":return"$";case"&":return e;case"`":return u(t,0,r);case"'":return u(t,m);case"<":l=d[u(a,1,-1)];break;default:var c=+a;if(0===c)return i;if(c>f){var p=o(c/10);if(0===p)return i;if(p<=f)return void 0===n[p-1]?s(a,1):n[p-1]+s(a,1);return i}l=n[c-1]}return void 0===l?"":l})}},51141:(e,t,r)=>{var n=r(52605),i=Function.prototype,o=i.call,s=n&&i.bind.bind(o,o);e.exports=n?s:function(e){return function(){return o.apply(e,arguments)}}},51436:(e,t,r)=>{"use strict";r.d(t,{A:()=>p});var n=r(56634),i=r(68303),o=r(75587),s=r(4335),a=r(44013),u=r(25741);let l=function(e){return(0,u.A)(e)?void 0:e};var c=r(18018),d=r(99971);let p=(0,c.A)(function(e,t){var r={};if(null==e)return r;var u=!1;t=(0,n.A)(t,function(t){return t=(0,s.A)(t,e),u||(u=t.length>1),t}),(0,a.A)(e,(0,d.A)(e),r),u&&(r=(0,i.A)(r,7,l));for(var c=t.length;c--;)(0,o.A)(r,t[c]);return r})},51444:(e,t,r)=>{var n,i,o,s=r(41767),a=r(72806),u=r(77475),l=r(62134),c=r(90304),d=r(43396),p=r(88202),m=r(12524),f="Object already initialized",g=a.TypeError,y=a.WeakMap;if(s||d.state){var h=d.state||(d.state=new y);h.get=h.get,h.has=h.has,h.set=h.set,n=function(e,t){if(h.has(e))throw g(f);return t.facade=e,h.set(e,t),t},i=function(e){return h.get(e)||{}},o=function(e){return h.has(e)}}else{var v=p("state");m[v]=!0,n=function(e,t){if(c(e,v))throw g(f);return t.facade=e,l(e,v,t),t},i=function(e){return c(e,v)?e[v]:{}},o=function(e){return c(e,v)}}e.exports={set:n,get:i,has:o,enforce:function(e){return o(e)?i(e):n(e,{})},getterFor:function(e){return function(t){var r;if(!u(t)||(r=i(t)).type!==e)throw g("Incompatible receiver, "+e+" required");return r}}}},51958:(e,t)=>{"use strict";t.mw={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},t.QR=t.mw},52035:(e,t,r)=>{e.exports=r(4101)},52605:(e,t,r)=>{e.exports=!r(56354)(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")})},53966:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={UnrecognizedActionError:function(){return i},unstable_isUnrecognizedActionError:function(){return o}};for(var n in r)Object.defineProperty(t,n,{enumerable:!0,get:r[n]});class i extends Error{constructor(...e){super(...e),this.name="UnrecognizedActionError"}}function o(e){return!!(e&&"object"==typeof e&&e instanceof i)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},54202:(e,t,r)=>{var n=r(72806),i=r(58524);e.exports=function(e,t){var r;return arguments.length<2?i(r=n[e])?r:void 0:n[e]&&n[e][t]}},54539:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(44013),i=r(69014);let o=function(e,t){return e&&(0,n.A)(t,(0,i.A)(t),e)}},54743:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(64682),i="object"==typeof self&&self&&self.Object===Object&&self;let o=n.A||i||Function("return this")()},54989:(e,t,r)=>{"use strict";function n(){throw Object.defineProperty(Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."),"__NEXT_ERROR_CODE",{value:"E411",enumerable:!1,configurable:!0})}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"unauthorized",{enumerable:!0,get:function(){return n}}),r(46780).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},55125:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}},55691:(e,t,r)=>{"use strict";r.d(t,{vt:()=>a});var n=r(94390),i=r(14232);let{useSyncExternalStoreWithSelector:o}=r(45712),s=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?(0,n.y)(e):e,r=(e,r)=>(function(e,t=e.getState,r){let n=o(e.subscribe,e.getState,e.getServerState||e.getState,t,r);return(0,i.useDebugValue)(n),n})(t,e,r);return Object.assign(r,t),r},a=e=>e?s(e):s},56354:e=>{e.exports=function(e){try{return!!e()}catch(e){return!0}}},56514:(e,t,r)=>{var n=r(37785),i=r(56354);e.exports=!!Object.getOwnPropertySymbols&&!i(function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&n&&n<41})},56557:function(e){e.exports=function(){"use strict";var e="millisecond",t="second",r="minute",n="hour",i="week",o="month",s="quarter",a="year",u="date",l="Invalid Date",c=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},m="en",f={};f[m]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}};var g="$isDayjsObject",y=function(e){return e instanceof S||!(!e||!e[g])},h=function e(t,r,n){var i;if(!t)return m;if("string"==typeof t){var o=t.toLowerCase();f[o]&&(i=o),r&&(f[o]=r,i=o);var s=t.split("-");if(!i&&s.length>1)return e(s[0])}else{var a=t.name;f[a]=t,i=a}return!n&&i&&(m=i),i||!n&&m},v=function(e,t){if(y(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new S(r)},b={s:p,z:function(e){var t=-e.utcOffset(),r=Math.abs(t);return(t<=0?"+":"-")+p(Math.floor(r/60),2,"0")+":"+p(r%60,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,o),s=r-i<0,a=t.clone().add(n+(s?-1:1),o);return+(-(n+(r-i)/(s?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(l){return({M:o,y:a,w:i,d:"day",D:u,h:n,m:r,s:t,ms:e,Q:s})[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};b.l=h,b.i=y,b.w=function(e,t){return v(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var S=function(){function p(e){this.$L=h(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[g]=!0}var m=p.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(b.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(c);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return b},m.isValid=function(){return this.$d.toString()!==l},m.isSame=function(e,t){var r=v(e);return this.startOf(t)<=r&&r<=this.endOf(t)},m.isAfter=function(e,t){return v(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<v(e)},m.$g=function(e,t,r){return b.u(e)?this[t]:this.set(r,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,s){var l=this,c=!!b.u(s)||s,d=b.p(e),p=function(e,t){var r=b.w(l.$u?Date.UTC(l.$y,t,e):new Date(l.$y,t,e),l);return c?r:r.endOf("day")},m=function(e,t){return b.w(l.toDate()[e].apply(l.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),l)},f=this.$W,g=this.$M,y=this.$D,h="set"+(this.$u?"UTC":"");switch(d){case a:return c?p(1,0):p(31,11);case o:return c?p(1,g):p(0,g+1);case i:var v=this.$locale().weekStart||0,S=(f<v?f+7:f)-v;return p(c?y-S:y+(6-S),g);case"day":case u:return m(h+"Hours",0);case n:return m(h+"Minutes",1);case r:return m(h+"Seconds",2);case t:return m(h+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(i,s){var l,c=b.p(i),d="set"+(this.$u?"UTC":""),p=((l={}).day=d+"Date",l[u]=d+"Date",l[o]=d+"Month",l[a]=d+"FullYear",l[n]=d+"Hours",l[r]=d+"Minutes",l[t]=d+"Seconds",l[e]=d+"Milliseconds",l)[c],m="day"===c?this.$D+(s-this.$W):s;if(c===o||c===a){var f=this.clone().set(u,1);f.$d[p](m),f.init(),this.$d=f.set(u,Math.min(this.$D,f.daysInMonth())).$d}else p&&this.$d[p](m);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[b.p(e)]()},m.add=function(e,s){var u,l=this;e=Number(e);var c=b.p(s),d=function(t){var r=v(l);return b.w(r.date(r.date()+Math.round(t*e)),l)};if(c===o)return this.set(o,this.$M+e);if(c===a)return this.set(a,this.$y+e);if("day"===c)return d(1);if(c===i)return d(7);var p=((u={})[r]=6e4,u[n]=36e5,u[t]=1e3,u)[c]||1,m=this.$d.getTime()+e*p;return b.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||l;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),o=this.$H,s=this.$m,a=this.$M,u=r.weekdays,c=r.months,p=r.meridiem,m=function(e,r,i,o){return e&&(e[r]||e(t,n))||i[r].slice(0,o)},f=function(e){return b.s(o%12||12,e,"0")},g=p||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(d,function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return b.s(t.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return m(r.monthsShort,a,c,3);case"MMMM":return m(c,a);case"D":return t.$D;case"DD":return b.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return m(r.weekdaysMin,t.$W,u,2);case"ddd":return m(r.weekdaysShort,t.$W,u,3);case"dddd":return u[t.$W];case"H":return String(o);case"HH":return b.s(o,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return g(o,s,!0);case"A":return g(o,s,!1);case"m":return String(s);case"mm":return b.s(s,2,"0");case"s":return String(t.$s);case"ss":return b.s(t.$s,2,"0");case"SSS":return b.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")})},m.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},m.diff=function(e,u,l){var c,d=this,p=b.p(u),m=v(e),f=(m.utcOffset()-this.utcOffset())*6e4,g=this-m,y=function(){return b.m(d,m)};switch(p){case a:c=y()/12;break;case o:c=y();break;case s:c=y()/3;break;case i:c=(g-f)/6048e5;break;case"day":c=(g-f)/864e5;break;case n:c=g/36e5;break;case r:c=g/6e4;break;case t:c=g/1e3;break;default:c=g}return l?c:b.a(c)},m.daysInMonth=function(){return this.endOf(o).$D},m.$locale=function(){return f[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=h(e,t,!0);return n&&(r.$L=n),r},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},p}(),w=S.prototype;return v.prototype=w,[["$ms",e],["$s",t],["$m",r],["$H",n],["$W","day"],["$M",o],["$y",a],["$D",u]].forEach(function(e){w[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),v.extend=function(e,t){return e.$i||(e(t,S,v),e.$i=!0),v},v.locale=h,v.isDayjs=y,v.unix=function(e){return v(1e3*e)},v.en=f[m],v.Ls=f,v.p={},v}()},56610:(e,t,r)=>{"use strict";r.d(t,{_h:()=>g,nG:()=>m,nS:()=>f});var n=r(29454),i=r(14232),o=r(26225),s=r(50366),a=r(4080),u=r(27195);let l="/graphql/",c="/graphql/noj-go/",d=(0,s.js)(),p="",m=async e=>{!p&&(p=await (0,o.T2)())&&n.A.set("uuuserid",p,{expires:365}),e.setHeader("uuuserid",p)},f=new u.b(l,{credentials:"same-origin",headers:{"X-CSRFToken":(0,s.Qm)(),Authorization:d?`Bearer ${d}`:"","random-uuid":(0,s.sJ)()}});function g(){let[e,t]=(0,i.useState)(null);return(0,i.useEffect)(()=>{(async()=>{await m(f),t(f)})()},[]),e}let y=new u.b(`${a.uJ}${l}`,{credentials:"omit",headers:{"x-operation-name":"SSGPrefetch",cookie:"LC_DISABLE_CSRF=true;"}});new u.b(`${a.uJ}${l}`,{credentials:"same-origin"});let h=new u.b(`${a.uJ}${c}`,{credentials:"omit",headers:{"x-operation-name":"SSGPrefetch",cookie:"LC_DISABLE_CSRF=true;"}});new u.b(`${a.uJ}${c}`,{credentials:"same-origin"}),m(f),m(y),m(h)},56634:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}},56702:(e,t,r)=>{"use strict";r.d(t,{bf:()=>T,nh:()=>O,n6:()=>x});let n="0.55.8",i=["monaco-bf9f106b3478e8a07b17_0.55.8.js","monaco-with-langs-dc52ad0898b8efc211c8_0.55.8.js","editor.worker-9e9d416908dc1a1a9c76_0.55.8.js","ts.worker-ea7e9284f860cd28a053_0.55.8.js"],o=[],s=(e,t)=>{if(!e)throw Error(`@leetcode/monaco-loader manifest (${n}) is missing its ${t} asset`);return e};function a(e,t={}){let r=((e,t=!1)=>t?"/lc-monaco":e?"https://assets.leetcode.com/lc-monaco":"https://static.leetcode.cn/lc-monaco")(e,t.isLocalhost),u=e=>`${r}/${e}`,l=s(i.find(e=>!/\.worker/.test(e)&&/^monaco-/.test(e)&&!/langs/.test(e)),"main"),c=s(i.find(e=>!/\.worker/.test(e)&&/langs/.test(e)),"mainWithLangs"),d=s(i.find(e=>e.includes("editor.worker")),"editor.worker"),p=s(i.find(e=>e.includes("ts.worker")),"ts.worker");return{version:n,js:i.map(u),css:o.map(u),main:u(l),mainWithLangs:u(c),workers:{editor:u(d),ts:u(p)}}}r(14232);let u=(()=>{try{if("object"==typeof WebAssembly&&"function"==typeof WebAssembly.instantiate){let e=new WebAssembly.Module(Uint8Array.of(0,97,115,109,1,0,0,0));if(e instanceof WebAssembly.Module)return new WebAssembly.Instance(e)instanceof WebAssembly.Instance}}catch(e){}return!1})(),l=[null,null];var c=r(4080),d=r(50366);let p={"vs-dark":{base:"vs-dark",background:"#282828",foreground:"#D4D4D4"},vs:{base:"vs",background:"#FFFFFF",foreground:"#000000"}};var m=r(65411),f=r(18334);let g=[1e3,4e3],y=g.length+1,h=e=>Math.round(g[e]*(1+.5*Math.random())),v=e=>new Promise(t=>setTimeout(t,e)),b=()=>{var e;let{connection:t}=navigator;return null!=(e=null==t?void 0:t.effectiveType)?e:"unknown"},S=a.bind(null,c.L4),w=()=>window.monaco?Promise.resolve(window.monaco):new Promise((e,t)=>{let r,n=document.createElement("script");r=S({isLocalhost:"localhost"===window.location.hostname}),n.src=u?r.main:r.mainWithLangs,n.crossOrigin="anonymous",n.addEventListener("load",()=>{window.monaco?e(window.monaco):t(Error("Monaco failed to load"))}),n.addEventListener("error",e=>{n.remove(),t(e)}),document.body.appendChild(n)}),I=e=>{m.Z({category:"monaco.load",level:"warning",message:`Monaco bundle attempt ${e} of ${y} failed`,data:{attempt:e,effectiveType:b()}})},$=(e,t)=>{f.NA("monacoLoadOutcome",e),f.NA("monacoLoadAttempts",t),f.o("monacoLoad",{attempts:t,effectiveType:b()})},C=async e=>{let t=Error("Monaco failed to load");for(let r=1;r<=y;r+=1){r>1&&await v(h(r-2));try{let t=1===r?await e():await w();return r>1&&($("recovered",r),f.wd("Monaco bundle loaded after retry",{level:"info"})),t}catch(e){t=e,I(r)}}throw $("failed",y),t},k=(async e=>{if(!(0,d.Bd)())throw Error("Not in browser");if(!window.loadTM)throw Error("window.loadTM is not defined");return[await window.loadTM(e),e]}).bind(null,c.L4),A=(function(e){let t=l[+!e];if(!t){var r;let n,i,o=(n=a(e,{isLocalhost:"localhost"===window.location.hostname}),window.MonacoEnvironment={globalAPI:!0,getWorker:(e,t)=>{let r="javascript"===t||"typescript"===t?n.workers.ts:n.workers.editor,i=r.startsWith("http")?r:`${window.location.origin}${r}`;if(r.startsWith("http")&&!r.startsWith(window.location.origin)){let e=new Blob([`self.importScripts("${i}")`],{type:"application/javascript"});return new Worker(URL.createObjectURL(e))}return new Worker(i)}},n),s=[u?o.main:o.mainWithLangs];r=s[0],(i=document.createElement("link")).rel="preload",i.as="script",i.setAttribute("crossorigin","anonymous"),i.href=r,document.head.appendChild(i),t=Promise.all([...s.map(e=>new Promise((t,r)=>{let n=document.createElement("script");n.setAttribute("src",e),n.setAttribute("crossorigin","anonymous"),n.addEventListener("load",t),n.addEventListener("error",e=>{n.remove(),r(e)}),document.body.appendChild(n)})),...o.css.map(e=>new Promise((t,r)=>{let n=document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href",e),n.addEventListener("load",t),n.addEventListener("error",e=>{n.remove(),r(e)}),document.head.appendChild(n)}))]).then(()=>monaco),l[+!e]=t}return t}).bind(null,c.L4);class q{loadMonacoBundle(){return window.lcMonaco?Promise.resolve(window.lcMonaco):(this.monacoBundlePromise||(this.monacoBundlePromise=C(A).then(e=>{if(!e)throw Error("Monaco could not be loaded");return window.lcMonaco=e,e}).catch(e=>{throw this.monacoBundlePromise=null,e})),this.monacoBundlePromise)}async applyFullMonacoTheme(e){let t=++this.fullThemeRequestVersion,[r,n]=await k(),i=await this.loadMonaco();r&&(await r.defineTheme(i,e,n),r.injectCSS()),t===this.fullThemeRequestVersion&&i.editor.setTheme(e)}async loadMonaco(e){if(!(0,d.Bd)())throw Error("Not in browser");let t=await this.loadMonacoBundle();return e&&((e,t)=>{let r=p[t];if(!r)return e.editor.setTheme(t.includes("dark")?"vs-dark":"vs");let n={"editor.background":r.background};r.foreground&&(n["editor.foreground"]=r.foreground);let i=`${t}-inline`;e.editor.defineTheme(i,{base:r.base,inherit:!0,rules:[],colors:n}),e.editor.setTheme(i)})(t,e),t}constructor(){this.monacoBundlePromise=null,this.fullThemeRequestVersion=0}}let O=new q,T={contextmenu:!1,stickyScroll:{enabled:!1},inlineSuggest:{enabled:!1},editContext:!1,colorDecorators:!1,unicodeHighlight:{nonBasicASCII:!1,invisibleCharacters:!1,ambiguousCharacters:!1}},P=["tabSize","indentSize","insertSpaces","trimAutoWhitespace","bracketColorizationOptions"],x=(e,t)=>{if(!e||!t)return;let r={},n={};for(let e in t){let i=t[e];P.includes(e)?r[e]=i:n[e]=i}let i=()=>{let t=e.getModel();t&&!t.isDisposed()&&t.updateOptions(r),e.updateOptions(n)},o=(0,d.Bd)()?window.runWithMonacoUnexpectedErrorGuard:void 0;"function"==typeof o?o(i):i()}},57244:function(e){e.exports=function(e,t,r){var n=function(e,t){if(!t||!t.length||1===t.length&&!t[0]||1===t.length&&Array.isArray(t[0])&&!t[0].length)return null;1===t.length&&t[0].length>0&&(t=t[0]),r=(t=t.filter(function(e){return e}))[0];for(var r,n=1;n<t.length;n+=1)t[n].isValid()&&!t[n][e](r)||(r=t[n]);return r};r.max=function(){var e=[].slice.call(arguments,0);return n("isAfter",e)},r.min=function(){var e=[].slice.call(arguments,0);return n("isBefore",e)}}},57601:(e,t,r)=>{"use strict";r.d(t,{C5:()=>k,LW:()=>_,Ne:()=>S,PE:()=>I,Th:()=>F,XB:()=>x,dB:()=>q,ei:()=>N,fB:()=>T,ij:()=>E,mA:()=>O,oQ:()=>P,p0:()=>R,vz:()=>A,xj:()=>$,yV:()=>w,z1:()=>C,z7:()=>L});var n,i,o,s,a=r(18402),u=r(96399),l=r(70089),c=r(4230),d=r(43156),p=r(40492),m=r(83522),f=r(23077),g=r(21340),y=r(37384),h=r(7152),v=r(5579),b=r(39995);let S=36,w=36,I=8,$=400,C="QD_LAYOUT_REALTIME_RESIZING",k="QD_NEW_TAB_OPEN_OPTION";var A=((n={}).AfterActiveTab="afterActiveTab",n.AfterSimilarTab="afterSimilarTab",n),q=((i={}).Default="default",i.Frontend="frontend",i.ContestDefault="contestDefault",i),O=((o={}).Description="description",o.Editorial="editorial",o.Solutions="solutions",o.SolutionPost="solution-post",o.Submissions="submissions",o.SubmissionDetail="submission-detail",o.Code="code",o.Testcase="testcase",o.Result="result",o.Debugger="debugger",o.Note="note",o.Preview="preview",o.PreviewConsole="preview-console",o.RawText="raw-text",o.PreviewCode="preview-code",o.SubmissionPreview="submission-preview",o.CodeSample="code-sample",o.AiAgent="ai-agent",o.Mermaid="mermaid",o.SummarySolutionList="summary-solution-list",o);let T={description:{icon:f.el,className:"text-sd-blue-500"},editorial:{icon:a.Re,className:"text-sd-yellow-500"},solutions:{icon:m.rI,className:"text-sd-blue-500"},"solution-post":{icon:m.rI,className:"text-sd-blue-500"},submissions:{icon:l.faClockRotateLeft,className:"text-sd-blue-500"},"submission-detail":{icon:l.faClockRotateLeft,className:"text-sd-blue-500"},code:{icon:c.jT,className:"text-sd-green-500"},testcase:{icon:y.faSquareCheck,className:"text-sd-green-500"},result:{icon:v.MN,className:"text-sd-green-500"},debugger:{icon:u.wG,className:"text-sd-brand-lc-orange"},note:{icon:g.n0,className:"text-sd-yellow-500"},preview:{icon:d.pS,className:"text-sd-green-500"},"preview-console":{icon:h.r,className:"text-sd-green-500"},"raw-text":{icon:p.ru,className:"text-sd-blue-500"},"preview-code":{icon:p.ru,className:"text-sd-blue-500"},"submission-preview":{icon:l.faClockRotateLeft,className:"text-sd-blue-500"},"code-sample":{icon:p.ru,className:"text-sd-blue-500"},"ai-agent":{icon:b.L,className:"text-sd-blue-500 w-3.5 h-3.5"},mermaid:{icon:p.ru,className:"text-sd-blue-500"},"summary-solution-list":{icon:b.L,className:"text-sd-blue-500"}},P=["description","editorial","solutions","submissions","testcase","code","debugger","result","note","ai-agent"],x=["description","editorial","solutions","submissions","testcase","code","debugger","result","note","ai-agent","preview","preview-console"],E={description:{},editorial:{},solutions:{},"solution-post":{enableClose:!0},submissions:{},"submission-detail":{enableClose:!0},code:{enableRenderOnDemand:!1},testcase:{},result:{},debugger:{enableClose:!0},note:{enableClose:!0},preview:{enableClose:!1},"preview-console":{enableClose:!1},"preview-code":{enableClose:!1},"raw-text":{enableClose:!0},"submission-preview":{enableClose:!0},"code-sample":{enableClose:!0},"ai-agent":{enableClose:!0,className:"min-w-auto"},mermaid:{enableClose:!0},"summary-solution-list":{enableClose:!0}},F="QD_LAYOUT_RUN_SUBMIT_POSITION";var R=((s={}).ToolBar="toolBar",s.CodeEditor="codeEditor",s);let L="QD_MULTIPLE_TAB_MODE",N="QD_SOLUTION_SIDE_BY_SIDE_MODE",_={default:"QD_LAYOUT_JSON",frontend:"QD_FE_LAYOUT_JSON",contestDefault:"CONTEST_QD_LAYOUT_JSON"}},58103:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var s=i.apply(null,r);s&&e.push(s)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var a in r)n.call(r,a)&&r[a]&&e.push(a)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=(function(){return i}).apply(t,[]))||(e.exports=r)}()},58162:(e,t,r)=>{"use strict";r.d(t,{i:()=>o});var n=r(14232),i=r(62146);function o({prop:e,defaultProp:t,onChange:r=()=>{}}){let[s,a]=function({defaultProp:e,onChange:t}){let r=n.useState(e),[o]=r,s=n.useRef(o),a=(0,i.c)(t);return n.useEffect(()=>{s.current!==o&&(a(o),s.current=o)},[o,s,a]),r}({defaultProp:t,onChange:r}),u=void 0!==e,l=u?e:s,c=(0,i.c)(r);return[l,n.useCallback(t=>{if(u){let r="function"==typeof t?t(e):t;r!==e&&c(r)}else a(t)},[u,e,a,c])]}},58185:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var n,i,o,s=r(93790),a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,u=/\\(\\)?/g;let l=(n=function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(a,function(e,r,n,i){t.push(n?i.replace(u,"$1"):r||e)}),t},o=(i=(0,s.A)(n,function(e){return 500===o.size&&o.clear(),e})).cache,i)},58444:(e,t,r)=>{"use strict";r.d(t,{X:()=>u,k:()=>l});var n=r(37149),i=r(60388),o=r(48149),s=r(46305),a=r(61482),u=class extends s.k{#H;#W;#Y;#J;#p;#K;#s;#X;constructor(e){super(),this.#X=!1,this.#s=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.#p=e.client,this.#J=this.#p.getQueryCache(),this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.#W=d(this.options),this.state=e.state??this.#W,this.scheduleGc()}get meta(){return this.options.meta}get queryType(){return this.#H}get promise(){return this.#K?.promise}setOptions(e){if(this.options={...this.#s,...e},e?._type&&(this.#H=e._type),this.updateGcTime(this.options.gcTime),this.state&&void 0===this.state.data){let e=d(this.options);void 0!==e.data&&(this.setState(c(e.data,e.dataUpdatedAt)),this.#W=e)}}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.#J.remove(this)}setData(e,t){let r=(0,n.pl)(this.state.data,e,this.options);return this.#M({data:r,type:"success",dataUpdatedAt:t?.updatedAt,manual:t?.manual}),r}setState(e){this.#M({type:"setState",state:e})}cancel(e){let t=this.#K?.promise;return this.#K?.cancel(e),t?t.then(n.lQ).catch(n.lQ):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}get resetState(){return this.#W}reset(){this.destroy(),this.setState(this.resetState)}isActive(){return this.observers.some(e=>!1!==(0,n.nU)(e.options.enabled,this))}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===n.hT||!this.isFetched()}isFetched(){return this.state.dataUpdateCount+this.state.errorUpdateCount>0}isStatic(){return this.getObserversCount()>0&&this.observers.some(e=>"static"===(0,n.d2)(e.options.staleTime,this))}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):void 0===this.state.data||this.state.isInvalidated}isStaleByTime(e=0){return void 0===this.state.data||"static"!==e&&(!!this.state.isInvalidated||!(0,n.j3)(this.state.dataUpdatedAt,e))}onFocus(){let e=this.observers.find(e=>e.shouldFetchOnWindowFocus());e?.refetch({cancelRefetch:!1}),this.#K?.continue()}onOnline(){let e=this.observers.find(e=>e.shouldFetchOnReconnect());e?.refetch({cancelRefetch:!1}),this.#K?.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.#J.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.#K&&(this.#X||this.#Z()?this.#K.cancel({revert:!0}):this.#K.cancelRetry()),this.scheduleGc()),this.#J.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}#Z(){return"paused"===this.state.fetchStatus&&"pending"===this.state.status}invalidate(){this.state.isInvalidated||this.#M({type:"invalidate"})}async fetch(e,t){let r;if("idle"!==this.state.fetchStatus&&this.#K?.status()!=="rejected"){if(void 0!==this.state.data&&t?.cancelRefetch)this.cancel({silent:!0});else if(this.#K)return this.#K.continueRetry(),this.#K.promise}if(e&&this.setOptions(e),!this.options.queryFn){let e=this.observers.find(e=>e.options.queryFn);e&&this.setOptions(e.options)}let i=new AbortController,s=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(this.#X=!0,i.signal)})},u=()=>{let e,r=(0,n.ZM)(this.options,t),i=(s(e={client:this.#p,queryKey:this.queryKey,meta:this.meta}),e);return(this.#X=!1,this.options.persister)?this.options.persister(r,i,this):r(i)},l=(s(r={fetchOptions:t,options:this.options,queryKey:this.queryKey,client:this.#p,state:this.state,fetchFn:u}),r),c="infinite"===this.#H?(0,a.PL)(this.options.pages):this.options.behavior;c?.onFetch(l,this),this.#Y=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==l.fetchOptions?.meta)&&this.#M({type:"fetch",meta:l.fetchOptions?.meta}),this.#K=(0,o.II)({initialPromise:t?.initialPromise,fn:l.fetchFn,onCancel:e=>{e instanceof o.cc&&e.revert&&this.setState({...this.#Y,fetchStatus:"idle"}),i.abort()},onFail:(e,t)=>{this.#M({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#M({type:"pause"})},onContinue:()=>{this.#M({type:"continue"})},retry:l.options.retry,retryDelay:l.options.retryDelay,networkMode:l.options.networkMode,canRun:()=>!0});try{let e=await this.#K.start();if(void 0===e)throw Error(`${this.queryHash} data is undefined`);return this.setData(e),this.#J.config.onSuccess?.(e,this),this.#J.config.onSettled?.(e,this.state.error,this),e}catch(e){if(e instanceof o.cc){if(e.silent)return this.#K.promise;else if(e.revert){if(void 0===this.state.data)throw e;return this.state.data}}throw this.#M({type:"error",error:e}),this.#J.config.onError?.(e,this),this.#J.config.onSettled?.(this.state.data,e,this),e}finally{this.scheduleGc()}}#M(e){let t=t=>{switch(e.type){case"failed":return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...t,fetchStatus:"paused"};case"continue":return{...t,fetchStatus:"fetching"};case"fetch":return{...t,...l(t.data,this.options),fetchMeta:e.meta??null};case"success":let r={...t,...c(e.data,e.dataUpdatedAt),dataUpdateCount:t.dataUpdateCount+1,...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return this.#Y=e.manual?r:void 0,r;case"error":let n=e.error;return{...t,error:n,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:n,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...t,isInvalidated:!0};case"setState":return{...t,...e.state}}};this.state=t(this.state),i.jG.batch(()=>{this.observers.forEach(e=>{e.onQueryUpdate()}),this.#J.notify({query:this,type:"updated",action:e})})}};function l(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:(0,o.v_)(t.networkMode)?"fetching":"paused",...void 0===e&&{error:null,status:"pending"}}}function c(e,t){return{data:e,dataUpdatedAt:t??Date.now(),error:null,isInvalidated:!1,status:"success"}}function d(e){let t="function"==typeof e.initialData?e.initialData():e.initialData,r=void 0!==t,n=r?"function"==typeof e.initialDataUpdatedAt?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:r?n??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"pending",fetchStatus:"idle"}}},58497:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"notFound",{enumerable:!0,get:function(){return o}});let n=r(46780),i=`${n.HTTP_ERROR_FALLBACK_ERROR_CODE};404`;function o(){let e=Object.defineProperty(Error(i),"__NEXT_ERROR_CODE",{value:"E1041",enumerable:!1,configurable:!0});throw e.digest=i,e}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},58524:(e,t,r)=>{var n=r(20390),i=n.all;e.exports=n.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},58714:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(9694);let i=function(e,t){var r=null==e?void 0:e[t];return(0,n.A)(r)?r:void 0}},59099:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(42813);let i=function(e){return(0,n.A)(2,e)}},60132:(e,t,r)=>{"use strict";r.d(t,{BL:()=>c,FH:()=>f,H_:()=>p,Su:()=>h,Ve:()=>y,_E:()=>b,_R:()=>l,gH:()=>v,k_:()=>m,mV:()=>a,qk:()=>d,wN:()=>u,wf:()=>g});var n,i,o,s=r(41660),a=((n={})[n.MD=600]="MD",n[n.LG=840]="LG",n[n.XL=1200]="XL",n);let u="lc-theme",l=120;var c=((i={})[i.RATE_LIMIT_EXCEEDED=429]="RATE_LIMIT_EXCEEDED",i[i.UNAUTH_ACCESS_ERROR=403]="UNAUTH_ACCESS_ERROR",i),d=((o={}).StudyPlan="study-plan",o.StudyPlanV2="study-plan-v2",o.FeaturedList="featured-list",o.List="list",o.Contest="contest",o.ContestQd="contest-qd",o.Company="company",o.Tag="topic-tag",o.Default="default",o.Problemset="problem-list",o.DailyQuestion="daily-question",o.ProblemListV2="problem-list-v2",o);let p="leetcode.com",m="https://s3-us-west-1.amazonaws.com/s3-lc-upload/assets/default_avatar.jpg",f="QD_Page_3_0",g="sentry-unmask",y="QD_Page_Dynamic",h=()=>s.j_.getState().mode===s.tT.Contest?"QD_Contest_Dynamic":y,v="SIDEBAR_WIDTH",b="SHOW_MY_LIST"},60388:(e,t,r)=>{"use strict";let n,i,o,s,a,u;r.d(t,{jG:()=>c});var l=r(48306).Zq,c=(n=[],i=0,o=e=>{e()},s=e=>{e()},a=l,{batch:e=>{let t;i++;try{t=e()}finally{let e;--i||(e=n,n=[],e.length&&a(()=>{s(()=>{e.forEach(e=>{o(e)})})}))}return t},batchCalls:e=>(...t)=>{u(()=>{e(...t)})},schedule:u=e=>{i?n.push(e):a(()=>{o(e)})},setNotifyFunction:e=>{o=e},setBatchNotifyFunction:e=>{s=e},setScheduler:e=>{a=e}})},60514:(e,t,r)=>{var n=r(51141),i=r(56354),o=r(15653),s=Object,a=n("".split);e.exports=i(function(){return!s("z").propertyIsEnumerable(0)})?function(e){return"String"==o(e)?a(e,""):s(e)}:s},60767:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(58714),i=r(54743);let o=(0,n.A)(i.A,"WeakMap")},60890:(e,t,r)=>{var n=r(72806),i=r(51141);e.exports=function(e,t){return i(n[e].prototype[t])}},61482:(e,t,r)=>{"use strict";r.d(t,{PL:()=>i,RQ:()=>u,rB:()=>a});var n=r(37149);function i(e){return{onFetch:(t,r)=>{let i=t.options,a=t.fetchOptions?.meta?.fetchMore?.direction,u=t.state.data?.pages||[],l=t.state.data?.pageParams||[],c={pages:[],pageParams:[]},d=0,p=async()=>{let r=!1,p=(0,n.ZM)(t.options,t.fetchOptions),m=async(e,i,o)=>{let s;if(r)return Promise.reject(t.signal.reason);if(null==i&&e.pages.length)return Promise.resolve(e);let a=(s={client:t.client,queryKey:t.queryKey,pageParam:i,direction:o?"backward":"forward",meta:t.options.meta},(0,n.ox)(s,()=>t.signal,()=>r=!0),s),u=await p(a),{maxPages:l}=t.options,c=o?n.ZZ:n.y9;return{pages:c(e.pages,u,l),pageParams:c(e.pageParams,i,l)}};if(a&&u.length){let e="backward"===a,t={pages:u,pageParams:l},r=(e?s:o)(i,t);c=await m(t,r,e)}else{let t=e??u.length;do{let e=0===d?l[0]??i.initialPageParam:o(i,c);if(d>0&&null==e)break;c=await m(c,e),d++}while(d<t)}return c};t.options.persister?t.fetchFn=()=>t.options.persister?.(p,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},r):t.fetchFn=p}}}function o(e,{pages:t,pageParams:r}){if(!Array.isArray(t))return;let n=t.length-1;return t.length>0?e.getNextPageParam(t[n],t,r[n],r):void 0}function s(e,{pages:t,pageParams:r}){if(Array.isArray(t))return t.length>0?e.getPreviousPageParam?.(t[0],t,r[0],r):void 0}function a(e,t){return!!t&&null!=o(e,t)}function u(e,t){return!!t&&!!e.getPreviousPageParam&&null!=s(e,t)}},62127:(e,t,r)=>{var n=r(79383);e.exports=function(e){return n(e.length)}},62134:(e,t,r)=>{var n=r(15177),i=r(80128),o=r(321);e.exports=n?function(e,t,r){return i.f(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},62146:(e,t,r)=>{"use strict";r.d(t,{c:()=>i});var n=r(14232);function i(e){let t=n.useRef(e);return n.useEffect(()=>{t.current=e}),n.useMemo(()=>(...e)=>t.current?.(...e),[])}},62222:(e,t,r)=>{"use strict";r.d(t,{A:()=>d});var n=r(98318),i=r(83497),o=r(86702),s=0/0,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt;let d=function(e){if("number"==typeof e)return e;if((0,o.A)(e))return s;if((0,i.A)(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=(0,i.A)(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=(0,n.A)(e);var r=u.test(e);return r||l.test(e)?c(e.slice(2),r?2:8):a.test(e)?s:+e}},62867:(e,t,r)=>{"use strict";r.d(t,{FR:()=>f,Q2:()=>k,bV:()=>g});var n=r(14232),i=r(77328),o=r.n(i);function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}var u=["keyOverride"],l=["crossOrigin"],c={templateTitle:"",noindex:!1,nofollow:!1,norobots:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},d=function(e,t,r){void 0===t&&(t=[]);var i=void 0===r?{}:r,o=i.defaultWidth,s=i.defaultHeight;return t.reduce(function(t,r,i){return t.push(n.createElement("meta",{key:"og:"+e+":0"+i,property:"og:"+e,content:r.url})),r.alt&&t.push(n.createElement("meta",{key:"og:"+e+":alt0"+i,property:"og:"+e+":alt",content:r.alt})),r.secureUrl&&t.push(n.createElement("meta",{key:"og:"+e+":secure_url0"+i,property:"og:"+e+":secure_url",content:r.secureUrl.toString()})),r.type&&t.push(n.createElement("meta",{key:"og:"+e+":type0"+i,property:"og:"+e+":type",content:r.type.toString()})),r.width?t.push(n.createElement("meta",{key:"og:"+e+":width0"+i,property:"og:"+e+":width",content:r.width.toString()})):o&&t.push(n.createElement("meta",{key:"og:"+e+":width0"+i,property:"og:"+e+":width",content:o.toString()})),r.height?t.push(n.createElement("meta",{key:"og:"+e+":height"+i,property:"og:"+e+":height",content:r.height.toString()})):s&&t.push(n.createElement("meta",{key:"og:"+e+":height"+i,property:"og:"+e+":height",content:s.toString()})),t},[])},p=function(e){var t,r,i,o,p,m=[];e.titleTemplate&&(c.templateTitle=e.titleTemplate);var f="";e.title?(f=e.title,c.templateTitle&&(f=c.templateTitle.replace(/%s/g,function(){return f}))):e.defaultTitle&&(f=e.defaultTitle),f&&m.push(n.createElement("title",{key:"title"},f));var g=void 0===e.noindex?c.noindex||e.dangerouslySetAllPagesToNoIndex:e.noindex,y=void 0===e.nofollow?c.nofollow||e.dangerouslySetAllPagesToNoFollow:e.nofollow,h=e.norobots||c.norobots,v="";if(e.robotsProps){var b=e.robotsProps,S=b.nosnippet,w=b.maxSnippet,I=b.maxImagePreview,$=b.maxVideoPreview,C=b.noarchive,k=b.noimageindex,A=b.notranslate,q=b.unavailableAfter;v=(S?",nosnippet":"")+(w?",max-snippet:"+w:"")+(I?",max-image-preview:"+I:"")+(C?",noarchive":"")+(q?",unavailable_after:"+q:"")+(k?",noimageindex":"")+($?",max-video-preview:"+$:"")+(A?",notranslate":"")}if(e.norobots&&(c.norobots=!0),g||y?(e.dangerouslySetAllPagesToNoIndex&&(c.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(c.nofollow=!0),m.push(n.createElement("meta",{key:"robots",name:"robots",content:(g?"noindex":"index")+","+(y?"nofollow":"follow")+v}))):(!h||v)&&m.push(n.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+v})),e.description&&m.push(n.createElement("meta",{key:"description",name:"description",content:e.description})),e.themeColor&&m.push(n.createElement("meta",{key:"theme-color",name:"theme-color",content:e.themeColor})),e.mobileAlternate&&m.push(n.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach(function(e){m.push(n.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))}),e.twitter&&(e.twitter.cardType&&m.push(n.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&m.push(n.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&m.push(n.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&m.push(n.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),(null!=(t=e.openGraph)&&t.title||f)&&m.push(n.createElement("meta",{key:"og:title",property:"og:title",content:(null==(o=e.openGraph)?void 0:o.title)||f})),(null!=(r=e.openGraph)&&r.description||e.description)&&m.push(n.createElement("meta",{key:"og:description",property:"og:description",content:(null==(p=e.openGraph)?void 0:p.description)||e.description})),e.openGraph){if((e.openGraph.url||e.canonical)&&m.push(n.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var O=e.openGraph.type.toLowerCase();m.push(n.createElement("meta",{key:"og:type",property:"og:type",content:O})),"profile"===O&&e.openGraph.profile?(e.openGraph.profile.firstName&&m.push(n.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&m.push(n.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&m.push(n.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&m.push(n.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===O&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach(function(e,t){m.push(n.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))}),e.openGraph.book.isbn&&m.push(n.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&m.push(n.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach(function(e,t){m.push(n.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))})):"article"===O&&e.openGraph.article?(e.openGraph.article.publishedTime&&m.push(n.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&m.push(n.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&m.push(n.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach(function(e,t){m.push(n.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))}),e.openGraph.article.section&&m.push(n.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach(function(e,t){m.push(n.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))})):("video.movie"===O||"video.episode"===O||"video.tv_show"===O||"video.other"===O)&&e.openGraph.video&&(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach(function(e,t){e.profile&&m.push(n.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&m.push(n.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))}),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach(function(e,t){m.push(n.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))}),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach(function(e,t){m.push(n.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))}),e.openGraph.video.duration&&m.push(n.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&m.push(n.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach(function(e,t){m.push(n.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))}),e.openGraph.video.series&&m.push(n.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(c.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(c.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&m.push.apply(m,d("image",e.openGraph.images,{defaultWidth:c.defaultOpenGraphImageWidth,defaultHeight:c.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(c.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(c.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&m.push.apply(m,d("video",e.openGraph.videos,{defaultWidth:c.defaultOpenGraphVideoWidth,defaultHeight:c.defaultOpenGraphVideoHeight})),e.openGraph.audio&&m.push.apply(m,d("audio",e.openGraph.audio)),e.openGraph.locale&&m.push(n.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),(e.openGraph.siteName||e.openGraph.site_name)&&m.push(n.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.siteName||e.openGraph.site_name}))}return e.canonical&&m.push(n.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach(function(e){var t,r,i=e.keyOverride,o=a(e,u);m.push(n.createElement("meta",s({key:"meta:"+(null!=(t=null!=(r=null!=i?i:o.name)?r:o.property)?t:o.httpEquiv)},o)))}),null!=(i=e.additionalLinkTags)&&i.length&&e.additionalLinkTags.forEach(function(e){var t,r=e.crossOrigin,i=a(e,l);m.push(n.createElement("link",s({key:"link"+(null!=(t=i.keyOverride)?t:i.href)+i.rel},i,{crossOrigin:"anonymous"===r||"use-credentials"===r||""===r?r:void 0})))}),m},m=function(e){return n.createElement(o(),null,p(e))},f=function(e){var t=e.title,r=e.titleTemplate,i=e.defaultTitle,o=e.themeColor,s=e.dangerouslySetAllPagesToNoIndex,a=e.dangerouslySetAllPagesToNoFollow,u=e.description,l=e.canonical,c=e.facebook,d=e.openGraph,p=e.additionalMetaTags,f=e.twitter,g=e.defaultOpenGraphImageWidth,y=e.defaultOpenGraphImageHeight,h=e.defaultOpenGraphVideoWidth,v=e.defaultOpenGraphVideoHeight,b=e.mobileAlternate,S=e.languageAlternates,w=e.additionalLinkTags,I=e.robotsProps,$=e.norobots;return n.createElement(m,{title:t,titleTemplate:r,defaultTitle:i,themeColor:o,dangerouslySetAllPagesToNoIndex:void 0!==s&&s,dangerouslySetAllPagesToNoFollow:void 0!==a&&a,description:u,canonical:l,facebook:c,openGraph:d,additionalMetaTags:p,twitter:f,defaultOpenGraphImageWidth:g,defaultOpenGraphImageHeight:y,defaultOpenGraphVideoWidth:h,defaultOpenGraphVideoHeight:v,mobileAlternate:b,languageAlternates:S,additionalLinkTags:w,robotsProps:I,norobots:$})},g=function(e){var t=e.title,r=e.themeColor,i=e.noindex,o=e.nofollow,s=e.robotsProps,a=e.description,u=e.canonical,l=e.openGraph,c=e.facebook,d=e.twitter,p=e.additionalMetaTags,f=e.titleTemplate,g=e.defaultTitle,y=e.mobileAlternate,h=e.languageAlternates,v=e.additionalLinkTags;return n.createElement(n.Fragment,null,n.createElement(m,{title:t,themeColor:r,noindex:i,nofollow:o,robotsProps:s,description:a,canonical:u,facebook:c,openGraph:l,additionalMetaTags:p,twitter:d,titleTemplate:f,defaultTitle:g,mobileAlternate:y,languageAlternates:h,additionalLinkTags:v}))},y=function(e,t){var r=t;return Array.isArray(r)&&1===r.length&&(r=s({},t[0])),{__html:JSON.stringify(Array.isArray(r)?r.map(function(t){return h(e,t)}):h(e,r),w)}},h=function(e,t){var r=t.id,n=s({},(void 0===r?void 0:r)?{"@id":t.id}:{},t);return delete n.id,s({"@context":"https://schema.org","@type":e},n)},v=Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"}),b=RegExp("["+Object.keys(v).join("")+"]","g"),S=function(e){return v[e]},w=function(e,t){switch(typeof t){case"object":if(null===t)return;return t;case"number":case"boolean":case"bigint":return t;case"string":return t.replace(b,S);default:return}},I=["type","keyOverride","scriptKey","scriptId","dataArray","useAppDir"];function $(e){var t=e.type,r=void 0===t?"Thing":t,i=e.keyOverride,u=e.scriptKey,l=e.scriptId,c=void 0===l?void 0:l,d=e.dataArray,p=e.useAppDir,m=a(e,I),f=function(){return n.createElement("script",{type:"application/ld+json",id:c,"data-testid":c,dangerouslySetInnerHTML:y(r,void 0===d?s({},m):d),key:"jsonld-"+u+(i?"-"+i:"")})};return void 0!==p&&p?n.createElement(f,null):n.createElement(o(),null,f())}var C=["type","keyOverride","mainEntity"];function k(e){var t=e.type,r=e.keyOverride,i=e.mainEntity,o=a(e,C),u=s({},o,{mainEntity:function(e){if(e&&e.length)return e.map(function(e){return{"@type":"Question",name:e.questionName,acceptedAnswer:{"@type":"Answer",text:e.acceptedAnswerText}}})}(i)});return n.createElement($,s({type:void 0===t?"FAQPage":t,keyOverride:r},u,{scriptKey:"faq-page"}))}},62938:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=function(e){var t=null==e?0:e.length;return t?e[t-1]:void 0}},64301:function(e){e.exports=function(){"use strict";var e={year:0,month:1,day:2,hour:3,minute:4,second:5},t={};return function(r,n,i){var o,s=function(e,r,n){void 0===n&&(n={});var i,o,s,a,u=new Date(e);return(void 0===(i=n)&&(i={}),(a=t[s=r+"|"+(o=i.timeZoneName||"short")])||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:r,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:o}),t[s]=a),a).formatToParts(u)},a=function(t,r){for(var n=s(t,r),o=[],a=0;a<n.length;a+=1){var u=n[a],l=u.type,c=u.value,d=e[l];d>=0&&(o[d]=parseInt(c,10))}var p=o[3],m=o[0]+"-"+o[1]+"-"+o[2]+" "+(24===p?0:p)+":"+o[4]+":"+o[5]+":000",f=+t;return(i.utc(m).valueOf()-(f-=f%1e3))/6e4},u=n.prototype;u.tz=function(e,t){void 0===e&&(e=o);var r,n=this.utcOffset(),s=this.toDate(),a=s.toLocaleString("en-US",{timeZone:e}),u=Math.round((s-new Date(a))/1e3/60),l=-(15*Math.round(s.getTimezoneOffset()/15))-u;if(Number(l)){if(r=i(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(l,!0),t){var c=r.utcOffset();r=r.add(n-c,"minute")}}else r=this.utcOffset(0,t);return r.$x.$timezone=e,r},u.offsetName=function(e){var t=this.$x.$timezone||i.tz.guess(),r=s(this.valueOf(),t,{timeZoneName:e}).find(function(e){return"timezonename"===e.type.toLowerCase()});return r&&r.value};var l=u.startOf;u.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var r=i(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(r,e,t).tz(this.$x.$timezone,!0)},i.tz=function(e,t,r){var n=r&&t,s=r||t||o,u=a(+i(),s);if("string"!=typeof e)return i(e).tz(s);var l=function(e,t,r){var n=e-60*t*1e3,i=a(n,r);if(t===i)return[n,t];var o=a(n-=60*(i-t)*1e3,r);return i===o?[n,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(i.utc(e,n).valueOf(),u,s),c=l[0],d=l[1],p=i(c).utcOffset(d);return p.$x.$timezone=s,p},i.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},i.tz.setDefault=function(e){o=e}}}()},64682:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n="object"==typeof global&&global&&global.Object===Object&&global},64784:(e,t,r)=>{"use strict";r.d(t,{dj:()=>d,oR:()=>c});var n=r(14232);let i=0,o=new Map,s=e=>{if(o.has(e))return;let t=setTimeout(()=>{o.delete(e),l({type:"REMOVE_TOAST",toastId:e})},1e6);o.set(e,t)},a=[],u={toasts:[]};function l(e){u=((e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,5)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?s(r):e.toasts.forEach(e=>{s(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}})(u,e),a.forEach(e=>{e(u)})}function c(e){let{...t}=e,r=(i=(i+1)%Number.MAX_VALUE).toString(),n=()=>l({type:"DISMISS_TOAST",toastId:r});return l({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||n()}}}),{id:r,dismiss:n,update:e=>l({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function d(){let[e,t]=n.useState(u);n.useEffect(()=>(a.push(t),()=>{let e=a.indexOf(t);e>-1&&a.splice(e,1)}),[e]);let r=n.useCallback(e=>l({type:"DISMISS_TOAST",toastId:e}),[]);return{...e,toast:c,dismiss:r}}},65173:(e,t,r)=>{"use strict";var n=r(33320),i=r(34004),o=r(51141),s=r(78857),a=r(56354),u=r(27514),l=r(58524),c=r(9676),d=r(1958),p=r(79383),m=r(91538),f=r(38607),g=r(72076),y=r(14455),h=r(50839),v=r(30123),b=r(3982)("replace"),S=Math.max,w=Math.min,I=o([].concat),$=o([].push),C=o("".indexOf),k=o("".slice),A="$0"==="a".replace(/./,"$0"),q=!!/./[b]&&""===/./[b]("a","$0");s("replace",function(e,t,r){var o=q?"$":"$0";return[function(e,r){var n=f(this),o=c(e)?void 0:y(e,b);return o?i(o,e,n,r):i(t,m(n),e,r)},function(e,i){var s=u(this),a=m(e);if("string"==typeof i&&-1===C(i,o)&&-1===C(i,"$<")){var c=r(t,s,a,i);if(c.done)return c.value}var f=l(i);f||(i=m(i));var y=s.global;if(y){var b=s.unicode;s.lastIndex=0}for(var A=[];;){var q=v(s,a);if(null===q||($(A,q),!y))break;""===m(q[0])&&(s.lastIndex=g(a,p(s.lastIndex),b))}for(var O="",T=0,P=0;P<A.length;P++){for(var x,E=m((q=A[P])[0]),F=S(w(d(q.index),a.length),0),R=[],L=1;L<q.length;L++)$(R,void 0===(x=q[L])?x:String(x));var N=q.groups;if(f){var _=I([E],R,F,a);void 0!==N&&$(_,N);var D=m(n(i,void 0,_))}else D=h(E,a,F,R,N,i);F>=T&&(O+=k(a,T,F)+D,T=F+E.length)}return O+k(a,T)}]},!!a(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})||!A||q)},66313:(e,t,r)=>{var n=r(56354),i=r(58524),o=/#|\.prototype\./,s=function(e,t){var r=u[a(e)];return r==c||r!=l&&(i(t)?n(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},u=s.data={},l=s.NATIVE="N",c=s.POLYFILL="P";e.exports=s},66315:function(e){e.exports=function(e,t,r){e=e||{};var n=t.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function o(e,t,r,i){return n.fromToBase(e,t,r,i)}r.en.relativeTime=i,n.fromToBase=function(t,n,o,s,a){for(var u,l,c,d=o.$locale().relativeTime||i,p=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],m=p.length,f=0;f<m;f+=1){var g=p[f];g.d&&(u=s?r(t).diff(o,g.d,!0):o.diff(t,g.d,!0));var y=(e.rounding||Math.round)(Math.abs(u));if(c=u>0,y<=g.r||!g.r){y<=1&&f>0&&(g=p[f-1]);var h=d[g.l];a&&(y=a(""+y)),l="string"==typeof h?h.replace("%d",y):h(y,n,g.l,c);break}}if(n)return l;var v=c?d.future:d.past;return"function"==typeof v?v(l):v.replace("%s",l)},n.to=function(e,t){return o(e,t,this,!0)},n.from=function(e,t){return o(e,t,this)};var s=function(e){return e.$u?r.utc():r()};n.toNow=function(e){return this.to(s(this),e)},n.fromNow=function(e){return this.from(s(this),e)}}},66326:(e,t,r)=>{"use strict";r.d(t,{hO:()=>u,sG:()=>a});var n=r(14232),i=r(98477),o=r(82987),s=r(37876),a=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=n.forwardRef((e,r)=>{let{asChild:n,...i}=e,a=n?o.DX:t;return"u">typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,s.jsx)(a,{...i,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function u(e,t){e&&i.flushSync(()=>e.dispatchEvent(t))}},66964:()=>{},67468:(e,t)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor;t.f=n&&!r.call({1:2},1)?function(e){var t=n(this,e);return!!t&&t.enumerable}:r},67768:(e,t,r)=>{"use strict";r.d(t,{Ht:()=>a,jE:()=>s});var n=r(14232),i=r(37876),o=n.createContext(void 0),s=e=>{let t=n.useContext(o);if(e)return e;if(!t)throw Error("No QueryClient set, use QueryClientProvider to set one");return t},a=({client:e,children:t})=>(n.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),(0,i.jsx)(o.Provider,{value:e,children:t}))},67846:(e,t,r)=>{"use strict";r.d(t,{A:()=>u});var n=r(54743),i="object"==typeof exports&&exports&&!exports.nodeType&&exports,o=i&&"object"==typeof module&&module&&!module.nodeType&&module,s=o&&o.exports===i?n.A.Buffer:void 0,a=s?s.allocUnsafe:void 0;let u=function(e,t){if(t)return e.slice();var r=e.length,n=a?a(r):new e.constructor(r);return e.copy(n),n}},67966:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(4335),i=r(28461);let o=function(e,t){t=(0,n.A)(t,e);for(var r=0,o=t.length;null!=e&&r<o;)e=e[(0,i.A)(t[r++])];return r&&r==o?e:void 0}},68295:(e,t,r)=>{var n=r(15177),i=r(90304),o=Function.prototype,s=n&&Object.getOwnPropertyDescriptor,a=i(o,"name"),u=a&&(!n||n&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:a&&"something"===(function(){}).name,CONFIGURABLE:u}},68303:(e,t,r)=>{"use strict";r.d(t,{A:()=>D});var n=r(97725),i=r(55125),o=r(28663),s=r(54539),a=r(44013),u=r(98720),l=r(67846),c=r(21523),d=r(78710),p=r(89117),m=r(98376),f=r(99971),g=r(40678),y=Object.prototype.hasOwnProperty;let h=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&y.call(e,"index")&&(r.index=e.index,r.input=e.input),r};var v=r(30243);let b=function(e,t){var r=t?(0,v.A)(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)};var S=/\w*$/;let w=function(e){var t=new e.constructor(e.source,S.exec(e));return t.lastIndex=e.lastIndex,t};var I=r(76611),$=I.A?I.A.prototype:void 0,C=$?$.valueOf:void 0,k=r(92349);let A=function(e,t,r){var n=e.constructor;switch(t){case"[object ArrayBuffer]":return(0,v.A)(e);case"[object Boolean]":case"[object Date]":return new n(+e);case"[object DataView]":return b(e,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return(0,k.A)(e,r);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(e);case"[object RegExp]":return w(e);case"[object Symbol]":return C?Object(C.call(e)):{}}};var q=r(8505),O=r(4527),T=r(87188),P=r(39805),x=r(83497),E=r(26826),F=r(69014),R="[object Arguments]",L="[object Function]",N="[object Object]",_={};_[R]=_["[object Array]"]=_["[object ArrayBuffer]"]=_["[object DataView]"]=_["[object Boolean]"]=_["[object Date]"]=_["[object Float32Array]"]=_["[object Float64Array]"]=_["[object Int8Array]"]=_["[object Int16Array]"]=_["[object Int32Array]"]=_["[object Map]"]=_["[object Number]"]=_[N]=_["[object RegExp]"]=_["[object Set]"]=_["[object String]"]=_["[object Symbol]"]=_["[object Uint8Array]"]=_["[object Uint8ClampedArray]"]=_["[object Uint16Array]"]=_["[object Uint32Array]"]=!0,_["[object Error]"]=_[L]=_["[object WeakMap]"]=!1;let D=function e(t,r,y,v,b,S){var w,I=1&r,$=2&r,C=4&r;if(y&&(w=b?y(t,v,b,S):y(t)),void 0!==w)return w;if(!(0,x.A)(t))return t;var k=(0,O.A)(t);if(k){if(w=h(t),!I)return(0,c.A)(t,w)}else{var D,j,K,M=(0,g.A)(t),U=M==L||"[object GeneratorFunction]"==M;if((0,T.A)(t))return(0,l.A)(t,I);if(M==N||M==R||U&&!b){if(w=$||U?{}:(0,q.A)(t),!I)return $?(j=(D=w)&&(0,a.A)(t,(0,u.A)(t),D),(0,a.A)(t,(0,p.A)(t),j)):(K=(0,s.A)(w,t),(0,a.A)(t,(0,d.A)(t),K))}else{if(!_[M])return b?t:{};w=A(t,M,I)}}S||(S=new n.A);var V=S.get(t);if(V)return V;S.set(t,w),(0,E.A)(t)?t.forEach(function(n){w.add(e(n,r,y,n,t,S))}):(0,P.A)(t)&&t.forEach(function(n,i){w.set(i,e(n,r,y,i,t,S))});var Q=C?$?f.A:m.A:$?u.A:F.A,B=k?void 0:Q(t);return(0,i.A)(B||t,function(n,i){B&&(n=t[i=n]),(0,o.A)(w,i,e(n,r,y,i,t,S))}),w}},69014:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(21871),i=r(89034),o=r(78304);let s=function(e){return(0,o.A)(e)?(0,n.A)(e):(0,i.A)(e)}},70089:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="clock-rotate-left",n=["history"],i="f1da",o="M48 106.7V56c0-13.3-10.7-24-24-24S0 42.7 0 56V168c0 13.3 10.7 24 24 24H136c13.3 0 24-10.7 24-24s-10.7-24-24-24H80.7c37-57.8 101.7-96 175.3-96c114.9 0 208 93.1 208 208s-93.1 208-208 208c-42.5 0-81.9-12.7-114.7-34.5c-11-7.3-25.9-4.3-33.3 6.7s-4.3 25.9 6.7 33.3C155.2 496.4 203.8 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C170.3 0 94.4 42.1 48 106.7zM256 128c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z";t.definition={prefix:"far",iconName:r,icon:[512,512,n,i,o]},t.faClockRotateLeft=t.definition,t.prefix="far",t.iconName=r,t.width=512,t.height=512,t.ligatures=n,t.unicode=i,t.svgPathData=o,t.aliases=n},70674:(e,t,r)=>{"use strict";r.d(t,{w:()=>o});var n=r(14232),i=n.createContext(!1),o=()=>n.useContext(i);i.Provider},70789:(e,t)=>{"use strict";var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,a=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,c=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113,f=r?Symbol.for("react.suspense_list"):60120,g=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,h=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,b=r?Symbol.for("react.responder"):60118,S=r?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case c:case d:case o:case a:case s:case m:return e;default:switch(e=e&&e.$$typeof){case l:case p:case y:case g:case u:return e;default:return t}}case i:return t}}}function I(e){return w(e)===d}t.AsyncMode=c,t.ConcurrentMode=d,t.ContextConsumer=l,t.ContextProvider=u,t.Element=n,t.ForwardRef=p,t.Fragment=o,t.Lazy=y,t.Memo=g,t.Portal=i,t.Profiler=a,t.StrictMode=s,t.Suspense=m,t.isAsyncMode=function(e){return I(e)||w(e)===c},t.isConcurrentMode=I,t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===p},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===y},t.isMemo=function(e){return w(e)===g},t.isPortal=function(e){return w(e)===i},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===s},t.isSuspense=function(e){return w(e)===m},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===d||e===a||e===s||e===m||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===g||e.$$typeof===u||e.$$typeof===l||e.$$typeof===p||e.$$typeof===v||e.$$typeof===b||e.$$typeof===S||e.$$typeof===h)},t.typeOf=w},71129:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(14232);let i=[],o=0,s=!1,a=[],u=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B500","#FF1493","#00CED1","#FFB6C1","#90EE90","#DDA0DD","#F0E68C","#87CEEB"],l=()=>{a.forEach(e=>e([...i]))},c=()=>{let[e,t]=(0,n.useState)(i),r=(0,n.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;if(s)return;s=!0;let t=[];for(let r=0;r<e;r++){let e=o+r,n=u[Math.floor(Math.random()*u.length)],s=100*Math.random(),a=8+8*Math.random(),c=20+20*Math.random(),d=(Math.random()-.5)*200,p=(Math.random()-.5)*720,m=1.5+ +Math.random(),f=.5*Math.random();t.push({id:e,color:n,left:s,width:a,height:c,drift:d,rotation:p,duration:m,delay:f}),setTimeout(()=>{i=i.filter(t=>t.id!==e),l()},(m+f)*1e3)}i=[...i,...t],o+=e,l(),setTimeout(()=>{s=!1},3e3)},[]);return(0,n.useEffect)(()=>(a.push(t),()=>{let e=a.indexOf(t);e>-1&&a.splice(e,1)}),[]),{confetti:e,createConfetti:r}}},71457:(e,t,r)=>{"use strict";r.d(t,{Av:()=>g,Fm:()=>y,Fr:()=>c,HR:()=>s,Ji:()=>m,Sj:()=>I,Yq:()=>f,cX:()=>l,hR:()=>h,iT:()=>d,jl:()=>w,lQ:()=>p,nr:()=>b,oc:()=>S});var n=r(85760),i=r(59099);let o="u">typeof globalThis?globalThis:window,s=void 0===o,a=()=>{var e;return s?"":null==o||null==(e=o.navigator)?void 0:e.userAgent};function u(e){return()=>e.test(a())}let l=()=>/Macintosh/.test(a())&&!/iPhone|iPad|iPod/.test(a());u(/prerender/i),u(RegExp("(baiduspider|googlebot|bingbot|360spider|ZhihuDailyTranscoder|Sogou web spider|AliApp\\(LW|Facebot|Twitterbot|ia_archiver)","i")),u(/baiduspider/i);let c=u(/Android|iPod|iPhone/i),d=u(/Mac|iPod|iPhone|iPad/i),p=u(/micromessenger/i),m=u(/Alipay/i),f=u(/Android/i),g=u(/iPod|iPhone/i),y=u(/leetcode/i),h=u(/leetcodeandroid/i),v=/Chrome|CriOS|Chromium|Edg|OPR|OPiOS|Opera|Android|FxiOS|UCBrowser|YaBrowser/,b=()=>(/Safari\//.test(a())||/iPhone|iPad|iPod/.test(a()))&&!v.test(a()),S=!0,w=u(/iPad/i);(0,i.A)(()=>{if(!b())return;let e=a(),t=(0,n.A)(e.match(/Version\/(\d+)/),1);if(t)return Number(t)});let I="object"==typeof WebAssembly&&"function"==typeof WebAssembly.instantiate},71576:function(e){e.exports=function(){"use strict";var e="minute",t=/[+-]\d\d(?::?\d\d)?/g,r=/([+-]|\d\d)/g;return function(n,i,o){var s=i.prototype;o.utc=function(e){var t={date:e,utc:!0,args:arguments};return new i(t)},s.utc=function(t){var r=o(this.toDate(),{locale:this.$L,utc:!0});return t?r.add(this.utcOffset(),e):r},s.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var a=s.parse;s.parse=function(e){e.utc&&(this.$u=!0),this.$utils().u(e.$offset)||(this.$offset=e.$offset),a.call(this,e)};var u=s.init;s.init=function(){if(this.$u){var e=this.$d;this.$y=e.getUTCFullYear(),this.$M=e.getUTCMonth(),this.$D=e.getUTCDate(),this.$W=e.getUTCDay(),this.$H=e.getUTCHours(),this.$m=e.getUTCMinutes(),this.$s=e.getUTCSeconds(),this.$ms=e.getUTCMilliseconds()}else u.call(this)};var l=s.utcOffset;s.utcOffset=function(n,i){var o=this.$utils().u;if(o(n))return this.$u?0:o(this.$offset)?l.call(this):this.$offset;if("string"==typeof n&&null===(n=function(e){void 0===e&&(e="");var n=e.match(t);if(!n)return null;var i=(""+n[0]).match(r)||["-",0,0],o=i[0],s=60*i[1]+ +i[2];return 0===s?0:"+"===o?s:-s}(n)))return this;var s=16>=Math.abs(n)?60*n:n;if(0===s)return this.utc(i);var a=this.clone();if(i)return a.$offset=s,a.$u=!1,a;var u=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();return(a=this.local().add(s+u,e)).$offset=s,a.$x.$localOffset=u,a};var c=s.format;s.format=function(e){var t=e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return c.call(this,t)},s.valueOf=function(){var e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*e},s.isUTC=function(){return!!this.$u},s.toISOString=function(){return this.toDate().toISOString()},s.toString=function(){return this.toDate().toUTCString()};var d=s.toDate;s.toDate=function(e){return"s"===e&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():d.call(this)};var p=s.diff;s.diff=function(e,t,r){if(e&&this.$u===e.$u)return p.call(this,e,t,r);var n=this.local(),i=o(e).local();return p.call(n,i,t,r)}}}()},71889:(e,t,r)=>{var n=r(77475),i=r(15653),o=r(3982)("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==i(e))}},72076:(e,t,r)=>{"use strict";var n=r(6282).charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},72209:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(58714);let i=function(){try{var e=(0,n.A)(Object,"defineProperty");return e({},"",{}),e}catch(e){}}()},72552:()=>{},72806:(e,t,r)=>{var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},72936:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return n}});let n=r(64252)._(r(14232)).default.createContext(null)},73512:(e,t,r)=>{"use strict";r.d(t,{t:()=>p});var n=r(14232),i=r(60388),o=r(37149),s=r(25028),a=r(67768),u=r(93517),l=r(45839),c=r(70674),d=r(98562);function p(e,t,r){let p=(0,c.w)(),m=(0,u.h)(),f=(0,a.jE)(r),g=f.defaultQueryOptions(e);f.getDefaultOptions().queries?._experimental_beforeQuery?.(g);let y=f.getQueryCache().get(g.queryHash),h=!1!==e.subscribed;g._optimisticResults=p?"isRestoring":h?"optimistic":void 0,(0,d.jv)(g),(0,l.LJ)(g,m,y),(0,l.wZ)(m);let v=!f.getQueryCache().get(g.queryHash),[b]=n.useState(()=>new t(f,g)),S=b.getOptimisticResult(g),w=!p&&h;if(n.useSyncExternalStore(n.useCallback(e=>{let t=w?b.subscribe(i.jG.batchCalls(e)):o.lQ;return b.updateResult(),t},[b,w]),()=>b.getCurrentResult(),()=>b.getCurrentResult()),n.useEffect(()=>{b.setOptions(g)},[g,b]),(0,d.EU)(g,S))throw(0,d.iL)(g,b,m);if((0,l.$1)({result:S,errorResetBoundary:m,throwOnError:g.throwOnError,query:y,suspense:g.suspense}))throw S.error;if(f.getDefaultOptions().queries?._experimental_afterQuery?.(g,S),g.experimental_prefetchInRender&&!s.H.isServer()&&(0,d.nE)(S,p)){let e=v?(0,d.iL)(g,b,m):y?.promise;e?.catch(o.lQ).finally(()=>{b.updateResult()})}return g.notifyOnChangeProps?S:b.trackResult(S)}},73520:(e,t,r)=>{"use strict";r.d(t,{lg:()=>h,qW:()=>p,bL:()=>y});var n,i=r(14232),o=r(33716),s=r(66326),a=r(10714),u=r(62146),l=r(37876),c="dismissableLayer.update",d=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),p=i.forwardRef((e,t)=>{let{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:p,onPointerDownOutside:m,onFocusOutside:y,onInteractOutside:h,onDismiss:v,...b}=e,S=i.useContext(d),[w,I]=i.useState(null),$=w?.ownerDocument??globalThis?.document,[,C]=i.useState({}),k=(0,a.s)(t,e=>I(e)),A=Array.from(S.layers),[q]=[...S.layersWithOutsidePointerEventsDisabled].slice(-1),O=A.indexOf(q),T=w?A.indexOf(w):-1,P=S.layersWithOutsidePointerEventsDisabled.size>0,x=T>=O,E=function(e,t=globalThis?.document){let r=(0,u.c)(e),n=i.useRef(!1),o=i.useRef(()=>{});return i.useEffect(()=>{let e=e=>{if(e.target&&!n.current){let n=function(){g("dismissableLayer.pointerDownOutside",r,i,{discrete:!0})},i={originalEvent:e};"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=n,t.addEventListener("click",o.current,{once:!0})):n()}else t.removeEventListener("click",o.current);n.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,r]),{onPointerDownCapture:()=>n.current=!0}}(e=>{let t=e.target,r=[...S.branches].some(e=>e.contains(t));x&&!r&&(m?.(e),h?.(e),e.defaultPrevented||v?.())},$),F=function(e,t=globalThis?.document){let r=(0,u.c)(e),n=i.useRef(!1);return i.useEffect(()=>{let e=e=>{e.target&&!n.current&&g("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,r]),{onFocusCapture:()=>n.current=!0,onBlurCapture:()=>n.current=!1}}(e=>{let t=e.target;![...S.branches].some(e=>e.contains(t))&&(y?.(e),h?.(e),e.defaultPrevented||v?.())},$);return!function(e,t=globalThis?.document){let r=(0,u.c)(e);i.useEffect(()=>{let e=e=>{"Escape"===e.key&&r(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[r,t])}(e=>{T===S.layers.size-1&&(p?.(e),!e.defaultPrevented&&v&&(e.preventDefault(),v()))},$),i.useEffect(()=>{if(w)return r&&(0===S.layersWithOutsidePointerEventsDisabled.size&&(n=$.body.style.pointerEvents,$.body.style.pointerEvents="none"),S.layersWithOutsidePointerEventsDisabled.add(w)),S.layers.add(w),f(),()=>{r&&1===S.layersWithOutsidePointerEventsDisabled.size&&($.body.style.pointerEvents=n)}},[w,$,r,S]),i.useEffect(()=>()=>{w&&(S.layers.delete(w),S.layersWithOutsidePointerEventsDisabled.delete(w),f())},[w,S]),i.useEffect(()=>{let e=()=>C({});return document.addEventListener(c,e),()=>document.removeEventListener(c,e)},[]),(0,l.jsx)(s.sG.div,{...b,ref:k,style:{pointerEvents:P?x?"auto":"none":void 0,...e.style},onFocusCapture:(0,o.m)(e.onFocusCapture,F.onFocusCapture),onBlurCapture:(0,o.m)(e.onBlurCapture,F.onBlurCapture),onPointerDownCapture:(0,o.m)(e.onPointerDownCapture,E.onPointerDownCapture)})});p.displayName="DismissableLayer";var m=i.forwardRef((e,t)=>{let r=i.useContext(d),n=i.useRef(null),o=(0,a.s)(t,n);return i.useEffect(()=>{let e=n.current;if(e)return r.branches.add(e),()=>{r.branches.delete(e)}},[r.branches]),(0,l.jsx)(s.sG.div,{...e,ref:o})});function f(){let e=new CustomEvent(c);document.dispatchEvent(e)}function g(e,t,r,{discrete:n}){let i=r.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});t&&i.addEventListener(e,t,{once:!0}),n?(0,s.hO)(i,o):i.dispatchEvent(o)}m.displayName="DismissableLayerBranch";var y=p,h=m},73556:e=>{var t=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function c(e,r,n,o){var s,a,u,l,c=Object.create((r&&r.prototype instanceof y?r:y).prototype);return i(c,"_invoke",{value:(s=e,a=n,u=new q(o||[]),l=p,function(e,r){if(l===m)throw Error("Generator is already running");if(l===f){if("throw"===e)throw r;return{value:t,done:!0}}for(u.method=e,u.arg=r;;){var n=u.delegate;if(n){var i=function e(r,n){var i=n.method,o=r.iterator[i];if(t===o)return(n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method))?g:("return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g);var s=d(o,r.iterator,n.arg);if("throw"===s.type)return n.method="throw",n.arg=s.arg,n.delegate=null,g;var a=s.arg;return a?a.done?(n[r.resultName]=a.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(n,u);if(i){if(i===g)continue;return i}}if("next"===u.method)u.sent=u._sent=u.arg;else if("throw"===u.method){if(l===p)throw l=f,u.arg;u.dispatchException(u.arg)}else"return"===u.method&&u.abrupt("return",u.arg);l=m;var o=d(s,a,u);if("normal"===o.type){if(l=u.done?f:"suspendedYield",o.arg===g)continue;return{value:o.arg,done:u.done}}"throw"===o.type&&(l=f,u.method="throw",u.arg=o.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var p="suspendedStart",m="executing",f="completed",g={};function y(){}function h(){}function v(){}var b={};l(b,s,function(){return this});var S=Object.getPrototypeOf,w=S&&S(S(O([])));w&&w!==r&&n.call(w,s)&&(b=w);var I=v.prototype=y.prototype=Object.create(b);function $(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function C(e,t){var r;i(this,"_invoke",{value:function(i,o){function s(){return new t(function(r,s){!function r(i,o,s,a){var u=d(e[i],e,o);if("throw"===u.type)a(u.arg);else{var l=u.arg,c=l.value;return c&&"object"==typeof c&&n.call(c,"__await")?t.resolve(c.__await).then(function(e){r("next",e,s,a)},function(e){r("throw",e,s,a)}):t.resolve(c).then(function(e){l.value=e,s(l)},function(e){return r("throw",e,s,a)})}}(i,o,r,s)})}return r=r?r.then(s,s):s()}})}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function q(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function O(e){if(e||""===e){var r=e[s];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return h.prototype=v,i(I,"constructor",{value:v,configurable:!0}),i(v,"constructor",{value:h,configurable:!0}),h.displayName=l(v,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,u,"GeneratorFunction")),e.prototype=Object.create(I),e},e.awrap=function(e){return{__await:e}},$(C.prototype),l(C.prototype,a,function(){return this}),e.AsyncIterator=C,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var s=new C(c(t,r,n,i),o);return e.isGeneratorFunction(r)?s:s.next().then(function(e){return e.done?e.value:s.next()})},$(I),l(I,u,"Generator"),l(I,s,function(){return this}),l(I,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=O,q.prototype={constructor:q,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return a.type="throw",a.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var u=n.call(s,"catchLoc"),l=n.call(s,"finallyLoc");if(u&&l){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);else if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(u){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else if(l){if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return(s.type=e,s.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),A(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;A(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},74359:(e,t,r)=>{"use strict";r.d(t,{I:()=>o});var n=r(13478),i=r(73512);function o(e,t){return(0,i.t)(e,n.$,t)}},75080:(e,t,r)=>{"use strict";r.d(t,{V:()=>o});var n=r(56610),i=r(18422);let o=()=>(0,i.hbT)(n.nS,void 0,{select:e=>{var t;return null!=(t=null==e?void 0:e.subscriptionCountry)?t:""}})},75190:(e,t,r)=>{"use strict";var n=r(27514);e.exports=function(){var e=n(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},75288:(e,t,r)=>{var n=r(72806),i=Object.defineProperty;e.exports=function(e,t){try{i(n,e,{value:t,configurable:!0,writable:!0})}catch(r){n[e]=t}return t}},75438:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=function(e){return null!=e&&"object"==typeof e}},75587:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var n=r(4335),i=r(62938),o=r(26223),s=r(28461);let a=function(e,t){return t=(0,n.A)(t,e),null==(e=(0,o.A)(e,t))||delete e[(0,s.A)((0,i.A)(t))]}},75813:(e,t,r)=>{var n=r(43777),i=r(76938);e.exports=Object.keys||function(e){return n(e,i)}},75999:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=function(e,t){return function(r){return e(t(r))}}},76412:(e,t,r)=>{"use strict";r.d(t,{lm:()=>s,yi:()=>o});var n=r(56610),i=r(18422);let o=e=>{var t;return(0,i.Sst)(n.nS,void 0,{select:e=>e.userAccountFrozenInfo,enabled:null==(t=null==e?void 0:e.enabled)||t})},s=e=>{var t;return(0,i.R5v)(n.nS,void 0,{select:e=>e.userIsFrozen,enabled:null==(t=null==e?void 0:e.enabled)||t})}},76611:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=r(54743).A.Symbol},76938:e=>{e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},77328:(e,t,r)=>{e.exports=r(88022)},77475:(e,t,r)=>{var n=r(58524),i=r(20390),o=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:n(e)||e===o}:function(e){return"object"==typeof e?null!==e:n(e)}},77813:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"unstable_rethrow",{enumerable:!0,get:function(){return n}});let n=r(83615).unstable_rethrow;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},77846:function(e){e.exports=function(){"use strict";var e="week",t="year";return function(r,n,i){var o=n.prototype;o.week=function(r){if(void 0===r&&(r=null),null!==r)return this.add(7*(r-this.week()),"day");var n=this.$locale().yearStart||1;if(11===this.month()&&this.date()>25){var o=i(this).startOf(t).add(1,t).date(n),s=i(this).endOf(e);if(o.isBefore(s))return 1}var a=i(this).startOf(t).date(n).startOf(e).subtract(1,"millisecond"),u=this.diff(a,e,!0);return u<0?i(this).startOf("week").week():Math.ceil(u)},o.weeks=function(e){return void 0===e&&(e=null),this.week(e)}}}()},78304:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(43754),i=r(48710);let o=function(e){return null!=e&&(0,i.A)(e.length)&&!(0,n.A)(e)}},78454:(e,t,r)=>{var n=r(51141),i=r(56354),o=r(58524),s=r(90304),a=r(15177),u=r(68295).CONFIGURABLE,l=r(28235),c=r(51444),d=c.enforce,p=c.get,m=String,f=Object.defineProperty,g=n("".slice),y=n("".replace),h=n([].join),v=a&&!i(function(){return 8!==f(function(){},"length",{value:8}).length}),b=String(String).split("String"),S=e.exports=function(e,t,r){"Symbol("===g(m(t),0,7)&&(t="["+y(m(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!s(e,"name")||u&&e.name!==t)&&(a?f(e,"name",{value:t,configurable:!0}):e.name=t),v&&r&&s(r,"arity")&&e.length!==r.arity&&f(e,"length",{value:r.arity});try{r&&s(r,"constructor")&&r.constructor?a&&f(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=d(e);return s(n,"source")||(n.source=h(b,"string"==typeof t?t:"")),e};Function.prototype.toString=S(function(){return o(this)&&p(this).source||l(this)},"toString")},78710:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var n=r(90634),i=r(90667),o=Object.prototype.propertyIsEnumerable,s=Object.getOwnPropertySymbols;let a=s?function(e){return null==e?[]:(e=Object(e),(0,n.A)(s(e),function(t){return o.call(e,t)}))}:i.A},78830:(e,t,r)=>{var n=r(56354),i=r(72806).RegExp;e.exports=n(function(){var e=i(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)})},78857:(e,t,r)=>{"use strict";r(26714);var n=r(30385),i=r(84813),o=r(94278),s=r(56354),a=r(3982),u=r(62134),l=a("species"),c=RegExp.prototype;e.exports=function(e,t,r,d){var p=a(e),m=!s(function(){var t={};return t[p]=function(){return 7},7!=""[e](t)}),f=m&&!s(function(){var t=!1,r=/a/;return"split"===e&&((r={}).constructor={},r.constructor[l]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return t=!0,null},r[p](""),!t});if(!m||!f||r){var g=n(/./[p]),y=t(p,""[e],function(e,t,r,i,s){var a=n(e),u=t.exec;return u===o||u===c.exec?m&&!s?{done:!0,value:g(t,r,i)}:{done:!0,value:a(r,t,i)}:{done:!1}});i(String.prototype,e,y[0]),i(c,p,y[1])}d&&u(c[p],"sham",!0)}},79383:(e,t,r)=>{var n=r(1958),i=Math.min;e.exports=function(e){return e>0?i(n(e),0x1fffffffffffff):0}},79548:(e,t,r)=>{var n=r(54202),i=r(58524),o=r(87352),s=r(3157),a=Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=n("Symbol");return i(t)&&o(t.prototype,a(e))}},80036:(e,t,r)=>{var n=r(56354),i=r(72806).RegExp,o=n(function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")}),s=o||n(function(){return!i("a","y").sticky});e.exports={BROKEN_CARET:o||n(function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}),MISSED_STICKY:s,UNSUPPORTED_Y:o}},80128:(e,t,r)=>{var n=r(15177),i=r(30372),o=r(30183),s=r(27514),a=r(22568),u=TypeError,l=Object.defineProperty,c=Object.getOwnPropertyDescriptor,d="enumerable",p="configurable",m="writable";t.f=n?o?function(e,t,r){if(s(e),t=a(t),s(r),"function"==typeof e&&"prototype"===t&&"value"in r&&m in r&&!r[m]){var n=c(e,t);n&&n[m]&&(e[t]=r.value,r={configurable:p in r?r[p]:n[p],enumerable:d in r?r[d]:n[d],writable:!1})}return l(e,t,r)}:l:function(e,t,r){if(s(e),t=a(t),s(r),i)try{return l(e,t,r)}catch(e){}if("get"in r||"set"in r)throw u("Accessors not supported");return"value"in r&&(e[t]=r.value),e}},81285:(e,t,r)=>{"use strict";r.d(t,{N:()=>i});var n=r(14232),i=globalThis?.document?n.useLayoutEffect:()=>{}},81365:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(75999).A)(Object.getPrototypeOf,Object)},81627:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(2188);let i=function(e){var t=(0,n.A)(e),r=t%1;return t==t?r?t-r:t:0}},81883:(e,t,r)=>{"use strict";r.d(t,{T:()=>i,b:()=>o});var n=r(37149);function i(){let e,t,r=new Promise((r,n)=>{e=r,t=n});function n(e){Object.assign(r,e),delete r.resolve,delete r.reject}return r.status="pending",r.catch(()=>{}),r.resolve=t=>{n({status:"fulfilled",value:t}),e(t)},r.reject=e=>{n({status:"rejected",reason:e}),t(e)},r}function o(e){let t;if(e.then(e=>(t=e,e),n.lQ)?.catch(n.lQ),void 0!==t)return{data:t}}},82340:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=function(e,t,r){var n=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(r=r>i?i:r)<0&&(r+=i),i=t>r?0:r-t>>>0,t>>>=0;for(var o=Array(i);++n<i;)o[n]=e[n+t];return o}},82457:(e,t,r)=>{"use strict";r.d(t,{b:()=>a,s:()=>s});var n=r(14232),i=r(66326),o=r(37876),s=n.forwardRef((e,t)=>(0,o.jsx)(i.sG.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));s.displayName="VisuallyHidden";var a=s},82668:e=>{var t=Math.ceil,r=Math.floor;e.exports=Math.trunc||function(e){var n=+e;return(n>0?r:t)(n)}},82987:(e,t,r)=>{"use strict";r.d(t,{DX:()=>s,xV:()=>u});var n=r(14232),i=r(10714),o=r(37876),s=n.forwardRef((e,t)=>{let{children:r,...i}=e,s=n.Children.toArray(r),u=s.find(l);if(u){let e=u.props.children,r=s.map(t=>t!==u?t:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,o.jsx)(a,{...i,ref:t,children:n.isValidElement(e)?n.cloneElement(e,void 0,r):null})}return(0,o.jsx)(a,{...i,ref:t,children:r})});s.displayName="Slot";var a=n.forwardRef((e,t)=>{let{children:r,...o}=e;if(n.isValidElement(r)){var s;let e,a,u=(s=r,(a=(e=Object.getOwnPropertyDescriptor(s.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?s.ref:(a=(e=Object.getOwnPropertyDescriptor(s,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?s.props.ref:s.props.ref||s.ref),l=function(e,t){let r={...t};for(let n in t){let i=e[n],o=t[n];/^on[A-Z]/.test(n)?i&&o?r[n]=(...e)=>{o(...e),i(...e)}:i&&(r[n]=i):"style"===n?r[n]={...i,...o}:"className"===n&&(r[n]=[i,o].filter(Boolean).join(" "))}return{...e,...r}}(o,r.props);return r.type!==n.Fragment&&(l.ref=t?(0,i.t)(t,u):u),n.cloneElement(r,l)}return n.Children.count(r)>1?n.Children.only(null):null});a.displayName="SlotClone";var u=({children:e})=>(0,o.jsx)(o.Fragment,{children:e});function l(e){return n.isValidElement(e)&&e.type===u}},82993:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(95528),i=r(4527);let o=function(e,t,r){var o=t(e);return(0,i.A)(e)?o:(0,n.A)(o,r(e))}},83044:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={ReadonlyURLSearchParams:function(){return o.ReadonlyURLSearchParams},RedirectType:function(){return p},forbidden:function(){return u.forbidden},notFound:function(){return a.notFound},permanentRedirect:function(){return s.permanentRedirect},redirect:function(){return s.redirect},unauthorized:function(){return l.unauthorized},unstable_isUnrecognizedActionError:function(){return d},unstable_rethrow:function(){return c.unstable_rethrow}};for(var i in n)Object.defineProperty(t,i,{enumerable:!0,get:n[i]});let o=r(90713),s=r(963),a=r(58497),u=r(6764),l=r(54989),c=r(77813);function d(){throw Object.defineProperty(Error("`unstable_isUnrecognizedActionError` can only be used on the client."),"__NEXT_ERROR_CODE",{value:"E776",enumerable:!1,configurable:!0})}let p={push:"push",replace:"replace"};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},83492:()=>{},83497:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},83522:(e,t)=>{"use strict";t.mw={prefix:"far",iconName:"flask",icon:[448,512,[],"f0c3","M176 196.8c0 20.7-5.8 41-16.6 58.7L119.7 320H328.3l-39.7-64.5c-10.9-17.7-16.6-38-16.6-58.7V48H176V196.8zM320 48V196.8c0 11.8 3.3 23.5 9.5 33.5L437.7 406.2c6.7 10.9 10.3 23.5 10.3 36.4c0 38.3-31.1 69.4-69.4 69.4H69.4C31.1 512 0 480.9 0 442.6c0-12.8 3.6-25.4 10.3-36.4L118.5 230.4c6.2-10.1 9.5-21.7 9.5-33.5V48h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h40H288h40c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8z"]},t.rI=t.mw},83615:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"unstable_rethrow",{enumerable:!0,get:function(){return function e(t){if((0,i.isNextRouterError)(t)||(0,n.isBailoutToCSRError)(t))throw t;t instanceof Error&&"cause"in t&&e(t.cause)}}});let n=r(4808),i=r(57804);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},83628:(e,t,r)=>{var n=r(38607),i=Object;e.exports=function(e){return i(n(e))}},83966:(e,t,r)=>{"use strict";r.d(t,{d:()=>d});var n=r(37876),i=r(22701),o=r(22257);let s={"12px":"text-[12px]","14px":"text-[14px]","16px":"text-[16px]","18px":"text-[18px]","20px":"text-[20px]","24px":"text-[24px]","32px":"text-[32px]"},a={"12px":"before:h-3","14px":"before:h-3.5","16px":"before:h-4","18px":"before:h-4.5","20px":"before:h-5","24px":"before:h-6","32px":"before:h-8"},u={"12px":"before:w-3","14px":"before:w-3.5","16px":"before:w-4","18px":"before:w-4.5","20px":"before:w-5","24px":"before:w-6","32px":"before:w-8"},l={"12px":"p-[1px]","14px":"p-[1px]","16px":"p-0.5","18px":"p-0.5","20px":"p-0.5","24px":"p-[3px]","32px":"p-1"},c={"12px":"p-0.5","14px":"p-[3px]","16px":"p-1","18px":"p-1","20px":"p-[5px]","24px":"p-1.5","32px":"p-2"},d=e=>{let{variant:t="14px",padding:r="square",className:d,...p}=e;return(0,n.jsx)("div",{className:(0,o.x)("relative",s[t],"leading-[normal]",{[l[t]]:"square"===r,[c[t]]:"roomy"===r},"before:block",a[t],u[t],d),children:(0,n.jsx)(i.g,{className:"absolute h-[1em] -translate-x-1/2 -translate-y-1/2 align-[-0.125em] left-1/2 top-1/2",...p})})}},84147:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=Object.prototype;let i=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||n)}},84813:(e,t,r)=>{var n=r(58524),i=r(80128),o=r(78454),s=r(75288);e.exports=function(e,t,r,a){a||(a={});var u=a.enumerable,l=void 0!==a.name?a.name:t;if(n(r)&&o(r,l,a),a.global)u?e[t]=r:s(t,r);else{try{a.unsafe?e[t]&&(u=!0):delete e[t]}catch(e){}u?e[t]=r:i.f(e,t,{value:r,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},85760:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(18024),i=r(81627);let o=function(e,t){return e&&e.length?(0,n.A)(e,(0,i.A)(t)):void 0}},86090:function(e){e.exports=function(){"use strict";var e,t,r=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,n=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,i={years:31536e6,months:2628e6,days:864e5,hours:36e5,minutes:6e4,seconds:1e3,milliseconds:1,weeks:6048e5},o=function(e){return e instanceof d},s=function(e,t,r){return new d(e,r,t.$l)},a=function(e){return t.p(e)+"s"},u=function(e){return e<0},l=function(e){return u(e)?Math.ceil(e):Math.floor(e)},c=function(e,t){return e?u(e)?{negative:!0,format:""+Math.abs(e)+t}:{negative:!1,format:""+e+t}:{negative:!1,format:""}},d=function(){function u(e,t,r){var o=this;if(this.$d={},this.$l=r,void 0===e&&(this.$ms=0,this.parseFromMilliseconds()),t)return s(e*i[a(t)],this);if("number"==typeof e)return this.$ms=e,this.parseFromMilliseconds(),this;if("object"==typeof e)return Object.keys(e).forEach(function(t){o.$d[a(t)]=e[t]}),this.calMilliseconds(),this;if("string"==typeof e){var u=e.match(n);if(u){var l=u.slice(2).map(function(e){return null!=e?Number(e):0});return this.$d.years=l[0],this.$d.months=l[1],this.$d.weeks=l[2],this.$d.days=l[3],this.$d.hours=l[4],this.$d.minutes=l[5],this.$d.seconds=l[6],this.calMilliseconds(),this}}return this}var d=u.prototype;return d.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce(function(t,r){return t+(e.$d[r]||0)*i[r]},0)},d.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=l(e/31536e6),e%=31536e6,this.$d.months=l(e/2628e6),e%=2628e6,this.$d.days=l(e/864e5),e%=864e5,this.$d.hours=l(e/36e5),e%=36e5,this.$d.minutes=l(e/6e4),e%=6e4,this.$d.seconds=l(e/1e3),e%=1e3,this.$d.milliseconds=e},d.toISOString=function(){var e=c(this.$d.years,"Y"),t=c(this.$d.months,"M"),r=+this.$d.days||0;this.$d.weeks&&(r+=7*this.$d.weeks);var n=c(r,"D"),i=c(this.$d.hours,"H"),o=c(this.$d.minutes,"M"),s=this.$d.seconds||0;this.$d.milliseconds&&(s+=this.$d.milliseconds/1e3,s=Math.round(1e3*s)/1e3);var a=c(s,"S"),u=e.negative||t.negative||n.negative||i.negative||o.negative||a.negative,l=i.format||o.format||a.format?"T":"",d=(u?"-":"")+"P"+e.format+t.format+n.format+l+i.format+o.format+a.format;return"P"===d||"-P"===d?"P0D":d},d.toJSON=function(){return this.toISOString()},d.format=function(e){var n={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return(e||"YYYY-MM-DDTHH:mm:ss").replace(r,function(e,t){return t||String(n[e])})},d.as=function(e){return this.$ms/i[a(e)]},d.get=function(e){var t=this.$ms,r=a(e);return"milliseconds"===r?t%=1e3:t="weeks"===r?l(t/i[r]):this.$d[r],t||0},d.add=function(e,t,r){var n;return n=t?e*i[a(t)]:o(e)?e.$ms:s(e,this).$ms,s(this.$ms+n*(r?-1:1),this)},d.subtract=function(e,t){return this.add(e,t,!0)},d.locale=function(e){var t=this.clone();return t.$l=e,t},d.clone=function(){return s(this.$ms,this)},d.humanize=function(t){return e().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},d.valueOf=function(){return this.asMilliseconds()},d.milliseconds=function(){return this.get("milliseconds")},d.asMilliseconds=function(){return this.as("milliseconds")},d.seconds=function(){return this.get("seconds")},d.asSeconds=function(){return this.as("seconds")},d.minutes=function(){return this.get("minutes")},d.asMinutes=function(){return this.as("minutes")},d.hours=function(){return this.get("hours")},d.asHours=function(){return this.as("hours")},d.days=function(){return this.get("days")},d.asDays=function(){return this.as("days")},d.weeks=function(){return this.get("weeks")},d.asWeeks=function(){return this.as("weeks")},d.months=function(){return this.get("months")},d.asMonths=function(){return this.as("months")},d.years=function(){return this.get("years")},d.asYears=function(){return this.as("years")},u}(),p=function(e,t,r){return e.add(t.years()*r,"y").add(t.months()*r,"M").add(t.days()*r,"d").add(t.hours()*r,"h").add(t.minutes()*r,"m").add(t.seconds()*r,"s").add(t.milliseconds()*r,"ms")};return function(r,n,i){e=i,t=i().$utils(),i.duration=function(e,t){return s(e,{$l:i.locale()},t)},i.isDuration=o;var a=n.prototype.add,u=n.prototype.subtract;n.prototype.add=function(e,t){return o(e)?p(this,e,1):a.bind(this)(e,t)},n.prototype.subtract=function(e,t){return o(e)?p(this,e,-1):u.bind(this)(e,t)}}}()},86252:(e,t,r)=>{var n=r(60514),i=r(38607);e.exports=function(e){return n(i(e))}},86286:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(83497),i=Object.create;let o=function(){function e(){}return function(t){if(!(0,n.A)(t))return{};if(i)return i(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}()},86702:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(21710),i=r(75438);let o=function(e){return"symbol"==typeof e||(0,i.A)(e)&&"[object Symbol]"==(0,n.A)(e)}},86811:(e,t,r)=>{"use strict";r.d(t,{m:()=>o});var n=r(55691),i=r(4319);let o=(0,n.vt)((0,i.kg)({trackInitialized:!1},e=>({setTrackInitialized:()=>e(e=>({...e,trackInitialized:!0}))})))},87125:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=/^(?:0|[1-9]\d*)$/;let i=function(e,t){var r=typeof e;return!!(t=null==t?0x1fffffffffffff:t)&&("number"==r||"symbol"!=r&&n.test(e))&&e>-1&&e%1==0&&e<t}},87188:(e,t,r)=>{"use strict";r.d(t,{A:()=>u});var n=r(54743),i=r(49201),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,s=o&&"object"==typeof module&&module&&!module.nodeType&&module,a=s&&s.exports===o?n.A.Buffer:void 0;let u=(a?a.isBuffer:void 0)||i.A},87352:(e,t,r)=>{e.exports=r(51141)({}.isPrototypeOf)},87926:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(10302);let i=function(e){return null==e?"":(0,n.A)(e)}},88202:(e,t,r)=>{var n=r(46224),i=r(45941),o=n("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},88775:(e,t,r)=>{"use strict";r.d(t,{N:()=>u});var n=r(14232),i=r(91844),o=r(10714),s=r(82987),a=r(37876);function u(e){let t=e+"CollectionProvider",[r,u]=(0,i.A)(t),[l,c]=r(t,{collectionRef:{current:null},itemMap:new Map}),d=e=>{let{scope:t,children:r}=e,i=n.useRef(null),o=n.useRef(new Map).current;return(0,a.jsx)(l,{scope:t,itemMap:o,collectionRef:i,children:r})};d.displayName=t;let p=e+"CollectionSlot",m=n.forwardRef((e,t)=>{let{scope:r,children:n}=e,i=c(p,r),u=(0,o.s)(t,i.collectionRef);return(0,a.jsx)(s.DX,{ref:u,children:n})});m.displayName=p;let f=e+"CollectionItemSlot",g="data-radix-collection-item",y=n.forwardRef((e,t)=>{let{scope:r,children:i,...u}=e,l=n.useRef(null),d=(0,o.s)(t,l),p=c(f,r);return n.useEffect(()=>(p.itemMap.set(l,{ref:l,...u}),()=>void p.itemMap.delete(l))),(0,a.jsx)(s.DX,{...{[g]:""},ref:d,children:i})});return y.displayName=f,[{Provider:d,Slot:m,ItemSlot:y},function(t){let r=c(e+"CollectionConsumer",t);return n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${g}]`));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},u]}},89034:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(84147),i=(0,r(75999).A)(Object.keys,Object),o=Object.prototype.hasOwnProperty;let s=function(e){if(!(0,n.A)(e))return i(e);var t=[];for(var r in Object(e))o.call(e,r)&&"constructor"!=r&&t.push(r);return t}},89117:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var n=r(95528),i=r(81365),o=r(78710),s=r(90667);let a=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)(0,n.A)(t,(0,o.A)(e)),e=(0,i.A)(e);return t}:s.A},89124:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="xmark",n=[128473,10005,10006,10060,215,"close","multiply","remove","times"],i="f00d",o="M345 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119L73 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l119 119L39 375c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119L311 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119L345 137z";t.definition={prefix:"far",iconName:r,icon:[384,512,n,i,o]},t.faXmark=t.definition,t.prefix="far",t.iconName=r,t.width=384,t.height=512,t.ligatures=n,t.unicode=i,t.svgPathData=o,t.aliases=n},90089:(e,t,r)=>{"use strict";r.d(t,{Q:()=>n});var n=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}},90265:()=>{},90285:(e,t,r)=>{var n,i=r(27514),o=r(15024),s=r(76938),a=r(12524),u=r(13012),l=r(47594),c=r(88202),d="prototype",p="script",m=c("IE_PROTO"),f=function(){},g=function(e){return"<"+p+">"+e+"</"+p+">"},y=function(e){e.write(g("")),e.close();var t=e.parentWindow.Object;return e=null,t},h=function(){var e,t=l("iframe");return t.style.display="none",u.appendChild(t),t.src=String("java"+p+":"),(e=t.contentWindow.document).open(),e.write(g("document.F=Object")),e.close(),e.F},v=function(){try{n=new ActiveXObject("htmlfile")}catch(e){}v="u">typeof document?document.domain&&n?y(n):h():y(n);for(var e=s.length;e--;)delete v[d][s[e]];return v()};a[m]=!0,e.exports=Object.create||function(e,t){var r;return null!==e?(f[d]=i(e),r=new f,f[d]=null,r[m]=e):r=v(),void 0===t?r:o.f(r,t)}},90304:(e,t,r)=>{var n=r(51141),i=r(83628),o=n({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},90634:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var s=e[r];t(s,r,e)&&(o[i++]=s)}return o}},90667:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=function(){return[]}},91125:(e,t,r)=>{"use strict";r.d(t,{l:()=>i});var n=r(14232);let i=e=>null;i.displayName="NullComponent",(0,n.forwardRef)((e,t)=>null).displayName="ForwardRefNullComponent"},91303:(e,t,r)=>{"use strict";r.d(t,{JX:()=>u,uE:()=>a,vZ:()=>l});var n=r(50366),i=r(4080);let o=(0,n.js)();class s{request(e,t,r){return this.rawRequest(e,t,r).then(e=>{if(!e.ok)throw Error("Network response was not ok");return e.json()})}rawRequest(e,t,r){let i=((e,t)=>{var r,n,i,o;if(!t&&!e)return;if(!e)return t;let s=null!=t?t:{},a=null!=(r=s.headers)?r:{},u=e.headers.referer||"https://leetcode.com/";return{...s,headers:{...a,referer:u,cookie:null!=(n=e.headers.cookie)?n:"","X-CSRFToken":null!=(i=null==(o=e.cookies)?void 0:o.csrftoken)?i:""}}})(r,t);return fetch(`${this.baseUrl}${e}`,{headers:new Headers({...this.headers,"X-CSRFToken":(0,n.Qm)(),Authorization:o?`Bearer ${o}`:""}),credentials:"same-origin",...i})}requestHeaders(e,t){return this.headers={...this.headers,...null==t?void 0:t.headers},this.request(e,null==t?void 0:t.settings)}constructor(e){this.headers={"content-type":"application/json"},this.baseUrl="",this.baseUrl=e}}let a=new s(""),u=new s(i.uJ);new s(i.uJ);let l={favoriteLists:e=>`/api/problems/favorite_lists/${e}/`,problems:e=>`/api/problems/${e}/`,problemsFilter:e=>`/problems/api/filter-questions/${encodeURIComponent(e)}`,problemsList:"/problems/api/favorites/",problemsTags:"/problems/api/tags/",problemsCategories:"/problems/api/card-info/",banner:e=>`/api/banner/${e}/`,session:"/session/",virtualContestStart:e=>`/contest/api/${e}/virtual_participate`,runcodeTaskEnqueue:e=>`/problems/${e}/interpret_solution/`,runcodeResult:e=>`/submissions/detail/${e}/check/`,submitTaskEnqueue:e=>`/problems/${e}/submit/`,submitResult:e=>`/submissions/detail/${e}/check/`,submitResultV2:e=>`/submissions/detail/${e}/v2/check/`,memoryDistribution:e=>`/submissions/api/memory_distribution/${e}/`,runtimeDistribution:e=>`/submissions/api/runtime_distribution/${e}/`,lastSubmittedCode:(e,t)=>`/submissions/latest/?qid=${e}&lang=${t}`,contestRuncodeTaskEnqueue:(e,t)=>`/contest/api/${e}/problems/${t}/interpret_solution/`,contestSubmitTaskEnqueue:(e,t)=>`/contest/api/${e}/problems/${t}/submit/`,contestInfo:e=>`/contest/api/info/${e}/`,contestRankingTop:e=>{let{contestTitleSlug:t,region:r}=e;return`/contest/api/ranking/${t}/?region=${r}&top=true`},contestRankingPage:e=>{let{contestTitleSlug:t,pagination:r=1,region:n}=e;return`/contest/api/ranking/${t}/?pagination=${r}&region=${n}`},contestMyRanking:(e,t)=>`/contest/api/myranking/${e}/?region=${t}`,contestSubmission:e=>`/api/submissions/${e}/`,contestSubmissionReportStatus:e=>`/contest/api/reports/submissions/${e}/`,contestSubmissionReport:"/contest/api/reports/",student:"/student/api/",studentDiscount:"/student/api/24discount/",subscribeCheckout:"/subscription/add_card_and_checkout/",isChinaIp:"/api/is_china_ip/",ipRegion:"/api/ip_region/",isChinaIpForFlag:"/api/is_cn_flag/",ctdidToken:"/accounts/ctdid/o/token/",subscription:"/subscription/premium_info/",subscriptionAddCard:"/subscription/card/",subscriptionReactivate:"/subscription/reactivate/",subscriptionCancel:"/subscription/cancel/",subscriptionBillHistory:"/subscription/billing_history/",subscriptionRefund:"/subscription/check_refund/",subscriptionSubmitRefund:"/subscription/refund/",subscriptionRedeem:e=>`/store/api/redeem_premium_email/${e}/`,home:"/api/home/",subscriptionCheckout:"/subscription/subscription_checkout/",changeCardByCheckout:"/subscription/change_card_by_checkout/",subscriptionChange:"/subscription/subscription_change/",subscriptionOrgCheckout:"/subscription/organization_subscription_checkout/",subscriptionOrgChange:"/subscription/organization_subscription_change/",cancelCheckoutSession:"/subscription/cancel_checkout_session/",changeSubscriptionPreview:"/subscription/change_subscription_preview/",subscriptionInvoiceUrl:"/subscription/invoice_url/",studentPrimaryCheckout:"/student/api/primary_checkout",studentSecondCheckout:"/student/api/second_checkout",pointsTotal:"/points/api/total/",pointsHistory:()=>"/points/api/",uploadAvatar:()=>"/storage/upload/user_avatar/",phoneUpdate:"/api/phone_update/",phoneReset:e=>`/api/phone_reset/?code=${e}`}},91538:(e,t,r)=>{var n=r(94534),i=String;e.exports=function(e){if("Symbol"===n(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},91786:e=>{var t=String;e.exports=function(e){try{return t(e)}catch(e){return"Object"}}},91844:(e,t,r)=>{"use strict";r.d(t,{A:()=>s,q:()=>o});var n=r(14232),i=r(37876);function o(e,t){let r=n.createContext(t),o=e=>{let{children:t,...o}=e,s=n.useMemo(()=>o,Object.values(o));return(0,i.jsx)(r.Provider,{value:s,children:t})};return o.displayName=e+"Provider",[o,function(i){let o=n.useContext(r);if(o)return o;if(void 0!==t)return t;throw Error(`\`${i}\` must be used within \`${e}\``)}]}function s(e,t=[]){let r=[],o=()=>{let t=r.map(e=>n.createContext(e));return function(r){let i=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:i}}),[r,i])}};return o.scopeName=e,[function(t,o){let s=n.createContext(o),a=r.length;r=[...r,o];let u=t=>{let{scope:r,children:o,...u}=t,l=r?.[e]?.[a]||s,c=n.useMemo(()=>u,Object.values(u));return(0,i.jsx)(l.Provider,{value:c,children:o})};return u.displayName=t+"Provider",[u,function(r,i){let u=i?.[e]?.[a]||s,l=n.useContext(u);if(l)return l;if(void 0!==o)return o;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let i=r.reduce((t,{useScope:r,scopeName:n})=>{let i=r(e)[`__scope${n}`];return{...t,...i}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return r.scopeName=t.scopeName,r}(o,...t)]}},92349:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(30243);let i=function(e,t){var r=t?(0,n.A)(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}},92710:(e,t,r)=>{"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.d(t,{A:()=>n})},92846:(e,t,r)=>{"use strict";function n(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.includes(r)||({}).propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}r.d(t,{x6:()=>C,Zh:()=>eX,Bd:()=>k.B});var i=r(92710),o=r(28389),s=r(14232),a=r(42443),u=r.n(a),l=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function c(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},r=e.match(/<\/?([^\s]+?)[/\s>]/);if(r&&(t.name=r[1],(u()[r[1]]||"/"===e.charAt(e.length-2))&&(t.voidElement=!0),t.name.startsWith("!--"))){var n=e.indexOf("--\x3e");return{type:"comment",comment:-1!==n?e.slice(4,n):""}}for(var i=new RegExp(l),o=null;null!==(o=i.exec(e));)if(o[0].trim())if(o[1]){var s=o[1].trim(),a=[s,""];s.indexOf("=")>-1&&(a=s.split("=")),t.attrs[a[0]]=a[1],i.lastIndex--}else o[2]&&(t.attrs[o[2]]=o[3].trim().substring(1,o[3].length-1));return t}var d=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,p=/^\s*$/,m=Object.create(null);let f=function(e,t){t||(t={}),t.components||(t.components=m);var r,n=[],i=[],o=-1,s=!1;if(0!==e.indexOf("<")){var a=e.indexOf("<");n.push({type:"text",content:-1===a?e:e.substring(0,a)})}return e.replace(d,function(a,u){if(s){if(a!=="</"+r.name+">")return;s=!1}var l,d="/"!==a.charAt(1),m=a.startsWith("\x3c!--"),f=u+a.length,g=e.charAt(f);if(m){var y=c(a);return o<0?n.push(y):(l=i[o]).children.push(y),n}if(d&&(o++,"tag"===(r=c(a)).type&&t.components[r.name]&&(r.type="component",s=!0),r.voidElement||s||!g||"<"===g||r.children.push({type:"text",content:e.slice(f,e.indexOf("<",f))}),0===o&&n.push(r),(l=i[o-1])&&l.children.push(r),i[o]=r),(!d||r.voidElement)&&(o>-1&&(r.voidElement||r.name===a.slice(2,-1))&&(r=-1==--o?n:i[o]),!s&&"<"!==g&&g)){l=-1===o?n:i[o].children;var h=e.indexOf("<",f),v=e.slice(f,-1===h?void 0:h);p.test(v)&&(v=" "),(h>-1&&o+l.length>=0||" "!==v)&&l.push({type:"text",content:v})}}),n};var g=r(28058),y=r(1637),h=["format"],v=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach(function(t){(0,o.A)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function w(e,t){if(!e)return!1;var r=e.props?e.props.children:e.children;return t?r.length>0:!!r}function I(e){return e?e.props?e.props.children:e.children:[]}function $(e){return Array.isArray(e)?e:[e]}function C(e){var t=e.children,r=e.count,o=e.parent,a=e.i18nKey,u=e.context,l=e.tOptions,c=void 0===l?{}:l,d=e.values,p=e.defaults,m=e.components,b=e.ns,C=e.i18n,k=e.t,A=e.shouldUnescape,q=n(e,v),O=(0,s.useContext)(g.gJ)||{},T=O.i18n,P=O.defaultNS,x=C||T||(0,g.TO)();if(!x)return(0,y.mc)("You will need to pass in an i18next instance by using i18nextReactModule"),t;var E=k||x.t.bind(x)||function(e){return e};u&&(c.context=u);var F=S(S({},(0,g.rV)()),x.options&&x.options.react),R=b||E.ns||P||x.options&&x.options.defaultNS;R="string"==typeof R?[R]:R||["translation"];var L=p||function e(t,r){if(!t)return"";var o="",a=$(t),u=r.transSupportBasicHtmlNodes&&r.transKeepBasicHtmlNodesFor?r.transKeepBasicHtmlNodesFor:[];return a.forEach(function(t,a){if("string"==typeof t)o+="".concat(t);else if((0,s.isValidElement)(t)){var l=Object.keys(t.props).length,c=u.indexOf(t.type)>-1,d=t.props.children;if(!d&&c&&0===l)o+="<".concat(t.type,"/>");else if(d||c&&0===l)if(t.props.i18nIsDynamicList)o+="<".concat(a,"></").concat(a,">");else if(c&&1===l&&"string"==typeof d)o+="<".concat(t.type,">").concat(d,"</").concat(t.type,">");else{var p=e(d,r);o+="<".concat(a,">").concat(p,"</").concat(a,">")}else o+="<".concat(a,"></").concat(a,">")}else if(null===t)(0,y.R8)("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===(0,i.A)(t)){var m=t.format,f=Object.keys(n(t,h));if(1===f.length){var g=m?"".concat(f[0],", ").concat(m):f[0];o+="{{".concat(g,"}}")}else(0,y.R8)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",t)}else(0,y.R8)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",t)}),o}(t,F)||F.transEmptyNodeValue||a,N=F.hashTransKey,_=a||(N?N(L):L),D=d?c.interpolation:{interpolation:S(S({},c.interpolation),{},{prefix:"#$?",suffix:"?$#"})},j=S(S(S(S({},c),{},{count:r},d),D),{},{defaultValue:L,ns:R}),K=function(e,t,r,n,o,a){if(""===t)return[];var u=n.transKeepBasicHtmlNodesFor||[],l=t&&new RegExp(u.join("|")).test(t);if(!e&&!l)return[t];var c={};!function e(t){$(t).forEach(function(t){"string"!=typeof t&&(w(t)?e(I(t)):"object"!==(0,i.A)(t)||(0,s.isValidElement)(t)||Object.assign(c,t))})}(e);var d=f("<0>".concat(t,"</0>")),p=S(S({},c),o);function m(e,t,r){var n=I(e),i=y(n,t.children,r);return"[object Array]"===Object.prototype.toString.call(n)&&n.every(function(e){return(0,s.isValidElement)(e)})&&0===i.length?n:i}function g(e,t,r,n,i){e.dummy&&(e.children=t),r.push((0,s.cloneElement)(e,S(S({},e.props),{},{key:n}),i?void 0:t))}function y(t,o,c){var d=$(t);return $(o).reduce(function(t,o,f){var h=o.children&&o.children[0]&&o.children[0].content&&r.services.interpolator.interpolate(o.children[0].content,p,r.language);if("tag"===o.type){var v,b,I,$=d[parseInt(o.name,10)];!$&&1===c.length&&c[0][o.name]&&($=c[0][o.name]),$||($={});var C=0!==Object.keys(o.attrs).length?(v={props:o.attrs},(I=S({},b=$)).props=Object.assign(v.props,b.props),I):$,k=(0,s.isValidElement)(C),A=k&&w(o,!0)&&!o.voidElement,q=l&&"object"===(0,i.A)(C)&&C.dummy&&!k,O="object"===(0,i.A)(e)&&null!==e&&Object.hasOwnProperty.call(e,o.name);if("string"==typeof C){var T=r.services.interpolator.interpolate(C,p,r.language);t.push(T)}else if(w(C)||A){var P=m(C,o,c);g(C,P,t,f)}else if(q){var x=y(d,o.children,c);t.push((0,s.cloneElement)(C,S(S({},C.props),{},{key:f}),x))}else if(Number.isNaN(parseFloat(o.name)))if(O){var E=m(C,o,c);g(C,E,t,f,o.voidElement)}else if(n.transSupportBasicHtmlNodes&&u.indexOf(o.name)>-1)if(o.voidElement)t.push((0,s.createElement)(o.name,{key:"".concat(o.name,"-").concat(f)}));else{var F=y(d,o.children,c);t.push((0,s.createElement)(o.name,{key:"".concat(o.name,"-").concat(f)},F))}else if(o.voidElement)t.push("<".concat(o.name," />"));else{var R=y(d,o.children,c);t.push("<".concat(o.name,">").concat(R,"</").concat(o.name,">"))}else if("object"!==(0,i.A)(C)||k)1===o.children.length&&h?t.push((0,s.cloneElement)(C,S(S({},C.props),{},{key:f}),h)):t.push((0,s.cloneElement)(C,S(S({},C.props),{},{key:f})));else{var L=o.children[0]?h:null;L&&t.push(L)}}else if("text"===o.type){var N=n.transWrapTextNodes,_=a?n.unescape(r.services.interpolator.interpolate(o.content,p,r.language)):r.services.interpolator.interpolate(o.content,p,r.language);N?t.push((0,s.createElement)(N,{key:"".concat(o.name,"-").concat(f)},_)):t.push(_)}return t},[])}return I(y([{dummy:!0,children:e||[]}],d,$(e||[]))[0])}(m||t,_?E(_,j):L,x,F,j,A),M=void 0!==o?o:F.defaultTransParent;return M?(0,s.createElement)(M,q,K):K}var k=r(47710);function A(){return(A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t,r){var n;return(n=function(e,t){if("object"!=q(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=q(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==q(n)?n:n+"")in e)?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var T=r(23520),P=r.n(T);function x(e){var t=e.i18n,r=e.defaultNS,n=e.children,i=(0,s.useMemo)(function(){return{i18n:t,defaultNS:r}},[t,r]);return(0,s.createElement)(g.gJ.Provider,{value:i},n)}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function F(e,t){if(e){if("string"==typeof e)return E(e,t);var r=({}).toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?E(e,t):void 0}}function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o,s,a=[],u=!0,l=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=o.call(r)).done)&&(a.push(n.value),a.length!==t);u=!0);}catch(e){l=!0,i=e}finally{try{if(!u&&null!=r.return&&(s=r.return(),Object(s)!==s))return}finally{if(l)throw i}}return a}}(e,t)||F(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.includes(r)||({}).propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var N={defaultNS:"common",errorStackTraceLimit:0,i18n:{defaultLocale:"en",locales:["en"]},get initImmediate(){return"u">typeof window},interpolation:{escapeValue:!1},load:"currentOnly",localeExtension:"json",localePath:"./public/locales",localeStructure:"{{lng}}/{{ns}}",react:{useSuspense:!1},reloadOnPrerender:!1,serializeConfig:!0,use:[]},_=["i18n"],D=["i18n"];function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var M=["backend","detection"],U=function(e){if("string"!=typeof(null==e?void 0:e.lng))throw Error("config.lng was not passed into createConfig");var t,r=e.i18n,n=L(e,_),i=N.i18n,o=K(K(K(K({},L(N,D)),n),i),r),s=o.defaultNS,a=o.lng,u=o.localeExtension,l=o.localePath,c=o.localeStructure,d=o.nonExplicitSupportedLngs,p=o.locales.filter(function(e){return"default"!==e});if("cimode"===a)return o;void 0===o.fallbackLng&&(o.fallbackLng=o.defaultLocale,"default"===o.fallbackLng&&(o.fallbackLng=R(p,1)[0]));var m=o.fallbackLng;if(d){var f=function(e,t){var r=R(t.split("-"),1)[0];return e[t]=[r],e};if("string"==typeof m)o.fallbackLng=o.locales.filter(function(e){return e.includes("-")}).reduce(f,{default:[m]});else if(Array.isArray(m))o.fallbackLng=o.locales.filter(function(e){return e.includes("-")}).reduce(f,{default:m});else if("object"===q(m))o.fallbackLng=Object.entries(o.fallbackLng).reduce(function(e,t){var r=R(t,2),n=r[0],i=r[1];return e[n]=n.includes("-")?Array.from(new Set([n.split("-")[0]].concat(function(e){if(Array.isArray(e))return E(e)}(i)||function(e){if("u">typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(i)||F(i)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))):i,e},m);else if("function"==typeof m)throw Error("If nonExplicitSupportedLngs is true, no functions are allowed for fallbackLng")}return(null==e||null==(t=e.use)?void 0:t.some(function(e){return"backend"===e.type}))||("string"==typeof l?o.backend={addPath:"".concat(l,"/").concat(c,".missing.").concat(u),loadPath:"".concat(l,"/").concat(c,".").concat(u)}:"function"==typeof l&&(o.backend={addPath:function(e,t){return l(e,t,!0)},loadPath:function(e,t){return l(e,t,!1)}})),"string"==typeof o.ns||Array.isArray(o.ns)||(o.ns=[s]),M.forEach(function(t){e[t]&&(o[t]=K(K({},o[t]),e[t]))}),o};function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Q(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function B(e){var t=function(e,t){if("object"!=V(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=V(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==V(t)?t:t+""}function G(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,B(n.key),n)}}function z(e,t,r){return t&&G(e.prototype,t),r&&G(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function H(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function W(e,t){return(W=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function Y(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&W(e,t)}function J(e,t){if(t&&("object"==V(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return H(e)}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e,t,r){return(t=B(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function et(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function er(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?et(Object(r),!0).forEach(function(t){Z(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):et(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var en={type:"logger",log:function(e){this.output("log",e)},warn:function(e){this.output("warn",e)},error:function(e){this.output("error",e)},output:function(e,t){console&&console[e]&&console[e].apply(console,t)}},ei=new(function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Q(this,e),this.init(t,r)}return z(e,[{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||en,this.options=t,this.debug=t.debug}},{key:"setDebug",value:function(e){this.debug=e}},{key:"log",value:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.forward(t,"log","",!0)}},{key:"warn",value:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.forward(t,"warn","",!0)}},{key:"error",value:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.forward(t,"error","")}},{key:"deprecate",value:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(e,t,r,n){return n&&!this.debug?null:("string"==typeof e[0]&&(e[0]="".concat(r).concat(this.prefix," ").concat(e[0])),this.logger[t](e))}},{key:"create",value:function(t){return new e(this.logger,er(er({},{prefix:"".concat(this.prefix,":").concat(t,":")}),this.options))}},{key:"clone",value:function(t){return(t=t||this.options).prefix=t.prefix||this.prefix,new e(this.logger,t)}}]),e}()),eo=function(){function e(){Q(this,e),this.observers={}}return z(e,[{key:"on",value:function(e,t){var r=this;return e.split(" ").forEach(function(e){r.observers[e]=r.observers[e]||[],r.observers[e].push(t)}),this}},{key:"off",value:function(e,t){if(this.observers[e]){if(!t)return void delete this.observers[e];this.observers[e]=this.observers[e].filter(function(e){return e!==t})}}},{key:"emit",value:function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];this.observers[e]&&[].concat(this.observers[e]).forEach(function(e){e.apply(void 0,r)}),this.observers["*"]&&[].concat(this.observers["*"]).forEach(function(t){t.apply(t,[e].concat(r))})}}]),e}();function es(){var e,t,r=new Promise(function(r,n){e=r,t=n});return r.resolve=e,r.reject=t,r}function ea(e){return null==e?"":""+e}function eu(e,t,r){function n(e){return e&&e.indexOf("###")>-1?e.replace(/###/g,"."):e}function i(){return!e||"string"==typeof e}for(var o="string"!=typeof t?[].concat(t):t.split(".");o.length>1;){if(i())return{};var s=n(o.shift());!e[s]&&r&&(e[s]=new r),e=Object.prototype.hasOwnProperty.call(e,s)?e[s]:{}}return i()?{}:{obj:e,k:n(o.shift())}}function el(e,t,r){var n=eu(e,t,Object);n.obj[n.k]=r}function ec(e,t){var r=eu(e,t),n=r.obj,i=r.k;if(n)return n[i]}function ed(e,t,r){var n=ec(e,r);return void 0!==n?n:ec(t,r)}function ep(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var em={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function ef(e){return"string"==typeof e?e.replace(/[&<>"'\/]/g,function(e){return em[e]}):e}var eg="u">typeof window&&window.navigator&&void 0===window.navigator.userAgentData&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,ey=[" ",",","?","!",";"];function eh(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function ev(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?eh(Object(r),!0).forEach(function(t){Z(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):eh(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var eb=function(e){Y(n,e);var t,r=(t=function(){if("u"<typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=X(n);return e=t?Reflect.construct(r,arguments,X(this).constructor):r.apply(this,arguments),J(this,e)});function n(e){var t,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};return Q(this,n),t=r.call(this),eg&&eo.call(H(t)),t.data=e||{},t.options=i,void 0===t.options.keySeparator&&(t.options.keySeparator="."),void 0===t.options.ignoreJSONStructure&&(t.options.ignoreJSONStructure=!0),t}return z(n,[{key:"addNamespaces",value:function(e){0>this.options.ns.indexOf(e)&&this.options.ns.push(e)}},{key:"removeNamespaces",value:function(e){var t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}},{key:"getResource",value:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=void 0!==n.keySeparator?n.keySeparator:this.options.keySeparator,o=void 0!==n.ignoreJSONStructure?n.ignoreJSONStructure:this.options.ignoreJSONStructure,s=[e,t];r&&"string"!=typeof r&&(s=s.concat(r)),r&&"string"==typeof r&&(s=s.concat(i?r.split(i):r)),e.indexOf(".")>-1&&(s=e.split("."));var a=ec(this.data,s);return a||!o||"string"!=typeof r?a:function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";if(t){if(t[r])return t[r];for(var i=r.split(n),o=t,s=0;s<i.length;++s){if(!o||"string"==typeof o[i[s]]&&s+1<i.length)return;if(void 0===o[i[s]]){for(var a=2,u=i.slice(s,s+a).join(n),l=o[u];void 0===l&&i.length>s+a;)a++,l=o[u=i.slice(s,s+a).join(n)];if(void 0===l)return;if(null===l)return null;if(r.endsWith(u)){if("string"==typeof l)return l;if(u&&"string"==typeof l[u])return l[u]}var c=i.slice(s+a).join(n);if(c)return e(l,c,n);return}o=o[i[s]]}return o}}(this.data&&this.data[e]&&this.data[e][t],r,i)}},{key:"addResource",value:function(e,t,r,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1},o=this.options.keySeparator;void 0===o&&(o=".");var s=[e,t];r&&(s=s.concat(o?r.split(o):r)),e.indexOf(".")>-1&&(s=e.split("."),n=t,t=s[1]),this.addNamespaces(t),el(this.data,s,n),i.silent||this.emit("added",e,t,r,n)}},{key:"addResources",value:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(var i in r)("string"==typeof r[i]||"[object Array]"===Object.prototype.toString.apply(r[i]))&&this.addResource(e,t,i,r[i],{silent:!0});n.silent||this.emit("added",e,t,r)}},{key:"addResourceBundle",value:function(e,t,r,n,i){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1},s=[e,t];e.indexOf(".")>-1&&(s=e.split("."),n=r,r=t,t=s[1]),this.addNamespaces(t);var a=ec(this.data,s)||{};n?function e(t,r,n){for(var i in r)"__proto__"!==i&&"constructor"!==i&&(i in t?"string"==typeof t[i]||t[i]instanceof String||"string"==typeof r[i]||r[i]instanceof String?n&&(t[i]=r[i]):e(t[i],r[i],n):t[i]=r[i]);return t}(a,r,i):a=ev(ev({},a),r),el(this.data,s,a),o.silent||this.emit("added",e,t,r)}},{key:"removeResourceBundle",value:function(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}},{key:"hasResourceBundle",value:function(e,t){return void 0!==this.getResource(e,t)}},{key:"getResourceBundle",value:function(e,t){return(t||(t=this.options.defaultNS),"v1"===this.options.compatibilityAPI)?ev(ev({},{}),this.getResource(e,t)):this.getResource(e,t)}},{key:"getDataByLanguage",value:function(e){return this.data[e]}},{key:"hasLanguageSomeTranslations",value:function(e){var t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(function(e){return t[e]&&Object.keys(t[e]).length>0})}},{key:"toJSON",value:function(){return this.data}}]),n}(eo),eS={processors:{},addPostProcessor:function(e){this.processors[e.name]=e},handle:function(e,t,r,n,i){var o=this;return e.forEach(function(e){o.processors[e]&&(t=o.processors[e].process(t,r,n,i))}),t}};function ew(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function eI(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ew(Object(r),!0).forEach(function(t){Z(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ew(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var e$={},eC=function(e){Y(n,e);var t,r=(t=function(){if("u"<typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=X(n);return e=t?Reflect.construct(r,arguments,X(this).constructor):r.apply(this,arguments),J(this,e)});function n(e){var t,i,o,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Q(this,n),o=r.call(this),eg&&eo.call(H(o)),t=["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],i=H(o),t.forEach(function(t){e[t]&&(i[t]=e[t])}),o.options=s,void 0===o.options.keySeparator&&(o.options.keySeparator="."),o.logger=ei.create("translator"),o}return z(n,[{key:"changeLanguage",value:function(e){e&&(this.language=e)}},{key:"exists",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};if(null==e)return!1;var r=this.resolve(e,t);return r&&void 0!==r.res}},{key:"extractFromKey",value:function(e,t){var r=void 0!==t.nsSeparator?t.nsSeparator:this.options.nsSeparator;void 0===r&&(r=":");var n=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,i=t.ns||this.options.defaultNS||[],o=r&&e.indexOf(r)>-1,s=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!function(e,t,r){t=t||"",r=r||"";var n=ey.filter(function(e){return 0>t.indexOf(e)&&0>r.indexOf(e)});if(0===n.length)return!0;var i=new RegExp("(".concat(n.map(function(e){return"?"===e?"\\?":e}).join("|"),")")),o=!i.test(e);if(!o){var s=e.indexOf(r);s>0&&!i.test(e.substring(0,s))&&(o=!0)}return o}(e,r,n);if(o&&!s){var a=e.match(this.interpolator.nestingRegexp);if(a&&a.length>0)return{key:e,namespaces:i};var u=e.split(r);(r!==n||r===n&&this.options.ns.indexOf(u[0])>-1)&&(i=u.shift()),e=u.join(n)}return"string"==typeof i&&(i=[i]),{key:e,namespaces:i}}},{key:"translate",value:function(e,t,r){var i=this;if("object"!==V(t)&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),t||(t={}),null==e)return"";Array.isArray(e)||(e=[String(e)]);var o=void 0!==t.returnDetails?t.returnDetails:this.options.returnDetails,s=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,a=this.extractFromKey(e[e.length-1],t),u=a.key,l=a.namespaces,c=l[l.length-1],d=t.lng||this.language,p=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d&&"cimode"===d.toLowerCase()){if(p){var m=t.nsSeparator||this.options.nsSeparator;return o?(f.res="".concat(c).concat(m).concat(u),f):"".concat(c).concat(m).concat(u)}return o?(f.res=u,f):u}var f=this.resolve(e,t),g=f&&f.res,y=f&&f.usedKey||u,h=f&&f.exactUsedKey||u,v=Object.prototype.toString.apply(g),b=void 0!==t.joinArrays?t.joinArrays:this.options.joinArrays,S=!this.i18nFormat||this.i18nFormat.handleAsObject,w="string"!=typeof g&&"boolean"!=typeof g&&"number"!=typeof g;if(S&&g&&w&&0>["[object Number]","[object Function]","[object RegExp]"].indexOf(v)&&("string"!=typeof b||"[object Array]"!==v)){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");var I=this.options.returnedObjectHandler?this.options.returnedObjectHandler(y,g,eI(eI({},t),{},{ns:l})):"key '".concat(u," (").concat(this.language,")' returned an object instead of string.");return o?(f.res=I,f):I}if(s){var $="[object Array]"===v,C=$?[]:{},k=$?h:y;for(var A in g)if(Object.prototype.hasOwnProperty.call(g,A)){var q="".concat(k).concat(s).concat(A);C[A]=this.translate(q,eI(eI({},t),{joinArrays:!1,ns:l})),C[A]===q&&(C[A]=g[A])}g=C}}else if(S&&"string"==typeof b&&"[object Array]"===v)(g=g.join(b))&&(g=this.extendTranslation(g,e,t,r));else{var O=!1,T=!1,P=void 0!==t.count&&"string"!=typeof t.count,x=n.hasDefaultValue(t),E=P?this.pluralResolver.getSuffix(d,t.count,t):"",F=t["defaultValue".concat(E)]||t.defaultValue;!this.isValidLookup(g)&&x&&(O=!0,g=F),this.isValidLookup(g)||(T=!0,g=u);var R=(t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&T?void 0:g,L=x&&F!==g&&this.options.updateMissing;if(T||O||L){if(this.logger.log(L?"updateKey":"missingKey",d,c,u,L?F:g),s){var N=this.resolve(u,eI(eI({},t),{},{keySeparator:!1}));N&&N.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}var _=[],D=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if("fallback"===this.options.saveMissingTo&&D&&D[0])for(var j=0;j<D.length;j++)_.push(D[j]);else"all"===this.options.saveMissingTo?_=this.languageUtils.toResolveHierarchy(t.lng||this.language):_.push(t.lng||this.language);var K=function(e,r,n){var o=x&&n!==g?n:R;i.options.missingKeyHandler?i.options.missingKeyHandler(e,c,r,o,L,t):i.backendConnector&&i.backendConnector.saveMissing&&i.backendConnector.saveMissing(e,c,r,o,L,t),i.emit("missingKey",e,c,r,g)};this.options.saveMissing&&(this.options.saveMissingPlurals&&P?_.forEach(function(e){i.pluralResolver.getSuffixes(e,t).forEach(function(r){K([e],u+r,t["defaultValue".concat(r)]||F)})}):K(_,u,F))}g=this.extendTranslation(g,e,t,f,r),T&&g===u&&this.options.appendNamespaceToMissingKey&&(g="".concat(c,":").concat(u)),(T||O)&&this.options.parseMissingKeyHandler&&(g="v1"!==this.options.compatibilityAPI?this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?"".concat(c,":").concat(u):u,O?g:void 0):this.options.parseMissingKeyHandler(g))}return o?(f.res=g,f):g}},{key:"extendTranslation",value:function(e,t,r,n,i){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,eI(eI({},this.options.interpolation.defaultVariables),r),n.usedLng,n.usedNS,n.usedKey,{resolved:n});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init(eI(eI({},r),{interpolation:eI(eI({},this.options.interpolation),r.interpolation)}));var s,a="string"==typeof e&&(r&&r.interpolation&&void 0!==r.interpolation.skipOnVariables?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);if(a){var u=e.match(this.interpolator.nestingRegexp);s=u&&u.length}var l=r.replace&&"string"!=typeof r.replace?r.replace:r;if(this.options.interpolation.defaultVariables&&(l=eI(eI({},this.options.interpolation.defaultVariables),l)),e=this.interpolator.interpolate(e,l,r.lng||this.language,r),a){var c=e.match(this.interpolator.nestingRegexp);s<(c&&c.length)&&(r.nest=!1)}!1!==r.nest&&(e=this.interpolator.nest(e,function(){for(var e=arguments.length,n=Array(e),s=0;s<e;s++)n[s]=arguments[s];return i&&i[0]===n[0]&&!r.context?(o.logger.warn("It seems you are nesting recursively key: ".concat(n[0]," in key: ").concat(t[0])),null):o.translate.apply(o,n.concat([t]))},r)),r.interpolation&&this.interpolator.reset()}var d=r.postProcess||this.options.postProcess,p="string"==typeof d?[d]:d;return null!=e&&p&&p.length&&!1!==r.applyPostProcessor&&(e=eS.handle(p,e,t,this.options&&this.options.postProcessPassResolved?eI({i18nResolved:n},r):r,this)),e}},{key:"resolve",value:function(e){var t,r,n,i,o,s=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof e&&(e=[e]),e.forEach(function(e){if(!s.isValidLookup(t)){var u=s.extractFromKey(e,a),l=u.key;r=l;var c=u.namespaces;s.options.fallbackNS&&(c=c.concat(s.options.fallbackNS));var d=void 0!==a.count&&"string"!=typeof a.count,p=d&&!a.ordinal&&0===a.count&&s.pluralResolver.shouldUseIntlApi(),m=void 0!==a.context&&("string"==typeof a.context||"number"==typeof a.context)&&""!==a.context,f=a.lngs?a.lngs:s.languageUtils.toResolveHierarchy(a.lng||s.language,a.fallbackLng);c.forEach(function(e){s.isValidLookup(t)||(o=e,!e$["".concat(f[0],"-").concat(e)]&&s.utils&&s.utils.hasLoadedNamespace&&!s.utils.hasLoadedNamespace(o)&&(e$["".concat(f[0],"-").concat(e)]=!0,s.logger.warn('key "'.concat(r,'" for languages "').concat(f.join(", "),'" won\'t get resolved as namespace "').concat(o,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),f.forEach(function(r){if(!s.isValidLookup(t)){i=r;var o,u=[l];if(s.i18nFormat&&s.i18nFormat.addLookupKeys)s.i18nFormat.addLookupKeys(u,l,r,e,a);else{d&&(c=s.pluralResolver.getSuffix(r,a.count,a));var c,f="".concat(s.options.pluralSeparator,"zero");if(d&&(u.push(l+c),p&&u.push(l+f)),m){var g="".concat(l).concat(s.options.contextSeparator).concat(a.context);u.push(g),d&&(u.push(g+c),p&&u.push(g+f))}}for(;o=u.pop();)s.isValidLookup(t)||(n=o,t=s.getResource(r,e,o,a))}}))})}}),{res:t,usedKey:r,exactUsedKey:n,usedLng:i,usedNS:o}}},{key:"isValidLookup",value:function(e){return void 0!==e&&!(!this.options.returnNull&&null===e)&&!(!this.options.returnEmptyString&&""===e)}},{key:"getResource",value:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,r,n):this.resourceStore.getResource(e,t,r,n)}}],[{key:"hasDefaultValue",value:function(e){var t="defaultValue";for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t===r.substring(0,t.length)&&void 0!==e[r])return!0;return!1}}]),n}(eo);function ek(e){return e.charAt(0).toUpperCase()+e.slice(1)}var eA=function(){function e(t){Q(this,e),this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=ei.create("languageUtils")}return z(e,[{key:"getScriptPartFromCode",value:function(e){if(!e||0>e.indexOf("-"))return null;var t=e.split("-");return 2===t.length||(t.pop(),"x"===t[t.length-1].toLowerCase())?null:this.formatLanguageCode(t.join("-"))}},{key:"getLanguagePartFromCode",value:function(e){if(!e||0>e.indexOf("-"))return e;var t=e.split("-");return this.formatLanguageCode(t[0])}},{key:"formatLanguageCode",value:function(e){if("string"==typeof e&&e.indexOf("-")>-1){var t=["hans","hant","latn","cyrl","cans","mong","arab"],r=e.split("-");return this.options.lowerCaseLng?r=r.map(function(e){return e.toLowerCase()}):2===r.length?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),t.indexOf(r[1].toLowerCase())>-1&&(r[1]=ek(r[1].toLowerCase()))):3===r.length&&(r[0]=r[0].toLowerCase(),2===r[1].length&&(r[1]=r[1].toUpperCase()),"sgn"!==r[0]&&2===r[2].length&&(r[2]=r[2].toUpperCase()),t.indexOf(r[1].toLowerCase())>-1&&(r[1]=ek(r[1].toLowerCase())),t.indexOf(r[2].toLowerCase())>-1&&(r[2]=ek(r[2].toLowerCase()))),r.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}},{key:"isSupportedCode",value:function(e){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}},{key:"getBestMatchFromCodes",value:function(e){var t,r=this;return e?(e.forEach(function(e){if(!t){var n=r.formatLanguageCode(e);(!r.options.supportedLngs||r.isSupportedCode(n))&&(t=n)}}),!t&&this.options.supportedLngs&&e.forEach(function(e){if(!t){var n=r.getLanguagePartFromCode(e);if(r.isSupportedCode(n))return t=n;t=r.options.supportedLngs.find(function(e){if(0===e.indexOf(n))return e})}}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t):null}},{key:"getFallbackCodes",value:function(e,t){if(!e)return[];if("function"==typeof e&&(e=e(t)),"string"==typeof e&&(e=[e]),"[object Array]"===Object.prototype.toString.apply(e))return e;if(!t)return e.default||[];var r=e[t];return r||(r=e[this.getScriptPartFromCode(t)]),r||(r=e[this.formatLanguageCode(t)]),r||(r=e[this.getLanguagePartFromCode(t)]),r||(r=e.default),r||[]}},{key:"toResolveHierarchy",value:function(e,t){var r=this,n=this.getFallbackCodes(t||this.options.fallbackLng||[],e),i=[],o=function(e){e&&(r.isSupportedCode(e)?i.push(e):r.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)))};return"string"==typeof e&&e.indexOf("-")>-1?("languageOnly"!==this.options.load&&o(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&o(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&o(this.getLanguagePartFromCode(e))):"string"==typeof e&&o(this.formatLanguageCode(e)),n.forEach(function(e){0>i.indexOf(e)&&o(r.formatLanguageCode(e))}),i}}]),e}(),eq=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],eO={1:function(e){return Number(e>1)},2:function(e){return Number(1!=e)},3:function(e){return 0},4:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},5:function(e){return Number(0==e?0:1==e?1:2==e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5)},6:function(e){return Number(1==e?0:e>=2&&e<=4?1:2)},7:function(e){return Number(1==e?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},8:function(e){return Number(1==e?0:2==e?1:8!=e&&11!=e?2:3)},9:function(e){return Number(e>=2)},10:function(e){return Number(1==e?0:2==e?1:e<7?2:e<11?3:4)},11:function(e){return Number(1==e||11==e?0:2==e||12==e?1:e>2&&e<20?2:3)},12:function(e){return Number(e%10!=1||e%100==11)},13:function(e){return Number(0!==e)},14:function(e){return Number(1==e?0:2==e?1:3==e?2:3)},15:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2)},16:function(e){return Number(e%10==1&&e%100!=11?0:0!==e?1:2)},17:function(e){return Number(+(1!=e&&(e%10!=1||e%100==11)))},18:function(e){return Number(0==e?0:1==e?1:2)},19:function(e){return Number(1==e?0:0==e||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3)},20:function(e){return Number(1==e?0:0==e||e%100>0&&e%100<20?1:2)},21:function(e){return Number(e%100==1?1:e%100==2?2:3*(e%100==3||e%100==4))},22:function(e){return Number(1==e?0:2==e?1:(e<0||e>10)&&e%10==0?2:3)}},eT=["v1","v2","v3"],eP={zero:0,one:1,two:2,few:3,many:4,other:5},ex=function(){function e(t){var r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Q(this,e),this.languageUtils=t,this.options=n,this.logger=ei.create("pluralResolver"),(!this.options.compatibilityJSON||"v4"===this.options.compatibilityJSON)&&("u"<typeof Intl||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=(r={},eq.forEach(function(e){e.lngs.forEach(function(t){r[t]={numbers:e.nr,plurals:eO[e.fc]}})}),r)}return z(e,[{key:"addRule",value:function(e,t){this.rules[e]=t}},{key:"getRule",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(e,{type:t.ordinal?"ordinal":"cardinal"})}catch(e){return}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}},{key:"needsPlural",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=this.getRule(e,t);return this.shouldUseIntlApi()?r&&r.resolvedOptions().pluralCategories.length>1:r&&r.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.getSuffixes(e,r).map(function(e){return"".concat(t).concat(e)})}},{key:"getSuffixes",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.getRule(e,r);return n?this.shouldUseIntlApi()?n.resolvedOptions().pluralCategories.sort(function(e,t){return eP[e]-eP[t]}).map(function(e){return"".concat(t.options.prepend).concat(e)}):n.numbers.map(function(n){return t.getSuffix(e,n,r)}):[]}},{key:"getSuffix",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=this.getRule(e,r);return n?this.shouldUseIntlApi()?"".concat(this.options.prepend).concat(n.select(t)):this.getSuffixRetroCompatible(n,t):(this.logger.warn("no plural rule found for: ".concat(e)),"")}},{key:"getSuffixRetroCompatible",value:function(e,t){var r=this,n=e.noAbs?e.plurals(t):e.plurals(Math.abs(t)),i=e.numbers[n];this.options.simplifyPluralSuffix&&2===e.numbers.length&&1===e.numbers[0]&&(2===i?i="plural":1===i&&(i=""));var o=function(){return r.options.prepend&&i.toString()?r.options.prepend+i.toString():i.toString()};return"v1"===this.options.compatibilityJSON?1===i?"":"number"==typeof i?"_plural_".concat(i.toString()):o():"v2"===this.options.compatibilityJSON||this.options.simplifyPluralSuffix&&2===e.numbers.length&&1===e.numbers[0]?o():this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString()}},{key:"shouldUseIntlApi",value:function(){return!eT.includes(this.options.compatibilityJSON)}}]),e}();function eE(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function eF(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?eE(Object(r),!0).forEach(function(t){Z(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):eE(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var eR=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Q(this,e),this.logger=ei.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||function(e){return e},this.init(t)}return z(e,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});var t=e.interpolation;this.escape=void 0!==t.escape?t.escape:ef,this.escapeValue=void 0===t.escapeValue||t.escapeValue,this.useRawValueToEscape=void 0!==t.useRawValueToEscape&&t.useRawValueToEscape,this.prefix=t.prefix?ep(t.prefix):t.prefixEscaped||"{{",this.suffix=t.suffix?ep(t.suffix):t.suffixEscaped||"}}",this.formatSeparator=t.formatSeparator?t.formatSeparator:t.formatSeparator||",",this.unescapePrefix=t.unescapeSuffix?"":t.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":t.unescapeSuffix||"",this.nestingPrefix=t.nestingPrefix?ep(t.nestingPrefix):t.nestingPrefixEscaped||ep("$t("),this.nestingSuffix=t.nestingSuffix?ep(t.nestingSuffix):t.nestingSuffixEscaped||ep(")"),this.nestingOptionsSeparator=t.nestingOptionsSeparator?t.nestingOptionsSeparator:t.nestingOptionsSeparator||",",this.maxReplaces=t.maxReplaces?t.maxReplaces:1e3,this.alwaysFormat=void 0!==t.alwaysFormat&&t.alwaysFormat,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var e="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=RegExp(e,"g");var t="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=RegExp(t,"g");var r="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=RegExp(r,"g")}},{key:"interpolate",value:function(e,t,r,n){var i,o,s,a=this,u=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function l(e){return e.replace(/\$/g,"$$$$")}var c=function(e){if(0>e.indexOf(a.formatSeparator)){var i=ed(t,u,e);return a.alwaysFormat?a.format(i,void 0,r,eF(eF(eF({},n),t),{},{interpolationkey:e})):i}var o=e.split(a.formatSeparator),s=o.shift().trim(),l=o.join(a.formatSeparator).trim();return a.format(ed(t,u,s),l,r,eF(eF(eF({},n),t),{},{interpolationkey:s}))};this.resetRegExp();var d=n&&n.missingInterpolationHandler||this.options.missingInterpolationHandler,p=n&&n.interpolation&&void 0!==n.interpolation.skipOnVariables?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:function(e){return l(e)}},{regex:this.regexp,safeValue:function(e){return a.escapeValue?l(a.escape(e)):l(e)}}].forEach(function(t){for(s=0;i=t.regex.exec(e);){var r=i[1].trim();if(void 0===(o=c(r)))if("function"==typeof d){var u=d(e,i,n);o="string"==typeof u?u:""}else if(n&&n.hasOwnProperty(r))o="";else if(p){o=i[0];continue}else a.logger.warn("missed to pass in variable ".concat(r," for interpolating ").concat(e)),o="";else"string"==typeof o||a.useRawValueToEscape||(o=ea(o));var l=t.safeValue(o);if(e=e.replace(i[0],l),p?(t.regex.lastIndex+=o.length,t.regex.lastIndex-=i[0].length):t.regex.lastIndex=0,++s>=a.maxReplaces)break}}),e}},{key:"nest",value:function(e,t){var r,n,i=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=eF({},o);function a(e,t){var r=this.nestingOptionsSeparator;if(0>e.indexOf(r))return e;var n=e.split(new RegExp("".concat(r,"[ ]*{"))),i="{".concat(n[1]);e=n[0];var o=(i=this.interpolate(i,s)).match(/'/g),a=i.match(/"/g);(o&&o.length%2==0&&!a||a.length%2!=0)&&(i=i.replace(/'/g,'"'));try{s=JSON.parse(i),t&&(s=eF(eF({},t),s))}catch(t){return this.logger.warn("failed parsing options string in nesting for key ".concat(e),t),"".concat(e).concat(r).concat(i)}return delete s.defaultValue,e}for(s.applyPostProcessor=!1,delete s.defaultValue;r=this.nestingRegexp.exec(e);){var u=[],l=!1;if(-1!==r[0].indexOf(this.formatSeparator)&&!/{.*}/.test(r[1])){var c=r[1].split(this.formatSeparator).map(function(e){return e.trim()});r[1]=c.shift(),u=c,l=!0}if((n=t(a.call(this,r[1].trim(),s),s))&&r[0]===e&&"string"!=typeof n)return n;"string"!=typeof n&&(n=ea(n)),n||(this.logger.warn("missed to resolve ".concat(r[1]," for nesting ").concat(e)),n=""),l&&(n=u.reduce(function(e,t){return i.format(e,t,o.lng,eF(eF({},o),{},{interpolationkey:r[1].trim()}))},n.trim())),e=e.replace(r[0],n),this.regexp.lastIndex=0}return e}}]),e}();function eL(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function eN(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?eL(Object(r),!0).forEach(function(t){Z(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):eL(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function e_(e){var t={};return function(r,n,i){var o=n+JSON.stringify(i),s=t[o];return s||(s=e(n,i),t[o]=s),s(r)}}var eD=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Q(this,e),this.logger=ei.create("formatter"),this.options=t,this.formats={number:e_(function(e,t){var r=new Intl.NumberFormat(e,t);return function(e){return r.format(e)}}),currency:e_(function(e,t){var r=new Intl.NumberFormat(e,eN(eN({},t),{},{style:"currency"}));return function(e){return r.format(e)}}),datetime:e_(function(e,t){var r=new Intl.DateTimeFormat(e,eN({},t));return function(e){return r.format(e)}}),relativetime:e_(function(e,t){var r=new Intl.RelativeTimeFormat(e,eN({},t));return function(e){return r.format(e,t.range||"day")}}),list:e_(function(e,t){var r=new Intl.ListFormat(e,eN({},t));return function(e){return r.format(e)}})},this.init(t)}return z(e,[{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}},r=t.interpolation;this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||","}},{key:"add",value:function(e,t){this.formats[e.toLowerCase().trim()]=t}},{key:"addCached",value:function(e,t){this.formats[e.toLowerCase().trim()]=e_(t)}},{key:"format",value:function(e,t,r,n){var i=this;return t.split(this.formatSeparator).reduce(function(e,t){var o=function(e){var t=e.toLowerCase().trim(),r={};if(e.indexOf("(")>-1){var n=e.split("(");t=n[0].toLowerCase().trim();var i=n[1].substring(0,n[1].length-1);"currency"===t&&0>i.indexOf(":")?r.currency||(r.currency=i.trim()):"relativetime"===t&&0>i.indexOf(":")?r.range||(r.range=i.trim()):i.split(";").forEach(function(e){if(e){var t,n=function(e){if(Array.isArray(e))return e}(t=e.split(":"))||function(e){if("u">typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e){if(e){if("string"==typeof e)return ee(e,void 0);var t=({}).toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ee(e,void 0):void 0}}(t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),i=n[0],o=n.slice(1).join(":").trim().replace(/^'+|'+$/g,"");r[i.trim()]||(r[i.trim()]=o),"false"===o&&(r[i.trim()]=!1),"true"===o&&(r[i.trim()]=!0),isNaN(o)||(r[i.trim()]=parseInt(o,10))}})}return{formatName:t,formatOptions:r}}(t),s=o.formatName,a=o.formatOptions;if(i.formats[s]){var u=e;try{var l=n&&n.formatParams&&n.formatParams[n.interpolationkey]||{},c=l.locale||l.lng||n.locale||n.lng||r;u=i.formats[s](e,c,eN(eN(eN({},a),n),l))}catch(e){i.logger.warn(e)}return u}return i.logger.warn("there was no format function for ".concat(s)),e},e)}}]),e}();function ej(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function eK(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ej(Object(r),!0).forEach(function(t){Z(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ej(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var eM=function(e){Y(n,e);var t,r=(t=function(){if("u"<typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=X(n);return e=t?Reflect.construct(r,arguments,X(this).constructor):r.apply(this,arguments),J(this,e)});function n(e,t,i){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return Q(this,n),o=r.call(this),eg&&eo.call(H(o)),o.backend=e,o.store=t,o.services=i,o.languageUtils=i.languageUtils,o.options=s,o.logger=ei.create("backendConnector"),o.waitingReads=[],o.maxParallelReads=s.maxParallelReads||10,o.readingCalls=0,o.maxRetries=s.maxRetries>=0?s.maxRetries:5,o.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,o.state={},o.queue=[],o.backend&&o.backend.init&&o.backend.init(i,s.backend,s),o}return z(n,[{key:"queueLoad",value:function(e,t,r,n){var i=this,o={},s={},a={},u={};return e.forEach(function(e){var n=!0;t.forEach(function(t){var a="".concat(e,"|").concat(t);!r.reload&&i.store.hasResourceBundle(e,t)?i.state[a]=2:i.state[a]<0||(1===i.state[a]?void 0===s[a]&&(s[a]=!0):(i.state[a]=1,n=!1,void 0===s[a]&&(s[a]=!0),void 0===o[a]&&(o[a]=!0),void 0===u[t]&&(u[t]=!0)))}),n||(a[e]=!0)}),(Object.keys(o).length||Object.keys(s).length)&&this.queue.push({pending:s,pendingCount:Object.keys(s).length,loaded:{},errors:[],callback:n}),{toLoad:Object.keys(o),pending:Object.keys(s),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(u)}}},{key:"loaded",value:function(e,t,r){var n=e.split("|"),i=n[0],o=n[1];t&&this.emit("failedLoading",i,o,t),r&&this.store.addResourceBundle(i,o,r),this.state[e]=t?-1:2;var s={};this.queue.forEach(function(r){var n,a,u,l;n=r.loaded,(u=(a=eu(n,[i],Object)).obj)[l=a.k]=u[l]||[],u[l].push(o),void 0!==r.pending[e]&&(delete r.pending[e],r.pendingCount--),t&&r.errors.push(t),0!==r.pendingCount||r.done||(Object.keys(r.loaded).forEach(function(e){s[e]||(s[e]={});var t=r.loaded[e];t.length&&t.forEach(function(t){void 0===s[e][t]&&(s[e][t]=!0)})}),r.done=!0,r.errors.length?r.callback(r.errors):r.callback())}),this.emit("loaded",s),this.queue=this.queue.filter(function(e){return!e.done})}},{key:"read",value:function(e,t,r){var n=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.retryTimeout,s=arguments.length>5?arguments[5]:void 0;return e.length?this.readingCalls>=this.maxParallelReads?void this.waitingReads.push({lng:e,ns:t,fcName:r,tried:i,wait:o,callback:s}):(this.readingCalls++,this.backend[r](e,t,function(a,u){if(n.readingCalls--,n.waitingReads.length>0){var l=n.waitingReads.shift();n.read(l.lng,l.ns,l.fcName,l.tried,l.wait,l.callback)}a&&u&&i<n.maxRetries?setTimeout(function(){n.read.call(n,e,t,r,i+1,2*o,s)},o):s(a,u)})):s(null,{})}},{key:"prepareLoading",value:function(e,t){var r=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();"string"==typeof e&&(e=this.languageUtils.toResolveHierarchy(e)),"string"==typeof t&&(t=[t]);var o=this.queueLoad(e,t,n,i);if(!o.toLoad.length)return o.pending.length||i(),null;o.toLoad.forEach(function(e){r.loadOne(e)})}},{key:"load",value:function(e,t,r){this.prepareLoading(e,t,{},r)}},{key:"reload",value:function(e,t,r){this.prepareLoading(e,t,{reload:!0},r)}},{key:"loadOne",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e.split("|"),i=n[0],o=n[1];this.read(i,o,"read",void 0,void 0,function(n,s){n&&t.logger.warn("".concat(r,"loading namespace ").concat(o," for language ").concat(i," failed"),n),!n&&s&&t.logger.log("".concat(r,"loaded namespace ").concat(o," for language ").concat(i),s),t.loaded(e,n,s)})}},{key:"saveMissing",value:function(e,t,r,n,i){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t)?this.logger.warn('did not save key "'.concat(r,'" as the namespace "').concat(t,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"):null==r||""===r||(this.backend&&this.backend.create&&this.backend.create(e,t,r,n,null,eK(eK({},o),{},{isUpdate:i})),e&&e[0]&&this.store.addResource(e[0],t,r,n))}}]),n}(eo);function eU(e){return"string"==typeof e.ns&&(e.ns=[e.ns]),"string"==typeof e.fallbackLng&&(e.fallbackLng=[e.fallbackLng]),"string"==typeof e.fallbackNS&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&0>e.supportedLngs.indexOf("cimode")&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function eV(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function eQ(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?eV(Object(r),!0).forEach(function(t){Z(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):eV(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function eB(){}var eG=function(e){Y(n,e);var t,r=(t=function(){if("u"<typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=X(n);return e=t?Reflect.construct(r,arguments,X(this).constructor):r.apply(this,arguments),J(this,e)});function n(){var e,t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;if(Q(this,n),t=r.call(this),eg&&eo.call(H(t)),t.options=eU(i),t.services={},t.logger=ei,t.modules={external:[]},Object.getOwnPropertyNames(Object.getPrototypeOf(e=H(t))).forEach(function(t){"function"==typeof e[t]&&(e[t]=e[t].bind(e))}),o&&!t.isInitialized&&!i.isClone){if(!t.options.initImmediate)return t.init(i,o),J(t,H(t));setTimeout(function(){t.init(i,o)},0)}return t}return z(n,[{key:"init",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;"function"==typeof t&&(r=t,t={}),!t.defaultNS&&!1!==t.defaultNS&&t.ns&&("string"==typeof t.ns?t.defaultNS=t.ns:0>t.ns.indexOf("translation")&&(t.defaultNS=t.ns[0]));var n={debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(e){var t={};if("object"===V(e[1])&&(t=e[1]),"string"==typeof e[1]&&(t.defaultValue=e[1]),"string"==typeof e[2]&&(t.tDescription=e[2]),"object"===V(e[2])||"object"===V(e[3])){var r=e[3]||e[2];Object.keys(r).forEach(function(e){t[e]=r[e]})}return t},interpolation:{escapeValue:!0,format:function(e,t,r,n){return e},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}};function i(e){return e?"function"==typeof e?new e:e:null}if(this.options=eQ(eQ(eQ({},n),this.options),eU(t)),"v1"!==this.options.compatibilityAPI&&(this.options.interpolation=eQ(eQ({},n.interpolation),this.options.interpolation)),void 0!==t.keySeparator&&(this.options.userDefinedKeySeparator=t.keySeparator),void 0!==t.nsSeparator&&(this.options.userDefinedNsSeparator=t.nsSeparator),!this.options.isClone){this.modules.logger?ei.init(i(this.modules.logger),this.options):ei.init(null,this.options),this.modules.formatter?o=this.modules.formatter:"u">typeof Intl&&(o=eD);var o,s=new eA(this.options);this.store=new eb(this.options.resources,this.options);var a=this.services;a.logger=ei,a.resourceStore=this.store,a.languageUtils=s,a.pluralResolver=new ex(s,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),o&&(!this.options.interpolation.format||this.options.interpolation.format===n.interpolation.format)&&(a.formatter=i(o),a.formatter.init(a,this.options),this.options.interpolation.format=a.formatter.format.bind(a.formatter)),a.interpolator=new eR(this.options),a.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},a.backendConnector=new eM(i(this.modules.backend),a.resourceStore,a,this.options),a.backendConnector.on("*",function(t){for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];e.emit.apply(e,[t].concat(n))}),this.modules.languageDetector&&(a.languageDetector=i(this.modules.languageDetector),a.languageDetector.init(a,this.options.detection,this.options)),this.modules.i18nFormat&&(a.i18nFormat=i(this.modules.i18nFormat),a.i18nFormat.init&&a.i18nFormat.init(this)),this.translator=new eC(this.services,this.options),this.translator.on("*",function(t){for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];e.emit.apply(e,[t].concat(n))}),this.modules.external.forEach(function(t){t.init&&t.init(e)})}if(this.format=this.options.interpolation.format,r||(r=eB),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){var u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&"dev"!==u[0]&&(this.options.lng=u[0])}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(function(t){e[t]=function(){var r;return(r=e.store)[t].apply(r,arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(function(t){e[t]=function(){var r;return(r=e.store)[t].apply(r,arguments),e}});var l=es(),c=function(){var t=function(t,n){e.isInitialized&&!e.initializedStoreOnce&&e.logger.warn("init: i18next is already initialized. You should call init just once!"),e.isInitialized=!0,e.options.isClone||e.logger.log("initialized",e.options),e.emit("initialized",e.options),l.resolve(n),r(t,n)};if(e.languages&&"v1"!==e.options.compatibilityAPI&&!e.isInitialized)return t(null,e.t.bind(e));e.changeLanguage(e.options.lng,t)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l}},{key:"loadResources",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:eB,n=r,i="string"==typeof e?e:this.language;if("function"==typeof e&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(i&&"cimode"===i.toLowerCase())return n();var o=[],s=function(e){e&&t.services.languageUtils.toResolveHierarchy(e).forEach(function(e){0>o.indexOf(e)&&o.push(e)})};i?s(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(function(e){return s(e)}),this.options.preload&&this.options.preload.forEach(function(e){return s(e)}),this.services.backendConnector.load(o,this.options.ns,function(e){e||t.resolvedLanguage||!t.language||t.setResolvedLanguage(t.language),n(e)})}else n(null)}},{key:"reloadResources",value:function(e,t,r){var n=es();return e||(e=this.languages),t||(t=this.options.ns),r||(r=eB),this.services.backendConnector.reload(e,t,function(e){n.resolve(),r(e)}),n}},{key:"use",value:function(e){if(!e)throw Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&eS.addPostProcessor(e),"formatter"===e.type&&(this.modules.formatter=e),"3rdParty"===e.type&&this.modules.external.push(e),this}},{key:"setResolvedLanguage",value:function(e){if(e&&this.languages&&!(["cimode","dev"].indexOf(e)>-1))for(var t=0;t<this.languages.length;t++){var r=this.languages[t];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}},{key:"changeLanguage",value:function(e,t){var r=this;this.isLanguageChangingTo=e;var n=es();this.emit("languageChanging",e);var i=function(e){r.language=e,r.languages=r.services.languageUtils.toResolveHierarchy(e),r.resolvedLanguage=void 0,r.setResolvedLanguage(e)},o=function(e,o){o?(i(o),r.translator.changeLanguage(o),r.isLanguageChangingTo=void 0,r.emit("languageChanged",o),r.logger.log("languageChanged",o)):r.isLanguageChangingTo=void 0,n.resolve(function(){return r.t.apply(r,arguments)}),t&&t(e,function(){return r.t.apply(r,arguments)})},s=function(t){e||t||!r.services.languageDetector||(t=[]);var n="string"==typeof t?t:r.services.languageUtils.getBestMatchFromCodes(t);n&&(r.language||i(n),r.translator.language||r.translator.changeLanguage(n),r.services.languageDetector&&r.services.languageDetector.cacheUserLanguage(n)),r.loadResources(n,function(e){o(e,n)})};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect(s):s(e):s(this.services.languageDetector.detect()),n}},{key:"getFixedT",value:function(e,t,r){var n=this,i=function e(t,i){if("object"!==V(i)){for(var o,s=arguments.length,a=Array(s>2?s-2:0),u=2;u<s;u++)a[u-2]=arguments[u];o=n.options.overloadTranslationOptionHandler([t,i].concat(a))}else o=eQ({},i);o.lng=o.lng||e.lng,o.lngs=o.lngs||e.lngs,o.ns=o.ns||e.ns,o.keyPrefix=o.keyPrefix||r||e.keyPrefix;var l=n.options.keySeparator||".",c=o.keyPrefix?"".concat(o.keyPrefix).concat(l).concat(t):t;return n.t(c,o)};return"string"==typeof e?i.lng=e:i.lngs=e,i.ns=t,i.keyPrefix=r,i}},{key:"t",value:function(){var e;return this.translator&&(e=this.translator).translate.apply(e,arguments)}},{key:"exists",value:function(){var e;return this.translator&&(e=this.translator).exists.apply(e,arguments)}},{key:"setDefaultNamespace",value:function(e){this.options.defaultNS=e}},{key:"hasLoadedNamespace",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var n=this.resolvedLanguage||this.languages[0],i=!!this.options&&this.options.fallbackLng,o=this.languages[this.languages.length-1];if("cimode"===n.toLowerCase())return!0;var s=function(e,r){var n=t.services.backendConnector.state["".concat(e,"|").concat(r)];return -1===n||2===n};if(r.precheck){var a=r.precheck(this,s);if(void 0!==a)return a}return!!(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||s(n,e)&&(!i||s(o,e)))}},{key:"loadNamespaces",value:function(e,t){var r=this,n=es();return this.options.ns?("string"==typeof e&&(e=[e]),e.forEach(function(e){0>r.options.ns.indexOf(e)&&r.options.ns.push(e)}),this.loadResources(function(e){n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}},{key:"loadLanguages",value:function(e,t){var r=es();"string"==typeof e&&(e=[e]);var n=this.options.preload||[],i=e.filter(function(e){return 0>n.indexOf(e)});return i.length?(this.options.preload=n.concat(i),this.loadResources(function(e){r.resolve(),t&&t(e)}),r):(t&&t(),Promise.resolve())}},{key:"dir",value:function(e){return(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),e)?["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr":"rtl"}},{key:"cloneInstance",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:eB,i=eQ(eQ(eQ({},this.options),t),{isClone:!0}),o=new n(i);return(void 0!==t.debug||void 0!==t.prefix)&&(o.logger=o.logger.clone(t)),["store","services","language"].forEach(function(t){o[t]=e[t]}),o.services=eQ({},this.services),o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o.translator=new eC(o.services,o.options),o.translator.on("*",function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];o.emit.apply(o,[e].concat(r))}),o.init(i,r),o.translator.options=o.options,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}},{key:"toJSON",value:function(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}]),n}(eo);Z(eG,"createInstance",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new eG(e,t)});var ez=eG.createInstance();ez.createInstance=eG.createInstance,ez.createInstance,ez.init,ez.loadResources,ez.reloadResources,ez.use,ez.changeLanguage,ez.getFixedT,ez.t,ez.exists,ez.setDefaultNamespace,ez.hasLoadedNamespace,ez.loadNamespaces,ez.loadLanguages;let eH=function(e){void 0===e.ns&&(e.ns=[]);var t,r,n=ez.createInstance(e);return n.isInitialized?t=Promise.resolve(ez.t):(null==e||null==(r=e.use)||r.forEach(function(e){return n.use(e)}),"function"==typeof e.onPreInitI18next&&e.onPreInitI18next(n),t=n.init(e)),{i18n:n,initPromise:t}};var eW=s.createElement;function eY(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function eJ(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?eY(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):eY(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var eX=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return P()(function(r){var n,i,o=r.pageProps._nextI18Next,a=null!=(n=null==o?void 0:o.initialLocale)?n:null==r||null==(i=r.router)?void 0:i.locale,u=null==o?void 0:o.ns,l=(0,s.useMemo)(function(){if(!o&&!t)return null;var e,r,n,i=null!=t?t:null==o?void 0:o.userConfig;if(!i&&null===t)throw Error("appWithTranslation was called without a next-i18next config");if(null!==t&&(i=t),!(null!=(e=i)&&e.i18n))throw Error("appWithTranslation was called without config.i18n");if(!(null!=(r=i)&&null!=(n=r.i18n)&&n.defaultLocale))throw Error("config.i18n does not include a defaultLocale property");var s=(o||{}).initialI18nStore,l=null!=t&&t.resources?t.resources:s;return a||(a=i.i18n.defaultLocale),eH(eJ(eJ({},U(eJ(eJ({},i),{},{lng:a}))),{},{lng:a,ns:u,resources:l})).i18n},[o,a,t,u]);return null!==l?eW(x,{i18n:l},eW(e,r)):eW(e,A({key:a},r))},e)}},93096:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}},93152:(e,t,r)=>{var n=r(86252),i=r(96619),o=r(62127),s=function(e){return function(t,r,s){var a,u=n(t),l=o(u),c=i(s,l);if(e&&r!=r){for(;l>c;)if((a=u[c++])!=a)return!0}else for(;l>c;c++)if((e||c in u)&&u[c]===r)return e||c||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},93241:(e,t,r)=>{var n=r(3982)("toStringTag"),i={};i[n]="z",e.exports="[object z]"===String(i)},93517:(e,t,r)=>{"use strict";let n;r.d(t,{h:()=>s});var i=r(14232);r(37876);var o=i.createContext((n=!1,{clearReset:()=>{n=!1},reset:()=>{n=!0},isReset:()=>n})),s=()=>i.useContext(o)},93763:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(15125),i=Math.max;let o=function(e,t,r){return t=i(void 0===t?e.length-1:t,0),function(){for(var o=arguments,s=-1,a=i(o.length-t,0),u=Array(a);++s<a;)u[s]=o[t+s];s=-1;for(var l=Array(t+1);++s<t;)l[s]=o[s];return l[t]=r(u),(0,n.A)(e,this,l)}}},93790:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(35072);function i(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var s=e.apply(this,n);return r.cache=o.set(i,s)||o,s};return r.cache=new(i.Cache||n.A),r}i.Cache=n.A;let o=i},94208:(e,t,r)=>{"use strict";e.exports=r(47643).style},94278:(e,t,r)=>{"use strict";var n,i,o=r(34004),s=r(51141),a=r(91538),u=r(75190),l=r(80036),c=r(46224),d=r(90285),p=r(51444).get,m=r(78830),f=r(95831),g=c("native-string-replace",String.prototype.replace),y=RegExp.prototype.exec,h=y,v=s("".charAt),b=s("".indexOf),S=s("".replace),w=s("".slice),I=(i=/b*/g,o(y,n=/a/,"a"),o(y,i,"a"),0!==n.lastIndex||0!==i.lastIndex),$=l.BROKEN_CARET,C=void 0!==/()??/.exec("")[1];(I||C||$||m||f)&&(h=function(e){var t,r,n,i,s,l,c,m=p(this),f=a(e),k=m.raw;if(k)return k.lastIndex=this.lastIndex,t=o(h,k,f),this.lastIndex=k.lastIndex,t;var A=m.groups,q=$&&this.sticky,O=o(u,this),T=this.source,P=0,x=f;if(q&&(-1===b(O=S(O,"y",""),"g")&&(O+="g"),x=w(f,this.lastIndex),this.lastIndex>0&&(!this.multiline||this.multiline&&"\n"!==v(f,this.lastIndex-1))&&(T="(?: "+T+")",x=" "+x,P++),r=RegExp("^(?:"+T+")",O)),C&&(r=RegExp("^"+T+"$(?!\\s)",O)),I&&(n=this.lastIndex),i=o(y,q?r:this,x),q?i?(i.input=w(i.input,P),i[0]=w(i[0],P),i.index=this.lastIndex,this.lastIndex+=i[0].length):this.lastIndex=0:I&&i&&(this.lastIndex=this.global?i.index+i[0].length:n),C&&i&&i.length>1&&o(g,i[0],r,function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(i[s]=void 0)}),i&&A)for(s=0,i.groups=l=d(null);s<A.length;s++)l[(c=A[s])[0]]=i[c[1]];return i}),e.exports=h},94390:(e,t,r)=>{"use strict";r.d(t,{y:()=>i});let n=e=>{let t,r=new Set,n=(e,n)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=n?n:"object"!=typeof i)?i:Object.assign({},t,i),r.forEach(r=>r(t,e))}},i=()=>t,o={setState:n,getState:i,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}};return t=e(n,i,o),o},i=e=>e?n(e):n},94534:(e,t,r)=>{var n=r(93241),i=r(58524),o=r(15653),s=r(3982)("toStringTag"),a=Object,u="Arguments"==o(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(e){}};e.exports=n?o:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=l(t=a(e),s))?r:u?o(t):"Object"==(n=o(t))&&i(t.callee)?"Arguments":n}},94650:(e,t,r)=>{"use strict";r.d(t,{F:()=>o});let n=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,i=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t)if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(i&&(i+=" "),i+=n);else for(r in t)t[r]&&(i&&(i+=" "),i+=r);return i}(e))&&(n&&(n+=" "),n+=t);return n},o=(e,t)=>r=>{var o;if((null==t?void 0:t.variants)==null)return i(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:s,defaultVariants:a}=t,u=Object.keys(s).map(e=>{let t=null==r?void 0:r[e],i=null==a?void 0:a[e];if(null===t)return null;let o=n(t)||n(i);return s[e][o]}),l=r&&Object.entries(r).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{});return i(e,u,null==t||null==(o=t.compoundVariants)?void 0:o.reduce((e,t)=>{let{class:r,className:n,...i}=t;return Object.entries(i).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...a,...l}[t]):({...a,...l})[t]===r})?[...e,r,n]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}},95528:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}},95831:(e,t,r)=>{var n=r(56354),i=r(72806).RegExp;e.exports=n(function(){var e=i("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")})},95877:(e,t,r)=>{"use strict";r.d(t,{H:()=>s});var n=r(74359),i=r(91303);let o=["ipRegion"],s=function(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0];return(0,n.I)({queryKey:o,queryFn:()=>i.uE.request(i.vZ.ipRegion).then(e=>{var t;return{countryCode:null!=(t=e.country_code)?t:void 0}}),staleTime:3e5,refetchOnWindowFocus:!0,enabled:e})}},96243:function(e,t,r){e.exports=function(e){"use strict";var t={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(e,t){return"W"===t?e+"周":e+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(e,t){var r=100*e+t;return r<600?"凌晨":r<900?"早上":r<1100?"上午":r<1300?"中午":r<1800?"下午":"晚上"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(r(56557))},96399:(e,t)=>{"use strict";t.mw={prefix:"far",iconName:"bug",icon:[512,512,[],"f188","M256 0c53 0 96 43 96 96v3.6c0 15.7-12.7 28.4-28.4 28.4H188.4c-15.7 0-28.4-12.7-28.4-28.4V96c0-53 43-96 96-96zM39 103c9.4-9.4 24.6-9.4 33.9 0l72.4 72.4C161.3 165.7 180 160 200 160H312c20 0 38.7 5.7 54.6 15.5L439 103c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72.4 72.4C410.3 225.3 416 244 416 264h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H416v8c0 27.2-6.8 52.8-18.8 75.3L473 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-70.9-70.9C339.3 462.5 299.7 480 256 480s-83.3-17.5-112.2-45.9L73 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l75.8-75.8C102.8 372.8 96 347.2 96 320v-8H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H96c0-20 5.7-38.7 15.5-54.6L39 137c-9.4-9.4-9.4-24.6 0-33.9zM144 264v56c0 53.6 37.7 98.4 88 109.4V280c0-13.3 10.7-24 24-24s24 10.7 24 24V429.4c50.3-11 88-55.8 88-109.4V264c0-30.9-25.1-56-56-56H200c-30.9 0-56 25.1-56 56z"]},t.wG=t.mw},96619:(e,t,r)=>{var n=r(1958),i=Math.max,o=Math.min;e.exports=function(e,t){var r=n(e);return r<0?i(r+t,0):o(r,t)}},96822:(e,t,r)=>{"use strict";r.d(t,{C:()=>s});var n=r(14232),i=r(10714),o=r(81285),s=e=>{var t;let r,s,{present:u,children:l}=e,c=function(e){var t,r;let[i,s]=n.useState(),u=n.useRef({}),l=n.useRef(e),c=n.useRef("none"),[d,p]=(t=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},n.useReducer((e,t)=>r[e][t]??e,t));return n.useEffect(()=>{let e=a(u.current);c.current="mounted"===d?e:"none"},[d]),(0,o.N)(()=>{let t=u.current,r=l.current;if(r!==e){let n=c.current,i=a(t);e?p("MOUNT"):"none"===i||t?.display==="none"?p("UNMOUNT"):r&&n!==i?p("ANIMATION_OUT"):p("UNMOUNT"),l.current=e}},[e,p]),(0,o.N)(()=>{if(i){let e,t=i.ownerDocument.defaultView??window,r=r=>{let n=a(u.current).includes(r.animationName);if(r.target===i&&n&&(p("ANIMATION_END"),!l.current)){let r=i.style.animationFillMode;i.style.animationFillMode="forwards",e=t.setTimeout(()=>{"forwards"===i.style.animationFillMode&&(i.style.animationFillMode=r)})}},n=e=>{e.target===i&&(c.current=a(u.current))};return i.addEventListener("animationstart",n),i.addEventListener("animationcancel",r),i.addEventListener("animationend",r),()=>{t.clearTimeout(e),i.removeEventListener("animationstart",n),i.removeEventListener("animationcancel",r),i.removeEventListener("animationend",r)}}p("ANIMATION_END")},[i,p]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:n.useCallback(e=>{e&&(u.current=getComputedStyle(e)),s(e)},[])}}(u),d="function"==typeof l?l({present:c.isPresent}):n.Children.only(l),p=(0,i.s)(c.ref,(t=d,(s=(r=Object.getOwnPropertyDescriptor(t.props,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?t.ref:(s=(r=Object.getOwnPropertyDescriptor(t,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?t.props.ref:t.props.ref||t.ref));return"function"==typeof l||c.isPresent?n.cloneElement(d,{ref:p}):null};function a(e){return e?.animationName||"none"}s.displayName="Presence"},97225:(e,t,r)=>{"use strict";e.exports=r(70789)},97591:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var n=r(11396);let i=function(e,t){for(var r=e.length;r--;)if((0,n.A)(e[r][0],t))return r;return -1};var o=Array.prototype.splice;function s(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}s.prototype.clear=function(){this.__data__=[],this.size=0},s.prototype.delete=function(e){var t=this.__data__,r=i(t,e);return!(r<0)&&(r==t.length-1?t.pop():o.call(t,r,1),--this.size,!0)},s.prototype.get=function(e){var t=this.__data__,r=i(t,e);return r<0?void 0:t[r][1]},s.prototype.has=function(e){return i(this.__data__,e)>-1},s.prototype.set=function(e,t){var r=this.__data__,n=i(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};let a=s},97649:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var n=r(34054),i=r(72209),o=r(14188),s=i.A?function(e,t){return(0,i.A)(e,"toString",{configurable:!0,enumerable:!1,value:(0,n.A)(t),writable:!0})}:o.A;let a=(0,r(35873).A)(s)},97725:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var n=r(97591),i=r(5915),o=r(35072);function s(e){var t=this.__data__=new n.A(e);this.size=t.size}s.prototype.clear=function(){this.__data__=new n.A,this.size=0},s.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},s.prototype.get=function(e){return this.__data__.get(e)},s.prototype.has=function(e){return this.__data__.has(e)},s.prototype.set=function(e,t){var r=this.__data__;if(r instanceof n.A){var s=r.__data__;if(!i.A||s.length<199)return s.push([e,t]),this.size=++r.size,this;r=this.__data__=new o.A(s)}return r.set(e,t),this.size=r.size,this};let a=s},98158:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var n=r(4527),i=r(86702),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/;let a=function(e,t){if((0,n.A)(e))return!1;var r=typeof e;return!!("number"==r||"symbol"==r||"boolean"==r||null==e||(0,i.A)(e))||s.test(e)||!o.test(e)||null!=t&&e in Object(t)}},98275:(e,t,r)=>{"use strict";r.d(t,{m:()=>i});var n=r(90089),i=new class extends n.Q{#ee;#_;#D;constructor(){super(),this.#D=e=>{if("u">typeof window&&window.addEventListener){let t=()=>e();return window.addEventListener("visibilitychange",t,!1),()=>{window.removeEventListener("visibilitychange",t)}}}}onSubscribe(){this.#_||this.setEventListener(this.#D)}onUnsubscribe(){this.hasListeners()||(this.#_?.(),this.#_=void 0)}setEventListener(e){this.#D=e,this.#_?.(),this.#_=e(e=>{"boolean"==typeof e?this.setFocused(e):this.onFocus()})}setFocused(e){this.#ee!==e&&(this.#ee=e,this.onFocus())}onFocus(){let e=this.isFocused();this.listeners.forEach(t=>{t(e)})}isFocused(){return"boolean"==typeof this.#ee?this.#ee:globalThis.document?.visibilityState!=="hidden"}}},98284:(e,t)=>{t.f=Object.getOwnPropertySymbols},98318:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(46768),i=/^\s+/;let o=function(e){return e?e.slice(0,(0,n.A)(e)+1).replace(i,""):e}},98376:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(82993),i=r(78710),o=r(69014);let s=function(e){return(0,n.A)(e,o.A,i.A)}},98467:function(e){e.exports=function(e,t,r){t.prototype.isToday=function(){var e="YYYY-MM-DD",t=r();return this.format(e)===t.format(e)}}},98562:(e,t,r)=>{"use strict";r.d(t,{EU:()=>o,iL:()=>s,jv:()=>n,nE:()=>i});var n=e=>{if(e.suspense){let t=e=>"static"===e?e:Math.max(e??1e3,1e3),r=e.staleTime;e.staleTime="function"==typeof r?(...e)=>t(r(...e)):t(r),"number"==typeof e.gcTime&&(e.gcTime=Math.max(e.gcTime,1e3))}},i=(e,t)=>e.isLoading&&e.isFetching&&!t,o=(e,t)=>e?.suspense&&t.isPending,s=(e,t,r)=>t.fetchOptimistic(e).catch(()=>{r.clearReset()})},98701:()=>{},98720:(e,t,r)=>{"use strict";r.d(t,{A:()=>c});var n=r(21871),i=r(83497),o=r(84147);let s=function(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t};var a=Object.prototype.hasOwnProperty;let u=function(e){if(!(0,i.A)(e))return s(e);var t=(0,o.A)(e),r=[];for(var n in e)"constructor"==n&&(t||!a.call(e,n))||r.push(n);return r};var l=r(78304);let c=function(e){return(0,l.A)(e)?(0,n.A)(e,!0):u(e)}},99809:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=function(e){return function(t){return e(t)}}},99971:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(82993),i=r(89117),o=r(98720);let s=function(e){return(0,n.A)(e,o.A,i.A)}}},e=>{var t=t=>e(e.s=t);e.O(0,[46593,38792],()=>(t(87802),t(92),t(59603))),_N_E=e.O()}]);
//# sourceMappingURL=_app-0e5522c165669314.js.map