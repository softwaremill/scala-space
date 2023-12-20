export {};

declare global {
  interface Window {
    hbspt: {
      forms: {
        create({ portalId: string, formId: string, target: string });
      };
    };
  }
}
