import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    ["import", { "libraryName": "antd", "style": "css" }] // `style: true` for less

  ],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/,
},
server: {
  proxy: {
    '/api': 'http://localhost:5000'  
  }
}
})
