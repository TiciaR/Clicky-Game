(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,function(e,a){var t=[{id:1,name:"Mr Potatoe Head",image:"https://vignette.wikia.nocookie.net/pixar/images/2/26/Mr._Potato_Head.png/revision/latest?cb=20200103225642"},{id:2,name:"Slinky",image:"https://vignette.wikia.nocookie.net/pixar/images/9/9e/Slinky_transparent.png/revision/latest?cb=20200419214057"},{id:3,name:"Mater",image:"https://vignette.wikia.nocookie.net/pixar/images/e/ee/Mater.png/revision/latest?cb=20160221135852"},{id:4,name:"Lightning McQueen",image:"https://vignette.wikia.nocookie.net/pixar/images/6/63/Disney-cars-mcqueen.jpg/revision/latest?cb=20110727053733"},{id:5,name:"Iam Lightfoot",image:"https://vignette.wikia.nocookie.net/pixar/images/9/97/Iantrans.png/revision/latest?cb=20200228150106"},{id:6,name:"Eve",image:"https://vignette.wikia.nocookie.net/pixar/images/c/ca/Eve_wall%E2%80%A2e_clipped_rev_1.png/revision/latest?cb=20131115143452"},{id:7,name:"Wall-E",image:"https://vignette.wikia.nocookie.net/pixar/images/d/de/Wall%E2%80%A2e_clipped_rev_1.png/revision/latest?cb=20170807223723"},{id:8,name:"Woody",image:"https://vignette.wikia.nocookie.net/disney/images/2/23/Woody_Prime_KHIII.png/revision/latest?cb=20200220173523"},{id:9,name:"Remy",image:"https://vignette.wikia.nocookie.net/disney/images/7/73/Profile_-_Remy.jpeg/revision/latest?cb=20190314174151"},{id:10,name:"Emile",image:"https://vignette.wikia.nocookie.net/disney/images/4/4d/Profile_-_Emile.jpeg/revision/latest?cb=20190314175504"},{id:11,name:"Princess Atta",image:"https://vignette.wikia.nocookie.net/pixar/images/e/e3/Attabug%27slife.png/revision/latest?cb=20110427121352"},{id:12,name:"Arlo",image:"https://vignette.wikia.nocookie.net/pixar/images/0/0e/Arlo_the_good_dinosaur_disney_pixar_1.png/revision/latest?cb=20170807223828"},{id:13,name:"Butch",image:"https://vignette.wikia.nocookie.net/pixar/images/c/c5/Butch.PNG/revision/latest?cb=20150709150809"},{id:14,name:"Boo",image:"https://vignette.wikia.nocookie.net/pixar/images/7/7c/Boo.png/revision/latest?cb=20110426152813"},{id:15,name:"Celia Mae",image:"https://vignette.wikia.nocookie.net/pixar/images/5/55/Celia_Mae.png/revision/latest?cb=20200207000010"},{id:16,name:"Bruce",image:"https://vignette.wikia.nocookie.net/disney/images/d/d3/Profile_-_Bruce.jpg/revision/latest?cb=20190319020831"}];t=t.map((function(e,a){return e.id=a,e}));e.exports={characters:t,navMessages:[{id:0,msg:"Click an image to begin!"},{id:1,msg:"Try Again!!"},{id:2,msg:"Hit the Next One!!"},{id:3,msg:"You Win!!  Click an image to restart!"}]}},,,,,,,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(3),c=t.n(r),s=(t(14),t(6)),o=t(4),m=t(5),l=t(8),g=t(7),d=t(1);t(15);var u=function(e){var a=e.messages,t=e.msgCode,n=e.currScore,r=e.maxScore;return i.a.createElement("nav",{className:"navbar fixed-top navbar-expand-sm navbar-light bg-light"},i.a.createElement("div",{className:"container"},i.a.createElement("a",{href:"",className:"navbar-brand"},"Disney's Pixar ",i.a.createElement("br",null)," Clicky Game"),i.a.createElement("span",{className:"navbar-text text-center mx-auto d-none d-sm-block"},a[t].msg),i.a.createElement("ul",{className:"navbar-nav ml-auto"},i.a.createElement("li",{className:"nav-item"},i.a.createElement("div",{className:"navbar-text mr-1"},i.a.createElement("strong",null,"Score:")," ",n)),i.a.createElement("li",{className:"nav-item"},i.a.createElement("div",{className:"navbar-text"},i.a.createElement("strong",null,"Top Score:")," ",r))),i.a.createElement("div",{className:"navbar-text text-center mx-auto d-block d-sm-none"},i.a.createElement("h5",null,a[t].msg))))};t(16);var v=function(e){return i.a.createElement("div",{className:"jumbotron instructions"},i.a.createElement("h1",{className:"text-center"}," Clicky Game! "),i.a.createElement("h3",{className:"text-center"}," Click on an image to earn points, but don't click on any more than once!"))};t(17);var p=function(e){return i.a.createElement("div",{className:"col-3 col-md-3 col-lg-3 p-1 p-sm-2"},i.a.createElement("div",{className:0===e.maxScore||0<e.currScore&&e.currScore<=12?"game-card-img-wrapper":"game-card-img-wrapper shake",onClick:e.cardClick},i.a.createElement("img",{src:e.image,alt:e.name})))};t(18);var h=function(e){return i.a.createElement("div",{className:"container mb-xs-1 mb-sm-2"},i.a.createElement("div",{className:"row"},e.characters.map((function(a){return i.a.createElement(p,{key:a.id,id:a.id,name:a.name,image:a.image,cardClick:function(){return e.cardClick(a.id)},maxScore:e.maxScore,currScore:e.currScore})}))))},k=(t(19),function(e){Object(l.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=a.call.apply(a,[this].concat(i))).state={characters:d.characters,guessedIds:[],maxScore:0,currScore:0,navMsgCode:0,navMsgs:d.navMessages},e.cardClick=function(a){var t=e.state.currScore<12?e.state.currScore+1:1;if(e.state.guessedIds.includes(a))e.setState({guessedIds:[],navMsgCode:1,currScore:0});else{var n=e.state.maxScore;e.setState({guessedIds:t<12?[].concat(Object(s.a)(e.state.guessedIds),[a]):[],navMsgCode:t<12?2:3,currScore:t,maxScore:t>=n?t:n})}e.setState({characters:e.state.characters.sort((function(e,a){return.5-Math.random()}))})},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.setState({characters:this.state.characters.sort((function(e,a){return.5-Math.random()}))})}},{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement(u,{messages:this.state.navMsgs,msgCode:this.state.navMsgCode,currScore:this.state.currScore,maxScore:this.state.maxScore}),i.a.createElement(v,null),i.a.createElement(h,{characters:this.state.characters,cardClick:this.cardClick,currScore:this.state.currScore,maxScore:this.state.maxScore}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.e0ea8cf4.chunk.js.map