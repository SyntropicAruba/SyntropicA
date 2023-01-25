import Image from 'next/image'
import { usePlacesWidget } from "react-google-autocomplete";

const SignUpForm = ({ email }: { email: string }) => {
    const { ref } = usePlacesWidget<HTMLInputElement>({
        apiKey:"AIzaSyDjdA-HFOc-BHL9uA-cNbGQQQs9b606CuA",
        options: {
            types: ["address"],
            componentRestrictions: { country: "aw" }

        },        
        onPlaceSelected: (place) => {
          console.log(place);
        }
      });
    
    return (        
        <section id="contact" className="bg-gray-50 dark:bg-gray-900 dark:bg-gray-800 text-gray-800">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm">
                    <Image src="/Illustration.png" width="900" height="568" className="w-full rounded-lg" />
                    <h2 className="text-center mb-2 mt-1 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white">Sign up for a Food Forest</h2>
                    <div className="text-center mb-6 max-w-2xl font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Our community will be happy to help you! </div>
                    <form action={`https://formsubmit.co/${email}`} method="POST" autoComplete="off">
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input type="text" name="name" required className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight  focus:ring-primary-300 dark:focus:ring-primary-900" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input type="email" name="email" required className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight  focus:ring-primary-300 dark:focus:ring-primary-900" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="size">
                                Size of your plot (m2)
                            </label>
                            <input type="number" name="size" required className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight  focus:ring-primary-300 dark:focus:ring-primary-900" />
                        </div>   
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                                Location
                            </label>
                            <input ref={ref} type="search" name="location" required className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight  focus:ring-primary-300 dark:focus:ring-primary-900" /> 
                        </div>                                                
                        <input className="invisible" type="text" name="_honey"></input>
                        <input type="hidden" name="_subject" value="New Sign Up!"></input>
                        <input type="hidden" name="_captcha" value="false"></input>
                        <input type="hidden" name="_next" value="https://syntropica.co/submitted"></input>
                        <div className="mb-6 text-center">
                        <button type="submit" className="inline-flex justify-center items-center py-3 px-10 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-500 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900">Send</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignUpForm