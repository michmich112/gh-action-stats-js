describe('GetActionMetadataFromDirname Tests Actual Runner', () => {
  test('It can get the correct results from in the runner environment', () => {
    if (process.env.CI) {
      console.debug('Runner environment', process.env.RUNNER_OS);
      const actionMetadata = getActionMetadataFromDirname(process.env.DIRPATH);
      expect(actionMetadata).toEqual({
        creator: 'michmich112',
        name: 'get-actions-dir-path',
        version: 'main'
      })
    } else {
      console.debug('Not CI, skipping');
    }
  });
});

