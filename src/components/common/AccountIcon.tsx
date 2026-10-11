import React from 'react';
import { 
  Banknote, 
  CreditCard, 
  Landmark, 
  Building2,
  Smartphone, 
  PiggyBank, 
  Wallet,
  Coins,
  QrCode,
  Lock,
  TrendingUp,
  ArrowLeftRight
} from 'lucide-react';
import { AccountType } from '../../types';

interface AccountIconProps {
  type?: AccountType | string;
  name?: string;
  color?: string;
  size?: number;
  className?: string;
  showBackground?: boolean;
}

export const AccountIcon: React.FC<AccountIconProps> = ({
  type = 'other',
  name,
  color = '#3B82F6',
  size = 18,
  className = '',
  showBackground = false,
}) => {
  const getIcon = () => {
    switch (name || type) {
      case 'cash':
      case 'Banknote':
        return <Banknote size={size} />;
      case 'coins':
      case 'Coins':
        return <Coins size={size} />;
      case 'bank':
      case 'Landmark':
        return <Landmark size={size} />;
      case 'branch':
      case 'Building2':
        return <Building2 size={size} />;
      case 'credit_card':
      case 'debit_card':
      case 'card':
      case 'CreditCard':
        return <CreditCard size={size} />;
      case 'mobile_wallet':
      case 'Smartphone':
        return <Smartphone size={size} />;
      case 'instapay':
      case 'QrCode':
        return <QrCode size={size} />;
      case 'savings':
      case 'PiggyBank':
        return <PiggyBank size={size} />;
      case 'vault':
      case 'safe':
      case 'Lock':
        return <Lock size={size} />;
      case 'invest':
      case 'TrendingUp':
        return <TrendingUp size={size} />;
      case 'transfer':
      case 'ArrowLeftRight':
        return <ArrowLeftRight size={size} />;
      case 'wallet':
      default:
        return <Wallet size={size} />;
    }
  };

  if (showBackground) {
    return (
      <div 
        className={`inline-flex items-center justify-center rounded-xl border p-2 transition-all shadow-2xs ${className}`}
        style={{ 
          backgroundColor: `${color}16`,
          borderColor: `${color}35`,
          color: color,
        }}
      >
        {getIcon()}
      </div>
    );
  }

  return (
    <span 
      className={`inline-flex items-center justify-center ${className}`}
      style={{ color }}
    >
      {getIcon()}
    </span>
  );
};
