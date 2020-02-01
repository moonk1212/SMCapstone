package com.spring.mvc.user.service;

import org.apache.ibatis.annotations.Param;

import com.spring.mvc.user.model.MySizeBottomVO;

public interface IMySizeBottomService {
	void insertmsb(MySizeBottomVO my) throws Exception;
	void updatemsb(MySizeBottomVO my) throws Exception;
	MySizeBottomVO contentmsb(@Param("my_btm_detail") String my_btm_detail,@Param("my_btm_user")String my_btm_user)throws Exception;
}
