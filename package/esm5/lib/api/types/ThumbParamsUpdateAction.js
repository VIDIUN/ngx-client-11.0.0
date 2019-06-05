/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaThumbParams } from './KalturaThumbParams';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ThumbParamsUpdateActionArgs() { }
/** @type {?} */
ThumbParamsUpdateActionArgs.prototype.id;
/** @type {?} */
ThumbParamsUpdateActionArgs.prototype.thumbParams;
/**
 * Build request payload for service 'thumbParams' action 'update'.
 *
 * Usage: Update Thumb Params by ID
 *
 * Server response type:         KalturaThumbParams
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'thumbParams' action 'update'.
 *
 * Usage: Update Thumb Params by ID
 *
 * Server response type:         KalturaThumbParams
 * Server failure response type: KalturaAPIException
 */
ThumbParamsUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(ThumbParamsUpdateAction, _super);
    function ThumbParamsUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaThumbParams', responseConstructor: KalturaThumbParams }) || this;
    }
    /**
     * @return {?}
     */
    ThumbParamsUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'thumbparams' },
            action: { type: 'c', default: 'update' },
            id: { type: 'n' },
            thumbParams: { type: 'o', subTypeConstructor: KalturaThumbParams, subType: 'KalturaThumbParams' }
        });
        return result;
    };
    return ThumbParamsUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'thumbParams' action 'update'.
 *
 * Usage: Update Thumb Params by ID
 *
 * Server response type:         KalturaThumbParams
 * Server failure response type: KalturaAPIException
 */
export { ThumbParamsUpdateAction };
if (false) {
    /** @type {?} */
    ThumbParamsUpdateAction.prototype.id;
    /** @type {?} */
    ThumbParamsUpdateAction.prototype.thumbParams;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGh1bWJQYXJhbXNVcGRhdGVBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1RodW1iUGFyYW1zVXBkYXRlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBNkMsbURBQWtDO0lBSzNFLGlDQUFZLElBQWtDO2VBRTFDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLG9CQUFvQixFQUFFLG1CQUFtQixFQUFHLGtCQUFrQixFQUFHLENBQUM7S0FDeEg7Ozs7SUFFUyw4Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxhQUFhLEVBQUU7WUFDN0QsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQzNDLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7U0FDNUYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtrQ0ExQ0w7RUFtQjZDLGNBQWMsRUF3QjFELENBQUE7Ozs7Ozs7OztBQXhCRCxtQ0F3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVRodW1iUGFyYW1zIH0gZnJvbSAnLi9LYWx0dXJhVGh1bWJQYXJhbXMnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBUaHVtYlBhcmFtc1VwZGF0ZUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBpZCA6IG51bWJlcjtcblx0dGh1bWJQYXJhbXMgOiBLYWx0dXJhVGh1bWJQYXJhbXM7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICd0aHVtYlBhcmFtcycgYWN0aW9uICd1cGRhdGUnLlxuICpcbiAqIFVzYWdlOiBVcGRhdGUgVGh1bWIgUGFyYW1zIGJ5IElEXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVRodW1iUGFyYW1zXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBUaHVtYlBhcmFtc1VwZGF0ZUFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFUaHVtYlBhcmFtcz4ge1xuXG4gICAgaWQgOiBudW1iZXI7XG5cdHRodW1iUGFyYW1zIDogS2FsdHVyYVRodW1iUGFyYW1zO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFRodW1iUGFyYW1zVXBkYXRlQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhVGh1bWJQYXJhbXMnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVRodW1iUGFyYW1zICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd0aHVtYnBhcmFtcycgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwZGF0ZScgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dGh1bWJQYXJhbXMgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFUaHVtYlBhcmFtcywgc3ViVHlwZSA6ICdLYWx0dXJhVGh1bWJQYXJhbXMnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==