import React from 'react'
import PropTypes from 'prop-types'

const ReadingTime = ({spentTime}) => {
  return (
    <div className='bg-[#1111110D] mb-6 py-5 px-12 text-center rounded-lg text-[#6047EC] text-2xl font-bold'>
        <h1 className="text-2xl">Spent time on read : {spentTime} min</h1>
    </div>
  )
}

ReadingTime.propTypes = {}

export default ReadingTime