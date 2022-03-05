import React from 'react'

const Interests = ({ value, interests , selectInterest }) => {
    return (
        value.length ? <div className="w-auto bg-gray-200 border h-auto   absolute top-12 rounded">
            {interests.filter(item => item.title.toLowerCase().includes(value.toLowerCase())).map(item => <div key={item._id} className="p-2 font-main cursor-pointer hover:bg-gray-300" onClick={() => selectInterest(item)}>
                {item.title}
            </div>)}
        </div> : ""
    )
}

export default Interests