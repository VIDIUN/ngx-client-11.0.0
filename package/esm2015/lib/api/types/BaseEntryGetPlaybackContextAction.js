/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaPlaybackContext } from './KalturaPlaybackContext';
import { KalturaPlaybackContextOptions } from './KalturaPlaybackContextOptions';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function BaseEntryGetPlaybackContextActionArgs() { }
/** @type {?} */
BaseEntryGetPlaybackContextActionArgs.prototype.entryId;
/** @type {?} */
BaseEntryGetPlaybackContextActionArgs.prototype.contextDataParams;
/**
 * Build request payload for service 'baseEntry' action 'getPlaybackContext'.
 *
 * Usage: This action delivers all data relevant for player
 *
 * Server response type:         KalturaPlaybackContext
 * Server failure response type: KalturaAPIException
 */
export class BaseEntryGetPlaybackContextAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaPlaybackContext', responseConstructor: KalturaPlaybackContext });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'baseentry' },
            action: { type: 'c', default: 'getPlaybackContext' },
            entryId: { type: 's' },
            contextDataParams: { type: 'o', subTypeConstructor: KalturaPlaybackContextOptions, subType: 'KalturaPlaybackContextOptions' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    BaseEntryGetPlaybackContextAction.prototype.entryId;
    /** @type {?} */
    BaseEntryGetPlaybackContextAction.prototype.contextDataParams;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUVudHJ5R2V0UGxheWJhY2tDb250ZXh0QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9CYXNlRW50cnlHZXRQbGF5YmFja0NvbnRleHRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRWxFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFLE1BQU0sd0NBQXlDLFNBQVEsY0FBc0M7Ozs7SUFLekYsWUFBWSxJQUE0QztRQUVwRCxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsd0JBQXdCLEVBQUUsbUJBQW1CLEVBQUcsc0JBQXNCLEVBQUcsQ0FBQyxDQUFDO0tBQ2pJOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxXQUFXLEVBQUU7WUFDM0QsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7WUFDdkQsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsNkJBQTZCLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1NBQ3hILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUGxheWJhY2tDb250ZXh0IH0gZnJvbSAnLi9LYWx0dXJhUGxheWJhY2tDb250ZXh0JztcblxuaW1wb3J0IHsgS2FsdHVyYVBsYXliYWNrQ29udGV4dE9wdGlvbnMgfSBmcm9tICcuL0thbHR1cmFQbGF5YmFja0NvbnRleHRPcHRpb25zJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VFbnRyeUdldFBsYXliYWNrQ29udGV4dEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRjb250ZXh0RGF0YVBhcmFtcyA6IEthbHR1cmFQbGF5YmFja0NvbnRleHRPcHRpb25zO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnYmFzZUVudHJ5JyBhY3Rpb24gJ2dldFBsYXliYWNrQ29udGV4dCcuXG4gKlxuICogVXNhZ2U6IFRoaXMgYWN0aW9uIGRlbGl2ZXJzIGFsbCBkYXRhIHJlbGV2YW50IGZvciBwbGF5ZXJcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhUGxheWJhY2tDb250ZXh0XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBCYXNlRW50cnlHZXRQbGF5YmFja0NvbnRleHRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhUGxheWJhY2tDb250ZXh0PiB7XG5cbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRjb250ZXh0RGF0YVBhcmFtcyA6IEthbHR1cmFQbGF5YmFja0NvbnRleHRPcHRpb25zO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEJhc2VFbnRyeUdldFBsYXliYWNrQ29udGV4dEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVBsYXliYWNrQ29udGV4dCcsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGxheWJhY2tDb250ZXh0ICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdiYXNlZW50cnknIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdnZXRQbGF5YmFja0NvbnRleHQnIH0sXG5cdFx0XHRcdGVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y29udGV4dERhdGFQYXJhbXMgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFQbGF5YmFja0NvbnRleHRPcHRpb25zLCBzdWJUeXBlIDogJ0thbHR1cmFQbGF5YmFja0NvbnRleHRPcHRpb25zJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=