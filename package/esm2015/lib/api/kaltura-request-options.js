/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaBaseResponseProfile } from './types/KalturaBaseResponseProfile';
import { KalturaObjectBase } from './kaltura-object-base';
import { InjectionToken } from '@angular/core';
/** @type {?} */
export const KALTURA_CLIENT_DEFAULT_REQUEST_OPTIONS = new InjectionToken('kaltura client default request options');
/**
 * @record
 */
export function KalturaRequestOptionsArgs() { }
/** @type {?|undefined} */
KalturaRequestOptionsArgs.prototype.acceptedTypes;
/** @type {?|undefined} */
KalturaRequestOptionsArgs.prototype.partnerId;
/** @type {?|undefined} */
KalturaRequestOptionsArgs.prototype.ks;
/** @type {?|undefined} */
KalturaRequestOptionsArgs.prototype.responseProfile;
export class KalturaRequestOptions extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.acceptedTypes === 'undefined')
            this.acceptedTypes = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            partnerId: { type: 'n' },
            ks: { type: 's' },
            responseProfile: { type: 'o', subTypeConstructor: KalturaBaseResponseProfile, subType: 'KalturaBaseResponseProfile' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaRequestOptions.prototype.acceptedTypes;
    /** @type {?} */
    KalturaRequestOptions.prototype.partnerId;
    /** @type {?} */
    KalturaRequestOptions.prototype.ks;
    /** @type {?} */
    KalturaRequestOptions.prototype.responseProfile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FsdHVyYS1yZXF1ZXN0LW9wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL2thbHR1cmEtcmVxdWVzdC1vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sdUJBQXVCLENBQUM7QUFDakYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFL0MsYUFBYSxzQ0FBc0MsR0FBOEMsSUFBSSxjQUFjLENBQUMsd0NBQXdDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVU5SixNQUFNLDRCQUE2QixTQUFRLGlCQUFpQjs7OztJQU94RCxZQUFZLElBQWlDO1FBRXpDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLGFBQWEsS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztLQUMxRTs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QyxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsMEJBQTBCLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1NBQ2hILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCYXNlUmVzcG9uc2VQcm9maWxlIH0gZnJvbSAnLi90eXBlcy9LYWx0dXJhQmFzZVJlc3BvbnNlUHJvZmlsZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBLQUxUVVJBX0NMSUVOVF9ERUZBVUxUX1JFUVVFU1RfT1BUSU9OUzogSW5qZWN0aW9uVG9rZW48S2FsdHVyYVJlcXVlc3RPcHRpb25zQXJncz4gPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ2thbHR1cmEgY2xpZW50IGRlZmF1bHQgcmVxdWVzdCBvcHRpb25zJyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVJlcXVlc3RPcHRpb25zQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGFjY2VwdGVkVHlwZXM/IDoge25ldyguLi5hcmdzOiBhbnlbXSkgOiBLYWx0dXJhT2JqZWN0QmFzZX1bXTtcblx0cGFydG5lcklkPyA6IG51bWJlcjtcblx0a3M/IDogc3RyaW5nO1xuXHRyZXNwb25zZVByb2ZpbGU/IDogS2FsdHVyYUJhc2VSZXNwb25zZVByb2ZpbGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFSZXF1ZXN0T3B0aW9ucyBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIGFjY2VwdGVkVHlwZXMgOiB7bmV3KC4uLmFyZ3M6IGFueVtdKSA6IEthbHR1cmFPYmplY3RCYXNlfVtdO1xuXHRwYXJ0bmVySWQgOiBudW1iZXI7XG5cdGtzIDogc3RyaW5nO1xuXHRyZXNwb25zZVByb2ZpbGUgOiBLYWx0dXJhQmFzZVJlc3BvbnNlUHJvZmlsZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVJlcXVlc3RPcHRpb25zQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuYWNjZXB0ZWRUeXBlcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuYWNjZXB0ZWRUeXBlcyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0a3MgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVzcG9uc2VQcm9maWxlIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmFzZVJlc3BvbnNlUHJvZmlsZSwgc3ViVHlwZSA6ICdLYWx0dXJhQmFzZVJlc3BvbnNlUHJvZmlsZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbiJdfQ==