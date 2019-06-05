/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaEntryContextDataResult } from './KalturaEntryContextDataResult';
import { KalturaEntryContextDataParams } from './KalturaEntryContextDataParams';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function BaseEntryGetContextDataActionArgs() { }
/** @type {?} */
BaseEntryGetContextDataActionArgs.prototype.entryId;
/** @type {?} */
BaseEntryGetContextDataActionArgs.prototype.contextDataParams;
/**
 * Build request payload for service 'baseEntry' action 'getContextData'.
 *
 * Usage: This action delivers entry-related data, based on the user's context: access control, restriction, playback format and storage information
 *
 * Server response type:         KalturaEntryContextDataResult
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'baseEntry' action 'getContextData'.
 *
 * Usage: This action delivers entry-related data, based on the user's context: access control, restriction, playback format and storage information
 *
 * Server response type:         KalturaEntryContextDataResult
 * Server failure response type: KalturaAPIException
 */
BaseEntryGetContextDataAction = /** @class */ (function (_super) {
    tslib_1.__extends(BaseEntryGetContextDataAction, _super);
    function BaseEntryGetContextDataAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaEntryContextDataResult', responseConstructor: KalturaEntryContextDataResult }) || this;
    }
    /**
     * @return {?}
     */
    BaseEntryGetContextDataAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'baseentry' },
            action: { type: 'c', default: 'getContextData' },
            entryId: { type: 's' },
            contextDataParams: { type: 'o', subTypeConstructor: KalturaEntryContextDataParams, subType: 'KalturaEntryContextDataParams' }
        });
        return result;
    };
    return BaseEntryGetContextDataAction;
}(KalturaRequest));
/**
 * Build request payload for service 'baseEntry' action 'getContextData'.
 *
 * Usage: This action delivers entry-related data, based on the user's context: access control, restriction, playback format and storage information
 *
 * Server response type:         KalturaEntryContextDataResult
 * Server failure response type: KalturaAPIException
 */
export { BaseEntryGetContextDataAction };
if (false) {
    /** @type {?} */
    BaseEntryGetContextDataAction.prototype.entryId;
    /** @type {?} */
    BaseEntryGetContextDataAction.prototype.contextDataParams;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUVudHJ5R2V0Q29udGV4dERhdGFBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0Jhc2VFbnRyeUdldENvbnRleHREYXRhQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFaEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBbUQseURBQTZDO0lBSzVGLHVDQUFZLElBQXdDO2VBRWhELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLCtCQUErQixFQUFFLG1CQUFtQixFQUFHLDZCQUE2QixFQUFHLENBQUM7S0FDOUk7Ozs7SUFFUyxvREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxXQUFXLEVBQUU7WUFDM0QsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0JBQWdCLEVBQUU7WUFDbkQsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsNkJBQTZCLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1NBQ3hILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7d0NBM0NMO0VBb0JtRCxjQUFjLEVBd0JoRSxDQUFBOzs7Ozs7Ozs7QUF4QkQseUNBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFbnRyeUNvbnRleHREYXRhUmVzdWx0IH0gZnJvbSAnLi9LYWx0dXJhRW50cnlDb250ZXh0RGF0YVJlc3VsdCc7XG5cbmltcG9ydCB7IEthbHR1cmFFbnRyeUNvbnRleHREYXRhUGFyYW1zIH0gZnJvbSAnLi9LYWx0dXJhRW50cnlDb250ZXh0RGF0YVBhcmFtcyc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBCYXNlRW50cnlHZXRDb250ZXh0RGF0YUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRjb250ZXh0RGF0YVBhcmFtcyA6IEthbHR1cmFFbnRyeUNvbnRleHREYXRhUGFyYW1zO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnYmFzZUVudHJ5JyBhY3Rpb24gJ2dldENvbnRleHREYXRhJy5cbiAqXG4gKiBVc2FnZTogVGhpcyBhY3Rpb24gZGVsaXZlcnMgZW50cnktcmVsYXRlZCBkYXRhLCBiYXNlZCBvbiB0aGUgdXNlcidzIGNvbnRleHQ6IGFjY2VzcyBjb250cm9sLCByZXN0cmljdGlvbiwgcGxheWJhY2sgZm9ybWF0IGFuZCBzdG9yYWdlIGluZm9ybWF0aW9uXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUVudHJ5Q29udGV4dERhdGFSZXN1bHRcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEJhc2VFbnRyeUdldENvbnRleHREYXRhQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUVudHJ5Q29udGV4dERhdGFSZXN1bHQ+IHtcblxuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdGNvbnRleHREYXRhUGFyYW1zIDogS2FsdHVyYUVudHJ5Q29udGV4dERhdGFQYXJhbXM7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogQmFzZUVudHJ5R2V0Q29udGV4dERhdGFBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFFbnRyeUNvbnRleHREYXRhUmVzdWx0JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFFbnRyeUNvbnRleHREYXRhUmVzdWx0ICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdiYXNlZW50cnknIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdnZXRDb250ZXh0RGF0YScgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb250ZXh0RGF0YVBhcmFtcyA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVudHJ5Q29udGV4dERhdGFQYXJhbXMsIHN1YlR5cGUgOiAnS2FsdHVyYUVudHJ5Q29udGV4dERhdGFQYXJhbXMnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==