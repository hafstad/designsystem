'use strict';

const svgstore = require('svgstore');
const fs = require('fs');
const path = require('path');
const spritesFolder = path.join(__dirname, '../src/assets/icons/sprites/');
console.log(spritesFolder);

const sprites = function() {
  const svgs = svgstore({copyAttrs:['preserveAspectRatio'], cleanDefs: true, symbolAttrs:true});
  let counter = 0;

  const files = fs.readdirSync(spritesFolder);
  files.forEach(function (file) {
    const name = file.substring(0, file.indexOf('.'));
    if (name.length > 1 && file.endsWith('.svg')) {
      console.log("Adding:", name);
      svgs.add('icon-' + name, fs.readFileSync(spritesFolder + '/' + name + '.svg', 'utf8'));
      counter++;
    }  
  });
  console.log('*** Writing a total of ' + counter + ' svgs in temp-sprite.svg.');
  return svgs;
};

fs.writeFileSync('src/assets/icons/icon-sprite.svg', sprites());
