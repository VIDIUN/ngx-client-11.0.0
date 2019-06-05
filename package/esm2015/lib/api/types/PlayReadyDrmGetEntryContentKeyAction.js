/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaPlayReadyContentKey } from './KalturaPlayReadyContentKey';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function PlayReadyDrmGetEntryContentKeyActionArgs() { }
/** @type {?} */
PlayReadyDrmGetEntryContentKeyActionArgs.prototype.entryId;
/** @type {?|undefined} */
PlayReadyDrmGetEntryContentKeyActionArgs.prototype.createIfMissing;
/**
 * Build request payload for service 'playReadyDrm' action 'getEntryContentKey'.
 *
 * Usage: Get content key and key id for the given entry
 *
 * Server response type:         KalturaPlayReadyContentKey
 * Server failure response type: KalturaAPIException
 */
export class PlayReadyDrmGetEntryContentKeyAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaPlayReadyContentKey', responseConstructor: KalturaPlayReadyContentKey });
        if (typeof this.createIfMissing === 'undefined')
            this.createIfMissing = false;
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'playready_playreadydrm' },
            action: { type: 'c', default: 'getEntryContentKey' },
            entryId: { type: 's' },
            createIfMissing: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    PlayReadyDrmGetEntryContentKeyAction.prototype.entryId;
    /** @type {?} */
    PlayReadyDrmGetEntryContentKeyAction.prototype.createIfMissing;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheVJlYWR5RHJtR2V0RW50cnlDb250ZW50S2V5QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9QbGF5UmVhZHlEcm1HZXRFbnRyeUNvbnRlbnRLZXlBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTFFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFLE1BQU0sMkNBQTRDLFNBQVEsY0FBMEM7Ozs7SUFLaEcsWUFBWSxJQUErQztRQUV2RCxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsNEJBQTRCLEVBQUUsbUJBQW1CLEVBQUcsMEJBQTBCLEVBQUcsQ0FBQyxDQUFDO1FBQ3RJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLGVBQWUsS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztLQUNqRjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDeEUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7WUFDdkQsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3ZCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUGxheVJlYWR5Q29udGVudEtleSB9IGZyb20gJy4vS2FsdHVyYVBsYXlSZWFkeUNvbnRlbnRLZXknO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBQbGF5UmVhZHlEcm1HZXRFbnRyeUNvbnRlbnRLZXlBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0Y3JlYXRlSWZNaXNzaW5nPyA6IGJvb2xlYW47XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdwbGF5UmVhZHlEcm0nIGFjdGlvbiAnZ2V0RW50cnlDb250ZW50S2V5Jy5cbiAqXG4gKiBVc2FnZTogR2V0IGNvbnRlbnQga2V5IGFuZCBrZXkgaWQgZm9yIHRoZSBnaXZlbiBlbnRyeVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFQbGF5UmVhZHlDb250ZW50S2V5XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBQbGF5UmVhZHlEcm1HZXRFbnRyeUNvbnRlbnRLZXlBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhUGxheVJlYWR5Q29udGVudEtleT4ge1xuXG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0Y3JlYXRlSWZNaXNzaW5nIDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBQbGF5UmVhZHlEcm1HZXRFbnRyeUNvbnRlbnRLZXlBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFQbGF5UmVhZHlDb250ZW50S2V5JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFQbGF5UmVhZHlDb250ZW50S2V5ICB9KTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNyZWF0ZUlmTWlzc2luZyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuY3JlYXRlSWZNaXNzaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAncGxheXJlYWR5X3BsYXlyZWFkeWRybScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2dldEVudHJ5Q29udGVudEtleScgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdGVJZk1pc3NpbmcgOiB7IHR5cGUgOiAnYicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19