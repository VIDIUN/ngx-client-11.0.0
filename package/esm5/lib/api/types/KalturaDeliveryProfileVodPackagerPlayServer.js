/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfile } from './KalturaDeliveryProfile';
/**
 * @record
 */
export function KalturaDeliveryProfileVodPackagerPlayServerArgs() { }
/** @type {?|undefined} */
KalturaDeliveryProfileVodPackagerPlayServerArgs.prototype.adStitchingEnabled;
var KalturaDeliveryProfileVodPackagerPlayServer = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDeliveryProfileVodPackagerPlayServer, _super);
    function KalturaDeliveryProfileVodPackagerPlayServer(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDeliveryProfileVodPackagerPlayServer.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDeliveryProfileVodPackagerPlayServer' },
            adStitchingEnabled: { type: 'b' }
        });
        return result;
    };
    return KalturaDeliveryProfileVodPackagerPlayServer;
}(KalturaDeliveryProfile));
export { KalturaDeliveryProfileVodPackagerPlayServer };
if (false) {
    /** @type {?} */
    KalturaDeliveryProfileVodPackagerPlayServer.prototype.adStitchingEnabled;
}
typesMappingStorage['KalturaDeliveryProfileVodPackagerPlayServer'] = KalturaDeliveryProfileVodPackagerPlayServer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZVZvZFBhY2thZ2VyUGxheVNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZVZvZFBhY2thZ2VyUGxheVNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQThCLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7QUFPOUYsSUFBQTtJQUFpRSx1RUFBc0I7SUFJbkYscURBQVksSUFBdUQ7ZUFFL0Qsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxrRUFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw2Q0FBNkMsRUFBRTtZQUNoRyxrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDMUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtzREE3Qkw7RUFTaUUsc0JBQXNCLEVBcUJ0RixDQUFBO0FBckJELHVEQXFCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw2Q0FBNkMsQ0FBQyxHQUFHLDJDQUEyQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEZWxpdmVyeVByb2ZpbGUsIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRGVsaXZlcnlQcm9maWxlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRGVsaXZlcnlQcm9maWxlVm9kUGFja2FnZXJQbGF5U2VydmVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhRGVsaXZlcnlQcm9maWxlQXJncyB7XG4gICAgYWRTdGl0Y2hpbmdFbmFibGVkPyA6IGJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVWb2RQYWNrYWdlclBsYXlTZXJ2ZXIgZXh0ZW5kcyBLYWx0dXJhRGVsaXZlcnlQcm9maWxlIHtcblxuICAgIGFkU3RpdGNoaW5nRW5hYmxlZCA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEZWxpdmVyeVByb2ZpbGVWb2RQYWNrYWdlclBsYXlTZXJ2ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZVZvZFBhY2thZ2VyUGxheVNlcnZlcicgfSxcblx0XHRcdFx0YWRTdGl0Y2hpbmdFbmFibGVkIDogeyB0eXBlIDogJ2InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEZWxpdmVyeVByb2ZpbGVWb2RQYWNrYWdlclBsYXlTZXJ2ZXInXSA9IEthbHR1cmFEZWxpdmVyeVByb2ZpbGVWb2RQYWNrYWdlclBsYXlTZXJ2ZXI7Il19