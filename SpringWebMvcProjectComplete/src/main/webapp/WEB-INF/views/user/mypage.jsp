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
    <div style="float:right">
    <a href="<c:url value='/user/logout'/>">
    <button class="btn">
    <image src="${ctx }/resources/ic/btn_logout.png" alt="logout"/>
    </button> 
    </a>
   
    </div>
      <div class="layer" style="padding-top:40px; padding-bottom:50px;">
        <image src="${ctx }/resources/ic/index/profile1.png" alt="profile image" class="profile-image">
        
            <div class="profile-info">
            <p> ${login.userName}</p>
            <!-- 키 몸무게 값 받아와야 함 -->
            <p> 신장 ::  ${login.userHeight} cm <br> 몸무게 :: ${login.userWeight} kg </p>
          </div>

        <div class="btn-modify">
          <a href ="<c:url value ='/user/mypage_modify'/>">
          <button class="btn"><image src="${ctx }/resources/ic/btn_modify.png" alt="btn_modify"></button>
          </a>
          </div>
      
      </div>

      <div class="layer">
        <h2 id="which-size"> 어떤 옷의 사이즈를<br>알고 싶으세요?
      </div>

      <div class="layer" style="padding-top:40px;">
        <table id="tb">
          <tbody>
            <tr>
              <td><a href ="<c:url value ='/user/top_comparable'/>"><img src="${ctx }/resources/ic/index/shirt.png" alt="top"></a></td>
              <td><a href ="<c:url value ='/user/bottom_insert'/>"><img src="${ctx }/resources/ic/index/pants.png" alt="bottom" ></a></td>
              <td><a href ="<c:url value ='/user/skirt_comparable'/>"><img src="${ctx }/resources/ic/index/skirt.png" alt="skirt" ></a></td>
            </tr>
            <tr>
              <td><a href ="<c:url value ='/user/notyet'/>"><img src="${ctx }/resources/ic/index/onepiece.png" alt="onepiece" ></a></td>
              <td><a href ="<c:url value ='/user/outer_comparable'/>"><img src="${ctx }/resources/ic/index/outer.png" alt="outer" ></a></td>
              <td><a href ="<c:url value ='/user/notyet'/>"><img src="${ctx }/resources/ic/index/shoes.png" alt="shoes" ></a></td>
            </tr>
          </tbody>
        </table>
      </div>

  </div>
  </c:if>
</body>
</html>
