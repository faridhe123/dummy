import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';



export default defineConfig({
    build : {
        emptyOutDir: true,
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            // buildDirectory: 'bundle',
            refresh: true,
        }),
    ],
});

// import.meta.glob

// vite.config.js
// import { resolve } from "path";
// import { defineConfig } from "vite";
// import glob from "glob";
//
// export default defineConfig({
//     root: "src",
//     build: {
//         outDir: "../dist",
//         rollupOptions: {
//             input: glob.sync(
//                 resolve(__dirname, "src", "**/*.html")
//             ),
//         },
//     },
// });
