# Ardoonga Client

## Dokumentacja Techniczna

Tu już sam się gubię. Przechodzę do doc/index.adoc

Teoria dokumentacji technicznej zakłada, że najpierw piszę instrukcję. 
Zapisuję w niej wszystkie funkcje swojego programu. 
Następnie w tym samym katalogu dodaję testy. 
W ten sposób mam jasno określone wymagania kontraktu, 
a w razie wątpliwości wiem który kawałek kodu odpowiada za określoną rzecz. 

W kwestii decyzyjnej testy wymuszają w jaki sposób piszę program, 
a instukcja wymusza w jaki sposób interpretuję dane otrzymywane z zewnątrz.

Takie podejście wraz z UXem upraktycznionym (zgadywanie, czy wszystkie elementy 
na ekranie są dobrze widoczne, a ich przeznaczenie jest jasne) jest fundamentem Samouctwa.

Tylko przy okazji obciąża to dodatkowo Pierwsze Wydanie. Jeśli będę chciał potem 
zmienić wymagania projektu, to nagle się okaże że jest to wyjątkowo trudne.

### GitHub HTML

Przy okazji GitHub ReadMe nie wspiera niestandardowych klas CSS. Użyć wygenerowanego HTMLa. 
Albo może lepiej zmodyfikować kod wyrzucany przez generator ?

#### ASCIIDoctor

