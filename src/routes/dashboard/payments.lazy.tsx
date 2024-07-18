import { createLazyFileRoute } from '@tanstack/react-router'
import Dashboard from '../../pages/dashboard'

export const Route = createLazyFileRoute('/dashboard/payments')({
  component: () => (
    <Dashboard>
      Welcome to Payments
    </Dashboard>
  )
})