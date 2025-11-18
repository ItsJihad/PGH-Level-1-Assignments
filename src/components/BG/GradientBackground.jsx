function GradientBackground({ children, className = "" }) {
  return (
    <div className="relative w-full min-h-screen">
      {/* The Fixed Background Layer (The Gradient Orbs)
        This div is fixed to the viewport and sits behind everything (z-0).
      */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Orb 1: Top-Left Blue/Purple */}
        <div className="absolute -top-48 -left-48 w-[800px] h-[800px] bg-gradient-to-br from-blue-400/20 via-purple-900/15 to-transparent rounded-full blur-[120px] animate-float"></div>

        {/* Orb 2: Top-Right Purple/Pink */}
        <div className="absolute top-1/4 -right-64 w-[700px] h-[700px] bg-gradient-to-bl from-purple-400/20 via-pink-300/15 to-transparent rounded-full blur-[100px] animate-float-delayed"></div>

        {/* Orb 3: Bottom-Left Cyan/Teal */}
        <div className="absolute -bottom-32 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-400/20 via-teal-300/15 to-transparent rounded-full blur-[100px] animate-float-slow"></div>

        {/* Orb 4: Center-Large Blur (Subtle pulse effect) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-br from-indigo-300/10 via-violet-300/8 to-transparent rounded-full blur-[120px] animate-pulse-slow"></div>

        {/* Static Base Layer (The overall, subtle background tint) */}
        <div className="absolute inset-0   dark:from-neutral-900/40 dark:via-neutral-950/20 dark:to-neutral-900/40"></div>
        <div className="absolute inset-0   dark:from-pink-950/10 dark:via-transparent dark:to-indigo-950/10"></div>
      </div>

      {/* Main Content Wrapper
        This div wraps all the children and applies the optional external classNames.
        It must be z-indexed higher than the background.
      */}
      <div className={`relative z-10 ${className}`}>{children}</div>
    </div>
  );
}

export default GradientBackground;
