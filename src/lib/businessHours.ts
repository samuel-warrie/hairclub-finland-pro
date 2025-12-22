export type BusinessStatus = 'open' | 'closing-soon' | 'closed';

export interface BusinessHoursInfo {
  status: BusinessStatus;
  message: string;
  isHolidayClosure: boolean;
}

const BUSINESS_HOURS = {
  monday: { open: 9, close: 18 },
  tuesday: { open: 9, close: 18 },
  wednesday: { open: 9, close: 18 },
  thursday: { open: 9, close: 18 },
  friday: { open: 9, close: 18 },
  saturday: null,
  sunday: null,
};

const CLOSING_SOON_MINUTES = 60;

const isHolidayPeriod = (date: Date): boolean => {
  const month = date.getMonth();
  const day = date.getDate();

  if (month === 11 && day >= 24) return true;
  if (month === 0 && day === 1) return true;

  return false;
};

const getNextOpeningTime = (currentDate: Date): string => {
  const dayOfWeek = currentDate.getDay();
  const hours = currentDate.getHours();
  const currentDay = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][dayOfWeek] as keyof typeof BUSINESS_HOURS;

  if (isHolidayPeriod(currentDate)) {
    return 'Opens January 2nd at 9:00 AM';
  }

  const todayHours = BUSINESS_HOURS[currentDay];

  if (todayHours && hours < todayHours.open) {
    return 'Opens today at 9:00 AM';
  }

  let daysToAdd = 1;
  let nextDate = new Date(currentDate);
  nextDate.setDate(nextDate.getDate() + daysToAdd);

  while (daysToAdd <= 7) {
    if (isHolidayPeriod(nextDate)) {
      daysToAdd++;
      nextDate = new Date(currentDate);
      nextDate.setDate(nextDate.getDate() + daysToAdd);
      continue;
    }

    const nextDayOfWeek = nextDate.getDay();
    const nextDay = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][nextDayOfWeek] as keyof typeof BUSINESS_HOURS;
    const nextDayHours = BUSINESS_HOURS[nextDay];

    if (nextDayHours) {
      if (daysToAdd === 1) {
        return 'Opens tomorrow at 9:00 AM';
      } else {
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return `Opens ${dayNames[nextDayOfWeek]} at 9:00 AM`;
      }
    }

    daysToAdd++;
    nextDate = new Date(currentDate);
    nextDate.setDate(nextDate.getDate() + daysToAdd);
  }

  return 'Opens Monday at 9:00 AM';
};

export const getBusinessStatus = (): BusinessHoursInfo => {
  const now = new Date();

  if (isHolidayPeriod(now)) {
    return {
      status: 'closed',
      message: 'Closed for holidays - Opens January 2nd at 9:00 AM',
      isHolidayClosure: true,
    };
  }

  const dayOfWeek = now.getDay();
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();
  const currentTimeInMinutes = currentHour * 60 + currentMinutes;

  const dayName = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][dayOfWeek] as keyof typeof BUSINESS_HOURS;
  const todayHours = BUSINESS_HOURS[dayName];

  if (!todayHours) {
    return {
      status: 'closed',
      message: `Closed - ${getNextOpeningTime(now)}`,
      isHolidayClosure: false,
    };
  }

  const openTimeInMinutes = todayHours.open * 60;
  const closeTimeInMinutes = todayHours.close * 60;

  if (currentTimeInMinutes < openTimeInMinutes || currentTimeInMinutes >= closeTimeInMinutes) {
    return {
      status: 'closed',
      message: `Closed - ${getNextOpeningTime(now)}`,
      isHolidayClosure: false,
    };
  }

  const minutesUntilClosing = closeTimeInMinutes - currentTimeInMinutes;

  if (minutesUntilClosing <= CLOSING_SOON_MINUTES) {
    return {
      status: 'closing-soon',
      message: `Closing soon - Closes at ${todayHours.close}:00 ${todayHours.close >= 12 ? 'PM' : 'AM'}`,
      isHolidayClosure: false,
    };
  }

  return {
    status: 'open',
    message: `Open now - Closes at ${todayHours.close > 12 ? todayHours.close - 12 : todayHours.close}:00 ${todayHours.close >= 12 ? 'PM' : 'AM'}`,
    isHolidayClosure: false,
  };
};
