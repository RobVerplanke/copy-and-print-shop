import { t } from 'i18next';
import { prices } from '../../prices/prices';
import {
  paperSizes,
  splitPriceOptionsShortLowest,
} from '../../../lib/priceOptions';
import { finishingContentPaths } from '../../../lib/translationPaths';

// Laminating - Collect data for pricing table
export function getTableLaminating() {
  return {
    hasAsterisk: false,
    tableTitle: '',
    tableSubTitle: '',
    data: {
      headerTitles: [t('commonWords.laminating'), t('commonWords.perPiece')],
      units: [t('commonWords.format'), t('commonWords.price')],
      options: [
        t('finishingPage.cardLaminating.tableLaminating.variants.card'),
        t('finishingPage.cardLaminating.tableLaminating.variants.A6mid'),
        t('finishingPage.cardLaminating.tableLaminating.variants.A5mid'),
        t('finishingPage.cardLaminating.tableLaminating.variants.A4thin'),
        t('finishingPage.cardLaminating.tableLaminating.variants.A4mid'),
        t('finishingPage.cardLaminating.tableLaminating.variants.A4thick'),
        t('finishingPage.cardLaminating.tableLaminating.variants.A3mid'),
      ],
      prices: [...Object.values(prices.finishing.laminating)],
    },
  };
}

// Poster Laminating - Collect data for pricing table
export function getTablePosterLaminating() {
  return {
    hasAsterisk: false,
    tableTitle: '',
    tableSubTitle: '',
    data: {
      headerTitles: [
        t('commonWords.posterLaminating'),
        t('commonWords.perPiece'),
      ],
      units: [t('commonWords.format'), t('commonWords.price')],
      options: paperSizes,
      prices: [...Object.values(prices.finishing.posterLaminating)],
    },
  };
}

// Binding - Collect data for pricing table
export function getTableBinding() {
  return {
    hasAsterisk: false,
    tableTitle: finishingContentPaths.cardBinding.tableBinding.subtitle,
    tableSubTitle: '',
    data: {
      headerTitles: [
        t('commonWords.binding'),
        t('paperFormats.A4'),
        t('paperFormats.A3'),
      ],
      units: [
        t('commonWords.amount'),
        t('commonWords.price'),
        t('commonWords.price'),
      ],
      options: [
        t('finishingPage.cardBinding.tableBinding.variants.to50'),
        t('finishingPage.cardBinding.tableBinding.variants.to100'),
        t('finishingPage.cardBinding.tableBinding.variants.to200'),
        t('finishingPage.cardBinding.tableBinding.variants.to280'),
      ],
      prices: [...Object.values(prices.finishing.binding)],
    },
  };
}

// Calendar Binding - Collect data for pricing table
export function getTableCalendarBinding() {
  return {
    hasAsterisk: false,
    tableTitle: finishingContentPaths.cardBinding.tableCalendarBinding.title,
    tableSubTitle: '',
    data: {
      headerTitles: [
        t('commonWords.calendarBinding'),
        t('paperFormats.A4'),
        t('paperFormats.A3'),
      ],
      units: [
        t('commonWords.amount'),
        t('commonWords.price'),
        t('commonWords.price'),
      ],
      options: splitPriceOptionsShortLowest,
      prices: [...Object.values(prices.finishing.calendarBinding)],
    },
  };
}

// Foamboard - Collect data for pricing table
export function getTableFoamboard() {
  return {
    hasAsterisk: false,
    tableTitle: '',
    tableSubTitle: '',
    data: {
      // image:
      headerTitles: [
        t('finishingPage.foamboard.title'),
        t('commonWords.perPiece'),
      ],
      units: [t('commonWords.format'), t('commonWords.price')],
      options: [
        t('paperFormats.A4'),
        t('paperFormats.A3'),
        t('paperFormats.A2'),
        t('paperFormats.B2'),
        t('paperFormats.A1'),
        t('paperFormats.A0'),
      ],
      prices: [...Object.values(prices.finishing.foamboard)],
    },
  };
}
