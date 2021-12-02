var box=document.querySelector(".row"),pag=document.querySelector(".pagination");async function show(){var s=await PromiseAjax({url:"../php/list.php",datatype:"json"}),e={pageInfo:{pagenum:1,pagesize:24,totalsize:s.length,totalpage:Math.ceil(s.length/24)},textInfo:{first:"首页",prev:"上一页",next:"下一页",last:"尾页"}};new Pagination(pag,e,e=>{for(var n=s.slice(24*(e-1),24*e),t="",i=0;i<n.length;i++)t+=`
            <div class="col-md-4">
            <ul class='shopul'>
            <a href="./xianqing.html?id=${n[i].id}" style="text-decoration: none;"><li class="detailImg">
                    <img src="${n[i].img1}" alt="">
                    <div class="bg">
                        <p class="p2">￥${n[i].text}</p>
                        <p class="p3">${n[i].texte2}</p>
                        <p class="p4">${n[i].text3}
                        </p>
                    </div>
                </li></a>       
                <li class="detailText">
                    <div><span class="a0"><img
                                src='${n[i].img2}'>&nbsp;&nbsp;&nbsp;${n[i].name}</span>
                        <span class="a1">&nbsp;&nbsp;&nbsp;<span>0</span>&nbsp;&nbsp;&nbsp;
                            <img name='hx' src="http://imgs-qn.iliangcang.com/images/default/heart_gray20_18.png" alt=""></span>
                    </div>
                </li>
            </ul>
            </div>
            
            `;box.innerHTML=t,fns()})}function fns(){document.querySelector(".row").onclick=function(e){var n=(e=e||window.event).target||e.srcElement;"hx"==n.name&&(""==getCookie("user")?location.href="./login.html":(e="https://imgs-qn.iliangcang.com/images/default/xin_red.png",n.getAttribute("src")==e?(n.setAttribute("src","http://imgs-qn.iliangcang.com/images/default/heart_gray20_18.png"),n.previousElementSibling.innerHTML=parseInt(n.previousElementSibling.innerHTML)-1):(n.setAttribute("src",e),n.previousElementSibling.innerHTML=parseInt(n.previousElementSibling.innerHTML)+1)))}}function getCookie(e){for(var n=document.cookie.split("; "),t="",i=0;i<n.length;i++){var s=n[i].split("=");s[0]===e&&(t=s[1])}return t}function setCookie(e,n,t){t?(t=new Date-288e5+1e3*t,document.cookie=e+`=${n};expires=`+new Date(t)):document.cookie=e+"="+n}function delCookie(e){setCookie(e,"",-1)}show();