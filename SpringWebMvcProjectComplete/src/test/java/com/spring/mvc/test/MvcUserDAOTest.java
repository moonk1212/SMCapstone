package com.spring.mvc.test;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.event.TransactionalEventListener;

import com.spring.mvc.user.model.MySizeBottomVO;
import com.spring.mvc.user.model.UserVO;
import com.spring.mvc.user.repository.IMySizeBottomDAO;
import com.spring.mvc.user.repository.IUserDAO;
import com.spring.mvc.user.service.IUserService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"file:src/main/webapp/WEB-INF/spring/root-context.xml"})
public class MvcUserDAOTest {
	
	@Autowired
	private IUserService dao;
	
	@Autowired
	private IMySizeBottomDAO d;
	//내바지 단일 조회 테스트
	@Test
	public void selectOneTest() throws Exception {
		MySizeBottomVO my= d.contentmsb("cncn","1");
		my.setMy_btm_detail("1");
		my.setMy_btm_user("cncn");
		System.out.println(my);
	}
	//내바지 인서트 테스트
	/*@Test
	public void insertTest() throws Exception{
		MySizeBottomVO my = new MySizeBottomVO();
		
		my.setMy_btm_detail("vnvn");
		my.setMy_btm_user("sdsd");
		my.setMy_btm_outseam("ss");
		my.setMy_btm_waist("33");
		my.setMy_btm_thigh("22");
		my.setMy_btm_hem("55");
		my.setMy_btm_bottom("33443");
		my.setMy_btm_rise("54");
		d.insertmsb(my);
	System.out.println("삽입 성공");
	}*/
	/*@Test
	//내 바지 업데이트 테스트
	public void updateTest() throws Exception{
		MySizeBottomVO my = new MySizeBottomVO();
		
		my.setMy_btm_detail("dkdk");
		my.setMy_btm_user("fkfk");
		my.setMy_btm_outseam("44");
		my.setMy_btm_waist("33");
		my.setMy_btm_thigh("22");
		my.setMy_btm_hem("55");
		my.setMy_btm_bottom("333");
		my.setMy_btm_rise("54");
		d.updatemsb(my);
	System.out.println("업데이트 성공");
	}*/
	//키,몸무게 수정 완료 
/*	@Test
	public void updateTest() throws Exception{
		UserVO user = new UserVO();
		user.setUserId("cncn");
		user.setUserHeight("865");
		user.setUserWeight("746");
		dao.update(user);
	System.out.println(user);
	}
	*/
	
	// 키 몸무게 조회 테스트문
	/*@Test
	public void selectOneTest() throws Exception{
		UserVO user = dao.read("dbdb");
		System.out.println(user);
		
	}*/
/*	
	
@Test
	public void insertTest() throws Exception {
		
		UserVO user = new UserVO();
		user.setUserId("abcs12d4");
		user.setUserPw("aaa1111!");
		user.setUserName("홍길동");
		user.setUserHeight("123");
		user.setUserWeight("dfsdfs");
		user.set
		dao.join(user);
		System.out.println("회원가입 성공");
	}*/
	/*
	@Test 
	public void duplicateTest() throws Exception {
		
		int result = dao.isDuplicateId("abc123");
		if(result == 1) {
			System.out.println("ID가 중복됨!");
		} else {
			System.out.println("ID 사용 가능!");
		}
		
	}*/
	
	/*//로그인 테스트
	@Test 
	public void loginTest() throws Exception {
		
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		String inputId = "melon";
		String inputPw = "mmm1234!";
		
		UserVO user = dao.login(inputId);
		
		if(user != null) {
			System.out.println("ID검증 통과!");
			String dbPw = user.getUserPw();
			
			if(encoder.matches(inputPw, dbPw)) { //비밀번호 검증
				System.out.println("로그인 성공!");
			} else {
				System.out.println("비밀번호가 틀렸습니다.");
			}
		} else {
			System.out.println("존재하지 않는 회원입니다.");
		}
		
	}
*/
}







