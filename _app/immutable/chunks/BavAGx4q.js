import{aa as b,ab as N,ac as k,Q as w,ad as j,X as q,a7 as B,T as Y,ae as A,af as x,ag as F,ah as U,h as p,f,a as C,ai as L,s as O,aj as M,ak as $,al as G,am as R,c as T,an as Q,ao as X,ap as z,aq as J,ar as K,as as Z,e as ee,x as re,j as te,A as ae}from"./DzAYLoNR.js";const ne=["touchstart","touchmove"];function ie(e){return ne.includes(e)}function se(e){var r=k,t=w;b(null),N(null);try{return e()}finally{b(r),N(t)}}const oe=new Set,P=new Set;function ue(e,r,t,o={}){function n(a){if(o.capture||g.call(r,a),!a.cancelBubble)return se(()=>t==null?void 0:t.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?q(()=>{r.addEventListener(e,n,o)}):r.addEventListener(e,n,o),n}function _e(e,r,t,o,n){var a={capture:o,passive:n},i=ue(e,r,t,a);(r===document.body||r===window||r===document)&&j(()=>{r.removeEventListener(e,i,a)})}function g(e){var I;var r=this,t=r.ownerDocument,o=e.type,n=((I=e.composedPath)==null?void 0:I.call(e))||[],a=n[0]||e.target,i=0,_=e.__root;if(_){var d=n.indexOf(_);if(d!==-1&&(r===document||r===window)){e.__root=r;return}var m=n.indexOf(r);if(m===-1)return;d<=m&&(i=d)}if(a=n[i]||e.target,a!==r){B(e,"currentTarget",{configurable:!0,get(){return a||t}});var S=k,c=w;b(null),N(null);try{for(var s,u=[];a!==null;){var l=a.assignedSlot||a.parentNode||a.host||null;try{var h=a["__"+o];if(h!==void 0&&!a.disabled)if(Y(h)){var[H,...W]=h;H.apply(a,[e,...W])}else h.call(a,e)}catch(E){s?u.push(E):s=E}if(e.cancelBubble||l===r||l===null)break;a=l}if(s){for(let E of u)queueMicrotask(()=>{throw E});throw s}}finally{e.__root=r,delete e.currentTarget,b(S),N(c)}}}function fe(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function v(e,r){var t=w;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=r)}function ve(e,r){var t=(r&F)!==0,o=(r&U)!==0,n,a=!e.startsWith("<!>");return()=>{if(p)return v(f,null),f;n===void 0&&(n=fe(a?e:"<!>"+e),t||(n=A(n)));var i=o||x?document.importNode(n,!0):n.cloneNode(!0);if(t){var _=A(i),d=i.lastChild;v(_,d)}else v(i,i);return i}}function he(e=""){if(!p){var r=L(e+"");return v(r,r),r}var t=f;return t.nodeType!==3&&(t.before(t=L()),O(t)),v(t,t),t}function pe(){if(p)return v(f,null),f;var e=document.createDocumentFragment(),r=document.createComment(""),t=L();return e.append(r,t),v(r,t),e}function me(e,r){if(p){w.nodes_end=f,C();return}e!==null&&e.before(r)}function ye(e,r){var t=r==null?"":typeof r=="object"?r+"":r;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t+"")}function ce(e,r){return V(e,r)}function ge(e,r){M(),r.intro=r.intro??!1;const t=r.target,o=p,n=f;try{for(var a=A(t);a&&(a.nodeType!==8||a.data!==$);)a=G(a);if(!a)throw R;T(!0),O(a),C();const i=V(e,{...r,anchor:a});if(f===null||f.nodeType!==8||f.data!==Q)throw X(),R;return T(!1),i}catch(i){if(i===R)return r.recover===!1&&z(),M(),J(t),T(!1),ce(e,r);throw i}finally{T(o),O(n)}}const y=new Map;function V(e,{target:r,anchor:t,props:o={},events:n,context:a,intro:i=!0}){M();var _=new Set,d=c=>{for(var s=0;s<c.length;s++){var u=c[s];if(!_.has(u)){_.add(u);var l=ie(u);r.addEventListener(u,g,{passive:l});var h=y.get(u);h===void 0?(document.addEventListener(u,g,{passive:l}),y.set(u,1)):y.set(u,h+1)}}};d(K(oe)),P.add(d);var m=void 0,S=Z(()=>{var c=t??r.appendChild(L());return ee(()=>{if(a){re({});var s=te;s.c=a}n&&(o.$$events=n),p&&v(c,null),m=e(c,o)||{},p&&(w.nodes_end=f),a&&ae()}),()=>{var l;for(var s of _){r.removeEventListener(s,g);var u=y.get(s);--u===0?(document.removeEventListener(s,g),y.delete(s)):y.set(s,u)}P.delete(d),c!==t&&((l=c.parentNode)==null||l.removeChild(c))}});return D.set(m,S),m}let D=new WeakMap;function we(e,r){const t=D.get(e);return t?(D.delete(e),t(r)):Promise.resolve()}const de="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(de);export{me as a,he as b,pe as c,_e as e,ge as h,ce as m,ye as s,ve as t,we as u};
