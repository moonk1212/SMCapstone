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
    <title>Savelist</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="${ctx }/resources/css/savelistFrame.css?ver=3">
    <link rel="stylesheet" href="${ctx }/resources/css/bottom.css?ver=1">
  <body>
  <c:if test="${not empty login}">

  <div class="container">
    <!-- 뒤로가기 버튼 -->
    <div style="float:left">
    <a href="<c:url value='/user/mypage'/>">
     <button class="btn">
    <image src="${ctx }/resources/ic/btn_back.png" alt="back" >
    </button> 
    </a>
    </div>
    <!-- 로그아웃 버튼 -->
    <div style="float:right">
    <a href="<c:url value='/user/logout'/>">
    <button class="btn">
    <image src="${ctx }/resources/ic/btn_logout.png" alt="logout"/>
    </button> 
    </a>
    </div>
      <!-- 바지종류 카테고리 -->
    <div class="box">
      <button class="btn"><img src="${ctx }/resources/ic/bottom/btn_oneline.png" alt="oneline"></button>
      <button class="btn"><img src="${ctx }/resources/ic/bottom/btn_slacks.png" alt="slacks"></button>
      <button class="btn"><img src="${ctx }/resources/ic/bottom/btn_wide.png" alt="wide"></button>
    </div>
    <!-- 세부사항 카테고리 -->
    <div class="box">
      <a href="<c:url value='/user/bottom_comparable'/>"><button class="btn2"><img src="${ctx}/resources/ic/bottom/btn_compare_us.png" alt="sizecompare" ></button></a>
      <a href="<c:url value='/user/bottom_insert'/>"><button class="btn2"> <img src="${ctx}/resources/ic/bottom/btn_insert_us.png" alt="sizeinsert" ></button></a>
      <a href="<c:url value='/user/bottom_modify'/>"><button class="btn2"> <img src="${ctx}/resources/ic/bottom/btn_modify_us.png" alt="sizemodify" ></button></a>
      <a href="<c:url value='/user/bottom_save'/>"><button class="btn2"> <img src="${ctx}/resources/ic/bottom/btn_savelist_s.png" alt="savelist" ></button></a>
     
    </div>
 
<!-- 저장내역에 들어가는 리스트 프레임 -->
  <div class="frame">
    <div class="image"></div>
    <div class="text">
      소녀나라<br>url<br>추천 사이즈: M
    </div>
  </div>
     </div>
  </c:if>
  
</body>
</html>
