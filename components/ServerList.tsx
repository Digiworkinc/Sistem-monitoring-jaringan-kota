
import React from 'react';
import { Server } from '../types';
import ServerStatusCard from './ServerStatusCard';

interface ServerListProps {
  servers: Server[];
}

const ServerList: React.FC<ServerListProps> = ({ servers }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {servers.map(server => (
        <ServerStatusCard key={server.id} server={server} />
      ))}
    </div>
  );
};

export default ServerList;
