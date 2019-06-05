/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function BaseEntryIndexActionArgs() { }
/** @type {?} */
BaseEntryIndexActionArgs.prototype.id;
/** @type {?|undefined} */
BaseEntryIndexActionArgs.prototype.shouldUpdate;
/**
 * Build request payload for service 'baseEntry' action 'index'.
 *
 * Usage: Index an entry by id
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'baseEntry' action 'index'.
 *
 * Usage: Index an entry by id
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
BaseEntryIndexAction = /** @class */ (function (_super) {
    tslib_1.__extends(BaseEntryIndexAction, _super);
    function BaseEntryIndexAction(data) {
        var _this = _super.call(this, data, { responseType: 'n', responseSubType: '', responseConstructor: null }) || this;
        if (typeof _this.shouldUpdate === 'undefined')
            _this.shouldUpdate = true;
        return _this;
    }
    /**
     * @return {?}
     */
    BaseEntryIndexAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'baseentry' },
            action: { type: 'c', default: 'index' },
            id: { type: 's' },
            shouldUpdate: { type: 'b' }
        });
        return result;
    };
    return BaseEntryIndexAction;
}(KalturaRequest));
/**
 * Build request payload for service 'baseEntry' action 'index'.
 *
 * Usage: Index an entry by id
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export { BaseEntryIndexAction };
if (false) {
    /** @type {?} */
    BaseEntryIndexAction.prototype.id;
    /** @type {?} */
    BaseEntryIndexAction.prototype.shouldUpdate;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUVudHJ5SW5kZXhBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0Jhc2VFbnRyeUluZGV4QWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBMEMsZ0RBQXNCO0lBSzVELDhCQUFZLElBQStCO1FBQTNDLFlBRUksa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsRUFBRSxFQUFFLG1CQUFtQixFQUFHLElBQUksRUFBRSxDQUFDLFNBRXZGO1FBREcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsWUFBWSxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDOztLQUMxRTs7OztJQUVTLDJDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFdBQVcsRUFBRTtZQUMzRCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxPQUFPLEVBQUU7WUFDMUMsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3BCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7K0JBM0NMO0VBbUIwQyxjQUFjLEVBeUJ2RCxDQUFBOzs7Ozs7Ozs7QUF6QkQsZ0NBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBCYXNlRW50cnlJbmRleEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBpZCA6IHN0cmluZztcblx0c2hvdWxkVXBkYXRlPyA6IGJvb2xlYW47XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdiYXNlRW50cnknIGFjdGlvbiAnaW5kZXgnLlxuICpcbiAqIFVzYWdlOiBJbmRleCBhbiBlbnRyeSBieSBpZFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIG51bWJlclxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgQmFzZUVudHJ5SW5kZXhBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxudW1iZXI+IHtcblxuICAgIGlkIDogc3RyaW5nO1xuXHRzaG91bGRVcGRhdGUgOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEJhc2VFbnRyeUluZGV4QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbicsIHJlc3BvbnNlU3ViVHlwZSA6ICcnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogbnVsbCB9KTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnNob3VsZFVwZGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuc2hvdWxkVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdiYXNlZW50cnknIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdpbmRleCcgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2hvdWxkVXBkYXRlIDogeyB0eXBlIDogJ2InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==