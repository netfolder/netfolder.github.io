### [ < 홈으로](https://github.com/netfolder/netfolder.github.io#css)

## sass 문법

* 셀렉터 네스팅

: 특정 선택자 내에는 속성 정의만 들어오는 것이 아니라, nested된 속성 정의 블럭이 들어올 수 있다.

```css
.entry-content {
  p { font-size: 9.814rem; }
}

// compiled to
.entry-content p {
  font-size: 9.814rem;
}
```

* 속성 네스팅

: font의 경우 font-family, font-size, font-weight 등이 주로 세트로 정의되는데,
다음과 같이 하나의 세트(?)인 속성들은 속성의 하위 사전 형태로 작성할 수 있다.

```css
.entry-content {
  p {
    font: {
      family: "Noto Serif CJK KR", serif;
      size: 9.814rem;
      weight: 400;
    }
  }
}

```

* 상위요소 참조

: &을 사용하면 블럭이 적용되는 셀렉터를 치환한다.

```css
a {
  text-decoration: none
  &:hover { text-decroation: underline; }
}
// compiled to
a { text-decoration: none; }
a:hover { text-decoratino: underline; }

```
```css
.widget {
   font-weight: 400;
   &-area { font-weight: 600; }
   &-top_posts { font-weight: 1000; }
}
// compiled to
.widget { font-weight: 400; }
.widget-area { font-weight: 600; }
.widget-top_posts { font-weight: 1000; }
```

* 문자열의 치환 및 내삽(interpolation)

: 샵{...} 을 사용하면 문자열 내에 표현식의 결과를 내삽하거나, 다른 변수의 내용으로 치환하는 것이 가능하다. 이는 속성값의 일부 혹은 전체 뿐만 아니라 속성명이나 셀렉터에 대해서도 적용 가능하다.

```css
$foo: bar;
$fontsize: 12px;
$lineheight: 30p;

p {
  font: #{$fontsize}/#{$lineheight};
  &.#{$foo} { color: red; }
}
// compiled to
p { font: 12px/30px; }
p.bar { color: red; }
```

* 확장(`@extend`)

: 확장 문법은 아래와같이 사용한다.

```css
// 베이스 클래스
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}

.error {
  @extend .message;
  border-color: red;
}
// compiled to
.message, .success, .error {
  border: 1px solid #cccccc;
  padding: 10px;
  color: #333;
}

.message { border-color: green; }
.error { border-color: red; }
```

* 믹스인

: 함수 형태 가변적인 내용을 사용할때 활용

```css
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  -ms-border-radius: $radius;
  border-radius: $radius;
}

.box { @include border-radius(10px); }
```

* 믹스인 인자값

: 믹스인의 인자는 선언하는 만큼 사용할 수 있다. 만약 인자값에 디폴트를 적용하고 싶다면, 변수 선언과 같은 문법으로 인자변수의 초기값을 설정해 줄 수 있다.
: `@include` 구문에서 인자값은 선언된 순서대로 쓸 수 있으며, 보다 명확한 구분을 위해서 인자의 이름을 직접 기입할 수 있다. 인자의 각 이름을 명시한 경우에는 순서가 바뀌어도 상관없다.

```css
@mixin dashed-box($color, $width: 2px) { .. }

.box { @incluxe dashed-box($width: 3px, $color: #eee) }
```

* 리스트 인자

: 인자명에 `...` 을 붙이면 단일 값이 아닌 리스트로 인자를 받는 다는 의미이다. 이는 일련의 연속값을 속성으로 사용하는 경우에 활용할 수 있다.

```css
@mixin box-shadow($shadows...) {
  -moz-box-shadow: $shadows;
  -webkit-box-shadow: $shadows;
  box-shadow: $shadows;
}

.shadows { @include box-shadow(0px 4px 5px #666, 2px 6px 10px #999); }
```

`...` 표현은 리스트나, 맵을 개별 인자들로 분해해서 함수나 믹스인에 전달할 때 사용될 수 있다.

```css
@mixin colors($text, $background, $border) {
  color: $text;
  background-color: $background;
  border-color: $border;
}

$values: #ff0000, #00ff00, #0000ff;
.primary { @include colors($values...); }
```



https://soooprmx.com/archives/7948 이어서 정리
