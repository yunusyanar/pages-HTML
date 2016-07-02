 <head>
<meta charset='utf-8'/>
<meta content='width=device-width, initial-scale=1, maximum-scale=1' name='viewport'/>
<meta content='blogger' name='generator'/>
<meta content='text/html; charset=UTF-8' http-equiv='Content-Type'/>
<link href='http://www.blogger.com/openid-server.g' rel='openid.server'/>
<link expr:href='data:blog.homepageUrl' rel='openid.delegate'/>
<link expr:href='data:blog.url' rel='canonical'/>
<b:if cond='data:blog.pageType == &quot;index&quot;'>
<title><data:blog.pageTitle/></title>
<b:else/>
<b:if cond='data:blog.pageType != &quot;error_page&quot;'>
<title><data:blog.pageName/> - <data:blog.title/></title>
</b:if></b:if>
<b:if cond='data:blog.pageType == &quot;error_page&quot;'>
<title>Page Not Found - <data:blog.title/></title>
</b:if>
<b:if cond='data:blog.pageType == &quot;archive&quot;'>
<meta content='noindex' name='robots'/>
</b:if>
<b:if cond='data:blog.searchLabel'>
<meta content='noindex,nofollow' name='robots'/>
</b:if>
<b:if cond='data:blog.isMobile'>
<meta content='noindex,nofollow' name='robots'/>
</b:if>
<b:if cond='data:blog.pageType != &quot;error_page&quot;'>
<meta expr:content='data:blog.metaDescription' name='description'/>
<b:if cond='data:blog.homepageUrl != data:blog.url'>
<meta expr:content='data:blog.pageName + &quot;, &quot; + data:blog.pageTitle + &quot;, &quot; + data:blog.title' name='keywords'/>
</b:if></b:if>
<b:if cond='data:blog.url == data:blog.homepageUrl'>
<meta content='konu anlatımı,ders notu,ders özeti' name='keywords'/></b:if>
<link expr:href='data:blog.homepageUrl + &quot;feeds/posts/default&quot;' expr:title='data:blog.title + &quot; - Atom&quot;' rel='alternate' type='application/atom+xml'/>
<link expr:href='data:blog.homepageUrl + &quot;feeds/posts/default?alt=rss&quot;' expr:title='data:blog.title + &quot; - RSS&quot;' rel='alternate' type='application/rss+xml'/>
<link expr:href='&quot;http://www.blogger.com/feeds/&quot; + data:blog.blogId + &quot;/posts/default&quot;' expr:title='data:blog.title + &quot; - Atom&quot;' rel='alternate' type='application/atom+xml'/>
<b:if cond='data:blog.pageType == &quot;item&quot;'>
<b:if cond='data:blog.postImageThumbnailUrl'>
<link expr:href='data:blog.postImageThumbnailUrl' rel='image_src'/>
</b:if></b:if>
<b:if cond='data:blog.url == data:blog.homepageUrl'>
<b:if cond='data:blog.pageType == &quot;item&quot;'>
<b:if cond='data:blog.pageType == &quot;static_page&quot;'>
<b:if cond='data:blog.url'>
<meta expr:content='data:blog.url' property='og:url'/>
</b:if>
<meta expr:content='data:blog.title' property='og:site_name'/>
<b:if cond='data:blog.pageName'>
<meta expr:content='data:blog.pageName' property='og:title'/>
</b:if>
<meta content='website' property='og:type'/></b:if></b:if></b:if>
<b:if cond='data:blog.postImageThumbnailUrl'>
<meta expr:content='data:blog.postImageThumbnailUrl' property='og:image'/>
<b:else/></b:if>
<link href='https://yunusyanar.blogspot.com.tr/favicon.ico' rel='icon' type='image/x-icon'/>
<link href='https://plus.google.com/+yunussmx/posts' rel='publisher'/>
<link href='https://plus.google.com/+yunussmx/about' rel='author'/>
<link href='https://plus.google.com/+yunussmx' rel='me'/>
<meta content='CUMKefla6tokkjfnXAzgsZvM3hv9GbqbRDCKtLdOMlg' name='google-site-verification'/>
<meta content='xxxxxxxxxxxxxxx' name='msvalidate.01'/>
<meta content='xxxxxxxxxxxxxxx' name='alexaVerifyID'/>
<meta content='Istanbul, Turkey' name='geo.placename'/>
<meta content='Yunus Yanar' name='Author'/>
<meta content='general' name='rating'/>
<meta content='Turkey' name='geo.country'/>
<meta content='tr_TR' property='og:locale'/>
<meta content='en_us' property='og:locale:alternate'/>
<meta content='turkish' name='language'/>
<meta content='https://www.facebook.com/yanaryunusemre' property='article:author'/>
<meta content='https://www.facebook.com/yanaryunusemre' property='article:publisher'/>
<meta expr:content='data:blog.isMobile         ? &quot;width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0&quot;         : &quot;width=1100&quot;' name='viewport'/>
    <b:include data='blog' name='all-head-content'/>
    <title><data:blog.pageTitle/></title>

    <b:skin><![CDATA[/*
-----------------------------------------------
Blogger Template Style
Name:     Simple
Designer: Josh Peterson
URL:      www.noaesthetic.com
----------------------------------------------- */

/* Variable definitions
   ====================
   <Variable name="keycolor" description="Main Color" type="color" default="#66bbdd" value="#ffffff"/>

   <Group description="Page Text" selector="body">
     <Variable name="body.font" description="Font" type="font"
         default="normal normal 12px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="normal normal 16px Arial, Tahoma, Helvetica, FreeSans, sans-serif"/>
     <Variable name="body.text.color" description="Text Color" type="color" default="#222222" value="#000000"/>
   </Group>

   <Group description="Backgrounds" selector=".body-fauxcolumns-outer">
     <Variable name="body.background.color" description="Outer Background" type="color" default="#66bbdd" value="#274e13"/>
     <Variable name="content.background.color" description="Main Background" type="color" default="#ffffff" value="#f3f3f3"/>
     <Variable name="header.background.color" description="Header Background" type="color" default="transparent" value="rgba(0, 0, 0, 0)"/>
   </Group>

   <Group description="Links" selector=".main-outer">
     <Variable name="link.color" description="Link Color" type="color" default="#2288bb" value="#274e13"/>
     <Variable name="link.visited.color" description="Visited Color" type="color" default="#888888" value="#274e13"/>
     <Variable name="link.hover.color" description="Hover Color" type="color" default="#33aaff" value="#0c343d"/>
   </Group>

   <Group description="Blog Title" selector=".header h1">
     <Variable name="header.font" description="Font" type="font"
         default="normal normal 60px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="normal bold 60px Philosopher"/>
     <Variable name="header.text.color" description="Title Color" type="color" default="#3399bb"  value="#274e13"/>
   </Group>

   <Group description="Blog Description" selector=".header .description">
     <Variable name="description.text.color" description="Description Color" type="color"
         default="#777777"  value="#274e13"/>
   </Group>

   <Group description="Tabs Text" selector=".tabs-inner .widget li a">
     <Variable name="tabs.font" description="Font" type="font"
         default="normal normal 14px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="normal bold 20px Droid Sans"/>
     <Variable name="tabs.text.color" description="Text Color" type="color" default="#999999" value="#274e13"/>
     <Variable name="tabs.selected.text.color" description="Selected Color" type="color" default="#000000" value="#ffffff"/>
   </Group>

   <Group description="Tabs Background" selector=".tabs-outer .PageList">
     <Variable name="tabs.background.color" description="Background Color" type="color" default="#f5f5f5" value="#274e13"/>
     <Variable name="tabs.selected.background.color" description="Selected Color" type="color" default="#eeeeee" value="#274e13"/>
   </Group>

   <Group description="Post Title" selector="h3.post-title, .comments h4">
     <Variable name="post.title.font" description="Font" type="font"
         default="normal normal 22px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="normal normal 30px Allerta"/>
   </Group>

   <Group description="Date Header" selector=".date-header">
     <Variable name="date.header.color" description="Text Color" type="color"
         default="$(body.text.color)" value="#ffffff"/>
     <Variable name="date.header.background.color" description="Background Color" type="color"
         default="transparent" value="#274e13"/>
     <Variable name="date.header.font" description="Text Font" type="font"
         default="normal bold 11px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="normal bold 8px Yanone Kaffeesatz"/>
     <Variable name="date.header.padding" description="Date Header Padding" type="string" default="inherit" value="0.4em"/>
     <Variable name="date.header.letterspacing" description="Date Header Letter Spacing" type="string" default="inherit" value="3px"/>
     <Variable name="date.header.margin" description="Date Header Margin" type="string" default="inherit" value="inherit"/>
   </Group>

   <Group description="Post Footer" selector=".post-footer">
     <Variable name="post.footer.text.color" description="Text Color" type="color" default="#666666" value="#ffffff"/>
     <Variable name="post.footer.background.color" description="Background Color" type="color"
         default="#f9f9f9" value="#6aa84f"/>
     <Variable name="post.footer.border.color" description="Shadow Color" type="color" default="#eeeeee" value="#081104"/>
   </Group>

   <Group description="Gadgets" selector="h2">
     <Variable name="widget.title.font" description="Title Font" type="font"
         default="normal bold 11px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="normal bold 11px Arial, Tahoma, Helvetica, FreeSans, sans-serif"/>
     <Variable name="widget.title.text.color" description="Title Color" type="color" default="#000000" value="#000000"/>
     <Variable name="widget.alternate.text.color" description="Alternate Color" type="color" default="#999999" value="#a3a3a3"/>
   </Group>

   <Group description="Images" selector=".main-inner">
     <Variable name="image.background.color" description="Background Color" type="color" default="#ffffff" value="#ffffff"/>
     <Variable name="image.border.color" description="Border Color" type="color" default="#eeeeee" value="#eeeeee"/>
     <Variable name="image.text.color" description="Caption Text Color" type="color" default="$(body.text.color)" value="#666666"/>
   </Group>

   <Group description="Accents" selector=".content-inner">
     <Variable name="body.rule.color" description="Separator Line Color" type="color" default="#eeeeee" value="#274e13"/>
     <Variable name="tabs.border.color" description="Tabs Border Color" type="color" default="$(body.rule.color)" value="#081104"/>
   </Group>

   <Variable name="body.background" description="Body Background" type="background"
       color="$(body.background.color)" default="$(color) none repeat scroll top left" value="$(color) none repeat scroll top left"/>
   <Variable name="body.background.override" description="Body Background Override" type="string" default="" value=""/>

   <Variable name="body.background.gradient.cap" description="Body Gradient Cap" type="url"
       default="url(https://www.blogblog.com/1kt/simple/gradients_light.png)" value="none"/>
   <Variable name="body.background.gradient.tile" description="Body Gradient Tile" type="url"
       default="url(https://www.blogblog.com/1kt/simple/body_gradient_tile_light.png)" value="none"/>

   <Variable name="content.background.color.selector" description="Content Background Color Selector" type="string" default=".content-inner" value=".content-inner"/>
   <Variable name="content.padding" description="Content Padding" type="length" default="10px" min="0" max="100px" value="10px"/>
   <Variable name="content.padding.horizontal" description="Content Horizontal Padding" type="length" default="$(content.padding)" min="0" max="100px" value="40px"/>
   <Variable name="content.shadow.spread" description="Content Shadow Spread" type="length" default="40px" min="0" max="100px" value="0"/>
   <Variable name="content.shadow.spread.webkit" description="Content Shadow Spread (WebKit)" type="length" default="5px" min="0" max="100px" value="0"/>
   <Variable name="content.shadow.spread.ie" description="Content Shadow Spread (IE)" type="length" default="10px" min="0" max="100px" value="0"/>

   <Variable name="main.border.width" description="Main Border Width" type="length" default="0" min="0" max="10px" value="0"/>

   <Variable name="header.background.gradient" description="Header Gradient" type="url" default="none" value="none"/>
   <Variable name="header.shadow.offset.left" description="Header Shadow Offset Left" type="length" default="-1px" min="-50px" max="50px" value="0"/>
   <Variable name="header.shadow.offset.top" description="Header Shadow Offset Top" type="length" default="-1px" min="-50px" max="50px" value="0"/>
   <Variable name="header.shadow.spread" description="Header Shadow Spread" type="length" default="1px" min="0" max="100px" value="0"/>
   <Variable name="header.padding" description="Header Padding" type="length" default="30px" min="0" max="100px" value="0"/>

   <Variable name="header.border.size" description="Header Border Size" type="length" default="1px" min="0" max="10px" value="1px"/>
   <Variable name="header.bottom.border.size" description="Header Bottom Border Size" type="length" default="$(header.border.size)" min="0" max="10px" value="0"/>
   <Variable name="header.border.horizontalsize" description="Header Horizontal Border Size" type="length" default="0" min="0" max="10px" value="1px"/>

   <Variable name="description.text.size" description="Description Text Size" type="string" default="140%" value="18px"/>

   <Variable name="tabs.margin.top" description="Tabs Margin Top" type="length" default="0" min="0" max="100px" value="0"/>
   <Variable name="tabs.margin.side" description="Tabs Side Margin" type="length" default="30px" min="0" max="100px" value="30px"/>
   <Variable name="tabs.background.gradient" description="Tabs Background Gradient" type="url"
       default="url(https://www.blogblog.com/1kt/simple/gradients_light.png)" value="none"/>
   <Variable name="tabs.border.width" description="Tabs Border Width" type="length" default="1px" min="0" max="10px" value="1px"/>
   <Variable name="tabs.bevel.border.width" description="Tabs Bevel Border Width" type="length" default="1px" min="0" max="10px" value="1px"/>

   <Variable name="post.margin.bottom" description="Post Bottom Margin" type="length" default="25px" min="0" max="100px" value="45px"/>

   <Variable name="image.border.small.size" description="Image Border Small Size" type="length" default="2px" min="0" max="10px" value="2px"/>
   <Variable name="image.border.large.size" description="Image Border Large Size" type="length" default="5px" min="0" max="10px" value="5px"/>

   <Variable name="page.width.selector" description="Page Width Selector" type="string" default=".region-inner" value=".region-inner"/>
   <Variable name="page.width" description="Page Width" type="string" default="auto" value="auto"/>

   <Variable name="main.section.margin" description="Main Section Margin" type="length" default="15px" min="0" max="100px" value="1em"/>
   <Variable name="main.padding" description="Main Padding" type="length" default="15px" min="0" max="100px" value="0"/>
   <Variable name="main.padding.top" description="Main Padding Top" type="length" default="30px" min="0" max="100px" value="35px"/>
   <Variable name="main.padding.bottom" description="Main Padding Bottom" type="length" default="30px" min="0" max="100px" value="65px"/>

   <Variable name="paging.background"
       color="$(content.background.color)"
       description="Background of blog paging area" type="background"
       default="transparent none no-repeat scroll top center" value="transparent url(https://www.blogblog.com/1kt/simple/paging_dot.png) repeat-x scroll top center"/>

   <Variable name="footer.bevel" description="Bevel border length of footer" type="length" default="0" min="0" max="10px" value="1px"/>

   <Variable name="mobile.background.overlay" description="Mobile Background Overlay" type="string"
       default="transparent none repeat scroll top left" value="transparent none repeat scroll top left"/>
   <Variable name="mobile.background.size" description="Mobile Background Size" type="string" default="auto" value="auto"/>
   <Variable name="mobile.button.color" description="Mobile Button Color" type="color" default="#ffffff"  value="#ffffff"/>

   <Variable name="startSide" description="Side where text starts in blog language" type="automatic" default="left" value="left"/>
   <Variable name="endSide" description="Side where text ends in blog language" type="automatic" default="right" value="right"/>
*/

/* Content
----------------------------------------------- */
body {
  font: $(body.font);
  color: $(body.text.color);
  background: $(body.background);
  padding: 0 $(content.shadow.spread) $(content.shadow.spread) $(content.shadow.spread);
  $(body.background.override)
}

html body $(page.width.selector) {
  min-width: 0;
  max-width: 100%;
  width: $(page.width);
}

h2 {
  font-size: 22px;
}

a:link {
  text-decoration:none;
  color: $(link.color);
}

a:visited {
  text-decoration:none;
  color: $(link.visited.color);
}

a:hover {
  text-decoration:underline;
  color: $(link.hover.color);
}

.body-fauxcolumn-outer .fauxcolumn-inner {
  background: transparent $(body.background.gradient.tile) repeat scroll top left;
  _background-image: none;
}

.body-fauxcolumn-outer .cap-top {
  position: absolute;
  z-index: 1;
  height: 500px;
  width: 100%;
}

.body-fauxcolumn-outer .cap-top .cap-left {
  width: 100%;
  background: transparent $(body.background.gradient.cap) repeat-x scroll top left;
  _background-image: none;
}

.content-outer {
  -moz-box-shadow: 0 0 $(content.shadow.spread) rgba(0, 0, 0, .15);
  -webkit-box-shadow: 0 0 $(content.shadow.spread.webkit) rgba(0, 0, 0, .15);
  -goog-ms-box-shadow: 0 0 $(content.shadow.spread.ie) #333333;
  box-shadow: 0 0 $(content.shadow.spread) rgba(0, 0, 0, .15);

  margin-bottom: 1px;
}

.content-inner {
  padding: $(content.padding) $(content.padding.horizontal);
}

$(content.background.color.selector) {
  background-color: $(content.background.color);
}

/* Header
----------------------------------------------- */
.header-outer {
  background: $(header.background.color) $(header.background.gradient) repeat-x scroll 0 -400px;
  _background-image: none;
}

.Header h1 {
  font: $(header.font);
  color: $(header.text.color);
  text-shadow: $(header.shadow.offset.left) $(header.shadow.offset.top) $(header.shadow.spread) rgba(0, 0, 0, .2);
}

.Header h1 a {
  color: $(header.text.color);
}

.Header .description {
  font-size: $(description.text.size);
  color: $(description.text.color);
}

.header-inner .Header .titlewrapper {
  padding: 22px $(header.padding);
}

.header-inner .Header .descriptionwrapper {
  padding: 0 $(header.padding);
}

/* Tabs
----------------------------------------------- */
.tabs-inner .section:first-child {
  border-top: $(header.bottom.border.size) solid $(tabs.border.color);
}

.tabs-inner .section:first-child ul {
  margin-top: -$(header.border.size);
  border-top: $(header.border.size) solid $(tabs.border.color);
  border-left: $(header.border.horizontalsize) solid $(tabs.border.color);
  border-right: $(header.border.horizontalsize) solid $(tabs.border.color);
}

.tabs-inner .widget ul {
  background: $(tabs.background.color) $(tabs.background.gradient) repeat-x scroll 0 -800px;
  _background-image: none;
  border-bottom: $(tabs.border.width) solid $(tabs.border.color);

  margin-top: $(tabs.margin.top);
  margin-left: -$(tabs.margin.side);
  margin-right: -$(tabs.margin.side);
}

.tabs-inner .widget li a {
  display: inline-block;

  padding: .6em 1em;

  font: $(tabs.font);
  color: $(tabs.text.color);

  border-$startSide: $(tabs.border.width) solid $(content.background.color);
  border-$endSide: $(tabs.bevel.border.width) solid $(tabs.border.color);
}

.tabs-inner .widget li:first-child a {
  border-$startSide: none;
}

.tabs-inner .widget li.selected a, .tabs-inner .widget li a:hover {
  color: $(tabs.selected.text.color);
  background-color: $(tabs.selected.background.color);
  text-decoration: none;
}
.tabs .widget ul, .tabs .widget ul {
margin: 0px;
padding: 0px;
list-style: none outside none;
overflow: visible;
}
.tabs-outer {
background: 0 ;
}
/* Columns
----------------------------------------------- */
.main-outer {
  border-top: $(main.border.width) solid $(body.rule.color);
}

.fauxcolumn-left-outer .fauxcolumn-inner {
  border-right: 1px solid $(body.rule.color);
}

.fauxcolumn-right-outer .fauxcolumn-inner {
  border-left: 1px solid $(body.rule.color);
}

/* Headings
----------------------------------------------- */
div.widget > h2,
div.widget h2.title {
  margin: 0 0 1em 0;

  font: $(widget.title.font);
  color: $(widget.title.text.color);
}

/* Widgets
----------------------------------------------- */
.widget .zippy {
  color: $(widget.alternate.text.color);
  text-shadow: 2px 2px 1px rgba(0, 0, 0, .1);
}

.widget .popular-posts ul {
  list-style: none;
}

/* Posts
----------------------------------------------- */
h2.date-header {
  font: $(date.header.font);
}

.date-header span {
  background-color: $(date.header.background.color);
  color: $(date.header.color);
  padding: $(date.header.padding);
  letter-spacing: $(date.header.letterspacing);
  margin: $(date.header.margin);
}

.main-inner {
  padding-top: $(main.padding.top);
  padding-bottom: $(main.padding.bottom);
}

.main-inner .column-center-inner {
  padding: 0 $(main.padding);
}

.main-inner .column-center-inner .section {
  margin: 0 $(main.section.margin);
}

.post {
  margin: 0 0 $(post.margin.bottom) 0;
}

h3.post-title, .comments h4 {
  font: $(post.title.font);
  margin: .75em 0 0;
}

.post-body {
  font-size: 110%;
  line-height: 1.4;
  position: relative;
}

.post-body img, .post-body .tr-caption-container, .Profile img, .Image img,
.BlogList .item-thumbnail img {
  padding: $(image.border.small.size);

  background: $(image.background.color);
  border: 1px solid $(image.border.color);

  -moz-box-shadow: 1px 1px 5px rgba(0, 0, 0, .1);
  -webkit-box-shadow: 1px 1px 5px rgba(0, 0, 0, .1);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, .1);
}

.post-body img, .post-body .tr-caption-container {
  padding: $(image.border.large.size);
}

.post-body .tr-caption-container {
  color: $(image.text.color);
}

.post-body .tr-caption-container img {
  padding: 0;

  background: transparent;
  border: none;

  -moz-box-shadow: 0 0 0 rgba(0, 0, 0, .1);
  -webkit-box-shadow: 0 0 0 rgba(0, 0, 0, .1);
  box-shadow: 0 0 0 rgba(0, 0, 0, .1);
}

.post-header {
  margin: 0 0 1.5em;

  line-height: 1.6;
  font-size: 90%;
}

.post-footer {
  margin: 20px -2px 0;
  padding: 5px 10px;

  color: $(post.footer.text.color);
  background-color: $(post.footer.background.color);
  border-bottom: 1px solid $(post.footer.border.color);

  line-height: 1.6;
  font-size: 90%;
}

#comments .comment-author {
  padding-top: 1.5em;

  border-top: 1px solid $(body.rule.color);
  background-position: 0 1.5em;
}

