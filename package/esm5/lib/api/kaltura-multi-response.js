/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
var KalturaMultiResponse = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaMultiResponse, _super);
    function KalturaMultiResponse(results) {
        var _newTarget = this.constructor;
        if (results === void 0) { results = []; }
        var _this = _super.call(this) || this;
        if (_newTarget) {
            // Set the prototype explicitly - see: https://github.com/Microsoft/TypeScript/wiki/FAQ#why-doesnt-extending-built-ins-like-error-array-and-map-work
            Object.setPrototypeOf(_this, _newTarget.prototype);
        }
        if (results && results.length > 0) {
            _this.push.apply(_this, tslib_1.__spread(results));
        }
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaMultiResponse.prototype.hasErrors = /**
     * @return {?}
     */
    function () {
        return this.filter(function (result) { return result.error; }).length > 0;
    };
    /**
     * @return {?}
     */
    KalturaMultiResponse.prototype.getFirstError = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = null;
        for (var i = 0; i < this.length; i++) {
            result = this[i].error;
            if (result) {
                break;
            }
        }
        return result;
    };
    return KalturaMultiResponse;
}(Array));
export { KalturaMultiResponse };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FsdHVyYS1tdWx0aS1yZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkva2FsdHVyYS1tdWx0aS1yZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLElBQUE7SUFBMEMsZ0RBQTJCO0lBQ2pFLDhCQUFZLE9BQW9DOztRQUFwQyx3QkFBQSxFQUFBLFlBQW9DO1FBQWhELFlBQ0ksaUJBQU8sU0FVVjtRQVJHLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQzs7WUFFYixNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUksRUFBRSxXQUFXLFNBQVMsQ0FBQyxDQUFDO1NBQ3JEO1FBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxLQUFJLENBQUMsSUFBSSxPQUFULEtBQUksbUJBQVMsT0FBTyxHQUFFO1NBQ3pCOztLQUNKOzs7O0lBRU0sd0NBQVM7Ozs7UUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxLQUFLLEVBQVosQ0FBWSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzs7Ozs7SUFHbkQsNENBQWE7Ozs7O1FBQ2hCLElBQUksTUFBTSxHQUF3QixJQUFJLENBQUM7UUFDdkMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDbkMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFFdkIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDVCxLQUFLLENBQUM7YUFDVDtTQUNKO1FBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQzs7K0JBOUJ0QjtFQUcwQyxLQUFLLEVBK0I5QyxDQUFBO0FBL0JELGdDQStCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEthbHR1cmFSZXNwb25zZSB9IGZyb20gXCIuL2thbHR1cmEtcmVzcG9uc2VcIjtcbmltcG9ydCB7IEthbHR1cmFBUElFeGNlcHRpb24gfSBmcm9tICcuL2thbHR1cmEtYXBpLWV4Y2VwdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhTXVsdGlSZXNwb25zZSBleHRlbmRzIEFycmF5PEthbHR1cmFSZXNwb25zZTxhbnk+PiB7XG4gICAgY29uc3RydWN0b3IocmVzdWx0czogS2FsdHVyYVJlc3BvbnNlPGFueT5bXSA9IFtdKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgaWYgKG5ldy50YXJnZXQpIHtcbiAgICAgICAgICAgIC8vIFNldCB0aGUgcHJvdG90eXBlIGV4cGxpY2l0bHkgLSBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC93aWtpL0ZBUSN3aHktZG9lc250LWV4dGVuZGluZy1idWlsdC1pbnMtbGlrZS1lcnJvci1hcnJheS1hbmQtbWFwLXdvcmtcbiAgICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBuZXcudGFyZ2V0LnByb3RvdHlwZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucHVzaCguLi5yZXN1bHRzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBoYXNFcnJvcnMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcihyZXN1bHQgPT4gcmVzdWx0LmVycm9yKS5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRGaXJzdEVycm9yKCk6IEthbHR1cmFBUElFeGNlcHRpb24ge1xuICAgICAgICBsZXQgcmVzdWx0OiBLYWx0dXJhQVBJRXhjZXB0aW9uID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzW2ldLmVycm9yO1xuXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblxufVxuIl19