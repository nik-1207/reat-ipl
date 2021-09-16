export function subscribe(eventClass, handler) {
    const modifiedHandler=(event)=>{
      
      handler(event.detail)
    }
    document.addEventListener(eventClass.name, modifiedHandler, { passive: true });
    return {
      unsubscribe: function unsubscribe() {
        document.removeEventListener(eventClass.name,handler);
      },
    };
  }
  
  export function publish(event) {
    let nativeEvent = new CustomEvent(event.constructor.name, {
      detail: event.args,
    });
    document.dispatchEvent(nativeEvent);
  }