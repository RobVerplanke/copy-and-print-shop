import { t } from 'i18next';
import { prices } from '../../prices/prices';
import { pages } from '../../../lib/priceOptions';
import { magazinesContentPaths } from '../../../lib/translationPaths';

// A5 - Collect data for pricing table
export function getTableA5FullColor() {
  return {
    hasAsterisk: false,
    tableTitle: magazinesContentPaths.cardFullColor.tableA4.header.title,
    tableSubTitle: magazinesContentPaths.cardFullColor.tableA4.header.subTitle,
    data: {
      headerTitles: [
        t('customPrintPage.magazines.common.headerOne'),
        t('customPrintPage.magazines.common.headerTwo'),
        t('customPrintPage.magazines.common.headerThree'),
        t('customPrintPage.magazines.common.headerFour'),
        t('customPrintPage.magazines.common.headerFive'),
        t('customPrintPage.magazines.common.headerSix'),
        t('customPrintPage.magazines.common.headerSeven'),
        t('customPrintPage.magazines.common.headerEight'),
        t('customPrintPage.magazines.common.headerNine'),
        t('customPrintPage.magazines.common.headerTen'),
        t('customPrintPage.magazines.common.headerEleven'),
      ],
      units: [
        t('commonWords.amount'),
        t('commonWords.price'),
        t('commonWords.price'),
        t('commonWords.price'),
        t('commonWords.price'),
        t('commonWords.price'),
        t('commonWords.price'),
        t('commonWords.price'),
        t('commonWords.price'),
        t('commonWords.price'),
        t('commonWords.price'),
      ],
      options: pages,
      prices: [...Object.values(prices.customPrint.magazines.fullColor.A5)],
    },
  };
}

// A4 - Collect data for pricing table
export function getTableA4FullColor() {
  return {
    hasAsterisk: false,
    tableTitle: magazinesContentPaths.cardFullColor.tableA5.header.title,
    tableSubTitle: magazinesContentPaths.cardFullColor.tableA5.header.subTitle,
    data: {
      headerTitles: [
        t('customPrintPage.magazines.common.headerOne'),
        t('customPrintPage.magazines.common.headerTwo'),
        t('customPrintPage.magazines.common.headerThree'),
        t('customPrintPage.magazines.common.headerFour'),
        t('customPrintPage.magazines.common.headerFive'),
        t('customPrintPage.magazines.common.headerSix'),
        t('customPrintPage.magazines.common.headerSeven'),
        t('customPrintPage.magazines.common.headerEight'),
        t('customPrintPage.magazines.common.headerNine'),
        t('customPrintPage.magazines.common.headerTen'),
        t('customPrintPage.magazines.common.headerEleven'),
      ],
      units: [
        t('commonWords.amount'),
        t('commonWords.price'),
        t('commonWords.price'),
        t('commonWords.price'),
        t('commonWords.price'),
        t('commonWords.price'),
        t('commonWords.price'),
        t('commonWords.price'),
        t('commonWords.price'),
        t('commonWords.price'),
        t('commonWords.price'),
      ],
      options: pages,
      prices: [...Object.values(prices.customPrint.magazines.fullColor.A4)],
    },
  };
}

// Etra options - Collect data for pricing table
export function getTableExtraOptions() {
  return {
    hasAsterisk: false,
    tableTitle: magazinesContentPaths.cardExtraOptions.header.title,
    tableSubTitle: magazinesContentPaths.cardExtraOptions.header.paperWeight,
    data: {
      headerTitles: [
        t('customPrintPage.magazines.pageHeader.title'),
        t('paperFormats.A5'),
        t('paperFormats.A4'),
      ],
      units: [
        t('customPrintPage.magazines.cardExtraOptions.header.subTitle'),
        t('commonWords.price'),
        t('commonWords.price'),
      ],
      options: [
        t('customPrintPage.magazines.cardExtraOptions.rowHeaders.headerOne'),
      ],
      prices: [...Object.values(prices.customPrint.magazines.options)],
    },
  };
}
