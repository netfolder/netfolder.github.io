
## 퍼블리싱가이드

* 프로젝트 환경 [【↓】](#PROJECT)
* 퍼블리싱 작업 환경 및 크로스브라우징 범위 [【↓】](#VIEWPORT)
* DOCTYPE [【↓】](#DOCTYPE)


----------------------------------------------------------------------------------------

<br>
<br>
<br>
<a name='PROJECT'></a>

### 프로젝트

#### 환경

|  <center>구분</center> |  <center>내용</center> |
|:--------|:--------:|
| 문서 및 버전 | <center>cell 1x2 </center> |
| 인코딩 | UTF-8 |
| PC 웹 호환성 | <center>IE9이상, 크롬, 파이어폭스, 사파리</center> |
| Mobile 웹 호환성 | <center>안드로이드 4.x 이상, IOS 9.x 이상, 사파리, 크롬 </center> |

#### 파일/폴더

<table>
    <thead>
        <tr>
            <th>분류폴더</th>
            <th><center>서브폴더</center></th>
            <th><center>파일이름</center></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=4>include</td>
            <td>fonts</td>
            <td>web font</td>
        </tr>      
        <tr>
            <td>js</td>
            <td>common.js , libs( 라이브러리 )</td>
        </tr>
        <tr>
            <td>css</td>
            <td>reset.css , common.css , main.css , sub.css .. 각 카테고리별 생성</td>
        </tr>
		<tr>
            <td>html</td>
            <td>공통 ( header , footer , gnb , quick ) </td>
        </tr>
		<tr>
            <td>images</td>
            <td>common , main , sub , etc 등</td>
            <td></td>
        </tr>
    </tbody>
</table>

----------------------------------------------------------------------------------------
<br>
<br>
<br>
<a name='VIEWPORT'></a>

### 퍼블리싱 작업 환경 및 크로스브라우징 범위

1. 크로스브라우징 범위
	- PC
	- I.E 10~11, Chrome 50.x ~ 70.x 최신, Edge 17.x 최신, Safari 11.x~12.x 최신 지원

	- TABLET/MOBILE
		Chrome 50.x ~ 70.x 최신, Safari 11.x ~ 12.x 최신삼성인터넷 최신(기준 단말>갤럭시 기본브라우저 버전)

2. 해상도B.P

	- PC :  1,280px * 700px

	- TABLET : 기준: 768px * 1,024px (iPad)
	
	- MOBILE : 기준:360px * 640px 갤s5~s7(s8/s9)
	


----------------------------------------------------------------------------------------
<br>
<br>
<br>
<a name='DOCTYPE'></a>

###	DOCTYPE

	문서타입에 (X)HTML의 버전과 문서형을 지정하는데, 다양한 플랫폼 지원을 위해 XHTML 1.0 , 하위 브라우져 호환성을 위해 Transitional 모드를 권장하고 있다. (Transition 모드를 사용하더라도, 웹표준 준수율의 향상을 위해 가급적 Strict 모드의 문법을 사용하는 것을 권장함) 시스템 식별자를 명시하여 Standards 모드 방식으로 지원해야 하나 예외적으로 메일, 개별카페, 개별블로그 등의 UCC영역에 해당하는 서비스는 과거 비표준 태그 허용을 위해 Quirks 모드로 지원할 수 있다.

##### XHTML 권장	
``` html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```
##### HTML 일반
``` html
<!doctype html>
```
##### HTML5
``` html
<!doctype html>
```
----------------------------------------------------------------------------------------