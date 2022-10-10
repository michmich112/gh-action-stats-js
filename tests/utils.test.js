jest.mock('path');
const path = require('path');
const { getActionMetadataFromDirname, getRunMetadata } = require('../utils');
const packagejson = require('../package.json');

describe('GetActionMetadataFromDirname Tests Ubuntu', () => {
  test('it can get the right info from a action with a version', () => {
    process.env.RUNNER_OS = 'Linux';
    path.sep = '/';

    const dirname = `/home/runner/work/_actions/michmich112/version-bumper/v1.0.0/node_modules/gh-action-stats`;
    const actionMetadata = getActionMetadataFromDirname(dirname);
    expect(actionMetadata).toEqual({
      creator: 'michmich112',
      name: 'version-bumper',
      version: 'v1.0.0'
    });
  });

  test('it can get the right info from an action with a commit hash', () => {
    const dirname = `/home/runner/work/_actions/michmich112/version-bumper/8fc6e82c93abcdaae3fbb8239d101efc6b63b606/node_modules/gh-action-stats`
    const actionMetadata = getActionMetadataFromDirname(dirname);
    expect(actionMetadata).toEqual({
      creator: 'michmich112',
      name: 'version-bumper',
      version: '8fc6e82c93abcdaae3fbb8239d101efc6b63b606'
    });
  });

  test('it can get the right info from an action with a branch', () => {
    const dirname = `/home/runner/work/_actions/michmich112/version-bumper/master/node_modules/gh-action-stats`
    const actionMetadata = getActionMetadataFromDirname(dirname);
    expect(actionMetadata).toEqual({
      creator: 'michmich112',
      name: 'version-bumper',
      version: 'master'
    });
  });

  test('it can get the righ info from an action with a branch with the / character', () => {
    const dirname = `/home/runner/work/_actions/michmich112/version-bumper/fix/bug-fix-important/node_modules/gh-action-stats`
    const actionMetadata = getActionMetadataFromDirname(dirname);
    expect(actionMetadata).toEqual({
      creator: 'michmich112',
      name: 'version-bumper',
      version: 'fix/bug-fix-important'
    });
  });
});

describe('GetActionMetadataFromDirname Tests MacOs', () => {
  test('it can get the right info from a action with a version', () => {
    process.env.RUNNER_OS = 'macOS';
    path.sep = '/';
    const dirname = `/Users/runner/work/_actions/michmich112/version-bumper/v1.0.0/node_modules/gh-action-stats`;
    const actionMetadata = getActionMetadataFromDirname(dirname);
    expect(actionMetadata).toEqual({
      creator: 'michmich112',
      name: 'version-bumper',
      version: 'v1.0.0'
    });
  });

  test('it can get the right info from an action with a commit hash', () => {
    const dirname = `/Users/runner/work/_actions/michmich112/version-bumper/8fc6e82c93abcdaae3fbb8239d101efc6b63b606/node_modules/gh-action-stats`
    const actionMetadata = getActionMetadataFromDirname(dirname);
    expect(actionMetadata).toEqual({
      creator: 'michmich112',
      name: 'version-bumper',
      version: '8fc6e82c93abcdaae3fbb8239d101efc6b63b606'
    });
  });

  test('it can get the right info from an action with a branch', () => {
    const dirname = `/Users/runner/work/_actions/michmich112/version-bumper/master/node_modules/gh-action-stats`
    const actionMetadata = getActionMetadataFromDirname(dirname);
    expect(actionMetadata).toEqual({
      creator: 'michmich112',
      name: 'version-bumper',
      version: 'master'
    });
  });

  test('it can get the righ info from an action with a branch with the / character', () => {
    const dirname = `/Users/runner/work/_actions/michmich112/version-bumper/fix/bug-fix-important/node_modules/gh-action-stats`
    const actionMetadata = getActionMetadataFromDirname(dirname);
    expect(actionMetadata).toEqual({
      creator: 'michmich112',
      name: 'version-bumper',
      version: 'fix/bug-fix-important'
    });
  });
});

