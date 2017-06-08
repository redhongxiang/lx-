window.onload=function(){
function fn(n){
		var aLi=oSmallli.getElementsByTagName('li');
        var aBigbox=getByclass(oBox,'bigbox');
			for(i=0;i<aLi.length;i++){
               aLi[i].index=i;
			   aBigbox[i].index=i;
			   aBigbox[i].style.display='none' 
			 if(aLi[n].index="0"){
			   aBigbox[0].style.display="block";
			 }
             if(aLi[n].index="1"){
			   //alert(aLi[i].index);
			   aBigbox[1].style.display="block";
			 }
			if(aLi[n].index="2"){
			   //alert(aLi[i].index);
			   aBigbox[2].style.display="block";
			 }
            if(aLi[n].index="3"){
			   //alert(aLi[i].index);
			   aBigbox[3].style.display="block";
			 }
			 if(aLi[n].index="4"){
			   aBigbox[4].style.display="block";
			 }
			 if(aLi[n].index="5"){
			   aBigbox[5].style.display="block";
			 }
           }
		}
		

fn(2)
}