package com.spring.mvc.user.model;

public class MySizeBottomVO {
	String my_btm_detail; //CHAR(40) primary key,
	String my_btm_user;
	String my_btm_outseam; //CHAR(40) not null ,
	String my_btm_waist ;//CHAR(40) not null,
	String my_btm_thigh;// CHAR(40) null,
	String my_btm_hem; //CHAR(40) null,
	String my_btm_bottom; //CHAR(40) null,
	String my_btm_rise; //CHAR(40) null
	public String getMy_btm_user() {
		return my_btm_user;
	}
	public void setMy_btm_user(String my_btm_user) {
		this.my_btm_user = my_btm_user;
	}
	public String getMy_btm_detail() {
		return my_btm_detail;
	}
	public void setMy_btm_detail(String my_btm_detail) {
		this.my_btm_detail = my_btm_detail;
	}
	public String getMy_btm_outseam() {
		return my_btm_outseam;
	}
	public void setMy_btm_outseam(String my_btm_outseam) {
		this.my_btm_outseam = my_btm_outseam;
	}
	public String getMy_btm_waist() {
		return my_btm_waist;
	}
	public void setMy_btm_waist(String my_btm_waist) {
		this.my_btm_waist = my_btm_waist;
	}
	public String getMy_btm_thigh() {
		return my_btm_thigh;
	}
	public void setMy_btm_thigh(String my_btm_thigh) {
		this.my_btm_thigh = my_btm_thigh;
	}
	public String getMy_btm_hem() {
		return my_btm_hem;
	}
	public void setMy_btm_hem(String my_btm_hem) {
		this.my_btm_hem = my_btm_hem;
	}
	public String getMy_btm_bottom() {
		return my_btm_bottom;
	}
	public void setMy_btm_bottom(String my_btm_bottom) {
		this.my_btm_bottom = my_btm_bottom;
	}
	public String getMy_btm_rise() {
		return my_btm_rise;
	}
	public void setMy_btm_rise(String my_btm_rise) {
		this.my_btm_rise = my_btm_rise;
	}
	@Override
	public String toString() {
		return "MySizeBottomVO [my_btm_user=" + my_btm_user + ", my_btm_detail=" + my_btm_detail + ", my_btm_outseam="
				+ my_btm_outseam + ", my_btm_waist=" + my_btm_waist + ", my_btm_thigh=" + my_btm_thigh + ", my_btm_hem="
				+ my_btm_hem + ", my_btm_bottom=" + my_btm_bottom + ", my_btm_rise=" + my_btm_rise
				+ ", getMy_btm_user()=" + getMy_btm_user() + ", getMy_btm_detail()=" + getMy_btm_detail()
				+ ", getMy_btm_outseam()=" + getMy_btm_outseam() + ", getMy_btm_waist()=" + getMy_btm_waist()
				+ ", getMy_btm_thigh()=" + getMy_btm_thigh() + ", getMy_btm_hem()=" + getMy_btm_hem()
				+ ", getMy_btm_bottom()=" + getMy_btm_bottom() + ", getMy_btm_rise()=" + getMy_btm_rise()
				+ ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString()
				+ "]";
	}
	
}
