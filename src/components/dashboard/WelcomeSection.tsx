import React from 'react';

export const WelcomeSection = () => {
  return (
    <div className="flex items-center gap-8 mb-16">
      <img
        src="/lovable-uploads/88cc5b7f-56f0-498d-8613-8276b53a4b49.png"
        alt="Luc-ia AI Assistant"
        className="w-64 h-64 object-cover rounded-lg shadow-lg"
      />
      <div className="text-center flex-1">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Welcome to <span className="text-[#9b87f5]">luc-ia</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Your 24/7 AI-powered virtual secretary, revolutionizing how you manage your business communications
        </p>
      </div>
    </div>
  );
};