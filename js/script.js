// Created by: Everett
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates Volume of a cone.
 */
function calculate () {
  // input
  let ValueR = parseFloat(document.getElementById('radius').value);
  let ValueH = parseFloat(document.getElementById('height').value);
  
  // process
  let VolumeCone = 1/3 * Math.PI *ValueR**2 *ValueH
  
  // output
  document.getElementById('volumeC-calculate').innerHTML = 'The volume of the cone is is: ' + VolumeCone.toFixed(2) + " cm3"
  

}
/**
 * This function calculates Volume of a Pyramid
 */
function calculate () {
  // input
  let ValueL = parseFloat(document.getElementById('length').value);
  let ValueW = parseFloat(document.getElementById('width').value);
  let ValueH = parseFloat(document.getElementById('height2').value);

  // process
  let VolumeCone = 1/3 * Math.PI *ValueR**2 *ValueH
  
  // output
  document.getElementById('volumeC-calculate').innerHTML = 'The volume of the cone is is: ' + VolumeCone.toFixed(2) + " cm3"
  