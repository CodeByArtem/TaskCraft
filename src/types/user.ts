import { Board } from './board';

export interface User {
  id: string;
  username: string;
  email: string;
  passwordHash?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  lastLogin?: string;
  theme: string;
  notifications: boolean;
  refreshToken?: string;
  googleId?: string;
  passwordResetToken?: string;
  WorkDesk?: Board[];
}
