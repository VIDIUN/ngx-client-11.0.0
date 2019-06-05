/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaBaseResponseProfile } from './types/KalturaBaseResponseProfile';
import { KalturaObjectBase } from './kaltura-object-base';
import { InjectionToken } from '@angular/core';
/** @type {?} */
export var KALTURA_CLIENT_DEFAULT_REQUEST_OPTIONS = new InjectionToken('kaltura client default request options');
/**
 * @record
 */
export function KalturaRequestOptionsArgs() { }
/** @type {?|undefined} */
KalturaRequestOptionsArgs.prototype.acceptedTypes;
/** @type {?|undefined} */
KalturaRequestOptionsArgs.prototype.partnerId;
/** @type {?|undefined} */
KalturaRequestOptionsArgs.prototype.ks;
/** @type {?|undefined} */
KalturaRequestOptionsArgs.prototype.responseProfile;
var KalturaRequestOptions = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaRequestOptions, _super);
    function KalturaRequestOptions(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.acceptedTypes === 'undefined')
            _this.acceptedTypes = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaRequestOptions.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            partnerId: { type: 'n' },
            ks: { type: 's' },
            responseProfile: { type: 'o', subTypeConstructor: KalturaBaseResponseProfile, subType: 'KalturaBaseResponseProfile' }
        });
        return result;
    };
    return KalturaRequestOptions;
}(KalturaObjectBase));
export { KalturaRequestOptions };
if (false) {
    /** @type {?} */
    KalturaRequestOptions.prototype.acceptedTypes;
    /** @type {?} */
    KalturaRequestOptions.prototype.partnerId;
    /** @type {?} */
    KalturaRequestOptions.prototype.ks;
    /** @type {?} */
    KalturaRequestOptions.prototype.responseProfile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FsdHVyYS1yZXF1ZXN0LW9wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL2thbHR1cmEtcmVxdWVzdC1vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHVCQUF1QixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRS9DLFdBQWEsc0NBQXNDLEdBQThDLElBQUksY0FBYyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFVOUosSUFBQTtJQUEyQyxpREFBaUI7SUFPeEQsK0JBQVksSUFBaUM7UUFBN0MsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtRQURHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLGFBQWEsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQzs7S0FDMUU7Ozs7SUFFUyw0Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RDLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRywwQkFBMEIsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7U0FDaEgsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtnQ0F6Q0w7RUFnQjJDLGlCQUFpQixFQTBCM0QsQ0FBQTtBQTFCRCxpQ0EwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQmFzZVJlc3BvbnNlUHJvZmlsZSB9IGZyb20gJy4vdHlwZXMvS2FsdHVyYUJhc2VSZXNwb25zZVByb2ZpbGUnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgS0FMVFVSQV9DTElFTlRfREVGQVVMVF9SRVFVRVNUX09QVElPTlM6IEluamVjdGlvblRva2VuPEthbHR1cmFSZXF1ZXN0T3B0aW9uc0FyZ3M+ID0gbmV3IEluamVjdGlvblRva2VuKCdrYWx0dXJhIGNsaWVudCBkZWZhdWx0IHJlcXVlc3Qgb3B0aW9ucycpO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFSZXF1ZXN0T3B0aW9uc0FyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBhY2NlcHRlZFR5cGVzPyA6IHtuZXcoLi4uYXJnczogYW55W10pIDogS2FsdHVyYU9iamVjdEJhc2V9W107XG5cdHBhcnRuZXJJZD8gOiBudW1iZXI7XG5cdGtzPyA6IHN0cmluZztcblx0cmVzcG9uc2VQcm9maWxlPyA6IEthbHR1cmFCYXNlUmVzcG9uc2VQcm9maWxlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUmVxdWVzdE9wdGlvbnMgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBhY2NlcHRlZFR5cGVzIDoge25ldyguLi5hcmdzOiBhbnlbXSkgOiBLYWx0dXJhT2JqZWN0QmFzZX1bXTtcblx0cGFydG5lcklkIDogbnVtYmVyO1xuXHRrcyA6IHN0cmluZztcblx0cmVzcG9uc2VQcm9maWxlIDogS2FsdHVyYUJhc2VSZXNwb25zZVByb2ZpbGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFSZXF1ZXN0T3B0aW9uc0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmFjY2VwdGVkVHlwZXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLmFjY2VwdGVkVHlwZXMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGFydG5lcklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGtzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlc3BvbnNlUHJvZmlsZSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJhc2VSZXNwb25zZVByb2ZpbGUsIHN1YlR5cGUgOiAnS2FsdHVyYUJhc2VSZXNwb25zZVByb2ZpbGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iXX0=