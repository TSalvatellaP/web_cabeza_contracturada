// vite.config.js
import { defineConfig } from "file:///mnt/c/Users/Usuario/Documents/03.%20PROYECTOS%20ARTISTICOS/WEB%20TANIA/web_cabeza_contracturada/node_modules/vite/dist/node/index.js";
import injectHTML from "file:///mnt/c/Users/Usuario/Documents/03.%20PROYECTOS%20ARTISTICOS/WEB%20TANIA/web_cabeza_contracturada/node_modules/vite-plugin-html-inject/dist/index.mjs";
import { ViteImageOptimizer } from "file:///mnt/c/Users/Usuario/Documents/03.%20PROYECTOS%20ARTISTICOS/WEB%20TANIA/web_cabeza_contracturada/node_modules/vite-plugin-image-optimizer/dist/index.mjs";
import concat from "file:///mnt/c/Users/Usuario/Documents/03.%20PROYECTOS%20ARTISTICOS/WEB%20TANIA/web_cabeza_contracturada/node_modules/@vituum/vite-plugin-concat/index.js";
import FastGlob from "file:///mnt/c/Users/Usuario/Documents/03.%20PROYECTOS%20ARTISTICOS/WEB%20TANIA/web_cabeza_contracturada/node_modules/fast-glob/out/index.js";
import path from "node:path";
import { fileURLToPath } from "node:url";
var __vite_injected_original_import_meta_url = "file:///mnt/c/Users/Usuario/Documents/03.%20PROYECTOS%20ARTISTICOS/WEB%20TANIA/web_cabeza_contracturada/vite.config.js";
var htmlFilesList = Object.fromEntries(
  FastGlob.sync("src/*.html").map((file) => [
    // This remove `src/` as well as the file extension from each
    // file, so e.g. src/nested/foo.js becomes nested/foo
    path.relative(
      "src",
      file.slice(0, file.length - path.extname(file).length)
    ),
    // This expands the relative paths to absolute paths, so e.g.
    // src/nested/foo becomes /project/src/nested/foo.js
    fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
  ])
);
var inputFilesList = {
  ...htmlFilesList,
  "main": "src/js/main.js"
};
var vite_config_default = defineConfig({
  base: "./",
  root: "src",
  publicDir: "../public",
  build: {
    minify: "esbuild",
    outDir: "../docs",
    sourcemap: "inline",
    emptyOutDir: true,
    rollupOptions: {
      input: inputFilesList,
      output: {
        sourcemap: true,
        entryFileNames: ({ name }) => {
          if (name === "main") {
            return "js/main.js";
          }
          return "[name].js";
        }
      }
    }
  },
  server: {
    open: "/index.html",
    watch: {
      usePolling: true
    }
  },
  plugins: [
    injectHTML(),
    ViteImageOptimizer({
      /* pass your config */
    }),
    concat({
      input: ["main.js"]
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2MvVXNlcnMvVXN1YXJpby9Eb2N1bWVudHMvMDMuIFBST1lFQ1RPUyBBUlRJU1RJQ09TL1dFQiBUQU5JQS93ZWJfY2FiZXphX2NvbnRyYWN0dXJhZGFcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9tbnQvYy9Vc2Vycy9Vc3VhcmlvL0RvY3VtZW50cy8wMy4gUFJPWUVDVE9TIEFSVElTVElDT1MvV0VCIFRBTklBL3dlYl9jYWJlemFfY29udHJhY3R1cmFkYS92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vbW50L2MvVXNlcnMvVXN1YXJpby9Eb2N1bWVudHMvMDMuJTIwUFJPWUVDVE9TJTIwQVJUSVNUSUNPUy9XRUIlMjBUQU5JQS93ZWJfY2FiZXphX2NvbnRyYWN0dXJhZGEvdml0ZS5jb25maWcuanNcIjsvLyB2aXRlLmNvbmZpZy5qc1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbi8vIGh0bWwgcGFydGFsc1xuaW1wb3J0IGluamVjdEhUTUwgZnJvbSBcInZpdGUtcGx1Z2luLWh0bWwtaW5qZWN0XCI7XG4vLyBvcHRpbWl6ZSBpbWFnZXNcbmltcG9ydCB7IFZpdGVJbWFnZU9wdGltaXplciB9IGZyb20gJ3ZpdGUtcGx1Z2luLWltYWdlLW9wdGltaXplcic7XG4vLyBDb25jYXRlbmF0ZSBKYXZhU2NyaXB0IGZpbGVzIChsaWtlIGZvcm1lciBTdGFydGVyIEtpdClcbmltcG9ydCBjb25jYXQgZnJvbSAnQHZpdHV1bS92aXRlLXBsdWdpbi1jb25jYXQnXG4vLyBDYWxjdWxhdGUgcGF0aHNcbmltcG9ydCBGYXN0R2xvYiBmcm9tICdmYXN0LWdsb2InXG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJztcblxuLy8gR2V0IGFsbCBodG1sIGZpbGVzXG5jb25zdCBodG1sRmlsZXNMaXN0ID0gT2JqZWN0LmZyb21FbnRyaWVzKFxuICBGYXN0R2xvYi5zeW5jKCdzcmMvKi5odG1sJykubWFwKGZpbGUgPT4gW1xuICAgIC8vIFRoaXMgcmVtb3ZlIGBzcmMvYCBhcyB3ZWxsIGFzIHRoZSBmaWxlIGV4dGVuc2lvbiBmcm9tIGVhY2hcbiAgICAvLyBmaWxlLCBzbyBlLmcuIHNyYy9uZXN0ZWQvZm9vLmpzIGJlY29tZXMgbmVzdGVkL2Zvb1xuICAgIHBhdGgucmVsYXRpdmUoXG4gICAgICAnc3JjJyxcbiAgICAgIGZpbGUuc2xpY2UoMCwgZmlsZS5sZW5ndGggLSBwYXRoLmV4dG5hbWUoZmlsZSkubGVuZ3RoKVxuICAgICksXG4gICAgLy8gVGhpcyBleHBhbmRzIHRoZSByZWxhdGl2ZSBwYXRocyB0byBhYnNvbHV0ZSBwYXRocywgc28gZS5nLlxuICAgIC8vIHNyYy9uZXN0ZWQvZm9vIGJlY29tZXMgL3Byb2plY3Qvc3JjL25lc3RlZC9mb28uanNcbiAgICBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoZmlsZSwgaW1wb3J0Lm1ldGEudXJsKSlcbiAgXSkpO1xuXG5jb25zdCBpbnB1dEZpbGVzTGlzdCA9IHtcbiAgLi4uaHRtbEZpbGVzTGlzdCxcbiAgJ21haW4nOiAnc3JjL2pzL21haW4uanMnLFxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBiYXNlOiBcIi4vXCIsXG4gIHJvb3Q6IFwic3JjXCIsXG4gIHB1YmxpY0RpcjogXCIuLi9wdWJsaWNcIixcbiAgYnVpbGQ6IHtcbiAgICBtaW5pZnk6IFwiZXNidWlsZFwiLFxuICAgIG91dERpcjogXCIuLi9kb2NzXCIsXG4gICAgc291cmNlbWFwOiBcImlubGluZVwiLFxuICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGlucHV0OiBpbnB1dEZpbGVzTGlzdCxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiAoe25hbWV9KSA9PiB7XG4gICAgICAgICAgaWYoIG5hbWUgPT09ICdtYWluJyApIHtcbiAgICAgICAgICAgIHJldHVybiAnanMvbWFpbi5qcyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGRlZmF1bHQgdmFsdWVcbiAgICAgICAgICAvLyByZWY6IGh0dHBzOi8vcm9sbHVwanMub3JnL2NvbmZpZ3VyYXRpb24tb3B0aW9ucy8jb3V0cHV0LWVudHJ5ZmlsZW5hbWVzXG4gICAgICAgICAgcmV0dXJuIFwiW25hbWVdLmpzXCI7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIG9wZW46IFwiL2luZGV4Lmh0bWxcIixcbiAgICB3YXRjaDp7XG4gICAgICB1c2VQb2xsaW5nOnRydWVcbiAgICB9XG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICBpbmplY3RIVE1MKCksXG4gICAgVml0ZUltYWdlT3B0aW1pemVyKHtcbiAgICAgIC8qIHBhc3MgeW91ciBjb25maWcgKi9cbiAgICB9KSxcbiAgICBjb25jYXQoe1xuICAgICAgaW5wdXQ6IFsnbWFpbi5qcyddXG4gICAgfSksXG4gIF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLG9CQUFvQjtBQUU3QixPQUFPLGdCQUFnQjtBQUV2QixTQUFTLDBCQUEwQjtBQUVuQyxPQUFPLFlBQVk7QUFFbkIsT0FBTyxjQUFjO0FBQ3JCLE9BQU8sVUFBVTtBQUNqQixTQUFTLHFCQUFxQjtBQVg4UCxJQUFNLDJDQUEyQztBQWM3VSxJQUFNLGdCQUFnQixPQUFPO0FBQUEsRUFDM0IsU0FBUyxLQUFLLFlBQVksRUFBRSxJQUFJLFVBQVE7QUFBQTtBQUFBO0FBQUEsSUFHdEMsS0FBSztBQUFBLE1BQ0g7QUFBQSxNQUNBLEtBQUssTUFBTSxHQUFHLEtBQUssU0FBUyxLQUFLLFFBQVEsSUFBSSxFQUFFLE1BQU07QUFBQSxJQUN2RDtBQUFBO0FBQUE7QUFBQSxJQUdBLGNBQWMsSUFBSSxJQUFJLE1BQU0sd0NBQWUsQ0FBQztBQUFBLEVBQzlDLENBQUM7QUFBQztBQUVKLElBQU0saUJBQWlCO0FBQUEsRUFDckIsR0FBRztBQUFBLEVBQ0gsUUFBUTtBQUNWO0FBRUEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sV0FBVztBQUFBLEVBQ1gsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLElBQ1gsYUFBYTtBQUFBLElBQ2IsZUFBZTtBQUFBLE1BQ2IsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLFFBQ04sV0FBVztBQUFBLFFBQ1gsZ0JBQWdCLENBQUMsRUFBQyxLQUFJLE1BQU07QUFDMUIsY0FBSSxTQUFTLFFBQVM7QUFDcEIsbUJBQU87QUFBQSxVQUNUO0FBR0EsaUJBQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFNO0FBQUEsTUFDSixZQUFXO0FBQUEsSUFDYjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLFdBQVc7QUFBQSxJQUNYLG1CQUFtQjtBQUFBO0FBQUEsSUFFbkIsQ0FBQztBQUFBLElBQ0QsT0FBTztBQUFBLE1BQ0wsT0FBTyxDQUFDLFNBQVM7QUFBQSxJQUNuQixDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
