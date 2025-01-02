import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  static levels = {
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
  };

  static currentLevel = LoggerService.levels.DEBUG;

  static log(level: number, ...args: any[]): void {
    if (level >= this.currentLevel) {
      const timestamp = new Date().toISOString();
      const stack = new Error().stack
        ?.split('\n')[3]
        ?.trim()
        ?.replace(/^at\s+/g, '') || 'unknown';

      console.log(
        `[${timestamp}] [${Object.keys(this.levels)[level]}] [${stack}]:`,
        ...args
      );
    }
  }

  static debug(...args: any[]): void {
    this.log(this.levels.DEBUG, ...args);
  }

  static info(...args: any[]): void {
    this.log(this.levels.INFO, ...args);
  }

  static warn(...args: any[]): void {
    this.log(this.levels.WARN, ...args);
  }

  static error(...args: any[]): void {
    this.log(this.levels.ERROR, ...args);
  }
}
