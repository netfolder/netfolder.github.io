## 디자인사이즈 가이드

 - Mobile(360 x 640) : 720 ( psd )
 - Tablet (768 x 1024) : 1536 ( psd )
 - PC (1920 x 1080) : 1920 ( psd )



``` HTML
    <meta name="viewport" content="width=device-width, initial-scale=1">

    width=device-width : 화면의 넓이를 디바이스의 넓이로 지정

    intial-scale=1: 기본 사이즈를 1로 지정함.

```


``` CSS
    /* 테블릿 */
    @media screen and (max-width: 1024px) {

    }
    /* 모바일 */
    @media screen and (max-width: 720px) {

    }

```