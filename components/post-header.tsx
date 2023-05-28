import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import type Author from '../interfaces/author'
import user from '../public/assets/usuario.png'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block ml-20 md:mb-12">
        <Avatar name={author.name}  />
      </div>
      <div className=" mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} />
        </div>
        <div className="mb-6 text-lg  text-movittBlue">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
