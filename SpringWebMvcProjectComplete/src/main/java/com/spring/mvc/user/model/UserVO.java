package com.spring.mvc.user.model;


import java.sql.Date;

import lombok.Data;


public class UserVO {
	
	private String userId;
	private String userPw;
	private String userName;
	private String userWeight;
	private String userHeight;
	private Date userRegDate;
	private String sessionId;
	private Date limitTime;

	

	
	//자동로그인 체크여부
	private boolean autoLogin;




	public String getUserId() {
		return userId;
	}




	public void setUserId(String userId) {
		this.userId = userId;
	}




	public String getUserPw() {
		return userPw;
	}




	public void setUserPw(String userPw) {
		this.userPw = userPw;
	}




	public String getUserName() {
		return userName;
	}




	public void setUserName(String userName) {
		this.userName = userName;
	}




	public String getUserWeight() {
		return userWeight;
	}




	public void setUserWeight(String userWeight) {
		this.userWeight = userWeight;
	}




	public String getUserHeight() {
		return userHeight;
	}




	public void setUserHeight(String userHeight) {
		this.userHeight = userHeight;
	}




	public Date getUserRegDate() {
		return userRegDate;
	}




	public void setUserRegDate(Date userRegDate) {
		this.userRegDate = userRegDate;
	}




	public String getSessionId() {
		return sessionId;
	}




	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}




	public Date getLimitTime() {
		return limitTime;
	}




	public void setLimitTime(Date limitTime) {
		this.limitTime = limitTime;
	}




	public boolean isAutoLogin() {
		return autoLogin;
	}




	public void setAutoLogin(boolean autoLogin) {
		this.autoLogin = autoLogin;
	}




	@Override
	public String toString() {
		return "UserVO [userId=" + userId + ", userPw=" + userPw + ", userName=" + userName + ", userWeight="
				+ userWeight + ", userHeight=" + userHeight + ", userRegDate=" + userRegDate + ", sessionId="
				+ sessionId + ", limitTime=" + limitTime + ", autoLogin=" + autoLogin + ", getUserId()=" + getUserId()
				+ ", getUserPw()=" + getUserPw() + ", getUserName()=" + getUserName() + ", getUserWeight()="
				+ getUserWeight() + ", getUserHeight()=" + getUserHeight() + ", getUserRegDate()=" + getUserRegDate()
				+ ", getSessionId()=" + getSessionId() + ", getLimitTime()=" + getLimitTime() + ", isAutoLogin()="
				+ isAutoLogin() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()="
				+ super.toString() + "]";
	}




	
	
}






