/*
 * nina
 * https://github.com/chrisenytc/nina
 *
 * Copyright (c) 2013 Christopher EnyTC
 * Licensed under the MIT license.
 */

'use strict';

/**
 * Module Dependencies
 */

var crypto = require('crypto');
var livia = require('livia-algorithm');
var _ = require('underscore');

/**
 * Private Methods
 */

//Generate a new Hash using a domain, ip and random livia number
var generate = function (domain, ip, random) {
  //Create HASH with Livia Algorithm
  return crypto.createHash('whirlpool').update(domain + ip + random).digest('hex');
};

/**
 * Public Methods
 */

//Generate a unique AuthKey
exports.generate = function (keyList, domain, ip, infinityConstant) {
  //Define LivNumber
  var livNumber;
  //Make List
  keyList = keyList || [];
  //Make a Random Livia Number
  if(typeof infinityConstant === 'undefined') {
    livNumber = livia.random();
  }
  else {
    livNumber = livia.algorithm(infinityConstant);
  }
  //Make a Hash
  var hash = generate(domain, ip, livNumber);
  //Check if hashis unique
  if(_.contains(keyList, hash)) {
    return exports.generate(keyList, domain, ip, livNumber);
  }
  //Return a unique hash
  return hash;
};
