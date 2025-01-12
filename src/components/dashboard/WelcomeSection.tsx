import React from 'react';

export const WelcomeSection = () => {
  return (
    <div className="flex items-center gap-8 mb-16">
      <img
        src="/lovable-uploads/6e388c46-639c-4af7-b65b-588cd7e2edf7.png"
        alt="Luc-ia AI Assistant"
        className="w-64 h-64 object-cover rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      />
      <div className="text-center flex-1">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Welcome to <span className="text-[#9b87f5]">Luc-ia</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Your 24/7 AI-powered virtual secretary, revolutionizing how you manage your business communications
        </p>
      </div>
    </div>
  );
};