import DefaultAvatar from './DefaultAvatar';
import Comments from './Comments';
import { getReadby } from '../pages/All';

interface Props {
    first_name: string;
    last_name: string;
    job: string;
    profile_picture: string;
    created_at: string;
    title: string;
    description: string;
    content_text: string;
    id: number;
    userId: number;
}

const getDate = (dateString: string | undefined, month: number) => {
    const date = new Date(dateString || '');
    date.setMonth(date.getMonth() + month);
    date.setDate(date.getDate() + month);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

const BlogSection = ({ first_name, userId, last_name, job, profile_picture, created_at, title, description, content_text, id }: Props) => {
    return (
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                    <header className="mb-4 lg:mb-6 not-format">
                        <address className="flex items-center mb-6 not-italic">
                            <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">

                                {profile_picture ? (
                                    <img className="mr-4 w-16 h-16 rounded-full" src={profile_picture} alt={`${first_name}`} />) :
                                    <DefaultAvatar />
                                }
                                <div>
                                    <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">{`${first_name} ${last_name}`}</a>
                                    <p className="text-base text-gray-500 dark:text-gray-400">{job}</p>
                                    <p className="text-base text-gray-500 dark:text-gray-400">
                                        <time className="text-sm font-light" dateTime={created_at}>
                                            {
                                                getDate(created_at, id % 12)
                                            }
                                        </time>
                                    </p>
                                </div>
                            </div>
                        </address>
                        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{title}</h1>
                    </header>
                    <p className="lead">{description}</p>
                    <p>{content_text}</p>

                    <p>Some pictures of new house built by Ashriya Nirman Sewa:</p>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <img src="../first.jpg" alt="Random" className="my-4 rounded-lg" />
                        <img src="../second.jpg" alt="Random" className="my-4 rounded-lg" />
                        <img src="../third.jpg" alt="Random" className="my-4 rounded-lg" />
                    </div>

                    <p className='font-light'>Read by: <span className='font-semibold'>{(getReadby(userId) * 1000).toLocaleString()}</span> people</p>

                    <Comments blogId={id} />
                </article>
            </div>
        </main>
    )
}

export default BlogSection