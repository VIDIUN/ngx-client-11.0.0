/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaShortLink } from './KalturaShortLink';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ShortLinkUpdateActionArgs() { }
/** @type {?} */
ShortLinkUpdateActionArgs.prototype.id;
/** @type {?} */
ShortLinkUpdateActionArgs.prototype.shortLink;
/**
 * Build request payload for service 'shortLink' action 'update'.
 *
 * Usage: Update exisitng short link
 *
 * Server response type:         KalturaShortLink
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'shortLink' action 'update'.
 *
 * Usage: Update exisitng short link
 *
 * Server response type:         KalturaShortLink
 * Server failure response type: KalturaAPIException
 */
ShortLinkUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(ShortLinkUpdateAction, _super);
    function ShortLinkUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaShortLink', responseConstructor: KalturaShortLink }) || this;
    }
    /**
     * @return {?}
     */
    ShortLinkUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'shortlink_shortlink' },
            action: { type: 'c', default: 'update' },
            id: { type: 's' },
            shortLink: { type: 'o', subTypeConstructor: KalturaShortLink, subType: 'KalturaShortLink' }
        });
        return result;
    };
    return ShortLinkUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'shortLink' action 'update'.
 *
 * Usage: Update exisitng short link
 *
 * Server response type:         KalturaShortLink
 * Server failure response type: KalturaAPIException
 */
export { ShortLinkUpdateAction };
if (false) {
    /** @type {?} */
    ShortLinkUpdateAction.prototype.id;
    /** @type {?} */
    ShortLinkUpdateAction.prototype.shortLink;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hvcnRMaW5rVXBkYXRlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9TaG9ydExpbmtVcGRhdGVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUEyQyxpREFBZ0M7SUFLdkUsK0JBQVksSUFBZ0M7ZUFFeEMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUcsZ0JBQWdCLEVBQUcsQ0FBQztLQUNwSDs7OztJQUVTLDRDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1lBQ3JFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUMzQyxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsZ0JBQWdCLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1NBQ3RGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Z0NBMUNMO0VBbUIyQyxjQUFjLEVBd0J4RCxDQUFBOzs7Ozs7Ozs7QUF4QkQsaUNBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTaG9ydExpbmsgfSBmcm9tICcuL0thbHR1cmFTaG9ydExpbmsnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBTaG9ydExpbmtVcGRhdGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBzdHJpbmc7XG5cdHNob3J0TGluayA6IEthbHR1cmFTaG9ydExpbms7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdzaG9ydExpbmsnIGFjdGlvbiAndXBkYXRlJy5cbiAqXG4gKiBVc2FnZTogVXBkYXRlIGV4aXNpdG5nIHNob3J0IGxpbmtcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhU2hvcnRMaW5rXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTaG9ydExpbmtVcGRhdGVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhU2hvcnRMaW5rPiB7XG5cbiAgICBpZCA6IHN0cmluZztcblx0c2hvcnRMaW5rIDogS2FsdHVyYVNob3J0TGluaztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBTaG9ydExpbmtVcGRhdGVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFTaG9ydExpbmsnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNob3J0TGluayAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc2hvcnRsaW5rX3Nob3J0bGluaycgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwZGF0ZScgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2hvcnRMaW5rIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2hvcnRMaW5rLCBzdWJUeXBlIDogJ0thbHR1cmFTaG9ydExpbmsnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==