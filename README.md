# progressive-render-101
The building block steps leading to progressive render thinking and appreciation

## Lessons

### Example 1:
- **Sync Single Write:** Example of server rendering HTML using Node JS HTTP module, by writing once to the output stream.
- **Sync Multi Write:** Example of server rendering HTML using Node JS HTTP module, by writing multiple times to the output stream, in a sync fashion.

### Example 2:
- **Async Multi Write:** This does not work in the usual sense. Async writes are not waited for and do not show up!

### Example 3:
- **Async Multi Write, out-of-order render but in-order-flush:** This fixes the problem in Example 2, using a utility module called _Async-Writer_ that lets write async to the output stream out-of-order but then buffers the responses in the right order, for the final flush, so that order of writes is maintained.

### Example 4:
- **Async Multi Write, out-of-order render, out-of-order flush:** This fixes the problem in Example 3, where we are no longer waiting for the chunks to be buffered & maintain the order. So everything is flushed as they arrive. The caveat, it gets painted in the wrong order on screen!

### Example 5:
- - **Async Multi Write, out-of-order render, out-of-order flush, but in-order-paint:** This fixes the problem in Example 4, where we are no longer waiting for the chunks to be buffered & maintain the order. So everything is flushed as they arrive. But, while in the previous case, where the order of paint was wrong, here the order is maintained. The caveat, it requires JS to work!
