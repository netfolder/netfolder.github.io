### [ < 홈으로](https://github.com/netfolder/public_chunjae)

## bxSlider
	
```javascript
//기본설정
var slider1=$('.slider1');
slider1.bxSlider({            
	maxSliders:1,    //슬라이드개수
	auto:true,          //자동실행
	mveSliders:1,    //슬라이드 이동 개수       
	slideWidth:650,  //슬라이드 가로폭
	pager:false,       //하단 도트버튼숨기기
	controls:true     //좌우버튼보이기
});	
```
##### [옵션더보기 ↓](#option)
	
 - type1[ (소스보기) ](https://github.com/netfolder/public_chunjae/blob/master/bxSlider/html/bxslider_type1.html)
 
 	![Alt text](images/type1.jpg)
	
	
 - type2[ (소스보기) ](https://github.com/netfolder/public_chunjae/blob/master/bxSlider/html/bxslider_type2.html) : 4개가 1판
 
 	![Alt text](images/type2.jpg)
 







## <a name='option'>option</a>
```javascript

/* 슬라이드의버튼 클래스 정의 : controls:false 설정 */
prevClass: ".btn_next",
nextClass: ".btn_pre",	

/* 슬라이드 되고 난 후 제어시 */
onSlideAfter:function(){
	
}

/* 슬라이드 타입 설정 */
mode: 'horizontal',
// option : 'horizontal', 'vertical', 'fade'
 
/* 슬라이드 타입 설정 */
speed: 500,
// option : 정수
 
/* 슬라이드가 자동으로 전환됩니다. */
auto: false,
// option : true / false
 
/* 로드시 자동 표시가 시작됩니다. false이면 "시작"컨트롤을 클릭하면 슬라이드 쇼가 시작됩니다. */
autoStart: true,
// option : true / false
 
/* 마우스가 슬라이더 위로 움직이면 자동쇼가 멈춥니다. */
autoHover: false,
// option : true / false
 
/* 슬라이드가 전환 시간 */
pause: 4000,
// option : 정수
 
/* true이면 "다음"/ "이전"컨트롤이 추가됩니다. */
controls: true,
// option : true / false
 
/* true 이면 하단 pager 버튼이 추가 됩니다. */
pager: true,
// option : true / false
 
/* true 인 경우 마지막 슬라이에서 "다음"을 클릭하면 첫 번째 슬라이드로 전환 */
infiniteLoop: true,
// option : true / false
 
/* true이면 마지막 슬라이드에서 다음버튼을 숨긴다. 첫번째 슬라이드 일 경우 동일 */
hideControlOnEnd: false,
// option : true / false
 
/* 슬라이더 위로 마우스를 가져가면 슬러이더 일시 중지(css 전환을 사용하는 경우 기능이 작동하지 않음.) */
tickerHover: false,
// option : true / false
 
/* 슬라이더의 자동 크기 조절을 활성화 또는 비활성와 합니다.(반응형에서 사용) */
responsive: true,
// option : true / false
 
/* true 인 경우 슬라이더가 터치 스 와이프 전환을 허용합니다.(반응형에서 사용) */
touchEnabled: true,
// option : true / false
 
/* 슬라이드 전환을 실행하려면 터치 스 와이프가 초과해야하는 픽셀의 양입니다. 참고 : touchEnabled : true 인 경우에만 사용됩니다. */
swipeThreshold: 50,
// option : 정수
 
/* true이면 가로 및 세로 슬라이드 애니메이션에 CSS 전환이 사용됩니다 (기본 하드웨어 가속을 사용함). false이면 jQuery animate ()가 사용됩니다. */
useCSS: true,
// option : true / false
 
/* 최소 슬라이더 되는 갯수 (maxSlides와 같이 사용) */
minSlides: 1,
// option : 정수
 
/* 최대 슬라이더 되는 갯수 (minSlides와 같이 사용) */
maxSlides: 1,
// option : 정수
 
/* 각 슬라이더의 width값 설정 */
slideWidth: 0,
// option : 정수
	

	
	
```
