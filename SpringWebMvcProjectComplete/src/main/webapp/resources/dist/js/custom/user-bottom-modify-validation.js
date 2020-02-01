$(function() {
	
	const getmy_btm_outseam= RegExp(/^[0-9]+$/);
	const getmy_btm_waist= RegExp(/^[0-9]+$/);
	const getmy_btm_thigh= RegExp(/^[0-9]+$/);
	const getmy_btm_hem= RegExp(/^[0-9]+$/);
	const getmy_btm_bottom= RegExp(/^[0-9]+$/);
	const getmy_btm_rise= RegExp(/^[0-9]+$/);
	let ck0=false,chk1 = false, chk2 = false, chk3 = false, chk4 = false, chk5 =false, chk6= false;
	
	

	//이름 입력값 검증.
	$('#my_btm_outseam').on('keyup', function() {
		//이름값 공백 확인
		if($("#my_btm_outseam").val() === ""){
		    $('#my_btm_outseam').css("background-color", "pink");
			chk1 = false;
		}		         
		//이름값 유효성검사
		else if(!getmy_btm_outseam.test($("#my_btm_outseam").val())){
		    $('#my_btm_outseam').css("background-color", "pink");
			chk1 = false;
		} else {
			$('#my_btm_outseam').css("background-color", "aqua");
			chk1 = true;
		}
		
	});
	
	//몸무게 입력값 검증.
	$('#my_btm_waist').on('keyup', function() {
		//몸무게 공백 확인
		if($("#my_btm_waist").val() === ""){
		    $('#my_btm_waist').css("background-color", "pink");
			chk2 = false;
		}		         
		//몸무게 입력값 유효성검사
		else if(!getmy_btm_waist.test($("#my_btm_waist").val())){
		    $('#my_btm_waist').css("background-color", "pink");
			chk2 = false;
		} else {
			$('#my_btm_waist').css("background-color", "aqua");
			chk2 = true;
		}
		
	});
	
	//키 입력값 검증.
	$('#my_btm_thigh').on('keyup', function() {
		//키 공백 확인
		if($("#my_btm_thigh").val() === ""){
		    $('#my_btm_thigh').css("background-color", "pink");
			chk3 = false;
		}		         
		//키 입력값 유효성검사
		else if(!getmy_btm_thigh.test($("#my_btm_thigh").val())){
		    $('#my_btm_thigh').css("background-color", "pink");
			chk3 = false;
		} else {
			$('#my_btm_thigh').css("background-color", "aqua");
			chk3 = true;
		}
		
	});
	//이름 입력값 검증.
	$('#my_btm_hem').on('keyup', function() {
		//이름값 공백 확인
		if($("#my_btm_hem").val() === ""){
		    $('#my_btm_hem').css("background-color", "pink");
			chk4 = false;
		}		         
		//이름값 유효성검사
		else if(!getmy_btm_hem.test($("#my_btm_hem").val())){
		    $('#my_btm_hem').css("background-color", "pink");
			chk4 = false;
		} else {
			$('#my_btm_hem').css("background-color", "aqua");
			chk4 = true;
		}
		
	});
	
	//이름 입력값 검증.
	$('#my_btm_bottom').on('keyup', function() {
		//이름값 공백 확인
		if($("#my_btm_bottom").val() === ""){
		    $('#my_btm_bottom').css("background-color", "pink");
			chk5 = false;
		}		         
		//이름값 유효성검사
		else if(!getmy_btm_bottom.test($("#my_btm_bottom").val())){
		    $('#my_btm_bottom').css("background-color", "pink");
			chk5 = false;
		} else {
			$('#my_btm_bottom').css("background-color", "aqua");
			chk5 = true;
		}
		
	});
	
	//이름 입력값 검증.
	$('#my_btm_rise').on('keyup', function() {
		//이름값 공백 확인
		if($("#my_btm_rise").val() === ""){
		    $('#my_btm_rise').css("background-color", "pink");
			chk6 = false;
		}		         
		//이름값 유효성검사
		else if(!getmy_btm_rise.test($("#my_btm_rise").val())){
		    $('#my_btm_rise').css("background-color", "pink");
			chk6 = false;
		} else {
			$('#my_btm_rise').css("background-color", "aqua");
			chk6 = true;
		}
		
	});
	
	$('#update-btn').click(function(e) {
		if(chk1 && chk2 && chk3 && chk4 && chk5 &&chk6) {
			const userId=$("#my_btm_user").val();
			const detail =$("#my_btm_detail").val();
			const outseam = $("#my_btm_outseam").val();
			const waist = $("#my_btm_waist").val();
			const thigh = $("#my_btm_thigh").val();
			const hem = $("#my_btm_hem").val();
			const bottom = $("#my_btm_bottom").val();
			const rise = $("#my_btm_rise").val();
			const mybottom = {
					my_btm_user:userId,
					my_btm_detail:detail,
					my_btm_outseam: outseam,
					my_btm_waist: waist,
					my_btm_thigh: thigh,
					my_btm_hem: hem,
					my_btm_bottom: bottom,
					my_btm_rise:rise
			};
			console.log(mybottom);
			
			$.ajax({
				type: "POST",
				url: "/mvc/user/bottom_modify",
	            headers: {
	                "Content-Type": "application/json",
	                "X-HTTP-Method-Override": "POST"
	            },
	            dataType: "text",
	            data: JSON.stringify(mybottom),
	            success: function(result) {
	            	console.log("result: " + result);
	            	if(result === "updateMyBottomSuccess") {
	            		alert("내사이즈 업데이트 성공!");
	            		self.location = "/mvc/user/bottom_comparable";//나중에 /mvc/user/bottom_comparable
	            	}
	            }
			});
		} else {
			alert('입력정보를 다시 확인하세요.');			
		}
	});
	
	///////////////////////////////////////////////////////////////////////////////////////////
	
	
	
});
















