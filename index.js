
var EVENTS = ["click", "focusout"];
var eventsQueue = [];

function initialize(context = document.body){
    listeners(context);
}

function listeners(context) {
    EVENTS.forEach(function(eventType) {
        context.addEventListener(eventType, addEvent);
    });
}

function addEvent(event){
    eventsQueue.push({
        value: event.target.value,
        type: event.srcElement.localName,
        path: getElementPath(event.target)
    }); 
}

function getElementPath(element) {
    let nodeName = element.nodeName.toLowerCase();
    if (element === document.body) 
        return 'body';
    if (element.id) 
        nodeName += '#' + element.id;
    else if (element.classList.length) 
      nodeName += '.' + [...element.classList].join('.');
    return getElementPath(element.parentNode) + ' ' + nodeName;
}

function cleanup(){}

initialize(document.body);