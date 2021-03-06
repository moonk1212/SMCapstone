package com.spring.mvc.user.controller;

import java.util.Date;

import javax.inject.Inject;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.util.WebUtils;

import com.spring.mvc.commons.paging.SearchCriteria;
import com.spring.mvc.user.model.MySizeBottomVO;
import com.spring.mvc.user.model.UserVO;
import com.spring.mvc.user.repository.IMySizeBottomDAO;
import com.spring.mvc.user.service.IMySizeBottomService;
import com.spring.mvc.user.service.IUserService;

@Controller
@RequestMapping("/user")
public class UserController {
	
	@Inject
	IUserService service;
	
	@Autowired
	IMySizeBottomDAO mybottomservice;
	
	//join.jsp 화면처리 요청
	@GetMapping("/join")
	public String register() throws Exception {
		
		return "user/join";
	}
	
	//회원가입 처리 요청
	@PostMapping("/join")
	@ResponseBody
	public String register(@RequestBody UserVO user) throws Exception {
		System.out.println("/user/join 요청 발생: POST");
		System.out.printf("Parameter: " + user);
		service.join(user);
		
		return "joinSuccess";
	}
	//유저아이디,몸무게, 키 리스트 보기 
	@RequestMapping(value="/mypage",method=RequestMethod.GET)
	public String readmypage( ) throws Exception{
		System.out.println("URL => /user/mypage : GET");
		
		return "user/mypage";
	}
	//bottom_insert 처리 요청
	@PostMapping("/bottom_insert")
	@ResponseBody
	public String bottom_insert(@RequestBody MySizeBottomVO inputData, HttpSession session, HttpServletResponse response) throws Exception {
		System.out.println("/user/bottom_insert 요청 발생: POST");
		System.out.printf("Parameter: " + inputData);
		mybottomservice.insertmsb(inputData);
		
		String result = null;
	
		session.setAttribute("mybottom", inputData);
		result = "MyBottomSuccess";

		
		return result;
		}
	//bottom_insert 화면 이동
	@RequestMapping(value="/bottom_insert",method=RequestMethod.GET)
	public String readbottom_insert( ) throws Exception{
		
		return "user/bottom_insert";
	}
	//bottom_modify 처리 요청
	@PostMapping("/bottom_modify")
	@ResponseBody
	public String bottom_modify(@RequestBody MySizeBottomVO inputData, HttpSession session, HttpServletResponse response) throws Exception {
		System.out.println("/user/bottom_modify 요청 발생: POST");
		System.out.printf("Parameter: " + inputData);
		mybottomservice.updatemsb(inputData);
		String result = null;
		
		session.setAttribute("mybottom", inputData);
		result = "updateMyBottomSuccess";

		
		return result;
				
	
	}
	//bottom_modify 화면 이동
	@RequestMapping(value="/bottom_modify",method=RequestMethod.GET)
	public String readbottom_modify( ) throws Exception{
		System.out.println("URL => /user/bottom_modify : GET");
		
		return "user/bottom_modify";
	}

	// 수정 페이지 이동
		@RequestMapping(value = "/mypage_modify", method = RequestMethod.GET)
		public String modifyGET() throws Exception {

		    
			System.out.println("URL => user/mypage_modify : GET");

		    return "user/mypage_modify";
		}
		//bottom_comparable 화면 이동
	@RequestMapping(value="/bottom_comparable",method=RequestMethod.GET)
	public String readbottom_comparable() throws Exception{
		System.out.println("URL => /user/bottom_comparable : GET");
		
		return "user/bottom_comparable";
	}
		

	// 수정 처리
	@PostMapping("/mypage_modify")
	@ResponseBody
	public String modifyPOST(@RequestBody UserVO userVO) throws Exception {

		System.out.println("/user/mypage_modify 요청 발생: POST");
		System.out.printf("Parameter: " + userVO);
	    service.update(userVO);
	   
	   
	    return "updateSuccess";
	}
	// notyet 페이지 이동
	@RequestMapping(value = "/bottom_save", method = RequestMethod.GET)
	public String savelistGET() throws Exception {

			    
		System.out.println("URL => user/notyet : GET");

		return "user/bottom_save";
	}

	
	//  onepiece_comparable페이지 이동
	public String onepiece_comparableGET() throws Exception {

		    
		System.out.println("URL => user/onepiece_comparable : GET");

		return "user/onepiece_comparable";
	}
	// skirt_comparable 페이지 이동
	@RequestMapping(value = "/skirt_comparable", method = RequestMethod.GET)
	public String skirt_comparableGET() throws Exception {

		    
		System.out.println("URL => user/skirt_comparable : GET");

		return "user/skirt_comparable";
	}
	// outer_comparable 페이지 이동
	@RequestMapping(value = "/outer_comparable", method = RequestMethod.GET)
	public String outer_comparableGET() throws Exception {

		    
		System.out.println("URL => user/outer_comparable : GET");

		return "user/outer_comparable";
	}
	// top_comparableGET 페이지 이동
	@RequestMapping(value = "/top_comparable", method = RequestMethod.GET)
	public String top_comparableGET() throws Exception {

		    
		System.out.println("URL => user/top_comparable : GET");

		return "user/top_comparable";
	}
	// top_comparableGET 페이지 이동
	@RequestMapping(value = "/notyet", method = RequestMethod.GET)
	public String notyetGET() throws Exception {

		    
		System.out.println("URL => user/notyet : GET");

		return "user/notyet";
	}
		

