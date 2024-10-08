import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";


// Yeh function Tailwind CSS ka plugin hai jo theme ke colors ko CSS variables mein convert karta hai.
function addVariableForColors({ addBase, theme }: PluginAPI) {
  // Tailwind theme configuration se sab colors le raha hai, agar colors undefined hain toh khaali object set kar raha hai.
  const allColors = theme('colors', {}) || {};

  // Naye CSS variables store karne ke liye khaali object banaya.
  const newVars: Record<string, string> = {};

  // Theme ke andar har color (aur shades agar hain) ko loop karta hai.
  Object.entries(allColors).forEach(([key, value]) => {
    // Agar color sirf ek string hai (jaise ek color code '#ffffff'), toh uska CSS variable bana raha hai.
    if (typeof value === 'string') {
      newVars[`--${key}`] = value;
    } 
    // Agar color object hai (jaise shades, 'blue-500', 'blue-600' etc.), toh uske shades ko loop karta hai.
    else if (typeof value === 'object' && value !== null) {
      Object.entries(value).forEach(([subKey, subValue]) => {
        // Agar shade ek string hai, toh variable bana raha hai '--blue-500' style mein.
        if (typeof subValue === 'string') {
          newVars[`--${key}-${subKey}`] = subValue;
        }
      });
    }
  });
  addBase({
    ':root': newVars,
  });
  }
  



const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'royal-blue' : { 1 : '#083344',
         2 : '#0891b2',
         3 : '#0e7490' },
        
        
      },
      animation: {
        spotlight: "spotlight 3s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "2",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "7",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [addVariableForColors],
};
export default config;