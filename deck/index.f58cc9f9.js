!function(){function e(e,n,t,a){Object.defineProperty(e,n,{get:t,set:a,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=n.parcelRequiref627;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){a[e]=n},n.parcelRequiref627=r),r.register("fnSxj",(function(n,t){var a;a=n.exports,Object.defineProperty(a,"__esModule",{value:!0,configurable:!0}),e(n.exports,"default",(function(){return d}));var i=r("lnFzN"),o=r("dVFlj"),l=r("23VFF");function c(e){return 0===e?"":e<4?"I".repeat(e):4===e?"IV":e<9?"V"+c(e-5):9===e?"IX":"X"+c(e-10)}var d=i.defineComponent({components:{Overlay:o.default},data:function(){return{roman_numerals:c,cards:l.CARDS,magnified_card:null,magnified_card_active:!1}},methods:{scroll_to_top:function(){window.scrollTo({top:0})}}})})),r.register("5UigI",(function(n,t){e(n.exports,"render",(function(){return g}));var a=r("fNRGU"),i=r("lnFzN"),o={class:"deck-page"},l=i.createElementVNode("div",{class:"page-actions"},[i.createElementVNode("a",{href:"/experience/"},"New Reading")],-1),c={class:"card-list"},d={class:"card-name"},s=["onClick"],u=["src","alt"],f={class:"card-summary"},m=["src","alt"],_={class:"page-actions"};function g(e,n){var t,r=i.resolveComponent("Overlay");return i.openBlock(),i.createElementBlock("div",o,[l,i.createElementVNode("div",c,[(i.openBlock(!0),i.createElementBlock(i.Fragment,null,i.renderList(e.cards,(function(n,t){return i.openBlock(),i.createElementBlock("section",{class:"card-section",key:t},[i.createElementVNode("h1",d,i.toDisplayString(e.roman_numerals(n.value)||"0")+". "+i.toDisplayString(n.name),1),i.createElementVNode("button",{class:"card-thumbnail","aria-label":"View magnified card image",onClick:function(t){e.magnified_card=n,e.magnified_card_active=!0}},[i.createElementVNode("img",{width:"322",height:"457",loading:"lazy",src:n.image_thumbnail_url,alt:n.image_description},null,8,u)],8,s),i.createElementVNode("p",f,i.toDisplayString(n.summary),1)])})),128)),null!==e.magnified_card?(i.openBlock(),i.createBlock(r,{key:0,active:e.magnified_card_active,"onUpdate:active":n[0]||(n[0]=function(n){return e.magnified_card_active=n}),"aria-label":"Hide magnified card image"},{default:i.withCtx((function(){return[i.createElementVNode("img",{class:"magnified-card",width:"322",height:"457",src:e.magnified_card.image_url,alt:e.magnified_card.image_description},null,8,m)]})),_:1},8,["active"])):i.createCommentVNode("",!0)]),i.createElementVNode("div",_,[i.createElementVNode("button",{onClick:n[1]||(n[1]=function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.scroll_to_top&&(t=e).scroll_to_top.apply(t,a.toConsumableArray(r))})},"Back to Top")])])}})),r.register("8NeZd",(function(n,t){e(n.exports,"default",(function(){return a}));var a=function(e){}}));var i,o=r("lnFzN");(i=r("fnSxj")).__esModule&&(i=i.default),i.render=r("5UigI").render,i.__cssModules={},r("8NeZd").default(i),i.__scopeId="data-v-56ea8b",i.__file="Deck.vue";var l=i;globalThis.__VUE_OPTIONS_API__=!1,globalThis.__VUE_PROD_DEVTOOLS__=!1,o.createApp(l).mount("#main-content")}();