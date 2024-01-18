(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function li(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const le={},ln=[],Le=()=>{},Vl=()=>!1,Wr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ui=t=>t.startsWith("onUpdate:"),de=Object.assign,fi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Hl=Object.prototype.hasOwnProperty,X=(t,e)=>Hl.call(t,e),$=Array.isArray,un=t=>Xn(t)==="[object Map]",bn=t=>Xn(t)==="[object Set]",Xi=t=>Xn(t)==="[object Date]",z=t=>typeof t=="function",he=t=>typeof t=="string",Pt=t=>typeof t=="symbol",ce=t=>t!==null&&typeof t=="object",Aa=t=>(ce(t)||z(t))&&z(t.then)&&z(t.catch),Oa=Object.prototype.toString,Xn=t=>Oa.call(t),jl=t=>Xn(t).slice(8,-1),ka=t=>Xn(t)==="[object Object]",di=t=>he(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,vr=li(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Wl=/-(\w)/g,Ye=Kr(t=>t.replace(Wl,(e,n)=>n?n.toUpperCase():"")),Kl=/\B([A-Z])/g,En=Kr(t=>t.replace(Kl,"-$1").toLowerCase()),zr=Kr(t=>t.charAt(0).toUpperCase()+t.slice(1)),hs=Kr(t=>t?`on${zr(t)}`:""),At=(t,e)=>!Object.is(t,e),yr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Rr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Pr=t=>{const e=parseFloat(t);return isNaN(e)?t:e},zl=t=>{const e=he(t)?Number(t):NaN;return isNaN(e)?t:e};let Qi;const Na=()=>Qi||(Qi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function hi(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=he(r)?Yl(r):hi(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(he(t)||ce(t))return t}const ql=/;(?![^(]*\))/g,Gl=/:([^]+)/,Jl=/\/\*[^]*?\*\//g;function Yl(t){const e={};return t.replace(Jl,"").split(ql).forEach(n=>{if(n){const r=n.split(Gl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function pi(t){let e="";if(he(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const r=pi(t[n]);r&&(e+=r+" ")}else if(ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Xl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ql=li(Xl);function La(t){return!!t||t===""}function Zl(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Jt(t[r],e[r]);return n}function Jt(t,e){if(t===e)return!0;let n=Xi(t),r=Xi(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Pt(t),r=Pt(e),n||r)return t===e;if(n=$(t),r=$(e),n||r)return n&&r?Zl(t,e):!1;if(n=ce(t),r=ce(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Jt(t[o],e[o]))return!1}}return String(t)===String(e)}function gi(t,e){return t.findIndex(n=>Jt(n,e))}const Wt=t=>he(t)?t:t==null?"":$(t)||ce(t)&&(t.toString===Oa||!z(t.toString))?JSON.stringify(t,Ma,2):String(t),Ma=(t,e)=>e&&e.__v_isRef?Ma(t,e.value):un(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ps(r,i)+" =>"]=s,n),{})}:bn(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ps(n))}:Pt(e)?ps(e):ce(e)&&!$(e)&&!ka(e)?String(e):e,ps=(t,e="")=>{var n;return Pt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oe;class Da{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Oe,!e&&Oe&&(this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Oe;try{return Oe=this,e()}finally{Oe=n}}}on(){Oe=this}off(){Oe=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function xa(t){return new Da(t)}function eu(t,e=Oe){e&&e.active&&e.effects.push(t)}function Ua(){return Oe}function tu(t){Oe&&Oe.cleanups.push(t)}let Kt;class mi{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,eu(this,s)}get dirty(){if(this._dirtyLevel===1){Zt();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(nu(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),en()}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=It,n=Kt;try{return It=!0,Kt=this,this._runnings++,Zi(this),this.fn()}finally{eo(this),this._runnings--,Kt=n,It=e}}stop(){var e;this.active&&(Zi(this),eo(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function nu(t){return t.value}function Zi(t){t._trackId++,t._depsLength=0}function eo(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Fa(t.deps[e],t);t.deps.length=t._depsLength}}function Fa(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let It=!0,Ms=0;const $a=[];function Zt(){$a.push(It),It=!1}function en(){const t=$a.pop();It=t===void 0?!0:t}function _i(){Ms++}function vi(){for(Ms--;!Ms&&Ds.length;)Ds.shift()()}function Ba(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Fa(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Ds=[];function Va(t,e,n){_i();for(const r of t.keys())if(t.get(r)===r._trackId){if(r._dirtyLevel<e&&!(r._runnings&&!r.allowRecurse)){const s=r._dirtyLevel;r._dirtyLevel=e,s===0&&(r._shouldSchedule=!0,r.trigger())}r.scheduler&&r._shouldSchedule&&(!r._runnings||r.allowRecurse)&&(r._shouldSchedule=!1,Ds.push(r.scheduler))}vi()}const Ha=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Ar=new WeakMap,zt=Symbol(""),xs=Symbol("");function Pe(t,e,n){if(It&&Kt){let r=Ar.get(t);r||Ar.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ha(()=>r.delete(n))),Ba(Kt,s)}}function nt(t,e,n,r,s,i){const o=Ar.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!Pt(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?di(n)&&a.push(o.get("length")):(a.push(o.get(zt)),un(t)&&a.push(o.get(xs)));break;case"delete":$(t)||(a.push(o.get(zt)),un(t)&&a.push(o.get(xs)));break;case"set":un(t)&&a.push(o.get(zt));break}_i();for(const c of a)c&&Va(c,2);vi()}function ru(t,e){var n;return(n=Ar.get(t))==null?void 0:n.get(e)}const su=li("__proto__,__v_isRef,__isVue"),ja=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Pt)),to=iu();function iu(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Y(this);for(let i=0,o=this.length;i<o;i++)Pe(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Y)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Zt(),_i();const r=Y(this)[e].apply(this,n);return vi(),en(),r}}),t}function ou(t){const e=Y(this);return Pe(e,"has",t),e.hasOwnProperty(t)}class Wa{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?yu:Ga:i?qa:za).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=$(e);if(!s){if(o&&X(to,n))return Reflect.get(to,n,r);if(n==="hasOwnProperty")return ou}const a=Reflect.get(e,n,r);return(Pt(n)?ja.has(n):su(n))||(s||Pe(e,"get",n),i)?a:pe(a)?o&&di(n)?a:a.value:ce(a)?s?Ya(a):Qn(a):a}}class Ka extends Wa{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._shallow){const c=gn(i);if(!Or(r)&&!gn(r)&&(i=Y(i),r=Y(r)),!$(e)&&pe(i)&&!pe(r))return c?!1:(i.value=r,!0)}const o=$(e)&&di(n)?Number(n)<e.length:X(e,n),a=Reflect.set(e,n,r,s);return e===Y(s)&&(o?At(r,i)&&nt(e,"set",n,r):nt(e,"add",n,r)),a}deleteProperty(e,n){const r=X(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&nt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Pt(n)||!ja.has(n))&&Pe(e,"has",n),r}ownKeys(e){return Pe(e,"iterate",$(e)?"length":zt),Reflect.ownKeys(e)}}class au extends Wa{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const cu=new Ka,lu=new au,uu=new Ka(!0),yi=t=>t,qr=t=>Reflect.getPrototypeOf(t);function lr(t,e,n=!1,r=!1){t=t.__v_raw;const s=Y(t),i=Y(e);n||(At(e,i)&&Pe(s,"get",e),Pe(s,"get",i));const{has:o}=qr(s),a=r?yi:n?wi:Un;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function ur(t,e=!1){const n=this.__v_raw,r=Y(n),s=Y(t);return e||(At(t,s)&&Pe(r,"has",t),Pe(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function fr(t,e=!1){return t=t.__v_raw,!e&&Pe(Y(t),"iterate",zt),Reflect.get(t,"size",t)}function no(t){t=Y(t);const e=Y(this);return qr(e).has.call(e,t)||(e.add(t),nt(e,"add",t,t)),this}function ro(t,e){e=Y(e);const n=Y(this),{has:r,get:s}=qr(n);let i=r.call(n,t);i||(t=Y(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?At(e,o)&&nt(n,"set",t,e):nt(n,"add",t,e),this}function so(t){const e=Y(this),{has:n,get:r}=qr(e);let s=n.call(e,t);s||(t=Y(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&nt(e,"delete",t,void 0),i}function io(){const t=Y(this),e=t.size!==0,n=t.clear();return e&&nt(t,"clear",void 0,void 0),n}function dr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Y(o),c=e?yi:t?wi:Un;return!t&&Pe(a,"iterate",zt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function hr(t,e,n){return function(...r){const s=this.__v_raw,i=Y(s),o=un(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?yi:e?wi:Un;return!e&&Pe(i,"iterate",c?xs:zt),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function ct(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function fu(){const t={get(i){return lr(this,i)},get size(){return fr(this)},has:ur,add:no,set:ro,delete:so,clear:io,forEach:dr(!1,!1)},e={get(i){return lr(this,i,!1,!0)},get size(){return fr(this)},has:ur,add:no,set:ro,delete:so,clear:io,forEach:dr(!1,!0)},n={get(i){return lr(this,i,!0)},get size(){return fr(this,!0)},has(i){return ur.call(this,i,!0)},add:ct("add"),set:ct("set"),delete:ct("delete"),clear:ct("clear"),forEach:dr(!0,!1)},r={get(i){return lr(this,i,!0,!0)},get size(){return fr(this,!0)},has(i){return ur.call(this,i,!0)},add:ct("add"),set:ct("set"),delete:ct("delete"),clear:ct("clear"),forEach:dr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=hr(i,!1,!1),n[i]=hr(i,!0,!1),e[i]=hr(i,!1,!0),r[i]=hr(i,!0,!0)}),[t,n,e,r]}const[du,hu,pu,gu]=fu();function bi(t,e){const n=e?t?gu:pu:t?hu:du;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(X(n,s)&&s in r?n:r,s,i)}const mu={get:bi(!1,!1)},_u={get:bi(!1,!0)},vu={get:bi(!0,!1)},za=new WeakMap,qa=new WeakMap,Ga=new WeakMap,yu=new WeakMap;function bu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Eu(t){return t.__v_skip||!Object.isExtensible(t)?0:bu(jl(t))}function Qn(t){return gn(t)?t:Ei(t,!1,cu,mu,za)}function Ja(t){return Ei(t,!1,uu,_u,qa)}function Ya(t){return Ei(t,!0,lu,vu,Ga)}function Ei(t,e,n,r,s){if(!ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Eu(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function St(t){return gn(t)?St(t.__v_raw):!!(t&&t.__v_isReactive)}function gn(t){return!!(t&&t.__v_isReadonly)}function Or(t){return!!(t&&t.__v_isShallow)}function Xa(t){return St(t)||gn(t)}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function Gr(t){return Rr(t,"__v_skip",!0),t}const Un=t=>ce(t)?Qn(t):t,wi=t=>ce(t)?Ya(t):t;class Qa{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new mi(()=>e(this._value),()=>Us(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Y(this);return(!e._cacheable||e.effect.dirty)&&At(e._value,e._value=e.effect.run())&&Us(e,2),Za(e),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function wu(t,e,n=!1){let r,s;const i=z(t);return i?(r=t,s=Le):(r=t.get,s=t.set),new Qa(r,s,i||!s,n)}function Za(t){It&&Kt&&(t=Y(t),Ba(Kt,t.dep||(t.dep=Ha(()=>t.dep=void 0,t instanceof Qa?t:void 0))))}function Us(t,e=2,n){t=Y(t);const r=t.dep;r&&Va(r,e)}function pe(t){return!!(t&&t.__v_isRef===!0)}function Te(t){return ec(t,!1)}function Iu(t){return ec(t,!0)}function ec(t,e){return pe(t)?t:new Su(t,e)}class Su{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Y(e),this._value=n?e:Un(e)}get value(){return Za(this),this._value}set value(e){const n=this.__v_isShallow||Or(e)||gn(e);e=n?e:Y(e),At(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Un(e),Us(this,2))}}function rt(t){return pe(t)?t.value:t}const Tu={get:(t,e,n)=>rt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return pe(s)&&!pe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function tc(t){return St(t)?t:new Proxy(t,Tu)}function Cu(t){const e=$(t)?new Array(t.length):{};for(const n in t)e[n]=Pu(t,n);return e}class Ru{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return ru(Y(this._object),this._key)}}function Pu(t,e,n){const r=t[e];return pe(r)?r:new Ru(t,e,n)}/**
* @vue/runtime-core v3.4.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Tt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Jr(i,e,n)}return s}function Me(t,e,n,r){if(z(t)){const i=Tt(t,e,n,r);return i&&Aa(i)&&i.catch(o=>{Jr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Me(t[i],e,n,r));return s}function Jr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/errors/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Tt(c,null,10,[t,o,a]);return}}Au(t,n,s,r)}function Au(t,e,n,r=!0){console.error(t)}let Fn=!1,Fs=!1;const be=[];let qe=0;const fn=[];let pt=null,Vt=0;const nc=Promise.resolve();let Ii=null;function Si(t){const e=Ii||nc;return t?e.then(this?t.bind(this):t):e}function Ou(t){let e=qe+1,n=be.length;for(;e<n;){const r=e+n>>>1,s=be[r],i=$n(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Ti(t){(!be.length||!be.includes(t,Fn&&t.allowRecurse?qe+1:qe))&&(t.id==null?be.push(t):be.splice(Ou(t.id),0,t),rc())}function rc(){!Fn&&!Fs&&(Fs=!0,Ii=nc.then(ic))}function ku(t){const e=be.indexOf(t);e>qe&&be.splice(e,1)}function Nu(t){$(t)?fn.push(...t):(!pt||!pt.includes(t,t.allowRecurse?Vt+1:Vt))&&fn.push(t),rc()}function oo(t,e,n=Fn?qe+1:0){for(;n<be.length;n++){const r=be[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;be.splice(n,1),n--,r()}}}function sc(t){if(fn.length){const e=[...new Set(fn)].sort((n,r)=>$n(n)-$n(r));if(fn.length=0,pt){pt.push(...e);return}for(pt=e,Vt=0;Vt<pt.length;Vt++)pt[Vt]();pt=null,Vt=0}}const $n=t=>t.id==null?1/0:t.id,Lu=(t,e)=>{const n=$n(t)-$n(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ic(t){Fs=!1,Fn=!0,be.sort(Lu);try{for(qe=0;qe<be.length;qe++){const e=be[qe];e&&e.active!==!1&&Tt(e,null,14)}}finally{qe=0,be.length=0,sc(),Fn=!1,Ii=null,(be.length||fn.length)&&ic()}}function Mu(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||le;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[u]||le;p&&(s=n.map(m=>he(m)?m.trim():m)),h&&(s=n.map(Pr))}let a,c=r[a=hs(e)]||r[a=hs(Ye(e))];!c&&i&&(c=r[a=hs(En(e))]),c&&Me(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Me(l,t,6,s)}}function oc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!z(t)){const c=l=>{const u=oc(l,e,!0);u&&(a=!0,de(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ce(t)&&r.set(t,null),null):($(i)?i.forEach(c=>o[c]=null):de(o,i),ce(t)&&r.set(t,o),o)}function Yr(t,e){return!t||!Wr(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,En(e))||X(t,e))}let Ee=null,Xr=null;function kr(t){const e=Ee;return Ee=t,Xr=t&&t.type.__scopeId||null,e}function Ci(t){Xr=t}function Ri(){Xr=null}function Bn(t,e=Ee,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&yo(-1);const i=kr(e);let o;try{o=t(...s)}finally{kr(i),r._d&&yo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function gs(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:p,setupState:m,ctx:w,inheritAttrs:R}=t;let M,A;const x=kr(t);try{if(n.shapeFlag&4){const K=s||r,j=K;M=ze(u.call(j,K,h,i,m,p,w)),A=c}else{const K=e;M=ze(K.length>1?K(i,{attrs:c,slots:a,emit:l}):K(i,null)),A=e.props?c:Du(c)}}catch(K){Nn.length=0,Jr(K,t,1),M=ve($e)}let U=M;if(A&&R!==!1){const K=Object.keys(A),{shapeFlag:j}=U;K.length&&j&7&&(o&&K.some(ui)&&(A=xu(A,o)),U=Ot(U,A))}return n.dirs&&(U=Ot(U),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),M=U,kr(x),M}const Du=t=>{let e;for(const n in t)(n==="class"||n==="style"||Wr(n))&&((e||(e={}))[n]=t[n]);return e},xu=(t,e)=>{const n={};for(const r in t)(!ui(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Uu(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ao(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(o[p]!==r[p]&&!Yr(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ao(r,o,l):!0:!!o;return!1}function ao(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Yr(n,i))return!0}return!1}function Fu({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const ac="components";function Pi(t,e){return Bu(ac,t,!0,e)||t}const $u=Symbol.for("v-ndc");function Bu(t,e,n=!0,r=!1){const s=Ee||me;if(s){const i=s.type;if(t===ac){const a=Uf(i,!1);if(a&&(a===e||a===Ye(e)||a===zr(Ye(e))))return i}const o=co(s[t]||i[t],e)||co(s.appContext[t],e);return!o&&r?i:o}}function co(t,e){return t&&(t[e]||t[Ye(e)]||t[zr(Ye(e))])}const Vu=t=>t.__isSuspense;function Hu(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):Nu(t)}const ju=Symbol.for("v-scx"),Wu=()=>Fe(ju),pr={};function An(t,e,n){return cc(t,e,n)}function cc(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=le){if(e&&i){const B=e;e=(...Z)=>{B(...Z),j()}}const c=me,l=B=>r===!0?B:jt(B,r===!1?1:void 0);let u,h=!1,p=!1;if(pe(t)?(u=()=>t.value,h=Or(t)):St(t)?(u=()=>l(t),h=!0):$(t)?(p=!0,h=t.some(B=>St(B)||Or(B)),u=()=>t.map(B=>{if(pe(B))return B.value;if(St(B))return l(B);if(z(B))return Tt(B,c,2)})):z(t)?e?u=()=>Tt(t,c,2):u=()=>(m&&m(),Me(t,c,3,[w])):u=Le,e&&r){const B=u;u=()=>jt(B())}let m,w=B=>{m=U.onStop=()=>{Tt(B,c,4),m=U.onStop=void 0}},R;if(ns)if(w=Le,e?n&&Me(e,c,3,[u(),p?[]:void 0,w]):u(),s==="sync"){const B=Wu();R=B.__watcherHandles||(B.__watcherHandles=[])}else return Le;let M=p?new Array(t.length).fill(pr):pr;const A=()=>{if(!(!U.active||!U.dirty))if(e){const B=U.run();(r||h||(p?B.some((Z,P)=>At(Z,M[P])):At(B,M)))&&(m&&m(),Me(e,c,3,[B,M===pr?void 0:p&&M[0]===pr?[]:M,w]),M=B)}else U.run()};A.allowRecurse=!!e;let x;s==="sync"?x=A:s==="post"?x=()=>Re(A,c&&c.suspense):(A.pre=!0,c&&(A.id=c.uid),x=()=>Ti(A));const U=new mi(u,Le,x),K=Ua(),j=()=>{U.stop(),K&&fi(K.effects,U)};return e?n?A():M=U.run():s==="post"?Re(U.run.bind(U),c&&c.suspense):U.run(),R&&R.push(j),j}function Ku(t,e,n){const r=this.proxy,s=he(t)?t.includes(".")?lc(r,t):()=>r[t]:t.bind(r,r);let i;z(e)?i=e:(i=e.handler,n=e);const o=er(this),a=cc(s,i.bind(r),n);return o(),a}function lc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function jt(t,e,n=0,r){if(!ce(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),pe(t))jt(t.value,e,n,r);else if($(t))for(let s=0;s<t.length;s++)jt(t[s],e,n,r);else if(bn(t)||un(t))t.forEach(s=>{jt(s,e,n,r)});else if(ka(t))for(const s in t)jt(t[s],e,n,r);return t}function On(t,e){if(Ee===null)return t;const n=rs(Ee)||Ee.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=le]=e[s];i&&(z(i)&&(i={mounted:i,updated:i}),i.deep&&jt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function xt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Zt(),Me(c,n,8,[t.el,a,t,e]),en())}}const gt=Symbol("_leaveCb"),gr=Symbol("_enterCb");function zu(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ai(()=>{t.isMounted=!0}),pc(()=>{t.isUnmounting=!0}),t}const Ne=[Function,Array],uc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ne,onEnter:Ne,onAfterEnter:Ne,onEnterCancelled:Ne,onBeforeLeave:Ne,onLeave:Ne,onAfterLeave:Ne,onLeaveCancelled:Ne,onBeforeAppear:Ne,onAppear:Ne,onAfterAppear:Ne,onAppearCancelled:Ne},qu={name:"BaseTransition",props:uc,setup(t,{slots:e}){const n=Nf(),r=zu();let s;return()=>{const i=e.default&&dc(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const R of i)if(R.type!==$e){o=R;break}}const a=Y(t),{mode:c}=a;if(r.isLeaving)return ms(o);const l=lo(o);if(!l)return ms(o);const u=$s(l,a,r,n);Bs(l,u);const h=n.subTree,p=h&&lo(h);let m=!1;const{getTransitionKey:w}=l.type;if(w){const R=w();s===void 0?s=R:R!==s&&(s=R,m=!0)}if(p&&p.type!==$e&&(!Ht(l,p)||m)){const R=$s(p,a,r,n);if(Bs(p,R),c==="out-in")return r.isLeaving=!0,R.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},ms(o);c==="in-out"&&l.type!==$e&&(R.delayLeave=(M,A,x)=>{const U=fc(r,p);U[String(p.key)]=p,M[gt]=()=>{A(),M[gt]=void 0,delete u.delayedLeave},u.delayedLeave=x})}return o}}},Gu=qu;function fc(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function $s(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:p,onAfterLeave:m,onLeaveCancelled:w,onBeforeAppear:R,onAppear:M,onAfterAppear:A,onAppearCancelled:x}=e,U=String(t.key),K=fc(n,t),j=(P,D)=>{P&&Me(P,r,9,D)},B=(P,D)=>{const q=D[1];j(P,D),$(P)?P.every(ie=>ie.length<=1)&&q():P.length<=1&&q()},Z={mode:i,persisted:o,beforeEnter(P){let D=a;if(!n.isMounted)if(s)D=R||a;else return;P[gt]&&P[gt](!0);const q=K[U];q&&Ht(t,q)&&q.el[gt]&&q.el[gt](),j(D,[P])},enter(P){let D=c,q=l,ie=u;if(!n.isMounted)if(s)D=M||c,q=A||l,ie=x||u;else return;let N=!1;const Q=P[gr]=_e=>{N||(N=!0,_e?j(ie,[P]):j(q,[P]),Z.delayedLeave&&Z.delayedLeave(),P[gr]=void 0)};D?B(D,[P,Q]):Q()},leave(P,D){const q=String(t.key);if(P[gr]&&P[gr](!0),n.isUnmounting)return D();j(h,[P]);let ie=!1;const N=P[gt]=Q=>{ie||(ie=!0,D(),Q?j(w,[P]):j(m,[P]),P[gt]=void 0,K[q]===t&&delete K[q])};K[q]=t,p?B(p,[P,N]):N()},clone(P){return $s(P,e,n,r)}};return Z}function ms(t){if(Qr(t))return t=Ot(t),t.children=null,t}function lo(t){return Qr(t)?t.children?t.children[0]:void 0:t}function Bs(t,e){t.shapeFlag&6&&t.component?Bs(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function dc(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ke?(o.patchFlag&128&&s++,r=r.concat(dc(o.children,e,a))):(e||o.type!==$e)&&r.push(a!=null?Ot(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Zn(t,e){return z(t)?de({name:t.name},e,{setup:t}):t}const br=t=>!!t.type.__asyncLoader,Qr=t=>t.type.__isKeepAlive;function Ju(t,e){hc(t,"a",e)}function Yu(t,e){hc(t,"da",e)}function hc(t,e,n=me){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Zr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Qr(s.parent.vnode)&&Xu(r,e,n,s),s=s.parent}}function Xu(t,e,n,r){const s=Zr(e,t,r,!0);gc(()=>{fi(r[e],s)},n)}function Zr(t,e,n=me,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Zt();const a=er(n),c=Me(e,n,t,o);return a(),en(),c});return r?s.unshift(i):s.push(i),i}}const ot=t=>(e,n=me)=>(!ns||t==="sp")&&Zr(t,(...r)=>e(...r),n),Qu=ot("bm"),Ai=ot("m"),Zu=ot("bu"),ef=ot("u"),pc=ot("bum"),gc=ot("um"),tf=ot("sp"),nf=ot("rtg"),rf=ot("rtc");function sf(t,e=me){Zr("ec",t,e)}const Vs=t=>t?Pc(t)?rs(t)||t.proxy:Vs(t.parent):null,kn=de(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Vs(t.parent),$root:t=>Vs(t.root),$emit:t=>t.emit,$options:t=>Oi(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Ti(t.update)}),$nextTick:t=>t.n||(t.n=Si.bind(t.proxy)),$watch:t=>Ku.bind(t)}),_s=(t,e)=>t!==le&&!t.__isScriptSetup&&X(t,e),of={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(_s(r,e))return o[e]=1,r[e];if(s!==le&&X(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&X(l,e))return o[e]=3,i[e];if(n!==le&&X(n,e))return o[e]=4,n[e];Hs&&(o[e]=0)}}const u=kn[e];let h,p;if(u)return e==="$attrs"&&Pe(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==le&&X(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,X(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return _s(s,e)?(s[e]=n,!0):r!==le&&X(r,e)?(r[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==le&&X(t,o)||_s(e,o)||(a=i[0])&&X(a,o)||X(r,o)||X(kn,o)||X(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function uo(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Hs=!0;function af(t){const e=Oi(t),n=t.proxy,r=t.ctx;Hs=!1,e.beforeCreate&&fo(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:p,beforeUpdate:m,updated:w,activated:R,deactivated:M,beforeDestroy:A,beforeUnmount:x,destroyed:U,unmounted:K,render:j,renderTracked:B,renderTriggered:Z,errorCaptured:P,serverPrefetch:D,expose:q,inheritAttrs:ie,components:N,directives:Q,filters:_e}=e;if(l&&cf(l,r,null),o)for(const re in o){const ee=o[re];z(ee)&&(r[re]=ee.bind(n))}if(s){const re=s.call(n,n);ce(re)&&(t.data=Qn(re))}if(Hs=!0,i)for(const re in i){const ee=i[re],Xe=z(ee)?ee.bind(n,n):z(ee.get)?ee.get.bind(n,n):Le,at=!z(ee)&&z(ee.set)?ee.set.bind(n):Le,He=ke({get:Xe,set:at});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>He.value,set:Ce=>He.value=Ce})}if(a)for(const re in a)mc(a[re],r,n,re);if(c){const re=z(c)?c.call(n):c;Reflect.ownKeys(re).forEach(ee=>{Er(ee,re[ee])})}u&&fo(u,t,"c");function J(re,ee){$(ee)?ee.forEach(Xe=>re(Xe.bind(n))):ee&&re(ee.bind(n))}if(J(Qu,h),J(Ai,p),J(Zu,m),J(ef,w),J(Ju,R),J(Yu,M),J(sf,P),J(rf,B),J(nf,Z),J(pc,x),J(gc,K),J(tf,D),$(q))if(q.length){const re=t.exposed||(t.exposed={});q.forEach(ee=>{Object.defineProperty(re,ee,{get:()=>n[ee],set:Xe=>n[ee]=Xe})})}else t.exposed||(t.exposed={});j&&t.render===Le&&(t.render=j),ie!=null&&(t.inheritAttrs=ie),N&&(t.components=N),Q&&(t.directives=Q)}function cf(t,e,n=Le){$(t)&&(t=js(t));for(const r in t){const s=t[r];let i;ce(s)?"default"in s?i=Fe(s.from||r,s.default,!0):i=Fe(s.from||r):i=Fe(s),pe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function fo(t,e,n){Me($(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function mc(t,e,n,r){const s=r.includes(".")?lc(n,r):()=>n[r];if(he(t)){const i=e[t];z(i)&&An(s,i)}else if(z(t))An(s,t.bind(n));else if(ce(t))if($(t))t.forEach(i=>mc(i,e,n,r));else{const i=z(t.handler)?t.handler.bind(n):e[t.handler];z(i)&&An(s,i,t)}}function Oi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Nr(c,l,o,!0)),Nr(c,e,o)),ce(e)&&i.set(e,c),c}function Nr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Nr(t,i,n,!0),s&&s.forEach(o=>Nr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=lf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const lf={data:ho,props:po,emits:po,methods:Cn,computed:Cn,beforeCreate:Se,created:Se,beforeMount:Se,mounted:Se,beforeUpdate:Se,updated:Se,beforeDestroy:Se,beforeUnmount:Se,destroyed:Se,unmounted:Se,activated:Se,deactivated:Se,errorCaptured:Se,serverPrefetch:Se,components:Cn,directives:Cn,watch:ff,provide:ho,inject:uf};function ho(t,e){return e?t?function(){return de(z(t)?t.call(this,this):t,z(e)?e.call(this,this):e)}:e:t}function uf(t,e){return Cn(js(t),js(e))}function js(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Se(t,e){return t?[...new Set([].concat(t,e))]:e}function Cn(t,e){return t?de(Object.create(null),t,e):e}function po(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:de(Object.create(null),uo(t),uo(e??{})):e}function ff(t,e){if(!t)return e;if(!e)return t;const n=de(Object.create(null),t);for(const r in e)n[r]=Se(t[r],e[r]);return n}function _c(){return{app:null,config:{isNativeTag:Vl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let df=0;function hf(t,e){return function(r,s=null){z(r)||(r=de({},r)),s!=null&&!ce(s)&&(s=null);const i=_c(),o=new WeakSet;let a=!1;const c=i.app={_uid:df++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:$f,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&z(l.install)?(o.add(l),l.install(c,...u)):z(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const p=ve(r,s);return p.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,rs(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Vn=c;try{return l()}finally{Vn=null}}};return c}}let Vn=null;function Er(t,e){if(me){let n=me.provides;const r=me.parent&&me.parent.provides;r===n&&(n=me.provides=Object.create(r)),n[t]=e}}function Fe(t,e,n=!1){const r=me||Ee;if(r||Vn){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Vn._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&z(e)?e.call(r&&r.proxy):e}}function pf(){return!!(me||Ee||Vn)}function gf(t,e,n,r=!1){const s={},i={};Rr(i,ts,1),t.propsDefaults=Object.create(null),vc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ja(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function mf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Y(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(Yr(t.emitsOptions,p))continue;const m=e[p];if(c)if(X(i,p))m!==i[p]&&(i[p]=m,l=!0);else{const w=Ye(p);s[w]=Ws(c,a,w,m,t,!1)}else m!==i[p]&&(i[p]=m,l=!0)}}}else{vc(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!X(e,h)&&((u=En(h))===h||!X(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Ws(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!X(e,h))&&(delete i[h],l=!0)}l&&nt(t,"set","$attrs")}function vc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(vr(c))continue;const l=e[c];let u;s&&X(s,u=Ye(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Yr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Y(n),l=a||le;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Ws(s,c,h,l[h],t,!X(l,h))}}return o}function Ws(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=X(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&z(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=er(s);r=l[n]=c.call(null,e),u()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===En(n))&&(r=!0))}return r}function yc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!z(t)){const u=h=>{c=!0;const[p,m]=yc(h,e,!0);de(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ce(t)&&r.set(t,ln),ln;if($(i))for(let u=0;u<i.length;u++){const h=Ye(i[u]);go(h)&&(o[h]=le)}else if(i)for(const u in i){const h=Ye(u);if(go(h)){const p=i[u],m=o[h]=$(p)||z(p)?{type:p}:de({},p);if(m){const w=vo(Boolean,m.type),R=vo(String,m.type);m[0]=w>-1,m[1]=R<0||w<R,(w>-1||X(m,"default"))&&a.push(h)}}}const l=[o,a];return ce(t)&&r.set(t,l),l}function go(t){return t[0]!=="$"}function mo(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function _o(t,e){return mo(t)===mo(e)}function vo(t,e){return $(e)?e.findIndex(n=>_o(n,t)):z(e)&&_o(e,t)?0:-1}const bc=t=>t[0]==="_"||t==="$stable",ki=t=>$(t)?t.map(ze):[ze(t)],_f=(t,e,n)=>{if(e._n)return e;const r=Bn((...s)=>ki(e(...s)),n);return r._c=!1,r},Ec=(t,e,n)=>{const r=t._ctx;for(const s in t){if(bc(s))continue;const i=t[s];if(z(i))e[s]=_f(s,i,r);else if(i!=null){const o=ki(i);e[s]=()=>o}}},wc=(t,e)=>{const n=ki(e);t.slots.default=()=>n},vf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Y(e),Rr(e,"_",n)):Ec(e,t.slots={})}else t.slots={},e&&wc(t,e);Rr(t.slots,ts,1)},yf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=le;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(de(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Ec(e,s)),o=e}else e&&(wc(t,e),o={default:1});if(i)for(const a in s)!bc(a)&&o[a]==null&&delete s[a]};function Ks(t,e,n,r,s=!1){if($(t)){t.forEach((p,m)=>Ks(p,e&&($(e)?e[m]:e),n,r,s));return}if(br(r)&&!s)return;const i=r.shapeFlag&4?rs(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===le?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(he(l)?(u[l]=null,X(h,l)&&(h[l]=null)):pe(l)&&(l.value=null)),z(c))Tt(c,a,12,[o,u]);else{const p=he(c),m=pe(c);if(p||m){const w=()=>{if(t.f){const R=p?X(h,c)?h[c]:u[c]:c.value;s?$(R)&&fi(R,i):$(R)?R.includes(i)||R.push(i):p?(u[c]=[i],X(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,X(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(w.id=-1,Re(w,n)):w()}}}const Re=Hu;function bf(t){return Ef(t)}function Ef(t,e){const n=Na();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:p,setScopeId:m=Le,insertStaticContent:w}=t,R=(f,d,g,y=null,_=null,I=null,C=void 0,E=null,S=!!d.dynamicChildren)=>{if(f===d)return;f&&!Ht(f,d)&&(y=v(f),Ce(f,_,I,!0),f=null),d.patchFlag===-2&&(S=!1,d.dynamicChildren=null);const{type:b,ref:k,shapeFlag:V}=d;switch(b){case es:M(f,d,g,y);break;case $e:A(f,d,g,y);break;case ys:f==null&&x(d,g,y,C);break;case Ke:N(f,d,g,y,_,I,C,E,S);break;default:V&1?j(f,d,g,y,_,I,C,E,S):V&6?Q(f,d,g,y,_,I,C,E,S):(V&64||V&128)&&b.process(f,d,g,y,_,I,C,E,S,L)}k!=null&&_&&Ks(k,f&&f.ref,I,d||f,!d)},M=(f,d,g,y)=>{if(f==null)r(d.el=a(d.children),g,y);else{const _=d.el=f.el;d.children!==f.children&&l(_,d.children)}},A=(f,d,g,y)=>{f==null?r(d.el=c(d.children||""),g,y):d.el=f.el},x=(f,d,g,y)=>{[f.el,f.anchor]=w(f.children,d,g,y,f.el,f.anchor)},U=({el:f,anchor:d},g,y)=>{let _;for(;f&&f!==d;)_=p(f),r(f,g,y),f=_;r(d,g,y)},K=({el:f,anchor:d})=>{let g;for(;f&&f!==d;)g=p(f),s(f),f=g;s(d)},j=(f,d,g,y,_,I,C,E,S)=>{d.type==="svg"?C="svg":d.type==="math"&&(C="mathml"),f==null?B(d,g,y,_,I,C,E,S):D(f,d,_,I,C,E,S)},B=(f,d,g,y,_,I,C,E)=>{let S,b;const{props:k,shapeFlag:V,transition:F,dirs:W}=f;if(S=f.el=o(f.type,I,k&&k.is,k),V&8?u(S,f.children):V&16&&P(f.children,S,null,y,_,vs(f,I),C,E),W&&xt(f,null,y,"created"),Z(S,f,f.scopeId,C,y),k){for(const se in k)se!=="value"&&!vr(se)&&i(S,se,null,k[se],I,f.children,y,_,ye);"value"in k&&i(S,"value",null,k.value,I),(b=k.onVnodeBeforeMount)&&We(b,y,f)}W&&xt(f,null,y,"beforeMount");const G=wf(_,F);G&&F.beforeEnter(S),r(S,d,g),((b=k&&k.onVnodeMounted)||G||W)&&Re(()=>{b&&We(b,y,f),G&&F.enter(S),W&&xt(f,null,y,"mounted")},_)},Z=(f,d,g,y,_)=>{if(g&&m(f,g),y)for(let I=0;I<y.length;I++)m(f,y[I]);if(_){let I=_.subTree;if(d===I){const C=_.vnode;Z(f,C,C.scopeId,C.slotScopeIds,_.parent)}}},P=(f,d,g,y,_,I,C,E,S=0)=>{for(let b=S;b<f.length;b++){const k=f[b]=E?mt(f[b]):ze(f[b]);R(null,k,d,g,y,_,I,C,E)}},D=(f,d,g,y,_,I,C)=>{const E=d.el=f.el;let{patchFlag:S,dynamicChildren:b,dirs:k}=d;S|=f.patchFlag&16;const V=f.props||le,F=d.props||le;let W;if(g&&Ut(g,!1),(W=F.onVnodeBeforeUpdate)&&We(W,g,d,f),k&&xt(d,f,g,"beforeUpdate"),g&&Ut(g,!0),b?q(f.dynamicChildren,b,E,g,y,vs(d,_),I):C||ee(f,d,E,null,g,y,vs(d,_),I,!1),S>0){if(S&16)ie(E,d,V,F,g,y,_);else if(S&2&&V.class!==F.class&&i(E,"class",null,F.class,_),S&4&&i(E,"style",V.style,F.style,_),S&8){const G=d.dynamicProps;for(let se=0;se<G.length;se++){const fe=G[se],ge=V[fe],xe=F[fe];(xe!==ge||fe==="value")&&i(E,fe,ge,xe,_,f.children,g,y,ye)}}S&1&&f.children!==d.children&&u(E,d.children)}else!C&&b==null&&ie(E,d,V,F,g,y,_);((W=F.onVnodeUpdated)||k)&&Re(()=>{W&&We(W,g,d,f),k&&xt(d,f,g,"updated")},y)},q=(f,d,g,y,_,I,C)=>{for(let E=0;E<d.length;E++){const S=f[E],b=d[E],k=S.el&&(S.type===Ke||!Ht(S,b)||S.shapeFlag&70)?h(S.el):g;R(S,b,k,null,y,_,I,C,!0)}},ie=(f,d,g,y,_,I,C)=>{if(g!==y){if(g!==le)for(const E in g)!vr(E)&&!(E in y)&&i(f,E,g[E],null,C,d.children,_,I,ye);for(const E in y){if(vr(E))continue;const S=y[E],b=g[E];S!==b&&E!=="value"&&i(f,E,b,S,C,d.children,_,I,ye)}"value"in y&&i(f,"value",g.value,y.value,C)}},N=(f,d,g,y,_,I,C,E,S)=>{const b=d.el=f?f.el:a(""),k=d.anchor=f?f.anchor:a("");let{patchFlag:V,dynamicChildren:F,slotScopeIds:W}=d;W&&(E=E?E.concat(W):W),f==null?(r(b,g,y),r(k,g,y),P(d.children||[],g,k,_,I,C,E,S)):V>0&&V&64&&F&&f.dynamicChildren?(q(f.dynamicChildren,F,g,_,I,C,E),(d.key!=null||_&&d===_.subTree)&&Ic(f,d,!0)):ee(f,d,g,k,_,I,C,E,S)},Q=(f,d,g,y,_,I,C,E,S)=>{d.slotScopeIds=E,f==null?d.shapeFlag&512?_.ctx.activate(d,g,y,C,S):_e(d,g,y,_,I,C,S):Ie(f,d,S)},_e=(f,d,g,y,_,I,C)=>{const E=f.component=kf(f,y,_);if(Qr(f)&&(E.ctx.renderer=L),Lf(E),E.asyncDep){if(_&&_.registerDep(E,J),!f.el){const S=E.subTree=ve($e);A(null,S,d,g)}}else J(E,f,d,g,_,I,C)},Ie=(f,d,g)=>{const y=d.component=f.component;if(Uu(f,d,g))if(y.asyncDep&&!y.asyncResolved){re(y,d,g);return}else y.next=d,ku(y.update),y.effect.dirty=!0,y.update();else d.el=f.el,y.vnode=d},J=(f,d,g,y,_,I,C)=>{const E=()=>{if(f.isMounted){let{next:k,bu:V,u:F,parent:W,vnode:G}=f;{const sn=Sc(f);if(sn){k&&(k.el=G.el,re(f,k,C)),sn.asyncDep.then(()=>{f.isUnmounted||E()});return}}let se=k,fe;Ut(f,!1),k?(k.el=G.el,re(f,k,C)):k=G,V&&yr(V),(fe=k.props&&k.props.onVnodeBeforeUpdate)&&We(fe,W,k,G),Ut(f,!0);const ge=gs(f),xe=f.subTree;f.subTree=ge,R(xe,ge,h(xe.el),v(xe),f,_,I),k.el=ge.el,se===null&&Fu(f,ge.el),F&&Re(F,_),(fe=k.props&&k.props.onVnodeUpdated)&&Re(()=>We(fe,W,k,G),_)}else{let k;const{el:V,props:F}=d,{bm:W,m:G,parent:se}=f,fe=br(d);if(Ut(f,!1),W&&yr(W),!fe&&(k=F&&F.onVnodeBeforeMount)&&We(k,se,d),Ut(f,!0),V&&ue){const ge=()=>{f.subTree=gs(f),ue(V,f.subTree,f,_,null)};fe?d.type.__asyncLoader().then(()=>!f.isUnmounted&&ge()):ge()}else{const ge=f.subTree=gs(f);R(null,ge,g,y,f,_,I),d.el=ge.el}if(G&&Re(G,_),!fe&&(k=F&&F.onVnodeMounted)){const ge=d;Re(()=>We(k,se,ge),_)}(d.shapeFlag&256||se&&br(se.vnode)&&se.vnode.shapeFlag&256)&&f.a&&Re(f.a,_),f.isMounted=!0,d=g=y=null}},S=f.effect=new mi(E,Le,()=>Ti(b),f.scope),b=f.update=()=>{S.dirty&&S.run()};b.id=f.uid,Ut(f,!0),b()},re=(f,d,g)=>{d.component=f;const y=f.vnode.props;f.vnode=d,f.next=null,mf(f,d.props,y,g),yf(f,d.children,g),Zt(),oo(f),en()},ee=(f,d,g,y,_,I,C,E,S=!1)=>{const b=f&&f.children,k=f?f.shapeFlag:0,V=d.children,{patchFlag:F,shapeFlag:W}=d;if(F>0){if(F&128){at(b,V,g,y,_,I,C,E,S);return}else if(F&256){Xe(b,V,g,y,_,I,C,E,S);return}}W&8?(k&16&&ye(b,_,I),V!==b&&u(g,V)):k&16?W&16?at(b,V,g,y,_,I,C,E,S):ye(b,_,I,!0):(k&8&&u(g,""),W&16&&P(V,g,y,_,I,C,E,S))},Xe=(f,d,g,y,_,I,C,E,S)=>{f=f||ln,d=d||ln;const b=f.length,k=d.length,V=Math.min(b,k);let F;for(F=0;F<V;F++){const W=d[F]=S?mt(d[F]):ze(d[F]);R(f[F],W,g,null,_,I,C,E,S)}b>k?ye(f,_,I,!0,!1,V):P(d,g,y,_,I,C,E,S,V)},at=(f,d,g,y,_,I,C,E,S)=>{let b=0;const k=d.length;let V=f.length-1,F=k-1;for(;b<=V&&b<=F;){const W=f[b],G=d[b]=S?mt(d[b]):ze(d[b]);if(Ht(W,G))R(W,G,g,null,_,I,C,E,S);else break;b++}for(;b<=V&&b<=F;){const W=f[V],G=d[F]=S?mt(d[F]):ze(d[F]);if(Ht(W,G))R(W,G,g,null,_,I,C,E,S);else break;V--,F--}if(b>V){if(b<=F){const W=F+1,G=W<k?d[W].el:y;for(;b<=F;)R(null,d[b]=S?mt(d[b]):ze(d[b]),g,G,_,I,C,E,S),b++}}else if(b>F)for(;b<=V;)Ce(f[b],_,I,!0),b++;else{const W=b,G=b,se=new Map;for(b=G;b<=F;b++){const Ae=d[b]=S?mt(d[b]):ze(d[b]);Ae.key!=null&&se.set(Ae.key,b)}let fe,ge=0;const xe=F-G+1;let sn=!1,Gi=0;const In=new Array(xe);for(b=0;b<xe;b++)In[b]=0;for(b=W;b<=V;b++){const Ae=f[b];if(ge>=xe){Ce(Ae,_,I,!0);continue}let je;if(Ae.key!=null)je=se.get(Ae.key);else for(fe=G;fe<=F;fe++)if(In[fe-G]===0&&Ht(Ae,d[fe])){je=fe;break}je===void 0?Ce(Ae,_,I,!0):(In[je-G]=b+1,je>=Gi?Gi=je:sn=!0,R(Ae,d[je],g,null,_,I,C,E,S),ge++)}const Ji=sn?If(In):ln;for(fe=Ji.length-1,b=xe-1;b>=0;b--){const Ae=G+b,je=d[Ae],Yi=Ae+1<k?d[Ae+1].el:y;In[b]===0?R(null,je,g,Yi,_,I,C,E,S):sn&&(fe<0||b!==Ji[fe]?He(je,g,Yi,2):fe--)}}},He=(f,d,g,y,_=null)=>{const{el:I,type:C,transition:E,children:S,shapeFlag:b}=f;if(b&6){He(f.component.subTree,d,g,y);return}if(b&128){f.suspense.move(d,g,y);return}if(b&64){C.move(f,d,g,L);return}if(C===Ke){r(I,d,g);for(let V=0;V<S.length;V++)He(S[V],d,g,y);r(f.anchor,d,g);return}if(C===ys){U(f,d,g);return}if(y!==2&&b&1&&E)if(y===0)E.beforeEnter(I),r(I,d,g),Re(()=>E.enter(I),_);else{const{leave:V,delayLeave:F,afterLeave:W}=E,G=()=>r(I,d,g),se=()=>{V(I,()=>{G(),W&&W()})};F?F(I,G,se):se()}else r(I,d,g)},Ce=(f,d,g,y=!1,_=!1)=>{const{type:I,props:C,ref:E,children:S,dynamicChildren:b,shapeFlag:k,patchFlag:V,dirs:F}=f;if(E!=null&&Ks(E,null,g,f,!0),k&256){d.ctx.deactivate(f);return}const W=k&1&&F,G=!br(f);let se;if(G&&(se=C&&C.onVnodeBeforeUnmount)&&We(se,d,f),k&6)cr(f.component,g,y);else{if(k&128){f.suspense.unmount(g,y);return}W&&xt(f,null,d,"beforeUnmount"),k&64?f.type.remove(f,d,g,_,L,y):b&&(I!==Ke||V>0&&V&64)?ye(b,d,g,!1,!0):(I===Ke&&V&384||!_&&k&16)&&ye(S,d,g),y&&nn(f)}(G&&(se=C&&C.onVnodeUnmounted)||W)&&Re(()=>{se&&We(se,d,f),W&&xt(f,null,d,"unmounted")},g)},nn=f=>{const{type:d,el:g,anchor:y,transition:_}=f;if(d===Ke){rn(g,y);return}if(d===ys){K(f);return}const I=()=>{s(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(f.shapeFlag&1&&_&&!_.persisted){const{leave:C,delayLeave:E}=_,S=()=>C(g,I);E?E(f.el,I,S):S()}else I()},rn=(f,d)=>{let g;for(;f!==d;)g=p(f),s(f),f=g;s(d)},cr=(f,d,g)=>{const{bum:y,scope:_,update:I,subTree:C,um:E}=f;y&&yr(y),_.stop(),I&&(I.active=!1,Ce(C,f,d,g)),E&&Re(E,d),Re(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},ye=(f,d,g,y=!1,_=!1,I=0)=>{for(let C=I;C<f.length;C++)Ce(f[C],d,g,y,_)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el);let O=!1;const T=(f,d,g)=>{f==null?d._vnode&&Ce(d._vnode,null,null,!0):R(d._vnode||null,f,d,null,null,null,g),O||(O=!0,oo(),sc(),O=!1),d._vnode=f},L={p:R,um:Ce,m:He,r:nn,mt:_e,mc:P,pc:ee,pbc:q,n:v,o:t};let te,ue;return e&&([te,ue]=e(L)),{render:T,hydrate:te,createApp:hf(T,te)}}function vs({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ut({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function wf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ic(t,e,n=!1){const r=t.children,s=e.children;if($(r)&&$(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=mt(s[i]),a.el=o.el),n||Ic(o,a)),a.type===es&&(a.el=o.el)}}function If(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Sc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Sc(e)}const Sf=t=>t.__isTeleport,Ke=Symbol.for("v-fgt"),es=Symbol.for("v-txt"),$e=Symbol.for("v-cmt"),ys=Symbol.for("v-stc"),Nn=[];let Ue=null;function st(t=!1){Nn.push(Ue=t?null:[])}function Tf(){Nn.pop(),Ue=Nn[Nn.length-1]||null}let Hn=1;function yo(t){Hn+=t}function Tc(t){return t.dynamicChildren=Hn>0?Ue||ln:null,Tf(),Hn>0&&Ue&&Ue.push(t),t}function qt(t,e,n,r,s,i){return Tc(ae(t,e,n,r,s,i,!0))}function Cc(t,e,n,r,s){return Tc(ve(t,e,n,r,s,!0))}function zs(t){return t?t.__v_isVNode===!0:!1}function Ht(t,e){return t.type===e.type&&t.key===e.key}const ts="__vInternal",Rc=({key:t})=>t??null,wr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?he(t)||pe(t)||z(t)?{i:Ee,r:t,k:e,f:!!n}:t:null);function ae(t,e=null,n=null,r=0,s=null,i=t===Ke?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Rc(e),ref:e&&wr(e),scopeId:Xr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ee};return a?(Ni(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=he(n)?8:16),Hn>0&&!o&&Ue&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ue.push(c),c}const ve=Cf;function Cf(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===$u)&&(t=$e),zs(t)){const a=Ot(t,e,!0);return n&&Ni(a,n),Hn>0&&!i&&Ue&&(a.shapeFlag&6?Ue[Ue.indexOf(t)]=a:Ue.push(a)),a.patchFlag|=-2,a}if(Ff(t)&&(t=t.__vccOpts),e){e=Rf(e);let{class:a,style:c}=e;a&&!he(a)&&(e.class=pi(a)),ce(c)&&(Xa(c)&&!$(c)&&(c=de({},c)),e.style=hi(c))}const o=he(t)?1:Vu(t)?128:Sf(t)?64:ce(t)?4:z(t)?2:0;return ae(t,e,n,r,s,o,i,!0)}function Rf(t){return t?Xa(t)||ts in t?de({},t):t:null}function Ot(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Pf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Rc(a),ref:e&&e.ref?n&&s?$(s)?s.concat(wr(e)):[s,wr(e)]:wr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ke?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ot(t.ssContent),ssFallback:t.ssFallback&&Ot(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function jn(t=" ",e=0){return ve(es,null,t,e)}function Lr(t="",e=!1){return e?(st(),Cc($e,null,t)):ve($e,null,t)}function ze(t){return t==null||typeof t=="boolean"?ve($e):$(t)?ve(Ke,null,t.slice()):typeof t=="object"?mt(t):ve(es,null,String(t))}function mt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ot(t)}function Ni(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ni(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ts in e)?e._ctx=Ee:s===3&&Ee&&(Ee.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else z(e)?(e={default:e,_ctx:Ee},n=32):(e=String(e),r&64?(n=16,e=[jn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Pf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=pi([e.class,r.class]));else if(s==="style")e.style=hi([e.style,r.style]);else if(Wr(s)){const i=e[s],o=r[s];o&&i!==o&&!($(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function We(t,e,n,r=null){Me(t,e,7,[n,r])}const Af=_c();let Of=0;function kf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Af,i={uid:Of++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Da(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yc(r,s),emitsOptions:oc(r,s),emit:null,emitted:null,propsDefaults:le,inheritAttrs:r.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Mu.bind(null,i),t.ce&&t.ce(i),i}let me=null;const Nf=()=>me||Ee;let Mr,qs;{const t=Na(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Mr=e("__VUE_INSTANCE_SETTERS__",n=>me=n),qs=e("__VUE_SSR_SETTERS__",n=>ns=n)}const er=t=>{const e=me;return Mr(t),t.scope.on(),()=>{t.scope.off(),Mr(e)}},bo=()=>{me&&me.scope.off(),Mr(null)};function Pc(t){return t.vnode.shapeFlag&4}let ns=!1;function Lf(t,e=!1){e&&qs(e);const{props:n,children:r}=t.vnode,s=Pc(t);gf(t,n,s,e),vf(t,r);const i=s?Mf(t,e):void 0;return e&&qs(!1),i}function Mf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Gr(new Proxy(t.ctx,of));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?xf(t):null,i=er(t);Zt();const o=Tt(r,t,0,[t.props,s]);if(en(),i(),Aa(o)){if(o.then(bo,bo),e)return o.then(a=>{Eo(t,a,e)}).catch(a=>{Jr(a,t,0)});t.asyncDep=o}else Eo(t,o,e)}else Ac(t,e)}function Eo(t,e,n){z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ce(e)&&(t.setupState=tc(e)),Ac(t,n)}let wo;function Ac(t,e,n){const r=t.type;if(!t.render){if(!e&&wo&&!r.render){const s=r.template||Oi(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=de(de({isCustomElement:i,delimiters:a},o),c);r.render=wo(s,l)}}t.render=r.render||Le}{const s=er(t);Zt();try{af(t)}finally{en(),s()}}}function Df(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Pe(t,"get","$attrs"),e[n]}}))}function xf(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Df(t)},slots:t.slots,emit:t.emit,expose:e}}function rs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(tc(Gr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in kn)return kn[n](t)},has(e,n){return n in e||n in kn}}))}function Uf(t,e=!0){return z(t)?t.displayName||t.name:t.name||e&&t.__name}function Ff(t){return z(t)&&"__vccOpts"in t}const ke=(t,e)=>wu(t,e,ns);function Li(t,e,n){const r=arguments.length;return r===2?ce(e)&&!$(e)?zs(e)?ve(t,null,[e]):ve(t,e):ve(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&zs(n)&&(n=[n]),ve(t,e,n))}const $f="3.4.14";/**
* @vue/runtime-dom v3.4.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Bf="http://www.w3.org/2000/svg",Vf="http://www.w3.org/1998/Math/MathML",_t=typeof document<"u"?document:null,Io=_t&&_t.createElement("template"),Hf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?_t.createElementNS(Bf,t):e==="mathml"?_t.createElementNS(Vf,t):_t.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>_t.createTextNode(t),createComment:t=>_t.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>_t.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Io.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=Io.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},lt="transition",Sn="animation",Wn=Symbol("_vtc"),ss=(t,{slots:e})=>Li(Gu,jf(t),e);ss.displayName="Transition";const Oc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ss.props=de({},uc,Oc);const Ft=(t,e=[])=>{$(t)?t.forEach(n=>n(...e)):t&&t(...e)},So=t=>t?$(t)?t.some(e=>e.length>1):t.length>1:!1;function jf(t){const e={};for(const N in t)N in Oc||(e[N]=t[N]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,w=Wf(s),R=w&&w[0],M=w&&w[1],{onBeforeEnter:A,onEnter:x,onEnterCancelled:U,onLeave:K,onLeaveCancelled:j,onBeforeAppear:B=A,onAppear:Z=x,onAppearCancelled:P=U}=e,D=(N,Q,_e)=>{$t(N,Q?u:a),$t(N,Q?l:o),_e&&_e()},q=(N,Q)=>{N._isLeaving=!1,$t(N,h),$t(N,m),$t(N,p),Q&&Q()},ie=N=>(Q,_e)=>{const Ie=N?Z:x,J=()=>D(Q,N,_e);Ft(Ie,[Q,J]),To(()=>{$t(Q,N?c:i),ut(Q,N?u:a),So(Ie)||Co(Q,r,R,J)})};return de(e,{onBeforeEnter(N){Ft(A,[N]),ut(N,i),ut(N,o)},onBeforeAppear(N){Ft(B,[N]),ut(N,c),ut(N,l)},onEnter:ie(!1),onAppear:ie(!0),onLeave(N,Q){N._isLeaving=!0;const _e=()=>q(N,Q);ut(N,h),qf(),ut(N,p),To(()=>{N._isLeaving&&($t(N,h),ut(N,m),So(K)||Co(N,r,M,_e))}),Ft(K,[N,_e])},onEnterCancelled(N){D(N,!1),Ft(U,[N])},onAppearCancelled(N){D(N,!0),Ft(P,[N])},onLeaveCancelled(N){q(N),Ft(j,[N])}})}function Wf(t){if(t==null)return null;if(ce(t))return[bs(t.enter),bs(t.leave)];{const e=bs(t);return[e,e]}}function bs(t){return zl(t)}function ut(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Wn]||(t[Wn]=new Set)).add(e)}function $t(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Wn];n&&(n.delete(e),n.size||(t[Wn]=void 0))}function To(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Kf=0;function Co(t,e,n,r){const s=t._endId=++Kf,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=zf(t,e);if(!o)return r();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,p),i()},p=m=>{m.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,p)}function zf(t,e){const n=window.getComputedStyle(t),r=w=>(n[w]||"").split(", "),s=r(`${lt}Delay`),i=r(`${lt}Duration`),o=Ro(s,i),a=r(`${Sn}Delay`),c=r(`${Sn}Duration`),l=Ro(a,c);let u=null,h=0,p=0;e===lt?o>0&&(u=lt,h=o,p=i.length):e===Sn?l>0&&(u=Sn,h=l,p=c.length):(h=Math.max(o,l),u=h>0?o>l?lt:Sn:null,p=u?u===lt?i.length:c.length:0);const m=u===lt&&/\b(transform|all)(,|$)/.test(r(`${lt}Property`).toString());return{type:u,timeout:h,propCount:p,hasTransform:m}}function Ro(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Po(n)+Po(t[r])))}function Po(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function qf(){return document.body.offsetHeight}function Gf(t,e,n){const r=t[Wn];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Jf=Symbol("_vod"),Yf=Symbol("");function Xf(t,e,n){const r=t.style,s=r.display,i=he(n);if(n&&!i){if(e&&!he(e))for(const o in e)n[o]==null&&Gs(r,o,"");for(const o in n)Gs(r,o,n[o])}else if(i){if(e!==n){const o=r[Yf];o&&(n+=";"+o),r.cssText=n}}else e&&t.removeAttribute("style");Jf in t&&(r.display=s)}const Ao=/\s*!important$/;function Gs(t,e,n){if($(n))n.forEach(r=>Gs(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Qf(t,e);Ao.test(n)?t.setProperty(En(r),n.replace(Ao,""),"important"):t[r]=n}}const Oo=["Webkit","Moz","ms"],Es={};function Qf(t,e){const n=Es[e];if(n)return n;let r=Ye(e);if(r!=="filter"&&r in t)return Es[e]=r;r=zr(r);for(let s=0;s<Oo.length;s++){const i=Oo[s]+r;if(i in t)return Es[e]=i}return e}const ko="http://www.w3.org/1999/xlink";function Zf(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ko,e.slice(6,e.length)):t.setAttributeNS(ko,e,n);else{const i=Ql(e);n==null||i&&!La(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function ed(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=La(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Ze(t,e,n,r){t.addEventListener(e,n,r)}function td(t,e,n,r){t.removeEventListener(e,n,r)}const No=Symbol("_vei");function nd(t,e,n,r,s=null){const i=t[No]||(t[No]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=rd(e);if(r){const l=i[e]=od(r,s);Ze(t,a,l,c)}else o&&(td(t,a,o,c),i[e]=void 0)}}const Lo=/(?:Once|Passive|Capture)$/;function rd(t){let e;if(Lo.test(t)){e={};let r;for(;r=t.match(Lo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):En(t.slice(2)),e]}let ws=0;const sd=Promise.resolve(),id=()=>ws||(sd.then(()=>ws=0),ws=Date.now());function od(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Me(ad(r,n.value),e,5,[r])};return n.value=t,n.attached=id(),n}function ad(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Mo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,cd=(t,e,n,r,s,i,o,a,c)=>{const l=s==="svg";e==="class"?Gf(t,r,l):e==="style"?Xf(t,n,r):Wr(e)?ui(e)||nd(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ld(t,e,r,l))?ed(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Zf(t,e,r,l))};function ld(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Mo(e)&&z(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Mo(e)&&he(n)?!1:e in t}const kt=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>yr(e,n):e};function ud(t){t.target.composing=!0}function Do(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const De=Symbol("_assign"),Dr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[De]=kt(s);const i=r||s.props&&s.props.type==="number";Ze(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Pr(a)),t[De](a)}),n&&Ze(t,"change",()=>{t.value=t.value.trim()}),e||(Ze(t,"compositionstart",ud),Ze(t,"compositionend",Do),Ze(t,"change",Do))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[De]=kt(i),t.composing)return;const o=s||t.type==="number"?Pr(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},fd={deep:!0,created(t,e,n){t[De]=kt(n),Ze(t,"change",()=>{const r=t._modelValue,s=mn(t),i=t.checked,o=t[De];if($(r)){const a=gi(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(bn(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(kc(t,i))})},mounted:xo,beforeUpdate(t,e,n){t[De]=kt(n),xo(t,e,n)}};function xo(t,{value:e,oldValue:n},r){t._modelValue=e,$(e)?t.checked=gi(e,r.props.value)>-1:bn(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Jt(e,kc(t,!0)))}const dd={created(t,{value:e},n){t.checked=Jt(e,n.props.value),t[De]=kt(n),Ze(t,"change",()=>{t[De](mn(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[De]=kt(r),e!==n&&(t.checked=Jt(e,r.props.value))}},hd={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=bn(e);Ze(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Pr(mn(o)):mn(o));t[De](t.multiple?s?new Set(i):i:i[0])}),t[De]=kt(r)},mounted(t,{value:e}){Uo(t,e)},beforeUpdate(t,e,n){t[De]=kt(n)},updated(t,{value:e}){Uo(t,e)}};function Uo(t,e){const n=t.multiple;if(!(n&&!$(e)&&!bn(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=mn(i);if(n)$(e)?i.selected=gi(e,o)>-1:i.selected=e.has(o);else if(Jt(mn(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function mn(t){return"_value"in t?t._value:t.value}function kc(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Js={created(t,e,n){mr(t,e,n,null,"created")},mounted(t,e,n){mr(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){mr(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){mr(t,e,n,r,"updated")}};function pd(t,e){switch(t){case"SELECT":return hd;case"TEXTAREA":return Dr;default:switch(e){case"checkbox":return fd;case"radio":return dd;default:return Dr}}}function mr(t,e,n,r,s){const o=pd(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const gd=["ctrl","shift","alt","meta"],md={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>gd.some(n=>t[`${n}Key`]&&!e.includes(n))},Nc=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=md[e[o]];if(a&&a(s,e))return}return t(s,...i)})},_d=de({patchProp:cd},Hf);let Fo;function vd(){return Fo||(Fo=bf(_d))}const yd=(...t)=>{const e=vd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Ed(r);if(!s)return;const i=e._component;!z(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,bd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function bd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Ed(t){return he(t)?document.querySelector(t):t}var wd=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Lc;const is=t=>Lc=t,Mc=Symbol();function Ys(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ln;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ln||(Ln={}));function Id(){const t=xa(!0),e=t.run(()=>Te({}));let n=[],r=[];const s=Gr({install(i){is(s),s._a=i,i.provide(Mc,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!wd?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Dc=()=>{};function $o(t,e,n,r=Dc){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Ua()&&tu(s),s}function on(t,...e){t.slice().forEach(n=>{n(...e)})}const Sd=t=>t();function Xs(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Ys(s)&&Ys(r)&&t.hasOwnProperty(n)&&!pe(r)&&!St(r)?t[n]=Xs(s,r):t[n]=r}return t}const Td=Symbol();function Cd(t){return!Ys(t)||!t.hasOwnProperty(Td)}const{assign:ht}=Object;function Rd(t){return!!(pe(t)&&t.effect)}function Pd(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=Cu(n.state.value[t]);return ht(u,i,Object.keys(o||{}).reduce((h,p)=>(h[p]=Gr(ke(()=>{is(n);const m=n._s.get(t);return o[p].call(m,m)})),h),{}))}return c=xc(t,l,e,n,r,!0),c}function xc(t,e,n={},r,s,i){let o;const a=ht({actions:{}},n),c={deep:!0};let l,u,h=[],p=[],m;const w=r.state.value[t];!i&&!w&&(r.state.value[t]={}),Te({});let R;function M(P){let D;l=u=!1,typeof P=="function"?(P(r.state.value[t]),D={type:Ln.patchFunction,storeId:t,events:m}):(Xs(r.state.value[t],P),D={type:Ln.patchObject,payload:P,storeId:t,events:m});const q=R=Symbol();Si().then(()=>{R===q&&(l=!0)}),u=!0,on(h,D,r.state.value[t])}const A=i?function(){const{state:D}=n,q=D?D():{};this.$patch(ie=>{ht(ie,q)})}:Dc;function x(){o.stop(),h=[],p=[],r._s.delete(t)}function U(P,D){return function(){is(r);const q=Array.from(arguments),ie=[],N=[];function Q(J){ie.push(J)}function _e(J){N.push(J)}on(p,{args:q,name:P,store:j,after:Q,onError:_e});let Ie;try{Ie=D.apply(this&&this.$id===t?this:j,q)}catch(J){throw on(N,J),J}return Ie instanceof Promise?Ie.then(J=>(on(ie,J),J)).catch(J=>(on(N,J),Promise.reject(J))):(on(ie,Ie),Ie)}}const K={_p:r,$id:t,$onAction:$o.bind(null,p),$patch:M,$reset:A,$subscribe(P,D={}){const q=$o(h,P,D.detached,()=>ie()),ie=o.run(()=>An(()=>r.state.value[t],N=>{(D.flush==="sync"?u:l)&&P({storeId:t,type:Ln.direct,events:m},N)},ht({},c,D)));return q},$dispose:x},j=Qn(K);r._s.set(t,j);const Z=(r._a&&r._a.runWithContext||Sd)(()=>r._e.run(()=>(o=xa()).run(e)));for(const P in Z){const D=Z[P];if(pe(D)&&!Rd(D)||St(D))i||(w&&Cd(D)&&(pe(D)?D.value=w[P]:Xs(D,w[P])),r.state.value[t][P]=D);else if(typeof D=="function"){const q=U(P,D);Z[P]=q,a.actions[P]=D}}return ht(j,Z),ht(Y(j),Z),Object.defineProperty(j,"$state",{get:()=>r.state.value[t],set:P=>{M(D=>{ht(D,P)})}}),r._p.forEach(P=>{ht(j,o.run(()=>P({store:j,app:r._a,pinia:r,options:a})))}),w&&i&&n.hydrate&&n.hydrate(j.$state,w),l=!0,u=!0,j}function Ad(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=pf();return a=a||(l?Fe(Mc,null):null),a&&is(a),a=Lc,a._s.has(r)||(i?xc(r,e,s,a):Pd(r,s,a)),a._s.get(r)}return o.$id=r,o}const os=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Od={};function kd(t,e){const n=Pi("router-view");return st(),Cc(n)}const Nd=os(Od,[["render",kd]]);/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const an=typeof window<"u";function Ld(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ne=Object.assign;function Is(t,e){const n={};for(const r in e){const s=e[r];n[r]=Be(s)?s.map(t):t(s)}return n}const Mn=()=>{},Be=Array.isArray,Md=/\/$/,Dd=t=>t.replace(Md,"");function Ss(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=$d(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function xd(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Bo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ud(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&_n(e.matched[r],n.matched[s])&&Uc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function _n(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Uc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Fd(t[n],e[n]))return!1;return!0}function Fd(t,e){return Be(t)?Vo(t,e):Be(e)?Vo(e,t):t===e}function Vo(t,e){return Be(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function $d(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Kn;(function(t){t.pop="pop",t.push="push"})(Kn||(Kn={}));var Dn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Dn||(Dn={}));function Bd(t){if(!t)if(an){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Dd(t)}const Vd=/^[^#]+#/;function Hd(t,e){return t.replace(Vd,"#")+e}function jd(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const as=()=>({left:window.pageXOffset,top:window.pageYOffset});function Wd(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=jd(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ho(t,e){return(history.state?history.state.position-e:-1)+t}const Qs=new Map;function Kd(t,e){Qs.set(t,e)}function zd(t){const e=Qs.get(t);return Qs.delete(t),e}let qd=()=>location.protocol+"//"+location.host;function Fc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Bo(c,"")}return Bo(n,t)+r+s}function Gd(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=Fc(t,location),w=n.value,R=e.value;let M=0;if(p){if(n.value=m,e.value=p,o&&o===w){o=null;return}M=R?p.position-R.position:0}else r(m);s.forEach(A=>{A(n.value,w,{delta:M,type:Kn.pop,direction:M?M>0?Dn.forward:Dn.back:Dn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const m=()=>{const w=s.indexOf(p);w>-1&&s.splice(w,1)};return i.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(ne({},p.state,{scroll:as()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function jo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?as():null}}function Jd(t){const{history:e,location:n}=window,r={value:Fc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:qd()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(c,l){const u=ne({},e.state,jo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ne({},s.value,e.state,{forward:c,scroll:as()});i(u.current,u,!0);const h=ne({},jo(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Yd(t){t=Bd(t);const e=Jd(t),n=Gd(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ne({location:"",base:t,go:r,createHref:Hd.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Xd(t){return typeof t=="string"||t&&typeof t=="object"}function $c(t){return typeof t=="string"||typeof t=="symbol"}const ft={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Bc=Symbol("");var Wo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Wo||(Wo={}));function vn(t,e){return ne(new Error,{type:t,[Bc]:!0},e)}function Qe(t,e){return t instanceof Error&&Bc in t&&(e==null||!!(t.type&e))}const Ko="[^/]+?",Qd={sensitive:!1,strict:!1,start:!0,end:!0},Zd=/[.+*?^${}()[\]/\\]/g;function eh(t,e){const n=ne({},Qd,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const p=l[h];let m=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(Zd,"\\$&"),m+=40;else if(p.type===1){const{value:w,repeatable:R,optional:M,regexp:A}=p;i.push({name:w,repeatable:R,optional:M});const x=A||Ko;if(x!==Ko){m+=10;try{new RegExp(`(${x})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${w}" (${x}): `+K.message)}}let U=R?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(U=M&&l.length<2?`(?:/${U})`:"/"+U),M&&(U+="?"),s+=U,m+=20,M&&(m+=-8),R&&(m+=-20),x===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",w=i[p-1];h[w.name]=m&&w.repeatable?m.split("/"):m}return h}function c(l){let u="",h=!1;for(const p of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:w,repeatable:R,optional:M}=m,A=w in l?l[w]:"";if(Be(A)&&!R)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const x=Be(A)?A.join("/"):A;if(!x)if(M)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${w}"`);u+=x}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function th(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function nh(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=th(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(zo(r))return 1;if(zo(s))return-1}return s.length-r.length}function zo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const rh={type:0,value:""},sh=/[a-zA-Z0-9_]/;function ih(t){if(!t)return[[]];if(t==="/")return[[rh]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:sh.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function oh(t,e,n){const r=eh(ih(t.path),n),s=ne(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function ah(t,e){const n=[],r=new Map;e=Jo({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,p){const m=!p,w=ch(u);w.aliasOf=p&&p.record;const R=Jo(e,u),M=[w];if("alias"in u){const U=typeof u.alias=="string"?[u.alias]:u.alias;for(const K of U)M.push(ne({},w,{components:p?p.record.components:w.components,path:K,aliasOf:p?p.record:w}))}let A,x;for(const U of M){const{path:K}=U;if(h&&K[0]!=="/"){const j=h.record.path,B=j[j.length-1]==="/"?"":"/";U.path=h.record.path+(K&&B+K)}if(A=oh(U,h,R),p?p.alias.push(A):(x=x||A,x!==A&&x.alias.push(A),m&&u.name&&!Go(A)&&o(u.name)),w.children){const j=w.children;for(let B=0;B<j.length;B++)i(j[B],A,p&&p.children[B])}p=p||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&c(A)}return x?()=>{o(x)}:Mn}function o(u){if($c(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&nh(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Vc(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Go(u)&&r.set(u.record.name,u)}function l(u,h){let p,m={},w,R;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw vn(1,{location:u});R=p.record.name,m=ne(qo(h.params,p.keys.filter(x=>!x.optional).map(x=>x.name)),u.params&&qo(u.params,p.keys.map(x=>x.name))),w=p.stringify(m)}else if("path"in u)w=u.path,p=n.find(x=>x.re.test(w)),p&&(m=p.parse(w),R=p.record.name);else{if(p=h.name?r.get(h.name):n.find(x=>x.re.test(h.path)),!p)throw vn(1,{location:u,currentLocation:h});R=p.record.name,m=ne({},h.params,u.params),w=p.stringify(m)}const M=[];let A=p;for(;A;)M.unshift(A.record),A=A.parent;return{name:R,path:w,params:m,matched:M,meta:uh(M)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function qo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ch(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:lh(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function lh(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Go(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function uh(t){return t.reduce((e,n)=>ne(e,n.meta),{})}function Jo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Vc(t,e){return e.children.some(n=>n===t||Vc(t,n))}const Hc=/#/g,fh=/&/g,dh=/\//g,hh=/=/g,ph=/\?/g,jc=/\+/g,gh=/%5B/g,mh=/%5D/g,Wc=/%5E/g,_h=/%60/g,Kc=/%7B/g,vh=/%7C/g,zc=/%7D/g,yh=/%20/g;function Mi(t){return encodeURI(""+t).replace(vh,"|").replace(gh,"[").replace(mh,"]")}function bh(t){return Mi(t).replace(Kc,"{").replace(zc,"}").replace(Wc,"^")}function Zs(t){return Mi(t).replace(jc,"%2B").replace(yh,"+").replace(Hc,"%23").replace(fh,"%26").replace(_h,"`").replace(Kc,"{").replace(zc,"}").replace(Wc,"^")}function Eh(t){return Zs(t).replace(hh,"%3D")}function wh(t){return Mi(t).replace(Hc,"%23").replace(ph,"%3F")}function Ih(t){return t==null?"":wh(t).replace(dh,"%2F")}function xr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Sh(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(jc," "),o=i.indexOf("="),a=xr(o<0?i:i.slice(0,o)),c=o<0?null:xr(i.slice(o+1));if(a in e){let l=e[a];Be(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Yo(t){let e="";for(let n in t){const r=t[n];if(n=Eh(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Be(r)?r.map(i=>i&&Zs(i)):[r&&Zs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Th(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Be(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Ch=Symbol(""),Xo=Symbol(""),cs=Symbol(""),qc=Symbol(""),ei=Symbol("");function Tn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function vt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(vn(4,{from:n,to:e})):h instanceof Error?a(h):Xd(h)?a(vn(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Ts(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Rh(a)){const l=(a.__vccOpts||a)[e];l&&s.push(vt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Ld(l)?l.default:l;i.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&vt(p,n,r,i,o)()}))}}return s}function Rh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Qo(t){const e=Fe(cs),n=Fe(qc),r=ke(()=>e.resolve(rt(t.to))),s=ke(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const p=h.findIndex(_n.bind(null,u));if(p>-1)return p;const m=Zo(c[l-2]);return l>1&&Zo(u)===m&&h[h.length-1].path!==m?h.findIndex(_n.bind(null,c[l-2])):p}),i=ke(()=>s.value>-1&&kh(n.params,r.value.params)),o=ke(()=>s.value>-1&&s.value===n.matched.length-1&&Uc(n.params,r.value.params));function a(c={}){return Oh(c)?e[rt(t.replace)?"replace":"push"](rt(t.to)).catch(Mn):Promise.resolve()}return{route:r,href:ke(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Ph=Zn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Qo,setup(t,{slots:e}){const n=Qn(Qo(t)),{options:r}=Fe(cs),s=ke(()=>({[ea(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ea(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Li("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ah=Ph;function Oh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function kh(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Be(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Zo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ea=(t,e,n)=>t??e??n,Nh=Zn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Fe(ei),s=ke(()=>t.route||r.value),i=Fe(Xo,0),o=ke(()=>{let l=rt(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=ke(()=>s.value.matched[o.value]);Er(Xo,ke(()=>o.value+1)),Er(Ch,a),Er(ei,s);const c=Te();return An(()=>[c.value,a.value,t.name],([l,u,h],[p,m,w])=>{u&&(u.instances[h]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!_n(u,m)||!p)&&(u.enterCallbacks[h]||[]).forEach(R=>R(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,p=h&&h.components[u];if(!p)return ta(n.default,{Component:p,route:l});const m=h.props[u],w=m?m===!0?l.params:typeof m=="function"?m(l):m:null,M=Li(p,ne({},w,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return ta(n.default,{Component:M,route:l})||M}}});function ta(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Lh=Nh;function Mh(t){const e=ah(t.routes,t),n=t.parseQuery||Sh,r=t.stringifyQuery||Yo,s=t.history,i=Tn(),o=Tn(),a=Tn(),c=Iu(ft);let l=ft;an&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Is.bind(null,v=>""+v),h=Is.bind(null,Ih),p=Is.bind(null,xr);function m(v,O){let T,L;return $c(v)?(T=e.getRecordMatcher(v),L=O):L=v,e.addRoute(L,T)}function w(v){const O=e.getRecordMatcher(v);O&&e.removeRoute(O)}function R(){return e.getRoutes().map(v=>v.record)}function M(v){return!!e.getRecordMatcher(v)}function A(v,O){if(O=ne({},O||c.value),typeof v=="string"){const d=Ss(n,v,O.path),g=e.resolve({path:d.path},O),y=s.createHref(d.fullPath);return ne(d,g,{params:p(g.params),hash:xr(d.hash),redirectedFrom:void 0,href:y})}let T;if("path"in v)T=ne({},v,{path:Ss(n,v.path,O.path).path});else{const d=ne({},v.params);for(const g in d)d[g]==null&&delete d[g];T=ne({},v,{params:h(d)}),O.params=h(O.params)}const L=e.resolve(T,O),te=v.hash||"";L.params=u(p(L.params));const ue=xd(r,ne({},v,{hash:bh(te),path:L.path})),f=s.createHref(ue);return ne({fullPath:ue,hash:te,query:r===Yo?Th(v.query):v.query||{}},L,{redirectedFrom:void 0,href:f})}function x(v){return typeof v=="string"?Ss(n,v,c.value.path):ne({},v)}function U(v,O){if(l!==v)return vn(8,{from:O,to:v})}function K(v){return Z(v)}function j(v){return K(ne(x(v),{replace:!0}))}function B(v){const O=v.matched[v.matched.length-1];if(O&&O.redirect){const{redirect:T}=O;let L=typeof T=="function"?T(v):T;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=x(L):{path:L},L.params={}),ne({query:v.query,hash:v.hash,params:"path"in L?{}:v.params},L)}}function Z(v,O){const T=l=A(v),L=c.value,te=v.state,ue=v.force,f=v.replace===!0,d=B(T);if(d)return Z(ne(x(d),{state:typeof d=="object"?ne({},te,d.state):te,force:ue,replace:f}),O||T);const g=T;g.redirectedFrom=O;let y;return!ue&&Ud(r,L,T)&&(y=vn(16,{to:g,from:L}),He(L,L,!0,!1)),(y?Promise.resolve(y):q(g,L)).catch(_=>Qe(_)?Qe(_,2)?_:at(_):ee(_,g,L)).then(_=>{if(_){if(Qe(_,2))return Z(ne({replace:f},x(_.to),{state:typeof _.to=="object"?ne({},te,_.to.state):te,force:ue}),O||g)}else _=N(g,L,!0,f,te);return ie(g,L,_),_})}function P(v,O){const T=U(v,O);return T?Promise.reject(T):Promise.resolve()}function D(v){const O=rn.values().next().value;return O&&typeof O.runWithContext=="function"?O.runWithContext(v):v()}function q(v,O){let T;const[L,te,ue]=Dh(v,O);T=Ts(L.reverse(),"beforeRouteLeave",v,O);for(const d of L)d.leaveGuards.forEach(g=>{T.push(vt(g,v,O))});const f=P.bind(null,v,O);return T.push(f),ye(T).then(()=>{T=[];for(const d of i.list())T.push(vt(d,v,O));return T.push(f),ye(T)}).then(()=>{T=Ts(te,"beforeRouteUpdate",v,O);for(const d of te)d.updateGuards.forEach(g=>{T.push(vt(g,v,O))});return T.push(f),ye(T)}).then(()=>{T=[];for(const d of ue)if(d.beforeEnter)if(Be(d.beforeEnter))for(const g of d.beforeEnter)T.push(vt(g,v,O));else T.push(vt(d.beforeEnter,v,O));return T.push(f),ye(T)}).then(()=>(v.matched.forEach(d=>d.enterCallbacks={}),T=Ts(ue,"beforeRouteEnter",v,O),T.push(f),ye(T))).then(()=>{T=[];for(const d of o.list())T.push(vt(d,v,O));return T.push(f),ye(T)}).catch(d=>Qe(d,8)?d:Promise.reject(d))}function ie(v,O,T){a.list().forEach(L=>D(()=>L(v,O,T)))}function N(v,O,T,L,te){const ue=U(v,O);if(ue)return ue;const f=O===ft,d=an?history.state:{};T&&(L||f?s.replace(v.fullPath,ne({scroll:f&&d&&d.scroll},te)):s.push(v.fullPath,te)),c.value=v,He(v,O,T,f),at()}let Q;function _e(){Q||(Q=s.listen((v,O,T)=>{if(!cr.listening)return;const L=A(v),te=B(L);if(te){Z(ne(te,{replace:!0}),L).catch(Mn);return}l=L;const ue=c.value;an&&Kd(Ho(ue.fullPath,T.delta),as()),q(L,ue).catch(f=>Qe(f,12)?f:Qe(f,2)?(Z(f.to,L).then(d=>{Qe(d,20)&&!T.delta&&T.type===Kn.pop&&s.go(-1,!1)}).catch(Mn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),ee(f,L,ue))).then(f=>{f=f||N(L,ue,!1),f&&(T.delta&&!Qe(f,8)?s.go(-T.delta,!1):T.type===Kn.pop&&Qe(f,20)&&s.go(-1,!1)),ie(L,ue,f)}).catch(Mn)}))}let Ie=Tn(),J=Tn(),re;function ee(v,O,T){at(v);const L=J.list();return L.length?L.forEach(te=>te(v,O,T)):console.error(v),Promise.reject(v)}function Xe(){return re&&c.value!==ft?Promise.resolve():new Promise((v,O)=>{Ie.add([v,O])})}function at(v){return re||(re=!v,_e(),Ie.list().forEach(([O,T])=>v?T(v):O()),Ie.reset()),v}function He(v,O,T,L){const{scrollBehavior:te}=t;if(!an||!te)return Promise.resolve();const ue=!T&&zd(Ho(v.fullPath,0))||(L||!T)&&history.state&&history.state.scroll||null;return Si().then(()=>te(v,O,ue)).then(f=>f&&Wd(f)).catch(f=>ee(f,v,O))}const Ce=v=>s.go(v);let nn;const rn=new Set,cr={currentRoute:c,listening:!0,addRoute:m,removeRoute:w,hasRoute:M,getRoutes:R,resolve:A,options:t,push:K,replace:j,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:J.add,isReady:Xe,install(v){const O=this;v.component("RouterLink",Ah),v.component("RouterView",Lh),v.config.globalProperties.$router=O,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>rt(c)}),an&&!nn&&c.value===ft&&(nn=!0,K(s.location).catch(te=>{}));const T={};for(const te in ft)Object.defineProperty(T,te,{get:()=>c.value[te],enumerable:!0});v.provide(cs,O),v.provide(qc,Ja(T)),v.provide(ei,c);const L=v.unmount;rn.add(v),v.unmount=function(){rn.delete(v),rn.size<1&&(l=ft,Q&&Q(),Q=null,c.value=ft,nn=!1,re=!1),L()}}};function ye(v){return v.reduce((O,T)=>O.then(()=>D(T)),Promise.resolve())}return cr}function Dh(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>_n(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>_n(l,c))||s.push(c))}return[n,r,s]}function Di(){return Fe(cs)}var na={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},xh=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Jc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),r.push(n[u],n[h],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new Uh;const p=i<<2|a>>4;if(r.push(p),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const w=l<<6&192|h;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Uh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fh=function(t){const e=Gc(t);return Jc.encodeByteArray(e,!0)},Yc=function(t){return Fh(t).replace(/\./g,"")},Xc=function(t){try{return Jc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh=()=>$h().__FIREBASE_DEFAULTS__,Vh=()=>{if(typeof process>"u"||typeof na>"u")return;const t=na.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Hh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xc(t[1]);return e&&JSON.parse(e)},xi=()=>{try{return Bh()||Vh()||Hh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},jh=t=>{var e,n;return(n=(e=xi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Qc=()=>{var t;return(t=xi())===null||t===void 0?void 0:t.config},Zc=t=>{var e;return(e=xi())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function zh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gh(){const t=we();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Jh(){try{return typeof indexedDB=="object"}catch{return!1}}function Yh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh="FirebaseError";class Nt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Xh,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tr.prototype.create)}}class tr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Qh(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Nt(s,a,r)}}function Qh(t,e){return t.replace(Zh,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Zh=/\{\$([^}]+)}/g;function ep(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ur(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ra(i)&&ra(o)){if(!Ur(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ra(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Rn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Pn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function tp(t,e){const n=new np(t,e);return n.subscribe.bind(n)}class np{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");rp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Cs),s.error===void 0&&(s.error=Cs),s.complete===void 0&&(s.complete=Cs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Cs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t){return t&&t._delegate?t._delegate:t}class yn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Wh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(op(e))try{this.getOrInitializeService({instanceIdentifier:Bt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Bt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bt){return this.instances.has(e)}getOptions(e=Bt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ip(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Bt){return this.component?this.component.multipleInstances?e:Bt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ip(t){return t===Bt?void 0:t}function op(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const cp={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},lp=oe.INFO,up={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},fp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=up[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class el{constructor(e){this.name=e,this._logLevel=lp,this._logHandler=fp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const dp=(t,e)=>e.some(n=>t instanceof n);let sa,ia;function hp(){return sa||(sa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pp(){return ia||(ia=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tl=new WeakMap,ti=new WeakMap,nl=new WeakMap,Rs=new WeakMap,Ui=new WeakMap;function gp(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ct(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tl.set(n,t)}).catch(()=>{}),Ui.set(e,t),e}function mp(t){if(ti.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ti.set(t,e)}let ni={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ti.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ct(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _p(t){ni=t(ni)}function vp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ps(this),e,...n);return nl.set(r,e.sort?e.sort():[e]),Ct(r)}:pp().includes(t)?function(...e){return t.apply(Ps(this),e),Ct(tl.get(this))}:function(...e){return Ct(t.apply(Ps(this),e))}}function yp(t){return typeof t=="function"?vp(t):(t instanceof IDBTransaction&&mp(t),dp(t,hp())?new Proxy(t,ni):t)}function Ct(t){if(t instanceof IDBRequest)return gp(t);if(Rs.has(t))return Rs.get(t);const e=yp(t);return e!==t&&(Rs.set(t,e),Ui.set(e,t)),e}const Ps=t=>Ui.get(t);function bp(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Ct(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ct(o.result),c.oldVersion,c.newVersion,Ct(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Ep=["get","getKey","getAll","getAllKeys","count"],wp=["put","add","delete","clear"],As=new Map;function oa(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(As.get(e))return As.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=wp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ep.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return As.set(e,i),i}_p(t=>({...t,get:(e,n,r)=>oa(e,n)||t.get(e,n,r),has:(e,n)=>!!oa(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Sp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Sp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ri="@firebase/app",aa="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=new el("@firebase/app"),Tp="@firebase/app-compat",Cp="@firebase/analytics-compat",Rp="@firebase/analytics",Pp="@firebase/app-check-compat",Ap="@firebase/app-check",Op="@firebase/auth",kp="@firebase/auth-compat",Np="@firebase/database",Lp="@firebase/database-compat",Mp="@firebase/functions",Dp="@firebase/functions-compat",xp="@firebase/installations",Up="@firebase/installations-compat",Fp="@firebase/messaging",$p="@firebase/messaging-compat",Bp="@firebase/performance",Vp="@firebase/performance-compat",Hp="@firebase/remote-config",jp="@firebase/remote-config-compat",Wp="@firebase/storage",Kp="@firebase/storage-compat",zp="@firebase/firestore",qp="@firebase/firestore-compat",Gp="firebase",Jp="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si="[DEFAULT]",Yp={[ri]:"fire-core",[Tp]:"fire-core-compat",[Rp]:"fire-analytics",[Cp]:"fire-analytics-compat",[Ap]:"fire-app-check",[Pp]:"fire-app-check-compat",[Op]:"fire-auth",[kp]:"fire-auth-compat",[Np]:"fire-rtdb",[Lp]:"fire-rtdb-compat",[Mp]:"fire-fn",[Dp]:"fire-fn-compat",[xp]:"fire-iid",[Up]:"fire-iid-compat",[Fp]:"fire-fcm",[$p]:"fire-fcm-compat",[Bp]:"fire-perf",[Vp]:"fire-perf-compat",[Hp]:"fire-rc",[jp]:"fire-rc-compat",[Wp]:"fire-gcs",[Kp]:"fire-gcs-compat",[zp]:"fire-fst",[qp]:"fire-fst-compat","fire-js":"fire-js",[Gp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new Map,ii=new Map;function Xp(t,e){try{t.container.addComponent(e)}catch(n){Yt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zn(t){const e=t.name;if(ii.has(e))return Yt.debug(`There were multiple attempts to register component ${e}.`),!1;ii.set(e,t);for(const n of Fr.values())Xp(n,t);return!0}function rl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Rt=new tr("app","Firebase",Qp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=Jp;function sl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:si,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Rt.create("bad-app-name",{appName:String(s)});if(n||(n=Qc()),!n)throw Rt.create("no-options");const i=Fr.get(s);if(i){if(Ur(n,i.options)&&Ur(r,i.config))return i;throw Rt.create("duplicate-app",{appName:s})}const o=new ap(s);for(const c of ii.values())o.addComponent(c);const a=new Zp(n,r,o);return Fr.set(s,a),a}function eg(t=si){const e=Fr.get(t);if(!e&&t===si&&Qc())return sl();if(!e)throw Rt.create("no-app",{appName:t});return e}function dn(t,e,n){var r;let s=(r=Yp[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yt.warn(a.join(" "));return}zn(new yn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg="firebase-heartbeat-database",ng=1,qn="firebase-heartbeat-store";let Os=null;function il(){return Os||(Os=bp(tg,ng,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(qn)}}}).catch(t=>{throw Rt.create("idb-open",{originalErrorMessage:t.message})})),Os}async function rg(t){try{return await(await il()).transaction(qn).objectStore(qn).get(ol(t))}catch(e){if(e instanceof Nt)Yt.warn(e.message);else{const n=Rt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yt.warn(n.message)}}}async function ca(t,e){try{const r=(await il()).transaction(qn,"readwrite");await r.objectStore(qn).put(e,ol(t)),await r.done}catch(n){if(n instanceof Nt)Yt.warn(n.message);else{const r=Rt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Yt.warn(r.message)}}}function ol(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=1024,ig=30*24*60*60*1e3;class og{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=la();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ig}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=la(),{heartbeatsToSend:r,unsentEntries:s}=ag(this._heartbeatsCache.heartbeats),i=Yc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function la(){return new Date().toISOString().substring(0,10)}function ag(t,e=sg){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ua(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ua(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class cg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jh()?Yh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await rg(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ca(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ca(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ua(t){return Yc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(t){zn(new yn("platform-logger",e=>new Ip(e),"PRIVATE")),zn(new yn("heartbeat",e=>new og(e),"PRIVATE")),dn(ri,aa,t),dn(ri,aa,"esm2017"),dn("fire-js","")}lg("");function Fi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function al(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ug=al,cl=new tr("auth","Firebase",al());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=new el("@firebase/auth");function fg(t,...e){$r.logLevel<=oe.WARN&&$r.warn(`Auth (${rr}): ${t}`,...e)}function Ir(t,...e){$r.logLevel<=oe.ERROR&&$r.error(`Auth (${rr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(t,...e){throw $i(t,...e)}function Ge(t,...e){return $i(t,...e)}function dg(t,e,n){const r=Object.assign(Object.assign({},ug()),{[e]:n});return new tr("auth","Firebase",r).create(e,{appName:t.name})}function $i(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return cl.create(t,...e)}function H(t,e,...n){if(!t)throw $i(e,...n)}function et(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ir(e),new Error(e)}function it(t,e){t||et(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function hg(){return fa()==="http:"||fa()==="https:"}function fa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hg()||zh()||"connection"in navigator)?navigator.onLine:!0}function gg(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n){this.shortDelay=e,this.longDelay=n,it(n>e,"Short delay should be less than long delay!"),this.isMobile=Kh()||qh()}get(){return pg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(t,e){it(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=new sr(3e4,6e4);function Mt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Dt(t,e,n,r,s={}){return ul(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=nr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),ll.fetch()(fl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function ul(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},mg),e);try{const s=new yg(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw _r(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw _r(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw _r(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw _r(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw dg(t,u,l);Ve(t,u)}}catch(s){if(s instanceof Nt)throw s;Ve(t,"network-request-failed",{message:String(s)})}}async function ir(t,e,n,r,s={}){const i=await Dt(t,e,n,r,s);return"mfaPendingCredential"in i&&Ve(t,"multi-factor-auth-required",{_serverResponse:i}),i}function fl(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Bi(t.config,s):`${t.config.apiScheme}://${s}`}function vg(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ge(this.auth,"network-request-failed")),_g.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _r(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ge(t,e,r);return s.customData._tokenResponse=n,s}function da(t){return t!==void 0&&t.enterprise!==void 0}class bg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return vg(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Eg(t,e){return Dt(t,"GET","/v2/recaptchaConfig",Mt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wg(t,e){return Dt(t,"POST","/v1/accounts:delete",e)}async function Ig(t,e){return Dt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Sg(t,e=!1){const n=Lt(t),r=await n.getIdToken(e),s=Vi(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:xn(ks(s.auth_time)),issuedAtTime:xn(ks(s.iat)),expirationTime:xn(ks(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ks(t){return Number(t)*1e3}function Vi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ir("JWT malformed, contained fewer than 3 sections"),null;try{const s=Xc(n);return s?JSON.parse(s):(Ir("Failed to decode base64 JWT payload"),null)}catch(s){return Ir("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Tg(t){const e=Vi(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nt&&Cg(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Cg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xn(this.lastLoginAt),this.creationTime=xn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Br(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Gn(t,Ig(n,{idToken:r}));H(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Og(i.providerUserInfo):[],a=Ag(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new dl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Pg(t){const e=Lt(t);await Br(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ag(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Og(t){return t.map(e=>{var{providerId:n}=e,r=Fi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kg(t,e){const n=await ul(t,{},async()=>{const r=nr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=fl(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ll.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ng(t,e){return Dt(t,"POST","/v2/accounts:revokeToken",Mt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Tg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await kg(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Jn;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jn,this.toJSON())}_performRefresh(){return et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Fi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Rg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new dl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Gn(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Sg(this,e)}reload(){return Pg(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Br(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Gn(this,wg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,M=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:U,emailVerified:K,isAnonymous:j,providerData:B,stsTokenManager:Z}=n;H(U&&Z,e,"internal-error");const P=Jn.fromJSON(this.name,Z);H(typeof U=="string",e,"internal-error"),dt(h,e.name),dt(p,e.name),H(typeof K=="boolean",e,"internal-error"),H(typeof j=="boolean",e,"internal-error"),dt(m,e.name),dt(w,e.name),dt(R,e.name),dt(M,e.name),dt(A,e.name),dt(x,e.name);const D=new Gt({uid:U,auth:e,email:p,emailVerified:K,displayName:h,isAnonymous:j,photoURL:w,phoneNumber:m,tenantId:R,stsTokenManager:P,createdAt:A,lastLoginAt:x});return B&&Array.isArray(B)&&(D.providerData=B.map(q=>Object.assign({},q))),M&&(D._redirectEventId=M),D}static async _fromIdTokenResponse(e,n,r=!1){const s=new Jn;s.updateFromServerResponse(n);const i=new Gt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Br(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha=new Map;function tt(t){it(t instanceof Function,"Expected a class definition");let e=ha.get(t);return e?(it(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ha.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hl.type="NONE";const pa=hl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(t,e,n){return`firebase:${t}:${e}:${n}`}class hn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Sr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Sr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new hn(tt(pa),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||tt(pa);const o=Sr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Gt._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new hn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new hn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ml(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vl(e))return"Blackberry";if(yl(e))return"Webos";if(Hi(e))return"Safari";if((e.includes("chrome/")||gl(e))&&!e.includes("edge/"))return"Chrome";if(_l(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function pl(t=we()){return/firefox\//i.test(t)}function Hi(t=we()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gl(t=we()){return/crios\//i.test(t)}function ml(t=we()){return/iemobile/i.test(t)}function _l(t=we()){return/android/i.test(t)}function vl(t=we()){return/blackberry/i.test(t)}function yl(t=we()){return/webos/i.test(t)}function ls(t=we()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Lg(t=we()){var e;return ls(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Mg(){return Gh()&&document.documentMode===10}function bl(t=we()){return ls(t)||_l(t)||yl(t)||vl(t)||/windows phone/i.test(t)||ml(t)}function Dg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(t,e=[]){let n;switch(t){case"Browser":n=ga(we());break;case"Worker":n=`${ga(we())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${rr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ug(t,e={}){return Dt(t,"GET","/v2/passwordPolicy",Mt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=6;class $g{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Fg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ma(this),this.idTokenSubscription=new ma(this),this.beforeStateQueue=new xg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await hn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Br(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Lt(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(tt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ug(this),n=new $g(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new tr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ng(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await hn.create(this,[tt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=El(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&fg(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function tn(t){return Lt(t)}class ma{constructor(e){this.auth=e,this.observer=null,this.addObserver=tp(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function wl(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ge("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Vg().appendChild(r)})}function Hg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const jg="https://www.google.com/recaptcha/enterprise.js?render=",Wg="recaptcha-enterprise",Kg="NO_RECAPTCHA";class zg{constructor(e){this.type=Wg,this.auth=tn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Eg(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new bg(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;da(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Kg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&da(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}wl(jg+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function _a(t,e,n,r=!1){const s=new zg(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ai(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await _a(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await _a(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t,e){const n=rl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ur(i,e??{}))return s;Ve(s,"already-initialized")}return n.initialize({options:e})}function Gg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Jg(t,e,n){const r=tn(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Il(e),{host:o,port:a}=Yg(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Xg()}function Il(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Yg(t){const e=Il(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:va(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:va(o)}}}function va(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Xg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return et("not implemented")}_getIdTokenResponse(e){return et("not implemented")}_linkToIdToken(e,n){return et("not implemented")}_getReauthenticationResolver(e){return et("not implemented")}}async function Qg(t,e){return Dt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zg(t,e){return ir(t,"POST","/v1/accounts:signInWithPassword",Mt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function em(t,e){return ir(t,"POST","/v1/accounts:signInWithEmailLink",Mt(t,e))}async function tm(t,e){return ir(t,"POST","/v1/accounts:signInWithEmailLink",Mt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends ji{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Yn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Yn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ai(e,n,"signInWithPassword",Zg);case"emailLink":return em(e,{email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ai(e,r,"signUpPassword",Qg);case"emailLink":return tm(e,{idToken:n,email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(t,e){return ir(t,"POST","/v1/accounts:signInWithIdp",Mt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm="http://localhost";class Xt extends ji{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ve("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Fi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Xt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return pn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,pn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,pn(e,n)}buildRequest(){const e={requestUri:nm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=nr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sm(t){const e=Rn(Pn(t)).link,n=e?Rn(Pn(e)).deep_link_id:null,r=Rn(Pn(t)).deep_link_id;return(r?Rn(Pn(r)).link:null)||r||n||e||t}class Wi{constructor(e){var n,r,s,i,o,a;const c=Rn(Pn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=rm((s=c.mode)!==null&&s!==void 0?s:null);H(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=sm(e);try{return new Wi(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(){this.providerId=wn.PROVIDER_ID}static credential(e,n){return Yn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Wi.parseLink(n);return H(r,"argument-error"),Yn._fromEmailAndCode(e,r.code,r.tenantId)}}wn.PROVIDER_ID="password";wn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends Sl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends or{constructor(){super("facebook.com")}static credential(e){return Xt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";yt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends or{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return bt.credential(n,r)}catch{return null}}}bt.GOOGLE_SIGN_IN_METHOD="google.com";bt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends or{constructor(){super("github.com")}static credential(e){return Xt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.GITHUB_SIGN_IN_METHOD="github.com";Et.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends or{constructor(){super("twitter.com")}static credential(e,n){return Xt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wt.credential(n,r)}catch{return null}}}wt.TWITTER_SIGN_IN_METHOD="twitter.com";wt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function im(t,e){return ir(t,"POST","/v1/accounts:signUp",Mt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Gt._fromIdTokenResponse(e,r,s),o=ya(r);return new Qt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ya(r);return new Qt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ya(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends Nt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Vr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Vr(e,n,r,s)}}function Tl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Vr._fromErrorAndOperation(t,i,e,r):i})}async function om(t,e,n=!1){const r=await Gn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function am(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Gn(t,Tl(r,s,e,t),n);H(i.idToken,r,"internal-error");const o=Vi(i.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),Qt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ve(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cl(t,e,n=!1){const r="signIn",s=await Tl(t,r,e),i=await Qt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function cm(t,e){return Cl(tn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rl(t){const e=tn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function lm(t,e,n){const r=tn(t),o=await ai(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",im).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Rl(t),c}),a=await Qt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function um(t,e,n){return cm(Lt(t),wn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Rl(t),r})}function fm(t,e,n,r){return Lt(t).onIdTokenChanged(e,n,r)}function dm(t,e,n){return Lt(t).beforeAuthStateChanged(e,n)}function hm(t){return Lt(t).signOut()}const Hr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hr,"1"),this.storage.removeItem(Hr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(){const t=we();return Hi(t)||ls(t)}const gm=1e3,mm=10;class Al extends Pl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pm()&&Dg(),this.fallbackToPolling=bl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Mg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,mm):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},gm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Al.type="LOCAL";const _m=Al;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends Pl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ol.type="SESSION";const kl=Ol;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new us(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await vm(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}us.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ki("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return window}function bm(t){Je().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(){return typeof Je().WorkerGlobalScope<"u"&&typeof Je().importScripts=="function"}async function Em(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Im(){return Nl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll="firebaseLocalStorageDb",Sm=1,jr="firebaseLocalStorage",Ml="fbase_key";class ar{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fs(t,e){return t.transaction([jr],e?"readwrite":"readonly").objectStore(jr)}function Tm(){const t=indexedDB.deleteDatabase(Ll);return new ar(t).toPromise()}function ci(){const t=indexedDB.open(Ll,Sm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jr,{keyPath:Ml})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jr)?e(r):(r.close(),await Tm(),e(await ci()))})})}async function ba(t,e,n){const r=fs(t,!0).put({[Ml]:e,value:n});return new ar(r).toPromise()}async function Cm(t,e){const n=fs(t,!1).get(e),r=await new ar(n).toPromise();return r===void 0?null:r.value}function Ea(t,e){const n=fs(t,!0).delete(e);return new ar(n).toPromise()}const Rm=800,Pm=3;class Dl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ci(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Pm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=us._getInstance(Im()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Em(),!this.activeServiceWorker)return;this.sender=new ym(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ci();return await ba(e,Hr,"1"),await Ea(e,Hr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ba(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Cm(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ea(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=fs(s,!1).getAll();return new ar(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Rm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dl.type="LOCAL";const Am=Dl;new sr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(t,e){return e?tt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi extends ji{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return pn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return pn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function km(t){return Cl(t.auth,new zi(t),t.bypassAuthState)}function Nm(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),am(n,new zi(t),t.bypassAuthState)}async function Lm(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),om(n,new zi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return km;case"linkViaPopup":case"linkViaRedirect":return Lm;case"reauthViaPopup":case"reauthViaRedirect":return Nm;default:Ve(this.auth,"internal-error")}}resolve(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm=new sr(2e3,1e4);class cn extends xl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,cn.currentPopupAction&&cn.currentPopupAction.cancel(),cn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){it(this.filter.length===1,"Popup operations only handle one event");const e=Ki();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Mm.get())};e()}}cn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="pendingRedirect",Tr=new Map;class xm extends xl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Tr.get(this.auth._key());if(!e){try{const r=await Um(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Tr.set(this.auth._key(),e)}return this.bypassAuthState||Tr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Um(t,e){const n=Bm(e),r=$m(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Fm(t,e){Tr.set(t._key(),e)}function $m(t){return tt(t._redirectPersistence)}function Bm(t){return Sr(Dm,t.config.apiKey,t.name)}async function Vm(t,e,n=!1){const r=tn(t),s=Om(r,e),o=await new xm(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=10*60*1e3;class jm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Wm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ul(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ge(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Hm&&this.cachedEventUids.clear(),this.cachedEventUids.has(wa(e))}saveEventToCache(e){this.cachedEventUids.add(wa(e)),this.lastProcessedEventTime=Date.now()}}function wa(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ul({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Wm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ul(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Km(t,e={}){return Dt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qm=/^https?/;async function Gm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Km(t);for(const n of e)try{if(Jm(n))return}catch{}Ve(t,"unauthorized-domain")}function Jm(t){const e=oi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!qm.test(n))return!1;if(zm.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym=new sr(3e4,6e4);function Ia(){const t=Je().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Xm(t){return new Promise((e,n)=>{var r,s,i;function o(){Ia(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ia(),n(Ge(t,"network-request-failed"))},timeout:Ym.get()})}if(!((s=(r=Je().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Je().gapi)===null||i===void 0)&&i.load)o();else{const a=Hg("iframefcb");return Je()[a]=()=>{gapi.load?o():n(Ge(t,"network-request-failed"))},wl(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Cr=null,e})}let Cr=null;function Qm(t){return Cr=Cr||Xm(t),Cr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm=new sr(5e3,15e3),e_="__/auth/iframe",t_="emulator/auth/iframe",n_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},r_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function s_(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bi(e,t_):`https://${t.config.authDomain}/${e_}`,r={apiKey:e.apiKey,appName:t.name,v:rr},s=r_.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${nr(r).slice(1)}`}async function i_(t){const e=await Qm(t),n=Je().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:s_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:n_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ge(t,"network-request-failed"),a=Je().setTimeout(()=>{i(o)},Zm.get());function c(){Je().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},a_=500,c_=600,l_="_blank",u_="http://localhost";class Sa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function f_(t,e,n,r=a_,s=c_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},o_),{width:r.toString(),height:s.toString(),top:i,left:o}),l=we().toLowerCase();n&&(a=gl(l)?l_:n),pl(l)&&(e=e||u_,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[m,w])=>`${p}${m}=${w},`,"");if(Lg(l)&&a!=="_self")return d_(e||"",a),new Sa(null);const h=window.open(e||"",a,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new Sa(h)}function d_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_="__/auth/handler",p_="emulator/auth/handler",g_=encodeURIComponent("fac");async function Ta(t,e,n,r,s,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:rr,eventId:s};if(e instanceof Sl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ep(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof or){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${g_}=${encodeURIComponent(c)}`:"";return`${m_(t)}?${nr(a).slice(1)}${l}`}function m_({config:t}){return t.emulator?Bi(t,p_):`https://${t.authDomain}/${h_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="webStorageSupport";class __{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kl,this._completeRedirectFn=Vm,this._overrideRedirectResult=Fm}async _openPopup(e,n,r,s){var i;it((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ta(e,n,r,oi(),s);return f_(e,o,Ki())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ta(e,n,r,oi(),s);return bm(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(it(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await i_(e),r=new jm(e);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ns,{type:Ns},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ns];o!==void 0&&n(!!o),Ve(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Gm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bl()||Hi()||ls()}}const v_=__;var Ca="@firebase/auth",Ra="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function E_(t){zn(new yn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:El(t)},l=new Bg(r,s,i,c);return Gg(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zn(new yn("auth-internal",e=>{const n=tn(e.getProvider("auth").getImmediate());return(r=>new y_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(Ca,Ra,b_(t)),dn(Ca,Ra,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_=5*60,I_=Zc("authIdTokenMaxAge")||w_;let Pa=null;const S_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>I_)return;const s=n==null?void 0:n.token;Pa!==s&&(Pa=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function T_(t=eg()){const e=rl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qg(t,{popupRedirectResolver:v_,persistence:[Am,_m,kl]}),r=Zc("authTokenSyncURL");if(r){const i=S_(r);dm(n,i,()=>i(n.currentUser)),fm(n,o=>i(o))}const s=jh("auth");return s&&Jg(n,`http://${s}`),n}E_("Browser");var C_="firebase",R_="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dn(C_,R_,"app");const P_={apiKey:"AIzaSyB53KKWxV4hh4oiTzSzg0m4WrIce33J6vA",authDomain:"login-3e869.firebaseapp.com",projectId:"login-3e869",storageBucket:"login-3e869.appspot.com",messagingSenderId:"51765202084",appId:"1:51765202084:web:ecd5fe87c313bf0ba06a31",measurementId:"G-6380LZGMFT"},A_=sl(P_),Ls=T_(A_),ds=Ad("auth",{state:()=>({user:null}),actions:{async register(t,e){const n=await lm(Ls,t,e);this.user=n.user},async login(t,e){const n=await um(Ls,t,e);this.user=n.user},async logout(){await hm(Ls),this.user=null}}}),O_=Zn({setup(){const t=Te(""),e=Te(""),n=Te(!1),r=Te(""),s=Te(!1),i=Di(),o=ds();return{email:t,password:e,showPassword:n,errorMessage:r,showSnackbar:s,login:async()=>{try{await o.login(t.value,e.value),i.push("/dashboard")}catch(l){l instanceof Error?r.value=l.message:r.value="An unexpected error occurred.",s.value=!0,setTimeout(()=>s.value=!1,3e3)}},togglePasswordVisibility:()=>{n.value=!n.value}}}}),Fl=t=>(Ci("data-v-268f1896"),t=t(),Ri(),t),k_={class:"login-container"},N_=Fl(()=>ae("h2",{class:"form-title"},"Login",-1)),L_={class:"input-wrapper"},M_={class:"input-wrapper"},D_=["type"],x_=Fl(()=>ae("button",{type:"submit",class:"btn-login"},"Login",-1)),U_={class:"signup-redirect"},F_={key:0,class:"snackbar"};function $_(t,e,n,r,s,i){const o=Pi("router-link");return st(),qt("div",k_,[N_,ae("form",{onSubmit:e[3]||(e[3]=Nc((...a)=>t.login&&t.login(...a),["prevent"])),class:"form"},[ae("div",L_,[On(ae("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>t.email=a),type:"email",placeholder:"Email",class:"input-field",required:""},null,512),[[Dr,t.email]])]),ae("div",M_,[On(ae("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>t.password=a),type:t.showPassword?"text":"password",placeholder:"Password",class:"input-field",required:""},null,8,D_),[[Js,t.password]]),ae("span",{class:"password-toggle",onClick:e[2]||(e[2]=(...a)=>t.togglePasswordVisibility&&t.togglePasswordVisibility(...a))},Wt(t.showPassword?"Hide Password":"Show Password"),1)]),x_,ae("div",U_,[jn(" Don't have an account? "),ve(o,{to:"/register"},{default:Bn(()=>[jn("Signup")]),_:1})]),ve(ss,{name:"fade"},{default:Bn(()=>[t.showSnackbar?(st(),qt("div",F_,Wt(t.errorMessage),1)):Lr("",!0)]),_:1})],32)])}const B_=os(O_,[["render",$_],["__scopeId","data-v-268f1896"]]),V_=t=>(Ci("data-v-e17ad79b"),t=t(),Ri(),t),H_={class:"dashboard-container"},j_=V_(()=>ae("h2",{class:"form-title"},"Dashboard",-1)),W_={key:0,class:"user-details"},K_=Zn({__name:"Dashboard",setup(t){const e=Di(),n=ds(),r=n.user;Ai(()=>{r||e.replace("/login")});const s=async()=>{await n.logout(),e.replace("/login")};return(i,o)=>(st(),qt("div",H_,[j_,rt(r)?(st(),qt("div",W_,[ae("p",null,"User ID: "+Wt(rt(r).uid),1),ae("p",null,"User Email: "+Wt(rt(r).email),1)])):Lr("",!0),ae("button",{onClick:s,class:"btn-logout"},"Logout")]))}}),z_=os(K_,[["__scopeId","data-v-e17ad79b"]]),q_=Zn({setup(){const t=Te(""),e=Te(""),n=Te(""),r=Te(!1),s=Te(""),i=Te(!1),o=Te(""),a=Di(),c=ds(),l=ke(()=>!!o.value||e.value!==n.value||t.value===""||e.value==="");return{email:t,password:e,confirmPassword:n,showPassword:r,emailError:o,errorMessage:s,showSnackbar:i,validateEmail:()=>{const m=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;o.value=m.test(t.value)?"":"Invalid email format"},register:async()=>{if(l.value){s.value="Please fill in all fields correctly.",i.value=!0,setTimeout(()=>i.value=!1,3e3);return}try{await c.register(t.value,e.value),a.push("/login")}catch(m){m instanceof Error?s.value=m.message:s.value="An unexpected error occurred.",i.value=!0,setTimeout(()=>i.value=!1,3e3)}},togglePasswordVisibility:()=>{r.value=!r.value},isFormInvalid:l}}}),$l=t=>(Ci("data-v-283ca3cf"),t=t(),Ri(),t),G_={class:"register-container"},J_=$l(()=>ae("h2",{class:"form-title"},"Register / Signup",-1)),Y_={class:"input-wrapper"},X_={key:0,class:"alert"},Q_={class:"input-wrapper"},Z_=["type"],ev={class:"input-wrapper"},tv=["type"],nv={key:0,class:"snackbar"},rv=$l(()=>ae("button",{type:"submit",class:"btn-register"},"Register",-1)),sv={class:"signup-redirect"};function iv(t,e,n,r,s,i){const o=Pi("router-link");return st(),qt("div",G_,[J_,ae("form",{onSubmit:e[4]||(e[4]=Nc((...a)=>t.register&&t.register(...a),["prevent"])),class:"form"},[ae("div",Y_,[On(ae("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>t.email=a),type:"email",placeholder:"Email",class:"input-field",required:""},null,512),[[Dr,t.email]]),t.emailError?(st(),qt("div",X_,Wt(t.emailError),1)):Lr("",!0)]),ae("div",Q_,[On(ae("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>t.password=a),type:t.showPassword?"text":"password",placeholder:"Password",class:"input-field",required:""},null,8,Z_),[[Js,t.password]])]),ae("div",ev,[On(ae("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>t.confirmPassword=a),type:t.showPassword?"text":"password",placeholder:"Confirm Password",class:"input-field",required:""},null,8,tv),[[Js,t.confirmPassword]])]),ae("span",{class:"password-toggle",onClick:e[3]||(e[3]=(...a)=>t.togglePasswordVisibility&&t.togglePasswordVisibility(...a))},Wt(t.showPassword?"Hide Password":"Show Password"),1),ve(ss,{name:"fade"},{default:Bn(()=>[t.showSnackbar?(st(),qt("div",nv,Wt(t.errorMessage),1)):Lr("",!0)]),_:1}),rv,ae("div",sv,[jn(" Already a user? "),ve(o,{to:"/login"},{default:Bn(()=>[jn("Login")]),_:1})])],32)])}const ov=os(q_,[["render",iv],["__scopeId","data-v-283ca3cf"]]),av=[{path:"/",redirect:"/login"},{path:"/register",component:ov},{path:"/login",component:B_},{path:"/dashboard",component:z_,meta:{requiresAuth:!0}}],Bl=Mh({history:Yd(),routes:av});Bl.beforeEach(t=>{const e=ds();if(t.matched.some(r=>r.meta.requiresAuth)&&!e.user)return console.log("needs to come"),"/login"});const qi=yd(Nd);qi.use(Id());qi.use(Bl);qi.mount("#app");
