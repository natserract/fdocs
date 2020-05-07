
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as module from './';

enableProdMode();

(() => {
  platformBrowserDynamic()
    .bootstrapModule(module.ButtonElementModule)
      .catch(err => console.error(err));

  platformBrowserDynamic()
    .bootstrapModule(module.SliderElementModule)
      .catch(err => console.error(err));
})();


// This function only works in server side,
// If you use this func you get an error! -> Can't resolve module fs, path

// tslint:disable-next-line: variable-name
// function _forFindPath(_path: string) {
//   import * as fs from 'fs';
//   import * as paths from 'path';

//   const isDirectory = (source: string) => fs.lstatSync(source).isDirectory();
//   const getDirectories = (source: string) =>
//     fs.readdirSync(source).map(name => paths.join(source, name)).filter(isDirectory);

//   const pathFn = getDirectories(_path);

//   pathFn.forEach(pathItem => {
//     const replacePath = pathItem.match(/([^\/]+).$/gm).join('');
//     const findPath = pathItem + '/' + replacePath + '.module';

//     // @findPath -> string, need to -> class module
//     import(findPath)
//     .then((module) => {
//       platformBrowserDynamic()
//         .bootstrapModule(module.ButtonMod.ButtonElementModule)
//           .catch(err => console.error(err));
//     });
//   });
// }
