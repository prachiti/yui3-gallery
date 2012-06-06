YUI.add("gallery-simplenotifier",function(b){function a(c){a.superclass.constructor.apply(this,arguments);}a.NAME="SimpleNotifier";a.ATTRS={message:{value:""},header:{value:""},position:{value:"bottom-right"},timeout:{value:4000}};a.MARKUP='<div class="yui3-notify-close"><a title="close">X</a></div>'+'<div class="yui3-simplenotifier-header  {header_show} ">{header}</div>'+'<div class="yui3-simplenotifier-message">{message}</div>';b.extend(a,b.Widget,{BOUNDING_TEMPLATE:"<div/>",initializer:function(){this.publish("closeEvent",{defaultFn:this._defCloseEventFn,bubbles:false});},destructor:function(){},renderUI:function(){var f=this.get("message");var c=this.get("header");var e;if(c){e="simplenotifier-header-show";}else{e="simplenotifier-header-noshow";}var d={message:f,header:c,header_show:e};this.get("contentBox").append(b.Node.create(b.substitute(a.MARKUP,d)));this.get("boundingBox").addClass(this.get("position"));b.one(".yui3-notify-close").on("click",function(g){this.fire("closeEvent");},this);},bindUI:function(){this.after("messageChange",this._afterMessageChange);this.after("headerChange",this._afterHeaderChange);this._onHover();},hide:function(c){if(this.timer){this.timer.stop();this.timer=null;}var d=new b.Anim({node:this.get("boundingBox"),to:{opacity:0},easing:"easeIn",duration:0.5});d.run();},syncUI:function(){this._uiSetMessage(this.get("message"));this._uiSetHeader(this.get("header"));this.timer=new b.Timer({length:this.get("timeout"),repeatCount:1,callback:b.bind(this.hide,this)});this.timer.start();},_onHover:function(){var c=this.get("contentBox");c.on("mouseenter",b.bind(function(d){if(this.timer){this.timer.pause();}},this));c.on("mouseleave",b.bind(function(d){if(this.timer){this.timer.resume();}},this));},_afterMessageChange:function(c){this._uiSetMessage(c.newVal);},_afterHeaderChange:function(c){if(c||c.newVal){this._uiSetHeader(c.newVal);}},_uiSetMessage:function(d){var c=b.one(".yui3-simplenotifier-message");c.set("innerHTML",d);},_uiSetHeader:function(c){var d=b.one(".yui3-simplenotifier-header");d.set("innerHTML",c);},_defCloseEventFn:function(){this.hide();}});b.SimpleNotifier=a;},"@VERSION@",{skinnable:true,requires:["widget","node","event","substitute","dom","anim","gallery-timer"]});