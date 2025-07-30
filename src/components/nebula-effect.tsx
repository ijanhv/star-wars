import React from "react";

const NebulaEffect = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default NebulaEffect;
