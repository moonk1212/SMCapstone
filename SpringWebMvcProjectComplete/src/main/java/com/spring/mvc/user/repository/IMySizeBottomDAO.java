package com.spring.mvc.user.repository;

import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.spring.mvc.user.model.MySizeBottomVO;
import com.spring.mvc.user.model.UserVO;

public interface IMySizeBottomDAO {
	void insertmsb(MySizeBottomVO my) throws Exception;
	void updatemsb(MySizeBottomVO my) throws Exception;
	MySizeBottomVO contentmsb(@Param("my_btm_user")String my_btm_user,@Param("my_btm_detail") String my_btm_detail)throws Exception;
	//자동로그인 처리
	void keepLoginmsb(Map<String, Object> datas) throws Exception;
	//세션아이디로 회원정보 불러오는 기능
	MySizeBottomVO getUserWithSessionId(String sessionId) throws Exception;
		

}
