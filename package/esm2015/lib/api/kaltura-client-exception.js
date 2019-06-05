/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
export class KalturaClientException extends Error {
    /**
     * @param {?} code
     * @param {?} message
     * @param {?=} args
     */
    constructor(code, message, args) {
        super(message);
        this.code = code;
        this.message = message;
        this.args = args;
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, KalturaClientException.prototype);
    }
}
if (false) {
    /** @type {?} */
    KalturaClientException.prototype.code;
    /** @type {?} */
    KalturaClientException.prototype.message;
    /** @type {?} */
    KalturaClientException.prototype.args;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FsdHVyYS1jbGllbnQtZXhjZXB0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS9rYWx0dXJhLWNsaWVudC1leGNlcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE1BQU0sNkJBQThCLFNBQVEsS0FBSzs7Ozs7O0lBQzdDLFlBQW1CLElBQVksRUFBUyxPQUFlLEVBQVMsSUFBVTtRQUN0RSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFEQSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFTLFNBQUksR0FBSixJQUFJLENBQU07O1FBSXRFLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ2pFO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ2xpZW50RXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb2RlOiBzdHJpbmcsIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcsIHB1YmxpYyBhcmdzPzogYW55KSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuXG4gICAgICAgIC8vIFNldCB0aGUgcHJvdG90eXBlIGV4cGxpY2l0bHkuXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBLYWx0dXJhQ2xpZW50RXhjZXB0aW9uLnByb3RvdHlwZSk7XG4gICAgfVxufSJdfQ==