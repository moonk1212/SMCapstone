<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<% 
    String ctx = request.getContextPath();    
    pageContext.setAttribute("ctx", ctx);
%>
<html>
<head>
    <title>login</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="${ctx }/resources/css/register.css?ver=4">

</head>
<body>
<form action="#" method="post">
  <div class="container">
     <image src="${ctx }/resources/ic/register.png">
    <div id="welcome">Welcome whale's fit</div>
    
    <div id="login-box">
      <div class="guide">ID<span id="idCheck" style="float:right;"></span></div>
      <div>
        <input class="input-box" type="text" name="userId" id="signInId" maxlength="14"
				required="required" aria-required="true"
				
				placeholder="숫자와 영어로 4-14자">
      </div>
      <div class="guide">PW<span id="pwCheck" style="float:right;" ></span></div>
      <div>
        <input class="input-box" type="password" size="17" maxlength="20" id="signInPw"
			   name="userPw" maxlength="20" required="required" aria-required="true"
				
				placeholder="영문과 특수문자를 포함한 최소 8자">
      </div>
      <div>
       <input type="checkbox" id="auto-login" name="autoLogin" checked="checked"> 자동로그인
      </div>
      <!-- 로그인 버튼 (div) -->
      <div class="btn-login" id="signIn-btn">
        <h4>로그인</h4>
      </div>
       <div class="btn-gotoreg " >
        	<a href="<c:url value='/user/join'/>"> 회원가입</a>
      </div>
   
          </div>

  </div>
   </form>
<!-- /.register-box -->
<jsp:include page="../include/plugin-js.jsp" />
<script>
$(function() {
	
	const getIdCheck= RegExp(/^[a-zA-Z0-9]{4,14}$/);
	const getPwCheck= RegExp(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/);
	let chk1 = false, chk2 = false;
	
	//로그인 검증~~
	//ID 입력값 검증.
	$('#signInId').on('keyup', function() {
		if($("#signInId").val() == ""){
			$('#signInId').css("background-color", "pink");
			$('#idCheck').html('<b style="font-size:14px;color:red;">[아이디는 필수!]</b>');
			chk1 = false;
		}		
		
		//아이디 유효성검사
		else if(!getIdCheck.test($("#signInId").val())){
			$('#signInId').css("background-color", "pink");
			$('#idCheck').html('<b style="font-size:14px;color:red;">[영문자,숫자 4-14자~]</b>');	  
			chk1 = false;
		} else {
			$('#signInId').css("background-color", "aqua");
			$('#idCheck').html('<b style="font-size:14px;color:green;">[참 잘했어요]</b>');
			chk1 = true;
		}
	});
	
	//패스워드 입력값 검증.
	$('#signInPw').on('keyup', function() {
		//비밀번호 공백 확인
		if($("#signInPw").val() === ""){
		    $('#signInPw').css("background-color", "pink");
			$('#pwCheck').html('<b style="font-size:14px;color:red;">[패스워드는 필수!]</b>');
			chk2 = false;
		}		         
		//비밀번호 유효성검사
		else if(!getPwCheck.test($("#signInPw").val()) || $("#signInPw").val().length < 8){
		    $('#signInPw').css("background-color", "pink");
			$('#pwCheck').html('<b style="font-size:14px;color:red;">[특수문자 포함 8자이상]</b>');
			chk2 = false;
		} else {
			$('#signInPw').css("background-color", "aqua");
			$('#pwCheck').html('<b style="font-size:14px;color:green;">[참 잘했어요]</b>');
			chk2 = true;
		}
		
	});
	
	//로그인 버튼 클릭 이벤트
	$("#signIn-btn").click(function() {
		if(chk1 && chk2) {
			//ajax통신으로 서버에서 값 받아오기
			const id = $('#signInId').val();
			const pw = $('#signInPw').val();
			//is()함수는 상태여부를 판단하여 논리값을 리턴합니다.
			let autoLogin = $("input[name=autoLogin]").is(":checked");
			
			console.log("id: " + id);
			console.log("pw: " + pw);
			console.log("auto: " + autoLogin);
			
			const userInfo = {
					userId : id,
					userPw : pw,
					autoLogin : autoLogin
			};
			
			$.ajax({
				type: "POST",
				url: "/mvc/user/loginCheck",
				headers: {
	                "Content-Type": "application/json"
	            },
				data: JSON.stringify(userInfo),
				dataType : "text",
				success: function(data) {
					console.log("result: " + data);	
					
					if(data === "idFail") {
						$('#signInId').css("background-color", "pink");
						$('#idCheck').html('<b style="font-size:14px;color:red;">[회원가입 먼저~~]</b>');
						$('#signInPw').val("");
						$('#signInId').focus();
						chk2 = false;
				    } else if(data === "pwFail") {
						$('#signInPw').css("background-color", "pink");
						$('#signInPw').val("");
						$('#signInPw').focus();
						$('#pwCheck').html('<b style="font-size:14px;color:red;">[비밀번호가 틀렸어요!]</b>');
						chk2 = false;
					} else if(data === "loginSuccess") {
						self.location="/mvc";
					}
					
				}
			});
			
		} else {
			alert("입력정보를 다시 확인하세요!");
		}
	});
});
</script>
</body>
</html>










