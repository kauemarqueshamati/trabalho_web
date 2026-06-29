@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}

@import "tailwindcss";

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #f5f5f5;
}

main {
  max-width: 900px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

h1 {
  color: #d6001c;
}

nav {
  margin-top: 20px;
}

a {
  color: black;
  font-weight: bold;
  text-decoration: none;
  margin: 0 10px;
}

img {
  border-radius: 10px;
  margin: 20px 0;
}
