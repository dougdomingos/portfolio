declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_REPOS: string;
      GITHUB_API_TOKEN: string;
    }
  }
}

export {};
