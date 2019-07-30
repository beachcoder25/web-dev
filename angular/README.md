# Automate-UI  
https://github.com/chef/automate/blob/master/components/automate-ui/README.md'

## 06-25 Notes

### Angular CLI

- You must have node and npm installed, check with:
```sh
  node -v
  npm -v
```
-  Run to install, then check installation:
```sh
  npm install -g angular-cli@latest
  ng -v
```

- Create new project, which installs all required files and all required packages
  - This creates a new folder myFirstApp, all the required configurations and source files and all npm dependencies
```sh
  ng new myFirstApp
```
  
- You can now run the server, you can specify the port, and also request to open in defult browser:
```sh
  ng serve --port 4201 --open
```

## Angular new command

**Helpful commands**

- Show all commands you can run for new
```sh
  ng new --help
```
- --dry-run, shows all folders taht would be created from project w/o actually creating them:
```sh
  ng new myProject --dry-run
```

## Generating a component

Generating a new component command:
```sh
  ng generate component abc
```
This will generate a new component directory in src/app/<your_component_name>. In that directory four new files are created:
- abc.component.css  
- abc.component.html  
- abc.component.spec.ts  
- abc.component.ts

The generate command also automatically updates the `app.module.ts` file, which must be updated for a new component to be able to run

### In short...

3 things happen when we run the `generate` command
- A new directory with the same name as the component is created
- The aformentioned component. .css/.html/.spec.ts/.ts files are created in that directory

## Properly sticking a component in adirectory other than /app

This will put our component in the abc directory that was created from building the abc component
```sh
  ng generate component abc/xyz
```

## Routing!!!

1. Set `<base href>`, in our index.html file we will find the following line, which is the basis for routing:

    * `<base href ="/">`

2. Import the RouterModule into the application root module AppModule in ur `app.module.ts` file, in this file:

    * Add this line to the imports section at the top `import {RouterModule} from '@angular/router';`
      * Also must insert `RouterModule` into `imports: [` under `@NgModule`

3. Configure Routes

    * Just like we did for RouterModule import `Routes`, making that original line now `import {RouterModule, Routes} from '@angular/router';`

    Also add under import section: 
    ```sh
    const appRoutes: Routes = [
      { path: 'home', component: HomeComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }, // localhost:4200, will go to /home
      { path: '**', component: PageNotFoundComponent } // Wildcard route, localhost:4200/abc
    ];
    ```
    We then let our app know about these routes via:
    ```sh
    imports: [
      BrowserModule, 
      RouterModule.forRoot(appRoutes)
    ],
    ```
4. Now go to `app.component.html` file, and replace the html on that page with:
    ```sh
    <router-outlet></router-outlet>
    ```
5. You can alter the .html from any component by going into it's directory under /src/app/<your_component_name> and alter the `<your_component_name>.component.html` file

6. Tie the Routes to the application menu

We altered our `app.component.html` file to have navigation:
  ```sh
  <div style="padding:5px">
  <ul class="nav nav-tabs">
    <li routerLinkActive="active">
      <a routerLink="home">Home</a>
    </li>
    <li routerLinkActive="active">
      <a routerLink="employees">Employees</a>
    </li>
  </ul>
  <br/>
  <router-outlet></router-outlet>
</div>
```

* We also need to run `npm install bootstrap@3 --save` to get bootstrap setup



  * **NOTE:** You must add this into the .html file for your routing changes to take place!!!

When you create your angular cli project directory it will go in the top level directory /automate/components/automate-ui, so if you run `ng generate component calendar` it will install correctly, but the folder it installs to is located at: /automate/components/automate-ui/<your angular project name>/src/app





## Good to knows

- Hit (cmd + shift + v) in VS code while working on a README to get a live preview of formatting

- Angular CLI: https://www.youtube.com/watch?v=FBtWsHmXuqY&list=PL6n9fhu94yhWUcq5Pc16uf8YKXoZ87Vh_&index=3

- Linx Brew Install - https://stackoverflow.com/questions/33353618/can-i-use-homebrew-on-ubuntu

- Docker run container w/ volume: docker run -it --name nginx-container -p 8899:8899 -v ~/Desktop/chef-nodejs/node-data:/data nginx-auto-ui bash

- Install node and npm: https://stackoverflow.com/questions/50329224/while-installing-node-js-the-command-apt-get-f-install-gave-error


