"use client";

import { useState } from "react";
import {
  Card, CardHeader, CardBody,
  Badge,
  Button,
  Input,
  Grid,
  ToastProvider, useToast,
} from "@allem-ui/react";
import {
  Calendar,
  DatePicker,
  DateRangePicker,
  TimeField,
  CalendarDate,
  today,
  getLocalTimeZone,
  Time,
} from "@allem-ui/date-picker";
import { DashboardShell } from "../../components/DashboardShell";

interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  type: "meeting" | "deadline" | "reminder";
  color: string;
}

const events: CalendarEvent[] = [
  { id: "1", title: "Sprint Planning", date: "2026-05-25", time: "10:00 AM", type: "meeting", color: "#3b82f6" },
  { id: "2", title: "Design Review", date: "2026-05-25", time: "2:00 PM", type: "meeting", color: "#8b5cf6" },
  { id: "3", title: "API v2 Deadline", date: "2026-05-28", time: "11:59 PM", type: "deadline", color: "#ef4444" },
  { id: "4", title: "Team Standup", date: "2026-05-26", time: "9:00 AM", type: "meeting", color: "#3b82f6" },
  { id: "5", title: "Release v2.4.1", date: "2026-05-30", time: "3:00 PM", type: "deadline", color: "#ef4444" },
  { id: "6", title: "Client Demo", date: "2026-05-27", time: "11:00 AM", type: "meeting", color: "#10b981" },
  { id: "7", title: "Update dependencies", date: "2026-05-26", time: "4:00 PM", type: "reminder", color: "#f59e0b" },
  { id: "8", title: "Quarterly Review", date: "2026-05-29", time: "1:00 PM", type: "meeting", color: "#8b5cf6" },
];

function CalendarContent() {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<CalendarDate>(today(getLocalTimeZone()));
  const [newEventTitle, setNewEventTitle] = useState("");

  const selectedDateStr = `${selectedDate.year}-${String(selectedDate.month).padStart(2, "0")}-${String(selectedDate.day).padStart(2, "0")}`;
  const dayEvents = events.filter((e) => e.date === selectedDateStr);

  const typeColor = (type: string) =>
    type === "meeting" ? "primary" : type === "deadline" ? "danger" : "warning";

  return (
    <DashboardShell
      active="/calendar"
      title="Calendar"
      headerRight={
        <>
          <Badge variant="subtle" color="primary" size="sm">{events.length} events</Badge>
          <Button
            variant="outline"
            size="sm"
            onPress={() => setSelectedDate(today(getLocalTimeZone()))}
          >
            Today
          </Button>
        </>
      }
    >
      <Grid columns={1} gap="lg" className="lg:grid-cols-3">
        {/* Calendar + Range Picker */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <span className="font-semibold">Monthly View</span>
            </CardHeader>
            <CardBody>
              <div className="flex justify-center">
                <Calendar
                  value={selectedDate}
                  onChange={(date) => date && setSelectedDate(date as CalendarDate)}
                />
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <span className="font-semibold">Date Range Filter</span>
            </CardHeader>
            <CardBody>
              <div className="max-w-sm">
                <DateRangePicker label="Filter events by range" />
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Day Events */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <span className="font-semibold">
                  {selectedDate.toDate(getLocalTimeZone()).toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" })}
                </span>
                <Badge variant="subtle" color="neutral" size="sm">{dayEvents.length} events</Badge>
              </div>
            </CardHeader>
            <CardBody>
              {dayEvents.length === 0 ? (
                <p className="text-sm text-neutral-400 text-center py-4">No events for this day</p>
              ) : (
                <div className="space-y-3">
                  {dayEvents.map((event) => (
                    <div
                      key={event.id}
                      className="flex items-start gap-3 rounded-lg p-2.5 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                    >
                      <div
                        className="w-1 h-full min-h-[2.5rem] rounded-full shrink-0"
                        style={{ backgroundColor: event.color }}
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-sm font-medium block truncate">{event.title}</span>
                        <span className="text-xs text-neutral-500 dark:text-neutral-400">{event.time}</span>
                      </div>
                      <Badge variant="subtle" color={typeColor(event.type)} size="sm">{event.type}</Badge>
                    </div>
                  ))}
                </div>
              )}
            </CardBody>
          </Card>

          {/* Upcoming */}
          <Card>
            <CardHeader>
              <span className="font-semibold">Upcoming</span>
            </CardHeader>
            <CardBody>
              <div className="space-y-2">
                {events.slice(0, 5).map((event) => (
                  <div key={event.id} className="flex items-center justify-between text-sm">
                    <span className="truncate">{event.title}</span>
                    <span className="text-xs text-neutral-400 shrink-0 ml-2">{event.date.slice(5)}</span>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          {/* Add Event */}
          <Card>
            <CardHeader>
              <span className="font-semibold">Quick Add Event</span>
            </CardHeader>
            <CardBody className="space-y-4">
              <Input
                label="Event title"
                value={newEventTitle}
                onChange={setNewEventTitle}
                placeholder="Meeting with team..."
              />
              <DatePicker label="Date" />
              <TimeField label="Time" defaultValue={new Time(9, 0)} />
              <Button
                variant="solid"
                size="sm"
                className="w-full"
                onPress={() => {
                  if (newEventTitle.trim()) {
                    toast({ title: "Event created", description: `"${newEventTitle}" added to calendar.` });
                    setNewEventTitle("");
                  }
                }}
              >
                Add Event
              </Button>
            </CardBody>
          </Card>
        </div>
      </Grid>
    </DashboardShell>
  );
}

export default function CalendarPage() {
  return (
    <ToastProvider>
      <CalendarContent />
    </ToastProvider>
  );
}
