/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaVirusScanProfile } from './KalturaVirusScanProfile';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function VirusScanProfileAddActionArgs() { }
/** @type {?} */
VirusScanProfileAddActionArgs.prototype.virusScanProfile;
/**
 * Build request payload for service 'virusScanProfile' action 'add'.
 *
 * Usage: Allows you to add an virus scan profile object and virus scan profile content associated with Kaltura object
 *
 * Server response type:         KalturaVirusScanProfile
 * Server failure response type: KalturaAPIException
 */
export class VirusScanProfileAddAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaVirusScanProfile', responseConstructor: KalturaVirusScanProfile });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'virusscan_virusscanprofile' },
            action: { type: 'c', default: 'add' },
            virusScanProfile: { type: 'o', subTypeConstructor: KalturaVirusScanProfile, subType: 'KalturaVirusScanProfile' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    VirusScanProfileAddAction.prototype.virusScanProfile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlydXNTY2FuUHJvZmlsZUFkZEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvVmlydXNTY2FuUHJvZmlsZUFkZEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFcEUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBY3hFLE1BQU0sZ0NBQWlDLFNBQVEsY0FBdUM7Ozs7SUFJbEYsWUFBWSxJQUFvQztRQUU1QyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcseUJBQXlCLEVBQUUsbUJBQW1CLEVBQUcsdUJBQXVCLEVBQUcsQ0FBQyxDQUFDO0tBQ25JOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUM1RSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxLQUFLLEVBQUU7WUFDeEMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHVCQUF1QixFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtTQUMzRyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVZpcnVzU2NhblByb2ZpbGUgfSBmcm9tICcuL0thbHR1cmFWaXJ1c1NjYW5Qcm9maWxlJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlydXNTY2FuUHJvZmlsZUFkZEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICB2aXJ1c1NjYW5Qcm9maWxlIDogS2FsdHVyYVZpcnVzU2NhblByb2ZpbGU7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICd2aXJ1c1NjYW5Qcm9maWxlJyBhY3Rpb24gJ2FkZCcuXG4gKlxuICogVXNhZ2U6IEFsbG93cyB5b3UgdG8gYWRkIGFuIHZpcnVzIHNjYW4gcHJvZmlsZSBvYmplY3QgYW5kIHZpcnVzIHNjYW4gcHJvZmlsZSBjb250ZW50IGFzc29jaWF0ZWQgd2l0aCBLYWx0dXJhIG9iamVjdFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFWaXJ1c1NjYW5Qcm9maWxlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBWaXJ1c1NjYW5Qcm9maWxlQWRkQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVZpcnVzU2NhblByb2ZpbGU+IHtcblxuICAgIHZpcnVzU2NhblByb2ZpbGUgOiBLYWx0dXJhVmlydXNTY2FuUHJvZmlsZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBWaXJ1c1NjYW5Qcm9maWxlQWRkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhVmlydXNTY2FuUHJvZmlsZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhVmlydXNTY2FuUHJvZmlsZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndmlydXNzY2FuX3ZpcnVzc2NhbnByb2ZpbGUnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhZGQnIH0sXG5cdFx0XHRcdHZpcnVzU2NhblByb2ZpbGUgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFWaXJ1c1NjYW5Qcm9maWxlLCBzdWJUeXBlIDogJ0thbHR1cmFWaXJ1c1NjYW5Qcm9maWxlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=