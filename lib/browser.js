const agent = window.navigator.userAgent.toLowerCase();
switch (true) {
    case agent.indexOf("edge") > -1: 
        if (document.getElementsByClassName("responsive-img")[0]) {
            document.getElementsByClassName("responsive-img")[0].src = "images/178296fb1414a5813.jpg";
        }
        document.getElementsByClassName("img_main")[0].src = "images/main.png";
        document.getElementsByClassName("img_apple_touch_icon")[0].href = "images/apple-touch-icon.png";
        document.getElementsByClassName("img_icon")[0].href = "images/favicon.png";
        break;
    case agent.indexOf("edg/") > -1: 
        if (document.getElementsByClassName("responsive-img")[0]) {
            document.getElementsByClassName("responsive-img")[0].src = "images/178296fb1414a5813.webp";
        }
        document.getElementsByClassName("img_main")[0].src = "images/main.webp";
        document.getElementsByClassName("img_apple_touch_icon")[0].href = "images/apple-touch-icon.webp";
        document.getElementsByClassName("img_icon")[0].href = "images/favicon.webp";
        break;
    case agent.indexOf("chrome") > -1 && !!window.chrome: 
        if (document.getElementsByClassName("responsive-img")[0]) {
            document.getElementsByClassName("responsive-img")[0].src = "images/178296fb1414a5813.avif";
        }        document.getElementsByClassName("img_main")[0].src = "images/main.avif";
        document.getElementsByClassName("img_apple_touch_icon")[0].href = "images/apple-touch-icon.avif";
        document.getElementsByClassName("img_icon")[0].href = "images/favicon.avif";
        break;
    case agent.indexOf("firefox") > -1: 
        if (document.getElementsByClassName("responsive-img")[0]) {
            document.getElementsByClassName("responsive-img")[0].src = "images/178296fb1414a5813.webp";
        }
        document.getElementsByClassName("img_main")[0].src = "images/main.webp";
        document.getElementsByClassName("img_apple_touch_icon")[0].href = "images/apple-touch-icon.webp";
        document.getElementsByClassName("img_icon")[0].href = "images/favicon.webp";
        break;
    default: 
        // browserName = "other"; // 기타
}