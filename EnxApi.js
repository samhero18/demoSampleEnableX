//var baseUrl = "https://api.enablex.io/v1/rooms";
//var baseUrl = "https://demo.enablex.io/v1/rooms";
var baseUrl = "https://meet.kestoneglobal.com/v1/rooms";
 
var appId = "5f0db70190ef80a15377ea52";
var appKey = "QuUuvu7eaeSaVueebuLeVaBenujy6upebuBu";
var roomConfig = {
    "name": "Kestone VEP",
    "owner_ref": "ram.p@kestone.in",
    "settings": {
        "description": "This is testing room for VEP",
        "mode": "group",
        "scheduled": false,
        "adhoc": false,
        "duration": 300,
        "moderators": "2",
        "participants": "20",
        "billing_code": "",
        "auto_recording": false,
        "quality": "SD",
        "canvas": false,
        "screen_share": true,
        "abwd": true,
        "max_active_talkers": 1
    },
    "sip": {
        "enabled": false
    },
    "data": {
        "custom_key": ""
    }
};
var EnxApi = {
    CreateRoom: CreateRoom,
    GetToken: GetToken,
};
function CreateRoom() {
    PostData(baseUrl, roomConfig);
}
function GetToken() {

}
function GetData(url, jsonData) {
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        data: jsonData,
        contentType: 'application/json; charset=utf-8',
        headers: {
            //"Authorization": "Basic " + appKey,
            "x-app-id": appId,
            "x-app-key": appKey,
        },
        success: function (data) {
            // get the result and do some magic with it
            console.log("result: ", data);
        },
        failure: function (errMsg) {
            console.log("error: ", errMsg);

        }
    });
}
function PostData(url, jsonData) {
    $.ajax({
        url: url,
        type: 'POST',

        data: JSON.stringify(jsonData),
      
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        headers: {
            //"Authorization": "Basic " + appKey,
            "Authorization": "Basic " +  btoa(appId + ":" + appKey),
            "x-app-id": appId,
            "x-app-key": appKey,
        },
        success: function (data) {
            // get the result and do some magic with it
            console.log("result: ", data);
        },
        failure: function (errMsg) {
            console.log("error: ", errMsg);
            
        }
    });
}