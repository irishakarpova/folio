(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[173],{127:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(10),i=a(98),r=Object(i.a)((function(e){var t,a;return{root:{"& > *":Object(n.a)({marginTop:e.spacing(2)},e.breakpoints.down("sm"),{marginTop:e.spacing(5)})},PaperForm:{position:"relative",display:"flex",justifyContent:"center"},rootPapper:{padding:15,background:"none","& > *":Object(n.a)({margin:e.spacing(.5)},e.breakpoints.down("sm"),{margin:e.spacing(.5),padding:0}),display:"flex",justifyContent:"center"},PaperChips:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}},rootSl:{zIndex:100,display:"flex",alignItems:"center",justifyContent:"center",marginTop:e.spacing(6),padding:0},bgPaper:{background:"#fefefe"},bgPaperWithP:{background:"#fefefe",paddingTop:40},rootSlider:Object(n.a)({display:"flex",justifyContent:"center",marginTop:e.spacing(2),minHeight:600},e.breakpoints.down("sm"),{marginTop:e.spacing(0)}),arrow:Object(n.a)({margin:e.spacing(4,0,0,14)},e.breakpoints.down("sm"),{margin:e.spacing(4,0,0,2)}),formControl:(t={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",padding:30},Object(n.a)(t,e.breakpoints.down("xs"),{padding:15,alignItems:"center"}),Object(n.a)(t,"width","100%"),Object(n.a)(t,"marginLeft","auto"),Object(n.a)(t,"marginRight","auto"),Object(n.a)(t,"marginTop",50),Object(n.a)(t,"borderRadius",5),Object(n.a)(t,"border","1px solid #d4d4d4"),t),formControlDark:(a={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",padding:30},Object(n.a)(a,e.breakpoints.down("xs"),{padding:15,alignItems:"center"}),Object(n.a)(a,"width","100%"),Object(n.a)(a,"marginLeft","auto"),Object(n.a)(a,"marginRight","auto"),Object(n.a)(a,"marginTop",50),Object(n.a)(a,"borderRadius",5),Object(n.a)(a,"border","1px solid #605a57"),a),formRoot:{display:"flex",flexDirection:"row",alignItems:"center","& .MuiTextField-root":Object(n.a)({margin:e.spacing(1),width:"25ch"},e.breakpoints.down("xs"),{width:"10ch"})},formGr:{marginLeft:e.spacing(1)},typoLink:{marginLeft:e.spacing(1),padding:e.spacing(0,1,0,1),borderRadius:3,border:"1px solid",borderColor:e.palette.primary.main},buttonLink:{position:"absolute",color:e.palette.secondary,left:20,top:25},title:{paddingTop:50},description:{paddingTop:40},pBottom:{paddingBottom:40},videoBg:{position:"fixed",zIndex:10},videoBgdesc:{position:"fixed",zIndex:11,right:0,padding:20,color:"#fafafa"},test:Object(n.a)({width:200},e.breakpoints.down("xs"),{width:"33%"}),iframeStyle:Object(n.a)({marginTop:"30px",height:250,width:"100%",border:"none",borderRadius:2},e.breakpoints.down("xs"),{padding:0}),codeT:{color:"#f50057",padding:"3px"}}}))},264:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r}));var n='import { Record } from "immutable";\n\nconst ArticleRecord = Record({\n    id: null,\n    title: null,\n    description: null,\n    location: null,\n    members: null\n});\n\nconst DataRecord = Record({\n  entities: arrToMap([], ArticleRecord),\n  loading: false,\n  error: false\n});\n\nexport default (articlesState = new DataRecord(), action) => {\n  switch (type) {\n    ...\n      default:\n          return articlesState;\n  }\n};\n',i='switch (type) {\n  case LOAD_ALL_ARTICLES:\n      return articlesState\n          .set("entities", arrToMap(response, ArticleRecord))\n          .set("loading", false);\n\n  case ADD_ARTICLE:\n      return articlesState.setIn(["entities", randomId], {\n          ...payload.article,\n          id: randomId\n      });\n  default:\n      return articlesState;\n}\n',r="schema {\n  query: Query\n}\n\ntype Query {\n  getMenu: [MenuItem]\n}\n\ntype MenuItem {\n    id: ID!\n    label: String!\n    parentId: ID!\n}\n"},734:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return I}));var n=a(0),i=a(31),r=a(381),s=a(114),c=a(121),o=a(247),d=a(380),l=a(155),p=a.n(l),b=a(156),m=a.n(b),j=a(127),u=a(354),g=a(264),h=a.p+"static/media/forTheVoice_1.7526817e.svg",f=a.p+"static/media/forTheVoice_2.aa8dce7e.svg",x=a.p+"static/media/forTheVoice_3.2f8b2e5e.svg",O=a(63),y=a(33),w=a(2);function I(){var e=Object(n.useContext)(y.a),t=Object(j.a)();return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(w.jsxs)("div",{className:t.root,children:[Object(w.jsx)(c.a,{className:t.arrow,children:Object(w.jsx)(c.a,{className:t.buttonLink,to:"/",component:i.b,children:Object(w.jsx)(p.a,{color:"secondary"})})}),Object(w.jsx)(s.a,{className:t.title,variant:"h3",align:"center",children:"Why I use Immutable JS?"}),Object(w.jsxs)(d.a,{container:!0,className:t.rootPapper,children:[Object(w.jsxs)(d.a,{item:!0,sm:12,md:12,lg:6,className:t.PaperChips,children:[Object(w.jsx)(o.a,{label:"React",color:"primary"}),Object(w.jsx)(o.a,{label:"Redux",color:"primary"}),Object(w.jsx)(o.a,{label:"Bootstrap",color:"primary"}),Object(w.jsx)(o.a,{label:"Immutable",color:"primary"}),Object(w.jsx)(o.a,{label:"Reselect",color:"primary"})]}),Object(w.jsxs)(d.a,{item:!0,xs:12,sm:10,md:8,lg:7,children:[Object(w.jsxs)(c.a,{mt:3,display:"flex",alignItems:"center",children:[Object(w.jsx)(m.a,{color:"secondary"}),Object(w.jsx)(s.a,{className:t.typoLink,children:Object(w.jsx)(r.a,{href:"https://github.com/irishakarpova/react-data-list",variant:"body2",children:"GitHub"})})]}),Object(w.jsxs)(s.a,{className:t.description,variant:"subtitle2",align:"left",children:["In this example, I support an interactive list of articles with the possibility of adding new and ",Object(w.jsx)("br",{})," the",Object(w.jsx)("code",{children:" Select Input control "}),"component for collecting user-provided information from a list of options. ",Object(w.jsx)("br",{}),"I run with"," ",Object(w.jsx)("code",{children:" REST API "}),"method and widely used set of libraries React/Redux."]}),Object(w.jsxs)(c.a,{pt:3,style:{opacity:.9},display:"flex",justifyContent:"space-around",alignItems:"center",children:[Object(w.jsx)("img",{className:t.test,src:h,alt:"Russian Avangard"}),Object(w.jsx)("img",{className:t.test,src:f,alt:"Russian Avangard"}),Object(w.jsx)("img",{className:t.test,src:x,alt:"Russian Avangard"})]}),Object(w.jsxs)(s.a,{className:t.description,variant:"body2",align:"left",children:["According to the concept of ecosystem React/Redux, once created data, cannot be changed. Among the reasons is The"," ",Object(w.jsx)("code",{children:"connect()"})," function that provides its connected component to a Redux",Object(w.jsx)("code",{children:" store "})," is pure, as well as"," ",Object(w.jsx)("code",{children:"Reducers"})," are just pure functions that take the previous state and an action and return to the next state. That is means the reconciliation process will not update the component if data is based on reference and mutated directly. ",Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),"To keep data structure immutable is not an easy challenge that may increase app complexity. That's the reason it might be useful to add an Immutable JS library. Immutable.js has a set of immutable data structures that handle data by always returning a new object. ",Object(w.jsx)("br",{})]}),Object(w.jsxs)(s.a,{className:t.description,variant:"body2",align:"left",children:["Here is the ",Object(w.jsx)("code",{children:"Reducer"})," function. I handle fetched data. I apply ",Object(w.jsx)("code",{children:"Record "}),"function that creates Record instances with a described schema."]}),Object(w.jsx)(s.a,{className:t.description,variant:"body2",align:"right",children:"Reducer.js"}),Object(w.jsx)(u.a,{text:g.a,language:"java",showLineNumbers:!1,theme:"light"===e.currentTheme.palette.type?u.c:u.b,wrapLines:!0}),Object(w.jsxs)(s.a,{className:t.description,variant:"body2",align:"left",mb:3,children:["Now, I have an immutable object with access to only the specified fields of it. Even though as a result I have nested data, I can keep easy to handling this data using",Object(w.jsx)("code",{children:" set"})," and ",Object(w.jsx)("code",{children:" setIn"})," methods."]}),Object(w.jsx)(s.a,{className:t.description,variant:"body2",align:"right",children:"Reducer.js"}),Object(w.jsx)(u.a,{text:g.b,language:"java",showLineNumbers:!1,theme:"light"===e.currentTheme.palette.type?u.c:u.b,wrapLines:!0}),Object(w.jsx)(s.a,{className:t.description,variant:"h5",align:"left",children:"Conclusion"}),Object(w.jsx)(s.a,{className:t.description,variant:"subtitle2",align:"left",children:"Thanks to immutable.js, an application becomes more flexible, easier to support and more resistant to errors."})]})]}),Object(w.jsx)(O.a,{})]})}}}]);
//# sourceMappingURL=173.fdd1844a.chunk.js.map