import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      colors: {
        jukka: {
          dark: "#181818",
          blood: "#92181a",
          red: "#B11215",
          toxic: "#28e751",
          green: "#2bb148",
          lgray: "#d8d8d8"
        },
      },
    },
  }
}

export default config