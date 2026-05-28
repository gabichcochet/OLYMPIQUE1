import { extendTheme } from "@chakra-ui/theme-utils";


const theme = extendTheme({
  // Palette SLATE (équivalent Tailwind)
  colors: {
    slate: {
      50:  "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
    },
  },

  styles: {
    global: {
      "html, body": {
        scrollBehavior: "smooth",
        bgGradient: "linear(to-br, slate.50, white, slate.100)",
        color: "slate.900",
      },
      h1: { fontWeight: "extrabold", letterSpacing: "-0.02em" },
      h2: { fontWeight: "extrabold", letterSpacing: "-0.02em" },
      h3: { fontWeight: "extrabold", letterSpacing: "-0.02em" },
      h4: { fontWeight: "extrabold", letterSpacing: "-0.02em" },
    },
  },

  shadows: {
    "card-jo": "0 8px 30px rgba(0,0,0,0.06)",
    "card-jo-hover": "0 12px 40px rgba(0,0,0,0.12)",
  },

  components: {
    Button: {
      baseStyle: {
        fontWeight: "semibold",
        rounded: "xl",
        transition: "0.2s",
      },
      variants: {
        jo: {
          bgGradient: "linear(to-br, slate.900, slate.800)",
          color: "white",
          _hover: {
            bgGradient: "linear(to-br, slate.800, slate.700)",
            transform: "translateY(-2px)",
          },
        },
      },
    },

    CardJO: {
      baseStyle: {
        bgGradient: "linear(to-br, white, slate.100)",
        rounded: "3xl",
        border: "1px solid rgba(0,0,0,0.05)",
        shadow: "card-jo",
        transition: "0.2s",
        _hover: {
          transform: "translateY(-4px)",
          shadow: "card-jo-hover",
        },
      },
    },
  },
});

export default theme;
