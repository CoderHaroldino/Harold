import Dashboard from '@Viking/dashboard'
import AwsS3Multipart from '@Viking/aws-s3-multipart'

import '@Viking/core/dist/style.css'
import '@Viking/dashboard/dist/style.css'

//#TODO tests
const Viking = new Viking()
  .use(Dashboard, { target: '#app', inline: true })
  .use(AwsS3Multipart, {
    limit: 2,
    companionUrl: process.env.VITE_COMPANION_URL,
    // This way we can test that the user provided API still works
    async prepareUploadParts (file, { uploadId, key, parts, signal }) {
      const { number: partNumber, chunk: body } = parts[0]
      const plugin = Viking.getPlugin('AwsS3Multipart')
      const { url } = await plugin.signPart(file, { uploadId, key, partNumber, body, signal })
      return { presignedUrls: { [partNumber]: url } }
    },
  })

// Keep this here to access Viking in tests
window.Viking = Viking
