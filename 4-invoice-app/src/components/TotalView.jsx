export const TotalView  = ({total}) => {
    return (
        <>
            <div className="text-end bg-info">
                <span className="badge">{ total }</span> 
            </div>       
        </>
    )
}