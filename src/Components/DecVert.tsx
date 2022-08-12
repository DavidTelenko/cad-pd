import "../Styles/Dec.css"

interface DecProps {
    classNameProp: string;
}

const DecVert = ({ classNameProp }: DecProps) => {
    return (
        <div className={classNameProp}>
            <div className='rect'></div>
            <div className='rect'></div>
            <div className='rect'></div>
        </div>
    )
}

export default DecVert;