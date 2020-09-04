/*
   oribal81@daum.net


*/

(function($) {

	// Animate to section when nav is clicked
	$('header a').click(function(e) {
		e.preventDefault();
		var heading = $(this).attr('href');
		var scrollDistance = $(heading).offset().top;

		$('html, body').animate({
			scrollTop: scrollDistance + 'px'
		}, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

		// Hide the menu once clicked if mobile
		if ($('header').hasClass('active')) {
			$('header, body').removeClass('active');
		}
	});

	// Scroll to top
	$('#to-top').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 50);
	});

	// Scroll to first element
	$('#lead-down span').click(function() {
		var scrollDistance = $('#lead').next().offset().top;
		$('html, body').animate({
			scrollTop: scrollDistance + 'px'
		}, 50);
	});

	// Create timeline
	$('#experience-timeline').each(function() {

		$this = $(this); // Store reference to this
		$userContent = $this.children('div'); // user content

		// Create each timeline block
		$userContent.each(function() {
			$(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
		});

		// Add icons to each block
		$this.find('.vtimeline-point').each(function() {
			$(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
		});

		// Add dates to the timeline if exists
		$this.find('.vtimeline-content').each(function() {
			var date = $(this).data('date');
			if (date) { // Prepend if exists
				$(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
			}
		});

	});

	// Open mobile menu
	$('#mobile-menu-open').click(function() {
		$('header, body').addClass('active');
	});

	// Close mobile menu
	$('#mobile-menu-close').click(function() {
		$('header, body').removeClass('active');
	});


})(jQuery);


/*
 스크립트 추가
 */
function Pop(){
	this.$pop = $("#pop");
	this.projectNo;
	this.totalImg;
	this.linkSrc;
	this.viewType;
	this._height;
}

Pop.prototype = {
	//팝업 보이게 하기
	viewOn : function (pNo, tImg , link , type){
		//console.log("viewOn")
		
		this.projectNo = pNo;
		this.totalImg = tImg;
		this.linkSrc = link;
		this.viewType = type;
		this._height;
		this.addHtml()


	},
	viewOff : function (){
		//console.log("viewOff")
		$("#pop").empty()
		this.$pop.css("display" ,"none");
	},
	//swiper에 내용붙이기
	addHtml :function (){
		//console.log("addHtml")
		domHtml=""
		var self = this;
		
		if( this.viewType  == "slide" ){
			this.$pop.css("display" ,"block");
			var domHtml ='<div class="roll_content">'
			domHtml +='<a class="closeBtn" href="javascript:;"><img src="images/pop_btn_x.png" /></a>'
			domHtml +='<a class="linkBtn" href="'+ this.linkSrc +'" target="_blank"><img src="images/linkgo.png" /></a>'
			domHtml +='<div class="swiper-container">'
			domHtml +='<div class="swiper-wrapper">'
			for(var i=0; i<this.totalImg; i++){
				domHtml +='<div class="swiper-slide"><img src="project/project_'+this.projectNo+'_0'+(i+1)+'.jpg"></div>'
			}
			domHtml +='</div>'
			domHtml +='<div class="swiper-button-next swiper-button-black"></div>'
			domHtml +='<div class="swiper-button-prev swiper-button-black"></div>'
			domHtml +='<div class="swiper-pagination"></div></div></div>'
			domHtml +='<span class="bg"></span>'
		}
		if( this.viewType  == "full" ){
			this.$pop.css("display" ,"block");
			var domHtml ='<div class="full_content">'
			domHtml +='<iframe src="'+ this.linkSrc +'"  width="100%" height="100%"  frameborder="0" scrolling="no" allowtransparency="true"></iframe>'
			domHtml +='</div>'
			domHtml +='<span class="bg"></span>'
		}
		
		$("#pop").append(domHtml);

		$(".swiper-slide img:first-child").load(function() {
			self._height = $(".swiper-slide").height()/2
			//console.log(self._height)
			self.pop_center()
		});
		this.pop_center();
		this.swiperReStart();
		$(".closeBtn").click(function(){
			self.viewOff()
		});
	},
	//팝업 센터정렬
	pop_center : function (){
		//console.log("pop_center" , -1*(this._height)+"px")
		$(".roll_content").css("margin-top" ,  -1*(this._height)+"px");
	},
	//팝업 swiper 실행
	swiperReStart : function(){
		//console.log("swiperReStart")
		var mySwiper = new Swiper('.roll_content .swiper-container', {
			autoplay : false,
			nextButton: '.roll_content .swiper-button-next',
			prevButton: '.roll_content .swiper-button-prev',
			pagination: '.roll_content .swiper-pagination',
			paginationClickable: true,
			loop: true,
			autoHeight: true,
			spaceBetween: 0
		});
        this.pop_center();
	}
}

var pop_mc = new Pop()
$( window ).resize(function() {
	pop_mc.pop_center()
});
$(".viewBtn").click(function(){
	//console.log($(this).attr("project-no")+" 번째 프로젝트"  , " 이미지 총계수 : " +$(this).attr("total-img"))
	pop_mc.viewOn($(this).attr("project-no") , $(this).attr("total-img") , $(this).attr("link-src") , $(this).attr("view-type") )
});
