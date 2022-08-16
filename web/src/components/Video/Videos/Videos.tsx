import { Link, routes, useLocation } from '@redwoodjs/router'

import VideoThumbnail from 'src/components/VideoThumbnail'

const VideosList = ({ videos }) => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const userId = searchParams.get('userId')
  const reaction = searchParams.get('reaction')

  return (
    <div className="flex flex-wrap gap-4">
      {videos
        .filter((video) => (userId ? video.user.id === parseInt(userId) : true))
        .filter((video) =>
          reaction
            ? video.reactions.filter((r) => r.type === reaction).length > 0
            : true
        )
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
