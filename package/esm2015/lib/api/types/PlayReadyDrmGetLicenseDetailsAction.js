/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaPlayReadyLicenseDetails } from './KalturaPlayReadyLicenseDetails';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function PlayReadyDrmGetLicenseDetailsActionArgs() { }
/** @type {?} */
PlayReadyDrmGetLicenseDetailsActionArgs.prototype.keyId;
/** @type {?} */
PlayReadyDrmGetLicenseDetailsActionArgs.prototype.deviceId;
/** @type {?} */
PlayReadyDrmGetLicenseDetailsActionArgs.prototype.deviceType;
/** @type {?|undefined} */
PlayReadyDrmGetLicenseDetailsActionArgs.prototype.entryId;
/** @type {?|undefined} */
PlayReadyDrmGetLicenseDetailsActionArgs.prototype.referrer;
/**
 * Build request payload for service 'playReadyDrm' action 'getLicenseDetails'.
 *
 * Usage: Get Play Ready policy and dates for license creation
 *
 * Server response type:         KalturaPlayReadyLicenseDetails
 * Server failure response type: KalturaAPIException
 */
export class PlayReadyDrmGetLicenseDetailsAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaPlayReadyLicenseDetails', responseConstructor: KalturaPlayReadyLicenseDetails });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'playready_playreadydrm' },
            action: { type: 'c', default: 'getLicenseDetails' },
            keyId: { type: 's' },
            deviceId: { type: 's' },
            deviceType: { type: 'n' },
            entryId: { type: 's' },
            referrer: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    PlayReadyDrmGetLicenseDetailsAction.prototype.keyId;
    /** @type {?} */
    PlayReadyDrmGetLicenseDetailsAction.prototype.deviceId;
    /** @type {?} */
    PlayReadyDrmGetLicenseDetailsAction.prototype.deviceType;
    /** @type {?} */
    PlayReadyDrmGetLicenseDetailsAction.prototype.entryId;
    /** @type {?} */
    PlayReadyDrmGetLicenseDetailsAction.prototype.referrer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheVJlYWR5RHJtR2V0TGljZW5zZURldGFpbHNBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1BsYXlSZWFkeURybUdldExpY2Vuc2VEZXRhaWxzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVsRixPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCeEUsTUFBTSwwQ0FBMkMsU0FBUSxjQUE4Qzs7OztJQVFuRyxZQUFZLElBQThDO1FBRXRELEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxnQ0FBZ0MsRUFBRSxtQkFBbUIsRUFBRyw4QkFBOEIsRUFBRyxDQUFDLENBQUM7S0FDako7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ3hFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1CQUFtQixFQUFFO1lBQ3RELEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVBsYXlSZWFkeUxpY2Vuc2VEZXRhaWxzIH0gZnJvbSAnLi9LYWx0dXJhUGxheVJlYWR5TGljZW5zZURldGFpbHMnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBQbGF5UmVhZHlEcm1HZXRMaWNlbnNlRGV0YWlsc0FjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBrZXlJZCA6IHN0cmluZztcblx0ZGV2aWNlSWQgOiBzdHJpbmc7XG5cdGRldmljZVR5cGUgOiBudW1iZXI7XG5cdGVudHJ5SWQ/IDogc3RyaW5nO1xuXHRyZWZlcnJlcj8gOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdwbGF5UmVhZHlEcm0nIGFjdGlvbiAnZ2V0TGljZW5zZURldGFpbHMnLlxuICpcbiAqIFVzYWdlOiBHZXQgUGxheSBSZWFkeSBwb2xpY3kgYW5kIGRhdGVzIGZvciBsaWNlbnNlIGNyZWF0aW9uXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVBsYXlSZWFkeUxpY2Vuc2VEZXRhaWxzXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBQbGF5UmVhZHlEcm1HZXRMaWNlbnNlRGV0YWlsc0FjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFQbGF5UmVhZHlMaWNlbnNlRGV0YWlscz4ge1xuXG4gICAga2V5SWQgOiBzdHJpbmc7XG5cdGRldmljZUlkIDogc3RyaW5nO1xuXHRkZXZpY2VUeXBlIDogbnVtYmVyO1xuXHRlbnRyeUlkIDogc3RyaW5nO1xuXHRyZWZlcnJlciA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBQbGF5UmVhZHlEcm1HZXRMaWNlbnNlRGV0YWlsc0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVBsYXlSZWFkeUxpY2Vuc2VEZXRhaWxzJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFQbGF5UmVhZHlMaWNlbnNlRGV0YWlscyAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAncGxheXJlYWR5X3BsYXlyZWFkeWRybScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2dldExpY2Vuc2VEZXRhaWxzJyB9LFxuXHRcdFx0XHRrZXlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXZpY2VJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXZpY2VUeXBlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVmZXJyZXIgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19