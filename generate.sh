#!/bin/bash

#author: natserract

# stdin 
printf "\n ************** Generate component automatically - Author: Natserract ************** \n \n"
read -p "Enter component name: " input


#transform string process
find_first_char_of_string=$( echo $input | cut -c1-1 )
get_first_char_of_string=$( echo "$find_first_char_of_string" | awk '{print toupper($0)}' ) 

result_capitalize_char=$( echo $input | sed "s/$find_first_char_of_string/$get_first_char_of_string/" )
result_lowercase_char=$( echo "$input" | awk '{print tolower}' ) 

# Step 1 - Create new directory
mkdir projects/salt/api/library/app/components/$result_lowercase_char

# Step 2 - Crate compile.ts file
echo "import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ${result_capitalize_char}ElementModule } from './$result_lowercase_char.module';

enableProdMode();

platformBrowserDynamic().bootstrapModule(${result_capitalize_char}ElementModule)
.catch(err => console.error(err));" >> projects/salt/api/library/app/components/$result_lowercase_char/compile.ts

# Step 3 - Create component in angular projects
ng generate component components/$result_lowercase_char --project=salt --export


# Step 4 - export in public api
echo "export * from './app/components/$result_lowercase_char/$result_lowercase_char.component';" >> projects/salt/api/angular/public-api.ts

# Step 5 - import in index library
echo "export { ${result_capitalize_char}Component } from '../../angular/app/components/$result_lowercase_char/$result_lowercase_char.component';" >> projects/salt/api/library/app/index.ts

# Step 6 - Finishing
echo "import { NgModule } from '@angular/core';
import { Injector } from '@angular/core';

import { RootElementModule } from '../../root.module';
import { ${result_capitalize_char}Component, SaltModule } from '../..';

@NgModule({
  imports: [SaltModule],
  entryComponents: [${result_capitalize_char}Component],
})
export class ${result_capitalize_char}ElementModule extends RootElementModule {
  constructor(
    injector: Injector
   ){
    super(injector, ${result_capitalize_char}Component, '$result_lowercase_char');
   }
}
" >> projects/salt/api/library/app/components/$result_lowercase_char/$result_lowercase_char.module.ts

printf "\n"
printf "Done! Thankyou So Much!" | awk '{print toupper}'
printf "Give me a star github.com/natserract 🔥🔥🔥🔥🔥🔥🔥🔥"
printf "\n \n"