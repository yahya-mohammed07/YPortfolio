import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        // Modern baseline: no legacy transpilation weight for browsers that all
        // support the syntax already.
        target: 'es2020',
        cssTarget: 'chrome100',
    },
});
