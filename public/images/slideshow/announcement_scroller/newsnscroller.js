var titlea = new Array();var texta = new Array();var linka = new Array();var trgfrma = new Array();var heightarr = new Array();var cyposarr = new Array();
cyposarr[0]=0;cyposarr[1]=1;cyposarr[2]=2;cyposarr[3]=3;
titlea[0] = "Internet Filters";texta[0] = "We believe that it is irresponsible for a Christian to surf the internet without content filtering regardless of your age or gender. Here are some recommended sites where you can obtain free content filtering:";linka[0] = "";trgfrma[0] = "_blank";titlea[1] = "FREE!";texta[1] = "For non-technical internet users and parents (Windows or Mac):K9 Content Filter by Blue Coat";linka[1] = "http://www.getk9.com";trgfrma[1] = "_blank";titlea[2] = "FREE!";texta[2] = "Server-based proxy for advanced Linux users:DansGuardian";linka[2] = "http://www.dansguardian.org";trgfrma[2] = "_blank";titlea[3] = "For-pay service:";texta[3] = "Internet proxy service with accountability:HedgeBuilders";linka[3] = "http://www.hedgebuilders.com";trgfrma[3] = "_blank";
var mc=4;

uagent = window.navigator.userAgent.toLowerCase();IEB=(uagent.indexOf('msie') != -1)?true:false;var scompat = document.compatMode;var spage=null;var PlcHoldDiv=null;var cvar=0,say=0,tpos=0,enson=0,hidsay=0,hidson=0;var VNAME_timeo=null;var kalan=0;var llllllllllll = new Array();stepc=parseInt(20*(6000/1000));dif=0.00;op=1.00;dif=(1.00/stepc);CalcIcWidth=180-8-8-(2*1);CalcSlideWidth=180-(2*1);divtextb ="<div id=d";divtev1=" onmouseover=\"ll(";divtev2=")\" onmouseout =\"lll(";divtev3=")\" onclick=\"butclick(";divtev4=")\"";divtexts = " style=\"position:absolute;visibility:hidden;width:"+CalcIcWidth+"px; COLOR:"+"#000000"+"; left:0px; top:0px; FONT-FAMILY: "+"MS Sans Serif,arial,helvetica"+"; FONT-SIZE: "+8+"pt; FONT-STYLE:"+"normal"+"; FONT-WEIGHT:"+"normal"+"; margin:0px; LINE-HEIGHT:"+12+"pt; text-align:"+"left"+";padding:0px;\">";ns6span= " style=\"position:relative; COLOR:"+"#333399"+"; width:"+CalcIcWidth+"px; FONT-FAMILY:"+"verdana,arial,helvetica"+"; FONT-SIZE:"+9+"pt; FONT-STYLE:"+"normal"+"; FONT-WEIGHT:"+"bold"+"; TEXT-DECORATION:"+"none"+"; LINE-HEIGHT:"+14+"pt;text-align:"+"left"+"; padding:0px;\"";function ll(gnum){if((linka[gnum].length)>2){var objd=null;var objd2=null;var objd3=null;objd=document.getElementById('d'+gnum);objd2=document.getElementById('hgd'+gnum);objd3=document.getElementById("tid"+gnum);objd.style.color="#AA0000";objd2.style.color="#BB0000";objd.style.cursor='pointer';objd2.style.cursor='pointer';objd3.style.textDecoration="none";objd2.style.textDecoration="none";}window.status=""+linka[gnum];}function lll(gnum2){var objd=null;var objd2=null;var objd3=null;objd=document.getElementById('d'+gnum2);objd2=document.getElementById('hgd'+gnum2);objd3=document.getElementById("tid"+gnum2);objd.style.color="#000000";objd2.style.color="#333399";objd3.style.textDecoration="none";objd2.style.textDecoration="none";window.status="";}function butclick(gnum3){if(linka[gnum3].substring(0,11)=="javascript:"){eval(""+linka[gnum3]);}else{if((linka[gnum3].length)>3){
if((trgfrma[gnum3].indexOf("_parent")>-1)){eval("parent.window.location='"+linka[gnum3]+"'");}else if((trgfrma[gnum3].indexOf("_top")>-1)){eval("top.window.location='"+linka[gnum3]+"'");}else{window.open(''+linka[gnum3],''+trgfrma[gnum3]);}}}}function llll(){kalan=kalan-Math.ceil(kalan/(6000/1000));tpos=0;for(i=hidson;i<=hidsay;i++){llllllllllll[i].style.left=""+(8+kalan-CalcSlideWidth)+"px";}for(i=enson;i<=say;i++){llllllllllll[i].style.left=""+(8+kalan)+"px";llllllllllll[i].style.top=4+tpos+"px";llllllllllll[i].style.visibility="visible";tpos=tpos+heightarr[i]+10;}if(kalan<=0){hidsay=say;hidson=enson;say++;if(say>=mc){say=0;}enson=say;VNAME_timeo=setTimeout('lllll()',4000);}else{VNAME_timeo=setTimeout('llll()',30);    }}function FadeBitti(){for(i=hidson;i<=hidsay;i++){llllllllllll[i].style.zIndex=2;}for(i=enson;i<=say;i++){llllllllllll[i].style.zIndex=3;}hidsay=say;hidson=enson;say++;if(say>=mc){say=0;}enson=say;VNAME_timeo=setTimeout('lllll()',4000);}function llllllllll(){op=op-dif;if(op<(0.00)){op=0.00;}if(IEB==true){spage.filters[0].apply();}for(i=hidson;i<=hidsay;i++){if(IEB==true){llllllllllll[i].style.visibility="hidden";}else{llllllllllll[i].style.opacity=op;}llllllllllll[i].style.zIndex=3;}tpos=0;for(i=enson;i<=say;i++){llllllllllll[i].style.top=4+tpos+"px";if(IEB==true){llllllllllll[i].style.visibility="visible";}else{llllllllllll[i].style.opacity=1.00-op;}tpos=tpos+heightarr[i]+10;llllllllllll[i].style.zIndex=2;}if(IEB==true){spage.filters[0].play();}else{if(op>(0.00)){VNAME_timeo=setTimeout('llllllllll()',30);}else{for(i=hidson;i<=hidsay;i++){llllllllllll[i].style.zIndex=2;}for(i=enson;i<=say;i++){llllllllllll[i].style.zIndex=3;}hidsay=say;hidson=enson;say++;if(say>=mc){say=0;}enson=say;   VNAME_timeo=setTimeout('lllll()',4000);}}}function lllll(){if(6==6){}else if(6==0){}else{if(IEB==true){spage.filters[0].apply();}for(i=hidson;i<=hidsay;i++){llllllllllll[i].style.visibility="hidden";}}cvar=0;tpos=0;art=1;topla=0;do{if(art==1){topla=0;}else{topla=10;}cvar=cvar+heightarr[say]+topla;if(cvar<(215-4-4-1-1)){say++;if(say>mc){art=1;break;}}else{if(art==1){say++;if(say>mc){art=1;break;}}}art++;}while(cvar<(215-4-4-1-1));say--;if(6==6){        kalan=CalcSlideWidth;        setTimeout('llll()',30);}else if(6==0){op=1.00;setTimeout('llllllllll()',50);}else{for(i=enson;i<=say;i++){llllllllllll[i].style.left=8+"px";llllllllllll[i].style.top=4+tpos+"px";llllllllllll[i].style.visibility="visible";tpos=tpos+heightarr[i]+10;}if(IEB==true){spage.filters[0].play();}else{hidsay=say;hidson=enson;say++;if(say>=mc){say=0;}enson=say;VNAME_timeo=setTimeout('lllll()',4000);}}}function lllllllll2(){i=0;for(i=0;i<mc;i++){llllllllllll[i]=document.getElementById('d'+i);heightarr[i]=llllllllllll[i].offsetHeight;llllllllllll[i].style.top=215+200+"px";if(6!=6){llllllllllll[i].style.left=8+"px";llllllllllll[i].style.visibility="visible";}}if((IEB==true)&&(6!=6)){spage.onfilterchange=FadeBitti;}lllll();}function lllllllll(){if(IEB==true){spage=document.getElementById("spageie");}else{spage=document.getElementById("spagens");}if(!spage){setTimeout('lllllllll()',100);return;}i=0;innertxt="";for(i=0;i<mc;i++){innertxt=innertxt+""+divtextb+""+i+""+divtev1+i+divtev2+i+divtev3+i+divtev4+divtexts+"<div id=\"hgd"+i+"\""+ns6span+">"+titlea[i]+"<br></div>"+"<span id=\"tid"+i+"\" style=\"TEXT-DECORATION:"+"none"+";\">"+texta[i]+"</span>"+"</div>";}spage.innerHTML=""+innertxt;spage.style.left="0px";spage.style.top="0px";setTimeout('lllllllll2()',100);}function BuildHtmlCont(){PlcHoldDiv=document.getElementById("plcholddiv");if(!PlcHoldDiv){setTimeout('BuildHtmlCont()',100);return;}var intext="";var filterstyle="";if(IEB==true){filterstyle="";}intext="<div id=\"disspageie\" style=\"position:absolute;width:"+180+"px; height:"+215+"px;left:0px; top:0px;margin:0px;overflow:hidden;padding:0px;border-style:"+"solid"+"; border-width:"+1+"px; border-color:"+"#666666"+";background-image: url("+""+"); background-repeat :no-repeat;background-position:"+"0"+"px "+"0"+"px;\"><div id=\"spageie\" style=\"position:absolute;width:"+180+"px; height:"+215+"px; left:0px; top:0px; border-style:solid; border-width:0px; border-color:"+"#666666"+";"+filterstyle+"overflow:hidden;clip:rect("+"4 180 210 0"+");\"></div></div>";if(IEB!=true){intext=intext+"<div id=\"spagensbrd\" style=\"position:absolute; width:"+(180-2*1)+"px; height:"+(215-2*1)+"px; left:0px; top:0px; border-style:"+"solid"+"; border-width:"+1+"px; border-color:"+"#666666"+";overflow:hidden;\"><div id=\"spagens\" style=\"position:absolute; width:"+(180-2*1)+"px; height:"+(215-2*1)+"px; left:0; top:0; border-width:0px; overflow:hidden;clip:rect("+"4 180 210 0"+");\"></div></div>";}PlcHoldDiv.innerHTML=""+intext;setTimeout('lllllllll()',100);}setTimeout('BuildHtmlCont()',100);