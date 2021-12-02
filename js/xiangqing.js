var boxs=document.querySelector(".xqboxs"),search=location.search,o1,ar1;async function show(){var i=`
    <div class="xabody">
    <div class="xqMain">
        <div class="xqA1">${(o1=await PromiseAjax({url:"../php/xiangqing.php",data:"id="+ar1[1],datatype:"json"})).t0}</div>
        <div class="xqA0">
            <div class="xqA2">
                <div class="xqFdj">
                    <div class="fdj">
                        <img src="${o1.img1}" alt="">
                        <div class="xqmark"></div>
                    </div>
                    <div class="xqimgs">
                        <div class="xqimg">
                            <img src="${o1.img1}" class="xqbg"
                                alt="">
                            <img src="https://imgs-qn.iliangcang.com/ware/upload/orig/2/439/439702.jpg" alt="">
                            <img src="https://imgs-qn.iliangcang.com/ware/upload/orig/2/388/388432.jpg" alt="">
                            <img src="https://imgs-qn.iliangcang.com/ware/upload/orig/2/388/388430.jpg" alt="">
                            <img src="https://imgs-qn.iliangcang.com/ware/upload/orig/2/389/389838.jpg" alt="">
                        </div>
                    </div>
                    <div class="rightfdj">
                        <img src="${o1.img1}" alt="">
                    </div>
                    <ul class="xqimgs2">
                        <li><img src="${o1.i1}" alt=""></li>
                        <li><img src="${o1.i2}" alt=""></li>
                        <li><img src="${o1.i3}" alt=""></li>
                        <li><img src="${o1.i4}" alt=""></li>
                        <li><img src="${o1.i5}" alt=""></li>
                        <li><img src="${o1.i6}" alt=""></li>
                        <li><img src="${o1.i7}" alt=""></li>
                        <li><img src="${o1.i8}" alt=""></li>
                        <div class="xqjj">
                            <div class="xqb1"><div class="bttp"><img src='http://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/24/24830.png'></div><div class="xqbt">品牌简介</div></div>
                            <p>
                            ${o1.t9}
                            </p>
                            <div class="xqb1"><div class="bttp"><img src='http://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/24/24829.png'></div><div class="xqbt">购物指南</div></div>
                            <div class="gwzn">
                               <p> — 所有商品均为正品保证。</p>
                               <p>— 中国大陆地区免运费 （偏远地区、受疫情和自然灾害影响、受节假日特殊活动等影响时，需承担部分运费)。</p>
                               <p>— 包邮默认商家合作快递，如指定快递请联系客服，并承担运费差额。</p>
                               <p> — 蜡烛、液态品、手表等含电池产品无法空运，运输时间相较普通空运件会更久。</p>
                               <p> — 如出现产品质量问题请在签收后72小时内联系客服。</p> 
                            </div>
                            <button>售后须知</button>
                        </div>
                    </ul>
                </div>
                <div class="xqxx">
                    <div class="xx1"><span ><img class='xx1img' src="https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/24/24747.png"
                                alt=""></span>&nbsp;&nbsp;<span>${o1.t1}</span></div>
                    <div class="xx2">${o1.name}</div>
                    <div class="xx3">${o1.texte2}</div>
                    <div class="xx4">价格：<span>￥${parseInt(o1.text)}元</span></div>
                    <div class="xx5">免运费正品授权</div>
                    <div class="xx6">尺寸：<span class="ks">${o1.t5}</span><span>${o1.t6}</span></div>
                    <div class="xx7">款式：<span class="ks">${o1.t7}</span><span>${o1.t8}</span></div>
                    <div class="xx8">数量：<button class='jian'>-</button><input class="xxs"type="text" value="1"><button class='jia'>+</button></div>
                    <div class="xx9"><button>立即购买</button></div>
                    <div class="xx10"><button>加入购物车</button><button>分享</button></div>

                </div>

            </div>
            <div class="xqright">
                <div style="margin-bottom: 15px;">猜你喜欢</div>
                <ul>
                    <li><img src="https://imgs-qn.iliangcang.com/ware/goods/big/2/281/281253.jpg" alt=""></li>
                    <li>折叠灭蚊拍</li>
                    <li class="xqt1">香雾</li>
                    <li class="xqt2">￥89</li>
                </ul>
                <ul>
                    <li><img src="https://imgs-qn.iliangcang.com/ware/goods/big/2/280/280824.jpg?t=1610096766" alt="">
                    </li>
                    <li>毛球修剪器</li>
                    <li class="xqt1">香雾</li>
                    <li class="xqt2">￥59</li>
                </ul>
                <ul>
                    <li><img src="https://imgs-qn.iliangcang.com/ware/goods/big/2/280/280769.jpg?t=1609138847" alt="">
                    </li>
                    <li>洒水壶</li>
                    <li class="xqt1">几致</li>
                    <li class="xqt2">￥118</li>
                </ul>
                <ul>
                    <li><img src="https://imgs-qn.iliangcang.com/ware/goods/big/2/280/280549.jpg" alt=""></li>
                    <li>家用护理棒</li>
                    <li class="xqt1">日本</li>
                    <li class="xqt2">￥329</li>
                </ul>
            </div>
        </div>
        
    </div>
    </div>
    `;boxs.innerHTML=i,fn1()}function fn1(){var xxs=document.querySelector(".xxs"),fdj=document.querySelector(".fdj"),xqmark=document.querySelector(".xqmark"),rightfdj=document.querySelector(".rightfdj"),rightImg=rightfdj.querySelector("img"),xqimgs=document.querySelector(".xqimgs").querySelectorAll("img");fdj.onmouseover=function(){xqmark.style.display="block",rightfdj.style.display="block"},fdj.onmouseout=function(){xqmark.style.display="none",rightfdj.style.display="none"},fdj.onmousemove=function(i){var t=(i=i||window.event).pageX-fdj.offsetLeft-parseInt(xqmark.offsetWidth/2),s=i.pageY-fdj.offsetTop-parseInt(xqmark.offsetHeight/2),a=fdj.offsetWidth-xqmark.offsetWidth,i=fdj.offsetHeight-xqmark.offsetHeight,t=t<=0?(xqmark.style.left="0px",0):a<t?(xqmark.style.left=a+"px",a):(xqmark.style.left=t+"px",t),s=s<=0?(xqmark.style.top="0px",0):i<s?(xqmark.style.top=i+"px",i):(xqmark.style.top=s+"px",s);rightImg.style.left=-2*t+"px",rightImg.style.top=-2*s+"px"};for(var i=0;i<xqimgs.length;i++)xqimgs[i].onclick=function(){var i=this.getAttribute("src");fdj.querySelector("img").setAttribute("src",i),rightImg.setAttribute("src",i);for(var t=0;t<xqimgs.length;t++)xqimgs[t].className="";this.className="xqbg"};var xx7=document.querySelector(".xx7"),span1=xx7.querySelectorAll("span");for(let i=0;i<span1.length;i++)span1[i].onclick=function(){for(var t=0;t<span1.length;t++)span1[t].className="";span1[i].className="ks"};var xx6=document.querySelector(".xx6"),span2=xx6.querySelectorAll("span");for(let i=0;i<span2.length;i++)span2[i].onclick=function(){for(var t=0;t<span2.length;t++)span2[t].className="";span2[i].className="ks"};var hx=document.querySelector(".xx1img");hx.onclick=function(){var i;""==getCookie("user")?location.href="./login.html":(i="https://imgs-qn.iliangcang.com/images/default/xin_red.png",hx.getAttribute("src")==i?(hx.setAttribute("src","https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/24/24747.png"),hx.parentNode.nextElementSibling.innerHTML=parseInt(hx.parentNode.nextElementSibling.innerHTML)-1):(hx.setAttribute("src",i),hx.parentNode.nextElementSibling.innerHTML=parseInt(hx.parentNode.nextElementSibling.innerHTML)+1))},boxs.onclick=function(e){var e=e||window.event,target=e.target||e.srcElement;const cookie=getCookie("user");if("立即购买"==target.innerHTML&&(""==cookie?location.href="./login.html":location.href="./shopcar.html"),"加入购物车"==target.innerHTML)if(""==cookie){var url5=location.href;location.href="./login.html?url5="+url5}else{var cartlist1=localStorage.getItem("cartlist1")||"[]",cartlist1=eval("("+cartlist1+")");if(0<cartlist1.length){for(var bool=!1,i=0;i<cartlist1.length;i++)cartlist1[i].id==o1.id&&(bool=!0,cartlist1[i].cart_number<cartlist1[i].goods_number&&(cartlist1[i].cart_number++,localStorage.setItem("cartlist1",JSON.stringify(cartlist1))));bool||(o1.cart_number=xxs.value,cartlist1.push(o1),localStorage.setItem("cartlist1",JSON.stringify(cartlist1)))}else o1.cart_number=xxs.value,cartlist1.push(o1),localStorage.setItem("cartlist1",JSON.stringify(cartlist1))}"+"==target.innerHTML&&xxs.value++,"-"==target.innerHTML&&(1<xxs.value?xxs.value--:xxs.value=1)}}function getCookie(i){for(var t=document.cookie.split("; "),s="",a=0;a<t.length;a++){var l=t[a].split("=");l[0]===i&&(s=l[1])}return s}function setCookie(i,t,s){s?(s=new Date-288e5+1e3*s,document.cookie=i+`=${t};expires=`+new Date(s)):document.cookie=i+"="+t}function delCookie(i){setCookie(i,"",-1)}search?(ar1=search.split("?")[1].split("="),"id"==ar1[0]?show():(alert("参数有误"),location.href="./shop.html")):(alert("非法进入"),location.href="./shop.html");