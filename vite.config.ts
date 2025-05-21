/************************************************************[ IMPORTS ]*/
/************************************[ NPM MODULES ]*/
import { UserConfig, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
/****************************************************/
/************************************************************************/


/********************************************************[ VITE CONFIG ]*/
const viteConfig: UserConfig = defineConfig({
    plugins: [react()],
    resolve: {
        // -- enables path aliases to simplify imports across the app
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
});

export default viteConfig;
/************************************************************************/