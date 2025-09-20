
export enum ServerStatus {
  Online = 'Online',
  Offline = 'Offline',
  Warning = 'Warning',
}

export interface Server {
  id: string;
  name: string;
  ipAddress: string;
  location: string;
  status: ServerStatus;
}
