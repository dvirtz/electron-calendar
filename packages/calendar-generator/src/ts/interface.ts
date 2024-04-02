import bindings from 'pkg-prebuilds';
import bindingOptions from './binding-options';

interface CalendarGenerator {
  // Return an array of strings representing the calendar
  // Each string represents a month or a week in the calendar
  generateCalendar: (year: number, startOfWeek: number) => string[];
}

const calendarGenerator = bindings<CalendarGenerator>(__dirname, bindingOptions);

export function generateCalendar(year: number, startOfWeek: number): string[] {
  return calendarGenerator.generateCalendar(year, startOfWeek);
}
