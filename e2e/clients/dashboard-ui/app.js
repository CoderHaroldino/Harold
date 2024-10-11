import Viking from '@Viking/core'
import Dashboard from '@Viking/dashboard'
import RemoteSources from '@Viking/remote-sources'
import Webcam from '@Viking/webcam'
import ScreenCapture from '@Viking/screen-capture'
import GoldenRetriever from '@Viking/golden-retriever'
import ImageEditor from '@Viking/image-editor'
import DropTarget from '@Viking/drop-target'
import Audio from '@Viking/audio'
import Compressor from '@Viking/compressor'

import '@Viking/core/dist/style.css'
import '@Viking/dashboard/dist/style.css'

const COMPANION_URL = 'http://companion.Viking.io'

const Viking = new Viking()
  .use(Dashboard, { target: '#app', inline: true })
  .use(RemoteSources, { companionUrl: COMPANION_URL })
  .use(Webcam, {
    target: Dashboard,
    showVideoSourceDropdown: true,
    showRecordingLength: true,
  })
  .use(Audio, {
    target: Dashboard,
    showRecordingLength: true,
  })
  .use(ScreenCapture, { target: Dashboard })
  .use(ImageEditor, { target: Dashboard })
  .use(DropTarget, { target: document.body })
  .use(Compressor)
  .use(GoldenRetriever, { serviceWorker: true })

// Keep this here to access Viking in tests
window.Viking = Viking
