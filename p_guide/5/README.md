
[ < 뒤로](https://github.com/netfolder/netfolder.github.io/tree/master/p_guide)
## CSS 가이드


### 기본 규칙
- 멀티/크로스 브라우징의 구현을 위해 불가피한 핵의 사용을 허용하며, W3C Validation을 통과할 의무는 없다.
- 모든 속성(attribute)은 영문 소문자로 작성한다.
- external type으로 선언한 css파일들은 charset을 최상단에 표기한다.
- 속성 한줄 표기 방식으로 사용한다. 선택자, 속성, 속성값 사이 줄바꿈은 허용하지 않는다.
- css 파일은 reset.css(기본 리셋), layout.css(레이아웃), common.css(공통속성과 그외 속성들), popup.css(팝업창) 등 총 4개의 파일을 기본으로 한다. 그 외 필요시 파일을 추가할 수 있다.
- 공통선택자 '*'는 사용하지 않는다.
- background와 border는 약식 속성을 우선적으로 사용하며, font 약식 속성은 사용하지 않는다.
- 주석은 의미있는 객체를 구분할 때에는 반드시 넣어주고, 그 외의 주석 표기는 선택사항이다.


### reset(리셋)

``` css
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video, button, input {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q { 
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	/* border-collapse: collapse; */
	border-spacing: 0;
}

a {text-decoration:none;}

a:link {color:inherit;}
a:hover {color:inherit;}
a:active {color:inherit;}
a:visited {color:inherit;}


* html input {margin:-1px 0;} /* ie6과 ie7에서 input의 1px 마진 리셋 */
*:first-child+html input {margin:-1px 0;} /* ie6과 ie7에서 input의 1px 마진 리셋 */
input.radio, input.checkbox, input[type="radio"], input[type="checkbox"] {width:13px; height:13px; vertical-align:-2px;} /* 체크박스/라디오버튼 위치 최적화 (IE6을 위해 클래스명을 지정해줘서 제어할 것) */
header, hgroup, nav, section, article, figure, figcaption, aside, footer, /* 블록레벨요소 - 시멘틱 의미 부여를 위한 신규 요소(섹션, 구조, 영역, 그룹화) */
audio, video, canvas, /* 블록레벨요소 - 멀티미디어, 그래픽도구 */
details, summary, menu, ruby, /* 블록레벨요소 - 그 외의 요소 : 디스클로저 위젯, 위젯 요약, 메뉴, 루비주석(일본어에서 한문에 주석을 다는 것)  */
mark, time, output /* 인라인요소 - 하이라이터, 시간, 결과출력 */
{margin:0; padding:0; font-size:100%; font:inherit;}
input:focus {outline:0;}

```

### CSS 구조
- charset 표기, import, contents.. 순으로 나열한다.
- 순서의 변동이 필요할 경우 협의하에 진행한다.


##### common.css 구조 예시
``` css
@charset "utf-8";
@import url("reset.css");

/* 대체 텍스트가 아닌 접근성을 위한 숨김 텍스트를 제공할 때 */
.ir_su {overflow: hidden; position:absolute; width:0; height:0; line-height:0; text-indent:-9999px;}
/* clearfix */
.clearfix{*zoom:1;}
.clearfix:before, .clearfix:after {display:block;content:'';line-height:0;}
.clearfix:after {clear:both;}

```

##### layout.css 구조 예시

``` css
@charset "utf-8";
/* wrap */
#wrap {width:100%;}
/* header */
#header {height:40px; padding:10px 0 10px 20px; margin-bottom:20px; border-bottom:2px solid #00a650;}
#header h1 {font-size:2em; font-weight:bold; color:#333;}
#header h1 img {padding-right:25px;}
/* container */
#container {width:100%; position:relative;}
/* snb */
.snb {width:180px; position:absolute; left:20px; top:0;}
/* nav */
.nav li {padding:4px 0 4px; border-bottom:1px solid #e7e7e7;}
.nav li span {position:relative; display:inline-block; width:0; height:0; font-size:0; line-height:0; vertical-align:top !important; top:4px; border:4px solid #666; border-top:solid #fff; border-bottom:solid #fff; border-right:0 none; margin-right:5px;}
.nav li a {font-weight:bold;}
.nav li.on a {color:#00a650;}
.nav li ul {padding:8px 0 0 10px;}
.nav li ul li {padding:2px 0 2px; border:0 none;}
/* content */
#content {width:700px; min-height:400px; height:auto !important; height:400px; padding:0 0 40px 240px;}
/* footer */
#footer {width:100%; padding:20px 0 20px; border-top:2px solid #00a650; text-align:center;}
```