#comments .comment-author:first-child {
  padding-top: 0;
  border-top: none;
}

.avatar-image-container {
  margin: .2em 0 0;
}

#comments .avatar-image-container img {
  border: 1px solid $(image.border.color);
}

/* Comments
----------------------------------------------- */
.comments .comments-content .icon.blog-author {
  background-repeat: no-repeat;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB9sLFwMeCjjhcOMAAAD+SURBVDjLtZSvTgNBEIe/WRRnm3U8RC1neQdsm1zSBIU9VVF1FkUguQQsD9ITmD7ECZIJSE4OZo9stoVjC/zc7ky+zH9hXwVwDpTAWWLrgS3QAe8AZgaAJI5zYAmc8r0G4AHYHQKVwII8PZrZFsBFkeRCABYiMh9BRUhnSkPTNCtVXYXURi1FpBDgArj8QU1eVXUzfnjv7yP7kwu1mYrkWlU33vs1QNu2qU8pwN0UpKoqokjWwCztrMuBhEhmh8bD5UDqur75asbcX0BGUB9/HAMB+r32hznJgXy2v0sGLBcyAJ1EK3LFcbo1s91JeLwAbwGYu7TP/3ZGfnXYPgAVNngtqatUNgAAAABJRU5ErkJggg==);
}

