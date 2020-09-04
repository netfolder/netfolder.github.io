

/**
 * 글로벌 변수
 */
var str = ""; // 코딩내용을 담는 문자열
var total = -1;
var isView = -1;
var pop_img; // 팝업에 표시되는 이미지 저장
var pop_link; // 팝업에 표시되는 이미지 링크 저장
var isBtnNum = 0;
var input_state = false;
var ptemp = -1;
var isWeb = "desktop"; //desktop or mobile
var coding_souce_message = "no"; //소스보기 클릭 유무

var sAlert = new SystemMsg(); //경고창 class    public\com\dispaly\view\SystemMsg.js
var viewSouce = new InputView(); //소스보기 class  public\com\dispaly\view\InputView.js


$(document).ready(function() {
    // object 드레그
    $("#sortable").sortable({
        revert: false,
        placeholder: "ui-state-highlight",
        update: function(evt) {
            //start , change
            ui_update();
        }
    });

    $("#draggable").click(function() {
        //console.log('상품추가버튼 클릭')
        menuMake()
    });
    //링크 값이 입력됬는지
    $("#popup .linkUrl").bind("change", function(e) {
        var $this = $(this);
        var linkUrl = $this.val();

        if (linkUrl.indexOf("http://") == -1) {
            //http:// 이게 없으면
            pop_link = "http://" + linkUrl;
        } else {
            pop_link = linkUrl; 
        }
    });

    $(".new_btn .addBtn").bind("click", function(e) {
        e.preventDefault()
            //var $this = $(this);
            //total = $this.parents("#sortable").find("li").length;
            //isView = $this.parent().index();
            //console.log("total  : " , total)
        popup_open()
        viewSouce.viewClose();
    });

    //돋보기버튼 클릭
    // $(".pop_img_ok").bind('click', function() {       
    //     imageCheck();
    // });

    $("#popup .imgUrl").bind("change", function (e) {
		//popup_clear()

		var $this = $(this);
        var imgUrl = $this.val();

		if (input_state == true) {
            $("#holder").empty()
        };

        if (imgUrl.indexOf(".jpg") != -1 || imgUrl.indexOf(".JPG") != -1 || imgUrl.indexOf(".PNG") != -1 || imgUrl.indexOf(".png") != -1) {

            //alert("이미지 경로가 정상으로 보임")
            $("#popup").animate({}, 5,
                function() {

                    $this.parents("#popup").find("#holder").append('' +
                        '<img class="popup_in_img" src="' + imgUrl + '"/>')
                    pop_img = imgUrl;

                    $('.popup_in_img').error(function() {
                        //로드된 팝업이미지가 404 error 이면 실행
                        //alert("이미지 경로가 입력되었으나, 잘못되었습니다.");
                        $('.popup_in_img').css("display", "none");

                        $this.parents("#popup").find("#holder").append('' +
                            '<div class="not_img_message" style="display:block;">해당 링크의 정보를 불러올수 없습니다<br>링크를 다시 확인 해 주세요</div>');

                        $(".imgUrl").val("");
                        popup_resize(1); //팝업창 리사이즈 타입1번
                        //}).attr( "src", imgUrl);
                    }).load(function() {

                        console.log('------------------------------------');
                        console.log('정상적인 이미지 로드');
                        console.log('------------------------------------');
                        $('.popup_in_img').css("display", "block");
                        popup_resize(2); //팝업창 리사이즈 타입2번
                    });

                    input_state = true;

                })

        } else {
            popup_clear();
            sAlert.view('정상적인 이미지 경로가 아닙니다.');
            popup_resize(0);
        }

	});

    top_event()

});


/*상태 설정값 모두 초기화*/
function allClear() {
    total = -1;
    isView = -1;
    pop_img; // 팝업에 표시되는 이미지 저장
    pop_link; // 팝업에 표시되는 이미지 링크 저장
    isBtnNum = 0;
    input_state = false;
    ptemp = -1;

    $('#sortable').empty();
    $("#p_wrapper_slide").empty();
    //$('#souceview_layout textarea').val(""); //소스보기창 초기화
    popup_clear();
    coding_souce_message = "no";
}


