function Logo() {
  return (
    <div className="flex items-center gap-x-2">
      <div className="w-8 h-8 bg-gradient-to-br from-primary-900 to-primary-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-black text-xl">D</span>
      </div>
      <div className="flex items-center gap-x-1">
        <span className="text-primary-900 font-black text-xl">Dashboard</span>
        <span className="text-secondary-500 font-semibold text-sm">App</span>
      </div>
    </div>
  );
}

export default Logo;
