import React from 'react'

export default function AFPortfolioBtn(props) {

    // default styles
    let bgColor = 'bg-emerald-500 border-emerald-800 md:hover:bg-emerald-600'

    if (props.type === 'caution') {
        bgColor = 'bg-amber-500 border-amber-800 md:hover:bg-amber-600'
    }



  return (
    <>
        <button 
            className={`p-1 rounded-xl border-2 ${bgColor}`}
        >
            {props.btnText}
        </button>
    </>
  )
}
