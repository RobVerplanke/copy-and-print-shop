import { useTranslation } from 'react-i18next';
import {
  customPrintingContentPaths,
  magazinesContentPaths,
  shopInfoPaths,
} from '../../../lib/translationPaths';
import SendMessage from '../../contact/SendMessage';
import { TextBlock } from '../../elementTemplates/TextBlock';
import { Notification } from '../../elementTemplates/Notification';
import { Divider } from '@mui/material';
import { useData } from '../../../context/DataContext';
import PageTitleAndIntroduction from '../../elementTemplates/PageTitleAndIntroduction';
import ContentCard from '../../elementTemplates/contentHolders/ContentCard';
import { useEffect, useState } from 'react';
import {
  getTableA5FullColor,
  getTableA4FullColor,
  getTableExtraOptions,
} from '../../../data/tables/customPrint/magazinesTableContent';
import i18n from '../../../utils/i18';
import { magazinesPageContent } from '../../../data/pages/pagesContent';

export default function Posters() {
  // Make text content translatable
  useTranslation();

  // Get acces to styling preset colors
  const { stylePreset } = useData();

  // Get table data with a function so the content is directly translatable in this component
  const [tableA5FullColor, setTableA5FullColor] = useState(
    getTableA5FullColor(),
  );
  const [tableA4FullColor, setTableA4FullColor] = useState(
    getTableA4FullColor(),
  );
  const [tableExtraOptions, setTableExtraOptions] = useState(
    getTableExtraOptions(),
  );

  // When the language is changed, update the table content directly
  useEffect(() => {
    setTableA5FullColor(getTableA5FullColor());
    setTableA4FullColor(getTableA4FullColor());
    setTableExtraOptions(getTableExtraOptions());
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
            image={magazinesPageContent.image}
            title={magazinesPageContent.pageTitle}
            introduction={magazinesPageContent.pageIntroduction}
          />
        </div>

        {/* A5 and A4*/}
        <div className="flex flex-col gap-12">
          <ContentCard
            bgColor={stylePreset.categoryCard.backgroundColorLight}
            headerContent={{
              cardTitle: magazinesContentPaths.cardFullColor.header.title,
              cardSubTitle: magazinesContentPaths.cardFullColor.header.subTitle,
              cardIntroduction:
                magazinesContentPaths.cardFullColor.header.introduction,
              notification: undefined,
            }}
            tableContent={[tableA5FullColor, tableA4FullColor]}
          />

          {/* Extra options */}
          <ContentCard
            bgColor={stylePreset.categoryCard.backgroundColorDark}
            headerContent={{
              cardTitle: magazinesContentPaths.cardExtraOptions.header.title,
              cardIntroduction:
                magazinesContentPaths.cardExtraOptions.header.introduction,
              notification: undefined,
            }}
            tableContent={[tableExtraOptions]}
          />
        </div>

        <div className="z-0 w-full">
          <Notification>
            <div className="flex items-start">
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
            variant={'xlTitleRegular'}
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