.comments .comments-content .loadmore a {
  border-top: 1px solid $(widget.alternate.text.color);
  border-bottom: 1px solid $(widget.alternate.text.color);
}

.comments .comment-thread.inline-thread {
  background-color: $(post.footer.background.color);
}

.comments .continue {
  border-top: 2px solid $(widget.alternate.text.color);
}

/* Accents
---------------------------------------------- */
.section-columns td.columns-cell {
  border-$startSide: 1px solid $(body.rule.color);
}

.blog-pager {
  background: $(paging.background);
}

.blog-pager-older-link, .home-link,
.blog-pager-newer-link {
  background-color: $(content.background.color);
  padding: 5px;
}

.footer-outer {
  border-top: $(footer.bevel) dashed #bbbbbb;
}

/* Mobile
----------------------------------------------- */
body.mobile  {
  background-size: $(mobile.background.size);
}

.mobile .body-fauxcolumn-outer {
  background: $(mobile.background.overlay);
}

.mobile .body-fauxcolumn-outer .cap-top {
  background-size: 100% auto;
}

.mobile .content-outer {
  -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, .15);
  box-shadow: 0 0 3px rgba(0, 0, 0, .15);
}

.mobile .tabs-inner .widget ul {
  margin-left: 0;
  margin-right: 0;
}

