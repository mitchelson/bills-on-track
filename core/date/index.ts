import dayjs from 'dayjs';
import 'dayjs/locale/en';
import 'dayjs/locale/pt-br';
import duration from 'dayjs/plugin/duration';
import isoWeek from 'dayjs/plugin/isoWeek';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import localeData from 'dayjs/plugin/localeData';
import localizeFormat from 'dayjs/plugin/localizedFormat';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import weekday from 'dayjs/plugin/weekday';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isoWeek);
dayjs.tz.setDefault('America/Sao_Paulo');
dayjs.extend(duration);
dayjs.extend(localizeFormat);
dayjs.extend(duration);
dayjs.extend(weekday);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(localeData);

const fallback = { languageTag: 'pt-BR', isRTL: false };
const language = fallback;

dayjs.locale(language.languageTag);

const today = () => dayjs();

const weekdays = (bool: any) => dayjs.weekdaysShort(bool);

const fullDay = (date: any) => dayjs(date);

const fullMonth = () => dayjs().format("MMMM");

const onlyDay = (time: any) => dayjs(time).utc().format('L');

const dayWithHour = (time: any) => dayjs(time).utc().format('L LT');

const dayWithMonth = (time: any) => dayjs(time).format('DD/MM');

const completeDay = (time: any) => dayjs(time).utc().format('DD/MM/YYYY (dddd)');

const dayOfWeek = (time: any) => dayjs(time).utc().format('dddd');

// @ts-expect-error TS(2554): Expected 2 arguments, but got 1.
const createDateFromHour = (time: any) => dayjs().utc().set(time);

const returnDuration = (time: any) => dayjs.duration(time);

const locale = (time: any) => dayjs.locale(time);

const onlyHour = (time: any) => dayjs(time).format('LT');

export {
  completeDay, createDateFromHour, dayjs, dayOfWeek, dayWithHour, dayWithMonth, fullDay, fullMonth, locale, onlyDay, onlyHour, returnDuration, today, weekdays
};

