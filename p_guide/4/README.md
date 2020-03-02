
[ < 뒤로](https://github.com/netfolder/netfolder.github.io/tree/master/p_guide)
## HTML 가이드



#### DOCTYPE
- 문서타입에 (X)HTML의 버전과 문서형을 지정하는데, 다양한 플랫폼 지원을 위해 XHTML 1.0 , 하위 브라우져 호환성을 위해 Transitional 모드를 권장한다.
- 문서타입은 반드시 문서의 최상단에 적는 것을 원칙으로 한다.

``` html
XHTML (권장)
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```
``` html
HTML (일반)
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

### 네임스페이스와 언어코드
- XHTML문서에서 네임스페이스는 xmlns속성으로 지정한다. XHTML에서는 'http://www.w3.org/1999/xhtml' 의 값을 부여한다.
- 언어코드는 xml:lang 속성으로 지정한다. 한국어는 'ko'이다. XHTML1.0 에서는 하위호환성으로 고려하여 lang 속성에 xml:lang 과 같은 값을 지정해 준다.
- HTML문서의 경우, 네임스페이스는 지정하지 않아도 되고, lang 속성만 지정해준다.

``` html
XHTML1.0
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ko" lang="ko">
```
``` html
HTML
<html lang="ko">
```

#### 마임타입과 문자코드세트
- 마임타입은 하위호환성을 고려해 'text/html'로 적는다.
- 문자코드세트는 기본적으로 'utf-8'을 이용한다. 단, 경우에 따라 협의하여 'euc-kr' 등 다른 문자코드세트를 이용할 수도 있다. 문서의 인코딩과 맞추어 적어준다.

``` html
<meta http-equiv="Content-Type" content="Text/html; charset=utf-8" />
```


#### 문서제목
- title은 일반적으로 '현재 페이지 제목 | 사이트명'으로 한다. 구분기호 '|'는 키보드 '￦' 키에 있다.
- title에 특수문자의 사용은 자제한다.
- 메인페이지나 기타 협의에 의해 title은 변경이 가능하다.

``` html
일반
<title>CEO 인사말 | (주)천재교육</title>
```
``` html
메인 및 기타협의 사항
<title>(주)천재교육은 참교육을 실천합니다.</title>
```

#### 레이아웃 구성
- 전체 wrap 방식을 사용한다.
- 다만 디자인에 따라 전체 wrap을 사용하지 않아도 된다.
- 기본 레이아웃 템플릿은 다음의 코드를 참조할 것.
- 디자인에 따라 기본 템플릿을 수정하여 사용.

``` html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ko" lang="ko">
<head>
<meta http-equiv="Content-Type" content="Text/html; charset=utf-8" />
<title>기본 레이아웃 템플릿 | web publishing guide (주)천재교육</title>
<meta name="ROBOTS" content="ALL" />
<meta name="Description" content="(주)천재교육의 웹퍼블리싱을 위한 가이드" />
<meta name="Keywords" content="web, publishing, guide, convention, markup, html, css" />
<meta name="Author" content="Lee sin young" />
<meta name="Copyright" content="(주)천재교육 : publishing team" />
<meta name="reply-to" content="chunjae@chunjae.co.kr" />
</head>
<body>
<div id="wrap">#wrap : 감싸기
	<!-- header -->
	<div id="header">#header : 머릿글
		<div class="topmenu">
			.topmenu : 탑메뉴
		</div>
		<ul class="gnb">
			<li>.gnb : Global Navigation Bar</li>
		</ul>
	</div>
	<!--// header -->
	<hr />
	<!-- container -->
	<div id="container">#container : 컨테이너
		<!-- snb -->
		<div class="snb">.snb : Side Navigation Bar
			<ul class="nav">
				<li>.nav : Navigation</li>
			</ul>
		</div>
		<!--// snb -->
		<!-- content -->
		<div id="content">#content
			<!-- path -->
			<div class="path">
				.path : 문서 경로 표시
			</div>
			<!--// path -->
			<!-- section -->
			<div class="section">
				.section : 그루핑
			</div>
			<!--// section -->
			<!-- section -->
			<div class="section">
				.section : 그루핑
			</div>
			<!--// section -->
		</div>
		<!--// content -->
		<!-- aside -->
		<div class="aside">.aside : 곁가지
		</div>
		<!--// aside -->
	</div>
	<!--// container -->
	<hr />
	<!-- footer -->
	<div id="footer">
		#footer : 바닥글
	</div>
	<!-- footer -->
</div>
</body>
</html>
```


#### 주석표기
- HTML 주석은 콘텐츠 그룹화 하는 코드의 시작과 끝에 삽입한다.
- 코드 시작 주석은 <!-- -->로 끝은 <!--// -->로 한다

##### 그룹화 주석의 예
``` html
<!-- 2020.03.02 -->
<div class="dm_contents"> ... </div>
<!--// 2020.03.02 -->
```
##### 기능 설명 및 주의사항 주석의 예
``` html
<!-- 2020.03.02 -->
<!--  D:// 마우스 오버시 , move 클래스 추가 -->
<img src="aa.gif" class="stop" />
<!--// 2020.03.02 -->
```

#### 들여쓰기
- 기본적으로 마크업의 중첩이 깊어질 때마다 한단계 들여쓰기 한다.
- 한단계는 1탭으로 하고, 1탭은 공백 4칸으로 설정한다.

#### 네이밍
- id/class의 네이밍은 영문 소문자, 숫자, 언더스코어(_)로 작성한다. (특수문자 사용금지)
- id/class의 네이밍은 영문 대문자, 숫자로 시작하지 않는다.
- id/class 네이밍은 camel방식을 따르지 않고, 언더스코어로 조합한다.
- id/class 네이밍은 디자인 표현방식이 아닌 의미에 맞는 네이밍을 한다.
- 레이아웃을 제외하고는 되도록 id의 지정을 최소화 한다. (개발 및 스크립트와 호환성 이슈가 있을 수 있다)

##### 네이밍의 잘못된 예와 잘된 예

``` html
.tc {text-align:center;}  (X)
.d_01_232 {padding:10px; margin:10px;}  (X)
.fl {float:left;}  (X)
.notice_list {text-align:center;}  (O)
.snb {padding:10px; margin:10px;}  (O)
.more {float:left;}  (O)
```
