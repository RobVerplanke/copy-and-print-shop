import { useTranslation } from 'react-i18next';
import {
  customPrintingContentPaths,
  finishingContentPaths,
  shopInfoPaths,
} from '../../../lib/translationPaths';
import SendMessage from '../../contact/SendMessage';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { Notification } from '../../elementTemplates/Notification';
import { Divider } from '@mui/material';
import { useData } from '../../../context/DataContext';
import PageTitleAndIntroduction from '../../elementTemplates/PageTitleAndIntroduction';
import ContentCard from '../../elementTemplates/contentHolders/ContentCard';
import {
  getTableLaminating,
  getTablePosterLaminating,
  getTableBinding,
  getTableCalendarBinding,
  getTableFoamboard,
} from '../../../data/tables/customPrint/finishingTableContent';
import { useEffect, useState } from 'react';
import i18n from '../../../utils/i18';
import { finishingPageContent } from '../../../data/pages/pagesContent';

export default function Finishing() {
  // Make text content translatable
  useTranslation();

  // Get acces to styling preset colors
  const { stylePreset } = useData();

  // Get table data with a function so the content is directly translatable in this component
  const [tableLaminating, setTableLaminating] = useState(getTableLaminating());
  const [tablePosterLaminating, setTablePosterLaminating] = useState(
    getTablePosterLaminating(),
  );

  const [tableBinding, setTableBinding] = useState(getTableBinding());

  const [tableCalendarBinding, setTableCalendarBinding] = useState(
    getTableCalendarBinding(),
  );

  const [tableFoamboard, setTableFoamboard] = useState(getTableFoamboard());

  // When the language is changed, update the table content directly
  useEffect(() => {
    setTableLaminating(getTableLaminating());
    setTablePosterLaminating(getTablePosterLaminating());
    setTableBinding(getTableBinding());
    setTableCalendarBinding(getTableCalendarBinding());
    setTableFoamboard(getTableFoamboard());
  }, [i18n.language]);

  return (
    <div
      className={`
      grid grid-cols-[1fr,minmax(0,1200px),1fr] w-full
      ${stylePreset.overall.backgroundColor}
    `}
    >
      {/* Left empty colomn */}
      <div></div>
      {/* Page introduction - Introduction text with or without an image */}
      <div className="flex flex-col px-2 pt-12">
        <div className="mb-16">
          <PageTitleAndIntroduction
            image={finishingPageContent.image}
            title={finishingPageContent.pageTitle}
            introduction={finishingPageContent.pageIntroduction}
          />
        </div>

        {/* Laminating card */}
        <div className="flex flex-col gap-12">
          <ContentCard
            bgColor={stylePreset.categoryCard.backgroundColorLight}
            headerContent={{
              cardTitle: finishingContentPaths.cardLaminating.title,
              // cardSubTitle:
              cardIntroduction:
                finishingContentPaths.cardLaminating.introduction,
              // notification:
            }}
            tableContent={[tableLaminating, tablePosterLaminating]}
          />

          {/* (Poster)Binding card */}
          <ContentCard
            bgColor={stylePreset.categoryCard.backgroundColorDark}
            headerContent={{
              cardTitle: finishingContentPaths.cardBinding.title,
              // cardSubTitle:
              cardIntroduction: finishingContentPaths.cardBinding.introduction,
              // notification:
            }}
            tableContent={[tableBinding, tableCalendarBinding]}
          />

          {/* Foamboard card */}
          <ContentCard
            bgColor={stylePreset.categoryCard.backgroundColorDark}
            headerContent={{
              cardTitle: finishingContentPaths.foamboard.title,
              // cardSubTitle:
              cardIntroduction: finishingContentPaths.foamboard.introduction,
              // notification:
            }}
            tableContent={[tableFoamboard]}
          />
        </div>

        {/* Display notification message table */}
        <div className="z-0 w-full">
          <Notification>
            <div className="flex items-start">
              <div
                className={`
                  font-semibold
                  ${stylePreset.notification.asteriskColor}
                  `}
              >
                <span>*&nbsp;</span>
              </div>
              <TextBlock
                value={customPrintingContentPaths.deliveryDisclaimer}
                variant="bold"
              />
            </div>
          </Notification>
        </div>
        <Divider
          style={{
            backgroundColor: `${stylePreset.overall.diverderColor}`,
            marginTop: '16px',
            marginBottom: '64px',
          }}
          flexItem
          variant="fullWidth"
        />
        <div className="pb-8">
          <TextBlock
            value={shopInfoPaths.contactTitle}
            variant={'subTitleMedium'}
          />
        </div>
        <div className="w-full">
          <SendMessage />
        </div>
      </div>
      <div></div> {/* Right empty colomn */}
    </div>
  );
}
