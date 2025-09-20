
import React, { useState, useEffect } from 'react';
import { Server, ServerStatus } from './types';
import Header from './components/Header';
import ServerList from './components/ServerList';

const initialServers: Server[] = [
  { id: 'SVR-JKT-01', name: 'Server Jakarta Pusat', ipAddress: '103.49.23.1', location: 'Jakarta, Indonesia', status: ServerStatus.Online },
  { id: 'SVR-SBY-01', name: 'Gateway Surabaya', ipAddress: '202.73.101.5', location: 'Surabaya, Indonesia', status: ServerStatus.Online },
  { id: 'SVR-MDN-01', name: 'Node Medan', ipAddress: '118.97.45.12', location: 'Medan, Indonesia', status: ServerStatus.Warning },
  { id: 'SVR-BPN-01', name: 'Data Center Balikpapan', ipAddress: '45.122.88.3', location: 'Balikpapan, Indonesia', status: ServerStatus.Online },
  { id: 'SVR-MKS-01', name: 'Server Makassar', ipAddress: '180.250.15.7', location: 'Makassar, Indonesia', status: ServerStatus.Offline },
  { id: 'SVR-BDG-01', name: 'Backup Bandung', ipAddress: '36.81.199.20', location: 'Bandung, Indonesia', status: ServerStatus.Online },
  { id: 'SVR-DPS-01', name: 'CDN Denpasar', ipAddress: '125.163.4.55', location: 'Denpasar, Indonesia', status: ServerStatus.Online },
  { id: 'SVR-YGY-01', name: 'Auth Yogyakarta', ipAddress: '202.152.0.33', location: 'Yogyakarta, Indonesia', status: ServerStatus.Warning },
];

const App: React.FC = () => {
  const [servers, setServers] = useState<Server[]>(initialServers);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setServers(currentServers => {
        const updatedServers = [...currentServers];
        
        // Pick a random server to update its status
        const randomIndex = Math.floor(Math.random() * updatedServers.length);
        const serverToUpdate = updatedServers[randomIndex];

        // Determine the new status
        const randomValue = Math.random();
        let newStatus: ServerStatus;
        if (randomValue < 0.7) { // 70% chance to be Online
          newStatus = ServerStatus.Online;
        } else if (randomValue < 0.9) { // 20% chance to be Warning
          newStatus = ServerStatus.Warning;
        } else { // 10% chance to be Offline
          newStatus = ServerStatus.Offline;
        }
        
        // Create a new object for the updated server to ensure re-render
        updatedServers[randomIndex] = { ...serverToUpdate, status: newStatus };
        
        return updatedServers;
      });
    }, 2500); // Update status every 2.5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ServerList servers={servers} />
      </main>
      <footer className="text-center py-4 text-slate-500 text-sm">
        <p>UI Monitoring Jaringan Real-time. Dibuat dengan React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default App;
