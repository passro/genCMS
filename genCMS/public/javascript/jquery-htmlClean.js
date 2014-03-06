(function(e){function t(e,t,n,r){if(!e.tag.isInline&&n.length>0){n.push("\n");for(i=0;i<r;i++)n.push("	")}}function n(r,i){var s=[],o=r.attributes.length==0,u;if(r.tag.isComment){if(i.allowComments){s.push("<!--");s.push(r.tag.rawAttributes);s.push(">");if(i.format)t(r,i,s,u-1)}}else{var a=this.name.concat(r.tag.rawAttributes==undefined?"":r.tag.rawAttributes);var f=r.tag.render&&(i.allowedTags.length==0||e.inArray(r.tag.name,i.allowedTags)>-1)&&(i.removeTags.length==0||e.inArray(r.tag.name,i.removeTags)==-1);if(!r.isRoot&&f){s.push("<");s.push(r.tag.name);e.each(r.attributes,function(){if(e.inArray(this.name,i.removeAttrs)==-1){var t=RegExp(/^(['"]?)(.*?)['"]?$/).exec(this.value);var n=t[2];var o=t[1]||"'";if(this.name=="class"&&i.allowedClasses.length>0){n=e.grep(n.split(" "),function(t){return e.grep(i.allowedClasses,function(n){return n==t||n[0]==t&&(n.length==1||e.inArray(r.tag.name,n[1])>-1)}).length>0}).join(" ")}if(n!=null&&(n.length>0||e.inArray(this.name,r.tag.requiredAttributes)>-1)){s.push(" ");s.push(this.name);s.push("=");s.push(o);s.push(n);s.push(o)}}})}if(r.tag.isSelfClosing){if(f)s.push(" />");o=false}else if(r.tag.isNonClosing){o=false}else{if(!r.isRoot&&f){s.push(">")}var u=i.formatIndent++;if(r.tag.toProtect){var d=e.htmlClean.trim(r.children.join("")).replace(/<br>/ig,"\n");s.push(d);o=d.length==0}else{var d=[];for(var m=0;m<r.children.length;m++){var g=r.children[m];var y=e.htmlClean.trim(v(h(g)?g:g.childrenToString()));if(p(g)){if(m>0&&y.length>0&&(l(g)||c(r.children[m-1]))){d.push(" ")}}if(h(g)){if(y.length>0){d.push(y)}}else{if(m!=r.children.length-1||g.tag.name!="br"){if(i.format)t(g,i,d,u);d=d.concat(n(g,i))}}}i.formatIndent--;if(d.length>0){if(i.format&&d[0]!="\n")t(r,i,s,u);s=s.concat(d);o=false}}if(!r.isRoot&&f){if(i.format)t(r,i,s,u-1);s.push("</");s.push(r.tag.name);s.push(">")}}if(!r.tag.allowEmpty&&o){return[]}}return s}function r(t,n){return o(t,function(t){return e.inArray(t.tag.nameOriginal,n)>-1})}function s(e){return o(e,function(e){return e.isRoot||!e.tag.isInline})}function o(e,t,n){n=n||1;var r=e[e.length-n];if(t(r)){return true}else if(e.length-n>0&&o(e,t,n+1)){e.pop();return true}return false}function u(e){if(e){this.tag=e;this.isRoot=false}else{this.tag=new f("root");this.isRoot=true}this.attributes=[];this.children=[];this.hasAttribute=function(e){for(var t=0;t<this.attributes.length;t++){if(this.attributes[t].name==e)return true}return false};this.childrenToString=function(){return this.children.join("")};return this}function a(e,t){this.name=e;this.value=t;return this}function f(t,n,r,i){this.name=t.toLowerCase();this.nameOriginal=this.name;this.render=true;this.init=function(){if(this.name=="--"){this.isComment=true;this.isSelfClosing=true}else{this.isComment=false;this.isSelfClosing=e.inArray(this.name,E)>-1;this.isNonClosing=e.inArray(this.name,S)>-1;this.isClosing=n!=undefined&&n.length>0;this.isInline=e.inArray(this.name,m)>-1;this.disallowNest=e.inArray(this.name,g)>-1;this.requiredParent=b[e.inArray(this.name,b)+1];this.allowEmpty=e.inArray(this.name,y)>-1;this.toProtect=e.inArray(this.name,w)>-1}this.rawAttributes=r;this.requiredAttributes=T[e.inArray(this.name,T)+1];if(i){if(!i.tagAttributesCache)i.tagAttributesCache=[];if(e.inArray(this.name,i.tagAttributesCache)==-1){var t=x[e.inArray(this.name,x)+1].slice(0);for(var s=0;s<i.allowedAttributes.length;s++){var o=i.allowedAttributes[s][0];if((i.allowedAttributes[s].length==1||e.inArray(this.name,i.allowedAttributes[s][1])>-1)&&e.inArray(o,t)==-1){t.push(o)}}i.tagAttributesCache.push(this.name);i.tagAttributesCache.push(t)}this.allowedAttributes=i.tagAttributesCache[e.inArray(this.name,i.tagAttributesCache)+1]}};this.init();this.rename=function(e){this.name=e;this.init()};return this}function l(t){while(d(t)&&t.children.length>0){t=t.children[0]}if(!h(t))return false;var n=v(t);return n.length>0&&e.htmlClean.isWhitespace(n.charAt(0))}function c(t){while(d(t)&&t.children.length>0){t=t.children[t.children.length-1]}if(!h(t))return false;var n=v(t);return n.length>0&&e.htmlClean.isWhitespace(n.charAt(n.length-1))}function h(e){return e.constructor==String}function p(e){return h(e)||e.tag.isInline}function d(e){return e.constructor==u}function v(e){return e.replace(/&nbsp;|\n/g," ").replace(/\s\s+/g," ")}e.fn.htmlClean=function(t){return this.each(function(){var n=e(this);if(this.value){this.value=e.htmlClean(this.value,t)}else{this.innerHTML=e.htmlClean(this.innerHTML,t)}})};e.htmlClean=function(t,i){i=e.extend({},e.htmlClean.defaults,i);var o=/(<(\/)?(\w+:)?([\w]+)([^>]*)>)|<!--(.*?--)>/gi;var l=/([\w\-]+)=(".*?"|'.*?'|[^\s>]*)/gi;var c;var p=new u;var d=[p];var v=p;var m=false;if(i.bodyOnly){if(c=/<body[^>]*>((\n|.)*)<\/body>/i.exec(t)){t=c[1]}}t=t.concat("<xxx>");var g;while(c=o.exec(t)){var y=c[6]?new f("--",null,c[6],i):new f(c[4],c[2],c[5],i);var b=t.substring(g,c.index);if(b.length>0){var w=v.children[v.children.length-1];if(v.children.length>0&&h(w=v.children[v.children.length-1])){v.children[v.children.length-1]=w.concat(b)}else{v.children.push(b)}}g=o.lastIndex;if(y.isClosing){if(r(d,[y.name])){d.pop();v=d[d.length-1]}}else{var E=new u(y);var S;while(S=l.exec(y.rawAttributes)){if(S[1].toLowerCase()=="style"&&i.replaceStyles){var x=!y.isInline;for(var T=0;T<i.replaceStyles.length;T++){if(i.replaceStyles[T][0].test(S[2])){if(!x){y.render=false;x=true}v.children.push(E);d.push(E);v=E;y=new f(i.replaceStyles[T][1],"","",i);E=new u(y)}}}if(y.allowedAttributes!=null&&(y.allowedAttributes.length==0||e.inArray(S[1],y.allowedAttributes)>-1)){E.attributes.push(new a(S[1],S[2]))}}e.each(y.requiredAttributes,function(){var e=this.toString();if(!E.hasAttribute(e))E.attributes.push(new a(e,""))});for(var N=0;N<i.replace.length;N++){for(var C=0;C<i.replace[N][0].length;C++){var k=typeof i.replace[N][0][C]=="string";if(k&&i.replace[N][0][C]==y.name||!k&&i.replace[N][0][C].test(c)){y.rename(i.replace[N][1]);N=i.replace.length;break}}}var L=true;if(!v.isRoot){if(v.tag.isInline&&!y.isInline){if(L=s(d)){v=d[d.length-1]}}else if(v.tag.disallowNest&&y.disallowNest&&!y.requiredParent){L=false}else if(y.requiredParent){if(L=r(d,y.requiredParent)){v=d[d.length-1]}}}if(L){v.children.push(E);if(y.toProtect){while(tagMatch2=o.exec(t)){var A=new f(tagMatch2[3],tagMatch2[1],tagMatch2[4],i);if(A.isClosing&&A.name==y.name){E.children.push(RegExp.leftContext.substring(g));g=o.lastIndex;break}}}else{if(!y.isSelfClosing&&!y.isNonClosing){d.push(E);v=E}}}}}return e.htmlClean.trim(n(p,i).join(""))};e.htmlClean.defaults={bodyOnly:true,allowedTags:[],removeTags:["basefont","center","dir","font","frame","frameset","iframe","isindex","menu","noframes","s","strike","u"],allowedAttributes:[],removeAttrs:[],allowedClasses:[],format:false,formatIndent:0,replace:[[["b","big"],"strong"],[["i"],"em"]],replaceStyles:[[/font-weight:\s*bold/i,"strong"],[/font-style:\s*italic/i,"em"],[/vertical-align:\s*super/i,"sup"],[/vertical-align:\s*sub/i,"sub"]],allowComments:false};e.htmlClean.trim=function(t){return e.htmlClean.trimStart(e.htmlClean.trimEnd(t))};e.htmlClean.trimStart=function(t){return t.substring(e.htmlClean.trimStartIndex(t))};e.htmlClean.trimStartIndex=function(t){for(var n=0;n<t.length-1&&e.htmlClean.isWhitespace(t.charAt(n));n++);return n};e.htmlClean.trimEnd=function(t){return t.substring(0,e.htmlClean.trimEndIndex(t))};e.htmlClean.trimEndIndex=function(t){for(var n=t.length-1;n>=0&&e.htmlClean.isWhitespace(t.charAt(n));n--);return n+1};e.htmlClean.isWhitespace=function(t){return e.inArray(t,N)!=-1};var m=["a","abbr","acronym","address","b","big","br","button","caption","cite","code","del","em","font","hr","i","input","img","ins","label","legend","map","q","s","samp","select","option","param","small","span","strike","strong","sub","sup","tt","u","var"];var g=["h1","h2","h3","h4","h5","h6","p","th","td","object"];var y=["th","td"];var b=[null,"li",["ul","ol"],"dt",["dl"],"dd",["dl"],"td",["tr"],"th",["tr"],"tr",["table","thead","tbody","tfoot"],"thead",["table"],"tbody",["table"],"tfoot",["table"],"param",["object"]];var w=["script","style","pre","code"];var E=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"];var S=["!doctype","?xml"];var x=[["class"],"?xml",[],"!doctype",[],"a",["accesskey","class","href","name","title","rel","rev","type","tabindex"],"abbr",["class","title"],"acronym",["class","title"],"blockquote",["cite","class"],"button",["class","disabled","name","type","value"],"del",["cite","class","datetime"],"form",["accept","action","class","enctype","method","name"],"input",["accept","accesskey","alt","checked","class","disabled","ismap","maxlength","name","size","readonly","src","tabindex","type","usemap","value"],"img",["alt","class","height","src","width"],"ins",["cite","class","datetime"],"label",["accesskey","class","for"],"legend",["accesskey","class"],"link",["href","rel","type"],"meta",["content","http-equiv","name","scheme","charset"],"map",["name"],"optgroup",["class","disabled","label"],"option",["class","disabled","label","selected","value"],"q",["class","cite"],"script",["src","type"],"select",["class","disabled","multiple","name","size","tabindex"],"style",["type"],"table",["class","summary"],"th",["class","colspan","rowspan"],"td",["class","colspan","rowspan"],"textarea",["accesskey","class","cols","disabled","name","readonly","rows","tabindex"],"param",["name","value"],"embed",["height","src","type","width"]];var T=[[],"img",["alt"]];var N=[" "," ","	","\n","\r","\f"]})(jQuery)