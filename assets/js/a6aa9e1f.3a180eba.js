"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7643],{2783:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});a(6540);var i=a(4164),n=a(7639),r=a(6644),o=a(8630),s=a(1866),l=a(4934),d=a(1210),c=a(4331),g=a(1141),p=a(8806),u=a(4848);function m(e){const t=(0,p.k)(e);return(0,u.jsx)(g.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function h(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,n.A)(),{blogDescription:i,blogTitle:o,permalink:s}=t,l="/"===s?a:o;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.be,{title:l,description:i}),(0,u.jsx)(d.A,{tag:"blog_posts_list"})]})}function b(e){const{metadata:t,items:a,sidebar:i}=e;return(0,u.jsxs)(s.A,{sidebar:i,children:[(0,u.jsx)(c.A,{items:a}),(0,u.jsx)(l.A,{metadata:t})]})}function f(e){return(0,u.jsxs)(r.e3,{className:(0,i.A)(o.G.wrapper.blogPages,o.G.page.blogListPage),children:[(0,u.jsx)(h,{...e}),(0,u.jsx)(m,{...e}),(0,u.jsx)(b,{...e})]})}},4934:(e,t,a)=>{a.d(t,{A:()=>o});a(6540);var i=a(3230),n=a(3555),r=a(4848);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,i.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,r.jsx)(n.A,{permalink:a,title:(0,r.jsx)(i.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),o&&(0,r.jsx)(n.A,{permalink:o,title:(0,r.jsx)(i.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},4331:(e,t,a)=>{a.d(t,{A:()=>o});a(6540);var i=a(8322),n=a(4255),r=a(4848);function o(e){let{items:t,component:a=n.A}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(i.i,{content:t,children:(0,r.jsx)(a,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},8806:(e,t,a)=>{a.d(t,{k:()=>c,J:()=>g});var i=a(8180),n=a(7639),r=a(3512);var o=a(8322);const s=e=>new Date(e).toISOString();function l(e){const t=e.map(p);return{author:1===t.length?t[0]:t}}function d(e,t,a){return e?{image:u({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function c(e){const{siteConfig:t}=(0,n.A)(),{withBaseUrl:a}=(0,i.hH)(),{metadata:{blogDescription:r,blogTitle:o,permalink:c}}=e,g=`${t.url}${c}`;return{"@context":"https://schema.org","@type":"Blog","@id":g,mainEntityOfPage:g,headline:o,description:r,blogPost:e.items.map((e=>function(e,t,a){const{assets:i,frontMatter:n,metadata:r}=e,{date:o,title:c,description:g,lastUpdatedAt:p}=r,u=i.image??n.image,m=n.keywords??[],h=`${t.url}${r.permalink}`,b=p?s(p):void 0;return{"@type":"BlogPosting","@id":h,mainEntityOfPage:h,url:h,headline:c,name:c,description:g,datePublished:o,...b?{dateModified:b}:{},...l(r.authors),...d(u,a,c),...m?{keywords:m}:{}}}(e.content,t,a)))}}function g(){const e=function(){const e=(0,r.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:a}=(0,o.e)(),{siteConfig:c}=(0,n.A)(),{withBaseUrl:g}=(0,i.hH)(),{date:p,title:u,description:m,frontMatter:h,lastUpdatedAt:b}=a,f=t.image??h.image,x=h.keywords??[],j=b?s(b):void 0,A=`${c.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":A,mainEntityOfPage:A,url:A,headline:u,name:u,description:m,datePublished:p,...j?{dateModified:j}:{},...l(a.authors),...d(f,g,u),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${c.url}${e.blogBasePath}`,name:e.blogTitle}}}function p(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function u(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}}}]);