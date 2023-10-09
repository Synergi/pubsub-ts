# pubsub-ts
PubSub is a topic-based publish/subscribe utility written in Typescript

Subscribe Example:
```javaScript
import pubSubInstance from 'pusub';

pubSubInstance.subscribe('test-event', (data) => {
    console.log(...data);
});
```

Publish Example:
```javaScript
import pubSubInstance from 'pusub';

pubSubInstance.publish('test-event', { data: 'Hello world' });
```