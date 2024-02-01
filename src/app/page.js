import styles from './page.module.css'
import OurVideoPlayer from '@/components/ourVideoPlayer/ourVideoPlayer'

export default async function Page() {

  return (
    <main className={styles.page}>

        <OurVideoPlayer path={'https://player.vimeo.com/progressive_redirect/playback/862937181/rendition/1080p/file.mp4?loc=external&log_user=0&signature=14e7571119f7fadf5f56f0d7a4a47207f24be9520de1d5feace1db42ead02ff8'}></OurVideoPlayer>
     
    </main>
  )
}

