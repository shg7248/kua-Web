function idcheck() {
	var saved_id = "shg7248";
	var id = myform.id.value;
	if(saved_id === id) {
		alert('중복된 아이디');
	}
	else {
		alert('사용 가능한 아이디');
	}
}

function check() {
	
	var str = "작성한 내용은 \n";
	
	var id = window.document.myform.id;
	if(id.value.length == 0) {
		alert("아이디가 누락됐습니다.");
		return false;
	}
	str += id.value + "\n";
	
	var password = window.document.myform.password;
	if(password.value.length == 0) {
		alert("비번 필수입니다.");
		password.focus();
		return false;
	}
	str += password.value + "\n";
	
	var repassword = window.document.myform.repassword;
	if(repassword.value.length == 0) {
		alert("비번확인 필수입니다.");
		repassword.focus();
		return false;
	}
	if(!(repassword.value == password.value)) {
		alert("비밀번호 재확인하세요.");
		repassword.focus();
		return false;
	}
	
	var name = window.document.myform.name;
	if(name.value.length == 0){
		alert("이름이 누락됐습니다.");
		name.focus();
		return false;
	}
	str += name.value + "\n";
	
	var areacode = myform.areacode;
	if(areacode.value == '') {
		alert("지역번호를 선택하세요.");
		return false;
	}
	str += areacode.value + "-";
	
	var phone1 = myform.phone1;
	var phone2 = myform.phone2;
	if(isNaN(phone1.value) || isNaN(phone2.value)) {
		alert("번호는 숫자를 입력하셔야 합니다.");
		return false;
	}
	str += phone1.value + "-";
	str += phone2.value + "\n";
		
	var email = myform.email;
	if(email.value.length == 0) {
		alert("이메일이 누락됬습니다.");
		return false;
	}
	if(email.value.indexOf('@') == -1) {
		alert("@가 포함되야 합니다.");
		return false;
	}
	str += email.value + "\n";
	
	var s_flag = false;
	var singer = myform.singer;
	for(var s in singer) {
		if(singer[s].checked) {
			s_flag = true;
			str += singer[s].value + " "
		}
	}
	if(!s_flag) {
		alert("좋아하는 가수를 하나라도 선택해야 합니다.");
		return false;
	}
	str += "\n";
	
	var g_flag = false;
	var gender = window.document.myform.gender;
	for(var g in gender) {
		if(gender[g].checked) {
			g_flag = true;
			str += gender.value + "\n";
			break;
		}
	}
	if(!g_flag) {
		alert("성별을 선택하세요");
		return false;
	}
	
	if(myform.ta.value == "") {
		alert("글쓰기가 누락됐습니다.");
		return false;
	}
	
	str += myform.ta.value;
	
	alert(str);
}