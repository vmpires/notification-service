import { Notification } from './notification';
import { randomUUID } from 'crypto';
import { Content } from './content';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('You got mail!'),
      category: 'Social',
      recipientId: randomUUID(),
      createdAt: new Date(),
    });
    expect(notification).toBeTruthy();
  });
});
