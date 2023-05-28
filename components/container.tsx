type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="container desk:px-20 mx-auto md:px-24 lg:px-32 px-5">{children}</div>
}

export default Container
