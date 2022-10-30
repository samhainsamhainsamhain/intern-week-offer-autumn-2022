const data = {
  react: {
    versions: [{ version: 18 }, { version: 17 }, { version: 16 }],
  },
  router: {
    versions: [
      {
        version: 21,
        dependencies: [{ packageName: 'react', version: 18 }],
      },
      {
        version: 20,
        dependencies: [{ packageName: 'react', version: 18 }],
      },
      {
        version: 19,
        dependencies: [{ packageName: 'react', version: 17 }],
      },
      {
        version: 18,
        dependencies: [{ packageName: 'react', version: 17 }],
      },
      {
        version: 17,
        dependencies: [{ packageName: 'react', version: 16 }],
      },
    ],
  },
  uikit: {
    versions: [
      {
        version: 9,
        dependencies: [
          { packageName: 'router', version: 20 },
          { packageName: 'react', version: 17 },
        ],
      },
      {
        version: 8,
        dependencies: [
          { packageName: 'router', version: 19 },
          { packageName: 'react', version: 17 },
        ],
      },
      {
        version: 7,
        dependencies: [
          { packageName: 'router', version: 18 },
          { packageName: 'react', version: 17 },
        ],
      },
    ],
  },
};

getLastCompatibleDependencies(data, 'router', 'uikit');
