/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaDrmLicenseAccessDetails } from './KalturaDrmLicenseAccessDetails';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function DrmLicenseAccessGetAccessActionArgs() { }
/** @type {?} */
DrmLicenseAccessGetAccessActionArgs.prototype.entryId;
/** @type {?} */
DrmLicenseAccessGetAccessActionArgs.prototype.flavorIds;
/** @type {?} */
DrmLicenseAccessGetAccessActionArgs.prototype.referrer;
/**
 * Build request payload for service 'drmLicenseAccess' action 'getAccess'.
 *
 * Usage: getAccessAction
 * input: flavor ids, drmProvider
 * Get Access Action
 *
 * Server response type:         KalturaDrmLicenseAccessDetails
 * Server failure response type: KalturaAPIException
 */
export class DrmLicenseAccessGetAccessAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaDrmLicenseAccessDetails', responseConstructor: KalturaDrmLicenseAccessDetails });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'drm_drmlicenseaccess' },
            action: { type: 'c', default: 'getAccess' },
            entryId: { type: 's' },
            flavorIds: { type: 's' },
            referrer: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    DrmLicenseAccessGetAccessAction.prototype.entryId;
    /** @type {?} */
    DrmLicenseAccessGetAccessAction.prototype.flavorIds;
    /** @type {?} */
    DrmLicenseAccessGetAccessAction.prototype.referrer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJtTGljZW5zZUFjY2Vzc0dldEFjY2Vzc0FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvRHJtTGljZW5zZUFjY2Vzc0dldEFjY2Vzc0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFbEYsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0J4RSxNQUFNLHNDQUF1QyxTQUFRLGNBQThDOzs7O0lBTS9GLFlBQVksSUFBMEM7UUFFbEQsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLGdDQUFnQyxFQUFFLG1CQUFtQixFQUFHLDhCQUE4QixFQUFHLENBQUMsQ0FBQztLQUNqSjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7WUFDdEUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsV0FBVyxFQUFFO1lBQzlDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRHJtTGljZW5zZUFjY2Vzc0RldGFpbHMgfSBmcm9tICcuL0thbHR1cmFEcm1MaWNlbnNlQWNjZXNzRGV0YWlscyc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERybUxpY2Vuc2VBY2Nlc3NHZXRBY2Nlc3NBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0Zmxhdm9ySWRzIDogc3RyaW5nO1xuXHRyZWZlcnJlciA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2RybUxpY2Vuc2VBY2Nlc3MnIGFjdGlvbiAnZ2V0QWNjZXNzJy5cbiAqXG4gKiBVc2FnZTogZ2V0QWNjZXNzQWN0aW9uXG4gKiBpbnB1dDogZmxhdm9yIGlkcywgZHJtUHJvdmlkZXJcbiAqIEdldCBBY2Nlc3MgQWN0aW9uXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYURybUxpY2Vuc2VBY2Nlc3NEZXRhaWxzXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBEcm1MaWNlbnNlQWNjZXNzR2V0QWNjZXNzQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYURybUxpY2Vuc2VBY2Nlc3NEZXRhaWxzPiB7XG5cbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRmbGF2b3JJZHMgOiBzdHJpbmc7XG5cdHJlZmVycmVyIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IERybUxpY2Vuc2VBY2Nlc3NHZXRBY2Nlc3NBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFEcm1MaWNlbnNlQWNjZXNzRGV0YWlscycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhRHJtTGljZW5zZUFjY2Vzc0RldGFpbHMgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2RybV9kcm1saWNlbnNlYWNjZXNzJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZ2V0QWNjZXNzJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZsYXZvcklkcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZWZlcnJlciA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=