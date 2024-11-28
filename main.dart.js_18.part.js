((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_18",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
b0O(d,e,f,g,h){var x,w,v,u,t,s,r
$label0$0:{if(e<60){x=new B.hq(f,g,0)
break $label0$0}if(e<120){x=new B.hq(g,f,0)
break $label0$0}if(e<180){x=new B.hq(0,f,g)
break $label0$0}if(e<240){x=new B.hq(0,g,f)
break $label0$0}if(e<300){x=new B.hq(g,0,f)
break $label0$0}x=new B.hq(f,0,g)
break $label0$0}w=x.a
v=null
u=null
t=x.b
s=x.c
u=s
v=t
r=w
return B.x(C.c.a_(d*255),C.c.a_((r+h)*255),C.c.a_((v+h)*255),C.c.a_((u+h)*255))},
aKC(d){var x,w,v,u=d.a,t=(u>>>16&255)/255,s=(u>>>8&255)/255,r=(u&255)/255,q=Math.max(t,Math.max(s,r)),p=Math.min(t,Math.min(s,r)),o=q-p,n=B.bv("hue")
if(q===0)n.b=0
else if(q===t)n.b=60*C.c.af((s-r)/o,6)
else if(q===s)n.b=60*((r-t)/o+2)
else if(q===r)n.b=60*((t-s)/o+4)
n.b=isNaN(n.bE())?0:n.bE()
x=n.bE()
w=(q+p)/2
v=w===1?0:B.w(o/(1-Math.abs(2*w-1)),0,1)
return new A.u8((u>>>24&255)/255,x,v,w)},
u8:function u8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aMq(d){var x,w,v
switch(d.w.a){case 1:x=d.c
w=x!=null?new B.ed(0,x.gMw()):C.kH
break
case 0:x=d.d
w=d.c
if(x!=null){v=w==null?null:w.gMw()
w=new B.bM(x,v==null?C.r:v)}else if(w==null)w=D.nT
break
default:w=null}return new A.iF(d.a,d.f,d.b,d.e,w)},
anj(d,e,f){var x,w,v,u,t,s,r=null
if(d==e)return d
x=d==null
if(!x&&e!=null){if(f===0)return d
if(f===1)return e}w=x?r:d.a
v=e==null
w=B.y(w,v?r:e.a,f)
u=x?r:d.b
u=B.aKB(u,v?r:e.b,f)
t=x?r:d.c
t=B.aFm(t,v?r:e.c,f)
s=x?r:d.d
s=B.aF0(s,v?r:e.d,f)
x=x?r:d.e
x=B.dw(x,v?r:e.e,f)
x.toString
return new A.iF(w,u,t,s,x)},
b_W(d,e){return new A.a1y(d,e)},
iF:function iF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1y:function a1y(d,e){var _=this
_.b=d
_.d=_.c=null
_.e=$
_.w=_.r=_.f=null
_.z=_.y=_.x=$
_.Q=null
_.a=e},
aA6:function aA6(){},
aA7:function aA7(d){this.a=d},
aA8:function aA8(d,e,f){this.a=d
this.b=e
this.c=f},
aFM(d,e,f,g,h,i,j,k,l,m){return new A.pI(g,h,!1,d,m,k,l,j,i,f,null)},
pI:function pI(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
Ft:function Ft(d){var _=this
_.f=_.e=_.d=!1
_.r=d
_.c=_.a=null},
avK:function avK(d){this.a=d},
avI:function avI(d){this.a=d},
avD:function avD(d){this.a=d},
avE:function avE(d){this.a=d},
avC:function avC(d,e){this.a=d
this.b=e},
avH:function avH(d){this.a=d},
avF:function avF(d){this.a=d},
avG:function avG(d,e){this.a=d
this.b=e},
avJ:function avJ(d,e){this.a=d
this.b=e},
vZ:function vZ(){},
apH:function apH(d,e){this.a=d
this.b=e},
apI:function apI(d){this.a=d},
apF:function apF(d,e){this.a=d
this.b=e},
apG:function apG(d,e){this.a=d
this.b=e},
rj:function rj(){},
aM1(d,e,f,g,h){var x=h.a,w=h.b
return new B.iz(d,e,f,g,x,w,x,w,x,w,x,w,x===w)}},D
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[24],A)
D=c[54]
A.u8.prototype={
a0M(){var x=this,w=x.d,v=(1-Math.abs(2*w-1))*x.c,u=x.b
return A.b0O(x.a,u,v,v*(1-Math.abs(C.c.af(u/60,2)-1)),w-v/2)},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
return e instanceof A.u8&&e.a===x.a&&e.b===x.b&&e.c===x.c&&e.d===x.d},
gB(d){var x=this
return B.R(x.a,x.b,x.c,x.d,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x=this
return"HSLColor("+B.k(x.a)+", "+B.k(x.b)+", "+B.k(x.c)+", "+B.k(x.d)+")"}}
A.iF.prototype={
yl(d,e){return this.e.eh(d,e)},
gd6(){return this.e.gjD()},
gD6(){return this.d!=null},
e1(d,e){var x
$label0$0:{if(d instanceof B.c8){x=A.anj(A.aMq(d),this,e)
break $label0$0}if(y.h.b(d)){x=A.anj(d,this,e)
break $label0$0}x=this.FN(d,e)
break $label0$0}return x},
e2(d,e){var x
$label0$0:{if(d instanceof B.c8){x=A.anj(this,A.aMq(d),e)
break $label0$0}if(y.h.b(d)){x=A.anj(this,d,e)
break $label0$0}x=this.FO(d,e)
break $label0$0}return x},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.U(e)!==B.u(x))return!1
return e instanceof A.iF&&J.c(e.a,x.a)&&J.c(e.b,x.b)&&J.c(e.c,x.c)&&B.cO(e.d,x.d)&&e.e.k(0,x.e)},
gB(d){var x=this,w=x.d
w=w==null?null:B.c6(w)
return B.R(x.a,x.b,x.c,x.e,w,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
Le(d,e,f){return this.e.eh(new B.v(0,0,0+d.a,0+d.b),f).n(0,e)},
rG(d){return new A.a1y(this,d)}}
A.a1y.prototype={
akp(d,e){var x,w,v,u=this
if(d.k(0,u.c)&&e==u.d)return
if(u.r==null){x=u.b
x=x.a!=null||x.b!=null}else x=!1
if(x){x=$.a5().bN()
u.r=x
w=u.b.a
if(w!=null)x.saM(w)}x=u.b
w=x.b
if(w!=null){v=u.r
v.toString
v.sFx(w.Y3(d,e))}w=x.d
if(w!=null){if(u.w==null){u.w=w.length
u.z=B.a9(new B.ag(w,new A.aA6(),B.a3(w).i("ag<1,BD>")),!0,y.Z)}if(x.e.ghO())u.x=B.a9(new B.ag(w,new A.aA7(d),B.a3(w).i("ag<1,v>")),!0,y.A)
else u.y=B.a9(new B.ag(w,new A.aA8(u,d,e),B.a3(w).i("ag<1,Rl>")),!0,y.i)}w=x.e
if(!w.ghO())v=u.r!=null||u.w!=null
else v=!1
if(v)u.e=w.eh(d,e)
if(x.c!=null)u.f=w.ii(d,e)
u.c=d
u.d=e},
ama(d,e,f){var x,w,v,u,t=this
if(t.w!=null){x=t.b.e
if(x.ghO()){w=0
while(!0){v=t.w
v.toString
if(!(w<v))break
v=t.x
v===$&&B.b()
v=v[w]
u=t.z
u===$&&B.b()
x.iG(d,v,u[w],f);++w}}else{w=0
while(!0){x=t.w
x.toString
if(!(w<x))break
x=t.y
x===$&&B.b()
x=x[w]
v=t.z
v===$&&B.b()
d.d7(x,v[w]);++w}}}},
ajG(d,e){var x,w=this,v=w.b.c
if(v==null)return
x=w.Q
if(x==null){x=w.a
x.toString
x=w.Q=v.w7(x)
v=x}else v=x
x=w.c
x.toString
v.pD(d,x,w.f,e)},
m(){var x=this.Q
if(x!=null)x.m()
this.NO()},
iF(d,e,f){var x=this,w=f.e,v=e.a,u=e.b,t=new B.v(v,u,v+w.a,u+w.b),s=f.d
x.akp(t,s)
x.ama(d,t,s)
if(x.r!=null){w=x.b.e
v=w.ghO()
u=x.r
if(v){u.toString
w.iG(d,t,u,s)}else{w=x.e
w===$&&B.b()
u.toString
d.d7(w,u)}}x.ajG(d,f)
x.b.e.fo(d,t,s)}}
A.pI.prototype={
ae(){return new A.Ft(new B.b5(null,y.z))}}
A.Ft.prototype={
au(){this.b_()
$.bK.k3$.push(new A.avK(this))
$.aa.ap$.d.a.f.G(0,this.gRQ())},
m(){$.aa.ap$.d.a.f.D(0,this.gRQ())
this.aS()},
W_(d){this.A9(new A.avI(this))},
aeM(d){if(this.c==null)return
this.W_(d)},
a7Z(d){if(!this.e)this.A9(new A.avD(this))},
a80(d){if(this.e)this.A9(new A.avE(this))},
a7X(d){var x,w=this
if(w.f!==d){w.A9(new A.avC(w,d))
x=w.a.Q
if(x!=null)x.$1(w.f)}},
SX(d,e){var x,w,v,u,t,s,r=this,q=new A.avH(r),p=new A.avG(r,new A.avF(r))
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
A9(d){return this.SX(null,d)},
aii(d){return this.SX(d,null)},
b2(d){this.bs(d)
if(this.a.c!==d.c)$.bK.k3$.push(new A.avJ(this,d))},
ga7V(){var x,w=this.c
w.toString
w=B.cq(w,C.hx)
x=w==null?null:w.ch
$label0$0:{if(C.eH===x||x==null){w=this.a.c
break $label0$0}if(C.jx===x){w=!0
break $label0$0}w=null}return w},
I(d){var x,w,v,u=this,t=null,s=u.a,r=s.as
s=s.d
x=u.ga7V()
w=u.a
v=B.kg(B.pH(!1,x,w.ax,t,!0,!0,s,!0,t,u.ga7W(),t,t,t,t),r,u.r,u.ga7Y(),u.ga8_(),t)
s=w.c
if(s){r=w.w
r=r!=null&&r.a!==0}else r=!1
if(r){r=w.w
r.toString
v=B.t6(r,v)}if(s){s=w.x
s=s!=null&&s.gcF(s)}else s=!1
if(s){s=u.a.x
s.toString
v=B.T8(v,t,s)}return v}}
A.vZ.prototype={
Bn(){var x,w
this.gMx()
x=this.gl()
w=this.m_$
if(x){w===$&&B.b()
w.ck()}else{w===$&&B.b()
w.dF()}},
agT(d){var x,w=this
if(w.ghj()!=null){w.N(new A.apH(w,d))
x=w.ld$
x===$&&B.b()
x.ck()}},
Sd(d){var x,w=this
if(w.ghj()==null)return
switch(w.gl()){case!1:w.ghj().$1(!0)
break
case!0:x=w.ghj()
x.toString
w.gMx()
x.$1(!1)
break
case null:case void 0:w.ghj().$1(!1)
break}w.c.ga4().yD(C.HE)},
agP(){return this.Sd(null)},
Sf(d){var x,w=this
if(w.pc$!=null)w.N(new A.apI(w))
x=w.ld$
x===$&&B.b()
x.dF()},
agU(){return this.Sf(null)},
aeL(d){var x,w=this
if(d!==w.ns$){w.N(new A.apF(w,d))
x=w.t1$
if(d){x===$&&B.b()
x.ck()}else{x===$&&B.b()
x.dF()}}},
aeX(d){var x,w=this
if(d!==w.nt$){w.N(new A.apG(w,d))
x=w.t0$
if(d){x===$&&B.b()
x.ck()}else{x===$&&B.b()
x.dF()}}},
ghv(){var x,w=this,v=B.ax(y.C)
if(w.ghj()==null)v.G(0,C.v)
if(w.nt$)v.G(0,C.w)
if(w.ns$)v.G(0,C.C)
x=w.gl()
if(x)v.G(0,C.D)
return v},
Xc(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.Cq$
if(l===$){x=B.aL([C.Im,new B.cj(n.gSc(),new B.aR(B.a([],y.k),y.j),y.p)],y.n,y.V)
n.Cq$!==$&&B.ac()
n.Cq$=x
l=x}w=n.ghj()
if(f==null)v=m
else{v=n.ghv()
v=f.a.$1(v)}if(v==null)v=C.bz
u=n.ghj()
t=n.ghj()!=null?n.gagS():m
s=n.ghj()!=null?n.gSc():m
r=n.ghj()!=null?n.gSe():m
q=n.ghj()!=null?n.gSe():m
p=n.ghj()
o=B.j0(m,m,m,h,i)
return A.aFM(l,!1,B.ee(m,new B.bj(B.by(m,m,m,m,m,m,m,m,m,m,p!=null,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),!1,!1,!1,!1,o,m),C.P,u==null,m,m,m,m,m,m,m,m,m,m,m,m,m,s,q,t,r,m,m,m),w!=null,e,v,g,n.gaeK(),n.gaeW(),m)},
apj(d,e,f,g,h){return this.Xc(d,e,f,null,g,h)}}
A.rj.prototype={
scp(d){var x=this,w=x.a
if(d===w)return
if(w!=null)w.a.J(x.gdR())
d.a.a6(x.gdR())
x.a=d
x.a8()},
sa04(d){var x=this,w=x.b
if(d===w)return
if(w!=null)w.a.J(x.gdR())
d.a.a6(x.gdR())
x.b=d
x.a8()},
sa06(d){var x=this,w=x.c
if(d===w)return
if(w!=null)w.a.J(x.gdR())
d.a.a6(x.gdR())
x.c=d
x.a8()},
sa07(d){var x=this,w=x.d
if(d===w)return
if(w!=null)w.a.J(x.gdR())
d.a.a6(x.gdR())
x.d=d
x.a8()},
sWH(d){if(J.c(this.e,d))return
this.e=d
this.a8()},
sZE(d){if(J.c(this.f,d))return
this.f=d
this.a8()},
sZF(d){if(d.k(0,this.r))return
this.r=d
this.a8()},
sa05(d){if(d.k(0,this.w))return
this.w=d
this.a8()},
snA(d){if(d.k(0,this.x))return
this.x=d
this.a8()},
snw(d){if(d.k(0,this.y))return
this.y=d
this.a8()},
shU(d){if(d===this.z)return
this.z=d
this.a8()},
sYt(d){if(J.c(d,this.Q))return
this.Q=d
this.a8()},
sD7(d){if(d===this.as)return
this.as=d
this.a8()},
sa_5(d){if(d===this.at)return
this.at=d
this.a8()},
a_I(d,e){var x,w,v,u,t=this
if(t.b.gbq()!==C.T||t.c.gbq()!==C.T||t.d.gbq()!==C.T){x=$.a5().bN()
w=t.r
w.toString
v=t.w
v.toString
v=B.y(w,v,t.a.gl())
w=t.x
w.toString
w=B.y(v,w,t.d.gl())
v=t.y
v.toString
v=B.y(w,v,t.c.gl())
v.toString
x.saM(v)
v=t.z
v.toString
w=t.as
w.toString
if(!w){w=t.at
w.toString}else w=!0
if(w)u=v
else u=new B.ah(0,v,y.t).ai(t.b.gl())
if(u>0)d.nj(e.a5(0,C.f),u,x)}},
m(){var x=this,w=x.a
if(w!=null)w.a.J(x.gdR())
w=x.b
if(w!=null)w.a.J(x.gdR())
w=x.c
if(w!=null)w.a.J(x.gdR())
w=x.d
if(w!=null)w.a.J(x.gdR())
x.dV()},
fp(d){return!0},
wT(d){return null},
gyC(){return null},
FA(d){return!1},
j(d){return"<optimized out>#"+B.bb(this)}}
var z=a.updateTypes(["~(D)","D(pI)","~(k8)","~(ix)","~(iy)","~(kA)","~([aN?])","~([kB?])","~()"])
A.aA6.prototype={
$1(d){return d.ew()},
$S:524}
A.aA7.prototype={
$1(d){return this.a.dG(d.b).ea(d.d)},
$S:525}
A.aA8.prototype={
$1(d){return this.a.b.e.eh(this.b.dG(d.b).ea(d.d),this.c)},
$S:526}
A.avK.prototype={
$1(d){var x=$.aa.ap$.d.a.b
if(x==null)x=B.wK()
this.a.W_(x)},
$S:6}
A.avI.prototype={
$0(){var x=$.aa.ap$.d.a.b
switch((x==null?B.wK():x).a){case 0:x=!1
break
case 1:x=!0
break
default:x=null}this.a.d=x},
$S:0}
A.avD.prototype={
$0(){this.a.e=!0},
$S:0}
A.avE.prototype={
$0(){this.a.e=!1},
$S:0}
A.avC.prototype={
$0(){this.a.f=this.b},
$S:0}
A.avH.prototype={
$1(d){var x=this.a
return x.e&&d.c&&x.d},
$S:z+1}
A.avF.prototype={
$1(d){var x,w=this.a.c
w.toString
w=B.cq(w,C.hx)
x=w==null?null:w.ch
$label0$0:{if(C.eH===x||x==null){w=d.c
break $label0$0}if(C.jx===x){w=!0
break $label0$0}w=null}return w},
$S:z+1}
A.avG.prototype={
$1(d){var x=this.a
return x.f&&x.d&&this.b.$1(d)},
$S:z+1}
A.avJ.prototype={
$1(d){this.a.aii(this.b)},
$S:6}
A.apH.prototype={
$0(){this.a.pc$=this.b.c},
$S:0}
A.apI.prototype={
$0(){this.a.pc$=null},
$S:0}
A.apF.prototype={
$0(){this.a.ns$=this.b},
$S:0}
A.apG.prototype={
$0(){this.a.nt$=this.b},
$S:0};(function aliases(){var x=A.rj.prototype
x.a5A=x.m})();(function installTearOffs(){var x=a._instance_1u,w=a.installInstanceTearOff,v=a._instance_0u
var u
x(u=A.Ft.prototype,"gRQ","aeM",2)
x(u,"ga7Y","a7Z",3)
x(u,"ga8_","a80",4)
x(u,"ga7W","a7X",0)
x(u=A.vZ.prototype,"gagS","agT",5)
w(u,"gSc",0,0,null,["$1","$0"],["Sd","agP"],6,0,0)
w(u,"gSe",0,0,null,["$1","$0"],["Sf","agU"],7,0,0)
x(u,"gaeK","aeL",0)
x(u,"gaeW","aeX",0)
v(A.rj.prototype,"gdA","m",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.F,[A.u8,A.vZ])
w(A.iF,B.fC)
w(A.a1y,B.ti)
x(B.dc,[A.aA6,A.aA7,A.aA8,A.avK,A.avH,A.avF,A.avG,A.avJ])
w(A.pI,B.H)
w(A.Ft,B.J)
x(B.dV,[A.avI,A.avD,A.avE,A.avC,A.apH,A.apI,A.apF,A.apG])
w(A.rj,B.aF)})()
B.e9(b.typeUniverse,JSON.parse('{"iF":{"fC":[]},"pI":{"H":[],"d":[]},"Ft":{"J":["pI"]},"rj":{"aF":[],"a7":[]}}'))
B.xu(b.typeUniverse,JSON.parse('{"vZ":1}'))
var y=(function rtii(){var x=B.S
return{V:x("bd<aN>"),p:x("cj<p0>"),k:x("r<~(bd<aN>)>"),z:x("b5<J<H>>"),j:x("aR<~(bd<aN>)>"),Z:x("BD"),i:x("Rl"),A:x("v"),t:x("ah<z>"),n:x("fm"),C:x("bF"),h:x("iF?")}})();(function constants(){D.nT=new B.dn(C.r,C.r,C.r,C.r)
D.a2h=new B.h(0,4)
D.L5=new B.i(167772160)
D.a2e=new B.h(0,2)
D.J6=new B.K9(2,"outer")
D.a2i=new B.h(0,8)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_18",e:"endPart",h:b})})($__dart_deferred_initializers__,"+wkPsxYFANMBfjA+3o+YRhmynmE=");