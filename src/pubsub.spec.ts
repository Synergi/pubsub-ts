import { describe, expect, test, vi } from 'vitest';
import pubSubInstance from "./pubsub";

describe('PubSub', () => {
  const mocked = {
    callback: (data: Record<string, any>) => console.log(data),
  };

  describe('subscribe', () => {
    test('should call the "subscribe" method', () => {
      pubSubInstance.subscribe('test', mocked.callback);
      expect(pubSubInstance.events['test']).toBeDefined();
    });
  });

  describe('publish', () => {
    test('should call the "publish" method', () => {
      let spy = vi.spyOn(console, 'log');
      const payload = { data: 'testing' };
      pubSubInstance.publish('test', payload);
      expect(spy).toHaveBeenCalled();
    });
  });
});
