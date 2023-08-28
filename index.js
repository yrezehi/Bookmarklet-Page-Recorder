
var EVENTS = ["click", "focusout"];
var events_queue = [];

function initialize(context = document.body){
    listeners(context);
}

function listeners(context) {
    EVENTS.forEach(function(eventType) {
        context.addEventListener(eventType, addEvent);
    });
}

function addEvent(event){
    if(event.type === "focusout" && event.srcElement === "input"){

    }
}

function cleanup(){}

initialize(document.body);