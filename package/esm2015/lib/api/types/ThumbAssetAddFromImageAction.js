/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaThumbAsset } from './KalturaThumbAsset';
import { KalturaUploadRequest } from '../kaltura-upload-request';
/**
 * @record
 */
export function ThumbAssetAddFromImageActionArgs() { }
/** @type {?} */
ThumbAssetAddFromImageActionArgs.prototype.entryId;
/** @type {?} */
ThumbAssetAddFromImageActionArgs.prototype.fileData;
/**
 * Build request payload for service 'thumbAsset' action 'addFromImage'.
 *
 *
 *
 * Server response type:         KalturaThumbAsset
 * Server failure response type: KalturaAPIException
 */
export class ThumbAssetAddFromImageAction extends KalturaUploadRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaThumbAsset', responseConstructor: KalturaThumbAsset });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'thumbasset' },
            action: { type: 'c', default: 'addFromImage' },
            entryId: { type: 's' },
            fileData: { type: 'f' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    ThumbAssetAddFromImageAction.prototype.entryId;
    /** @type {?} */
    ThumbAssetAddFromImageAction.prototype.fileData;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGh1bWJBc3NldEFkZEZyb21JbWFnZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvVGh1bWJBc3NldEFkZEZyb21JbWFnZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFeEQsT0FBTyxFQUFFLG9CQUFvQixFQUE0QixNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWUzRixNQUFNLG1DQUFvQyxTQUFRLG9CQUF1Qzs7OztJQUtyRixZQUFZLElBQXVDO1FBRS9DLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRyxpQkFBaUIsRUFBRyxDQUFDLENBQUM7S0FDdkg7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFlBQVksRUFBRTtZQUM1RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxjQUFjLEVBQUU7WUFDakQsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVGh1bWJBc3NldCB9IGZyb20gJy4vS2FsdHVyYVRodW1iQXNzZXQnO1xuXG5pbXBvcnQgeyBLYWx0dXJhVXBsb2FkUmVxdWVzdCwgS2FsdHVyYVVwbG9hZFJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS11cGxvYWQtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGh1bWJBc3NldEFkZEZyb21JbWFnZUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVVwbG9hZFJlcXVlc3RBcmdzIHtcbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRmaWxlRGF0YSA6IEZpbGU7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICd0aHVtYkFzc2V0JyBhY3Rpb24gJ2FkZEZyb21JbWFnZScuXG4gKlxuICogXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVRodW1iQXNzZXRcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFRodW1iQXNzZXRBZGRGcm9tSW1hZ2VBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhVXBsb2FkUmVxdWVzdDxLYWx0dXJhVGh1bWJBc3NldD4ge1xuXG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0ZmlsZURhdGEgOiBGaWxlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFRodW1iQXNzZXRBZGRGcm9tSW1hZ2VBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFUaHVtYkFzc2V0JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFUaHVtYkFzc2V0ICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd0aHVtYmFzc2V0JyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkRnJvbUltYWdlJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZpbGVEYXRhIDogeyB0eXBlIDogJ2YnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==