/**
 * +버튼 생성
 */
function menuMake() {
    var data_index = 1;
    $("#sortable .btn>a").off(); //이벤주 중첩방지를 위한 초기화
    $('#sortable').append('' +
        '<li class="ui-state-default btn" data-src=' + data_index + '>' +
        '<a class="closeBtn" href="#" onclick="menuRemove(this);"><img src="images/close_btn.png" /></a>' +
        '<a href="javascript:;"><img src="images/plus_btn.jpg" />' +
        '</a></li>');
    //하단 생성 버튼관련
    $(".new_btn .btn>a").bind("click", function(e) {
        e.preventDefault()
        var $this = $(this);
        total = $this.parents("#sortable").find("li").length;
        isView = $this.parent().index();
        //console.log("클릭  : " , isView)
        popup_open()
    });

    iconMenuScrollState();//하단메뉴 다중 등록시 스크롤 생성 여부

};


// @param1 : 하단 icon 자신을 넘긴다
function menuRemove(e) {
    var mc = $(e)
    mc.parent().remove();
    //console.log(e)
    ui_update();
}

//설명 :  팝업  보이기 
function popup_open() {
    popup_resize(0) //팝업창 리사이즈 타입0번
};

//설명 : 팝업  감추기
function popup_close() {
    $("#popup").animate({
        top: "-500"

    }, 300, function() {})
    popup_clear()
}
//설명 : 팝업 종류별 자동 리사이징
function popup_resize(n) {
    var pos_margin_y = ['-160px', '-247px', '-280px'];
    var heightY = ['215px', '295px', '440px'];
    var spd = [300, 120, 120]

    $("#popup").animate({
        'top': '47%',
        'marginTop': pos_margin_y[n],
        'height': heightY[n]

    }, spd[n], function() {})

}

//설명 : 팝업 에 작성된 내용 클리어
function popup_clear() {
    $(".imgUrl").val(""); //입력창 이미지 경로
    $(".linkUrl").val(""); //입력창 링크 경로
    $(".popup_in_img").remove();
    imgUrl = ""; //입력창 이미지 유효시 저장되는 변수 	
    input_state = false; //입력창에 내용 없음
    $('.not_img_message').css("display", "none");
    
}


//설명 : 팝업 - 확인 클릭 - 하단썸네일 생성( ui-update )
function popup_info_check() {
    if (input_state == false) {
        sAlert.view('이미지 입력창 우측 찾기 버튼을 클릭해주세요')
        return;
    }
    var img_str = $(".imgUrl").val()
    var link_str = $(".lineUrl").val()
    if (img_str == null || img_str == undefined || img_str == "") {
        //alert("이미지 경로를 입력해주세요")
    } else {
        menuMake();
        popup_close();
        //마지막 두번째 요소에 이미지 삽입
        $(".btn:nth-last-child(1)").prepend('' +
            '<a class="thum_case" href="javascript:;" ><img class="thum_img" link="' + pop_link + '" src="' + pop_img + '"/></a>');

        ui_update();
    }
}

//설명 : 상단 모바일 & pc  icon 버튼관련 이벤트
function top_event() {
    var isView = 0;

    $(".icon li>a").each(function(index) {
        var $this = $(this)
        $this.click(function() {
            isView = index;
            if (isView == 0) {
                isWeb = "desktop"
            } else {
                isWeb = "mobile"
            }
            selectMenu(isView)
        });
    });

    selectMenu = function(n) {
        $(".icon li").removeClass("select");
        $(".icon li").eq(n).addClass("select");

        if (isWeb == "desktop") {
            browse_window(980)
        } else {
            browse_window(375)
        };
    };

    $(".downBtn").bind('click', function() {
        if (coding_souce_message == "yes") {
            download('noName.html', str)
        } else {
            //alert("소스보기 버튼을 클릭하여 코드를 생성 or 갱신 해주세요!")
            sAlert.view('소스보기 버튼을 클릭하여 코드를 생성 or 갱신 해주세요!')
        }
    });
    $('.viewBtn').bind("click", function(e) {
        e.preventDefault()
        copyHtml()
    });

};

