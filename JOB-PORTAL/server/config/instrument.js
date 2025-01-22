// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

init({
  dsn: "https://d5da248af68e59339557296429b355d7@o4508680099856384.ingest.us.sentry.io/4508686526316544",
  integrations: [
    nodeProfilingIntegration(),
    Sentry.mongooseIntegration(),
  ],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
});
// Manually call startProfiler and stopProfiler
// to profile the code in between
profiler.startProfiler();

// Starts a transaction that will also be profiled
startSpan({
  name: "My First Transaction",
}, () => {
  // the code executing inside the transaction will be wrapped in a span and profiled
});

// Calls to stopProfiling are optional - if you don't stop the profiler, it will keep profiling
// your application until the process exits or stopProfiling is called.
profiler.stopProfiler();