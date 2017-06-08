/**
 * @author miaov
 */

    function getByclass(obj,aClass){
        var aEve=document.getElementsByTagName('*')
        var i=0;
        var attr=[]
        for(i=0;i<aEve.length;i++){
            if(aEve[i].className==aClass){
                attr.push(aEve[i])
            }
        }
        return attr
    }

    function getStyle(obj, attr)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[attr];
	}
	else
	{
		return getComputedStyle(obj, false)[attr];
	}
}

function starmove(obj,json,fnEnd){
       //关闭定时器
       clearInterval(obj.timer)
       //同时开好几个对象定时器
       obj.timer=setInterval(function()
       {
      //声明一个变量，看下JSON中的属性点是已经达到==目标点是都已经完成
            var bStop=true;
      //使用for 循环，引出json中的各个目标点
      for(var attr in json)
      {
        //声明一个变量，主要存储原始点
         var cur=0;
         //如果 属性==opacity，要另行考虑
         if(attr=='opacity')
         {
        //为了确保得到的数字是整数，所以使用Math.round,后面是转义，*100是因为opacity的值为小数
        cur=Math.round(parseFloat(getStyle(obj,attr))*100);   
         }else{
            //正常情况下的转义并赋值
             cur=parseFloat(getStyle(obj,attr))
           }
         //声明变量，获取速度
            // 速度=（目标点-原始点）/number   
         var speed=(json[attr]-cur)/6
         //进行速度的取整 Math.ceil 向上取整 Math.floor 向下取整
         speed=speed>0?Math.ceil(speed):Math.floor(speed);
         //如果 原始点！=目标点 ，不停止运动
         if(cur!=json[attr]) bStop=false;
         //如果 目标点==opacity
         if(attr=='opacity') 
         {
          //使用下面的代码求出 opacity
         obj.style.filter='alpha(opacity:'+(cur+speed)+')';
         obj.style.opacity=(cur+speed)/100;   
         }else{
             //使用下面的代码求出 [attr]也就是目标点的属性！
             obj.style[attr]=cur+speed+'px';
           }
       //当所有的运动都完成后，关闭定时器，若有函数，执行函数！
         if(bStop){
          clearInterval(obj.timer)
          if(fnEnd)fnEnd();
          }
         }    
       },30)
    }   
	
    window.onload=function(){
        var oBox=document.getElementById('main')
        var oBody=document.getElementById('abody')
        var oMenu=getByclass(oBox,'menu')[0]
        var oMenuBox=getByclass(oBox,'menu_open')[0]
        var oClose=getByclass(oBox,'close')[0]
        
        oMenu.onclick=function(){
            oMenuBox.style.display='block'

            var oDiv=document.createElement('div')
                oDiv.className='box'
            oBody.appendChild(oDiv)   

            oClose.onclick=function(){
                oMenuBox.style.display='none'
                oBody.removeChild(oDiv)
             }         
        }

        var oSmallli=getByclass(oBox,'smallli')[0]
        var oUl=oSmallli.getElementsByTagName('ul')[0]
        var aLi=oSmallli.getElementsByTagName('li')
        var aBigbox=getByclass(oBox,'bigbox')
        var aBtnLeft=getByclass(oBox,'btn_left')[0]
        var aBtnRight=getByclass(oBox,'btn_right')[0]
        oUl.style.width=aLi[0].offsetWidth*aLi.length+'px'
        var i=0
        var now=0
		
        function tab(){
            for(i=0;i<aLi.length;i++){
                    aBigbox[i].style.display='none'
                }
                aBigbox[now].style.display='block' 
                if(now==0){
                    oUl.style.left=0
                }
                else if(now>aLi.length-2)
                {
                     oUl.style.left=-(now-2)*aLi[0].offsetWidth+'px'
                }
                else{
                     oUl.style.left=-(now-1)*aLi[0].offsetWidth+'px'
                }               
               // document.title=now
            }
			
        for(i=0;i<aLi.length;i++){
            aLi[i].index=i;
			aBigbox[i].index=i;
            aLi[i].onclick=function(){
                now=this.index
                tab()
				
            }
        }
		
        /*setInterval(function(){
            now++
            if(now>aLi.length-1){
                now=0
            }
            tab() 
        },3000)*/
		

        aBtnRight.onclick=function(){
            now++
            if(now>aLi.length-1){
                now=0
            }
            if(now==1){
			}
		
            
            
            
            tab() 
        }
        aBtnLeft.onclick=function(){
            now--
            if(now<0){
                now=aLi.length-1
            }
            
           if(now==1){
			}
           
            tab() 
        }
		
		fn(3);
    
		
		
		
    }
    
  function fn(obj){
        var oUl1=document.getElementById("ul1");
		var oLi1=oUl1.getElementsByTagName("li")
		 var oBox=document.getElementById('main');
		var aBigbox=getByclass(oBox,'bigbox');
		var aBigbox1=document.getElementById("bigbox1");
			for(i=0;i<aBigbox.length;i++){
               //aLi[i].index=i;
			   aBigbox[i].index=i;
			   aBigbox1.style.display='none'; 			   
			   oLi1[obj].style.display="block";
			   aBigbox[obj].style.display='block'
			   	//alert("参数为"+obj)			 
            }
		      if(obj==3){
				 oUl1.style.left=oUl1.offsetLeft-107+'px';
			   }
			   if(obj==4){
				 oUl1.style.left=oUl1.offsetLeft-214+'px';
			   }
		}
