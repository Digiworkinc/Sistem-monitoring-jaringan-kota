
import React from 'react';
import { Server } from '../types';
import StatusIndicator from './StatusIndicator';
import { ServerIcon, GlobeAltIcon } from './icons';

interface ServerStatusCardProps {
  server: Server;
}

const ServerStatusCard: React.FC<ServerStatusCardProps> = ({ server }) => {
  return (
    <div className="bg-slate-800/50 rounded-lg shadow-lg border border-slate-700 p-5 flex flex-col justify-between transition-all duration-300 hover:border-cyan-500 hover:shadow-cyan-500/10">
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-white truncate" title={server.name}>
            {server.name}
          </h2>
          <StatusIndicator status={server.status} />
        </div>
        <div className="space-y-3 text-slate-400">
          <div className="flex items-center space-x-2">
            <ServerIcon className="w-5 h-5 text-slate-500" />
            <span className="font-mono text-sm">{server.ipAddress}</span>
          </div>
          <div className="flex items-center space-x-2">
            <GlobeAltIcon className="w-5 h-5 text-slate-500" />
            <span className="text-sm">{server.location}</span>
          </div>
        </div>
      </div>
       <div className="text-right mt-4">
          <p className="text-xs text-slate-500 font-mono">{server.id}</p>
        </div>
    </div>
  );
};

export default ServerStatusCard;
