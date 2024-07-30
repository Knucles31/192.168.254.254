//additional functionlity add to task report page
// if (location.href.includes("http://kitpoint.kit.edu/task/reports")) {
  //append new button next to search bar
var donut_logo = chrome.extension.getURL("/resources/images/logo_sztozed.jpg");
var donut_div = `
<span style="font-size: xx-large;margin-left: 15px;vertical-align: bottom;">+</span>
<img type="image/png" id="logoSecond" src="`+donut_logo+`" style="padding-left: 15px;">
`
var new_items = `
<div class="type_items" id="items" style="margin-top: 10px;width: max-content;margin-left: 20px;background: #428bca;">
    <ul>
        <li><a href="javascript:void(0)" onclick="tosms('#mcc_mnc_locking')" class="germanFont" style="width: 150px;">MCC|MNC Locking</a></li>
        <li><a href="javascript:void(0)" onclick="tosms('#frequency')" class="germanFont" style="width: 150px;">Bands Locking</a></li>
        <li><a href="javascript:void(0)" onclick="tosms('#net_lockpci')" class="germanFont" style="width: 150px;">Cell ID Locking</a></li>
        <li><a href="javascript:void(0)" onclick="tosms('#send_at')" class="germanFont" style="width: 150px;">AT Codes</a></li>
        <li><a href="javascript:void(0)" onclick="tosms('#flow_setting')" class="germanFont" style="width: 150px;">Data Limiter</a></li>
        <li><a href="javascript:void(0)" onclick="tosms('#rate_limit')" class="germanFont" style="width: 150px;">Speed Limiter</a></li>
        <li><a href="javascript:void(0)" onclick="tosms('#backup_data')" class="germanFont" style="width: 150px;">Backup Data</a></li>
    </ul>
</div>
`

$(new_items).insertAfter($('#items'));
$(donut_div).insertAfter($("#logoMargin"));

