/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaFileRequest } from '../kaltura-file-request';
/**
 * @record
 */
export function MetadataProfileServeViewActionArgs() { }
/** @type {?} */
MetadataProfileServeViewActionArgs.prototype.id;
/**
 * Build request payload for service 'metadataProfile' action 'serveView'.
 *
 * Usage: Serves metadata profile view file
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export class MetadataProfileServeViewAction extends KalturaFileRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'metadata_metadataprofile' },
            action: { type: 'c', default: 'serveView' },
            id: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    MetadataProfileServeViewAction.prototype.id;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YWRhdGFQcm9maWxlU2VydmVWaWV3QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9NZXRhZGF0YVByb2ZpbGVTZXJ2ZVZpZXdBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxrQkFBa0IsRUFBMEIsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBY3JGLE1BQU0scUNBQXNDLFNBQVEsa0JBQWtCOzs7O0lBSWxFLFlBQVksSUFBeUM7UUFFakQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1lBQzFFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFdBQVcsRUFBRTtZQUM5QyxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ1YsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuXG5pbXBvcnQgeyBLYWx0dXJhRmlsZVJlcXVlc3QsIEthbHR1cmFGaWxlUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLWZpbGUtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWV0YWRhdGFQcm9maWxlU2VydmVWaWV3QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhRmlsZVJlcXVlc3RBcmdzIHtcbiAgICBpZCA6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ21ldGFkYXRhUHJvZmlsZScgYWN0aW9uICdzZXJ2ZVZpZXcnLlxuICpcbiAqIFVzYWdlOiBTZXJ2ZXMgbWV0YWRhdGEgcHJvZmlsZSB2aWV3IGZpbGVcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICB7IHVybDogc3RyaW5nIH1cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIE1ldGFkYXRhUHJvZmlsZVNlcnZlVmlld0FjdGlvbiBleHRlbmRzIEthbHR1cmFGaWxlUmVxdWVzdCB7XG5cbiAgICBpZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBNZXRhZGF0YVByb2ZpbGVTZXJ2ZVZpZXdBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbWV0YWRhdGFfbWV0YWRhdGFwcm9maWxlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc2VydmVWaWV3JyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=