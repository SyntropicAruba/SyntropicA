import React from "react"
import Head from 'next/head'
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

function Submitted() {
  return (
    <>
      <Head>
        <title>Submitted</title>
        <meta name="description" content="Submitted message to SyntropicA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <section className="bg-gray-50 dark:bg-gray-800" style={{ height: "calc(100vh - 200px)" }}>
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mb-8 max-w-screen-md lg:mb-16 font-light text-gray-600 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white text-gray-800">Thanks for your message!</h2>
            <p className="mb-4">We'll get back to you as soon as possible</p>
            <a href="/" className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">Back to home</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Submitted