function e(e,a,t,n){Object.defineProperty(e,a,{get:t,set:n,enumerable:!0,configurable:!0})}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=a.parcelRequiref627;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,a){n[e]=a},a.parcelRequiref627=r),r.register("cADgX",(function(a,t){var n;n=a.exports,Object.defineProperty(n,"__esModule",{value:!0,configurable:!0}),e(a.exports,"default",(function(){return s}));var i=r("hAmOs"),o=r("ktoCO"),l=r("9kW8V");function c(e){return 0===e?"":e<4?"I".repeat(e):4===e?"IV":e<9?"V"+c(e-5):9===e?"IX":"X"+c(e-10)}function d(){window.scrollTo({top:0})}var s={components:{Overlay:o.default},setup:()=>({cards:l.CARDS,magnified_card:i.ref(null),magnified_card_active:i.ref(!1),roman_numerals:c,scroll_to_top:d})}})),r.register("jEp0C",(function(a,t){e(a.exports,"render",(function(){return _}));var n=r("hAmOs");const i={class:"deck-page"},o=n.createElementVNode("div",{class:"page-actions"},[n.createElementVNode("a",{href:"/experience/"},"New Reading")],-1),l={class:"card-list"},c={class:"card-name"},d=["onClick"],s=["src","alt"],u={class:"card-summary"},m=["src","alt"],f={class:"page-actions"};function _(e,a){const t=n.resolveComponent("Overlay");return n.openBlock(),n.createElementBlock("div",i,[o,n.createElementVNode("div",l,[(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(e.cards,((a,t)=>(n.openBlock(),n.createElementBlock("section",{class:"card-section",key:t},[n.createElementVNode("h1",c,n.toDisplayString(e.roman_numerals(a.value)||"0")+". "+n.toDisplayString(a.name),1),n.createElementVNode("button",{class:"card-thumbnail","aria-label":"View magnified card image",onClick:t=>{e.magnified_card=a,e.magnified_card_active=!0}},[n.createElementVNode("img",{width:"322",height:"457",loading:"lazy",src:a.image_thumbnail_url,alt:a.image_description},null,8,s)],8,d),n.createElementVNode("p",u,n.toDisplayString(a.summary),1)])))),128)),null!==e.magnified_card?(n.openBlock(),n.createBlock(t,{key:0,active:e.magnified_card_active,"onUpdate:active":a[0]||(a[0]=a=>e.magnified_card_active=a),"aria-label":"Hide magnified card image"},{default:n.withCtx((()=>[n.createElementVNode("img",{class:"magnified-card",width:"322",height:"457",src:e.magnified_card.image_url,alt:e.magnified_card.image_description},null,8,m)])),_:1},8,["active"])):n.createCommentVNode("",!0)]),n.createElementVNode("div",f,[n.createElementVNode("button",{onClick:a[1]||(a[1]=(...a)=>e.scroll_to_top&&e.scroll_to_top(...a))},"Back to Top")])])}})),r.register("iinWR",(function(a,t){e(a.exports,"default",(function(){return n}));var n=e=>{}}));var i=r("hAmOs");let o;o=r("cADgX"),o.__esModule&&(o=o.default),o.render=r("jEp0C").render,o.__cssModules={},r("iinWR").default(o),o.__scopeId="data-v-56ea8b",o.__file="Deck.vue";var l=o;globalThis.__VUE_OPTIONS_API__=!1,globalThis.__VUE_PROD_DEVTOOLS__=!1,i.createApp(l).mount("#main-content");