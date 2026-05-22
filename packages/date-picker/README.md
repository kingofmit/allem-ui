<p align="center">
  <img src="https://raw.githubusercontent.com/kingofmit/allem-ui/main/.github/AllemUI.png" alt="Allem UI Date Picker" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@allem-ui/date-picker"><img src="https://img.shields.io/npm/v/@allem-ui/date-picker.svg" alt="npm version" /></a>
  <a href="https://github.com/kingofmit/allem-ui/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License" /></a>
  <img src="https://img.shields.io/badge/react-19-61dafb" alt="React 19" />
  <img src="https://img.shields.io/badge/tailwind-v4-38bdf8" alt="Tailwind v4" />
  <img src="https://img.shields.io/badge/react_aria-accessible-green" alt="React Aria" />
  <img src="https://img.shields.io/badge/typescript-strict-blue" alt="TypeScript" />
</p>

# @allem-ui/date-picker

Accessible date and time picker components for Allem UI -- built on React Aria with full keyboard navigation and internationalization support.

## Installation

```bash
npm install @allem-ui/date-picker @allem-ui/react @allem-ui/theme
```

## Quick Start

```tsx
import { DatePicker, Calendar, DateRangePicker, TimeField } from "@allem-ui/date-picker";
import { today, getLocalTimeZone } from "@allem-ui/date-picker";

export function BookingForm() {
  return (
    <div>
      <DatePicker label="Start date" />
      <DateRangePicker label="Trip dates" />
      <TimeField label="Check-in time" />
      <Calendar defaultValue={today(getLocalTimeZone())} />
    </div>
  );
}
```

## Components

| Component | Description |
|-----------|-------------|
| `Calendar` | Standalone calendar grid for date selection |
| `DatePicker` | Date input field with calendar popover |
| `DateRangePicker` | Select a start and end date range |
| `TimeField` | Time input field with hour/minute/period segments |

## Re-exported Utilities

Date utilities from `@internationalized/date` are re-exported for convenience:

`CalendarDate` `CalendarDateTime` `Time` `ZonedDateTime` `parseDate` `parseDateTime` `parseTime` `parseZonedDateTime` `today` `now` `getLocalTimeZone`

## Features

- **Accessible** -- Built on [React Aria](https://react-spectrum.adobe.com/react-aria/) for full WCAG compliance
- **Keyboard navigation** -- Complete keyboard support for all date/time components
- **Internationalized** -- Locale-aware date formatting and calendar systems
- **Date ranges** -- Select start/end date ranges with visual highlighting
- **Time input** -- Segmented time field with AM/PM support
- **Dark mode** -- First-class dark mode with `dark:` Tailwind prefix
- **TypeScript strict** -- Full type safety with exported prop types
- **Tree-shakeable** -- ESM + CJS builds, import only what you use

## Part of Allem UI

This is a standalone package in the [Allem UI](https://github.com/kingofmit/allem-ui) monorepo. For core components, see [`@allem-ui/react`](https://www.npmjs.com/package/@allem-ui/react).

## Support

If you find Allem UI useful, consider supporting its development:

<a href="https://buymeacoffee.com/kingofmit" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="50" /></a>

## License

[MIT](https://github.com/kingofmit/allem-ui/blob/main/LICENSE) - [Ahmed Allem](https://kingallem.com)
