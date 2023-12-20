if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    const sidebarHook = document.createElement("div");
    sidebarHook.id = "sidebar-hook";

    if (body !== null) body.appendChild(sidebarHook);
  });
}
