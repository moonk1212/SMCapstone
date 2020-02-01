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
    <title>TestPage</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="${ctx }/resources/css/index.css">
</head>
<body>
  <div class="container">
    <div class="whales-fit" style="float:left">Whale's fit</div>
  <!-- 이미지로 교체 -->
    <div style="float:right">
    <a href="<c:url value='/user/logout'/>">
    <button class="btn">
    <image src="${ctx }/resources/ic/btn_logout.png" alt="logout"/>
    </button> 
    </a>
</div>
    <div class="layer">
      <h2 id="which-size"> 준비 중 입니다 ^^
    </div>
	<a href ="<c:url value ='/user/mypage'/>">
    <div class="btn-modify">돌아가기</div></a>
  </div>
</body>
</html>
