[ < 뒤로](https://netfolder.github.io/#fixedNavigation)
<br>
#### fixedNavigation

### type1[ (전체 소스보기) ](https://github.com/netfolder/netfolder.github.io/blob/master/samplePage/fixedNavigation/index.html)

#### [ (미리보기) ](https://netfolder.github.io/samplePage/fixedNavigation/)

#### [ (적용 미리보기1) ](http://pagelab.design.chunjae.co.kr/mixingtextbook/mixing_textbook_guide.asp)
#### [ (적용 미리보기2) ](http://e.coding.tsherpa.co.kr/event/event_190813.html)



#### html
``` html
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="utf-8">
	<title>메뉴 상단 고정</title>
	<meta id="viewport" name="viewport" content="width=device-width,initial-scale=1, user-scalable=no" />
	<meta http-equiv="cleartype" content="on"/>
	<!-- Reset CSS -->
	<link rel="stylesheet" href="css/reset.css">
	<!-- Custom CSS -->
	<style type="text/css">
		*{padding:0; margin:0; border: 0;}
		li{list-style: none;}		
		/* layout */
		#wrap{min-width:320px;}
		
		#header{
			 min-height:220px;
		}
		.container{width: 1200px; margin: 0 auto;} /* 컨텐츠 레이아웃 */
		.fixed{position:fixed;top:0;left:0;width:100%;margin:0;z-index:900; background-color: #fff;} /* 최상단 고정 */		
		
		/* header */
		.header{height: 400px;}
		
		/* navi */
		.navi{}
		.navi ul{text-align: center; width: 100%;}
		.navi li{ font-size: 15px; display: inline-block; padding: 20px 20px; box-sizing: border-box;}
		.navi li a.on{ color:blue; font-weight: bold;}
		.navi li a{ display: inline-block;}
		
		
		@media (max-width:1024px){
			.container{width: 100%;	}
			/*.row{padding:0 15px;}*/
			.header{height: 30vw;}
			.navi li{ font-size: 2.000vw; line-height:2.000vw;display: inline-block; padding: 3vw  0; box-sizing: border-box; width:19%;}
		}
		
		@media (max-width:768px){
			.navi li{ font-size: 2.400vw; line-height:2.600vw;}
		}
		
		@media (max-width:560px){
			.header{height: 50vw;}
			.navi li{ font-size: 2.800vw; line-height:3.000vw;}
		}
		@media (max-width:360px){
			.header{height: 70vw;}
			.navi li{ font-size: 3.000vw; line-height:3.200vw; }
		}
		@media (max-width:320px){
			.header{height: 70vw;}
			.navi li{  width:18%;}
		}
		
		
	</style>
	
	
</head>
<body>

	<main id="wrap">
		<div id="header">
			<div class="container">
				<div class="row">
					<div class="header">
						
					</div>
				</div>
			</div>
		</div>
		
			
		<nav id="navi">
			<div class="container">
				<div class="row">
					<div class="navi clearfix">
						<ul>
							<!-- 
								p_sec1~p_sec5 하단 컨텐츠 id 와 매칭
							-->
							<li><a href="#p_sec1" class="">소개</a></li>
							<li><a href="#p_sec2" class="">시상안내</a></li>
							<li><a href="#p_sec3" class="">참가방법</a></li>
							<li><a href="#p_sec4" class="">주의사항</a></li>
							<li><a href="#p_sec5" class="">참가영상</a></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
		
		<section id="p_contents">
			<div id="p_sec1" class="scroll_content"  style="height:2000px; background-color: #333; color:#fff;">
				<div class="container">
					a<br>a<br>a<br>a<br>a<br>a<br>
				</div>
			</div>
			<div id="p_sec2" class="scroll_content" style="height:2000px; background-color: #666;color:#fff">
				<div class="container">
					b<br>b<br>b<br>b<br>b<br>b<br>
				</div>
			</div>
			<div id="p_sec3" class="scroll_content" style="height:2000px; background-color: #999;color:#fff">
				<div class="container">
					c<br>c<br>c<br>c<br>c<br>c<br>
				</div>
			</div>
			<div id="p_sec4" class="scroll_content" style="height:2000px; background-color: #666;color:#fff">
				<div class="container">
					d<br>d<br>d<br>d<br>d<br>d<br>
				</div>
				
			</div>
			<div id="p_sec5" class="scroll_content" style="height:2000px; background-color: #333; color:#fff">
				<div class="container">
					f<br>f<br>f<br>f<br>f<br>f<br>
				</div>
			</div>
		</section>
	</main>
	
	
	<!-- jQuery -->
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/js-polyfills/0.1.42/polyfill.min.js"></script>
	<script>
		
		var fixedNavigation = {
			
			init:function(){
				var self = this;
				this.index = 0;
				this.scrollTopMinus = 100;
				this.$header = $("#header");
				this.$navCase = $("#navi");
				this.$nav = $(".navi");
				this.$contents = $('.scroll_content');
				this.header_height; // 비주얼 영역 height
				this.navi_top; // 네비 영역 top
				this.navi_height; // 네비 영역 height
				this.posArr = []; // 컨텐츠 영역 top 값 저장
				
				$(window).load(function(){
					self.enterFrame();
				}).scroll(function(){					
					self.enterFrame();
				}).resize(function(){
					self.enterFrame();
				});
				
				this.addMouseEvent();
			},
			enterFrame:function(){
				var self = this;
				this.navi_height = this.$nav.height();
				this.navi_top = this.$nav.offset().top;
				this.header_height = this.$header.height();
				this.$navCase.css("height" , this.navi_height)
				this.addFixed();
				var scltop = $(window).scrollTop();
				$.each(self.$contents, function(idx, item){ 
					var $target = self.$contents.eq(idx), 
					i = $target.index(), 
					targetTop = $target.offset().top; 
					
					if (targetTop <= scltop + self.navi_height + 10) { 
						self.$nav.find("li a").removeClass('on'); 
						self.$nav.find("li a").eq(idx).addClass('on');
					} ;
					if (!(200 <=scltop)) { 
						self.$nav.find("li a").removeClass('on'); 
					}
				})
				
			},
			addFixed : function(){
				var self = this;
				if($(window).scrollTop() > this.header_height){
					self.$nav.addClass("fixed")
				}else{
					self.$nav.removeClass("fixed")
				} 
			},
			addMouseEvent : function(){
				var self = this;
				this.$nav.find("a").click(function(e){
					e.preventDefault();
					
					var iElm = $(this).attr("href"),
						iElmPos = $(iElm).offset().top,
						moveToPos = function(){							
							$('html, body').stop().animate({ scrollTop: iElmPos - self.navi_height}, "slow");
						};
					moveToPos();
				});
			}
			
		}
		//
		fixedNavigation.init();
	
	
	</script>
</body>
</html>
```


<div style="text-align: right"> <a href="#top">⬆ back to top</a> </div>