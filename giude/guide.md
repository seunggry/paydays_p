# 가이드

## scss 파일 구조
*common - 공통 scss 파일 / *style - 기본 scss 파일

*scss
  common.scss
  style.scss

  import
    base
    component
    utills


# 정의
------------------------------------------------

## 1. 변수

### base/_variable.scss

```scss
// 폰트 파일명 정의
$font: SpoqaHanSansNeo;
$font2: OneShinhan;

$font-face-custom: (
        $font+'-Thin',
        $font+'-Light',
        $font+'-Regular',
        $font+'-Medium',
        $font+'-Bold',

        $font2+'Light',
        $font2+'Medium',
        $font2+'Bold'

) !global !default;

//root px 설정
$root-px: 14;
```

- $font, $font2 변수에 폰트 공통 이름
- $font-face-custom 에 해당 폰트의 상세 이름
- $root-px 설정


## 2. 컴포넌트
### component/button, form, table ...

button, form, table 등과 같은 공통 컴포넌트 스타일 정의


## 3. mixin
### utills/mixin/ ...

믹스인 정의


# 사용
------------------------------------------------

## 1. 폰트

```scss
//fontName, fontSize, lineHeight 사용할 경우
@include font('regular', 14px, 20/14);

//compile
font-family: SpoqaHanSansNeo-Regular;
font-size: 1rem;
line-height: 1.5; 

//font-family만 사용할 경우
@include font-family('regular');

//compile
font-family: SpoqaHanSansNeo-Regular;


/* base/_font-face.scss ,  utills/mixin/_mixin_font.scss */
```

## 2. rem 변환

```scss
//rem(값)
height: rem(54px);

//compile
height: 3.85rem;

/* utills/function/_fn_unit_calculator.scss */
```

## 3. mediaQuery

```scss
//screen(minWidth, maxWidth)
@include screen(360px, 960px){
		@content;
};
//compile
@media screen and (min-width: 360px) and (max-width: 960px){
		@content;
};

//max-screen(maxWidth)
@include max-screen(960px){
		@content;
};
//compile
@media screen and (max-width: 960px){
		@content;
};

//min-screen(minWidth)
@include min-screen(960px){
		@content;
};
//compile
@media screen and (min-width: 960px){
		@content;
};

//screen-height(minHeight, maxHeight)
@include screen-height(640px, 1080px){
		@content;
};
//compile
@media screen and (min-height: 640px) and (max-height: 1080px){
		@content;
};

//max-screen-height(maxHeight)
@include max-screen-height(640px){
		@content;
};
//compile
@media screen and (max-height: 640px){
		@content;
};

//min-screen-height(minHeight)
@include min-screen-height(640px){
		@content;
};
//compile
@media screen and (min-height: 640px){
		@content;
};


/* utills/mixin/_mixin_mediaquery.scss */
```

## 4. utills ( vendor-prefix )

```scss
//vendor-prefix(name, prop)
p{ @include vendor-prefix(appearance, none); }
//compile
p {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
}

//webkit(name, prop)
p{ @include webkit(appearance, none); }
//compile
p {
  -webkit-appearance: none;
  appearance: none; 
}

//moz(name, prop)
p{ @include moz(appearance, none); }
//compile
p {
  -moz-appearance: none;
  appearance: none;
}

//ms(name, prop)
p{ @include ms(appearance, none); }
//compile
p {
  -ms-appearance: none;
  appearance: none; 
}

//o(name, prop)
p{ @include o(appearance, none);}
//compile
p {
  -o-appearance: none;
  appearance: none;
}

/* utills/mixin/_mixin_utills.scss */
```