// find-duplicate-file-system.js

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

function getFileHash(filePath) {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash("sha256");
    const stream = fs.createReadStream(filePath);

    stream.on("data", (chunk) => hash.update(chunk));
    stream.on("end", () => resolve(hash.digest("hex")));
    stream.on("error", reject);
  });
}

async function findFiles(directory) {
  const files = [];

  async function walk(currentPath) {
    const entries = await fs.promises.readdir(currentPath, {
      withFileTypes: true,
    });

    for (const entry of entries) {
      const fullPath = path.join(currentPath, entry.name);

      if (entry.isDirectory()) {
        await walk(fullPath);
      } else if (entry.isFile()) {
        const stats = await fs.promises.stat(fullPath);

        files.push({
          path: fullPath,
          size: stats.size,
        });
      }
    }
  }

  await walk(directory);
  return files;
}

async function findDuplicateFiles(directory) {
  const files = await findFiles(directory);

  // Files with different sizes cannot be duplicates.
  const filesBySize = new Map();

  for (const file of files) {
    if (!filesBySize.has(file.size)) {
      filesBySize.set(file.size, []);
    }

    filesBySize.get(file.size).push(file);
  }

  const duplicates = [];

  for (const sameSizeFiles of filesBySize.values()) {
    if (sameSizeFiles.length < 2) {
      continue;
    }

    const filesByHash = new Map();

    for (const file of sameSizeFiles) {
      try {
        const hash = await getFileHash(file.path);

        if (!filesByHash.has(hash)) {
          filesByHash.set(hash, []);
        }

        filesByHash.get(hash).push(file.path);
      } catch (error) {
        console.error(`Failed to read: ${file.path}`);
        console.error(error.message);
      }
    }

    for (const paths of filesByHash.values()) {
      if (paths.length > 1) {
        duplicates.push(paths);
      }
    }
  }

  return duplicates;
}

async function main() {
  const directory = process.argv[2];

  if (!directory) {
    console.error("Usage: node find-duplicate-file-system.js <directory>");
    process.exit(1);
  }

  try {
    const duplicates = await findDuplicateFiles(
      path.resolve(directory)
    );

    if (duplicates.length === 0) {
      console.log("No duplicate files found.");
      return;
    }

    console.log(`Found ${duplicates.length} duplicate group(s):\n`);

    duplicates.forEach((group, index) => {
      console.log(`Duplicate group ${index + 1}:`);

      group.forEach((file) => {
        console.log(`  ${file}`);
      });

      console.log();
    });
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

main();