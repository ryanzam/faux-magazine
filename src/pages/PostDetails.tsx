import { useParams } from 'react-router-dom';
import blogsData from '../../data/blogs.json';
import usersData from '../../data/users.json';
import BlogSection from '../components/BlogSection';
import type { Blog } from './All';

interface User {
    first_name: string;
    last_name: string;
    email: string;
    profile_picture: string;
    job: string;
}

const PostDetails = () => {

    const { id } = useParams();

    const blog: Blog = blogsData.find(b => b.id === Number(id)) as Blog
    const user: User = usersData.find(u => u.id === blog.user_id) as User

    const { created_at, title, description, content_text } = blog
    const { first_name, last_name, job, profile_picture } = user

    return (
        <>
            <BlogSection first_name={first_name} last_name={last_name} job={job}
                profile_picture={profile_picture} created_at={created_at} title={title} description={description}
                content_text={content_text} id={Number(id)} userId={blog.user_id}/>
        </>
    )
}

export default PostDetails