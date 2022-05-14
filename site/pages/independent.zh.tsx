import React from 'react';
import { useTranslation } from 'react-i18next';

const Indepent = () => {
  const { t } = useTranslation();
  return <>{t('gatsby 文档模版')}</>;
};

Indepent.noLayout = true;

export default Indepent;
