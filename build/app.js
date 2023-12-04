!function(){"use strict";new class{constructor(){this.x=new(window.AudioContext||webkitAudioContext),this.volume=.3,this.sampleRate=44100,this.samples=0}Play(t){const e=t&&"object"==typeof t?this.SoundToArray(t):arguments,s=this.BuildSamples(...e);return this.PlaySamples(s)}PlaySamples(t){const e=this.x.createBuffer(1,t.length,this.sampleRate),s=this.x.createBufferSource();return e.getChannelData(0).set(t),s.buffer=e,s.connect(this.x.destination),s.start(),this.samples=t,s}BuildSamples(t=1,e=.05,s=220,i=0,n=0,a=.1,r=0,o=1,l=0,c=0,h=0,u=0,d=0,f=0,x=0,p=0,g=0,y=1,w=0,v=0){let b,M,m=2*Math.PI,S=this.sampleRate,k=t=>t>0?1:-1,P=l*=500*m/S**2,T=k(x)*m/4,C=s*=(1+2*e*Math.random()-e)*m/S,E=[],I=0,R=0,A=0,B=1,V=0,q=0,L=0;for(c*=500*m/S**3,x*=m/S,h*=m/S,u*=S,d=d*S|0,M=(i=99+i*S)+(w*=S)+(n*=S)+(a*=S)+(g*=S)|0;A<M;E[A++]=L)++q%(100*p|0)||(L=r?r>1?r>2?r>3?Math.sin((I%m)**3):Math.max(Math.min(Math.tan(I),1),-1):1-(2*I/m%2+2)%2:1-4*Math.abs(Math.round(I/m)-I/m):Math.sin(I),L=(d?1-v+v*Math.sin(2*Math.PI*A/d):1)*k(L)*Math.abs(L)**o*t*this.volume*(A<i?A/i:A<i+w?1-(A-i)/w*(1-y):A<i+w+n?y:A<M-g?(M-A-g)/a*y:0),L=g?L/2+(g>A?0:(A<M-g?1:(M-A)/g)*E[A-g|0]/2):L),b=(s+=l+=c)*Math.sin(R*x-T),I+=b-b*f*(1-1e9*(Math.sin(A)+1)%2),R+=b-b*f*(1-1e9*(Math.sin(A)**2+1)%2),B&&++B>u&&(s+=h,C+=h,B=0),!d||++V%d||(s=C,l=P,B=B||1);return E}BuildRandomSound(t=1,e=1,s=.05){const i=()=>Math.random(),n=()=>i()<.5?i():0,a=()=>n()?1:-1,r=i()**3/4*t,o=i()**3/4*t,l=i()**3/4*t,c=i()**3/4*t,h=r+o+l+c;return this.BuildSound(e,s,i()**2*2e3,r,l,c,5*i()|0,i()**2*3,n()**3*99*a(),n()**3*99*a(),n()**2*1e3*a(),i()**2*h,n()*h,n()**4,n()**3*9*a(),n()**4,n()**3/2,1-n(),o,n()**4)}BuildSound(t=1,e=.05,s=220,i=0,n=0,a=.1,r=0,o=1,l=0,c=0,h=0,u=0,d=0,f=0,x=0,p=0,g=0,y=1,w=0,v=0){return{volume:t,randomness:e,frequency:s,attack:i,sustain:n,release:a,shape:r,shapeCurve:o,slide:l,deltaSlide:c,pitchJump:h,pitchJumpTime:u,repeatTime:d,noise:f,modulation:x,bitCrush:p,delay:g,sustainVolume:y,decay:w,tremolo:v}}GetNote(t=0,e=440){return e*2**(t/12)}SoundToArray(t){const e=this.BuildSound(),s=[];for(const i in e)s.push(t[i]);return s}};let t=44100,e=(e=1,i=.05,n=220,a=0,r=0,o=.1,l=0,c=1,h=0,u=0,d=0,f=0,x=0,p=0,g=0,y=0,w=0,v=1,b=0,M=0)=>{let m,S,k,P,T=2*Math.PI,C=t=>t>0?1:-1,E=h*=500*T/t**2,I=C(g)*T/4,R=n*=(1+2*i*Math.random()-i)*T/t,A=[],B=0,V=0,q=0,L=1,D=0,j=0,G=0;for(u*=500*T/t**3,g*=T/t,d*=T/t,f*=t,x=x*t|0,S=(a=99+a*t)+(b*=t)+(r*=t)+(o*=t)+(w*=t)|0;q<S;A[q++]=G)++j%(100*y|0)||(G=l?l>1?l>2?l>3?Math.sin((B%T)**3):Math.max(Math.min(Math.tan(B),1),-1):1-(2*B/T%2+2)%2:1-4*Math.abs(Math.round(B/T)-B/T):Math.sin(B),G=(x?1-M+M*Math.sin(2*Math.PI*q/x):1)*C(G)*Math.abs(G)**c*e*.3*(q<a?q/a:q<a+b?1-(q-a)/b*(1-v):q<a+b+r?v:q<S-w?(S-q-w)/o*v:0),G=w?G/2+(w>q?0:(q<S-w?1:(S-q)/w)*A[q-w|0]/2):G),m=(n+=h+=u)*Math.sin(V*g-I),B+=m-m*p*(1-1e9*(Math.sin(q)+1)%2),V+=m-m*p*(1-1e9*(Math.sin(q)**2+1)%2),L&&++L>f&&(n+=d,R+=d,L=0),!x||++D%x||(n=R,h=E,L=L||1);return k=s.createBuffer(1,S,t),k.getChannelData(0).set(A),P=s.createBufferSource(),P.buffer=k,P.connect(s.destination),P.start(),P},s=new(window.AudioContext||webkitAudioContext);function i(t,e){const s=t.audioContext||new AudioContext,i=t.sampleRate||s.sampleRate,n=t.channels||2,a=1.5*t.decay,r=Math.ceil(i*a),o=Math.ceil(i*t.fadeIn),l=Math.ceil(i*t.decay),c=Math.pow(.001,1/l),h=s.createBuffer(n,r,i);for(let t=0;t<n;++t){const e=h.getChannelData(t);for(let t=0;t<r;++t)e[t]=(Math.floor(9007199254740992*Math.random())/9007199254740991*2-1)*Math.pow(c,t);for(let t=0;t<o;++t)e[t]*=t/o}!function(t,e,s,i,n){if(!e)return void n(t);e=Math.min(e,.5*t.sampleRate),s=Math.min(s,.5*t.sampleRate);const a=function(t){const e=[];for(let s=0;s<t.numberOfChannels;++s)e[s]=t.getChannelData(s);return e}(t),r=new OfflineAudioContext(t.numberOfChannels,a[0].length,t.sampleRate),o=r.createBufferSource(),l=r.createBiquadFilter();l.type="lowpass",l.Q.value=1e-4,l.frequency.setValueAtTime(e,0),l.frequency.linearRampToValueAtTime(s,i),l.connect(r.destination),o.buffer=t,o.connect(l),o.start(),r.oncomplete=function(t){n(t.renderedBuffer)},r.startRendering()}(h,t.lpFreqStart,t.lpFreqEnd,t.decay,e)}"undefined"==typeof AudioContext&&(window.AudioContext=window.webkitAudioContext,window.OfflineAudioContext=window.webkitOfflineAudioContext);const n=120/118;let a,r,o;function l(){return a=new AudioContext,r=a.createGain(),r.gain.value=.4,function(){const t=a.createConvolver(),e=a.createGain(),s=a.createGain();return e.gain.value=2/3,s.gain.value=1/3,r.connect(t),r.connect(e),t.connect(s),e.connect(a.destination),s.connect(a.destination),new Promise((function(e){i({audioContext:a,fadeIn:1e-5,decay:1.5*n,lpFreqStart:16e3,lpFreqEnd:1e3},(function(s){t.buffer=s,e()}))}))}()}function c(t,e,s){const i=function(t){return 120*Math.pow(2,(t-69)/12)}(t);e*=n,s*=n;const l=a.createOscillator();l.type="square",l.frequency.value=i,function(t,e){const s=a.createGain();return s.gain.setValueAtTime(.5,o+e),s.gain.exponentialRampToValueAtTime(1e-5,o+e+1.5*n),t.connect(s),s}(l,e).connect(r),l.start(o+e),l.stop(o+s)}function h(t){switch(t>51?(t-8)%44+8:t){case 0:c(57,t+0,t+.25),c(45,t+0,t+2),c(60,t+.25,t+.5),c(57,t+.5,t+.75),c(64,t+.75,t+1.25);break;case 1:c(60,t+.25,t+.75),c(60,t+.75,t+1);break;case 2:c(52,t+0,t+1),c(60,t+.25,t+.5),c(57,t+.5,t+.75),c(64,t+.75,t+1.25);break;case 3:c(52,t+0,t+.75),c(60,t+.25,t+.75),c(60,t+.75,t+1),c(52,t+.75,t+1);break;case 4:c(45,t+0,t+1.75),c(57,t+.25,t+.5),c(60,t+.5,t+.75),c(64,t+.75,t+1.25),c(57,t+.75,t+1.25);break;case 5:c(57,t+.25,t+.5),c(60,t+.5,t+1),c(52,t+.75,t+1);break;case 6:c(60,t+0,t+1),c(52,t+0,t+.5),c(52,t+.5,t+1.5);break;case 7:c(64,t+0,t+1),c(52,t+.5,t+.75),c(52,t+.75,t+1);break;case 8:c(57,t+0,t+.25),c(45,t+0,t+.75),c(57,t+.25,t+.5),c(57,t+.5,t+.75),c(60,t+.75,t+1.25),c(52,t+.75,t+1.75);break;case 9:c(69,t+.25,t+.5),c(67,t+.5,t+.75),c(69,t+.75,t+1),c(52,t+.75,t+1);break;case 10:c(69,t+0,t+.75),c(41,t+0,t+.25),c(48,t+.25,t+.5),c(55,t+.5,t+1.5),c(57,t+.75,t+1.75);break;case 11:c(55,t+.5,t+.75),c(67,t+.75,t+1),c(50,t+.75,t+1);break;case 12:c(67,t+0,t+.25),c(55,t+0,t+.75),c(67,t+.25,t+.5),c(67,t+.5,t+.75),c(66,t+.75,t+1.25),c(57,t+.75,t+1.75),c(54,t+.75,t+1.75);break;case 13:case 21:c(67,t+.25,t+.5),c(66,t+.5,t+.75),c(64,t+.75,t+1),c(47,t+.75,t+1);break;case 14:case 22:c(52,t+0,t+.25),c(47,t+0,t+2),c(54,t+.25,t+.5),c(56,t+.5,t+.75),c(59,t+.75,t+1.75);break;case 15:c(57,t+.75,t+1);break;case 16:c(57,t+0,t+.25),c(45,t+0,t+.75),c(57,t+.25,t+.5),c(57,t+.5,t+.75),c(60,t+.75,t+1.25),c(52,t+.75,t+1.25);break;case 17:c(69,t+.25,t+.5),c(57,t+.25,t+1),c(67,t+.5,t+.75),c(69,t+.75,t+1);break;case 18:c(69,t+0,t+.75),c(57,t+0,t+.25),c(53,t+0,t+.25),c(48,t+0,t+.25),c(48,t+.25,t+.5),c(55,t+.5,t+.75),c(65,t+.75,t+1.75),c(57,t+.75,t+1.25);break;case 19:c(57,t+.25,t+.5),c(60,t+.5,t+1),c(67,t+.75,t+1);break;case 20:c(67,t+0,t+.25),c(43,t+0,t+.5),c(59,t+.25,t+.5),c(67,t+.5,t+.75),c(50,t+.5,t+.75),c(66,t+.75,t+1.25),c(47,t+.75,t+1.75);break;case 23:c(67,t+.75,t+1);break;case 24:c(67,t+0,t+.25),c(59,t+0,t+.5),c(55,t+0,t+.5),c(62,t+.25,t+.5),c(67,t+.5,t+.75),c(59,t+.5,t+.75),c(67,t+.75,t+1.25),c(57,t+.75,t+1.25);break;case 25:c(67,t+.25,t+.5),c(50,t+.25,t+.5),c(67,t+.5,t+.75),c(43,t+.5,t+1),c(68,t+.75,t+1),c(64,t+.75,t+1);break;case 26:c(68,t+0,t+.25),c(64,t+0,t+.25),c(40,t+0,t+.5),c(64,t+.25,t+.5),c(62,t+.5,t+.75),c(47,t+.5,t+.75),c(62,t+.75,t+1.25),c(52,t+.75,t+1.5);break;case 27:c(60,t+.25,t+.75),c(52,t+.5,t+.75),c(57,t+.75,t+1),c(47,t+.75,t+1);break;case 28:c(60,t+0,t+.5),c(45,t+0,t+.5),c(72,t+.5,t+1),c(64,t+.5,t+1),c(57,t+.5,t+.75),c(48,t+.75,t+1);break;case 29:c(60,t+0,t+.25),c(57,t+0,t+.75),c(53,t+0,t+.75),c(65,t+.25,t+.5),c(67,t+.5,t+.75),c(72,t+.75,t+1),c(43,t+.75,t+1);break;case 30:c(72,t+0,t+.25),c(64,t+0,t+.25),c(60,t+0,t+.25),c(48,t+0,t+.5),c(36,t+0,t+.5),c(72,t+.25,t+.5),c(64,t+.25,t+.5),c(60,t+.25,t+.5),c(72,t+.5,t+.75),c(64,t+.5,t+.75),c(60,t+.5,t+.75),c(55,t+.5,t+.75),c(72,t+.75,t+1.25),c(64,t+.75,t+1.25),c(60,t+.75,t+1.25),c(50,t+.75,t+1.5);break;case 31:c(71,t+.25,t+1),c(62,t+.25,t+1),c(59,t+.25,t+1),c(57,t+.5,t+.75),c(50,t+.75,t+1);break;case 32:c(72,t+0,t+.25),c(64,t+0,t+.25),c(60,t+0,t+.25),c(57,t+0,t+.5),c(52,t+0,t+.5),c(45,t+0,t+.5),c(72,t+.25,t+.5),c(72,t+.5,t+.75),c(59,t+.5,t+1),c(72,t+.75,t+1.25);break;case 33:c(57,t+0,t+.5),c(53,t+0,t+.5),c(48,t+0,t+.5),c(71,t+.25,t+.5),c(69,t+.5,t+.75),c(48,t+.5,t+1),c(67,t+.75,t+1),c(64,t+.75,t+1),c(60,t+.75,t+1);break;case 34:c(67,t+0,t+.25),c(64,t+0,t+.25),c(60,t+0,t+.25),c(36,t+0,t+.5),c(69,t+.25,t+.5),c(71,t+.5,t+.75),c(43,t+.5,t+.75),c(72,t+.75,t+1.25),c(68,t+.75,t+1.25),c(64,t+.75,t+1.25),c(48,t+.75,t+1);break;case 35:c(40,t+0,t+.5),c(71,t+.25,t+1),c(56,t+.5,t+.75),c(52,t+.75,t+1);break;case 36:c(60,t+0,t+.5),c(45,t+0,t+.25),c(52,t+.25,t+.5),c(72,t+.5,t+1),c(64,t+.5,t+1),c(60,t+.5,t+1),c(57,t+.5,t+1);break;case 37:c(60,t+0,t+.25),c(57,t+0,t+.5),c(53,t+0,t+.5),c(65,t+.25,t+.5),c(67,t+.5,t+.75),c(48,t+.5,t+.75),c(72,t+.75,t+1),c(60,t+.75,t+1),c(43,t+.75,t+1);break;case 38:c(72,t+0,t+.25),c(67,t+0,t+.25),c(60,t+0,t+.25),c(48,t+0,t+.5),c(72,t+.25,t+.5),c(60,t+.25,t+.5),c(72,t+.5,t+.75),c(60,t+.5,t+.75),c(55,t+.5,t+.75),c(72,t+.75,t+1.25),c(67,t+.75,t+1.25),c(62,t+.75,t+1.25),c(50,t+.75,t+1);break;case 39:c(43,t+0,t+.25),c(71,t+.25,t+.75),c(67,t+.25,t+.75),c(62,t+.25,t+.75),c(50,t+.25,t+.5),c(57,t+.5,t+1),c(59,t+.75,t+1);break;case 40:c(72,t+0,t+.5),c(64,t+0,t+.5),c(60,t+0,t+.5),c(52,t+0,t+.5),c(45,t+0,t+.5),c(72,t+.5,t+.75),c(64,t+.5,t+.75),c(60,t+.5,t+.75),c(57,t+.5,t+.75),c(72,t+.75,t+1.25),c(67,t+.75,t+1.25),c(60,t+.75,t+1.25),c(48,t+.75,t+1);break;case 41:c(57,t+0,t+.5),c(53,t+0,t+.5),c(48,t+0,t+.5),c(71,t+.25,t+.5),c(69,t+.5,t+.75),c(60,t+.5,t+.75),c(57,t+.5,t+.75),c(67,t+.75,t+1),c(53,t+.75,t+1);break;case 42:c(67,t+0,t+.25),c(48,t+0,t+.25),c(36,t+0,t+.25),c(69,t+.25,t+.5),c(43,t+.25,t+.5),c(71,t+.5,t+.75),c(48,t+.5,t+.75),c(72,t+.75,t+1.25),c(68,t+.75,t+1.25),c(64,t+.75,t+1.25),c(60,t+.75,t+1.25),c(44,t+.75,t+1);break;case 43:c(52,t+0,t+.25),c(71,t+.25,t+1),c(68,t+.25,t+1),c(64,t+.25,t+1),c(47,t+.25,t+.5),c(56,t+.5,t+.75),c(52,t+.75,t+1);break;case 44:c(72,t+0,t+.5),c(64,t+0,t+.5),c(60,t+0,t+.5),c(57,t+0,t+.25),c(45,t+0,t+.25),c(52,t+.25,t+.5),c(72,t+.5,t+.75),c(60,t+.5,t+.75),c(57,t+.5,t+.75),c(72,t+.75,t+1.25),c(67,t+.75,t+1.25),c(60,t+.75,t+1.25),c(48,t+.75,t+1);break;case 45:c(57,t+0,t+.25),c(53,t+0,t+.25),c(71,t+.25,t+.5),c(55,t+.25,t+.5),c(69,t+.5,t+.75),c(48,t+.5,t+1),c(67,t+.75,t+1),c(64,t+.75,t+1),c(60,t+.75,t+1);break;case 46:c(67,t+0,t+.25),c(64,t+0,t+.25),c(60,t+0,t+.25),c(48,t+0,t+.25),c(36,t+0,t+.25),c(69,t+.25,t+.5),c(43,t+.25,t+.5),c(71,t+.5,t+.75),c(48,t+.5,t+1),c(72,t+.75,t+1.25),c(68,t+.75,t+1.25),c(60,t+.75,t+1.25);break;case 47:c(52,t+0,t+.5),c(40,t+0,t+.5),c(71,t+.25,t+1),c(68,t+.25,t+1),c(62,t+.25,t+1),c(47,t+.5,t+.75),c(52,t+.75,t+1);break;case 48:c(71,t+0,t+2),c(68,t+0,t+2),c(62,t+0,t+2),c(52,t+0,t+.25),c(54,t+.25,t+.75),c(56,t+.75,t+1.25);break;case 49:c(54,t+.25,t+.5),c(56,t+.5,t+1);break;case 50:c(64,t+0,t+1.75);break;case 51:c(52,t+.75,t+1)}}let u=-1;function d(){let t=a.currentTime-o+4,e=(u+1)*n;if(!(e>t))for(t+=4;e<t;)h(++u),e+=n}function f(){o=a.currentTime+.05,d(),setInterval(d,999)}class x{constructor(t=0,e=0){this.x=t,this.y=e}set(t,e){this.x=t,this.y=e}setTo(t){this.x=t.x,this.y=t.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}distanceSquared(t){const e=this.x-t.x,s=this.y-t.y;return e*e+s*s}add(t){this.x+=t.x,this.y+=t.y}subtract(t){this.x-=t.x,this.y-=t.y}setSubtract(t,e){this.x=t.x-e.x,this.y=t.y-e.y}dot(t){return this.x*t.x+this.y*t.y}scalarMult(t){this.x*=t,this.y*=t}setScalarMult(t,e){this.x=t.x*e,this.y=t.y*e}setNormal(t,e){this.x=t.y-e.y,this.y=e.x-t.x;const s=this.length();s<Number.MIN_VALUE||this.scalarMult(1/s)}}const p=2*Math.PI,g=.5*Math.PI,y=.25*Math.PI,w=.125*Math.PI;function v(t,e,s){return t*(1-s)+e*s}function b(t){return t*t}function M(t){return t*(2-t)}function m(t){return t<.5?2*t*t:2*t*(2-t)-1}function S(t,e,s,i){U.translate(t,e),U.scale((s-t)/512,(i-e)/512)}function k(t,e,s){const i=document.createElement("canvas"),n=i.getContext("2d");return F(i,n,t,e),s(n),i}const P=new x,T=new x;function C(e){try{null===e.buf&&(e.buf=a.createBuffer(1,e.raw.length,t),e.buf.getChannelData(0).set(e.raw));const s=a.createBufferSource();s.buffer=e.buf,s.connect(a.destination),s.start()}catch(t){}}const E={raw:e.apply(null,[,,132,,,.46,,.11,9.1,,,,,.1,,,.04,.56,.05]),buf:null},I={raw:e.apply(null,[,,382,,,.48,2,.35,-.6,,,,,,,,.2,.72,.09]),buf:null},R={raw:e.apply(null,[,,345,.01,.17,.87,1,1.05,.2,,67,.03,.02,,-.2,,,.79,,.04]),buf:null};let A=!1;function B(){try{l().then(f)}catch(t){}A=!0}class V{constructor(t,e,s){this.parent=t,this.position=new x(e,s),this.oldPosition=new x(e,s),this.interpolated=new x,t.vertices.push(this),t.positions.push(this.position),t.scene.vertices.push(this)}integrate(t=0,e=0){const s=this.position,i=this.oldPosition,n=s.x,a=s.y;s.x+=1*(s.x-i.x),s.y+=1*(s.y-i.y)+t,i.set(n,a),s.y<0?s.y=0:s.y>=540&&(s.x-=(s.x-i.x)*e,s.y=539),s.x<0?s.x=0:s.x>=960&&(s.x=959)}interpolate(t){this.interpolated.set(v(this.oldPosition.x,this.position.x,t),v(this.oldPosition.y,this.position.y,t))}}class q extends V{constructor(t,e,s){super(t,e,s),this.x=e,this.y=s}set(t,e){this.x=t,this.y=e}integrate(){this.position.set(this.x,this.y),this.oldPosition.set(this.x,this.y)}interpolate(t){this.interpolated.set(this.x,this.y)}}class L{constructor(t,e,s,i=!1,n=1){if(this.parent=t,this.v0=e,this.v1=s,this.p0=e.position,this.p1=s.position,this.dist=this.p0.distanceSquared(this.p1),this.edge=i,this.stiffness=n,!this.dist)throw Error("Overlapping vertices.");t.constraints.push(this),i&&t.edges.push(this),t.scene.constraints.push(this)}solve(){P.setSubtract(this.p0,this.p1);const t=this.dist/(P.dot(P)+this.dist)-.5;P.scalarMult(t*this.stiffness),this.p0.add(P),this.p1.subtract(P)}}class D{constructor(t,e=1){this.scene=t,this.vertices=[],this.positions=[],this.constraints=[],this.edges=[],this.center=new x,this.halfExtents=new x,this.pMin=0,this.pMax=0,this.mass=e,t.bodies.push(this)}boundingBox(){let t=this.positions[0],e=t.x,s=t.x,i=t.y,n=t.y;for(let a=1;a<this.positions.length;++a)t=this.positions[a],t.x<e?e=t.x:t.x>s&&(s=t.x),t.y<i?i=t.y:t.y>n&&(n=t.y);this.center.set(.5*(e+s),.5*(i+n)),this.halfExtents.set(.5*(s-e),.5*(n-i))}projectOn(t){let e=this.positions[0].dot(t);this.pMin=this.pMax=e;for(let s=1;s<this.positions.length;++s)e=this.positions[s].dot(t),e<this.pMin?this.pMin=e:e>this.pMax&&(this.pMax=e)}paint(t,e){for(const t of this.vertices)t.interpolate(e);t.beginPath();for(const e of this.constraints)e.edge||(t.moveTo(e.v0.interpolated.x,e.v0.interpolated.y),t.lineTo(e.v1.interpolated.x,e.v1.interpolated.y));t.strokeStyle="#ffac7f",t.stroke(),t.beginPath();for(const e of this.vertices)t.lineTo(e.interpolated.x,e.interpolated.y);t.closePath(),t.strokeStyle="#99c2db",t.stroke()}}const j=function(){const t=new x;let e,s,i;function n(t,e,s){return P.setNormal(s.p0,s.p1),t.projectOn(P),e.projectOn(P),t.pMin<e.pMin?e.pMin-t.pMax:t.pMin-e.pMax}return function(a,r){const o=a.edges.length,l=r.edges.length;if(0===o||0===l)return;if(Math.abs(r.center.x-a.center.x)>=a.halfExtents.x+r.halfExtents.x||Math.abs(r.center.y-a.center.y)>=a.halfExtents.y+r.halfExtents.y)return;e=n(a,r,s=a.edges[0]),t.setTo(P);for(let i=1;i<o;++i){const o=a.edges[i],l=n(a,r,o);if(l>0)return;l>e&&(e=l,s=o,t.setTo(P))}for(let i=0;i<l;++i){const o=r.edges[i],l=n(a,r,o);if(l>0)return;l>e&&(e=l,s=o,t.setTo(P))}if(s.parent!==r){const t=a;a=r,r=t}P.setSubtract(a.center,r.center),P.dot(t)<0&&t.scalarMult(-1),P.setSubtract(a.positions[0],r.center);let c=t.dot(P);i=a.vertices[0];for(let e=1;e<a.positions.length;++e){P.setSubtract(a.positions[e],r.center);const s=t.dot(P);s<c&&(c=s,i=a.vertices[e])}!function(){const n=s.p0,a=s.p1,r=(s.v0.oldPosition,s.v1.oldPosition,i.position);i.oldPosition;P.setScalarMult(t,-e),T.setSubtract(a,n);const o=0===T.x&&0===T.y?.5:Math.abs(T.x)>Math.abs(T.y)?(r.x-P.x-n.x)/T.x:(r.y-P.y-n.y)/T.y;let l=i.parent.mass,c=s.parent.mass;const h=l+c;l/=2*h,c/=h;const u=l/(o*o+(1-o)*(1-o)),d=(1-o)*u,f=o*u;n.x-=P.x*d,n.y-=P.y*d,a.x-=P.x*f,a.y-=P.y*f,r.x+=P.x*c,r.y+=P.y*c,0}()}}();class G extends D{constructor(t,e,s,i,n=9,a=.5,r=1){super(t,r);const o=p/n;for(let t=0;t<n;++t){const n=o*t;new V(this,e+i*Math.cos(n),s+i*Math.sin(n))}for(let t=0;t<this.vertices.length-1;++t)for(let e=t+1;e<this.vertices.length;++e)new L(this,this.vertices[t],this.vertices[e],e===t+1,a);this.center.set(e,s),this.halfExtents.set(i,i)}}class O{constructor(){this.vertices=[],this.constraints=[],this.bodies=[]}integrate(){for(let t=0;t<this.vertices.length;++t)this.vertices[t].integrate()}solve(){for(let t=0;t<10;++t){for(const t of this.constraints)t.solve();for(const t of this.bodies)t.boundingBox();for(let t=0;t<this.bodies.length-1;++t)for(let e=t+1;e<this.bodies.length;++e)j(this.bodies[t],this.bodies[e])}}}function F(t,e,s,i){window.devicePixelRatio>1.44?(t.height=2*i,t.width=2*s,e.scale(2,2)):(t.height=i,t.width=s)}const W=(N=".can",document.querySelector(N));var N;const U=W.getContext("2d");F(W,U,960,540);const z=16/9;let J=1,$="transform";$ in W.style||($="webkitTransform");const H="undefined"!=typeof visualViewport;function Q(){let t=H?visualViewport.width:innerWidth,e=H?visualViewport.height:innerHeight;t/e>z?t=e*z:e=t/z,J=960/t;const s=t/960;W.style[$]=`scale3d(${s},${s},1)`}addEventListener("resize",Q),addEventListener("orientationchange",Q),H&&visualViewport.addEventListener("resize",Q);const X="16px -apple-system, 'Segoe UI', system-ui, Roboto, sans-serif",Y=X.replace("16","bold 48");W.addEventListener("contextmenu",(t=>{t.preventDefault()}));const _={dragging:!1,x:0,y:0};function K(t){const e=W.getBoundingClientRect();_.x=(t.clientX-e.left)*J,_.y=(t.clientY-e.top)*J}document.addEventListener("mousedown",(t=>{t.preventDefault(),_.dragging=!0,K(t)})),document.addEventListener("mousemove",(t=>{t.preventDefault(),K(t)})),document.addEventListener("mouseup",(t=>{t.preventDefault(),_.dragging=!1,_.vertex=void 0,A||B()})),document.addEventListener("touchstart",(t=>{t.preventDefault(),_.dragging=!0,K(t.targetTouches[0])})),document.addEventListener("touchmove",(t=>{t.preventDefault(),K(t.targetTouches[0])})),document.addEventListener("touchend",(t=>{t.preventDefault(),_.dragging=!1,_.vertex=void 0,A||B()})),document.addEventListener("touchcancel",(t=>{t.preventDefault(),_.dragging=!1,_.vertex=void 0}));const Z=function(){let t=t=>{},e=t=>{};const s=.02;let i=-1,n=0;function a(r){requestAnimationFrame(a),-1===i&&(i=r),n+=.001*(r-i),i=r;let o=2;for(;n>0;)n-=s,o>0&&(t(s),--o);e(n/s+1)}return function(s,i){t=s,e=i,requestAnimationFrame(a)}}();class tt extends D{constructor(t,e){super(t),this.startingVertex=new q(this,e.x,e.y),this.targetingVertex=new V(this,e.x-.001,e.y),this.lastPosition=new x(e.x,e.y);const s=new L(this,this.startingVertex,this.targetingVertex,!1,.1),i=s.solve;s.solve=()=>{_.vertex||(i.call(s),this.startingVertex.position.setTo(e))}}paint(t,e){this.targetingVertex.interpolate(e);const s=this.startingVertex.position,i=this.targetingVertex.interpolated;t.beginPath(),t.moveTo(i.x,i.y),t.lineTo(s.x,s.y),t.strokeStyle=Ct,t.stroke(),t.beginPath(),t.arc(i.x,i.y,9,0,p),t.arc(s.x,s.y,4,0,p),t.fillStyle=Ct,t.fill()}}class et extends D{constructor(t,e,s,i,n=0,a=1,r=9){super(t,r);const o=g;for(let t=0;t<4;++t){const a=o*t+n;new V(this,e+i*Math.cos(a),s+i*Math.sin(a))}for(let t=0;t<this.vertices.length-1;++t)for(let e=t+1;e<this.vertices.length;++e)new L(this,this.vertices[t],this.vertices[e],e===t+1,a)}retract(){this.scene.vertices.length-=this.vertices.length,this.scene.constraints.length-=this.constraints.length,this.scene.bodies.pop()}paint(){}}class st extends G{constructor(t,e,s){super(t,e,s,32,16,.016),this.relInterp=[];for(let t=0;t<16;++t)this.relInterp.push(new x)}interpolate(t){let e=this.vertices[0];e.interpolate(t);let s=e.interpolated,i=s.x,n=s.x,a=s.y,r=s.y;for(let o=1;o<16;++o)e=this.vertices[o],e.interpolate(t),s=e.interpolated,s.x<i?i=s.x:s.x>n&&(n=s.x),s.y<a?a=s.y:s.y>r&&(r=s.y);this.center.set(.5*(i+n),.5*(a+r)),this.halfExtents.set(.5*(n-i),.5*(r-a));for(let t=0;t<16;++t)this.relInterp[t].setSubtract(this.vertices[t].interpolated,this.center)}tracePath(t,e){t.beginPath();for(const[s,i,n,a]of e)P.setScalarMult(this.relInterp[s],n),T.setScalarMult(this.relInterp[i],a),P.add(T),P.add(this.center),t.lineTo(P.x,P.y);t.closePath()}}const it=[[0,0,1,0],[1,1,1,0],[2,2,1,0],[3,3,1,0],[4,4,1,0],[5,5,1,0],[6,6,1,0],[7,7,1,0],[8,8,1,0],[9,9,1,0],[10,9,.56,.44],[10,11,.75,.21],[10,9,.59,.18],[11,10,.6,.16],[10,11,.39,.16],[12,11,.2,0],[8,7,.25,.22],[7,8,.46,.01],[6,7,.46,.01],[5,6,.46,.01],[4,3,.46,0],[3,4,.46,0],[2,1,.45,0],[1,0,.42,.01],[0,15,.4,.01],[15,14,.39,.01],[14,13,.37,.01],[13,14,.21,.17],[14,13,.43,.01],[15,14,.35,.17],[14,13,.51,.01],[13,12,.6,.01],[13,12,.52,.34],[13,12,.81,.31],[13,12,1,.01],[14,15,.65,.25],[15,0,.85,.04],[15,14,.54,.4],[14,15,.78,.19],[14,15,.52,.48],[15,15,1,0]],nt=U.createRadialGradient(256,576,256,256,-192,256);nt.addColorStop(1-.7,"#e31587"),nt.addColorStop(.47,"#ff3647"),nt.addColorStop(.63,"#ff980e"),nt.addColorStop(.95,"#fff44f");const at=U.createLinearGradient(0,540,960,0);at.addColorStop(0,"#4facfe"),at.addColorStop(1,"#00f2fe");class rt extends st{paint(t,e){this.interpolate(e),t.beginPath();for(const e of this.vertices)t.lineTo(e.interpolated.x,e.interpolated.y);t.closePath(),t.fillStyle=at,t.fill(),this.tracePath(t,it),t.save(),S(this.center.x-this.halfExtents.x,this.center.y-this.halfExtents.y,this.center.x+this.halfExtents.x,this.center.y+this.halfExtents.y),t.fillStyle=nt,t.fill(),t.restore()}}const ot=[[1,1,1,0],[2,2,1,0],[3,3,1,0],[4,4,1,0],[5,5,1,0],[6,6,1,0],[7,7,1,0],[8,8,1,0],[9,9,1,0],[10,10,1,0],[11,11,1,0],[12,12,1,0],[13,13,1,0],[14,14,1,0],[15,15,1,0],[0,0,1,0],[0,1,.68,.33],[8,7,.48,.33],[8,9,.43,.38],[15,0,.38,.08],[15,14,.46,0],[14,13,.51,.01],[13,12,.54,.01],[12,11,.55,.01],[11,12,.54,.01],[10,11,.51,0],[9,8,.47,0],[9,8,.38,.09],[7,8,.33,.14],[7,8,.46,.01],[6,7,.51,.01],[5,6,.55,0],[4,5,.54,.01],[3,4,.54,.01],[2,1,.52,0],[2,1,.41,.11],[1,0,.86,.14]],lt=U.createRadialGradient(256,256,363,256,128,0);lt.addColorStop(0,"#0d79c8"),lt.addColorStop(.7376,"#86e8fd"),lt.addColorStop(1,"#89eafe");class ct extends st{paint(t,e){this.interpolate(e),this.tracePath(t,ot),t.save(),S(this.center.x-this.halfExtents.x,this.center.y-this.halfExtents.y,this.center.x+this.halfExtents.x,this.center.y+this.halfExtents.y),t.fillStyle=lt,t.fill(),t.restore()}}const ht=[[0,0,1,0],[1,1,1,0],[2,2,1,0],[3,3,1,0],[4,4,1,0],[5,5,1,0],[1,2,.31,.15],[12,11,.44,.01],[14,14,1,0],[15,15,1,0]],ut=[[5,5,1,0],[6,6,1,0],[7,7,1,0],[8,8,1,0],[9,9,1,0],[10,10,1,0],[7,6,.31,.15],[1,2,.31,.15],[4,5,.88,.12]],dt=[[10,10,1,0],[11,11,1,0],[12,12,1,0],[13,13,1,0],[14,14,1,0],[15,14,.78,.22],[12,11,.44,.01],[7,6,.31,.15],[9,10,.56,.44]],ft=[[0,1,.45,0],[1,0,.44,.01],[2,3,.44,.01],[3,4,.44,.01],[4,3,.45,0],[5,6,.44,.01],[6,7,.45,.01],[7,8,.44,.01],[8,9,.46,0],[9,10,.45,.01],[10,11,.45,.01],[11,10,.45,0],[12,11,.44,.01],[13,12,.44,.01],[14,13,.44,.01],[15,14,.44,.01]];class xt extends st{paint(t,e){this.interpolate(e),this.tracePath(t,ht),t.fillStyle="#ffcd40",t.fill(),this.tracePath(t,ut),t.fillStyle="#0f9d58",t.fill(),this.tracePath(t,dt),t.fillStyle="#db4437",t.fill(),this.tracePath(t,ft),t.fillStyle="#4285f4",t.fill(),t.lineWidth=2.5,t.strokeStyle="#f1f1f1",t.stroke(),t.lineWidth=1}}class pt extends D{constructor(t,e,s,i=1,n=9){super(t,n);const a=new q(this,e,s),r=new q(this,e+64,s),o=new q(this,e+64,s+256),l=new q(this,e,s+256);new L(this,a,r,!0,i),new L(this,r,o,!0,i),new L(this,o,l,!0,i),new L(this,l,a,!0,i),new L(this,a,o,!1,i),new L(this,r,l,!1,i),this.center.set(e+32,s+128),this.halfExtents.set(32,128)}rotate(t){const e=Math.cos(t),s=Math.sin(t);for(const t of this.vertices)P.setSubtract(t.position,this.center),t.set(this.center.x+P.x*e-P.y*s,this.center.y+P.x*s+P.y*e),t.integrate()}paint(t,e){for(const t of this.vertices)t.interpolate(e);t.beginPath();for(let e=0;e<4;++e)t.lineTo(this.vertices[e].interpolated.x,this.vertices[e].interpolated.y);t.closePath(),t.save(),t.clip(),t.drawImage(At,0,0,960,540),t.restore(),t.strokeStyle=Ct,t.stroke()}}class gt extends D{constructor(t,e,s,i,n=.5,a=1){super(t,a),this.center.set(e,s),this.halfExtents.set(.5*i,.5*i);const r=g,o=this.halfExtents.length();for(let t=0;t<4;++t){const i=r*t+y;new V(this,e+o*Math.cos(i),s+o*Math.sin(i))}for(let t=0;t<this.vertices.length-1;++t)for(let e=t+1;e<this.vertices.length;++e)new L(this,this.vertices[t],this.vertices[e],e===t+1,n)}}gt.prototype.paint=pt.prototype.paint;class yt extends D{constructor(t,e,s,i=.5,n=1){super(t,n);const a=new V(this,e,s),r=new V(this,e+110,s),o=new V(this,e+110,s+196),l=new V(this,e,s+196);new L(this,a,r,!0,i),new L(this,r,o,!0,i),new L(this,o,l,!0,i),new L(this,l,a,!0,i),new L(this,a,o,!1,i),new L(this,r,l,!1,i),this.center.set(e+55,s+98),this.halfExtents.set(55,98)}paint(t,e){for(const t of this.vertices)t.interpolate(e);t.beginPath();let s=0,i=0;for(let e=0;e<4;++e){const n=this.vertices[e].interpolated;t.lineTo(n.x,n.y),s+=n.x,i+=n.y}t.closePath(),t.fillStyle="#f1f1f1",t.fill(),P.setSubtract(this.vertices[1].interpolated,this.vertices[0].interpolated),T.setSubtract(this.vertices[2].interpolated,this.vertices[3].interpolated),t.save(),t.translate(.25*s,.25*i),t.rotate(.5*(Math.atan2(P.y,P.x)+Math.atan2(T.y,T.x))),t.drawImage(bt,-44,-32,88,64),t.restore()}}const wt="#4285f4",vt="#ea4335",bt=k(88,64,(t=>{t.fillStyle="#f1f1f1",t.fillRect(0,0,88,64),t.save(),t.translate(1,0),t.scale(5,5),t.fillStyle=wt,t.fillRect(0,0,3,3),t.fillStyle=vt,t.fillRect(4,1,2,2),t.fillStyle="#fbbc05",t.fillRect(7,1,2,2),t.fillStyle=wt,t.fillRect(10,1,2,3),t.fillStyle="#34a853",t.fillRect(13,0,1,3),t.fillStyle=vt,t.fillRect(15,1,2,2),t.restore(),t.save(),t.translate(0,30),t.scale(3,3),t.fillStyle="#ddd",t.fillRect(0,0,29,4),t.fillStyle="#cdcdcd",t.fillRect(3,7,10,4),t.fillRect(16,7,10,4),t.restore()}));class Mt{constructor(){this.x=850,this.y=172,this.width=110,this.height=196}update(){}contains(t){return t.x>=this.x&&t.x-this.x<this.width&&t.y>=this.y&&t.y-this.y<this.height}paint(t,e){t.fillStyle="#f1f1f1",t.fillRect(this.x,this.y,this.width,this.height),t.drawImage(bt,this.x+11,this.y+66,88,64)}}class mt extends Mt{constructor(){super(),this.n=0,this.old={x:this.x,y:this.y,width:this.width,height:this.height}}update(){if(!(this.n>80))if(++this.n,this.old.x=this.x,this.old.y=this.y,this.old.width=this.width,this.old.height=this.height,this.n<=25){const t=.04*this.n;this.x=v(850,807,b(t)),this.y=v(172,387,b(t)),this.width=v(110,153,b(t)),this.height=v(196,153,b(t))}else{const t=(this.n-25)/55;this.x=v(807,252,M(t)),this.y=v(387,430,M(t)),this.width=v(153,196,M(t)),this.height=v(153,110,M(t))}}paint(t,e){let s,i,n,a;this.n>80?(s=this.x,i=this.y,n=this.width,a=this.height):(s=v(this.old.x,this.x,e),i=v(this.old.y,this.y,e),n=v(this.old.width,this.width,e),a=v(this.old.height,this.height,e)),t.fillStyle="#f1f1f1",t.fillRect(s,i,n,a),t.drawImage(bt,s+.5*(n-88),i+.5*(a-64),88,64)}}class St extends Mt{contains(){return!1}paint(){}}class kt extends O{static getUserAgent(){return null!==location.search.match(/firefox=1/)?rt:null!==location.search.match(/piracy=1/)||document.monetization&&"started"===document.monetization.state?xt:rt}constructor(t,e=0){super(),this.startingPoint=t,this.reticle=new tt(this,t),this.projectile=new(this.constructor.getUserAgent())(this,t.x,t.y),this.firingPin=null,this.website=new Mt,this.state=0,this.duration=144,this.waited=0,this.curtain=e,this.curtainPicture=It,this.autoWin=!1}updateTargeting(t){this.reticle.lastPosition.setTo(t)}launch(){let t,e;return P.setSubtract(this.reticle.lastPosition,t=this.reticle.startingVertex.position),!((e=P.length())<16)&&(P.scalarMult(((1-(e-(s=16))/(256-s))*(30-(i=10))+i)/e),this.firingPin=new et(this,P.x+t.x,P.y+t.y,32,Math.atan2(P.y,P.x)+y,1,9999),!0);var s,i}getIndex(){return 0}}class Pt extends kt{constructor(t,e=0){super(t,e),this.wall=new pt(this,t.x+256,142,1,9999)}getIndex(){return 1}}class Tt extends kt{static getUserAgent(){return rt}constructor(t,e=0){super(t,e),this.website=new St,new ct(this,480,270),new xt(this,960-this.startingPoint.x,270);for(let t=1;t<=3;++t)for(let e=0;e<t;++e)new gt(this,960-64*e-32*(3-t)-33,540-64*(3-t)-33,64,.5,.5)}solve(){super.solve(),3===this.state&&(this.state=0)}getIndex(){return 9}}const Ct=U.createLinearGradient(0,0,960,0);function Et(t,e){t.font=X,t.textAlign="center",t.textBaseline="top",t.fillStyle="#fff";for(let s=80;s<960;s+=160)for(let i=15;i<540;i+=45)t.fillText(e,s,i)}Ct.addColorStop(0,"#f857a6"),Ct.addColorStop(1,"#ff5858");const It=k(960,540,(t=>{t.fillStyle=Ct,t.fillRect(0,0,960,540),Et(t,"404 Not Found")})),Rt=k(960,540,(t=>{t.fillStyle=Ct,t.fillRect(0,0,960,540),Et(t,"301 Moved")})),At=k(960,540,(t=>{t.beginPath();for(let e=0;e<1500;e+=20)t.moveTo(e,0),t.lineTo(e-540,540);t.strokeStyle=Ct,t.stroke()}));function Bt(t,e,s){t.clearRect(0,0,960,540),s.constructor===kt?(t.font=X,t.textAlign="center",t.textBaseline="top",t.fillStyle="#f1f1f1",t.fillText("1. Pull",s.startingPoint.x,s.startingPoint.y+48),t.fillText("2. Release",s.startingPoint.x-256,s.startingPoint.y+48)):s.constructor===Tt&&(t.font=X,t.textAlign="center",t.textBaseline="middle",t.fillStyle="#f1f1f1",t.fillText("Written by Mark Vasilkov for js13kGames in 2020",480,516),t.font=Y,t.fillStyle=at,t.fillText("Thank you for playing!",480,135))}function Vt(t,e,s,i,n,a=0){t.save(),t.translate(s,i),t.rotate(-.5124),t.beginPath(),t.lineTo(a,-500),t.lineTo(n,-500),t.lineTo(n,1e3),t.lineTo(a,1e3),t.closePath(),t.restore(),t.save(),t.clip(),t.drawImage(e,0,0,960,540),t.restore()}const qt=[kt,Pt,class extends kt{constructor(t,e=0){super(t,e),new pt(this,t.x+256,2,1,9999).rotate(w),new pt(this,t.x+256,282,1,9999).rotate(-w)}getIndex(){return 2}},class extends Pt{constructor(t,e=0){super(t,e);for(let e=0;e<8;++e)(e<2||e>5)&&new gt(this,t.x+256+32,14+64*e+32,64,.5,.5);new pt(this,t.x+256,-242,1,9999),new pt(this,t.x+256,526,1,9999)}getIndex(){return 3}},class extends Pt{constructor(t,e=0){super(t,e),this.duration=196}updateTargeting(t){if(this.reticle.lastPosition.setTo(t),P.setSubtract(this.startingPoint,t),P.length()<16)return;const e=Math.atan2(P.y,P.x),s=64*Math.cos(e),i=64*Math.sin(e);P.scalarMult(256/P.length()),P.add(this.startingPoint);const n=this.wall.vertices;let a=P.x+128*Math.cos(e-g),r=P.y+128*Math.sin(e-g);n[0].set(a,r),n[1].set(a+s,r+i),a=P.x+128*Math.cos(e+g),r=P.y+128*Math.sin(e+g),n[2].set(a+s,r+i),n[3].set(a,r)}getIndex(){return 4}},class extends kt{constructor(t,e=0){super(t,e),P.set(.5*(850-t.x),-67.5);for(const t of this.projectile.vertices)t.position.add(P),t.oldPosition.add(P);this.projectile.center.add(P),new gt(this,t.x,t.y,64,.5,4)}getIndex(){return 5}},class extends kt{constructor(t,e=0){super(t,e),this.website=new mt,this.curtainPicture=Rt}solve(){super.solve(),3!==this.state&&4!==this.state&&6!==this.state||this.website.update()}getIndex(){return 6}},class extends kt{constructor(t,e=0){super(t,e),this.clone=new ct(this,905,270)}integrate(){do{if(3!==this.state)break;P.setSubtract(this.projectile.center,this.clone.center);const t=P.length();if(t<64)break;P.scalarMult(1/t);for(const t of this.clone.vertices)t.position.add(P)}while(0);super.integrate()}getIndex(){return 7}},class extends kt{static getUserAgent(){return ct}constructor(t,e=0){super(t,e),this.website=new St,this.duration=196,this.autoWin=!0,new yt(this,849,172)}integrate(){let t,e;3===this.state||4===this.state||6===this.state?(t=.9,e=.5):(t=0,e=0);for(let s=0;s<this.vertices.length;++s)this.vertices[s].integrate(t,e)}getIndex(){return 8}},Tt];let Lt,Dt;!function(){const t=new x(350,270);let e,s,i;Lt=new qt[0](t),Q(),Z((function(){Lt.integrate(),Lt.solve(),2===Lt.state?--e<=0&&(Lt.firingPin.retract(),Lt.firingPin=null,Lt.state=3,s=2):3===Lt.state?++Lt.waited>=Lt.duration?Lt.autoWin?(Lt.state=6,Dt=new(qt[(Lt.getIndex()+1)%qt.length])(t),i=0,_.dragging=!1,_.vertex=void 0,C(R)):(Lt.state=4,C(I)):Lt.website.contains(Lt.projectile.center)&&--s<=0&&(Lt.state=6,Dt=new(qt[(Lt.getIndex()+1)%qt.length])(t),i=0,_.dragging=!1,_.vertex=void 0,C(R)):4===Lt.state?++Lt.curtain>=24&&(Lt=new(qt[Lt.getIndex()])(t,24),Lt.state=5,_.dragging=!1,_.vertex=void 0):5===Lt.state?--Lt.curtain<=0&&(Lt.state=0):6===Lt.state&&++i>69&&(Lt=Dt)}),(function(s){let n,a;if(6===Lt.state)U.fillStyle=at,U.fillRect(0,0,960,540),U.save(),n=(i-1+s)/69,a=v(1,.5,m(n)),U.translate(480,270),U.scale(a,a),U.translate(-480,-270),U.translate(v(0,-960,m(n)),0),U.beginPath(),U.rect(0,0,960,540),U.clip();else if(_.dragging&&5!==Lt.state){if(!_.vertex&&t.distanceSquared(_)<=4096&&(_.vertex=Lt.reticle.targetingVertex,0===Lt.state&&(Lt.state=1)),_.vertex){const e=Lt.reticle.targetingVertex.position;e.setTo(_);const s=t.distanceSquared(e);s>65536&&(e.subtract(t),e.scalarMult(256/Math.sqrt(s)),e.add(t)),Lt.updateTargeting(e)}}else 1===Lt.state&&(Lt.launch()?(Lt.state=2,e=4,C(E)):Lt.state=0);Bt(U,0,Lt),Lt.website.paint(U,s);for(const t of Lt.bodies)t.paint(U,s);if(function(t,e,s){let i;3===s.state?(i=(s.waited-1+e)/s.duration*960,t.fillStyle=Ct,t.fillRect(0,0,i,3)):4===s.state?(i=.5*M((s.curtain-1+e)/24)*1102,t.fillStyle=Ct,t.fillRect(0,0,960,3),Vt(t,s.curtainPicture,0,540,i),Vt(t,s.curtainPicture,960,0,-i)):5===s.state&&(i=.5*b((s.curtain+1-e)/24)*1102,Vt(t,s.curtainPicture,480,270,-i,i))}(U,s,Lt),6===Lt.state){U.restore(),U.save(),U.translate(v(960,0,m(n)),0),Bt(U,0,Dt),Dt.website.paint(U,s);for(const t of Dt.bodies)t.paint(U,s);U.restore()}}))}()}();