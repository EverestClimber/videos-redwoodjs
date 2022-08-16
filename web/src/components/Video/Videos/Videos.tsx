import { Link, routes, useLocation } from '@redwoodjs/router'

import VideoThumbnail from 'src/components/VideoThumbnail'

const VideosList = ({ videos }) => {
  const location = useLocation()
  const userId = location.search.split('?userId=')?.[1]

  return (
    <div className="flex flex-wrap gap-4">
      {videos
        .filter((video) => (userId ? video.user.id === parseInt(userId) : true))
        .map((video) => (
          <div key={video.id}>
            <Link to={routes.video({ id: video.id })}>
              <VideoThumbnail video={video} />
              <div>{video.title}</div>
            </Link>
          </div>
        ))}
    </div>
  )
}

export default VideosList
