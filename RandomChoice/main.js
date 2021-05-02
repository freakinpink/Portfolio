$(function(){
    $("input").on("click",function(){
        //alert("Hi");
        //$("h1").text("hello")
        var numberOfListItem = $("li").length;
        var ramdomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("li").eq(ramdomChildNumber).text())
        //找到img元件
        //設定img元件的src屬性 -->對應元件的title值
        $("img").attr("src",$("li").eq(ramdomChildNumber).attr("title"));
    });
});