	//ID 중복확인 요청 처리
	@PostMapping("/idCheck")
	@ResponseBody
	public String confirmId(@RequestBody String userId) throws Exception {
		
		System.out.println("중복확인할 ID: " + userId);
		String result = null;
		
		int rn = service.isDuplicateId(userId);
		if(rn == 1) {
			System.out.println("아이디 중복!");
			result = "NO";
		} else {
			System.out.println("아이디 사용가능!");
			result = "OK";
		}
		
		return result;
	}
	
	//로그인 페이지 요청
	@GetMapping("/login")
	public String login() throws Exception {
		return "user/login";
	}
	
	//로그인 검증 요청
	@PostMapping("/loginCheck")
	@ResponseBody
	public String login(@RequestBody UserVO inputData
			, /*HttpServletRequest request*/
			HttpSession session, HttpServletResponse response) throws Exception {
		
		//서버에서 세션객체를 얻는 방법
		//1. HttpServletRequest객체 사용
//		HttpSession session = request.getSession();
		//2. 컨트롤러의 메서드의 매개변수로 HttpSession타입을 지정.
		
		
		/*
		 # 클라이언트가 전송한 id값과 pw값을 가지고 DB에서 회원의 정보를
		   조회해서 불러온다음 값 비교를 통해
		   1. 아이디가 없을 경우 클라이언트측으로 문자열 "idFail" 전송
		   2. 비밀번호가 틀렸을 경우 문자열 "pwFail"전송
		   3. 로그인 성공시 문자열 "loginSuccess" 전송
		 */
		
		System.out.println("/user/loginCheck 요청! : POST");
		System.out.println("Parameter: " + inputData);
		
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		UserVO dbData = service.login(inputData.getUserId());
		System.out.println("DB에서 조회된 회원 정보: " + dbData);
		
		String result = null;
		
		if(dbData != null) { //아이디 있음
			if(encoder.matches(inputData.getUserPw(), dbData.getUserPw())) { //비밀번호 일치
				
				session.setAttribute("login", dbData);
				result = "loginSuccess";
				
				//자동 로그인 쿠키 생성
				if(inputData.isAutoLogin()) {
					System.out.println("자동로그인 체크됨!");
					
					long limitTime = 60 * 60 * 24 * 90;
					
					//자동로그인 유지시간을 날짜객체로 변환
					Date limitDate = new Date(System.currentTimeMillis() + (limitTime * 1000));
					
					Cookie loginCookie = new Cookie("loginCookie", session.getId());
					loginCookie.setPath("/");
					loginCookie.setMaxAge((int)limitTime);
					response.addCookie(loginCookie);
					
					service.keepLogin(dbData.getUserId(),
							session.getId(), limitDate);
				}
				
			} else {//비밀번호 불일치
				result = "pwFail";
			}
		} else { //아이디 없음
			result = "idFail";
		}
		
		return result;
	}
	
	
	//로그아웃 요청
	@GetMapping("/logout")
	public String logout(HttpSession session
			, HttpServletRequest request
			, HttpServletResponse response) throws Exception {
		
		UserVO user = (UserVO)session.getAttribute("login");
		
		if(user != null) {
			session.removeAttribute("login");
			session.invalidate();
			
			//로그아웃시 자동로그인 쿠키 삭제
			Cookie loginCookie = WebUtils.getCookie(request, "loginCookie");
			if(loginCookie != null) {
				loginCookie.setPath("/");
				loginCookie.setMaxAge(0);
				response.addCookie(loginCookie);
				service.keepLogin(user.getUserId(), 
						"none", new Date());
			}
		}
		
		return "redirect:/";
	}
	
}













