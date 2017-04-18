/*
*时间：
*2016年9月24日 17:42:54
*作者：无言
* pop弹窗插件 v1.0.0
*
*/


function pop(obj){function tanchuang(obj){
	$('body').append('<div id="mry-opo"><div id="mry-opo-title"></div><div  id="mry-opo-content"></div><div id="mry-opo-img"></div>');var div = $('#mry-opo');$('#mry-opo-title').text(obj.title);$('#mry-opo-content').text(obj.content);div.css('width',obj.width+'px');div.css('height',obj.height+'px');div.css('margin-left',-(parseInt(obj.width)/2)+'px');div.css('margin-top',-(parseInt(obj.height)/2)+'px');div.css('background',obj.backgorund);$('#mry-mask').css('display','block');}function del(){$('#mry-opo').append('<a href="javascript:void(0)" deletes="mry-opo" style="position:absolute;right:10px;top:6px;color:#666;font-size:24px;text-decoration:none;">×</a>');	$('[deletes=mry-opo]').click(function(){$('#mry-opo,#mry-mask').remove();});}$('body').append('<div id="mry-mask" deletes="mry-opo"></div>');var ject=obj;ject.width = parseInt(obj.width)||300;ject.height = parseInt(obj.height)||300;ject.title=obj.title||'在微信中加‘郭杉SusanGuo’为好友';	ject.content = obj.content||'在微信中加‘郭杉SusanGuo’为好友';ject.backgorund=obj.backgorund||'#fff';tanchuang(ject);del();}