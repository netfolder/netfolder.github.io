[ < 뒤로](https://netfolder.github.io/#sample)
<br>
#### swiper 3.x


#### https://github.com/nolimits4web/Swiper/blob/Swiper3/API.md 3.x 버젼 사용


### type1[ (전체 소스보기) ](https://github.com/netfolder/netfolder.github.io/blob/master/swiper/html/m_swiper.html)

 	![Alt text](images/img01.png)
	
#### Include
``` html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.2.7/css/swiper.css">
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.2.7/js/swiper.min.js"></script>
```

#### css
``` css
#p_header{margin:0 auto;position:relative; width: 500px;}
#p_header img{width:100%}
#p_header .slider_wrap{position:relative;overflow:hidden;background:#fff;padding-bottom:10%}
#p_header .swiper-container {overflow:hidden;position:relative}
#p_header .swiper-wrapper {width:100%;height:100%}
#p_header .swiper-slide {overflow:hidden;position:relative}
#p_header .swiper-pagination{width:100%;text-align:center;position:absolute;left:0;bottom:5%}
#p_header .swiper-pagination-bullet{width:6px;height:6px;margin:0 5px;background:#000;border:2px #000 solid;border-radius:100%;opacity:1}
#p_header .swiper-pagination-bullet-active{border:2px #000 solid;opacity:1;background:transparent}
#p_header .swiper-button-prev{opacity:0.3;width:40px;height:40px;z-index:10;top:50%;background-color:#fff;background-size:30px 20px;margin-top:-20px;left:0}
#p_header .swiper-button-next{opacity:0.3;width:40px;height:40px;z-index:10;top:50%;background-color:#fff;background-size:30px 20px;margin-top:-20px;right:0}
```

#### html
``` html
<div id="p_header">
	<div class="slider_wrap">
		<div class="swiper-container">
			<div class="swiper-wrapper">				
				<div class="swiper-slide"><img src="http://image.iacstatic.co.kr/allkill/item/2019/08/20190814103848241r.jpg" alt=""></div>
				<div class="swiper-slide"><img src="http://image.iacstatic.co.kr/allkill/item/2019/08/20190814103848241r.jpg" alt=""></div>
				<div class="swiper-slide"><img src="http://image.iacstatic.co.kr/allkill/item/2019/08/20190814103848241r.jpg" alt=""></div>
				<div class="swiper-slide"><img src="http://image.iacstatic.co.kr/allkill/item/2019/08/20190814103848241r.jpg" alt=""></div>
				<div class="swiper-slide"><img src="http://image.iacstatic.co.kr/allkill/item/2019/08/20190814103848241r.jpg" alt=""></div>
			</div>
		</div>
		<!-- Add Arrows -->
		<div class="swiper-button-next swiper-button-black"></div>
		<div class="swiper-button-prev swiper-button-black"></div>
		<div class="swiper-pagination"></div>
	</div>
</div>
```

#### script
``` javascript	
function getSlideDataIndex(swipe){
	var activeIndex = swipe.activeIndex;
	var slidesLen = swipe.slides.length;
	if(swipe.params.loop){
		switch(swipe.activeIndex){
			case 0:
				activeIndex = slidesLen-3;
				break;
			case slidesLen-1:
				activeIndex = 0;
				break;
			default:
				--activeIndex;
		}
	}
	return  activeIndex;
}
var swiper01 = new Swiper('#p_header .slider_wrap .swiper-container', {
	autoplay : 2000,
	nextButton: '#p_header .slider_wrap .swiper-button-next',
	prevButton: '#p_header .slider_wrap .swiper-button-prev',
	pagination: '#p_header .swiper-pagination',
	paginationClickable: true,
	loop: true,
	autoHeight: true,
	spaceBetween: 0,
	onSlideChangeEnd : function(event){
		var num = getSlideDataIndex(event)
		console.log(num);
	}
});
```

<div style="text-align: right"> <a href="#top">⬆ back to top</a> </div>
<br>


### type2[ (전체 소스보기) ](https://github.com/netfolder/netfolder.github.io/blob/master/swiper/html/m_swiper_01.html)

#### [ (미리보기) ](http://pagelab.coding1.chunjae.co.kr/event/event_190813.html)

 	![Alt text](images/img02.png)

#### Include
``` html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.2.7/css/swiper.css">
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.2.7/js/swiper.min.js"></script>
```

#### css
``` css
#p_header{position: relative; height: 56px;}
#bottom_area{position: relative; height: 80px; text-align: center}
#p_header .pc_btn{position: absolute; right:0; height:100%; }
#p_header img{height: 100%;}
#bottom_area img{height: 100%;}
#p_content{margin:0 auto;position:relative; width: 100%;}
#p_content img{width:100%}
#p_content .slider_wrap{position:relative;overflow:hidden;background:#fff;}
#p_content .swiper-container {overflow:hidden;position:relative}
#p_content .swiper-wrapper {width:100%;height:100%}
#p_content .swiper-slide {overflow:hidden;position:relative}
#p_content .swiper-pagination{width:100%;text-align:center;position:absolute;left:0;bottom:5%; display: none;}
#p_content .swiper-pagination-bullet{width:6px;height:6px;margin:0 5px;background:#000;border:2px #000 solid;border-radius:100%;opacity:1}
#p_content .swiper-pagination-bullet-active{border:2px #000 solid;opacity:1;background:transparent}
#p_content .swiper-button-prev{opacity:0.3;width:40px;height:40px;z-index:10;top:50%;background-color:#fff;background-size:30px 20px;margin-top:-20px;left:0}
#p_content .swiper-button-next{opacity:0.3;width:40px;height:40px;z-index:10;top:50%;background-color:#fff;background-size:30px 20px;margin-top:-20px;right:0}
.container{position: relative; margin:0 auto;}
.swiper-container {	width: 100%;}
.swiper-wrapper .swiper-slide img{width:100%;}
.swiper-button-next , .swiper-button-prev{display: none;}
.slider_tab{width:100%; height:20%; position: absolute; top:0; z-index: 50; box-sizing: border-box; padding-left:4%; }
.slider_tab .sbtns{position: relative;display: inline-block;width: 23%;height:66%;z-index: 500;margin-right: 0.5%;top: 23%;}
.img_obj{position: absolute; left: 0; top:0; width:100%;}
```

#### html
``` html
<div id="p_header">
	<img src="/images/event/20190813/logo.png" alt="">
	<a class="pc_btn" href="https://www.pageshop.co.kr"><img src="/images/event/20190813/pc_baro.png" alt="pc 버젼 보기"></a>
</div>
<div id="p_content">
	<div class="container">
		<div class="slider_wrap">
			<div class="slider_tab">
				<a class="sbtns" href="javascript:;"></a>
				<a class="sbtns" href="javascript:;"></a>
				<a class="sbtns" href="javascript:;"></a>
				<a class="sbtns" href="javascript:;"></a>
				<img class="img_obj" src="/images/event/20190813/slide_tab_01.png" alt="">
			</div>
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<!--  -->
					<div class="swiper-slide"><img src="http://image.iacstatic.co.kr/allkill/item/2019/08/20190814103848241r.jpg" alt=""></div>
					<div class="swiper-slide"><img src="http://image.iacstatic.co.kr/allkill/item/2019/08/20190814103848241r.jpg" alt=""></div>
					<div class="swiper-slide"><img src="http://image.iacstatic.co.kr/allkill/item/2019/08/20190814103848241r.jpg" alt=""></div>
					<div class="swiper-slide"><img src="http://image.iacstatic.co.kr/allkill/item/2019/08/20190814103848241r.jpg" alt=""></div>
					<!-- // -->
				</div>
			</div>
			<!-- Add Arrows -->
			<div class="swiper-button-next swiper-button-black"></div>
			<div class="swiper-button-prev swiper-button-black"></div>
			<div class="swiper-pagination"></div>
		</div>
	</div>
</div>
<div id="bottom_area">
	<img src="/images/event/20190813/bottom.png" alt="">
</div>
```

#### script
``` javascript	
function getSlideDataIndex(swipe){
	var activeIndex = swipe.activeIndex;
	var slidesLen = swipe.slides.length;
	if(swipe.params.loop){
		switch(swipe.activeIndex){
			case 0:
				activeIndex = slidesLen-3;
				break;
			case slidesLen-1:
				activeIndex = 0;
				break;
			default:
				--activeIndex;
		}
	}
	return  activeIndex;
}
$(".sbtns").each(function(index){
	var $this = $(this)
	$this.click(function(){
		//console.log("click : ", index)
		s_swiper.slideTo(index+1)
		selectTab(index)
	})
})
var s_swiper = new Swiper('#p_content .slider_wrap .swiper-container', {
	autoplay : 4500,
	nextButton: '#p_content .slider_wrap .swiper-button-next',
	prevButton: '#p_content .slider_wrap .swiper-button-prev',
	pagination: '.swiper-pagination',
	paginationClickable: false,
	loop: true,
	autoHeight: true,
	spaceBetween: 0,
	onSlideChangeEnd : function(event){
		var num = getSlideDataIndex(event)
		selectTab(num)
		event.startAutoplay();
	}
})
function selectTab(n){
	//console.log("selectTab  : ", n );
	//
	$(".img_obj").attr("src" , "/images/event/20190813/slide_tab_0"+ n +".png")
}
```

<div style="text-align: right"> <a href="#top">⬆ back to top</a> </div>
