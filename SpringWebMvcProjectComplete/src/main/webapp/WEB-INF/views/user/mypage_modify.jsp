<!DOCTYPE html>
<%@ page contentType="text/html;charset=UTF-8" language="java" 
		trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<% 
    String ctx = request.getContextPath();    
    pageContext.setAttribute("ctx", ctx);
%>
<html>
<head>
    <title>Index</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="<%=request.getContextPath() %>/resources/css/index.css">

</head>
<body>
<c:if test="${not empty login}">
<div class="container">
<div class="whales-fit" style="float:left">Whale's fit</div>
  <!--  로그아웃 부분 -->
  <div style="float:right">
    <a href="<c:url value='/user/logout'/>">
    <button class="btn">
    <image src="${ctx }/resources/ic/btn_logout.png" alt="logout"/>
    </button> 
    </a>
    </div>
<!-- 수정하기 부분 -->
    <div class="layer" style="padding-top:40px; padding-bottom:50px;">
         <image src="${ctx }/resources/ic/index/profile1.png" alt="profile image" class="profile-image" style="padding-bottom:25px;">
          <table style="cellpadding: 0; cellspacing: 0; margin: 0 auto; width: 100% ">
						<tr>
							<td><input type="text" name="userId" id="user_id"
								
								style="margin-bottom: 25px; width: 100%; height: 30px; border: 1px solid #d9d9de"
								value="${login.userId }" readonly>
								</td>
						</tr>

						<tr>
							<td><input type="text" name="userName" id="user_name"
								class="form-control tooltipstered" maxlength="6"
								required="required" aria-required="true"
								style="margin-bottom: 25px; width: 100%; height: 30px; border: 1px solid #d9d9de"
								placeholder="닉네임을 영어로 적어주세요!"></td>
						</tr>					
						<tr>
						<td><input type="text" name="userHeight" id="user_height"
								class="form-control tooltipstered" maxlength="6"
								required="required" aria-required="true"
								style="margin-bottom: 25px; width: 100%; height: 30px; border: 1px solid #d9d9de"
								placeholder="키를 입력해주세요(cm)"></td>
						
						</tr>
						<tr>
						<td><input type="text" name="userWeight" id="user_weight"
								class="form-control tooltipstered" maxlength="6"
								required="required" aria-required="true"
								style="margin-bottom: 25px; width: 100%; height: 30px; border: 1px solid #d9d9de"
								placeholder="몸무게 입력해주세요(Kg)"></td>
						
						</tr>												

						<tr>
							<td style="width: 100%; text-align: center; colspan: 2;">
							<input
								type="image" src="${ctx }/resources/ic/btn_modify.png"
								class="btn btn-primary form-control tooltipstered" id="update-btn"
								>
							</td>
						</tr>

					</table>
     
        
    </div>
    <!-- /.form-box -->

</div>

<!-- /.register-box -->
<jsp:include page="../include/plugin-js.jsp" />
<script src="<c:url value='/dist/js/custom/user-update-validation.js?version=45'/>"></script>
    </c:if>
</body>
</html>










