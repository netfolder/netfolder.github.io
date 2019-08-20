### [ < 홈으로](https://github.com/netfolder/public_chunjae)

## swiper 3.x

### https://github.com/nolimits4web/Swiper/blob/Swiper3/API.md 3.x 버젼 사용

```javascript
//기본설정
var s_swiper = new Swiper('.swiper-container', {				
	autoplay : 4500,  //롤링시간
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	pagination: '.swiper-pagination',
	paginationClickable: false, // 하단 페이지 버튼 클릭유무
	loop: true, // 무한대 롤링 여부
	autoHeight: true, // 자동으로 높이를 잡게할것인지
	spaceBetween: 0 // 배너 간의 간격
})
```
<!--##### [옵션더보기 ↓](#option)-->

 - type1[ (소스보기) ](https://github.com/netfolder/public_chunjae/blob/master/swiper/html/m_swiper.html) : 단일 롤링

 	![Alt text](images/img01.png)

 - type2[ (소스보기) ](https://github.com/netfolder/public_chunjae/blob/master/swiper/html/m_swiper_01.html) : 텝 활성화 및 클릭시 스와이핑처리

 	![Alt text](images/img02.png)
