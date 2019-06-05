/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaThumbParams } from './KalturaThumbParams';
import { KalturaThumbnailServeOptions } from './KalturaThumbnailServeOptions';
import { KalturaFileRequest } from '../kaltura-file-request';
/**
 * @record
 */
export function ThumbAssetServeActionArgs() { }
/** @type {?} */
ThumbAssetServeActionArgs.prototype.thumbAssetId;
/** @type {?|undefined} */
ThumbAssetServeActionArgs.prototype.version;
/** @type {?|undefined} */
ThumbAssetServeActionArgs.prototype.thumbParams;
/** @type {?|undefined} */
ThumbAssetServeActionArgs.prototype.options;
/**
 * Build request payload for service 'thumbAsset' action 'serve'.
 *
 * Usage: Serves thumbnail by its id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export class ThumbAssetServeAction extends KalturaFileRequest {
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
            service: { type: 'c', default: 'thumbasset' },
            action: { type: 'c', default: 'serve' },
            thumbAssetId: { type: 's' },
            version: { type: 'n' },
            thumbParams: { type: 'o', subTypeConstructor: KalturaThumbParams, subType: 'KalturaThumbParams' },
            options: { type: 'o', subTypeConstructor: KalturaThumbnailServeOptions, subType: 'KalturaThumbnailServeOptions' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    ThumbAssetServeAction.prototype.thumbAssetId;
    /** @type {?} */
    ThumbAssetServeAction.prototype.version;
    /** @type {?} */
    ThumbAssetServeAction.prototype.thumbParams;
    /** @type {?} */
    ThumbAssetServeAction.prototype.options;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGh1bWJBc3NldFNlcnZlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9UaHVtYkFzc2V0U2VydmVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxrQkFBa0IsRUFBMEIsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJyRixNQUFNLDRCQUE2QixTQUFRLGtCQUFrQjs7OztJQU96RCxZQUFZLElBQWdDO1FBRXhDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxZQUFZLEVBQUU7WUFDNUQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsT0FBTyxFQUFFO1lBQzFDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtZQUNyRyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDRCQUE0QixFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtTQUM1RyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5cbmltcG9ydCB7IEthbHR1cmFUaHVtYlBhcmFtcyB9IGZyb20gJy4vS2FsdHVyYVRodW1iUGFyYW1zJztcbmltcG9ydCB7IEthbHR1cmFUaHVtYm5haWxTZXJ2ZU9wdGlvbnMgfSBmcm9tICcuL0thbHR1cmFUaHVtYm5haWxTZXJ2ZU9wdGlvbnMnO1xuaW1wb3J0IHsgS2FsdHVyYUZpbGVSZXF1ZXN0LCBLYWx0dXJhRmlsZVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1maWxlLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRodW1iQXNzZXRTZXJ2ZUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYUZpbGVSZXF1ZXN0QXJncyB7XG4gICAgdGh1bWJBc3NldElkIDogc3RyaW5nO1xuXHR2ZXJzaW9uPyA6IG51bWJlcjtcblx0dGh1bWJQYXJhbXM/IDogS2FsdHVyYVRodW1iUGFyYW1zO1xuXHRvcHRpb25zPyA6IEthbHR1cmFUaHVtYm5haWxTZXJ2ZU9wdGlvbnM7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICd0aHVtYkFzc2V0JyBhY3Rpb24gJ3NlcnZlJy5cbiAqXG4gKiBVc2FnZTogU2VydmVzIHRodW1ibmFpbCBieSBpdHMgaWRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICB7IHVybDogc3RyaW5nIH1cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFRodW1iQXNzZXRTZXJ2ZUFjdGlvbiBleHRlbmRzIEthbHR1cmFGaWxlUmVxdWVzdCB7XG5cbiAgICB0aHVtYkFzc2V0SWQgOiBzdHJpbmc7XG5cdHZlcnNpb24gOiBudW1iZXI7XG5cdHRodW1iUGFyYW1zIDogS2FsdHVyYVRodW1iUGFyYW1zO1xuXHRvcHRpb25zIDogS2FsdHVyYVRodW1ibmFpbFNlcnZlT3B0aW9ucztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBUaHVtYkFzc2V0U2VydmVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndGh1bWJhc3NldCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3NlcnZlJyB9LFxuXHRcdFx0XHR0aHVtYkFzc2V0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dmVyc2lvbiA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR0aHVtYlBhcmFtcyA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVRodW1iUGFyYW1zLCBzdWJUeXBlIDogJ0thbHR1cmFUaHVtYlBhcmFtcycgfSxcblx0XHRcdFx0b3B0aW9ucyA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVRodW1ibmFpbFNlcnZlT3B0aW9ucywgc3ViVHlwZSA6ICdLYWx0dXJhVGh1bWJuYWlsU2VydmVPcHRpb25zJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=