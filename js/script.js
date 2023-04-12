// Created by: Everett
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates Volume of a cone.
 */
function calculate () {
  // user inputs radius and height
  let ValueR = parseFloat(document.getElementById('radius').value);
  let ValueH = parseFloat(document.getElementById('height').value);
  
  // calculates volume
  let VolumeCone = 1/3 * Math.PI *ValueR**2 *ValueH
  
  // displays volume
  document.getElementById('volumeC-calculate').innerHTML = 'The volume of the cone is: ' + VolumeCone.toFixed(2) + " cm3"
  
}
/**
 * This function calculates Volume of a Pyramid
 */
function calculatevol () {
  // user inputs length, width, height
  let ValueL = parseFloat(document.getElementById('length').value);
  let ValueW = parseFloat(document.getElementById('width').value);
  let ValueH2 = parseFloat(document.getElementById('height2').value);

  // calculates volume
  let VolumePyr = (ValueH2 * ValueL * ValueW) /3
  
  // displays volume
  document.getElementById('volumeV-calculate').innerHTML = 'The volume of the pyramid is: ' + VolumePyr.toFixed(2) + " cm3"
}