import React from 'react';
import { ACCOUNT_ICON_PRESETS, CATEGORY_ICON_PRESETS, StyledIconChoice } from '../../utils/iconPresets';
import { CategoryIcon } from './CategoryIcon';
import { AccountIcon } from './AccountIcon';

interface StyledIconSelectorProps {
  selectedIcon: string;
  selectedColor?: string;
  onSelect: (icon: string, color: string) => void;
  language?: string;
  targetType?: 'account' | 'category';
}

export const StyledIconSelector: React.FC<StyledIconSelectorProps> = ({
  selectedIcon,
  selectedColor,
  onSelect,
  language = 'ar',
  targetType = 'category',
}) => {
  const isAccount = targetType === 'account';
  const presets: StyledIconChoice[] = isAccount ? ACCOUNT_ICON_PRESETS : CATEGORY_ICON_PRESETS;

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
          {isAccount 
            ? (language === 'ar' ? 'اختر وسيلة الدفع أو البنك ولونها:' : 'Choose Payment Instrument / Bank:')
            : (language === 'ar' ? 'اختر تصنيف الفئة ولونها:' : 'Choose Category Icon & Color:')}
        </label>
        <span className="text-[10px] text-slate-400 font-medium">
          {isAccount 
            ? (language === 'ar' ? 'بطاقات ومحافظ' : 'Cards & Wallets')
            : (language === 'ar' ? 'مجالات ومصاريف' : 'Spending Purposes')}
        </span>
      </div>

      <div className="grid grid-cols-6 sm:grid-cols-8 gap-2 max-h-48 overflow-y-auto no-scrollbar p-1.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
        {presets.map(item => {
          const isSelected = selectedIcon === item.icon || (selectedColor && selectedColor === item.color && selectedIcon === item.icon);
          
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.icon, item.color)}
              title={language === 'ar' ? item.nameAr : item.nameEn}
              className={`flex flex-col items-center justify-center p-1.5 transition-all cursor-pointer relative ${
                isSelected
                  ? 'scale-110 shadow-sm ring-2 ring-blue-600 dark:ring-blue-400 bg-white dark:bg-slate-700 rounded-2xl'
                  : 'hover:bg-white/80 dark:hover:bg-slate-700/60 opacity-85 hover:opacity-100 rounded-xl'
              }`}
            >
              {isAccount ? (
                /* Card Chip Style for Accounts */
                <div 
                  className="w-9 h-8 rounded-xl flex items-center justify-center text-white shadow-2xs border border-white/20"
                  style={{ backgroundColor: item.color }}
                >
                  <AccountIcon name={item.icon} color="#FFFFFF" size={16} />
                </div>
              ) : (
                /* Circular Bubble Style for Categories */
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white shadow-2xs"
                  style={{ backgroundColor: item.color }}
                >
                  <CategoryIcon name={item.icon} color="#FFFFFF" size={15} />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
