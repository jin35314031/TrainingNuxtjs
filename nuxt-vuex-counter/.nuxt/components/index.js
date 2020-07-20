export { default as Counter } from '../../components/Counter.vue'
export { default as Logo } from '../../components/Logo.vue'

export const LazyCounter = import('../../components/Counter.vue' /* webpackChunkName: "components/Counter'}" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo'}" */).then(c => c.default || c)
