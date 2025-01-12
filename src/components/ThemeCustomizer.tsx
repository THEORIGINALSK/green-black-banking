import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export const ThemeCustomizer = () => {
  const { colors, updateColors, resetColors } = useTheme();

  return (
    <div className="space-y-4">
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="background">Background Color</Label>
          <Input
            id="background"
            type="color"
            value={colors.background}
            onChange={(e) => updateColors({ background: e.target.value })}
            className="h-10 w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="card">Card Color</Label>
          <Input
            id="card"
            type="color"
            value={colors.card}
            onChange={(e) => updateColors({ card: e.target.value })}
            className="h-10 w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="primary">Primary Color (Green)</Label>
          <Input
            id="primary"
            type="color"
            value={colors.primary}
            onChange={(e) => updateColors({ primary: e.target.value })}
            className="h-10 w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="accent">Accent Color (Purple)</Label>
          <Input
            id="accent"
            type="color"
            value={colors.accent}
            onChange={(e) => updateColors({ accent: e.target.value })}
            className="h-10 w-full"
          />
        </div>
      </div>

      <Button 
        onClick={resetColors}
        variant="outline" 
        className="w-full"
      >
        Reset to Default Colors
      </Button>
    </div>
  );
};