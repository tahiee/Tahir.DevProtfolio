import React from 'react'
import './App.css'
const Footer = () => {
    return (
        <>
            <footer class="bg-gray-800 py-20">
                <div class="container mx-auto">
                    <div class="flex items-center justify-between">
                        <h3 class="text-white text-lg">Copyright © 2024. All rights are reserved</h3>
                        <div class="flex items-center gap-8 mt-4">
                            <a aria-label="linkedin" href="https://www.linkedin.com/in/m-tahir-khan-niazi-10730a1b4/" target="_blank" rel="noreferrer">
                                <svg class="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4m0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11l0 5"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8l0 .01"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 16l0-5"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 16v-3a2 2 0 0 0-4 0"></path>
                                </svg>
                            </a>
                            <a aria-label="github" href="https://github.com/tahiee" target="_blank" rel="noreferrer">
                                <svg class="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0c-2.4-1.6-3.5-1.3-3.5-1.3a4.2 4.2 0 0 0-.1 3.2a4.6 4.6 0 0 0-1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2v3.5"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default Footer