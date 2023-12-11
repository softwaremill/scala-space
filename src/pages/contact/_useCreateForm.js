import { useEffect } from "react";

const createForm = () => {
  if (window.hbspt) {
    window.hbspt.forms.create({
      portalId: "2404976",
      formId: "62a4e045-63ff-41c2-a9dd-66b4f2d54a77",
      target: "#hubspot-form",
    });
  }
};

export const useCreateForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", createForm);

    return () => {
      script.removeEventListener("load", createForm);
    };
  }, []);
};
