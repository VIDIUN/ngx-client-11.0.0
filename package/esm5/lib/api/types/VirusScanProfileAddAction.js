/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaVirusScanProfile } from './KalturaVirusScanProfile';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function VirusScanProfileAddActionArgs() { }
/** @type {?} */
VirusScanProfileAddActionArgs.prototype.virusScanProfile;
/**
 * Build request payload for service 'virusScanProfile' action 'add'.
 *
 * Usage: Allows you to add an virus scan profile object and virus scan profile content associated with Kaltura object
 *
 * Server response type:         KalturaVirusScanProfile
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'virusScanProfile' action 'add'.
 *
 * Usage: Allows you to add an virus scan profile object and virus scan profile content associated with Kaltura object
 *
 * Server response type:         KalturaVirusScanProfile
 * Server failure response type: KalturaAPIException
 */
VirusScanProfileAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(VirusScanProfileAddAction, _super);
    function VirusScanProfileAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaVirusScanProfile', responseConstructor: KalturaVirusScanProfile }) || this;
    }
    /**
     * @return {?}
     */
    VirusScanProfileAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'virusscan_virusscanprofile' },
            action: { type: 'c', default: 'add' },
            virusScanProfile: { type: 'o', subTypeConstructor: KalturaVirusScanProfile, subType: 'KalturaVirusScanProfile' }
        });
        return result;
    };
    return VirusScanProfileAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'virusScanProfile' action 'add'.
 *
 * Usage: Allows you to add an virus scan profile object and virus scan profile content associated with Kaltura object
 *
 * Server response type:         KalturaVirusScanProfile
 * Server failure response type: KalturaAPIException
 */
export { VirusScanProfileAddAction };
if (false) {
    /** @type {?} */
    VirusScanProfileAddAction.prototype.virusScanProfile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlydXNTY2FuUHJvZmlsZUFkZEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvVmlydXNTY2FuUHJvZmlsZUFkZEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXBFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUErQyxxREFBdUM7SUFJbEYsbUNBQVksSUFBb0M7ZUFFNUMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcseUJBQXlCLEVBQUUsbUJBQW1CLEVBQUcsdUJBQXVCLEVBQUcsQ0FBQztLQUNsSTs7OztJQUVTLGdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQzVFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLEtBQUssRUFBRTtZQUN4QyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsdUJBQXVCLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1NBQzNHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7b0NBdkNMO0VBa0IrQyxjQUFjLEVBc0I1RCxDQUFBOzs7Ozs7Ozs7QUF0QkQscUNBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFWaXJ1c1NjYW5Qcm9maWxlIH0gZnJvbSAnLi9LYWx0dXJhVmlydXNTY2FuUHJvZmlsZSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFZpcnVzU2NhblByb2ZpbGVBZGRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgdmlydXNTY2FuUHJvZmlsZSA6IEthbHR1cmFWaXJ1c1NjYW5Qcm9maWxlO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAndmlydXNTY2FuUHJvZmlsZScgYWN0aW9uICdhZGQnLlxuICpcbiAqIFVzYWdlOiBBbGxvd3MgeW91IHRvIGFkZCBhbiB2aXJ1cyBzY2FuIHByb2ZpbGUgb2JqZWN0IGFuZCB2aXJ1cyBzY2FuIHByb2ZpbGUgY29udGVudCBhc3NvY2lhdGVkIHdpdGggS2FsdHVyYSBvYmplY3RcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhVmlydXNTY2FuUHJvZmlsZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgVmlydXNTY2FuUHJvZmlsZUFkZEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFWaXJ1c1NjYW5Qcm9maWxlPiB7XG5cbiAgICB2aXJ1c1NjYW5Qcm9maWxlIDogS2FsdHVyYVZpcnVzU2NhblByb2ZpbGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogVmlydXNTY2FuUHJvZmlsZUFkZEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVZpcnVzU2NhblByb2ZpbGUnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVZpcnVzU2NhblByb2ZpbGUgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3ZpcnVzc2Nhbl92aXJ1c3NjYW5wcm9maWxlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkJyB9LFxuXHRcdFx0XHR2aXJ1c1NjYW5Qcm9maWxlIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhVmlydXNTY2FuUHJvZmlsZSwgc3ViVHlwZSA6ICdLYWx0dXJhVmlydXNTY2FuUHJvZmlsZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19