// It will prevent and asked debugger infinite times
if (console && console.log) {
  (function runDebugger() {
    debugger;
    setTimeout(runDebugger, 0);
  })();
}