$(function(){
  $(".typed").typed({
    strings: ["Developers.", "Designers.", "People.", "Erb Web Dev."],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 50,
    // time before typing starts
    startDelay: 1800,
    // backspacing speed
    backSpeed: 30,
    // time before backspacing
    backDelay: 1000,
    // loop
    loop: true,
    // false = infinite
    loopCount: 1,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html',
    // call when done callback function
    callback: function() {},
    // starting callback function before each string
    preStringTyped: function() {},
    //callback for every typed string
    onStringTyped: function() {},
    // callback for reset
    resetCallback: function() {}
  });
});
