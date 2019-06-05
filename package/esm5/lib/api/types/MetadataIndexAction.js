/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function MetadataIndexActionArgs() { }
/** @type {?} */
MetadataIndexActionArgs.prototype.id;
/** @type {?} */
MetadataIndexActionArgs.prototype.shouldUpdate;
/**
 * Build request payload for service 'metadata' action 'index'.
 *
 * Usage: Index metadata by id, will also index the related object
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'metadata' action 'index'.
 *
 * Usage: Index metadata by id, will also index the related object
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
MetadataIndexAction = /** @class */ (function (_super) {
    tslib_1.__extends(MetadataIndexAction, _super);
    function MetadataIndexAction(data) {
        return _super.call(this, data, { responseType: 'n', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    MetadataIndexAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'metadata_metadata' },
            action: { type: 'c', default: 'index' },
            id: { type: 's' },
            shouldUpdate: { type: 'b' }
        });
        return result;
    };
    return MetadataIndexAction;
}(KalturaRequest));
/**
 * Build request payload for service 'metadata' action 'index'.
 *
 * Usage: Index metadata by id, will also index the related object
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export { MetadataIndexAction };
if (false) {
    /** @type {?} */
    MetadataIndexAction.prototype.id;
    /** @type {?} */
    MetadataIndexAction.prototype.shouldUpdate;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YWRhdGFJbmRleEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvTWV0YWRhdGFJbmRleEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFOzs7Ozs7OztBQUFBO0lBQXlDLCtDQUFzQjtJQUszRCw2QkFBWSxJQUE4QjtlQUV0QyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxFQUFFLEVBQUUsbUJBQW1CLEVBQUcsSUFBSSxFQUFFLENBQUM7S0FDdkY7Ozs7SUFFUywwQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUNuRSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxPQUFPLEVBQUU7WUFDMUMsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3BCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7OEJBMUNMO0VBbUJ5QyxjQUFjLEVBd0J0RCxDQUFBOzs7Ozs7Ozs7QUF4QkQsK0JBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBNZXRhZGF0YUluZGV4QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGlkIDogc3RyaW5nO1xuXHRzaG91bGRVcGRhdGUgOiBib29sZWFuO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnbWV0YWRhdGEnIGFjdGlvbiAnaW5kZXgnLlxuICpcbiAqIFVzYWdlOiBJbmRleCBtZXRhZGF0YSBieSBpZCwgd2lsbCBhbHNvIGluZGV4IHRoZSByZWxhdGVkIG9iamVjdFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIG51bWJlclxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgTWV0YWRhdGFJbmRleEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PG51bWJlcj4ge1xuXG4gICAgaWQgOiBzdHJpbmc7XG5cdHNob3VsZFVwZGF0ZSA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogTWV0YWRhdGFJbmRleEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ24nLCByZXNwb25zZVN1YlR5cGUgOiAnJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IG51bGwgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbWV0YWRhdGFfbWV0YWRhdGEnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdpbmRleCcgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2hvdWxkVXBkYXRlIDogeyB0eXBlIDogJ2InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==