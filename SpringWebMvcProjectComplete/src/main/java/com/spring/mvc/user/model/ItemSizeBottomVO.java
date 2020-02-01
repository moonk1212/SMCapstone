package com.spring.mvc.user.model;

public class ItemSizeBottomVO {
	String itm_btm_user; //CHAR(40) primary key,
	String itm_btm_detail;
	String itm_btm_size; //CHAR(40) not null ,
	String itm_btm_outseam ;//CHAR(40) not null,
	String itm_btm_waist;// CHAR(40) null,
	String itm_btm_bottom; //CHAR(40) null,
	String itm_btm_rise; //CHAR(40) null,
	String itm_btm_thigh; //CHAR(40) null
	String itm_btm_hem;
	public String getItm_btm_user() {
		return itm_btm_user;
	}
	public void setItm_btm_user(String itm_btm_user) {
		this.itm_btm_user = itm_btm_user;
	}
	public String getItm_btm_detail() {
		return itm_btm_detail;
	}
	public void setItm_btm_detail(String itm_btm_detail) {
		this.itm_btm_detail = itm_btm_detail;
	}
	public String getItm_btm_size() {
		return itm_btm_size;
	}
	public void setItm_btm_size(String itm_btm_size) {
		this.itm_btm_size = itm_btm_size;
	}
	public String getItm_btm_outseam() {
		return itm_btm_outseam;
	}
	public void setItm_btm_outseam(String itm_btm_outseam) {
		this.itm_btm_outseam = itm_btm_outseam;
	}
	public String getItm_btm_waist() {
		return itm_btm_waist;
	}
	public void setItm_btm_waist(String itm_btm_waist) {
		this.itm_btm_waist = itm_btm_waist;
	}
	public String getItm_btm_bottom() {
		return itm_btm_bottom;
	}
	public void setItm_btm_bottom(String itm_btm_bottom) {
		this.itm_btm_bottom = itm_btm_bottom;
	}
	public String getItm_btm_rise() {
		return itm_btm_rise;
	}
	public void setItm_btm_rise(String itm_btm_rise) {
		this.itm_btm_rise = itm_btm_rise;
	}
	public String getItm_btm_thigh() {
		return itm_btm_thigh;
	}
	public void setItm_btm_thigh(String itm_btm_thigh) {
		this.itm_btm_thigh = itm_btm_thigh;
	}
	public String getItm_btm_hem() {
		return itm_btm_hem;
	}
	public void setItm_btm_hem(String itm_btm_hem) {
		this.itm_btm_hem = itm_btm_hem;
	}
	@Override
	public String toString() {
		return "ItemSizeBottomVO [itm_btm_user=" + itm_btm_user + ", itm_btm_detail=" + itm_btm_detail
				+ ", itm_btm_size=" + itm_btm_size + ", itm_btm_outseam=" + itm_btm_outseam + ", itm_btm_waist="
				+ itm_btm_waist + ", itm_btm_bottom=" + itm_btm_bottom + ", itm_btm_rise=" + itm_btm_rise
				+ ", itm_btm_thigh=" + itm_btm_thigh + ", itm_btm_hem=" + itm_btm_hem + ", getItm_btm_user()="
				+ getItm_btm_user() + ", getItm_btm_detail()=" + getItm_btm_detail() + ", getItm_btm_size()="
				+ getItm_btm_size() + ", getItm_btm_outseam()=" + getItm_btm_outseam() + ", getItm_btm_waist()="
				+ getItm_btm_waist() + ", getItm_btm_bottom()=" + getItm_btm_bottom() + ", getItm_btm_rise()="
				+ getItm_btm_rise() + ", getItm_btm_thigh()=" + getItm_btm_thigh() + ", getItm_btm_hem()="
				+ getItm_btm_hem() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()="
				+ super.toString() + "]";
	}
	
}
