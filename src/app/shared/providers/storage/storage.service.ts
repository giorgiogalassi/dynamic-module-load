import {Inject, Injectable} from '@angular/core';

@Injectable()
export class StorageService {
  constructor(@Inject(localStorage) private storage: Storage) {}

  set(key: string, value: unknown): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  get<T>(key: string): T | null {
    const value = this.storage.getItem(key);

    if (value) return JSON.parse(value) as T;
    return null;
  }

  delete(key: string): void {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}
