stuHover=function(){for(var e,t,o=0;o<document.styleSheets.length;o++)for(var s=0;s<document.styleSheets[o].rules.length;s++)-1!=(e=document.styleSheets[o].rules[s]).selectorText.indexOf("LI:hover")&&(t=e.selectorText.replace(/LI:hover/gi,"LI.iehover"),document.styleSheets[o].addRule(t,e.style.cssText));for(var n=document.getElementById("nav").getElementsByTagName("LI"),o=0;o<n.length;o++)n[o].onmouseover=function(){this.className+=" iehover"},n[o].onmouseout=function(){this.className=this.className.replace(new RegExp(" iehover\\b"),"")}},window.attachEvent&&window.attachEvent("onload",stuHover);