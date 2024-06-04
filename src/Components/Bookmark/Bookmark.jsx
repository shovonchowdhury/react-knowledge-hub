
import React from 'react';
import { ImPieChart } from 'react-icons/im';

const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div className='my-4 p-5 bg-[white] rounded-md'>
            <h1 className="text-xl font-semibold">{title}</h1>
        </div>
    );
};

export default Bookmark;