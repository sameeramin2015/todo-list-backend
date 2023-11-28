exports.getDate = function (){
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    // change the date formate
    var day = today.toLocaleDateString("en-US", options);

    return day;
}

exports.getDay = function () {
    const today = new Date();
    const options = {
        weekday: "long"
    };
    // change the date formate
    var day = today.toLocaleDateString("en-US", options);

    return day;
}
