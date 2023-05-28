// import user from '../public/assets/usuario.png'

type Props = {
  name: string
  // picture: any 
}

const Avatar = ({ name }: Props) => {
  return (
    <div className="flex items-center desk:ml-20 xl:mt-7">
      {/* <img src={picture || user} className="w-12 h-12 rounded-full mr-4" alt={name} /> */}
      <div className="text-xl  desk:-ml-20 font-bold text-principalYellow">{name}</div>
    </div>
  )
}

export default Avatar
