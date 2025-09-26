import blogsData from '../../data/blogs.json';

import { getReadby } from './All';
import { Link } from 'react-router-dom';

const Experiences = () => {

    const blogs = blogsData.filter(blog => blog.category === 'love' || blog.category === 'gaming');

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
                        >
                            {/* Background Image with Title Overlay */}
                            <div
                                className="relative h-48 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${post.photo_url})`,
                                }}
                            >
                                <div className="absolute inset-0 bg-black/75 flex items-center justify-center">
                                    <h2 className="text-xl font-bold text-white text-center px-4">
                                        {post.title.length > 150 ? `${post.title.slice(0, 150)}...` : post.title}
                                    </h2>
                                </div>
                            </div>
                            {/* Description and Read More Button */}
                            <div className="p-4">
                                <p className="text-gray-600 mb-4">
                                    {post.description.length > 200 ? `${post.description.slice(0, 200)}...` : post.description}
                                </p>
                                <div className='flex justify-between items-center'>
                                    <Link to={`/post/${post.id}`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                                        Read More
                                    </Link>
                                    <p className='text-blue-700 font-semibold'>
                                        Read by: {getReadby(post.user_id)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experiences