import{r as f,j as h,R as Q,D as R,A as Se,a as je}from"./index-ZnzjTPj4.js";import{u as Me,a as Pe,f as W,P as De,T as Ne,b as Re}from"./TemplateSwitcher-BkZeyqav.js";import{T as Fe}from"./theme-provider-BrS4bq86.js";const _e=({themeColor:t="#00FF00"})=>{const a=f.useRef(null);return f.useEffect(()=>{const u=a.current;if(!u)return;const l=u.getContext("2d");if(!l)return;u.width=window.innerWidth,u.height=window.innerHeight;const g=`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%"'#&_(),.;:?!\\|{}<>[]^~あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん`,I=Math.floor(u.width/20),x=[];for(let w=0;w<I;w++)x[w]=Math.random()*-100;const A=setInterval(()=>{l.fillStyle="rgba(0, 0, 0, .01)",l.fillRect(0,0,u.width,u.height),l.fillStyle=t,l.font="22px monospace";for(let w=0;w<x.length;w++){const T=g[Math.floor(Math.random()*g.length)];l.fillText(T,w*20,x[w]*20),x[w]++,x[w]*20>u.height&&Math.random()>.975&&(x[w]=0)}},50),v=()=>{u.width=window.innerWidth,u.height=window.innerHeight;const w=Math.floor(u.width/20);x.length=0;for(let T=0;T<w;T++)x[T]=Math.random()*-100};return window.addEventListener("resize",v),()=>{clearInterval(A),window.removeEventListener("resize",v)}},[t]),h.jsx("canvas",{ref:a,className:"matrix-effect","aria-hidden":"true"})};function qe(t){if(!t)return[];const a=t.split(`
`),u=[];return a.forEach((l,g)=>{if(g>0&&u.push(Q.createElement("br",{key:`br-${g}`})),!l.trim())return;const I=/(https?:\/\/|ftp:\/\/)[^\s]+/g,x=l.match(I);if(!x){u.push(l);return}let i=0,A=[];x.forEach((v,w)=>{const T=l.indexOf(v,i);T>i&&A.push(l.substring(i,T));let j=v;v.includes("/src/")||v.startsWith("src/")?j=v.replace(/\/src\/|^src\//,"/src3/"):(v.includes("/public/")||v.startsWith("public/"))&&(j=v.replace(/\/public\/|^public\//,"/src3/")),A.push(Q.createElement("a",{key:`link-${g}-${w}`,href:j,target:"_blank",rel:"noopener noreferrer",className:"terminal-link",onClick:Y=>{if(j.includes("/src3/")||j.includes("file://")){Y.preventDefault();const k=new CustomEvent("terminalNavigate",{detail:{url:j}});window.dispatchEvent(k)}}},v)),i=T+v.length}),i<l.length&&A.push(l.substring(i)),u.push(...A)}),u}const G={GLITCH:`
▒█▀▀▄ █▀▀ █▄░▄█ █▀▀█ █▀▀█ █▀▀█ █░░ 　 █▀▀ █▀▀█ █▀▀█ █▀▀█ █▀▀█ 
▒█░▒█ █▀▀ █▒█▒█ █▄▄█ █░░█ █▄▄▀ █░░ 　 █▀▀ █▄▄▀ █▄▄▀ █░░█ █▄▄▀ 
▒█▄▄▀ ▀▀▀ ▀░░▒▀ ▀░░▀ █▀▀▀ ▀░▀▀ ▀▀▀ 　 ▀▀▀ ▀░▀▀ ▀░▀▀ ▀▀▀▀ ▀░▀▀
  `,COFFEE:`
   ( (
    ) )
  ........
  |      |]
  \\      /
   '----'
  `,ROCKET:`
      /\\
     /  \\
    |    |
    |    |
    |    |
   /|    |\\
  / |    | \\
 /__|____|__\\
     /\\
    /  \\
    ^^^^
  `,MATRIX_RAIN:`
 1  0  1  0  1  0  1  0  1  0
   0  1  0  1  0     0  1  0  1
 0     0     0  1  0  1     0
   1  0  1  0     0  1  0  1  0
 1     1     1  0  1     1
   0  1  0  1  0  1  0     0  1
 0     0  1     0     0  1  0
  `,COW:`
         \\   ^__^
          \\  (oo)\\_______
             (__)\\       )\\/\\
                 ||----w |
                 ||     ||
  `},F={quotes:["The quick brown fox jumps over the lazy dog.","Programming is the art of telling another human what one wants the computer to do.","The best error message is the one that never shows up.","Code is like humor. When you have to explain it, it's bad.","Good code is its own best documentation.","Any fool can write code that a computer can understand. Good programmers write code that humans can understand.","First, solve the problem. Then, write the code.","Experience is the name everyone gives to their mistakes.","It's not a bug, it's an undocumented feature.","The most disastrous thing that you can ever learn is your first programming language.","Java is to JavaScript what car is to carpet.","When debugging, novices insert corrective code; experts remove defective code.","A user interface is like a joke. If you have to explain it, it's not that good.","Software and cathedrals are much the same — first we build them, then we pray.","Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.","There are only two hard things in Computer Science: cache invalidation and naming things.","Debugging is like being the detective in a crime movie where you are also the murderer.","The best programmers are not marginally better than merely good ones. They are an order-of-magnitude better.","If debugging is the process of removing software bugs, then programming must be the process of putting them in.","Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.","The trouble with programmers is that you can never tell what a programmer is doing until it's too late.","That's the thing about people who think they hate computers. What they really hate is lousy programmers."],fetchQuotes:async()=>{try{const t=await fetch("https://type.fit/api/quotes",{mode:"cors",headers:{Accept:"application/json"}});if(!t.ok)return console.warn("Could not fetch quotes, using fallback quotes"),F.quotes;const u=(await t.json()).filter(l=>l.text&&l.text.length>30&&l.text.length<150).map(l=>l.text);return u.length>5?u:F.quotes}catch{return console.warn("Failed to fetch quotes due to CORS or network error, using fallback quotes"),F.quotes}},start:async()=>{const t=F.quotes;return{quote:t[Math.floor(Math.random()*t.length)],startTime:Date.now()}},calculateSpeed:(t,a)=>{const u=t.split(" ").length,l=a/(1e3*60);return Math.round(u/l)}},Oe=t=>{if(t.length>2){const a={hlep:"I think you meant 'help'. Let me help you with that!",clea:"Almost there! Try 'clear' to clean the terminal.",eixt:"Want to exit? Just type 'exit'.",clera:"Did you mean 'clear'? My keyboard gets sticky sometimes too."};if(a[t])return a[t]}if(t==="coffee"||t==="break")return`Taking a coffee break?
${G.COFFEE}
Here's a virtual cup for you!`;if(t==="launch"||t==="rocket")return`Initiating launch sequence...
${G.ROCKET}
Houston, we have liftoff!`;if(t==="rain"||t==="matrix")return`${G.MATRIX_RAIN}
Follow the white rabbit...`;if(t.includes("moo")||t==="cow")return`${G.COW}
Mooooooo!`;if(t==="fortune"){const a=["Your code will compile on the first try today.","A bug fixed today prevents a critical issue tomorrow.","Someone will star your GitHub repository soon.","A great opportunity for contribution awaits you.","Your next pull request will be merged without comments.","The path to becoming a better developer is through documentation.","Your commit today will save someone hours of debugging tomorrow.","The best code is no code at all.","A clever person solves a problem; a wise person avoids it.","Before software can be reusable, it first has to be usable.","The sooner you start coding, the longer the program will take."];return`🔮 Your fortune: ${a[Math.floor(Math.random()*a.length)]}`}return t==="42"?"The Answer to the Ultimate Question of Life, the Universe, and Everything.":t==="sudo"?"Nice try! But sudo won't work here. You're already the master of this terminal.":null},Ue=(t,a)=>{if(t.length<3)return!1;for(const u of a){const l=He(t,u);if(l>0&&l<=2)return!0}return!1},He=(t,a)=>{if(t.length===0)return a.length;if(a.length===0)return t.length;const u=[];for(let l=0;l<=a.length;l++)u[l]=[l];for(let l=0;l<=t.length;l++)u[0][l]=l;for(let l=1;l<=a.length;l++)for(let g=1;g<=t.length;g++)a.charAt(l-1)===t.charAt(g-1)?u[l][g]=u[l-1][g-1]:u[l][g]=Math.min(u[l-1][g-1]+1,Math.min(u[l][g-1]+1,u[l-1][g]+1));return u[a.length][t.length]},Ge=t=>{const a="!@#$%^&*()_+-={}[]|;:,.<>?/\\~`";let u="";for(let l=0;l<t.length;l++)if(Math.random()<.2){const g=a.charAt(Math.floor(Math.random()*a.length));u+=g}else u+=t.charAt(l);return u},We=t=>{const a=[];a.push(`Command not found: ${t}`);for(let l=0;l<6;l++)l%2===0?a.push(`C0mm@nd n0t f0und: ${Ge(t)}`):a.push(`Command not found: ${t}`);return a.push(`Command not found: ${t}. Type 'help' to see available commands.`),a},Ye={konami:{sequence:["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],currentIndex:0,reward:`⭐ KONAMI CODE ACTIVATED! ⭐
Unlocked retro mode!`}},Ke=t=>{const a=Ye.konami;return t===a.sequence[a.currentIndex]?(a.currentIndex++,a.currentIndex===a.sequence.length?(a.currentIndex=0,{completed:!0,message:a.reward}):{completed:!1,message:null}):(a.currentIndex=0,{completed:!1,message:null})},le=`
 ████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗     
 ╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║     
    ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║     
    ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║     
    ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗
    ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝
                                                                   
██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 
`,ce={h:"help","?":"help",c:"clear",cls:"clear",q:"exit",quit:"exit",a:"about",me:"about",bio:"about",p:"projects",proj:"projects",s:"skills",tech:"skills",e:"experience",exp:"experience",work:"experience",edu:"education",school:"education",con:"contact",soc:"social",links:"social",g:"github",git:"github",stats:"github",m:"matrix",mtx:"matrix",dl:"download",d:"download",dlp:"download -p",dlr:"download -r",r:"reload",refresh:"reload",art:"ascii",logo:"ascii",f:"fortune",type:"typingtest"},Be=`
Available commands:
  help    (h, ?)       Show this help text
  clear   (c, cls)     Clear terminal screen
  about   (a, me, bio) Display information about me
  projects(p, proj)    List my projects
  skills  (s, tech)    Show my technical skills
  experience(e, exp)   Show my work experience
  education(edu)       Show my education details
  contact (con)        Display contact information
  social  (soc, links) Show social media links
  github  (g, git)     Display GitHub stats
  matrix  (m, mtx)     Toggle matrix effect background
  download(d, dl)      Download files
    -p    (dlp)        Download portfolio.json data file
    -r    (dlr)        Download resume PDF
  reload  (r, refresh) Reload portfolio data with AI
  ascii   (art, logo)  Display ASCII art
  exit    (q, quit)    Exit terminal (redirects to main site)
  
Fun Commands:
  fortune (f)          Get a random fortune
  typingtest (type)    Test your typing speed
  
Try typing 'coffee', 'rocket', 'cow', 'sudo', or '42' for surprises!
`,Ve=t=>{var a;return`
Project: ${t.title||"Unnamed Project"}
${t.description?`Description: ${t.description}`:""}
${(a=t.technologies)!=null&&a.length?`Technologies: ${t.technologies.join(", ")}`:""}
${t.github?`GitHub: ${t.github}`:""}
${t.demo?`Demo: ${t.demo}`:""}
`},ze=t=>{var a;return`
Role: ${t.title} at ${t.company}
Duration: ${W(t.startDate)} - ${t.endDate?W(t.endDate):"Present"}
${t.description?`Details: ${t.description}`:""}
${(a=t.accomplishments)!=null&&a.length?`Achievements: 
${t.accomplishments.map(u=>`  - ${u}`).join(`
`)}`:""}
`},Je=t=>`
Degree: ${t.degree} in ${t.field}
Institution: ${t.institution}
Duration: ${W(t.startDate)} - ${t.endDate?W(t.endDate):"Present"}
${t.description?`Details: ${t.description}`:""}
`,M=20,S={classic:{name:"Classic Green",bg:"#0c0c0c",text:"#00ff00",prompt:"#00ff00",success:"#00ff00",error:"#ff0000"},midnight:{name:"Midnight Blue",bg:"#0d1117",text:"#58a6ff",prompt:"#79c0ff",success:"#56d364",error:"#f85149"},retro:{name:"Retro Amber",bg:"#150f01",text:"#ffb000",prompt:"#ffb000",success:"#ffc533",error:"#ff5555"},monochrome:{name:"Monochrome",bg:"#0a0a0a",text:"#ffffff",prompt:"#ffffff",success:"#cccccc",error:"#999999"},matrix:{name:"Matrix",bg:"#000000",text:"#03A062",prompt:"#00ff41",success:"#03A062",error:"#ff0000"}},Qe=()=>{const[t,a]=f.useState(""),[u,l]=f.useState([]),[g,I]=f.useState(-1),[x,i]=f.useState([]),[A,v]=f.useState(!1),[w,T]=f.useState(!1);f.useState(!1),f.useState(20);const[j,Y]=f.useState(!1),[k,X]=f.useState("classic"),[P,ue]=f.useState(!1),[y,U]=f.useState({isActive:!1,content:[],currentLine:0,totalLines:0}),[E,K]=f.useState({isActive:!1,frames:[],currentFrame:0,interval:null}),[D,Z]=f.useState({isActive:!1,quote:"",startTime:0}),[_,de]=f.useState(!1),N=f.useRef(null),H=f.useRef(null),B=f.useRef(null),me=f.useRef(null),{toast:$}=Me(),{portfolio:r,isLoading:Xe,refreshAllData:fe}=Pe(),he=["help","clear","about","projects","skills","experience","education","contact","social","github","matrix","download","reload","ascii","exit","fortune","typingtest"];f.useEffect(()=>{const e=S[k];e&&(document.documentElement.style.setProperty("--terminal-bg",e.bg),document.documentElement.style.setProperty("--terminal-text",e.text),document.documentElement.style.setProperty("--terminal-prompt",e.prompt),document.documentElement.style.setProperty("--terminal-cursor",e.prompt),document.documentElement.style.setProperty("--terminal-success",e.success),document.documentElement.style.setProperty("--terminal-error",e.error)),v(k==="matrix"),_?(document.documentElement.style.setProperty("--terminal-text","#33ff00"),document.documentElement.style.setProperty("--terminal-bg","#000000"),document.documentElement.style.setProperty("--terminal-font",'"VT323", "Courier New", monospace'),document.documentElement.style.setProperty("--terminal-filter","contrast(1.2) brightness(1.1) sepia(0.2)")):(document.documentElement.style.setProperty("--terminal-font",'"JetBrains Mono", "Courier New", monospace'),document.documentElement.style.setProperty("--terminal-filter","none"))},[k,_]),f.useEffect(()=>{if(E.isActive){E.interval&&clearInterval(E.interval);const e=setInterval(()=>{K(n=>{const o=n.currentFrame+1;return o>=n.frames.length?(clearInterval(e),{...n,isActive:!1,currentFrame:0,interval:null}):{...n,currentFrame:o}})},150);return K(n=>({...n,interval:e})),()=>{clearInterval(e)}}},[E.isActive]),f.useEffect(()=>{if(E.isActive&&E.frames.length>0){const e=E.frames[E.currentFrame];i(n=>{const o=[...n];return o.length>0&&o[o.length-1].type==="error"?o[o.length-1]={type:"error",text:e,isAnimating:!1,animatedText:e}:o.push({type:"error",text:e,isAnimating:!1,animatedText:e}),o})}},[E.currentFrame,E.isActive]),f.useEffect(()=>{var e;(e=N.current)==null||e.focus(),H.current&&(H.current.scrollTop=H.current.scrollHeight)},[x]),f.useEffect(()=>{var o;const e=((o=r==null?void 0:r.personalInfo)==null?void 0:o.name)||R.NAME,n=[{type:"response",text:le},{type:"response",text:`Terminal Portfolio - ${Se.SITE_TITLE}`},{type:"response",text:`Welcome to ${e}'s terminal portfolio. Type 'help' to see available commands.`},{type:"response",text:`Current date: ${new Date().toLocaleString()}`},{type:"response",text:""}];i(n)},[r]),f.useEffect(()=>{const e=n=>{var b;const d=(b=n.detail)==null?void 0:b.url;d&&($({title:"Opening Link",description:`Navigating to: ${d}`,duration:3e3}),i(C=>[...C,{type:"info",text:`Link clicked: ${d}`}]))};return window.addEventListener("terminalNavigate",e),()=>{window.removeEventListener("terminalNavigate",e)}},[$]);const ee=e=>{try{console.log("Downloading portfolio data:",e);const n=JSON.stringify(e,null,2),o=new Blob([n],{type:"application/json"}),d=URL.createObjectURL(o),b=document.createElement("a");b.href=d,b.download="portfolio.json",document.body.appendChild(b),b.click(),document.body.removeChild(b),URL.revokeObjectURL(d);const C=new CustomEvent("portfolioDataDownloaded",{detail:{filename:"portfolio.json"}});return window.dispatchEvent(C),console.log("Portfolio data downloaded as portfolio.json"),!0}catch(n){return console.error("Failed to download portfolio data:",n),!1}};f.useEffect(()=>{const e=n=>{if(D.isActive)return;const o=Ke(n.key);o.completed&&o.message&&(de(!_),i(d=>[...d,{type:"success",text:o.message,isAnimating:!1,animatedText:o.message}]),$({title:"Easter Egg Found!",description:"Konami code activated! Retro mode toggled.",duration:3e3}))};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[_,$,D.isActive]);const pe=e=>{const n=We(e);K({isActive:!0,frames:n,currentFrame:0,interval:null})},ge=async()=>{var e;try{const{quote:n,startTime:o}=await F.start();Z({isActive:!0,quote:n,startTime:o}),i(d=>[...d,{type:"info",text:`Type the following text:

"${n}"

Press Enter when finished.`,isAnimating:!1,animatedText:`Type the following text:

"${n}"

Press Enter when finished.`}]),a(""),(e=N.current)==null||e.focus()}catch(n){console.error("Failed to start typing test:",n),i(o=>[...o,{type:"error",text:`Failed to start typing test: ${n}`,isAnimating:!1,animatedText:`Failed to start typing test: ${n}`}])}},ye=()=>{const n=Date.now()-D.startTime,o=F.calculateSpeed(D.quote,n),d=t,b=D.quote;let C=0;for(let L=0;L<Math.min(d.length,b.length);L++)d[L]===b[L]&&C++;const q=Math.round(C/b.length*100);i(L=>[...L,{type:"command",text:`> ${d}`,isAnimating:!1,animatedText:`> ${d}`},{type:"success",text:`Typing test results:
WPM: ${o}
Accuracy: ${q}%
Time: ${(n/1e3).toFixed(2)} seconds`,isAnimating:!1,animatedText:`Typing test results:
WPM: ${o}
Accuracy: ${q}%
Time: ${(n/1e3).toFixed(2)} seconds`}]),Z({isActive:!1,quote:"",startTime:0}),a("")},V=e=>{var b,C,q,L,te,ne,oe,se,re,ie,ae;if(D.isActive){ye();return}l(s=>[...s,e]),I(-1);const n=e.trim().toLowerCase();i(s=>[...s,{type:"command",text:`> ${e}`}]);const o=ce[n]||n,d=Oe(n);if(d){i(s=>[...s,{type:"response",text:d}]);return}if(o==="theme"||o.startsWith("theme ")){const s=o.split(" ");if(s.length===1){const m=Object.entries(S).map(([p,O])=>`${p}: ${O.name}${p===k?" (current)":""}`).join(`
`);i(p=>[...p,{type:"response",text:`Available themes:
${m}

Usage: theme <n>`}]);return}const c=s[1];S.hasOwnProperty(c)?(X(c),i(m=>[...m,{type:"success",text:`Theme set to ${S[c].name}.`}])):i(m=>[...m,{type:"error",text:`Unknown theme: ${c}. Type 'theme' to see available options.`}]);return}if(o==="history"){if(u.length===0){i(c=>[...c,{type:"info",text:"No command history available."}]);return}const s=u.map((c,m)=>`${m+1}. ${c}`).join(`
`);i(c=>[...c,{type:"response",text:`Command history:
${s}`}]);return}if(o==="clear-history"){l([]),i(s=>[...s,{type:"success",text:"Command history cleared."}]);return}if(o!=="")if(o==="clear"){i([]);return}else if(o==="help"){const s=`
  theme              View available themes
  theme <n>       Change terminal theme
  history            View command history
  clear-history      Clear command history
`;i(c=>[...c,{type:"response",text:Be+s}])}else if(o==="fortune"){const s=["Your code will compile on the first try today.","A bug fixed today prevents a critical issue tomorrow.","Someone will star your GitHub repository soon.","A great opportunity for contribution awaits you.","Your next pull request will be merged without comments.","The path to becoming a better developer is through documentation.","Your commit today will save someone hours of debugging tomorrow.","The best code is no code at all."];i(c=>[...c,{type:"response",text:`🔮 Your fortune: ${s[Math.floor(Math.random()*s.length)]}`}])}else if(o==="typingtest"||o==="type")ge();else if(o==="about"){const s=((b=r==null?void 0:r.personalInfo)==null?void 0:b.summary)||R.BIO,c=((C=r==null?void 0:r.personalInfo)==null?void 0:C.title)||R.TITLE;i(m=>{var p;return[...m,{type:"response",text:`Name: ${((p=r==null?void 0:r.personalInfo)==null?void 0:p.name)||R.NAME}
Title: ${c}

${s}`}]})}else if(o==="projects")if((q=r==null?void 0:r.projects)!=null&&q.length){const s=r.projects.map(c=>Ve(c)).join(`
---
`);i(c=>[...c,{type:"response",text:s}])}else i(s=>[...s,{type:"response",text:"No projects found."}]);else if(o==="skills")if((L=r==null?void 0:r.skills)!=null&&L.length){const s={};Array.isArray(r.skills)&&r.skills.forEach(m=>{const p=m.category||"Other";s[p]||(s[p]=[]),s[p].push(m)});let c="";Object.keys(s).forEach(m=>{c+=`
== ${m} ==
`,s[m].forEach(p=>{const O=p.proficiency?`[${"█".repeat(Math.floor(p.proficiency/10))}${" ".repeat(10-Math.floor(p.proficiency/10))}] ${p.proficiency}%`:"";c+=`${p.name}: ${O}
`})}),i(m=>[...m,{type:"response",text:c}])}else i(s=>[...s,{type:"response",text:"No skills data found."}]);else if(o==="experience")if((te=r==null?void 0:r.experience)!=null&&te.length){const s=r.experience.map(c=>ze(c)).join(`
---
`);i(c=>[...c,{type:"response",text:s}])}else i(s=>[...s,{type:"response",text:"No experience data found."}]);else if(o==="education")if((ne=r==null?void 0:r.education)!=null&&ne.length){const s=r.education.map(c=>Je(c)).join(`
---
`);i(c=>[...c,{type:"response",text:s}])}else i(s=>[...s,{type:"response",text:"No education data found."}]);else if(o==="contact"){const s=((oe=r==null?void 0:r.personalInfo)==null?void 0:oe.email)||R.EMAIL;i(c=>{var m,p;return[...c,{type:"response",text:`
Email: ${s}
${(m=r==null?void 0:r.personalInfo)!=null&&m.phone?`Phone: ${r.personalInfo.phone}`:""}
${(p=r==null?void 0:r.personalInfo)!=null&&p.location?`Location: ${r.personalInfo.location}`:""}

You can reach out via email or use the links in the 'social' command.
`}]})}else if(o==="social"){const s=((se=r==null?void 0:r.socialLinks)==null?void 0:se.github)||"",c=((re=r==null?void 0:r.socialLinks)==null?void 0:re.linkedin)||"",m=((ie=r==null?void 0:r.socialLinks)==null?void 0:ie.twitter)||"",p=((ae=r==null?void 0:r.socialLinks)==null?void 0:ae.website)||"";i(O=>[...O,{type:"response",text:`
${s?`GitHub: ${s}`:""}
${c?`LinkedIn: ${c}`:""}
${m?`Twitter: ${m}`:""}
${p?`Website: ${p}`:""}
`}])}else if(o==="github"){const s=r==null?void 0:r.githubStats;i(s?c=>{var m;return[...c,{type:"response",text:`
GitHub Stats for ${((m=r==null?void 0:r.personalInfo)==null?void 0:m.name)||R.NAME}:

Total Repos: ${s.totalPublicRepos||"N/A"}
Total Stars: ${s.totalStars||"N/A"}
Total Forks: ${s.totalForks||"N/A"}
Total Contributions: ${s.totalCommits||"N/A"}

`}]}:c=>[...c,{type:"response",text:"No GitHub stats available."}])}else if(o==="matrix")v(!A),i(s=>[...s,{type:"response",text:A?"Matrix effect disabled.":"Matrix effect enabled. May the force be with you."}]);else if(o==="download"||o.startsWith("download ")){const s=o.split(" ");if(s.length===1){if(r){const c=ee(r);i(c?m=>[...m,{type:"success",text:"Downloading portfolio.json file..."},{type:"response",text:"After downloading, place the file in the data/ folder to use your custom portfolio data."}]:m=>[...m,{type:"error",text:"Failed to download portfolio data."}])}else i(c=>[...c,{type:"error",text:"No portfolio data available to download."}]);return}if(s.includes("-p"))if(r){const c=ee(r);i(c?m=>[...m,{type:"success",text:"Downloading portfolio.json file..."},{type:"response",text:"After downloading, place the file in the data/ folder to use your custom portfolio data."}]:m=>[...m,{type:"error",text:"Failed to download portfolio data."}])}else i(c=>[...c,{type:"error",text:"No portfolio data available to download."}]);if(s.includes("-r")){const c=je.RESUME_URL,m=document.createElement("a");m.href=c,m.target="_blank",m.rel="noopener noreferrer",m.download="resume.pdf",document.body.appendChild(m),m.click(),document.body.removeChild(m),i(p=>[...p,{type:"success",text:`Downloading resume from ${c}...`}])}!s.includes("-p")&&!s.includes("-r")&&i(c=>[...c,{type:"error",text:'Invalid download flag. Use "download -p" for portfolio or "download -r" for resume.'}])}else if(o==="reload")i(s=>[...s,{type:"response",text:"Reloading portfolio data with AI..."}]),fe().then(()=>{i(s=>[...s,{type:"success",text:"Portfolio data successfully reloaded!"}])}).catch(s=>{i(c=>[...c,{type:"error",text:`Error reloading data: ${s.message}`}])});else if(o==="ascii")i(s=>[...s,{type:"response",text:le}]);else if(o==="exit")if(window.confirm("This will close the current tab. Are you sure you want to exit?"))try{window.close(),setTimeout(()=>{window.location.href="about:blank"},100),setTimeout(()=>{$({title:"Unable to close tab automatically",description:"Please close this tab manually",duration:5e3})},300)}catch(s){console.error("Error closing window:",s)}else $({title:"Exit Canceled",description:"You can continue using the terminal",duration:2e3});else Ue(n,he)?pe(n):i(s=>[...s,{type:"error",text:`Command not found: ${n}. Type 'help' to see available commands.`}])},we=e=>{e.preventDefault(),V(t),a("")},xe=e=>{if(e.key==="ArrowUp"){if(e.preventDefault(),g<u.length-1){const n=g+1;I(n),a(u[u.length-1-n])}}else if(e.key==="ArrowDown")if(e.preventDefault(),g>0){const n=g-1;I(n),a(u[u.length-1-n])}else g===0&&(I(-1),a(""));else if(e.key==="Tab"){e.preventDefault();const n=[...Object.keys(ce),"help","clear","about","projects","skills","experience","education","contact","social","github","matrix","download","reload","ascii","exit","fortune","typingtest","coffee","rocket","cow","sudo","42"];if(t){const o=n.filter(d=>d.startsWith(t.toLowerCase()));o.length===1?a(o[0]):o.length>1&&i(d=>[...d,{type:"command",text:`> ${t}`},{type:"response",text:`Possible commands: ${o.join(", ")}`}])}}},be=()=>{const e=Object.keys(S),o=(e.indexOf(k)+1)%e.length,d=e[o];X(d),$({title:"Theme Changed",description:`Using theme: ${S[d].name}`,duration:2e3})},ve=()=>{if(window.confirm("This will close the current tab. Are you sure you want to exit?"))try{window.close(),setTimeout(()=>{window.location.href="about:blank"},100),setTimeout(()=>{$({title:"Unable to close tab automatically",description:"Please close this tab manually",duration:5e3})},300)}catch(e){console.error("Error closing window:",e)}else $({title:"Exit Canceled",description:"You can continue using the terminal",duration:2e3})},Te=()=>{if(ue(!P),P){const e=B.current;Array.isArray(e)?i(e):i([{type:"info",text:"Terminal view restored",isAnimating:!1,animatedText:"Terminal view restored"}])}else{if(u.length===0){$({title:"History View",description:"No command history to display",duration:2e3});return}const e=u.map((o,d)=>({type:"command",text:`${d+1}. ${o}`,isAnimating:!1,animatedText:`${d+1}. ${o}`})),n=[...x];i([{type:"info",text:"--- Showing Command History ---",isAnimating:!1,animatedText:"--- Showing Command History ---"},...e,{type:"info",text:"--- End of History (Click history button to return) ---",isAnimating:!1,animatedText:"--- End of History (Click history button to return) ---"}]),B.current=setTimeout(()=>{B.current=n},100)}},Ae=()=>{if(T(!w),w)try{document.exitFullscreen&&document.exitFullscreen()}catch(e){console.error("Exit fullscreen failed:",e)}else try{const e=document.documentElement;e.requestFullscreen&&e.requestFullscreen()}catch(e){console.error("Fullscreen request failed:",e)}};f.useEffect(()=>{const e=n=>{if(y.isActive){n.code==="Space"?(n.preventDefault(),$e()):n.code==="Enter"||n.code==="NumpadEnter"?(n.preventDefault(),ke()):n.key.toLowerCase()==="q"&&(n.preventDefault(),z());return}const o=x.some(d=>d.isAnimating);(n.code==="Enter"||n.code==="NumpadEnter")&&o&&(n.preventDefault(),Y(!0))};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[x,y]);const Ee=e=>{const n=e.split(`
`);U({isActive:!0,content:n,currentLine:0,totalLines:n.length}),J()},z=()=>{Ie([{type:"info",text:"--- Pager closed ---",isAnimating:!1,animatedText:"--- Pager closed ---"}]),U({isActive:!1,content:[],currentLine:0,totalLines:0}),setTimeout(()=>{var e;return(e=N.current)==null?void 0:e.focus()},10)},$e=()=>{if(!y.isActive)return;const e=Math.min(y.currentLine+M,y.totalLines);e>=y.totalLines?z():(U(n=>({...n,currentLine:e})),J())},ke=()=>{if(!y.isActive)return;const e=Math.min(y.currentLine+1,y.totalLines);e>=y.totalLines?z():(U(n=>({...n,currentLine:e})),J())},J=()=>{if(!y.isActive)return;const e=y.currentLine,n=Math.min(e+M,y.totalLines),o=y.content.slice(e,n);i([{type:"response",text:o.join(`
`),isAnimating:!1,animatedText:o.join(`
`)},{type:"info",text:`--- Page ${Math.floor(e/M)+1}/${Math.ceil(y.totalLines/M)} (${y.currentLine+1}-${n}/${y.totalLines} lines) | SPACE: next page | ENTER: next line | q: quit ---`,isAnimating:!1,animatedText:`--- Page ${Math.floor(e/M)+1}/${Math.ceil(y.totalLines/M)} (${y.currentLine+1}-${n}/${y.totalLines} lines) | SPACE: next page | ENTER: next line | q: quit ---`}])},Ce=e=>{var n;if(y.isActive){e.preventDefault();return}if(e.key==="Enter"){e.preventDefault();const o=t;a(""),(n=N.current)==null||n.blur(),setTimeout(()=>{V(o),setTimeout(()=>{var d;(d=N.current)==null||d.focus()},100)},10)}},Le=e=>{if(e.type==="command")return e.isAnimating?e.animatedText:e.text;if(!e.isAnimating&&e.parsedContent)return e.parsedContent;const n=e.isAnimating?e.animatedText:e.text;if(!n)return"";const o=qe(n);return e.isAnimating||(e.parsedContent=o),o},Ie=e=>{if(y.isActive)return;const n=e.map(d=>({...d,isAnimating:d.type!=="command",animatedText:d.type==="command"?d.text:""})),o=n.find(d=>{const b=(d.text.match(/\n/g)||[]).length+1;return d.type==="response"&&b>M});o?(i(d=>[...d,{type:"info",text:"--- Entering pager mode ---",isAnimating:!1,animatedText:"--- Entering pager mode ---"}]),setTimeout(()=>Ee(o.text),10)):i(d=>[...d,...n])};return h.jsxs("div",{className:`terminal-container ${P?"history-view":""} ${w?"terminal-fullscreen":""} ${_?"retro-mode":""}`,ref:me,children:[A&&h.jsx(_e,{themeColor:S[k].text}),h.jsxs("div",{className:"terminal-header",children:[h.jsxs("div",{className:"terminal-header-buttons",children:[h.jsx("button",{className:"terminal-header-button terminal-button-exit",onClick:ve,title:"Close tab"}),h.jsx("button",{className:"terminal-header-button terminal-button-theme",onClick:be,title:"Change theme"}),h.jsx("button",{className:"terminal-header-button terminal-button-maximize",onClick:Ae,title:"Toggle fullscreen"})]}),h.jsxs("h1",{children:["LiveInsight - Terminal ",P?" - Command History":` - ${S[k].name}`]})]}),h.jsxs("div",{className:"terminal-output",ref:H,children:[x.map((e,n)=>h.jsxs(Q.Fragment,{children:[h.jsxs("pre",{className:`terminal-line ${e.type}`,children:[Le(e),e.isAnimating&&h.jsx("span",{className:"cursor-blink",children:"█"})]}),n===x.length-1&&e.isAnimating&&h.jsx("pre",{className:"terminal-line terminal-hint",children:"Press ENTER to fast-forward..."})]},n)),!y.isActive&&!P&&h.jsxs("form",{onSubmit:we,className:"terminal-input-line",children:[h.jsx("span",{className:"terminal-prompt",children:">"}),h.jsx("input",{type:"text",className:"terminal-input",value:t,onChange:e=>a(e.target.value),onKeyDown:e=>{Ce(e),xe(e)},ref:N,autoFocus:!0,spellCheck:"false",autoComplete:"off","aria-label":"Terminal input"})]}),P&&h.jsxs("div",{className:"history-controls",children:[h.jsx("button",{onClick:Te,className:"history-back-button",children:"Return to Terminal"}),h.jsx("button",{onClick:()=>V("clear-history"),className:"history-clear-button",children:"Clear History"})]})]})]})},nt=()=>(f.useEffect(()=>{document.documentElement.classList.add("dark"),document.documentElement.style.setProperty("color-scheme","dark")},[]),h.jsx(Fe,{defaultTheme:"dark",storageKey:"portfolio-theme",children:h.jsx(De,{children:h.jsxs("div",{className:"min-h-screen bg-black terminal-container",children:[h.jsx(Qe,{}),h.jsx(Ne,{}),h.jsx(Re,{})]})})}));export{nt as default};
