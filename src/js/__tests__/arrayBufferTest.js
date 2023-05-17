import ArrayBufferConverter, { getBuffer } from '../arrayBuffer';

test('testing class ArrayBufferConverter on parse to String', () => {
  expect(ArrayBufferConverter.toString(getBuffer())).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});