/*
	VéritéCo Embed Generator 0.8
	Designed and built by Zach Wise digitalartwork.net
	Date: June 21, 2012
*/function getScriptPath(e){var t=document.getElementsByTagName("script"),n="";for(var r=0;r<t.length;r++)t[r].src.match(e)&&(n=t[r].src);return n.split("?")[0].split("/").slice(0,-1).join("/")+"/"}function getUrlVars(e){var t=[],n,r,i=e.toString();i.match("&#038;")?i=i.replace("&#038;","&"):i.match("&#38;")?i=i.replace("&#38;","&"):i.match("&amp;")&&(i=i.replace("&amp;","&"));i.match("#")&&(i=i.split("#")[0]);r=i.slice(i.indexOf("?")+1).split("&");for(var s=0;s<r.length;s++){n=r[s].split("=");t.push(n[0]);t[n[0]]=n[1]}return t}function getLinkAndIframe(){var e={},t=document.getElementById("embed-source-url"),n=document.getElementById("embed-width"),r=document.getElementById("embed-height"),i=document.getElementById("embed-maptype"),s=document.getElementById("embed-language"),o=document.getElementById("embed_code"),u=document.getElementById("embed-font"),a=document.getElementById("embed-wordpressplugin"),f=document.getElementById("embed-startatend"),l=document.getElementById("embed-hashbookmark"),c=document.getElementById("embed-startzoomadjust"),h=document.getElementById("embed-startatslide"),p=document.getElementById("embed-debug"),d=!1,v=!1,m=!1,g,y,b,w,E;t.value.match("docs.google.com")?E=getUrlVars(t.value).key:t.value==""?E="0Agl_Dv6iEbDadHdKcHlHcTB5bzhvbF9iTWwyMmJHdkE":E=t.value;f.checked&&(d=!0);l.checked&&(v=!0);p.checked&&(m=!0);w="[timeline ";n.value>0&&(w+="width='"+n.value+"' ");r.value>0&&(w+="height='"+n.value+"' ");w+="font='"+u.value+"' ";w+="maptype='"+i.value+"' ";w+="lang='"+s.value+"' ";w+="src='"+t.value+"' ";d&&(w+="start_at_end='"+d+"' ");v&&(w+="hash_bookmark='"+v+"' ");m&&(w+="debug='"+m+"' ");parseInt(h.value,10)>0&&(w+="start_at_slide='"+parseInt(h.value,10)+"' ");parseInt(c.value,10)>0&&(w+="start_zoom_adjust='"+parseInt(c.value,10)+"' ");w+="]";e.wordpress=w;b=embed_path+"?source="+E;b+="&font="+u.value;b+="&maptype="+i.value;b+="&lang="+s.value;d&&(b+="&start_at_end="+d);v&&(b+="&hash_bookmark="+v);m&&(b+="&debug="+m);parseInt(h.value,10)>0&&(b+="&start_at_slide="+parseInt(h.value,10));parseInt(c.value,10)>0&&(b+="&start_zoom_adjust="+parseInt(c.value,10));n.value>0&&(b+="&width="+n.value);r.value>0&&(b+="&height="+r.value);g="<iframe src='"+b+"'";n.value>0&&(g+=" width='"+n.value+"'");r.value>0&&(g+=" height='"+r.value+"'");g+=" frameborder='0'></iframe>";e.iframe=g;e.link=b;a.checked?e.copybox=w:e.copybox=g;return e}function updateEmbedCode(e,t){var n=document.getElementById("embed_code"),r=getLinkAndIframe();n.value=r.copybox;$("#preview-embed-link").attr("href",r.link);$("#preview-embed-iframe").html(r.iframe)}if(typeof embed_path=="undefined"||typeof embed_path=="undefined"){var embed_path=getScriptPath("timeline-embed-generator.js").split("js/")[0];embed_path.match("http")?embed_path=embed_path:embed_path=="/"?embed_path="index.html":embed_path+="index.html"};