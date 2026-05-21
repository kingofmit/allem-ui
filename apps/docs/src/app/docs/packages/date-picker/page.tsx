"use client";

import { useState } from "react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";
import {
  Calendar,
  DatePicker,
  DateRangePicker,
  TimeField,
} from "@allem-ui/date-picker";

export default function DatePickerPage() {
  const [calendarValue, setCalendarValue] = useState<any>(null);

  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Date Picker</h1>
      <p className="mt-2 text-sm font-medium text-indigo-600">@allem-ui/date-picker</p>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">Calendar, date picker, date range picker, and time field components built on React Aria for full accessibility.</p>

      <h2 className="mt-12 text-xl font-semibold">Installation</h2>
      <div className="mt-4">
        <ComponentPreview code={`npm install @allem-ui/date-picker`}>
          <pre className="rounded-lg bg-neutral-900 p-4 text-sm text-neutral-100"><code>npm install @allem-ui/date-picker</code></pre>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Components</h2>

      <h3 className="mt-8 text-lg font-medium">Calendar</h3>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">Standalone month calendar with day selection, month/year navigation, and keyboard support.</p>
      <div className="mt-4">
        <ComponentPreview code={`import { Calendar } from "@allem-ui/date-picker";\n\n<Calendar />`}>
          <div className="flex justify-center py-4">
            <Calendar />
          </div>
        </ComponentPreview>
      </div>

      <h3 className="mt-8 text-lg font-medium">DatePicker</h3>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">Input field with a popover calendar for selecting a single date.</p>
      <div className="mt-4">
        <ComponentPreview code={`import { DatePicker } from "@allem-ui/date-picker";\n\n<DatePicker label="Date of birth" />`}>
          <div className="py-4">
            <DatePicker label="Date of birth" />
          </div>
        </ComponentPreview>
      </div>

      <h3 className="mt-8 text-lg font-medium">DateRangePicker</h3>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">Two date inputs with a range calendar for selecting start and end dates.</p>
      <div className="mt-4">
        <ComponentPreview code={`import { DateRangePicker } from "@allem-ui/date-picker";\n\n<DateRangePicker label="Trip dates" />`}>
          <div className="py-4">
            <DateRangePicker label="Trip dates" />
          </div>
        </ComponentPreview>
      </div>

      <h3 className="mt-8 text-lg font-medium">TimeField</h3>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">Time input for hour, minute, and AM/PM selection.</p>
      <div className="mt-4">
        <ComponentPreview code={`import { TimeField } from "@allem-ui/date-picker";\n\n<TimeField label="Event time" />`}>
          <div className="py-4">
            <TimeField label="Event time" />
          </div>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Date Utilities</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">The package re-exports key types and utilities from <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800">@internationalized/date</code>:</p>
      <div className="mt-4">
        <ComponentPreview code={`import { CalendarDate, today, getLocalTimeZone } from "@allem-ui/date-picker";\n\nconst todayDate = today(getLocalTimeZone());`}>
          <pre className="rounded-lg bg-neutral-900 p-4 text-sm text-neutral-100"><code>{`CalendarDate, CalendarDateTime, Time,\nZonedDateTime, today, now, getLocalTimeZone,\nparseDate, parseDateTime, parseTime`}</code></pre>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Props</h2>
      <PropsTable
        props={[
          { name: "label", type: "string", description: "Label text above the input" },
          { name: "description", type: "string", description: "Help text below the input" },
          { name: "errorMessage", type: "string", description: "Error message shown in red" },
          { name: "className", type: "string", description: "Additional CSS classes" },
        ]}
      />
    </div>
  );
}
