import React from 'react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="bg-red-600 text-white p-4 rounded-lg text-center">
      {message}
    </div>
  );
};

export default ErrorMessage;