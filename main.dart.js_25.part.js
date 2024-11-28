((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_25",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
b1y(d,e,f,g,h){var x,w,v,u,t,s,r
$label0$0:{if(e<60){x=new B.hp(f,g,0)
break $label0$0}if(e<120){x=new B.hp(g,f,0)
break $label0$0}if(e<180){x=new B.hp(0,f,g)
break $label0$0}if(e<240){x=new B.hp(0,g,f)
break $label0$0}if(e<300){x=new B.hp(g,0,f)
break $label0$0}x=new B.hp(f,0,g)
break $label0$0}w=x.a
v=null
u=null
t=x.b
s=x.c
u=s
v=t
r=w
return B.u(C.c.a_(d*255),C.c.a_((r+h)*255),C.c.a_((v+h)*255),C.c.a_((u+h)*255))},
aL7(d){var x,w,v,u=d.a,t=(u>>>16&255)/255,s=(u>>>8&255)/255,r=(u&255)/255,q=Math.max(t,Math.max(s,r)),p=Math.min(t,Math.min(s,r)),o=q-p,n=B.bw("hue")
if(q===0)n.b=0
else if(q===t)n.b=60*C.c.af((s-r)/o,6)
else if(q===s)n.b=60*((r-t)/o+2)
else if(q===r)n.b=60*((t-s)/o+4)
n.b=isNaN(n.bE())?0:n.bE()
x=n.bE()
w=(q+p)/2
v=w===1?0:B.y(o/(1-Math.abs(2*w-1)),0,1)
return new A.uc((u>>>24&255)/255,x,v,w)},
uc:function uc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aGj(d,e,f,g,h,i,j,k,l,m){return new A.pT(g,h,!1,d,m,k,l,j,i,f,null)},
pT:function pT(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.c=d
_.d=e
_.e=f
_.w=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.as=l
_.ax=m
_.a=n},
Fy:function Fy(d){var _=this
_.f=_.e=_.d=!1
_.r=d
_.c=_.a=null},
awg:function awg(d){this.a=d},
awe:function awe(d){this.a=d},
aw9:function aw9(d){this.a=d},
awa:function awa(d){this.a=d},
aw8:function aw8(d,e){this.a=d
this.b=e},
awd:function awd(d){this.a=d},
awb:function awb(d){this.a=d},
awc:function awc(d,e){this.a=d
this.b=e},
awf:function awf(d,e){this.a=d
this.b=e},
aMx(d,e,f,g,h){var x=h.a,w=h.b
return new B.iB(d,e,f,g,x,w,x,w,x,w,x,w,x===w)}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[29],A)
D=c[67]
A.uc.prototype={
a0Z(){var x=this,w=x.d,v=(1-Math.abs(2*w-1))*x.c,u=x.b
return A.b1y(x.a,u,v,v*(1-Math.abs(C.c.af(u/60,2)-1)),w-v/2)},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
return e instanceof A.uc&&e.a===x.a&&e.b===x.b&&e.c===x.c&&e.d===x.d},
gB(d){var x=this
return B.T(x.a,x.b,x.c,x.d,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x=this
return"HSLColor("+B.k(x.a)+", "+B.k(x.b)+", "+B.k(x.c)+", "+B.k(x.d)+")"}}
A.pT.prototype={
ae(){return new A.Fy(new B.b7(null,y.b))}}
A.Fy.prototype={
av(){this.b2()
$.bM.k3$.push(new A.awg(this))
$.ad.ap$.d.a.f.F(0,this.gS5())},
m(){$.ad.ap$.d.a.f.D(0,this.gS5())
this.aR()},
Wg(d){this.Ac(new A.awe(this))},
afa(d){if(this.c==null)return
this.Wg(d)},
a8h(d){if(!this.e)this.Ac(new A.aw9(this))},
a8j(d){if(this.e)this.Ac(new A.awa(this))},
a8f(d){var x,w=this
if(w.f!==d){w.Ac(new A.aw8(w,d))
x=w.a.Q
if(x!=null)x.$1(w.f)}},
Te(d,e){var x,w,v,u,t,s,r=this,q=new A.awd(r),p=new A.awc(r,new A.awb(r))
if(d==null){x=r.a
x.toString
w=x}else w=d
v=q.$1(w)
u=p.$1(w)
if(e!=null)e.$0()
x=r.a
x.toString
t=q.$1(x)
x=r.a
x.toString
s=p.$1(x)
if(u!==s){q=r.a.y
if(q!=null)q.$1(s)}if(v!==t){q=r.a.z
if(q!=null)q.$1(t)}},
Ac(d){return this.Te(null,d)},
aiH(d){return this.Te(d,null)},
b4(d){this.bw(d)
if(this.a.c!==d.c)$.bM.k3$.push(new A.awf(this,d))},
ga8d(){var x,w=this.c
w.toString
w=B.cp(w,C.hy)
x=w==null?null:w.ch
$label0$0:{if(C.eG===x||x==null){w=this.a.c
break $label0$0}if(C.jA===x){w=!0
break $label0$0}w=null}return w},
I(d){var x,w,v,u=this,t=null,s=u.a,r=s.as
s=s.d
x=u.ga8d()
w=u.a
v=B.ir(B.pS(!1,x,w.ax,t,!0,!0,s,!0,t,u.ga8e(),t,t,t,t),r,u.r,u.ga8g(),u.ga8i(),t)
s=w.c
if(s){r=w.w
r=r!=null&&r.a!==0}else r=!1
if(r){r=w.w
r.toString
v=B.tf(r,v)}if(s){s=w.x
s=s!=null&&s.gcF(s)}else s=!1
if(s){s=u.a.x
s.toString
v=B.Td(v,t,s)}return v}}
var z=a.updateTypes(["D(pT)","~(kc)","~(iy)","~(iz)","~(D)"])
A.awg.prototype={
$1(d){var x=$.ad.ap$.d.a.b
if(x==null)x=B.wJ()
this.a.Wg(x)},
$S:7}
A.awe.prototype={
$0(){var x=$.ad.ap$.d.a.b
switch((x==null?B.wJ():x).a){case 0:x=!1
break
case 1:x=!0
break
default:x=null}this.a.d=x},
$S:0}
A.aw9.prototype={
$0(){this.a.e=!0},
$S:0}
A.awa.prototype={
$0(){this.a.e=!1},
$S:0}
A.aw8.prototype={
$0(){this.a.f=this.b},
$S:0}
A.awd.prototype={
$1(d){var x=this.a
return x.e&&d.c&&x.d},
$S:z+0}
A.awb.prototype={
$1(d){var x,w=this.a.c
w.toString
w=B.cp(w,C.hy)
x=w==null?null:w.ch
$label0$0:{if(C.eG===x||x==null){w=d.c
break $label0$0}if(C.jA===x){w=!0
break $label0$0}w=null}return w},
$S:z+0}
A.awc.prototype={
$1(d){var x=this.a
return x.f&&x.d&&this.b.$1(d)},
$S:z+0}
A.awf.prototype={
$1(d){this.a.aiH(this.b)},
$S:7};(function installTearOffs(){var x=a._instance_1u
var w
x(w=A.Fy.prototype,"gS5","afa",1)
x(w,"ga8g","a8h",2)
x(w,"ga8i","a8j",3)
x(w,"ga8e","a8f",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.uc,B.E)
x(A.pT,B.I)
x(A.Fy,B.L)
w(B.d9,[A.awg,A.awd,A.awb,A.awc,A.awf])
w(B.du,[A.awe,A.aw9,A.awa,A.aw8])})()
B.dl(b.typeUniverse,JSON.parse('{"pT":{"I":[],"d":[]},"Fy":{"L":["pT"]}}'))
var y={b:B.U("b7<L<I>>")};(function constants(){D.a2m=new B.h(0,4)
D.L8=new B.i(167772160)
D.a2j=new B.h(0,2)
D.a2n=new B.h(0,8)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_25",e:"endPart",h:b})})($__dart_deferred_initializers__,"wUC+BicxRNn+pxRhle1FvUdtwe0=");