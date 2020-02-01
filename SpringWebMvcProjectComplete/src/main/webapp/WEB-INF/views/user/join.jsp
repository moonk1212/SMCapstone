<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<% 
    String ctx = request.getContextPath();    
    pageContext.setAttribute("ctx", ctx);
%>
<html>
<head>
    <title>register</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="${ctx }/resources/css/register.css?ver=2">

</head>
<body>
  <div class="container">
      <image src="${ctx }/resources/ic/register.png">
    <div id="welcome">Welcome whale's fit</div>
    <div id="register-box">
      <div class="guide">ID<span id="idChk" style="float:right;"></span></div>
      <div>
        <input class="input-box" type="text" name="userId" id="user_id" maxlength="14"
				required="required" aria-required="true"
				
				placeholder="숫자와 영어로 4-14자">
      </div>
      <div class="guide">PW<span id="pwChk" style="float:right;" ></span></div>
      <div>
        <input class="input-box" type="password" size="17" maxlength="20" id="password"
			   name="userPw" maxlength="20" required="required" aria-required="true"
				
				placeholder="영문과 특수문자를 포함한 최소 8자">
      </div>
      <div class="guide">PW Confirm<span id="pwChk2" style="float:right;"></div>
      <div>
        <input class="input-box" type="password" size="17" maxlength="20" id="password_check"
				name="pw_check" 
				maxlength="20" required="required" aria-required="true"
				
				placeholder="비밀번호가 일치해야합니다.">
      </div>
      <div class="guide">Name<span id="nameChk" style="float:right;"></span></div>
      <div>
      <input  class="input-box" type="text" name="userName" id="user_name"
			 maxlength="6"
			required="required" aria-required="true"
	
			placeholder="영어로 적어주세요!">
      </div>
      <div class="guide">Height<span id="heightChk" style="float:right;"></span></div>
      <div>
        <input class="input-box" type="text" name="userHeight" id="user_height"
				 maxlength="6"
				required="required" aria-required="true"
			
				placeholder="키를 입력(cm)">
      </div>
      <div class="guide">Weight<span id="weightChk" style="float:right;"></span></div>
      <div>
        <input class="input-box" type="text" name="userWeight" id="user_weight"
				 maxlength="6"
				required="required" aria-required="true"
				
				placeholder="몸무게 입력(Kg)">
      </div>
      <!-- 회원가입 버튼 (div) -->
      <div class="btn-register" id="signup-btn">
        <h4>회원 가입</h4>
      </div>
    </div>
  </div>
<!-- /.register-box -->
<jsp:include page="../include/plugin-js.jsp" />
<script src="<c:url value='/dist/js/custom/user-validation.js?version=23'/>"></script>
</body>
</html>










