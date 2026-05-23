"use client";

import { useState } from "react";
import {
  Card, CardHeader, CardBody,
  Badge,
  Button,
  Input,
  Switch,
  Avatar,
  Tabs, TabList, Tab, TabPanel,
  ToastProvider, useToast,
} from "@allem-ui/react";
import { DashboardShell } from "../../components/DashboardShell";

function SettingsContent() {
  const { toast } = useToast();
  const [name, setName] = useState("Ahmed Allem");
  const [email, setEmail] = useState("ahmed@kingallem.com");
  const [company, setCompany] = useState("Allem UI");

  return (
    <DashboardShell
      active="/settings"
      title="Settings"
      headerRight={
        <Button
          variant="solid"
          size="sm"
          onPress={() => toast({ title: "Settings saved!", description: "Your changes have been applied." })}
        >
          Save Changes
        </Button>
      }
    >
      <Tabs>
        <TabList>
          <Tab id="profile">Profile</Tab>
          <Tab id="notifications">Notifications</Tab>
          <Tab id="security">Security</Tab>
          <Tab id="billing">Billing</Tab>
        </TabList>

        {/* Profile */}
        <TabPanel id="profile">
          <div className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <span className="font-semibold">Profile Information</span>
              </CardHeader>
              <CardBody>
                <div className="flex items-center gap-6 mb-6">
                  <Avatar name={name} size="lg" />
                  <div>
                    <Button variant="outline" size="sm" onPress={() => toast({ title: "Upload", description: "Photo upload coming soon." })}>
                      Change Photo
                    </Button>
                    <p className="mt-1 text-xs text-neutral-400">JPG, PNG or GIF. Max 2MB.</p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
                  <div>
                    <label className="block text-sm font-medium mb-1.5 text-neutral-700 dark:text-neutral-300">Full Name</label>
                    <Input value={name} onChange={setName} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5 text-neutral-700 dark:text-neutral-300">Email</label>
                    <Input value={email} onChange={setEmail} type="email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5 text-neutral-700 dark:text-neutral-300">Company</label>
                    <Input value={company} onChange={setCompany} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5 text-neutral-700 dark:text-neutral-300">Role</label>
                    <Input value="Admin" isReadOnly />
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Danger Zone</span>
                  <Badge variant="subtle" color="danger" size="sm">Caution</Badge>
                </div>
              </CardHeader>
              <CardBody>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">Delete Account</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
                      Permanently delete your account and all associated data. This action cannot be undone.
                    </p>
                  </div>
                  <Button variant="outline" size="sm" onPress={() => toast({ title: "Not allowed", description: "Account deletion is disabled in demo mode." })}>
                    Delete Account
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </TabPanel>

        {/* Notifications */}
        <TabPanel id="notifications">
          <div className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <span className="font-semibold">Email Notifications</span>
              </CardHeader>
              <CardBody>
                <div className="space-y-5 max-w-xl">
                  {[
                    { label: "Marketing emails", desc: "Receive emails about new features and updates", default: true },
                    { label: "Security alerts", desc: "Get notified about unusual login activity", default: true },
                    { label: "Weekly digest", desc: "A summary of your team's activity every Monday", default: false },
                    { label: "Comment notifications", desc: "When someone replies to your comments", default: true },
                    { label: "Mention notifications", desc: "When someone @mentions you", default: true },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{item.label}</p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.desc}</p>
                      </div>
                      <Switch defaultSelected={item.default} />
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <span className="font-semibold">Push Notifications</span>
              </CardHeader>
              <CardBody>
                <div className="space-y-5 max-w-xl">
                  {[
                    { label: "Desktop notifications", desc: "Show browser push notifications", default: true },
                    { label: "Mobile push", desc: "Send notifications to your mobile device", default: false },
                    { label: "Sound alerts", desc: "Play a sound when receiving notifications", default: false },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{item.label}</p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.desc}</p>
                      </div>
                      <Switch defaultSelected={item.default} />
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
        </TabPanel>

        {/* Security */}
        <TabPanel id="security">
          <div className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <span className="font-semibold">Password</span>
              </CardHeader>
              <CardBody>
                <div className="grid gap-4 max-w-md">
                  <div>
                    <label className="block text-sm font-medium mb-1.5 text-neutral-700 dark:text-neutral-300">Current Password</label>
                    <Input type="password" placeholder="Enter current password" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5 text-neutral-700 dark:text-neutral-300">New Password</label>
                    <Input type="password" placeholder="Enter new password" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5 text-neutral-700 dark:text-neutral-300">Confirm Password</label>
                    <Input type="password" placeholder="Confirm new password" />
                  </div>
                  <div>
                    <Button variant="solid" size="sm" onPress={() => toast({ title: "Password updated", description: "Your password has been changed." })}>
                      Update Password
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <span className="font-semibold">Two-Factor Authentication</span>
              </CardHeader>
              <CardBody>
                <div className="flex items-center justify-between max-w-xl">
                  <div>
                    <p className="text-sm font-medium">Authenticator App</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Use an authenticator app for 2FA codes</p>
                  </div>
                  <Badge variant="subtle" color="success" size="sm">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between max-w-xl mt-5">
                  <div>
                    <p className="text-sm font-medium">SMS Verification</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Receive verification codes via SMS</p>
                  </div>
                  <Button variant="outline" size="sm" onPress={() => toast({ title: "SMS 2FA", description: "SMS verification setup coming soon." })}>
                    Set Up
                  </Button>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <span className="font-semibold">Active Sessions</span>
              </CardHeader>
              <CardBody>
                <div className="space-y-4 max-w-xl">
                  {[
                    { device: "MacBook Pro — Chrome", location: "San Francisco, US", time: "Active now", current: true },
                    { device: "iPhone 15 — Safari", location: "San Francisco, US", time: "2 hours ago", current: false },
                    { device: "Windows PC — Firefox", location: "New York, US", time: "3 days ago", current: false },
                  ].map((session) => (
                    <div key={session.device} className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium">{session.device}</p>
                          {session.current && <Badge variant="subtle" color="success" size="sm">Current</Badge>}
                        </div>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                          {session.location} · {session.time}
                        </p>
                      </div>
                      {!session.current && (
                        <Button variant="ghost" size="sm" onPress={() => toast({ title: "Revoked", description: `Session on ${session.device} has been revoked.` })}>
                          Revoke
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
        </TabPanel>

        {/* Billing */}
        <TabPanel id="billing">
          <div className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Current Plan</span>
                  <Badge variant="subtle" color="primary">Pro</Badge>
                </div>
              </CardHeader>
              <CardBody>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold">$29</span>
                  <span className="text-neutral-500">/month</span>
                </div>
                <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <p>Unlimited team members</p>
                  <p>50GB storage</p>
                  <p>Priority support</p>
                  <p>Custom integrations</p>
                </div>
                <div className="mt-4 flex gap-3">
                  <Button variant="outline" size="sm" onPress={() => toast({ title: "Upgrade", description: "Plan upgrade options coming soon." })}>
                    Upgrade Plan
                  </Button>
                  <Button variant="ghost" size="sm" onPress={() => toast({ title: "Billing", description: "Billing portal opening..." })}>
                    View Invoices
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </TabPanel>
      </Tabs>
    </DashboardShell>
  );
}

export default function SettingsPage() {
  return (
    <ToastProvider>
      <SettingsContent />
    </ToastProvider>
  );
}
