(()=>{var e={};e.id=632,e.ids=[632],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4562:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>a.a,__next_app__:()=>u,originalPathname:()=>x,pages:()=>c,routeModule:()=>h,tree:()=>d});var r=t(482),n=t(9108),i=t(2563),a=t.n(i),l=t(8300),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);t.d(s,o);let d=["",{children:["(app)",{children:["stories",{children:["[storySlug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,9946)),"/home/hungthai/WebstormProjects/story-frontend/src/app/(app)/stories/[storySlug]/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,4825)),"/home/hungthai/WebstormProjects/story-frontend/src/app/(app)/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,3667)),"/home/hungthai/WebstormProjects/story-frontend/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.bind(t,8206)),"/home/hungthai/WebstormProjects/story-frontend/src/app/not-found.tsx"]}],c=["/home/hungthai/WebstormProjects/story-frontend/src/app/(app)/stories/[storySlug]/page.tsx"],x="/(app)/stories/[storySlug]/page",u={require:t,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/(app)/stories/[storySlug]/page",pathname:"/stories/[storySlug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},5173:(e,s,t)=>{Promise.resolve().then(t.bind(t,9266))},9266:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>f});var r=t(2295),n=t(6037),i=t(4214),a=t(783),l=t.n(a),o=t(3756),d=t(6888);function c({story:e}){let{data:s}=(0,n.me)({paginationAtom:d.Vn,storySlug:e.slug});return s?(0,r.jsxs)("div",{children:[r.jsx("div",{className:"py-3 text-3xl font-bold",children:"Danh S\xe1ch Chương"}),r.jsx("div",{className:"grid grid-flow-col grid-cols-2 grid-rows-5",children:s.results.map(s=>r.jsx("div",{children:r.jsx(l(),{className:"inline-block text-blue-600 hover:text-blue-800 dark:text-blue-200 dark:hover:text-blue-400",href:`/stories/${e.slug}/chapters/${s.id}`,children:s.title})},s.id))}),r.jsx(o.$,{totalPages:s.meta.pagination.total_pages,paginationAtom:d.Vn})]}):r.jsx("div",{children:"Loading..."})}var x=t(6815),u=t(3729),h=t(2577);function m({story:e}){let[s,t]=(0,u.useState)(!1),n=e.description.split("\n");return(0,r.jsxs)("div",{children:[r.jsx(h.H1,{children:"Th\xf4ng Tin Truyện"}),(0,r.jsxs)("div",{className:"flex space-x-3",children:[r.jsx("div",{className:"basis-1/4",children:r.jsx("img",{src:e.cover_photo,alt:e.title,className:"w-full rounded-lg object-cover"})}),(0,r.jsxs)("div",{className:"flex basis-3/4 flex-col space-y-3",children:[r.jsx("div",{className:"text-center text-3xl font-bold",children:e.title}),r.jsx("div",{className:"flex justify-center",children:Array.from({length:5}).map((s,t)=>r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:(0,x.W)("h-6 w-6",t<e.avg_rating?"text-yellow-500":"text-gray-300"),fill:"currentColor",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:r.jsx("path",{d:"M12 .587l3.668 7.431 8.332 1.209-6.001 5.849 1.416 8.265-7.415-3.896-7.415 3.896 1.416-8.265-6.001-5.849 8.332-1.209L12 .587z"})},t))}),(0,r.jsxs)("div",{children:[r.jsx("div",{className:"inline font-bold",children:"Thể Loại:"})," ",e.genres.map((e,s)=>(0,r.jsxs)("span",{children:[s>0&&", ",r.jsx(l(),{className:"text-blue-600 hover:text-blue-800 dark:text-blue-200 dark:hover:text-blue-400",href:`/filter/genres/${e.slug}`,passHref:!0,children:e.name})]},e.id))]}),""!=e.source&&(0,r.jsxs)("div",{children:[r.jsx("div",{className:"inline font-bold",children:"Nguồn:"})," ",e.source]}),(0,r.jsxs)("div",{className:"leading-7",children:[r.jsx("div",{className:"inline font-bold",children:"M\xf4 tả:"}),n.slice(0,s?n.length:5).map((e,s)=>r.jsx("div",{className:"my-1 text-justify tracking-tighter",children:e},s)),n.length>5&&r.jsx("button",{onClick:()=>{t(!s)},className:"mt-2 text-blue-500",children:s?"Ẩn bớt":"Xem th\xeam"})]}),(0,r.jsxs)("div",{children:[r.jsx("div",{className:"inline font-bold",children:"T\xe1c giả:"})," ",r.jsx(l(),{className:"text-blue-600 hover:text-blue-800 dark:text-blue-200 dark:hover:text-blue-400",href:`/filter/authors/${e.author.id}`,passHref:!0,children:e.author.name})]}),(0,r.jsxs)("div",{children:[r.jsx("div",{className:"inline font-bold",children:"Tổng số chương:"})," ",e.total_chapters]}),(0,r.jsxs)("div",{children:[r.jsx("div",{className:"inline font-bold",children:"Trạng th\xe1i:"})," ","completed"==e.status&&r.jsx("div",{className:"inline text-green-500",children:"Đ\xe3 ho\xe0n th\xe0nh"}),"ongoing"==e.status&&r.jsx("div",{className:"inline text-red-500",children:"Chưa ho\xe0n th\xe0nh"})]})]})]})]})}function p({story:e}){let{data:s}=(0,n.RD)({authorId:e.author.id});if(s&&s.length>1)return(0,r.jsxs)("div",{className:"mb-3",children:[r.jsx("div",{className:"mb-3 text-2xl font-bold",children:"Truyện C\xf9ng T\xe1c Giả"}),r.jsx("div",{children:s.filter(s=>s.id!=e.id).map(e=>r.jsx("div",{children:r.jsx(l(),{className:"text-blue-600 hover:text-blue-800 dark:text-blue-200 dark:hover:text-blue-400",href:`/stories/${e.slug}`,children:e.title})},e.id))})]})}var g=t(2214);function f({params:e}){let{data:s,isLoading:t}=(0,n.IQ)(e.storySlug);if(t)return r.jsx("div",{children:"Loading..."});if(!s)return r.jsx("div",{children:"Story not found."});let a=[{title:"Home",href:"/"},{title:`${s.title}`,href:`/stories/${s.slug}`}];return(0,r.jsxs)("div",{className:"container",children:[r.jsx(i.a,{paths:a}),(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsxs)("div",{className:"basis-2/3",children:[r.jsx(m,{story:s}),r.jsx(c,{story:s})]}),(0,r.jsxs)("div",{className:"basis-1/3",children:[r.jsx(p,{story:s}),r.jsx(g.E,{})]})]})]})}},4214:(e,s,t)=>{"use strict";t.d(s,{a:()=>l});var r=t(2295),n=t(6815),i=t(783),a=t.n(i);function l({paths:e}){return r.jsx("nav",{"aria-label":"breadcrumb",className:"my-3 w-full rounded-md bg-neutral-100 px-5 py-3 shadow-lg dark:bg-neutral-700",children:r.jsx("ol",{className:"flex",children:e.map((s,t)=>{let i=t===e.length-1;return(0,r.jsxs)("li",{children:[r.jsx(a(),{href:s.href,className:(0,n.Z)("hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-500",{"text-blue-700 dark:text-primary":i}),children:s.title}),!i&&r.jsx("span",{className:"mx-2 text-neutral-500 dark:text-neutral-300",children:"/"})]},t)})})})}},3756:(e,s,t)=>{"use strict";t.d(s,{$:()=>o});var r=t(2295),n=t(3729),i=t(5702),a=t(5094),l=t(6540);function o({totalPages:e,paginationAtom:s}){let{pagination:t,nextPage:o,prevPage:d,goToPage:c}=(0,i.h0)(s),[x,u]=(0,n.useState)(t.page);return(0,n.useEffect)(()=>{u(t.page)},[t]),(0,r.jsxs)("div",{className:"mt-3 flex items-center justify-center gap-2",children:[r.jsx(a.z,{onClick:()=>c(1),disabled:1===t.page,children:"<<"}),r.jsx(a.z,{onClick:d,disabled:1===t.page,children:"<"}),(0,r.jsxs)("form",{onSubmit:s=>{s.preventDefault(),u(Math.max(1,Math.min(x,e))),c(Math.max(1,Math.min(x,e)))},className:"flex items-center",children:[r.jsx(l.I,{type:"number",value:x,onChange:e=>{u(parseInt(e.target.value,10))},className:"w-12 text-center [&::-webkit-inner-spin-button]:appearance-none"}),(0,r.jsxs)("span",{className:"m-2 whitespace-nowrap",children:[" / ",e]})]}),r.jsx(a.z,{onClick:o,disabled:t.page===e,children:">"}),r.jsx(a.z,{onClick:()=>c(e),disabled:t.page===e,children:">>"})]})}},2214:(e,s,t)=>{"use strict";t.d(s,{E:()=>j});var r=t(2295),n=t(7370),i=t(2577),a=t(6815),l=t(783),o=t.n(l);function d({stories:e}){return r.jsx("div",{className:"flex flex-col",children:e.map((e,s)=>{var t;return r.jsx("div",{children:(0,r.jsxs)("div",{className:"flex h-12 flex-row items-center space-x-2",children:[r.jsx("div",{className:(0,a.W)("flex size-10 items-center justify-center rounded-full",{"bg-red-500":0==s,"bg-green-500":1==s,"bg-cyan-500":2==s},{"border border-foreground bg-foreground text-background":s>2}),children:s+1}),r.jsx(o(),{href:`/stories/${e.slug}`,className:"w-[270px] leading-none text-blue-600 hover:text-blue-800 dark:text-blue-200 dark:hover:text-blue-400",children:e.title}),r.jsx("div",{children:(t=e.total_reads,new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:0}).format(t).replace(/,/g,"."))})]})},e.id)})})}var c=t(4931),x=t(3729),u=t(1453);let h=c.fC,m=x.forwardRef(({className:e,...s},t)=>r.jsx(c.aV,{ref:t,className:(0,u.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",e),...s}));m.displayName=c.aV.displayName;let p=x.forwardRef(({className:e,...s},t)=>r.jsx(c.xz,{ref:t,className:(0,u.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-0.5 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",e),...s}));p.displayName=c.xz.displayName;let g=x.forwardRef(({className:e,...s},t)=>r.jsx(c.VY,{ref:t,className:(0,u.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...s}));g.displayName=c.VY.displayName;var f=t(6888);function j(){let[e]=(0,n.KO)(f.X_);return(0,r.jsxs)("div",{children:[r.jsx(i.H2,{children:"Top 10"}),(0,r.jsxs)(h,{defaultValue:"week",className:"w-[400px]",children:[(0,r.jsxs)(m,{children:[r.jsx(p,{value:"week",children:"Tuần"}),r.jsx(p,{value:"month",children:"Th\xe1ng"}),r.jsx(p,{value:"all",children:"Năm"})]}),r.jsx(g,{value:"week",children:r.jsx(d,{stories:e.week})}),r.jsx(g,{value:"month",children:r.jsx(d,{stories:e.month})}),r.jsx(g,{value:"all",children:r.jsx(d,{stories:e.all})})]})]})}},9946:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>i,__esModule:()=>n,default:()=>a});let r=(0,t(6843).createProxy)(String.raw`/home/hungthai/WebstormProjects/story-frontend/src/app/(app)/stories/[storySlug]/page.tsx`),{__esModule:n,$$typeof:i}=r,a=r.default}};var s=require("../../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[129,815,931,368],()=>t(4562));module.exports=r})();