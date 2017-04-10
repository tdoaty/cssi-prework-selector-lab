'use-strict';

/* you can return a selector by using the synax: return $('selector').
function pSelector(){
  return $('p');
}
*/
function h1Selector(){
  return $('h1');
}
function liInOlSelector(){
  return $('ol li');
}
function linkSelector(){
  return $('#my-id .myclass a');
}

function catSelector(){
  return $('img.alt ="cat sleeping"');
}

function checkboxInputSelector(){
  return $(':checkbox');
}
