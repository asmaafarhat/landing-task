// Load jQuery from NPM
// var jquery = require("jquery");
// window.$ = window.jQuery = jquery; // notice the definition of global variables here
// require("jquery-ui-dist/jquery-ui.js");

const jquery = require('jquery')
import * as bootstrap from 'bootstrap'

$ = window.$ = window.jQuery = jquery;

require('bootstrap')

$(document).ready(() => {
  console.log("hello");
});
console.log('hello world');
