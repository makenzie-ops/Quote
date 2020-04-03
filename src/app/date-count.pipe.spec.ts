import { DayCountPipe } from './date-count.pipe';

describe('DateCountPipe', () => {
  it('create an instance', () => {
    const pipe = new DayCountPipe();
    expect(pipe).toBeTruthy();
  });
});
