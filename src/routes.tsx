import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import App from './App'
import Dashboard from './pages/Dashboard'
import PromptEditor from './pages/PromptEditor'
import ModelComparison from './pages/ModelComparison'

const rootRoute = createRootRoute({
  component: App,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Dashboard,
})

const editorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/editor',
  component: PromptEditor,
})

const comparisonRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compare',
  component: ModelComparison,
})

const routeTree = rootRoute.addChildren([indexRoute, editorRoute, comparisonRoute])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
