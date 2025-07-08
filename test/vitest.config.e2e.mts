import swc from 'unplugin-swc'
import path from 'path';
import { defineConfig } from 'vitest/config'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  test: {
    include: ['**/*.e2e-spec.ts'],
    globals: true,
    root: './',
    setupFiles: ['./test/setup-e2e.mts'], // Configuração que informa que esse arquivo será chamado/instanciado no início de cada teste
  },
  plugins: [
    tsConfigPaths(),
    swc.vite({
      module: { type: 'es6' },
    }),
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, '../src'),
    },
  },
})