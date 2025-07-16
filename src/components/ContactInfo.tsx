import React from "react";

const ContactInfo: React.FC = () => (
  <div className="mt-8 w-full flex flex-col items-center">
    <div className="bg-gradient-to-br from-blue-100 to-blue-300 rounded-2xl shadow-xl px-8 py-6 border-2 border-blue-400 w-full max-w-3xl sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
      <h2 className="text-2xl font-extrabold text-blue-700 mb-4 text-center tracking-wide">Contact Info</h2>
      <div className="flex flex-row items-center justify-center gap-4 w-full mt-2">
        <a href="mailto:ydv17gaurav@gmail.com" className="flex flex-col items-center bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-2xl font-bold shadow transition duration-150 w-28 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12l-4-4-4 4m8 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0V6a2 2 0 00-2-2H6a2 2 0 00-2 2v6" /></svg>
          Email
        </a>
        <a href="https://github.com/raogaurav17" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center bg-gray-800 hover:bg-gray-900 text-white px-5 py-3 rounded-2xl font-bold shadow transition duration-150 w-28 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mb-1" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.646.35-1.088.636-1.34-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.578.688.48C19.138 20.175 22 16.427 22 12.012 22 6.484 17.523 2 12 2z"/></svg>
          GitHub
        </a>
        <a href="https://linkedin.com/in/ydv17gaurav" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-2xl font-bold shadow transition duration-150 w-28 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mb-1" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
          LinkedIn
        </a>
      </div>
      <div className="mt-6 text-center text-gray-500 text-sm">
        <span>Feel free to reach out for collaboration, feedback, or questions!</span>
      </div>
    </div>
  </div>
);

export default ContactInfo;
