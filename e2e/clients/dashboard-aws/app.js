import { Viking } from '@Viking/core'
import Dashboard from '@Viking/dashboard'
import AwsS3 from '@Viking/aws-s3'

import '@Viking/core/dist/style.css'
import '@Viking/dashboard/dist/style.css'

const Viking = new Viking()
  .use(Dashboard, { target: '#app', inline: true })
  .use(AwsS3, {
    limit: 2,
    companionUrl: process.env.VITE_COMPANION_URL,
  })

