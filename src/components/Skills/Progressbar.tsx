import React from 'react';

interface ProgressBarProps {
  progress: number; // Progress should be a value between 0 and 100
  height?: number; // Height of the progress bar
  color?: string; // Color of the progress fill
  backgroundColor?: string; // Background color of the progress bar
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  height = 18,
  color = 'var(--green)',
  backgroundColor = '#e0e0e0',
}) => {
  // Ensure progress is between 0 and 100
  const normalizedProgress = Math.max(0, Math.min(progress, 100));

  return (
    <div
      style={{
        height: `${height}px`,
        width: '100%',
        backgroundColor: backgroundColor,
        borderRadius: '5px',
        overflow: 'hidden',
        display: 'flex',
        alignItems:'center',
        border: '2px solid var(--green)'
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${normalizedProgress}%`,
          backgroundColor: color,
          transition: 'width 0.5s ease-in-out',
        }}
      />
    </div>
  );
};

export default ProgressBar;
