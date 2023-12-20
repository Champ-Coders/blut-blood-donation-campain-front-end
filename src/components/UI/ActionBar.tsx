
type AcationBarProps = {
  title: string;
  children: React.ReactNode;
};

const ActionBar = ({ title, children }: AcationBarProps) => {
  return (
    <div>
      <h1>{title}</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          marginTop: "20px",
          width: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ActionBar;

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

