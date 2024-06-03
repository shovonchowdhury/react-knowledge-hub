import PropTypes from 'prop-types';
import './Blog.css'
import { BsBookmark } from "react-icons/bs";
const Blog = ({blog}) => {

    const {title,cover_img,author,author_img,posted_date,reading_time,hashtags}=blog;
    return (
        <div className='space-y-8 mb-28 border-b-2 pb-3'>
            <img className='' src={cover_img} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex gap-6 items-center'>
                    <img className='img-round' src={author_img} alt="" />
                    <div>
                        <h2 className='text-2xl font-bold'>{author}</h2>
                        <span className='text-[#11111199]'>{posted_date}</span>
                    </div>
                </div>
                <div className='text-xl font-medium text-[#11111199]'>
                    <span>{reading_time} min read</span>
                    <button className='ml-2'><BsBookmark /></button>
                </div>
            </div>
            <h1 className="text-4xl font-bold">{title}</h1>
            <p>
            {
                hashtags.map((hashtag,idx)=> <a className='text-[#11111199]' key={idx} href=''>#{hashtag}   </a>)
            }
            </p>

        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired
}
export default Blog;