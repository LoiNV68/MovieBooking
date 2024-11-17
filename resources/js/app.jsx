import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import Main from "./Layouts/Main";
import NiceSelect from "nice-select2";
import "nice-select2/dist/css/nice-select2.css";


createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        let page = pages[`./Pages/${name}.jsx`];
        page.default.layout =
            page.default.layout || ((page) => <Main>{page}</Main>);
        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});

// // Khởi tạo lại niceSelect mỗi khi chuyển trang

