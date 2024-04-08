import { createApp, h } from 'vue';


export const useResolvedModal = (component: any, props: any) => {
  return new Promise(resolve => {
    const dialogContainer = document.createElement('div');
    document.body.appendChild(dialogContainer);

    const app = createApp({
      setup() {
        const onDestroy = (result: boolean) => {
          app.unmount();
          document.body.removeChild(dialogContainer);
          resolve(result);
        };
        return {
          onDestroy
        };
      },
      render() {
        return h(component, {
          ...props,
          onDestroy: this.onDestroy
        });
      }
    });
    //Needed plugins
    // app.use(ui.setup, ui.config);
    app.mount(dialogContainer);
  });
};

