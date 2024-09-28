import Compressor from '@Viking/compressor'
import Dashboard from '@Viking/dashboard'
import '@Viking/core/dist/style.css'
import '@Viking/dashboard/dist/style.css'

const Viking = new Viking()
  .use(Dashboard, {
    target: document.body,
    inline: true,
  })
  .use(Compressor, {
    mimeType: 'image/webp',
  })

// Keep this here to access Viking in tests
window.Viking = Viking
