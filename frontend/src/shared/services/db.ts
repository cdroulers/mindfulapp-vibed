import PouchDB from 'pouchdb-browser';
import { JournalEntry } from '../types/journal';

const db = new PouchDB<JournalEntry>('journal_db');

export const journalDB = {
  async getAll(): Promise<JournalEntry[]> {
    const result = await db.allDocs({ include_docs: true });
    return result.rows.map(row => row.doc as JournalEntry);
  },

  async get(id: string): Promise<JournalEntry> {
    return await db.get(id);
  },

  async create(entry: Omit<JournalEntry, 'id' | 'createdAt' | 'updatedAt'>): Promise<JournalEntry> {
    const timestamp = new Date().toISOString();
    const newEntry: JournalEntry = {
      ...entry,
      id: crypto.randomUUID(),
      createdAt: timestamp,
      updatedAt: timestamp,
    };
    await db.put(newEntry);
    return newEntry;
  },

  async update(id: string, entry: Partial<JournalEntry>): Promise<JournalEntry> {
    const existing = await db.get(id);
    const updated = {
      ...existing,
      ...entry,
      updatedAt: new Date().toISOString(),
    };
    await db.put(updated);
    return updated;
  },

  async delete(id: string): Promise<void> {
    const doc = await db.get(id);
    await db.remove(doc);
  },
}; 