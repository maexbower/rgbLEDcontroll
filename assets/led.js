/**
 * Created by max on 26.06.17.
 */

var RChange = function() {
    $('#RGB').css('background', 'rgb('+r.getValue() +','+g.getValue()+','+b.getValue()+')');
    var sr = $('#switch_red');
    if(!sr.hasClass('down')){
        sendColors('red', r.getValue());
    }

};
var GChange = function() {
    $('#RGB').css('background', 'rgb('+r.getValue() +','+g.getValue()+','+b.getValue()+')');
    var sg = $('#switch_green');
    if(!sg.hasClass('down')){
        sendColors('green', g.getValue());
    }
};
var BChange = function() {
    $('#RGB').css('background', 'rgb('+r.getValue() +','+g.getValue()+','+b.getValue()+')');
    var sb = $('#switch_blue');
    if(!sb.hasClass('down')) {
        sendColors('blue', b.getValue());
    }
};
var r = $('#red').slider()
    .on('slide', RChange)
    .data('slider');
var g = $('#green').slider()
    .on('slide', GChange)
    .data('slider');
var b = $('#blue').slider()
    .on('slide', BChange)
    .data('slider');
function toggleRed()
{
    var sr = $('#switch_red');
    if(sr.hasClass('down'))
    {
        sr.removeClass('down');
        sendColors('red', r.getValue());
    }else{
        sr.addClass('down');
        r.setValue(0);
        RChange();
        sendColors('red', 0);
    }
}
function toggleBlue()
{
    var sb = $('#switch_blue');
    if(sb.hasClass('down'))
    {
        sb.removeClass('down');
        sendColors('blue', b.getValue());
    }else{
        sb.addClass('down');
        b.setValue(0);
        BChange();
        sendColors('blue', 0);
    }
}
function toggleGreen()
{
    var sg = $('#switch_green');
    if(sg.hasClass('down'))
    {
        sg.removeClass('down');
        sendColors('green', g.getValue());
    }else{
        sg.addClass('down');
        g.setValue(0);
        GChange();
        sendColors('green', 0);
    }
}
function toggle50()
{
    var sr = $('#switch_red');
    var sg = $('#switch_green');
    var sb = $('#switch_blue');
    g.setValue(125);
    sg.removeClass('down');
    GChange();
    b.setValue(125);
    sb.removeClass('down');
    BChange();
    r.setValue(125);
    sr.removeClass('down');
    RChange();
}
function toggle100()
{
    var sr = $('#switch_red');
    var sg = $('#switch_green');
    var sb = $('#switch_blue');
    g.setValue(255);
    sg.removeClass('down');
    GChange();
    b.setValue(255);
    sb.removeClass('down');
    BChange();
    r.setValue(255);
    sr.removeClass('down');
    RChange();
}

function sendColors(col, val)
{
    $.ajax({
        method: "POST",
        url: "/",
        data: { led: col, val: val },
        success: function(result){
            console.log( "Data Saved: " + result );
        }
    });
}
function getColor(col)
{
    $.ajax({
        method: "GET",
        url: "/?led="+col+"&val",
        data: {},
        success: function(result){
            console.log( "Data Got: " + result );
        }
    });
}
function turnOff() {
    var sr = $('#switch_red');
    sr.addClass('down');
    r.setValue(0);
    RChange();
    sendColors('red', 0);
    var sg = $('#switch_green');
    sg.addClass('down');
    g.setValue(0);
    GChange();
    sendColors('green', 0);
    var sb = $('#switch_blue');
    sb.addClass('down');
    b.setValue(0);
    BChange();
    sendColors('blue', 0);
}