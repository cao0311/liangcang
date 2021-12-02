var box=document.querySelector(".container"),user1=getCookie("user"),url;user1||(alert("尚未登录，请登录之后在进入"),url=location.href,location.href="./login.html?url1="+url);var cartlist1=localStorage.getItem("cartlist1")||"[]";function show(){var t=cartlist1.every(t=>1==t.is_select);if(0<cartlist1.length){for(var i=`
        <div class="boxs">
        <div class="boxCenter">
            <div class="top">
                <span class="left">购物车</span><span class="right">付款</span>
            </div>
            <div class="bottom">
                <div class='a0'>
                    <ul>
                        <li><input type="checkbox" name="quan"${t?"checked":""}>全选</li>
                        <li class="l1">良品</li>
                        <li style="margin-left: -30px;">数量</li>
                        <li>单价(元)</li>
                        <li>小计(元)</li>
                        <li>操作</li>
                    </ul>
                </div>`,s=0;s<cartlist1.length;s++)i+=`
                <div class='content'>
                    <ul>
                        <li><input type="checkbox" id=${cartlist1[s].id} name="xuan"${1==cartlist1[s].is_select?"checked":""}></li>
                        <li class="l1"><span style='margin-right:10px'><img src="${cartlist1[s].img1}" width="150px"></span><span>${cartlist1[s].texte2}</span></li>
                        <li>
                            <span class="a1" id=${cartlist1[s].id} ${cartlist1[s].cart_number<=1?"disabled":""}>-</span>
                            <span>${cartlist1[s].cart_number}</span>
                            <span class="a1"style='margin-right:0' id=${cartlist1[s].id}${cartlist1[s].cart_number>=cartlist1[s].goods_number?"disabled":""}>+</span>
                        </li>
                        <li>
                            ￥<span>${cartlist1[s].text}</span>
                        </li>
                        <li>
                            ￥<span>${(cartlist1[s].cart_number*cartlist1[s].text).toFixed(2)}</span>
                        </li>
                        <li class="bg"><span id=${cartlist1[s].id}>删除</span></li>
                    </ul>
                </div>`;i+=`
                <div class='floor'>
                    <div class="floorMain">
                    <div class="price">
                        <div>良品总价/</div>
                        <div class="p1">￥${total1()[1]}</div>
                    </div>
                    <button>立即结算</button>
                    <div>———<span class='car3'>继续购物<span>———</div>
                </div>
                </div>
            </div>
        </div>
    </div>
        `,box.innerHTML=i}else{t=`
    <div class="boxs">
        <div class="boxCenter">
            <div class="top">
                <span class="left">购物车</span><span class="right">付款</span>
            </div>
            <div class="car1">
                <div class='car2'>
                    <img src="https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/23/23450.png" alt="">
                </div>
                <div>您的购物车还是空的</div>
            </div>
            <div class='floor'>
                    <div class="floorMain">
                    <div class="price">
                        <div>良品总价/</div>
                        <div class="p1">￥${total1()[1]}</div>
                    </div>
                    <button>立即结算</button>
                    <div>———<span class='car3'>继续购物</span>———</div>
                </div>
        </div>
    </div>
    `;box.innerHTML=t}}cartlist1=eval("("+cartlist1+")"),show();var car3=document.querySelector(".car3");function total1(){var i=0,s=0;return cartlist1.forEach(t=>{1==t.is_select&&(i+=parseInt(t.cart_number),s+=parseInt(t.cart_number)*parseFloat(t.text))}),[i,s]}car3.onclick=function(){location.href="./shop.html"},box.onclick=function(t){var i,s=(t=t||window.event).target||t.srcElement;"删除"==s.innerHTML&&(i=s.getAttribute("id"),cartlist1=cartlist1.filter(t=>t.id!=i),localStorage.setItem("cartlist1",JSON.stringify(cartlist1)),show()),"+"==s.innerHTML&&(i=s.getAttribute("id"),cartlist1.forEach(t=>{t.id==i&&t.cart_number++}),localStorage.setItem("cartlist1",JSON.stringify(cartlist1)),show()),"-"==s.innerHTML&&(i=s.getAttribute("id"),cartlist1.forEach(t=>{t.id==i&&1<t.cart_number&&t.cart_number--}),localStorage.setItem("cartlist1",JSON.stringify(cartlist1)),show()),"quan"==s.name&&(cartlist1.forEach(t=>{s.checked?t.is_select=1:t.is_select=0}),localStorage.setItem("cartlist1",JSON.stringify(cartlist1)),show()),"xuan"==s.name&&(i=s.getAttribute("id"),cartlist1.forEach(t=>{t.id==i&&(s.checked?t.is_select=1:t.is_select=0)}),localStorage.setItem("cartlist1",JSON.stringify(cartlist1)),show()),"立即结算"==s.innerHTML&&(0<cartlist1.length?confirm("您确定要购买以下商品吗？")&&(alert("您已支付：￥"+total1()[1]),cartlist1=cartlist1.filter(t=>1!=t.is_select),localStorage.setItem("cartlist1",JSON.stringify(cartlist1)),show()):(alert("您的购物车中还没有任何商品"),location.href="./shop.html")),"继续购物"==s.innerHTML&&(location.href="./shop.html")};