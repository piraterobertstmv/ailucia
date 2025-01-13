import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const CallMetrics = () => {
  return (
    <div className="space-y-8">
      {/* Calls Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-medium">Calls</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total calls</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Minutes used</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0.0min</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Avg. call duration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0.0min</div>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground">
          <p className="mb-2">No calls recorded</p>
          <p className="text-sm">A metric will appear here after your first call</p>
        </div>
      </div>

      {/* Actions Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-medium">Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Appts. scheduled</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">n/a</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Live transfers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">n/a</div>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground">
          <p className="mb-2">We couldn't find any actions</p>
          <p className="text-sm">Set up your first action in the actions tab</p>
        </div>
      </div>

      {/* Analysis Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">Analysis</h2>
          <button className="text-sm text-purple-500 hover:underline">Learn more...</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Goal achievement</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">n/a</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Call Drop-off Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">n/a</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Script adherence</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">n/a</div>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground">
          <p className="mb-2">Nothing to measure</p>
          <p className="text-sm">A metric providing insight into why a call ended will appear here</p>
        </div>
      </div>
    </div>
  );
};