//설명 : 브라우져 형태 변경 함수
// @param1 : 가로 넓이 px 단위로 넘긴다
function browse_window(getWidth) {
    $("#mobileViewArea").stop(true, true).animate({
        width: getWidth
    }, 200, function() {
        ui_update();
    });
}

//설명 : 소스 보기 창에 웹 & 모 구분하여 소스를 붙인다
function copyHtml() {
    /**
     * isWeb 웹  || 모바일 체크해서 해당소스 붙이기
     */
    var option = "";
    str = "";


    if (isWeb == "desktop") {

        str = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
				<html xmlns="http://www.w3.org/1999/xhtml" xmlns="http://www.w3.org/1999/html">
				<head>
					<title>web swiper</title>
					<meta http-equiv="Content-Type" content="text/html; charset=euc-kr" />
					<meta http-equiv="X-UA-Compatible" content="IE=edge" />
					<link rel="stylesheet" href="http://eventimg.auction.co.kr/md/auction/08405BF42E/idangerous.swiper.css">
					<style type="text/css">
						*{margin:0;padding:0}
						img{border:0;vertical-align:top}
						li{list-style:none}
						
						#p_wrapper_slide{width:980px; margin:0 auto;position:relative;display: blcok; }		
						#p_wrapper_slide .swiper-wrapper{position:relative}
						#p_wrapper_slide .swiper-slide{position:relative; text-align: center; width:100%;}
						#p_wrapper_slide .swiper-slide img{width:100% !important;}
						#p_wrapper_slide .swiper-pagination{width:100%;left:0}
						#p_wrapper_slide .swiper-pagination .swiper-pagination-switch{width:12px;height:12px;display:inline-block;*display:inline;*zoom:1;padding:0 8px;background:url(http://eventimg.auction.co.kr/md/auction/099D7A12D7/w_ico_blit_off.png) no-repeat 0 0;border-radius:0}
						#p_wrapper_slide .swiper-pagination .swiper-active-switch{background:url(http://eventimg.auction.co.kr/md/auction/099D7A12D7/w_ico_blit_on.png) no-repeat 0 0}
						#p_wrapper_slide .swiper-button-prev{width:68px;height:68px;position:absolute;top:50%;margin-top:-34px;left:0;background:url(http://eventimg.auction.co.kr/md/auction/099D7A12D7/w_btn_prev.png) no-repeat 0 0;z-index:100;cursor:pointer}
						#p_wrapper_slide .swiper-button-next{width:68px;height:68px;position:absolute;top:50%;margin-top:-34px;right:0;background:url(http://eventimg.auction.co.kr/md/auction/099D7A12D7/w_btn_next.png) no-repeat 0 0;z-index:100;cursor:pointer}
					</style>
					<script type="text/javascript" src="http://script.auction.co.kr/common/jquery.js"></script>
					<script src="http://eventimg.auction.co.kr/md/auction/08405BF42E/idangerous.swiper.js"></script>
				</head>
				<body>`;

        option = `<script>
							var mySwiper = new Swiper('#p_wrapper_slide .swiper-container', {			
								pagination:'#p_wrapper_slide .swiper-pagination',
								paginationClickable:true,
								simulateTouch:true,
								loop:true,
								autoplay:3000,
								calculateHeight:true,
								slidesPerView:1
							});
							$('#p_wrapper_slide .swiper-button-prev').bind('click', function(e){
								e.preventDefault();
								mySwiper.stopAutoplay();
								mySwiper.swipePrev();
								mySwiper.startAutoplay();
							});
							$('#p_wrapper_slide .swiper-button-next').bind('click', function(e){
								e.preventDefault();
								mySwiper.stopAutoplay();
								mySwiper.swipeNext();
								mySwiper.startAutoplay();
							});
					</script>`;



    } else {

        str = `<!DOCTYPE html>
					<html lang="ko">
					<head>
						<meta charset="euc-kr">
						<title>mobile swiper</title>
						<meta id="viewport" name="viewport" content="width=device-width,initial-scale=1, user-scalable=no" />
						<meta http-equiv="cleartype" content="on"/>
						<link rel="stylesheet" href="http://eventimg.auction.co.kr/md/auction/0868D4BD4A/swiper.min.css">	
						<style type="text/css">
							*{margin:0;padding:0}
							img{border:0;vertical-align:top}
							li{list-style:none}
							
								#p_wrapper_slide{margin:0 auto;position:relative}
								#p_wrapper_slide img{width:100%}
								#p_wrapper_slide .slider_wrap{position:relative;overflow:hidden;background:#fff;}
								#p_wrapper_slide .swiper-container {overflow:hidden;position:relative}
								#p_wrapper_slide .swiper-wrapper {width:100%;height:100%}
								#p_wrapper_slide .swiper-slide {overflow:hidden;position:relative}		
								#p_wrapper_slide .swiper-pagination{width:100%;text-align:center;position:absolute;left:0;bottom:3%;}
								#p_wrapper_slide .swiper-pagination-bullet{width:6px;height:6px;margin:0 5px;background:#000;border:2px #000 solid;border-radius:100%;opacity:1}
								#p_wrapper_slide .swiper-pagination-bullet-active{border:2px #000 solid;opacity:1;background:transparent}
								#p_wrapper_slide .swiper-button-prev{opacity:0.3;width:40px;height:40px;z-index:10;top:50%;background-color:#fff;background-size:30px 20px;margin-top:-20px;left:0}
								#p_wrapper_slide .swiper-button-next{opacity:0.3;width:40px;height:40px;z-index:10;top:50%;background-color:#fff;background-size:30px 20px;margin-top:-20px;right:0}
						</style>
						<script type="text/javascript" src="http://eventimg.auction.co.kr/md/auction/086A428A1C/jquery-1.11.3.min.js"></script>
						<script src="http://eventimg.auction.co.kr/md/auction/0868D4BD4A/swiper.min.js"></script>
					</head>
					<body>`;

        option = `<script>
								var swiper01 = new Swiper('#p_wrapper_slide .slider_wrap .swiper-container', {				
									autoplay : 4500,
									nextButton: '#p_wrapper_slide .slider_wrap .swiper-button-next',
									prevButton: '#p_wrapper_slide .slider_wrap .swiper-button-prev',
									pagination: '#p_wrapper_slide .swiper-pagination',
									paginationClickable: true,
									loop: true,
									autoHeight: true,
									spaceBetween: 0
								});
						</script>`;
    };

    str = str + '<div id="p_wrapper_slide">' + changeTarget($("#p_wrapper_slide").html().split('<script>')[0]) + option + '</div></body></html>';

    viewSouce.view(str)
    coding_souce_message = "yes";

};

// 설명 : 문자열 웹 & 모 구분하여 바꿔치기
// @param : 문자열
function changeTarget(str) {
    var _str = str;

    if (isWeb == "desktop") {
        return _str.replace(/target="_blank"/g, 'target="_blank"'); //데스크탑
    } else {
        return _str.replace(/target="_blank"/g, 'target="_parent"'); //모바일
    }
}

// 설명 : 파일 다운 로드 관련
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=euc-kr,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
};

// 설명 : 하단메뉴 다중 등록시 스크롤 생성 여부
function iconMenuScrollState(){
    var limitWidth = 940;
    var startX = 5; 
    var xGab = 86;
    var total  = $('#sortable li').length;
    var result = startX + (xGab  * total)
    var bot;
    if(result > limitWidth){
        console.log('영역을 넘음')
        bot = 15;
    }else{
        console.log('영역을넘지 않음')
        bot = 0;
    }
    $("#aside").animate({        
        'bottom': bot    
    }, 350, function() {})
   
    $(".inc-obj").scrollLeft(result);
    $('#sortable').width(result);

}

//설명 : 화면에 보여주는 화면 업데이트
function ui_update() {
    coding_souce_message = "no";
    console.log('업데이트')
        /*console.log('pop_img : ' , pop_img)
        console.log('pop_link : ' , pop_link)*/
    
    
    viewSouce.viewClose();
    iconMenuScrollState(); // 하단영역 사이즈 갱신에 따른 스크롤 유무
    str = "";
    pop_link = "";
    //삭제 
    $("#p_wrapper_slide").empty();
    if (isWeb == "desktop") {
        $("#p_wrapper_slide").append(`<div class="slider_wrap">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					
					
				</div>
			</div>			
			<!-- Add Arrows -->
			<div class="swiper-button-next swiper-button-black"></div>
			<div class="swiper-button-prev swiper-button-black"></div>
			<div class="swiper-pagination"></div>
		</div>
			<script>
				setTimeout(function(){
					var mySwiper = new Swiper('#p_wrapper_slide .swiper-container', {			
						pagination:'#p_wrapper_slide .swiper-pagination',
						nextButton: '#p_wrapper_slide  .swiper-button-next',
						prevButton: '#p_wrapper_slide  .swiper-button-prev',						
						paginationClickable:true,
						simulateTouch:true,
						loop:false,
						autoplay:false,
						calculateHeight:true,
						slidesPerView:1,
						onSlideChangeStart:function(){
							$('div').removeClass('swiper-button-disabled')
						},
						onSlideChangeEnd : function(){
							$('div').removeClass('swiper-button-disabled')
						},
						onInit : function(){
							$('div').removeClass('swiper-button-disabled')
						}
					});
				},10)
			</script>`)

    } else {
        $("#p_wrapper_slide").append(`<div class="slider_wrap">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					
					
				</div>
			</div>			
			<!-- Add Arrows -->
			<div class="swiper-button-next swiper-button-black"></div>
			<div class="swiper-button-prev swiper-button-black"></div>
			<div class="swiper-pagination"></div>
		</div>
			<script>
				setTimeout(function(){
					var swiper01 = new Swiper('#p_wrapper_slide .slider_wrap .swiper-container', {	
						nextButton: '#p_wrapper_slide  .swiper-button-next',
						prevButton: '#p_wrapper_slide  .swiper-button-prev',
						pagination: '#p_wrapper_slide .swiper-pagination',
						paginationClickable: true,
                        loop:false,
                        autoplay:false,
						autoHeight:true,
						spaceBetween: 0,
						onSlideChangeStart : function(){
							$('div').removeClass('swiper-button-disabled')
						},
						onSlideChangeEnd : function(){
							$('div').removeClass('swiper-button-disabled')
						},
						onInit : function(){
							$('div').removeClass('swiper-button-disabled')
						}
					});
				},10)
            </script>`)
            
    }

    //swiper 아이템 반복생성
    $('#sortable li').each(function(index) {
        var $this = $(this);
        var linkA = $this.find('img').attr('link')
        var imgA = $this.find('img').attr('src')
        console.log(index + " : lnkurl " + $this.find('img').attr('link'))
            //console.log(index + " : imgurl "  +$this.find('img').attr('src'))


        //링크값이 입력되었는지 안되었는지
        if (linkA == null || linkA == undefined || linkA == "" || linkA == "undefined") {
            $(".swiper-wrapper").append('' +
                '<div class="swiper-slide">' +
                '<img src="' + imgA + '" alt="">' +
                '</div>');
        } else {

            $(".swiper-wrapper").append('' +
                '<div class="swiper-slide">' +
                '<a href="' + linkA + '" target="_blank"><img src="' + imgA + '" alt=""></a>' +
                '</div>');
        }
    });
    
    if( $('.swiper-slide').length == 1 ){
        
        $('.swiper-button-next').css('display' , 'none')
        $('.swiper-button-prev').css('display' , 'none')
    }
    
    

    //하단 아이콘 x 버튼 제어
    var $this;
    $(".thum_img").bind("mouseenter", function() {
        $this = $(this);
        $this.parent().parent().find(".closeBtn").css("display", "block")

    });
    $(".thum_img").bind("mouseleave", function() {
        $this = $(
            this);
        $this.parent().parent().find(".closeBtn").css("display", "none")
    });
    $(".closeBtn").bind("mouseenter", function() {
        $this.parent().parent().find(".closeBtn").css("display", "block")

    });
    $(".closeBtn").bind("mouseleave", function() {
        $this.parent().parent().find(".closeBtn").css("display", "none")
    });


};