describe('GetActionMetadataFromDirname Tests Windows', () => {
  test('it can get the right info from a action with a version', () => {
    process.env.RUNNER_OS = 'Windows';
    path.sep = '\\';
    const dirname = `D:\\a\\_actions\\michmich112\\version-bumper\\v1.0.0\\node_modules\\gh-action-stats`;
    const actionMetadata = getActionMetadataFromDirname(dirname);
    expect(actionMetadata).toEqual({
      creator: 'michmich112',
      name: 'version-bumper',
      version: 'v1.0.0'
    });
  });

  test('it can get the right info from an action with a commit hash', () => {
    const dirname = `D:\\a\\_actions\\michmich112\\version-bumper\\8fc6e82c93abcdaae3fbb8239d101efc6b63b606\\node_modules\\gh-action-stats`
    const actionMetadata = getActionMetadataFromDirname(dirname);
    expect(actionMetadata).toEqual({
      creator: 'michmich112',
      name: 'version-bumper',
      version: '8fc6e82c93abcdaae3fbb8239d101efc6b63b606'
    });
  });

  test('it can get the right info from an action with a branch', () => {
    const dirname = `D:\\a\\_actions\\michmich112\\version-bumper\\master\\node_modules\\gh-action-stats`
    const actionMetadata = getActionMetadataFromDirname(dirname);
    expect(actionMetadata).toEqual({
      creator: 'michmich112',
      name: 'version-bumper',
      version: 'master'
    });
  });

  test('it can get the righ info from an action with a branch with the / character', () => {
    const dirname = `D:\\a\\_actions\\michmich112\\version-bumper\\fix\\bug-fix-important\\node_modules\\gh-action-stats`
    const actionMetadata = getActionMetadataFromDirname(dirname);
    expect(actionMetadata).toEqual({
      creator: 'michmich112',
      name: 'version-bumper',
      version: 'fix/bug-fix-important'
    });
  });
});

describe('GetRunMetadata Tests', () => {
  const envVars = {
    'GITHUB_RUN_ID': 'id',
    'GITHUB_ACTION': 'action',
    'GITHUB_ACTOR': 'actor',
    'GITHUB_REPOSITORY': 'repository',
    'GITHUB_EVENT_NAME': 'push',
    'GITHUB_REF': 'ref',
    'GITHUB_HEAD_REF': 'head_ref',
    'GITHUB_BASE_REF': 'base_ref',
    'GITHUB_ACTION_REPOSITORY': 'michmich112/version-bumper',
    'RUNNER_NAME': 'self-hosted',
    'RUNNER_OS': 'runner_os',
      };

  test('it should get all the env variables properly', () => {
    Object.keys(envVars).forEach(ev => process.env[ev] = envVars[ev]);
    const runMetadata = getRunMetadata();
    expect(runMetadata).toEqual({
      'github_run_id': 'id',
      'github_action': 'action',
      'github_actor': 'actor',
      'github_repository': 'repository',
      'github_event_name': 'push',
      'github_ref': 'ref',
      'github_head_ref': 'head_ref',
      'github_base_ref': 'base_ref',
      'github_action_repository': 'michmich112/version-bumper',
      'runner_name': 'self-hosted',
      'runner_os': 'runner_os',
      'package_version': packagejson.version
   });
  });

  test('it should replace env variables that are not present with null', () => {
    Object.keys(envVars).forEach(ev => delete process.env[ev]);
    const runMetadata = getRunMetadata();
    expect(runMetadata).toEqual({
      'github_run_id': null,
      'github_action': null,
      'github_actor': null,
      'github_repository': null,
      'github_event_name': null,
      'github_ref': null,
      'github_head_ref': null,
      'github_base_ref': null,
      'github_action_repository': null,
      'runner_name': null,
      'runner_os': null,
      'package_version': packagejson.version
    });
  });
});

