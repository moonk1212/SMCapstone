$(function() {
	
	const getIdCheck= RegExp(/^[a-zA-Z0-9]{4,14}$/);
	const getPwCheck= RegExp(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/);
	const getName= RegExp(/^[a-zA-Z0-9]+$/);
	const getWeight= RegExp(/^[0-9]+$/);
	const getHeight= RegExp(/^[0-9]+$/);
	
	const getMail = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
	let chk1 = false, chk2 = false, chk3 = false, chk4 = false, chk5 =false, chk6= false;
	
	//회원가입 검증~~
	//ID 입력값 검증.
	$('#user_id').on('keyup', function() {
		if($("#user_id").val() === ""){
			$('#user_id').css("background-color", "pink");
			$('#idChk').html('<b style="font-size:14px;color:red;">[아이디는 필수 정보에요!]</b>');
			chk1 = false;
		}
		
		//아이디 유효성검사
		else if(!getIdCheck.test($("#user_id").val())){
			$('#user_id').css("background-color", "pink");
			$('#idChk').html('<b style="font-size:14px;color:red;">[영문자,숫자 4-14자]</b>');	  
			chk1 = false;
		} 
		//ID 중복확인 비동기 처리
		else {
			const userId = $('#user_id').val();
			$.ajax({
				type: "POST",
				url: "/mvc/user/idCheck",
				headers: {
	                "Content-Type": "application/json",
	                "X-HTTP-Method-Override": "POST"
	            },
				data: userId ,
				datatype: "text",
				success: function(data) {
					console.log(data);
					if(data === "OK") {
						$('#user_id').css("background-color", "aqua");
						$('#idChk').html('<b style="font-size:14px;color:green;">[ID 사용 가능!]</b>');
						chk1 = true;
					} else {
						$('#user_id').css("background-color", "pink");
						$('#idChk').html('<b style="font-size:14px;color:red;">[중복된 ID입니다!]</b>');
						chk1 = false;
					}
				},
				error : function(error) {
	                
	                console.log("error : " + error);
	            }
			});
		}
	});
	
	//패스워드 입력값 검증.
	$('#password').on('keyup', function() {
		//비밀번호 공백 확인
		if($("#password").val() === ""){
		    $('#password').css("background-color", "pink");
			$('#pwChk').html('<b style="font-size:14px;color:red;">[패스워드는 필수정보!]</b>');
			chk2 = false;
		}		         
		//비밀번호 유효성검사
		else if(!getPwCheck.test($("#password").val()) || $("#password").val().length < 8){
		    $('#password').css("background-color", "pink");
			$('#pwChk').html('<b style="font-size:14px;color:red;">[특수문자 포함 8자이상]</b>');
			chk2 = false;
		} else {
			$('#password').css("background-color", "aqua");
			$('#pwChk').html('<b style="font-size:14px;color:green;">[참 잘했어요]</b>');
			chk2 = true;
		}
		
	});
	
	//패스워드 확인란 입력값 검증.
	$('#password_check').on('keyup', function() {
		//비밀번호 확인란 공백 확인
		if($("#password_check").val() === ""){
		    $('#password_check').css("background-color", "pink");
			$('#pwChk2').html('<b style="font-size:14px;color:red;">[패스워드확인은 필수정보!]</b>');
			chk3 = false;
		}		         
		//비밀번호 확인란 유효성검사
		else if($("#password").val() != $("#password_check").val()){
		    $('#password_check').css("background-color", "pink");
			$('#pwChk2').html('<b style="font-size:14px;color:red;">[위에랑 똑같이!!]</b>');
			chk3 = false;
		} else {
			$('#password_check').css("background-color", "aqua");
			$('#pwChk2').html('<b style="font-size:14px;color:green;">[참 잘했어요]</b>');
			chk3 = true;
		}
		
	});
	
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
			$('#nameChk').html('<b style="font-size:14px;color:red;">[이름은 한글로 ~]</b>');
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
	
	$('#signup-btn').click(function(e) {
		if(chk1 && chk2 && chk3 && chk4 && chk5 &&chk6) {
			const id = $("#user_id").val();
			const pw = $("#password").val();
			const name = $("#user_name").val();
			const we = $("#user_weight").val();
			const he = $("#user_height").val();
			const user = {
				userId: id,
	            userPw: pw,
	            userName: name,
	            userWeight: we,
	            userHeight: he
			};
			console.log(user);
			
			$.ajax({
				type: "POST",
				url: "/mvc/user/join",
	            headers: {
	                "Content-Type": "application/json",
	                "X-HTTP-Method-Override": "POST"
	            },
	            dataType: "text",
	            data: JSON.stringify(user),
	            success: function(result) {
	            	console.log("result: " + result);
	            	if(result === "joinSuccess") {
	            		alert("회원가입 성공!");
	            		self.location = "/mvc/user/login";
	            	}
	            }
			});
		} else {
			alert('입력정보를 다시 확인하세요.');			
		}
	});
	
	///////////////////////////////////////////////////////////////////////////////////////////
	
	
	
});
















