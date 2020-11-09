// String Literal (type and value) for proper type checking
export const inViewEventType: "in-view-event" = "in-view-event";

// "CustomEvent" comes from 'lib.dom.d.ts' (tsconfig.json)
class InViewEvent<T extends HTMLElement> extends CustomEvent<InViewEventDetail<T>> {
    constructor(detail: InViewEventDetail<T>) {
        super(InViewEventType, { detail });
    }
}

interface InViewEventDetail<T extends HTMLElement> {
    ref: React.MutableRefObject<T>
}

export default InViewEvent;

// augment your global namespace
// here, we're augmenting 'WindowEventMap' from 'lib.dom.d.ts' 👌
declare global {
    interface WindowEventMap {
        [inViewEventType]: InViewEvent
    }
}
