declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_REPOS: string;
    }
  }
}

export {};
