(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(25)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(7),r=a.n(i),s=a(1),l=a(2),c=a(4),m=a(3),u=a(5),d=(a(15),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.links.map(function(e,t){var a=o.a.createElement("a",{className:"menu__link",href:e.link},e.label);return o.a.createElement("li",{key:t,className:"menu__list-item"},a)});return o.a.createElement("nav",{className:"menu"},o.a.createElement("h1",{style:{backgroundImage:"url("+this.props.logo+")"},className:"menu__logo"},"Epic Co."),o.a.createElement("div",{className:"menu__right"},o.a.createElement("ul",{className:"menu__list"},e)))}}]),t}(n.Component)),p=(a(16),function(e){return o.a.createElement("button",{className:"btn",onClick:e.onClick},e.children)}),b=(a(17),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement("div",{id:"Lista"},o.a.createElement("div",{id:"Topo"},o.a.createElement("div",{className:"img_lista"},o.a.createElement("img",{src:this.props.Imagem,alt:"Logo"})),o.a.createElement("h1",null,this.props.children)),o.a.createElement("ul",null,this.props.description.map(function(e){return o.a.createElement("li",null,o.a.createElement("p",null,e))}))))}}]),t}(n.Component)),g=(a(18),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={curriculo:"https://github.com/antonioducs/proweb/raw/master/curriculo.pdf",imgPerfil:"https://github.com/antonioducs/proweb/blob/master/img/portifolio/perfil.jpg?raw=true",lists:[{title:"Interesses",img:"https://github.com/antonioducs/proweb/blob/master/img/portifolio/interesses.png?raw=true",description:["Desenvolvimento Web","Desenvolvimento Mobile","Intelig\xeancia Artificial","Microcontroladores"]},{title:"Idiomas",img:"https://github.com/antonioducs/proweb/blob/master/img/portifolio/idiomas.png?raw=true",description:["Portugu\xeas - Nativo","Ingl\xeas - B\xe1sico"]},{title:"Forma\xe7\xe3o",img:"https://github.com/antonioducs/proweb/blob/master/img/portifolio/formacao.png?raw=true",description:["UTFPR - Engenharia de Computa\xe7\xe3o - Cursando","2013 - Ensino M\xe9dio"]},{title:"Atividades",img:"https://github.com/antonioducs/proweb/blob/master/img/portifolio/atividades.png?raw=true",description:["Desenvolvimento Web","Desenvolvimento Mobile","Desenvolvimento de aplica\xe7\xf5es em Hardware"]}]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement("div",{id:"List"},o.a.createElement("div",{id:"ListDir"},o.a.createElement("div",{className:"perfilImg"},o.a.createElement("img",{src:this.state.imgPerfil,alt:"perfil"})),o.a.createElement("h2",null," Ol\xe1, sou",o.a.createElement("span",{className:"Nome"}," Antonio C\xe9sar Duarte"),". Estudante de Engenharia de Computa\xe7\xe3o pela UTFPR-CP, nasci em Parana\xedba - MS, atualmente moro em Corn\xe9lio Proc\xf3pio - PR."),o.a.createElement("a",{href:this.state.curriculo,target:"_blank"},o.a.createElement(p,null,"CURR\xcdCULO COMPLETO"))),o.a.createElement("div",{id:"ListEsq"},o.a.createElement("h1",{className:"item-1"},"Antonio Cesar Duarte"),this.state.lists.map(function(e){return o.a.createElement(b,{description:e.description,Imagem:e.img},e.title)}))))}}]),t}(n.Component)),h=(a(19),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={habilidades:["JavaScript","C/C++","HTML","SGBD","JPA","JUnit","Java","ReactJs","NodeJs","MongoDB","MySQL","Sockets","Microcontroladores","Arduino","IA","IoT","Python"]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement("div",{id:"skills"},o.a.createElement("div",{className:"item-1"},o.a.createElement("h1",null,"Habilidades"),o.a.createElement("p",{className:"item-3"},"Segue uma lista de algumas habilidades profissionais.")),o.a.createElement("div",{className:"item-2"},this.state.habilidades.map(function(e){return o.a.createElement("p",{className:"item-4"},e)}))))}}]),t}(n.Component)),E=(a(20),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={trabalhos:[{img:"https://github.com/antonioducs/proweb/blob/master/img/portifolio/serv1.png?raw=true",page:"https://github.com/antonioducs/dctb-utfpr-2019-1-web/tree/master/as34a-n14/t01/antonio-cesar-duarte"},{img:"https://github.com/antonioducs/proweb/blob/master/img/portifolio/serv2.png?raw=true",page:"https://github.com/antonioducs/dctb-utfpr-2019-1-web/tree/master/as34a-n14/ta03"}]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement("div",{id:"Portfolio"},o.a.createElement("h1",null,"Portf\xf3lio"),o.a.createElement("div",{className:"body"},this.state.trabalhos.map(function(e){return o.a.createElement("div",{className:"image"},o.a.createElement("a",{href:e.page,target:"_blank"},o.a.createElement("img",{src:e.img,alt:"work"})))}))))}}]),t}(n.Component)),f=(a(21),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={img:"https://github.com/antonioducs/proweb/blob/master/img/portifolio/git.png?raw=true",linkGit:"//github.com/antonioducs",biografia:["Em 2010 iniciei o ensino m\xe9dio na Escola Estadual Jos\xe9 Garcil Leal em Parana\xedba-MS. Em 2013, ap\xf3s concluir o ensino m\xe9dio, ainda na mesma cidade, iniciei o curso de direito. Ap\xf3s certo tempo, notei que a \xe1rea de tecnologia \xe9 a que eu amava e desejava trabalhar, ent\xe3o abondonei o curso de direito e comecei a estudar programa\xe7\xe3o por conta pr\xf3pria. Em 2016 iniciei o curso superior de Engenharia de Computa\xe7\xe3o na Universidade Tecnol\xf3gica Federal do Paran\xe1 (UTFPR) em Corn\xe9lio Proc\xf3pio."],profissao:["Sempre fui atra\xeddo pela curiosidade de saber o que tem atr\xe1s desse conjunto de pixels estilizados que vemos nas telas dos nossos aparelhos eletr\xf4nicos. Quando fiz o primeiro c\xf3digo em uma tela sem nenhum efeito visual, e apesar de ter sido um c\xf3digo simples quase que sem fun\xe7\xe3o, foi uma sensa\xe7\xe3o inesquec\xedvel. Hoje j\xe1 posso dizer que conhe\xe7o todas as camadas por tr\xe1s dos panos, desde o mais baixo n\xedvel utilizando de apenas eletr\xf4nica digital at\xe9 linguaguens do mais alto n\xedvel como JavaScript que possibilita a cria\xe7\xe3o de sites, como este mesmo, Python para redes neurais e at\xe9 mesmo comunica\xe7\xe3o entre dispositivos para IOT."]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement("div",{id:"Info"},o.a.createElement("h1",null,"Mais Informa\xe7\xf5es"),o.a.createElement("div",{className:"body"},o.a.createElement("div",{className:"bio"},o.a.createElement("h2",null,"Biografia"),o.a.createElement("p",null,this.state.biografia)),o.a.createElement("div",{className:"work"},o.a.createElement("h2",null,"Profiss\xe3o"),o.a.createElement("p",null,this.state.profissao))),o.a.createElement("div",{className:"image"},o.a.createElement("a",{href:this.state.linkGit,target:"_blank"},o.a.createElement("img",{src:this.state.img,alt:"git"}))),o.a.createElement("p",{className:"git"},"GitHub")))}}]),t}(n.Component)),v=(a(22),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={postagens:[{title:"NASA",img:"https://img.ibxk.com.br///2019/06/12/12212345476179-t1200x480.jpg",description:"A NASA anunciou que a miss\xe3o Psyche, cujo objetivo \xe9 explorar o asteroide de mesmo nome, entrou em sua fase final e j\xe1 existe uma data prevista para o lan\xe7amento da sonda que dever\xe1 viajar at\xe9 a rocha espacial. Se tudo correr como o programado, a longa viagem ter\xe1 in\xedcio em agosto de 2022 e a pequena espa\xe7onave chegar\xe1 ao seu destino no fim de janeiro de 2026.",source:"https://www.tecmundo.com.br/ciencia/142566-nasa-deve-lancar-missao-explorar-misterioso-asteroide-psyche-2022.htm"},{title:"Microsoft x Linux",img:"https://tecnoblog.net/wp-content/uploads/2019/06/linux-windows-10-700x529.jpg",description:"A Microsoft anunciou nesta quarta-feira (12) que liberou uma vers\xe3o de testes do Windows 10 e que vem acompanhada do kernel do Linux, em uma arquitetura chamada WSL 2 (Subsistema do Windows para Linux 2). A vers\xe3o \xe9 a Preview Build 18917 (20H1), promete melhor desempenho e compatibilidade com distribui\xe7\xf5es do Linux.",source:"https://tecnoblog.net/294703/microsoft-libera-kernel-do-linux-embutido-no-windows-10/"},{title:"Raspberry Pi",img:"https://s2.glbimg.com/xSAIxSVeJrkCMgT_EkinuY_vMq4=/0x0:4000x2664/984x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2016/09/27/2_1.jpg",description:"O Raspberry Pi \xe9 um computador de bolso que aparece em diversas vers\xf5es. Esses modelos podem ser utilizados em uma infinidade de projetos interessantes, que aplicam o hardware da placa em drones, consoles de jogos retr\xf4 e dispositivos que deixam sua TV smart. Al\xe9m disso, tamb\xe9m \xe9 poss\xedvel criar um pequeno servidor para liberar acesso dos PCs da rede \xe0 impressora ou at\xe9 uma esp\xe9cie de armazenamento em nuvem pr\xf3prio.",source:"https://www.techtudo.com.br/listas/2019/06/dez-funcoes-pouco-conhecidas-do-raspberry-pi.ghtml"}]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement("div",{id:"Blog"},o.a.createElement("h1",null,"Blog"),o.a.createElement("div",{class:"post"},this.state.postagens.map(function(e){return o.a.createElement("div",{className:"item"},o.a.createElement("h2",null,e.title),o.a.createElement("div",{className:"img-blog"},o.a.createElement("img",{src:e.img,alt:"img"})),o.a.createElement("p",null,e.description),o.a.createElement("h3",null,"Fonte: ",e.source))}))))}}]),t}(n.Component)),w=a(8),j=(a(23),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={contato:{email:"antonioduarte.cs@gmail.com",telefone:"+55 (067) 998 493 707",face:"https://www.facebook.com/antonio.cesarduarte.3",insta:"https://www.instagram.com/antonioduarte.cs/",imgFace:"https://github.com/antonioducs/proweb/blob/master/img/portifolio/facebook.png?raw=true",imgInsta:"https://github.com/antonioducs/proweb/blob/master/img/portifolio/instagram.png?raw=true"}},a.onClick=function(){console.log("Algu\xe9m clicou!")},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement("div",{id:"Contato"},o.a.createElement("h1",null,"Contato"),o.a.createElement("div",{className:"item"},o.a.createElement("h2",null,"Entre em contato"),o.a.createElement("p",null,"Entre em contato pelo formul\xe1rio, pelo e-mail ou pelo telefone."),o.a.createElement("p",null,this.state.contato.email),o.a.createElement("p",null,this.state.contato.telefone)),o.a.createElement("form",{action:"https://formspree.io/antonioduarte.cs@gmail.com",method:"POST"},o.a.createElement("input",{type:"text",id:"nome",placeholder:"Nome",name:"name"}),o.a.createElement("input",{type:"text",id:"email",placeholder:"E-mail",name:"_replyto"}),o.a.createElement("input",Object(w.a)({type:"text",id:"assunto",placeholder:"Assunto",name:""},"name","subject")),o.a.createElement("textarea",{placeholder:"Mensagem",name:"message"}),o.a.createElement(p,{onClick:this.onClick,type:"submit"},"Enviar")),o.a.createElement("div",{className:"redes_sociais"},o.a.createElement("h3",null,"Redes sociais"),o.a.createElement("p",null,"Entre em contato comigo por minhas redes sociais."),o.a.createElement("a",{href:this.state.contato.insta,target:"_blank"},o.a.createElement("img",{src:this.state.contato.imgInsta,alt:"instagram"})),o.a.createElement("a",{href:this.state.contato.face,target:"_blank"},o.a.createElement("img",{src:this.state.contato.imgFace,alt:"facebook"})))))}}]),t}(n.Component)),O=(a(24),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={logo:"https://github.com/antonioducs/proweb/blob/master/img/portifolio/logo.png?raw=true",links:[{label:"Home",link:"#home"},{label:"Habilidades",link:"#habilidades"},{label:"Portf\xf3lio",link:"#portfolio"},{label:"Infos",link:"#infos"},{label:"Blog",link:"#blog"},{label:"Contato",link:"#contact-us"}]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:"header"},o.a.createElement(d,{links:this.state.links,logo:this.state.logo})),o.a.createElement("section",{id:"home"},o.a.createElement(g,null)),o.a.createElement("section",{id:"habilidades"},o.a.createElement(h,null)),o.a.createElement("section",{id:"portfolio"},o.a.createElement(E,null)),o.a.createElement("section",{id:"infos"},o.a.createElement(f,null)),o.a.createElement("section",{id:"blog"},o.a.createElement(v,null)),o.a.createElement("section",{id:"contact-us"},o.a.createElement(j,null)),o.a.createElement("div",{className:"rodape"},o.a.createElement("p",null,"Antonio Cesar Duarte"),o.a.createElement("p",null,"antonioduarte.cs@gmail.com"),"+55 (067) 998 493 707"))}}]),t}(n.Component));r.a.render(o.a.createElement(O,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.186bf7be.chunk.js.map