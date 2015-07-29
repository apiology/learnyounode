#!/usr/bin/env node

// LEARN YOU THE NODE.JS FOR MUCH WIN!
// ─────────────────────────────────────
// JUGGLING ASYNC
// Exercise 9 of 13

// This problem is the same as the previous problem (HTTP COLLECT) in
// that you need to use http.get(). However, this time you will be
// provided with three URLs as the first three command-line arguments.

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

// You must collect the complete content provided to you by each of
// the URLs and print it to the console (stdout). You don't need to
// print out the length, just the data as a String; one line per
// URL. The catch is that you must print them out in the same order as
// the URLs are provided to you as command-line arguments.

   var http = require('http');
   var bl = require('bl');
   var output = '';
   http.get(url, function (res) {
       res.setEncoding('utf-8');
       res.pipe(bl(function (err, data) { // .pipe() on a stream pipes from one stream to another
           if (err)                       // bl() returns a stream, and accepts a callback that is called when the stream is done.
               return console.error(err);
           dataStr = data.toString();
           console.log(dataStr.length);
           console.log(dataStr);
       }));
   });

// -------------------------------------------------------------------------------

// ## HINTS

// Don't expect these three servers to play nicely! They are not going
// to give you complete responses in the order you hope, so you can't
// naively just print the output as you get it because they will be
// out of order.

// You will need to queue the results and keep track of how many of
// the URLs have returned their entire contents. Only once you have
// them all, you can print the data to the console.

// Counting callbacks is one of the fundamental ways of managing async
// in Node. Rather than doing it yourself, you may find it more
// convenient to rely on a third-party library such as
// [async](http://npm.im/async) or [after](http://npm.im/after). But
// for this exercise, try and do it without any external helper
// library.

// -------------------------------------------------------------------------------

//  » To print these instructions again, run: learnyounode print
//  » To execute your program in a test environment, run: learnyounode run program.js
//  » To verify your program, run: learnyounode verify program.js
//  » For help run: learnyounode help
