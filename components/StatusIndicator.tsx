
import React from 'react';
import { ServerStatus } from '../types';

interface StatusIndicatorProps {
  status: ServerStatus;
}

const statusStyles = {
  [ServerStatus.Online]: {
    dot: 'bg-green-500',
    text: 'text-green-400',
    pulse: 'animate-pulse',
  },
  [ServerStatus.Warning]: {
    dot: 'bg-yellow-500',
    text: 'text-yellow-400',
    pulse: 'animate-pulse',
  },
  [ServerStatus.Offline]: {
    dot: 'bg-red-500',
    text: 'text-red-400',
    pulse: '',
  },
};

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status }) => {
  const styles = statusStyles[status];

  return (
    <div className="flex items-center space-x-2">
      <div className={`w-3 h-3 rounded-full ${styles.dot} ${styles.pulse}`}></div>
      <span className={`font-semibold text-sm ${styles.text}`}>{status}</span>
    </div>
  );
};

export default StatusIndicator;
