import { addComponent, defineNuxtModule } from "@nuxt/kit";

export default defineNuxtModule({
  setup() {
    // import { MyComponent as MyAutoImportedComponent } from 'my-npm-package'
    addComponent({
      name: "MyAutoImportedComponent",
      export: "MyComponent",
      filePath: "my-npm-package",
    });
  },
});
