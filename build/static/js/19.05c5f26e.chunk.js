(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{246:function(t,e,n){"use strict";var a=n(0);e.a=function(t){Object(a.useEffect)(function(){document.title=t,console.log("name")},[t])}},563:function(t,e,n){t.exports={button_flex:"style_button_flex__3LASD",button:"style_button__3oGJm",tag:"style_tag__2hMVD",tag_flex:"style_tag_flex__mdou2",usBoxContainer:"style_usBoxContainer__24N-f",usBox:"style_usBox__3N5uA",usBoxRow:"style_usBoxRow__274UR",formControll:"style_formControll__32vAm",modalContainer:"style_modalContainer__1Dm8m",accept:"style_accept__IyYNU",borderi:"style_borderi__1G9mm"}},692:function(t,e,n){"use strict";n.r(e);var a=n(554),o=n(366),r=n(0),i=n.n(r),l=n(563),s=n.n(l),u=n(35),c=n(66),d=n(246);e.default=function(t){var e=[{title:"name",dataIndex:"storyName",key:"name"},{title:"sprint",dataIndex:"sprint.sprintName",key:"sprint"},{title:"activity",dataIndex:"activity.activityName",key:"activity"},{title:"story point",dataIndex:"storyPoint",key:"storyPoint",sorter:function(t,e){return t.storyPoint-e.storyPoint}},{title:"status",dataIndex:"status",key:"status"},{title:"priority",dataIndex:"priority",key:"priority",filters:[{text:"must",value:"Must"},{text:"should",value:"Should"},{text:"could",value:"Could"}],onFilter:function(t,e){return e.priority.includes(t)}},{title:"is epic",dataIndex:"isEpic",key:"epic",filters:[{text:"false",value:!1},{text:"true",value:!0}],render:function(t){return i.a.createElement(i.a.Fragment,null,t?"yes":"no")},onFilter:function(t,e){return e.isEpic===t}}],n=Object(u.d)(),l=Object(u.e)(function(t){return t.projectStories},u.c),m=l.loading,y=l.stories;return Object(r.useEffect)(function(){n(Object(c.h)(t.match.params.projectId))},[t]),Object(d.a)("project backlog"),i.a.createElement(i.a.Fragment,null,m?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"".concat(s.a.usBox," ")},i.a.createElement("div",{style:{height:"120px",overflow:"hidden",width:"100%",margin:"auto 0"}},i.a.createElement(o.a,{active:!0})))):i.a.createElement(a.a,{rowKey:function(t){return t.storyId},columns:e,expandedRowRender:function(t){return i.a.createElement("div",{style:{margin:0}}," ",i.a.createElement("p",null," ","as:"," ",t.as),i.a.createElement("p",null," ","i want to:"," ",t.iWant)," ",i.a.createElement("p",null," ","so that :"," ",t.soThat))},dataSource:y,pagination:{position:"top"}}))}}}]);
//# sourceMappingURL=19.05c5f26e.chunk.js.map