var jList=function(){"use strict";function a(a,b){return a-b}function b(a,b){return b-a}function c(a){return a.replace(/([.?*+\^$\[\]\\(){}\-])/g,"\\$1")}return{listLen:function(a,b){b=typeof b=="undefined"?",":b;return a===""?0:a.split(b).length},listFind:function(a,b,c){c=typeof c=="undefined"?",":c;var d,e=a.split(c);if(e.indexOf!==undefined)return e.indexOf(b)+1;for(d=0;d<a.length;d+=1)if(e[d]===b)return d+1;return 0},listFindNoCase:function(a,b,c){c=typeof c=="undefined"?",":c;a=a.toUpperCase();b=String(b).toUpperCase();return this.listFind(a,b,c)},listGetAt:function(a,b,c){c=typeof c=="undefined"?",":c;var d=a.split(c);return b>=1&&b<=d.length?d[b-1]:""},listFirst:function(a,b){b=typeof b=="undefined"?",":b;return this.listGetAt(a,1,b)},listLast:function(a,b){b=typeof b=="undefined"?",":b;return this.listGetAt(a,this.listLen(a,b),b)},listRest:function(a,b){b=typeof b=="undefined"?",":b;var c=a.split(b);c.splice(0,1);return c.join(b)},listSetAt:function(a,b,c,d){d=typeof d=="undefined"?",":d;if(a==="")return b===1?c:"";var e=a.split(d);if(b>=1&&b<=e.length){e[b-1]=c;return e.join(d)}return a},listDeleteAt:function(a,b,c){c=typeof c=="undefined"?",":c;var d=a.split(c);if(b>=1&&b<=d.length){d.splice(b-1,1);return d.join(c)}return a},listPrepend:function(a,b,c){c=typeof c=="undefined"?",":c;return b+(a!==""?c+a:"")},listAppend:function(a,b,c){c=typeof c=="undefined"?",":c;return(a!==""?a+c:"")+b},listInsertAt:function(a,b,c,d){d=typeof d=="undefined"?",":d;if(a==="")return b===1?c:"";var e=a.split(d);if(b>=1&&b<=e.length){e.splice(b-1,0,c);return e.join(d)}return a},listSort:function(c,d,e,f){d=typeof d=="undefined"?"alpha":d.toLowerCase();e=typeof e=="undefined"?"asc":e.toLowerCase();f=typeof f=="undefined"?",":f;d=d.toLowerCase();e=e.toLowerCase();var g=c.split(f);if(d==="alpha"){g.sort();e==="desc"&&g.reverse()}else e==="asc"?g.sort(a):g.sort(b);return g.join(f)},listQualify:function(a,b,c){b=typeof b=="'"?",":b;c=typeof c=="undefined"?",":c;if(a==="")return a;var d=a.split(c),e=d.length-1;while(e>=0){d[e]=b+d[e]+b;e-=1}return d.join(c)},listReverse:function(a,b){b=typeof b=="undefined"?",":b;var c=a.split(b);c.reverse();return c.join(b)},listRemoveDuplicates:function(a,b){b=typeof b=="undefined"?",":b;var c=a.split(b),d,e,f=c.length,g=[],h={};for(d=0;d<f;d+=1){e=c[d];if(!h[e]){h[e]={};g.push(e)}}return g.join(b)},listRemoveDuplicatesNoCase:function(a,b){b=typeof b=="undefined"?",":b;var c=a.split(b),d,e,f=c.length,g,h=[],i={};for(d=0;d<f;d+=1){e=c[d];g=e.toUpperCase();if(!i[g]){i[g]={};h.push(e)}}return h.join(b)},listChangeDelims:function(a,b,d){d=typeof d=="undefined"?",":d;var e=new RegExp(c(d),"g");return a.replace(e,b)},listValueCount:function(a,b,c){c=typeof c=="undefined"?",":c;b=String(b);var d=a.split(c),e=d.length,f=0;while(e){e-=1;d[e]===b&&(f+=1)}return f},listValueCountNoCase:function(a,b,c){c=typeof c=="undefined"?",":c;a=a.toUpperCase();b=String(b).toUpperCase();return this.listValueCount(a,b,c)}}}();