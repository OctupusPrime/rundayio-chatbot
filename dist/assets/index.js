const oe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};oe();function _(){}function Y(t){return t()}function R(){return Object.create(null)}function k(t){t.forEach(Y)}function le(t){return typeof t=="function"}function H(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ie(t){return Object.keys(t).length===0}function p(t,e){t.appendChild(e)}function w(t,e,n){t.insertBefore(e,n||null)}function x(t){t.parentNode.removeChild(t)}function ue(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function ee(t){return document.createTextNode(t)}function b(){return ee(" ")}function T(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function ce(t){return function(e){return e.preventDefault(),t.call(this,e)}}function d(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function fe(t){return Array.from(t.childNodes)}function ae(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Z(t,e){t.value=e==null?"":e}function te(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function G(t,e,n){t.classList[n?"add":"remove"](e)}function de(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,s,e),r}let F;function M(t){F=t}function pe(){if(!F)throw new Error("Function called outside component initialization");return F}function he(){const t=pe();return(e,n,{cancelable:s=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=de(e,n,{cancelable:s});return r.slice().forEach(l=>{l.call(t,o)}),!o.defaultPrevented}return!0}}const E=[],D=[],A=[],J=[],ne=Promise.resolve();let U=!1;function re(){U||(U=!0,ne.then(se))}function me(){return re(),ne}function V(t){A.push(t)}const z=new Set;let B=0;function se(){const t=F;do{for(;B<E.length;){const e=E[B];B++,M(e),ge(e.$$)}for(M(null),E.length=0,B=0;D.length;)D.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];z.has(n)||(z.add(n),n())}A.length=0}while(E.length);for(;J.length;)J.pop()();U=!1,z.clear(),M(t)}function ge(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(V)}}const j=new Set;let y;function _e(){y={r:0,c:[],p:y}}function xe(){y.r||k(y.c),y=y.p}function $(t,e){t&&t.i&&(j.delete(t),t.i(e))}function L(t,e,n,s){if(t&&t.o){if(j.has(t))return;j.add(t),y.c.push(()=>{j.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}function q(t){t&&t.c()}function S(t,e,n,s){const{fragment:r,on_mount:o,on_destroy:l,after_update:i}=t.$$;r&&r.m(e,n),s||V(()=>{const u=o.map(Y).filter(le);l?l.push(...u):k(u),t.$$.on_mount=[]}),i.forEach(V)}function O(t,e){const n=t.$$;n.fragment!==null&&(k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function be(t,e){t.$$.dirty[0]===-1&&(E.push(t),re(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(t,e,n,s,r,o,l,i=[-1]){const u=F;M(t);const c=t.$$={fragment:null,ctx:null,props:o,update:_,not_equal:r,bound:R(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:R(),dirty:i,skip_bound:!1,root:e.target||u.$$.root};l&&l(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,m,...v)=>{const C=v.length?v[0]:m;return c.ctx&&r(c.ctx[a],c.ctx[a]=C)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](C),f&&be(t,a)),m}):[],c.update(),f=!0,k(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const a=fe(e.target);c.fragment&&c.fragment.l(a),a.forEach(x)}else c.fragment&&c.fragment.c();e.intro&&$(t.$$.fragment),S(t,e.target,e.anchor,e.customElement),se()}M(u)}class N{$destroy(){O(this,1),this.$destroy=_}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!ie(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}class we extends N{constructor(e){super(),I(this,e,null,null,H,{})}}function Q(t,e,n){const s=t.slice();return s[4]=e[n].message,s[5]=e[n].isUser,s}function W(t){let e;return{c(){e=h("div"),d(e,"class","h-[30px] w-[30px] overflow-hidden rounded-full bg-[#D2E0F1] shrink-0")},m(n,s){w(n,e,s)},d(n){n&&x(e)}}}function X(t){let e,n,s,r=t[4]+"",o,l,i=!t[5]&&W();return{c(){e=h("div"),i&&i.c(),n=b(),s=h("p"),o=ee(r),l=b(),d(s,"class","px-[12px] py-[10px] bg-[#E8E8E8] rounded-lg rounded-tl-none text-sm svelte-1ata6tv"),G(s,"user-message",t[5]),d(e,"class","flex justify-between gap-1.5 mb-[10px] last:mb-0")},m(u,c){w(u,e,c),i&&i.m(e,null),p(e,n),p(e,s),p(s,o),p(e,l)},p(u,c){u[5]?i&&(i.d(1),i=null):i||(i=W(),i.c(),i.m(e,n)),c&1&&r!==(r=u[4]+"")&&ae(o,r),c&1&&G(s,"user-message",u[5])},d(u){u&&x(e),i&&i.d()}}}function ye(t){let e,n=t[0],s=[];for(let r=0;r<n.length;r+=1)s[r]=X(Q(t,n,r));return{c(){e=h("div");for(let r=0;r<s.length;r+=1)s[r].c();d(e,"class","px-[10px] py-[25px] overflow-y-auto h-full scroll-smooth")},m(r,o){w(r,e,o);for(let l=0;l<s.length;l+=1)s[l].m(e,null);t[2](e)},p(r,[o]){if(o&1){n=r[0];let l;for(l=0;l<n.length;l+=1){const i=Q(r,n,l);s[l]?s[l].p(i,o):(s[l]=X(i),s[l].c(),s[l].m(e,null))}for(;l<s.length;l+=1)s[l].d(1);s.length=n.length}},i:_,o:_,d(r){r&&x(e),ue(s,r),t[2](null)}}}function ve(t,e,n){let{messages:s=[]}=e,r;const o=async()=>{r&&(await me(),n(1,r.scrollTop=r.scrollHeight,r))};function l(i){D[i?"unshift":"push"](()=>{r=i,n(1,r)})}return t.$$set=i=>{"messages"in i&&n(0,s=i.messages)},t.$$.update=()=>{t.$$.dirty&1&&s&&o()},[s,r,l]}class $e extends N{constructor(e){super(),I(this,e,ve,ye,H,{messages:0})}}function ke(t){let e,n,s,r,o,l;return{c(){e=h("form"),n=h("input"),s=b(),r=h("button"),r.innerHTML='<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.821233 0.5C5.14981 2.66414 9.44822 4.81277 13.8208 6.99975C9.458 9.18101 5.15145 11.3345 0.793501 13.5134V13.1585C0.793501 11.6421 0.798395 10.1256 0.788607 8.60919C0.786976 8.38078 0.845701 8.27718 1.07571 8.20458C2.15969 7.85953 3.23552 7.49 4.31379 7.12863C4.40677 7.09763 4.49812 7.06174 4.67511 6.99648C4.2102 6.83905 3.82359 6.70608 3.43616 6.57638C2.63684 6.30964 1.8367 6.04289 1.03656 5.7786C0.897087 5.73292 0.787792 5.69702 0.789423 5.50125C0.798395 3.88284 0.795132 2.26524 0.795947 0.646831C0.795947 0.616649 0.805736 0.587283 0.821233 0.5Z" fill="currentColor"></path></svg>',d(n,"type","text"),d(n,"class","rounded-full border-2 border-[#5BA2FF] flex-1 px-[16px] py-[8px] outline-0"),d(r,"type","submit"),d(r,"class","w-[40px] h-[40px] rounded-full pl-[2px] grid place-items-center text-white"),te(r,"background","#5BA2FF"),d(e,"class","border-t-2 border-[#5BA2FF] px-[10px] py-[14px] flex justify-center gap-2 items-center")},m(i,u){w(i,e,u),p(e,n),Z(n,t[0]),p(e,s),p(e,r),o||(l=[T(n,"input",t[2]),T(e,"submit",ce(t[1]))],o=!0)},p(i,[u]){u&1&&n.value!==i[0]&&Z(n,i[0])},i:_,o:_,d(i){i&&x(e),o=!1,k(l)}}}function Ce(t,e,n){const s=he();let r;const o=()=>{r&&(s("submit",r),n(0,r=""))};function l(){r=this.value,n(0,r)}return[r,o,l]}class Ee extends N{constructor(e){super(),I(this,e,Ce,ke,H,{})}}function Me(t){let e,n,s,r,o,l,i,u,c,f,a,m,v,C;return c=new $e({props:{messages:t[0]}}),a=new Ee({}),a.$on("submit",t[4]),{c(){e=h("section"),n=h("div"),s=h("h2"),s.textContent="Runday Chat",r=b(),o=h("button"),o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>',l=b(),i=h("button"),i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>',u=b(),q(c.$$.fragment),f=b(),q(a.$$.fragment),d(s,"class","text-white text-lg font-bold"),te(o,"margin-left","auto"),d(o,"class","h-[20px] w-[20px] text-white"),d(i,"class","h-[20px] w-[20px] text-white"),d(n,"class","px-[20px] py-[16px] bg-[#5BA2FF] flex justify-center items-center gap-4"),d(e,"class","h-[80vh] max-h-[600px] max-w-[400px] w-[95vw] rounded-tl-lg overflow-hidden flex flex-col bg-white drop-shadow-2xl")},m(g,P){w(g,e,P),p(e,n),p(n,s),p(n,r),p(n,o),p(n,l),p(n,i),p(e,u),S(c,e,null),p(e,f),S(a,e,null),m=!0,v||(C=T(i,"click",t[3]),v=!0)},p(g,P){const K={};P&1&&(K.messages=g[0]),c.$set(K)},i(g){m||($(c.$$.fragment,g),$(a.$$.fragment,g),m=!0)},o(g){L(c.$$.fragment,g),L(a.$$.fragment,g),m=!1},d(g){g&&x(e),O(c),O(a),v=!1,C()}}}function Le(t){let e,n,s;return{c(){e=h("button"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>',d(e,"class","w-[60px] h-[60px] rounded-full bg-[#5BA2FF] absolute right-[20px] bottom-[20px] text-white grid place-items-center p-3")},m(r,o){w(r,e,o),n||(s=T(e,"click",t[2]),n=!0)},p:_,i:_,o:_,d(r){r&&x(e),n=!1,s()}}}function Fe(t){let e,n,s,r,o,l;e=new we({});const i=[Le,Me],u=[];function c(f,a){return f[1]?1:0}return r=c(t),o=u[r]=i[r](t),{c(){q(e.$$.fragment),n=b(),s=h("main"),o.c(),d(s,"class","fixed right-0 bottom-0")},m(f,a){S(e,f,a),w(f,n,a),w(f,s,a),u[r].m(s,null),l=!0},p(f,[a]){let m=r;r=c(f),r===m?u[r].p(f,a):(_e(),L(u[m],1,1,()=>{u[m]=null}),xe(),o=u[r],o?o.p(f,a):(o=u[r]=i[r](f),o.c()),$(o,1),o.m(s,null))},i(f){l||($(e.$$.fragment,f),$(o),l=!0)},o(f){L(e.$$.fragment,f),L(o),l=!1},d(f){O(e,f),f&&x(n),f&&x(s),u[r].d()}}}function Be(t,e,n){let s=[{message:"\u{1F44B} Hey there, nice to meet you! I\u2019m Sunny and I\u2019d like to welcome you  to [business name]. Let me know if you have any questions or need help with anything and I\u2019ll be happy to help!"},{message:"Lorem ipsr",isUser:!0}],r=!1;return[s,r,()=>n(1,r=!0),()=>n(1,r=!1),u=>n(0,s=[...s,{message:u.detail,isUser:!0}])]}class Ae extends N{constructor(e){super(),I(this,e,Be,Fe,H,{})}}new Ae({target:document.getElementById("chatbot")});