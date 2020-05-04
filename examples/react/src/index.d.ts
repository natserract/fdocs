// declare namespace JSX {
//     interface IntrinsicElements {
//         heyo: any
//     }
// }

declare namespace JSX {
    // tslint:disable no-empty-interface
    interface IntrinsicElements {
        [elem: string]: any
    }
}