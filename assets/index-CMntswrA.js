import{W as Qe,S as Ke,F as ea,P as aa,G as Le,C as ta,a as ia,b as Z,V as Q,B as le,c as N,d as de,A as I,e as pe,D as ue,L as qe,f as ze,I as Ie,g as na,M as Pe,h as Te,T as oa,i as je,j as sa}from"./three-DBH4hh7W.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=(e,a,t=[])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(a).forEach(i=>{n.setAttribute(i,String(a[i]))}),t.length&&t.forEach(i=>{const o=He(...i);n.appendChild(o)}),n};var ca=([e,a,t])=>He(e,a,t);/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=e=>Array.from(e.attributes).reduce((a,t)=>(a[t.name]=t.value,a),{}),la=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",da=e=>e.flatMap(la).map(t=>t.trim()).filter(Boolean).filter((t,n,i)=>i.indexOf(t)===n).join(" "),pa=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(a,t,n)=>t.toUpperCase()+n.toLowerCase()),De=(e,{nameAttr:a,icons:t,attrs:n})=>{const i=e.getAttribute(a);if(i==null)return;const o=pa(i),s=t[o];if(!s)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const m=ra(e),[l,h,b]=s,f={...h,"data-lucide":i,...n,...m},y=da(["lucide",`lucide-${i}`,m,n]);y&&Object.assign(f,{class:y});const M=ca([l,f,b]);return e.parentNode?.replaceChild(M,e)};/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=["svg",r,[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=["svg",r,[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=["svg",r,[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"}],["circle",{cx:"12",cy:"8",r:"6"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=["svg",r,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=["svg",r,[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=["svg",r,[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=["svg",r,[["path",{d:"M12 8V4H8"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M15 13v2"}],["path",{d:"M9 13v2"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=["svg",r,[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=["svg",r,[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"}],["path",{d:"M16 2v4"}],["path",{d:"M8 2v4"}],["path",{d:"M3 10h5"}],["path",{d:"M17.5 17.5 16 16.3V14"}],["circle",{cx:"16",cy:"16",r:"6"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=["svg",r,[["path",{d:"M20 6 9 17l-5-5"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=["svg",r,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M12 11h4"}],["path",{d:"M12 16h4"}],["path",{d:"M8 11h.01"}],["path",{d:"M8 16h.01"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=["svg",r,[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=["svg",r,[["path",{d:"m18 16 4-4-4-4"}],["path",{d:"m6 8-4 4 4 4"}],["path",{d:"m14.5 4-5 16"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=["svg",r,[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=["svg",r,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=["svg",r,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=["svg",r,[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=["svg",r,[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=["svg",r,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qa=["svg",r,[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"}],["path",{d:"M22 10v6"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=["svg",r,[["line",{x1:"22",x2:"2",y1:"12",y2:"12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ia=["svg",r,[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=["svg",r,[["path",{d:"m5 8 6 6"}],["path",{d:"m4 14 6-6 2-3"}],["path",{d:"M2 5h12"}],["path",{d:"M7 2h1"}],["path",{d:"m22 22-5-10-5 10"}],["path",{d:"M14 18h6"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=["svg",r,[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=["svg",r,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m4.93 4.93 4.24 4.24"}],["path",{d:"m14.83 9.17 4.24-4.24"}],["path",{d:"m14.83 14.83 4.24 4.24"}],["path",{d:"m9.17 14.83-4.24 4.24"}],["circle",{cx:"12",cy:"12",r:"4"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=["svg",r,[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=["svg",r,[["path",{d:"m3 17 2 2 4-4"}],["path",{d:"m3 7 2 2 4-4"}],["path",{d:"M13 6h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=["svg",r,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ha=["svg",r,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=["svg",r,[["path",{d:"m3 11 18-5v12L3 14v-3z"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=["svg",r,[["line",{x1:"4",x2:"20",y1:"12",y2:"12"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=["svg",r,[["path",{d:"m8 6 4-4 4 4"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"}],["path",{d:"m20 22-5-5"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=["svg",r,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=["svg",r,[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{d:"M12 12V8"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=["svg",r,[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34"}],["path",{d:"M4 6h.01"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67"}],["path",{d:"M12 18h.01"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"m13.41 10.59 5.66-5.66"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=["svg",r,[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=["svg",r,[["path",{d:"M4 11a9 9 0 0 1 9 9"}],["path",{d:"M4 4a16 16 0 0 1 16 16"}],["circle",{cx:"5",cy:"19",r:"1"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=["svg",r,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M7 8h8"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h6"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=["svg",r,[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=["svg",r,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=["svg",r,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=["svg",r,[["path",{d:"M16 3h5v5"}],["path",{d:"M8 3H3v5"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"}],["path",{d:"m15 9 6-6"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=["svg",r,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"6"}],["circle",{cx:"12",cy:"12",r:"2"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=["svg",r,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M13 5v2"}],["path",{d:"M13 17v2"}],["path",{d:"M13 11v2"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=["svg",r,[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=["svg",r,[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=["svg",r,[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=["svg",r,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=["svg",r,[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]]];/**
 * @license lucide v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=({icons:e={},nameAttr:a="data-lucide",attrs:t={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const n=document.querySelectorAll(`[${a}]`);if(Array.from(n).forEach(i=>De(i,{nameAttr:a,icons:e,attrs:t})),a==="data-lucide"){const i=document.querySelectorAll("[icon-name]");i.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(i).forEach(o=>De(o,{nameAttr:"icon-name",icons:e,attrs:t})))}},rt={Menu:Oa,Workflow:nt,BadgeCheck:ga,GraduationCap:qa,Languages:Pa,Network:Va,HardDrive:za,Sparkles:Qa,BookOpen:fa,MessageSquare:Na,Mail:Ha,Linkedin:Da,Github:Ea,ArrowUpRight:ma,Copy:Ca,X:ot,FileText:Sa,LifeBuoy:ja,Cloud:Aa,Bot:ba,Layers:Ta,CalendarClock:wa,Webhook:it,Rss:Ja,Merge:Ba,Filter:_a,Split:Ka,CodeXml:xa,Database:$a,Globe:La,ShieldCheck:Za,Ticket:at,ListChecks:Fa,Send:Ya,Rocket:Ua,ScanText:Xa,Megaphone:Ga,Radar:Wa,Zap:st,Bell:va,ArrowRight:ua,Award:ha,Check:ka,Lock:Ra,Headset:Ia,ClipboardList:Ma,Briefcase:ya,Target:et,User:tt},Ge=()=>ct({icons:rt}),k=(e,a=document)=>a.querySelector(e),G=(e,a=document)=>[...a.querySelectorAll(e)],c=e=>String(e).replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),P=window.matchMedia("(prefers-reduced-motion: reduce)").matches,lt=window.matchMedia("(hover: hover) and (pointer: fine)").matches,ge=e=>document.startViewTransition&&!P?document.startViewTransition(e):e(),te=(e,a,t)=>`
  <header class="section__head reveal">
    <span class="section__num">${e}</span>
    <h1 class="section__title" tabindex="-1">${a}</h1>
    <p class="section__sub">${t}</p>
  </header>`;let K;function dt(e){K?.disconnect(),K=new IntersectionObserver(a=>a.forEach(t=>{t.isIntersecting&&(t.target.classList.add("is-in"),t.target.querySelector("[data-count]")&&pt(t.target),K.unobserve(t.target))}),{threshold:.12,rootMargin:"0px 0px -6% 0px"}),G(".reveal, .langs",e).forEach(a=>K.observe(a))}function pt(e){G("[data-count]",e).forEach(a=>{const t=+a.dataset.count,n=a.dataset.suffix||"";if(P){a.textContent=t+n;return}const i=performance.now(),o=s=>{const m=Math.min((s-i)/1400,1);a.textContent=Math.round(t*(1-Math.pow(1-m,3)))+n,m<1&&requestAnimationFrame(o)};requestAnimationFrame(o)})}function ut(e,a){if(!e||P)return()=>{};const t="!<>-_\\/[]{}—=+*^?#01";let n=!0,i=0,o;const s=l=>new Promise(h=>{const b=e.textContent,f=Array.from({length:Math.max(b.length,l.length)},(d,w)=>({from:b[w]||"",to:l[w]||"",start:Math.floor(Math.random()*18),end:Math.floor(Math.random()*18)+18}));let y=0;const M=()=>{if(!n)return h();let d="",w=0;for(const A of f)y>=A.end?(w++,d+=A.to):y>=A.start?d+=`<span style="color:var(--violet)">${t[Math.floor(Math.random()*t.length)]}</span>`:d+=A.from;e.innerHTML=d,w===f.length?h():(y++,requestAnimationFrame(M))};M()}),m=async()=>{n&&(i=(i+1)%a.length,await s(a[i]),n&&(o=setTimeout(m,2600)))};return o=setTimeout(m,2400),()=>{n=!1,clearTimeout(o)}}function mt(){if(!lt)return;const e=k(".cursor"),a=k(".cursor__dot"),t=k(".cursor__ring");let n=-100,i=-100,o=-100,s=-100,m=null;window.addEventListener("pointermove",h=>{n=h.clientX,i=h.clientY;const b=h.target.closest(".tilt");if(b){const y=b.getBoundingClientRect(),M=(h.clientX-y.left)/y.width,d=(h.clientY-y.top)/y.height;if(b.style.setProperty("--mx",`${M*100}%`),b.style.setProperty("--my",`${d*100}%`),!P){const w=b.classList.contains("flow")?4:6;b.style.transform=`perspective(900px) rotateX(${(.5-d)*w}deg) rotateY(${(M-.5)*w}deg) translateY(-2px)`}}const f=h.target.closest("[data-magnetic]:not(.tilt)");if(m&&m!==f&&(m.style.transform=""),m=f,f&&!P){const y=f.getBoundingClientRect();f.style.transform=`translate(${(h.clientX-(y.left+y.width/2))*.22}px, ${(h.clientY-(y.top+y.height/2))*.3}px)`}},{passive:!0}),document.addEventListener("pointerout",h=>{const b=h.target.closest(".tilt");b&&!b.contains(h.relatedTarget)&&(b.style.transform="")}),document.addEventListener("pointerover",h=>{e.classList.toggle("is-hover",!!h.target.closest("a, button, .tag, [data-magnetic]"))});const l=()=>{o+=(n-o)*.18,s+=(i-s)*.18,a.style.transform=`translate3d(${n}px, ${i}px, 0)`,t.style.transform=`translate3d(${o}px, ${s}px, 0)`,requestAnimationFrame(l)};l()}function ht(){document.addEventListener("pointerdown",e=>{const a=e.target.closest(".ripple");if(!a||P)return;const t=a.getBoundingClientRect(),n=document.createElement("span");n.className="ripple__wave";const i=Math.max(t.width,t.height)*2;n.style.cssText=`width:${i}px;height:${i}px;left:${e.clientX-t.left-i/2}px;top:${e.clientY-t.top-i/2}px`,a.appendChild(n),n.addEventListener("animationend",()=>n.remove())})}function gt({routes:e,outlet:a,onChange:t}){let n=null,i=null;const o=()=>{const l=location.hash.replace(/^#\/?/,"").split(/[/?]/)[0]||e[0].id;return e.find(h=>h.id===l)||e[0]},s=l=>{i?.(),a.innerHTML=l.render(),a.dataset.view=l.id,document.body.dataset.view=l.id,window.scrollTo({top:0,behavior:"instant"}),Ge(),dt(a),i=l.mount?.(a)||null,document.title=l.id===e[0].id?l.title:`${l.label} · Christian Manco`,n=l,t?.(l,e.indexOf(l))},m=()=>{const l=o();if(l===n)return;const h=!n,b=h?s(l):ge(()=>s(l));Promise.resolve(b?.finished).then(()=>{h||k("h1",a)?.focus({preventScroll:!0})})};return window.addEventListener("hashchange",m),m(),{get current(){return n}}}function vt(e){const a=window.matchMedia("(prefers-reduced-motion: reduce)").matches,t=window.innerWidth<760;let n;try{n=new Qe({canvas:e,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return e.remove(),null}n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setSize(window.innerWidth,window.innerHeight,!1),n.setClearColor(0,0);const i=new Ke;i.fog=new ea(329231,.045);const o=new aa(60,window.innerWidth/window.innerHeight,.1,100);o.position.set(0,0,14);const s=new Le;i.add(s);const m=(()=>{const u=document.createElement("canvas");u.width=u.height=64;const v=u.getContext("2d"),E=v.createRadialGradient(32,32,0,32,32,32);E.addColorStop(0,"rgba(255,255,255,1)"),E.addColorStop(.25,"rgba(255,255,255,0.85)"),E.addColorStop(1,"rgba(255,255,255,0)"),v.fillStyle=E,v.fillRect(0,0,64,64);const R=new ta(u);return R.colorSpace=ia,R})(),l=new Z("#38e1ff"),h=new Z("#8b5cf6"),b=new Z("#22f5a6"),f=t?70:140,y=t?3.2:2.7,M=new Q(14,8,6),d=new Float32Array(f*3),w=new Float32Array(f*3),A=new Float32Array(f*3);for(let u=0;u<f;u++){d[u*3]=(Math.random()-.5)*M.x*2,d[u*3+1]=(Math.random()-.5)*M.y*2,d[u*3+2]=(Math.random()-.5)*M.z*2,w[u*3]=(Math.random()-.5)*.012,w[u*3+1]=(Math.random()-.5)*.012,w[u*3+2]=(Math.random()-.5)*.008;const v=l.clone().lerp(h,Math.random());Math.random()<.12&&v.copy(b),A.set([v.r,v.g,v.b],u*3)}const W=new le;W.setAttribute("position",new N(d,3)),W.setAttribute("color",new N(A,3));const fe=new de({size:.22,map:m,vertexColors:!0,transparent:!0,depthWrite:!1,blending:I,sizeAttenuation:!0}),Ne=new pe(W,fe);s.add(Ne);const U=f*8,be=new Float32Array(U*6),ye=new Float32Array(U*6),T=new le;T.setAttribute("position",new N(be,3).setUsage(ue)),T.setAttribute("color",new N(ye,3).setUsage(ue));const Ve=new qe({vertexColors:!0,transparent:!0,depthWrite:!1,blending:I}),We=new ze(T,Ve);s.add(We);const ne=t?14:28,oe=new Float32Array(ne*3),se=new le;se.setAttribute("position",new N(oe,3).setUsage(ue));const we=new de({size:.32,map:m,color:16777215,transparent:!0,depthWrite:!1,blending:I}),Ue=new pe(se,we);s.add(Ue);const Je=Array.from({length:ne},()=>({seg:-1,t:Math.random(),speed:.008+Math.random()*.016})),C=new Le,ke=new Ie(2.2,1),Me=new ze(new na(ke),new qe({color:3727871,transparent:!0,opacity:.35,blending:I,depthWrite:!1})),J=new Pe(new Ie(1.35,0),new Te({color:9133302,wireframe:!0,transparent:!0,opacity:.55,blending:I,depthWrite:!1})),Ae=new pe(ke,new de({size:.16,map:m,color:10482687,transparent:!0,depthWrite:!1,blending:I})),j=new Pe(new oa(3.1,.012,8,160),new Te({color:2291110,transparent:!0,opacity:.5,blending:I}));j.rotation.x=Math.PI/2.4;const q=j.clone();q.material=j.material.clone(),q.material.color=new Z(9133302),q.scale.setScalar(1.18),q.rotation.set(Math.PI/3,Math.PI/5,0),C.add(Me,J,Ae,j,q),i.add(C);let xe=0,x=0,Ce=0,$e=0;const Se=()=>{const u=window.innerWidth;u<900?C.position.set(2,3.5,-9):C.position.set(5.2,.4,0),xe=C.position.z,C.scale.setScalar(u<900?.8:1)};Se();const _=new je(0,0),ce=new je(0,0),z=new Q;let D=0;window.addEventListener("pointermove",u=>{ce.x=u.clientX/window.innerWidth*2-1,ce.y=-(u.clientY/window.innerHeight)*2+1},{passive:!0}),window.addEventListener("scroll",()=>{const u=document.documentElement.scrollHeight-window.innerHeight;D=u>0?window.scrollY/u:0},{passive:!0});const Xe=()=>{o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight,!1),Se()};window.addEventListener("resize",Xe);const X=new Q,_e=new Q,O=[];let Y=!0,F=0;const Ye=new sa;function Ze(){z.set(_.x,_.y,.5).unproject(o),z.sub(o.position).normalize();const u=-o.position.z/z.z;z.multiplyScalar(u).add(o.position),s.worldToLocal(z);for(let g=0;g<f;g++){const p=g*3;a||(d[p]+=w[p],d[p+1]+=w[p+1],d[p+2]+=w[p+2]);const $=z.x-d[p],S=z.y-d[p+1],B=$*$+S*S;B<9&&B>.2&&(d[p]+=$*.0035,d[p+1]+=S*.0035),Math.abs(d[p])>M.x&&(w[p]*=-1),Math.abs(d[p+1])>M.y&&(w[p+1]*=-1),Math.abs(d[p+2])>M.z&&(w[p+2]*=-1)}W.attributes.position.needsUpdate=!0;let v=0;O.length=0;const E=y*y;for(let g=0;g<f&&v<U;g++)for(let p=g+1;p<f&&v<U;p++){const $=d[g*3]-d[p*3],S=d[g*3+1]-d[p*3+1],B=d[g*3+2]-d[p*3+2],Ee=$*$+S*S+B*B;if(Ee<E){const H=(1-Ee/E)*(.55+F*.6)*(1-x*.6);be.set([d[g*3],d[g*3+1],d[g*3+2],d[p*3],d[p*3+1],d[p*3+2]],v*6),ye.set([A[g*3]*H,A[g*3+1]*H,A[g*3+2]*H,A[p*3]*H,A[p*3+1]*H,A[p*3+2]*H],v*6),O.push(g,p),v++}}T.setDrawRange(0,v*2),T.attributes.position.needsUpdate=!0,T.attributes.color.needsUpdate=!0;const R=O.length/2;for(let g=0;g<ne;g++){const p=Je[g];if((p.seg<0||p.seg>=R||p.t>=1)&&(p.seg=R?Math.floor(Math.random()*R):-1,p.t=0),p.seg>=0){const $=O[p.seg*2],S=O[p.seg*2+1];p.t+=p.speed*(1+F*2),_e.set(d[S*3],d[S*3+1],d[S*3+2]),X.set(d[$*3],d[$*3+1],d[$*3+2]).lerp(_e,p.t),oe.set([X.x,X.y,X.z],g*3)}else oe.set([0,0,-50],g*3)}se.attributes.position.needsUpdate=!0}function re(){if(!Y)return;const u=Ye.getElapsedTime();_.lerp(ce,.06),F*=.95,x+=(Ce-x)*.05,$e++,(x<.5||$e%2===0)&&Ze(),fe.opacity=1-x*.5,we.opacity=1-x*.65,J.material.opacity=.55-x*.3,Ae.material.opacity=1-x*.55,j.material.opacity=q.material.opacity=.5-x*.3,C.position.z=xe-x*5,s.rotation.y=_.x*.12+D*.9,s.rotation.x=-_.y*.08+D*.25;const v=a?0:1;C.rotation.y=u*.18*v+_.x*.6+D*Math.PI*2,C.rotation.x=u*.08*v-_.y*.4,J.rotation.y=-u*.5*v,J.rotation.z=u*.3*v,j.rotation.z=u*.25*v,q.rotation.z=-u*.18*v;const E=1+Math.sin(u*1.6)*.03+F*.08;C.scale.setScalar((window.innerWidth<900?.8:1)*E*(1-D*.35)),Me.material.opacity=(.28+Math.sin(u*2)*.06+F*.3)*(1-x*.5),o.position.x+=(_.x*.8-o.position.x)*.04,o.position.y+=(_.y*.5-o.position.y)*.04,o.position.z=14-D*3,o.lookAt(0,0,0),n.render(i,o),requestAnimationFrame(re)}return document.addEventListener("visibilitychange",()=>{const u=document.visibilityState==="visible";u&&!Y?(Y=!0,requestAnimationFrame(re)):u||(Y=!1)}),requestAnimationFrame(re),{pulse:()=>{F=1},setMode:u=>{Ce=u==="calm"?1:0}}}const L={email:"christian.manco3@gmail.com",linkedin:"https://www.linkedin.com/in/christianpmanco/",github:"https://github.com/ZerPm",githubUser:"ZerPm",summary:"Profesional en Ingeniería de Sistemas orientado al análisis funcional y al diseño de soluciones TI. Traduzco requerimientos de negocio en especificaciones funcionales (DEF, historias de usuario), integro sistemas mediante APIs REST y OCR, y diseño arquitectura escalable sobre AWS y Azure.",summary2:"Gestiono proyectos y entregables bajo Scrum y Kanban, articulo la comunicación entre stakeholders y equipos de desarrollo, y garantizo la trazabilidad end-to-end: desde el requerimiento hasta el pase a producción y la atención de incidentes de nivel 3. Uso IA y n8n para automatizar operaciones."},Fe=["Analista Funcional","Soporte N3","Automatización con n8n","Integración de APIs","Trazabilidad end-to-end"],ft=[{value:8,suffix:"",label:"organizaciones atendidas"},{value:18,suffix:"",label:"certificaciones"},{value:8,suffix:"",label:"flujos n8n en producción"},{value:3,suffix:"+",label:"años en proyectos TI"}],bt=[{role:"Function Analyst",company:"Alicorp",via:"Por SOEN",period:"Agosto 2026 · Actualidad",current:!0,tasks:["Diseño de diagramas de secuencia y flujos de arquitectura funcional.","Especificación técnico-funcional para escenarios de integración.","Control de cambios, trazabilidad de requerimientos y validación de entregables."]},{role:"Function Analyst",company:"Artesco",via:"Por SOEN",period:"Agosto 2026 · Actualidad",current:!0,tasks:["Relevamiento y análisis de requerimientos con usuarios de negocio y TI.","Elaboración de DEF, historias de usuario, wireframes y flujos de solución.","Definición de criterios de aceptación, casos de prueba y soporte en despliegue."]},{role:"Function Analyst",company:"Primax",via:"Por SOEN",period:"Agosto 2026 · Actualidad",current:!0,tasks:["Modelado funcional de procesos, reglas de negocio e integraciones OCR / WhatsApp.","Documentación técnica y validación de servicios API de integración.","Apoyo operativo en la adopción y monitoreo de herramientas digitales."]},{role:"Software Analyst",company:"Prestamype",via:"",period:"Diciembre 2025 · Agosto 2026",tasks:["Levantamiento de necesidades y diseño de procesos para servicios de crédito y finanzas.","Documentación técnica y funcional, y soporte en pases a producción.","Coordinación técnica con desarrollo para implementar mejoras operativas."]},{role:"Software Analyst",company:"Cambio Seguro",via:"",period:"Diciembre 2025 · Agosto 2026",tasks:["Levantamiento de requerimientos y optimización de flujos transaccionales de divisas.","Elaboración de historias de usuario, criterios de aceptación y especificaciones.","Coordinación continua con equipos de desarrollo y aseguramiento de calidad (QA)."]},{role:"Fullstack Java & APX",company:"BBVA",via:"Por Stefanini",period:"Junio 2025 · Noviembre 2025",tasks:["Relevamiento de requerimientos y diseño de soluciones para banca digital.","Elaboración de especificaciones funcionales e interfaces de integración.","Soporte en pruebas funcionales, pruebas de usuario (UAT) y atención de incidentes."]},{role:"Software Engineer",company:"TRManagement SAC",via:"",period:"Marzo 2024 · Abril 2025",tasks:["Mapeo, rediseño y documentación de procesos internos y flujos de trabajo.","Elaboración de requerimientos funcionales para sistemas de gestión interna.","Diseño y ejecución de casos de prueba funcional para control de calidad (QA)."]},{role:"Fullstack Jr",company:"IDELCOM",via:"",period:"Octubre 2023 · Marzo 2024",tasks:["Análisis y optimización de procesos de atención al cliente y telecomunicaciones.","Definición de requerimientos, matrices de pruebas y seguimiento de entregables.","Coordinación directa entre áreas operativas y proveedores tecnológicos."]}],yt=[{icon:"file-text",title:"Análisis funcional",items:["DEF / especificaciones","Historias de usuario","Criterios de aceptación","Wireframes","Diagramas de secuencia","Modelado de procesos","Reglas de negocio"]},{icon:"life-buoy",title:"Soporte N3 & QA",items:["Pases a producción","Atención de incidentes","Pruebas funcionales","UAT","Casos y matrices de prueba","Control de cambios","Trazabilidad end-to-end"]},{icon:"network",title:"Integración",items:["APIs REST","Webhooks","OAuth 2.0 / SSO","OCR","WhatsApp","Jira & Confluence API","Google Workspace API"]},{icon:"cloud",title:"Cloud & datos",items:["AWS","Azure","Supabase (PostgreSQL)","SQL","Ingeniería de datos","Políticas de retención"]},{icon:"bot",title:"IA & automatización",items:["n8n","Google Gemini","Prompt engineering","Extracción estructurada (JSON)","Desarrollo asistido por IA","JavaScript"]},{icon:"layers",title:"Agilidad & desarrollo",items:["Scrum (PSM I)","Kanban","Jira","Java",".NET","Full-Stack (Front / Back)"]}],ae={schedule:{icon:"calendar-clock",label:"Programado",tone:"trigger"},webhook:{icon:"webhook",label:"Webhook",tone:"trigger"},drive:{icon:"hard-drive",label:"Google Drive",tone:"io"},docs:{icon:"file-text",label:"Google Docs",tone:"io"},rss:{icon:"rss",label:"RSS",tone:"io"},merge:{icon:"merge",label:"Merge",tone:"logic"},filter:{icon:"filter",label:"Filtro",tone:"logic"},branch:{icon:"split",label:"Condición",tone:"logic"},code:{icon:"code-xml",label:"Código JS",tone:"logic"},ai:{icon:"sparkles",label:"Gemini 2.5 Flash",tone:"ai"},db:{icon:"database",label:"Supabase",tone:"data"},http:{icon:"globe",label:"HTTP Request",tone:"io"},auth:{icon:"shield-check",label:"OAuth 2.0",tone:"auth"},jira:{icon:"ticket",label:"Jira",tone:"io"},confluence:{icon:"book-open",label:"Confluence",tone:"io"},mail:{icon:"mail",label:"Gmail",tone:"out"},chat:{icon:"message-square",label:"Google Chat",tone:"out"},form:{icon:"list-checks",label:"Tally",tone:"io"},respond:{icon:"send",label:"Respuesta HTTP",tone:"out"}},me=[{id:"reporte-produccion",icon:"rocket",title:"Reporte diario de pases a producción",category:"Soporte N3",trigger:{kind:"schedule",text:"Todos los días · 09:00"},value:"Elimina el reporte manual de despliegues: cada mañana notifica por proyecto qué tickets pasaron a producción, detecta el cierre del sprint y sella los tickets en Jira para no notificarlos dos veces.",impact:["Release notes automáticos","Visibilidad cross-company","Cero duplicados"],nodes:[{kind:"schedule",name:"Reloj trigger",desc:"Inicia el pipeline a hora fija para entregar el reporte puntualmente."},{kind:"jira",name:"Trae tickets",desc:"Consulta JQL de tickets en estado LISTO dentro de sprints abiertos que aún no tienen la etiqueta de enviado."},{kind:"code",name:"Divide proyectos",desc:"Agrupa los tickets por prefijo de proyecto para procesarlos en lotes independientes."},{kind:"db",name:"Trae destinatarios",desc:"Recupera la lista de distribución autorizada para cada proyecto."},{kind:"code",name:"Encadena datos",desc:"Cruza proyectos, tickets y destinatarios en un paquete por proyecto."},{kind:"jira",name:"Radar de cierre",desc:"Verifica si quedan tickets pendientes para anunciar el fin del sprint."},{kind:"code",name:"Arma correo",desc:"Renderiza un HTML con colores por marca, tabla de tickets y vínculos de negocio (P2P)."},{kind:"mail",name:"Envía correo",desc:"Despacha el reporte a cada lista de distribución."},{kind:"code",name:"Prepara etiquetas",desc:"Construye el payload de etiquetas para cada ticket notificado."},{kind:"jira",name:"Sella etiquetas",desc:"Write-back en Jira: marca los tickets como notificados para garantizar idempotencia."}]},{id:"dailys",icon:"scan-text",title:"Transcripción inteligente de dailys",category:"IA aplicada",trigger:{kind:"schedule",text:"Todos los días · 11:30"},value:"Convierte la transcripción de cada daily en datos estructurados por persona (qué hizo, qué hará, bloqueantes y tickets Jira). Los bloqueantes se separan en una tabla propia para que los líderes los vean de inmediato.",impact:["Bloqueantes visibles al instante","Historial consultable","Autolimpieza 14 / 28 días"],nodes:[{kind:"schedule",name:"Daily trigger",desc:"Ejecución diaria automática después de las reuniones."},{kind:"drive",name:"Buscar dailys",desc:"Busca en Drive los documentos de transcripción del día."},{kind:"filter",name:"Filtro por fecha",desc:"Conserva solo los archivos de la fecha actual (zona horaria Lima)."},{kind:"docs",name:"Leer contenido",desc:"Recupera el cuerpo completo del documento."},{kind:"code",name:"Juntar texto",desc:"Consolida los fragmentos en un solo bloque para optimizar tokens."},{kind:"ai",name:"Análisis semántico",desc:"Extrae por desarrollador: avances, plan, bloqueantes y URLs de tickets, con reglas para distinguir identidades."},{kind:"code",name:"JSON a filas",desc:"Normaliza la respuesta del modelo a columnas de base de datos."},{kind:"branch",name:"¿Tiene bloqueante?",desc:"Si el analista reportó un bloqueo, activa la rama de alerta."},{kind:"db",name:"Registro general y de bloqueantes",desc:"Inserta el 100 % en la tabla maestra y los bloqueos en la tabla de stoppers."},{kind:"http",name:"Retención automática",desc:"DELETE programado: 14 días para el histórico y 28 días para bloqueantes."}]},{id:"capacitaciones",icon:"book-open",title:"Documentación automática de capacitaciones",category:"IA aplicada",trigger:{kind:"drive",text:"Nueva transcripción en Drive"},value:"Cada capacitación grabada en Meet se convierte en una página de documentación técnica en Confluence: objetivo, conceptos, endpoints, acuerdos y dudas abiertas, sin que nadie tenga que redactarla.",impact:["Base de conocimiento viva","Horas de redacción ahorradas","Formato estándar"],nodes:[{kind:"drive",name:"Drive trigger",desc:"Escucha la carpeta de grabaciones y dispara al crearse un archivo."},{kind:"branch",name:"Filtro inteligente",desc:"Acepta solo documentos cuyo nombre empieza con [CAP]; descarta videos."},{kind:"drive",name:"Descarga",desc:"Obtiene el documento original de la transcripción."},{kind:"code",name:"Extrae texto",desc:"Convierte el binario en texto legible para la IA."},{kind:"ai",name:"Documentador técnico",desc:"Genera documentación HTML estructurada con tablas de definiciones y próximos pasos."},{kind:"confluence",name:"Publica en Confluence",desc:"Crea la página como borrador en el espacio de documentación vía API REST."}]},{id:"recien-documentado",icon:"megaphone",title:"Aviso de “recién documentado”",category:"Comunicación",trigger:{kind:"webhook",text:"Página publicada en Confluence"},value:"Cierra el ciclo de la documentación: cuando una página se publica en la carpeta de arquitectura, la comunidad recibe al instante una tarjeta en Google Chat con título, resumen y enlace.",impact:["Difusión en tiempo real","Más lectura de la documentación","Sin mensajes manuales"],nodes:[{kind:"webhook",name:"Webhook de Confluence",desc:"Recibe el evento de publicación con el identificador de la página."},{kind:"confluence",name:"Obtiene la página",desc:"Lee contenido, ancestros e historial de la página."},{kind:"code",name:"Filtra y resume",desc:"Verifica que pertenezca a la carpeta objetivo y genera un resumen de 280 caracteres."},{kind:"chat",name:"Publica tarjeta",desc:"Envía una card v2 a Google Chat con botón para abrir el documento."}]},{id:"tendencias",icon:"radar",title:"Radar semanal de tendencias tech",category:"IA aplicada",trigger:{kind:"schedule",text:"Cada lunes · 09:00"},value:"Curaduría automática de noticias de IA, cloud y desarrollo: la IA selecciona las 3 o 4 más relevantes para un equipo fintech y explica por qué importan, publicadas en el espacio del equipo.",impact:["Actualización continua del equipo","Filtro de ruido con IA","Cero esfuerzo manual"],nodes:[{kind:"schedule",name:"Cada lunes",desc:"Disparo semanal al inicio de la jornada."},{kind:"rss",name:"Fuentes RSS",desc:"Lee los feeds de Google AI, AWS News y GitHub Blog."},{kind:"merge",name:"Juntar fuentes",desc:"Unifica los artículos en un solo flujo."},{kind:"code",name:"Últimos 7 días",desc:"Filtra por fecha, deduplica por enlace, toma 2 por fuente y arma el prompt."},{kind:"ai",name:"Curador IA",desc:"Elige las noticias con valor práctico y responde en JSON estricto."},{kind:"code",name:"Armar tarjeta",desc:"Construye la card con título, motivo y botón “Leer más”."},{kind:"chat",name:"Postear en Chat",desc:"Publica el radar en Google Chat."}]},{id:"sprints",icon:"zap",title:"Anunciador de inicio de sprint",category:"Comunicación",trigger:{kind:"webhook",text:"Evento de sprint iniciado en Jira"},value:"Al iniciar un sprint, los stakeholders reciben un correo oficial con fechas, tickets planificados, estados y vínculos a tickets de negocio, con la identidad visual de cada marca.",impact:["Comunicación en segundos","Branding por marca","Destinatarios centralizados"],nodes:[{kind:"webhook",name:"Webhook de Jira",desc:"Recibe el evento de inicio de sprint (event-driven)."},{kind:"jira",name:"Trae tickets",desc:"Extrae historias y bugs planificados con JQL por sprint."},{kind:"code",name:"Limpia datos",desc:"Aísla ticket, requerimiento, estado y tipo."},{kind:"code",name:"Extrae proyecto",desc:"Mapea prefijos a proyectos, define colores, firma y estados estandarizados."},{kind:"db",name:"Busca correos",desc:"Obtiene la lista de distribución del tablero."},{kind:"code",name:"Arma lista",desc:"Consolida los destinatarios."},{kind:"mail",name:"Envía correo",desc:"Despacha el anuncio HTML vía Gmail."}]},{id:"suscripciones",icon:"bell",title:"Portal de autoservicio de notificaciones",category:"Seguridad",trigger:{kind:"webhook",text:"Clic desde el correo de sprint"},value:"Los usuarios gestionan por sí mismos su suscripción a los correos de sprint y producción. Un SSO con Google valida el dominio corporativo antes de permitir cambios, que se aplican sin duplicados.",impact:["Autoatención sin tickets a TI","SSO corporativo","Datos consistentes"],nodes:[{kind:"webhook",name:"Portal sprint",desc:"Puerta de acceso pública que intercepta la solicitud inicial."},{kind:"respond",name:"Pantalla de login",desc:"Responde con el botón “Iniciar sesión con Google”."},{kind:"auth",name:"Callback OAuth",desc:"Canjea el código de autorización por un access token (server-to-server)."},{kind:"http",name:"Identidad",desc:"Consulta el perfil del usuario autenticado para obtener su correo."},{kind:"branch",name:"Firewall lógico",desc:"Valida que el correo pertenezca a los dominios corporativos."},{kind:"form",name:"Formulario",desc:"Redirige al formulario con el correo verificado como campo oculto."},{kind:"code",name:"Extrae datos",desc:"Interpreta la acción, proyectos y correos enviados."},{kind:"branch",name:"Decide acción",desc:"Bifurca entre agregar o eliminar destinatarios."},{kind:"code",name:"Agregar / eliminar",desc:"Fusiona sin duplicados o purga el correo de la lista actual."},{kind:"db",name:"Aplicar en BD",desc:"UPDATE transaccional sobre la fila exacta del proyecto."}]},{id:"bloqueantes",icon:"shield-check",title:"Formulario seguro de bloqueantes",category:"Seguridad",trigger:{kind:"webhook",text:"Acceso al formulario"},value:"Los analistas reportan impedimentos en cualquier momento, no solo en la daily. El acceso se valida con OAuth 2.0 contra una lista autorizada y cada reporte entra directo a la tabla de bloqueantes.",impact:["Reporte asíncrono de impedimentos","Acceso solo autorizado","Ingesta directa a BD"],nodes:[{kind:"webhook",name:"Punto de entrada",desc:"Genera la URL pública que recibe el clic inicial."},{kind:"respond",name:"Redirección a Google",desc:"Envía al usuario a la pasarela OAuth (302)."},{kind:"auth",name:"Canje de token",desc:"Intercambia el código temporal por un token de acceso."},{kind:"http",name:"User info",desc:"Recupera el correo real del usuario autenticado."},{kind:"branch",name:"Validador",desc:"Compara el correo con la lista de analistas autorizados (regex)."},{kind:"form",name:"Formulario Tally",desc:"Acceso concedido con el correo como variable oculta; si no, 403."},{kind:"webhook",name:"Ingesta Tally",desc:"Escucha el envío del formulario (POST)."},{kind:"db",name:"Crea registro",desc:"Mapeo dinámico de campos e inserción en la tabla de bloqueantes."}]}],V=[{title:"Professional Scrum Master I (PSM I)",issuer:"Scrum.org",cat:"Agilidad",url:"https://www.scrum.org/certificates/1339890"},{title:"Scrum Fundamentals Certified (SFC)",issuer:"SCRUMstudy",cat:"Agilidad",url:"https://www.scrumstudy.com/certification/verify?type=SFC&number=1050782"},{title:"Kanban Awareness",issuer:"KanbanLearn",cat:"Agilidad",url:""},{title:"Applied Skills: Accelerating AI-assisted development",issuer:"Microsoft Learn",cat:"IA",url:"https://learn.microsoft.com/api/credentials/share/en-us/ChristianManco-5703/41C7304E321B09D8?sharingId=32FD1402396DC563"},{title:"n8n Quickstart",issuer:"n8n",cat:"IA",url:""},{title:"Generative AI Fundamentals",issuer:"Coursera",cat:"IA",url:"https://coursera.org/share/54dbdd59880d4b0329cb7e951ae3340b"},{title:"Generative AI in Software Development",issuer:"Coursera",cat:"IA",url:"https://coursera.org/share/3e3535200c2e27282d6df5f9c34b98dd"},{title:"AWS Cloud Solutions Architect",issuer:"AWS · Coursera",cat:"Cloud & datos",url:"https://coursera.org/share/d609bd79fc1f729d82088e5a3f602e4c"},{title:"IBM Data Engineering",issuer:"IBM · Coursera",cat:"Cloud & datos",url:"https://coursera.org/share/f0380112bb5c90a0fdd71eb6488ff433"},{title:"Database Integration and Management",issuer:"Coursera",cat:"Cloud & datos",url:"https://coursera.org/share/ecbc21d23a11d7049874e01a77795d98"},{title:"Microsoft Front-End Developer",issuer:"Microsoft · Coursera",cat:"Desarrollo",url:"https://coursera.org/share/37fd1d6da3fa8130db5835215b896692"},{title:"Back-End Development with .NET",issuer:"Microsoft · Coursera",cat:"Desarrollo",url:"https://coursera.org/share/603d6b3ca725c28026ec1541661e926f"},{title:"IBM Full Stack Software Developer",issuer:"IBM · Coursera",cat:"Desarrollo",url:"https://coursera.org/share/1741b4b7b6fc4101aaf238920a659844"},{title:"Programming with Java",issuer:"Amazon · Coursera",cat:"Desarrollo",url:"https://coursera.org/share/1759817348e45c73a41d55348b505433"},{title:"Full-Stack Integration",issuer:"Coursera",cat:"Desarrollo",url:"https://coursera.org/share/7785cbfb0a934212a4b30dfaf970975f"},{title:"Application Development",issuer:"Coursera",cat:"Desarrollo",url:"https://coursera.org/share/af80c69f5bd356f40f5e9a035e621acf"},{title:"Security and Authentication",issuer:"Coursera",cat:"Desarrollo",url:"https://coursera.org/share/6ff39a6c238555ff59f145036203015c"},{title:"Data Structures and Algorithms",issuer:"Coursera",cat:"Desarrollo",url:"https://coursera.org/share/5156e9b5a059320006f05cbe56bdeb41"}],wt=[{title:"Ingeniería de Sistemas de Información",place:"UPC · Universidad Peruana de Ciencias Aplicadas",note:"En curso"},{title:"Educación secundaria",place:"IE 7009 Federico Villarreal",note:"Graduado con honores académicos"}],kt=[{name:"Español",level:"Nativo",pct:100},{name:"Inglés",level:"Intermedio",pct:60}],Mt=[{href:"#/perfil",icon:"headset",title:"Mi perfil",text:"Análisis funcional, soporte N3, experiencia y habilidades."},{href:"#/automatizaciones",icon:"workflow",title:"Automatizaciones n8n",text:`${me.length} flujos en producción con triggers, nodos y valor operativo.`},{href:"#/certificaciones",icon:"award",title:"Certificaciones",text:`${V.length} credenciales con enlace de verificación.`}],At={id:"inicio",label:"Inicio",title:"Christian Manco · Analista Funcional & Soporte N3",render:()=>`
    <section class="hero" aria-labelledby="hero-title">
      <div class="container hero__inner">
        <p class="eyebrow reveal"><span class="pulse-dot"></span> Disponible para nuevos proyectos · Lima, Perú</p>
        <h1 class="hero__title" id="hero-title" tabindex="-1">
          <span class="line"><span class="line__in">Christian</span></span>
          <span class="line"><span class="line__in grad">Manco</span></span>
        </h1>
        <p class="hero__role reveal"><span class="mono">&gt;</span> <span id="role-scramble">${c(Fe[0])}</span><span class="caret"></span></p>
        <p class="hero__lead reveal">
          Traduzco necesidades de negocio en soluciones trazables: desde el requerimiento y la especificación funcional hasta el pase a producción, el soporte N3 y la automatización de procesos con n8n e IA.
        </p>
        <div class="hero__actions reveal">
          <a class="btn btn--primary ripple" href="#/automatizaciones" data-magnetic><i data-lucide="workflow"></i> Ver automatizaciones</a>
          <a class="btn btn--ghost ripple" href="#/contacto" data-magnetic><i data-lucide="send"></i> Contactar</a>
        </div>
        <ul class="stats reveal">
          ${ft.map(e=>`<li><b data-count="${e.value}" data-suffix="${e.suffix}">0${e.suffix}</b><span>${c(e.label)}</span></li>`).join("")}
        </ul>
      </div>
    </section>
    <section class="section section--tight" aria-label="Accesos rápidos">
      <div class="container shortcuts">
        ${Mt.map((e,a)=>`
          <a class="shortcut card glass tilt reveal" href="${e.href}" style="--d:${a*.08}s">
            <span class="flow__icon"><i data-lucide="${e.icon}"></i></span>
            <h2>${c(e.title)}</h2>
            <p>${c(e.text)}</p>
            <span class="flow__more">Abrir <i data-lucide="arrow-right"></i></span>
          </a>`).join("")}
      </div>
    </section>`,mount:e=>(requestAnimationFrame(()=>e.querySelector(".hero")?.classList.add("is-on")),ut(e.querySelector("#role-scramble"),Fe))},xt=[{icon:"clipboard-list",title:"Análisis funcional",items:["Levantamiento y relevamiento de requerimientos con negocio y TI.","DEF, historias de usuario, criterios de aceptación y wireframes.","Diagramas de secuencia, modelado de procesos y reglas de negocio.","Especificación de integraciones: APIs REST, OCR y WhatsApp."]},{icon:"headset",title:"Soporte N3",items:["Soporte en pases a producción y validación de entregables.","Atención y análisis de incidentes con equipos de desarrollo.","Pruebas funcionales, UAT y matrices de prueba.","Control de cambios y trazabilidad end-to-end del requerimiento."]}],Re=[["enfoque","Enfoque"],["experiencia","Experiencia"],["habilidades","Habilidades"],["formacion","Formación"]],Ct={id:"perfil",label:"Mi perfil",render:()=>`
    <section class="section">
      <div class="container">
        ${te("02 · Mi perfil","Soporte N3 y Funcional","Analista funcional con mentalidad de ingeniería y de operación.")}

        <nav class="subnav reveal" aria-label="Secciones del perfil">
          ${Re.map(([e,a])=>`<button type="button" class="chip" data-jump="${e}">${a}</button>`).join("")}
        </nav>

        <div class="profile reveal">
          <div class="profile__text">
            <p>${c(L.summary)}</p>
            <p>${c(L.summary2)}</p>
          </div>
        </div>

        <section class="block" id="enfoque" aria-labelledby="h-enfoque">
          <h2 class="block__title" id="h-enfoque">Enfoque</h2>
          <div class="focus">
            ${xt.map((e,a)=>`
              <article class="card glass tilt reveal" style="--d:${a*.1}s">
                <h3 class="focus__title"><span class="ico"><i data-lucide="${e.icon}"></i></span>${c(e.title)}</h3>
                <ul class="tl-tasks">${e.items.map(t=>`<li>${c(t)}</li>`).join("")}</ul>
              </article>`).join("")}
          </div>
        </section>

        <section class="block" id="experiencia" aria-labelledby="h-exp">
          <h2 class="block__title" id="h-exp">Experiencia</h2>
          <ol class="timeline" id="timeline">
            ${bt.map(e=>`
              <li class="tl-item reveal">
                <article class="card glass tilt">
                  <div class="tl-meta">
                    <span class="period">${c(e.period)}</span>
                    <h3>${c(e.company)}</h3>
                    ${e.via?`<span class="via">${c(e.via)}</span>`:""}
                  </div>
                  <div>
                    <div class="tl-role">${c(e.role)} ${e.current?'<span class="badge">Actual</span>':""}</div>
                    <ul class="tl-tasks">${e.tasks.map(a=>`<li>${c(a)}</li>`).join("")}</ul>
                  </div>
                </article>
              </li>`).join("")}
          </ol>
        </section>

        <section class="block" id="habilidades" aria-labelledby="h-skills">
          <h2 class="block__title" id="h-skills">Habilidades</h2>
          <div class="skills">
            ${yt.map((e,a)=>`
              <article class="skill card glass tilt reveal" style="--d:${a%3*.08}s">
                <h3><span class="ico"><i data-lucide="${e.icon}"></i></span>${c(e.title)}</h3>
                <div class="tags">${e.items.map(t=>`<span class="tag">${c(t)}</span>`).join("")}</div>
              </article>`).join("")}
          </div>
        </section>

        <section class="block" id="formacion" aria-labelledby="h-edu">
          <h2 class="block__title" id="h-edu">Formación e idiomas</h2>
          <div class="focus">
            <div class="card glass tilt reveal">
              <h3 class="card__label"><i data-lucide="graduation-cap"></i> Educación</h3>
              <ul class="edu">${wt.map(e=>`<li><b>${c(e.title)}</b><span>${c(e.place)}</span><br><em>${c(e.note)}</em></li>`).join("")}</ul>
            </div>
            <div class="card glass tilt reveal">
              <h3 class="card__label"><i data-lucide="languages"></i> Idiomas</h3>
              <ul class="langs">${kt.map(e=>`<li><div class="row"><span>${c(e.name)}</span><span class="muted">${c(e.level)}</span></div><div class="bar"><i style="--w:${e.pct}%"></i></div></li>`).join("")}</ul>
            </div>
          </div>
        </section>
      </div>
    </section>`,mount:e=>{const a=s=>{const m=s.target.closest("[data-jump]");m&&e.querySelector(`#${m.dataset.jump}`)?.scrollIntoView({behavior:"smooth",block:"start"})};e.addEventListener("click",a);const t=G("[data-jump]",e),n=new IntersectionObserver(s=>s.forEach(m=>{m.isIntersecting&&t.forEach(l=>l.classList.toggle("is-active",l.dataset.jump===m.target.id))}),{rootMargin:"-40% 0px -55% 0px"});Re.forEach(([s])=>n.observe(e.querySelector(`#${s}`)));const i=e.querySelector("#timeline"),o=()=>{const s=i.getBoundingClientRect();i.style.setProperty("--tl",`${Math.min(Math.max((window.innerHeight*.6-s.top)/s.height,0),1)*100}%`)};return window.addEventListener("scroll",o,{passive:!0}),o(),()=>{e.removeEventListener("click",a),n.disconnect(),window.removeEventListener("scroll",o)}}},$t=[["trigger","Disparador"],["io","Integración / E-S"],["logic","Lógica y código"],["ai","IA generativa"],["data","Base de datos"],["auth","Seguridad"],["out","Salida / notificación"]],St=(e,a)=>{const t=ae[e.trigger.kind],n=e.nodes.map((i,o)=>{const s=ae[i.kind],m=o<e.nodes.length-1?`<span class="pipe__edge" style="--i:${(o*.18).toFixed(2)}s"></span>`:"";return`<span class="pipe__node tone-${s.tone}" title="${c(i.name)} · ${c(s.label)}"><i data-lucide="${s.icon}"></i></span>${m}`}).join("");return`
    <button class="flow card glass tilt reveal" style="--d:${a%2*.1}s" data-flow="${e.id}" aria-haspopup="dialog">
      <div class="flow__top">
        <span class="flow__icon"><i data-lucide="${e.icon}"></i></span>
        <span class="flow__cat">${c(e.category)}</span>
      </div>
      <h2 class="flow__title">${c(e.title)}</h2>
      <span class="trigger"><i data-lucide="${t.icon}"></i> ${c(e.trigger.text)}</span>
      <div class="pipe" aria-label="${e.nodes.length} nodos">${n}</div>
      <p class="flow__value">${c(e.value)}</p>
      <div class="flow__impact">${e.impact.map(i=>`<span>${c(i)}</span>`).join("")}</div>
      <span class="flow__more">Ver ${e.nodes.length} nodos del pipeline <i data-lucide="arrow-right"></i></span>
    </button>`},_t=e=>{const a=ae[e.trigger.kind];return`
    <div class="fm-head">
      <span class="flow__icon"><i data-lucide="${e.icon}"></i></span>
      <div><span class="flow__cat">${c(e.category)}</span><h3 id="fm-title">${c(e.title)}</h3></div>
    </div>
    <span class="trigger"><i data-lucide="${a.icon}"></i> Trigger · ${c(e.trigger.text)}</span>
    <p class="fm-value">${c(e.value)}</p>
    <div class="flow__impact" style="margin-bottom:26px">${e.impact.map(t=>`<span>${c(t)}</span>`).join("")}</div>
    <h4 class="card__label"><i data-lucide="workflow"></i> Pipeline · ${e.nodes.length} nodos</h4>
    <ol class="fm-steps">
      ${e.nodes.map((t,n)=>{const i=ae[t.kind];return`<li class="fm-step tone-${i.tone}" style="--i:${n}">
          <span class="pipe__node"><i data-lucide="${i.icon}"></i></span>
          <div><span class="kind">${String(n+1).padStart(2,"0")} · ${c(i.label)}</span><b>${c(t.name)}</b><p>${c(t.desc)}</p></div>
        </li>`}).join("")}
    </ol>`};function Et(e){return{id:"automatizaciones",label:"Automatizaciones n8n",render:()=>`
      <section class="section">
        <div class="container">
          ${te("03 · Automatizaciones n8n","Automatizaciones de negocio","Flujos n8n que diseñé y opero. Cada uno muestra su disparador, sus nodos y el valor operativo que entrega. Haz clic para ver el pipeline completo.")}
          <div class="legend reveal">${$t.map(([a,t])=>`<span class="tone-${a}"><i></i>${t}</span>`).join("")}</div>
          <div class="flows">${me.map(St).join("")}</div>

          <div class="ecosystem card glass reveal">
            <h2 class="card__label"><i data-lucide="network"></i> Ciclo de conocimiento encadenado</h2>
            <div class="eco">
              <div class="eco__step"><i data-lucide="hard-drive"></i><span>Grabación en Meet</span></div>
              <div class="eco__link"></div>
              <div class="eco__step"><i data-lucide="sparkles"></i><span>IA documenta</span></div>
              <div class="eco__link"></div>
              <div class="eco__step"><i data-lucide="book-open"></i><span>Página en Confluence</span></div>
              <div class="eco__link"></div>
              <div class="eco__step"><i data-lucide="message-square"></i><span>Aviso en Google Chat</span></div>
            </div>
            <p class="muted">Dos flujos se encadenan: la documentación automática de capacitaciones publica en Confluence y ese evento dispara el aviso a la comunidad.</p>
          </div>
        </div>
      </section>`,mount:a=>{const t=k("#flow-modal"),n=k("#fm-body"),i=o=>{const s=o.target.closest("[data-flow]");if(!s)return;const m=me.find(l=>l.id===s.dataset.flow);n.innerHTML=_t(m),Ge(),ge(()=>t.showModal()),e?.pulse()};return a.addEventListener("click",i),()=>{a.removeEventListener("click",i),t.open&&t.close()}}}}const Lt=["Todas",...new Set(V.map(e=>e.cat))],qt=(e,a)=>{const t=`
    <div class="cert__top"><span class="cert__seal"><i data-lucide="${e.url?"award":"badge-check"}"></i></span><span class="cert__cat">${c(e.cat)}</span></div>
    <h2 class="cert__title">${c(e.title)}</h2>
    <span class="cert__issuer">${c(e.issuer)}</span>
    <span class="cert__cta">${e.url?'Verificar credencial <i data-lucide="arrow-up-right"></i>':'<i data-lucide="lock"></i> Sin enlace público'}</span>`,n=`style="--d:${a%3*.06}s" data-cat="${c(e.cat)}"`;return e.url?`<a class="cert card glass tilt reveal" ${n} href="${c(e.url)}" target="_blank" rel="noopener noreferrer" aria-label="Verificar ${c(e.title)} (${c(e.issuer)}), se abre en otra pestaña">${t}</a>`:`<div class="cert cert--nolink card glass tilt reveal" ${n}>${t}</div>`},zt={id:"certificaciones",label:"Certificaciones",render:()=>`
    <section class="section">
      <div class="container">
        ${te("04 · Certificaciones","Certificaciones","Cada tarjeta enlaza a la credencial original para verificarla.")}
        <div class="chips reveal" role="group" aria-label="Filtrar certificaciones">
          ${Lt.map((e,a)=>{const t=e==="Todas"?V.length:V.filter(n=>n.cat===e).length;return`<button type="button" class="chip ${a===0?"is-active":""}" aria-pressed="${a===0}" data-cat="${c(e)}">${c(e)}<small>${t}</small></button>`}).join("")}
        </div>
        <div class="certs">${V.map(qt).join("")}</div>
      </div>
    </section>`,mount:e=>{const a=G(".chip[data-cat]",e),t=G(".cert",e),n=i=>{const o=i.target.closest(".chip[data-cat]");if(!o)return;const s=o.dataset.cat;ge(()=>{a.forEach(l=>{const h=l===o;l.classList.toggle("is-active",h),l.setAttribute("aria-pressed",String(h))});let m=0;t.forEach(l=>{const h=s==="Todas"||l.dataset.cat===s;l.classList.toggle("is-hidden",!h),l.classList.remove("is-entering"),h&&(l.classList.add("is-in"),l.style.setProperty("--i",m++),l.offsetWidth,l.classList.add("is-entering"))})})};return e.addEventListener("click",n),()=>e.removeEventListener("click",n)}},It=[{id:"linkedin",icon:"linkedin",label:"LinkedIn",value:"/in/christianpmanco",href:L.linkedin,cta:"Ver perfil",external:!0,tone:"#38bdf8"},{id:"email",icon:"mail",label:"Correo electrónico",value:L.email,href:`mailto:${L.email}`,cta:"Escribir correo",external:!1,tone:"#22f5a6",copy:L.email},{id:"github",icon:"github",label:"GitHub",value:`@${L.githubUser}`,href:L.github,cta:"Ver repositorios",external:!0,tone:"#a78bfa"}],Pt={id:"contacto",label:"Contacto",render:()=>`
    <section class="section contact">
      <div class="container">
        ${te("05 · Contacto","¿Conversamos?","Análisis funcional, soporte de producción o automatización de un proceso: cuéntame qué necesitas.")}
        <div class="contact__grid">
          ${It.map((e,a)=>`
            <article class="contact__card card glass reveal" style="--d:${a*.08}s; --tone:${e.tone}">
              <span class="contact__icon"><i data-lucide="${e.icon}"></i></span>
              <span class="contact__k">${c(e.label)}</span>
              <span class="contact__v">${c(e.value)}</span>
              <div class="contact__actions">
                <a class="btn btn--channel ripple" href="${c(e.href)}" data-magnetic data-channel="${e.id}"
                  ${e.external?'target="_blank" rel="noopener noreferrer"':""}>
                  ${c(e.cta)} <i data-lucide="arrow-up-right"></i>
                </a>
                ${e.copy?`<button type="button" class="btn btn--icon ripple" data-copy="${c(e.copy)}" aria-label="Copiar correo"><i data-lucide="copy"></i></button>`:""}
              </div>
            </article>`).join("")}
        </div>
        <p class="contact__note reveal muted" aria-live="polite" id="copy-status">Respondo en menos de 24 horas hábiles · Lima, Perú (GMT-5)</p>
      </div>
    </section>`,mount:e=>{const a=e.querySelector("#copy-status"),t=a.textContent;let n;const i=async o=>{const s=o.target.closest("[data-copy]");if(s){try{await navigator.clipboard.writeText(s.dataset.copy),a.textContent="✓ Correo copiado al portapapeles",s.classList.add("is-done")}catch{a.textContent=s.dataset.copy}clearTimeout(n),n=setTimeout(()=>{a.textContent=t,s.classList.remove("is-done")},2400)}};return e.addEventListener("click",i),()=>{clearTimeout(n),e.removeEventListener("click",i)}}};document.body.classList.add("is-loading");k("#year").textContent=new Date().getFullYear();const Oe=vt(k("#bg")),Tt=[At,Ct,Et(Oe),zt,Pt],jt=k(".nav"),he=k("#nav-toggle"),ie=k("#nav-links"),ve=e=>{ie.classList.toggle("is-open",e),he.setAttribute("aria-expanded",String(e)),he.setAttribute("aria-label",e?"Cerrar menú":"Abrir menú")};he.addEventListener("click",()=>ve(!ie.classList.contains("is-open")));ie.addEventListener("click",e=>{e.target.closest("a")&&ve(!1)});document.addEventListener("keydown",e=>{e.key==="Escape"&&ve(!1)});const Dt=k("#hud-progress"),Be=()=>{const e=window.scrollY;jt.classList.toggle("is-scrolled",e>20);const a=document.documentElement.scrollHeight-window.innerHeight;Dt.style.height=`${a>0?e/a*100:0}%`};window.addEventListener("scroll",Be,{passive:!0});const Ft=k("#hud-num"),Rt=k("#hud-label");gt({routes:Tt,outlet:k("#view"),onChange:(e,a)=>{G("a[data-route]",ie).forEach(t=>{const n=t.dataset.route===e.id;t.classList.toggle("is-active",n),n?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")}),Ft.textContent=String(a+1).padStart(2,"0"),Rt.textContent=e.label,Oe?.setMode(e.id==="inicio"?"hero":"calm"),Be()}});const ee=k("#flow-modal");k("#fm-close").addEventListener("click",()=>ee.close());ee.addEventListener("click",e=>{e.target===ee&&ee.close()});mt();ht();const Ht=()=>{document.body.classList.add("is-ready"),document.body.classList.remove("is-loading"),setTimeout(()=>k(".intro")?.remove(),1400)};Promise.race([document.fonts?.ready,new Promise(e=>setTimeout(e,1500))]).then(()=>setTimeout(Ht,P?0:600));
