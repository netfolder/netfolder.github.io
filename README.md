
# Table of Contents

* css[【↓】](#css)
	- sass문법[(보기)](https://github.com/netfolder/netfolder.github.io/tree/master/sass) ing..
	- 일부 글꼴 크기가 Safari (iPhone)에서 더 크게 렌더링 이슈 해결법[【→】](https://demun.tistory.com/2402)
* px to vw calc[【→】](https://pxtovw.dev-calc.space/)
* comment[【↓】](#comment)
* rollingPlugin[【↓】](#sample)
* fixedNavigation(반응형 대응)[【↓】](#fixedNavigation)
* image 사용법[【↓】](#image)


-----



<a name='css'></a>
## CSS
- reset.css[(보기)](https://github.com/netfolder/study/blob/master/menu_content/submenu/css/default.css)
- Airbnb CSS / Sass Styleguide 방법론[(보기)](https://github.com/airbnb/css#oocss-and-bem)
- [IR기법(Image Replacement)](https://nuli.navercorp.com/sharing/blog/post/1132804) : 대체 텍스트 제공
```csharp
/* 의미있는 이미지의 대체 텍스트를 제공하는 경우(Phark Method) */
.ir_pm {display:block; overflow:hidden; font-size:0; line-height:0; text-indent:-9999px;}
/* 의미있는 이미지의 대체 텍스트로 이미지가 없어도 대체 텍스트를 보여주고자 할 때(WA IR) */
.ir_wa {display:block; overflow:hidden; position:relative; z-index:-1; width:100%; height: 100%;}
/* 대체 텍스트가 아닌 접근성을 위한 숨김 텍스트를 제공할 때 */
.ir_su {overflow: hidden; position:absolute; width:0; height:0; line-height:0; text-indent:-9999px;}
```

-----

<div style="text-align: right"> <a href="#top">⬆ back to top</a> </div>

<a name='image'></a>
## Image

| 종류 | PC web | Mobile Web |
| :-------- | :-------- | :-------- |
| GIF | 기본 | 사용 가능 |
| JPG | 컬러수 많거나 운영성 이미지일 때 | 운영성 이미지일 때 |
| PNG-8 | x | 기본 |
| PNG-24 | 반투명효과가 있을 때에만 사용 | 컬러 수 많거나 반투명효과가 있을 때 |
| 이미지 스프라이트 | 	O | 	O |

* PC Web
	* 기본 포맷은 GIF를 사용한다.
	* JPG는 인물이나 실사 이미지와 같이, 색 변화 및 그라데이션이 풍부한 경우 및 운영성 이미지에 주로 사용한다.
	* JPG로 저장 시 압축률 관리
		* Save for web 기준 : Original 혹은 JPG Quality 90 이상
	* 구형브라우저에서의 PNG 이미지 지원</br>
* Mobile Web
	* 3G망을 이용하는 유저를 고려하여 용량 축소가 중요하다.
	* PNG-8 포맷을 기본으로 저장하며, 색상 수가 많거나 반투명 효과가 있으면 PNG-24를 사용한다.
	* 용량 대비 이미지 품질을 고려하여 포맷을 변경할 수도 있다.

-----

<div style="text-align: right"> <a href="#top">⬆ back to top</a> </div>

<a name='comment'></a>
## Comment
```
/*common*/ (x)
/* common */ (o)  CSS 주석 기호( /*, */ )와 내용 사이에는 반드시 공백 한 칸이 있어야 한다.

/* 2019.04.01 GNB 수정 시작 */
.gnb_comm {overflow:hidden;width:978px;clear:both}
.gnb_comm li {float:left;height:38px}
.gnb_comm .menu {display:block;overflow:hidden;height:38px}
.gnb_comm .home {width:79px}
.gnb_comm .roadmap {width:98px}
.gnb_comm .on .menu {margin:0 -1px}
/* 2019.04.01 GNB 수정 끝 */


/* 개발자에게 전달할 메세지가 있는경우 */
<!-- 2019.04.01 수정 시작-->
	<a href="#" class="link_multi">
		<!-- D: New일 때만 link_multimedia_new.gif 로 교체 -->
		<img src="link_multimedia.gif" alt="멀티미디어 센터" />
	</a>
	<!--// 2019.04.01 수정 끝-->
</div>

```

-----
<div style="text-align: right"> <a href="#top">⬆ back to top</a> </div>

<a name='sample'></a>
## rollingPlugin

- bxSlider[(소스보기)](https://netfolder.github.io/bxSlider/)
	+ [(공식 git 방문)](https://github.com/stevenwanderski/bxslider-4)

- slick[(소스보기)](https://netfolder.github.io/slick)
	+ [(공식 git 방문)](https://github.com/kenwheeler/slick)

- swiper 3.x[(소스보기)](https://netfolder.github.io/swiper)
	+ [(공식 git 방문)](https://github.com/nolimits4web/swiper)

-----

<div style="text-align: right"> <a href="#top">⬆ back to top</a> </div>


<a name='fixedNavigation'></a>
## 스크롤 텝메뉴 샘플 ( 반응형 대응 )

- fixedNavigation[(소스보기)](https://netfolder.github.io/samplePage/)

-----

<div style="text-align: right"> <a href="#top">⬆ back to top</a> </div>
