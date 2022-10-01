import type { NextPage } from 'next'

const MessageForm: NextPage = () => {
    return (
        <section id="contact" className="bg-gray-50 dark:bg-gray-900 dark:bg-gray-800 text-gray-800">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm">
                    <h2 className="text-center mb-2 mt-1 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white">Contact Us</h2>
                    <div className="text-center mb-6 max-w-2xl font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Feel free to drop us a message</div>
                    <form action="https://formsubmit.co/your@email.com" method="POST">
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input type="text" name="name" required className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight  focus:ring-primary-300 dark:focus:ring-primary-900" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Email
                            </label>
                            <input type="email" name="email" required className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight  focus:ring-primary-300 dark:focus:ring-primary-900" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Your message
                            </label>
                            <textarea name="message" rows={10} required className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:ring-primary-300 dark:focus:ring-primary-900"></textarea>
                        </div>
                        {/* TODO: Add domain here instead */}
                        <input type="hidden" name="_next" value="/submitted"></input>
                        <button type="submit" className="inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-500 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900">Send</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default MessageForm