(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{108:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){"use strict";n.r(t);var a,r=n(2),c=n(0),i=n.n(c),s=n(9),o=n.n(s),l=n(33),d=n.n(l),j=n(48),h=n(19),u=n(20),b=n(23),x=n(22),g=n(139),f=n(140),m=n(145),p=n(147),O=n(146),v=n(112),y=n(135),w=n(66),_=n(138),k=n(141),L=n(142),N=n(144),C=n(136),I=n(133),D=n(45),B=n.n(D),R=n(60),S=n.n(R),T=n.p+"static/media/agile123-logo.5928f00f.svg",E=n(24),z=n.n(E),A=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,t=[],n=0;n<e;n++)t.push(n);return t},H=function(e,t){try{window._hmt.push(["_trackEvent",e,"click",t])}catch(n){console.log(n)}},P=function(e){Object(b.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(h.a)(this,n);for(var c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={sticky:!1,activeKey:"Home",top:0},e.initActiveKey=function(){var t=e.props.tagList,n=window.location.hash,a=n?n.split("#")[1]:encodeURI((t[0]||{}).tag_en);e.setState({activeKey:a})},e.onScroll=function(){var t=0,n=document.documentElement.scrollTop;a>window.innerHeight-234&&(t=n>document.body.clientHeight/2?-(n/(document.body.clientHeight/2)-1)*(a-window.innerHeight+234+166):0),e.setState({top:parseInt(t,10),sticky:n>157,activeKey:e.getCurrentAnchor()})},e.getCurrentAnchor=function(){var t=e.props.tagList,n=[];if(t.forEach((function(t){var a=encodeURI(t.tag_en),r=document.getElementById(a);if(r){var c=e.getOffsetTop(r);n.push({link:a,top:c})}})),n.length)for(var a=1;a<n.length;a++)if(n[a].top>0)return n[a-1].link;return""},e.getOffsetTop=function(e){var t=e.getBoundingClientRect();if(t.width||t.height)return t.top-e.ownerDocument.documentElement.clientTop},e.renderWebNavList=function(){var t=e.props,n=t.tagList,a=t.language,c=e.state,i=c.sticky,s=c.top,o=c.activeKey;if(!(n||[]).length){var l=+window.localStorage.getItem("tagListLength"),d=A(l||30);return Object(r.jsx)(m.a,{px:1,display:"flex",flexDirection:"column",style:{top:s},children:d.map((function(e,t){return Object(r.jsx)(m.a,{py:1,px:2,children:Object(r.jsx)(I.a,{variant:"text",width:80})},"".concat(e,"-").concat(t))}))})}return Object(r.jsx)(m.a,{px:1,display:"flex",flexDirection:"column",id:"NavBar",className:B()(z.a.NavBar,i?z.a.NavBa_fixed:{}),style:{top:s},children:(n||[]).map((function(e,t){var n=e.tag,c=e.tag_en,i="zh"===a?n:c;return Object(r.jsx)(y.a,{href:"#".concat(c),className:B()(z.a.link,o===encodeURI(c)?z.a.link_active:{}),color:"textPrimary",underline:"none",children:i},c)}))})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=(this.props.tagList||[]).length;e&&(window.localStorage.setItem("tagListLength",e),a=36*e,this.initActiveKey(),window.addEventListener("scroll",S()(this.onScroll,16.7)))}},{key:"render",value:function(){var e=this.props,t=e.tagList,n=e.language,a=e.drawerVisible,c=e.onClose,i=this.state.activeKey;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(p.a,{lgUp:!0,children:Object(r.jsx)(N.a,{open:a,onClose:c,children:Object(r.jsxs)(m.a,{display:"flex",flexDirection:"column",style:{height:"inherit",overflow:"hideen"},children:[Object(r.jsx)(m.a,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",p:2,children:Object(r.jsx)("img",{src:T,alt:"agile123",height:17})}),Object(r.jsx)(C.a,{}),Object(r.jsx)(m.a,{flex:"1",style:{overflow:"auto"},onClick:c,children:(t||[]).map((function(e,t){var a=e.tag,c=e.tag_en,s="zh"===n?a:c;return Object(r.jsx)(y.a,{href:"#".concat(c),className:B()(z.a.drawer_link,i===encodeURI(c)?z.a.drawer_link_active:{}),color:"textPrimary",underline:"none",children:Object(r.jsx)(m.a,{px:4,py:1,children:s})},c)}))})]})})}),Object(r.jsx)(p.a,{mdDown:!0,children:this.renderWebNavList()})]})}}]),n}(c.PureComponent),U=n(137),V=function(e){Object(b.a)(n,e);var t=Object(x.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.navList,n=e.tagList;if(!(n||[]).length||!(t||[]).length){var a=A();return Object(r.jsx)(m.a,{mb:2,id:encodeURI((n[0]||{}).tag_en),children:Object(r.jsx)(U.a,{container:!0,spacing:2,children:a.map((function(e,t){return Object(r.jsx)(U.a,{item:!0,xs:6,sm:4,md:3,children:Object(r.jsx)(m.a,{bgcolor:"white",borderRadius:8,className:"skeletonHotCard"})},"".concat(e,"-").concat(t))}))})})}return Object(r.jsx)(m.a,{mb:2,id:encodeURI((n[0]||{}).tag_en),children:Object(r.jsx)(U.a,{container:!0,spacing:2,children:(t||[]).filter((function(e){return(e.tag_en||"").indexOf("Hot")>-1})).map((function(e,t){return Object(r.jsx)(U.a,{item:!0,xs:6,sm:4,md:3,children:Object(r.jsx)(y.a,{color:"textPrimary",href:"".concat(e.website,"?utm_resource=agile123.net"),target:"_blank",underline:"none",onClick:function(){H(e.tag_en,e.name_en||e.name)},children:Object(r.jsx)(m.a,{bgcolor:"white",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",className:"hotCard",px:2,borderRadius:8,children:Object(r.jsx)("img",{src:(e.image||"").indexOf("http")>-1?e.image:"".concat("").concat(e.image),alt:""})})})},"Hot-".concat(t))}))})})}}]),n}(c.PureComponent),K=n(148),W=n(64),J=n.n(W),M=function(e){Object(b.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).renderNavCard=function(t){var n=e.props,a=n.navList,c=n.language;return(a||[]).length?(a||[]).filter((function(e){return e.tag_en.indexOf(t)>-1})).map((function(t,n){return Object(r.jsx)(U.a,{item:!0,xs:6,sm:4,md:3,children:Object(r.jsx)(y.a,{color:"textPrimary",href:"".concat(t.website,"?utm_resource=agile123.net"),target:"_blank",underline:"none",onClick:function(){H(t.tag_en,t.name_en||t.name)},children:Object(r.jsxs)(m.a,{className:"cardItem",display:"flex",flexDirection:"row",p:{xs:0,sm:1},borderRadius:8,children:[Object(r.jsx)(m.a,{mr:{xs:1,sm:1},children:e.renderItemLogo(t,c)}),Object(r.jsxs)(m.a,{children:[Object(r.jsx)(v.a,{variant:"body1",className:"cardItem_title",style:{fontWeight:500},children:"zh"===c?t.name:t.name_en||t.name}),Object(r.jsx)(v.a,{variant:"caption",style:{color:"#999",wordBreak:"break-all"},children:e.renderDesc(t,c)})]})]})})},n)})):A().map((function(e,t){return Object(r.jsx)(U.a,{item:!0,xs:6,sm:4,md:3,children:Object(r.jsxs)(m.a,{display:"flex",flexDirection:"row",p:{xs:0,sm:1},children:[Object(r.jsx)(m.a,{mr:1,children:Object(r.jsx)(I.a,{variant:"circle",width:30,height:30})}),Object(r.jsxs)(m.a,{flex:"1",children:[Object(r.jsx)(I.a,{variant:"text"}),Object(r.jsx)(I.a,{variant:"text"})]})]})},"".concat(e,"-").concat(t))}))},e.renderItemLogo=function(e,t){var n=e.logo,a=e.name,c=e.name_en,i=e.logoHeightAuto,s=e.logoWidthAuto,o=30,l=n;return n&&n.indexOf("http")<0&&(l="".concat("").concat(n)),Object(r.jsx)(J.a,{height:o,style:{width:o},once:!0,children:Object(r.jsx)(K.a,{alt:"zh"===t?a:c||a,src:l,style:{height:i?"auto":o,width:s?"auto":o},imgProps:{height:i?"auto":o,width:s?"auto":o},children:("zh"===t?a:c||a).slice(0,1)})})},e.renderDesc=function(e,t){var n=e.desc,a=e.desc_en,r=e.website;if("zh"===t&&n)return n;if("en"===t&&a)return a;var c=(r||"").replace(/htt(p|ps):\/\//,"");return"/"===c.slice("-1")&&(c=c.slice(0,c.length-1)),c},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.tagList,a=t.language;return(n||[]).length?(n||[]).slice(1).map((function(t){return Object(r.jsxs)(m.a,{bgcolor:"white",borderRadius:16,mb:2,id:encodeURI(t.tag_en),px:{xs:2,sm:2,md:3},children:[Object(r.jsx)(m.a,{py:2,border:1,borderTop:0,borderRight:0,borderLeft:0,borderColor:"grey.100",children:Object(r.jsx)(v.a,{children:"zh"===a?t.tag:t.tag_en})}),Object(r.jsx)(m.a,{py:{xs:2,sm:2,md:3},children:Object(r.jsx)(U.a,{container:!0,spacing:2,children:e.renderNavCard(t.tag_en)})})]},t.tag_en)})):A().map((function(t){return Object(r.jsxs)(m.a,{bgcolor:"white",borderRadius:16,mb:2,px:{xs:2,sm:2,md:3},children:[Object(r.jsx)(m.a,{py:2,border:1,borderTop:0,borderRight:0,borderLeft:0,borderColor:"grey.100",children:Object(r.jsx)(I.a,{variant:"text",width:100})}),Object(r.jsx)(m.a,{py:{xs:2,sm:2,md:3},children:Object(r.jsx)(U.a,{container:!0,spacing:2,children:e.renderNavCard(t)})})]},"".concat(t,"-index"))}))}}]),n}(c.PureComponent),F=n(65),q=n.n(F).a.create();function G(e,t){return q({method:"get",url:e,params:t})}q.interceptors.response.use((function(e){return e.data}));n(108);var Q=Object(w.a)({palette:{primary:{main:"#ff7828",contrastText:"#fff"}}}),X={zh:{subTitle:"\u654f\u6377\u5b66\u4e60\u8d44\u6e90\u5927\u5168",more:"\u4e00\u8d77\u53d1\u73b0\u66f4\u591a\u8d44\u6e90",submit:"\u63d0\u3000\u4ea4"},en:{subTitle:"A Portal for awesome Agile learning resources",more:"Discover more resources",submit:"Submit"}},Y=function(e){Object(b.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={footerVisible:!1,tagList:[],navList:[],language:"zh",drawerVisible:!1},e.fetchTagList=function(){var t=Object(j.a)(d.a.mark((function t(n){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G("/tagList.json");case 2:(a=t.sent)&&(a||[]).length&&e.setState({tagList:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.fetchNavList=Object(j.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G("/resource.json");case 2:(n=t.sent)&&(n||[]).length&&e.setState({navList:n,footerVisible:!0});case 4:case"end":return t.stop()}}),t)}))),e.translate=function(t){var n=e.state.language;return X[n][t]},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.fetchTagList(),this.fetchNavList()}},{key:"render",value:function(){var e=this,t=this.state,n=t.navList,a=t.tagList,c=t.footerVisible,i=t.language,s=t.drawerVisible,o=this.translate;return Object(r.jsxs)(_.a,{theme:Q,children:[Object(r.jsx)(g.a,{}),Object(r.jsxs)(f.a,{children:[Object(r.jsxs)(m.a,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",mt:{xs:1,sm:2},children:[Object(r.jsx)(p.a,{lgUp:!0,children:Object(r.jsx)(m.a,{style:{cursor:"pointer"},onClick:function(){e.setState({drawerVisible:!0})},children:Object(r.jsx)(k.a,{})})}),Object(r.jsx)(m.a,{flex:"1"}),Object(r.jsx)(O.a,{disableElevation:!0,variant:"outlined",onClick:function(){e.setState({language:"zh"===i?"en":"zh"})},size:"small",startIcon:Object(r.jsx)(L.a,{}),className:"languageBtn",style:{textTransform:"none"},children:Object(r.jsx)(m.a,{fontWeight:"400",className:"languageBtn_text",children:"zh"===i?"\u4e2d\u6587":"English"})})]}),Object(r.jsxs)(m.a,{display:"flex",flexDirection:"column",alignItems:"center",mb:{xs:2,sm:3,md:4},children:[Object(r.jsx)(m.a,{mb:{xs:.5,sm:1},children:Object(r.jsx)("a",{href:"https://agile123.net/",children:Object(r.jsx)("img",{src:T,style:{height:"100px"},alt:""})})}),Object(r.jsx)(m.a,{children:Object(r.jsxs)(v.a,{color:"textSecondary",children:["-- ",o("subTitle")," --"]})})]}),Object(r.jsxs)(m.a,{display:"flex",flexDirection:"row",children:[Object(r.jsx)(P,{tagList:a,language:i,drawerVisible:s,onClose:function(){e.setState({drawerVisible:!1})}},"NavBar-".concat((a||[]).length)),Object(r.jsx)(m.a,{flex:"1"}),Object(r.jsxs)(m.a,{className:"tagContent",children:[Object(r.jsx)(V,{navList:n,tagList:a}),Object(r.jsx)(M,{navList:n,tagList:a,language:i})]},(n||[]).length),Object(r.jsx)(p.a,{lgUp:!0,children:Object(r.jsx)(m.a,{flex:"1"})})]})]}),c?Object(r.jsxs)(m.a,{children:[Object(r.jsxs)(m.a,{display:"flex",flexDirection:"column",alignItems:"center",className:"footer",py:{xs:3,sm:3,md:4},children:[Object(r.jsx)(m.a,{mb:{xs:1.25,sm:2,md:3},children:Object(r.jsx)(v.a,{variant:"h5",className:"footer_title",children:o("more")})}),Object(r.jsx)(O.a,{variant:"contained",className:"submitBtn",color:"primary",style:{textTransform:"none"},onClick:function(){window.open("https://github.com/bobjiang/agile123.net/issues")},children:o("submit")})]}),Object(r.jsxs)(m.a,{display:"flex",flexDirection:"row",justifyContent:"center",py:{xs:1,sm:2},children:[Object(r.jsx)(m.a,{children:"Sponsored By\xa0"}),Object(r.jsx)(m.a,{color:"#ff7828",children:Object(r.jsx)(y.a,{href:"https://bobjiang.com/",underline:"none",children:"Bob Jiang\xa0"})}),Object(r.jsx)(m.a,{children:"|\xa0Inspired By\xa0"}),Object(r.jsx)(m.a,{color:"#ff7828",children:Object(r.jsx)(y.a,{href:"https://eth123.org/",underline:"none",children:"ETH123.org"})})]})]}):null]})}}]),n}(i.a.Component);n(109);o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(Y,{})}),document.getElementById("root"))},24:function(e,t,n){e.exports={NavBa_fixed:"styles_NavBa_fixed__EbRnh",link:"styles_link__3NeEE",NavBar:"styles_NavBar__34su-",link_active:"styles_link_active__13com",drawer_link:"styles_drawer_link___-O06",drawer_link_active:"styles_drawer_link_active__1h1PE"}}},[[110,1,2]]]);
//# sourceMappingURL=main.6d9caeaa.chunk.js.map