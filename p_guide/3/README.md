
[ < 뒤로](https://github.com/netfolder/netfolder.github.io/tree/master/p_guide)
## 기본 파일구조와 경로


#### html 파일
- 최상위 경로인 '/'를 이용해 루트상대경로로 작업 (ex: /sub/sub.html)
- 최상위 파일은 '/index.html'로 하고, 나머지는 뎁스별로 폴더를 생성하여 작업

    <table summary="html 파일의 폴더명, 파일명, 내용에 대한 예시">
        <caption class="show">html 파일구조와 경로의 예시</caption>
        <colgroup><col style="width:30%;">
        <col style="width:20%;">
        <col>
        </colgroup><thead>
            <tr>
                <th scope="col">폴더명</th>
                <th scope="col">파일명</th>
                <th scope="col">내용</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>/community/</td>
                <td>notice.html</td>
                <td>공지사항</td>
            </tr>
            <tr>
                <td>/community/</td>
                <td>photo.html</td>
                <td>사진 갤러리</td>
            </tr>
        </tbody>
    </table>

<br>

#### CSS 파일
- 최상위 경로인 '/'를 이용해 루트상대경로로 작업 (ex: /include/css/base.css)
- css 파일 위치는 '/include/css/' 으로 한다.
- 아래 예시 이외의 필요 css는 같은 폴더 안에 생성한다.
    <table summary="css 파일의 폴더명, 파일명, 내용에 대한 예시">
        <caption class="show">css 파일구조와 경로의 예시</caption>
        <colgroup><col style="width:30%;">
        <col style="width:20%;">
        <col>
        </colgroup><thead>
            <tr>
                <th scope="col">폴더명</th>
                <th scope="col">파일명</th>
                <th scope="col">내용</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>/include/css/</td>
                <td>reset.css</td>
                <td>초기화 css</td>
            </tr>
            <tr>
                <td>/include/css/</td>
                <td>layout.css</td>
                <td>레이아웃 css</td>
            </tr>
            <tr>
                <td>/include/css/</td>
                <td>common.css</td>
                <td>페이지 공통 스타일 css</td>
            </tr>
            <tr>
                <td>/include/css/</td>
                <td>popup.css</td>
                <td>팝업창 css</td>
            </tr>
        </tbody>
    </table>

<br>

#### JS 파일
- 최상위 경로인 '/'를 이용해 루트상대경로로 작업 (ex: /include/js/juqery.js)
- js 파일 위치는 '/include/js/' 으로 한다.
    <table summary="js 파일의 폴더명, 파일명, 내용에 대한 예시">
        <caption class="show">js 파일구조와 경로의 예시</caption>
        <colgroup><col style="width:30%;">
        <col style="width:20%;">
        <col>
        </colgroup><thead>
            <tr>
                <th scope="col">폴더명</th>
                <th scope="col">파일명</th>
                <th scope="col">내용</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>/include/js/</td>
                <td> jquery-1.11.3.min.js</td>
                <td>제이쿼리 js 파일</td>
            </tr>
            <tr>
                <td>/include/js/</td>
                <td>gnb.js</td>
                <td>gnb 네비게이션 js 파일</td>
            </tr>
        </tbody>
    </table>

<br>

#### 이미지 파일
- 이미지 사이트에 업로드하고 절대경로로 작업
- 이미지 파일 위치는 각 사이트명 (ex: /www/, /elementary/ 등)이고, 필요 시 추가 폴더를 생성한다.
- 기본 이미지 폴더는 아래 예시에 있는 내용을 따르고, 그 외의 이미지는 1뎁스의 개발폴더명을 기준으로 폴더를 생성한다.
    <table summary="이미지 파일의 폴더명, 파일명, 내용에 대한 예시">
        <caption class="show">이미지 파일구조와 경로의 예시</caption>
        <colgroup><col style="width:30%;">
        <col style="width:20%;">
        <col>
        </colgroup><thead>
            <tr>
                <th scope="col">폴더명</th>
                <th scope="col">파일명</th>
                <th scope="col">내용</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>(url)/common/</td>
                <td></td>
                <td>메인, 초등, 중등, 고등에서 공통으로 쓰는 이미지</td>
            </tr>
            <tr>
                <td>(url)/common/btn/</td>
                <td></td>
                <td>메인, 초등, 중등, 고등에서 공통으로 쓰는 버튼 이미지</td>
            </tr>
            <tr>
                <td>(url)/common/ico/</td>
                <td></td>
                <td>메인, 초등, 중등, 고등에서 공통으로 쓰는 아이콘 이미지</td>
            </tr>
            <tr>
                <td>(url)/common/popup/</td>
                <td></td>
                <td>메인, 초등, 중등, 고등에서 공통으로 쓰는 팝업 이미지</td>
            </tr>
            <tr>
                <td>(url)/elementary/common/</td>
                <td></td>
                <td>초등용 공통 이미지 기본</td>
            </tr>
            <tr>
                <td>(url)/elementary/common/header/</td>
                <td></td>
                <td>초등용 헤더 이미지</td>
            </tr>
            <tr>
                <td>(url)/elementary/common/footer/</td>
                <td></td>
                <td>초등용  푸터 이미지</td>
            </tr>
            <tr>
                <td>(url)/elementary/common/snb/</td>
                <td></td>
                <td>초등용 사이드 네비게이션바 이미지</td>
            </tr>
            <tr>
                <td>(url)/elementary/common/quickmenu/</td>
                <td></td>
                <td>초등용 퀵메뉴 이미지</td>
            </tr>
            <tr>
                <td>(url)/elementary/common/btn/</td>
                <td></td>
                <td>초등용 버튼 이미지</td>
            </tr>
            <tr>
                <td>(url)/elementary/common/ico/</td>
                <td></td>
                <td>초등용 아이콘 이미지</td>
            </tr>
            <tr>
                <td>(url)/elementary/popup/</td>
                <td></td>
                <td>초등용 팝업용 이미지</td>
            </tr>
        </tbody>
    </table>