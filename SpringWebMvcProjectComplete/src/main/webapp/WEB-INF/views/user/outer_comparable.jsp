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
    <title>BottomPage Comparable</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="${ctx }/resources/css/bottom.css?ver=4">
   
</head>
<body>
<c:if test="${not empty login}">
	
  <div class="container">
    <!-- 뒤로가기 버튼 -->
    <div style="float:left">
    <a href="<c:url value='/user/mypage'/>">
     <button class="btn">
    <image src="${ctx }/resources/ic/btn_back.png" alt="back" />
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
      <button class="btn"><img src="${ctx }/resources/ic/outer/jacket.png" alt="oneline"></button>

    </div>
       <!-- 세부사항 카테고리 -->
    <div class="box">
      <a href="<c:url value='/user/bottom_comparable'/>"><button class="btn2"><img src="${ctx}/resources/ic/bottom/btn_compare_s.png" alt="sizecompare" ></button></a>
      <a href="<c:url value='/user/bottom_insert'/>"><button class="btn2"> <img src="${ctx}/resources/ic/bottom/btn_insert_us.png" alt="sizeinsert" ></button></a>
      <a href="<c:url value='/user/bottom_modify'/>"><button class="btn2"> <img src="${ctx}/resources/ic/bottom/btn_modify_us.png" alt="sizemodify" ></button></a>
      <a href="<c:url value='/user/bottom_save'/>"><button class="btn2"> <img src="${ctx}/resources/ic/bottom/btn_savelist_us.png" alt="savelist" ></button></a>
    </div>
    <!-- 카테고리 내용 표시 프레임 -->
    <div class="box">
      <!-- 수정 완료 시 div-modify, div-savelist 스타일값 display=none -->
      <!-- 사이즈비교 프레임 -->
      <div id="div-compare">
        <!-- 이미지 영역 -->
        <div style="text-align:center;">
          <img class="sizeimg" src="${ctx }/resources/ic/outer/btn_outer.png" alt="sizeimg">
        </div>
    </div>
        
      </div>
<div class="box">
      <!-- 사이즈수정 프레임 -->
      <div id="div-modify" >
        <!-- 테이블 영역 -->
        <!-- 사이즈 데이터가 있는 경우 -->
        <div id="div-modify-sizenone" class="div-table1">
          <div id="size">
            <div id="my-size" style="float:left;">MY<br>SIZE</div>
            <div style="float:right">
              <table id="tb">
              <tr>
                <th>총장</th>
                <th>가슴단면</th>
                <th>소매길이</th>
                <th>어깨너비</th>
              </tr>
              <tr>
             	<tr>
              	<td><input type="text" name="my_btm_outseam" id="my_btm_outseam" class="form-control tooltipstered" maxlength="4"
								required="required" aria-required="true" size="1" value="${mybottom.my_btm_outseam}" readonly></td>
                <td><input type="text" name="my_btm_waist" id="my_btm_waist" class="form-control tooltipstered" maxlength="4"
								required="required" aria-required="true" size="1" value="${mybottom.my_btm_waist}" readonly></td>
                <td><input type="text" name="my_btm_bottom" id="my_btm_bottom" class="form-control tooltipstered" maxlength="4"
								required="required" aria-required="true" size="1" value="${mybottom.my_btm_bottom}" readonly></td>
                <td><input type="text" name="my_btm_rise" id="my_btm_rise"class="form-control tooltipstered" maxlength="4"
								required="required" aria-required="true" size="1" value="${mybottom.my_btm_rise}" readonly></td>
              </tr>		
              
              </table>
            </div>
          </div>
          
        </div>
        <div class="box-footer">
        <form id="form-obj" role="form" method="post">
        	<input type="hidden" name="my_btm_user" id="my_btm_user" value="${login.userId }">
            <input type="hidden" name="my_btm_detail"  id="my_btm_detail" value="1" >
        </form>
      
      </div>
      <br><br>
      <div class="box">
        <div id="div-compare-clothsize">
          <div id="size2">
            <div id="cm" style="float:right">(CM)</div>
            <div id="cloth-size" style="float:left;">CLOTH<br>SIZE</div>
            <div style="float:right">
              <table id="tb2">
              <tr>
                <th>사이즈</th>
                <th>총장</th>
                <th>가슴단면</th>
                <th>소매길이</th>
                <th>어깨너비</th>
              </tr>
              <tr>
                <td>S</td>
                <td><input type="text" name="outseam1" id="outseam1" size="1" class="form-control tooltipstered" maxlength="4"></td>
                <td><input type="text" name="waist1" id="waist1" size="1" class="form-control tooltipstered" maxlength="4"></td>
                <td><input type="text" name="bottom1" id="bottom1"  size="1" class="form-control tooltipstered" maxlength="4"></td>
                <td><input type="text" name="rise1" id="rise1" size="1" class="form-control tooltipstered" maxlength="4"></td>
              </tr>
              <tr>
                <td>M</td>
                <td><input type="text" name="outseam2" id="outseam2" size="1" class="form-control tooltipstered" maxlength="4"></td>
                <td><input type="text" name="waist2" id="waist2" size="1" class="form-control tooltipstered" maxlength="4"></td>
                <td><input type="text" name="bottom2" id="bottom2" size="1" class="form-control tooltipstered" maxlength="4"></td>
                <td><input type="text" name="rise2" id="rise2" size="1" class="form-control tooltipstered" maxlength="4"></td>
              </tr>

              </table>
            </div>
          </div>
          <!-- 사이즈 추천받기 버튼 -->
          <div align="center" style="padding-top:135px;" onclick="submit()">
            <button class="btn" id="compare-btn"><img src="${ctx }/resources/ic/bottom/btn_recommend.png" alt="oneline"></button>
          </div>
          
          <div class="div-compare-recommend" id="demo"></div>
         
        </div>
		</div>
		
    </div>
     
    </div>
   
  </div>
   
</c:if>
 <script src="<c:url value='/dist/js/var.js?ver=6'/>"></script>

</body>


</html>
