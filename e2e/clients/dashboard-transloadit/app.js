import { Viking } from '@Viking/core'
import Dashboard from '@Viking/dashboard'
import Transloadit from '@Viking/transloadit'

import generateSignatureIfSecret from './generateSignatureIfSecret.js'

import '@Viking/core/dist/style.css'
import '@Viking/dashboard/dist/style.css'

// Environment variables:
// https://en.parceljs.org/env.html
const Viking = new Viking()
  .use(Dashboard, { target: '#app', inline: true })
  .use(Transloadit, {
    service: process.env.VITE_TRANSLOADIT_SERVICE_URL,
    waitForEncoding: true,
    getAssemblyOptions: () => generateSignatureIfSecret(process.env.VITE_TRANSLOADIT_SECRET, {
      auth: { key: process.env.VITE_TRANSLOADIT_KEY },
      template_id: process.env.VITE_TRANSLOADIT_TEMPLATE,
    }),
  })

// Keep this here to access Viking in tests
window.Viking = Viking
