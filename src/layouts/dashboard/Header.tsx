import { Button } from "@/components/ui/button";

const AppHeader = () => {
  return (
    <div className="flex justify-between items-center py-1.5 px-4 sticky top-4 w-1/2 frosted-glass">
      <span className="font-bold text-xl">VL Planner</span>
      <div className="flex gap-1 frosted-glass p-1 -mr-2">
        <Button
          variant="ghost"
          className="rounded-full p-4 cursor-pointer"
          size="lg"
        >
          Calendar
        </Button>
        <Button
          variant="ghost"
          className="rounded-full p-4 cursor-pointer"
          size="lg"
        >
          Settings
        </Button>
        <Button
          variant="ghost"
          className="rounded-full p-4 cursor-pointer"
          size="lg"
        >
          Profile
        </Button>
      </div>
    </div>
  );
};

export default AppHeader;
