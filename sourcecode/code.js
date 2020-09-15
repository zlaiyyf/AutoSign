
auto.waitFor()
launchApp("企业微信");
//开始执行任务
id("eas")
.className("android.widget.TextView")
.text("工作台")
.untilFind()

var widget=id("eas").className("android.widget.TextView").text("工作台").findOne()
var a=click(widget.bounds().centerX(), widget.bounds().centerY());
sleep(1000)
click("疫情防控信息采集平台",0)
while(true) {
        var target =  text("疫情防控信息采集平台").findOnce();
        if (target == null) {
            sleep(3000);
            continue;
        }
        target.click();
        break;
        //浏览网页20s

    }
 while(true) {
        var target =  text("健康上报").findOnce();
        if (target == null) {
            sleep(3000);
            continue;
        }
        target.click();
        break;
        //浏览网页20s

    }

sleep(1000)
if(text("确认").exists()){
  click("确认",0)
}
sleep(5000)
className("android.widget.Button").findOne().click()
sleep(7000)

setText(0,"36.5")
if(!text("正常").checked){
    text("正常").click()
 text("无").click()
    }


textContains("为疫情防控").click()

textContains("上述信息").click()

text("提交").click()
var clear = confirm("    签到成功 \n更多精彩微信关注【龙城山大】");