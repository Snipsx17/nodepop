'use strict';

export const customEventDispatch = (eventName, dataEvent, element) => {
  const event = new CustomEvent(eventName, {
    detail: dataEvent,
  });

  element.dispatchEvent(event);
};
