(()=>{var e={};e.id=198,e.ids=[198],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},2108:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>i.a,__next_app__:()=>h,originalPathname:()=>x,pages:()=>c,routeModule:()=>u,tree:()=>o});var r=t(482),a=t(9108),l=t(2563),i=t.n(l),n=t(8300),d={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>n[e]);t.d(s,d);let o=["",{children:["(app)",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,8363)),"/home/hungthai/WebstormProjects/story-frontend/src/app/(app)/page.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,4825)),"/home/hungthai/WebstormProjects/story-frontend/src/app/(app)/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,3667)),"/home/hungthai/WebstormProjects/story-frontend/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.bind(t,8206)),"/home/hungthai/WebstormProjects/story-frontend/src/app/not-found.tsx"]}],c=["/home/hungthai/WebstormProjects/story-frontend/src/app/(app)/page.tsx"],x="/(app)/page",h={require:t,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(app)/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},107:(e,s,t)=>{Promise.resolve().then(t.bind(t,6121))},6121:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>D});var r=t(2295),a=t(7370),l=t(3729),i=t(6037),n=t(783),d=t.n(n),o=t(2577);function c({story:e}){return r.jsx("div",{className:"block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]",children:(0,r.jsxs)("div",{className:"group relative w-full",children:[(0,r.jsxs)("div",{className:"group-hover:opacity-80",children:[r.jsx("img",{src:e.cover_photo,alt:e.title,className:"w-full rounded-lg object-cover"}),(0,r.jsxs)("div",{className:"absolute bottom-0 w-full rounded-b-lg bg-neutral-700/50 p-4 backdrop-blur dark:bg-neutral-50/50",children:[r.jsx("div",{className:"text-lg font-bold leading-none tracking-tighter text-neutral-50 dark:text-neutral-800",children:e.title}),"completed"==e.status&&(0,r.jsxs)("div",{className:"absolute -right-5 -top-6 skew-y-6 overflow-visible bg-blue-500 px-1 py-0.5 text-white shadow-lg",children:["Full ",e.total_chapters," chương"]})]})]}),r.jsx(d(),{href:`/stories/${e.slug}`,className:"absolute inset-0 z-10 size-full"}),r.jsx("div",{className:"absolute inset-0 overflow-hidden rounded-lg",children:r.jsx("div",{className:"z-5 absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 transform bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"})})]})})}var x=t(1453);function h({className:e,...s}){return r.jsx("div",{className:(0,x.cn)("animate-pulse rounded-md bg-muted",e),...s})}function u(){return r.jsx("div",{className:"grid grid-cols-4 gap-8",children:Array.from({length:8}).map((e,s)=>r.jsx(h,{className:"min-h-[350px] rounded-2xl"},s))})}function p(){let{data:e}=(0,i.RD)({status:"completed"});return(0,r.jsxs)("div",{children:[r.jsx(d(),{href:"/filter/stories/full",children:r.jsx(o.H1,{className:"hover:text-cyan-900 dark:hover:text-cyan-400",children:"Truyện Full"})}),e?r.jsx("div",{className:"grid grid-cols-5 gap-8",children:e.slice(0,10).map(e=>r.jsx("div",{children:r.jsx(c,{story:e})},e.id))}):r.jsx(u,{})]})}var m=t(8157),f=t(6888);function g(){let{data:e}=(0,i.DG)(),[,s]=(0,a.KO)(f.wK);if(e)return(0,r.jsxs)(m.Ph,{onValueChange:e=>s(e),children:[r.jsx(m.i4,{className:"w-[180px]",children:r.jsx(m.ki,{placeholder:"Tất cả"})}),r.jsx(m.Bw,{children:(0,r.jsxs)(m.DI,{children:[r.jsx(m.Ql,{value:"all",children:"Tất cả"},"tat-ca"),e.map(e=>r.jsx(m.Ql,{value:e.slug,children:e.name},e.id))]})})]})}function j({story:e}){return r.jsx("div",{className:"block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]",children:(0,r.jsxs)("div",{className:"group relative w-full",children:[(0,r.jsxs)("div",{className:"group-hover:opacity-80",children:[r.jsx("img",{src:e.cover_photo,alt:e.title,className:"w-full rounded-lg object-cover"}),(0,r.jsxs)("div",{className:"absolute bottom-0 w-full rounded-b-lg bg-neutral-700/50 p-4 backdrop-blur dark:bg-neutral-50/50",children:[r.jsx("div",{className:"text-lg font-bold leading-none tracking-tighter text-neutral-50 dark:text-neutral-800",children:e.title}),"completed"==e.status&&r.jsx("div",{className:"absolute -right-5 -top-6 skew-y-6 overflow-visible bg-green-500 px-1 py-0.5 text-white shadow-lg",children:"Đ\xe3 ho\xe0n th\xe0nh"})]})]}),r.jsx(d(),{href:`/stories/${e.slug}`,className:"absolute inset-0 z-10 size-full"}),r.jsx("div",{className:"absolute inset-0 overflow-hidden rounded-lg",children:r.jsx("div",{className:"z-5 absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 transform bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"})})]})})}function b(){return r.jsx("div",{className:"grid grid-cols-5 gap-8",children:Array.from({length:10}).map((e,s)=>r.jsx(h,{className:"min-h-[350px] rounded-2xl"},s))})}function v(){let e;let{data:s}=(0,i.RD)({isHot:!0}),[t]=(0,a.KO)(f.wK);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"flex flex-row items-center justify-between",children:[r.jsx(d(),{href:"/filter/stories/hot",children:r.jsx(o.H1,{className:"hover:text-cyan-900 dark:hover:text-cyan-400",children:"Truyện Hot"})}),r.jsx(g,{})]}),s?r.jsx("div",{className:"grid grid-cols-5 gap-8",children:(e=s,"all"!==t&&(e=e.filter(e=>e.genres.some(e=>e.slug===t))),e.slice(0,10)).map(e=>r.jsx("div",{children:r.jsx(j,{story:e})},e.id))}):r.jsx(b,{})]})}var N=t(1361);let y=e=>{let s=new Date,t=new Date(e);return w(s.getTime()-t.getTime())},w=e=>{let s=Math.floor(e/6e4),t=Math.floor(e/36e5),r=Math.floor(e/864e5);return 0==s?"V\xe0i gi\xe2y trước":s<60?`${s} ph\xfat trước`:t<24?`${t} giờ trước`:r<7?`${r} ng\xe0y trước`:r<30?`1 th\xe1ng trước`:"Hơn 1 th\xe1ng trước"},_=l.forwardRef(({className:e,...s},t)=>r.jsx("div",{className:"relative w-full overflow-auto",children:r.jsx("table",{ref:t,className:(0,x.cn)("w-full caption-bottom",e),...s})}));_.displayName="Table";let k=l.forwardRef(({className:e,...s},t)=>r.jsx("thead",{ref:t,className:(0,x.cn)("[&_tr]:border-b",e),...s}));k.displayName="TableHeader";let P=l.forwardRef(({className:e,...s},t)=>r.jsx("tbody",{ref:t,className:(0,x.cn)("[&_tr:last-child]:border-0",e),...s}));P.displayName="TableBody",l.forwardRef(({className:e,...s},t)=>r.jsx("tfoot",{ref:t,className:(0,x.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",e),...s})).displayName="TableFooter";let T=l.forwardRef(({className:e,...s},t)=>r.jsx("tr",{ref:t,className:(0,x.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",e),...s}));T.displayName="TableRow";let R=l.forwardRef(({className:e,...s},t)=>r.jsx("th",{ref:t,className:(0,x.cn)("h-12 px-4 text-left align-middle font-bold [&:has([role=checkbox])]:pr-0",e),...s}));R.displayName="TableHead";let $=l.forwardRef(({className:e,...s},t)=>r.jsx("td",{ref:t,className:(0,x.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",e),...s}));function C({readingChapters:e}){return(0,r.jsxs)("div",{children:[r.jsx(o.H1,{children:"Truyện Đang Đọc"}),(0,r.jsxs)(_,{children:[r.jsx(k,{children:(0,r.jsxs)(T,{children:[r.jsx(R,{children:"Ti\xeau Đề"}),r.jsx(R,{className:"w-1/3",children:"Chương Đang Đọc"}),r.jsx(R,{className:"w-2/7",children:"Đọc Lần Cuối"})]})}),r.jsx(P,{className:"text-lg tracking-tighter",children:e.map(e=>(0,r.jsxs)(T,{children:[r.jsx($,{children:r.jsx(d(),{className:"hover:text-blue-700 dark:hover:text-blue-400",href:`/stories/${e.story.slug}`,passHref:!0,children:e.story.title})}),r.jsx($,{children:r.jsx(d(),{className:"hover:text-blue-700 dark:hover:text-blue-400",href:`stories/${e.story.slug}/chapters/${e.id}`,children:e.title})}),r.jsx($,{children:y(e.accessedAt)})]},e.id))})]})]})}$.displayName="TableCell",l.forwardRef(({className:e,...s},t)=>r.jsx("caption",{ref:t,className:(0,x.cn)("mt-4 text-sm text-muted-foreground",e),...s})).displayName="TableCaption";var H=t(4530);function q(){let{data:e}=(0,i.RD)({isNew:!0});if(e)return(0,r.jsxs)(_,{children:[r.jsx(k,{children:(0,r.jsxs)(T,{children:[r.jsx(R,{children:"Ti\xeau Đề"}),r.jsx(R,{className:"w-1/4",children:"Thể Loại"}),r.jsx(R,{className:"w-1/4",children:"Chương Cuối"}),r.jsx(R,{className:"w-1/5",children:"Cập Nhật"})]})}),r.jsx(P,{className:"text-lg tracking-tighter",children:e.slice(0,10).map(e=>(0,r.jsxs)(T,{children:[r.jsx($,{children:r.jsx(d(),{className:"hover:text-blue-700 dark:hover:text-blue-400",href:`/stories/${e.slug}`,passHref:!0,children:e.title})}),r.jsx($,{children:e.genres.map((e,s)=>(0,r.jsxs)("span",{children:[s>0&&", ",r.jsx(d(),{className:"hover:text-blue-700 dark:hover:text-blue-400",href:`/filter/genres/${e.slug}`,passHref:!0,children:e.name})]},e.id))}),r.jsx($,{children:e.latest_chapter?r.jsx(d(),{className:"hover:text-blue-700 dark:hover:text-blue-400",href:`/stories/${e.slug}/chapters/${e.latest_chapter.id}`,children:e.latest_chapter.title}):r.jsx(H.Z,{className:"animate-spin"})}),r.jsx($,{children:e.latest_chapter?y(e.latest_chapter.published_date):r.jsx(H.Z,{className:"animate-spin"})})]},e.id))})]})}function z(){let[e,s]=(0,l.useState)([]);return(0,l.useEffect)(()=>{let e=localStorage.getItem("chapterHistory");e&&s(JSON.parse(e))},[]),(0,r.jsxs)("div",{className:"flex items-stretch",children:[(0,r.jsxs)("div",{className:"w-2/3",children:[r.jsx(d(),{href:"/filter/stories/updated",children:r.jsx(o.H1,{className:"hover:text-cyan-900 dark:hover:text-cyan-400",children:"Truyện Cập Nhật Chương Mới"})}),r.jsx(q,{})]}),(0,r.jsxs)("div",{className:"flex w-1/3 flex-col",children:[e&&r.jsx("div",{children:r.jsx(C,{readingChapters:e})}),r.jsx("div",{className:"grow",children:r.jsx(N.L,{})})]})]})}function D(){let[,e]=(0,a.KO)(f.QD),[,s]=(0,a.KO)(f.X_),{data:t}=(0,i.DG)(),{data:n}=(0,i.Ql)();return(0,l.useEffect)(()=>{t&&e(t)},[t,e]),(0,l.useEffect)(()=>{n&&s(n)},[n,s]),(0,r.jsxs)("div",{className:"container flex flex-col",children:[r.jsx(v,{}),r.jsx(z,{}),r.jsx(p,{})]})}},1361:(e,s,t)=>{"use strict";t.d(s,{L:()=>d});var r=t(2295),a=t(783),l=t.n(a);t(3729);var i=t(6037),n=t(2577);function d(){let{data:e,isLoading:s}=(0,i.DG)();return s?r.jsx("div",{children:"Loading...."}):(0,r.jsxs)("div",{children:[r.jsx(n.H2,{children:"Thể Loại Truyện"}),r.jsx("div",{className:"grid grid-cols-2 gap-2 p-2",children:e?.map(e=>r.jsx(l(),{className:"hover:text-blue-700 dark:hover:text-blue-400",href:`/filter/genres/${e.slug}`,children:e.name},e.id))})]})}},8157:(e,s,t)=>{"use strict";t.d(s,{Bw:()=>f,DI:()=>x,Ph:()=>c,Ql:()=>g,i4:()=>u,ki:()=>h});var r=t(2295),a=t(5428),l=t(5390),i=t(2704),n=t(2312),d=t(3729),o=t(1453);let c=a.fC,x=a.ZA,h=a.B4,u=d.forwardRef(({className:e,children:s,...t},i)=>(0,r.jsxs)(a.xz,{ref:i,className:(0,o.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",e),...t,children:[s,r.jsx(a.JO,{asChild:!0,children:r.jsx(l.Z,{className:"h-4 w-4 opacity-50"})})]}));u.displayName=a.xz.displayName;let p=d.forwardRef(({className:e,...s},t)=>r.jsx(a.u_,{ref:t,className:(0,o.cn)("flex cursor-default items-center justify-center py-1",e),...s,children:r.jsx(i.Z,{className:"h-4 w-4"})}));p.displayName=a.u_.displayName;let m=d.forwardRef(({className:e,...s},t)=>r.jsx(a.$G,{ref:t,className:(0,o.cn)("flex cursor-default items-center justify-center py-1",e),...s,children:r.jsx(l.Z,{className:"h-4 w-4"})}));m.displayName=a.$G.displayName;let f=d.forwardRef(({className:e,children:s,position:t="popper",...l},i)=>r.jsx(a.h_,{children:(0,r.jsxs)(a.VY,{ref:i,className:(0,o.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===t&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:t,...l,children:[r.jsx(p,{}),r.jsx(a.l_,{className:(0,o.cn)("p-1","popper"===t&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:s}),r.jsx(m,{})]})}));f.displayName=a.VY.displayName,d.forwardRef(({className:e,...s},t)=>r.jsx(a.__,{ref:t,className:(0,o.cn)("py-1.5 pl-8 pr-2 font-semibold",e),...s})).displayName=a.__.displayName;let g=d.forwardRef(({className:e,children:s,...t},l)=>(0,r.jsxs)(a.ck,{ref:l,className:(0,o.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2  outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...t,children:[r.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:r.jsx(a.wU,{children:r.jsx(n.Z,{className:"h-4 w-4"})})}),r.jsx(a.eT,{children:s})]}));g.displayName=a.ck.displayName,d.forwardRef(({className:e,...s},t)=>r.jsx(a.Z0,{ref:t,className:(0,o.cn)("-mx-1 my-1 h-px bg-muted",e),...s})).displayName=a.Z0.displayName},8363:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>l,__esModule:()=>a,default:()=>i});let r=(0,t(6843).createProxy)(String.raw`/home/hungthai/WebstormProjects/story-frontend/src/app/(app)/page.tsx`),{__esModule:a,$$typeof:l}=r,i=r.default}};var s=require("../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[129,815,195,368],()=>t(2108));module.exports=r})();