const repository = {
  name: 'github-action-slack-notify-build',
  owner: {
    login: 'rvaidya',
  },
};

export const GITHUB_PUSH_EVENT = {
  context: {
    payload: {
      repository,
      head_commit:
      {
        id: '1',
        message: 'first commit',
      },
    },
    ref: 'refs/heads/my-branch',
    workflow: 'CI',
    eventName: 'push',
    sha: 'abc123',
  },
};

export const GITHUB_PR_EVENT = {
  context: {
    payload: {
      repository,
      pull_request: {
        html_url: 'https://github.com/rvaidya/github-action-slack-notify-build/pulls/1',
        title: 'This is a PR',
        head: {
          ref: 'my-branch',
          sha: 'xyz678',
        },
      },
    },
    workflow: 'CI',
    eventName: 'pull_request',
    sha: 'abc123',
  },
};
