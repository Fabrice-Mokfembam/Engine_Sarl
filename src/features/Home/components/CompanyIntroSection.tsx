import React from 'react';
import { useTranslation } from 'react-i18next';

const CompanyIntroSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-0"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">{t('about.title')}</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntroSection;