Sprawdzić: https://github.com/jirutka/asciidoctor-html5s > https://github.com/tblaisot/asciidoctorjs-templates-js

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="generator" content="Asciidoctor 2.0.22">
<title>Rasa</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,600italic%7CNoto+Serif:400,400italic,700,700italic%7CDroid+Sans+Mono:400,700">
<style>
/*! Asciidoctor default stylesheet | MIT License | https://asciidoctor.org */
/* Uncomment the following line when using as a custom stylesheet */
/* @import "https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,600italic%7CNoto+Serif:400,400italic,700,700italic%7CDroid+Sans+Mono:400,700"; */
html{font-family:sans-serif;-webkit-text-size-adjust:100%}
a{background:none}
a:focus{outline:thin dotted}
a:active,a:hover{outline:0}
h1{font-size:2em;margin:.67em 0}
b,strong{font-weight:bold}
abbr{font-size:.9em}
abbr[title]{cursor:help;border-bottom:1px dotted #dddddf;text-decoration:none}
dfn{font-style:italic}
hr{height:0}
mark{background:#ff0;color:#000}
code,kbd,pre,samp{font-family:monospace;font-size:1em}
pre{white-space:pre-wrap}
q{quotes:"\201C" "\201D" "\2018" "\2019"}
small{font-size:80%}
sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}
sup{top:-.5em}
sub{bottom:-.25em}
img{border:0}
svg:not(:root){overflow:hidden}
figure{margin:0}
audio,video{display:inline-block}
audio:not([controls]){display:none;height:0}
fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}
legend{border:0;padding:0}
button,input,select,textarea{font-family:inherit;font-size:100%;margin:0}
button,input{line-height:normal}
button,select{text-transform:none}
button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}
button[disabled],html input[disabled]{cursor:default}
input[type=checkbox],input[type=radio]{padding:0}
button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}
textarea{overflow:auto;vertical-align:top}
table{border-collapse:collapse;border-spacing:0}
*,::before,::after{box-sizing:border-box}
html,body{font-size:100%}
body{background:#fff;color:rgba(0,0,0,.8);padding:0;margin:0;font-family:"Noto Serif","DejaVu Serif",serif;line-height:1;position:relative;cursor:auto;-moz-tab-size:4;-o-tab-size:4;tab-size:4;word-wrap:anywhere;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}
a:hover{cursor:pointer}
img,object,embed{max-width:100%;height:auto}
object,embed{height:100%}
img{-ms-interpolation-mode:bicubic}
.left{float:left!important}
.right{float:right!important}
.text-left{text-align:left!important}
.text-right{text-align:right!important}
.text-center{text-align:center!important}
.text-justify{text-align:justify!important}
.hide{display:none}
img,object,svg{display:inline-block;vertical-align:middle}
textarea{height:auto;min-height:50px}
select{width:100%}
.subheader,.admonitionblock td.content>.title,.audioblock>.title,.exampleblock>.title,.imageblock>.title,.listingblock>.title,.literalblock>.title,.stemblock>.title,.openblock>.title,.paragraph>.title,.quoteblock>.title,table.tableblock>.title,.verseblock>.title,.videoblock>.title,.dlist>.title,.olist>.title,.ulist>.title,.qlist>.title,.hdlist>.title{line-height:1.45;color:#7a2518;font-weight:400;margin-top:0;margin-bottom:.25em}
div,dl,dt,dd,ul,ol,li,h1,h2,h3,#toctitle,.sidebarblock>.content>.title,h4,h5,h6,pre,form,p,blockquote,th,td{margin:0;padding:0}
a{color:#2156a5;text-decoration:underline;line-height:inherit}
a:hover,a:focus{color:#1d4b8f}
a img{border:0}
p{line-height:1.6;margin-bottom:1.25em;text-rendering:optimizeLegibility}
p aside{font-size:.875em;line-height:1.35;font-style:italic}
h1,h2,h3,#toctitle,.sidebarblock>.content>.title,h4,h5,h6{font-family:"Open Sans","DejaVu Sans",sans-serif;font-weight:300;font-style:normal;color:#ba3925;text-rendering:optimizeLegibility;margin-top:1em;margin-bottom:.5em;line-height:1.0125em}
h1 small,h2 small,h3 small,#toctitle small,.sidebarblock>.content>.title small,h4 small,h5 small,h6 small{font-size:60%;color:#e99b8f;line-height:0}
h1{font-size:2.125em}
h2{font-size:1.6875em}
h3,#toctitle,.sidebarblock>.content>.title{font-size:1.375em}
h4,h5{font-size:1.125em}
h6{font-size:1em}
hr{border:solid #dddddf;border-width:1px 0 0;clear:both;margin:1.25em 0 1.1875em}
em,i{font-style:italic;line-height:inherit}
strong,b{font-weight:bold;line-height:inherit}
small{font-size:60%;line-height:inherit}
code{font-family:"Droid Sans Mono","DejaVu Sans Mono",monospace;font-weight:400;color:rgba(0,0,0,.9)}
ul,ol,dl{line-height:1.6;margin-bottom:1.25em;list-style-position:outside;font-family:inherit}
ul,ol{margin-left:1.5em}
ul li ul,ul li ol{margin-left:1.25em;margin-bottom:0}
ul.circle{list-style-type:circle}
ul.disc{list-style-type:disc}
ul.square{list-style-type:square}
ul.circle ul:not([class]),ul.disc ul:not([class]),ul.square ul:not([class]){list-style:inherit}
ol li ul,ol li ol{margin-left:1.25em;margin-bottom:0}
dl dt{margin-bottom:.3125em;font-weight:bold}
dl dd{margin-bottom:1.25em}
blockquote{margin:0 0 1.25em;padding:.5625em 1.25em 0 1.1875em;border-left:1px solid #ddd}
blockquote,blockquote p{line-height:1.6;color:rgba(0,0,0,.85)}
@media screen and (min-width:768px){h1,h2,h3,#toctitle,.sidebarblock>.content>.title,h4,h5,h6{line-height:1.2}
h1{font-size:2.75em}
h2{font-size:2.3125em}
h3,#toctitle,.sidebarblock>.content>.title{font-size:1.6875em}
h4{font-size:1.4375em}}
table{background:#fff;margin-bottom:1.25em;border:1px solid #dedede;word-wrap:normal}
table thead,table tfoot{background:#f7f8f7}
table thead tr th,table thead tr td,table tfoot tr th,table tfoot tr td{padding:.5em .625em .625em;font-size:inherit;color:rgba(0,0,0,.8);text-align:left}
table tr th,table tr td{padding:.5625em .625em;font-size:inherit;color:rgba(0,0,0,.8)}
table tr.even,table tr.alt{background:#f8f8f7}
table thead tr th,table tfoot tr th,table tbody tr td,table tr td,table tfoot tr td{line-height:1.6}
h1,h2,h3,#toctitle,.sidebarblock>.content>.title,h4,h5,h6{line-height:1.2;word-spacing:-.05em}
h1 strong,h2 strong,h3 strong,#toctitle strong,.sidebarblock>.content>.title strong,h4 strong,h5 strong,h6 strong{font-weight:400}
.center{margin-left:auto;margin-right:auto}
.stretch{width:100%}
.clearfix::before,.clearfix::after,.float-group::before,.float-group::after{content:" ";display:table}
.clearfix::after,.float-group::after{clear:both}
:not(pre).nobreak{word-wrap:normal}
:not(pre).nowrap{white-space:nowrap}
:not(pre).pre-wrap{white-space:pre-wrap}
:not(pre):not([class^=L])>code{font-size:.9375em;font-style:normal!important;letter-spacing:0;padding:.1em .5ex;word-spacing:-.15em;background:#f7f7f8;border-radius:4px;line-height:1.45;text-rendering:optimizeSpeed}
pre{color:rgba(0,0,0,.9);font-family:"Droid Sans Mono","DejaVu Sans Mono",monospace;line-height:1.45;text-rendering:optimizeSpeed}
pre code,pre pre{color:inherit;font-size:inherit;line-height:inherit}
pre>code{display:block}
pre.nowrap,pre.nowrap pre{white-space:pre;word-wrap:normal}
em em{font-style:normal}
strong strong{font-weight:400}
.keyseq{color:rgba(51,51,51,.8)}
kbd{font-family:"Droid Sans Mono","DejaVu Sans Mono",monospace;display:inline-block;color:rgba(0,0,0,.8);font-size:.65em;line-height:1.45;background:#f7f7f7;border:1px solid #ccc;border-radius:3px;box-shadow:0 1px 0 rgba(0,0,0,.2),inset 0 0 0 .1em #fff;margin:0 .15em;padding:.2em .5em;vertical-align:middle;position:relative;top:-.1em;white-space:nowrap}
.keyseq kbd:first-child{margin-left:0}
.keyseq kbd:last-child{margin-right:0}
.menuseq,.menuref{color:#000}
.menuseq b:not(.caret),.menuref{font-weight:inherit}
.menuseq{word-spacing:-.02em}
.menuseq b.caret{font-size:1.25em;line-height:.8}
.menuseq i.caret{font-weight:bold;text-align:center;width:.45em}
b.button::before,b.button::after{position:relative;top:-1px;font-weight:400}
b.button::before{content:"[";padding:0 3px 0 2px}
b.button::after{content:"]";padding:0 2px 0 3px}
p a>code:hover{color:rgba(0,0,0,.9)}
#header,#content,#footnotes,#footer{width:100%;margin:0 auto;max-width:62.5em;*zoom:1;position:relative;padding-left:.9375em;padding-right:.9375em}
#header::before,#header::after,#content::before,#content::after,#footnotes::before,#footnotes::after,#footer::before,#footer::after{content:" ";display:table}
#header::after,#content::after,#footnotes::after,#footer::after{clear:both}
#content{margin-top:1.25em}
#content::before{content:none}
#header>h1:first-child{color:rgba(0,0,0,.85);margin-top:2.25rem;margin-bottom:0}
#header>h1:first-child+#toc{margin-top:8px;border-top:1px solid #dddddf}
#header>h1:only-child{border-bottom:1px solid #dddddf;padding-bottom:8px}
#header .details{border-bottom:1px solid #dddddf;line-height:1.45;padding-top:.25em;padding-bottom:.25em;padding-left:.25em;color:rgba(0,0,0,.6);display:flex;flex-flow:row wrap}
#header .details span:first-child{margin-left:-.125em}
#header .details span.email a{color:rgba(0,0,0,.85)}
#header .details br{display:none}
#header .details br+span::before{content:"\00a0\2013\00a0"}
#header .details br+span.author::before{content:"\00a0\22c5\00a0";color:rgba(0,0,0,.85)}
#header .details br+span#revremark::before{content:"\00a0|\00a0"}
#header #revnumber{text-transform:capitalize}
#header #revnumber::after{content:"\00a0"}
#content>h1:first-child:not([class]){color:rgba(0,0,0,.85);border-bottom:1px solid #dddddf;padding-bottom:8px;margin-top:0;padding-top:1rem;margin-bottom:1.25rem}
#toc{border-bottom:1px solid #e7e7e9;padding-bottom:.5em}
#toc>ul{margin-left:.125em}
#toc ul.sectlevel0>li>a{font-style:italic}
#toc ul.sectlevel0 ul.sectlevel1{margin:.5em 0}
#toc ul{font-family:"Open Sans","DejaVu Sans",sans-serif;list-style-type:none}
#toc li{line-height:1.3334;margin-top:.3334em}
#toc a{text-decoration:none}
#toc a:active{text-decoration:underline}
#toctitle{color:#7a2518;font-size:1.2em}
@media screen and (min-width:768px){#toctitle{font-size:1.375em}
body.toc2{padding-left:15em;padding-right:0}
body.toc2 #header>h1:nth-last-child(2){border-bottom:1px solid #dddddf;padding-bottom:8px}
#toc.toc2{margin-top:0!important;background:#f8f8f7;position:fixed;width:15em;left:0;top:0;border-right:1px solid #e7e7e9;border-top-width:0!important;border-bottom-width:0!important;z-index:1000;padding:1.25em 1em;height:100%;overflow:auto}
#toc.toc2 #toctitle{margin-top:0;margin-bottom:.8rem;font-size:1.2em}
#toc.toc2>ul{font-size:.9em;margin-bottom:0}
#toc.toc2 ul ul{margin-left:0;padding-left:1em}
#toc.toc2 ul.sectlevel0 ul.sectlevel1{padding-left:0;margin-top:.5em;margin-bottom:.5em}
body.toc2.toc-right{padding-left:0;padding-right:15em}
body.toc2.toc-right #toc.toc2{border-right-width:0;border-left:1px solid #e7e7e9;left:auto;right:0}}
@media screen and (min-width:1280px){body.toc2{padding-left:20em;padding-right:0}
#toc.toc2{width:20em}
#toc.toc2 #toctitle{font-size:1.375em}
#toc.toc2>ul{font-size:.95em}
#toc.toc2 ul ul{padding-left:1.25em}
body.toc2.toc-right{padding-left:0;padding-right:20em}}
#content #toc{border:1px solid #e0e0dc;margin-bottom:1.25em;padding:1.25em;background:#f8f8f7;border-radius:4px}
#content #toc>:first-child{margin-top:0}
#content #toc>:last-child{margin-bottom:0}
#footer{max-width:none;background:rgba(0,0,0,.8);padding:1.25em}
#footer-text{color:hsla(0,0%,100%,.8);line-height:1.44}
#content{margin-bottom:.625em}
.sect1{padding-bottom:.625em}
@media screen and (min-width:768px){#content{margin-bottom:1.25em}
.sect1{padding-bottom:1.25em}}
.sect1:last-child{padding-bottom:0}
.sect1+.sect1{border-top:1px solid #e7e7e9}
#content h1>a.anchor,h2>a.anchor,h3>a.anchor,#toctitle>a.anchor,.sidebarblock>.content>.title>a.anchor,h4>a.anchor,h5>a.anchor,h6>a.anchor{position:absolute;z-index:1001;width:1.5ex;margin-left:-1.5ex;display:block;text-decoration:none!important;visibility:hidden;text-align:center;font-weight:400}
#content h1>a.anchor::before,h2>a.anchor::before,h3>a.anchor::before,#toctitle>a.anchor::before,.sidebarblock>.content>.title>a.anchor::before,h4>a.anchor::before,h5>a.anchor::before,h6>a.anchor::before{content:"\00A7";font-size:.85em;display:block;padding-top:.1em}
#content h1:hover>a.anchor,#content h1>a.anchor:hover,h2:hover>a.anchor,h2>a.anchor:hover,h3:hover>a.anchor,#toctitle:hover>a.anchor,.sidebarblock>.content>.title:hover>a.anchor,h3>a.anchor:hover,#toctitle>a.anchor:hover,.sidebarblock>.content>.title>a.anchor:hover,h4:hover>a.anchor,h4>a.anchor:hover,h5:hover>a.anchor,h5>a.anchor:hover,h6:hover>a.anchor,h6>a.anchor:hover{visibility:visible}
#content h1>a.link,h2>a.link,h3>a.link,#toctitle>a.link,.sidebarblock>.content>.title>a.link,h4>a.link,h5>a.link,h6>a.link{color:#ba3925;text-decoration:none}
#content h1>a.link:hover,h2>a.link:hover,h3>a.link:hover,#toctitle>a.link:hover,.sidebarblock>.content>.title>a.link:hover,h4>a.link:hover,h5>a.link:hover,h6>a.link:hover{color:#a53221}
details,.audioblock,.imageblock,.literalblock,.listingblock,.stemblock,.videoblock{margin-bottom:1.25em}
details{margin-left:1.25rem}
details>summary{cursor:pointer;display:block;position:relative;line-height:1.6;margin-bottom:.625rem;outline:none;-webkit-tap-highlight-color:transparent}
details>summary::-webkit-details-marker{display:none}
details>summary::before{content:"";border:solid transparent;border-left:solid;border-width:.3em 0 .3em .5em;position:absolute;top:.5em;left:-1.25rem;transform:translateX(15%)}
details[open]>summary::before{border:solid transparent;border-top:solid;border-width:.5em .3em 0;transform:translateY(15%)}
details>summary::after{content:"";width:1.25rem;height:1em;position:absolute;top:.3em;left:-1.25rem}
.admonitionblock td.content>.title,.audioblock>.title,.exampleblock>.title,.imageblock>.title,.listingblock>.title,.literalblock>.title,.stemblock>.title,.openblock>.title,.paragraph>.title,.quoteblock>.title,table.tableblock>.title,.verseblock>.title,.videoblock>.title,.dlist>.title,.olist>.title,.ulist>.title,.qlist>.title,.hdlist>.title{text-rendering:optimizeLegibility;text-align:left;font-family:"Noto Serif","DejaVu Serif",serif;font-size:1rem;font-style:italic}
table.tableblock.fit-content>caption.title{white-space:nowrap;width:0}
.paragraph.lead>p,#preamble>.sectionbody>[class=paragraph]:first-of-type p{font-size:1.21875em;line-height:1.6;color:rgba(0,0,0,.85)}
.admonitionblock>table{border-collapse:separate;border:0;background:none;width:100%}
.admonitionblock>table td.icon{text-align:center;width:80px}
.admonitionblock>table td.icon img{max-width:none}
.admonitionblock>table td.icon .title{font-weight:bold;font-family:"Open Sans","DejaVu Sans",sans-serif;text-transform:uppercase}
.admonitionblock>table td.content{padding-left:1.125em;padding-right:1.25em;border-left:1px solid #dddddf;color:rgba(0,0,0,.6);word-wrap:anywhere}
.admonitionblock>table td.content>:last-child>:last-child{margin-bottom:0}
.exampleblock>.content{border:1px solid #e6e6e6;margin-bottom:1.25em;padding:1.25em;background:#fff;border-radius:4px}
.sidebarblock{border:1px solid #dbdbd6;margin-bottom:1.25em;padding:1.25em;background:#f3f3f2;border-radius:4px}
.sidebarblock>.content>.title{color:#7a2518;margin-top:0;text-align:center}
.exampleblock>.content>:first-child,.sidebarblock>.content>:first-child{margin-top:0}
.exampleblock>.content>:last-child,.exampleblock>.content>:last-child>:last-child,.exampleblock>.content .olist>ol>li:last-child>:last-child,.exampleblock>.content .ulist>ul>li:last-child>:last-child,.exampleblock>.content .qlist>ol>li:last-child>:last-child,.sidebarblock>.content>:last-child,.sidebarblock>.content>:last-child>:last-child,.sidebarblock>.content .olist>ol>li:last-child>:last-child,.sidebarblock>.content .ulist>ul>li:last-child>:last-child,.sidebarblock>.content .qlist>ol>li:last-child>:last-child{margin-bottom:0}
.literalblock pre,.listingblock>.content>pre{border-radius:4px;overflow-x:auto;padding:1em;font-size:.8125em}
@media screen and (min-width:768px){.literalblock pre,.listingblock>.content>pre{font-size:.90625em}}
@media screen and (min-width:1280px){.literalblock pre,.listingblock>.content>pre{font-size:1em}}
.literalblock pre,.listingblock>.content>pre:not(.highlight),.listingblock>.content>pre[class=highlight],.listingblock>.content>pre[class^="highlight "]{background:#f7f7f8}
.literalblock.output pre{color:#f7f7f8;background:rgba(0,0,0,.9)}
.listingblock>.content{position:relative}
.listingblock code[data-lang]::before{display:none;content:attr(data-lang);position:absolute;font-size:.75em;top:.425rem;right:.5rem;line-height:1;text-transform:uppercase;color:inherit;opacity:.5}
.listingblock:hover code[data-lang]::before{display:block}
.listingblock.terminal pre .command::before{content:attr(data-prompt);padding-right:.5em;color:inherit;opacity:.5}
.listingblock.terminal pre .command:not([data-prompt])::before{content:"$"}
.listingblock pre.highlightjs{padding:0}
.listingblock pre.highlightjs>code{padding:1em;border-radius:4px}
.listingblock pre.prettyprint{border-width:0}
.prettyprint{background:#f7f7f8}
pre.prettyprint .linenums{line-height:1.45;margin-left:2em}
pre.prettyprint li{background:none;list-style-type:inherit;padding-left:0}
pre.prettyprint li code[data-lang]::before{opacity:1}
pre.prettyprint li:not(:first-child) code[data-lang]::before{display:none}
table.linenotable{border-collapse:separate;border:0;margin-bottom:0;background:none}
table.linenotable td[class]{color:inherit;vertical-align:top;padding:0;line-height:inherit;white-space:normal}
table.linenotable td.code{padding-left:.75em}
table.linenotable td.linenos,pre.pygments .linenos{border-right:1px solid;opacity:.35;padding-right:.5em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}
pre.pygments span.linenos{display:inline-block;margin-right:.75em}
.quoteblock{margin:0 1em 1.25em 1.5em;display:table}
.quoteblock:not(.excerpt)>.title{margin-left:-1.5em;margin-bottom:.75em}
.quoteblock blockquote,.quoteblock p{color:rgba(0,0,0,.85);font-size:1.15rem;line-height:1.75;word-spacing:.1em;letter-spacing:0;font-style:italic;text-align:justify}
.quoteblock blockquote{margin:0;padding:0;border:0}
.quoteblock blockquote::before{content:"\201c";float:left;font-size:2.75em;font-weight:bold;line-height:.6em;margin-left:-.6em;color:#7a2518;text-shadow:0 1px 2px rgba(0,0,0,.1)}
.quoteblock blockquote>.paragraph:last-child p{margin-bottom:0}
.quoteblock .attribution{margin-top:.75em;margin-right:.5ex;text-align:right}
.verseblock{margin:0 1em 1.25em}
.verseblock pre{font-family:"Open Sans","DejaVu Sans",sans-serif;font-size:1.15rem;color:rgba(0,0,0,.85);font-weight:300;text-rendering:optimizeLegibility}
.verseblock pre strong{font-weight:400}
.verseblock .attribution{margin-top:1.25rem;margin-left:.5ex}
.quoteblock .attribution,.verseblock .attribution{font-size:.9375em;line-height:1.45;font-style:italic}
.quoteblock .attribution br,.verseblock .attribution br{display:none}
.quoteblock .attribution cite,.verseblock .attribution cite{display:block;letter-spacing:-.025em;color:rgba(0,0,0,.6)}
.quoteblock.abstract blockquote::before,.quoteblock.excerpt blockquote::before,.quoteblock .quoteblock blockquote::before{display:none}
.quoteblock.abstract blockquote,.quoteblock.abstract p,.quoteblock.excerpt blockquote,.quoteblock.excerpt p,.quoteblock .quoteblock blockquote,.quoteblock .quoteblock p{line-height:1.6;word-spacing:0}
.quoteblock.abstract{margin:0 1em 1.25em;display:block}
.quoteblock.abstract>.title{margin:0 0 .375em;font-size:1.15em;text-align:center}
.quoteblock.excerpt>blockquote,.quoteblock .quoteblock{padding:0 0 .25em 1em;border-left:.25em solid #dddddf}
.quoteblock.excerpt,.quoteblock .quoteblock{margin-left:0}
.quoteblock.excerpt blockquote,.quoteblock.excerpt p,.quoteblock .quoteblock blockquote,.quoteblock .quoteblock p{color:inherit;font-size:1.0625rem}
.quoteblock.excerpt .attribution,.quoteblock .quoteblock .attribution{color:inherit;font-size:.85rem;text-align:left;margin-right:0}
p.tableblock:last-child{margin-bottom:0}
td.tableblock>.content{margin-bottom:1.25em;word-wrap:anywhere}
td.tableblock>.content>:last-child{margin-bottom:-1.25em}
table.tableblock,th.tableblock,td.tableblock{border:0 solid #dedede}
table.grid-all>*>tr>*{border-width:1px}
table.grid-cols>*>tr>*{border-width:0 1px}
table.grid-rows>*>tr>*{border-width:1px 0}
table.frame-all{border-width:1px}
table.frame-ends{border-width:1px 0}
table.frame-sides{border-width:0 1px}
table.frame-none>colgroup+*>:first-child>*,table.frame-sides>colgroup+*>:first-child>*{border-top-width:0}
table.frame-none>:last-child>:last-child>*,table.frame-sides>:last-child>:last-child>*{border-bottom-width:0}
table.frame-none>*>tr>:first-child,table.frame-ends>*>tr>:first-child{border-left-width:0}
table.frame-none>*>tr>:last-child,table.frame-ends>*>tr>:last-child{border-right-width:0}
table.stripes-all>*>tr,table.stripes-odd>*>tr:nth-of-type(odd),table.stripes-even>*>tr:nth-of-type(even),table.stripes-hover>*>tr:hover{background:#f8f8f7}
th.halign-left,td.halign-left{text-align:left}
th.halign-right,td.halign-right{text-align:right}
th.halign-center,td.halign-center{text-align:center}
th.valign-top,td.valign-top{vertical-align:top}
th.valign-bottom,td.valign-bottom{vertical-align:bottom}
th.valign-middle,td.valign-middle{vertical-align:middle}
table thead th,table tfoot th{font-weight:bold}
tbody tr th{background:#f7f8f7}
tbody tr th,tbody tr th p,tfoot tr th,tfoot tr th p{color:rgba(0,0,0,.8);font-weight:bold}
p.tableblock>code:only-child{background:none;padding:0}
p.tableblock{font-size:1em}
ol{margin-left:1.75em}
ul li ol{margin-left:1.5em}
dl dd{margin-left:1.125em}
dl dd:last-child,dl dd:last-child>:last-child{margin-bottom:0}
li p,ul dd,ol dd,.olist .olist,.ulist .ulist,.ulist .olist,.olist .ulist{margin-bottom:.625em}
ul.checklist,ul.none,ol.none,ul.no-bullet,ol.no-bullet,ol.unnumbered,ul.unstyled,ol.unstyled{list-style-type:none}
ul.no-bullet,ol.no-bullet,ol.unnumbered{margin-left:.625em}
ul.unstyled,ol.unstyled{margin-left:0}
li>p:empty:only-child::before{content:"";display:inline-block}
ul.checklist>li>p:first-child{margin-left:-1em}
ul.checklist>li>p:first-child>.fa-square-o:first-child,ul.checklist>li>p:first-child>.fa-check-square-o:first-child{width:1.25em;font-size:.8em;position:relative;bottom:.125em}
ul.checklist>li>p:first-child>input[type=checkbox]:first-child{margin-right:.25em}
ul.inline{display:flex;flex-flow:row wrap;list-style:none;margin:0 0 .625em -1.25em}
ul.inline>li{margin-left:1.25em}
.unstyled dl dt{font-weight:400;font-style:normal}
ol.arabic{list-style-type:decimal}
ol.decimal{list-style-type:decimal-leading-zero}
ol.loweralpha{list-style-type:lower-alpha}
ol.upperalpha{list-style-type:upper-alpha}
ol.lowerroman{list-style-type:lower-roman}
ol.upperroman{list-style-type:upper-roman}
ol.lowergreek{list-style-type:lower-greek}
.hdlist>table,.colist>table{border:0;background:none}
.hdlist>table>tbody>tr,.colist>table>tbody>tr{background:none}
td.hdlist1,td.hdlist2{vertical-align:top;padding:0 .625em}
td.hdlist1{font-weight:bold;padding-bottom:1.25em}
td.hdlist2{word-wrap:anywhere}
.literalblock+.colist,.listingblock+.colist{margin-top:-.5em}
.colist td:not([class]):first-child{padding:.4em .75em 0;line-height:1;vertical-align:top}
.colist td:not([class]):first-child img{max-width:none}
.colist td:not([class]):last-child{padding:.25em 0}
.thumb,.th{line-height:0;display:inline-block;border:4px solid #fff;box-shadow:0 0 0 1px #ddd}
.imageblock.left{margin:.25em .625em 1.25em 0}
.imageblock.right{margin:.25em 0 1.25em .625em}
.imageblock>.title{margin-bottom:0}
.imageblock.thumb,.imageblock.th{border-width:6px}
.imageblock.thumb>.title,.imageblock.th>.title{padding:0 .125em}
.image.left,.image.right{margin-top:.25em;margin-bottom:.25em;display:inline-block;line-height:0}
.image.left{margin-right:.625em}
.image.right{margin-left:.625em}
a.image{text-decoration:none;display:inline-block}
a.image object{pointer-events:none}
sup.footnote,sup.footnoteref{font-size:.875em;position:static;vertical-align:super}
sup.footnote a,sup.footnoteref a{text-decoration:none}
sup.footnote a:active,sup.footnoteref a:active,#footnotes .footnote a:first-of-type:active{text-decoration:underline}
#footnotes{padding-top:.75em;padding-bottom:.75em;margin-bottom:.625em}
#footnotes hr{width:20%;min-width:6.25em;margin:-.25em 0 .75em;border-width:1px 0 0}
#footnotes .footnote{padding:0 .375em 0 .225em;line-height:1.3334;font-size:.875em;margin-left:1.2em;margin-bottom:.2em}
#footnotes .footnote a:first-of-type{font-weight:bold;text-decoration:none;margin-left:-1.05em}
#footnotes .footnote:last-of-type{margin-bottom:0}
#content #footnotes{margin-top:-.625em;margin-bottom:0;padding:.75em 0}
div.unbreakable{page-break-inside:avoid}
.big{font-size:larger}
.small{font-size:smaller}
.underline{text-decoration:underline}
.overline{text-decoration:overline}
.line-through{text-decoration:line-through}
.aqua{color:#00bfbf}
.aqua-background{background:#00fafa}
.black{color:#000}
.black-background{background:#000}
.blue{color:#0000bf}
.blue-background{background:#0000fa}
.fuchsia{color:#bf00bf}
.fuchsia-background{background:#fa00fa}
.gray{color:#606060}
.gray-background{background:#7d7d7d}
.green{color:#006000}
.green-background{background:#007d00}
.lime{color:#00bf00}
.lime-background{background:#00fa00}
.maroon{color:#600000}
.maroon-background{background:#7d0000}
.navy{color:#000060}
.navy-background{background:#00007d}
.olive{color:#606000}
.olive-background{background:#7d7d00}
.purple{color:#600060}
.purple-background{background:#7d007d}
.red{color:#bf0000}
.red-background{background:#fa0000}
.silver{color:#909090}
.silver-background{background:#bcbcbc}
.teal{color:#006060}
.teal-background{background:#007d7d}
.white{color:#bfbfbf}
.white-background{background:#fafafa}
.yellow{color:#bfbf00}
.yellow-background{background:#fafa00}
span.icon>.fa{cursor:default}
a span.icon>.fa{cursor:inherit}
.admonitionblock td.icon [class^="fa icon-"]{font-size:2.5em;text-shadow:1px 1px 2px rgba(0,0,0,.5);cursor:default}
.admonitionblock td.icon .icon-note::before{content:"\f05a";color:#19407c}
.admonitionblock td.icon .icon-tip::before{content:"\f0eb";text-shadow:1px 1px 2px rgba(155,155,0,.8);color:#111}
.admonitionblock td.icon .icon-warning::before{content:"\f071";color:#bf6900}
.admonitionblock td.icon .icon-caution::before{content:"\f06d";color:#bf3400}
.admonitionblock td.icon .icon-important::before{content:"\f06a";color:#bf0000}
.conum[data-value]{display:inline-block;color:#fff!important;background:rgba(0,0,0,.8);border-radius:50%;text-align:center;font-size:.75em;width:1.67em;height:1.67em;line-height:1.67em;font-family:"Open Sans","DejaVu Sans",sans-serif;font-style:normal;font-weight:bold}
.conum[data-value] *{color:#fff!important}
.conum[data-value]+b{display:none}
.conum[data-value]::after{content:attr(data-value)}
pre .conum[data-value]{position:relative;top:-.125em}
b.conum *{color:inherit!important}
.conum:not([data-value]):empty{display:none}
dt,th.tableblock,td.content,div.footnote{text-rendering:optimizeLegibility}
h1,h2,p,td.content,span.alt,summary{letter-spacing:-.01em}
p strong,td.content strong,div.footnote strong{letter-spacing:-.005em}
p,blockquote,dt,td.content,td.hdlist1,span.alt,summary{font-size:1.0625rem}
p{margin-bottom:1.25rem}
.sidebarblock p,.sidebarblock dt,.sidebarblock td.content,p.tableblock{font-size:1em}
.exampleblock>.content{background:#fffef7;border-color:#e0e0dc;box-shadow:0 1px 4px #e0e0dc}
.print-only{display:none!important}
@page{margin:1.25cm .75cm}
@media print{*{box-shadow:none!important;text-shadow:none!important}
html{font-size:80%}
a{color:inherit!important;text-decoration:underline!important}
a.bare,a[href^="#"],a[href^="mailto:"]{text-decoration:none!important}
a[href^="http:"]:not(.bare)::after,a[href^="https:"]:not(.bare)::after{content:"(" attr(href) ")";display:inline-block;font-size:.875em;padding-left:.25em}
abbr[title]{border-bottom:1px dotted}
abbr[title]::after{content:" (" attr(title) ")"}
pre,blockquote,tr,img,object,svg{page-break-inside:avoid}
thead{display:table-header-group}
svg{max-width:100%}
p,blockquote,dt,td.content{font-size:1em;orphans:3;widows:3}
h2,h3,#toctitle,.sidebarblock>.content>.title{page-break-after:avoid}
#header,#content,#footnotes,#footer{max-width:none}
#toc,.sidebarblock,.exampleblock>.content{background:none!important}
#toc{border-bottom:1px solid #dddddf!important;padding-bottom:0!important}
body.book #header{text-align:center}
body.book #header>h1:first-child{border:0!important;margin:2.5em 0 1em}
body.book #header .details{border:0!important;display:block;padding:0!important}
body.book #header .details span:first-child{margin-left:0!important}
body.book #header .details br{display:block}
body.book #header .details br+span::before{content:none!important}
body.book #toc{border:0!important;text-align:left!important;padding:0!important;margin:0!important}
body.book #toc,body.book #preamble,body.book h1.sect0,body.book .sect1>h2{page-break-before:always}
.listingblock code[data-lang]::before{display:block}
#footer{padding:0 .9375em}
.hide-on-print{display:none!important}
.print-only{display:block!important}
.hide-for-print{display:none!important}
.show-for-print{display:inherit!important}}
@media amzn-kf8,print{#header>h1:first-child{margin-top:1.25rem}
.sect1{padding:0!important}
.sect1+.sect1{border:0}
#footer{background:none}
#footer-text{color:rgba(0,0,0,.6);font-size:.9em}}
@media amzn-kf8{#header,#content,#footnotes,#footer{padding:0}}
</style>
</head>
<body class="article">
<div id="header">
</div>
<div id="content">
</div>
<div id="footer">
<div id="footer-text">
</div>
</div>
</body>
</html>
```

## Terminal

### Install

``` npm install ```

### Test

``` npx vitest ``` or ``` npm run test ```

### Build

``` npx vite build ``` or ``` npm run build ```

### Dev Server

``` npx vite ``` or ``` docker-compose up ``` or ``` npm run start ``` or ``` npm run dev -- --host ```

## Historia

Z 8 lat temu dzięki nadludzkim umiejętnościom udało mi się stworzyć jedyną gildię, 
która zakończyła erę w jednym z klonów Vallheru. Tak nauczyłem się PHP 4/5. 
Po wielkim zwycięstwie dyskutowaliśmy sobie jak tu zmienić świat na lepsze i 
pomyślałem sobie tak: 

1. Nikt nie chce klikać w mikroskopijne linki. Pozornie pomaga ale nie rozwiązuje przyczyny.
2. W kodzie źródłowym jest mnóstwo nagłych teleportów, wyłączonych funkcjonalności i czystej magii.
   - Im częściej bawisz się w górnika, tym większa szansa na śmierć. W kodzie nic o tym nie ma.
   - Próbując wprowadzać małą zmianę możesz niechcący zepsuć coś innego.
3. Badania pokazują, że ludzie szukają czegoś gdzie można dać własne teksty + zdjęcia,
   a nie gry którą podobno można modyfikować do swoich potrzeb.
   - Pamiętam jak zastępczyni króla stwierdziła, że robiła jakieś tam zmiany w tekstach
     ale cała reszta wymaga większych umiejętności.
4. Nikt nie wie jaki jest cel tej gry. Ani jak ją wygrać.   
5. Patrząc na gry z czasów legendarnego Adobe Air i Adobe Flasha widzę dwa schematy:
   - Albo masz mało czasu na odkrycie gry, więc musisz grać po kilka razy.
   - Albo mamy pozornie szczęśliwe miejsce, które musi ulec całkowitej zagładzie ze względu na
     strukturę dowodzenia albo ideologię. MLP i Deponia też się w to wpisują.
     - Zwróć uwagę, że po oficjalnym zakończeniu kontynuacja "na siłę" doprowadza do coraz
       gorszego końca.
     - Coraz mocniej też widać, że trafiliśmy na bardzo rzadki okres, kiedy
       działo się cokolwiek ciekawego.
   - Mi się najbardziej podobają gry w stylu: wszystko chce Cię zabić, niby możesz znajdować
     kolejnych członków drużyny i NPCów w losowych miejscach ale niektórzy z nich sprawią
     więcej problemów, niż jest to warte. Albo wręcz doprowadzą do złego zakończenia.
6. Najlepiej chyba zrobić podstawowy szablon swojej gry, którą zapakuję w oryginalne teksty,
   mechaniki i grafiki z Vallheru 1.6, czy Orodlina. Pisanie rozszerzeń będzie łatwiejsze,
   a z zewnątrz będzie wyglądać niemal identycznie jak oryginał.

w XXI wieku nie chciało mi się płacić za internet 10-20 mbps. Mam więc darmowy 2G, co nieco spowalnia mi pracę.

Zresztą albo się zastanawiam jakie problemy mogą się pojawić, zamiast robić. Albo czy rzeczywiście byłbym w 
stanie zrobić dobrą historię w stylu fantasy ? W końcu czasy, kiedy losowi ludzie pisali losowe postacie i 
losowe przygody w jednym uniwersum minęły gdzieś we wczesnych latach zerowych.

Nawet gdyby to coś powstało to nikt już na mnie nie czeka. Jeszcze początkowo chciałem zrobić coś w stylu oświeconym. 
Jak w tych blogach: zrób mniejszy projekt → wyślij w CV do bylejakiej firmy → spróbuj nie umrzeć z nudów → a dalej się zobaczy. 
Teraz wiem, że posiadanie jakiejkolwiek wiedzy zmniejsza szansę przyjęcia nawet o 90%. Tylko nie mam dowodów. 
Wystarczy przynależność to światowej sekty jak: tęczowi neomarksiści, życie białych czarnoskórych nie ma znaczenia  
albo szkolne kółka zainteresowań.

Na ten moment mam:
- Prototyp zapisu/wczytania gry wieloosobowej.
- Jakieś eksperymenty z wyświetlaniem statystyk i przekazywaniem ich wtyczkom.
- Różne formy plików konfiguracyjnych.
- Eksperymenty z wykorzystaniem statystyk z Generatora map Azgaar'a.

  Albo wszystko czego potrzebowałem albo zupełnie nic w zależności jak się na to spojrzy.

## ToDo

- Mobilki: # Tutaj chcę stworzyć coś jak https://twinery.org/
  - writing-mode: sideways-rl; albo writing-mode: vertical-lr;
    - text-orientation: upright;
  - transform: rotate(0.25turn); albo transform: rotate(90deg);
- https://web.archive.org/web/20240526085357/https://minicss.us/docs.htm
- Mogę zrobić aliasy dla objektów z Nette Entity
- Spojrzeć na https://www.npmjs.com/package/eslint-plugin-project-structure i https://www.npmjs.com/package/eslint-plugin-testing-library#:~:text=ESLint%20plugin%20to%20follow%20best%20practices

All rights belong to their respective owners.

### Neon

https://ehrpg.github.io/qstar/

Trzeba przepisać JSON Schema na https://github.com/matej21/neon-js

https://www.npmjs.com/package/to-json-schema

Źle się za to zabieram ... jeden duży NEON trzeba rozbić na mniejsze Schemy.

```yaml
$id: https://json-schema.hyperjump.io/schema
$schema: https://json-schema.org/draft/2020-12/schema
type: array
items:
  type: object
  properties:
    key:
      type: string
    value:
      anyOf:
        - type: string
        - type: object
          properties:
            _items:
              type: array
              items:
                type: object
                properties:
                  key:
                    anyOf:
                      - type: string
                      - type: number

```

```json
[
    {
        "key": "name",
        "value": "test"
    },
    {
        "key": "description",
        "value": "test"
    },
    {
        "key": "avatar",
        "value": {
            "_items": [
                {
                    "key": "male",
                    "value": "https://myhost.eu/image.webp"
                },
                {
                    "key": "female",
                    "value": "https://myhost.eu/image.webp"
                },
                {
                    "key": "awidth",
                    "value": 1
                },
                {
                    "key": "aheight",
                    "value": 1
                }
            ],
            "_indexes": {
                "male": 0,
                "female": 1,
                "awidth": 2,
                "aheight": 3
            },
            "_key": 0,
            "length": 4
        }
    },
    {
        "key": "extra",
        "value": {
            "_items": [
                {
                    "key": 0,
                    "value": {
                        "value": "heritage",
                        "attributes": {
                            "_items": [
                                {
                                    "key": 0,
                                    "value": "test"
                                }
                            ],
                            "_indexes": {
                                "0": 0
                            },
                            "_key": 1,
                            "length": 1
                        }
                    }
                },
                {
                    "key": 1,
                    "value": {
                        "value": "skills",
                        "attributes": {
                            "_items": [
                                {
                                    "key": 0,
                                    "value": "test"
                                }
                            ],
                            "_indexes": {
                                "0": 0
                            },
                            "_key": 1,
                            "length": 1
                        }
                    }
                },
                {
                    "key": 2,
                    "value": {
                        "value": "attributes",
                        "attributes": {
                            "_items": [
                                {
                                    "key": 0,
                                    "value": "test"
                                }
                            ],
                            "_indexes": {
                                "0": 0
                            },
                            "_key": 1,
                            "length": 1
                        }
                    }
                }
            ],
            "_indexes": {
                "0": 0,
                "1": 1,
                "2": 2
            },
            "_key": 3,
            "length": 3
        }
    }
]
```

```neon
name = test
description = test

avatar = [ 
male    = https://myhost.eu/image.webp
female  = https://myhost.eu/image.webp
awidth  = 1
aheight = 1
]

extra:
- heritage (
test
)
- skills (
test
)
- attributes (
test
)
```

```js
import * as neon from 'neon-js'

try {
  const neo = `
name = test
description = test

avatar = [ 
male    = https://myhost.eu/image.webp
female  = https://myhost.eu/image.webp
awidth  = 1
aheight = 1
]

extra:
- heritage (
test
)
- skills (
test
)
- attributes (
test
)
  `
  const result = neon.decode(neo)
  console.log(JSON.stringify(result.items()))
} catch (e) {
  if (e instanceof neon.Error) {
    console.log(e.message);
  }
  throw e;
}
```

### Wydajność

Generalnie sprawdzanie wydajności w testach wydaje mi się pozbawione sensu ale istnieje 
```js
//https://jestjs.io/docs/timer-mocks
jest.useFakeTimers({timerLimit: 100});
```

Origin Private Filesystem nie jest wspierany w trybie incognito. Zrobić fallback do IDB.

### Deprecated

Jako samouk mam obowiązek korzystania w pierwszej kolejności z funkcji wbudowanych 
w przeglądarkę. SolidJS jeszcze przeszło, bo sam zrobiłbym coś podobnego. Żadnych 
większych strat w rozmiarze dokumentu, czy szybkości ładowania strony.

Ale IndexedDB nie jestem pewny. Do tego będzie się teraz wyświetlać nieistotne ostrzeżenie: 
```computations created outside a `createRoot` or `render` will never be disposed```. 

Szczególnie zastanawia mnie przypadek Windowsa XP. Korzystałem z niego i wiem, że 
system lubi wyrzucać bluescreena jeśli w tle odbywa się zbyt wiele operacji jednocześnie. 
To dlatego pierwszym rozszerzeniem zwykle jest NoScript. Pytanie jest o tyle istotne, że 
Dexie zdaje się wspierać wszystko z pełnym wsparciem dla IndexedDB.

#### Dexie - mniej znnae funkcje

```js
import { add } from "dexie";

db.friends.update(friend.id, {
  hobbies: add([
    "skating",
    "football"
  ])
});
import { remove } from "dexie";

db.friends.update(friend.id, {
  hobbies: remove([
    "curling"
  ])
});
```

## Tłumaczenie

**Ta sekcja jest czysto notatkowa i gdybająca.**

Jak powszechnie wiadomo polski jest najważniejszym językiem świata. 
Wspiera odmiany przez przypadki, czas męsko- i nie-męsko- -osobowy oraz 
powtarzanie spółgłosek (nauczycielka od niemieckiego i niemka z urodzenia 
mówiła na to rolowanie czy jakoś tak).

Tymczasem język prymitywny, stworzony przez kosmitów z myślą o sztucznej inteligencji 
-- znany również jako angielski -- nie jest przygotowany na naszą gramatykę. 
To właśnie dlatego tradycyjne tłumaczenie słownikowe wygląda tak źle. Dla Google 
Tłumacza wszystkie przypadki są zamieniane na formę podstawową. Albo Crusader Kings II po polsku. 

### Emoji

Tak sobie myślę i czysto teoretycznie nie ma żadnych przeciwskazań dla użycia 
pisma obrazkowego zamiast tekstu w normalnym języku. Po dodaniu komentarzy 
co tu jest podmiotem, orzeczeniem i resztą mógłbym nawet generować polski zaawansowany.

Gdzie się podziały te czasy, gdy Unicode walczył o jak najmniejszą ilość znaków ? 
Teraz potrzebna jest cała [EmojiPedia](https://emojis.wiki/) by poznać nowo-prostacko-obrazkowy. 
Jeszcze ostatnio trafiłem na 🪝💦 jako łowienie ryb. Jeszcze trochę i przejdziemy na japoński.

Wracając, z tego co widzę mam tu czasowniki i rzeczowniki. Resztę trzeba wymusić na odbiorcy. 
Powiedzmy, że miałem tekst idę dalej. Teraz mam 🚶. Ale zamiast poszedłem ? 
🚶🌅 = 🌅🚶 Może użyję 🔙🚶, a może oznacza to zawróć ? 🚶🔜 czy 🔜🚶 ? 
Oczywiście zamiast zrobiłem X w przeszłości i teraz wpływa to na Y mam 
miliardy gender neutralnych identycznych emotek i ich wariacji z kolorami skóry. 


### Dalsza część

Niemiecki ma nie tylko odmiany ale również korzysta z nazw łacińskich: 

- Nominative = Mianownik
- Accusative = Biernik
- Genitive = Dopełniacz
- Dative = Celownik
- Instrumental = Narzędnik
- Locative = Miejscownik
- Vocative = Wołacz

Wszystkie 7 przypadków jest do odszukania w anglojęzycznym internecie. 
Teoretycznie wystarczy użyć ideologii Chata GPT, czyli wszystkie słowa 
zapisać jako **słowo-rzeczownik-męski-pojedynczy-biernik-nieformalny-emocja:smutek**. 
Tak działa DeepL. Czasem zdarza mu się zarzucać jakąś dziwną gwarą (np. 
zamiast *cargo* pisze *transport*) ale na ogół ma rację.

Tylko teraz: chcę, by plik tłumaczeń był odczytywany przez wszystkie 
urządzenia i języki programowania świata. Tak jakbym w przyszłości chciał 
przejść na androida albo grafikę 2D. Noi jeśli skorzystam z 40 letniego 
programu całość będzie wyglądać dość dziwnie i będzie wiecznie wyrzucać 
ostrzeżenia o brakujących tłumaczeniach. 

Mysłałem o po2json albo poedit.

Ale później patrzę sobie na [context-group](https://stackoverflow.com/questions/46822326/what-is-context-group-in-xliff#:~:text=The%20%3Ccontext-group%3E%20element%20holds%20context%20elements%20relating%20to,be%20named%2C%20allowing%20different%20uses%20for%20each%20group.) 
oraz alt-trans. Więcej: https://www.w3.org/International/its/wiki/XLIFF_Mapping i oficjalne https://www.oasis-open.org/committees/xliff/faq.php

XLIFF 2.1 ma niemalże zero rozszerzeń ale nie powinien być aż tak trudny w użyciu. 
Szczególnie, że istnieje *js-xml*. W podobny sposób mógłbym przenosić tłumaczenia na nowe języki programowania. 

Końcówkka: xlif2

Przykłady z: https://multilingual.com/article/201406-42.pdf
```html
 <p lang="en">He bought a yellow car. He loves yellow.</p>
```
```xliff
<unit id="1">
 <segment>
  <source>He bought a yellow car. </source>
  <target order="2">Il a acheté une voiture jaune.</
 target>
 </segment>
 <segment>
  <source>He loves yellow.</source>
  <target order="1">Il adore le jaune. </target>
 </segment>
 </unit>
```
```xml
<unit id="1">
 <segment id="1">
  <source>First sentence. </source>
  <target>Première phrase. </target>
 </segment>
 <segment id="2">
  <source>Second sentence.</source>
  <target>Deuxième phrase.</target>
 </segment>
 </unit>
```
```xlif2
 <unit id="u123">
 <mtc:matches>
  <mtc:match id="1" ref="#m1" type="mt" origin="MS
Translator-Hub" similarity="100">
   <source>He is a good friend of mine.</source>
   <target>Il est un bon ami à moi.</target>
  </mtc:match>
 <mtc:match id="2" ref="#1" type="tm" origin="myTM" 
similarity="97">
   <source>Good friends</source>
   <target>Bons amis</target>
  </mtc:match>
 </mtc:matches>
 <segment>
 <source><mrk id="m1" type="mtc:match">He is a <pc id="1" 
type="fmt">good friend</pc> of mine.</mrk></source>
 </segment>
 </unit>
```

Teoretycznie mogę dzielić zdania na mniejsze ale moja teoria wciąż jest aktualna. 
Jako oryginalne źródło muszę dać wystarczająco dużo informacji, by ktoś mógł 
powiedzmy na pierwszy rzut oka rozpoznać czas w angielskim jakiego użyć. Albo jak 
w jego języku jest 5 odmian, żeby wiedział które gdzie użyć. Bez doświadczenia 
nie jestem w stanie tego zrobić. A może ?

W każdym bądź razie XML został uśmiercony, bo za długo się w nim pisze. 
I nie określa niczego po za własnymi rozszerzeniami. Jednocześnie wymuszając 
stosowanie podstawowych zasad albo nie uruchomi się w ogóle. Po przetłumaczeniu 
na prostszy w edycji JSON uzyskam super format. 

CzytaćPóźniej:

- https://stackoverflow.com/questions/7665274/gettext-automatic-comments-generation 
- https://github.com/vslavik/poedit/issues/618
- https://github.com/vslavik/poedit/issues/752
- https://github.com/vslavik/poedit/issues/586
- VS Code -> rvanbekkum.xliff-sync
- https://github.com/locize/xliff
- https://github.com/forsatus/Xliff-AI-Translator


## Zakres

Zdaje się, że nazywają to upośledzoną architekturą sześcianów w duchu Androidowskim. 

Mamy tu jednocześnie kod przeglądarkowy, serwer budujący aplikację oraz implementację niestandardowego protokołu Ardoonga.

### Middle

Nowe strony utwórz w **src/ui/middle**. Później zamienię je automatycznie na pliki HTML o tej samej nazwie.

Jednocześnie obok ES6 dodaję CommonJS.

### onPageLoadList

src\data\onPageLoadList.js synchronizuje IndexedDB z Solid Stores.

W tym miejscu umieść wszystkie funkcje, które mają się załadować po uruchomieniu strony.

### Protokół

src/data/adapters odbiera wiadomości ze świata zewnętrznego. Protokół jest tworzony na bieżąco w [Postmanie](https://www.postman.com/). Jak powstanie stabilna wersja, to utworzę nowe repozytorium.

### Wydarzenia

src/data/eventsEmitters zwany w skrócie @/events wywołuje niestandardowe wydarzenia po otrzymaniu polecenia od adaptera.

### Komponenty

src/ui zwany w skrócie @/components zostanie dołączony do przetworzonych plików xhtml. <br /> 
**¡ Nie umieszczaj tutaj zależności serwerowych !** Tylko przeglądarkowy CSS3, XHTML5 i ES6.

Komponenty modyfikują treść po otrzymaniu niestandardowego wydarzenia.

#### SSR

Wyrzucony html zostanie dołączony do [ECR](https://crystal-lang.org/api/latest/ECR.html). 
Z tego powodu nie zajmujemy się nagłówkami serwera, czy autoryzacją.
Elementy fallback mogą korzystać z składni EJS/ERB i podobnych. 
```erb
{"<%= user.profile.name %>"}

<ul>
  {`<% users.forEach(function(user){ %>
    <%- include('user/show', {user: user}); %>
  <% }); %>`}
</ul>

{'<%%= foo %>'}
```

#### Pages

Zgodnie z konwencją ogólny szablon index.html wywołuje src/ui/index.jsx, który z kolei renderuje 
left.jsx (lewy panel), right.jsx(prawy panel) oraz środkową część z katalogu src/ui/pages/*.jsx.

#### CSS

##### CSS Modules

Domyślnie włączone, przygotowane z myślą o tym nowoczesnym stylu a´la Tailwind albo Bootstrap.

https://docs.solidjs.com/guides/styling-components/css-modules <br /> 
https://github.com/css-modules/css-modules/blob/master/docs/composition.md <br />
https://github.com/css-modules/css-modules/blob/master/docs/theming.md

```css
.base {}

/* Variants */
.normal { composes: base; /* ...  */ }
.alternate { composes: base; /* ... */ }

.normal:hover {}
```

##### SCSS

Ma bardziej tradycyjne podejście:

1. Chciałbym skorzystać z tego okropnego podejścia "pobierz jeden plik i strona od razu wygląda ładniej".
2. Pobieram więc Mini CSS ale brakuje mi przesuwanych tabelek.
3. Dodaję Picnic CSS i modlę się, by nie zepsuł mi całej strony.
4. Na zdjęciu w Figmie wszystko wyglądało nieco inaczej. Tworzę więc kilka własnych plików i łączę z Mini CSS.
5. Za chwilę zacznę się zastanawiać co zrobić z wersją mobilną.

Wszystkie pliki trzymane są w **src\ui\scss**. Widziałem już coś podobnego i na dziś wszystko jest nieczytelne. U mnie pewnie będzie podobnie.

Masz wybór albo CSS Modules albo SCSS (z tym mi się wygodniej pracuje). Dodatkowe wtyczki możemy brać z PostCSS. Kolory bierzemy z Figma's Material Theme Builder Baseline.

### Data

src/data znany również jako @/ zawiera wszystkie pliki serwerowe.

#### Decorators

W tym miejscu znajdują się wszystkie pliki, które nadpisują działanie istniejących funkcji. Na przykład chciałbym, by wygenerowany komponent został wklejony do HTML.

#### jsonSchema

Wszystkie pliki konfiguracyjne i wszystkie adaptery muszą być zgodne z określonymi tutaj regułami.

## Konfiguracja

### Asciidoc(tor)

```adoc 
[Rasa]
[fizycznie]
wzrost:: 100

[umiejętności]
siła:: 100
zręczność:: 100

[zdolności]
łuk::   +50
miecz:: -50
jazda_konna::          *2
jazda_na_wielbłądzie:: /2
```

```html
<div aria-labelledby="toggle1_preview" id="editorPreview">
    <div class="dlist fizycznie">
        <dl>
            <dt>wzrost</dt>
            <dd>
                <p>100</p>
            </dd>
        </dl>
    </div>
    <div class="dlist umiejętności">
        <dl>
            <dt>siła</dt>
            <dd>
                <p>100</p>
            </dd>
            <dt>zręczność</dt>
            <dd>
                <p>100</p>
            </dd>
        </dl>
    </div>
    <div class="dlist zdolności">
        <dl>
            <dt>łuk</dt>
            <dd>
                <p>+50</p>
            </dd>
            <dt>miecz</dt>
            <dd>
                <p>-50</p>
            </dd>
            <dt>jazda_konna</dt>
            <dd>
                <p>*2</p>
            </dd>
            <dt>jazda_na_wielbłądzie</dt>
            <dd>
                <p>/2</p>
            </dd>
        </dl>
    </div>
</div>
```

Trafiłem na to przez przypadek ale to po prostu genialne. 
Najczytelniejszy format jaki widziałem, niewrażliwy na spacje/taby, obsługuje zmienne i ... waży prawie 1MB. 
Co prawda od dawien dawna wszyscy powtarzają, by nie mieszać modeli i widoków ale co się może stać ? 
Tym bardziej, że parser html jest wbudowany wszędzie i jest równie szybki co wczytywanie danych z IndexedDB.

Zgodnie z nowym planem konwerter Asciidoc jest wbudowany w GitHuba. Większość danych będzie nieruchoma 
na przykład wspomniane rasy i ich bonusy. Więc nie muszę ich parsować po stronie przeglądarki. 

Problemem będą dopiero labirynty. Mając warunki i zmienne mógłbym z łatwością przekazywać dane od serwera. 
Ale co dalej? Po stronie przeglądarki pobieram skrypt z CDN na konkretnej stronie i gotowe. 
Gdybym jednak chciał wydać wersję bez JavaScriptu to muszę napisać prosty parser rozumiejący 
1% specyfikacji. Co doprowadzi do pytań "a czemu to nie działa"? Chyba, że bym oszukiwał i program 
dzieliłby ify na osobne pliki i w odpowiedniej chwili wczytywał gotowy HTML z dysku. 

Wracając, NEON prawdopodobnie zostanie wyrzucony. A rozwój ruszy do przodu. Użytkownik generuje sobie html, 
ja przepisuję wszystkie elementy wczytujące dane na WebComponenty. Trafia to do Solida, który oczyszcza 
kod strony. Wszystkie modele biorą się z jednego miejsca. Zamiast języków ludzkich stosuję emotki i podmieniam 
z pliku XLIFF na zmienne Asciidoc.

https://blog.adrgautier.co/til-how-to-write-a-web-component-with-solidjs

### Deprecated

Korzystamy z plików [neon](https://github.com/nette/neon).

Jak dla mnie format czytelny dla ludzi:

- Składa się z kilku łatwych do odróżnienia znaków.
- Nie powoduje problemów przy kopiowaniu i wklejaniu (Yaml się nie nadaje).
- Jest kompatybilny z innym szerzej stosowanym formatem plików.

Neon jest w pełni zgodny z JSON i w połowie z Yaml. Wygląda tak: 

### JSON Style

```neon
dzielnice3: [
 
biedy: [
dd
gg
(
vv = fffd
www = d
)
mm
]
 
bogata: [
hh
(ff: dd)
io
 
]]
```
```json
{
    "dzielnice2": {
        "biedy": [
            "dd",
            "gg",
            {
                "vv": "fffd",
                "www": "d"
            },
            "mm"
        ],
        "bogata": [
            "hh",
            {
                "ff": "dd"
            },
            "io"
        ]
    }
}
```

### Yaml Style

```yaml
dzielnice2:
  biedy:
    - dd
    - gg
    - vv: fffd
      www: d
    - mm
  bogata:
    - hh
    - ff: dd
    - io
```
```yaml
dzielnice1:
  biedy:
    - dd
    - gg
    - [vv: fffd, www: d]
    - mm
  bogata:
    - hh
    - ff: dd
    - io
```

### Rasa i Klasa

Mam to w osobnej notce ale w skrócie. 

U mnie nie ma konceptu klasy. Mam za to wyuczone umiejętności 
i wiem jak ich użyć do sprawdzenia, czy moja postać ma jedną z nich. 

Wzięło się to z pytania w fazie projektowej "Czy wojownicy mogą korzystać z magii"? 
Mogłem albo użyć przedmiotu z efektem (alchemia, jednorazowe zwoje) albo zaznaczyć sobie, 
że postać X poznała najbardziej podstawowy krąg magii.

Podobnie zamiast rasy mam szablony JSON Schema wysyłane przez ludzi. Tyle że opcjonalnie 
można je napisać w NEONie. Jest tylko jedna zasada: jeśli dodajesz X do umiejętności, 
musisz zabrać tyle samo z innej. Możesz też używać mnożenia dzielenia albo procentów 
na tej samej zasadzie. Żeby dało się tego użyć dopuszczalne będzie Y punktów różnicy. 
Czyli daję +15 do walki mieczem -10 do walki łukiem i sprawdzam, ile maksymalnie 
punktów mogę przekroczyć. Jak 5 lub więcej to zostaje, jak mniej to propozycja odrzucona.

## Known problems

### StackBlitz Out of memory ← Chromebook

1. Chrome → Ustawienia → Więcej narzędzi → Menedżer zadań
Zabij wszystko oprócz pierwszej pozycji, żeby wyczyścić wszystkie dane w przeglądarce.
2. Nie włączaj narzędzi deweloperskich, wybierz otwórz podgląd w nowym oknie.
Tutaj możesz spokojnie korzystać z konsoli.
3. Czyść terminal regularnie.
4. Zanim vite się nie uruchomi nie zamykaj okienka z pytaniem o instalację bota.

### NPM Permissions

1. Install Docker Desktop.
2. Run container.
3. In Docker Terminal: PS C:\Users\onliniak> docker exec -it --user=root ardoonga-client-node-1 /bin/sh
4. rm package-lock.json
5. npm cache validate
6. npm update --include=dev --verbose