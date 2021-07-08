export class Time {
  timeline(t) {
    let diff = Date.now() - t;
    if (diff / 1000 > 1) {
      if (diff / (1000 * 60) > 1) {
        if (diff / (1000 * 60 * 60) > 1) {
          if (diff / (1000 * 60 * 60 * 24) > 1) {
            return `${Math.floor(diff / (1000 * 60 * 60 * 24))} day(s) ago`;
          }
          return `${Math.floor(diff / (1000 * 60 * 60))} hour(s) ago`;
        }
        return `${Math.floor(diff / (1000 * 60))} minute(s) ago`;
      }
      return `${Math.floor(diff / 1000)} second(s) ago`;
    }
  }
}
