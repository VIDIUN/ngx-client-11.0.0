/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaMetadata } from './KalturaMetadata';
import { KalturaUploadRequest } from '../kaltura-upload-request';
/**
 * @record
 */
export function MetadataUpdateFromXSLActionArgs() { }
/** @type {?} */
MetadataUpdateFromXSLActionArgs.prototype.id;
/** @type {?} */
MetadataUpdateFromXSLActionArgs.prototype.xslFile;
/**
 * Build request payload for service 'metadata' action 'updateFromXSL'.
 *
 * Usage: Action transforms current metadata object XML using a provided XSL
 *
 * Server response type:         KalturaMetadata
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'metadata' action 'updateFromXSL'.
 *
 * Usage: Action transforms current metadata object XML using a provided XSL
 *
 * Server response type:         KalturaMetadata
 * Server failure response type: KalturaAPIException
 */
MetadataUpdateFromXSLAction = /** @class */ (function (_super) {
    tslib_1.__extends(MetadataUpdateFromXSLAction, _super);
    function MetadataUpdateFromXSLAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaMetadata', responseConstructor: KalturaMetadata }) || this;
    }
    /**
     * @return {?}
     */
    MetadataUpdateFromXSLAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'metadata_metadata' },
            action: { type: 'c', default: 'updateFromXSL' },
            id: { type: 'n' },
            xslFile: { type: 'f' }
        });
        return result;
    };
    return MetadataUpdateFromXSLAction;
}(KalturaUploadRequest));
/**
 * Build request payload for service 'metadata' action 'updateFromXSL'.
 *
 * Usage: Action transforms current metadata object XML using a provided XSL
 *
 * Server response type:         KalturaMetadata
 * Server failure response type: KalturaAPIException
 */
export { MetadataUpdateFromXSLAction };
if (false) {
    /** @type {?} */
    MetadataUpdateFromXSLAction.prototype.id;
    /** @type {?} */
    MetadataUpdateFromXSLAction.prototype.xslFile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YWRhdGFVcGRhdGVGcm9tWFNMQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9NZXRhZGF0YVVwZGF0ZUZyb21YU0xBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFcEQsT0FBTyxFQUFFLG9CQUFvQixFQUE0QixNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWUzRjs7Ozs7Ozs7QUFBQTtJQUFpRCx1REFBcUM7SUFLbEYscUNBQVksSUFBc0M7ZUFFOUMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUcsZUFBZSxFQUFHLENBQUM7S0FDbEg7Ozs7SUFFUyxrREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUNuRSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxlQUFlLEVBQUU7WUFDbEQsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2YsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtzQ0ExQ0w7RUFtQmlELG9CQUFvQixFQXdCcEUsQ0FBQTs7Ozs7Ozs7O0FBeEJELHVDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTWV0YWRhdGEgfSBmcm9tICcuL0thbHR1cmFNZXRhZGF0YSc7XG5cbmltcG9ydCB7IEthbHR1cmFVcGxvYWRSZXF1ZXN0LCBLYWx0dXJhVXBsb2FkUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXVwbG9hZC1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBNZXRhZGF0YVVwZGF0ZUZyb21YU0xBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFVcGxvYWRSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBudW1iZXI7XG5cdHhzbEZpbGUgOiBGaWxlO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnbWV0YWRhdGEnIGFjdGlvbiAndXBkYXRlRnJvbVhTTCcuXG4gKlxuICogVXNhZ2U6IEFjdGlvbiB0cmFuc2Zvcm1zIGN1cnJlbnQgbWV0YWRhdGEgb2JqZWN0IFhNTCB1c2luZyBhIHByb3ZpZGVkIFhTTFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFNZXRhZGF0YVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgTWV0YWRhdGFVcGRhdGVGcm9tWFNMQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVVwbG9hZFJlcXVlc3Q8S2FsdHVyYU1ldGFkYXRhPiB7XG5cbiAgICBpZCA6IG51bWJlcjtcblx0eHNsRmlsZSA6IEZpbGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogTWV0YWRhdGFVcGRhdGVGcm9tWFNMQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhTWV0YWRhdGEnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYU1ldGFkYXRhICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdtZXRhZGF0YV9tZXRhZGF0YScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwZGF0ZUZyb21YU0wnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHhzbEZpbGUgOiB7IHR5cGUgOiAnZicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19