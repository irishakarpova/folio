(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{541:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(22),s=a.n(r),c=a(11),o=a(368),l=a(8),d=Object(o.a)({palette:{type:"dark",primary:{light:"#F87BA1",main:"#f50057"},secondary:{main:"#f50057"},text:{primary:"#9e9e9e",secondary:"#93969a"},contrastThreshold:3,tonalOffset:.2},overrides:{MuiChip:{root:{borderRadius:30,padding:"16px 10px","@media (max-width:600px)":{padding:"15px 0",borderRadius:16}}},MuiPaper:{elevation3:{boxShadow:"0 0 15px rgba(0,0,0,.05)"},rounded:{borderRadius:12}},MuiIconButton:{root:{color:"#b0b0b0"}},MuiSelect:{icon:{color:"#b0b0b0"}}},breakpoints:{values:{xs:0,sm:630,md:800,lg:950,xl:1400}}}),b=Object(o.a)({palette:{type:"light",primary:{light:"#F87BA1",main:"#f50057"},text:{primary:"#2A3743",secondary:"#93969a"},contrastThreshold:3,tonalOffset:.2},overrides:{MuiChip:{root:{borderRadius:30,padding:"16px 10px","@media (max-width:600px)":{padding:"15px 0",borderRadius:16}}},MuiPaper:{elevation3:{boxShadow:"0 0 15px rgba(0,0,0,.05)"},rounded:{borderRadius:12}}},breakpoints:{values:{xs:0,sm:630,md:800,lg:950,xl:1400}}});b.typography.h6={fontFamily:"Big Shoulders Stencil Text",fontWeight:100,fontSize:30,color:"#a3a3a3",lineHeight:1},d.typography.h6={fontFamily:"Big Shoulders Stencil Text",fontWeight:100,fontSize:30,color:"#a3a3a3",lineHeight:1},b.typography.h5={fontFamily:"Ubuntu",fontWeight:500,fontSize:25,lineHeight:1.2},d.typography.h5={fontFamily:"Ubuntu",fontWeight:500,fontSize:25,lineHeight:1.2},b.typography.h3=Object(l.a)({fontFamily:"Ubuntu",color:"#636363",fontWeight:300,fontSize:50,lineHeight:1.2},b.breakpoints.down("sm"),{fontSize:30}),d.typography.h3=Object(l.a)({fontFamily:"Ubuntu",color:"#d9d9d9",fontWeight:300,fontSize:50,lineHeight:1.2},b.breakpoints.down("sm"),{fontSize:30});var j=a(2),h=Object(i.createContext)({currentTheme:b,checked:!1,handleChangeTheme:function(){}}),m=function(e){var t=e.children,a=Object(i.useState)("lightTheme"===localStorage.getItem("storeTheme")),n=Object(c.a)(a,2),r=n[0],s=n[1],l=Object(o.a)(r?b:d),m=Object(i.useState)("darkTheme"===localStorage.getItem("storeTheme")),p=Object(c.a)(m,2),x=p[0],u=p[1];return Object(i.useEffect)((function(){window.localStorage.setItem("storeTheme",r?"lightTheme":"darkTheme")}),[l,x,r]),Object(j.jsx)(h.Provider,{value:{checked:x,handleChangeTheme:function(){s(!r),u(!x)},currentTheme:l},children:t})},p=a(19),x=a(44),u=a(602),g=a(600),O=a(597),f=a(595),y=a(545),v=a(599),w=a(598),k=a(611),N=a(376),I=a(608),R=a(615),S=a(594),T=a(47),C=a.n(T),L=a(48),F=a.n(L),P=a(588),A=Object(P.a)((function(){return{footer:{height:40,width:"100%",marginBottom:0}}}));function B(){var e=A();return Object(j.jsx)("div",{className:e.footer})}var _=a(365),M=Object(P.a)((function(e){var t,a;return{root:{"& > *":Object(l.a)({marginTop:e.spacing(2)},e.breakpoints.down("sm"),{marginTop:e.spacing(5)})},PaperForm:{position:"relative",display:"flex",justifyContent:"center"},rootPapper:{padding:15,background:"none","& > *":Object(l.a)({margin:e.spacing(.5)},e.breakpoints.down("sm"),{margin:e.spacing(.5)}),display:"flex",justifyContent:"center"},PaperChips:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}},rootSl:{zIndex:100,display:"flex",alignItems:"center",justifyContent:"center",marginTop:e.spacing(6),padding:0},bgPaper:{background:"#fefefe"},bgPaperWithP:{background:"#fefefe",paddingTop:40},rootSlider:Object(l.a)({display:"flex",justifyContent:"center",marginTop:e.spacing(2),minHeight:600},e.breakpoints.down("sm"),{marginTop:e.spacing(0)}),arrow:Object(l.a)({margin:e.spacing(4,0,0,14)},e.breakpoints.down("sm"),{margin:e.spacing(4,0,0,2)}),formControl:(t={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",padding:30},Object(l.a)(t,e.breakpoints.down("xs"),{padding:15,alignItems:"center"}),Object(l.a)(t,"width","100%"),Object(l.a)(t,"marginLeft","auto"),Object(l.a)(t,"marginRight","auto"),Object(l.a)(t,"marginTop",50),Object(l.a)(t,"borderRadius",5),Object(l.a)(t,"border","1px solid #d4d4d4"),t),formControlDark:(a={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",padding:30},Object(l.a)(a,e.breakpoints.down("xs"),{padding:15,alignItems:"center"}),Object(l.a)(a,"width","100%"),Object(l.a)(a,"marginLeft","auto"),Object(l.a)(a,"marginRight","auto"),Object(l.a)(a,"marginTop",50),Object(l.a)(a,"borderRadius",5),Object(l.a)(a,"border","1px solid #605a57"),a),formRoot:{display:"flex",flexDirection:"row",alignItems:"center","& .MuiTextField-root":Object(l.a)({margin:e.spacing(1),width:"25ch"},e.breakpoints.down("xs"),{width:"10ch"})},formGr:{marginLeft:e.spacing(1)},typoLink:{marginLeft:e.spacing(1),padding:e.spacing(0,1,0,1),borderRadius:3,border:"1px solid",borderColor:e.palette.primary.main},buttonLink:{position:"absolute",color:e.palette.secondary,left:20,top:25},title:{paddingTop:50},description:{paddingTop:40},pBottom:{paddingBottom:40},videoBg:{position:"fixed",zIndex:10},videoBgdesc:{position:"fixed",zIndex:11,right:0,padding:20,color:"#fafafa"},test:Object(l.a)({width:200},e.breakpoints.down("xs"),{width:"33%"}),iframeStyle:Object(l.a)({padding:"10px 10px 10px 10px",height:250,width:"100%",border:"none",borderRadius:2},e.breakpoints.down("xs"),{padding:0}),codeT:{color:"#f50057",padding:"3px"}}})),H=[{id:"10",label:"Keel-billed toucan",path:"https://upload.wikimedia.org/wikipedia/commons/f/f6/Keel-billed_Toucan_%2816201157519%29.jpg"},{id:"20",label:"Rainbow_Lorikeet.",path:"https://upload.wikimedia.org/wikipedia/commons/a/a8/Rainbow_Lorikeet_%28Trichoglossus_moluccanus%29_at_Adelaide_Airport_1.jpg"},{id:"30",label:"Australian ringneck",path:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Mallee_ringneck_42_-_Patchewollock.jpg/1920px-Mallee_ringneck_42_-_Patchewollock.jpg"},{id:"40",label:"Rainbow Lorikeet",path:"https://upload.wikimedia.org/wikipedia/commons/4/4b/Atlantic_Puffin_Fratercula_arctica.jpg"},{id:"50",label:"Rainbow_Lorikeet.",path:"https://upload.wikimedia.org/wikipedia/commons/e/e0/BlueAndYellowMacaw_AraArarauna.jpg"},{id:"60",label:"Rainbow_Lorikeet.",path:"https://upload.wikimedia.org/wikipedia/commons/1/13/Trichoglossus_moluccanus_with_open_wings%2C_Brisbane.jpg"}];function D(){var e=M(),t=n.a.useContext(h),a=n.a.useRef(),i=n.a.useState(800),r=Object(c.a)(i,2),s=r[0],o=r[1],l=n.a.useState(1.5),d=Object(c.a)(l,2),b=d[0],m=d[1],x=n.a.useState(!0),u=Object(c.a)(x,2),T=u[0],L=u[1],P=n.a.useState(!0),A=Object(c.a)(P,2),D=A[0],z=A[1],G=n.a.useState(!0),E=Object(c.a)(G,2),U=E[0],W=E[1],q=function(e){if(e.preventDefault(),a.current.value.includes("%")&&o(a.current.value),a.current.value.includes("px")){var t=a.current.value.slice(0,-2);o(+t)}else o(+a.current.value)};return Object(j.jsxs)("div",{className:e.root,children:[Object(j.jsxs)(I.a,{className:e.title,children:[Object(j.jsx)(I.a,{className:e.buttonLink,to:"/",component:p.b,children:Object(j.jsx)(C.a,{color:"secondary"})}),Object(j.jsx)(N.a,{variant:"h3",align:"center",children:"A Carousel component with a sliding"})]}),Object(j.jsxs)(S.a,{container:!0,className:e.rootPapper,children:[Object(j.jsxs)(S.a,{item:!0,sm:12,md:12,lg:6,className:e.PaperChips,children:[Object(j.jsx)(R.a,{label:"React",color:"primary"}),Object(j.jsx)(R.a,{label:"UseSpring",color:"primary"}),Object(j.jsx)(R.a,{label:"UseGesture",color:"primary"}),Object(j.jsx)(R.a,{label:"Material UI",color:"primary"})]}),Object(j.jsxs)(S.a,{item:!0,xs:12,sm:10,md:8,lg:7,children:[Object(j.jsxs)("div",{className:"light"===t.currentTheme.palette.type?e.formControl:e.formControlDark,children:[Object(j.jsxs)("form",{onSubmit:q,className:e.formRoot,noValidate:!0,autoComplete:"off",children:[Object(j.jsx)(f.a,{id:"outlined-basic",select:!0,SelectProps:{native:!0},size:"small",name:"ratio",value:b,onChange:function(e){m(e.target.value)},label:"Ratio",variant:"outlined",children:[1.2,1.5,1.8].map((function(e,t){return Object(j.jsx)("option",{value:e,children:e},t)}))}),Object(j.jsx)(y.a,{children:Object(j.jsx)(f.a,{inputRef:a,id:"outlined-basic",size:"small",name:"size",label:"Width",defaultValue:"800",variant:"outlined"})}),Object(j.jsx)(O.a,{variant:"outlined",color:"secondary",onClick:q,children:"ok"})]}),Object(j.jsxs)(w.a,{className:e.formGr,row:!0,children:[Object(j.jsx)(v.a,{control:Object(j.jsx)(k.a,{checked:T,onChange:function(){return L(!T)},name:"container-shadow",inputProps:{"aria-label":"primary checkbox"}}),label:"Container Shadow"}),Object(j.jsx)(v.a,{control:Object(j.jsx)(k.a,{checked:D,onChange:function(){return z(!D)},name:"Image Shadow"}),label:"Image Shadow"}),Object(j.jsx)(v.a,{control:Object(j.jsx)(k.a,{checked:U,onChange:function(){return W(!U)},name:"show-edges"}),label:"Show Next/Prev images"})]})]}),Object(j.jsxs)(I.a,{mt:3,display:"flex",alignItems:"center",children:[Object(j.jsx)(F.a,{color:"secondary"}),Object(j.jsx)(N.a,{className:e.typoLink,children:Object(j.jsx)(g.a,{href:"https://github.com/irishakarpova/carousel-sliding-effect",variant:"body2",children:"GitHub"})})]})]})]}),Object(j.jsx)("div",{className:e.rootSlider,children:Object(j.jsx)(_.a,{serverData:H,containerMaxWidth:s,containerRatio:b,containerShadow:T,imageShadow:D,showNextPrev:U})}),Object(j.jsx)(B,{})]})}var z=a(132),G=a(601),E=a.p+"static/media/nestedBar.0813f232.svg",U=a.p+"static/media/dncForm.07420f99.svg",W=a.p+"static/media/nestedRows.8942fde1.svg",q=a.p+"static/media/videobg.089a2261.svg",Q=a.p+"static/media/contactForm.150e170f.svg",V=a.p+"static/media/userManual.43dc7bf9.svg",J=[{id:"15",bgcolor:"#f85d7a",color:"#FFFFFF",href:"/datatable-rest-api",image:a.p+"static/media/shareData.edf8b151.svg",text:"Share data\nbetween\ncomponents\nwith Redux"},{id:"10",bgcolor:"#5597E5",color:"#F8F8F4",href:"/configForm",image:U,text:"Building \ndynamic form\nbased on\nconfiguration\nscheme"},{id:"16",bgcolor:"#B884C7",color:"#FCFCE7",href:"/wiki",image:V,text:"User Manual\nTemplate\nbased on\nGraphQL"},{id:"14",bgcolor:"#3bb5a7",color:"#F8F8F4",href:"/forms-teps",image:Q,text:"The way\nto deal with\nContact form\nusing REST API"},{id:"12",bgcolor:"#FFB43B",color:"#fefefe",href:"/slideshow",image:a.p+"static/media/carusel.33cc96a4.svg",text:"A Carousel\ncomponent\nwith\nReact Spring"},{id:"13",bgcolor:"#bf9dc8",color:"#F5EFE5",href:"/datatable",image:W,text:"Recursive\nmethod\nfor building\nnested\ndata table"},{id:"17",bgcolor:"#F38181",color:"#FCFCE7",href:"/videoapp",image:q,text:"Video\nbackground\ncomponent\nin React"},{id:"11",bgcolor:"#F87BA1",color:"#fefefe",href:"/configMenu",image:E,text:"Solving\nnested tab bar\nbased on\nconfiguration"},{id:"18",bgcolor:"#C6C137",color:"#FCFCE7",href:"/articleList",image:a.p+"static/media/immutable.dbf31361.svg",text:"Why I use\nImmutable JS?"},{id:"19",bgcolor:"#67abf9",color:"#F0F4FA",href:"/calendar",image:a.p+"static/media/dateRange.2bf508ba.svg",text:"Adding\nDate Range\nCalendar\nwith Redux"}],K=a.p+"static/media/image.fec30de6.jpg",Y=Object(P.a)((function(e){return{root:Object(l.a)({display:"flex",flexDirection:"row"},e.breakpoints.down("sm"),{flexDirection:"column"}),image:Object(l.a)({opacity:.9,width:335,backgroundRepeat:"no-repeat",backgroundPosition:"top right",backgroundSize:"contain",height:256,backgroundImage:"url(".concat(K,")"),margin:"0 30px 30px 0"},e.breakpoints.down("sm"),{backgroundSize:"cover",backgroundPosition:"center center"}),description:Object(l.a)({width:600,"@media (min-width:730px)":{width:300},"@media (min-width:1228px)":{width:600}},e.breakpoints.down("sm"),{width:"calc(100% - 10px)",padding:15})}}));function X(){var e=Y();return Object(j.jsxs)("div",{className:e.root,children:[Object(j.jsx)("div",{className:e.image}),Object(j.jsxs)("div",{className:e.description,children:[Object(j.jsx)("p",{children:"I graduated from Saint Petersburg State University in 2008 with a B.A. in Information Technology. The program splits strong skills in Information technology and Design thinking."}),Object(j.jsx)("p",{children:"Right After my graduation, I was lucky to join an international team working on the book Encyclopedia of Russian Avangard. I was responsible for the WEB version of the book. That was the first scalable project that gave me a unique experience in software development."}),Object(j.jsx)("p",{children:"Today, my focus covers responsible for Developing the User Interface:"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Designing User Interface Elements"}),Object(j.jsx)("li",{children:"Loading and Displaying Content across various devices"}),Object(j.jsx)("li",{children:" Handling User Interaction"}),Object(j.jsx)("li",{children:" Input and Submiting data to server side"}),Object(j.jsx)("li",{children:" Network Requests"})]}),Object(j.jsx)("p",{children:"For the last few years, I responsible for the front-end part of the development of affiliate software. My workflow includes translating UX/UI wireframes to interactive components into further implementation with the back-end part."})]})]})}var Z=Object(P.a)((function(e){return{root:Object(l.a)({display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(0,1,1,0)},marginTop:e.spacing(15)},e.breakpoints.down("sm"),{"& > *":{margin:e.spacing(0,1,1,0)}}),titles:{zIndex:100,whiteSpace:"pre",marginTop:"auto",marginBottom:"auto",paddingRight:24},imageContainer:{display:"flex",position:"absolute",zIndex:10,width:335,backgroundRepeat:"no-repeat",backgroundPosition:"top right",backgroundSize:"contain",minHeight:256},bgContainer:{zIndex:0,position:"absolute",minHeight:256},rootBoxes:{alignItems:"flex-end",justifyContent:"flex-end",height:e.spacing(32),width:340},a_link:{textDecoration:"none","&:hover, &:visited":{textDecoration:"underline"}},buttonOnBio:{cursor:"pointer",marginLeft:320,marginTop:30,"@media (max-width:320px )":{marginLeft:280},"@media (min-width:712px )":{marginLeft:665},"@media (min-width:1308px)":{marginLeft:1030}}}}));function $(e){var t=e.isOpen,a=e.toggle,i=Z(),n=Object(z.b)({to:{width:t?340:8,opacity:t?1:0},from:{width:335,opacity:1}});return Object(j.jsxs)(G.a,{disableGutters:!0,maxWidth:"xl",children:[Object(j.jsx)(u.a,{}),Object(j.jsx)(I.a,{onClick:a,flexGrow:1,className:i.buttonOnBio,children:t?Object(j.jsx)(p.b,{to:"/bio",children:Object(j.jsx)(N.a,{align:"left",variant:"h6",children:"Bio"})}):Object(j.jsx)(p.b,{to:"/",children:Object(j.jsx)(N.a,{align:"left",variant:"h6",children:"X"})})}),Object(j.jsxs)("div",{className:i.root,children:[Object(j.jsx)(x.a,{path:"/bio",children:Object(j.jsx)("div",{style:{position:"absolute",width:"100%"},children:Object(j.jsx)(X,{isOpen:t})})}),J.map((function(e,a){var r=e.bgcolor,s=e.color,c=e.image,o=e.href,l=e.text,d=e.id;return Object(j.jsxs)("div",{style:t||0===a?{display:"flex"}:{display:"none"},id:d,className:i.rootBoxes,children:[Object(j.jsx)(z.a.div,{className:i.titles,style:{opacity:n.opacity},children:Object(j.jsx)(N.a,{variant:"h5",component:"p",children:t&&Object(j.jsx)(p.b,{className:i.a_link,to:o,style:{color:s},children:l})})}),Object(j.jsx)(I.a,{style:{backgroundImage:t&&"url(".concat(c,")")},className:i.imageContainer}),Object(j.jsx)(z.a.div,{style:{backgroundColor:r,width:0===a?n.width:340},className:i.bgContainer})]},a)})),Object(j.jsx)(B,{})]})]})}var ee=Object(P.a)((function(e){return{root:Object(l.a)({marginTop:e.spacing(10),padding:0},e.breakpoints.up("lg"),{padding:e.spacing(0,5,20,9)}),title:Object(l.a)({fontFamily:"Big Shoulders Stencil Text",fontSize:140,color:"#f92f6c",lineHeight:.9},e.breakpoints.down("sm"),{fontSize:100})}})),te=function(e,t){return[e-window.innerWidth/2,t-window.innerHeight/2]},ae=function(e,t){return"translate3d(".concat(e/50,"px,").concat(t/15,"px,0)")};var ie=function(e){var t=e.isOpen,a=e.toggle,i=(e.isBio,ee()),n=Object(z.b)((function(){return{xy:[0,0],config:{mass:10,tension:550,friction:140}}})),r=Object(c.a)(n,2),s=r[0],o=r[1];return Object(j.jsx)(G.a,{maxWidth:"xl",disableGutters:!0,className:i.root,children:Object(j.jsxs)("div",{className:i.root,onMouseMove:function(e){var t=e.clientX,a=e.clientY;return o({xy:te(t,a)})},children:[Object(j.jsxs)(z.a.h1,{className:i.title,style:{transform:s.xy.interpolate(ae)},children:["Irina ",Object(j.jsx)("br",{})," Karpova"]}),Object(j.jsx)(I.a,{ml:16.5,mt:3,display:"flex",flexDirection:"row",alignItems:"flex-end",children:Object(j.jsxs)(N.a,{variant:"h6",children:["Front End Development. ",Object(j.jsx)("br",{}),"UI design"]})}),Object(j.jsx)($,{isOpen:t,toggle:a})]})})},ne=a(374),re=a(361);function se(e){var t=M(),a=n.a.useContext(h);return Object(j.jsxs)("div",{className:t.root,children:[Object(j.jsxs)(I.a,{className:t.title,children:[Object(j.jsx)(I.a,{className:t.buttonLink,to:"/",component:p.b,children:Object(j.jsx)(C.a,{color:"secondary"})}),Object(j.jsxs)(N.a,{variant:"h3",align:"center",children:["Building dynamic form",Object(j.jsx)("br",{})," based on configuration scheme"]})]}),Object(j.jsxs)(S.a,{container:!0,className:t.rootPapper,children:[Object(j.jsxs)(S.a,{item:!0,sm:12,md:12,lg:6,className:t.PaperChips,children:[Object(j.jsx)(R.a,{label:"React",color:"primary"}),Object(j.jsx)(R.a,{label:"TypeScript",color:"primary"}),Object(j.jsx)(R.a,{label:"FORMIK",color:"primary"}),Object(j.jsx)(R.a,{label:"Yup",color:"primary"}),Object(j.jsx)(R.a,{label:"Material UI",color:"primary"}),Object(j.jsx)(R.a,{label:"Apollo GraphQL",color:"primary"}),Object(j.jsx)(R.a,{label:"GraphQL Code Generator",color:"primary"})]}),Object(j.jsxs)(S.a,{item:!0,xs:12,sm:8,md:6,lg:6,children:[Object(j.jsxs)(I.a,{mt:3,mb:3,display:"flex",alignItems:"center",children:[Object(j.jsx)(F.a,{color:"secondary"}),Object(j.jsx)(N.a,{className:t.typoLink,children:Object(j.jsx)(g.a,{href:"https://github.com/irishakarpova/config-file-based-form",variant:"body2",children:"GitHub"})})]}),Object(j.jsx)(N.a,{className:t.description,variant:"subtitle2",align:"left",children:"It is rare to find an application that does not operate forms. Handling forms is a routine job complicated by a variety of fields and dynamic generation. Thanks to many great libraries, including FORMIK, YUP this challenge became faster and organize."}),Object(j.jsx)(ne.a,{style:{padding:20,backgroundColor:"dark"===a.currentTheme.palette.type?"#fafafa":"#fefefe"},className:t.rootSl,children:Object(j.jsx)(re.a,{})})]})]})]})}var ce=a(367);function oe(){var e=M();return Object(j.jsxs)("div",{className:e.root,children:[Object(j.jsx)(I.a,{className:e.arrow,children:Object(j.jsx)(I.a,{className:e.buttonLink,to:"/",component:p.b,children:Object(j.jsx)(C.a,{color:"secondary"})})}),Object(j.jsxs)(N.a,{className:e.title,variant:"h3",align:"center",children:["Recursive method ",Object(j.jsx)("br",{}),"for building nested a data table"]}),Object(j.jsxs)(S.a,{container:!0,className:e.rootPapper,children:[Object(j.jsxs)(S.a,{item:!0,sm:12,md:12,lg:6,className:e.PaperChips,children:[Object(j.jsx)(R.a,{label:"React",color:"primary"}),Object(j.jsx)(R.a,{label:"Apollo GraphQL",color:"primary"}),Object(j.jsx)(R.a,{label:"Material UI",color:"primary"})]}),Object(j.jsxs)(S.a,{item:!0,xs:12,sm:10,md:8,lg:7,children:[Object(j.jsxs)(I.a,{mt:3,display:"flex",alignItems:"center",children:[Object(j.jsx)(F.a,{color:"secondary"}),Object(j.jsx)(N.a,{className:e.typoLink,children:Object(j.jsx)(g.a,{href:"https://github.com/irishakarpova/nested-recursive-data-table",variant:"body2",children:"GitHub"})})]}),Object(j.jsxs)(N.a,{className:e.description,variant:"subtitle2",align:"left",children:["In my experience Recursion is not the common method to process data structures. However, this pattern is useful when there is no record of how deep is the data nesting structure. ",Object(j.jsx)("br",{}),"This example demonstrates data table component for use-cases that are focused large amounts of nested tabular data. By the Recursive method, I run through object data and display data table structure."]}),Object(j.jsx)("div",{className:e.rootSl,children:Object(j.jsx)(ce.a,{})})]})]})]})}var le=a(91);function de(){var e=M(),t=Object(i.useContext)(h);return Object(j.jsxs)("div",{className:e.root,children:[Object(j.jsx)(I.a,{className:e.arrow,children:Object(j.jsx)(I.a,{className:e.buttonLink,to:"/",component:p.b,children:Object(j.jsx)(C.a,{color:"secondary"})})}),Object(j.jsxs)(N.a,{className:e.title,variant:"h3",align:"center",children:["Solving nested tab ",Object(j.jsx)("br",{})," bar based on configuration"]}),Object(j.jsxs)(S.a,{container:!0,className:e.rootPapper,children:[Object(j.jsxs)(S.a,{item:!0,sm:12,md:12,lg:6,className:e.PaperChips,children:[Object(j.jsx)(R.a,{label:"React",color:"primary"}),Object(j.jsx)(R.a,{label:"Apollo GraphQL",color:"primary"}),Object(j.jsx)(R.a,{label:"Material UI",color:"primary"}),Object(j.jsx)(R.a,{label:"html-to-react",color:"primary"})]}),Object(j.jsxs)(S.a,{item:!0,xs:12,sm:10,md:8,lg:7,children:[Object(j.jsxs)(I.a,{mt:3,display:"flex",alignItems:"center",children:[Object(j.jsx)(F.a,{color:"secondary"}),Object(j.jsx)(N.a,{className:e.typoLink,children:Object(j.jsx)(g.a,{href:"https://github.com/irishakarpova/config-nested-tab-bar",variant:"body2",children:"GitHub"})})]}),Object(j.jsxs)(N.a,{className:e.description,variant:"subtitle2",align:"left",children:["It happens quite often when the navigation menu is generated dynamically depending on user access to specific data. In this case, I need to get and analyze the configuration schema before I display data. ",Object(j.jsx)("br",{}),"Here is an example of nested navigation with configuration. In my case, there is a type field named The 'parentId' that defines a set of tabs that belongs to the up-level or second level. Some of the tabs labels might be complex. In this way, I use The Html-to-react module to get dynamic control for displaying correctly."]}),Object(j.jsx)("div",{className:e.rootSl,children:Object(j.jsx)("iframe",{title:"Menu Example",className:e.iframeStyle,style:"dark"===t.currentTheme.palette.type?{background:"#2B2B2B"}:{background:"none"},src:"http://localhost:3003/test"})}),Object(j.jsx)(N.a,{className:e.description,variant:"body2",align:"right",children:"schema.graphql"}),Object(j.jsx)(le.a,{text:"schema {\n  query: Query\n}\n\ntype Query {\n  getMenu: [MenuItem]\n}\n\ntype MenuItem {\n    id: ID!\n    label: String!\n    parentId: ID!\n}\n",language:"java",showLineNumbers:!1,theme:"light"===t.currentTheme.palette.type?le.c:le.b,wrapLines:!0})]})]})]})}var be=a(366);function je(){return Object(j.jsx)(be.a,{})}var he=a(363);function me(e){var t=M(),a=n.a.useContext(h);return Object(j.jsxs)("div",{className:t.root,children:[Object(j.jsxs)(I.a,{className:t.title,children:[Object(j.jsx)(I.a,{className:t.buttonLink,to:"/",component:p.b,children:Object(j.jsx)(C.a,{color:"secondary"})}),Object(j.jsxs)(N.a,{variant:"h3",align:"center",children:["Share data between components ",Object(j.jsx)("br",{})," with Redux"]})]}),Object(j.jsxs)(S.a,{container:!0,className:t.rootPapper,children:[Object(j.jsxs)(S.a,{item:!0,sm:12,md:12,lg:6,className:t.PaperChips,children:[Object(j.jsx)(R.a,{label:"React",color:"primary"}),Object(j.jsx)(R.a,{label:"Redux",color:"primary"}),Object(j.jsx)(R.a,{label:"Bootstrap",color:"primary"}),Object(j.jsx)(R.a,{label:"react-select",color:"primary"}),Object(j.jsx)(R.a,{label:"reselect",color:"primary"}),Object(j.jsx)(R.a,{label:"lodash",color:"primary"})]}),Object(j.jsxs)(S.a,{item:!0,xs:12,sm:12,md:10,lg:8,children:[Object(j.jsxs)(I.a,{mt:3,mb:3,display:"flex",alignItems:"center",children:[Object(j.jsx)(F.a,{color:"secondary"}),Object(j.jsx)(N.a,{className:t.typoLink,children:Object(j.jsx)(g.a,{href:"https://github.com/irishakarpova/data-table-comp_REST",variant:"body2",children:"GitHub"})})]}),Object(j.jsxs)(N.a,{gutterBottom:"true",className:t.description,variant:"subtitle2",align:"left",children:["React uses a declarative style of describing components. Components are independent blocks of code that have a state. We can coordinate related modules by managing the component's state. For this, we have to store this state somewhere. ",Object(j.jsx)("br",{}),"There are different ways where to keep the condition. One of the approaches is to bind the app to the Redux library. It becomes practical when using a REST API service to call endpoint. It lets React components read data from a Redux store that is fetched, sorted out. This method is time-consuming and requires taking into account the details, as well as involved in adding other third-party libraries. But as a result, we have a stable, scalable application."]}),Object(j.jsx)(ne.a,{style:{backgroundColor:"dark"===a.currentTheme.palette.type?"#fafafa":"#fefefe"},className:t.rootSl,children:Object(j.jsx)(he.a,{})})]})]}),Object(j.jsx)(B,{})]})}var pe=a(4),xe=a(362);function ue(){var e=M();return Object(j.jsxs)("div",{className:e.root,children:[Object(j.jsx)(I.a,{className:e.arrow,children:Object(j.jsx)(I.a,{className:e.buttonLink,to:"/",component:p.b,children:Object(j.jsx)(C.a,{color:"secondary"})})}),Object(j.jsxs)(N.a,{variant:"h3",align:"center",children:["Contact Us form ",Object(j.jsx)("br",{})," based on REST API"]}),Object(j.jsxs)(S.a,{container:!0,className:e.rootPapper,children:[Object(j.jsxs)(S.a,{item:!0,sm:12,md:12,lg:6,className:e.PaperChips,children:[Object(j.jsx)(R.a,{label:"React",color:"primary"}),Object(j.jsx)(R.a,{label:"Bootstrap",color:"primary"}),Object(j.jsx)(R.a,{label:"axios",color:"primary"}),Object(j.jsx)(R.a,{label:"formik",color:"primary"}),Object(j.jsx)(R.a,{label:"yup",color:"primary"})]}),Object(j.jsxs)(S.a,{item:!0,xs:12,sm:12,md:12,lg:9,xl:8,children:[Object(j.jsxs)(I.a,{mt:3,mb:3,display:"flex",alignItems:"center",children:[Object(j.jsx)(F.a,{color:"secondary"}),Object(j.jsx)(N.a,{className:e.typoLink,children:Object(j.jsx)(g.a,{href:"https://github.com/irishakarpova/Contact_Us_Form_RESTful_API",variant:"body2",children:"GitHub"})})]}),Object(j.jsxs)(N.a,{className:e.description,variant:"subtitle2",align:"left",children:["When I am responsible for building form fields with the REST API method, I found it helpful to use a set of libraries, including Formik and Axios, Bootstrap. ",Object(j.jsx)("br",{})," ","Axios is a promise-based HTTP client that works as API Fetch but has some additional benefits. It allows me to avoid writing large amounts of code, provides network error data. ",Object(j.jsx)("br",{})," Bootstrap is a useful collection of reusable bits of code written in HTML, CSS, and JavaScript. ",Object(j.jsx)("br",{})," Formik gets rid of the complexity and verboseness forms in React while keeping elements as simple as possible.",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Today we are lucky to have a lot of different libraries. For the most part, all of them make our development easy. It remains to evaluate what set of libraries will be useful and proper to use it."]})]})]}),Object(j.jsx)("div",{className:e.PaperForm,children:Object(j.jsx)(ne.a,{elevation:3,square:!0,className:Object(pe.a)(e.rootSl,e.bgPaper),children:Object(j.jsx)(xe.a,{})})})]})}function ge(){var e=M(),t=n.a.useContext(h);return Object(j.jsxs)("div",{className:e.root,children:[Object(j.jsxs)(I.a,{className:e.title,children:[Object(j.jsx)(I.a,{className:e.buttonLink,to:"/",component:p.b,children:Object(j.jsx)(C.a,{color:"secondary"})}),Object(j.jsx)(N.a,{variant:"h3",align:"center",children:"User Manual Template based on GraphQL"})]}),Object(j.jsxs)(S.a,{container:!0,className:e.rootPapper,children:[Object(j.jsxs)(S.a,{item:!0,sm:12,md:12,lg:6,className:e.PaperChips,children:[Object(j.jsx)(R.a,{label:"React",color:"primary"}),Object(j.jsx)(R.a,{label:"React Router",color:"primary"}),Object(j.jsx)(R.a,{label:"Apollo GraphQL",color:"primary"}),Object(j.jsx)(R.a,{label:"Material UI",color:"primary"}),Object(j.jsx)(R.a,{label:"html-to-react",color:"primary"})]}),Object(j.jsxs)(S.a,{item:!0,xs:12,sm:12,md:10,lg:8,children:[Object(j.jsxs)(I.a,{mt:3,mb:3,display:"flex",alignItems:"center",children:[Object(j.jsx)(F.a,{color:"secondary"}),Object(j.jsx)(N.a,{className:e.typoLink,children:Object(j.jsx)(g.a,{href:"https://github.com/irishakarpova/manual_api",variant:"body2",children:"GitHub"})})]}),Object(j.jsxs)(N.a,{className:Object(pe.a)(e.description,e.pBottom),variant:"subtitle2",align:"left",children:["All software development products, whether created by a small or a large team, require related documentation.",Object(j.jsx)("br",{})," Recently, I had the challenge to develop an application for technical documentation that allows discussing all significant questions arising between stakeholders and developers. ",Object(j.jsx)("br",{}),"According to a technical brief, the model must be flexible, customizable, easy to add new materials and process HTML files directly."]}),Object(j.jsx)("iframe",{title:"Manual Example",className:e.iframeStyle,style:{height:760,backgroundColor:"dark"===t.currentTheme.palette.type?"#2B2B2B":"#fefefe"},src:"http://localhost:3000/manual"})]})]})]})}var Oe=a(369);function fe(){return console.log("test"),Object(j.jsx)(Oe.a,{})}var ye=a(370);function ve(){var e=M(),t=Object(i.useState)(!0).renderOnLoad;return Object(j.jsxs)("div",{className:e.root,children:[Object(j.jsxs)(I.a,{className:e.title,children:[Object(j.jsx)(I.a,{className:e.buttonLink,to:"/",component:p.b,children:Object(j.jsx)(C.a,{color:"secondary"})}),Object(j.jsx)(N.a,{variant:"h3",align:"center",children:"Video as background in React"})]}),Object(j.jsx)(S.a,{container:!0,className:e.rootPapper,children:Object(j.jsx)(S.a,{item:!0,xs:12,sm:12,md:6,lg:6,children:Object(j.jsxs)(I.a,{mt:3,mb:3,display:"flex",alignItems:"center",children:[Object(j.jsx)(F.a,{color:"secondary"}),Object(j.jsx)(N.a,{className:e.typoLink,children:Object(j.jsx)(g.a,{href:"https://github.com/irishakarpova/Video-background-component",variant:"body2",children:"GitHub"})})]})})}),Object(j.jsx)(ne.a,{className:e.videoBg,children:Object(j.jsx)(ye.a,{renderOnLoad:t})}),Object(j.jsxs)(N.a,{className:e.videoBgdesc,variant:"subtitle2",align:"right",children:["Video by Matthias Groeneveld ",Object(j.jsx)("br",{})," from Pexels"]})]})}var we=a(593),ke=a(606),Ne=Object(P.a)((function(){return{switchControl:{position:"absolute",right:0,top:17}}}));function Ie(){var e=Ne(),t=Object(i.useContext)(h);return Object(j.jsx)(ke.a,{className:e.switchControl,checked:t.checked,onChange:t.handleChangeTheme,inputProps:{"aria-label":"checkbox"}})}var Re=a.p+"static/media/forTheVoice_1.7526817e.svg",Se=a.p+"static/media/forTheVoice_2.aa8dce7e.svg",Te=a.p+"static/media/forTheVoice_3.2f8b2e5e.svg";function Ce(){var e=Object(i.useContext)(h),t=M();return Object(j.jsxs)("div",{className:t.root,children:[Object(j.jsx)(I.a,{className:t.arrow,children:Object(j.jsx)(I.a,{className:t.buttonLink,to:"/",component:p.b,children:Object(j.jsx)(C.a,{color:"secondary"})})}),Object(j.jsx)(N.a,{className:t.title,variant:"h3",align:"center",children:"Why I use Immutable JS?"}),Object(j.jsxs)(S.a,{container:!0,className:t.rootPapper,children:[Object(j.jsxs)(S.a,{item:!0,sm:12,md:12,lg:6,className:t.PaperChips,children:[Object(j.jsx)(R.a,{label:"React",color:"primary"}),Object(j.jsx)(R.a,{label:"Redux",color:"primary"}),Object(j.jsx)(R.a,{label:"Bootstrap",color:"primary"}),Object(j.jsx)(R.a,{label:"Immutable",color:"primary"}),Object(j.jsx)(R.a,{label:"Reselect",color:"primary"})]}),Object(j.jsxs)(S.a,{item:!0,xs:12,sm:10,md:8,lg:7,children:[Object(j.jsxs)(I.a,{mt:3,display:"flex",alignItems:"center",children:[Object(j.jsx)(F.a,{color:"secondary"}),Object(j.jsx)(N.a,{className:t.typoLink,children:Object(j.jsx)(g.a,{href:"https://github.com/irishakarpova/react-data-list",variant:"body2",children:"GitHub"})})]}),Object(j.jsxs)(N.a,{className:t.description,variant:"subtitle2",align:"left",children:["In this example, I support an interactive list of articles with the possibility of adding new and ",Object(j.jsx)("br",{})," ","the",Object(j.jsx)("code",{children:" Select Input control "}),"component for collecting user-provided information from a list of options. ",Object(j.jsx)("br",{}),"I run with ",Object(j.jsx)("code",{children:" REST API "}),"method and widely used set of libraries React/Redux."]}),Object(j.jsxs)(I.a,{pt:3,style:{opacity:.9},display:"flex",justifyContent:"start",alignItems:"center",children:[Object(j.jsx)("img",{className:t.test,src:Re,alt:"Russian Avangard"}),Object(j.jsx)("img",{className:t.test,src:Se,alt:"Russian Avangard"}),Object(j.jsx)("img",{className:t.test,src:Te,alt:"Russian Avangard"})]}),Object(j.jsxs)(N.a,{className:t.description,variant:"body2",align:"left",children:["According to the concept of ecosystem React/Redux, once created data, cannot be changed. Among the reasons is The ",Object(j.jsx)("code",{children:"connect()"})," function that provides its connected component to a Redux",Object(j.jsx)("code",{children:" store "})," is pure, as well as ",Object(j.jsx)("code",{children:"Reducers"})," are just pure functions that take the previous state and an action and return to the next state. That is means the reconciliation process will not update the component if data is based on reference and mutated directly. ",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"To keep data structure immutable is not an easy challenge that may increase app complexity. That's the reason it might be useful to add an Immutable JS library. Immutable.js has a set of immutable data structures that handle data by always returning a new object. ",Object(j.jsx)("br",{})]}),Object(j.jsxs)(N.a,{className:t.description,variant:"body2",align:"left",children:["Here is the ",Object(j.jsx)("code",{children:"Reducer"})," function. I handle fetched data. I apply ",Object(j.jsx)("code",{children:"Record "}),"function that creates Record instances with a described schema."]}),Object(j.jsx)(N.a,{className:t.description,variant:"body2",align:"right",children:"Reducer.js"}),Object(j.jsx)(le.a,{text:'import { Record } from "immutable";\n\nconst ArticleRecord = Record({\n    id: null,\n    title: null,\n    description: null,\n    location: null,\n    members: null\n});\n\nconst DataRecord = Record({\n  entities: arrToMap([], ArticleRecord),\n  loading: false,\n  error: false\n});\n\nexport default (articlesState = new DataRecord(), action) => {\n  switch (type) {\n    ...\n      default:\n          return articlesState;\n  }\n};\n',language:"java",showLineNumbers:!1,theme:"light"===e.currentTheme.palette.type?le.c:le.b,wrapLines:!0}),Object(j.jsxs)(N.a,{className:t.description,variant:"body2",align:"left",mb:3,children:["Now, I have an immutable object with access to only the specified fields of it. Even though as a result I have nested data, I can keep easy to handling this data using",Object(j.jsx)("code",{children:" set"})," and ",Object(j.jsx)("code",{children:" setIn"})," methods."]}),Object(j.jsx)(N.a,{className:t.description,variant:"body2",align:"right",children:"Reducer.js"}),Object(j.jsx)(le.a,{text:'switch (type) {\n  case LOAD_ALL_ARTICLES:\n      return articlesState\n          .set("entities", arrToMap(response, ArticleRecord))\n          .set("loading", false);\n\n  case ADD_ARTICLE:\n      return articlesState.setIn(["entities", randomId], {\n          ...payload.article,\n          id: randomId\n      });\n  default:\n      return articlesState;\n}\n',language:"java",showLineNumbers:!1,theme:"light"===e.currentTheme.palette.type?le.c:le.b,wrapLines:!0}),Object(j.jsx)(N.a,{className:t.description,variant:"h5",align:"left",children:"Conclusion"}),Object(j.jsx)(N.a,{className:t.description,variant:"subtitle2",align:"left",children:"Thanks to immutable.js, an application becomes more flexible, easier to support and more resistant to errors."})]})]}),Object(j.jsx)(B,{})]})}var Le=a(364);function Fe(e){var t=M();n.a.useContext(h);return Object(j.jsxs)("div",{className:t.root,children:[Object(j.jsxs)(I.a,{className:t.title,children:[Object(j.jsx)(I.a,{className:t.buttonLink,to:"/",component:p.b,children:Object(j.jsx)(C.a,{color:"secondary"})}),Object(j.jsxs)(N.a,{variant:"h3",align:"center",children:["Adding a date picker ",Object(j.jsx)("br",{}),"with scope select a range of days"]})]}),Object(j.jsxs)(S.a,{container:!0,className:t.rootPapper,children:[Object(j.jsxs)(S.a,{item:!0,sm:12,md:12,lg:6,className:t.PaperChips,children:[Object(j.jsx)(R.a,{label:"React",color:"primary"}),Object(j.jsx)(R.a,{label:"Redux",color:"primary"}),Object(j.jsx)(R.a,{label:"react-day-picker",color:"primary"}),Object(j.jsx)(R.a,{label:"reselect",color:"primary"}),Object(j.jsx)(R.a,{label:"immutable",color:"primary"})]}),Object(j.jsxs)(S.a,{item:!0,xs:12,sm:8,md:6,lg:6,children:[Object(j.jsxs)(I.a,{mt:3,mb:3,display:"flex",alignItems:"center",children:[Object(j.jsx)(F.a,{color:"secondary"}),Object(j.jsx)(N.a,{className:t.typoLink,children:Object(j.jsx)(g.a,{href:"https://github.com/irishakarpova/Date_Range_Calendar",variant:"body2",children:"GitHub"})})]}),Object(j.jsxs)(N.a,{className:t.description,variant:"subtitle2",align:"left",children:["The process of adding a component such as a"," ",Object(j.jsx)("code",{className:t.codeT,children:"Day picker"})," is always related to sharing of handling data. No doubt, there are different approaches to solving this challenge. One of the options that integrate well with scalable projects is to use the Redux library. Redux, with its contracts and APIs, creates an ecosystem that lets us build a predictable solution."]})]}),Object(j.jsx)(ne.a,{className:Object(pe.a)(t.rootSl,t.bgPaperWithP),children:Object(j.jsx)(Le.a,{})})]})]})}var Pe=function(){var e=n.a.useContext(h),t=n.a.useState(),a=Object(c.a)(t,2),i=a[0],r=a[1],s=function(){r(!i)};return Object(j.jsxs)(we.a,{theme:e.currentTheme,children:[Object(j.jsx)(Ie,{}),Object(j.jsx)(u.a,{}),Object(j.jsx)(p.a,{children:Object(j.jsxs)(x.c,{children:[Object(j.jsx)(x.a,{path:"/slideshow",children:Object(j.jsx)(D,{})}),Object(j.jsx)(x.a,{path:"/configform",children:Object(j.jsx)(se,{})}),Object(j.jsx)(x.a,{path:"/configmenu",children:Object(j.jsx)(de,{})}),Object(j.jsx)(x.a,{path:"/test",children:Object(j.jsx)(je,{})}),Object(j.jsx)(x.a,{path:"/datatable",children:Object(j.jsx)(oe,{})}),Object(j.jsx)(x.a,{path:"/datatable-rest-api",children:Object(j.jsx)(me,{})}),Object(j.jsx)(x.a,{path:"/forms-teps",children:Object(j.jsx)(ue,{})}),Object(j.jsx)(x.a,{path:"/wiki",children:Object(j.jsx)(ge,{})}),Object(j.jsx)(x.a,{path:"/manual",children:Object(j.jsx)(fe,{})}),Object(j.jsx)(x.a,{path:"/videoapp",children:Object(j.jsx)(ve,{})}),Object(j.jsx)(x.a,{path:"/articleList",children:Object(j.jsx)(Ce,{})}),Object(j.jsx)(x.a,{path:"/calendar",children:Object(j.jsx)(Fe,{})}),Object(j.jsx)(x.a,{path:"/bio",render:function(){return Object(j.jsx)(ie,{toggle:s,isOpen:!1})}}),Object(j.jsx)(x.a,{path:"/",render:function(){return Object(j.jsx)(ie,{toggle:s,isOpen:!0})}})]})})]})};var Ae=function(){return Object(j.jsxs)(m,{children:[Object(j.jsx)(u.a,{}),Object(j.jsx)(Pe,{})]})},Be=function(e){e&&e instanceof Function&&a.e(155).then(a.bind(null,801)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),i(e),n(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(Ae,{})}),document.getElementById("root")),Be()}},[[541,152,153]]]);
//# sourceMappingURL=main.b2697d49.chunk.js.map