import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <Button>Click me</Button>
    </div>
  );
}

export default App;
