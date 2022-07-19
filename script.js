const TABLE_LIGHT = 1;
const SHELF_LIGHT = 2;
const HUE_GO = 3;
const CEILING_LIGHT = 5;
const HALLWAY_CANDLE_1 = 6;
const HALLWAY_CANDLE_2 = 7;
const IM_TABLE_LIGHT = 8;
const IM_SPOT_1 = 10;
const IM_SPOT_2 = 11;
const IM_SPOT_3 = 12;

let tableOn, tableOff, shelfOn, shelfOff, goOn, goOff, ceilingOn, ceilingOff, imTableOn, imTableOff,
        imSpotOn, imSpotOff, hallwayOn, hallwayOff, tableSlider;


const setLight = function (state, lightNumber) {
    const URL_LIGHT = baseUrl + USERNAME + "/lights/" + lightNumber + "/state";
    fetch(URL_LIGHT, {method: "PUT",
    body: JSON.stringify({"on": state})
    })
}


const lightOff = function (event) {
    if (event.target.id === "table-off") setLight(false, TABLE_LIGHT);
    else if (event.target.id === "shelf-off") setLight(false, SHELF_LIGHT);
    else if (event.target.id === "go-off") setLight(false, HUE_GO);
    else if (event.target.id === "ceiling-off") setLight(false, CEILING_LIGHT);
    else if (event.target.id === "im-table-off") setLight(false, IM_TABLE_LIGHT);
    else if (event.target.id === "im-spot-off") {
        setLight(false, IM_SPOT_1);
        setLight(false, IM_SPOT_2);
        setLight(false, IM_SPOT_3);
    }
    else if (event.target.id === "hallway-off") {
        setLight(false, HALLWAY_CANDLE_1);
        setLight(false, HALLWAY_CANDLE_2);
    }
    else console.log(event.target.id);

}

const lightOn = function (event) {
    if (event.target.id === "table-on") setLight(true, TABLE_LIGHT);
    else if (event.target.id === "shelf-on") setLight(true, SHELF_LIGHT);
    else if (event.target.id === "go-on") setLight(true, HUE_GO);
    else if (event.target.id === "ceiling-on") setLight(true, CEILING_LIGHT);
    else if (event.target.id === "im-table-on") setLight(true, IM_TABLE_LIGHT);
    else if (event.target.id === "im-spot-on") {
        setLight(true, IM_SPOT_1);
        setLight(true, IM_SPOT_2);
        setLight(true, IM_SPOT_3);
    }
    else if (event.target.id === "hallway-on") {
        setLight(true, HALLWAY_CANDLE_1);
        setLight(true, HALLWAY_CANDLE_2);
    }
    else console.log("Light on else statement");
}

const setBrightness = function (brightness, lightNumber) {
    const URL_BRIGHTNESS = baseUrl + USERNAME + "/lights/" + lightNumber + "/state";
    //console.log ("Running");
    fetch(URL_BRIGHTNESS, {method: "PUT",
    body: JSON.stringify({"bri":brightness})
    })
}
const dimHandler = function (event) {
    if (event.target.id === "table-light-slider") {
        setBrightness(Number(tableSlider.value), SHELF_LIGHT);
        //console.log(tableSlider.value, typeof tableSlider.value);
    }
}

const setup = function () {
    //Table lights
    tableOn = document.getElementById("table-on");
    tableOff = document.getElementById("table-off");
    tableOn.addEventListener("click", lightOn);
    tableOff.addEventListener("click", lightOff);
    tableSlider = document.getElementById("table-light-slider");
    tableSlider.addEventListener("change", dimHandler);

    //Shelf lights
    shelfOn = document.getElementById("shelf-on");
    shelfOff = document.getElementById("shelf-off");
    shelfOn.addEventListener("click", lightOn);
    shelfOff.addEventListener("click", lightOff);

    //Hue Go
    goOn = document.getElementById("go-on");
    goOff = document.getElementById("go-off");
    goOn.addEventListener("click", lightOn);
    goOff.addEventListener("click", lightOff);

    //Roof Lamp
    ceilingOn = document.getElementById("ceiling-on");
    ceilingOff = document.getElementById("ceiling-off");
    ceilingOn.addEventListener("click", lightOn);
    ceilingOff.addEventListener("click", lightOff);

    //Imran Table Lightstrip
    imTableOn = document.getElementById("im-table-on");
    imTableOff = document.getElementById("im-table-off");
    imTableOn.addEventListener("click", lightOn);
    imTableOff.addEventListener("click", lightOff);

    //Imran Spot 1, 2, amd 3
    imSpotOn = document.getElementById("im-spot-on");
    imSpotOff = document.getElementById("im-spot-off");
    imSpotOn.addEventListener("click", lightOn);
    imSpotOff.addEventListener("click", lightOff);

    hallwayOn = document.getElementById("hallway-on");
    hallwayOff = document.getElementById("hallway-off");
    hallwayOn.addEventListener("click", lightOn);
    hallwayOff.addEventListener("click", lightOff);

}


// listen for the HTML page to load fully:
document.addEventListener('DOMContentLoaded', setup);
