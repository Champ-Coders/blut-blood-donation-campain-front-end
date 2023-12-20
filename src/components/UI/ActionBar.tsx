interface IProps {
    title:string;
    children?:React.ReactNode
}

const ActionBar = ({title,children}:IProps) => {
  return (
    <div>
        <h1 className="text-start text-xl font-bold font-roboto my-1">{title}</h1>

        <div className="flex justify-between items-center my-3 mx-0">
            {children}
        </div>
    </div>
  )
}
export default ActionBar