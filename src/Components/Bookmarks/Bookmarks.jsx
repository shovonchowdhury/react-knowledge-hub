import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks}) => {
    return (
        <div className=" bg-[#1111110D] p-7 rounded-lg">
            <div className="text-center">
                <h className="text-3xl font-bold">Bookmarked Blogs:{bookmarks.length}</h>
            </div>
            {
                bookmarks.map(bookmark=> <Bookmark bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;