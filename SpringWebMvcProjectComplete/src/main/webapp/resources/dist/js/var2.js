$(function() {
	const getsize=RegExp(/^[a-zA-Z]+$/);
	const getsize1=RegExp(/^[a-zA-Z]+$/);
	const getmy_btm_outseam= RegExp(/^[0-9]+$/);
	const getmy_btm_waist= RegExp(/^[0-9]+$/);
	const getmy_btm_thigh= RegExp(/^[0-9]+$/);
	const getmy_btm_hem= RegExp(/^[0-9]+$/);
	const getmy_btm_bottom= RegExp(/^[0-9]+$/);
	const getmy_btm_rise= RegExp(/^[0-9]+$/);
	const getmy_btm_outseam1= RegExp(/^[0-9]+$/);
	const getmy_btm_waist1= RegExp(/^[0-9]+$/);
	const getmy_btm_thigh1= RegExp(/^[0-9]+$/);
	const getmy_btm_hem1= RegExp(/^[0-9]+$/);
	const getmy_btm_bottom1= RegExp(/^[0-9]+$/);
	const getmy_btm_rise1= RegExp(/^[0-9]+$/);
	let ck0=false,chk1 = false, chk2 = false, chk3 = false, chk4 = false, chk5 =false, chk6= false;
	let ck7=false,ck8=false,chk9 = false, chk10 = false, chk11 = false, chk12 =false, chk13= false;
	

	//총장 입력값 검증
	$('#size1').on('keyup', function() {
		//이름값 공백 확인
		if($("#size1").val() === ""){
		    $('#size1').css("background-color", "pink");
			chk0 = false;
		}		         
		//이름값 유효성검사
		else if(!getsize.test($("#size1").val())){
		    $('#size1').css("background-color", "pink");
			chk0 = false;
		} else {
			$('#size1').css("background-color", "aqua");
			chk0 = true;
		}
		
	});
	//총장 입력값 검증
	$('#outseam1').on('keyup', function() {
		//이름값 공백 확인
		if($("#outseam1").val() === ""){
		    $('#outseam1').css("background-color", "pink");
			chk1 = false;
		}		         
		//이름값 유효성검사
		else if(!getmy_btm_outseam.test($("#outseam1").val())){
		    $('#outseam1').css("background-color", "pink");
			chk1 = false;
		} else {
			$('#outseam1').css("background-color", "aqua");
			chk1 = true;
		}
		
	});
	
	//몸무게 입력값 검증.
	$('#waist1').on('keyup', function() {
		//몸무게 공백 확인
		if($("#waist1").val() === ""){
		    $('#waist1').css("background-color", "pink");
			chk2 = false;
		}		         
		//몸무게 입력값 유효성검사
		else if(!getmy_btm_waist.test($("#waist1").val())){
		    $('#waist1').css("background-color", "pink");
			chk2 = false;
		} else {
			$('#waist1').css("background-color", "aqua");
			chk2 = true;
		}
		
	});
	
	//키 입력값 검증.
	$('#bottom1').on('keyup', function() {
		//키 공백 확인
		if($("#bottom1").val() === ""){
		    $('#bottom1').css("background-color", "pink");
			chk3 = false;
		}		         
		//키 입력값 유효성검사
		else if(!getmy_btm_bottom.test($("#bottom1").val())){
		    $('#bottom1').css("background-color", "pink");
			chk3 = false;
		} else {
			$('#bottom1').css("background-color", "aqua");
			chk3 = true;
		}
		
	});
	//이름 입력값 검증.
	$('#rise1').on('keyup', function() {
		//이름값 공백 확인
		if($("#rise1").val() === ""){
		    $('#rise1').css("background-color", "pink");
			chk4 = false;
		}		         
		//이름값 유효성검사
		else if(!getmy_btm_rise.test($("#rise1").val())){
		    $('#rise1').css("background-color", "pink");
			chk4 = false;
		} else {
			$('#rise1').css("background-color", "aqua");
			chk4 = true;
		}
		
	});
	
	//이름 입력값 검증.
	$('#thigh1').on('keyup', function() {
		//이름값 공백 확인
		if($("#thigh1").val() === ""){
		    $('#thigh1').css("background-color", "pink");
			chk5 = false;
		}		         
		//이름값 유효성검사
		else if(!getmy_btm_thigh.test($("#thigh1").val())){
		    $('#thigh1').css("background-color", "pink");
			chk5 = false;
		} else {
			$('#thigh1').css("background-color", "aqua");
			chk5 = true;
		}
		
	});
	
	//이름 입력값 검증.
	$('#hem1').on('keyup', function() {
		//이름값 공백 확인
		if($("#hem1").val() === ""){
		    $('#hem1').css("background-color", "pink");
			chk6 = false;
		}		         
		//이름값 유효성검사
		else if(!getmy_btm_hem.test($("#hem1").val())){
		    $('#hem1').css("background-color", "pink");
			chk6 = false;
		} else {
			$('#hem1').css("background-color", "aqua");
			chk6 = true;
		}
		
	});
	//총장 입력값 검증
	$('#size2').on('keyup', function() {
		//이름값 공백 확인
		if($("#size2").val() === ""){
		    $('#size2').css("background-color", "pink");
			chk7 = false;
		}		         
		//이름값 유효성검사
		else if(!getsize1.test($("#size2").val())){
		    $('#size2').css("background-color", "pink");
		    chk7 = false;
		} else {
			$('#size2').css("background-color", "aqua");
			chk7 = true;
		}
		
	});
	//총장 입력값 검증
	$('#outseam2').on('keyup', function() {
		//이름값 공백 확인
		if($("#outseam2").val() === ""){
		    $('#outseam2').css("background-color", "pink");
		    chk8 = false;
		}		         
		//이름값 유효성검사
		else if(!getmy_btm_outseam1.test($("#outseam2").val())){
		    $('#outseam2').css("background-color", "pink");
		    chk8 = false;
		} else {
			$('#outseam2').css("background-color", "aqua");
			chk8 = true;
		}
		
	});
	
	//몸무게 입력값 검증.
	$('#waist2').on('keyup', function() {
		//몸무게 공백 확인
		if($("#waist2").val() === ""){
		    $('#waist2').css("background-color", "pink");
			chk9 = false;
		}		         
		//몸무게 입력값 유효성검사
		else if(!getmy_btm_waist1.test($("#waist2").val())){
		    $('#waist2').css("background-color", "pink");
		    chk9 = false;
		} else {
			$('#waist2').css("background-color", "aqua");
			chk9 = true;
		}
		
	});
	
	//키 입력값 검증.
	$('#bottom2').on('keyup', function() {
		//키 공백 확인
		if($("#bottom2").val() === ""){
		    $('#bottom2').css("background-color", "pink");
			chk10 = false;
		}		         
		//키 입력값 유효성검사
		else if(!getmy_btm_bottom1.test($("#bottom2").val())){
		    $('#bottom2').css("background-color", "pink");
			chk10 = false;
		} else {
			$('#bottom2').css("background-color", "aqua");
			chk10 = true;
		}
		
	});
	//이름 입력값 검증.
	$('#rise2').on('keyup', function() {
		//이름값 공백 확인
		if($("#rise2").val() === ""){
		    $('#rise2').css("background-color", "pink");
			chk11 = false;
		}		         
		//이름값 유효성검사
		else if(!getmy_btm_rise1.test($("#rise2").val())){
		    $('#rise2').css("background-color", "pink");
		    chk11 = false;
		} else {
			$('#rise2').css("background-color", "aqua");
			chk11 = true;
		}
		
	});
	
	//이름 입력값 검증.
	$('#thigh2').on('keyup', function() {
		//이름값 공백 확인
		if($("#thigh2").val() === ""){
		    $('#thigh2').css("background-color", "pink");
			chk12 = false;
		}		         
		//이름값 유효성검사
		else if(!getmy_btm_thigh1.test($("#thigh2").val())){
		    $('#thigh2').css("background-color", "pink");
		    chk12 = false;
		} else {
			$('#thigh2').css("background-color", "aqua");
			chk12 = true;
		}
		
	});
	
	//이름 입력값 검증.
	$('#hem2').on('keyup', function() {
		//이름값 공백 확인
		if($("#hem2").val() === ""){
		    $('#hem2').css("background-color", "pink");
			chk13 = false;
		}		         
		//이름값 유효성검사
		else if(!getmy_btm_hem1.test($("#hem2").val())){
		    $('#hem2').css("background-color", "pink");
			chk13 = false;
		} else {
			$('#hem2').css("background-color", "aqua");
			chk13 = true;
		}
		
	});
	$('#compare-btn').click(function(e) {
		if(chk0 && chk1 && chk2 && chk3 && chk4 && chk5 &&chk6 &&chk7 && chk8 && chk9 && chk10 && chk11 && chk12 &&chk13) {
			const myuserId=$("#my_btm_user").val();
			const mydetail =$("#my_btm_detail").val();
			const myoutseam = $("#my_btm_outseam").val();
			const mywaist = $("#my_btm_waist").val();
			const mythigh = $("#my_btm_thigh").val();
			const myhem = $("#my_btm_hem").val();
			const mybottom = $("#my_btm_bottom").val();
			const myrise = $("#my_btm_rise").val();
			const size1 = $("#size1").val();
			const outseam1 = $("#outseam1").val();
			const waist1 = $("#waist1").val();
			const thigh1 = $("#bottom1").val();
			const hem1 = $("#hem1").val();
			const bottom1 = $("#thigh1").val();
			const rise1 = $("#rise1").val();
			const size2= $("#size2").val();
			const outseam2 = $("#outseam2").val();
			const waist2 = $("#waist2").val();
			const thigh2 = $("#bottom2").val();
			const hem2 = $("#rise2").val();
			const bottom2 = $("#thigh2").val();
			const rise2 = $("#hem2").val();
			const comparebottom = {
					my_btm_user:myuserId,
					my_btm_detail:mydetail,
					my_btm_outseam: myoutseam,
					my_btm_waist: mywaist,
					my_btm_thigh: mythigh,
					my_btm_hem: myhem,
					my_btm_bottom: mybottom,
					my_btm_rise:myrise,
					size1: size1,
					outseam1 :outseam1,
					waist1: waist1,
					thigh1 : thigh1,
					hem1 : hem1,
					bottom1: bottom1,
					rise1 :rise1,
					size2: size2,
					outseam2 :outseam2,
					waist2: waist2,
					thigh2 : thigh2,
					hem2 : hem2,
					bottom2: bottom2,
					rise2 :rise2
					
			};
			console.log(comparebottom);
			/*
			$.ajax({
				type: "POST",
				url: "/mvc/user/bottom_insert",
	            headers: {
	                "Content-Type": "application/json",
	                "X-HTTP-Method-Override": "POST"
	            },
	            dataType: "text",
	            data: JSON.stringify(mybottom),
	            success: function(result) {
	            	console.log("result: " + result);
	            	if(result === "MyBottomSuccess") {
	            		alert("내사이즈 삽입 성공!");
	            		self.location = "/mvc/user/bottom_comparable";//나중에 /mvc/user/bottom_comparable
	            	}
	            }
			});*/
		} else {
			alert('입력정보를 다시 확인하세요.');			
		}
	});
	
	///////////////////////////////////////////////////////////////////////////////////////////
	
	
	
});
