.mobile .post {
  margin: 0;
}

.mobile .main-inner .column-center-inner .section {
  margin: 0;
}

.mobile .date-header span {
  padding: 0.1em 10px;
  margin: 0 -10px;
}

.mobile h3.post-title {
  margin: 0;
}

.mobile .blog-pager {
  background: transparent none no-repeat scroll top center;
}

.mobile .footer-outer {
  border-top: none;
}

.mobile .main-inner, .mobile .footer-inner {
  background-color: $(content.background.color);
}

.mobile-index-contents {
  color: $(body.text.color);
}

.mobile-link-button {
  background-color: $(link.color);
}

.mobile-link-button a:link, .mobile-link-button a:visited {
  color: $(mobile.button.color);
}

.mobile .tabs-inner .section:first-child {
  border-top: none;
}

.mobile .tabs-inner .PageList .widget-content {
  background-color: $(tabs.selected.background.color);
  color: $(tabs.selected.text.color);
  border-top: $(tabs.border.width) solid $(tabs.border.color);
  border-bottom: $(tabs.border.width) solid $(tabs.border.color);
}

.mobile .tabs-inner .PageList .widget-content .pagelist-arrow {
  border-$startSide: 1px solid $(tabs.border.color);
}
nav select {
  display: none;
}
/* Read More G59P adnanguney----*/
.readmore{margin-bottom:5px;float:right;}
.readmore a{color:#FFFFFF;background:#4285F4;font-size:12px;line-height:12px;display:inline-block;text-decoration:none;text-transform:none;padding:8px 14px;}
.readmore a:hover{color:#FFFFFF;background:#160000;text-decoration:none;}
.postmeta-primary,.postmeta-secondary{color:#999;font-size:12px;line-height:18px;padding:0 0 10px;}
/* Madde İşareti Edit
----------------------------- */
.post ul li {list-style-image:url('http://i.hizliresim.com/WYDaEY.png');transition:all 0.5s ease-in-out 0s;}
.post ul li:hover {list-style-image:url('http://i.hizliresim.com/81z527.png');}
/* Bitiş */
.quickedit{display:none;}
.kutucuk
{
background-color:#ffb519;
width:600px;
height:60px;
display:block;
-khtml-border-radius:5px;
-webkit-border-radius:5px;
-moz-border-radius:5px;
border-radius: 5px;
}
]]></b:skin>

    <b:template-skin>
      <b:variable default='960px' name='content.width' type='length' value='1180px'/>
      <b:variable default='0' name='main.column.left.width' type='length' value='0px'/>
      <b:variable default='310px' name='main.column.right.width' type='length' value='150px'/>

      <![CDATA[
      body {
        min-width: $(content.width);
      }

      .content-outer, .content-fauxcolumn-outer, .region-inner {
        min-width: $(content.width);
        max-width: $(content.width);
        _width: $(content.width);
      }

      .main-inner .columns {
        padding-left: $(main.column.left.width);
        padding-right: $(main.column.right.width);
      }

      .main-inner .fauxcolumn-center-outer {
        left: $(main.column.left.width);
        right: $(main.column.right.width);
        /* IE6 does not respect left and right together */
        _width: expression(this.parentNode.offsetWidth -
            parseInt("$(main.column.left.width)") -
            parseInt("$(main.column.right.width)") + 'px');
      }

      .main-inner .fauxcolumn-left-outer {
        width: $(main.column.left.width);
      }

      .main-inner .fauxcolumn-right-outer {
        width: $(main.column.right.width);
      }

      .main-inner .column-left-outer {
        width: $(main.column.left.width);
        right: 100%;
        margin-left: -$(main.column.left.width);
      }

      .main-inner .column-right-outer {
        width: $(main.column.right.width);
        margin-right: -$(main.column.right.width);
      }

      #layout {
        min-width: 0;
      }

      #layout .content-outer {
        min-width: 0;
        width: 800px;
      }

      #layout .region-inner {
        min-width: 0;
        width: auto;
      }

      body#layout div.add_widget {
        padding: 8px;
      }

      body#layout div.add_widget a {
        margin-left: 32px;
      }
      ]]>
    </b:template-skin>

    <b:if cond='data:skin.vars.body_background.image and data:features.responsiveBackgrounds'>
      <b:with value='&quot;body&quot;' var='selector'>
        <b:include cond='not data:view.isPreview' data='skin.vars.body_background.image' name='responsiveImageStyle'/>
      </b:with>
    </b:if>

    <b:include data='blog' name='google-analytics'/>
<script type='text/javascript'>
var thumbnail_mode = &quot;yes&quot;; 
summary_noimg = 430; 
summary_img = 340; 
img_thumb_height = 150;
img_thumb_width = 200;
</script>
<script type='text/javascript'>
//<![CDATA[