import { AppData, AppMetadata } from "../types/module";

export function createEmptyModule(meta: AppMetadata): AppData {
    return {
      ...meta,
      setup(): void {
        // Empty Setup
      },
    };
  }