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
    <title>BottomPage Insert</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="${ctx }/resources/css/bottom.css?ver=2">
   
</head>
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
      <a href="<c:url value='/user/bottom_insert'/>"><button class="btn2"> <img src="${ctx}/resources/ic/bottom/btn_insert_s.png" alt="sizeinsert" ></button></a>
       <a href="<c:url value='/user/bottom_modify'/>"><button class="btn2"> <img src="${ctx}/resources/ic/bottom/btn_modify_us.png" alt="sizemodify" ></button></a>
      <a href="<c:url value='/user/bottom_save'/>"><button class="btn2"> <img src="${ctx}/resources/ic/bottom/btn_savelist_us.png" alt="savelist" ></button></a>
     
    </div>
   
    <!-- 카테고리 내용 표시 프레임 -->
    <div class="box">
       	<!-- 이미지 영역 -->
		 
		<div style="text-align:center;">
		 <img class="sizeimg" src="${ctx }/resources/ic/bottom/sizeimg.png" alt="sizeimg">
		</div>
		
	<div class="box">
	    <div id="div-modify"><!-- insert 부분과 modify 페이지는 전송방식만 다를뿐 틀은 다 똑같음 -->
        <!-- 테이블 영역 -->

	     <!-- 사이즈 데이터가 없는 경우 -->
	     <form action="#" method="post">
        <div class="div-table1">
          <div id="fill-in">내 사이즈 입력</div>
          <div id="size">
            <div id="my-size" style="float:left;">MY<br>SIZE</div>
                <input type="hidden" name="my_btm_user" id="my_btm_user" value="${login.userId }">
              	<input type="hidden" name="my_btm_detail"  id="my_btm_detail" value="1" >
            <div style="float:right;">
              
              <table id="tb">
              <tr>
              	
              	
                <th>총장</th>
                <th>허리</th>
                <th>엉덩이</th>
                <th>밑위 </th>
                <th>허벅지</th>
                <th>밑단</th>
              </tr>
              <tr>
				
                <td><input type="text" name="my_btm_outseam" id="my_btm_outseam" class="form-control tooltipstered" maxlength="4"
								required="required" aria-required="true" size="1"></td>
                <td><input type="text" name="my_btm_waist" id="my_btm_waist" class="form-control tooltipstered" maxlength="4"
								required="required" aria-required="true" size="1"></td>
                <td><input type="text" name="my_btm_bottom" id="my_btm_bottom" class="form-control tooltipstered" maxlength="4"
								required="required" aria-required="true" size="1"></td>
				<td><input type="text" name="my_btm_rise" id="my_btm_rise"class="form-control tooltipstered" maxlength="4"
								required="required" aria-required="true" size="1"></td>              
               <td><input type="text" name="my_btm_thigh" id="my_btm_thigh" class="form-control tooltipstered" maxlength="4"
								required="required" aria-required="true" size="1"></td>
                <td><input type="text" name="my_btm_hem" id="my_btm_hem"class="form-control tooltipstered" maxlength="4"
								required="required" aria-required="true" size="1"></td>				
              </tr>
             
              </table>
              
            </div>
          </div>
          
          <div align="center" style="padding-top:120px;">
            <input type ="image" src="${ctx }/resources/ic/bottom/btn_sizesave.png" alt="oneline"
             class= "btn" id="insert-btn">
          </div>
        </div>
        </form>
      </div>
</div>
    

    </div>
  </div>
  <!-- /.register-box -->
<jsp:include page="../include/plugin-js.jsp" />
<script src="<c:url value='/dist/js/custom/user-bottom-insert-validation.js?ver=2'/>"></script>
</c:if>
</body>
</html>
