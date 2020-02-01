function submit(){

	   //input id로 변수 x1~x6에 input 값 저장
	 
	  var x2 = document.getElementById("outseam1").value;
	  var x3 = document.getElementById("waist1").value;
	  var x4 = document.getElementById("bottom1").value;
	  var x5 = document.getElementById("rise1").value;
	  var x6 = document.getElementById("thigh1").value;
	  var x7 = document.getElementById("hem1").value;
	  var cnt=0;
	  var cnt2=0;
	
	  var x22 = document.getElementById("outseam2").value;
	  var x33 = document.getElementById("waist2").value;
	  var x44 = document.getElementById("bottom2").value;
	  var x55 = document.getElementById("rise2").value;
	  var x66 = document.getElementById("thigh2").value;
	  var x77 = document.getElementById("hem2").value;
	
	  var x222 = document.getElementById("my_btm_outseam").value;
	  var x333 = document.getElementById("my_btm_waist").value;
	  var x444 = document.getElementById("my_btm_bottom").value;
	  var x555 = document.getElementById("my_btm_rise").value;
	  var x666 = document.getElementById("my_btm_thigh").value;
	  var x777 = document.getElementById("my_btm_hem").value;

	  var my_btm_outseam = Number(x222);
	  var my_btm_waist = Number(x333);
	  var my_btm_bottom = Number(x444);
	  var my_btm_rise = Number(x555);
	  var my_btm_thigh = Number(x666);
	  var my_btm_hem = Number(x777);

	  var outseam1 = Number(x2);
	  var waist1 = Number(x3);
	  var bottom1 = Number(x4);
	  var rise1 = Number(x5);
	  var thigh1 = Number(x6);
	  var hem1 = Number(x7);
	  
	  var outseam2 = Number(x22);
	  var waist2 = Number(x33);
	  var bottom2 = Number(x44);
	  var rise2 = Number(x55);
	  var thigh2 = Number(x66);
	  var hem2 = Number(x77);  
	  
	  var resultoutseam1 = Math.abs(my_btm_outseam - outseam1);
	  var resultwaist1 =Math.abs(my_btm_waist- waist1);
	  var resultbottom1=Math.abs(my_btm_bottom - bottom1);
	  var resultrise1=Math.abs(my_btm_rise - rise1);
	  var resultthigh1=Math.abs(my_btm_thigh -thigh1);
	  var resulthem1 =Math.abs(my_btm_hem -hem1);
	  
	  var resultoutseam2 = Math.abs(my_btm_outseam - outseam2);
	  var resultwaist2 =Math.abs(my_btm_waist- waist2);
	  var resultbottom2=Math.abs(my_btm_bottom - bottom2);
	  var resultrise2=Math.abs(my_btm_rise - rise2);
	  var resultthigh2=Math.abs(my_btm_thigh -thigh2);
	  var resulthem2 =Math.abs(my_btm_hem -hem2);
	  
	  var result = " "; //결과값
	  if(resultoutseam1 >resultoutseam2){
		cnt=cnt+1;
	  }
	  else if(resultoutseam1 <resultoutseam2){
		  
		cnt2=cnt2+1;
	  }
	  else{
		  cnt=cnt+1;
		  cnt2=cnt2+1;
	  }
	  if(resultwaist1 >resultwaist2){
		cnt=cnt+1;
	  }
	  else if(resultwaist1 <resultwaist2){
		  
		cnt2=cnt2+1;
	  }
	  else{
		  cnt=cnt+1;
		  cnt2=cnt2+1;
	  }
	  if(resultbottom1 >resultbottom2){
		cnt=cnt+1;
	  }
	  else if(resultbottom1 <resultbottom2){
		  
		cnt2=cnt2+1;
	  }
	  else{
		  cnt=cnt+1;
		  cnt2=cnt2+1;
	  }
	  if(resultrise1 >resultrise2){
		cnt=cnt+1;
	  }
	  else if(resultrise1 <resultrise2){
		  
		cnt2=cnt2+1;
	  }
	  else{
		  cnt=cnt+1;
		  cnt2=cnt2+1;
	  }
	  if(resultthigh1 >resultthigh2){
		cnt=cnt+1;
	  }
	  else if(resultthigh1 <resultthigh2){
		  
		cnt2=cnt2+1;
	  }
	  else{
		  cnt=cnt+1;
		  cnt2=cnt2+1;
	  }
	  if(resulthem1 >resulthem2){
		cnt=cnt+1;
	  }
	  else if(resulthem1 <resulthem2){
		  
		cnt2=cnt2+1;
	  }
	  else{
		  cnt=cnt+1;
		  cnt2=cnt2+1;
	  }		

		if (cnt>cnt2){
			//result=result+size1;
			document.getElementById("demo").innerHTML= "M사이즈를 추천합니다";
		}
		else if(cnt<cnt2){
			document.getElementById("demo").innerHTML= "S사이즈를 추천합니다";
		}
		else{
			if(resultthigh1>resultthigh2){
				//result=result+size1;
				document.getElementById("demo").innerHTML= "M사이즈를 추천합니다";
			}
			else{
				document.getElementById("demo").innerHTML= "S사이즈를 추천합니다";
			}
		}
		 
	}
	