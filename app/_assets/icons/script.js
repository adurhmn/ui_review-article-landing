const fs = require("fs");
const path = require("path");

// Convert kebab-case to PascalCase
const kebabToPascalCase = (str) => {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
};

// Function to create index.ts
const createIndexTs = () => {
  const cwd = process.cwd();
  const files = fs.readdirSync(cwd);
  const componentFiles = files.filter(
    (file) => file.endsWith(".tsx") || file.endsWith(".jsx")
  );

  const exportStatements = componentFiles
    .map((file) => {
      const componentName = kebabToPascalCase(file.replace(/\.(tsx|jsx)$/, ""));
      return `export { default as ${componentName} } from './${file.replace(
        /\.(tsx|jsx)$/,
        ""
      )}';`;
    })
    .join("\n");

  fs.writeFileSync(path.join(cwd, "index.ts"), exportStatements);
  console.log("index.ts created successfully!");
};

createIndexTs();
