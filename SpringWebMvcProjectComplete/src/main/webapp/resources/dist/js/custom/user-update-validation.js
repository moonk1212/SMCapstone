$(function() {
	const getIdCheck= RegExp(/^[a-zA-Z0-9]{4,14}$/);
	const getName= RegExp(/^[a-zA-Z0-9]+$/);
	const getWeight= RegExp(/^[0-9]+$/);
	const getHeight= RegExp(/^[0-9]+$/);
	
	
	let chk1 = false, chk2 = false, chk3 = false, chk4 = false, chk5 =false, chk6= false;
	
	
	//이름 입력값 검증.
	$('#user_name').on('keyup', function() {
		//이름값 공백 확인
		if($("#user_name").val() === ""){
		    $('#user_name').css("background-color", "pink");
			$('#nameChk').html('<b style="font-size:14px;color:red;">[이름은 필수정보!]</b>');
			chk4 = false;
		}		         
		//이름값 유효성검사
		else if(!getName.test($("#user_name").val())){
		    $('#user_name').css("background-color", "pink");
			$('#nameChk').html('<b style="font-size:14px;color:red;">[이름은 영어로 ~]</b>');
			chk4 = false;
		} else {
			$('#user_name').css("background-color", "aqua");
			$('#nameChk').html('<b style="font-size:14px;color:green;">[참 잘했어요]</b>');
			chk4 = true;
		}
		
	});
	
	//몸무게 입력값 검증.
	$('#user_weight').on('keyup', function() {
		//몸무게 공백 확인
		if($("#user_weight").val() === ""){
		    $('#user_weight').css("background-color", "pink");
			$('#weightChk').html('<b style="font-size:14px;color:red;">[몸무게는 필수정보!]</b>');
			chk5 = false;
		}		         
		//몸무게 입력값 유효성검사
		else if(!getWeight.test($("#user_weight").val())){
		    $('#user_weight').css("background-color", "pink");
			$('#weightChk').html('<b style="font-size:14px;color:red;">[몸무게는 숫자로]</b>');
			chk5 = false;
		} else {
			$('#user_weight').css("background-color", "aqua");
			$('#weightChk').html('<b style="font-size:14px;color:green;">[참 잘했어요]</b>');
			chk5 = true;
		}
		
	});
	
	//키 입력값 검증.
	$('#user_height').on('keyup', function() {
		//키 공백 확인
		if($("#user_height").val() === ""){
		    $('#user_height').css("background-color", "pink");
			$('#heightChk').html('<b style="font-size:14px;color:red;">[키는 필수정보!]</b>');
			chk6 = false;
		}		         
		//키 입력값 유효성검사
		else if(!getHeight.test($("#user_height").val())){
		    $('#user_height').css("background-color", "pink");
			$('#heightChk').html('<b style="font-size:14px;color:red;">[키는 숫자로]</b>');
			chk6 = false;
		} else {
			$('#user_height').css("background-color", "aqua");
			$('#heightChk').html('<b style="font-size:14px;color:green;">[참 잘했어요]</b>');
			chk6 = true;
		}
		
	});
	
	//수정완료 버튼값 
	$('#update-btn').click(function(e) {
		if( chk4 && chk5 &&chk6) {
			const id = $("#user_id").val();
			const name = $("#user_name").val();
			const we = $("#user_weight").val();
			const he = $("#user_height").val();
			const user = {
					userId: id,
	            userName: name,
	            userWeight: we,
	            userHeight: he
			};
			console.log(user);
			
			$.ajax({
				type: "POST",
				url: "/mvc/user/mypage_modify",
	            headers: {
	                "Content-Type": "application/json",
	                "X-HTTP-Method-Override": "POST"
	            },
	            dataType: "text",
	            data: JSON.stringify(user),
	            success: function(result1) {
	            	console.log("result: " + result1);
	            	if(result1 === "updateSuccess") {
	            		alert("수정 성공!");
	            		self.location = "/mvc/user/mypage";
	            	}
	            }
			});
		} else {
			alert('입력정보를 다시 확인하세요.');			
		}
		
	});
	
	///////////////////////////////////////////////////////////////////////////////////////////
	
	
	
});
















