# Date Picker

```bash
npm i @allem-ui/date-picker @internationalized/date
```

```tsx
import {
  Calendar,
  DatePicker,
  DateRangePicker,
  TimeField,
  // Date utilities (re-exported from @internationalized/date)
  CalendarDate,
  CalendarDateTime,
  Time,
  today,
  now,
  getLocalTimeZone,
  parseDate,
  parseDateTime,
  parseTime,
} from "@allem-ui/date-picker";
```

Peer dependencies: `@allem-ui/react`, `@allem-ui/theme`, `react`, `tailwindcss`.

## Calendar

Standalone calendar for inline date selection.

```tsx
import { useState } from "react";
import { Calendar, today, getLocalTimeZone } from "@allem-ui/date-picker";

const [date, setDate] = useState(today(getLocalTimeZone()));

<Calendar value={date} onChange={setDate} />
<Calendar minValue={today(getLocalTimeZone())} />  {/* Disable past dates */}
```

Props: `value`, `defaultValue`, `onChange`, `minValue`, `maxValue`, `isDisabled`, `focusedValue`.

## DatePicker

Input field with calendar popover.

```tsx
import { DatePicker, parseDate } from "@allem-ui/date-picker";

<DatePicker label="Birth date" />
<DatePicker
  label="Start date"
  defaultValue={parseDate("2025-01-15")}
  minValue={parseDate("2025-01-01")}
/>
```

Props: `label`, `description`, `errorMessage`, `value`, `defaultValue`, `onChange`, `minValue`, `maxValue`, `isDisabled`, `granularity`, `placeholderValue`.

## DateRangePicker

Two date inputs with a range calendar popover.

```tsx
import { DateRangePicker, today, getLocalTimeZone } from "@allem-ui/date-picker";

<DateRangePicker label="Trip dates" />
<DateRangePicker
  label="Booking period"
  minValue={today(getLocalTimeZone())}
/>
```

Props: same as DatePicker but `value`/`onChange` use `{ start, end }` range objects.

## TimeField

Segment-based time input.

```tsx
import { TimeField, Time } from "@allem-ui/date-picker";

<TimeField label="Meeting time" />
<TimeField label="Alarm" defaultValue={new Time(9, 0)} />
<TimeField label="Duration" granularity="second" />
```

Props: `label`, `description`, `errorMessage`, `value`, `defaultValue`, `onChange`, `isDisabled`, `granularity` (`"hour" | "minute" | "second"`), `hourCycle` (`12 | 24`).

## Date value types

All date components use `@internationalized/date` value types:

| Type | Use for | Example |
|------|---------|---------|
| `CalendarDate` | Date only | `new CalendarDate(2025, 1, 15)` or `parseDate("2025-01-15")` |
| `CalendarDateTime` | Date + time | `parseDateTime("2025-01-15T09:00")` |
| `Time` | Time only | `new Time(9, 30)` or `parseTime("09:30")` |
| `ZonedDateTime` | Date + time + timezone | `parseZonedDateTime("2025-01-15T09:00[America/New_York]")` |

Helpers: `today(getLocalTimeZone())` for current date, `now(getLocalTimeZone())` for current datetime.
