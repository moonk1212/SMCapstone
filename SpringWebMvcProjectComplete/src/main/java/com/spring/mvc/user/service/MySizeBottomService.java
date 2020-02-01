package com.spring.mvc.user.service;

import javax.inject.Inject;

import com.spring.mvc.user.model.MySizeBottomVO;
import com.spring.mvc.user.repository.IMySizeBottomDAO;

public class MySizeBottomService implements IMySizeBottomService {

	@Inject
	private IMySizeBottomDAO dao;
	@Override
	public void insertmsb(MySizeBottomVO my) throws Exception {
		// TODO Auto-generated method stub
		dao.insertmsb(my);

	}

	@Override
	public void updatemsb(MySizeBottomVO my) throws Exception {
		// TODO Auto-generated method stub
		dao.updatemsb(my);
	}

	@Override
	public MySizeBottomVO contentmsb( String my_btm_user,String my_btm_detail) throws Exception {
		MySizeBottomVO my= dao.contentmsb(my_btm_user,my_btm_detail);
		return my;
	}

}
