import React from 'react';
import './App.css';

const projects = () => {
    return (

        <section id="projects" class="project">
            <div class="containers">
                <h2 class="new-projects">New projects coming soon.. 🤠</h2>
            </div>
            <div className='flex justify-center items-center text-center mt-[22px]'>
                <div className="project-card">
                {/* Project Video */}
                <video
                    src='/public/TODOAPP.mp4'
                    width="560"
                    height="315"
                    controls
                    className="project-video"
                >
                    <source src='/public/TODOAPP.mp4' type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="project-info">
                    {/* Project Title and Description */}
                    <h3 className="text-2xl font-bold mb-4 text-[22px] mt-[12px]">TodoApp</h3>
                    <p className="text-lg mb-4">
                        A simple Todo App built using React - Material-UI - Firebase
                    </p>

                    {/* View Project Link */}
                    <a
                        href="https://todoapp-react-lovat.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline hover:text-blue-700"
                    >
                        View Project
                    </a>
                </div>
                </div>
            </div>
        </section>

    );
};

export default projects;
