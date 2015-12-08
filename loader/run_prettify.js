!function(){/*

 Copyright (C) 2006 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var r=null;
(function(){function Z(e){function k(){try{K.doScroll("left")}catch(e){Q(k,50);return}w("poll")}function w(k){if(!(k.type=="readystatechange"&&t.readyState!="complete")&&((k.type=="load"?m:t)[A](o+k.type,w,!1),!l&&(l=!0)))e.call(m,k.type||k)}var X=t.addEventListener,l=!1,D=!0,v=X?"addEventListener":"attachEvent",A=X?"removeEventListener":"detachEvent",o=X?"":"on";if(t.readyState=="complete")e.call(m,"lazy");else{if(t.createEventObject&&K.doScroll){try{D=!m.frameElement}catch(B){}D&&k()}t[v](o+"DOMContentLoaded",
w,!1);t[v](o+"readystatechange",w,!1);m[v](o+"load",w,!1)}}function R(){S&&Z(function(){var e=L.length;$(e?function(){for(var k=0;k<e;++k)(function(e){Q(function(){m.exports[L[e]].apply(m,arguments)},0)})(k)}:void 0)})}for(var m=window,Q=m.setTimeout,t=document,K=t.documentElement,M=t.head||t.getElementsByTagName("head")[0]||K,A="",B=t.getElementsByTagName("script"),l=B.length;--l>=0;){var N=B[l],T=N.src.match(/^[^#?]*\/run_prettify\.js(\?[^#]*)?(?:#.*)?$/);if(T){A=T[1]||"";N.parentNode.removeChild(N);
break}}var S=!0,E=[],O=[],L=[];A.replace(/[&?]([^&=]+)=([^&]+)/g,function(e,k,w){w=decodeURIComponent(w);k=decodeURIComponent(k);k=="autorun"?S=!/^[0fn]/i.test(w):k=="lang"?E.push(w):k=="skin"?O.push(w):k=="callback"&&L.push(w)});l=0;for(A=E.length;l<A;++l)(function(){var e=t.createElement("script");e.onload=e.onerror=e.onreadystatechange=function(){if(e&&(!e.readyState||/loaded|complete/.test(e.readyState)))e.onerror=e.onload=e.onreadystatechange=r,--P,P||Q(R,0),e.parentNode&&e.parentNode.removeChild(e),
e=r};e.type="text/javascript";e.src="https://cdn.rawgit.com/google/code-prettify/master/loader/lang-"+encodeURIComponent(E[l])+".js";M.insertBefore(e,M.firstChild)})(E[l]);for(var P=E.length,B=[],l=0,A=O.length;l<A;++l)B.push("https://cdn.rawgit.com/google/code-prettify/master/loader/skins/"+encodeURIComponent(O[l])+".css");B.push("https://cdn.rawgit.com/google/code-prettify/master/loader/prettify.css");(function(e){function k(l){if(l!==w){var m=t.createElement("link");m.rel="stylesheet";m.type="text/css";
if(l+1<w)m.error=m.onerror=function(){k(l+1)};m.href=e[l];M.appendChild(m)}}var w=e.length;k(0)})(B);var $=function(){window.PR_SHOULD_USE_CONTINUATION=!0;var e;(function(){function k(a){function d(f){var b=f.charCodeAt(0);if(b!==92)return b;var a=f.charAt(1);return(b=u[a])?b:"0"<=a&&a<="7"?parseInt(f.substring(1),8):a==="u"||a==="x"?parseInt(f.substring(2),16):f.charCodeAt(1)}function h(f){if(f<32)return(f<16?"\\x0":"\\x")+f.toString(16);f=String.fromCharCode(f);return f==="\\"||f==="-"||f==="]"||
f==="^"?"\\"+f:f}function b(f){var b=f.substring(1,f.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),f=[],a=b[0]==="^",c=["["];a&&c.push("^");for(var a=a?1:0,g=b.length;a<g;++a){var i=b[a];if(/\\[bdsw]/i.test(i))c.push(i);else{var i=d(i),n;a+2<g&&"-"===b[a+1]?(n=d(b[a+2]),a+=2):n=i;f.push([i,n]);n<65||i>122||(n<65||i>90||f.push([Math.max(65,i)|32,Math.min(n,90)|32]),n<97||i>122||f.push([Math.max(97,i)&-33,Math.min(n,122)&-33]))}}f.sort(function(f,
a){return f[0]-a[0]||a[1]-f[1]});b=[];g=[];for(a=0;a<f.length;++a)i=f[a],i[0]<=g[1]+1?g[1]=Math.max(g[1],i[1]):b.push(g=i);for(a=0;a<b.length;++a)i=b[a],c.push(h(i[0])),i[1]>i[0]&&(i[1]+1>i[0]&&c.push("-"),c.push(h(i[1])));c.push("]");return c.join("")}function e(f){for(var a=f.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),c=a.length,d=[],g=0,i=0;g<c;++g){var n=a[g];n==="("?++i:"\\"===n.charAt(0)&&(n=+n.substring(1))&&(n<=i?
d[n]=-1:a[g]=h(n))}for(g=1;g<d.length;++g)-1===d[g]&&(d[g]=++k);for(i=g=0;g<c;++g)n=a[g],n==="("?(++i,d[i]||(a[g]="(?:")):"\\"===n.charAt(0)&&(n=+n.substring(1))&&n<=i&&(a[g]="\\"+d[n]);for(g=0;g<c;++g)"^"===a[g]&&"^"!==a[g+1]&&(a[g]="");if(f.ignoreCase&&F)for(g=0;g<c;++g)n=a[g],f=n.charAt(0),n.length>=2&&f==="["?a[g]=b(n):f!=="\\"&&(a[g]=n.replace(/[A-Za-z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return a.join("")}for(var k=0,F=!1,j=!1,H=0,c=a.length;H<c;++H){var p=
a[H];if(p.ignoreCase)j=!0;else if(/[a-z]/i.test(p.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){F=!0;j=!1;break}}for(var u={b:8,t:9,n:10,v:11,f:12,r:13},q=[],H=0,c=a.length;H<c;++H){p=a[H];if(p.global||p.multiline)throw Error(""+p);q.push("(?:"+e(p)+")")}return RegExp(q.join("|"),j?"gi":"g")}function l(a,d){function h(a){var c=a.nodeType;if(c==1){if(!b.test(a.className)){for(c=a.firstChild;c;c=c.nextSibling)h(c);c=a.nodeName.toLowerCase();if("br"===c||"li"===c)e[j]="\n",F[j<<1]=k++,
F[j++<<1|1]=a}}else if(c==3||c==4)c=a.nodeValue,c.length&&(c=d?c.replace(/\r\n?/g,"\n"):c.replace(/[\t\n\r ]+/g," "),e[j]=c,F[j<<1]=k,k+=c.length,F[j++<<1|1]=a)}var b=/(?:^|\s)nocode(?:\s|$)/,e=[],k=0,F=[],j=0;h(a);return{a:e.join("").replace(/\n$/,""),d:F}}function m(a,d,h,b){d&&(a={a:d,e:a},h(a),b.push.apply(b,a.g))}function t(a){for(var d=void 0,h=a.firstChild;h;h=h.nextSibling)var b=h.nodeType,d=b===1?d?a:h:b===3?R.test(h.nodeValue)?a:d:d;return d===a?void 0:d}function D(a,d){function h(a){for(var j=
a.e,k=[j,"pln"],c=0,p=a.a.match(e)||[],u={},q=0,f=p.length;q<f;++q){var C=p[q],z=u[C],x=void 0,g;if(typeof z==="string")g=!1;else{var i=b[C.charAt(0)];if(i)x=C.match(i[1]),z=i[0];else{for(g=0;g<o;++g)if(i=d[g],x=C.match(i[1])){z=i[0];break}x||(z="pln")}if((g=z.length>=5&&"lang-"===z.substring(0,5))&&!(x&&typeof x[1]==="string"))g=!1,z="src";g||(u[C]=z)}i=c;c+=C.length;if(g){g=x[1];var n=C.indexOf(g),G=n+g.length;x[2]&&(G=C.length-x[2].length,n=G-g.length);z=z.substring(5);m(j+i,C.substring(0,n),h,
k);m(j+i+n,g,B(z,g),k);m(j+i+G,C.substring(G),h,k)}else k.push(j+i,z)}a.g=k}var b={},e;(function(){for(var h=a.concat(d),j=[],o={},c=0,p=h.length;c<p;++c){var u=h[c],q=u[3];if(q)for(var f=q.length;--f>=0;)b[q.charAt(f)]=u;u=u[1];q=""+u;o.hasOwnProperty(q)||(j.push(u),o[q]=r)}j.push(/[\S\s]/);e=k(j)})();var o=d.length;return h}function v(a){var d=[],h=[];a.tripleQuotedStrings?d.push(["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,
r,"'\""]):a.multiLineStrings?d.push(["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,r,"'\"`"]):d.push(["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,r,"\"'"]);a.verbatimStrings&&h.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,r]);var b=a.hashComments;b&&(a.cStyleComments?(b>1?d.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,r,"#"]):d.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\n\r]*)/,
r,"#"]),h.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,r])):d.push(["com",/^#[^\n\r]*/,r,"#"]));a.cStyleComments&&(h.push(["com",/^\/\/[^\n\r]*/,r]),h.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,r]));if(b=a.regexLiterals){var e=(b=b>1?"":"\n\r")?".":"[\\S\\s]";h.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*("+
("/(?=[^/*"+b+"])(?:[^/\\x5B\\x5C"+b+"]|\\x5C"+e+"|\\x5B(?:[^\\x5C\\x5D"+b+"]|\\x5C"+e+")*(?:\\x5D|$))+/")+")")])}(b=a.types)&&h.push(["typ",b]);b=(""+a.keywords).replace(/^ | $/g,"");b.length&&h.push(["kwd",RegExp("^(?:"+b.replace(/[\s,]+/g,"|")+")\\b"),r]);d.push(["pln",/^\s+/,r," \r\n\t\u00a0"]);b="^.[^\\s\\w.$@'\"`/\\\\]*";a.regexLiterals&&(b+="(?!s*/)");h.push(["lit",/^@[$_a-z][\w$@]*/i,r],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,r],["pln",/^[$_a-z][\w$@]*/i,r],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,
r,"0123456789"],["pln",/^\\[\S\s]?/,r],["pun",RegExp(b),r]);return D(d,h)}function A(a,d,h){function b(a){var c=a.nodeType;if(c==1&&!k.test(a.className))if("br"===a.nodeName)e(a),a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)b(a);else if((c==3||c==4)&&h){var d=a.nodeValue,p=d.match(o);if(p)c=d.substring(0,p.index),a.nodeValue=c,(d=d.substring(p.index+p[0].length))&&a.parentNode.insertBefore(j.createTextNode(d),a.nextSibling),e(a),c||a.parentNode.removeChild(a)}}
function e(a){function b(a,c){var d=c?a.cloneNode(!1):a,f=a.parentNode;if(f){var f=b(f,1),h=a.nextSibling;f.appendChild(d);for(var e=h;e;e=h)h=e.nextSibling,f.appendChild(e)}return d}for(;!a.nextSibling;)if(a=a.parentNode,!a)return;for(var a=b(a.nextSibling,0),d;(d=a.parentNode)&&d.nodeType===1;)a=d;c.push(a)}for(var k=/(?:^|\s)nocode(?:\s|$)/,o=/\r\n?|\n/,j=a.ownerDocument,l=j.createElement("li");a.firstChild;)l.appendChild(a.firstChild);for(var c=[l],p=0;p<c.length;++p)b(c[p]);d===(d|0)&&c[0].setAttribute("value",
d);var u=j.createElement("ol");u.className="linenums";for(var d=Math.max(0,d-1|0)||0,p=0,q=c.length;p<q;++p)l=c[p],l.className="L"+(p+d)%10,l.firstChild||l.appendChild(j.createTextNode("\u00a0")),u.appendChild(l);a.appendChild(u)}function o(a,d){for(var h=d.length;--h>=0;){var b=d[h];U.hasOwnProperty(b)?V.console&&console.warn("cannot override language handler %s",b):U[b]=a}}function B(a,d){if(!a||!U.hasOwnProperty(a))a=/^\s*</.test(d)?"default-markup":"default-code";return U[a]}function E(a){var d=
a.h;try{var h=l(a.c,a.i),b=h.a;a.a=b;a.d=h.d;a.e=0;B(d,b)(a);var e=/\bMSIE\s(\d+)/.exec(navigator.userAgent),e=e&&+e[1]<=8,d=/\n/g,k=a.a,o=k.length,h=0,j=a.d,m=j.length,b=0,c=a.g,p=c.length,u=0;c[p]=o;var q,f;for(f=q=0;f<p;)c[f]!==c[f+2]?(c[q++]=c[f++],c[q++]=c[f++]):f+=2;p=q;for(f=q=0;f<p;){for(var v=c[f],z=c[f+1],x=f+2;x+2<=p&&c[x+1]===z;)x+=2;c[q++]=v;c[q++]=z;f=x}c.length=q;var g=a.c,i;if(g)i=g.style.display,g.style.display="none";try{for(;b<m;){var n=j[b+2]||o,G=c[u+2]||o,x=Math.min(n,G),t=j[b+
1],W;if(t.nodeType!==1&&(W=k.substring(h,x))){e&&(W=W.replace(d,"\r"));t.nodeValue=W;var Y=t.ownerDocument,s=Y.createElement("span");s.className=c[u+1];var A=t.parentNode;A.replaceChild(s,t);s.appendChild(t);h<n&&(j[b+1]=t=Y.createTextNode(k.substring(x,n)),A.insertBefore(t,s.nextSibling))}h=x;h>=n&&(b+=2);h>=G&&(u+=2)}}finally{if(g)g.style.display=i}}catch(y){V.console&&console.log(y&&y.stack||y)}}var V=window,I=["break,continue,do,else,for,if,return,while"],J=[[I,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],
"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],K=[J,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],L=[J,"abstract,assert,boolean,byte,extends,finally,final,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],
M=[J,"abstract,as,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,group,implicit,in,interface,internal,into,is,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],J=[J,"debugger,eval,export,function,get,instanceof,null,set,undefined,var,with,Infinity,NaN"],N=[I,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
O=[I,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],I=[I,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],P=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,R=/\S/,S=v({keywords:[K,M,L,J,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",
N,O,I],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),U={};o(S,["default-code"]);o(D([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),
["default-markup","htm","html","mxml","xhtml","xml","xsl"]);o(D([["pln",/^\s+/,r," \t\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,r,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],["pun",/^[/<->]+/],["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",
/^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]);o(D([],[["atv",/^[\S\s]+/]]),["uq.val"]);o(v({keywords:K,hashComments:!0,cStyleComments:!0,types:P}),["c","cc","cpp","cxx","cyc","m"]);o(v({keywords:"null,true,false"}),["json"]);o(v({keywords:M,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:P}),["cs"]);o(v({keywords:L,cStyleComments:!0}),["java"]);o(v({keywords:I,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]);o(v({keywords:N,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),
["cv","py","python"]);o(v({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]);o(v({keywords:O,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]);o(v({keywords:J,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]);o(v({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",
hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);o(D([],[["str",/^[\S\s]+/]]),["regex"]);var T=V.PR={createSimpleLexer:D,registerLangHandler:o,sourceDecorator:v,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:function(a,d,e){var b=document.createElement("div");
b.innerHTML="<pre>"+a+"</pre>";b=b.firstChild;e&&A(b,e,!0);E({h:d,j:e,c:b,i:1});return b.innerHTML},prettyPrint:e=e=function(a,d){function e(){for(var b=V.PR_SHOULD_USE_CONTINUATION?c.now()+250:Infinity;p<o.length&&c.now()<b;p++){for(var d=o[p],l=i,j=d;j=j.previousSibling;){var m=j.nodeType,s=(m===7||m===8)&&j.nodeValue;if(s?!/^\??prettify\b/.test(s):m!==3||/\S/.test(j.nodeValue))break;if(s){l={};s.replace(/\b(\w+)=([\w%+\-.:]+)/g,function(a,b,c){l[b]=c});break}}j=d.className;if((l!==i||f.test(j))&&
!v.test(j)){m=!1;for(s=d.parentNode;s;s=s.parentNode)if(g.test(s.tagName)&&s.className&&f.test(s.className)){m=!0;break}if(!m){d.className+=" prettyprinted";m=l.lang;if(!m){var m=j.match(q),w;if(!m&&(w=t(d))&&x.test(w.tagName))m=w.className.match(q);m&&(m=m[1])}if(z.test(d.tagName))s=1;else var s=d.currentStyle,y=k.defaultView,s=(s=s?s.whiteSpace:y&&y.getComputedStyle?y.getComputedStyle(d,r).getPropertyValue("white-space"):0)&&"pre"===s.substring(0,3);y=l.linenums;if(!(y=y==="true"||+y))y=(y=j.match(/\blinenums\b(?::(\d+))?/))?
y[1]&&y[1].length?+y[1]:!0:!1;y&&A(d,y,s);u={h:m,c:d,j:y,i:s};E(u)}}}p<o.length?Q(e,250):"function"===typeof a&&a()}for(var b=d||document.body,k=b.ownerDocument||document,b=[b.getElementsByTagName("pre"),b.getElementsByTagName("code"),b.getElementsByTagName("xmp")],o=[],l=0;l<b.length;++l)for(var j=0,m=b[l].length;j<m;++j)o.push(b[l][j]);var b=r,c=Date;c.now||(c={now:function(){return+new Date}});var p=0,u,q=/\blang(?:uage)?-([\w.]+)(?!\S)/,f=/\bprettyprint\b/,v=/\bprettyprinted\b/,z=/pre|xmp/i,x=
/^code$/i,g=/^(?:pre|code|xmp)$/i,i={};e()}};typeof define==="function"&&define.amd&&define("google-code-prettify",[],function(){return T})})();return e}();P||Q(R,0)})();}()
