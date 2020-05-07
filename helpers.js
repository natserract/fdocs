var { lstatSync, readdirSync } = require('fs')
var { join } = require('path')

// const path = "./projects/salt/api/library/app/components";
const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source =>
  readdirSync(source).map(name => join(source, name)).filter(isDirectory);

// const pathFn = getDirectories(path);
// pathFn.forEach(pathItem => {
//   let replacePath = pathItem.match(/([^\/]+).$/gm).join("");
//   const findPath = `./${pathItem}/${replacePath}.module`;
 
//   import('./projects/salt/api/library/app/components/button/button.module')
//     .then((module) => {
//       // module.ButtonElementModule
//     })
//     .catch(err => console.error(err))
    

// })

// import("./projects/salt/api/library/app/components/button")
// .then((module) => {
//   // module.ButtonElementModule
// })

let path = [
  './components/button',
  './components/slider'
];


path.forEach(pathItem => {
  const replacePath = pathItem.match(/([^\/]+).$/gm).join('');
  const findPath = pathItem + '/' + replacePath + '.module';

 console.log(findPath)
});
