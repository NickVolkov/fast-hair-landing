/*
 ADOBE CONFIDENTIAL
 ___________________

 Copyright 2011 Adobe Systems Incorporated
 All Rights Reserved.

 NOTICE:  All information contained herein is, and remains
 the property of Adobe Systems Incorporated and its suppliers,
 if any.  The intellectual and technical concepts contained
 herein are proprietary to Adobe Systems Incorporated and its
 suppliers and may be covered by U.S. and Foreign Patents,
 patents in process, and are protected by trade secret or copyright law.
 Dissemination of this information or reproduction of this material
 is strictly forbidden unless prior written permission is obtained
 from Adobe Systems Incorporated.
*/
if(typeof Muse=="undefined")window.Muse={};Muse.Assert={};Muse.Assert.fail=function(a){alert("MuseJSAssert: "+a)};Muse.Assert.assert=function(a,b){if(!a)throw Error(b);};$.extend($.browser,{SafariMobile:navigator.userAgent.toLowerCase().match(/iP(hone|ad|od)/i)});if(!Array.indexOf)Array.prototype.indexOf=function(a){for(var b=0;b<this.length;++b)if(this[b]==a)return b;return-1};Muse.Plugins={};Muse.Utils={};
Muse.Utils.getCssVendorPrefix=function(){if(!Muse.Utils.isDefined(Muse.Utils.getCssVendorPrefix.flag))Muse.Utils.getCssVendorPrefix.flag=/webkit/i.test(navigator.appVersion)?"-webkit":/firefox/i.test(navigator.userAgent)?"-moz":/trident/i.test(navigator.userAgent)?"-ms":"opera"in window?"-o":"";return Muse.Utils.getCssVendorPrefix.flag};Muse.Utils.wrapElement=function(a,b){a.parentNode.replaceChild(b,a);b.appendChild(a)};
Muse.Utils.firstChild=function(a,b){for(var c=0;c<a.childNodes.length;c++){var d=a.childNodes[c];if(d.nodeType==1&&(!b||b.matches(d)))return d}return null};Muse.Utils.firstDescendant=function(a,b,c){for(var d=0;d<a.childNodes.length;d++){var f=a.childNodes[d];if(f.nodeType==1){if(!b||b.matches(f))return f;if(!c||!c.matches(f))if(f=Muse.Utils.firstDescendant(f,b,c))return f}}return null};
Muse.Utils.descendants=function(a,b,c,d){if(!d)d=[],d.forEach=function(a){for(var b=0;b<this.length;b++)if(a(this[b]))break},d.forEachTry=function(a){for(var b=0;b<this.length;b++)try{if(a(this[b]))break}catch(c){}};for(var f=0;f<a.childNodes.length;f++){var g=a.childNodes[f];g.nodeType==1&&((!b||b.matches(g))&&d.push(g),(!c||!c.matches(g))&&Muse.Utils.descendants(g,b,c,d))}return d};Muse.Utils.children=function(a,b){return Muse.Utils.descendants(a,b,Muse.Utils.Match.always)};Muse.Utils.Match={};
Muse.Utils.Match.ByClass=function(a){this.cl=a};Muse.Utils.Match.ByClass.prototype.matches=function(a){return $(a).hasClass(this.cl)};Muse.Utils.Match.ByNodeName=function(a){this.nm=a.toLowerCase()};Muse.Utils.Match.ByNodeName.prototype.matches=function(a){return this.nm==a.nodeName.toLowerCase()};Muse.Utils.Match.ByFixed=function(a){this.matchResult=a};Muse.Utils.Match.ByFixed.prototype.matches=function(){return this.matchResult};Muse.Utils.Match.byClass=function(a){return new Muse.Utils.Match.ByClass(a)};
Muse.Utils.Match.byNodeName=function(a){return new Muse.Utils.Match.ByNodeName(a)};Muse.Utils.Match.byFixed=function(a){return new Muse.Utils.Match.ByFixed(a)};Muse.Utils.Match.always=Muse.Utils.Match.byFixed(!0);Muse.Utils.Match.never=Muse.Utils.Match.byFixed(!1);Muse.Utils.moveChildren=function(a,b){for(;a.childNodes.length>0;)b.appendChild(a.childNodes[0])};Muse.Utils.copyChildren=function(a,b){for(var c=0;c<a.childNodes.length;c++)b.appendChild(a.childNodes[c].cloneNode(!0))};
Muse.Utils.copyChildrenBefore=function(a,b){for(var c=0;c<a.childNodes.length;c++)b.parentNode.insertBefore(a.childNodes[c].cloneNode(!0),b)};Muse.Utils.pixelRound=function(a){return Math.floor((a*100+0.5)/100)};Muse.Utils.getCurrentHTMLFileName=function(a){var b=document.location.href;b.charAt(b.length-1)=="/"?b="index":(b=b.substring(b.lastIndexOf("index.html")+1),b=b.indexOf("#")==0?"index":b.substring(0,b.lastIndexOf(".")));a&&(b+=".html");return b};
Muse.Utils.getPageStyleSheet=function(){for(var a=0;a<document.styleSheets.length;++a){var b=document.styleSheets[a],c=b.ownerNode?b.ownerNode:b.owningElement;if(c&&c.id=="pagesheet")return b}};Muse.Utils.getStyleSheetRuleById=function(a,b){var c="#"+b.toLowerCase();return Muse.Utils.anyStyleSheetRule(a,function(a){return a.toLowerCase()==c})};
Muse.Utils.anyStyleSheetRule=function(a,b){var c=!1,d;try{d=a.cssRules}catch(f){}if(!d)c=!0,d=a.rules;if(!d)return null;for(var g=0;g<d.length;++g){var k=d[g];if(Muse.Utils.isDefined(k.selectorText))if(c){if(b(k.selectorText))return k}else for(var h=k.selectorText.split(/\s*,\s*/),j=0;j<h.length;j++)if(b(h[j]))return k}return null};Muse.Utils.getRuleProperty=function(a,b){return a.style.getPropertyValue?a.style.getPropertyValue(b):a.style.getAttribute(b)};
Muse.Utils.setRuleProperty=function(a,b,c){a.style.setProperty?a.style.setProperty(b,c,""):a.style.setAttribute(b,c,0)};Muse.Utils.removeRuleProperty=function(a,b){a.style.removeProperty?a.style.removeProperty(b):a.style.removeAttribute(b,0)};
Muse.Utils.cloneStyleSheetRule=function(a){if(!Muse.Utils.isDefined(Muse.Utils.cloneStyleSheetRule.newNumber))Muse.Utils.cloneStyleSheetRule.newNumber=1;var b=Muse.Utils.getPageStyleSheet(a),c=Muse.Utils.getStyleSheetRuleById(b,a),d="c"+Muse.Utils.cloneStyleSheetRule.newNumber++,f="#"+d;b.insertRule?b.insertRule(c.cssText.replace("#"+a,f),b.cssRules.length):b.addRule(f,c.style.cssText);return d};
Muse.Utils.toCamelCase=function(a){for(var b=Muse.Utils.toCamelCase.exp;b.test(a);a=a.replace(b,RegExp.$1.toUpperCase()));return a};Muse.Utils.toCamelCase.exp=/-([a-z])/;Muse.Utils.getStyleValue=function(a,b){var c=a.style[Muse.Utils.toCamelCase(b)];c||(document.defaultView?c=document.defaultView.getComputedStyle(a,"").getPropertyValue(b):a.currentStyle&&(c=a.currentStyle[Muse.Utils.toCamelCase(b)]));c&&c.match(/(\d+)px/)&&(c=parseInt(c.substring(0,c.length-2)));return c};
Muse.Utils.getCanvasDirection=function(a,b){var c=a.closest("*[data-rotate]"),c=c.length>0?parseFloat(c.data("rotate"))%360:0;return{dir:c>=0&&c<=45||c>=135&&c<=225||c>=315&&c<360?b:b==="horizontal"?"vertical":"horizontal",reverse:b==="horizontal"?c>=135&&c<=315:c>=45&&c<=225}};Muse.Utils.urlParam=function(a,b){var c=RegExp("[\\?&]"+b+"=([^&#]*)").exec(a);return c?c[1]:null};
Muse.Utils.processHyperlink=function(a){var b=a.href,c=$(window),a=$(a),d=a.attr("target");if(!d||d=="_self"){var f=b.lastIndexOf("index.html"),d=b.lastIndexOf("#"),g=a.attr("class").match(/anim_(\w+)/);if(g&&d>f){var a=c.data("scrollWrapper"),k=b.substring(d),d=Muse.Utils.getAnchorWithDestination(k).offset(),b=g[1],h=a||window,f=document.documentElement||document.body,g=(a?a.scrollHeight():f.scrollHeight)-c.height(),c=(a?a.scrollWidth():f.scrollWidth)-c.width(),j=Math.min(g,d.top+(a&&!a.isStandard()?a.scrollTop():
0)),i=Math.min(c,d.left+(a&&!a.isStandard()?a.scrollLeft():0)),c=function(){h.scrollTo(i,j);try{history.replaceState({})}catch(a){if(!jQuery.browser.msie||jQuery.browser.version>7)window.location.hash=k}};try{history.pushState({},null,k)}catch(l){}if(window.scrollTo||void 0!==a){var a=a||$(document),m=a.scrollLeft(),o=a.scrollTop(),q=m,p=o;$({scrollDistance:0}).animate({scrollDistance:1},{duration:1E3,easing:b,step:function(a){a!=0&&(p=a*(j-o),q=a*(i-m),h.scrollTo(m+q,o+p))},complete:c})}else $("html,body").animate({scrollTop:j,
scrollLeft:i},1E3,b,c);return!1}}(c=Muse.Utils.urlParam(b,"devicelock"))&&Muse.Utils.createCookie("devicelock",c,0);return!0};var actionStack=[];Muse.Utils.redirectCancelled=!1;Muse.Utils.redirectHyperlink=function(a){if(Muse.Utils.redirectCancelled)setTimeout(function(){Muse.Utils.redirectCancelled=!1},0);else if(actionStack=[],Muse.Utils.processHyperlink(a)&&!Muse.Utils.isIBE()){var b=$(a).attr("target");b||(b="_self");window.open(a.href,b)}};
Muse.Utils.redirectHyperlinkInNewTab=function(a,b){if(Muse.Utils.redirectCancelled)setTimeout(function(){Muse.Utils.redirectCancelled=!1},0);else{actionStack=[];thisWindow=window.self;var c=window.open(a);b?c.focus():thisWindow.focus()}};Muse.Utils.isMouseLeftClick=function(a){return a.which==1};Muse.Utils.isMouseMiddleClick=function(a){return a.which==2};Muse.Utils.isRedirectLinkKeyboardAction=function(a){return a.which==13};
Muse.Utils.addHyperlinkAnchor=function(a){a=$(a);a.bind("mousedown",function(a){(Muse.Utils.isMouseLeftClick(a)||Muse.Utils.isMouseMiddleClick(a))&&actionStack.push(this)});a.bind("mouseup keyup",function(a){if(Muse.Utils.isMouseLeftClick(a)&&actionStack.indexOf(this)!=-1)a.ctrlKey||a.metaKey?Muse.Utils.redirectHyperlinkInNewTab(this.href,a.shiftKey):Muse.Utils.redirectHyperlink(this);else if(Muse.Utils.isMouseMiddleClick(a)&&actionStack.indexOf(this)!=-1)if(jQuery.browser.webkit||!a.target.href&&
jQuery.browser.msie)Muse.Utils.redirectHyperlinkInNewTab(this.href,a.shiftKey);else return actionStack=[],!0;else Muse.Utils.isRedirectLinkKeyboardAction(a)&&Muse.Utils.redirectHyperlink(this);return!1});Muse.Utils.isIBE()||a.bind("click",function(){return!1})};
Muse.Utils.addHyperlinkBlock=function(a){var b=$(a.parentNode);b.bind("mousedown",function(a){(Muse.Utils.isMouseLeftClick(a)||Muse.Utils.isMouseMiddleClick(a))&&actionStack.push(this);return!1});b.bind("mouseup keyup",function(b){Muse.Utils.isMouseLeftClick(b)&&actionStack.indexOf(this)!=-1?b.ctrlKey||b.metaKey?Muse.Utils.redirectHyperlinkInNewTab(a.href,b.shiftKey):Muse.Utils.redirectHyperlink(a):Muse.Utils.isMouseMiddleClick(b)&&actionStack.indexOf(this)!=-1?Muse.Utils.redirectHyperlinkInNewTab(a.href,
b.shiftKey):Muse.Utils.isRedirectLinkKeyboardAction(b)&&Muse.Utils.redirectHyperlink(a);return!1});Muse.Utils.isIBE()||b.bind("click",function(){return!1})};
Muse.Utils.prepHyperlinks=function(a){$("a.block").each(function(){var a=$(this.parentNode);Muse.Utils.addHyperlinkBlock(this);a.find("a.nonblock").each(function(){var a=$(this);if(a.data("registeredNonBlockLink")===!0)return!1;Muse.Utils.addHyperlinkAnchor(this);a.data("registeredNonBlockLink",!0)})});$("a.nonblock").each(function(){var a=$(this);a.data("registeredNonBlockLink")!==!0&&(a.parent('[class~="sbg"]').length>0?Muse.Utils.addHyperlinkAnchor(this):(a.attr("class").match(/anim_(\w+)/)||this.href.indexOf("devicelock=")!=
-1)&&$(this).bind("click",function(){return Muse.Utils.processHyperlink(this)}))});a&&Muse.Utils.enableAnchorLinksActiveState()};Muse.Utils.pathOnly=function(a){if(!a)return a;return a.replace(/#(?:[^#]+)$/,"").replace(/\?(?:[^\?]+)$/,"")};
Muse.Utils.enableAnchorLinksActiveState=function(){var a=$("#page"),b=a.outerWidth()/a.outerHeight()>2,c=[],a=$(window),d=Muse.Utils.getPageStyleSheet(),f=function(a){var b=a.parent('[class~="sbg"]');if(a.hasClass("MenuItem")||b.hasClass("MenuItem"))return"MuseMenuActive";if(a.hasClass("Button")||b.hasClass("Button"))return"ButtonSelected";return"MuseLinkActive"},g=function(){c.splice(0,c.length);$("a.nonblock,a.block").each(function(){Muse.Utils.saveHyperlinkInfo($(this),f($(this)),d,b,c)});c.sort(function(a,
b){if(a.from<b.from)return-1;if(a.from>b.from)return 1;return 0})};g();if(0!=c.length){var k=!1,h=a.data("scrollWrapper"),j=h||a,i=function(){k=!1;var a=b?j.scrollLeft():j.scrollTop(),d;a:{var i=0;d=c.length;for(var l;i<d;i++)if(l=c[i],l.from<=a&&a<=l.to){d=i;break a}d=-1}var n,s,i=Math.max(0,d);for(d=Math.min(d+2,c.length);i<d;i++)if(n=c[i],l=n.$elem.offset().left+(h&&!h.isStandard()?h.scrollLeft():0),s=n.$elem.offset().top+(h&&!h.isStandard()?h.scrollTop():0),n.from!=(b?l:s)){g();break}i=0;for(d=
c.length;i<d;i++){n=c[i];l=n.from<=a&&a<=n.to;n=n.hyperLinks;s=void 0;for(var v=0;v<n.length;v++)s=f(n[v]),l&&!n[v].hasClass(s)?n[v].addClass(s):!l&&n[v].hasClass(s)&&n[v].removeClass(s)}},l=function(){k||(k=!0,Muse.Utils.requestAnimationFrame(i))};(h=a.data("scrollWrapper"))?h.registerUpdateCallback(l):a.scroll(l);i()}};Muse.Utils.getAnchorWithDestination=function(a){if(!a||!a.replace)return $(a);return $(a.replace(/([\.\:])/gi,"\\$1"))};
Muse.Utils.saveHyperlinkInfo=function(a,b,c,d,f){var g=a.attr("href"),k=Muse.Utils.pathOnly(g),h=-1,j=a.attr("target"),i=window.location.href.replace(/#.*$/i,"");if(g&&-1!=g.indexOf("#")&&!(j&&j!="_self")&&!(0<=k.indexOf("index.html"))&&(i.charAt(i.length-1)=="/"&&(i+="index-2.html"),-1!=i.indexOf("/"+k,i.length-k.length-1))){var k=$(window).data("scrollWrapper"),l=g.substring(g.lastIndexOf("#")),a=a.parent('[class~="sbg"]').length>0||a.hasClass("block")?a.parent():a,m="#"+a.attr("id"),b="."+b;if(null!==Muse.Utils.anyStyleSheetRule(c,
function(a){return 0<=a.indexOf(m+b)||0<=a.indexOf(b+m)})){j=0;for(i=f.length;j<i;j++)if(f[j].href==g){h=j;break}if(-1==h){c=Muse.Utils.getAnchorWithDestination(l);if(c.length===0)return;j=k&&!k.isStandard();d=Math.floor(d?c.offset().left+(j?k.scrollLeft():0):c.offset().top+(j?k.scrollTop():0));k=Number.MAX_VALUE;j=0;for(i=f.length;j<i;j++)if(f[j].href!=g&&f[j].from==d){h=j;break}if(-1==h){j=0;for(i=f.length;j<i;j++){h=f[j];if(h.from<d&&d<h.to){k=h.to;h.to=d-1;break}h.from<=k&&(k=h.from-1)}f.push({hyperLinks:[],
from:d,to:k,$elem:c,href:g});h=f.length-1}}f[h].hyperLinks.push(a)}}};Muse.Utils.isIBE=function(){return Muse.Utils.readCookie("inbrowserediting")=="true"};
Muse.Utils.getNaturalWidth=function(a){var b=-1;a.naturalWidth!=null?b=a.naturalWidth:a.runtimeStyle?(a.runtimeStyle.width="auto",a.runtimeStyle.height="auto",a.runtimeStyle.borderWidth="0",a.runtimeStyle.padding="0",b=a.offsetWidth,a.runtimeStyle.width="",a.runtimeStyle.height="",a.runtimeStyle.borderWidth="",a.runtimeStyle.padding=""):(a=a.cloneNode(!0),a.className="",a.style.width="auto !important",a.style.height="auto !important",a.style.borderWidth="0 !important",a.style.padding="0 !important",
b=a.width);return b};
Muse.Utils.getNaturalHeight=function(a){var b=-1;a.naturalHeight!=null?b=a.naturalHeight:a.runtimeStyle?(a.runtimeStyle.width="auto",a.runtimeStyle.height="auto",a.runtimeStyle.borderWidth="0",a.runtimeStyle.padding="0",b=a.offsetHeight,a.runtimeStyle.width="",a.runtimeStyle.height="",a.runtimeStyle.borderWidth="",a.runtimeStyle.padding=""):(a=a.cloneNode(!0),a.className="",a.style.width="auto !important",a.style.height="auto !important",a.style.borderWidth="0 !important",a.style.padding="0 !important",
b=a.height);return b};Muse.Utils.pieLoading=!1;Muse.Utils.pieFunctionQueue=[];
Muse.Utils.needPIE=function(a){if(Muse.Utils.havePIE)a();else if(Muse.Utils.pieFunctionQueue.push(a),!Muse.Utils.pieLoading)Muse.Utils.pieLoading=!0,a="scripts/pie.html",a[0]=="/"&&(a=location.pathname.indexOf(".html")!=-1?location.pathname.substring(0,location.pathname.lastIndexOf("index.html"))+a:location.pathname+a,a=a.replace(/\/+/g,"index.html")),$.ajax({url:a,dataType:"script",complete:function(){if(Muse.Utils.isDefined(window.PIE)){Muse.Utils.havePIE=!0;Muse.Utils.pieLoading=!1;for(var a=0;a<Muse.Utils.pieFunctionQueue.length;++a)Muse.Utils.pieFunctionQueue[a]()}}})};
Muse.Utils.transformMarkupToFixBrowserProblemsPreInit=function(){jQuery.browser.msie?(jQuery("html").addClass("ie"),jQuery.browser.version<8&&Muse.Utils.changeLItoDIVs(),jQuery.browser.version<=8&&Muse.Utils.monitorCheckboxes()):jQuery.browser.SafariMobile&&jQuery("body").css("-webkit-text-size-adjust","none")};Muse.Utils.monitorCheckboxes=function(){var a=function(a){"checked"==a.attr("checked")?a.removeClass("not_checked").addClass("checked"):a.removeClass("checked").addClass("not_checked")};$(".fld-checkbox input[type=checkbox]").each(function(){a($(this))}).click(function(){a($(this))})};
Muse.Utils.transformMarkupToFixBrowserProblems=function(){Muse.Utils.havePIE=!1;jQuery.browser.msie&&jQuery.browser.version<=9&&(jQuery.browser.version<=9&&(Muse.Utils.addGradientFill(),Muse.Utils.addShadows()),jQuery.browser.version<9&&(Muse.Utils.applyIEFilterToPNGImages(),Muse.Utils.addRoundedCorners(),Muse.Utils.addRGBA(),Muse.Utils.removeEdgeAnimationBorderForIE78()),jQuery.browser.version<8&&Muse.Utils.fixWidthsForClearingInIE7());(jQuery.browser.msie&&jQuery.browser.version<9||jQuery.browser.webkit)&&
Muse.Utils.insertEmptyDivAfterPinnedColumnElements();Muse.Utils.fixTransformRotations();Muse.Utils.fixImageFramesWithRoundedCorners();Muse.Utils.fixSVGImages()};Muse.Utils.fixSVGImages=function(){var a=document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),b=$("html");a?b.addClass("svg"):(b.removeClass("svg"),$("body img").each(function(){var a=$(this),b=a.data("mu-svgfallback");b&&a.attr("src",b)}))};
Muse.Utils.applyIEFilterToPNGImages=function(){jQuery.browser.msie&&jQuery.browser.version<9&&$("body *").not(".museBgSizePolyfill img,.f3s_top,.f3s_mid,.f3s_bot").each(function(){var a=$(this);if(!a.data("mu-ie-matrix")&&(a.css("background-image").match(/\b.png/i)||this.nodeName&&this.nodeName.toLowerCase()=="img"&&a.attr("src").match(/\b.png/i))){var b=a.css("filter");a.css("filter",b?b+" progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF)":"progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF)")}})};
Muse.Utils.insertEmptyDivAfterPinnedColumnElements=function(){$(".pinned-colelem").each(function(){$("<div class='colelem'/>").insertAfter($(this))})};Muse.Utils.fixPNGImages=function(){$("body *").each(function(){var a=this,b=$(a);(b.css("background-image").match(/\b.png/i)||a.nodeName&&a.nodeName.toLowerCase()=="img"&&b.attr("src").match(/\b.png/i))&&Muse.Utils.needPIE(function(){b.css("-pie-png-fix","true");PIE.attach(a)})})};
Muse.Utils.addGradientFill=function(){$(".gradient").each(function(){var a=this;Muse.Utils.needPIE(function(){PIE.attach(a)})})};Muse.Utils.addShadows=function(){$(".shadow").each(function(){var a=this,b=$(a);Muse.Utils.needPIE(function(){b.data("mu-ie-matrix")||PIE.attach(a)})})};
Muse.Utils.fixImageFramesWithRoundedCorners=function(){Muse.Browser.Features.checkCSSFeature("border-radius")&&Muse.Browser.Features.checkCSSFeature("-webkit-border-radius")&&$(".rounded-corners").each(function(){if($(this).hasClass("clip_frame")){var a=Muse.Utils.firstDescendant(this,Muse.Utils.Match.byNodeName("img"));a&&$(a).wrap('<div class="clip_frame"></div>')}})};
Muse.Utils.addRoundedCorners=function(){$(".rounded-corners").each(function(){var a=this;Muse.Utils.needPIE(function(){var b=$(a);if(!b.data("mu-ie-matrix")){var c=b.css("filter");if(!c||!(c.toLowerCase().indexOf("opacity")>0&&c.indexOf("=100")<0)){if(a.childNodes.length&&!Muse.Browser.Features.checkCSSFeature("border-radius")&&(c=Muse.Utils.firstChild(a))&&c.nodeName.toLowerCase()=="img"){var c=$(c),d=c.attr("src"),f=b.css("background-color")+" ",g=c.css("margin-left");if(g=="0px"||g=="auto")g=c.css("padding-left");
var k=c.css("margin-top");if(k=="0px"||k=="auto")k=c.css("padding-top");c.css("visibility","hidden");b.css("background",f+"url("+d+") no-repeat "+g+" "+k)}if(jQuery.browser.msie&&jQuery.browser.version<8&&(b.css("border-left-width")==0||b.css("border-left-style")=="none")&&(b.css("border-right-width")==0||b.css("border-right-style")=="none")&&(b.css("border-top-width")==0||b.css("border-top-style")=="none")&&(b.css("border-bottom-width")==0||b.css("border-bottom-style")=="none"))b.css({"border-right-width":"1px",
"border-right-style":"solid","border-right-color":b.css("background-color")}),b.width(b.width()-1);PIE.attach(a)}}})})};Muse.Utils.addRGBA=function(){$(".rgba-background").each(function(){var a=this;Muse.Utils.needPIE(function(){PIE.attach(a)})})};Muse.Utils.resizeHeight=function(){$(".browser_width").each(function(){var a=$(this),b=a;a.parent().hasClass("sbg")&&(b=a.parent());a=$(a.children()[0]);a.css("position")!="fixed"&&(b.height(a.outerHeight()),a.watch("height",function(){b.height($(this).outerHeight())}))})};
Muse.Utils.fixWidthsForClearingInIE7=function(){$(".colelem").each(function(){var a=$(this).offset().left-$(this).parent().offset().left;if($(this).width()<1||$(this).width()+a<1)$(this).css("width",(a<0?1-a:1)+"px")})};Muse.Utils.removeEdgeAnimationBorderForIE78=function(){$(".animationContainer").each(function(){$(this).parent().html(function(a,b){return b.replace(/><\/iframe>$/gi,' frameBorder="0"></iframe>')})})};
Muse.Utils.initializeAnimations=function(a){var b=function(b){if(!0===a){var d=b.contents();$("#report-abuse",d).remove();$("#report-abuse-spacer",d).remove()}b.removeClass("an_invi")};$(".animationContainer").each(function(){var a=$(this);Muse.Utils.isIBE()||this.contentDocument&&"complete"==this.contentDocument.readyState?b(a):a.load(function(){b(a)})})};
Muse.Utils.fixTransformRotations=function(){Muse.Browser.Features.checkCSSFeature("transform")||$("*[data-mu-ie-matrix]").each(function(){var a=$(this),b=a.parent(),c=Math.round(a.data("mu-ie-matrix-dx")),d=Math.round(a.data("mu-ie-matrix-dy")),f=b.innerHeight(),g=b.innerWidth();a.css({filter:function(b,c){if(c)return c+" "+a.data("mu-ie-matrix");return a.data("mu-ie-matrix")},"margin-bottom":"-="+d}).removeClass("shadow");b.css({"margin-bottom":"-="+(b.innerHeight()-f),"margin-right":"-="+(b.innerWidth()-
g)});a.hasClass("actAsDiv")?(a.wrap('<span class="actAsDiv rotateWrapper"></span>'),a.parent().css("float",a.css("float"))):a.hasClass("actAsInlineDiv")?a.wrap('<span class="actAsInlineDiv rotateWrapper"></span>'):a.wrap('<div class="rotateWrapper"></div>');a.parent().css({top:d,left:c,position:"relative","margin-bottom":d})})};Muse.Utils.fullPage=function(a){$(window).data("stickyFooter").init(a)};
Muse.Utils.endsWith=function(a,b){if(!a||!b)return!1;Muse.Assert.assert("string"==typeof a,'Invalid type for "str" argument - expected string.');Muse.Assert.assert("string"==typeof b,'Invalid type for "ending" argument - expected string.');return a.substring(a.length-b.length)==b};Muse.Utils.firstDefined=function(){for(var a=0;a<arguments.length;a++)if(Muse.Utils.isDefined(arguments[a]))return arguments[a]};Muse.Utils.isDefined=function(a){return"undefined"!=typeof a};
Muse.Utils.getCSSIntValue=function(a,b){return Muse.Utils.tryParse(a.css(b),parseInt,0)};Muse.Utils.tryParse=function(a,b,c){if(!Muse.Utils.isDefined(a))return c;a=b(a);return!isNaN(a)?a:c};Muse.Utils.changeLItoDIVs=function(){var a=function(){var a=$(this),c=$("<div/>");c.addClass(a.attr("class"));c.attr("id",a.attr("id"));c.append(a.contents());a.replaceWith(c)};$("ul").each(function(){$(this).find("li").each(a)});$("ul").each(a)};Muse.Utils.initWidget=function(a,b){$(a).each(function(){b(this)})};
Muse.Utils.showWidgetsWhenReady=function(){jQuery(".disn").removeClass("disn");jQuery(".invi").removeClass("invi");jQuery(".widget_invisible").removeClass("widget_invisible")};
Muse.Utils.detachIframesAndObjectsToPauseMedia=function(a){var b=[];$("iframe, object",a).each(function(){var a=$(this);if(!(a.is("iframe")&&a.prop("src")=="")&&(!a.is("object")||!(jQuery.browser.msie&&jQuery.browser.version<9))){var d={};d.$next=a.next();d.$parent=a.parent();jQuery.browser.msie?(d.html=a.wrap("<div id='deleteMeWrapper'/>").parent().html(),a.remove(),d.$parent.children("div #deleteMeWrapper").remove()):(d.$node=a.clone(),a.remove());b.push(d)}});b.length&&a.data("detached",b);$("video",
a).each(function(){if(jQuery.browser.msie&&jQuery.browser.version==9&&this.pause&&this.getAttribute("autoplay")&&this.readyState!=4)$(this).one("play",function(){this.pause()});else this.pause&&!this.paused&&this.pause()})};
Muse.Utils.attachIframesAndObjectsToResumeMedia=function(a){var b=a.data("detached");if(b){for(var c=b.length-1;c>=0;c--){var d=b[c];!d.$next||d.$next.length==0?d.$parent.append(d.$node?d.$node:d.html):d.$next.before(d.$node?d.$node:d.html);d.$next=d.$parent=d.$node=d.html=void 0}a.data("detached",null)}$("video",a).each(function(){if(this.play&&this.getAttribute("autoplay")&&this.paused)this.currentTime=0,this.play()})};
(function(a){a(window);var b=a("html"),c=["src"],d=["hidpi-src","src"],f=a(".hidpi_button"),g=function(){this._mode="standard"};g.swapSources=function(a,b,c){var d=a.data(b);d&&!("src"==b&&a.hasClass("ImageInclude")&&"images/blank.gif"==a.attr("src")&&a.parents(".SlideShowWidget").length)&&("src"==c&&!a.data(c)&&a.data(c,a.attr("src")),a.attr("src",d))};g.isRetina=function(){if(1.5<=window.devicePixelRatio)return!0;if(window.matchMedia&&window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-resolution: 1.5dppx)").matches)return!0;
return!1}();g.shouldUseCookie=0<f.length;g.getResolutionPreference=function(){return Muse.Utils.readCookie("museresolution")};g.saveResolutionPreference=function(a){Muse.Utils.createCookie("museresolution",a)};g.prototype.initializeHiDPIButton=function(){if(g.isRetina){var a=this;f.removeClass("unavailable").click(function(){switch(a._mode){case "standard":a.hidpiMode();break;case "hidpi":a.standardMode();break;default:Muse.Assert.assert(!1,"Unknown mode: "+a._mode)}})}};g.prototype.activate=function(){this.initializeHiDPIButton();
g.isRetina&&(!g.shouldUseCookie||"hidpi"==g.getResolutionPreference())?this.hidpiMode():this.standardMode()};g.prototype.getCurrentMode=function(){return this._mode};g.prototype.setCurrentMode=function(a){this._mode=a;if(g.isRetina){switch(a){case "standard":f.removeClass("on").addClass("off");break;case "hidpi":f.removeClass("off").addClass("on");break;default:Muse.Assert.assert(!1,"Unknown mode: "+a)}g.shouldUseCookie&&g.saveResolutionPreference(a)}};g.prototype.standardMode=function(){this.setCurrentMode("standard");
b.removeClass("hidpi");a("img").each(function(){g.swapSources(a(this),"src","hidpi-src")})};g.prototype.hidpiMode=function(){this.setCurrentMode("hidpi");b.addClass("hidpi");a("img").each(function(){g.swapSources(a(this),"hidpi-src","src")})};g.prototype.getDataSrcAttrName=function(){return"standard"==this._mode?c:d};a(window).data("ResolutionManager",new g)})(jQuery);Muse.Utils.detectScreenResolution=function(){$(window).data("ResolutionManager").activate()};
Muse.Utils.createCookie=function(a,b,c){if(c){var d=new Date;d.setTime(d.getTime()+c*864E5);c="; expires="+d.toGMTString()}else c="";document.cookie=a+"="+b+c+"; path=/"};Muse.Utils.readCookie=function(a){a+="=";for(var b=document.cookie.split(";"),c=0;c<b.length;c++){for(var d=b[c];d.charAt(0)==" ";)d=d.substring(1,d.length);if(d.indexOf(a)==0)return d.substring(a.length,d.length)}return null};Muse.Utils.eraseCookie=function(a){createCookie(a,"",-1)};Muse.Browser={};
Muse.Browser.domPrefixes=["Webkit","Moz","O","ms","Khtml"];Muse.Browser.Features={};
Muse.Browser.Features.Touch=function(){if(navigator.maxTouchPoints>0)return{Start:"pointerDown",End:"pointerUp",Move:"pointerMove",Listener:function(a){return function(b){var c=b.originalEvent||b;if(c.pointerType!=c.POINTER_TYPE_MOUSE)return a.apply(this,arguments)}}};else for(var a=0,b=Muse.Browser.domPrefixes.length;a<b;a++){var c=Muse.Browser.domPrefixes[a];if(c+"MaxTouchPoints"in navigator&&navigator[c+"MaxTouchPoints"])return c=c.toUpperCase(),{Start:c+"PointerDown",End:c+"PointerUp",Move:c+
"PointerMove",Listener:function(a){return function(b){var d=b.originalEvent||b;if(d.pointerType!=d[c+"POINTER_TYPE_MOUSE"])return a.apply(this,arguments)}}}}try{return document.createEvent("TouchEvent"),{Start:"touchstart",End:"touchend",Move:"touchmove",Listener:function(a){return a}}}catch(d){}return!1}();
Muse.Browser.Features.checkCSSFeature=function(a,b){var c=Muse.Utils.toCamelCase(a),b=b||document.createElement("div");if(c in b.style)return!0;for(var c=c.charAt(0).toUpperCase()+c.substr(1),d=0,f=Muse.Browser.domPrefixes.length;d<f;d++)if(Muse.Browser.domPrefixes[d]+c in b.style)return Muse.Browser.domPrefixes[d];return!1};
Muse.Browser.Features.checkCSSValueCompatibility=function(a,b){var c=document.createElement("div"),a=Muse.Utils.toCamelCase(a),d=Muse.Browser.Features.checkCSSFeature(a,c);if(d)d!==!0&&(a=d+a.charAt(0).toUpperCase()+a.substr(1));else return!1;d=c.style[a];c.style[a]=b;if(c.style[a]!==d||b===d)return!0;for(var f=0;f<Muse.Browser.domPrefixes.length;f++){var g="-"+Muse.Browser.domPrefixes[f].toLowerCase()+"-"+b;c.style[a]=g;if(c.style[a]!==d)return Muse.Browser.domPrefixes[f]}return!1};
Muse.Browser.Bugs={};
Muse.Browser.Bugs.ClearNeedsOuterWidth=function(){var a=document.createElement("div");a.id="mbbcnow00";a.innerHTML='<div>a</div><style type="text/css">#mbbcnow00{position:absolute;top:-9999px;left:-9999px;visibility:hidden;} #mbbcnow01{width:1px;margin-right:-9999px;float:left} #mbbcnow02{clear:left;}</style>';var b=document.createElement("div"),c=document.createElement("div");document.body.appendChild(a);a.appendChild(b);a.appendChild(c);b.innerHTML="a";b.id="mbbcnow01";c.innerHTML="b";c.id="mbbcnow02";
b=c.getBoundingClientRect().top-b.getBoundingClientRect().top;document.body.removeChild(a);return b<1}();Muse.Browser.Bugs.CannotHandleClearBoth=function(){return jQuery.browser.msie&&7==jQuery.browser.version}();
Muse.Browser.Bugs.ScrollWidthHeightIncludesBorder=function(){var a=!1,b=$("<div>").css({border:"1px solid #000000;",width:100,height:100,position:"absolute",top:-99999,left:-99999,padding:0,margin:0,overflow:"auto"}).appendTo(document.body)[0];b.scrollHeight!==b.clientHeight&&(a=!0);$(b).remove();return a}();
(function(a){var b=a(window),c=a("body"),d=function(){this.pendingRequest=void 0;this.enabled=!0};d.prototype.init=function(d){this.$spacer=a(d+" .verticalspacer");this.$page=a(d);this.spacerMinHeight=1;this.$spacer.css("min-height",this.spacerMinHeight);this.$spacer.height()<this.spacerMinHeight&&this.$spacer.height(Math.floor(this.spacerMinHeight+1));this.spacerHeight=this.$spacer.height();this.pageMarginTop=Muse.Utils.getCSSIntValue(c,"padding-top")+Muse.Utils.getCSSIntValue(c,"margin-top");this.pageMarginBottom=
Muse.Utils.getCSSIntValue(c,"padding-bottom")+Muse.Utils.getCSSIntValue(c,"margin-bottom");this.pageResizeWatchEnabled=!0;this.alwaysVertScroll=c.hasClass("always_vert_scroll");this.updateSpacerMargin=0!=Muse.Utils.getCSSIntValue(this.$spacer,"margin-bottom");var g=this;if(Muse.Browser.Bugs.CannotHandleClearBoth&&0!=Muse.Utils.getCSSIntValue(this.$spacer,"margin-bottom"))this.$spacer.css("margin-bottom",0),this.updateSpacerMargin=!1;this.calculateInitialSpacerHeight();this.$page.watch("height",function(){g.onPageHeightChanged()});
b.resize(function(){g.doUpdate()});this.initialized=!0;this.doUpdate(this.pendingRequest)};d.prototype.updateScrollClass=function(a){var a=this.spacerMinHeight<Math.floor(a*100)/100,b=!1;this.alwaysVertScroll||(a&&!c.hasClass("no_vert_scroll")?(c.addClass("no_vert_scroll"),b=!0):!a&&c.hasClass("no_vert_scroll")&&(c.removeClass("no_vert_scroll"),b=!0));b&&this.$spacer.css("height")};d.prototype.doUpdate=function(a){if(this.enabled)if(this.initialized){parseInt(a)||(a=0);this.updateSpacerMargin&&this.$spacer.css("margin-bottom",
-(this.$spacer.offset().top-this.pageMarginTop));var c=this.$page.outerHeight(!0),d=c-this.spacerHeight,a=Math.max(this.spacerMinHeight,b.height()-this.pageMarginTop-this.pageMarginBottom-d-a);if(a!=this.spacerHeight){this.pageResizeWatchEnabled=!1;this.updateScrollClass(a);this.$spacer.css("height",a);if(a<this.spacerHeight&&c==this.$page.outerHeight(!0))a=this.spacerHeight,this.updateScrollClass(a),this.$spacer.css("height",a);this.pageResizeWatchEnabled=!0}return this.spacerHeight=a}else this.pendingRequest=
a};d.prototype.calculateInitialSpacerHeight=function(){for(var a=0,b=0;b++<20;){var c=this.doUpdate();if(c<=a)break;a=c}};d.prototype.onPageHeightChanged=function(a){this.pageResizeWatchEnabled&&this.doUpdate(a)};d.prototype.enable=function(){this.enabled=!0};d.prototype.disable=function(){this.enabled=!1};b.data("stickyFooter",new d("#page"))})(jQuery);
Muse.Utils.requestAnimationFrame=function(){return window.webkitRequestAnimationFrame&&window.webkitRequestAnimationFrame.bind(window)||window.mozRequestAnimationFrame&&window.mozRequestAnimationFrame.bind(window)||window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||function(a){window.setTimeout(a,20)}}();
Muse.Utils.animationFrameFx=function(a,b){var c=a.fx;a.extend(c,a.fx);var d,f=a(b).data("stickyFooter"),g=function(){d&&(Muse.Utils.requestAnimationFrame(g),c.tick(),f.doUpdate())};c.timer=function(b){b()&&a.timers.push(b)&&!d&&(d=!0,g())};c.stop=function(){d=!1};a.fn.animationFrameFx=c}(jQuery,this);
;(function(){if(!("undefined"==typeof Muse||"undefined"==typeof Muse.assets)){var a=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]==b)return c;return-1}(Muse.assets.required,"museutils.html");if(-1!=a){Muse.assets.required.splice(a,1);for(var a=document.getElementsByTagName("meta"),b=0,c=a.length;b<c;b++){var d=a[b];if("generator"==d.getAttribute("name")){"2014.2.1.284"!=d.getAttribute("content")&&Muse.assets.outOfDate.push("museutils.html");break}}}}})();
