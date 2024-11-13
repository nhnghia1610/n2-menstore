import React from 'react';

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="max-w-[1900px] mx-auto bg-gray-50 shadow-lg rounded-lg">
      {children}
    </div>
  );
};

export default Wrapper;
