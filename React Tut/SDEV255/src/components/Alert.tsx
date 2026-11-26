
interface Props{
    children: React.ReactNode;
    className?: string;
}

const Alert = ({children, className}: Props) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default Alert