import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative inline-block border border-gray-400">
        <div className="text-white font-bold px-3 py-1 relative">
          <div className="text-sm mb-[-6px]">the</div>
          <div className="text-xl leading-tight">spatial</div>
          <div className="text-xl leading-tight">network</div>
        </div>
        <div className="absolute top-0 left-0 h-3 w-3 border-t border-l border-white"></div>
        <div className="absolute top-0 right-0 h-3 w-3 border-t border-r border-white"></div>
        <div className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-white"></div>
        <div className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-white"></div>
      </div>
    </div>
  );
};

export default Logo;